var ji = Object.defineProperty;
var xi = (e, t, n) => t in e ? ji(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var K = (e, t, n) => (xi(e, typeof t != "symbol" ? t + "" : t, n), n);
function $i(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const i in o)
        if (i !== "default" && !(i in e)) {
          const f = Object.getOwnPropertyDescriptor(o, i);
          f && Object.defineProperty(e, i, f.get ? f : {
            enumerable: !0,
            get: () => o[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const Fi = "http://purl.org/ontology/bibo/", Jn = "http://www.cidoc-crm.org/lrmoo/", yr = "http://www.cidoc-crm.org/cidoc-crm/", Zn = "http://www.ics.forth.gr/isl/CRMdig/", Xn = "http://purl.org/dc/elements/1.1/", mr = "http://purl.org/dc/terms/", Ue = "http://xmlns.com/foaf/0.1/", Vi = "http://data-iremus.huma-num.fr/ns/hemef#", sa = "http://data-iremus.huma-num.fr/files/", me = "http://data-iremus.huma-num.fr/id/", qi = "http://data-iremus.huma-num.fr/id/", zi = "http://data-iremus.huma-num.fr/ns/", Qi = "http://data-iremus.huma-num.fr/graph/", Li = "http://data-iremus.huma-num.fr/ns/musrad30#", Ui = "http://www.w3.org/2002/07/owl#", eo = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", vr = "http://www.w3.org/2000/01/rdf-schema#", Wi = "http://schema.org/", gr = "http://www.w3.org/2004/02/skos/core#", Rt = /* @__PURE__ */ new Map([
  [yr, "crm"],
  [Zn, "crmdig"],
  [Fi, "bibo"],
  [Xn, "dc"],
  [mr, "dcterms"],
  [Ue, "foaf"],
  [Vi, "hemef"],
  [Qi, ""],
  [qi, ""],
  [zi, ""],
  [Jn, "lrmoo"],
  [Li, "musrad30"],
  [Ui, "owl"],
  [eo, "rdf"],
  [vr, "rdfs"],
  [Wi, "schema"],
  [gr, "skos"]
]), ua = Object.entries(Rt).sort(
  (e, t) => e[0].length < t[0].length ? 1 : -1
);
class hn {
  constructor(t, n) {
    K(this, "prefix");
    K(this, "localPart");
    this.prefix = t, this.localPart = n;
  }
}
const aa = (e) => {
  for (const t of Rt.keys())
    if (e.startsWith(t))
      return new hn(Rt.get(t), e.replace(t, ""));
  return new hn("", e);
};
function ca(e) {
  return e.startsWith(yr) || e.startsWith(Zn) || e.startsWith(Jn) ? e.split("/").slice(-1)[0].split("_")[0] : null;
}
class Bi {
  constructor(t = "") {
    K(this, "_pog");
    K(this, "_uri");
    this._uri = t, this._pog = /* @__PURE__ */ new Map();
  }
  getValues(t) {
    return this._pog.get(t);
  }
  addPOG(t, n) {
    var o;
    this._pog.has(t) ? (o = this._pog.get(t)) == null || o.push(n) : this._pog.set(t, [n]);
  }
  get uri() {
    return this._uri;
  }
  get pog() {
    return this._pog;
  }
}
class la {
  constructor(t, n, o) {
    K(this, "_lang");
    K(this, "_value");
    K(this, "_type");
    K(this, "toString", () => `${this._value}@${this._lang}`);
    this._lang = t, this._type = n, this._value = o;
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
class fa {
  constructor(t) {
    K(this, "_uri");
    this._uri = t;
  }
  get uri() {
    return this._uri;
  }
}
class da {
  constructor(t, n, o = void 0) {
    K(this, "_literal");
    K(this, "_resource");
    K(this, "_graph");
    this._literal = t, this._resource = n, this._graph = o;
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
const Tt = class Tt {
  constructor(t) {
    K(this, "_classesRegistry", /* @__PURE__ */ new Map());
    K(this, "_name");
    K(this, "_classes");
    K(this, "_properties");
    K(this, "_propertiesRegistry", /* @__PURE__ */ new Map());
    this._name = t, this._classes = [], this._properties = [];
  }
  addClass(t) {
    this._classes.push(t), this._classes = this._classes.sort(), this._classesRegistry.set(t.uri, t);
  }
  addProperty(t) {
    this._properties.push(t), this._properties = this._properties.sort(), this._propertiesRegistry.set(t.uri, t);
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
    this._classes = this._classes.sort((t, n) => t.intCodeForSorting - n.intCodeForSorting), this._properties = this._properties.sort((t, n) => t.intCodeForSorting - n.intCodeForSorting);
  }
};
K(Tt, "void", new Tt(""));
let Ot = Tt;
class br extends Bi {
  constructor(n, o, i) {
    super(n);
    K(this, "_comment");
    K(this, "_intCodeForSorting");
    K(this, "_label");
    K(this, "_name");
    K(this, "_ontology");
    this._comment = /* @__PURE__ */ new Map(), this._intCodeForSorting = -1, this._label = /* @__PURE__ */ new Map(), this._name = o, this._ontology = i;
  }
  get comment() {
    return this._comment;
  }
  set comment(n) {
    this._comment = n;
  }
  get intCodeForSorting() {
    return this._intCodeForSorting;
  }
  set intCodeForSorting(n) {
    this._intCodeForSorting = n;
  }
  set label(n) {
    this._label = n;
  }
  get name() {
    return this._name;
  }
  get ontology() {
    return this._ontology;
  }
  getComment(n) {
    return this._comment.get(n);
  }
  getLabel(n) {
    return this._label.get(n);
  }
}
K(br, "label", "");
const Nt = class Nt extends br {
  constructor(n, o, i) {
    super(n, o, i);
    K(this, "_subClassOf");
    this._subClassOf = new Array();
  }
  addSubClassOf(n) {
    this._subClassOf.push(n);
  }
};
K(Nt, "void", new Nt("", "", Ot.void));
let Ct = Nt;
const Je = class Je extends br {
  constructor(n, o, i) {
    super(n, o, i);
    K(this, "_domain", Ct.void);
    K(this, "_inverseOf", Je.void);
    K(this, "_range", Ct.void);
    K(this, "_subPropertyOf");
    this._subPropertyOf = new Array();
  }
  get domain() {
    return this._domain;
  }
  set domain(n) {
    this._domain = n;
  }
  get inverseOf() {
    return this._inverseOf;
  }
  set inverseOf(n) {
    this._inverseOf = n;
  }
  get range() {
    return this._range;
  }
  set range(n) {
    this._range = n;
  }
  addSubPropertyOf(n) {
    this._subPropertyOf.push(n);
  }
};
K(Je, "void", new Je("", "", Ot.void));
let yn = Je;
var to = /* @__PURE__ */ ((e) => (e.literal = "literal", e.uri = "uri", e))(to || {}), Ki = /* @__PURE__ */ ((e) => (e.de = "🇩🇪", e.en = "🇬🇧", e.es = "🇪🇸", e.fr = "🇫🇷", e.it = "🇮🇹", e))(Ki || {}), ro = /* @__PURE__ */ ((e) => (e.NONE = "", e.DE = "de", e.EL = "el", e.EN = "en", e.ES = "es", e.FR = "fr", e.IT = "it", e.PT = "pt", e.RU = "ru", e.ZH = "zh", e))(ro || {});
const pa = [
  "fr",
  "en",
  "it",
  "de"
  /* DE */
];
var Hi = /* @__PURE__ */ ((e) => (e.anyURI = "anyURI", e.base64Binary = "base64Binary", e.boolean = "boolean", e.date = "date", e.dateTime = "dateTime", e.decimal = "decimal", e.double = "double", e.duration = "duration", e.float = "float", e.hexBinary = "hexBinary", e.gDay = "gDay", e.gMonth = "gMonth", e.gMonthDay = "gMonthDay", e.gYear = "gYear", e.gYearMonth = "gYearMonth", e.NOTATION = "NOTATION", e.QName = "QName", e.string = "string", e.time = "time", e))(Hi || {});
const Yi = [
  yr + "P1_is_identified_by",
  Xn + "title",
  mr + "title",
  Ue + "familyName",
  Ue + "firstName",
  Ue + "givenName",
  Ue + "name",
  vr + "label",
  gr + "prefLabel"
], ha = [
  ...Yi,
  eo + "type",
  mr + "creator",
  gr + "inScheme",
  vr + "subClassOf"
], ya = {
  selection: me + "9d0388cb-a178-46b2-b047-b5a98f7bdf0b",
  analyticalEntity: me + "6d72746a-9f28-4739-8786-c6415d53c56d",
  score: me + "bf9dce29-8123-4e8e-b24d-0c7f134bbc8e",
  software: me + "29b00e39-75da-4945-b6c4-a0ca00f96f68",
  hexColorCode: me + "5f1bb74f-6ea0-4073-8b68-086f98454f1c",
  emoji: me + "04242f64-fbb3-4b5b-bb2e-3ddd59eeea18",
  orcidId: me + "d7ef2583-ff31-4913-9ed3-bc3a1c664b21",
  note: me + "d2a536eb-4a95-484f-b13d-f597ac8ea2fd",
  verticality: me + "90a2ae1e-0fbc-4357-ac8a-b4b3f2a06e86",
  fondamentaleIdentification: me + "003559fc-f033-4fc3-9c05-0d5f283123ed",
  orcidGeneratedName: me + "73ea8d74-3526-4f6a-8830-dd369795650d"
};
function Gi(e) {
  const t = e.find((n) => n.label);
  return t ? t.label.value : "";
}
function ma(e, t) {
  return `${Gi(t)}   ${Ji(e)}`;
}
function Ji(e) {
  for (const [t, n] of Object.entries(Rt))
    e = e.replace(t, n !== "" ? n + ":" : "");
  return e;
}
function nr(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Kt = () => Math.random().toString(36).substring(7).split("").join("."), Zi = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Kt()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Kt()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Kt()}`
}, Ke = Zi;
function _e(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Xi(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (rs(e))
    return "date";
  if (ts(e))
    return "error";
  const n = es(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function es(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function ts(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function rs(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ns(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Xi(e)), t;
}
function mn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function os(e, t, n, o) {
  const i = Object.keys(t), f = n && n.type === Ke.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!_e(e))
    return `The ${f} has unexpected type of "${ns(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const m = Object.keys(e).filter((S) => !t.hasOwnProperty(S) && !o[S]);
  if (m.forEach((S) => {
    o[S] = !0;
  }), !(n && n.type === Ke.REPLACE) && m.length > 0)
    return `Unexpected ${m.length > 1 ? "keys" : "key"} "${m.join('", "')}" found in ${f}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function is(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Ke.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? nr(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: Ke.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? nr(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Ke.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ss(e) {
  const t = Object.keys(e), n = {};
  for (let m = 0; m < t.length; m++) {
    const S = t[m];
    process.env.NODE_ENV !== "production" && typeof e[S] > "u" && mn(`No reducer provided for key "${S}"`), typeof e[S] == "function" && (n[S] = e[S]);
  }
  const o = Object.keys(n);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let f;
  try {
    is(n);
  } catch (m) {
    f = m;
  }
  return function(S = {}, T) {
    if (f)
      throw f;
    if (process.env.NODE_ENV !== "production") {
      const O = os(S, n, T, i);
      O && mn(O);
    }
    let b = !1;
    const A = {};
    for (let O = 0; O < o.length; O++) {
      const c = o[O], l = n[c], h = S[c], v = l(h, T);
      if (typeof v > "u") {
        const g = T && T.type;
        throw new Error(process.env.NODE_ENV === "production" ? nr(14) : `When called with an action of type ${g ? `"${String(g)}"` : "(unknown type)"}, the slice reducer for key "${c}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      A[c] = v, b = b || v !== h;
    }
    return b = b || o.length !== Object.keys(S).length, b ? A : S;
  };
}
function no(e) {
  return _e(e) && "type" in e && typeof e.type == "string";
}
var _r = Symbol.for("immer-nothing"), He = Symbol.for("immer-draftable"), he = Symbol.for("immer-state"), oo = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function ce(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = oo[e], o = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ae = Object.getPrototypeOf;
function ve(e) {
  return !!e && !!e[he];
}
function ge(e) {
  var t;
  return e ? io(e) || Array.isArray(e) || !!e[He] || !!((t = e.constructor) != null && t[He]) || it(e) || st(e) : !1;
}
var us = Object.prototype.constructor.toString();
function io(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ae(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === us;
}
function as(e) {
  return ve(e) || ce(15, e), e[he].base_;
}
function Ze(e, t) {
  ke(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function ke(e) {
  const t = e[he];
  return t ? t.type_ : Array.isArray(e) ? 1 : it(e) ? 2 : st(e) ? 3 : 0;
}
function Xe(e, t) {
  return ke(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ht(e, t) {
  return ke(e) === 2 ? e.get(t) : e[t];
}
function so(e, t, n) {
  const o = ke(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function cs(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function it(e) {
  return e instanceof Map;
}
function st(e) {
  return e instanceof Set;
}
function Oe(e) {
  return e.copy_ || e.base_;
}
function or(e, t) {
  if (it(e))
    return new Map(e);
  if (st(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && io(e))
    return Ae(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[he];
  let o = Reflect.ownKeys(n);
  for (let i = 0; i < o.length; i++) {
    const f = o[i], m = n[f];
    m.writable === !1 && (m.writable = !0, m.configurable = !0), (m.get || m.set) && (n[f] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: m.enumerable,
      value: e[f]
    });
  }
  return Object.create(Ae(e), n);
}
function Er(e, t = !1) {
  return Dt(e) || ve(e) || !ge(e) || (ke(e) > 1 && (e.set = e.add = e.clear = e.delete = ls), Object.freeze(e), t && Object.entries(e).forEach(([n, o]) => Er(o, !0))), e;
}
function ls() {
  ce(2);
}
function Dt(e) {
  return Object.isFrozen(e);
}
var ir = {};
function Te(e) {
  const t = ir[e];
  return t || ce(0, e), t;
}
function fs(e, t) {
  ir[e] || (ir[e] = t);
}
var et;
function uo() {
  return et;
}
function ds(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function vn(e, t) {
  t && (Te("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function sr(e) {
  ur(e), e.drafts_.forEach(ps), e.drafts_ = null;
}
function ur(e) {
  e === et && (et = e.parent_);
}
function gn(e) {
  return et = ds(et, e);
}
function ps(e) {
  const t = e[he];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function bn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[he].modified_ && (sr(t), ce(4)), ge(e) && (e = At(t, e), t.parent_ || kt(t, e)), t.patches_ && Te("Patches").generateReplacementPatches_(
    n[he].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = At(t, n, []), sr(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== _r ? e : void 0;
}
function At(e, t, n) {
  if (Dt(t))
    return t;
  const o = t[he];
  if (!o)
    return Ze(
      t,
      (i, f) => _n(e, o, t, i, f, n)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return kt(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const i = o.copy_;
    let f = i, m = !1;
    o.type_ === 3 && (f = new Set(i), i.clear(), m = !0), Ze(
      f,
      (S, T) => _n(e, o, i, S, T, n, m)
    ), kt(e, i, !1), n && e.patches_ && Te("Patches").generatePatches_(
      o,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function _n(e, t, n, o, i, f, m) {
  if (process.env.NODE_ENV !== "production" && i === n && ce(5), ve(i)) {
    const S = f && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Xe(t.assigned_, o) ? f.concat(o) : void 0, T = At(e, i, S);
    if (so(n, o, T), ve(T))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    m && n.add(i);
  if (ge(i) && !Dt(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    At(e, i), (!t || !t.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(n, o) && kt(e, i);
  }
}
function kt(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Er(t, n);
}
function hs(e, t) {
  const n = Array.isArray(e), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : uo(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = o, f = Sr;
  n && (i = [o], f = tt);
  const { revoke: m, proxy: S } = Proxy.revocable(i, f);
  return o.draft_ = S, o.revoke_ = m, S;
}
var Sr = {
  get(e, t) {
    if (t === he)
      return e;
    const n = Oe(e);
    if (!Xe(n, t))
      return ys(e, n, t);
    const o = n[t];
    return e.finalized_ || !ge(o) ? o : o === Yt(e.base_, t) ? (Gt(e), e.copy_[t] = cr(o, e)) : o;
  },
  has(e, t) {
    return t in Oe(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Oe(e));
  },
  set(e, t, n) {
    const o = ao(Oe(e), t);
    if (o != null && o.set)
      return o.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Yt(Oe(e), t), f = i == null ? void 0 : i[he];
      if (f && f.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (cs(n, i) && (n !== void 0 || Xe(e.base_, t)))
        return !0;
      Gt(e), ar(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Yt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Gt(e), ar(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Oe(e), o = Reflect.getOwnPropertyDescriptor(n, t);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: o.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    ce(11);
  },
  getPrototypeOf(e) {
    return Ae(e.base_);
  },
  setPrototypeOf() {
    ce(12);
  }
}, tt = {};
Ze(Sr, (e, t) => {
  tt[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
tt.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && ce(13), tt.set.call(this, e, t, void 0);
};
tt.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && ce(14), Sr.set.call(this, e[0], t, n, e[0]);
};
function Yt(e, t) {
  const n = e[he];
  return (n ? Oe(n) : e)[t];
}
function ys(e, t, n) {
  var i;
  const o = ao(t, n);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = o.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function ao(e, t) {
  if (!(t in e))
    return;
  let n = Ae(e);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return o;
    n = Ae(n);
  }
}
function ar(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ar(e.parent_));
}
function Gt(e) {
  e.copy_ || (e.copy_ = or(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ms = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, o) => {
      if (typeof t == "function" && typeof n != "function") {
        const f = n;
        n = t;
        const m = this;
        return function(T = f, ...b) {
          return m.produce(T, (A) => n.call(this, A, ...b));
        };
      }
      typeof n != "function" && ce(6), o !== void 0 && typeof o != "function" && ce(7);
      let i;
      if (ge(t)) {
        const f = gn(this), m = cr(t, void 0);
        let S = !0;
        try {
          i = n(m), S = !1;
        } finally {
          S ? sr(f) : ur(f);
        }
        return vn(f, o), bn(i, f);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === _r && (i = void 0), this.autoFreeze_ && Er(i, !0), o) {
          const f = [], m = [];
          Te("Patches").generateReplacementPatches_(t, i, f, m), o(f, m);
        }
        return i;
      } else
        ce(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (m, ...S) => this.produceWithPatches(m, (T) => t(T, ...S));
      let o, i;
      return [this.produce(t, n, (m, S) => {
        o = m, i = S;
      }), o, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ge(e) || ce(8), ve(e) && (e = co(e));
    const t = gn(this), n = cr(e, void 0);
    return n[he].isManual_ = !0, ur(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[he];
    (!n || !n.isManual_) && ce(9);
    const { scope_: o } = n;
    return vn(o, t), bn(void 0, o);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const o = Te("Patches").applyPatches_;
    return ve(e) ? o(e, t) : this.produce(
      e,
      (i) => o(i, t)
    );
  }
};
function cr(e, t) {
  const n = it(e) ? Te("MapSet").proxyMap_(e, t) : st(e) ? Te("MapSet").proxySet_(e, t) : hs(e, t);
  return (t ? t.scope_ : uo()).drafts_.push(n), n;
}
function co(e) {
  return ve(e) || ce(10, e), lo(e);
}
function lo(e) {
  if (!ge(e) || Dt(e))
    return e;
  const t = e[he];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = or(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = or(e, !0);
  return Ze(n, (o, i) => {
    so(n, o, lo(i));
  }), t && (t.finalized_ = !1), n;
}
function vs() {
  process.env.NODE_ENV !== "production" && oo.push(
    'Sets cannot have "replace" patches.',
    function(c) {
      return "Unsupported patch operation: " + c;
    },
    function(c) {
      return "Cannot apply patch, path doesn't resolve: " + c;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", n = "add", o = "remove";
  function i(c, l, h, v) {
    switch (c.type_) {
      case 0:
      case 2:
        return m(
          c,
          l,
          h,
          v
        );
      case 1:
        return f(c, l, h, v);
      case 3:
        return S(
          c,
          l,
          h,
          v
        );
    }
  }
  function f(c, l, h, v) {
    let { base_: g, assigned_: _ } = c, p = c.copy_;
    p.length < g.length && ([g, p] = [p, g], [h, v] = [v, h]);
    for (let u = 0; u < g.length; u++)
      if (_[u] && p[u] !== g[u]) {
        const s = l.concat([u]);
        h.push({
          op: t,
          path: s,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: O(p[u])
        }), v.push({
          op: t,
          path: s,
          value: O(g[u])
        });
      }
    for (let u = g.length; u < p.length; u++) {
      const s = l.concat([u]);
      h.push({
        op: n,
        path: s,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: O(p[u])
      });
    }
    for (let u = p.length - 1; g.length <= u; --u) {
      const s = l.concat([u]);
      v.push({
        op: o,
        path: s
      });
    }
  }
  function m(c, l, h, v) {
    const { base_: g, copy_: _ } = c;
    Ze(c.assigned_, (p, u) => {
      const s = Ht(g, p), d = Ht(_, p), E = u ? Xe(g, p) ? t : n : o;
      if (s === d && E === t)
        return;
      const w = l.concat(p);
      h.push(E === o ? { op: E, path: w } : { op: E, path: w, value: d }), v.push(
        E === n ? { op: o, path: w } : E === o ? { op: n, path: w, value: O(s) } : { op: t, path: w, value: O(s) }
      );
    });
  }
  function S(c, l, h, v) {
    let { base_: g, copy_: _ } = c, p = 0;
    g.forEach((u) => {
      if (!_.has(u)) {
        const s = l.concat([p]);
        h.push({
          op: o,
          path: s,
          value: u
        }), v.unshift({
          op: n,
          path: s,
          value: u
        });
      }
      p++;
    }), p = 0, _.forEach((u) => {
      if (!g.has(u)) {
        const s = l.concat([p]);
        h.push({
          op: n,
          path: s,
          value: u
        }), v.unshift({
          op: o,
          path: s,
          value: u
        });
      }
      p++;
    });
  }
  function T(c, l, h, v) {
    h.push({
      op: t,
      path: [],
      value: l === _r ? void 0 : l
    }), v.push({
      op: t,
      path: [],
      value: c
    });
  }
  function b(c, l) {
    return l.forEach((h) => {
      const { path: v, op: g } = h;
      let _ = c;
      for (let d = 0; d < v.length - 1; d++) {
        const E = ke(_);
        let w = v[d];
        typeof w != "string" && typeof w != "number" && (w = "" + w), (E === 0 || E === 1) && (w === "__proto__" || w === "constructor") && ce(19), typeof _ == "function" && w === "prototype" && ce(19), _ = Ht(_, w), typeof _ != "object" && ce(18, v.join("/"));
      }
      const p = ke(_), u = A(h.value), s = v[v.length - 1];
      switch (g) {
        case t:
          switch (p) {
            case 2:
              return _.set(s, u);
            case 3:
              ce(16);
            default:
              return _[s] = u;
          }
        case n:
          switch (p) {
            case 1:
              return s === "-" ? _.push(u) : _.splice(s, 0, u);
            case 2:
              return _.set(s, u);
            case 3:
              return _.add(u);
            default:
              return _[s] = u;
          }
        case o:
          switch (p) {
            case 1:
              return _.splice(s, 1);
            case 2:
              return _.delete(s);
            case 3:
              return _.delete(h.value);
            default:
              return delete _[s];
          }
        default:
          ce(17, g);
      }
    }), c;
  }
  function A(c) {
    if (!ge(c))
      return c;
    if (Array.isArray(c))
      return c.map(A);
    if (it(c))
      return new Map(
        Array.from(c.entries()).map(([h, v]) => [h, A(v)])
      );
    if (st(c))
      return new Set(Array.from(c).map(A));
    const l = Object.create(Ae(c));
    for (const h in c)
      l[h] = A(c[h]);
    return Xe(c, He) && (l[He] = c[He]), l;
  }
  function O(c) {
    return ve(c) ? A(c) : c;
  }
  fs("Patches", {
    applyPatches_: b,
    generatePatches_: i,
    generateReplacementPatches_: T
  });
}
var ye = new ms(), ut = ye.produce, fo = ye.produceWithPatches.bind(
  ye
);
ye.setAutoFreeze.bind(ye);
ye.setUseStrictShallowCopy.bind(ye);
var En = ye.applyPatches.bind(ye);
ye.createDraft.bind(ye);
ye.finishDraft.bind(ye);
var gs = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let o = !1;
    try {
      const i = {};
      e(i) === i && (o = !0);
    } catch {
    }
    if (o) {
      let i;
      try {
        throw new Error();
      } catch (f) {
        ({ stack: i } = f);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, bs = (e, t, n) => {
  const { memoize: o, memoizeOptions: i } = t, { inputSelectorResults: f, inputSelectorResultsCopy: m } = e, S = o(() => ({}), ...i);
  if (!(S.apply(null, f) === S.apply(null, m))) {
    let b;
    try {
      throw new Error();
    } catch (A) {
      ({ stack: b } = A);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: f,
        secondInputs: m,
        stack: b
      }
    );
  }
}, _s = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Es(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Ss(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function ws(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Sn = (e) => Array.isArray(e) ? e : [e];
function Rs(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return ws(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function wn(e, t) {
  const n = [], { length: o } = e;
  for (let i = 0; i < o; i++)
    n.push(e[i].apply(null, t));
  return n;
}
var Os = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: o } = {
    ..._s,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: gs
    },
    inputStabilityCheck: {
      shouldRun: o === "always" || o === "once" && e,
      run: bs
    }
  };
}, Cs = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, As = typeof WeakRef < "u" ? WeakRef : Cs, ks = 0, Rn = 1;
function _t() {
  return {
    s: ks,
    v: void 0,
    o: null,
    p: null
  };
}
function rt(e, t = {}) {
  let n = _t();
  const { resultEqualityCheck: o } = t;
  let i, f = 0;
  function m() {
    var O;
    let S = n;
    const { length: T } = arguments;
    for (let c = 0, l = T; c < l; c++) {
      const h = arguments[c];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let v = S.o;
        v === null && (S.o = v = /* @__PURE__ */ new WeakMap());
        const g = v.get(h);
        g === void 0 ? (S = _t(), v.set(h, S)) : S = g;
      } else {
        let v = S.p;
        v === null && (S.p = v = /* @__PURE__ */ new Map());
        const g = v.get(h);
        g === void 0 ? (S = _t(), v.set(h, S)) : S = g;
      }
    }
    const b = S;
    let A;
    if (S.s === Rn ? A = S.v : (A = e.apply(null, arguments), f++), b.s = Rn, o) {
      const c = ((O = i == null ? void 0 : i.deref) == null ? void 0 : O.call(i)) ?? i;
      c != null && o(c, A) && (A = c, f !== 0 && f--), i = typeof A == "object" && A !== null || typeof A == "function" ? new As(A) : A;
    }
    return b.v = A, A;
  }
  return m.clearCache = () => {
    n = _t(), m.resetResultsCount();
  }, m.resultsCount = () => f, m.resetResultsCount = () => {
    f = 0;
  }, m;
}
function po(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, o = (...i) => {
    let f = 0, m = 0, S, T = {}, b = i.pop();
    typeof b == "object" && (T = b, b = i.pop()), Es(
      b,
      `createSelector expects an output function after the inputs, but received: [${typeof b}]`
    );
    const A = {
      ...n,
      ...T
    }, {
      memoize: O,
      memoizeOptions: c = [],
      argsMemoize: l = rt,
      argsMemoizeOptions: h = [],
      devModeChecks: v = {}
    } = A, g = Sn(c), _ = Sn(h), p = Rs(i), u = O(function() {
      return f++, b.apply(
        null,
        arguments
      );
    }, ...g);
    let s = !0;
    const d = l(function() {
      m++;
      const w = wn(
        p,
        arguments
      );
      if (S = u.apply(null, w), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: C, inputStabilityCheck: D } = Os(s, v);
        if (C.shouldRun && C.run(
          b,
          w,
          S
        ), D.shouldRun) {
          const N = wn(
            p,
            arguments
          );
          D.run(
            { inputSelectorResults: w, inputSelectorResultsCopy: N },
            { memoize: O, memoizeOptions: g },
            arguments
          );
        }
        s && (s = !1);
      }
      return S;
    }, ..._);
    return Object.assign(d, {
      resultFunc: b,
      memoizedResultFunc: u,
      dependencies: p,
      dependencyRecomputations: () => m,
      resetDependencyRecomputations: () => {
        m = 0;
      },
      lastResult: () => S,
      recomputations: () => f,
      resetRecomputations: () => {
        f = 0;
      },
      memoize: O,
      argsMemoize: l
    });
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var wr = /* @__PURE__ */ po(rt), Ts = Object.assign(
  (e, t = wr) => {
    Ss(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), o = n.map(
      (f) => e[f]
    );
    return t(
      o,
      (...f) => f.reduce((m, S, T) => (m[n[T]] = S, m), {})
    );
  },
  { withTypes: () => Ts }
), Ns = (...e) => {
  const t = po(...e), n = Object.assign((...o) => {
    const i = t(...o), f = (m, ...S) => i(ve(m) ? co(m) : m, ...S);
    return Object.assign(f, i), f;
  }, {
    withTypes: () => n
  });
  return n;
};
Ns(rt);
var Ds = (e) => e && typeof e.match == "function";
function pe(e, t) {
  function n(...o) {
    if (t) {
      let i = t(...o);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? X(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: o[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (o) => no(o) && o.type === e, n;
}
function On(e) {
  return ge(e) ? ut(e, () => {
  }) : e;
}
function Cn(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && (i = n.update(i, t, e), e.set(t, i)), i;
  }
  if (!n.insert)
    throw new Error(process.env.NODE_ENV === "production" ? X(10) : "No insert provided for key not already in map");
  const o = n.insert(t, e);
  return e.set(t, o), o;
}
var We = "RTK_autoBatch", Qe = () => (e) => ({
  payload: e,
  meta: {
    [We]: !0
  }
});
process.env.NODE_ENV;
function ho(e) {
  const t = {}, n = [];
  let o;
  const i = {
    addCase(f, m) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? X(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (o)
          throw new Error(process.env.NODE_ENV === "production" ? X(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const S = typeof f == "string" ? f : f.type;
      if (!S)
        throw new Error(process.env.NODE_ENV === "production" ? X(28) : "`builder.addCase` cannot be called with an empty action type");
      if (S in t)
        throw new Error(process.env.NODE_ENV === "production" ? X(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${S}'`);
      return t[S] = m, i;
    },
    addMatcher(f, m) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? X(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: f,
        reducer: m
      }), i;
    },
    addDefaultCase(f) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? X(31) : "`builder.addDefaultCase` can only be called once");
      return o = f, i;
    }
  };
  return e(i), [t, n, o];
}
function Ps(e) {
  return typeof e == "function";
}
function Ms(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? X(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, o, i] = ho(t), f;
  if (Ps(e))
    f = () => On(e());
  else {
    const S = On(e);
    f = () => S;
  }
  function m(S = f(), T) {
    let b = [n[T.type], ...o.filter(({
      matcher: A
    }) => A(T)).map(({
      reducer: A
    }) => A)];
    return b.filter((A) => !!A).length === 0 && (b = [i]), b.reduce((A, O) => {
      if (O)
        if (ve(A)) {
          const l = O(A, T);
          return l === void 0 ? A : l;
        } else {
          if (ge(A))
            return ut(A, (c) => O(c, T));
          {
            const c = O(A, T);
            if (c === void 0) {
              if (A === null)
                return A;
              throw new Error(process.env.NODE_ENV === "production" ? X(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return c;
          }
        }
      return A;
    }, S);
  }
  return m.getInitialState = f, m;
}
var Is = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Rr = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Is[Math.random() * 64 | 0];
  return t;
}, yo = (e, t) => Ds(e) ? e.match(t) : e(t);
function Ee(...e) {
  return (t) => e.some((n) => yo(n, t));
}
function Ye(...e) {
  return (t) => e.every((n) => yo(n, t));
}
function Pt(e, t) {
  if (!e || !e.meta)
    return !1;
  const n = typeof e.meta.requestId == "string", o = t.indexOf(e.meta.requestStatus) > -1;
  return n && o;
}
function at(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Or(...e) {
  return e.length === 0 ? (t) => Pt(t, ["pending"]) : at(e) ? (t) => {
    const n = e.map((i) => i.pending);
    return Ee(...n)(t);
  } : Or()(e[0]);
}
function Fe(...e) {
  return e.length === 0 ? (t) => Pt(t, ["rejected"]) : at(e) ? (t) => {
    const n = e.map((i) => i.rejected);
    return Ee(...n)(t);
  } : Fe()(e[0]);
}
function Mt(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? (n) => Ye(Fe(...e), t)(n) : at(e) ? (n) => Ye(Fe(...e), t)(n) : Mt()(e[0]);
}
function Re(...e) {
  return e.length === 0 ? (t) => Pt(t, ["fulfilled"]) : at(e) ? (t) => {
    const n = e.map((i) => i.fulfilled);
    return Ee(...n)(t);
  } : Re()(e[0]);
}
function lr(...e) {
  return e.length === 0 ? (t) => Pt(t, ["pending", "fulfilled", "rejected"]) : at(e) ? (t) => {
    const n = [];
    for (const i of e)
      n.push(i.pending, i.rejected, i.fulfilled);
    return Ee(...n)(t);
  } : lr()(e[0]);
}
var js = ["name", "message", "stack", "code"], Jt = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    K(this, "_type");
    this.payload = e, this.meta = t;
  }
}, An = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    K(this, "_type");
    this.payload = e, this.meta = t;
  }
}, xs = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of js)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, kn = /* @__PURE__ */ (() => {
  function e(t, n, o) {
    const i = pe(t + "/fulfilled", (T, b, A, O) => ({
      payload: T,
      meta: {
        ...O || {},
        arg: A,
        requestId: b,
        requestStatus: "fulfilled"
      }
    })), f = pe(t + "/pending", (T, b, A) => ({
      payload: void 0,
      meta: {
        ...A || {},
        arg: b,
        requestId: T,
        requestStatus: "pending"
      }
    })), m = pe(t + "/rejected", (T, b, A, O, c) => ({
      payload: O,
      error: (o && o.serializeError || xs)(T || "Rejected"),
      meta: {
        ...c || {},
        arg: A,
        requestId: b,
        rejectedWithValue: !!O,
        requestStatus: "rejected",
        aborted: (T == null ? void 0 : T.name) === "AbortError",
        condition: (T == null ? void 0 : T.name) === "ConditionError"
      }
    }));
    function S(T) {
      return (b, A, O) => {
        const c = o != null && o.idGenerator ? o.idGenerator(T) : Rr(), l = new AbortController();
        let h, v;
        function g(p) {
          v = p, l.abort();
        }
        const _ = async function() {
          var s, d;
          let p;
          try {
            let E = (s = o == null ? void 0 : o.condition) == null ? void 0 : s.call(o, T, {
              getState: A,
              extra: O
            });
            if (Fs(E) && (E = await E), E === !1 || l.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const w = new Promise((C, D) => {
              h = () => {
                D({
                  name: "AbortError",
                  message: v || "Aborted"
                });
              }, l.signal.addEventListener("abort", h);
            });
            b(f(c, T, (d = o == null ? void 0 : o.getPendingMeta) == null ? void 0 : d.call(o, {
              requestId: c,
              arg: T
            }, {
              getState: A,
              extra: O
            }))), p = await Promise.race([w, Promise.resolve(n(T, {
              dispatch: b,
              getState: A,
              extra: O,
              requestId: c,
              signal: l.signal,
              abort: g,
              rejectWithValue: (C, D) => new Jt(C, D),
              fulfillWithValue: (C, D) => new An(C, D)
            })).then((C) => {
              if (C instanceof Jt)
                throw C;
              return C instanceof An ? i(C.payload, c, T, C.meta) : i(C, c, T);
            })]);
          } catch (E) {
            p = E instanceof Jt ? m(null, c, T, E.payload, E.meta) : m(E, c, T);
          } finally {
            h && l.signal.removeEventListener("abort", h);
          }
          return o && !o.dispatchConditionRejection && m.match(p) && p.meta.condition || b(p), p;
        }();
        return Object.assign(_, {
          abort: g,
          requestId: c,
          arg: T,
          unwrap() {
            return _.then($s);
          }
        });
      };
    }
    return Object.assign(S, {
      pending: f,
      rejected: m,
      fulfilled: i,
      settled: Ee(m, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function $s(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Fs(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Vs = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function qs(e, t) {
  return `${e}/${t}`;
}
function zs({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Vs];
  return function(i) {
    const {
      name: f,
      reducerPath: m = f
    } = i;
    if (!f)
      throw new Error(process.env.NODE_ENV === "production" ? X(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const S = (typeof i.reducers == "function" ? i.reducers(Ls()) : i.reducers) || {}, T = Object.keys(S), b = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, A = {
      addCase(u, s) {
        const d = typeof u == "string" ? u : u.type;
        if (!d)
          throw new Error(process.env.NODE_ENV === "production" ? X(12) : "`context.addCase` cannot be called with an empty action type");
        if (d in b.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? X(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + d);
        return b.sliceCaseReducersByType[d] = s, A;
      },
      addMatcher(u, s) {
        return b.sliceMatchers.push({
          matcher: u,
          reducer: s
        }), A;
      },
      exposeAction(u, s) {
        return b.actionCreators[u] = s, A;
      },
      exposeCaseReducer(u, s) {
        return b.sliceCaseReducersByName[u] = s, A;
      }
    };
    T.forEach((u) => {
      const s = S[u], d = {
        reducerName: u,
        type: qs(f, u),
        createNotation: typeof i.reducers == "function"
      };
      Ws(s) ? Ks(d, s, A, t) : Us(d, s, A);
    });
    function O() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? X(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [u = {}, s = [], d = void 0] = typeof i.extraReducers == "function" ? ho(i.extraReducers) : [i.extraReducers], E = {
        ...u,
        ...b.sliceCaseReducersByType
      };
      return Ms(i.initialState, (w) => {
        for (let C in E)
          w.addCase(C, E[C]);
        for (let C of b.sliceMatchers)
          w.addMatcher(C.matcher, C.reducer);
        for (let C of s)
          w.addMatcher(C.matcher, C.reducer);
        d && w.addDefaultCase(d);
      });
    }
    const c = (u) => u, l = /* @__PURE__ */ new Map();
    let h;
    function v(u, s) {
      return h || (h = O()), h(u, s);
    }
    function g() {
      return h || (h = O()), h.getInitialState();
    }
    function _(u, s = !1) {
      function d(w) {
        let C = w[u];
        if (typeof C > "u") {
          if (s)
            C = g();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? X(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return C;
      }
      function E(w = c) {
        const C = Cn(l, s, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Cn(C, w, {
          insert: () => {
            const D = {};
            for (const [N, j] of Object.entries(i.selectors ?? {}))
              D[N] = Qs(j, w, g, s);
            return D;
          }
        });
      }
      return {
        reducerPath: u,
        getSelectors: E,
        get selectors() {
          return E(d);
        },
        selectSlice: d
      };
    }
    const p = {
      name: f,
      reducer: v,
      actions: b.actionCreators,
      caseReducers: b.sliceCaseReducersByName,
      getInitialState: g,
      ..._(m),
      injectInto(u, {
        reducerPath: s,
        ...d
      } = {}) {
        const E = s ?? m;
        return u.inject({
          reducerPath: E,
          reducer: v
        }, d), {
          ...p,
          ..._(E, !0)
        };
      }
    };
    return p;
  };
}
function Qs(e, t, n, o) {
  function i(f, ...m) {
    let S = t(f);
    if (typeof S > "u") {
      if (o)
        S = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? X(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(S, ...m);
  }
  return i.unwrapped = e, i;
}
var Ie = /* @__PURE__ */ zs();
function Ls() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function Us({
  type: e,
  reducerName: t,
  createNotation: n
}, o, i) {
  let f, m;
  if ("reducer" in o) {
    if (n && !Bs(o))
      throw new Error(process.env.NODE_ENV === "production" ? X(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    f = o.reducer, m = o.prepare;
  } else
    f = o;
  i.addCase(e, f).exposeCaseReducer(t, f).exposeAction(t, m ? pe(e, m) : pe(e));
}
function Ws(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Bs(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ks({
  type: e,
  reducerName: t
}, n, o, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? X(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: f,
    fulfilled: m,
    pending: S,
    rejected: T,
    settled: b,
    options: A
  } = n, O = i(e, f, A);
  o.exposeAction(t, O), m && o.addCase(O.fulfilled, m), S && o.addCase(O.pending, S), T && o.addCase(O.rejected, T), b && o.addMatcher(O.settled, b), o.exposeCaseReducer(t, {
    fulfilled: m || Et,
    pending: S || Et,
    rejected: T || Et,
    settled: b || Et
  });
}
function Et() {
}
var Hs = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? X(32) : `${t} is not a function`);
}, Cr = "listenerMiddleware", Ys = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: o,
    predicate: i,
    effect: f
  } = e;
  if (t)
    i = pe(t).match;
  else if (n)
    t = n.type, i = n.match;
  else if (o)
    i = o;
  else if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? X(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Hs(f, "options.listener"), {
    predicate: i,
    type: t,
    effect: f
  };
}, Gs = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: o
  } = Ys(e);
  return {
    id: Rr(),
    effect: o,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? X(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Gs
}), Js = Object.assign(pe(`${Cr}/add`), {
  withTypes: () => Js
});
pe(`${Cr}/removeAll`);
var Zs = Object.assign(pe(`${Cr}/remove`), {
  withTypes: () => Zs
});
function X(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var mo = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(mo || {});
function Xs(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
function eu(e) {
  return new RegExp("(^|:)//").test(e);
}
var tu = (e) => e.replace(/\/$/, ""), ru = (e) => e.replace(/^\//, "");
function nu(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (eu(t))
    return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = tu(e), t = ru(t), `${e}${n}${t}`;
}
var Tn = (e) => [].concat(...e);
function ou() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function iu() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Nn = _e;
function vo(e, t) {
  if (e === t || !(Nn(e) && Nn(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const n = Object.keys(t), o = Object.keys(e);
  let i = n.length === o.length;
  const f = Array.isArray(t) ? [] : {};
  for (const m of n)
    f[m] = vo(e[m], t[m]), i && (i = e[m] === f[m]);
  return i ? e : f;
}
var Dn = (...e) => fetch(...e), su = (e) => e.status >= 200 && e.status <= 299, uu = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Pn(e) {
  if (!_e(e))
    return e;
  const t = {
    ...e
  };
  for (const [n, o] of Object.entries(t))
    o === void 0 && delete t[n];
  return t;
}
function au({
  baseUrl: e,
  prepareHeaders: t = (O) => O,
  fetchFn: n = Dn,
  paramsSerializer: o,
  isJsonContentType: i = uu,
  jsonContentType: f = "application/json",
  jsonReplacer: m,
  timeout: S,
  responseHandler: T,
  validateStatus: b,
  ...A
} = {}) {
  return typeof fetch > "u" && n === Dn && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (c, l) => {
    const {
      signal: h,
      getState: v,
      extra: g,
      endpoint: _,
      forced: p,
      type: u
    } = l;
    let s, {
      url: d,
      headers: E = new Headers(A.headers),
      params: w = void 0,
      responseHandler: C = T ?? "json",
      validateStatus: D = b ?? su,
      timeout: N = S,
      ...j
    } = typeof c == "string" ? {
      url: c
    } : c, M = {
      ...A,
      signal: h,
      ...j
    };
    E = new Headers(Pn(E)), M.headers = await t(E, {
      getState: v,
      extra: g,
      endpoint: _,
      forced: p,
      type: u
    }) || E;
    const q = ($) => typeof $ == "object" && (_e($) || Array.isArray($) || typeof $.toJSON == "function");
    if (!M.headers.has("content-type") && q(M.body) && M.headers.set("content-type", f), q(M.body) && i(M.headers) && (M.body = JSON.stringify(M.body, m)), w) {
      const $ = ~d.indexOf("?") ? "&" : "?", B = o ? o(w) : new URLSearchParams(Pn(w));
      d += $ + B;
    }
    d = nu(e, d);
    const z = new Request(d, M);
    s = {
      request: new Request(d, M)
    };
    let L, x = !1, G = N && setTimeout(() => {
      x = !0, l.abort();
    }, N);
    try {
      L = await n(z);
    } catch ($) {
      return {
        error: {
          status: x ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String($)
        },
        meta: s
      };
    } finally {
      G && clearTimeout(G);
    }
    const se = L.clone();
    s.response = se;
    let y, P = "";
    try {
      let $;
      if (await Promise.all([
        O(L, C).then((B) => y = B, (B) => $ = B),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        se.text().then((B) => P = B, () => {
        })
      ]), $)
        throw $;
    } catch ($) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: L.status,
          data: P,
          error: String($)
        },
        meta: s
      };
    }
    return D(L, y) ? {
      data: y,
      meta: s
    } : {
      error: {
        status: L.status,
        data: y
      },
      meta: s
    };
  };
  async function O(c, l) {
    if (typeof l == "function")
      return l(c);
    if (l === "content-type" && (l = i(c.headers) ? "json" : "text"), l === "json") {
      const h = await c.text();
      return h.length ? JSON.parse(h) : null;
    }
    return c.text();
  }
}
var Mn = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, Ar = /* @__PURE__ */ pe("__rtkq/focused"), go = /* @__PURE__ */ pe("__rtkq/unfocused"), kr = /* @__PURE__ */ pe("__rtkq/online"), bo = /* @__PURE__ */ pe("__rtkq/offline");
function _o(e) {
  return e.type === "query";
}
function cu(e) {
  return e.type === "mutation";
}
function Tr(e, t, n, o, i, f) {
  return lu(e) ? e(t, n, o, i).map(fr).map(f) : Array.isArray(e) ? e.map(fr).map(f) : [];
}
function lu(e) {
  return typeof e == "function";
}
function fr(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function In(e) {
  return e != null;
}
function $e(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
function fu(e, t) {
  return e.catch(t);
}
var nt = Symbol("forceQueryFn"), dr = (e) => typeof e[nt] == "function";
function du({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: o,
  context: i
}) {
  const f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: S,
    removeMutationResult: T,
    updateSubscriptionOptions: b
  } = o.internalActions;
  return {
    buildInitiateQuery: v,
    buildInitiateMutation: g,
    getRunningQueryThunk: A,
    getRunningMutationThunk: O,
    getRunningQueriesThunk: c,
    getRunningMutationsThunk: l
  };
  function A(_, p) {
    return (u) => {
      var E;
      const s = i.endpointDefinitions[_], d = e({
        queryArgs: p,
        endpointDefinition: s,
        endpointName: _
      });
      return (E = f.get(u)) == null ? void 0 : E[d];
    };
  }
  function O(_, p) {
    return (u) => {
      var s;
      return (s = m.get(u)) == null ? void 0 : s[p];
    };
  }
  function c() {
    return (_) => Object.values(f.get(_) || {}).filter(In);
  }
  function l() {
    return (_) => Object.values(m.get(_) || {}).filter(In);
  }
  function h(_) {
    if (process.env.NODE_ENV !== "production") {
      if (h.triggered)
        return;
      const p = _(o.internalActions.internal_getRTKQSubscriptions());
      if (h.triggered = !0, typeof p != "object" || typeof (p == null ? void 0 : p.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? X(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function v(_, p) {
    const u = (s, {
      subscribe: d = !0,
      forceRefetch: E,
      subscriptionOptions: w,
      [nt]: C,
      ...D
    } = {}) => (N, j) => {
      var B;
      const M = e({
        queryArgs: s,
        endpointDefinition: p,
        endpointName: _
      }), q = t({
        ...D,
        type: "query",
        subscribe: d,
        forceRefetch: E,
        subscriptionOptions: w,
        endpointName: _,
        originalArgs: s,
        queryCacheKey: M,
        [nt]: C
      }), z = o.endpoints[_].select(s), V = N(q), L = z(j());
      h(N);
      const {
        requestId: x,
        abort: G
      } = V, se = L.requestId !== x, y = (B = f.get(N)) == null ? void 0 : B[M], P = () => z(j()), $ = Object.assign(C ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        V.then(P)
      ) : se && !y ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(L)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([y, V]).then(P)
      ), {
        arg: s,
        requestId: x,
        subscriptionOptions: w,
        queryCacheKey: M,
        abort: G,
        async unwrap() {
          const U = await $;
          if (U.isError)
            throw U.error;
          return U.data;
        },
        refetch: () => N(u(s, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          d && N(S({
            queryCacheKey: M,
            requestId: x
          }));
        },
        updateSubscriptionOptions(U) {
          $.subscriptionOptions = U, N(b({
            endpointName: _,
            requestId: x,
            queryCacheKey: M,
            options: U
          }));
        }
      });
      if (!y && !se && !C) {
        const U = f.get(N) || {};
        U[M] = $, f.set(N, U), $.then(() => {
          delete U[M], $e(U) || f.delete(N);
        });
      }
      return $;
    };
    return u;
  }
  function g(_) {
    return (p, {
      track: u = !0,
      fixedCacheKey: s
    } = {}) => (d, E) => {
      const w = n({
        type: "mutation",
        endpointName: _,
        originalArgs: p,
        track: u,
        fixedCacheKey: s
      }), C = d(w);
      h(d);
      const {
        requestId: D,
        abort: N,
        unwrap: j
      } = C, M = fu(C.unwrap().then((L) => ({
        data: L
      })), (L) => ({
        error: L
      })), q = () => {
        d(T({
          requestId: D,
          fixedCacheKey: s
        }));
      }, z = Object.assign(M, {
        arg: C.arg,
        requestId: D,
        abort: N,
        unwrap: j,
        reset: q
      }), V = m.get(d) || {};
      return m.set(d, V), V[D] = z, z.then(() => {
        delete V[D], $e(V) || m.delete(d);
      }), s && (V[s] = z, z.then(() => {
        V[s] === z && (delete V[s], $e(V) || m.delete(d));
      })), z;
    };
  }
}
function jn(e) {
  return e;
}
function pu({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: o,
  api: i,
  assertTagType: f
}) {
  const m = (p, u, s, d) => (E, w) => {
    const C = n[p], D = o({
      queryArgs: u,
      endpointDefinition: C,
      endpointName: p
    });
    if (E(i.internalActions.queryResultPatched({
      queryCacheKey: D,
      patches: s
    })), !d)
      return;
    const N = i.endpoints[p].select(u)(
      // Work around TS 4.1 mismatch
      w()
    ), j = Tr(C.providesTags, N.data, void 0, u, {}, f);
    E(i.internalActions.updateProvidedBy({
      queryCacheKey: D,
      providedTags: j
    }));
  }, S = (p, u, s, d = !0) => (E, w) => {
    const D = i.endpoints[p].select(u)(
      // Work around TS 4.1 mismatch
      w()
    );
    let N = {
      patches: [],
      inversePatches: [],
      undo: () => E(i.util.patchQueryData(p, u, N.inversePatches, d))
    };
    if (D.status === "uninitialized")
      return N;
    let j;
    if ("data" in D)
      if (ge(D.data)) {
        const [M, q, z] = fo(D.data, s);
        N.patches.push(...q), N.inversePatches.push(...z), j = M;
      } else
        j = s(D.data), N.patches.push({
          op: "replace",
          path: [],
          value: j
        }), N.inversePatches.push({
          op: "replace",
          path: [],
          value: D.data
        });
    return N.patches.length === 0 || E(i.util.patchQueryData(p, u, N.patches, d)), N;
  }, T = (p, u, s) => (d) => d(i.endpoints[p].initiate(u, {
    subscribe: !1,
    forceRefetch: !0,
    [nt]: () => ({
      data: s
    })
  })), b = async (p, {
    signal: u,
    abort: s,
    rejectWithValue: d,
    fulfillWithValue: E,
    dispatch: w,
    getState: C,
    extra: D
  }) => {
    const N = n[p.endpointName];
    try {
      let j = jn, M;
      const q = {
        signal: u,
        abort: s,
        dispatch: w,
        getState: C,
        extra: D,
        endpoint: p.endpointName,
        type: p.type,
        forced: p.type === "query" ? A(p, C()) : void 0
      }, z = p.type === "query" ? p[nt] : void 0;
      if (z ? M = z() : N.query ? (M = await t(N.query(p.originalArgs), q, N.extraOptions), N.transformResponse && (j = N.transformResponse)) : M = await N.queryFn(p.originalArgs, q, N.extraOptions, (V) => t(V, q, N.extraOptions)), typeof process < "u" && process.env.NODE_ENV === "development") {
        const V = N.query ? "`baseQuery`" : "`queryFn`";
        let L;
        if (!M)
          L = `${V} did not return anything.`;
        else if (typeof M != "object")
          L = `${V} did not return an object.`;
        else if (M.error && M.data)
          L = `${V} returned an object containing both \`error\` and \`result\`.`;
        else if (M.error === void 0 && M.data === void 0)
          L = `${V} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
        else
          for (const x of Object.keys(M))
            if (x !== "error" && x !== "data" && x !== "meta") {
              L = `The object returned by ${V} has the unknown property ${x}.`;
              break;
            }
        L && console.error(`Error encountered handling the endpoint ${p.endpointName}.
              ${L}
              It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
              Object returned was:`, M);
      }
      if (M.error)
        throw new Mn(M.error, M.meta);
      return E(await j(M.data, M.meta, p.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: M.meta,
        [We]: !0
      });
    } catch (j) {
      let M = j;
      if (M instanceof Mn) {
        let q = jn;
        N.query && N.transformErrorResponse && (q = N.transformErrorResponse);
        try {
          return d(await q(M.value, M.meta, p.originalArgs), {
            baseQueryMeta: M.meta,
            [We]: !0
          });
        } catch (z) {
          M = z;
        }
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${p.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, M) : console.error(M), M;
    }
  };
  function A(p, u) {
    var C, D, N;
    const s = (D = (C = u[e]) == null ? void 0 : C.queries) == null ? void 0 : D[p.queryCacheKey], d = (N = u[e]) == null ? void 0 : N.config.refetchOnMountOrArgChange, E = s == null ? void 0 : s.fulfilledTimeStamp, w = p.forceRefetch ?? (p.subscribe && d);
    return w ? w === !0 || (Number(/* @__PURE__ */ new Date()) - Number(E)) / 1e3 >= w : !1;
  }
  const O = kn(`${e}/executeQuery`, b, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [We]: !0
      };
    },
    condition(p, {
      getState: u
    }) {
      var N, j, M;
      const s = u(), d = (j = (N = s[e]) == null ? void 0 : N.queries) == null ? void 0 : j[p.queryCacheKey], E = d == null ? void 0 : d.fulfilledTimeStamp, w = p.originalArgs, C = d == null ? void 0 : d.originalArgs, D = n[p.endpointName];
      return dr(p) ? !0 : (d == null ? void 0 : d.status) === "pending" ? !1 : A(p, s) || _o(D) && ((M = D == null ? void 0 : D.forceRefetch) != null && M.call(D, {
        currentArg: w,
        previousArg: C,
        endpointState: d,
        state: s
      })) ? !0 : !E;
    },
    dispatchConditionRejection: !0
  }), c = kn(`${e}/executeMutation`, b, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [We]: !0
      };
    }
  }), l = (p) => "force" in p, h = (p) => "ifOlderThan" in p, v = (p, u, s) => (d, E) => {
    const w = l(s) && s.force, C = h(s) && s.ifOlderThan, D = (j = !0) => {
      const M = {
        forceRefetch: j,
        isPrefetch: !0
      };
      return i.endpoints[p].initiate(u, M);
    }, N = i.endpoints[p].select(u)(E());
    if (w)
      d(D());
    else if (C) {
      const j = N == null ? void 0 : N.fulfilledTimeStamp;
      if (!j) {
        d(D());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(j))) / 1e3 >= C && d(D());
    } else
      d(D(!1));
  };
  function g(p) {
    return (u) => {
      var s, d;
      return ((d = (s = u == null ? void 0 : u.meta) == null ? void 0 : s.arg) == null ? void 0 : d.endpointName) === p;
    };
  }
  function _(p, u) {
    return {
      matchPending: Ye(Or(p), g(u)),
      matchFulfilled: Ye(Re(p), g(u)),
      matchRejected: Ye(Fe(p), g(u))
    };
  }
  return {
    queryThunk: O,
    mutationThunk: c,
    prefetch: v,
    updateQueryData: S,
    upsertQueryData: T,
    patchQueryData: m,
    buildMatchThunkActions: _
  };
}
function Eo(e, t, n, o) {
  return Tr(n[e.meta.arg.endpointName][t], Re(e) ? e.payload : void 0, Mt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, o);
}
function St(e, t, n) {
  const o = e[t];
  o && n(o);
}
function ot(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function xn(e, t, n) {
  const o = e[ot(t)];
  o && n(o);
}
var Le = {};
function hu({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  context: {
    endpointDefinitions: o,
    apiUid: i,
    extractRehydrationInfo: f,
    hasRehydrationInfo: m
  },
  assertTagType: S,
  config: T
}) {
  const b = pe(`${e}/resetApiState`), A = Ie({
    name: `${e}/queries`,
    initialState: Le,
    reducers: {
      removeQueryResult: {
        reducer(u, {
          payload: {
            queryCacheKey: s
          }
        }) {
          delete u[s];
        },
        prepare: Qe()
      },
      queryResultPatched: {
        reducer(u, {
          payload: {
            queryCacheKey: s,
            patches: d
          }
        }) {
          St(u, s, (E) => {
            E.data = En(E.data, d.concat());
          });
        },
        prepare: Qe()
      }
    },
    extraReducers(u) {
      u.addCase(t.pending, (s, {
        meta: d,
        meta: {
          arg: E
        }
      }) => {
        var C;
        const w = dr(E);
        s[C = E.queryCacheKey] ?? (s[C] = {
          status: "uninitialized",
          endpointName: E.endpointName
        }), St(s, E.queryCacheKey, (D) => {
          D.status = "pending", D.requestId = w && D.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            D.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            d.requestId
          ), E.originalArgs !== void 0 && (D.originalArgs = E.originalArgs), D.startedTimeStamp = d.startedTimeStamp;
        });
      }).addCase(t.fulfilled, (s, {
        meta: d,
        payload: E
      }) => {
        St(s, d.arg.queryCacheKey, (w) => {
          if (w.requestId !== d.requestId && !dr(d.arg))
            return;
          const {
            merge: C
          } = o[d.arg.endpointName];
          if (w.status = "fulfilled", C)
            if (w.data !== void 0) {
              const {
                fulfilledTimeStamp: D,
                arg: N,
                baseQueryMeta: j,
                requestId: M
              } = d;
              let q = ut(w.data, (z) => C(z, E, {
                arg: N.originalArgs,
                baseQueryMeta: j,
                fulfilledTimeStamp: D,
                requestId: M
              }));
              w.data = q;
            } else
              w.data = E;
          else
            w.data = o[d.arg.endpointName].structuralSharing ?? !0 ? vo(ve(w.data) ? as(w.data) : w.data, E) : E;
          delete w.error, w.fulfilledTimeStamp = d.fulfilledTimeStamp;
        });
      }).addCase(t.rejected, (s, {
        meta: {
          condition: d,
          arg: E,
          requestId: w
        },
        error: C,
        payload: D
      }) => {
        St(s, E.queryCacheKey, (N) => {
          if (!d) {
            if (N.requestId !== w)
              return;
            N.status = "rejected", N.error = D ?? C;
          }
        });
      }).addMatcher(m, (s, d) => {
        const {
          queries: E
        } = f(d);
        for (const [w, C] of Object.entries(E))
          // do not rehydrate entries that were currently in flight.
          ((C == null ? void 0 : C.status) === "fulfilled" || (C == null ? void 0 : C.status) === "rejected") && (s[w] = C);
      });
    }
  }), O = Ie({
    name: `${e}/mutations`,
    initialState: Le,
    reducers: {
      removeMutationResult: {
        reducer(u, {
          payload: s
        }) {
          const d = ot(s);
          d in u && delete u[d];
        },
        prepare: Qe()
      }
    },
    extraReducers(u) {
      u.addCase(n.pending, (s, {
        meta: d,
        meta: {
          requestId: E,
          arg: w,
          startedTimeStamp: C
        }
      }) => {
        w.track && (s[ot(d)] = {
          requestId: E,
          status: "pending",
          endpointName: w.endpointName,
          startedTimeStamp: C
        });
      }).addCase(n.fulfilled, (s, {
        payload: d,
        meta: E
      }) => {
        E.arg.track && xn(s, E, (w) => {
          w.requestId === E.requestId && (w.status = "fulfilled", w.data = d, w.fulfilledTimeStamp = E.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (s, {
        payload: d,
        error: E,
        meta: w
      }) => {
        w.arg.track && xn(s, w, (C) => {
          C.requestId === w.requestId && (C.status = "rejected", C.error = d ?? E);
        });
      }).addMatcher(m, (s, d) => {
        const {
          mutations: E
        } = f(d);
        for (const [w, C] of Object.entries(E))
          // do not rehydrate entries that were currently in flight.
          ((C == null ? void 0 : C.status) === "fulfilled" || (C == null ? void 0 : C.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          w !== (C == null ? void 0 : C.requestId) && (s[w] = C);
      });
    }
  }), c = Ie({
    name: `${e}/invalidation`,
    initialState: Le,
    reducers: {
      updateProvidedBy: {
        reducer(u, s) {
          var w, C;
          const {
            queryCacheKey: d,
            providedTags: E
          } = s.payload;
          for (const D of Object.values(u))
            for (const N of Object.values(D)) {
              const j = N.indexOf(d);
              j !== -1 && N.splice(j, 1);
            }
          for (const {
            type: D,
            id: N
          } of E) {
            const j = (w = u[D] ?? (u[D] = {}))[C = N || "__internal_without_id"] ?? (w[C] = []);
            j.includes(d) || j.push(d);
          }
        },
        prepare: Qe()
      }
    },
    extraReducers(u) {
      u.addCase(A.actions.removeQueryResult, (s, {
        payload: {
          queryCacheKey: d
        }
      }) => {
        for (const E of Object.values(s))
          for (const w of Object.values(E)) {
            const C = w.indexOf(d);
            C !== -1 && w.splice(C, 1);
          }
      }).addMatcher(m, (s, d) => {
        var w, C;
        const {
          provided: E
        } = f(d);
        for (const [D, N] of Object.entries(E))
          for (const [j, M] of Object.entries(N)) {
            const q = (w = s[D] ?? (s[D] = {}))[C = j || "__internal_without_id"] ?? (w[C] = []);
            for (const z of M)
              q.includes(z) || q.push(z);
          }
      }).addMatcher(Ee(Re(t), Mt(t)), (s, d) => {
        const E = Eo(d, "providesTags", o, S), {
          queryCacheKey: w
        } = d.meta.arg;
        c.caseReducers.updateProvidedBy(s, c.actions.updateProvidedBy({
          queryCacheKey: w,
          providedTags: E
        }));
      });
    }
  }), l = Ie({
    name: `${e}/subscriptions`,
    initialState: Le,
    reducers: {
      updateSubscriptionOptions(u, s) {
      },
      unsubscribeQueryResult(u, s) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), h = Ie({
    name: `${e}/internalSubscriptions`,
    initialState: Le,
    reducers: {
      subscriptionsUpdated: {
        reducer(u, s) {
          return En(u, s.payload);
        },
        prepare: Qe()
      }
    }
  }), v = Ie({
    name: `${e}/config`,
    initialState: {
      online: ou(),
      focused: iu(),
      middlewareRegistered: !1,
      ...T
    },
    reducers: {
      middlewareRegistered(u, {
        payload: s
      }) {
        u.middlewareRegistered = u.middlewareRegistered === "conflict" || i !== s ? "conflict" : !0;
      }
    },
    extraReducers: (u) => {
      u.addCase(kr, (s) => {
        s.online = !0;
      }).addCase(bo, (s) => {
        s.online = !1;
      }).addCase(Ar, (s) => {
        s.focused = !0;
      }).addCase(go, (s) => {
        s.focused = !1;
      }).addMatcher(m, (s) => ({
        ...s
      }));
    }
  }), g = ss({
    queries: A.reducer,
    mutations: O.reducer,
    provided: c.reducer,
    subscriptions: h.reducer,
    config: v.reducer
  }), _ = (u, s) => g(b.match(s) ? void 0 : u, s), p = {
    ...v.actions,
    ...A.actions,
    ...l.actions,
    ...h.actions,
    ...O.actions,
    ...c.actions,
    resetApiState: b
  };
  return {
    reducer: _,
    actions: p
  };
}
var Ce = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), So = {
  status: "uninitialized"
  /* uninitialized */
}, $n = /* @__PURE__ */ ut(So, () => {
}), Fn = /* @__PURE__ */ ut(So, () => {
});
function yu({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: n
}) {
  const o = (O) => $n, i = (O) => Fn;
  return {
    buildQuerySelector: S,
    buildMutationSelector: T,
    selectInvalidatedBy: b,
    selectCachedArgsForQuery: A
  };
  function f(O) {
    return {
      ...O,
      ...Xs(O.status)
    };
  }
  function m(O) {
    const c = O[t];
    if (process.env.NODE_ENV !== "production" && !c) {
      if (m.triggered)
        return c;
      m.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return c;
  }
  function S(O, c) {
    return (l) => {
      const h = e({
        queryArgs: l,
        endpointDefinition: c,
        endpointName: O
      });
      return n(l === Ce ? o : (_) => {
        var p, u;
        return ((u = (p = m(_)) == null ? void 0 : p.queries) == null ? void 0 : u[h]) ?? $n;
      }, f);
    };
  }
  function T() {
    return (O) => {
      let c;
      return typeof O == "object" ? c = ot(O) ?? Ce : c = O, n(c === Ce ? i : (v) => {
        var g, _;
        return ((_ = (g = m(v)) == null ? void 0 : g.mutations) == null ? void 0 : _[c]) ?? Fn;
      }, f);
    };
  }
  function b(O, c) {
    const l = O[t], h = /* @__PURE__ */ new Set();
    for (const v of c.map(fr)) {
      const g = l.provided[v.type];
      if (!g)
        continue;
      let _ = (v.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        g[v.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Tn(Object.values(g))
      )) ?? [];
      for (const p of _)
        h.add(p);
    }
    return Tn(Array.from(h.values()).map((v) => {
      const g = l.queries[v];
      return g ? [{
        queryCacheKey: v,
        endpointName: g.endpointName,
        originalArgs: g.originalArgs
      }] : [];
    }));
  }
  function A(O, c) {
    return Object.values(O[t].queries).filter(
      (l) => (l == null ? void 0 : l.endpointName) === c && l.status !== "uninitialized"
      /* uninitialized */
    ).map((l) => l.originalArgs);
  }
}
var je = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Vn = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const o = je == null ? void 0 : je.get(t);
  if (typeof o == "string")
    n = o;
  else {
    const i = JSON.stringify(t, (f, m) => _e(m) ? Object.keys(m).sort().reduce((S, T) => (S[T] = m[T], S), {}) : m);
    _e(t) && (je == null || je.set(t, i)), n = i;
  }
  return `${e}(${n})`;
};
function mu(...e) {
  return function(n) {
    const o = rt((b) => {
      var A;
      return (A = n.extractRehydrationInfo) == null ? void 0 : A.call(n, b, {
        reducerPath: n.reducerPath ?? "api"
      });
    }), i = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...n,
      extractRehydrationInfo: o,
      serializeQueryArgs(b) {
        let A = Vn;
        if ("serializeQueryArgs" in b.endpointDefinition) {
          const O = b.endpointDefinition.serializeQueryArgs;
          A = (c) => {
            const l = O(c);
            return typeof l == "string" ? l : Vn({
              ...c,
              queryArgs: l
            });
          };
        } else
          n.serializeQueryArgs && (A = n.serializeQueryArgs);
        return A(b);
      },
      tagTypes: [...n.tagTypes || []]
    }, f = {
      endpointDefinitions: {},
      batch(b) {
        b();
      },
      apiUid: Rr(),
      extractRehydrationInfo: o,
      hasRehydrationInfo: rt((b) => o(b) != null)
    }, m = {
      injectEndpoints: T,
      enhanceEndpoints({
        addTagTypes: b,
        endpoints: A
      }) {
        if (b)
          for (const O of b)
            i.tagTypes.includes(O) || i.tagTypes.push(O);
        if (A)
          for (const [O, c] of Object.entries(A))
            typeof c == "function" ? c(f.endpointDefinitions[O]) : Object.assign(f.endpointDefinitions[O] || {}, c);
        return m;
      }
    }, S = e.map((b) => b.init(m, i, f));
    function T(b) {
      const A = b.endpoints({
        query: (O) => ({
          ...O,
          type: "query"
          /* query */
        }),
        mutation: (O) => ({
          ...O,
          type: "mutation"
          /* mutation */
        })
      });
      for (const [O, c] of Object.entries(A)) {
        if (b.overrideExisting !== !0 && O in f.endpointDefinitions) {
          if (b.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? X(39) : `called \`injectEndpoints\` to override already-existing endpointName ${O} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${O} without specifying \`overrideExisting: true\``);
          continue;
        }
        f.endpointDefinitions[O] = c;
        for (const l of S)
          l.injectEndpoint(O, c);
      }
      return m;
    }
    return m.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function vu(e) {
  for (let t in e)
    return !1;
  return !0;
}
var gu = 2147483647 / 1e3 - 1, bu = ({
  reducerPath: e,
  api: t,
  queryThunk: n,
  context: o,
  internalState: i
}) => {
  const {
    removeQueryResult: f,
    unsubscribeQueryResult: m
  } = t.internalActions, S = Ee(m.match, n.fulfilled, n.rejected);
  function T(c) {
    const l = i.currentSubscriptions[c];
    return !!l && !vu(l);
  }
  const b = {}, A = (c, l, h) => {
    var v;
    if (S(c)) {
      const g = l.getState()[e], {
        queryCacheKey: _
      } = m.match(c) ? c.payload : c.meta.arg;
      O(_, (v = g.queries[_]) == null ? void 0 : v.endpointName, l, g.config);
    }
    if (t.util.resetApiState.match(c))
      for (const [g, _] of Object.entries(b))
        _ && clearTimeout(_), delete b[g];
    if (o.hasRehydrationInfo(c)) {
      const g = l.getState()[e], {
        queries: _
      } = o.extractRehydrationInfo(c);
      for (const [p, u] of Object.entries(_))
        O(p, u == null ? void 0 : u.endpointName, l, g.config);
    }
  };
  function O(c, l, h, v) {
    const g = o.endpointDefinitions[l], _ = (g == null ? void 0 : g.keepUnusedDataFor) ?? v.keepUnusedDataFor;
    if (_ === 1 / 0)
      return;
    const p = Math.max(0, Math.min(_, gu));
    if (!T(c)) {
      const u = b[c];
      u && clearTimeout(u), b[c] = setTimeout(() => {
        T(c) || h.dispatch(f({
          queryCacheKey: c
        })), delete b[c];
      }, p * 1e3);
    }
  }
  return A;
}, _u = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: o,
  queryThunk: i,
  api: f,
  assertTagType: m,
  refetchQuery: S,
  internalState: T
}) => {
  const {
    removeQueryResult: b
  } = f.internalActions, A = Ee(Re(o), Mt(o)), O = Ee(Re(o, i), Fe(o, i));
  let c = [];
  const l = (g, _) => {
    A(g) ? v(Eo(g, "invalidatesTags", n, m), _) : O(g) ? v([], _) : f.util.invalidateTags.match(g) && v(Tr(g.payload, void 0, void 0, void 0, void 0, m), _);
  };
  function h(g) {
    var _, p;
    for (const u in g.queries)
      if (((_ = g.queries[u]) == null ? void 0 : _.status) === "pending")
        return !0;
    for (const u in g.mutations)
      if (((p = g.mutations[u]) == null ? void 0 : p.status) === "pending")
        return !0;
    return !1;
  }
  function v(g, _) {
    const p = _.getState(), u = p[e];
    if (c.push(...g), u.config.invalidationBehavior === "delayed" && h(u))
      return;
    const s = c;
    if (c = [], s.length === 0)
      return;
    const d = f.util.selectInvalidatedBy(p, s);
    t.batch(() => {
      const E = Array.from(d.values());
      for (const {
        queryCacheKey: w
      } of E) {
        const C = u.queries[w], D = T.currentSubscriptions[w] ?? {};
        C && ($e(D) === 0 ? _.dispatch(b({
          queryCacheKey: w
        })) : C.status !== "uninitialized" && _.dispatch(S(C, w)));
      }
    });
  }
  return l;
}, Eu = ({
  reducerPath: e,
  queryThunk: t,
  api: n,
  refetchQuery: o,
  internalState: i
}) => {
  const f = {}, m = (c, l) => {
    (n.internalActions.updateSubscriptionOptions.match(c) || n.internalActions.unsubscribeQueryResult.match(c)) && T(c.payload, l), (t.pending.match(c) || t.rejected.match(c) && c.meta.condition) && T(c.meta.arg, l), (t.fulfilled.match(c) || t.rejected.match(c) && !c.meta.condition) && S(c.meta.arg, l), n.util.resetApiState.match(c) && A();
  };
  function S({
    queryCacheKey: c
  }, l) {
    const h = l.getState()[e], v = h.queries[c], g = i.currentSubscriptions[c];
    if (!v || v.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: _,
      skipPollingIfUnfocused: p
    } = O(g);
    if (!Number.isFinite(_))
      return;
    const u = f[c];
    u != null && u.timeout && (clearTimeout(u.timeout), u.timeout = void 0);
    const s = Date.now() + _;
    f[c] = {
      nextPollTimestamp: s,
      pollingInterval: _,
      timeout: setTimeout(() => {
        (h.config.focused || !p) && l.dispatch(o(v, c)), S({
          queryCacheKey: c
        }, l);
      }, _)
    };
  }
  function T({
    queryCacheKey: c
  }, l) {
    const v = l.getState()[e].queries[c], g = i.currentSubscriptions[c];
    if (!v || v.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: _
    } = O(g);
    if (!Number.isFinite(_)) {
      b(c);
      return;
    }
    const p = f[c], u = Date.now() + _;
    (!p || u < p.nextPollTimestamp) && S({
      queryCacheKey: c
    }, l);
  }
  function b(c) {
    const l = f[c];
    l != null && l.timeout && clearTimeout(l.timeout), delete f[c];
  }
  function A() {
    for (const c of Object.keys(f))
      b(c);
  }
  function O(c = {}) {
    let l = !1, h = Number.POSITIVE_INFINITY;
    for (let v in c)
      c[v].pollingInterval && (h = Math.min(c[v].pollingInterval, h), l = c[v].skipPollingIfUnfocused || l);
    return {
      lowestPollingInterval: h,
      skipPollingIfUnfocused: l
    };
  }
  return m;
}, Su = ({
  reducerPath: e,
  context: t,
  api: n,
  refetchQuery: o,
  internalState: i
}) => {
  const {
    removeQueryResult: f
  } = n.internalActions, m = (T, b) => {
    Ar.match(T) && S(b, "refetchOnFocus"), kr.match(T) && S(b, "refetchOnReconnect");
  };
  function S(T, b) {
    const A = T.getState()[e], O = A.queries, c = i.currentSubscriptions;
    t.batch(() => {
      for (const l of Object.keys(c)) {
        const h = O[l], v = c[l];
        if (!v || !h)
          continue;
        (Object.values(v).some((_) => _[b] === !0) || Object.values(v).every((_) => _[b] === void 0) && A.config[b]) && ($e(v) === 0 ? T.dispatch(f({
          queryCacheKey: l
        })) : h.status !== "uninitialized" && T.dispatch(o(h, l)));
      }
    });
  }
  return m;
}, qn = new Error("Promise never resolved before cacheEntryRemoved."), wu = ({
  api: e,
  reducerPath: t,
  context: n,
  queryThunk: o,
  mutationThunk: i,
  internalState: f
}) => {
  const m = lr(o), S = lr(i), T = Re(o, i), b = {}, A = (l, h, v) => {
    const g = O(l);
    if (o.pending.match(l)) {
      const _ = v[t].queries[g], p = h.getState()[t].queries[g];
      !_ && p && c(l.meta.arg.endpointName, l.meta.arg.originalArgs, g, h, l.meta.requestId);
    } else if (i.pending.match(l))
      h.getState()[t].mutations[g] && c(l.meta.arg.endpointName, l.meta.arg.originalArgs, g, h, l.meta.requestId);
    else if (T(l)) {
      const _ = b[g];
      _ != null && _.valueResolved && (_.valueResolved({
        data: l.payload,
        meta: l.meta.baseQueryMeta
      }), delete _.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(l) || e.internalActions.removeMutationResult.match(l)) {
      const _ = b[g];
      _ && (delete b[g], _.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(l))
      for (const [_, p] of Object.entries(b))
        delete b[_], p.cacheEntryRemoved();
  };
  function O(l) {
    return m(l) ? l.meta.arg.queryCacheKey : S(l) ? l.meta.arg.fixedCacheKey ?? l.meta.requestId : e.internalActions.removeQueryResult.match(l) ? l.payload.queryCacheKey : e.internalActions.removeMutationResult.match(l) ? ot(l.payload) : "";
  }
  function c(l, h, v, g, _) {
    const p = n.endpointDefinitions[l], u = p == null ? void 0 : p.onCacheEntryAdded;
    if (!u)
      return;
    let s = {};
    const d = new Promise((j) => {
      s.cacheEntryRemoved = j;
    }), E = Promise.race([new Promise((j) => {
      s.valueResolved = j;
    }), d.then(() => {
      throw qn;
    })]);
    E.catch(() => {
    }), b[v] = s;
    const w = e.endpoints[l].select(p.type === "query" ? h : v), C = g.dispatch((j, M, q) => q), D = {
      ...g,
      getCacheEntry: () => w(g.getState()),
      requestId: _,
      extra: C,
      updateCachedData: p.type === "query" ? (j) => g.dispatch(e.util.updateQueryData(l, h, j)) : void 0,
      cacheDataLoaded: E,
      cacheEntryRemoved: d
    }, N = u(h, D);
    Promise.resolve(N).catch((j) => {
      if (j !== qn)
        throw j;
    });
  }
  return A;
}, Ru = ({
  api: e,
  context: t,
  queryThunk: n,
  mutationThunk: o
}) => {
  const i = Or(n, o), f = Fe(n, o), m = Re(n, o), S = {};
  return (b, A) => {
    var O, c;
    if (i(b)) {
      const {
        requestId: l,
        arg: {
          endpointName: h,
          originalArgs: v
        }
      } = b.meta, g = t.endpointDefinitions[h], _ = g == null ? void 0 : g.onQueryStarted;
      if (_) {
        const p = {}, u = new Promise((w, C) => {
          p.resolve = w, p.reject = C;
        });
        u.catch(() => {
        }), S[l] = p;
        const s = e.endpoints[h].select(g.type === "query" ? v : l), d = A.dispatch((w, C, D) => D), E = {
          ...A,
          getCacheEntry: () => s(A.getState()),
          requestId: l,
          extra: d,
          updateCachedData: g.type === "query" ? (w) => A.dispatch(e.util.updateQueryData(h, v, w)) : void 0,
          queryFulfilled: u
        };
        _(v, E);
      }
    } else if (m(b)) {
      const {
        requestId: l,
        baseQueryMeta: h
      } = b.meta;
      (O = S[l]) == null || O.resolve({
        data: b.payload,
        meta: h
      }), delete S[l];
    } else if (f(b)) {
      const {
        requestId: l,
        rejectedWithValue: h,
        baseQueryMeta: v
      } = b.meta;
      (c = S[l]) == null || c.reject({
        error: b.payload ?? b.error,
        isUnhandledError: !h,
        meta: v
      }), delete S[l];
    }
  };
}, Ou = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: n
}) => (o, i) => {
  var f, m;
  e.util.resetApiState.match(o) && i.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(o) && o.payload === t && ((m = (f = i.getState()[n]) == null ? void 0 : f.config) == null ? void 0 : m.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${n}".
You can only have one api per reducer path, this will lead to crashes in various situations!${n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, Cu = ({
  api: e,
  queryThunk: t,
  internalState: n
}) => {
  const o = `${e.reducerPath}/subscriptions`;
  let i = null, f = null;
  const {
    updateSubscriptionOptions: m,
    unsubscribeQueryResult: S
  } = e.internalActions, T = (l, h) => {
    var g, _, p;
    if (m.match(h)) {
      const {
        queryCacheKey: u,
        requestId: s,
        options: d
      } = h.payload;
      return (g = l == null ? void 0 : l[u]) != null && g[s] && (l[u][s] = d), !0;
    }
    if (S.match(h)) {
      const {
        queryCacheKey: u,
        requestId: s
      } = h.payload;
      return l[u] && delete l[u][s], !0;
    }
    if (e.internalActions.removeQueryResult.match(h))
      return delete l[h.payload.queryCacheKey], !0;
    if (t.pending.match(h)) {
      const {
        meta: {
          arg: u,
          requestId: s
        }
      } = h, d = l[_ = u.queryCacheKey] ?? (l[_] = {});
      return d[`${s}_running`] = {}, u.subscribe && (d[s] = u.subscriptionOptions ?? d[s] ?? {}), !0;
    }
    let v = !1;
    if (t.fulfilled.match(h) || t.rejected.match(h)) {
      const u = l[h.meta.arg.queryCacheKey] || {}, s = `${h.meta.requestId}_running`;
      v || (v = !!u[s]), delete u[s];
    }
    if (t.rejected.match(h)) {
      const {
        meta: {
          condition: u,
          arg: s,
          requestId: d
        }
      } = h;
      if (u && s.subscribe) {
        const E = l[p = s.queryCacheKey] ?? (l[p] = {});
        E[d] = s.subscriptionOptions ?? E[d] ?? {}, v = !0;
      }
    }
    return v;
  }, b = () => n.currentSubscriptions, c = {
    getSubscriptions: b,
    getSubscriptionCount: (l) => {
      const v = b()[l] ?? {};
      return $e(v);
    },
    isRequestSubscribed: (l, h) => {
      var g;
      const v = b();
      return !!((g = v == null ? void 0 : v[l]) != null && g[h]);
    }
  };
  return (l, h) => {
    if (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(l))
      return i = n.currentSubscriptions = {}, f = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(l))
      return [!1, c];
    const v = T(n.currentSubscriptions, l);
    let g = !0;
    if (v) {
      f || (f = setTimeout(() => {
        const u = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, s] = fo(i, () => u);
        h.next(e.internalActions.subscriptionsUpdated(s)), i = u, f = null;
      }, 500));
      const _ = typeof l.type == "string" && !!l.type.startsWith(o), p = t.rejected.match(l) && l.meta.condition && !!l.meta.arg.subscribe;
      g = !_ && !p;
    }
    return [g, !1];
  };
};
function Au(e) {
  const {
    reducerPath: t,
    queryThunk: n,
    api: o,
    context: i
  } = e, {
    apiUid: f
  } = i, m = {
    invalidateTags: pe(`${t}/invalidateTags`)
  }, S = (O) => O.type.startsWith(`${t}/`), T = [Ou, bu, _u, Eu, wu, Ru];
  return {
    middleware: (O) => {
      let c = !1;
      const h = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: A,
        isThisApiSliceAction: S
      }, v = T.map((p) => p(h)), g = Cu(h), _ = Su(h);
      return (p) => (u) => {
        if (!no(u))
          return p(u);
        c || (c = !0, O.dispatch(o.internalActions.middlewareRegistered(f)));
        const s = {
          ...O,
          next: p
        }, d = O.getState(), [E, w] = g(u, s, d);
        let C;
        if (E ? C = p(u) : C = w, O.getState()[t] && (_(u, s, d), S(u) || i.hasRehydrationInfo(u)))
          for (let D of v)
            D(u, s, d);
        return C;
      };
    },
    actions: m
  };
  function A(O, c, l = {}) {
    return n({
      type: "query",
      endpointName: O.endpointName,
      originalArgs: O.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: c,
      ...l
    });
  }
}
function we(e, ...t) {
  return Object.assign(e, ...t);
}
var zn = /* @__PURE__ */ Symbol(), ku = ({
  createSelector: e = wr
} = {}) => ({
  name: zn,
  init(t, {
    baseQuery: n,
    tagTypes: o,
    reducerPath: i,
    serializeQueryArgs: f,
    keepUnusedDataFor: m,
    refetchOnMountOrArgChange: S,
    refetchOnFocus: T,
    refetchOnReconnect: b,
    invalidationBehavior: A
  }, O) {
    vs();
    const c = (G) => (typeof process < "u" && process.env.NODE_ENV === "development" && (o.includes(G.type) || console.error(`Tag type '${G.type}' was used, but not specified in \`tagTypes\`!`)), G);
    Object.assign(t, {
      reducerPath: i,
      endpoints: {},
      internalActions: {
        onOnline: kr,
        onOffline: bo,
        onFocus: Ar,
        onFocusLost: go
      },
      util: {}
    });
    const {
      queryThunk: l,
      mutationThunk: h,
      patchQueryData: v,
      updateQueryData: g,
      upsertQueryData: _,
      prefetch: p,
      buildMatchThunkActions: u
    } = pu({
      baseQuery: n,
      reducerPath: i,
      context: O,
      api: t,
      serializeQueryArgs: f,
      assertTagType: c
    }), {
      reducer: s,
      actions: d
    } = hu({
      context: O,
      queryThunk: l,
      mutationThunk: h,
      reducerPath: i,
      assertTagType: c,
      config: {
        refetchOnFocus: T,
        refetchOnReconnect: b,
        refetchOnMountOrArgChange: S,
        keepUnusedDataFor: m,
        reducerPath: i,
        invalidationBehavior: A
      }
    });
    we(t.util, {
      patchQueryData: v,
      updateQueryData: g,
      upsertQueryData: _,
      prefetch: p,
      resetApiState: d.resetApiState
    }), we(t.internalActions, d);
    const {
      middleware: E,
      actions: w
    } = Au({
      reducerPath: i,
      context: O,
      queryThunk: l,
      mutationThunk: h,
      api: t,
      assertTagType: c
    });
    we(t.util, w), we(t, {
      reducer: s,
      middleware: E
    });
    const {
      buildQuerySelector: C,
      buildMutationSelector: D,
      selectInvalidatedBy: N,
      selectCachedArgsForQuery: j
    } = yu({
      serializeQueryArgs: f,
      reducerPath: i,
      createSelector: e
    });
    we(t.util, {
      selectInvalidatedBy: N,
      selectCachedArgsForQuery: j
    });
    const {
      buildInitiateQuery: M,
      buildInitiateMutation: q,
      getRunningMutationThunk: z,
      getRunningMutationsThunk: V,
      getRunningQueriesThunk: L,
      getRunningQueryThunk: x
    } = du({
      queryThunk: l,
      mutationThunk: h,
      api: t,
      serializeQueryArgs: f,
      context: O
    });
    return we(t.util, {
      getRunningMutationThunk: z,
      getRunningMutationsThunk: V,
      getRunningQueryThunk: x,
      getRunningQueriesThunk: L
    }), {
      name: zn,
      injectEndpoint(G, se) {
        var P;
        const y = t;
        (P = y.endpoints)[G] ?? (P[G] = {}), _o(se) ? we(y.endpoints[G], {
          name: G,
          select: C(G, se),
          initiate: M(G, se)
        }, u(l, G)) : cu(se) && we(y.endpoints[G], {
          name: G,
          select: D(),
          initiate: q(G)
        }, u(h, G));
      }
    };
  }
});
function Tu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pr = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function Nu() {
  if (Qn)
    return Y;
  Qn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), O = Symbol.iterator;
  function c(y) {
    return y === null || typeof y != "object" ? null : (y = O && y[O] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var l = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, h = Object.assign, v = {};
  function g(y, P, $) {
    this.props = y, this.context = P, this.refs = v, this.updater = $ || l;
  }
  g.prototype.isReactComponent = {}, g.prototype.setState = function(y, P) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, P, "setState");
  }, g.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function _() {
  }
  _.prototype = g.prototype;
  function p(y, P, $) {
    this.props = y, this.context = P, this.refs = v, this.updater = $ || l;
  }
  var u = p.prototype = new _();
  u.constructor = p, h(u, g.prototype), u.isPureReactComponent = !0;
  var s = Array.isArray, d = Object.prototype.hasOwnProperty, E = { current: null }, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(y, P, $) {
    var B, U = {}, ee = null, ue = null;
    if (P != null)
      for (B in P.ref !== void 0 && (ue = P.ref), P.key !== void 0 && (ee = "" + P.key), P)
        d.call(P, B) && !w.hasOwnProperty(B) && (U[B] = P[B]);
    var te = arguments.length - 2;
    if (te === 1)
      U.children = $;
    else if (1 < te) {
      for (var re = Array(te), fe = 0; fe < te; fe++)
        re[fe] = arguments[fe + 2];
      U.children = re;
    }
    if (y && y.defaultProps)
      for (B in te = y.defaultProps, te)
        U[B] === void 0 && (U[B] = te[B]);
    return { $$typeof: e, type: y, key: ee, ref: ue, props: U, _owner: E.current };
  }
  function D(y, P) {
    return { $$typeof: e, type: y.type, key: P, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function N(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }
  function j(y) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function($) {
      return P[$];
    });
  }
  var M = /\/+/g;
  function q(y, P) {
    return typeof y == "object" && y !== null && y.key != null ? j("" + y.key) : P.toString(36);
  }
  function z(y, P, $, B, U) {
    var ee = typeof y;
    (ee === "undefined" || ee === "boolean") && (y = null);
    var ue = !1;
    if (y === null)
      ue = !0;
    else
      switch (ee) {
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case e:
            case t:
              ue = !0;
          }
      }
    if (ue)
      return ue = y, U = U(ue), y = B === "" ? "." + q(ue, 0) : B, s(U) ? ($ = "", y != null && ($ = y.replace(M, "$&/") + "/"), z(U, P, $, "", function(fe) {
        return fe;
      })) : U != null && (N(U) && (U = D(U, $ + (!U.key || ue && ue.key === U.key ? "" : ("" + U.key).replace(M, "$&/") + "/") + y)), P.push(U)), 1;
    if (ue = 0, B = B === "" ? "." : B + ":", s(y))
      for (var te = 0; te < y.length; te++) {
        ee = y[te];
        var re = B + q(ee, te);
        ue += z(ee, P, $, re, U);
      }
    else if (re = c(y), typeof re == "function")
      for (y = re.call(y), te = 0; !(ee = y.next()).done; )
        ee = ee.value, re = B + q(ee, te++), ue += z(ee, P, $, re, U);
    else if (ee === "object")
      throw P = String(y), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return ue;
  }
  function V(y, P, $) {
    if (y == null)
      return y;
    var B = [], U = 0;
    return z(y, B, "", "", function(ee) {
      return P.call($, ee, U++);
    }), B;
  }
  function L(y) {
    if (y._status === -1) {
      var P = y._result;
      P = P(), P.then(function($) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = $);
      }, function($) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = $);
      }), y._status === -1 && (y._status = 0, y._result = P);
    }
    if (y._status === 1)
      return y._result.default;
    throw y._result;
  }
  var x = { current: null }, G = { transition: null }, se = { ReactCurrentDispatcher: x, ReactCurrentBatchConfig: G, ReactCurrentOwner: E };
  return Y.Children = { map: V, forEach: function(y, P, $) {
    V(y, function() {
      P.apply(this, arguments);
    }, $);
  }, count: function(y) {
    var P = 0;
    return V(y, function() {
      P++;
    }), P;
  }, toArray: function(y) {
    return V(y, function(P) {
      return P;
    }) || [];
  }, only: function(y) {
    if (!N(y))
      throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, Y.Component = g, Y.Fragment = n, Y.Profiler = i, Y.PureComponent = p, Y.StrictMode = o, Y.Suspense = T, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, Y.cloneElement = function(y, P, $) {
    if (y == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var B = h({}, y.props), U = y.key, ee = y.ref, ue = y._owner;
    if (P != null) {
      if (P.ref !== void 0 && (ee = P.ref, ue = E.current), P.key !== void 0 && (U = "" + P.key), y.type && y.type.defaultProps)
        var te = y.type.defaultProps;
      for (re in P)
        d.call(P, re) && !w.hasOwnProperty(re) && (B[re] = P[re] === void 0 && te !== void 0 ? te[re] : P[re]);
    }
    var re = arguments.length - 2;
    if (re === 1)
      B.children = $;
    else if (1 < re) {
      te = Array(re);
      for (var fe = 0; fe < re; fe++)
        te[fe] = arguments[fe + 2];
      B.children = te;
    }
    return { $$typeof: e, type: y.type, key: U, ref: ee, props: B, _owner: ue };
  }, Y.createContext = function(y) {
    return y = { $$typeof: m, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: f, _context: y }, y.Consumer = y;
  }, Y.createElement = C, Y.createFactory = function(y) {
    var P = C.bind(null, y);
    return P.type = y, P;
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(y) {
    return { $$typeof: S, render: y };
  }, Y.isValidElement = N, Y.lazy = function(y) {
    return { $$typeof: A, _payload: { _status: -1, _result: y }, _init: L };
  }, Y.memo = function(y, P) {
    return { $$typeof: b, type: y, compare: P === void 0 ? null : P };
  }, Y.startTransition = function(y) {
    var P = G.transition;
    G.transition = {};
    try {
      y();
    } finally {
      G.transition = P;
    }
  }, Y.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Y.useCallback = function(y, P) {
    return x.current.useCallback(y, P);
  }, Y.useContext = function(y) {
    return x.current.useContext(y);
  }, Y.useDebugValue = function() {
  }, Y.useDeferredValue = function(y) {
    return x.current.useDeferredValue(y);
  }, Y.useEffect = function(y, P) {
    return x.current.useEffect(y, P);
  }, Y.useId = function() {
    return x.current.useId();
  }, Y.useImperativeHandle = function(y, P, $) {
    return x.current.useImperativeHandle(y, P, $);
  }, Y.useInsertionEffect = function(y, P) {
    return x.current.useInsertionEffect(y, P);
  }, Y.useLayoutEffect = function(y, P) {
    return x.current.useLayoutEffect(y, P);
  }, Y.useMemo = function(y, P) {
    return x.current.useMemo(y, P);
  }, Y.useReducer = function(y, P, $) {
    return x.current.useReducer(y, P, $);
  }, Y.useRef = function(y) {
    return x.current.useRef(y);
  }, Y.useState = function(y) {
    return x.current.useState(y);
  }, Y.useSyncExternalStore = function(y, P, $) {
    return x.current.useSyncExternalStore(y, P, $);
  }, Y.useTransition = function() {
    return x.current.useTransition();
  }, Y.version = "18.2.0", Y;
}
var Be = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Be.exports;
var Ln;
function Du() {
  return Ln || (Ln = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.2.0", o = Symbol.for("react.element"), i = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), b = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, _ = "@@iterator";
      function p(r) {
        if (r === null || typeof r != "object")
          return null;
        var a = g && r[g] || r[_];
        return typeof a == "function" ? a : null;
      }
      var u = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, s = {
        transition: null
      }, d = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, E = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, w = {}, C = null;
      function D(r) {
        C = r;
      }
      w.setExtraStackFrame = function(r) {
        C = r;
      }, w.getCurrentStack = null, w.getStackAddendum = function() {
        var r = "";
        C && (r += C);
        var a = w.getCurrentStack;
        return a && (r += a() || ""), r;
      };
      var N = !1, j = !1, M = !1, q = !1, z = !1, V = {
        ReactCurrentDispatcher: u,
        ReactCurrentBatchConfig: s,
        ReactCurrentOwner: E
      };
      V.ReactDebugCurrentFrame = w, V.ReactCurrentActQueue = d;
      function L(r) {
        {
          for (var a = arguments.length, R = new Array(a > 1 ? a - 1 : 0), k = 1; k < a; k++)
            R[k - 1] = arguments[k];
          G("warn", r, R);
        }
      }
      function x(r) {
        {
          for (var a = arguments.length, R = new Array(a > 1 ? a - 1 : 0), k = 1; k < a; k++)
            R[k - 1] = arguments[k];
          G("error", r, R);
        }
      }
      function G(r, a, R) {
        {
          var k = V.ReactDebugCurrentFrame, I = k.getStackAddendum();
          I !== "" && (a += "%s", R = R.concat([I]));
          var Q = R.map(function(F) {
            return String(F);
          });
          Q.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, Q);
        }
      }
      var se = {};
      function y(r, a) {
        {
          var R = r.constructor, k = R && (R.displayName || R.name) || "ReactClass", I = k + "." + a;
          if (se[I])
            return;
          x("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", a, k), se[I] = !0;
        }
      }
      var P = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(r) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(r, a, R) {
          y(r, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(r, a, R, k) {
          y(r, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(r, a, R, k) {
          y(r, "setState");
        }
      }, $ = Object.assign, B = {};
      Object.freeze(B);
      function U(r, a, R) {
        this.props = r, this.context = a, this.refs = B, this.updater = R || P;
      }
      U.prototype.isReactComponent = {}, U.prototype.setState = function(r, a) {
        if (typeof r != "object" && typeof r != "function" && r != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, a, "setState");
      }, U.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate");
      };
      {
        var ee = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ue = function(r, a) {
          Object.defineProperty(U.prototype, r, {
            get: function() {
              L("%s(...) is deprecated in plain JavaScript React classes. %s", a[0], a[1]);
            }
          });
        };
        for (var te in ee)
          ee.hasOwnProperty(te) && ue(te, ee[te]);
      }
      function re() {
      }
      re.prototype = U.prototype;
      function fe(r, a, R) {
        this.props = r, this.context = a, this.refs = B, this.updater = R || P;
      }
      var It = fe.prototype = new re();
      It.constructor = fe, $(It, U.prototype), It.isPureReactComponent = !0;
      function ko() {
        var r = {
          current: null
        };
        return Object.seal(r), r;
      }
      var To = Array.isArray;
      function ct(r) {
        return To(r);
      }
      function No(r) {
        {
          var a = typeof Symbol == "function" && Symbol.toStringTag, R = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
          return R;
        }
      }
      function Do(r) {
        try {
          return Dr(r), !1;
        } catch {
          return !0;
        }
      }
      function Dr(r) {
        return "" + r;
      }
      function lt(r) {
        if (Do(r))
          return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", No(r)), Dr(r);
      }
      function Po(r, a, R) {
        var k = r.displayName;
        if (k)
          return k;
        var I = a.displayName || a.name || "";
        return I !== "" ? R + "(" + I + ")" : R;
      }
      function Pr(r) {
        return r.displayName || "Context";
      }
      function Se(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case f:
            return "Fragment";
          case i:
            return "Portal";
          case S:
            return "Profiler";
          case m:
            return "StrictMode";
          case O:
            return "Suspense";
          case c:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case b:
              var a = r;
              return Pr(a) + ".Consumer";
            case T:
              var R = r;
              return Pr(R._context) + ".Provider";
            case A:
              return Po(r, r.render, "ForwardRef");
            case l:
              var k = r.displayName || null;
              return k !== null ? k : Se(r.type) || "Memo";
            case h: {
              var I = r, Q = I._payload, F = I._init;
              try {
                return Se(F(Q));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ve = Object.prototype.hasOwnProperty, Mr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ir, jr, jt;
      jt = {};
      function xr(r) {
        if (Ve.call(r, "ref")) {
          var a = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function $r(r) {
        if (Ve.call(r, "key")) {
          var a = Object.getOwnPropertyDescriptor(r, "key").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function Mo(r, a) {
        var R = function() {
          Ir || (Ir = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        R.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: R,
          configurable: !0
        });
      }
      function Io(r, a) {
        var R = function() {
          jr || (jr = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        R.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: R,
          configurable: !0
        });
      }
      function jo(r) {
        if (typeof r.ref == "string" && E.current && r.__self && E.current.stateNode !== r.__self) {
          var a = Se(E.current.type);
          jt[a] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, r.ref), jt[a] = !0);
        }
      }
      var xt = function(r, a, R, k, I, Q, F) {
        var W = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: r,
          key: a,
          ref: R,
          props: F,
          // Record the component responsible for creating this element.
          _owner: Q
        };
        return W._store = {}, Object.defineProperty(W._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(W, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: k
        }), Object.defineProperty(W, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: I
        }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
      };
      function xo(r, a, R) {
        var k, I = {}, Q = null, F = null, W = null, J = null;
        if (a != null) {
          xr(a) && (F = a.ref, jo(a)), $r(a) && (lt(a.key), Q = "" + a.key), W = a.__self === void 0 ? null : a.__self, J = a.__source === void 0 ? null : a.__source;
          for (k in a)
            Ve.call(a, k) && !Mr.hasOwnProperty(k) && (I[k] = a[k]);
        }
        var Z = arguments.length - 2;
        if (Z === 1)
          I.children = R;
        else if (Z > 1) {
          for (var ne = Array(Z), oe = 0; oe < Z; oe++)
            ne[oe] = arguments[oe + 2];
          Object.freeze && Object.freeze(ne), I.children = ne;
        }
        if (r && r.defaultProps) {
          var ie = r.defaultProps;
          for (k in ie)
            I[k] === void 0 && (I[k] = ie[k]);
        }
        if (Q || F) {
          var ae = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          Q && Mo(I, ae), F && Io(I, ae);
        }
        return xt(r, Q, F, W, J, E.current, I);
      }
      function $o(r, a) {
        var R = xt(r.type, a, r.ref, r._self, r._source, r._owner, r.props);
        return R;
      }
      function Fo(r, a, R) {
        if (r == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var k, I = $({}, r.props), Q = r.key, F = r.ref, W = r._self, J = r._source, Z = r._owner;
        if (a != null) {
          xr(a) && (F = a.ref, Z = E.current), $r(a) && (lt(a.key), Q = "" + a.key);
          var ne;
          r.type && r.type.defaultProps && (ne = r.type.defaultProps);
          for (k in a)
            Ve.call(a, k) && !Mr.hasOwnProperty(k) && (a[k] === void 0 && ne !== void 0 ? I[k] = ne[k] : I[k] = a[k]);
        }
        var oe = arguments.length - 2;
        if (oe === 1)
          I.children = R;
        else if (oe > 1) {
          for (var ie = Array(oe), ae = 0; ae < oe; ae++)
            ie[ae] = arguments[ae + 2];
          I.children = ie;
        }
        return xt(r.type, Q, F, W, J, Z, I);
      }
      function De(r) {
        return typeof r == "object" && r !== null && r.$$typeof === o;
      }
      var Fr = ".", Vo = ":";
      function qo(r) {
        var a = /[=:]/g, R = {
          "=": "=0",
          ":": "=2"
        }, k = r.replace(a, function(I) {
          return R[I];
        });
        return "$" + k;
      }
      var Vr = !1, zo = /\/+/g;
      function qr(r) {
        return r.replace(zo, "$&/");
      }
      function $t(r, a) {
        return typeof r == "object" && r !== null && r.key != null ? (lt(r.key), qo("" + r.key)) : a.toString(36);
      }
      function ft(r, a, R, k, I) {
        var Q = typeof r;
        (Q === "undefined" || Q === "boolean") && (r = null);
        var F = !1;
        if (r === null)
          F = !0;
        else
          switch (Q) {
            case "string":
            case "number":
              F = !0;
              break;
            case "object":
              switch (r.$$typeof) {
                case o:
                case i:
                  F = !0;
              }
          }
        if (F) {
          var W = r, J = I(W), Z = k === "" ? Fr + $t(W, 0) : k;
          if (ct(J)) {
            var ne = "";
            Z != null && (ne = qr(Z) + "/"), ft(J, a, ne, "", function(Ii) {
              return Ii;
            });
          } else
            J != null && (De(J) && (J.key && (!W || W.key !== J.key) && lt(J.key), J = $o(
              J,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              R + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (J.key && (!W || W.key !== J.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                qr("" + J.key) + "/"
              ) : "") + Z
            )), a.push(J));
          return 1;
        }
        var oe, ie, ae = 0, le = k === "" ? Fr : k + Vo;
        if (ct(r))
          for (var bt = 0; bt < r.length; bt++)
            oe = r[bt], ie = le + $t(oe, bt), ae += ft(oe, a, R, ie, I);
        else {
          var Bt = p(r);
          if (typeof Bt == "function") {
            var fn = r;
            Bt === fn.entries && (Vr || L("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vr = !0);
            for (var Pi = Bt.call(fn), dn, Mi = 0; !(dn = Pi.next()).done; )
              oe = dn.value, ie = le + $t(oe, Mi++), ae += ft(oe, a, R, ie, I);
          } else if (Q === "object") {
            var pn = String(r);
            throw new Error("Objects are not valid as a React child (found: " + (pn === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : pn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ae;
      }
      function dt(r, a, R) {
        if (r == null)
          return r;
        var k = [], I = 0;
        return ft(r, k, "", "", function(Q) {
          return a.call(R, Q, I++);
        }), k;
      }
      function Qo(r) {
        var a = 0;
        return dt(r, function() {
          a++;
        }), a;
      }
      function Lo(r, a, R) {
        dt(r, function() {
          a.apply(this, arguments);
        }, R);
      }
      function Uo(r) {
        return dt(r, function(a) {
          return a;
        }) || [];
      }
      function Wo(r) {
        if (!De(r))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return r;
      }
      function Bo(r) {
        var a = {
          $$typeof: b,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: r,
          _currentValue2: r,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        a.Provider = {
          $$typeof: T,
          _context: a
        };
        var R = !1, k = !1, I = !1;
        {
          var Q = {
            $$typeof: b,
            _context: a
          };
          Object.defineProperties(Q, {
            Provider: {
              get: function() {
                return k || (k = !0, x("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), a.Provider;
              },
              set: function(F) {
                a.Provider = F;
              }
            },
            _currentValue: {
              get: function() {
                return a._currentValue;
              },
              set: function(F) {
                a._currentValue = F;
              }
            },
            _currentValue2: {
              get: function() {
                return a._currentValue2;
              },
              set: function(F) {
                a._currentValue2 = F;
              }
            },
            _threadCount: {
              get: function() {
                return a._threadCount;
              },
              set: function(F) {
                a._threadCount = F;
              }
            },
            Consumer: {
              get: function() {
                return R || (R = !0, x("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), a.Consumer;
              }
            },
            displayName: {
              get: function() {
                return a.displayName;
              },
              set: function(F) {
                I || (L("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", F), I = !0);
              }
            }
          }), a.Consumer = Q;
        }
        return a._currentRenderer = null, a._currentRenderer2 = null, a;
      }
      var qe = -1, Ft = 0, zr = 1, Ko = 2;
      function Ho(r) {
        if (r._status === qe) {
          var a = r._result, R = a();
          if (R.then(function(Q) {
            if (r._status === Ft || r._status === qe) {
              var F = r;
              F._status = zr, F._result = Q;
            }
          }, function(Q) {
            if (r._status === Ft || r._status === qe) {
              var F = r;
              F._status = Ko, F._result = Q;
            }
          }), r._status === qe) {
            var k = r;
            k._status = Ft, k._result = R;
          }
        }
        if (r._status === zr) {
          var I = r._result;
          return I === void 0 && x(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, I), "default" in I || x(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, I), I.default;
        } else
          throw r._result;
      }
      function Yo(r) {
        var a = {
          // We use these fields to store the result.
          _status: qe,
          _result: r
        }, R = {
          $$typeof: h,
          _payload: a,
          _init: Ho
        };
        {
          var k, I;
          Object.defineProperties(R, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return k;
              },
              set: function(Q) {
                x("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), k = Q, Object.defineProperty(R, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return I;
              },
              set: function(Q) {
                x("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), I = Q, Object.defineProperty(R, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return R;
      }
      function Go(r) {
        r != null && r.$$typeof === l ? x("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof r != "function" ? x("forwardRef requires a render function but was given %s.", r === null ? "null" : typeof r) : r.length !== 0 && r.length !== 2 && x("forwardRef render functions accept exactly two parameters: props and ref. %s", r.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), r != null && (r.defaultProps != null || r.propTypes != null) && x("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var a = {
          $$typeof: A,
          render: r
        };
        {
          var R;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return R;
            },
            set: function(k) {
              R = k, !r.name && !r.displayName && (r.displayName = k);
            }
          });
        }
        return a;
      }
      var Qr;
      Qr = Symbol.for("react.module.reference");
      function Lr(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === f || r === S || z || r === m || r === O || r === c || q || r === v || N || j || M || typeof r == "object" && r !== null && (r.$$typeof === h || r.$$typeof === l || r.$$typeof === T || r.$$typeof === b || r.$$typeof === A || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        r.$$typeof === Qr || r.getModuleId !== void 0));
      }
      function Jo(r, a) {
        Lr(r) || x("memo: The first argument must be a component. Instead received: %s", r === null ? "null" : typeof r);
        var R = {
          $$typeof: l,
          type: r,
          compare: a === void 0 ? null : a
        };
        {
          var k;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return k;
            },
            set: function(I) {
              k = I, !r.name && !r.displayName && (r.displayName = I);
            }
          });
        }
        return R;
      }
      function de() {
        var r = u.current;
        return r === null && x(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), r;
      }
      function Zo(r) {
        var a = de();
        if (r._context !== void 0) {
          var R = r._context;
          R.Consumer === r ? x("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : R.Provider === r && x("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return a.useContext(r);
      }
      function Xo(r) {
        var a = de();
        return a.useState(r);
      }
      function ei(r, a, R) {
        var k = de();
        return k.useReducer(r, a, R);
      }
      function ti(r) {
        var a = de();
        return a.useRef(r);
      }
      function ri(r, a) {
        var R = de();
        return R.useEffect(r, a);
      }
      function ni(r, a) {
        var R = de();
        return R.useInsertionEffect(r, a);
      }
      function oi(r, a) {
        var R = de();
        return R.useLayoutEffect(r, a);
      }
      function ii(r, a) {
        var R = de();
        return R.useCallback(r, a);
      }
      function si(r, a) {
        var R = de();
        return R.useMemo(r, a);
      }
      function ui(r, a, R) {
        var k = de();
        return k.useImperativeHandle(r, a, R);
      }
      function ai(r, a) {
        {
          var R = de();
          return R.useDebugValue(r, a);
        }
      }
      function ci() {
        var r = de();
        return r.useTransition();
      }
      function li(r) {
        var a = de();
        return a.useDeferredValue(r);
      }
      function fi() {
        var r = de();
        return r.useId();
      }
      function di(r, a, R) {
        var k = de();
        return k.useSyncExternalStore(r, a, R);
      }
      var ze = 0, Ur, Wr, Br, Kr, Hr, Yr, Gr;
      function Jr() {
      }
      Jr.__reactDisabledLog = !0;
      function pi() {
        {
          if (ze === 0) {
            Ur = console.log, Wr = console.info, Br = console.warn, Kr = console.error, Hr = console.group, Yr = console.groupCollapsed, Gr = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: Jr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          ze++;
        }
      }
      function hi() {
        {
          if (ze--, ze === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: $({}, r, {
                value: Ur
              }),
              info: $({}, r, {
                value: Wr
              }),
              warn: $({}, r, {
                value: Br
              }),
              error: $({}, r, {
                value: Kr
              }),
              group: $({}, r, {
                value: Hr
              }),
              groupCollapsed: $({}, r, {
                value: Yr
              }),
              groupEnd: $({}, r, {
                value: Gr
              })
            });
          }
          ze < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Vt = V.ReactCurrentDispatcher, qt;
      function pt(r, a, R) {
        {
          if (qt === void 0)
            try {
              throw Error();
            } catch (I) {
              var k = I.stack.trim().match(/\n( *(at )?)/);
              qt = k && k[1] || "";
            }
          return `
` + qt + r;
        }
      }
      var zt = !1, ht;
      {
        var yi = typeof WeakMap == "function" ? WeakMap : Map;
        ht = new yi();
      }
      function Zr(r, a) {
        if (!r || zt)
          return "";
        {
          var R = ht.get(r);
          if (R !== void 0)
            return R;
        }
        var k;
        zt = !0;
        var I = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Q;
        Q = Vt.current, Vt.current = null, pi();
        try {
          if (a) {
            var F = function() {
              throw Error();
            };
            if (Object.defineProperty(F.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(F, []);
              } catch (le) {
                k = le;
              }
              Reflect.construct(r, [], F);
            } else {
              try {
                F.call();
              } catch (le) {
                k = le;
              }
              r.call(F.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (le) {
              k = le;
            }
            r();
          }
        } catch (le) {
          if (le && k && typeof le.stack == "string") {
            for (var W = le.stack.split(`
`), J = k.stack.split(`
`), Z = W.length - 1, ne = J.length - 1; Z >= 1 && ne >= 0 && W[Z] !== J[ne]; )
              ne--;
            for (; Z >= 1 && ne >= 0; Z--, ne--)
              if (W[Z] !== J[ne]) {
                if (Z !== 1 || ne !== 1)
                  do
                    if (Z--, ne--, ne < 0 || W[Z] !== J[ne]) {
                      var oe = `
` + W[Z].replace(" at new ", " at ");
                      return r.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", r.displayName)), typeof r == "function" && ht.set(r, oe), oe;
                    }
                  while (Z >= 1 && ne >= 0);
                break;
              }
          }
        } finally {
          zt = !1, Vt.current = Q, hi(), Error.prepareStackTrace = I;
        }
        var ie = r ? r.displayName || r.name : "", ae = ie ? pt(ie) : "";
        return typeof r == "function" && ht.set(r, ae), ae;
      }
      function mi(r, a, R) {
        return Zr(r, !1);
      }
      function vi(r) {
        var a = r.prototype;
        return !!(a && a.isReactComponent);
      }
      function yt(r, a, R) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Zr(r, vi(r));
        if (typeof r == "string")
          return pt(r);
        switch (r) {
          case O:
            return pt("Suspense");
          case c:
            return pt("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case A:
              return mi(r.render);
            case l:
              return yt(r.type, a, R);
            case h: {
              var k = r, I = k._payload, Q = k._init;
              try {
                return yt(Q(I), a, R);
              } catch {
              }
            }
          }
        return "";
      }
      var Xr = {}, en = V.ReactDebugCurrentFrame;
      function mt(r) {
        if (r) {
          var a = r._owner, R = yt(r.type, r._source, a ? a.type : null);
          en.setExtraStackFrame(R);
        } else
          en.setExtraStackFrame(null);
      }
      function gi(r, a, R, k, I) {
        {
          var Q = Function.call.bind(Ve);
          for (var F in r)
            if (Q(r, F)) {
              var W = void 0;
              try {
                if (typeof r[F] != "function") {
                  var J = Error((k || "React class") + ": " + R + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw J.name = "Invariant Violation", J;
                }
                W = r[F](a, F, k, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Z) {
                W = Z;
              }
              W && !(W instanceof Error) && (mt(I), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", R, F, typeof W), mt(null)), W instanceof Error && !(W.message in Xr) && (Xr[W.message] = !0, mt(I), x("Failed %s type: %s", R, W.message), mt(null));
            }
        }
      }
      function Pe(r) {
        if (r) {
          var a = r._owner, R = yt(r.type, r._source, a ? a.type : null);
          D(R);
        } else
          D(null);
      }
      var Qt;
      Qt = !1;
      function tn() {
        if (E.current) {
          var r = Se(E.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
      function bi(r) {
        if (r !== void 0) {
          var a = r.fileName.replace(/^.*[\\\/]/, ""), R = r.lineNumber;
          return `

Check your code at ` + a + ":" + R + ".";
        }
        return "";
      }
      function _i(r) {
        return r != null ? bi(r.__source) : "";
      }
      var rn = {};
      function Ei(r) {
        var a = tn();
        if (!a) {
          var R = typeof r == "string" ? r : r.displayName || r.name;
          R && (a = `

Check the top-level render call using <` + R + ">.");
        }
        return a;
      }
      function nn(r, a) {
        if (!(!r._store || r._store.validated || r.key != null)) {
          r._store.validated = !0;
          var R = Ei(a);
          if (!rn[R]) {
            rn[R] = !0;
            var k = "";
            r && r._owner && r._owner !== E.current && (k = " It was passed a child from " + Se(r._owner.type) + "."), Pe(r), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, k), Pe(null);
          }
        }
      }
      function on(r, a) {
        if (typeof r == "object") {
          if (ct(r))
            for (var R = 0; R < r.length; R++) {
              var k = r[R];
              De(k) && nn(k, a);
            }
          else if (De(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var I = p(r);
            if (typeof I == "function" && I !== r.entries)
              for (var Q = I.call(r), F; !(F = Q.next()).done; )
                De(F.value) && nn(F.value, a);
          }
        }
      }
      function sn(r) {
        {
          var a = r.type;
          if (a == null || typeof a == "string")
            return;
          var R;
          if (typeof a == "function")
            R = a.propTypes;
          else if (typeof a == "object" && (a.$$typeof === A || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          a.$$typeof === l))
            R = a.propTypes;
          else
            return;
          if (R) {
            var k = Se(a);
            gi(R, r.props, "prop", k, r);
          } else if (a.PropTypes !== void 0 && !Qt) {
            Qt = !0;
            var I = Se(a);
            x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
          }
          typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Si(r) {
        {
          for (var a = Object.keys(r.props), R = 0; R < a.length; R++) {
            var k = a[R];
            if (k !== "children" && k !== "key") {
              Pe(r), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Pe(null);
              break;
            }
          }
          r.ref !== null && (Pe(r), x("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
        }
      }
      function un(r, a, R) {
        var k = Lr(r);
        if (!k) {
          var I = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = _i(a);
          Q ? I += Q : I += tn();
          var F;
          r === null ? F = "null" : ct(r) ? F = "array" : r !== void 0 && r.$$typeof === o ? (F = "<" + (Se(r.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : F = typeof r, x("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, I);
        }
        var W = xo.apply(this, arguments);
        if (W == null)
          return W;
        if (k)
          for (var J = 2; J < arguments.length; J++)
            on(arguments[J], r);
        return r === f ? Si(W) : sn(W), W;
      }
      var an = !1;
      function wi(r) {
        var a = un.bind(null, r);
        return a.type = r, an || (an = !0, L("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(a, "type", {
          enumerable: !1,
          get: function() {
            return L("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: r
            }), r;
          }
        }), a;
      }
      function Ri(r, a, R) {
        for (var k = Fo.apply(this, arguments), I = 2; I < arguments.length; I++)
          on(arguments[I], k.type);
        return sn(k), k;
      }
      function Oi(r, a) {
        var R = s.transition;
        s.transition = {};
        var k = s.transition;
        s.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          r();
        } finally {
          if (s.transition = R, R === null && k._updatedFibers) {
            var I = k._updatedFibers.size;
            I > 10 && L("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), k._updatedFibers.clear();
          }
        }
      }
      var cn = !1, vt = null;
      function Ci(r) {
        if (vt === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7), R = e && e[a];
            vt = R.call(e, "timers").setImmediate;
          } catch {
            vt = function(I) {
              cn === !1 && (cn = !0, typeof MessageChannel > "u" && x("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Q = new MessageChannel();
              Q.port1.onmessage = I, Q.port2.postMessage(void 0);
            };
          }
        return vt(r);
      }
      var Me = 0, ln = !1;
      function Ai(r) {
        {
          var a = Me;
          Me++, d.current === null && (d.current = []);
          var R = d.isBatchingLegacy, k;
          try {
            if (d.isBatchingLegacy = !0, k = r(), !R && d.didScheduleLegacyUpdate) {
              var I = d.current;
              I !== null && (d.didScheduleLegacyUpdate = !1, Wt(I));
            }
          } catch (ie) {
            throw gt(a), ie;
          } finally {
            d.isBatchingLegacy = R;
          }
          if (k !== null && typeof k == "object" && typeof k.then == "function") {
            var Q = k, F = !1, W = {
              then: function(ie, ae) {
                F = !0, Q.then(function(le) {
                  gt(a), Me === 0 ? Lt(le, ie, ae) : ie(le);
                }, function(le) {
                  gt(a), ae(le);
                });
              }
            };
            return !ln && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              F || (ln = !0, x("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), W;
          } else {
            var J = k;
            if (gt(a), Me === 0) {
              var Z = d.current;
              Z !== null && (Wt(Z), d.current = null);
              var ne = {
                then: function(ie, ae) {
                  d.current === null ? (d.current = [], Lt(J, ie, ae)) : ie(J);
                }
              };
              return ne;
            } else {
              var oe = {
                then: function(ie, ae) {
                  ie(J);
                }
              };
              return oe;
            }
          }
        }
      }
      function gt(r) {
        r !== Me - 1 && x("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Me = r;
      }
      function Lt(r, a, R) {
        {
          var k = d.current;
          if (k !== null)
            try {
              Wt(k), Ci(function() {
                k.length === 0 ? (d.current = null, a(r)) : Lt(r, a, R);
              });
            } catch (I) {
              R(I);
            }
          else
            a(r);
        }
      }
      var Ut = !1;
      function Wt(r) {
        if (!Ut) {
          Ut = !0;
          var a = 0;
          try {
            for (; a < r.length; a++) {
              var R = r[a];
              do
                R = R(!0);
              while (R !== null);
            }
            r.length = 0;
          } catch (k) {
            throw r = r.slice(a + 1), k;
          } finally {
            Ut = !1;
          }
        }
      }
      var ki = un, Ti = Ri, Ni = wi, Di = {
        map: dt,
        forEach: Lo,
        count: Qo,
        toArray: Uo,
        only: Wo
      };
      t.Children = Di, t.Component = U, t.Fragment = f, t.Profiler = S, t.PureComponent = fe, t.StrictMode = m, t.Suspense = O, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, t.cloneElement = Ti, t.createContext = Bo, t.createElement = ki, t.createFactory = Ni, t.createRef = ko, t.forwardRef = Go, t.isValidElement = De, t.lazy = Yo, t.memo = Jo, t.startTransition = Oi, t.unstable_act = Ai, t.useCallback = ii, t.useContext = Zo, t.useDebugValue = ai, t.useDeferredValue = li, t.useEffect = ri, t.useId = fi, t.useImperativeHandle = ui, t.useInsertionEffect = ni, t.useLayoutEffect = oi, t.useMemo = si, t.useReducer = ei, t.useRef = ti, t.useState = Xo, t.useSyncExternalStore = di, t.useTransition = ci, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Be, Be.exports)), Be.exports;
}
process.env.NODE_ENV === "production" ? pr.exports = Nu() : pr.exports = Du();
var H = pr.exports;
const wo = /* @__PURE__ */ Tu(H), Un = /* @__PURE__ */ $i({
  __proto__: null,
  default: wo
}, [H]);
var hr = { exports: {} }, Zt = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function Pu() {
  if (Wn)
    return Zt;
  Wn = 1;
  var e = H;
  function t(T, b) {
    return T === b && (T !== 0 || 1 / T === 1 / b) || T !== T && b !== b;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useSyncExternalStore, i = e.useRef, f = e.useEffect, m = e.useMemo, S = e.useDebugValue;
  return Zt.useSyncExternalStoreWithSelector = function(T, b, A, O, c) {
    var l = i(null);
    if (l.current === null) {
      var h = { hasValue: !1, value: null };
      l.current = h;
    } else
      h = l.current;
    l = m(function() {
      function g(d) {
        if (!_) {
          if (_ = !0, p = d, d = O(d), c !== void 0 && h.hasValue) {
            var E = h.value;
            if (c(E, d))
              return u = E;
          }
          return u = d;
        }
        if (E = u, n(p, d))
          return E;
        var w = O(d);
        return c !== void 0 && c(E, w) ? E : (p = d, u = w);
      }
      var _ = !1, p, u, s = A === void 0 ? null : A;
      return [function() {
        return g(b());
      }, s === null ? void 0 : function() {
        return g(s());
      }];
    }, [b, A, O, c]);
    var v = o(T, l[0], l[1]);
    return f(function() {
      h.hasValue = !0, h.value = v;
    }, [v]), S(v), v;
  }, Zt;
}
var Xt = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function Mu() {
  return Bn || (Bn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = H;
    function t(b, A) {
      return b === A && (b !== 0 || 1 / b === 1 / A) || b !== b && A !== A;
    }
    var n = typeof Object.is == "function" ? Object.is : t, o = e.useSyncExternalStore, i = e.useRef, f = e.useEffect, m = e.useMemo, S = e.useDebugValue;
    function T(b, A, O, c, l) {
      var h = i(null), v;
      h.current === null ? (v = {
        hasValue: !1,
        value: null
      }, h.current = v) : v = h.current;
      var g = m(function() {
        var s = !1, d, E, w = function(j) {
          if (!s) {
            s = !0, d = j;
            var M = c(j);
            if (l !== void 0 && v.hasValue) {
              var q = v.value;
              if (l(q, M))
                return E = q, q;
            }
            return E = M, M;
          }
          var z = d, V = E;
          if (n(z, j))
            return V;
          var L = c(j);
          return l !== void 0 && l(V, L) ? V : (d = j, E = L, L);
        }, C = O === void 0 ? null : O, D = function() {
          return w(A());
        }, N = C === null ? void 0 : function() {
          return w(C());
        };
        return [D, N];
      }, [A, O, c, l]), _ = g[0], p = g[1], u = o(b, _, p);
      return f(function() {
        v.hasValue = !0, v.value = u;
      }, [u]), S(u), u;
    }
    Xt.useSyncExternalStoreWithSelector = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xt;
}
process.env.NODE_ENV === "production" ? hr.exports = Pu() : hr.exports = Mu();
var Iu = hr.exports, be = (
  // prettier-ignore
  // @ts-ignore
  "default" in Un ? wo : Un
), Kn = Symbol.for("react-redux-context"), Hn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ju() {
  if (!be.createContext)
    return {};
  const e = Hn[Kn] ?? (Hn[Kn] = /* @__PURE__ */ new Map());
  let t = e.get(be.createContext);
  return t || (t = be.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(be.createContext, t)), t;
}
var Ne = /* @__PURE__ */ ju(), xu = () => {
  throw new Error("uSES not initialized!");
};
function Nr(e = Ne) {
  return function() {
    const n = be.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Ro = /* @__PURE__ */ Nr(), Oo = xu, $u = (e) => {
  Oo = e;
}, Fu = (e, t) => e === t;
function Vu(e = Ne) {
  const t = e === Ne ? Ro : Nr(e), n = (o, i = {}) => {
    const { equalityFn: f = Fu, devModeChecks: m = {} } = typeof i == "function" ? { equalityFn: i } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("You must pass a selector to useSelector");
      if (typeof o != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof f != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: S,
      subscription: T,
      getServerState: b,
      stabilityCheck: A,
      identityFunctionCheck: O
    } = t(), c = be.useRef(!0), l = be.useCallback(
      {
        [o.name](v) {
          const g = o(v);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: _,
              stabilityCheck: p
            } = {
              stabilityCheck: A,
              identityFunctionCheck: O,
              ...m
            };
            if (p === "always" || p === "once" && c.current) {
              const u = o(v);
              if (!f(g, u)) {
                let s;
                try {
                  throw new Error();
                } catch (d) {
                  ({ stack: s } = d);
                }
                console.warn(
                  "Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: v,
                    selected: g,
                    selected2: u,
                    stack: s
                  }
                );
              }
            }
            if ((_ === "always" || _ === "once" && c.current) && g === v) {
              let u;
              try {
                throw new Error();
              } catch (s) {
                ({ stack: u } = s);
              }
              console.warn(
                "Selector " + (o.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: u }
              );
            }
            c.current && (c.current = !1);
          }
          return g;
        }
      }[o.name],
      [o, A, m.stabilityCheck]
    ), h = Oo(
      T.addNestedSub,
      S.getState,
      b || S.getState,
      l,
      f
    );
    return be.useDebugValue(h), h;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var qu = /* @__PURE__ */ Vu();
function zu(e) {
  e();
}
var Qu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
Qu ? be.useLayoutEffect : be.useEffect;
function Yn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ge(e, t) {
  if (Yn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Yn(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function Co(e = Ne) {
  const t = e === Ne ? Ro : (
    // @ts-ignore
    Nr(e)
  ), n = () => {
    const { store: o } = t();
    return o;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Ao = /* @__PURE__ */ Co();
function Lu(e = Ne) {
  const t = e === Ne ? Ao : Co(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Uu = /* @__PURE__ */ Lu(), Wu = zu;
$u(Iu.useSyncExternalStoreWithSelector);
function Bu(e) {
  return e.type === "query";
}
function Ku(e) {
  return e.type === "mutation";
}
function wt(e, ...t) {
  return Object.assign(e, ...t);
}
function er(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var xe = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Hu = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const o = xe == null ? void 0 : xe.get(t);
  if (typeof o == "string")
    n = o;
  else {
    const i = JSON.stringify(t, (f, m) => _e(m) ? Object.keys(m).sort().reduce((S, T) => (S[T] = m[T], S), {}) : m);
    _e(t) && (xe == null || xe.set(t, i)), n = i;
  }
  return `${e}(${n})`;
}, tr = Symbol();
function Gn(e, t, n, o) {
  const i = H.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: n,
      endpointName: o
    }) : e
  }), [e, t, n, o]), f = H.useRef(i);
  return H.useEffect(() => {
    f.current.serialized !== i.serialized && (f.current = i);
  }, [i]), f.current.serialized === i.serialized ? f.current.queryArgs : e;
}
function rr(e) {
  const t = H.useRef(e);
  return H.useEffect(() => {
    Ge(t.current, e) || (t.current = e);
  }, [e]), Ge(t.current, e) ? t.current : e;
}
var Yu = typeof window < "u" && window.document && window.document.createElement ? H.useLayoutEffect : H.useEffect, Gu = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: mo.pending
} : e;
function Ju({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: n,
      useSelector: o,
      useStore: i
    },
    unstable__sideEffectsInRender: f,
    createSelector: m
  },
  serializeQueryArgs: S,
  context: T
}) {
  const b = f ? (h) => h() : H.useEffect;
  return {
    buildQueryHooks: c,
    buildMutationHook: l,
    usePrefetch: O
  };
  function A(h, v, g) {
    if (v != null && v.endpointName && h.isUninitialized) {
      const {
        endpointName: E
      } = v, w = T.endpointDefinitions[E];
      S({
        queryArgs: v.originalArgs,
        endpointDefinition: w,
        endpointName: E
      }) === S({
        queryArgs: g,
        endpointDefinition: w,
        endpointName: E
      }) && (v = void 0);
    }
    let _ = h.isSuccess ? h.data : v == null ? void 0 : v.data;
    _ === void 0 && (_ = h.data);
    const p = _ !== void 0, u = h.isLoading, s = !p && u, d = h.isSuccess || u && p;
    return {
      ...h,
      data: _,
      currentData: h.data,
      isFetching: u,
      isLoading: s,
      isSuccess: d
    };
  }
  function O(h, v) {
    const g = n(), _ = rr(v);
    return H.useCallback((p, u) => g(e.util.prefetch(h, p, {
      ..._,
      ...u
    })), [h, g, _]);
  }
  function c(h) {
    const v = (p, {
      refetchOnReconnect: u,
      refetchOnFocus: s,
      refetchOnMountOrArgChange: d,
      skip: E = !1,
      pollingInterval: w = 0,
      skipPollingIfUnfocused: C = !1
    } = {}) => {
      const {
        initiate: D
      } = e.endpoints[h], N = n(), j = H.useRef();
      if (!j.current) {
        const y = N(e.internalActions.internal_getRTKQSubscriptions());
        if (process.env.NODE_ENV !== "production" && (typeof y != "object" || typeof (y == null ? void 0 : y.type) == "string"))
          throw new Error(process.env.NODE_ENV === "production" ? X(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        j.current = y;
      }
      const M = Gn(
        E ? Ce : p,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Hu,
        T.endpointDefinitions[h],
        h
      ), q = rr({
        refetchOnReconnect: u,
        refetchOnFocus: s,
        pollingInterval: w,
        skipPollingIfUnfocused: C
      }), z = H.useRef(!1), V = H.useRef();
      let {
        queryCacheKey: L,
        requestId: x
      } = V.current || {}, G = !1;
      L && x && (G = j.current.isRequestSubscribed(L, x));
      const se = !G && z.current;
      return b(() => {
        z.current = G;
      }), b(() => {
        se && (V.current = void 0);
      }, [se]), b(() => {
        var $;
        const y = V.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(se), M === Ce) {
          y == null || y.unsubscribe(), V.current = void 0;
          return;
        }
        const P = ($ = V.current) == null ? void 0 : $.subscriptionOptions;
        if (!y || y.arg !== M) {
          y == null || y.unsubscribe();
          const B = N(D(M, {
            subscriptionOptions: q,
            forceRefetch: d
          }));
          V.current = B;
        } else
          q !== P && y.updateSubscriptionOptions(q);
      }, [N, D, d, M, q, se]), H.useEffect(() => () => {
        var y;
        (y = V.current) == null || y.unsubscribe(), V.current = void 0;
      }, []), H.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var y;
          if (!V.current)
            throw new Error(process.env.NODE_ENV === "production" ? X(38) : "Cannot refetch a query that has not been started yet.");
          return (y = V.current) == null ? void 0 : y.refetch();
        }
      }), []);
    }, g = ({
      refetchOnReconnect: p,
      refetchOnFocus: u,
      pollingInterval: s = 0,
      skipPollingIfUnfocused: d = !1
    } = {}) => {
      const {
        initiate: E
      } = e.endpoints[h], w = n(), [C, D] = H.useState(tr), N = H.useRef(), j = rr({
        refetchOnReconnect: p,
        refetchOnFocus: u,
        pollingInterval: s,
        skipPollingIfUnfocused: d
      });
      b(() => {
        var V, L;
        const z = (V = N.current) == null ? void 0 : V.subscriptionOptions;
        j !== z && ((L = N.current) == null || L.updateSubscriptionOptions(j));
      }, [j]);
      const M = H.useRef(j);
      b(() => {
        M.current = j;
      }, [j]);
      const q = H.useCallback(function(z, V = !1) {
        let L;
        return t(() => {
          var x;
          (x = N.current) == null || x.unsubscribe(), N.current = L = w(E(z, {
            subscriptionOptions: M.current,
            forceRefetch: !V
          })), D(z);
        }), L;
      }, [w, E]);
      return H.useEffect(() => () => {
        var z;
        (z = N == null ? void 0 : N.current) == null || z.unsubscribe();
      }, []), H.useEffect(() => {
        C !== tr && !N.current && q(C, !0);
      }, [C, q]), H.useMemo(() => [q, C], [q, C]);
    }, _ = (p, {
      skip: u = !1,
      selectFromResult: s
    } = {}) => {
      const {
        select: d
      } = e.endpoints[h], E = Gn(u ? Ce : p, S, T.endpointDefinitions[h], h), w = H.useRef(), C = H.useMemo(() => m([d(E), (q, z) => z, (q) => E], A, {
        memoizeOptions: {
          resultEqualityCheck: Ge
        }
      }), [d, E]), D = H.useMemo(() => s ? m([C], s, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : C, [C, s]), N = o((q) => D(q, w.current), Ge), j = i(), M = C(j.getState(), w.current);
      return Yu(() => {
        w.current = M;
      }, [M]), N;
    };
    return {
      useQueryState: _,
      useQuerySubscription: v,
      useLazyQuerySubscription: g,
      useLazyQuery(p) {
        const [u, s] = g(p), d = _(s, {
          ...p,
          skip: s === tr
        }), E = H.useMemo(() => ({
          lastArg: s
        }), [s]);
        return H.useMemo(() => [u, d, E], [u, d, E]);
      },
      useQuery(p, u) {
        const s = v(p, u), d = _(p, {
          selectFromResult: p === Ce || u != null && u.skip ? void 0 : Gu,
          ...u
        }), {
          data: E,
          status: w,
          isLoading: C,
          isSuccess: D,
          isError: N,
          error: j
        } = d;
        return H.useDebugValue({
          data: E,
          status: w,
          isLoading: C,
          isSuccess: D,
          isError: N,
          error: j
        }), H.useMemo(() => ({
          ...d,
          ...s
        }), [d, s]);
      }
    };
  }
  function l(h) {
    return ({
      selectFromResult: v,
      fixedCacheKey: g
    } = {}) => {
      const {
        select: _,
        initiate: p
      } = e.endpoints[h], u = n(), [s, d] = H.useState();
      H.useEffect(() => () => {
        s != null && s.arg.fixedCacheKey || s == null || s.reset();
      }, [s]);
      const E = H.useCallback(function(P) {
        const $ = u(p(P, {
          fixedCacheKey: g
        }));
        return d($), $;
      }, [u, p, g]), {
        requestId: w
      } = s || {}, C = H.useMemo(() => _({
        fixedCacheKey: g,
        requestId: s == null ? void 0 : s.requestId
      }), [g, s, _]), D = H.useMemo(() => v ? m([C], v) : C, [v, C]), N = o(D, Ge), j = g == null ? s == null ? void 0 : s.arg.originalArgs : void 0, M = H.useCallback(() => {
        t(() => {
          s && d(void 0), g && u(e.internalActions.removeMutationResult({
            requestId: w,
            fixedCacheKey: g
          }));
        });
      }, [u, g, s, w]), {
        endpointName: q,
        data: z,
        status: V,
        isLoading: L,
        isSuccess: x,
        isError: G,
        error: se
      } = N;
      H.useDebugValue({
        endpointName: q,
        data: z,
        status: V,
        isLoading: L,
        isSuccess: x,
        isError: G,
        error: se
      });
      const y = H.useMemo(() => ({
        ...N,
        originalArgs: j,
        reset: M
      }), [N, j, M]);
      return H.useMemo(() => [E, y], [E, y]);
    };
  }
}
function Zu(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
var Xu = /* @__PURE__ */ Symbol(), ea = ({
  batch: e = Wu,
  hooks: t = {
    useDispatch: Uu,
    useSelector: qu,
    useStore: Ao
  },
  createSelector: n = wr,
  unstable__sideEffectsInRender: o = !1,
  ...i
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const f = ["useDispatch", "useSelector", "useStore"];
    let m = !1;
    for (const S of f)
      if (Zu(i) > 0 && (i[S] && (m || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), m = !0)), t[S] = i[S]), typeof t[S] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? X(36) : `When using custom hooks for context, all ${f.length} hooks need to be provided: ${f.join(", ")}.
Hook ${S} was either not provided or not a function.`);
  }
  return {
    name: Xu,
    init(f, {
      serializeQueryArgs: m
    }, S) {
      const T = f, {
        buildQueryHooks: b,
        buildMutationHook: A,
        usePrefetch: O
      } = Ju({
        api: f,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: o,
          createSelector: n
        },
        serializeQueryArgs: m,
        context: S
      });
      return wt(T, {
        usePrefetch: O
      }), wt(S, {
        batch: e
      }), {
        injectEndpoint(c, l) {
          if (Bu(l)) {
            const {
              useQuery: h,
              useLazyQuery: v,
              useLazyQuerySubscription: g,
              useQueryState: _,
              useQuerySubscription: p
            } = b(c);
            wt(T.endpoints[c], {
              useQuery: h,
              useLazyQuery: v,
              useLazyQuerySubscription: g,
              useQueryState: _,
              useQuerySubscription: p
            }), f[`use${er(c)}Query`] = h, f[`useLazy${er(c)}Query`] = v;
          } else if (Ku(l)) {
            const h = A(c);
            wt(T.endpoints[c], {
              useMutation: h
            }), f[`use${er(c)}Mutation`] = h;
          }
        }
      };
    }
  };
}, ta = /* @__PURE__ */ mu(ku(), ea());
const ra = ta({
  reducerPath: "sparqlApi",
  baseQuery: au({ baseUrl: "https://data-iremus.huma-num.fr/sparql/" }),
  endpoints: (e) => ({
    getSparqlQueryResult: e.query({
      query: (t) => ({
        url: "",
        method: "POST",
        body: new URLSearchParams({ query: t })
      }),
      transformResponse: (t) => t
    })
  })
}), { useGetSparqlQueryResultQuery: va } = ra, ga = async (e, t = "https://data-iremus.huma-num.fr/sparql") => {
  const o = await (await fetch(t, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    body: `query=${encodeURIComponent(e)}`
  })).text();
  return JSON.parse(o);
};
function ba(e, t) {
  for (const n in t)
    e = e.replaceAll("${" + n + "}", t[n]);
  return e;
}
class _a {
  constructor() {
    K(this, "head");
    K(this, "results");
    this.head = new na(), this.results = new oa();
  }
}
class na {
  constructor() {
    K(this, "vars");
    this.vars = [];
  }
}
class oa {
  constructor() {
    K(this, "bindings");
    this.bindings = [];
  }
}
class Ea {
}
class Sa {
  constructor() {
    K(this, "lang");
    K(this, "type");
    K(this, "value");
    this.lang = ro.NONE, this.type = to.uri, this.value = "";
  }
}
export {
  Fi as BIBO_BASE,
  Zn as CRMDIG_BASE,
  yr as CRM_BASE,
  Ki as CountryFlags,
  sa as DATA_IREMUS_FILES_BASE,
  me as DATA_IREMUS_ID_BASE,
  mr as DCTERMS_BASE,
  Xn as DC_BASE,
  Ue as FOAF_BASE,
  fa as Graph,
  Vi as HEMEF_BASE,
  Qi as IREMUS_GRAPH_BASE,
  zi as IREMUS_NS_BASE,
  qi as IREMUS_RESOURCE_BASE,
  Yi as LABEL_PREDICATES,
  pa as LANGS_ORDER,
  Jn as LRMOO_BASE,
  ro as Languages,
  la as Literal,
  Li as MUSRAD30_BASE,
  da as OG,
  Ui as OWL_BASE,
  Ot as Ontology,
  Ct as OntologyClass,
  yn as OntologyProperty,
  br as OntologyStuff,
  ua as PRIORITIZED_RDF_PREFIXES,
  hn as PrefixedUri,
  vr as RDFS_BASE,
  eo as RDF_BASE,
  Rt as RDF_PREFIXES,
  ha as RESOURCE_IDENTITY_PREDICATES,
  Bi as Resource,
  Wi as SCHEMAORG_BASE,
  ya as SHERLOCK_TYPE,
  gr as SKOS_BASE,
  _a as SparqlQueryResultObject,
  Ea as SparqlQueryResultObject_Binding,
  na as SparqlQueryResultObject_Head,
  oa as SparqlQueryResultObject_Results,
  Sa as SparqlQueryResultObject_Variable,
  to as Type,
  Hi as XSDTypes,
  ba as bind,
  Gi as computeIdentity,
  ma as computeResourceLabel,
  Ji as formatUri,
  ca as getCode,
  aa as getPrefixedUri,
  ga as querySparqlEndpoint,
  ra as sparqlApi,
  va as useGetSparqlQueryResultQuery
};
