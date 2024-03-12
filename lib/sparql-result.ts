import { Languages, Type } from "./rdf-literal"

export class SparqlResultObject {
    head: SparqlResultObject_Head
    results: SparqlResultObject_Results

    constructor() {
        this.head = new SparqlResultObject_Head()
        this.results = new SparqlResultObject_Results()
    }
}

export class SparqlResultObject_Head {
    vars: string[]

    constructor() {
        this.vars = []
    }
}

export class SparqlResultObject_Results {
    bindings: SparqlResultObject_Binding[]

    constructor() {
        this.bindings = []
    }
}

export class SparqlResultObject_Binding {
    [variable: string]: SparqlResultObject_Variable
}

export class SparqlResultObject_Variable {
    lang: Languages
    type: Type
    value: string

    constructor() {
        this.lang = Languages.NONE
        this.type = Type.uri
        this.value = ''
    }
}