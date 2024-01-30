var S = Object.defineProperty;
var p = (t, e, r) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => (p(t, typeof e != "symbol" ? e + "" : e, r), r);
const _ = "http://purl.org/ontology/bibo/", l = "http://www.cidoc-crm.org/lrmoo/", n = "http://www.cidoc-crm.org/cidoc-crm/", f = "http://www.ics.forth.gr/isl/CRMdig/", h = "http://purl.org/dc/elements/1.1/", a = "http://purl.org/dc/terms/", o = "http://xmlns.com/foaf/0.1/", R = "http://data-iremus.huma-num.fr/ns/hemef#", j = "http://data-iremus.huma-num.fr/files/", c = "http://data-iremus.huma-num.fr/id/", w = "http://data-iremus.huma-num.fr/id/", A = "http://data-iremus.huma-num.fr/ns/", B = "http://data-iremus.huma-num.fr/graph/", I = "http://data-iremus.huma-num.fr/ns/musrad30#", O = "http://www.w3.org/2002/07/owl#", m = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", i = "http://www.w3.org/2000/01/rdf-schema#", D = "http://schema.org/", d = "http://www.w3.org/2004/02/skos/core#", E = {
  [n]: "crm",
  [f]: "crmdig",
  [_]: "bibo",
  [h]: "dc",
  [a]: "dcterms",
  [o]: "foaf",
  [R]: "hemef",
  [w]: "",
  [A]: "",
  [I]: "musrad30",
  [l]: "lrmoo",
  [O]: "owl",
  [m]: "rdf",
  [i]: "rdfs",
  [D]: "schema",
  [d]: "skos",
  [B]: ""
}, y = Object.entries(E).sort(
  (t, e) => t[0].length < e[0].length ? 1 : -1
);
function F(t) {
  return t.startsWith(n) || t.startsWith(f) || t.startsWith(l) ? t.split("/").slice(-1)[0].split("_")[0] : null;
}
var u = /* @__PURE__ */ ((t) => (t.literal = "literal", t.uri = "uri", t))(u || {}), C = /* @__PURE__ */ ((t) => (t.de = "🇩🇪", t.en = "🇬🇧", t.es = "🇪🇸", t.fr = "🇫🇷", t.it = "🇮🇹", t))(C || {}), b = /* @__PURE__ */ ((t) => (t.NONE = "", t.DE = "de", t.EL = "el", t.EN = "en", t.ES = "es", t.FR = "fr", t.IT = "it", t.PT = "pt", t.RU = "ru", t.ZH = "zh", t))(b || {});
const q = [
  "fr",
  "en",
  "it",
  "de"
  /* DE */
], M = [
  n + "P1_is_identified_by",
  h + "title",
  a + "title",
  o + "familyName",
  o + "firstName",
  o + "givenName",
  o + "name",
  i + "label",
  d + "prefLabel"
], H = [
  ...M,
  m + "type",
  a + "creator",
  d + "inScheme",
  i + "subClassOf"
], x = {
  selection: c + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: c + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: c + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: c + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: c + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: c + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: c + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: c + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: c + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: c + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: c + "73ea8d74-3526-4f6a-8830-dd369795650d"
};
function N(t) {
  const e = t.find((r) => r.label);
  return e ? e.label.value : "";
}
function G(t, e) {
  return `${N(e)}   ${T(t)}`;
}
function T(t) {
  for (const [e, r] of Object.entries(E))
    t = t.replace(e, r !== "" ? r + ":" : "");
  return t;
}
const W = async (t, e = "https://data-iremus.huma-num.fr/sparql") => {
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
function $(t, e) {
  for (const r in e)
    t = t.replaceAll("${" + r + "}", e[r]);
  return t;
}
class k {
  constructor() {
    s(this, "head");
    s(this, "results");
    this.head = new v(), this.results = new U();
  }
}
class v {
  constructor() {
    s(this, "vars");
    this.vars = [];
  }
}
class U {
  constructor() {
    s(this, "bindings");
    this.bindings = [];
  }
}
class g {
}
class K {
  constructor() {
    s(this, "lang");
    s(this, "type");
    s(this, "value");
    this.lang = b.NONE, this.type = u.uri, this.value = "";
  }
}
export {
  _ as BIBO_BASE,
  f as CRMDIG_BASE,
  n as CRM_BASE,
  C as CountryFlags,
  j as DATA_IREMUS_FILES_BASE,
  c as DATA_IREMUS_ID_BASE,
  a as DCTERMS_BASE,
  h as DC_BASE,
  o as FOAF_BASE,
  R as HEMEF_BASE,
  B as IREMUS_GRAPH_BASE,
  A as IREMUS_NS_BASE,
  w as IREMUS_RESOURCE_BASE,
  M as LABEL_PREDICATES,
  q as LANGS_ORDER,
  l as LRMOO_BASE,
  b as Languages,
  I as MUSRAD30_BASE,
  O as OWL_BASE,
  y as PRIORITIZED_RDF_PREFIXES,
  i as RDFS_BASE,
  m as RDF_BASE,
  E as RDF_PREFIXES,
  H as RESOURCE_IDENTITY_PREDICATES,
  D as SCHEMAORG_BASE,
  x as SHERLOCK_TYPE,
  d as SKOS_BASE,
  k as SparqlResultObject,
  g as SparqlResultObject_Binding,
  v as SparqlResultObject_Head,
  U as SparqlResultObject_Results,
  K as SparqlResultObject_Variable,
  u as Type,
  $ as bind,
  N as computeIdentity,
  G as computeResourceLabel,
  T as formatUri,
  F as getCode,
  W as sparqlEndpoint
};
