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

  before(() => {
    return axios.delete("http://localhost:8080/books?_cleanup=true").catch((e) => e)
  })

  afterEach(() => {
    return axios.delete("http://localhost:8080/books?_cleanup=true").catch(e => e);
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
    gotoApp()
    cy.get("div.book-item").contains("View Details").eq(0).click();
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




})