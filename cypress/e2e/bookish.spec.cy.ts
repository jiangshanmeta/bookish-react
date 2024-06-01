import { Book } from './../../src/type';
import axios from "axios"

describe('Bookish Application', () => {

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
    cy.visit('http://localhost:3000/')
    cy.get("h2[data-test='heading']").contains("Bookish")
  })

  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/")
    cy.get("div[data-test='book-list']").should("exist")
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);

      const titles = [...books].map(book => book.querySelector("h2")?.innerHTML)

      expect(titles).to.deep.equal(["Refactoring", "Domain-driven design", "Building Microservices"])

    })

  })



})