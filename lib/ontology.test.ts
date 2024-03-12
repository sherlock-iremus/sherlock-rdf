import { expect, test } from 'vitest'
//TODO import { OG } from './resource'
import { Ontology, OntologyClass } from './ontology'

test('Injecting JSON SPARQL Result Object to TypeScript objects', () => {
    const anOntology = new Ontology('Test ontology')
    const anOntologyClass = new OntologyClass('http://argh', 'Test class', anOntology)
    //TODO const anOG = new OG(undefined, anOntologyClass)
    console.log(anOntologyClass)
    expect(7).toBe(7)
})