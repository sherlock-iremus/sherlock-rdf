import { Languages, XSDTypes } from './rdf-literal';
import { OntologyProperty } from './ontology';
export declare class Resource {
    private _pog;
    private _uri;
    constructor(uri?: string);
    getValues(p: OntologyProperty): Array<OG> | undefined;
    addPOG(p: OntologyProperty, og: OG): void;
    get uri(): string;
    get pog(): Map<OntologyProperty, Array<OG>>;
}
export declare class Literal {
    private _lang;
    private _value;
    private _type;
    constructor(lang: Languages, type: XSDTypes, value: any);
    get lang(): Languages;
    get type(): XSDTypes;
    get value(): Languages;
    toString: () => string;
}
export declare class Graph {
    private _uri;
    constructor(uri: string);
    get uri(): string;
}
export declare class OG {
    private _literal;
    private _resource;
    private _graph;
    constructor(l: Literal | undefined, r: Resource | undefined, g?: Graph | undefined);
    get literal(): Literal | undefined;
    get resource(): Resource | undefined;
    get graph(): Graph | undefined;
}
