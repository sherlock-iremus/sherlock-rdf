const O = "http://purl.org/ontology/bibo/", p = "http://iflastandards.info/ns/lrm/lrmoo/", d = "http://www.cidoc-crm.org/cidoc-crm/", g = "http://www.ics.forth.gr/isl/CRMdig/", A = "http://dbpedia.org/resource/", b = "http://purl.org/dc/elements/1.1/", _ = "http://purl.org/dc/terms/", n = "http://xmlns.com/foaf/0.1/", I = "http://data-iremus.huma-num.fr/ns/hemef#", H = "http://data-iremus.huma-num.fr/files/", i = "http://data-iremus.huma-num.fr/id/", c = "http://data-iremus.huma-num.fr/id/", v = "http://data-iremus.huma-num.fr/ns/", y = "http://data-iremus.huma-num.fr/graph/", B = "http://www.mimo-db.eu/", C = "http://data-iremus.huma-num.fr/ns/musrad30#", M = "http://www.w3.org/2002/07/owl#", E = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", f = "http://www.w3.org/2000/01/rdf-schema#", N = "http://schema.org/", m = "http://www.w3.org/2004/02/skos/core#", Y = c + "f005e36a-4690-4c83-9791-2927f5f823e0", $ = c + "f284ed72-139d-4662-9dce-208bf493a45d", k = c + "574ffe9e-525c-42f2-8188-329ba3c7231d", o = /* @__PURE__ */ new Map([
  [d, "crm"],
  [g, "crmdig"],
  [O, "bibo"],
  [A, "dbpedia"],
  [b, "dc"],
  [_, "dcterms"],
  [n, "foaf"],
  [I, "hemef"],
  [y, "iremus-graph"],
  [c, "iremus-data"],
  [v, "iremus-ns"],
  [p, "lrmoo"],
  [B, "mimo"],
  [C, "musrad30"],
  [M, "owl"],
  [E, "rdf"],
  [f, "rdfs"],
  [N, "schema"],
  [m, "skos"]
]), L = Object.entries(o).sort(
  (t, e) => t[0].length < e[0].length ? 1 : -1
);
class u {
  prefix;
  localPart;
  constructor(e, r) {
    this.prefix = e, this.localPart = r;
  }
  toString() {
    return this.prefix + ":" + this.localPart;
  }
}
function W(t) {
  for (const e of o.keys())
    if (t.startsWith(e))
      return new u(o.get(e), t.replace(e, ""));
  return new u("", t);
}
function K(t) {
  return t.replace("http://data-iremus.huma-num.fr/graph/", "");
}
function V(t, e) {
  return t.p.value < e.p.value ? -1 : t.p.value > e.p.value ? 1 : 0;
}
function Z(t) {
  return t.startsWith(d) || t.startsWith(g) || t.startsWith(p) ? t.split("/").slice(-1)[0].split("_")[0] : null;
}
class P {
  _pog;
  _uri;
  constructor(e = "") {
    this._uri = e, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(e) {
    return this._pog.get(e);
  }
  addPOG(e, r) {
    this._pog.has(e) ? this._pog.get(e)?.push(r) : this._pog.set(e, [r]);
  }
  get uri() {
    return this._uri;
  }
  get pog() {
    return this._pog;
  }
}
class z {
  _lang;
  _value;
  _type;
  constructor(e, r, s) {
    this._lang = e, this._type = r, this._value = s;
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
}
class J {
  _uri;
  constructor(e) {
    this._uri = e;
  }
  get uri() {
    return this._uri;
  }
}
class T {
  _literal;
  _resource;
  _graph;
  constructor(e, r, s = void 0) {
    this._literal = e, this._resource = r, this._graph = s;
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
class l {
  static void = new l("");
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
    this._classes = this._classes.sort((e, r) => e.intCodeForSorting - r.intCodeForSorting), this._properties = this._properties.sort((e, r) => e.intCodeForSorting - r.intCodeForSorting);
  }
}
class R extends P {
  static label = "";
  _comment;
  _intCodeForSorting;
  _label;
  _name;
  _ontology;
  constructor(e, r, s) {
    super(e), this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = r, this._ontology = s;
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
}
class a extends R {
  static void = new a("", "", l.void);
  _subClassOf;
  constructor(e, r, s) {
    super(e, r, s), this._subClassOf = new Array();
  }
  addSubClassOf(e) {
    this._subClassOf.push(e);
  }
}
class h extends R {
  static void = new h("", "", l.void);
  _domain = a.void;
  _inverseOf = h.void;
  _range = a.void;
  _subPropertyOf;
  constructor(e, r, s) {
    super(e, r, s), this._subPropertyOf = new Array();
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
}
var S = /* @__PURE__ */ ((t) => (t.literal = "literal", t.uri = "uri", t))(S || {}), x = /* @__PURE__ */ ((t) => (t.de = "🇩🇪", t.en = "🇬🇧", t.es = "🇪🇸", t.fr = "🇫🇷", t.it = "🇮🇹", t))(x || {}), w = /* @__PURE__ */ ((t) => (t.NONE = "", t.DE = "de", t.EL = "el", t.EN = "en", t.ES = "es", t.FR = "fr", t.IT = "it", t.PT = "pt", t.RU = "ru", t.ZH = "zh", t))(w || {});
const X = [
  "fr",
  "en",
  "it",
  "de"
  /* DE */
];
var F = /* @__PURE__ */ ((t) => (t.anyURI = "anyURI", t.base64Binary = "base64Binary", t.boolean = "boolean", t.date = "date", t.dateTime = "dateTime", t.decimal = "decimal", t.double = "double", t.duration = "duration", t.float = "float", t.hexBinary = "hexBinary", t.gDay = "gDay", t.gMonth = "gMonth", t.gMonthDay = "gMonthDay", t.gYear = "gYear", t.gYearMonth = "gYearMonth", t.NOTATION = "NOTATION", t.QName = "QName", t.string = "string", t.time = "time", t))(F || {});
const U = [
  d + "P1_is_identified_by",
  b + "title",
  _ + "title",
  n + "familyName",
  n + "firstName",
  n + "givenName",
  n + "name",
  f + "label",
  m + "prefLabel"
], tt = [
  ...U,
  E + "type",
  _ + "creator",
  m + "inScheme",
  f + "subClassOf"
], et = {
  selection: i + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: i + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: i + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: i + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: i + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: i + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: i + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: i + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: i + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: i + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: i + "73ea8d74-3526-4f6a-8830-dd369795650d"
};
function j(t) {
  const e = t.find((r) => r.label);
  return e ? e.label.value : "";
}
function rt(t, e) {
  return `${j(e)}   ${G(t)}`;
}
function G(t) {
  for (const [e, r] of Object.entries(o))
    t = t.replace(e, r !== "" ? r + ":" : "");
  return t;
}
const st = async (t, e = "https://data-iremus.huma-num.fr/sparql") => {
  const s = await (await fetch(e, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    body: `query=${encodeURIComponent(t)}`
  })).text();
  return JSON.parse(s);
};
function it(t, e) {
  for (const r in e)
    t = t.replaceAll("${" + r + "}", e[r]);
  return t;
}
class nt {
  head;
  results;
  constructor() {
    this.head = new q(), this.results = new Q();
  }
}
class q {
  vars;
  constructor() {
    this.vars = [];
  }
}
class Q {
  bindings;
  constructor() {
    this.bindings = [];
  }
}
class ot {
}
class at {
  "xml:lang";
  type;
  value;
  prefixedUri;
  constructor() {
    this["xml:lang"] = w.NONE, this.type = S.uri, this.value = "", this.prefixedUri = new u("", "");
  }
}
export {
  O as BIBO_BASE,
  g as CRMDIG_BASE,
  d as CRM_BASE,
  x as CountryFlags,
  H as DATA_IREMUS_FILES_BASE,
  i as DATA_IREMUS_ID_BASE,
  A as DBPEDIA_BASE,
  _ as DCTERMS_BASE,
  b as DC_BASE,
  k as E55_BUSINESS_ID,
  $ as E55_FORGE_FILE_URI,
  Y as E55_TEI_FILE_URI,
  n as FOAF_BASE,
  J as Graph,
  I as HEMEF_BASE,
  y as IREMUS_GRAPH_BASE,
  v as IREMUS_NS_BASE,
  c as IREMUS_RESOURCE_BASE,
  U as LABEL_PREDICATES,
  X as LANGS_ORDER,
  p as LRMOO_BASE,
  w as Languages,
  z as Literal,
  B as MIMO_BASE,
  C as MUSRAD30_BASE,
  T as OG,
  M as OWL_BASE,
  l as Ontology,
  a as OntologyClass,
  h as OntologyProperty,
  R as OntologyStuff,
  L as PRIORITIZED_RDF_PREFIXES,
  u as PrefixedUri,
  f as RDFS_BASE,
  E as RDF_BASE,
  o as RDF_PREFIXES,
  tt as RESOURCE_IDENTITY_PREDICATES,
  P as Resource,
  N as SCHEMAORG_BASE,
  et as SHERLOCK_TYPE,
  m as SKOS_BASE,
  nt as SparqlQueryResultObject,
  ot as SparqlQueryResultObject_Binding,
  q as SparqlQueryResultObject_Head,
  Q as SparqlQueryResultObject_Results,
  at as SparqlQueryResultObject_Variable,
  S as Type,
  F as XSDTypes,
  it as bind,
  j as computeIdentity,
  rt as computeResourceLabel,
  G as formatUri,
  Z as getCode,
  K as getGraphName,
  W as makePrefixedUri,
  st as querySparqlEndpoint,
  V as sortBindings
};
