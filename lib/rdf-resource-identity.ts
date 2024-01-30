import { CRM_BASE, DATA_IREMUS_ID_BASE, DC_BASE, DCTERMS_BASE, FOAF_BASE, RDF_BASE, RDF_PREFIXES, RDFS_BASE, SKOS_BASE } from "./rdf-prefixes";

export const LABEL_PREDICATES = [
    CRM_BASE + "P1_is_identified_by",
    DC_BASE + "title",
    DCTERMS_BASE + "title",
    FOAF_BASE + "familyName",
    FOAF_BASE + "firstName",
    FOAF_BASE + "givenName",
    FOAF_BASE + "name",
    RDFS_BASE + "label",
    SKOS_BASE + "prefLabel",
];

export const RESOURCE_IDENTITY_PREDICATES = [
    ...LABEL_PREDICATES,
    RDF_BASE + "type",
    DCTERMS_BASE + "creator",
    SKOS_BASE + "inScheme",
    RDFS_BASE + "subClassOf",
];

export const SHERLOCK_TYPE = {
    selection: DATA_IREMUS_ID_BASE + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
    analyticalEntity: DATA_IREMUS_ID_BASE + "6d72746a-9f28-4739-8786-c6415d53c56d",
    score: DATA_IREMUS_ID_BASE + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
    software: DATA_IREMUS_ID_BASE + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
    hexColorCode: DATA_IREMUS_ID_BASE + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
    emoji: DATA_IREMUS_ID_BASE + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
    orcidId: DATA_IREMUS_ID_BASE + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
    note: DATA_IREMUS_ID_BASE + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
    verticality: DATA_IREMUS_ID_BASE + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
    fondamentaleIdentification: DATA_IREMUS_ID_BASE + "003559fc-f033-4fc3-9c05-0d5f283123ed",
    orcidGeneratedName: DATA_IREMUS_ID_BASE + "73ea8d74-3526-4f6a-8830-dd369795650d"
}

export function computeIdentity(identity: any[]) {
    const label = identity.find((identity) => identity.label);
    return label ? label.label.value : "";
}

export function computeResourceLabel(resourceIri: string, identity: any[]) {
    return `${computeIdentity(identity)}   ${formatUri(resourceIri)}`;
}

export function formatUri(uri: string) {
    for (const [key, value] of Object.entries(RDF_PREFIXES)) {
        uri = uri.replace(key, value !== "" ? value + ":" : "");
    }
    return uri;
}