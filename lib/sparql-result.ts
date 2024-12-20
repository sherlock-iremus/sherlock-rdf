import { Languages, Type } from "./rdf-literal"
import { PrefixedUri } from "./rdf-prefixes"

export class SparqlQueryResultObject {
    head: SparqlQueryResultObject_Head
    results: SparqlQueryResultObject_Results

    constructor() {
        this.head = new SparqlQueryResultObject_Head()
        this.results = new SparqlQueryResultObject_Results()
    }
}

export class SparqlQueryResultObject_Head {
    vars: string[]

    constructor() {
        this.vars = []
    }
}

export class SparqlQueryResultObject_Results {
    bindings: SparqlQueryResultObject_Binding[]

    constructor() {
        this.bindings = []
    }
}

export class SparqlQueryResultObject_Binding {
    [variable: string]: SparqlQueryResultObject_Variable
}

export class SparqlQueryResultObject_Variable {
    'xml:lang': Languages
    type: Type
    value: string
    prefixedUri: PrefixedUri

    constructor() {
        this["xml:lang"] = Languages.NONE
        this.type = Type.uri
        this.value = ''
        this.prefixedUri = new PrefixedUri('', '')
    }
}