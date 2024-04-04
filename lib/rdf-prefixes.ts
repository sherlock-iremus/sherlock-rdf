export const BIBO_BASE: string = "http://purl.org/ontology/bibo/"
export const LRMOO_BASE: string = "http://www.cidoc-crm.org/lrmoo/"
export const CRM_BASE: string = "http://www.cidoc-crm.org/cidoc-crm/"
export const CRMDIG_BASE: string = "http://www.ics.forth.gr/isl/CRMdig/"
export const DC_BASE: string = "http://purl.org/dc/elements/1.1/"
export const DCTERMS_BASE: string = "http://purl.org/dc/terms/"
export const FOAF_BASE: string = "http://xmlns.com/foaf/0.1/"
export const HEMEF_BASE: string = "http://data-iremus.huma-num.fr/ns/hemef#"
export const DATA_IREMUS_FILES_BASE: string = "http://data-iremus.huma-num.fr/files/"
export const DATA_IREMUS_ID_BASE: string = "http://data-iremus.huma-num.fr/id/"
export const IREMUS_RESOURCE_BASE: string = "http://data-iremus.huma-num.fr/id/"
export const IREMUS_NS_BASE: string = "http://data-iremus.huma-num.fr/ns/"
export const IREMUS_GRAPH_BASE: string = "http://data-iremus.huma-num.fr/graph/"
export const MUSRAD30_BASE: string = "http://data-iremus.huma-num.fr/ns/musrad30#"
export const OWL_BASE: string = "http://www.w3.org/2002/07/owl#"
export const RDF_BASE: string = "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
export const RDFS_BASE: string = "http://www.w3.org/2000/01/rdf-schema#"
export const SCHEMAORG_BASE: string = "http://schema.org/"
export const SKOS_BASE: string = "http://www.w3.org/2004/02/skos/core#"

export const RDF_PREFIXES = new Map<string, string>([
    [CRM_BASE, "crm"],
    [CRMDIG_BASE, "crmdig"],
    [BIBO_BASE, "bibo"],
    [DC_BASE, "dc"],
    [DCTERMS_BASE, "dcterms"],
    [FOAF_BASE, "foaf"],
    [HEMEF_BASE, "hemef"],
    [IREMUS_GRAPH_BASE, ""],
    [IREMUS_RESOURCE_BASE, ""],
    [IREMUS_NS_BASE, ""],
    [LRMOO_BASE, "lrmoo"],
    [MUSRAD30_BASE, "musrad30"],
    [OWL_BASE, "owl"],
    [RDF_BASE, "rdf"],
    [RDFS_BASE, "rdfs"],
    [SCHEMAORG_BASE, "schema"],
    [SKOS_BASE, "skos"],
])

export const PRIORITIZED_RDF_PREFIXES = Object.entries(RDF_PREFIXES).sort(
    (a, b): number => { return a[0].length < b[0].length ? 1 : -1 }
)

export class PrefixedUri {
    prefix: string
    localPart: string

    constructor(prefix: string, localPart: string) {
        this.prefix = prefix
        this.localPart = localPart
    }
}

export const getPrefixedUri = (uri: string): PrefixedUri => {
    for (const base_uri of RDF_PREFIXES.keys()) {
        if (uri.startsWith(base_uri)) {
            return new PrefixedUri(RDF_PREFIXES.get(base_uri) as string, uri.replace(base_uri, ''))
        }
    }
    return new PrefixedUri('', uri)
}