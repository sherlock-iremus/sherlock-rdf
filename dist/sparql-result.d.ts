import { Languages, Type } from "./rdf-literal";
export declare class SparqlResultObject {
    head: SparqlResultObject_Head;
    results: SparqlResultObject_Results;
    constructor();
}
export declare class SparqlResultObject_Head {
    vars: string[];
    constructor();
}
export declare class SparqlResultObject_Results {
    bindings: SparqlResultObject_Binding[];
    constructor();
}
export declare class SparqlResultObject_Binding {
    [variable: string]: SparqlResultObject_Variable;
}
export declare class SparqlResultObject_Variable {
    lang: Languages;
    type: Type;
    value: string;
    constructor();
}
