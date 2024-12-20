import { SparqlQueryResultObject } from './sparql-result';
export declare const querySparqlEndpoint: (query: string, sparqlEndpointUrl?: string) => Promise<SparqlQueryResultObject>;
export declare function bind(query: string, parameters: Array<string>): string;
