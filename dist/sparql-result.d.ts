import { Languages, Type } from './rdf-literal';
import { PrefixedUri } from './rdf-prefixes';
export declare class SparqlQueryResultObject {
    head: SparqlQueryResultObject_Head;
    results: SparqlQueryResultObject_Results;
    constructor();
}
export declare class SparqlQueryResultObject_Head {
    vars: string[];
    constructor();
}
export declare class SparqlQueryResultObject_Results {
    bindings: SparqlQueryResultObject_Binding[];
    constructor();
}
export declare class SparqlQueryResultObject_Binding {
    [variable: string]: SparqlQueryResultObject_Variable;
}
export declare class GroupedSparqlQueryResultObject_Binding {
    [variable: string]: SparqlQueryResultObject_Variable | SparqlQueryResultObject_Variable[];
}
export declare class SparqlQueryResultObject_Variable {
    'xml:lang': Languages;
    type: Type;
    value: string;
    prefixedUri: PrefixedUri;
    constructor();
}
export declare function makeGroupedBindings(bindings: SparqlQueryResultObject_Binding[], groupByVar: string, varToGroup: string[]): GroupedSparqlQueryResultObject_Binding[];
