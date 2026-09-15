//#region lib/rdf-prefixes.ts
var e = "http://purl.org/ontology/bibo/", t = "http://iflastandards.info/ns/lrm/lrmoo/", n = "http://www.cidoc-crm.org/cidoc-crm/", r = "http://www.ics.forth.gr/isl/CRMdig/", i = "http://dbpedia.org/resource/", a = "http://purl.org/dc/elements/1.1/", o = "http://purl.org/dc/terms/", s = "http://xmlns.com/foaf/0.1/", c = "http://data-iremus.huma-num.fr/ns/hemef#", l = "http://data-iremus.huma-num.fr/files/", u = "http://data-iremus.huma-num.fr/id/", d = "http://data-iremus.huma-num.fr/ns/sherlock#", f = "http://data-iremus.huma-num.fr/graph/", p = "http://www.mimo-db.eu/", m = "http://data-iremus.huma-num.fr/ns/musrad30#", h = "http://www.w3.org/2002/07/owl#", g = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", _ = "http://www.w3.org/2000/01/rdf-schema#", v = "http://schema.org/", y = "http://www.w3.org/2004/02/skos/core#", b = u + "f005e36a-4690-4c83-9791-2927f5f823e0", x = u + "12c5795a-d5fd-4730-9c84-833714b6aaef", ee = u + "f284ed72-139d-4662-9dce-208bf493a45d", S = u + "574ffe9e-525c-42f2-8188-329ba3c7231d", C = u + "518e72ac-3471-4483-b633-e07aecfff49c", w = /* @__PURE__ */ new Map([
	[n, "crm"],
	[r, "crmdig"],
	[e, "bibo"],
	[i, "dbpedia"],
	[a, "dc"],
	[o, "dcterms"],
	[s, "foaf"],
	[c, "hemef"],
	[f, "iremus-graph"],
	[u, "iremus-data"],
	[d, "iremus-ns"],
	[t, "lrmoo"],
	[p, "mimo"],
	[m, "musrad30"],
	[h, "owl"],
	[g, "rdf"],
	[_, "rdfs"],
	[v, "schema"],
	[y, "skos"]
]), T = Object.entries(w).sort((e, t) => e[0].length < t[0].length ? 1 : -1), E = class {
	prefix;
	localPart;
	constructor(e, t) {
		this.prefix = e, this.localPart = t;
	}
	toString() {
		return this.prefix + ":" + this.localPart;
	}
};
function D(e) {
	for (let t of w.keys()) if (e.startsWith(t)) return new E(w.get(t), e.replace(t, ""));
	return new E("", e);
}
function O(e) {
	return e.replace("http://data-iremus.huma-num.fr/graph/", "");
}
function k(e, t) {
	return "p" in e && !("p" in t) ? -1 : !("p" in e) && "p" in t ? 1 : !("p" in e) && !("p" in t) ? 0 : e.p.value < t.p.value ? -1 : +(e.p.value > t.p.value);
}
//#endregion
//#region lib/cidoc-crm.ts
function A(e) {
	return e.startsWith("http://www.cidoc-crm.org/cidoc-crm/") || e.startsWith("http://www.ics.forth.gr/isl/CRMdig/") || e.startsWith("http://iflastandards.info/ns/lrm/lrmoo/") ? e.split("/").slice(-1)[0].split("_")[0] : null;
}
//#endregion
//#region lib/resource.ts
var j = class {
	_pog;
	_uri;
	constructor(e = "") {
		this._uri = e, this._pog = /* @__PURE__ */ new Map();
	}
	getValues(e) {
		return this._pog.get(e);
	}
	addPOG(e, t) {
		this._pog.has(e) ? this._pog.get(e)?.push(t) : this._pog.set(e, [t]);
	}
	get uri() {
		return this._uri;
	}
	get pog() {
		return this._pog;
	}
}, te = class {
	_lang;
	_value;
	_type;
	constructor(e, t, n) {
		this._lang = e, this._type = t, this._value = n;
	}
	get lang() {
		return this._lang;
	}
	get type() {
		return this._type;
	}
	get value() {
		return this._value;
	}
	toString = () => `${this._value}@${this._lang}`;
}, M = class {
	_uri;
	constructor(e) {
		this._uri = e;
	}
	get uri() {
		return this._uri;
	}
}, N = class {
	_literal;
	_resource;
	_graph;
	constructor(e, t, n = void 0) {
		this._literal = e, this._resource = t, this._graph = n;
	}
	get literal() {
		return this._literal;
	}
	get resource() {
		return this._resource;
	}
	get graph() {
		return this._graph;
	}
}, P = class e {
	static void = new e("");
	_classesRegistry = /* @__PURE__ */ new Map();
	_name;
	_classes;
	_properties;
	_propertiesRegistry = /* @__PURE__ */ new Map();
	constructor(e) {
		this._name = e, this._classes = [], this._properties = [];
	}
	addClass(e) {
		this._classes.push(e), this._classes = this._classes.sort(), this._classesRegistry.set(e.uri, e);
	}
	addProperty(e) {
		this._properties.push(e), this._properties = this._properties.sort(), this._propertiesRegistry.set(e.uri, e);
	}
	get name() {
		return this._name;
	}
	get classes() {
		return this._classes;
	}
	get properties() {
		return this._properties;
	}
	get classesRegistry() {
		return this._classesRegistry;
	}
	get propertiesRegistry() {
		return this._propertiesRegistry;
	}
	sortAll() {
		this._classes = this._classes.sort((e, t) => e.intCodeForSorting - t.intCodeForSorting), this._properties = this._properties.sort((e, t) => e.intCodeForSorting - t.intCodeForSorting);
	}
}, F = class extends j {
	static label = "";
	_comment;
	_intCodeForSorting;
	_label;
	_name;
	_ontology;
	constructor(e, t, n) {
		super(e), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = t, this._ontology = n;
	}
	get comment() {
		return this._comment;
	}
	set comment(e) {
		this._comment = e;
	}
	get intCodeForSorting() {
		return this._intCodeForSorting;
	}
	set intCodeForSorting(e) {
		this._intCodeForSorting = e;
	}
	set label(e) {
		this._label = e;
	}
	get name() {
		return this._name;
	}
	get ontology() {
		return this._ontology;
	}
	getComment(e) {
		return this._comment.get(e);
	}
	getLabel(e) {
		return this._label.get(e);
	}
}, I = class e extends F {
	static void = new e("", "", P.void);
	_subClassOf;
	constructor(e, t, n) {
		super(e, t, n), this._subClassOf = [];
	}
	addSubClassOf(e) {
		this._subClassOf.push(e);
	}
}, L = class e extends F {
	static void = new e("", "", P.void);
	_domain = I.void;
	_inverseOf = e.void;
	_range = I.void;
	_subPropertyOf;
	constructor(e, t, n) {
		super(e, t, n), this._subPropertyOf = [];
	}
	get domain() {
		return this._domain;
	}
	set domain(e) {
		this._domain = e;
	}
	get inverseOf() {
		return this._inverseOf;
	}
	set inverseOf(e) {
		this._inverseOf = e;
	}
	get range() {
		return this._range;
	}
	set range(e) {
		this._range = e;
	}
	addSubPropertyOf(e) {
		this._subPropertyOf.push(e);
	}
}, R = /* @__PURE__ */ function(e) {
	return e.literal = "literal", e.uri = "uri", e;
}({}), z = /* @__PURE__ */ function(e) {
	return e.de = "🇩🇪", e.en = "🇬🇧", e.es = "🇪🇸", e.fr = "🇫🇷", e.it = "🇮🇹", e;
}({}), B = /* @__PURE__ */ function(e) {
	return e.NONE = "", e.DE = "de", e.EL = "el", e.EN = "en", e.ES = "es", e.FR = "fr", e.IT = "it", e.PT = "pt", e.RU = "ru", e.ZH = "zh", e;
}({}), V = [
	"fr",
	"en",
	"it",
	"de"
], H = /* @__PURE__ */ function(e) {
	return e.anyURI = "anyURI", e.base64Binary = "base64Binary", e.boolean = "boolean", e.date = "date", e.dateTime = "dateTime", e.decimal = "decimal", e.double = "double", e.duration = "duration", e.float = "float", e.hexBinary = "hexBinary", e.gDay = "gDay", e.gMonth = "gMonth", e.gMonthDay = "gMonthDay", e.gYear = "gYear", e.gYearMonth = "gYearMonth", e.NOTATION = "NOTATION", e.QName = "QName", e.string = "string", e.time = "time", e;
}({}), U = [
	n + "P1_is_identified_by",
	a + "title",
	o + "title",
	s + "familyName",
	s + "firstName",
	s + "givenName",
	s + "name",
	_ + "label",
	y + "prefLabel"
], W = [
	...U,
	n + "P102_has_title",
	n + "P48_has_preferred_identifier",
	n + "altLabel"
], G = [
	...W,
	g + "type",
	o + "creator",
	y + "inScheme",
	_ + "subClassOf"
], K = {
	selection: u + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
	analyticalEntity: u + "6d72746a-9f28-4739-8786-c6415d53c56d",
	score: u + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
	software: u + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
	hexColorCode: u + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
	emoji: u + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
	orcidId: u + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
	note: u + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
	verticality: u + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
	fondamentaleIdentification: u + "003559fc-f033-4fc3-9c05-0d5f283123ed",
	orcidGeneratedName: u + "73ea8d74-3526-4f6a-8830-dd369795650d"
};
function q(e) {
	let t = e.find((e) => e.label);
	return t ? t.label.value : "";
}
function J(e, t) {
	return `${q(t)}   ${Y(e)}`;
}
function Y(e) {
	for (let [t, n] of Object.entries(w)) e = e.replace(t, n === "" ? "" : n + ":");
	return e;
}
//#endregion
//#region lib/sparql-querying.ts
var X = async (e, t = "https://data-iremus.huma-num.fr/sparql") => {
	let n = await (await fetch(t, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded; charset=utf-8" },
		mode: "cors",
		cache: "no-cache",
		redirect: "follow",
		body: `query=${encodeURIComponent(e)}`
	})).text();
	return JSON.parse(n);
};
function Z(e, t) {
	for (let n in t) e = e.replaceAll("${" + n + "}", t[n]);
	return e;
}
//#endregion
//#region lib/sparql-result.ts
var ne = class {
	head;
	results;
	constructor() {
		this.head = new Q(), this.results = new $();
	}
}, Q = class {
	vars;
	constructor() {
		this.vars = [];
	}
}, $ = class {
	bindings;
	constructor() {
		this.bindings = [];
	}
}, re = class {}, ie = class {}, ae = class {
	"xml:lang";
	type;
	value;
	prefixedUri;
	constructor() {
		this["xml:lang"] = B.NONE, this.type = R.uri, this.value = "", this.prefixedUri = new E("", "");
	}
};
function oe(e, t, n) {
	let r = [], i = {};
	for (let r of e) if (t in r) {
		for (let e of n) if (!(e in r)) continue;
		r[t].value in i || (i[r[t].value] = []), i[r[t].value].push(r);
	}
	for (let e of Object.values(i)) {
		let t = {};
		for (let r of e) for (let e in r) n.includes(e) ? (e in t || (t[e] = []), t[e].push(r[e])) : t[e] = r[e];
		r.push(t);
	}
	return r;
}
//#endregion
export { e as BIBO_BASE, r as CRMDIG_BASE, n as CRM_BASE, z as CountryFlags, l as DATA_IREMUS_FILES_BASE, u as DATA_IREMUS_ID_BASE, i as DBPEDIA_BASE, o as DCTERMS_BASE, a as DC_BASE, S as E55_BUSINESS_ID, ee as E55_FORGE_FILE_URI, x as E55_MEI_FILE_URI, b as E55_TEI_FILE_URI, s as FOAF_BASE, M as Graph, ie as GroupedSparqlQueryResultObject_Binding, c as HEMEF_BASE, f as IREMUS_GRAPH_BASE, d as IREMUS_NS_BASE, U as LABEL_PREDICATES, V as LANGS_ORDER, t as LRMOO_BASE, B as Languages, te as Literal, p as MIMO_BASE, m as MUSRAD30_BASE, N as OG, h as OWL_BASE, P as Ontology, I as OntologyClass, L as OntologyProperty, F as OntologyStuff, T as PRIORITIZED_RDF_PREFIXES, E as PrefixedUri, _ as RDFS_BASE, g as RDF_BASE, w as RDF_PREFIXES, G as RESOURCE_IDENTITY_PREDICATES, W as RESOURCE_LIGHT_IDENTITY_PREDICATES, j as Resource, v as SCHEMAORG_BASE, C as SHERLOCK_E55_PROJECT_OVERVIEW_FILE, K as SHERLOCK_TYPE, y as SKOS_BASE, ne as SparqlQueryResultObject, re as SparqlQueryResultObject_Binding, Q as SparqlQueryResultObject_Head, $ as SparqlQueryResultObject_Results, ae as SparqlQueryResultObject_Variable, R as Type, H as XSDTypes, Z as bind, q as computeIdentity, J as computeResourceLabel, Y as formatUri, A as getCode, O as getGraphName, oe as makeGroupedBindings, D as makePrefixedUri, X as querySparqlEndpoint, k as sortBindings };
