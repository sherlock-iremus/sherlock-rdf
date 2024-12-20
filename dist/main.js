var I = Object.defineProperty;
var C = (t, e, r) => e in t ? I(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => C(t, typeof e != "symbol" ? e + "" : e, r);
const M = "http://purl.org/ontology/bibo/", R = "http://www.cidoc-crm.org/lrmoo/", p = "http://www.cidoc-crm.org/cidoc-crm/", S = "http://www.ics.forth.gr/isl/CRMdig/", y = "http://dbpedia.org/resource/", A = "http://purl.org/dc/elements/1.1/", f = "http://purl.org/dc/terms/", o = "http://xmlns.com/foaf/0.1/", N = "http://data-iremus.huma-num.fr/ns/hemef#", V = "http://data-iremus.huma-num.fr/files/", n = "http://data-iremus.huma-num.fr/id/", x = "http://data-iremus.huma-num.fr/id/", P = "http://data-iremus.huma-num.fr/ns/", F = "http://data-iremus.huma-num.fr/graph/", U = "http://www.mimo-db.eu/", j = "http://data-iremus.huma-num.fr/ns/musrad30#", q = "http://www.w3.org/2002/07/owl#", O = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", g = "http://www.w3.org/2000/01/rdf-schema#", G = "http://schema.org/", b = "http://www.w3.org/2004/02/skos/core#", l = /* @__PURE__ */ new Map([
  [p, "crm"],
  [S, "crmdig"],
  [M, "bibo"],
  [y, "dbpedia"],
  [A, "dc"],
  [f, "dcterms"],
  [o, "foaf"],
  [N, "hemef"],
  [F, "iremus-graph"],
  [x, "iremus-data"],
  [P, "iremus-ns"],
  [R, "lrmoo"],
  [U, "mimo"],
  [j, "musrad30"],
  [q, "owl"],
  [O, "rdf"],
  [g, "rdfs"],
  [G, "schema"],
  [b, "skos"]
]), Z = Object.entries(l).sort(
  (t, e) => t[0].length < e[0].length ? 1 : -1
);
class m {
  constructor(e, r) {
    s(this, "prefix");
    s(this, "localPart");
    this.prefix = e, this.localPart = r;
  }
}
function z(t) {
  for (const e of l.keys())
    if (t.startsWith(e))
      return new m(l.get(e), t.replace(e, ""));
  return new m("", t);
}
function J(t) {
  return t.replace("http://data-iremus.huma-num.fr/graph/", "");
}
function T(t, e) {
  return t.p.value < e.p.value ? -1 : t.p.value > e.p.value ? 1 : 0;
}
function X(t) {
  return t.startsWith(p) || t.startsWith(S) || t.startsWith(R) ? t.split("/").slice(-1)[0].split("_")[0] : null;
}
class Q {
  constructor(e = "") {
    s(this, "_pog");
    s(this, "_uri");
    this._uri = e, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(e) {
    return this._pog.get(e);
  }
  addPOG(e, r) {
    var i;
    this._pog.has(e) ? (i = this._pog.get(e)) == null || i.push(r) : this._pog.set(e, [r]);
  }
  get uri() {
    return this._uri;
  }
  get pog() {
    return this._pog;
  }
}
class tt {
  constructor(e, r, i) {
    s(this, "_lang");
    s(this, "_value");
    s(this, "_type");
    s(this, "toString", () => `${this._value}@${this._lang}`);
    this._lang = e, this._type = r, this._value = i;
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
}
class et {
  constructor(e) {
    s(this, "_uri");
    this._uri = e;
  }
  get uri() {
    return this._uri;
  }
}
class rt {
  constructor(e, r, i = void 0) {
    s(this, "_literal");
    s(this, "_resource");
    s(this, "_graph");
    this._literal = e, this._resource = r, this._graph = i;
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
}
const d = class d {
  constructor(e) {
    s(this, "_classesRegistry", /* @__PURE__ */ new Map());
    s(this, "_name");
    s(this, "_classes");
    s(this, "_properties");
    s(this, "_propertiesRegistry", /* @__PURE__ */ new Map());
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
    this._classes = this._classes.sort((e, r) => e.intCodeForSorting - r.intCodeForSorting), this._properties = this._properties.sort((e, r) => e.intCodeForSorting - r.intCodeForSorting);
  }
};
s(d, "void", new d(""));
let u = d;
class E extends Q {
  constructor(r, i, a) {
    super(r);
    s(this, "_comment");
    s(this, "_intCodeForSorting");
    s(this, "_label");
    s(this, "_name");
    s(this, "_ontology");
    this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = i, this._ontology = a;
  }
  get comment() {
    return this._comment;
  }
  set comment(r) {
    this._comment = r;
  }
  get intCodeForSorting() {
    return this._intCodeForSorting;
  }
  set intCodeForSorting(r) {
    this._intCodeForSorting = r;
  }
  set label(r) {
    this._label = r;
  }
  get name() {
    return this._name;
  }
  get ontology() {
    return this._ontology;
  }
  getComment(r) {
    return this._comment.get(r);
  }
  getLabel(r) {
    return this._label.get(r);
  }
}
s(E, "label", "");
const _ = class _ extends E {
  constructor(r, i, a) {
    super(r, i, a);
    s(this, "_subClassOf");
    this._subClassOf = new Array();
  }
  addSubClassOf(r) {
    this._subClassOf.push(r);
  }
};
s(_, "void", new _("", "", u.void));
let h = _;
const c = class c extends E {
  constructor(r, i, a) {
    super(r, i, a);
    s(this, "_domain", h.void);
    s(this, "_inverseOf", c.void);
    s(this, "_range", h.void);
    s(this, "_subPropertyOf");
    this._subPropertyOf = new Array();
  }
  get domain() {
    return this._domain;
  }
  set domain(r) {
    this._domain = r;
  }
  get inverseOf() {
    return this._inverseOf;
  }
  set inverseOf(r) {
    this._inverseOf = r;
  }
  get range() {
    return this._range;
  }
  set range(r) {
    this._range = r;
  }
  addSubPropertyOf(r) {
    this._subPropertyOf.push(r);
  }
};
s(c, "void", new c("", "", u.void));
let w = c;
var v = /* @__PURE__ */ ((t) => (t.literal = "literal", t.uri = "uri", t))(v || {}), H = /* @__PURE__ */ ((t) => (t.de = "🇩🇪", t.en = "🇬🇧", t.es = "🇪🇸", t.fr = "🇫🇷", t.it = "🇮🇹", t))(H || {}), B = /* @__PURE__ */ ((t) => (t.NONE = "", t.DE = "de", t.EL = "el", t.EN = "en", t.ES = "es", t.FR = "fr", t.IT = "it", t.PT = "pt", t.RU = "ru", t.ZH = "zh", t))(B || {});
const st = [
  "fr",
  "en",
  "it",
  "de"
  /* DE */
];
var Y = /* @__PURE__ */ ((t) => (t.anyURI = "anyURI", t.base64Binary = "base64Binary", t.boolean = "boolean", t.date = "date", t.dateTime = "dateTime", t.decimal = "decimal", t.double = "double", t.duration = "duration", t.float = "float", t.hexBinary = "hexBinary", t.gDay = "gDay", t.gMonth = "gMonth", t.gMonthDay = "gMonthDay", t.gYear = "gYear", t.gYearMonth = "gYearMonth", t.NOTATION = "NOTATION", t.QName = "QName", t.string = "string", t.time = "time", t))(Y || {});
const $ = [
  p + "P1_is_identified_by",
  A + "title",
  f + "title",
  o + "familyName",
  o + "firstName",
  o + "givenName",
  o + "name",
  g + "label",
  b + "prefLabel"
], it = [
  ...$,
  O + "type",
  f + "creator",
  b + "inScheme",
  g + "subClassOf"
], nt = {
  selection: n + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: n + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: n + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: n + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: n + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: n + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: n + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: n + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: n + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: n + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: n + "73ea8d74-3526-4f6a-8830-dd369795650d"
};
function k(t) {
  const e = t.find((r) => r.label);
  return e ? e.label.value : "";
}
function at(t, e) {
  return `${k(e)}   ${D(t)}`;
}
function D(t) {
  for (const [e, r] of Object.entries(l))
    t = t.replace(e, r !== "" ? r + ":" : "");
  return t;
}
const ot = async (t, e = "https://data-iremus.huma-num.fr/sparql") => {
  const i = await (await fetch(e, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    body: `query=${encodeURIComponent(t)}`
  })).text();
  return JSON.parse(i);
};
function ct(t, e) {
  for (const r in e)
    t = t.replaceAll("${" + r + "}", e[r]);
  return t;
}
class lt {
  constructor() {
    s(this, "head");
    s(this, "results");
    this.head = new W(), this.results = new L();
  }
}
class W {
  constructor() {
    s(this, "vars");
    this.vars = [];
  }
}
class L {
  constructor() {
    s(this, "bindings");
    this.bindings = [];
  }
}
class ut {
}
class ht {
  constructor() {
    s(this, "xml:lang");
    s(this, "type");
    s(this, "value");
    s(this, "prefixedUri");
    this["xml:lang"] = B.NONE, this.type = v.uri, this.value = "", this.prefixedUri = new m("", "");
  }
}
export {
  M as BIBO_BASE,
  S as CRMDIG_BASE,
  p as CRM_BASE,
  H as CountryFlags,
  V as DATA_IREMUS_FILES_BASE,
  n as DATA_IREMUS_ID_BASE,
  y as DBPEDIA_BASE,
  f as DCTERMS_BASE,
  A as DC_BASE,
  o as FOAF_BASE,
  et as Graph,
  N as HEMEF_BASE,
  F as IREMUS_GRAPH_BASE,
  P as IREMUS_NS_BASE,
  x as IREMUS_RESOURCE_BASE,
  $ as LABEL_PREDICATES,
  st as LANGS_ORDER,
  R as LRMOO_BASE,
  B as Languages,
  tt as Literal,
  U as MIMO_BASE,
  j as MUSRAD30_BASE,
  rt as OG,
  q as OWL_BASE,
  u as Ontology,
  h as OntologyClass,
  w as OntologyProperty,
  E as OntologyStuff,
  Z as PRIORITIZED_RDF_PREFIXES,
  m as PrefixedUri,
  g as RDFS_BASE,
  O as RDF_BASE,
  l as RDF_PREFIXES,
  it as RESOURCE_IDENTITY_PREDICATES,
  Q as Resource,
  G as SCHEMAORG_BASE,
  nt as SHERLOCK_TYPE,
  b as SKOS_BASE,
  lt as SparqlQueryResultObject,
  ut as SparqlQueryResultObject_Binding,
  W as SparqlQueryResultObject_Head,
  L as SparqlQueryResultObject_Results,
  ht as SparqlQueryResultObject_Variable,
  v as Type,
  Y as XSDTypes,
  ct as bind,
  k as computeIdentity,
  at as computeResourceLabel,
  D as formatUri,
  X as getCode,
  J as getGraphName,
  z as makePrefixedUri,
  ot as querySparqlEndpoint,
  T as sortBindings
};
