var T = Object.defineProperty;
var v = (t, e, r) => e in t ? T(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var c = (t, e, r) => (v(t, typeof e != "symbol" ? e + "" : e, r), r);
const S = "http://purl.org/ontology/bibo/", d = "http://www.cidoc-crm.org/lrmoo/", n = "http://www.cidoc-crm.org/cidoc-crm/", f = "http://www.ics.forth.gr/isl/CRMdig/", u = "http://purl.org/dc/elements/1.1/", a = "http://purl.org/dc/terms/", s = "http://xmlns.com/foaf/0.1/", h = "http://data-iremus.huma-num.fr/ns/hemef#", C = "http://data-iremus.huma-num.fr/files/", o = "http://data-iremus.huma-num.fr/id/", E = "http://data-iremus.huma-num.fr/id/", R = "http://data-iremus.huma-num.fr/ns/", w = "http://data-iremus.huma-num.fr/graph/", O = "http://data-iremus.huma-num.fr/ns/musrad30#", A = "http://www.w3.org/2002/07/owl#", _ = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", l = "http://www.w3.org/2000/01/rdf-schema#", I = "http://schema.org/", i = "http://www.w3.org/2004/02/skos/core#", b = {
  [n]: "crm",
  [f]: "crmdig",
  [S]: "bibo",
  [u]: "dc",
  [a]: "dcterms",
  [s]: "foaf",
  [h]: "hemef",
  [E]: "",
  [R]: "",
  [O]: "musrad30",
  [d]: "lrmoo",
  [A]: "owl",
  [_]: "rdf",
  [l]: "rdfs",
  [I]: "schema",
  [i]: "skos",
  [w]: ""
}, g = Object.entries(b).sort(
  (t, e) => t[0].length < e[0].length ? 1 : -1
), $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BIBO_BASE: S,
  CRMDIG_BASE: f,
  CRM_BASE: n,
  DATA_IREMUS_FILES_BASE: C,
  DATA_IREMUS_ID_BASE: o,
  DCTERMS_BASE: a,
  DC_BASE: u,
  FOAF_BASE: s,
  HEMEF_BASE: h,
  IREMUS_GRAPH_BASE: w,
  IREMUS_NS_BASE: R,
  IREMUS_RESOURCE_BASE: E,
  LRMOO_BASE: d,
  MUSRAD30_BASE: O,
  OWL_BASE: A,
  PRIORITIZED_RDF_PREFIXES: g,
  RDFS_BASE: l,
  RDF_BASE: _,
  RDF_PREFIXES: b,
  SCHEMAORG_BASE: I,
  SKOS_BASE: i
}, Symbol.toStringTag, { value: "Module" }));
function N(t) {
  return t.startsWith(n) || t.startsWith(f) || t.startsWith(d) ? t.split("/").slice(-1)[0].split("_")[0] : null;
}
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCode: N
}, Symbol.toStringTag, { value: "Module" }));
var m = /* @__PURE__ */ ((t) => (t.literal = "literal", t.uri = "uri", t))(m || {}), y = /* @__PURE__ */ ((t) => (t.de = "🇩🇪", t.en = "🇬🇧", t.es = "🇪🇸", t.fr = "🇫🇷", t.it = "🇮🇹", t))(y || {}), p = /* @__PURE__ */ ((t) => (t.NONE = "", t.DE = "de", t.EL = "el", t.EN = "en", t.ES = "es", t.FR = "fr", t.IT = "it", t.PT = "pt", t.RU = "ru", t.ZH = "zh", t))(p || {});
const U = [
  "fr",
  "en",
  "it",
  "de"
  /* DE */
], K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CountryFlags: y,
  LANGS_ORDER: U,
  Languages: p,
  Type: m
}, Symbol.toStringTag, { value: "Module" })), B = [
  n + "P1_is_identified_by",
  u + "title",
  a + "title",
  s + "familyName",
  s + "firstName",
  s + "givenName",
  s + "name",
  l + "label",
  i + "prefLabel"
], F = [
  ...B,
  _ + "type",
  a + "creator",
  i + "inScheme",
  l + "subClassOf"
], q = {
  selection: o + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: o + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: o + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: o + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: o + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: o + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: o + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: o + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: o + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: o + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: o + "73ea8d74-3526-4f6a-8830-dd369795650d"
};
function j(t) {
  const e = t.find((r) => r.label);
  return e ? e.label.value : "";
}
function x(t, e) {
  return `${j(e)}   ${D(t)}`;
}
function D(t) {
  for (const [e, r] of Object.entries(b))
    t = t.replace(e, r !== "" ? r + ":" : "");
  return t;
}
const X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LABEL_PREDICATES: B,
  RESOURCE_IDENTITY_PREDICATES: F,
  SHERLOCK_TYPE: q,
  computeIdentity: j,
  computeResourceLabel: x,
  formatUri: D
}, Symbol.toStringTag, { value: "Module" })), z = async (t, e = "https://data-iremus.huma-num.fr/sparql") => {
  let r = await fetch(e, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    body: `query=${encodeURIComponent(t)}`
  });
  return r = await r.json(), r;
};
function H(t, e) {
  for (const r in e)
    t = t.replaceAll("${" + r + "}", e[r]);
  return t;
}
const Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bind: H,
  sparqlEndpoint: z
}, Symbol.toStringTag, { value: "Module" }));
class G {
  constructor() {
    c(this, "head");
    c(this, "results");
    this.head = new M(), this.results = new P();
  }
}
class M {
  constructor() {
    c(this, "vars");
    this.vars = [];
  }
}
class P {
  constructor() {
    c(this, "bindings");
    this.bindings = [];
  }
}
class L {
}
class Q {
  constructor() {
    c(this, "lang");
    c(this, "type");
    c(this, "value");
    this.lang = p.NONE, this.type = m.uri, this.value = "";
  }
}
const Z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SparqlResultObject: G,
  SparqlResultObject_Binding: L,
  SparqlResultObject_Head: M,
  SparqlResultObject_Results: P,
  SparqlResultObject_Variable: Q
}, Symbol.toStringTag, { value: "Module" }));
export {
  k as CIDOC_CRM,
  K as RDF_Literal,
  $ as RDF_Prefixes,
  X as RDF_Resource_Identity,
  Y as SPARQL_Querying,
  Z as SPARQL_Response
};
