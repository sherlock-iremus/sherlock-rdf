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

// POSSIBLE KEYS:
//   p
//   r
//   label
//   property
//   value
//   r_type
//   r_type_type
//   r_type_type_label
//   g
export class SparqlQueryResultObject_Binding {
    [variable: string]: SparqlQueryResultObject_Variable
}

export class GroupedSparqlQueryResultObject_Binding {
    [variable: string]: SparqlQueryResultObject_Variable | SparqlQueryResultObject_Variable[]
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

export function makeGroupedBindings(bindings: SparqlQueryResultObject_Binding[], groupByVar: string, varToGroup: string[]): GroupedSparqlQueryResultObject_Binding[] {
    const res: GroupedSparqlQueryResultObject_Binding[] = []
    const groups: { [key: string]: SparqlQueryResultObject_Binding[] } = {}

    // 1 - Group bindings by groupByVar
    for (const binding of bindings) {
        if (!(groupByVar in binding)) continue
        for (const _ of varToGroup) {
            if (!(_ in binding)) continue
        }

        if (!(binding[groupByVar].value in groups)) groups[binding[groupByVar].value] = []
        groups[binding[groupByVar].value].push(binding)
    }

    // 2 - Merge varToGroup
    for (const bindings of Object.values(groups)) {
        const groupedBinding: GroupedSparqlQueryResultObject_Binding = {}
        for (const binding of bindings) {
            for (const sparqlVar in binding) {
                if (!varToGroup.includes(sparqlVar)) {
                    groupedBinding[sparqlVar] = binding[sparqlVar]
                }
                else {
                    if (!(sparqlVar in groupedBinding)) groupedBinding[sparqlVar] = [];
                    (groupedBinding[sparqlVar] as SparqlQueryResultObject_Variable[]).push(binding[sparqlVar])
                }
            }
        }
        res.push(groupedBinding)
    }

    return res
}