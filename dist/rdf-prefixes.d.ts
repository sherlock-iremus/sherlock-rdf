export declare const BIBO_BASE: string;
export declare const LRMOO_BASE: string;
export declare const CRM_BASE: string;
export declare const CRMDIG_BASE: string;
export declare const DC_BASE: string;
export declare const DCTERMS_BASE: string;
export declare const FOAF_BASE: string;
export declare const HEMEF_BASE: string;
export declare const DATA_IREMUS_FILES_BASE: string;
export declare const DATA_IREMUS_ID_BASE: string;
export declare const IREMUS_RESOURCE_BASE: string;
export declare const IREMUS_NS_BASE: string;
export declare const IREMUS_GRAPH_BASE: string;
export declare const MUSRAD30_BASE: string;
export declare const OWL_BASE: string;
export declare const RDF_BASE: string;
export declare const RDFS_BASE: string;
export declare const SCHEMAORG_BASE: string;
export declare const SKOS_BASE: string;
export declare const RDF_PREFIXES: Map<string, string>;
export declare const PRIORITIZED_RDF_PREFIXES: [string, any][];
export declare class PrefixedUri {
    prefix: string;
    localPart: string;
    constructor(prefix: string, localPart: string);
}
export declare const getPrefixedUri: (uri: string) => PrefixedUri;
