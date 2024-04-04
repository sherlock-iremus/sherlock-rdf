import { expect, test } from 'vitest'

import { getPrefixedUri } from './rdf-prefixes'

test('Injecting JSON SPARQL Result Object to TypeScript objects', () => {
    const prefixedUri = getPrefixedUri('http://www.cidoc-crm.org/cidoc-crm/P67_refers_to')
    expect(prefixedUri.prefix).toBe('crm')
    expect(prefixedUri.localPart).toBe('P67_refers_to')
})