export const BIBO_BASE = "http://purl.org/ontology/bibo/"
export const LRMOO_BASE = "http://www.cidoc-crm.org/lrmoo/"
export const CRM_BASE = "http://www.cidoc-crm.org/cidoc-crm/"
export const CRMDIG_BASE = "http://www.ics.forth.gr/isl/CRMdig/"
export const DC_BASE = "http://purl.org/dc/elements/1.1/"
export const DCTERMS_BASE = "http://purl.org/dc/terms/"
export const FOAF_BASE = "http://xmlns.com/foaf/0.1/"
export const HEMEF_BASE = "http://data-iremus.huma-num.fr/ns/hemef#"
export const DATA_IREMUS_FILES_BASE = "http://data-iremus.huma-num.fr/files/"
export const DATA_IREMUS_ID_BASE = "http://data-iremus.huma-num.fr/id/"
export const IREMUS_RESOURCE_BASE = "http://data-iremus.huma-num.fr/id/"
export const IREMUS_NS_BASE = "http://data-iremus.huma-num.fr/ns/"
export const IREMUS_GRAPH_BASE = "http://data-iremus.huma-num.fr/graph/"
export const MUSRAD30_BASE = "http://data-iremus.huma-num.fr/ns/musrad30#"
export const OWL_BASE = "http://www.w3.org/2002/07/owl#"
export const RDF_BASE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
export const RDFS_BASE = "http://www.w3.org/2000/01/rdf-schema#"
export const SCHEMAORG_BASE = "http://schema.org/"
export const SKOS_BASE = "http://www.w3.org/2004/02/skos/core#"

export const RDF_PREFIXES = {
    [CRM_BASE]: "crm",
    [CRMDIG_BASE]: "crmdig",
    [BIBO_BASE]: "bibo",
    [DC_BASE]: "dc",
    [DCTERMS_BASE]: "dcterms",
    [FOAF_BASE]: "foaf",
    [HEMEF_BASE]: "hemef",
    [IREMUS_RESOURCE_BASE]: "",
    [IREMUS_NS_BASE]: "",
    [MUSRAD30_BASE]: "musrad30",
    [LRMOO_BASE]: "lrmoo",
    [OWL_BASE]: "owl",
    [RDF_BASE]: "rdf",
    [RDFS_BASE]: "rdfs",
    [SCHEMAORG_BASE]: "schema",
    [SKOS_BASE]: "skos",
    [IREMUS_GRAPH_BASE]: "",
}

export const PRIORITIZED_RDF_PREFIXES = Object.entries(RDF_PREFIXES).sort(
    (a, b): number => { return a[0].length < b[0].length ? 1 : -1 }
)