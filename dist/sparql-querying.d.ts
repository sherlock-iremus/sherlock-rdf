export declare const sparqlEndpoint: (query: string, sparqlEndpointUrl?: string) => Promise<Response>;
export declare function bind(query: string, parameters: Array<string>): string;
