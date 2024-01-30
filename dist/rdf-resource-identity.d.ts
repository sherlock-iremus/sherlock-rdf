export declare const LABEL_PREDICATES: string[];
export declare const RESOURCE_IDENTITY_PREDICATES: string[];
export declare const SHERLOCK_TYPE: {
    selection: string;
    analyticalEntity: string;
    score: string;
    software: string;
    hexColorCode: string;
    emoji: string;
    orcidId: string;
    note: string;
    verticality: string;
    fondamentaleIdentification: string;
    orcidGeneratedName: string;
};
export declare function computeIdentity(identity: any[]): any;
export declare function computeResourceLabel(resourceIri: string, identity: any[]): string;
export declare function formatUri(uri: string): string;
