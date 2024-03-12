var Ii = Object.defineProperty;
var ji = (e, t, n) => t in e ? Ii(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var H = (e, t, n) => (ji(e, typeof t != "symbol" ? t + "" : t, n), n);
function xi(e, t) {
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
const $i = "http://purl.org/ontology/bibo/", Yn = "http://www.cidoc-crm.org/lrmoo/", hr = "http://www.cidoc-crm.org/cidoc-crm/", Gn = "http://www.ics.forth.gr/isl/CRMdig/", Jn = "http://purl.org/dc/elements/1.1/", yr = "http://purl.org/dc/terms/", Ue = "http://xmlns.com/foaf/0.1/", Fi = "http://data-iremus.huma-num.fr/ns/hemef#", ia = "http://data-iremus.huma-num.fr/files/", me = "http://data-iremus.huma-num.fr/id/", Vi = "http://data-iremus.huma-num.fr/id/", qi = "http://data-iremus.huma-num.fr/ns/", zi = "http://data-iremus.huma-num.fr/graph/", Li = "http://data-iremus.huma-num.fr/ns/musrad30#", Qi = "http://www.w3.org/2002/07/owl#", Zn = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", mr = "http://www.w3.org/2000/01/rdf-schema#", Ui = "http://schema.org/", vr = "http://www.w3.org/2004/02/skos/core#", Xn = {
  [hr]: "crm",
  [Gn]: "crmdig",
  [$i]: "bibo",
  [Jn]: "dc",
  [yr]: "dcterms",
  [Ue]: "foaf",
  [Fi]: "hemef",
  [Vi]: "",
  [qi]: "",
  [Li]: "musrad30",
  [Yn]: "lrmoo",
  [Qi]: "owl",
  [Zn]: "rdf",
  [mr]: "rdfs",
  [Ui]: "schema",
  [vr]: "skos",
  [zi]: ""
}, sa = Object.entries(Xn).sort(
  (e, t) => e[0].length < t[0].length ? 1 : -1
);
function ua(e) {
  return e.startsWith(hr) || e.startsWith(Gn) || e.startsWith(Yn) ? e.split("/").slice(-1)[0].split("_")[0] : null;
}
class Wi {
  constructor(t = "") {
    H(this, "_pog");
    H(this, "_uri");
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
class aa {
  constructor(t, n, o) {
    H(this, "_lang");
    H(this, "_value");
    H(this, "_type");
    H(this, "toString", () => `${this._value}@${this._lang}`);
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
class ca {
  constructor(t) {
    H(this, "_uri");
    this._uri = t;
  }
  get uri() {
    return this._uri;
  }
}
class la {
  constructor(t, n, o = void 0) {
    H(this, "_literal");
    H(this, "_resource");
    H(this, "_graph");
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
const kt = class kt {
  constructor(t) {
    H(this, "_classesRegistry", /* @__PURE__ */ new Map());
    H(this, "_name");
    H(this, "_classes");
    H(this, "_properties");
    H(this, "_propertiesRegistry", /* @__PURE__ */ new Map());
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
H(kt, "void", new kt(""));
let Rt = kt;
class gr extends Wi {
  constructor(n, o, i) {
    super(n);
    H(this, "_comment");
    H(this, "_intCodeForSorting");
    H(this, "_label");
    H(this, "_name");
    H(this, "_ontology");
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
H(gr, "label", "");
const Tt = class Tt extends gr {
  constructor(n, o, i) {
    super(n, o, i);
    H(this, "_subClassOf");
    this._subClassOf = new Array();
  }
  addSubClassOf(n) {
    this._subClassOf.push(n);
  }
};
H(Tt, "void", new Tt("", "", Rt.void));
let Ot = Tt;
const Je = class Je extends gr {
  constructor(n, o, i) {
    super(n, o, i);
    H(this, "_domain", Ot.void);
    H(this, "_inverseOf", Je.void);
    H(this, "_range", Ot.void);
    H(this, "_subPropertyOf");
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
H(Je, "void", new Je("", "", Rt.void));
let pn = Je;
var eo = /* @__PURE__ */ ((e) => (e.literal = "literal", e.uri = "uri", e))(eo || {}), Bi = /* @__PURE__ */ ((e) => (e.de = "🇩🇪", e.en = "🇬🇧", e.es = "🇪🇸", e.fr = "🇫🇷", e.it = "🇮🇹", e))(Bi || {}), to = /* @__PURE__ */ ((e) => (e.NONE = "", e.DE = "de", e.EL = "el", e.EN = "en", e.ES = "es", e.FR = "fr", e.IT = "it", e.PT = "pt", e.RU = "ru", e.ZH = "zh", e))(to || {});
const fa = [
  "fr",
  "en",
  "it",
  "de"
  /* DE */
];
var Ki = /* @__PURE__ */ ((e) => (e.anyURI = "anyURI", e.base64Binary = "base64Binary", e.boolean = "boolean", e.date = "date", e.dateTime = "dateTime", e.decimal = "decimal", e.double = "double", e.duration = "duration", e.float = "float", e.hexBinary = "hexBinary", e.gDay = "gDay", e.gMonth = "gMonth", e.gMonthDay = "gMonthDay", e.gYear = "gYear", e.gYearMonth = "gYearMonth", e.NOTATION = "NOTATION", e.QName = "QName", e.string = "string", e.time = "time", e))(Ki || {});
const Hi = [
  hr + "P1_is_identified_by",
  Jn + "title",
  yr + "title",
  Ue + "familyName",
  Ue + "firstName",
  Ue + "givenName",
  Ue + "name",
  mr + "label",
  vr + "prefLabel"
], da = [
  ...Hi,
  Zn + "type",
  yr + "creator",
  vr + "inScheme",
  mr + "subClassOf"
], pa = {
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
function Yi(e) {
  const t = e.find((n) => n.label);
  return t ? t.label.value : "";
}
function ha(e, t) {
  return `${Yi(t)}   ${Gi(e)}`;
}
function Gi(e) {
  for (const [t, n] of Object.entries(Xn))
    e = e.replace(t, n !== "" ? n + ":" : "");
  return e;
}
function rr(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Bt = () => Math.random().toString(36).substring(7).split("").join("."), Ji = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Bt()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Bt()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Bt()}`
}, Ke = Ji;
function _e(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Zi(e) {
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
  if (ts(e))
    return "date";
  if (es(e))
    return "error";
  const n = Xi(e);
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
function Xi(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function es(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ts(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function rs(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Zi(e)), t;
}
function hn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ns(e, t, n, o) {
  const i = Object.keys(t), f = n && n.type === Ke.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!_e(e))
    return `The ${f} has unexpected type of "${rs(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const m = Object.keys(e).filter((b) => !t.hasOwnProperty(b) && !o[b]);
  if (m.forEach((b) => {
    o[b] = !0;
  }), !(n && n.type === Ke.REPLACE) && m.length > 0)
    return `Unexpected ${m.length > 1 ? "keys" : "key"} "${m.join('", "')}" found in ${f}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function os(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Ke.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? rr(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: Ke.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? rr(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Ke.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function is(e) {
  const t = Object.keys(e), n = {};
  for (let m = 0; m < t.length; m++) {
    const b = t[m];
    process.env.NODE_ENV !== "production" && typeof e[b] > "u" && hn(`No reducer provided for key "${b}"`), typeof e[b] == "function" && (n[b] = e[b]);
  }
  const o = Object.keys(n);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let f;
  try {
    os(n);
  } catch (m) {
    f = m;
  }
  return function(b = {}, T) {
    if (f)
      throw f;
    if (process.env.NODE_ENV !== "production") {
      const R = ns(b, n, T, i);
      R && hn(R);
    }
    let g = !1;
    const w = {};
    for (let R = 0; R < o.length; R++) {
      const l = o[R], c = n[l], d = b[l], v = c(d, T);
      if (typeof v > "u") {
        const E = T && T.type;
        throw new Error(process.env.NODE_ENV === "production" ? rr(14) : `When called with an action of type ${E ? `"${String(E)}"` : "(unknown type)"}, the slice reducer for key "${l}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      w[l] = v, g = g || v !== d;
    }
    return g = g || o.length !== Object.keys(b).length, g ? w : b;
  };
}
function ro(e) {
  return _e(e) && "type" in e && typeof e.type == "string";
}
var br = Symbol.for("immer-nothing"), He = Symbol.for("immer-draftable"), he = Symbol.for("immer-state"), no = process.env.NODE_ENV !== "production" ? [
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
    const n = no[e], o = typeof n == "function" ? n.apply(null, t) : n;
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
  return e ? oo(e) || Array.isArray(e) || !!e[He] || !!((t = e.constructor) != null && t[He]) || it(e) || st(e) : !1;
}
var ss = Object.prototype.constructor.toString();
function oo(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ae(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === ss;
}
function us(e) {
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
function Kt(e, t) {
  return ke(e) === 2 ? e.get(t) : e[t];
}
function io(e, t, n) {
  const o = ke(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function as(e, t) {
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
function nr(e, t) {
  if (it(e))
    return new Map(e);
  if (st(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && oo(e))
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
function _r(e, t = !1) {
  return Nt(e) || ve(e) || !ge(e) || (ke(e) > 1 && (e.set = e.add = e.clear = e.delete = cs), Object.freeze(e), t && Object.entries(e).forEach(([n, o]) => _r(o, !0))), e;
}
function cs() {
  ce(2);
}
function Nt(e) {
  return Object.isFrozen(e);
}
var or = {};
function Te(e) {
  const t = or[e];
  return t || ce(0, e), t;
}
function ls(e, t) {
  or[e] || (or[e] = t);
}
var et;
function so() {
  return et;
}
function fs(e, t) {
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
function yn(e, t) {
  t && (Te("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ir(e) {
  sr(e), e.drafts_.forEach(ds), e.drafts_ = null;
}
function sr(e) {
  e === et && (et = e.parent_);
}
function mn(e) {
  return et = fs(et, e);
}
function ds(e) {
  const t = e[he];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function vn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[he].modified_ && (ir(t), ce(4)), ge(e) && (e = Ct(t, e), t.parent_ || At(t, e)), t.patches_ && Te("Patches").generateReplacementPatches_(
    n[he].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Ct(t, n, []), ir(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== br ? e : void 0;
}
function Ct(e, t, n) {
  if (Nt(t))
    return t;
  const o = t[he];
  if (!o)
    return Ze(
      t,
      (i, f) => gn(e, o, t, i, f, n)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return At(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const i = o.copy_;
    let f = i, m = !1;
    o.type_ === 3 && (f = new Set(i), i.clear(), m = !0), Ze(
      f,
      (b, T) => gn(e, o, i, b, T, n, m)
    ), At(e, i, !1), n && e.patches_ && Te("Patches").generatePatches_(
      o,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function gn(e, t, n, o, i, f, m) {
  if (process.env.NODE_ENV !== "production" && i === n && ce(5), ve(i)) {
    const b = f && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Xe(t.assigned_, o) ? f.concat(o) : void 0, T = Ct(e, i, b);
    if (io(n, o, T), ve(T))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    m && n.add(i);
  if (ge(i) && !Nt(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Ct(e, i), (!t || !t.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(n, o) && At(e, i);
  }
}
function At(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && _r(t, n);
}
function ps(e, t) {
  const n = Array.isArray(e), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : so(),
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
  let i = o, f = Er;
  n && (i = [o], f = tt);
  const { revoke: m, proxy: b } = Proxy.revocable(i, f);
  return o.draft_ = b, o.revoke_ = m, b;
}
var Er = {
  get(e, t) {
    if (t === he)
      return e;
    const n = Oe(e);
    if (!Xe(n, t))
      return hs(e, n, t);
    const o = n[t];
    return e.finalized_ || !ge(o) ? o : o === Ht(e.base_, t) ? (Yt(e), e.copy_[t] = ar(o, e)) : o;
  },
  has(e, t) {
    return t in Oe(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Oe(e));
  },
  set(e, t, n) {
    const o = uo(Oe(e), t);
    if (o != null && o.set)
      return o.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Ht(Oe(e), t), f = i == null ? void 0 : i[he];
      if (f && f.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (as(n, i) && (n !== void 0 || Xe(e.base_, t)))
        return !0;
      Yt(e), ur(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ht(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Yt(e), ur(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
Ze(Er, (e, t) => {
  tt[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
tt.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && ce(13), tt.set.call(this, e, t, void 0);
};
tt.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && ce(14), Er.set.call(this, e[0], t, n, e[0]);
};
function Ht(e, t) {
  const n = e[he];
  return (n ? Oe(n) : e)[t];
}
function hs(e, t, n) {
  var i;
  const o = uo(t, n);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = o.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function uo(e, t) {
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
function ur(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ur(e.parent_));
}
function Yt(e) {
  e.copy_ || (e.copy_ = nr(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ys = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, o) => {
      if (typeof t == "function" && typeof n != "function") {
        const f = n;
        n = t;
        const m = this;
        return function(T = f, ...g) {
          return m.produce(T, (w) => n.call(this, w, ...g));
        };
      }
      typeof n != "function" && ce(6), o !== void 0 && typeof o != "function" && ce(7);
      let i;
      if (ge(t)) {
        const f = mn(this), m = ar(t, void 0);
        let b = !0;
        try {
          i = n(m), b = !1;
        } finally {
          b ? ir(f) : sr(f);
        }
        return yn(f, o), vn(i, f);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === br && (i = void 0), this.autoFreeze_ && _r(i, !0), o) {
          const f = [], m = [];
          Te("Patches").generateReplacementPatches_(t, i, f, m), o(f, m);
        }
        return i;
      } else
        ce(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (m, ...b) => this.produceWithPatches(m, (T) => t(T, ...b));
      let o, i;
      return [this.produce(t, n, (m, b) => {
        o = m, i = b;
      }), o, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ge(e) || ce(8), ve(e) && (e = ao(e));
    const t = mn(this), n = ar(e, void 0);
    return n[he].isManual_ = !0, sr(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[he];
    (!n || !n.isManual_) && ce(9);
    const { scope_: o } = n;
    return yn(o, t), vn(void 0, o);
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
function ar(e, t) {
  const n = it(e) ? Te("MapSet").proxyMap_(e, t) : st(e) ? Te("MapSet").proxySet_(e, t) : ps(e, t);
  return (t ? t.scope_ : so()).drafts_.push(n), n;
}
function ao(e) {
  return ve(e) || ce(10, e), co(e);
}
function co(e) {
  if (!ge(e) || Nt(e))
    return e;
  const t = e[he];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = nr(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = nr(e, !0);
  return Ze(n, (o, i) => {
    io(n, o, co(i));
  }), t && (t.finalized_ = !1), n;
}
function ms() {
  process.env.NODE_ENV !== "production" && no.push(
    'Sets cannot have "replace" patches.',
    function(l) {
      return "Unsupported patch operation: " + l;
    },
    function(l) {
      return "Cannot apply patch, path doesn't resolve: " + l;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", n = "add", o = "remove";
  function i(l, c, d, v) {
    switch (l.type_) {
      case 0:
      case 2:
        return m(
          l,
          c,
          d,
          v
        );
      case 1:
        return f(l, c, d, v);
      case 3:
        return b(
          l,
          c,
          d,
          v
        );
    }
  }
  function f(l, c, d, v) {
    let { base_: E, assigned_: S } = l, h = l.copy_;
    h.length < E.length && ([E, h] = [h, E], [d, v] = [v, d]);
    for (let u = 0; u < E.length; u++)
      if (S[u] && h[u] !== E[u]) {
        const s = c.concat([u]);
        d.push({
          op: t,
          path: s,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: R(h[u])
        }), v.push({
          op: t,
          path: s,
          value: R(E[u])
        });
      }
    for (let u = E.length; u < h.length; u++) {
      const s = c.concat([u]);
      d.push({
        op: n,
        path: s,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: R(h[u])
      });
    }
    for (let u = h.length - 1; E.length <= u; --u) {
      const s = c.concat([u]);
      v.push({
        op: o,
        path: s
      });
    }
  }
  function m(l, c, d, v) {
    const { base_: E, copy_: S } = l;
    Ze(l.assigned_, (h, u) => {
      const s = Kt(E, h), p = Kt(S, h), _ = u ? Xe(E, h) ? t : n : o;
      if (s === p && _ === t)
        return;
      const O = c.concat(h);
      d.push(_ === o ? { op: _, path: O } : { op: _, path: O, value: p }), v.push(
        _ === n ? { op: o, path: O } : _ === o ? { op: n, path: O, value: R(s) } : { op: t, path: O, value: R(s) }
      );
    });
  }
  function b(l, c, d, v) {
    let { base_: E, copy_: S } = l, h = 0;
    E.forEach((u) => {
      if (!S.has(u)) {
        const s = c.concat([h]);
        d.push({
          op: o,
          path: s,
          value: u
        }), v.unshift({
          op: n,
          path: s,
          value: u
        });
      }
      h++;
    }), h = 0, S.forEach((u) => {
      if (!E.has(u)) {
        const s = c.concat([h]);
        d.push({
          op: n,
          path: s,
          value: u
        }), v.unshift({
          op: o,
          path: s,
          value: u
        });
      }
      h++;
    });
  }
  function T(l, c, d, v) {
    d.push({
      op: t,
      path: [],
      value: c === br ? void 0 : c
    }), v.push({
      op: t,
      path: [],
      value: l
    });
  }
  function g(l, c) {
    return c.forEach((d) => {
      const { path: v, op: E } = d;
      let S = l;
      for (let p = 0; p < v.length - 1; p++) {
        const _ = ke(S);
        let O = v[p];
        typeof O != "string" && typeof O != "number" && (O = "" + O), (_ === 0 || _ === 1) && (O === "__proto__" || O === "constructor") && ce(19), typeof S == "function" && O === "prototype" && ce(19), S = Kt(S, O), typeof S != "object" && ce(18, v.join("/"));
      }
      const h = ke(S), u = w(d.value), s = v[v.length - 1];
      switch (E) {
        case t:
          switch (h) {
            case 2:
              return S.set(s, u);
            case 3:
              ce(16);
            default:
              return S[s] = u;
          }
        case n:
          switch (h) {
            case 1:
              return s === "-" ? S.push(u) : S.splice(s, 0, u);
            case 2:
              return S.set(s, u);
            case 3:
              return S.add(u);
            default:
              return S[s] = u;
          }
        case o:
          switch (h) {
            case 1:
              return S.splice(s, 1);
            case 2:
              return S.delete(s);
            case 3:
              return S.delete(d.value);
            default:
              return delete S[s];
          }
        default:
          ce(17, E);
      }
    }), l;
  }
  function w(l) {
    if (!ge(l))
      return l;
    if (Array.isArray(l))
      return l.map(w);
    if (it(l))
      return new Map(
        Array.from(l.entries()).map(([d, v]) => [d, w(v)])
      );
    if (st(l))
      return new Set(Array.from(l).map(w));
    const c = Object.create(Ae(l));
    for (const d in l)
      c[d] = w(l[d]);
    return Xe(l, He) && (c[He] = l[He]), c;
  }
  function R(l) {
    return ve(l) ? w(l) : l;
  }
  ls("Patches", {
    applyPatches_: g,
    generatePatches_: i,
    generateReplacementPatches_: T
  });
}
var ye = new ys(), ut = ye.produce, lo = ye.produceWithPatches.bind(
  ye
);
ye.setAutoFreeze.bind(ye);
ye.setUseStrictShallowCopy.bind(ye);
var bn = ye.applyPatches.bind(ye);
ye.createDraft.bind(ye);
ye.finishDraft.bind(ye);
var vs = (e, t, n) => {
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
}, gs = (e, t, n) => {
  const { memoize: o, memoizeOptions: i } = t, { inputSelectorResults: f, inputSelectorResultsCopy: m } = e, b = o(() => ({}), ...i);
  if (!(b.apply(null, f) === b.apply(null, m))) {
    let g;
    try {
      throw new Error();
    } catch (w) {
      ({ stack: g } = w);
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
        stack: g
      }
    );
  }
}, bs = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function _s(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Es(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Ss(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var _n = (e) => Array.isArray(e) ? e : [e];
function ws(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Ss(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function En(e, t) {
  const n = [], { length: o } = e;
  for (let i = 0; i < o; i++)
    n.push(e[i].apply(null, t));
  return n;
}
var Rs = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: o } = {
    ...bs,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: vs
    },
    inputStabilityCheck: {
      shouldRun: o === "always" || o === "once" && e,
      run: gs
    }
  };
}, Os = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Cs = typeof WeakRef < "u" ? WeakRef : Os, As = 0, Sn = 1;
function _t() {
  return {
    s: As,
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
    var R;
    let b = n;
    const { length: T } = arguments;
    for (let l = 0, c = T; l < c; l++) {
      const d = arguments[l];
      if (typeof d == "function" || typeof d == "object" && d !== null) {
        let v = b.o;
        v === null && (b.o = v = /* @__PURE__ */ new WeakMap());
        const E = v.get(d);
        E === void 0 ? (b = _t(), v.set(d, b)) : b = E;
      } else {
        let v = b.p;
        v === null && (b.p = v = /* @__PURE__ */ new Map());
        const E = v.get(d);
        E === void 0 ? (b = _t(), v.set(d, b)) : b = E;
      }
    }
    const g = b;
    let w;
    if (b.s === Sn ? w = b.v : (w = e.apply(null, arguments), f++), g.s = Sn, o) {
      const l = ((R = i == null ? void 0 : i.deref) == null ? void 0 : R.call(i)) ?? i;
      l != null && o(l, w) && (w = l, f !== 0 && f--), i = typeof w == "object" && w !== null || typeof w == "function" ? new Cs(w) : w;
    }
    return g.v = w, w;
  }
  return m.clearCache = () => {
    n = _t(), m.resetResultsCount();
  }, m.resultsCount = () => f, m.resetResultsCount = () => {
    f = 0;
  }, m;
}
function fo(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, o = (...i) => {
    let f = 0, m = 0, b, T = {}, g = i.pop();
    typeof g == "object" && (T = g, g = i.pop()), _s(
      g,
      `createSelector expects an output function after the inputs, but received: [${typeof g}]`
    );
    const w = {
      ...n,
      ...T
    }, {
      memoize: R,
      memoizeOptions: l = [],
      argsMemoize: c = rt,
      argsMemoizeOptions: d = [],
      devModeChecks: v = {}
    } = w, E = _n(l), S = _n(d), h = ws(i), u = R(function() {
      return f++, g.apply(
        null,
        arguments
      );
    }, ...E);
    let s = !0;
    const p = c(function() {
      m++;
      const O = En(
        h,
        arguments
      );
      if (b = u.apply(null, O), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: A, inputStabilityCheck: D } = Rs(s, v);
        if (A.shouldRun && A.run(
          g,
          O,
          b
        ), D.shouldRun) {
          const N = En(
            h,
            arguments
          );
          D.run(
            { inputSelectorResults: O, inputSelectorResultsCopy: N },
            { memoize: R, memoizeOptions: E },
            arguments
          );
        }
        s && (s = !1);
      }
      return b;
    }, ...S);
    return Object.assign(p, {
      resultFunc: g,
      memoizedResultFunc: u,
      dependencies: h,
      dependencyRecomputations: () => m,
      resetDependencyRecomputations: () => {
        m = 0;
      },
      lastResult: () => b,
      recomputations: () => f,
      resetRecomputations: () => {
        f = 0;
      },
      memoize: R,
      argsMemoize: c
    });
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var Sr = /* @__PURE__ */ fo(rt), ks = Object.assign(
  (e, t = Sr) => {
    Es(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), o = n.map(
      (f) => e[f]
    );
    return t(
      o,
      (...f) => f.reduce((m, b, T) => (m[n[T]] = b, m), {})
    );
  },
  { withTypes: () => ks }
), Ts = (...e) => {
  const t = fo(...e), n = Object.assign((...o) => {
    const i = t(...o), f = (m, ...b) => i(ve(m) ? ao(m) : m, ...b);
    return Object.assign(f, i), f;
  }, {
    withTypes: () => n
  });
  return n;
};
Ts(rt);
var Ns = (e) => e && typeof e.match == "function";
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
  return n.toString = () => `${e}`, n.type = e, n.match = (o) => ro(o) && o.type === e, n;
}
function wn(e) {
  return ge(e) ? ut(e, () => {
  }) : e;
}
function Rn(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && (i = n.update(i, t, e), e.set(t, i)), i;
  }
  if (!n.insert)
    throw new Error(process.env.NODE_ENV === "production" ? X(10) : "No insert provided for key not already in map");
  const o = n.insert(t, e);
  return e.set(t, o), o;
}
var We = "RTK_autoBatch", Le = () => (e) => ({
  payload: e,
  meta: {
    [We]: !0
  }
});
process.env.NODE_ENV;
function po(e) {
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
      const b = typeof f == "string" ? f : f.type;
      if (!b)
        throw new Error(process.env.NODE_ENV === "production" ? X(28) : "`builder.addCase` cannot be called with an empty action type");
      if (b in t)
        throw new Error(process.env.NODE_ENV === "production" ? X(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${b}'`);
      return t[b] = m, i;
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
function Ds(e) {
  return typeof e == "function";
}
function Ps(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? X(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, o, i] = po(t), f;
  if (Ds(e))
    f = () => wn(e());
  else {
    const b = wn(e);
    f = () => b;
  }
  function m(b = f(), T) {
    let g = [n[T.type], ...o.filter(({
      matcher: w
    }) => w(T)).map(({
      reducer: w
    }) => w)];
    return g.filter((w) => !!w).length === 0 && (g = [i]), g.reduce((w, R) => {
      if (R)
        if (ve(w)) {
          const c = R(w, T);
          return c === void 0 ? w : c;
        } else {
          if (ge(w))
            return ut(w, (l) => R(l, T));
          {
            const l = R(w, T);
            if (l === void 0) {
              if (w === null)
                return w;
              throw new Error(process.env.NODE_ENV === "production" ? X(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return l;
          }
        }
      return w;
    }, b);
  }
  return m.getInitialState = f, m;
}
var Ms = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", wr = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Ms[Math.random() * 64 | 0];
  return t;
}, ho = (e, t) => Ns(e) ? e.match(t) : e(t);
function we(...e) {
  return (t) => e.some((n) => ho(n, t));
}
function Ye(...e) {
  return (t) => e.every((n) => ho(n, t));
}
function Dt(e, t) {
  if (!e || !e.meta)
    return !1;
  const n = typeof e.meta.requestId == "string", o = t.indexOf(e.meta.requestStatus) > -1;
  return n && o;
}
function at(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Rr(...e) {
  return e.length === 0 ? (t) => Dt(t, ["pending"]) : at(e) ? (t) => {
    const n = e.map((i) => i.pending);
    return we(...n)(t);
  } : Rr()(e[0]);
}
function Fe(...e) {
  return e.length === 0 ? (t) => Dt(t, ["rejected"]) : at(e) ? (t) => {
    const n = e.map((i) => i.rejected);
    return we(...n)(t);
  } : Fe()(e[0]);
}
function Pt(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? (n) => Ye(Fe(...e), t)(n) : at(e) ? (n) => Ye(Fe(...e), t)(n) : Pt()(e[0]);
}
function Re(...e) {
  return e.length === 0 ? (t) => Dt(t, ["fulfilled"]) : at(e) ? (t) => {
    const n = e.map((i) => i.fulfilled);
    return we(...n)(t);
  } : Re()(e[0]);
}
function cr(...e) {
  return e.length === 0 ? (t) => Dt(t, ["pending", "fulfilled", "rejected"]) : at(e) ? (t) => {
    const n = [];
    for (const i of e)
      n.push(i.pending, i.rejected, i.fulfilled);
    return we(...n)(t);
  } : cr()(e[0]);
}
var Is = ["name", "message", "stack", "code"], Gt = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    H(this, "_type");
    this.payload = e, this.meta = t;
  }
}, On = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    H(this, "_type");
    this.payload = e, this.meta = t;
  }
}, js = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of Is)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, Cn = /* @__PURE__ */ (() => {
  function e(t, n, o) {
    const i = pe(t + "/fulfilled", (T, g, w, R) => ({
      payload: T,
      meta: {
        ...R || {},
        arg: w,
        requestId: g,
        requestStatus: "fulfilled"
      }
    })), f = pe(t + "/pending", (T, g, w) => ({
      payload: void 0,
      meta: {
        ...w || {},
        arg: g,
        requestId: T,
        requestStatus: "pending"
      }
    })), m = pe(t + "/rejected", (T, g, w, R, l) => ({
      payload: R,
      error: (o && o.serializeError || js)(T || "Rejected"),
      meta: {
        ...l || {},
        arg: w,
        requestId: g,
        rejectedWithValue: !!R,
        requestStatus: "rejected",
        aborted: (T == null ? void 0 : T.name) === "AbortError",
        condition: (T == null ? void 0 : T.name) === "ConditionError"
      }
    }));
    function b(T) {
      return (g, w, R) => {
        const l = o != null && o.idGenerator ? o.idGenerator(T) : wr(), c = new AbortController();
        let d, v;
        function E(h) {
          v = h, c.abort();
        }
        const S = async function() {
          var s, p;
          let h;
          try {
            let _ = (s = o == null ? void 0 : o.condition) == null ? void 0 : s.call(o, T, {
              getState: w,
              extra: R
            });
            if ($s(_) && (_ = await _), _ === !1 || c.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const O = new Promise((A, D) => {
              d = () => {
                D({
                  name: "AbortError",
                  message: v || "Aborted"
                });
              }, c.signal.addEventListener("abort", d);
            });
            g(f(l, T, (p = o == null ? void 0 : o.getPendingMeta) == null ? void 0 : p.call(o, {
              requestId: l,
              arg: T
            }, {
              getState: w,
              extra: R
            }))), h = await Promise.race([O, Promise.resolve(n(T, {
              dispatch: g,
              getState: w,
              extra: R,
              requestId: l,
              signal: c.signal,
              abort: E,
              rejectWithValue: (A, D) => new Gt(A, D),
              fulfillWithValue: (A, D) => new On(A, D)
            })).then((A) => {
              if (A instanceof Gt)
                throw A;
              return A instanceof On ? i(A.payload, l, T, A.meta) : i(A, l, T);
            })]);
          } catch (_) {
            h = _ instanceof Gt ? m(null, l, T, _.payload, _.meta) : m(_, l, T);
          } finally {
            d && c.signal.removeEventListener("abort", d);
          }
          return o && !o.dispatchConditionRejection && m.match(h) && h.meta.condition || g(h), h;
        }();
        return Object.assign(S, {
          abort: E,
          requestId: l,
          arg: T,
          unwrap() {
            return S.then(xs);
          }
        });
      };
    }
    return Object.assign(b, {
      pending: f,
      rejected: m,
      fulfilled: i,
      settled: we(m, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function xs(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function $s(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Fs = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Vs(e, t) {
  return `${e}/${t}`;
}
function qs({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Fs];
  return function(i) {
    const {
      name: f,
      reducerPath: m = f
    } = i;
    if (!f)
      throw new Error(process.env.NODE_ENV === "production" ? X(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const b = (typeof i.reducers == "function" ? i.reducers(Ls()) : i.reducers) || {}, T = Object.keys(b), g = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, w = {
      addCase(u, s) {
        const p = typeof u == "string" ? u : u.type;
        if (!p)
          throw new Error(process.env.NODE_ENV === "production" ? X(12) : "`context.addCase` cannot be called with an empty action type");
        if (p in g.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? X(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + p);
        return g.sliceCaseReducersByType[p] = s, w;
      },
      addMatcher(u, s) {
        return g.sliceMatchers.push({
          matcher: u,
          reducer: s
        }), w;
      },
      exposeAction(u, s) {
        return g.actionCreators[u] = s, w;
      },
      exposeCaseReducer(u, s) {
        return g.sliceCaseReducersByName[u] = s, w;
      }
    };
    T.forEach((u) => {
      const s = b[u], p = {
        reducerName: u,
        type: Vs(f, u),
        createNotation: typeof i.reducers == "function"
      };
      Us(s) ? Bs(p, s, w, t) : Qs(p, s, w);
    });
    function R() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? X(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [u = {}, s = [], p = void 0] = typeof i.extraReducers == "function" ? po(i.extraReducers) : [i.extraReducers], _ = {
        ...u,
        ...g.sliceCaseReducersByType
      };
      return Ps(i.initialState, (O) => {
        for (let A in _)
          O.addCase(A, _[A]);
        for (let A of g.sliceMatchers)
          O.addMatcher(A.matcher, A.reducer);
        for (let A of s)
          O.addMatcher(A.matcher, A.reducer);
        p && O.addDefaultCase(p);
      });
    }
    const l = (u) => u, c = /* @__PURE__ */ new Map();
    let d;
    function v(u, s) {
      return d || (d = R()), d(u, s);
    }
    function E() {
      return d || (d = R()), d.getInitialState();
    }
    function S(u, s = !1) {
      function p(O) {
        let A = O[u];
        if (typeof A > "u") {
          if (s)
            A = E();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? X(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return A;
      }
      function _(O = l) {
        const A = Rn(c, s, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Rn(A, O, {
          insert: () => {
            const D = {};
            for (const [N, j] of Object.entries(i.selectors ?? {}))
              D[N] = zs(j, O, E, s);
            return D;
          }
        });
      }
      return {
        reducerPath: u,
        getSelectors: _,
        get selectors() {
          return _(p);
        },
        selectSlice: p
      };
    }
    const h = {
      name: f,
      reducer: v,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: E,
      ...S(m),
      injectInto(u, {
        reducerPath: s,
        ...p
      } = {}) {
        const _ = s ?? m;
        return u.inject({
          reducerPath: _,
          reducer: v
        }, p), {
          ...h,
          ...S(_, !0)
        };
      }
    };
    return h;
  };
}
function zs(e, t, n, o) {
  function i(f, ...m) {
    let b = t(f);
    if (typeof b > "u") {
      if (o)
        b = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? X(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(b, ...m);
  }
  return i.unwrapped = e, i;
}
var Ie = /* @__PURE__ */ qs();
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
function Qs({
  type: e,
  reducerName: t,
  createNotation: n
}, o, i) {
  let f, m;
  if ("reducer" in o) {
    if (n && !Ws(o))
      throw new Error(process.env.NODE_ENV === "production" ? X(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    f = o.reducer, m = o.prepare;
  } else
    f = o;
  i.addCase(e, f).exposeCaseReducer(t, f).exposeAction(t, m ? pe(e, m) : pe(e));
}
function Us(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Ws(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Bs({
  type: e,
  reducerName: t
}, n, o, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? X(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: f,
    fulfilled: m,
    pending: b,
    rejected: T,
    settled: g,
    options: w
  } = n, R = i(e, f, w);
  o.exposeAction(t, R), m && o.addCase(R.fulfilled, m), b && o.addCase(R.pending, b), T && o.addCase(R.rejected, T), g && o.addMatcher(R.settled, g), o.exposeCaseReducer(t, {
    fulfilled: m || Et,
    pending: b || Et,
    rejected: T || Et,
    settled: g || Et
  });
}
function Et() {
}
var Ks = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? X(32) : `${t} is not a function`);
}, Or = "listenerMiddleware", Hs = (e) => {
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
  return Ks(f, "options.listener"), {
    predicate: i,
    type: t,
    effect: f
  };
}, Ys = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: o
  } = Hs(e);
  return {
    id: wr(),
    effect: o,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? X(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Ys
}), Gs = Object.assign(pe(`${Or}/add`), {
  withTypes: () => Gs
});
pe(`${Or}/removeAll`);
var Js = Object.assign(pe(`${Or}/remove`), {
  withTypes: () => Js
});
function X(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var yo = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(yo || {});
function Zs(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
function Xs(e) {
  return new RegExp("(^|:)//").test(e);
}
var eu = (e) => e.replace(/\/$/, ""), tu = (e) => e.replace(/^\//, "");
function ru(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (Xs(t))
    return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = eu(e), t = tu(t), `${e}${n}${t}`;
}
var An = (e) => [].concat(...e);
function nu() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function ou() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var kn = _e;
function mo(e, t) {
  if (e === t || !(kn(e) && kn(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const n = Object.keys(t), o = Object.keys(e);
  let i = n.length === o.length;
  const f = Array.isArray(t) ? [] : {};
  for (const m of n)
    f[m] = mo(e[m], t[m]), i && (i = e[m] === f[m]);
  return i ? e : f;
}
var Tn = (...e) => fetch(...e), iu = (e) => e.status >= 200 && e.status <= 299, su = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Nn(e) {
  if (!_e(e))
    return e;
  const t = {
    ...e
  };
  for (const [n, o] of Object.entries(t))
    o === void 0 && delete t[n];
  return t;
}
function uu({
  baseUrl: e,
  prepareHeaders: t = (R) => R,
  fetchFn: n = Tn,
  paramsSerializer: o,
  isJsonContentType: i = su,
  jsonContentType: f = "application/json",
  jsonReplacer: m,
  timeout: b,
  responseHandler: T,
  validateStatus: g,
  ...w
} = {}) {
  return typeof fetch > "u" && n === Tn && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (l, c) => {
    const {
      signal: d,
      getState: v,
      extra: E,
      endpoint: S,
      forced: h,
      type: u
    } = c;
    let s, {
      url: p,
      headers: _ = new Headers(w.headers),
      params: O = void 0,
      responseHandler: A = T ?? "json",
      validateStatus: D = g ?? iu,
      timeout: N = b,
      ...j
    } = typeof l == "string" ? {
      url: l
    } : l, M = {
      ...w,
      signal: d,
      ...j
    };
    _ = new Headers(Nn(_)), M.headers = await t(_, {
      getState: v,
      extra: E,
      endpoint: S,
      forced: h,
      type: u
    }) || _;
    const q = ($) => typeof $ == "object" && (_e($) || Array.isArray($) || typeof $.toJSON == "function");
    if (!M.headers.has("content-type") && q(M.body) && M.headers.set("content-type", f), q(M.body) && i(M.headers) && (M.body = JSON.stringify(M.body, m)), O) {
      const $ = ~p.indexOf("?") ? "&" : "?", B = o ? o(O) : new URLSearchParams(Nn(O));
      p += $ + B;
    }
    p = ru(e, p);
    const z = new Request(p, M);
    s = {
      request: new Request(p, M)
    };
    let Q, x = !1, G = N && setTimeout(() => {
      x = !0, c.abort();
    }, N);
    try {
      Q = await n(z);
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
    const se = Q.clone();
    s.response = se;
    let y, P = "";
    try {
      let $;
      if (await Promise.all([
        R(Q, A).then((B) => y = B, (B) => $ = B),
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
          originalStatus: Q.status,
          data: P,
          error: String($)
        },
        meta: s
      };
    }
    return D(Q, y) ? {
      data: y,
      meta: s
    } : {
      error: {
        status: Q.status,
        data: y
      },
      meta: s
    };
  };
  async function R(l, c) {
    if (typeof c == "function")
      return c(l);
    if (c === "content-type" && (c = i(l.headers) ? "json" : "text"), c === "json") {
      const d = await l.text();
      return d.length ? JSON.parse(d) : null;
    }
    return l.text();
  }
}
var Dn = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, Cr = /* @__PURE__ */ pe("__rtkq/focused"), vo = /* @__PURE__ */ pe("__rtkq/unfocused"), Ar = /* @__PURE__ */ pe("__rtkq/online"), go = /* @__PURE__ */ pe("__rtkq/offline");
function bo(e) {
  return e.type === "query";
}
function au(e) {
  return e.type === "mutation";
}
function kr(e, t, n, o, i, f) {
  return cu(e) ? e(t, n, o, i).map(lr).map(f) : Array.isArray(e) ? e.map(lr).map(f) : [];
}
function cu(e) {
  return typeof e == "function";
}
function lr(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Pn(e) {
  return e != null;
}
function $e(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
function lu(e, t) {
  return e.catch(t);
}
var nt = Symbol("forceQueryFn"), fr = (e) => typeof e[nt] == "function";
function fu({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: o,
  context: i
}) {
  const f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: b,
    removeMutationResult: T,
    updateSubscriptionOptions: g
  } = o.internalActions;
  return {
    buildInitiateQuery: v,
    buildInitiateMutation: E,
    getRunningQueryThunk: w,
    getRunningMutationThunk: R,
    getRunningQueriesThunk: l,
    getRunningMutationsThunk: c
  };
  function w(S, h) {
    return (u) => {
      var _;
      const s = i.endpointDefinitions[S], p = e({
        queryArgs: h,
        endpointDefinition: s,
        endpointName: S
      });
      return (_ = f.get(u)) == null ? void 0 : _[p];
    };
  }
  function R(S, h) {
    return (u) => {
      var s;
      return (s = m.get(u)) == null ? void 0 : s[h];
    };
  }
  function l() {
    return (S) => Object.values(f.get(S) || {}).filter(Pn);
  }
  function c() {
    return (S) => Object.values(m.get(S) || {}).filter(Pn);
  }
  function d(S) {
    if (process.env.NODE_ENV !== "production") {
      if (d.triggered)
        return;
      const h = S(o.internalActions.internal_getRTKQSubscriptions());
      if (d.triggered = !0, typeof h != "object" || typeof (h == null ? void 0 : h.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? X(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function v(S, h) {
    const u = (s, {
      subscribe: p = !0,
      forceRefetch: _,
      subscriptionOptions: O,
      [nt]: A,
      ...D
    } = {}) => (N, j) => {
      var B;
      const M = e({
        queryArgs: s,
        endpointDefinition: h,
        endpointName: S
      }), q = t({
        ...D,
        type: "query",
        subscribe: p,
        forceRefetch: _,
        subscriptionOptions: O,
        endpointName: S,
        originalArgs: s,
        queryCacheKey: M,
        [nt]: A
      }), z = o.endpoints[S].select(s), V = N(q), Q = z(j());
      d(N);
      const {
        requestId: x,
        abort: G
      } = V, se = Q.requestId !== x, y = (B = f.get(N)) == null ? void 0 : B[M], P = () => z(j()), $ = Object.assign(A ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        V.then(P)
      ) : se && !y ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(Q)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([y, V]).then(P)
      ), {
        arg: s,
        requestId: x,
        subscriptionOptions: O,
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
          p && N(b({
            queryCacheKey: M,
            requestId: x
          }));
        },
        updateSubscriptionOptions(U) {
          $.subscriptionOptions = U, N(g({
            endpointName: S,
            requestId: x,
            queryCacheKey: M,
            options: U
          }));
        }
      });
      if (!y && !se && !A) {
        const U = f.get(N) || {};
        U[M] = $, f.set(N, U), $.then(() => {
          delete U[M], $e(U) || f.delete(N);
        });
      }
      return $;
    };
    return u;
  }
  function E(S) {
    return (h, {
      track: u = !0,
      fixedCacheKey: s
    } = {}) => (p, _) => {
      const O = n({
        type: "mutation",
        endpointName: S,
        originalArgs: h,
        track: u,
        fixedCacheKey: s
      }), A = p(O);
      d(p);
      const {
        requestId: D,
        abort: N,
        unwrap: j
      } = A, M = lu(A.unwrap().then((Q) => ({
        data: Q
      })), (Q) => ({
        error: Q
      })), q = () => {
        p(T({
          requestId: D,
          fixedCacheKey: s
        }));
      }, z = Object.assign(M, {
        arg: A.arg,
        requestId: D,
        abort: N,
        unwrap: j,
        reset: q
      }), V = m.get(p) || {};
      return m.set(p, V), V[D] = z, z.then(() => {
        delete V[D], $e(V) || m.delete(p);
      }), s && (V[s] = z, z.then(() => {
        V[s] === z && (delete V[s], $e(V) || m.delete(p));
      })), z;
    };
  }
}
function Mn(e) {
  return e;
}
function du({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: o,
  api: i,
  assertTagType: f
}) {
  const m = (h, u, s, p) => (_, O) => {
    const A = n[h], D = o({
      queryArgs: u,
      endpointDefinition: A,
      endpointName: h
    });
    if (_(i.internalActions.queryResultPatched({
      queryCacheKey: D,
      patches: s
    })), !p)
      return;
    const N = i.endpoints[h].select(u)(
      // Work around TS 4.1 mismatch
      O()
    ), j = kr(A.providesTags, N.data, void 0, u, {}, f);
    _(i.internalActions.updateProvidedBy({
      queryCacheKey: D,
      providedTags: j
    }));
  }, b = (h, u, s, p = !0) => (_, O) => {
    const D = i.endpoints[h].select(u)(
      // Work around TS 4.1 mismatch
      O()
    );
    let N = {
      patches: [],
      inversePatches: [],
      undo: () => _(i.util.patchQueryData(h, u, N.inversePatches, p))
    };
    if (D.status === "uninitialized")
      return N;
    let j;
    if ("data" in D)
      if (ge(D.data)) {
        const [M, q, z] = lo(D.data, s);
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
    return _(i.util.patchQueryData(h, u, N.patches, p)), N;
  }, T = (h, u, s) => (p) => p(i.endpoints[h].initiate(u, {
    subscribe: !1,
    forceRefetch: !0,
    [nt]: () => ({
      data: s
    })
  })), g = async (h, {
    signal: u,
    abort: s,
    rejectWithValue: p,
    fulfillWithValue: _,
    dispatch: O,
    getState: A,
    extra: D
  }) => {
    const N = n[h.endpointName];
    try {
      let j = Mn, M;
      const q = {
        signal: u,
        abort: s,
        dispatch: O,
        getState: A,
        extra: D,
        endpoint: h.endpointName,
        type: h.type,
        forced: h.type === "query" ? w(h, A()) : void 0
      }, z = h.type === "query" ? h[nt] : void 0;
      if (z ? M = z() : N.query ? (M = await t(N.query(h.originalArgs), q, N.extraOptions), N.transformResponse && (j = N.transformResponse)) : M = await N.queryFn(h.originalArgs, q, N.extraOptions, (V) => t(V, q, N.extraOptions)), typeof process < "u" && process.env.NODE_ENV === "development") {
        const V = N.query ? "`baseQuery`" : "`queryFn`";
        let Q;
        if (!M)
          Q = `${V} did not return anything.`;
        else if (typeof M != "object")
          Q = `${V} did not return an object.`;
        else if (M.error && M.data)
          Q = `${V} returned an object containing both \`error\` and \`result\`.`;
        else if (M.error === void 0 && M.data === void 0)
          Q = `${V} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
        else
          for (const x of Object.keys(M))
            if (x !== "error" && x !== "data" && x !== "meta") {
              Q = `The object returned by ${V} has the unknown property ${x}.`;
              break;
            }
        Q && console.error(`Error encountered handling the endpoint ${h.endpointName}.
              ${Q}
              It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
              Object returned was:`, M);
      }
      if (M.error)
        throw new Dn(M.error, M.meta);
      return _(await j(M.data, M.meta, h.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: M.meta,
        [We]: !0
      });
    } catch (j) {
      let M = j;
      if (M instanceof Dn) {
        let q = Mn;
        N.query && N.transformErrorResponse && (q = N.transformErrorResponse);
        try {
          return p(await q(M.value, M.meta, h.originalArgs), {
            baseQueryMeta: M.meta,
            [We]: !0
          });
        } catch (z) {
          M = z;
        }
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${h.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, M) : console.error(M), M;
    }
  };
  function w(h, u) {
    var A, D, N;
    const s = (D = (A = u[e]) == null ? void 0 : A.queries) == null ? void 0 : D[h.queryCacheKey], p = (N = u[e]) == null ? void 0 : N.config.refetchOnMountOrArgChange, _ = s == null ? void 0 : s.fulfilledTimeStamp, O = h.forceRefetch ?? (h.subscribe && p);
    return O ? O === !0 || (Number(/* @__PURE__ */ new Date()) - Number(_)) / 1e3 >= O : !1;
  }
  const R = Cn(`${e}/executeQuery`, g, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [We]: !0
      };
    },
    condition(h, {
      getState: u
    }) {
      var N, j, M;
      const s = u(), p = (j = (N = s[e]) == null ? void 0 : N.queries) == null ? void 0 : j[h.queryCacheKey], _ = p == null ? void 0 : p.fulfilledTimeStamp, O = h.originalArgs, A = p == null ? void 0 : p.originalArgs, D = n[h.endpointName];
      return fr(h) ? !0 : (p == null ? void 0 : p.status) === "pending" ? !1 : w(h, s) || bo(D) && ((M = D == null ? void 0 : D.forceRefetch) != null && M.call(D, {
        currentArg: O,
        previousArg: A,
        endpointState: p,
        state: s
      })) ? !0 : !_;
    },
    dispatchConditionRejection: !0
  }), l = Cn(`${e}/executeMutation`, g, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [We]: !0
      };
    }
  }), c = (h) => "force" in h, d = (h) => "ifOlderThan" in h, v = (h, u, s) => (p, _) => {
    const O = c(s) && s.force, A = d(s) && s.ifOlderThan, D = (j = !0) => {
      const M = {
        forceRefetch: j,
        isPrefetch: !0
      };
      return i.endpoints[h].initiate(u, M);
    }, N = i.endpoints[h].select(u)(_());
    if (O)
      p(D());
    else if (A) {
      const j = N == null ? void 0 : N.fulfilledTimeStamp;
      if (!j) {
        p(D());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(j))) / 1e3 >= A && p(D());
    } else
      p(D(!1));
  };
  function E(h) {
    return (u) => {
      var s, p;
      return ((p = (s = u == null ? void 0 : u.meta) == null ? void 0 : s.arg) == null ? void 0 : p.endpointName) === h;
    };
  }
  function S(h, u) {
    return {
      matchPending: Ye(Rr(h), E(u)),
      matchFulfilled: Ye(Re(h), E(u)),
      matchRejected: Ye(Fe(h), E(u))
    };
  }
  return {
    queryThunk: R,
    mutationThunk: l,
    prefetch: v,
    updateQueryData: b,
    upsertQueryData: T,
    patchQueryData: m,
    buildMatchThunkActions: S
  };
}
function _o(e, t, n, o) {
  return kr(n[e.meta.arg.endpointName][t], Re(e) ? e.payload : void 0, Pt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, o);
}
function St(e, t, n) {
  const o = e[t];
  o && n(o);
}
function ot(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function In(e, t, n) {
  const o = e[ot(t)];
  o && n(o);
}
var Qe = {};
function pu({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  context: {
    endpointDefinitions: o,
    apiUid: i,
    extractRehydrationInfo: f,
    hasRehydrationInfo: m
  },
  assertTagType: b,
  config: T
}) {
  const g = pe(`${e}/resetApiState`), w = Ie({
    name: `${e}/queries`,
    initialState: Qe,
    reducers: {
      removeQueryResult: {
        reducer(u, {
          payload: {
            queryCacheKey: s
          }
        }) {
          delete u[s];
        },
        prepare: Le()
      },
      queryResultPatched: {
        reducer(u, {
          payload: {
            queryCacheKey: s,
            patches: p
          }
        }) {
          St(u, s, (_) => {
            _.data = bn(_.data, p.concat());
          });
        },
        prepare: Le()
      }
    },
    extraReducers(u) {
      u.addCase(t.pending, (s, {
        meta: p,
        meta: {
          arg: _
        }
      }) => {
        var A;
        const O = fr(_);
        s[A = _.queryCacheKey] ?? (s[A] = {
          status: "uninitialized",
          endpointName: _.endpointName
        }), St(s, _.queryCacheKey, (D) => {
          D.status = "pending", D.requestId = O && D.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            D.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            p.requestId
          ), _.originalArgs !== void 0 && (D.originalArgs = _.originalArgs), D.startedTimeStamp = p.startedTimeStamp;
        });
      }).addCase(t.fulfilled, (s, {
        meta: p,
        payload: _
      }) => {
        St(s, p.arg.queryCacheKey, (O) => {
          if (O.requestId !== p.requestId && !fr(p.arg))
            return;
          const {
            merge: A
          } = o[p.arg.endpointName];
          if (O.status = "fulfilled", A)
            if (O.data !== void 0) {
              const {
                fulfilledTimeStamp: D,
                arg: N,
                baseQueryMeta: j,
                requestId: M
              } = p;
              let q = ut(O.data, (z) => A(z, _, {
                arg: N.originalArgs,
                baseQueryMeta: j,
                fulfilledTimeStamp: D,
                requestId: M
              }));
              O.data = q;
            } else
              O.data = _;
          else
            O.data = o[p.arg.endpointName].structuralSharing ?? !0 ? mo(ve(O.data) ? us(O.data) : O.data, _) : _;
          delete O.error, O.fulfilledTimeStamp = p.fulfilledTimeStamp;
        });
      }).addCase(t.rejected, (s, {
        meta: {
          condition: p,
          arg: _,
          requestId: O
        },
        error: A,
        payload: D
      }) => {
        St(s, _.queryCacheKey, (N) => {
          if (!p) {
            if (N.requestId !== O)
              return;
            N.status = "rejected", N.error = D ?? A;
          }
        });
      }).addMatcher(m, (s, p) => {
        const {
          queries: _
        } = f(p);
        for (const [O, A] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((A == null ? void 0 : A.status) === "fulfilled" || (A == null ? void 0 : A.status) === "rejected") && (s[O] = A);
      });
    }
  }), R = Ie({
    name: `${e}/mutations`,
    initialState: Qe,
    reducers: {
      removeMutationResult: {
        reducer(u, {
          payload: s
        }) {
          const p = ot(s);
          p in u && delete u[p];
        },
        prepare: Le()
      }
    },
    extraReducers(u) {
      u.addCase(n.pending, (s, {
        meta: p,
        meta: {
          requestId: _,
          arg: O,
          startedTimeStamp: A
        }
      }) => {
        O.track && (s[ot(p)] = {
          requestId: _,
          status: "pending",
          endpointName: O.endpointName,
          startedTimeStamp: A
        });
      }).addCase(n.fulfilled, (s, {
        payload: p,
        meta: _
      }) => {
        _.arg.track && In(s, _, (O) => {
          O.requestId === _.requestId && (O.status = "fulfilled", O.data = p, O.fulfilledTimeStamp = _.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (s, {
        payload: p,
        error: _,
        meta: O
      }) => {
        O.arg.track && In(s, O, (A) => {
          A.requestId === O.requestId && (A.status = "rejected", A.error = p ?? _);
        });
      }).addMatcher(m, (s, p) => {
        const {
          mutations: _
        } = f(p);
        for (const [O, A] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((A == null ? void 0 : A.status) === "fulfilled" || (A == null ? void 0 : A.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          O !== (A == null ? void 0 : A.requestId) && (s[O] = A);
      });
    }
  }), l = Ie({
    name: `${e}/invalidation`,
    initialState: Qe,
    reducers: {
      updateProvidedBy: {
        reducer(u, s) {
          var O, A;
          const {
            queryCacheKey: p,
            providedTags: _
          } = s.payload;
          for (const D of Object.values(u))
            for (const N of Object.values(D)) {
              const j = N.indexOf(p);
              j !== -1 && N.splice(j, 1);
            }
          for (const {
            type: D,
            id: N
          } of _) {
            const j = (O = u[D] ?? (u[D] = {}))[A = N || "__internal_without_id"] ?? (O[A] = []);
            j.includes(p) || j.push(p);
          }
        },
        prepare: Le()
      }
    },
    extraReducers(u) {
      u.addCase(w.actions.removeQueryResult, (s, {
        payload: {
          queryCacheKey: p
        }
      }) => {
        for (const _ of Object.values(s))
          for (const O of Object.values(_)) {
            const A = O.indexOf(p);
            A !== -1 && O.splice(A, 1);
          }
      }).addMatcher(m, (s, p) => {
        var O, A;
        const {
          provided: _
        } = f(p);
        for (const [D, N] of Object.entries(_))
          for (const [j, M] of Object.entries(N)) {
            const q = (O = s[D] ?? (s[D] = {}))[A = j || "__internal_without_id"] ?? (O[A] = []);
            for (const z of M)
              q.includes(z) || q.push(z);
          }
      }).addMatcher(we(Re(t), Pt(t)), (s, p) => {
        const _ = _o(p, "providesTags", o, b), {
          queryCacheKey: O
        } = p.meta.arg;
        l.caseReducers.updateProvidedBy(s, l.actions.updateProvidedBy({
          queryCacheKey: O,
          providedTags: _
        }));
      });
    }
  }), c = Ie({
    name: `${e}/subscriptions`,
    initialState: Qe,
    reducers: {
      updateSubscriptionOptions(u, s) {
      },
      unsubscribeQueryResult(u, s) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), d = Ie({
    name: `${e}/internalSubscriptions`,
    initialState: Qe,
    reducers: {
      subscriptionsUpdated: {
        reducer(u, s) {
          return bn(u, s.payload);
        },
        prepare: Le()
      }
    }
  }), v = Ie({
    name: `${e}/config`,
    initialState: {
      online: nu(),
      focused: ou(),
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
      u.addCase(Ar, (s) => {
        s.online = !0;
      }).addCase(go, (s) => {
        s.online = !1;
      }).addCase(Cr, (s) => {
        s.focused = !0;
      }).addCase(vo, (s) => {
        s.focused = !1;
      }).addMatcher(m, (s) => ({
        ...s
      }));
    }
  }), E = is({
    queries: w.reducer,
    mutations: R.reducer,
    provided: l.reducer,
    subscriptions: d.reducer,
    config: v.reducer
  }), S = (u, s) => E(g.match(s) ? void 0 : u, s), h = {
    ...v.actions,
    ...w.actions,
    ...c.actions,
    ...d.actions,
    ...R.actions,
    ...l.actions,
    resetApiState: g
  };
  return {
    reducer: S,
    actions: h
  };
}
var Ce = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Eo = {
  status: "uninitialized"
  /* uninitialized */
}, jn = /* @__PURE__ */ ut(Eo, () => {
}), xn = /* @__PURE__ */ ut(Eo, () => {
});
function hu({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: n
}) {
  const o = (R) => jn, i = (R) => xn;
  return {
    buildQuerySelector: b,
    buildMutationSelector: T,
    selectInvalidatedBy: g,
    selectCachedArgsForQuery: w
  };
  function f(R) {
    return {
      ...R,
      ...Zs(R.status)
    };
  }
  function m(R) {
    const l = R[t];
    if (process.env.NODE_ENV !== "production" && !l) {
      if (m.triggered)
        return l;
      m.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return l;
  }
  function b(R, l) {
    return (c) => {
      const d = e({
        queryArgs: c,
        endpointDefinition: l,
        endpointName: R
      });
      return n(c === Ce ? o : (S) => {
        var h, u;
        return ((u = (h = m(S)) == null ? void 0 : h.queries) == null ? void 0 : u[d]) ?? jn;
      }, f);
    };
  }
  function T() {
    return (R) => {
      let l;
      return typeof R == "object" ? l = ot(R) ?? Ce : l = R, n(l === Ce ? i : (v) => {
        var E, S;
        return ((S = (E = m(v)) == null ? void 0 : E.mutations) == null ? void 0 : S[l]) ?? xn;
      }, f);
    };
  }
  function g(R, l) {
    const c = R[t], d = /* @__PURE__ */ new Set();
    for (const v of l.map(lr)) {
      const E = c.provided[v.type];
      if (!E)
        continue;
      let S = (v.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        E[v.id]
      ) : (
        // no id: invalidate all queries that provide this type
        An(Object.values(E))
      )) ?? [];
      for (const h of S)
        d.add(h);
    }
    return An(Array.from(d.values()).map((v) => {
      const E = c.queries[v];
      return E ? [{
        queryCacheKey: v,
        endpointName: E.endpointName,
        originalArgs: E.originalArgs
      }] : [];
    }));
  }
  function w(R, l) {
    return Object.values(R[t].queries).filter(
      (c) => (c == null ? void 0 : c.endpointName) === l && c.status !== "uninitialized"
      /* uninitialized */
    ).map((c) => c.originalArgs);
  }
}
var je = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, $n = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const o = je == null ? void 0 : je.get(t);
  if (typeof o == "string")
    n = o;
  else {
    const i = JSON.stringify(t, (f, m) => _e(m) ? Object.keys(m).sort().reduce((b, T) => (b[T] = m[T], b), {}) : m);
    _e(t) && (je == null || je.set(t, i)), n = i;
  }
  return `${e}(${n})`;
};
function yu(...e) {
  return function(n) {
    const o = rt((g) => {
      var w;
      return (w = n.extractRehydrationInfo) == null ? void 0 : w.call(n, g, {
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
      serializeQueryArgs(g) {
        let w = $n;
        if ("serializeQueryArgs" in g.endpointDefinition) {
          const R = g.endpointDefinition.serializeQueryArgs;
          w = (l) => {
            const c = R(l);
            return typeof c == "string" ? c : $n({
              ...l,
              queryArgs: c
            });
          };
        } else
          n.serializeQueryArgs && (w = n.serializeQueryArgs);
        return w(g);
      },
      tagTypes: [...n.tagTypes || []]
    }, f = {
      endpointDefinitions: {},
      batch(g) {
        g();
      },
      apiUid: wr(),
      extractRehydrationInfo: o,
      hasRehydrationInfo: rt((g) => o(g) != null)
    }, m = {
      injectEndpoints: T,
      enhanceEndpoints({
        addTagTypes: g,
        endpoints: w
      }) {
        if (g)
          for (const R of g)
            i.tagTypes.includes(R) || i.tagTypes.push(R);
        if (w)
          for (const [R, l] of Object.entries(w))
            typeof l == "function" ? l(f.endpointDefinitions[R]) : Object.assign(f.endpointDefinitions[R] || {}, l);
        return m;
      }
    }, b = e.map((g) => g.init(m, i, f));
    function T(g) {
      const w = g.endpoints({
        query: (R) => ({
          ...R,
          type: "query"
          /* query */
        }),
        mutation: (R) => ({
          ...R,
          type: "mutation"
          /* mutation */
        })
      });
      for (const [R, l] of Object.entries(w)) {
        if (g.overrideExisting !== !0 && R in f.endpointDefinitions) {
          if (g.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? X(39) : `called \`injectEndpoints\` to override already-existing endpointName ${R} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${R} without specifying \`overrideExisting: true\``);
          continue;
        }
        f.endpointDefinitions[R] = l;
        for (const c of b)
          c.injectEndpoint(R, l);
      }
      return m;
    }
    return m.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function mu(e) {
  for (let t in e)
    return !1;
  return !0;
}
var vu = 2147483647 / 1e3 - 1, gu = ({
  reducerPath: e,
  api: t,
  context: n,
  internalState: o
}) => {
  const {
    removeQueryResult: i,
    unsubscribeQueryResult: f
  } = t.internalActions;
  function m(w) {
    const R = o.currentSubscriptions[w];
    return !!R && !mu(R);
  }
  const b = {}, T = (w, R, l) => {
    var c;
    if (f.match(w)) {
      const d = R.getState()[e], {
        queryCacheKey: v
      } = w.payload;
      g(v, (c = d.queries[v]) == null ? void 0 : c.endpointName, R, d.config);
    }
    if (t.util.resetApiState.match(w))
      for (const [d, v] of Object.entries(b))
        v && clearTimeout(v), delete b[d];
    if (n.hasRehydrationInfo(w)) {
      const d = R.getState()[e], {
        queries: v
      } = n.extractRehydrationInfo(w);
      for (const [E, S] of Object.entries(v))
        g(E, S == null ? void 0 : S.endpointName, R, d.config);
    }
  };
  function g(w, R, l, c) {
    const d = n.endpointDefinitions[R], v = (d == null ? void 0 : d.keepUnusedDataFor) ?? c.keepUnusedDataFor;
    if (v === 1 / 0)
      return;
    const E = Math.max(0, Math.min(v, vu));
    if (!m(w)) {
      const S = b[w];
      S && clearTimeout(S), b[w] = setTimeout(() => {
        m(w) || l.dispatch(i({
          queryCacheKey: w
        })), delete b[w];
      }, E * 1e3);
    }
  }
  return T;
}, bu = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: o,
  queryThunk: i,
  api: f,
  assertTagType: m,
  refetchQuery: b,
  internalState: T
}) => {
  const {
    removeQueryResult: g
  } = f.internalActions, w = we(Re(o), Pt(o)), R = we(Re(o, i), Fe(o, i));
  let l = [];
  const c = (E, S) => {
    w(E) ? v(_o(E, "invalidatesTags", n, m), S) : R(E) ? v([], S) : f.util.invalidateTags.match(E) && v(kr(E.payload, void 0, void 0, void 0, void 0, m), S);
  };
  function d(E) {
    var S, h;
    for (const u in E.queries)
      if (((S = E.queries[u]) == null ? void 0 : S.status) === "pending")
        return !0;
    for (const u in E.mutations)
      if (((h = E.mutations[u]) == null ? void 0 : h.status) === "pending")
        return !0;
    return !1;
  }
  function v(E, S) {
    const h = S.getState(), u = h[e];
    if (l.push(...E), u.config.invalidationBehavior === "delayed" && d(u))
      return;
    const s = l;
    if (l = [], s.length === 0)
      return;
    const p = f.util.selectInvalidatedBy(h, s);
    t.batch(() => {
      const _ = Array.from(p.values());
      for (const {
        queryCacheKey: O
      } of _) {
        const A = u.queries[O], D = T.currentSubscriptions[O] ?? {};
        A && ($e(D) === 0 ? S.dispatch(g({
          queryCacheKey: O
        })) : A.status !== "uninitialized" && S.dispatch(b(A, O)));
      }
    });
  }
  return c;
}, _u = ({
  reducerPath: e,
  queryThunk: t,
  api: n,
  refetchQuery: o,
  internalState: i
}) => {
  const f = {}, m = (l, c) => {
    (n.internalActions.updateSubscriptionOptions.match(l) || n.internalActions.unsubscribeQueryResult.match(l)) && T(l.payload, c), (t.pending.match(l) || t.rejected.match(l) && l.meta.condition) && T(l.meta.arg, c), (t.fulfilled.match(l) || t.rejected.match(l) && !l.meta.condition) && b(l.meta.arg, c), n.util.resetApiState.match(l) && w();
  };
  function b({
    queryCacheKey: l
  }, c) {
    const d = c.getState()[e], v = d.queries[l], E = i.currentSubscriptions[l];
    if (!v || v.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: S,
      skipPollingIfUnfocused: h
    } = R(E);
    if (!Number.isFinite(S))
      return;
    const u = f[l];
    u != null && u.timeout && (clearTimeout(u.timeout), u.timeout = void 0);
    const s = Date.now() + S;
    f[l] = {
      nextPollTimestamp: s,
      pollingInterval: S,
      timeout: setTimeout(() => {
        (d.config.focused || !h) && c.dispatch(o(v, l)), b({
          queryCacheKey: l
        }, c);
      }, S)
    };
  }
  function T({
    queryCacheKey: l
  }, c) {
    const v = c.getState()[e].queries[l], E = i.currentSubscriptions[l];
    if (!v || v.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: S
    } = R(E);
    if (!Number.isFinite(S)) {
      g(l);
      return;
    }
    const h = f[l], u = Date.now() + S;
    (!h || u < h.nextPollTimestamp) && b({
      queryCacheKey: l
    }, c);
  }
  function g(l) {
    const c = f[l];
    c != null && c.timeout && clearTimeout(c.timeout), delete f[l];
  }
  function w() {
    for (const l of Object.keys(f))
      g(l);
  }
  function R(l = {}) {
    let c = !1, d = Number.POSITIVE_INFINITY;
    for (let v in l)
      l[v].pollingInterval && (d = Math.min(l[v].pollingInterval, d), c = l[v].skipPollingIfUnfocused || c);
    return {
      lowestPollingInterval: d,
      skipPollingIfUnfocused: c
    };
  }
  return m;
}, Eu = ({
  reducerPath: e,
  context: t,
  api: n,
  refetchQuery: o,
  internalState: i
}) => {
  const {
    removeQueryResult: f
  } = n.internalActions, m = (T, g) => {
    Cr.match(T) && b(g, "refetchOnFocus"), Ar.match(T) && b(g, "refetchOnReconnect");
  };
  function b(T, g) {
    const w = T.getState()[e], R = w.queries, l = i.currentSubscriptions;
    t.batch(() => {
      for (const c of Object.keys(l)) {
        const d = R[c], v = l[c];
        if (!v || !d)
          continue;
        (Object.values(v).some((S) => S[g] === !0) || Object.values(v).every((S) => S[g] === void 0) && w.config[g]) && ($e(v) === 0 ? T.dispatch(f({
          queryCacheKey: c
        })) : d.status !== "uninitialized" && T.dispatch(o(d, c)));
      }
    });
  }
  return m;
}, Fn = new Error("Promise never resolved before cacheEntryRemoved."), Su = ({
  api: e,
  reducerPath: t,
  context: n,
  queryThunk: o,
  mutationThunk: i,
  internalState: f
}) => {
  const m = cr(o), b = cr(i), T = Re(o, i), g = {}, w = (c, d, v) => {
    const E = R(c);
    if (o.pending.match(c)) {
      const S = v[t].queries[E], h = d.getState()[t].queries[E];
      !S && h && l(c.meta.arg.endpointName, c.meta.arg.originalArgs, E, d, c.meta.requestId);
    } else if (i.pending.match(c))
      d.getState()[t].mutations[E] && l(c.meta.arg.endpointName, c.meta.arg.originalArgs, E, d, c.meta.requestId);
    else if (T(c)) {
      const S = g[E];
      S != null && S.valueResolved && (S.valueResolved({
        data: c.payload,
        meta: c.meta.baseQueryMeta
      }), delete S.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(c) || e.internalActions.removeMutationResult.match(c)) {
      const S = g[E];
      S && (delete g[E], S.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(c))
      for (const [S, h] of Object.entries(g))
        delete g[S], h.cacheEntryRemoved();
  };
  function R(c) {
    return m(c) ? c.meta.arg.queryCacheKey : b(c) ? c.meta.arg.fixedCacheKey ?? c.meta.requestId : e.internalActions.removeQueryResult.match(c) ? c.payload.queryCacheKey : e.internalActions.removeMutationResult.match(c) ? ot(c.payload) : "";
  }
  function l(c, d, v, E, S) {
    const h = n.endpointDefinitions[c], u = h == null ? void 0 : h.onCacheEntryAdded;
    if (!u)
      return;
    let s = {};
    const p = new Promise((j) => {
      s.cacheEntryRemoved = j;
    }), _ = Promise.race([new Promise((j) => {
      s.valueResolved = j;
    }), p.then(() => {
      throw Fn;
    })]);
    _.catch(() => {
    }), g[v] = s;
    const O = e.endpoints[c].select(h.type === "query" ? d : v), A = E.dispatch((j, M, q) => q), D = {
      ...E,
      getCacheEntry: () => O(E.getState()),
      requestId: S,
      extra: A,
      updateCachedData: h.type === "query" ? (j) => E.dispatch(e.util.updateQueryData(c, d, j)) : void 0,
      cacheDataLoaded: _,
      cacheEntryRemoved: p
    }, N = u(d, D);
    Promise.resolve(N).catch((j) => {
      if (j !== Fn)
        throw j;
    });
  }
  return w;
}, wu = ({
  api: e,
  context: t,
  queryThunk: n,
  mutationThunk: o
}) => {
  const i = Rr(n, o), f = Fe(n, o), m = Re(n, o), b = {};
  return (g, w) => {
    var R, l;
    if (i(g)) {
      const {
        requestId: c,
        arg: {
          endpointName: d,
          originalArgs: v
        }
      } = g.meta, E = t.endpointDefinitions[d], S = E == null ? void 0 : E.onQueryStarted;
      if (S) {
        const h = {}, u = new Promise((O, A) => {
          h.resolve = O, h.reject = A;
        });
        u.catch(() => {
        }), b[c] = h;
        const s = e.endpoints[d].select(E.type === "query" ? v : c), p = w.dispatch((O, A, D) => D), _ = {
          ...w,
          getCacheEntry: () => s(w.getState()),
          requestId: c,
          extra: p,
          updateCachedData: E.type === "query" ? (O) => w.dispatch(e.util.updateQueryData(d, v, O)) : void 0,
          queryFulfilled: u
        };
        S(v, _);
      }
    } else if (m(g)) {
      const {
        requestId: c,
        baseQueryMeta: d
      } = g.meta;
      (R = b[c]) == null || R.resolve({
        data: g.payload,
        meta: d
      }), delete b[c];
    } else if (f(g)) {
      const {
        requestId: c,
        rejectedWithValue: d,
        baseQueryMeta: v
      } = g.meta;
      (l = b[c]) == null || l.reject({
        error: g.payload ?? g.error,
        isUnhandledError: !d,
        meta: v
      }), delete b[c];
    }
  };
}, Ru = ({
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
}, Ou = ({
  api: e,
  queryThunk: t,
  internalState: n
}) => {
  const o = `${e.reducerPath}/subscriptions`;
  let i = null, f = null;
  const {
    updateSubscriptionOptions: m,
    unsubscribeQueryResult: b
  } = e.internalActions, T = (c, d) => {
    var E, S, h;
    if (m.match(d)) {
      const {
        queryCacheKey: u,
        requestId: s,
        options: p
      } = d.payload;
      return (E = c == null ? void 0 : c[u]) != null && E[s] && (c[u][s] = p), !0;
    }
    if (b.match(d)) {
      const {
        queryCacheKey: u,
        requestId: s
      } = d.payload;
      return c[u] && delete c[u][s], !0;
    }
    if (e.internalActions.removeQueryResult.match(d))
      return delete c[d.payload.queryCacheKey], !0;
    if (t.pending.match(d)) {
      const {
        meta: {
          arg: u,
          requestId: s
        }
      } = d, p = c[S = u.queryCacheKey] ?? (c[S] = {});
      return p[`${s}_running`] = {}, u.subscribe && (p[s] = u.subscriptionOptions ?? p[s] ?? {}), !0;
    }
    let v = !1;
    if (t.fulfilled.match(d) || t.rejected.match(d)) {
      const u = c[d.meta.arg.queryCacheKey] || {}, s = `${d.meta.requestId}_running`;
      v || (v = !!u[s]), delete u[s];
    }
    if (t.rejected.match(d)) {
      const {
        meta: {
          condition: u,
          arg: s,
          requestId: p
        }
      } = d;
      if (u && s.subscribe) {
        const _ = c[h = s.queryCacheKey] ?? (c[h] = {});
        _[p] = s.subscriptionOptions ?? _[p] ?? {}, v = !0;
      }
    }
    return v;
  }, g = () => n.currentSubscriptions, l = {
    getSubscriptions: g,
    getSubscriptionCount: (c) => {
      const v = g()[c] ?? {};
      return $e(v);
    },
    isRequestSubscribed: (c, d) => {
      var E;
      const v = g();
      return !!((E = v == null ? void 0 : v[c]) != null && E[d]);
    }
  };
  return (c, d) => {
    if (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(c))
      return i = n.currentSubscriptions = {}, f = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(c))
      return [!1, l];
    const v = T(n.currentSubscriptions, c);
    let E = !0;
    if (v) {
      f || (f = setTimeout(() => {
        const u = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, s] = lo(i, () => u);
        d.next(e.internalActions.subscriptionsUpdated(s)), i = u, f = null;
      }, 500));
      const S = typeof c.type == "string" && !!c.type.startsWith(o), h = t.rejected.match(c) && c.meta.condition && !!c.meta.arg.subscribe;
      E = !S && !h;
    }
    return [E, !1];
  };
};
function Cu(e) {
  const {
    reducerPath: t,
    queryThunk: n,
    api: o,
    context: i
  } = e, {
    apiUid: f
  } = i, m = {
    invalidateTags: pe(`${t}/invalidateTags`)
  }, b = (R) => R.type.startsWith(`${t}/`), T = [Ru, gu, bu, _u, Su, wu];
  return {
    middleware: (R) => {
      let l = !1;
      const d = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: w,
        isThisApiSliceAction: b
      }, v = T.map((h) => h(d)), E = Ou(d), S = Eu(d);
      return (h) => (u) => {
        if (!ro(u))
          return h(u);
        l || (l = !0, R.dispatch(o.internalActions.middlewareRegistered(f)));
        const s = {
          ...R,
          next: h
        }, p = R.getState(), [_, O] = E(u, s, p);
        let A;
        if (_ ? A = h(u) : A = O, R.getState()[t] && (S(u, s, p), b(u) || i.hasRehydrationInfo(u)))
          for (let D of v)
            D(u, s, p);
        return A;
      };
    },
    actions: m
  };
  function w(R, l, c = {}) {
    return n({
      type: "query",
      endpointName: R.endpointName,
      originalArgs: R.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: l,
      ...c
    });
  }
}
function Se(e, ...t) {
  return Object.assign(e, ...t);
}
var Vn = /* @__PURE__ */ Symbol(), Au = ({
  createSelector: e = Sr
} = {}) => ({
  name: Vn,
  init(t, {
    baseQuery: n,
    tagTypes: o,
    reducerPath: i,
    serializeQueryArgs: f,
    keepUnusedDataFor: m,
    refetchOnMountOrArgChange: b,
    refetchOnFocus: T,
    refetchOnReconnect: g,
    invalidationBehavior: w
  }, R) {
    ms();
    const l = (G) => (typeof process < "u" && process.env.NODE_ENV === "development" && (o.includes(G.type) || console.error(`Tag type '${G.type}' was used, but not specified in \`tagTypes\`!`)), G);
    Object.assign(t, {
      reducerPath: i,
      endpoints: {},
      internalActions: {
        onOnline: Ar,
        onOffline: go,
        onFocus: Cr,
        onFocusLost: vo
      },
      util: {}
    });
    const {
      queryThunk: c,
      mutationThunk: d,
      patchQueryData: v,
      updateQueryData: E,
      upsertQueryData: S,
      prefetch: h,
      buildMatchThunkActions: u
    } = du({
      baseQuery: n,
      reducerPath: i,
      context: R,
      api: t,
      serializeQueryArgs: f,
      assertTagType: l
    }), {
      reducer: s,
      actions: p
    } = pu({
      context: R,
      queryThunk: c,
      mutationThunk: d,
      reducerPath: i,
      assertTagType: l,
      config: {
        refetchOnFocus: T,
        refetchOnReconnect: g,
        refetchOnMountOrArgChange: b,
        keepUnusedDataFor: m,
        reducerPath: i,
        invalidationBehavior: w
      }
    });
    Se(t.util, {
      patchQueryData: v,
      updateQueryData: E,
      upsertQueryData: S,
      prefetch: h,
      resetApiState: p.resetApiState
    }), Se(t.internalActions, p);
    const {
      middleware: _,
      actions: O
    } = Cu({
      reducerPath: i,
      context: R,
      queryThunk: c,
      mutationThunk: d,
      api: t,
      assertTagType: l
    });
    Se(t.util, O), Se(t, {
      reducer: s,
      middleware: _
    });
    const {
      buildQuerySelector: A,
      buildMutationSelector: D,
      selectInvalidatedBy: N,
      selectCachedArgsForQuery: j
    } = hu({
      serializeQueryArgs: f,
      reducerPath: i,
      createSelector: e
    });
    Se(t.util, {
      selectInvalidatedBy: N,
      selectCachedArgsForQuery: j
    });
    const {
      buildInitiateQuery: M,
      buildInitiateMutation: q,
      getRunningMutationThunk: z,
      getRunningMutationsThunk: V,
      getRunningQueriesThunk: Q,
      getRunningQueryThunk: x
    } = fu({
      queryThunk: c,
      mutationThunk: d,
      api: t,
      serializeQueryArgs: f,
      context: R
    });
    return Se(t.util, {
      getRunningMutationThunk: z,
      getRunningMutationsThunk: V,
      getRunningQueryThunk: x,
      getRunningQueriesThunk: Q
    }), {
      name: Vn,
      injectEndpoint(G, se) {
        var P;
        const y = t;
        (P = y.endpoints)[G] ?? (P[G] = {}), bo(se) ? Se(y.endpoints[G], {
          name: G,
          select: A(G, se),
          initiate: M(G, se)
        }, u(c, G)) : au(se) && Se(y.endpoints[G], {
          name: G,
          select: D(),
          initiate: q(G)
        }, u(d, G));
      }
    };
  }
});
function ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dr = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function Tu() {
  if (qn)
    return Y;
  qn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), R = Symbol.iterator;
  function l(y) {
    return y === null || typeof y != "object" ? null : (y = R && y[R] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var c = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, d = Object.assign, v = {};
  function E(y, P, $) {
    this.props = y, this.context = P, this.refs = v, this.updater = $ || c;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(y, P) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, P, "setState");
  }, E.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function S() {
  }
  S.prototype = E.prototype;
  function h(y, P, $) {
    this.props = y, this.context = P, this.refs = v, this.updater = $ || c;
  }
  var u = h.prototype = new S();
  u.constructor = h, d(u, E.prototype), u.isPureReactComponent = !0;
  var s = Array.isArray, p = Object.prototype.hasOwnProperty, _ = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(y, P, $) {
    var B, U = {}, ee = null, ue = null;
    if (P != null)
      for (B in P.ref !== void 0 && (ue = P.ref), P.key !== void 0 && (ee = "" + P.key), P)
        p.call(P, B) && !O.hasOwnProperty(B) && (U[B] = P[B]);
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
    return { $$typeof: e, type: y, key: ee, ref: ue, props: U, _owner: _.current };
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
    else if (re = l(y), typeof re == "function")
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
  function Q(y) {
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
  var x = { current: null }, G = { transition: null }, se = { ReactCurrentDispatcher: x, ReactCurrentBatchConfig: G, ReactCurrentOwner: _ };
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
  } }, Y.Component = E, Y.Fragment = n, Y.Profiler = i, Y.PureComponent = h, Y.StrictMode = o, Y.Suspense = T, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, Y.cloneElement = function(y, P, $) {
    if (y == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var B = d({}, y.props), U = y.key, ee = y.ref, ue = y._owner;
    if (P != null) {
      if (P.ref !== void 0 && (ee = P.ref, ue = _.current), P.key !== void 0 && (U = "" + P.key), y.type && y.type.defaultProps)
        var te = y.type.defaultProps;
      for (re in P)
        p.call(P, re) && !O.hasOwnProperty(re) && (B[re] = P[re] === void 0 && te !== void 0 ? te[re] : P[re]);
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
  }, Y.createElement = A, Y.createFactory = function(y) {
    var P = A.bind(null, y);
    return P.type = y, P;
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(y) {
    return { $$typeof: b, render: y };
  }, Y.isValidElement = N, Y.lazy = function(y) {
    return { $$typeof: w, _payload: { _status: -1, _result: y }, _init: Q };
  }, Y.memo = function(y, P) {
    return { $$typeof: g, type: y, compare: P === void 0 ? null : P };
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
var zn;
function Nu() {
  return zn || (zn = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.2.0", o = Symbol.for("react.element"), i = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), E = Symbol.iterator, S = "@@iterator";
      function h(r) {
        if (r === null || typeof r != "object")
          return null;
        var a = E && r[E] || r[S];
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
      }, p = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, _ = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, O = {}, A = null;
      function D(r) {
        A = r;
      }
      O.setExtraStackFrame = function(r) {
        A = r;
      }, O.getCurrentStack = null, O.getStackAddendum = function() {
        var r = "";
        A && (r += A);
        var a = O.getCurrentStack;
        return a && (r += a() || ""), r;
      };
      var N = !1, j = !1, M = !1, q = !1, z = !1, V = {
        ReactCurrentDispatcher: u,
        ReactCurrentBatchConfig: s,
        ReactCurrentOwner: _
      };
      V.ReactDebugCurrentFrame = O, V.ReactCurrentActQueue = p;
      function Q(r) {
        {
          for (var a = arguments.length, C = new Array(a > 1 ? a - 1 : 0), k = 1; k < a; k++)
            C[k - 1] = arguments[k];
          G("warn", r, C);
        }
      }
      function x(r) {
        {
          for (var a = arguments.length, C = new Array(a > 1 ? a - 1 : 0), k = 1; k < a; k++)
            C[k - 1] = arguments[k];
          G("error", r, C);
        }
      }
      function G(r, a, C) {
        {
          var k = V.ReactDebugCurrentFrame, I = k.getStackAddendum();
          I !== "" && (a += "%s", C = C.concat([I]));
          var L = C.map(function(F) {
            return String(F);
          });
          L.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, L);
        }
      }
      var se = {};
      function y(r, a) {
        {
          var C = r.constructor, k = C && (C.displayName || C.name) || "ReactClass", I = k + "." + a;
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
        enqueueForceUpdate: function(r, a, C) {
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
        enqueueReplaceState: function(r, a, C, k) {
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
        enqueueSetState: function(r, a, C, k) {
          y(r, "setState");
        }
      }, $ = Object.assign, B = {};
      Object.freeze(B);
      function U(r, a, C) {
        this.props = r, this.context = a, this.refs = B, this.updater = C || P;
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
              Q("%s(...) is deprecated in plain JavaScript React classes. %s", a[0], a[1]);
            }
          });
        };
        for (var te in ee)
          ee.hasOwnProperty(te) && ue(te, ee[te]);
      }
      function re() {
      }
      re.prototype = U.prototype;
      function fe(r, a, C) {
        this.props = r, this.context = a, this.refs = B, this.updater = C || P;
      }
      var Mt = fe.prototype = new re();
      Mt.constructor = fe, $(Mt, U.prototype), Mt.isPureReactComponent = !0;
      function Ao() {
        var r = {
          current: null
        };
        return Object.seal(r), r;
      }
      var ko = Array.isArray;
      function ct(r) {
        return ko(r);
      }
      function To(r) {
        {
          var a = typeof Symbol == "function" && Symbol.toStringTag, C = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
          return C;
        }
      }
      function No(r) {
        try {
          return Nr(r), !1;
        } catch {
          return !0;
        }
      }
      function Nr(r) {
        return "" + r;
      }
      function lt(r) {
        if (No(r))
          return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", To(r)), Nr(r);
      }
      function Do(r, a, C) {
        var k = r.displayName;
        if (k)
          return k;
        var I = a.displayName || a.name || "";
        return I !== "" ? C + "(" + I + ")" : C;
      }
      function Dr(r) {
        return r.displayName || "Context";
      }
      function Ee(r) {
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
          case b:
            return "Profiler";
          case m:
            return "StrictMode";
          case R:
            return "Suspense";
          case l:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case g:
              var a = r;
              return Dr(a) + ".Consumer";
            case T:
              var C = r;
              return Dr(C._context) + ".Provider";
            case w:
              return Do(r, r.render, "ForwardRef");
            case c:
              var k = r.displayName || null;
              return k !== null ? k : Ee(r.type) || "Memo";
            case d: {
              var I = r, L = I._payload, F = I._init;
              try {
                return Ee(F(L));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ve = Object.prototype.hasOwnProperty, Pr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Mr, Ir, It;
      It = {};
      function jr(r) {
        if (Ve.call(r, "ref")) {
          var a = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function xr(r) {
        if (Ve.call(r, "key")) {
          var a = Object.getOwnPropertyDescriptor(r, "key").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function Po(r, a) {
        var C = function() {
          Mr || (Mr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        C.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: C,
          configurable: !0
        });
      }
      function Mo(r, a) {
        var C = function() {
          Ir || (Ir = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        C.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: C,
          configurable: !0
        });
      }
      function Io(r) {
        if (typeof r.ref == "string" && _.current && r.__self && _.current.stateNode !== r.__self) {
          var a = Ee(_.current.type);
          It[a] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', a, r.ref), It[a] = !0);
        }
      }
      var jt = function(r, a, C, k, I, L, F) {
        var W = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: r,
          key: a,
          ref: C,
          props: F,
          // Record the component responsible for creating this element.
          _owner: L
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
      function jo(r, a, C) {
        var k, I = {}, L = null, F = null, W = null, J = null;
        if (a != null) {
          jr(a) && (F = a.ref, Io(a)), xr(a) && (lt(a.key), L = "" + a.key), W = a.__self === void 0 ? null : a.__self, J = a.__source === void 0 ? null : a.__source;
          for (k in a)
            Ve.call(a, k) && !Pr.hasOwnProperty(k) && (I[k] = a[k]);
        }
        var Z = arguments.length - 2;
        if (Z === 1)
          I.children = C;
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
        if (L || F) {
          var ae = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          L && Po(I, ae), F && Mo(I, ae);
        }
        return jt(r, L, F, W, J, _.current, I);
      }
      function xo(r, a) {
        var C = jt(r.type, a, r.ref, r._self, r._source, r._owner, r.props);
        return C;
      }
      function $o(r, a, C) {
        if (r == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
        var k, I = $({}, r.props), L = r.key, F = r.ref, W = r._self, J = r._source, Z = r._owner;
        if (a != null) {
          jr(a) && (F = a.ref, Z = _.current), xr(a) && (lt(a.key), L = "" + a.key);
          var ne;
          r.type && r.type.defaultProps && (ne = r.type.defaultProps);
          for (k in a)
            Ve.call(a, k) && !Pr.hasOwnProperty(k) && (a[k] === void 0 && ne !== void 0 ? I[k] = ne[k] : I[k] = a[k]);
        }
        var oe = arguments.length - 2;
        if (oe === 1)
          I.children = C;
        else if (oe > 1) {
          for (var ie = Array(oe), ae = 0; ae < oe; ae++)
            ie[ae] = arguments[ae + 2];
          I.children = ie;
        }
        return jt(r.type, L, F, W, J, Z, I);
      }
      function De(r) {
        return typeof r == "object" && r !== null && r.$$typeof === o;
      }
      var $r = ".", Fo = ":";
      function Vo(r) {
        var a = /[=:]/g, C = {
          "=": "=0",
          ":": "=2"
        }, k = r.replace(a, function(I) {
          return C[I];
        });
        return "$" + k;
      }
      var Fr = !1, qo = /\/+/g;
      function Vr(r) {
        return r.replace(qo, "$&/");
      }
      function xt(r, a) {
        return typeof r == "object" && r !== null && r.key != null ? (lt(r.key), Vo("" + r.key)) : a.toString(36);
      }
      function ft(r, a, C, k, I) {
        var L = typeof r;
        (L === "undefined" || L === "boolean") && (r = null);
        var F = !1;
        if (r === null)
          F = !0;
        else
          switch (L) {
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
          var W = r, J = I(W), Z = k === "" ? $r + xt(W, 0) : k;
          if (ct(J)) {
            var ne = "";
            Z != null && (ne = Vr(Z) + "/"), ft(J, a, ne, "", function(Mi) {
              return Mi;
            });
          } else
            J != null && (De(J) && (J.key && (!W || W.key !== J.key) && lt(J.key), J = xo(
              J,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              C + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (J.key && (!W || W.key !== J.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Vr("" + J.key) + "/"
              ) : "") + Z
            )), a.push(J));
          return 1;
        }
        var oe, ie, ae = 0, le = k === "" ? $r : k + Fo;
        if (ct(r))
          for (var bt = 0; bt < r.length; bt++)
            oe = r[bt], ie = le + xt(oe, bt), ae += ft(oe, a, C, ie, I);
        else {
          var Wt = h(r);
          if (typeof Wt == "function") {
            var ln = r;
            Wt === ln.entries && (Fr || Q("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Fr = !0);
            for (var Di = Wt.call(ln), fn, Pi = 0; !(fn = Di.next()).done; )
              oe = fn.value, ie = le + xt(oe, Pi++), ae += ft(oe, a, C, ie, I);
          } else if (L === "object") {
            var dn = String(r);
            throw new Error("Objects are not valid as a React child (found: " + (dn === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : dn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ae;
      }
      function dt(r, a, C) {
        if (r == null)
          return r;
        var k = [], I = 0;
        return ft(r, k, "", "", function(L) {
          return a.call(C, L, I++);
        }), k;
      }
      function zo(r) {
        var a = 0;
        return dt(r, function() {
          a++;
        }), a;
      }
      function Lo(r, a, C) {
        dt(r, function() {
          a.apply(this, arguments);
        }, C);
      }
      function Qo(r) {
        return dt(r, function(a) {
          return a;
        }) || [];
      }
      function Uo(r) {
        if (!De(r))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return r;
      }
      function Wo(r) {
        var a = {
          $$typeof: g,
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
        var C = !1, k = !1, I = !1;
        {
          var L = {
            $$typeof: g,
            _context: a
          };
          Object.defineProperties(L, {
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
                return C || (C = !0, x("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), a.Consumer;
              }
            },
            displayName: {
              get: function() {
                return a.displayName;
              },
              set: function(F) {
                I || (Q("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", F), I = !0);
              }
            }
          }), a.Consumer = L;
        }
        return a._currentRenderer = null, a._currentRenderer2 = null, a;
      }
      var qe = -1, $t = 0, qr = 1, Bo = 2;
      function Ko(r) {
        if (r._status === qe) {
          var a = r._result, C = a();
          if (C.then(function(L) {
            if (r._status === $t || r._status === qe) {
              var F = r;
              F._status = qr, F._result = L;
            }
          }, function(L) {
            if (r._status === $t || r._status === qe) {
              var F = r;
              F._status = Bo, F._result = L;
            }
          }), r._status === qe) {
            var k = r;
            k._status = $t, k._result = C;
          }
        }
        if (r._status === qr) {
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
      function Ho(r) {
        var a = {
          // We use these fields to store the result.
          _status: qe,
          _result: r
        }, C = {
          $$typeof: d,
          _payload: a,
          _init: Ko
        };
        {
          var k, I;
          Object.defineProperties(C, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return k;
              },
              set: function(L) {
                x("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), k = L, Object.defineProperty(C, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return I;
              },
              set: function(L) {
                x("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), I = L, Object.defineProperty(C, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return C;
      }
      function Yo(r) {
        r != null && r.$$typeof === c ? x("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof r != "function" ? x("forwardRef requires a render function but was given %s.", r === null ? "null" : typeof r) : r.length !== 0 && r.length !== 2 && x("forwardRef render functions accept exactly two parameters: props and ref. %s", r.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), r != null && (r.defaultProps != null || r.propTypes != null) && x("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var a = {
          $$typeof: w,
          render: r
        };
        {
          var C;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return C;
            },
            set: function(k) {
              C = k, !r.name && !r.displayName && (r.displayName = k);
            }
          });
        }
        return a;
      }
      var zr;
      zr = Symbol.for("react.module.reference");
      function Lr(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === f || r === b || z || r === m || r === R || r === l || q || r === v || N || j || M || typeof r == "object" && r !== null && (r.$$typeof === d || r.$$typeof === c || r.$$typeof === T || r.$$typeof === g || r.$$typeof === w || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        r.$$typeof === zr || r.getModuleId !== void 0));
      }
      function Go(r, a) {
        Lr(r) || x("memo: The first argument must be a component. Instead received: %s", r === null ? "null" : typeof r);
        var C = {
          $$typeof: c,
          type: r,
          compare: a === void 0 ? null : a
        };
        {
          var k;
          Object.defineProperty(C, "displayName", {
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
        return C;
      }
      function de() {
        var r = u.current;
        return r === null && x(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), r;
      }
      function Jo(r) {
        var a = de();
        if (r._context !== void 0) {
          var C = r._context;
          C.Consumer === r ? x("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : C.Provider === r && x("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return a.useContext(r);
      }
      function Zo(r) {
        var a = de();
        return a.useState(r);
      }
      function Xo(r, a, C) {
        var k = de();
        return k.useReducer(r, a, C);
      }
      function ei(r) {
        var a = de();
        return a.useRef(r);
      }
      function ti(r, a) {
        var C = de();
        return C.useEffect(r, a);
      }
      function ri(r, a) {
        var C = de();
        return C.useInsertionEffect(r, a);
      }
      function ni(r, a) {
        var C = de();
        return C.useLayoutEffect(r, a);
      }
      function oi(r, a) {
        var C = de();
        return C.useCallback(r, a);
      }
      function ii(r, a) {
        var C = de();
        return C.useMemo(r, a);
      }
      function si(r, a, C) {
        var k = de();
        return k.useImperativeHandle(r, a, C);
      }
      function ui(r, a) {
        {
          var C = de();
          return C.useDebugValue(r, a);
        }
      }
      function ai() {
        var r = de();
        return r.useTransition();
      }
      function ci(r) {
        var a = de();
        return a.useDeferredValue(r);
      }
      function li() {
        var r = de();
        return r.useId();
      }
      function fi(r, a, C) {
        var k = de();
        return k.useSyncExternalStore(r, a, C);
      }
      var ze = 0, Qr, Ur, Wr, Br, Kr, Hr, Yr;
      function Gr() {
      }
      Gr.__reactDisabledLog = !0;
      function di() {
        {
          if (ze === 0) {
            Qr = console.log, Ur = console.info, Wr = console.warn, Br = console.error, Kr = console.group, Hr = console.groupCollapsed, Yr = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: Gr,
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
      function pi() {
        {
          if (ze--, ze === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: $({}, r, {
                value: Qr
              }),
              info: $({}, r, {
                value: Ur
              }),
              warn: $({}, r, {
                value: Wr
              }),
              error: $({}, r, {
                value: Br
              }),
              group: $({}, r, {
                value: Kr
              }),
              groupCollapsed: $({}, r, {
                value: Hr
              }),
              groupEnd: $({}, r, {
                value: Yr
              })
            });
          }
          ze < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ft = V.ReactCurrentDispatcher, Vt;
      function pt(r, a, C) {
        {
          if (Vt === void 0)
            try {
              throw Error();
            } catch (I) {
              var k = I.stack.trim().match(/\n( *(at )?)/);
              Vt = k && k[1] || "";
            }
          return `
` + Vt + r;
        }
      }
      var qt = !1, ht;
      {
        var hi = typeof WeakMap == "function" ? WeakMap : Map;
        ht = new hi();
      }
      function Jr(r, a) {
        if (!r || qt)
          return "";
        {
          var C = ht.get(r);
          if (C !== void 0)
            return C;
        }
        var k;
        qt = !0;
        var I = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var L;
        L = Ft.current, Ft.current = null, di();
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
          qt = !1, Ft.current = L, pi(), Error.prepareStackTrace = I;
        }
        var ie = r ? r.displayName || r.name : "", ae = ie ? pt(ie) : "";
        return typeof r == "function" && ht.set(r, ae), ae;
      }
      function yi(r, a, C) {
        return Jr(r, !1);
      }
      function mi(r) {
        var a = r.prototype;
        return !!(a && a.isReactComponent);
      }
      function yt(r, a, C) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Jr(r, mi(r));
        if (typeof r == "string")
          return pt(r);
        switch (r) {
          case R:
            return pt("Suspense");
          case l:
            return pt("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case w:
              return yi(r.render);
            case c:
              return yt(r.type, a, C);
            case d: {
              var k = r, I = k._payload, L = k._init;
              try {
                return yt(L(I), a, C);
              } catch {
              }
            }
          }
        return "";
      }
      var Zr = {}, Xr = V.ReactDebugCurrentFrame;
      function mt(r) {
        if (r) {
          var a = r._owner, C = yt(r.type, r._source, a ? a.type : null);
          Xr.setExtraStackFrame(C);
        } else
          Xr.setExtraStackFrame(null);
      }
      function vi(r, a, C, k, I) {
        {
          var L = Function.call.bind(Ve);
          for (var F in r)
            if (L(r, F)) {
              var W = void 0;
              try {
                if (typeof r[F] != "function") {
                  var J = Error((k || "React class") + ": " + C + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw J.name = "Invariant Violation", J;
                }
                W = r[F](a, F, k, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Z) {
                W = Z;
              }
              W && !(W instanceof Error) && (mt(I), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", C, F, typeof W), mt(null)), W instanceof Error && !(W.message in Zr) && (Zr[W.message] = !0, mt(I), x("Failed %s type: %s", C, W.message), mt(null));
            }
        }
      }
      function Pe(r) {
        if (r) {
          var a = r._owner, C = yt(r.type, r._source, a ? a.type : null);
          D(C);
        } else
          D(null);
      }
      var zt;
      zt = !1;
      function en() {
        if (_.current) {
          var r = Ee(_.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
      function gi(r) {
        if (r !== void 0) {
          var a = r.fileName.replace(/^.*[\\\/]/, ""), C = r.lineNumber;
          return `

Check your code at ` + a + ":" + C + ".";
        }
        return "";
      }
      function bi(r) {
        return r != null ? gi(r.__source) : "";
      }
      var tn = {};
      function _i(r) {
        var a = en();
        if (!a) {
          var C = typeof r == "string" ? r : r.displayName || r.name;
          C && (a = `

Check the top-level render call using <` + C + ">.");
        }
        return a;
      }
      function rn(r, a) {
        if (!(!r._store || r._store.validated || r.key != null)) {
          r._store.validated = !0;
          var C = _i(a);
          if (!tn[C]) {
            tn[C] = !0;
            var k = "";
            r && r._owner && r._owner !== _.current && (k = " It was passed a child from " + Ee(r._owner.type) + "."), Pe(r), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, k), Pe(null);
          }
        }
      }
      function nn(r, a) {
        if (typeof r == "object") {
          if (ct(r))
            for (var C = 0; C < r.length; C++) {
              var k = r[C];
              De(k) && rn(k, a);
            }
          else if (De(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var I = h(r);
            if (typeof I == "function" && I !== r.entries)
              for (var L = I.call(r), F; !(F = L.next()).done; )
                De(F.value) && rn(F.value, a);
          }
        }
      }
      function on(r) {
        {
          var a = r.type;
          if (a == null || typeof a == "string")
            return;
          var C;
          if (typeof a == "function")
            C = a.propTypes;
          else if (typeof a == "object" && (a.$$typeof === w || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          a.$$typeof === c))
            C = a.propTypes;
          else
            return;
          if (C) {
            var k = Ee(a);
            vi(C, r.props, "prop", k, r);
          } else if (a.PropTypes !== void 0 && !zt) {
            zt = !0;
            var I = Ee(a);
            x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
          }
          typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ei(r) {
        {
          for (var a = Object.keys(r.props), C = 0; C < a.length; C++) {
            var k = a[C];
            if (k !== "children" && k !== "key") {
              Pe(r), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Pe(null);
              break;
            }
          }
          r.ref !== null && (Pe(r), x("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
        }
      }
      function sn(r, a, C) {
        var k = Lr(r);
        if (!k) {
          var I = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = bi(a);
          L ? I += L : I += en();
          var F;
          r === null ? F = "null" : ct(r) ? F = "array" : r !== void 0 && r.$$typeof === o ? (F = "<" + (Ee(r.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : F = typeof r, x("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, I);
        }
        var W = jo.apply(this, arguments);
        if (W == null)
          return W;
        if (k)
          for (var J = 2; J < arguments.length; J++)
            nn(arguments[J], r);
        return r === f ? Ei(W) : on(W), W;
      }
      var un = !1;
      function Si(r) {
        var a = sn.bind(null, r);
        return a.type = r, un || (un = !0, Q("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(a, "type", {
          enumerable: !1,
          get: function() {
            return Q("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: r
            }), r;
          }
        }), a;
      }
      function wi(r, a, C) {
        for (var k = $o.apply(this, arguments), I = 2; I < arguments.length; I++)
          nn(arguments[I], k.type);
        return on(k), k;
      }
      function Ri(r, a) {
        var C = s.transition;
        s.transition = {};
        var k = s.transition;
        s.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          r();
        } finally {
          if (s.transition = C, C === null && k._updatedFibers) {
            var I = k._updatedFibers.size;
            I > 10 && Q("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), k._updatedFibers.clear();
          }
        }
      }
      var an = !1, vt = null;
      function Oi(r) {
        if (vt === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7), C = e && e[a];
            vt = C.call(e, "timers").setImmediate;
          } catch {
            vt = function(I) {
              an === !1 && (an = !0, typeof MessageChannel > "u" && x("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var L = new MessageChannel();
              L.port1.onmessage = I, L.port2.postMessage(void 0);
            };
          }
        return vt(r);
      }
      var Me = 0, cn = !1;
      function Ci(r) {
        {
          var a = Me;
          Me++, p.current === null && (p.current = []);
          var C = p.isBatchingLegacy, k;
          try {
            if (p.isBatchingLegacy = !0, k = r(), !C && p.didScheduleLegacyUpdate) {
              var I = p.current;
              I !== null && (p.didScheduleLegacyUpdate = !1, Ut(I));
            }
          } catch (ie) {
            throw gt(a), ie;
          } finally {
            p.isBatchingLegacy = C;
          }
          if (k !== null && typeof k == "object" && typeof k.then == "function") {
            var L = k, F = !1, W = {
              then: function(ie, ae) {
                F = !0, L.then(function(le) {
                  gt(a), Me === 0 ? Lt(le, ie, ae) : ie(le);
                }, function(le) {
                  gt(a), ae(le);
                });
              }
            };
            return !cn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              F || (cn = !0, x("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), W;
          } else {
            var J = k;
            if (gt(a), Me === 0) {
              var Z = p.current;
              Z !== null && (Ut(Z), p.current = null);
              var ne = {
                then: function(ie, ae) {
                  p.current === null ? (p.current = [], Lt(J, ie, ae)) : ie(J);
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
      function Lt(r, a, C) {
        {
          var k = p.current;
          if (k !== null)
            try {
              Ut(k), Oi(function() {
                k.length === 0 ? (p.current = null, a(r)) : Lt(r, a, C);
              });
            } catch (I) {
              C(I);
            }
          else
            a(r);
        }
      }
      var Qt = !1;
      function Ut(r) {
        if (!Qt) {
          Qt = !0;
          var a = 0;
          try {
            for (; a < r.length; a++) {
              var C = r[a];
              do
                C = C(!0);
              while (C !== null);
            }
            r.length = 0;
          } catch (k) {
            throw r = r.slice(a + 1), k;
          } finally {
            Qt = !1;
          }
        }
      }
      var Ai = sn, ki = wi, Ti = Si, Ni = {
        map: dt,
        forEach: Lo,
        count: zo,
        toArray: Qo,
        only: Uo
      };
      t.Children = Ni, t.Component = U, t.Fragment = f, t.Profiler = b, t.PureComponent = fe, t.StrictMode = m, t.Suspense = R, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, t.cloneElement = ki, t.createContext = Wo, t.createElement = Ai, t.createFactory = Ti, t.createRef = Ao, t.forwardRef = Yo, t.isValidElement = De, t.lazy = Ho, t.memo = Go, t.startTransition = Ri, t.unstable_act = Ci, t.useCallback = oi, t.useContext = Jo, t.useDebugValue = ui, t.useDeferredValue = ci, t.useEffect = ti, t.useId = li, t.useImperativeHandle = si, t.useInsertionEffect = ri, t.useLayoutEffect = ni, t.useMemo = ii, t.useReducer = Xo, t.useRef = ei, t.useState = Zo, t.useSyncExternalStore = fi, t.useTransition = ai, t.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Be, Be.exports)), Be.exports;
}
process.env.NODE_ENV === "production" ? dr.exports = Tu() : dr.exports = Nu();
var K = dr.exports;
const So = /* @__PURE__ */ ku(K), Ln = /* @__PURE__ */ xi({
  __proto__: null,
  default: So
}, [K]);
var pr = { exports: {} }, Jt = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function Du() {
  if (Qn)
    return Jt;
  Qn = 1;
  var e = K;
  function t(T, g) {
    return T === g && (T !== 0 || 1 / T === 1 / g) || T !== T && g !== g;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useSyncExternalStore, i = e.useRef, f = e.useEffect, m = e.useMemo, b = e.useDebugValue;
  return Jt.useSyncExternalStoreWithSelector = function(T, g, w, R, l) {
    var c = i(null);
    if (c.current === null) {
      var d = { hasValue: !1, value: null };
      c.current = d;
    } else
      d = c.current;
    c = m(function() {
      function E(p) {
        if (!S) {
          if (S = !0, h = p, p = R(p), l !== void 0 && d.hasValue) {
            var _ = d.value;
            if (l(_, p))
              return u = _;
          }
          return u = p;
        }
        if (_ = u, n(h, p))
          return _;
        var O = R(p);
        return l !== void 0 && l(_, O) ? _ : (h = p, u = O);
      }
      var S = !1, h, u, s = w === void 0 ? null : w;
      return [function() {
        return E(g());
      }, s === null ? void 0 : function() {
        return E(s());
      }];
    }, [g, w, R, l]);
    var v = o(T, c[0], c[1]);
    return f(function() {
      d.hasValue = !0, d.value = v;
    }, [v]), b(v), v;
  }, Jt;
}
var Zt = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function Pu() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = K;
    function t(g, w) {
      return g === w && (g !== 0 || 1 / g === 1 / w) || g !== g && w !== w;
    }
    var n = typeof Object.is == "function" ? Object.is : t, o = e.useSyncExternalStore, i = e.useRef, f = e.useEffect, m = e.useMemo, b = e.useDebugValue;
    function T(g, w, R, l, c) {
      var d = i(null), v;
      d.current === null ? (v = {
        hasValue: !1,
        value: null
      }, d.current = v) : v = d.current;
      var E = m(function() {
        var s = !1, p, _, O = function(j) {
          if (!s) {
            s = !0, p = j;
            var M = l(j);
            if (c !== void 0 && v.hasValue) {
              var q = v.value;
              if (c(q, M))
                return _ = q, q;
            }
            return _ = M, M;
          }
          var z = p, V = _;
          if (n(z, j))
            return V;
          var Q = l(j);
          return c !== void 0 && c(V, Q) ? V : (p = j, _ = Q, Q);
        }, A = R === void 0 ? null : R, D = function() {
          return O(w());
        }, N = A === null ? void 0 : function() {
          return O(A());
        };
        return [D, N];
      }, [w, R, l, c]), S = E[0], h = E[1], u = o(g, S, h);
      return f(function() {
        v.hasValue = !0, v.value = u;
      }, [u]), b(u), u;
    }
    Zt.useSyncExternalStoreWithSelector = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Zt;
}
process.env.NODE_ENV === "production" ? pr.exports = Du() : pr.exports = Pu();
var Mu = pr.exports, be = (
  // prettier-ignore
  // @ts-ignore
  "default" in Ln ? So : Ln
), Wn = Symbol.for("react-redux-context"), Bn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Iu() {
  if (!be.createContext)
    return {};
  const e = Bn[Wn] ?? (Bn[Wn] = /* @__PURE__ */ new Map());
  let t = e.get(be.createContext);
  return t || (t = be.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(be.createContext, t)), t;
}
var Ne = /* @__PURE__ */ Iu(), ju = () => {
  throw new Error("uSES not initialized!");
};
function Tr(e = Ne) {
  return function() {
    const n = be.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var wo = /* @__PURE__ */ Tr(), Ro = ju, xu = (e) => {
  Ro = e;
}, $u = (e, t) => e === t;
function Fu(e = Ne) {
  const t = e === Ne ? wo : Tr(e), n = (o, i = {}) => {
    const { equalityFn: f = $u, devModeChecks: m = {} } = typeof i == "function" ? { equalityFn: i } : i;
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
      store: b,
      subscription: T,
      getServerState: g,
      stabilityCheck: w,
      identityFunctionCheck: R
    } = t(), l = be.useRef(!0), c = be.useCallback(
      {
        [o.name](v) {
          const E = o(v);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: S,
              stabilityCheck: h
            } = {
              stabilityCheck: w,
              identityFunctionCheck: R,
              ...m
            };
            if (h === "always" || h === "once" && l.current) {
              const u = o(v);
              if (!f(E, u)) {
                let s;
                try {
                  throw new Error();
                } catch (p) {
                  ({ stack: s } = p);
                }
                console.warn(
                  "Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: v,
                    selected: E,
                    selected2: u,
                    stack: s
                  }
                );
              }
            }
            if ((S === "always" || S === "once" && l.current) && E === v) {
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
            l.current && (l.current = !1);
          }
          return E;
        }
      }[o.name],
      [o, w, m.stabilityCheck]
    ), d = Ro(
      T.addNestedSub,
      b.getState,
      g || b.getState,
      c,
      f
    );
    return be.useDebugValue(d), d;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Vu = /* @__PURE__ */ Fu();
function qu(e) {
  e();
}
var zu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
zu ? be.useLayoutEffect : be.useEffect;
function Kn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ge(e, t) {
  if (Kn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Kn(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function Oo(e = Ne) {
  const t = e === Ne ? wo : (
    // @ts-ignore
    Tr(e)
  ), n = () => {
    const { store: o } = t();
    return o;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Co = /* @__PURE__ */ Oo();
function Lu(e = Ne) {
  const t = e === Ne ? Co : Oo(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Qu = /* @__PURE__ */ Lu(), Uu = qu;
xu(Mu.useSyncExternalStoreWithSelector);
function Wu(e) {
  return e.type === "query";
}
function Bu(e) {
  return e.type === "mutation";
}
function wt(e, ...t) {
  return Object.assign(e, ...t);
}
function Xt(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var xe = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Ku = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const o = xe == null ? void 0 : xe.get(t);
  if (typeof o == "string")
    n = o;
  else {
    const i = JSON.stringify(t, (f, m) => _e(m) ? Object.keys(m).sort().reduce((b, T) => (b[T] = m[T], b), {}) : m);
    _e(t) && (xe == null || xe.set(t, i)), n = i;
  }
  return `${e}(${n})`;
}, er = Symbol();
function Hn(e, t, n, o) {
  const i = K.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: n,
      endpointName: o
    }) : e
  }), [e, t, n, o]), f = K.useRef(i);
  return K.useEffect(() => {
    f.current.serialized !== i.serialized && (f.current = i);
  }, [i]), f.current.serialized === i.serialized ? f.current.queryArgs : e;
}
function tr(e) {
  const t = K.useRef(e);
  return K.useEffect(() => {
    Ge(t.current, e) || (t.current = e);
  }, [e]), Ge(t.current, e) ? t.current : e;
}
var Hu = typeof window < "u" && window.document && window.document.createElement ? K.useLayoutEffect : K.useEffect, Yu = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: yo.pending
} : e;
function Gu({
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
  serializeQueryArgs: b,
  context: T
}) {
  const g = f ? (d) => d() : K.useEffect;
  return {
    buildQueryHooks: l,
    buildMutationHook: c,
    usePrefetch: R
  };
  function w(d, v, E) {
    if (v != null && v.endpointName && d.isUninitialized) {
      const {
        endpointName: _
      } = v, O = T.endpointDefinitions[_];
      b({
        queryArgs: v.originalArgs,
        endpointDefinition: O,
        endpointName: _
      }) === b({
        queryArgs: E,
        endpointDefinition: O,
        endpointName: _
      }) && (v = void 0);
    }
    let S = d.isSuccess ? d.data : v == null ? void 0 : v.data;
    S === void 0 && (S = d.data);
    const h = S !== void 0, u = d.isLoading, s = !h && u, p = d.isSuccess || u && h;
    return {
      ...d,
      data: S,
      currentData: d.data,
      isFetching: u,
      isLoading: s,
      isSuccess: p
    };
  }
  function R(d, v) {
    const E = n(), S = tr(v);
    return K.useCallback((h, u) => E(e.util.prefetch(d, h, {
      ...S,
      ...u
    })), [d, E, S]);
  }
  function l(d) {
    const v = (h, {
      refetchOnReconnect: u,
      refetchOnFocus: s,
      refetchOnMountOrArgChange: p,
      skip: _ = !1,
      pollingInterval: O = 0,
      skipPollingIfUnfocused: A = !1
    } = {}) => {
      const {
        initiate: D
      } = e.endpoints[d], N = n(), j = K.useRef();
      if (!j.current) {
        const y = N(e.internalActions.internal_getRTKQSubscriptions());
        if (process.env.NODE_ENV !== "production" && (typeof y != "object" || typeof (y == null ? void 0 : y.type) == "string"))
          throw new Error(process.env.NODE_ENV === "production" ? X(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        j.current = y;
      }
      const M = Hn(
        _ ? Ce : h,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Ku,
        T.endpointDefinitions[d],
        d
      ), q = tr({
        refetchOnReconnect: u,
        refetchOnFocus: s,
        pollingInterval: O,
        skipPollingIfUnfocused: A
      }), z = K.useRef(!1), V = K.useRef();
      let {
        queryCacheKey: Q,
        requestId: x
      } = V.current || {}, G = !1;
      Q && x && (G = j.current.isRequestSubscribed(Q, x));
      const se = !G && z.current;
      return g(() => {
        z.current = G;
      }), g(() => {
        se && (V.current = void 0);
      }, [se]), g(() => {
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
            forceRefetch: p
          }));
          V.current = B;
        } else
          q !== P && y.updateSubscriptionOptions(q);
      }, [N, D, p, M, q, se]), K.useEffect(() => () => {
        var y;
        (y = V.current) == null || y.unsubscribe(), V.current = void 0;
      }, []), K.useMemo(() => ({
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
    }, E = ({
      refetchOnReconnect: h,
      refetchOnFocus: u,
      pollingInterval: s = 0,
      skipPollingIfUnfocused: p = !1
    } = {}) => {
      const {
        initiate: _
      } = e.endpoints[d], O = n(), [A, D] = K.useState(er), N = K.useRef(), j = tr({
        refetchOnReconnect: h,
        refetchOnFocus: u,
        pollingInterval: s,
        skipPollingIfUnfocused: p
      });
      g(() => {
        var V, Q;
        const z = (V = N.current) == null ? void 0 : V.subscriptionOptions;
        j !== z && ((Q = N.current) == null || Q.updateSubscriptionOptions(j));
      }, [j]);
      const M = K.useRef(j);
      g(() => {
        M.current = j;
      }, [j]);
      const q = K.useCallback(function(z, V = !1) {
        let Q;
        return t(() => {
          var x;
          (x = N.current) == null || x.unsubscribe(), N.current = Q = O(_(z, {
            subscriptionOptions: M.current,
            forceRefetch: !V
          })), D(z);
        }), Q;
      }, [O, _]);
      return K.useEffect(() => () => {
        var z;
        (z = N == null ? void 0 : N.current) == null || z.unsubscribe();
      }, []), K.useEffect(() => {
        A !== er && !N.current && q(A, !0);
      }, [A, q]), K.useMemo(() => [q, A], [q, A]);
    }, S = (h, {
      skip: u = !1,
      selectFromResult: s
    } = {}) => {
      const {
        select: p
      } = e.endpoints[d], _ = Hn(u ? Ce : h, b, T.endpointDefinitions[d], d), O = K.useRef(), A = K.useMemo(() => m([p(_), (q, z) => z, (q) => _], w, {
        memoizeOptions: {
          resultEqualityCheck: Ge
        }
      }), [p, _]), D = K.useMemo(() => s ? m([A], s, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : A, [A, s]), N = o((q) => D(q, O.current), Ge), j = i(), M = A(j.getState(), O.current);
      return Hu(() => {
        O.current = M;
      }, [M]), N;
    };
    return {
      useQueryState: S,
      useQuerySubscription: v,
      useLazyQuerySubscription: E,
      useLazyQuery(h) {
        const [u, s] = E(h), p = S(s, {
          ...h,
          skip: s === er
        }), _ = K.useMemo(() => ({
          lastArg: s
        }), [s]);
        return K.useMemo(() => [u, p, _], [u, p, _]);
      },
      useQuery(h, u) {
        const s = v(h, u), p = S(h, {
          selectFromResult: h === Ce || u != null && u.skip ? void 0 : Yu,
          ...u
        }), {
          data: _,
          status: O,
          isLoading: A,
          isSuccess: D,
          isError: N,
          error: j
        } = p;
        return K.useDebugValue({
          data: _,
          status: O,
          isLoading: A,
          isSuccess: D,
          isError: N,
          error: j
        }), K.useMemo(() => ({
          ...p,
          ...s
        }), [p, s]);
      }
    };
  }
  function c(d) {
    return ({
      selectFromResult: v,
      fixedCacheKey: E
    } = {}) => {
      const {
        select: S,
        initiate: h
      } = e.endpoints[d], u = n(), [s, p] = K.useState();
      K.useEffect(() => () => {
        s != null && s.arg.fixedCacheKey || s == null || s.reset();
      }, [s]);
      const _ = K.useCallback(function(P) {
        const $ = u(h(P, {
          fixedCacheKey: E
        }));
        return p($), $;
      }, [u, h, E]), {
        requestId: O
      } = s || {}, A = K.useMemo(() => S({
        fixedCacheKey: E,
        requestId: s == null ? void 0 : s.requestId
      }), [E, s, S]), D = K.useMemo(() => v ? m([A], v) : A, [v, A]), N = o(D, Ge), j = E == null ? s == null ? void 0 : s.arg.originalArgs : void 0, M = K.useCallback(() => {
        t(() => {
          s && p(void 0), E && u(e.internalActions.removeMutationResult({
            requestId: O,
            fixedCacheKey: E
          }));
        });
      }, [u, E, s, O]), {
        endpointName: q,
        data: z,
        status: V,
        isLoading: Q,
        isSuccess: x,
        isError: G,
        error: se
      } = N;
      K.useDebugValue({
        endpointName: q,
        data: z,
        status: V,
        isLoading: Q,
        isSuccess: x,
        isError: G,
        error: se
      });
      const y = K.useMemo(() => ({
        ...N,
        originalArgs: j,
        reset: M
      }), [N, j, M]);
      return K.useMemo(() => [_, y], [_, y]);
    };
  }
}
function Ju(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
var Zu = /* @__PURE__ */ Symbol(), Xu = ({
  batch: e = Uu,
  hooks: t = {
    useDispatch: Qu,
    useSelector: Vu,
    useStore: Co
  },
  createSelector: n = Sr,
  unstable__sideEffectsInRender: o = !1,
  ...i
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const f = ["useDispatch", "useSelector", "useStore"];
    let m = !1;
    for (const b of f)
      if (Ju(i) > 0 && (i[b] && (m || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), m = !0)), t[b] = i[b]), typeof t[b] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? X(36) : `When using custom hooks for context, all ${f.length} hooks need to be provided: ${f.join(", ")}.
Hook ${b} was either not provided or not a function.`);
  }
  return {
    name: Zu,
    init(f, {
      serializeQueryArgs: m
    }, b) {
      const T = f, {
        buildQueryHooks: g,
        buildMutationHook: w,
        usePrefetch: R
      } = Gu({
        api: f,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: o,
          createSelector: n
        },
        serializeQueryArgs: m,
        context: b
      });
      return wt(T, {
        usePrefetch: R
      }), wt(b, {
        batch: e
      }), {
        injectEndpoint(l, c) {
          if (Wu(c)) {
            const {
              useQuery: d,
              useLazyQuery: v,
              useLazyQuerySubscription: E,
              useQueryState: S,
              useQuerySubscription: h
            } = g(l);
            wt(T.endpoints[l], {
              useQuery: d,
              useLazyQuery: v,
              useLazyQuerySubscription: E,
              useQueryState: S,
              useQuerySubscription: h
            }), f[`use${Xt(l)}Query`] = d, f[`useLazy${Xt(l)}Query`] = v;
          } else if (Bu(c)) {
            const d = w(l);
            wt(T.endpoints[l], {
              useMutation: d
            }), f[`use${Xt(l)}Mutation`] = d;
          }
        }
      };
    }
  };
}, ea = /* @__PURE__ */ yu(Au(), Xu());
const ta = ea({
  reducerPath: "sparqlApi",
  baseQuery: uu({
    baseUrl: "https://data-iremus.huma-num.fr/sparql"
  }),
  endpoints: (e) => ({
    sparql: e.query({
      query: (t) => ({
        url: "/",
        method: "POST",
        body: new URLSearchParams({ query: t })
      })
    })
  })
}), { useSparqlQuery: ya } = ta, ma = async (e, t = "https://data-iremus.huma-num.fr/sparql") => {
  let n = await fetch(t, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    body: `query=${encodeURIComponent(e)}`
  });
  return n = await n.json(), n;
};
function va(e, t) {
  for (const n in t)
    e = e.replaceAll("${" + n + "}", t[n]);
  return e;
}
class ga {
  constructor() {
    H(this, "head");
    H(this, "results");
    this.head = new ra(), this.results = new na();
  }
}
class ra {
  constructor() {
    H(this, "vars");
    this.vars = [];
  }
}
class na {
  constructor() {
    H(this, "bindings");
    this.bindings = [];
  }
}
class ba {
}
class _a {
  constructor() {
    H(this, "lang");
    H(this, "type");
    H(this, "value");
    this.lang = to.NONE, this.type = eo.uri, this.value = "";
  }
}
export {
  $i as BIBO_BASE,
  Gn as CRMDIG_BASE,
  hr as CRM_BASE,
  Bi as CountryFlags,
  ia as DATA_IREMUS_FILES_BASE,
  me as DATA_IREMUS_ID_BASE,
  yr as DCTERMS_BASE,
  Jn as DC_BASE,
  Ue as FOAF_BASE,
  ca as Graph,
  Fi as HEMEF_BASE,
  zi as IREMUS_GRAPH_BASE,
  qi as IREMUS_NS_BASE,
  Vi as IREMUS_RESOURCE_BASE,
  Hi as LABEL_PREDICATES,
  fa as LANGS_ORDER,
  Yn as LRMOO_BASE,
  to as Languages,
  aa as Literal,
  Li as MUSRAD30_BASE,
  la as OG,
  Qi as OWL_BASE,
  Rt as Ontology,
  Ot as OntologyClass,
  pn as OntologyProperty,
  gr as OntologyStuff,
  sa as PRIORITIZED_RDF_PREFIXES,
  mr as RDFS_BASE,
  Zn as RDF_BASE,
  Xn as RDF_PREFIXES,
  da as RESOURCE_IDENTITY_PREDICATES,
  Wi as Resource,
  Ui as SCHEMAORG_BASE,
  pa as SHERLOCK_TYPE,
  vr as SKOS_BASE,
  ga as SparqlResultObject,
  ba as SparqlResultObject_Binding,
  ra as SparqlResultObject_Head,
  na as SparqlResultObject_Results,
  _a as SparqlResultObject_Variable,
  eo as Type,
  Ki as XSDTypes,
  va as bind,
  Yi as computeIdentity,
  ha as computeResourceLabel,
  Gi as formatUri,
  ua as getCode,
  ma as querySparqlEndpoint,
  ta as sparqlApi,
  ya as useSparqlQuery
};
