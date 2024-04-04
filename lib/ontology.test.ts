import { expect, test } from 'vitest'
import { Ontology, OntologyClass } from './ontology'

test('Injecting JSON SPARQL Result Object to TypeScript objects', () => {
    const anOntology = new Ontology('Test ontology')
    const anOntologyClass = new OntologyClass('http://argh', 'Test class', anOntology)

    expect(anOntologyClass.uri).toBe('http://argh')
    expect(anOntologyClass.name).toBe('Test class')
    expect(anOntologyClass.ontology).toBe(anOntology)
    expect(anOntology.name).toBe('Test ontology')
})