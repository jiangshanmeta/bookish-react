import { Book } from './../../src/type';
import axios from "axios"

describe('Bookish Application', () => {

  const gotoApp = () => {
    cy.visit("http://localhost:3000/")
  }

  const checkBookListWith = (expections: string[]) => {
    cy.get("div[data-test='book-list']").should("exist")
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(expections.length);

      const titles = [...books].map(item => item.querySelector("h2")?.innerHTML)

      expect(titles).to.deep.equal(expections);

    });
  }

  const gotoNthBookInTheList = (index: number) => {
    gotoApp()
    cy.get("div.book-item").contains("View Details").eq(index).click();
  }

  before(() => {
    return axios.delete("http://localhost:8080/books?_cleanup=true").catch((e) => e)
  })

  afterEach(() => {
    axios.delete("http://localhost:8080/books?_cleanup=true").catch(e => e);

    cy.request("DELETE", "http://localhost:8080/books/1/reviews")
  })

  beforeEach(() => {
    const books: Book[] = [
      {
        name: "Refactoring",
        id: 1,
      },
      {
        name: "Domain-driven design",
        id: 2
      },
      {
        name: "Building Microservices",
        id: 3,
      }
    ]

    return books.map(item => {
      return axios.post("http://localhost:8080/books", item, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })

  })

  it('Visit the bookish', () => {
    gotoApp()
    cy.get("h2[data-test='heading']").contains("Bookish")
  })

  it("Shows a book list", () => {

    gotoApp()
    checkBookListWith([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices"
    ])

  })

  it("Goes to the detail page", () => {


    gotoNthBookInTheList(0)
    cy.url().should('include', "/book/1")

    cy.get("h2.book-title").contains("Refactoring")

  })

  it("Searches for title", () => {
    gotoApp()

    checkBookListWith([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices"
    ])

    cy.get("[data-test='search'] input").type("design");

    checkBookListWith([
      "Domain-driven design"
    ])
  })

  const composeReview = (name: string, content: string) => {
    cy.get("input[name='name']").type(name)
    cy.get("input[name='content']").type(content)
    cy.get("button[name='submit']").click()
  }

  const checkReview = () => {
    cy.get("[data-testid='review']").should("have.length", 1);
  }


  it("Write a review for a book", () => {
    gotoNthBookInTheList(0)

    composeReview("Juntao Qiu", "Excellent")


    checkReview()
  });




})