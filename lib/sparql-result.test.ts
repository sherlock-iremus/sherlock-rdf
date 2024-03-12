import { expect, test } from 'vitest'
import { SparqlQueryResultObject } from './sparql-result'

test('Injecting JSON SPARQL Result Object to TypeScript objects', () => {
  const sro: SparqlQueryResultObject = JSON.parse(SPARQL_EXAMPLE_JSON_RESULT_OBJECT)
  expect(sro.head.vars).toEqual(["book", "title"])
  expect(sro.results.bindings.length).toBe(7)
})

const SPARQL_EXAMPLE_JSON_RESULT_OBJECT = `
{
    "head": { 
        "vars": [ "book", "title" ]
    },
    "results": { 
      "bindings": [
        {
          "book": { "type": "uri", "value": "http://example.org/book/book6" },
          "title": { "type": "literal", "value": "Harry Potter and the Half-Blood Prince" }
        },
        {
          "book": { "type": "uri", "value": "http://example.org/book/book7" },
          "title": { "type": "literal", "value": "Harry Potter and the Deathly Hallows" }
        },
        {
          "book": { "type": "uri", "value": "http://example.org/book/book5" },
          "title": { "type": "literal", "value": "Harry Potter and the Order of the Phoenix" }
        },
        {
          "book": { "type": "uri", "value": "http://example.org/book/book4" },
          "title": { "type": "literal", "value": "Harry Potter and the Goblet of Fire" }
        },
        {
          "book": { "type": "uri", "value": "http://example.org/book/book2" },
          "title": { "type": "literal", "value": "Harry Potter and the Chamber of Secrets" }
        },
        {
          "book": { "type": "uri", "value": "http://example.org/book/book3" },
          "title": { "type": "literal", "value": "Harry Potter and the Prisoner Of Azkaban" }
        },
        {
          "book": { "type": "uri", "value": "http://example.org/book/book1" },
          "title": { "type": "literal", "value": "Harry Potter and the Philosopher's Stone" }
        }
      ]
    }
  }
`