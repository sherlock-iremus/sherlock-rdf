import { Languages } from './rdf-literal';
import { Resource } from './resource';

export declare class Ontology {
    static void: Ontology;
    private _classesRegistry;
    private _name;
    private _classes;
    private _properties;
    private _propertiesRegistry;
    constructor(name: string);
    addClass(c: OntologyClass): void;
    addProperty(p: OntologyProperty): void;
    get name(): string;
    get classes(): OntologyClass[];
    get properties(): OntologyProperty[];
    get classesRegistry(): Map<string, OntologyClass>;
    get propertiesRegistry(): Map<string, OntologyProperty>;
    sortAll(): void;
}
export declare abstract class OntologyStuff extends Resource {
    static label: string;
    private _comment;
    protected _intCodeForSorting: number;
    private _label;
    private _name;
    private _ontology;
    constructor(uri: string, name: string, ontology: Ontology);
    get comment(): Map<Languages, string>;
    set comment(comment: Map<Languages, string>);
    get intCodeForSorting(): number;
    set intCodeForSorting(intCodeForSorting: number);
    set label(label: Map<Languages, string>);
    get name(): string;
    get ontology(): Ontology;
    getComment(l: Languages): string | undefined;
    getLabel(l: Languages): string | undefined;
}
export declare class OntologyClass extends OntologyStuff {
    static void: OntologyClass;
    private _subClassOf;
    constructor(uri: string, name: string, ontology: Ontology);
    addSubClassOf(subClassOf: OntologyClass): void;
}
export declare class OntologyProperty extends OntologyStuff {
    static void: OntologyProperty;
    private _domain;
    private _inverseOf;
    private _range;
    private _subPropertyOf;
    constructor(uri: string, name: string, ontology: Ontology);
    get domain(): OntologyClass;
    set domain(domain: OntologyClass);
    get inverseOf(): OntologyProperty;
    set inverseOf(inverseOf: OntologyProperty);
    get range(): OntologyClass;
    set range(range: OntologyClass);
    addSubPropertyOf(subPropertyOf: OntologyProperty): void;
}
