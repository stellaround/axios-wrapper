function zt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Qn } = Object.prototype, { getPrototypeOf: et } = Object, be = /* @__PURE__ */ ((e) => (t) => {
  const n = Qn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => be(t) === e), Re = (e) => (t) => typeof t === e, { isArray: V } = Array, Y = Re("undefined");
function Zn(e) {
  return e !== null && !Y(e) && e.constructor !== null && !Y(e.constructor) && $(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Jt = U("ArrayBuffer");
function Yn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jt(e.buffer), t;
}
const er = Re("string"), $ = Re("function"), Vt = Re("number"), Se = (e) => e !== null && typeof e == "object", tr = (e) => e === !0 || e === !1, ce = (e) => {
  if (be(e) !== "object")
    return !1;
  const t = et(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, nr = U("Date"), rr = U("File"), sr = U("Blob"), or = U("FileList"), ir = (e) => Se(e) && $(e.pipe), ar = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || $(e.append) && ((t = be(e)) === "formdata" || // detect form-data instance
  t === "object" && $(e.toString) && e.toString() === "[object FormData]"));
}, cr = U("URLSearchParams"), [ur, lr, fr, dr] = ["ReadableStream", "Request", "Response", "Headers"].map(U), pr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), V(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function Wt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Kt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Gt = (e) => !Y(e) && e !== Kt;
function qe() {
  const { caseless: e } = Gt(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Wt(t, s) || s;
    ce(t[o]) && ce(r) ? t[o] = qe(t[o], r) : ce(r) ? t[o] = qe({}, r) : V(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && te(arguments[r], n);
  return t;
}
const hr = (e, t, n, { allOwnKeys: r } = {}) => (te(t, (s, o) => {
  n && $(s) ? e[o] = zt(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), mr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Er = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && et(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, wr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, br = (e) => {
  if (!e) return null;
  if (V(e)) return e;
  let t = e.length;
  if (!Vt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Rr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && et(Uint8Array)), Sr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, gr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Or = U("HTMLFormElement"), Tr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), pt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ar = U("RegExp"), Xt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  te(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, xr = (e) => {
  Xt(e, (t, n) => {
    if ($(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if ($(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Nr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return V(e) ? r(e) : r(String(e).split(t)), n;
}, Pr = () => {
}, Cr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Be = "abcdefghijklmnopqrstuvwxyz", ht = "0123456789", Qt = {
  DIGIT: ht,
  ALPHA: Be,
  ALPHA_DIGIT: Be + Be.toUpperCase() + ht
}, $r = (e = 16, t = Qt.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Br(e) {
  return !!(e && $(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Fr = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Se(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = V(r) ? [] : {};
        return te(r, (i, a) => {
          const l = n(i, s + 1);
          !Y(l) && (o[a] = l);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Lr = U("AsyncFunction"), _r = (e) => e && (Se(e) || $(e)) && $(e.then) && $(e.catch), f = {
  isArray: V,
  isArrayBuffer: Jt,
  isBuffer: Zn,
  isFormData: ar,
  isArrayBufferView: Yn,
  isString: er,
  isNumber: Vt,
  isBoolean: tr,
  isObject: Se,
  isPlainObject: ce,
  isReadableStream: ur,
  isRequest: lr,
  isResponse: fr,
  isHeaders: dr,
  isUndefined: Y,
  isDate: nr,
  isFile: rr,
  isBlob: sr,
  isRegExp: Ar,
  isFunction: $,
  isStream: ir,
  isURLSearchParams: cr,
  isTypedArray: Rr,
  isFileList: or,
  forEach: te,
  merge: qe,
  extend: hr,
  trim: pr,
  stripBOM: mr,
  inherits: yr,
  toFlatObject: Er,
  kindOf: be,
  kindOfTest: U,
  endsWith: wr,
  toArray: br,
  forEachEntry: Sr,
  matchAll: gr,
  isHTMLForm: Or,
  hasOwnProperty: pt,
  hasOwnProp: pt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xt,
  freezeMethods: xr,
  toObjectSet: Nr,
  toCamelCase: Tr,
  noop: Pr,
  toFiniteNumber: Cr,
  findKey: Wt,
  global: Kt,
  isContextDefined: Gt,
  ALPHABET: Qt,
  generateString: $r,
  isSpecCompliantForm: Br,
  toJSONObject: Fr,
  isAsyncFn: Lr,
  isThenable: _r
};
function b(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
f.inherits(b, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Zt = b.prototype, Yt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Yt[e] = { value: e };
});
Object.defineProperties(b, Yt);
Object.defineProperty(Zt, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, o) => {
  const i = Object.create(Zt);
  return f.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), b.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Dr = null;
function ve(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function en(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function mt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = en(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ur(e) {
  return f.isArray(e) && !e.some(ve);
}
const jr = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ge(e, t, n) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = f.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, S) {
    return !f.isUndefined(S[m]);
  });
  const r = n.metaTokens, s = n.visitor || c, o = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (f.isDate(h))
      return h.toISOString();
    if (!l && f.isBlob(h))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(h) || f.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, m, S) {
    let g = h;
    if (h && !S && typeof h == "object") {
      if (f.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (f.isArray(h) && Ur(h) || (f.isFileList(h) || f.endsWith(m, "[]")) && (g = f.toArray(h)))
        return m = en(m), g.forEach(function(w, F) {
          !(f.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? mt([m], F, o) : i === null ? m : m + "[]",
            u(w)
          );
        }), !1;
    }
    return ve(h) ? !0 : (t.append(mt(S, m, o), u(h)), !1);
  }
  const p = [], y = Object.assign(jr, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: ve
  });
  function E(h, m) {
    if (!f.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(h), f.forEach(h, function(g, A) {
        (!(f.isUndefined(g) || g === null) && s.call(
          t,
          g,
          f.isString(A) ? A.trim() : A,
          m,
          y
        )) === !0 && E(g, m ? m.concat(A) : [A]);
      }), p.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function yt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function tt(e, t) {
  this._pairs = [], e && ge(e, this, t);
}
const tn = tt.prototype;
tn.append = function(t, n) {
  this._pairs.push([t, n]);
};
tn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, yt);
  } : yt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function kr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function nn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || kr, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new tt(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
let Et = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    f.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
};
const rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qr = typeof URLSearchParams < "u" ? URLSearchParams : tt, vr = typeof FormData < "u" ? FormData : null, Mr = typeof Blob < "u" ? Blob : null, Hr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qr,
    FormData: vr,
    Blob: Mr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, nt = typeof window < "u" && typeof document < "u", Ir = ((e) => nt && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), zr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Jr = nt && window.location.href || "http://localhost", Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: nt,
  hasStandardBrowserEnv: Ir,
  hasStandardBrowserWebWorkerEnv: zr,
  origin: Jr
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...Vr,
  ...Hr
};
function Wr(e, t) {
  return ge(e, new L.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return L.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Kr(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Gr(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function sn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = o >= n.length;
    return i = !i && f.isArray(s) ? s.length : i, l ? (f.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !f.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && f.isArray(s[i]) && (s[i] = Gr(s[i])), !a);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(Kr(r), s, n, 0);
    }), n;
  }
  return null;
}
function Xr(e, t, n) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ne = {
  transitional: rn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = f.isObject(t);
    if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s ? JSON.stringify(sn(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Wr(t, this.formSerializer).toString();
      if ((a = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ge(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Xr(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ne.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (f.isResponse(t) || f.isReadableStream(t))
      return t;
    if (t && f.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ne.headers[e] = {};
});
const Qr = f.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Zr = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Qr[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, wt = Symbol("internals");
function Q(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(ue) : String(e);
}
function Yr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const es = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fe(e, t, n, r, s) {
  if (f.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!f.isString(t)) {
    if (f.isString(r))
      return t.indexOf(r) !== -1;
    if (f.isRegExp(r))
      return r.test(t);
  }
}
function ts(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ns(e, t) {
  const n = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let N = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, l, u) {
      const c = Q(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const p = f.findKey(s, c);
      (!p || s[p] === void 0 || u === !0 || u === void 0 && s[p] !== !1) && (s[p || l] = ue(a));
    }
    const i = (a, l) => f.forEach(a, (u, c) => o(u, c, l));
    if (f.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (f.isString(t) && (t = t.trim()) && !es(t))
      i(Zr(t), n);
    else if (f.isHeaders(t))
      for (const [a, l] of t.entries())
        o(l, a, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Q(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Yr(s);
        if (f.isFunction(n))
          return n.call(this, s, r);
        if (f.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Q(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Fe(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Q(i), i) {
        const a = f.findKey(r, i);
        a && (!n || Fe(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Fe(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return f.forEach(this, (s, o) => {
      const i = f.findKey(r, o);
      if (i) {
        n[i] = ue(s), delete n[o];
        return;
      }
      const a = t ? ts(o) : String(o).trim();
      a !== o && delete n[o], n[a] = ue(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && f.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[wt] = this[wt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = Q(i);
      r[a] || (ns(s, i), r[a] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
N.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(N.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
f.freezeMethods(N);
function Le(e, t) {
  const n = this || ne, r = t || n, s = N.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function on(e) {
  return !!(e && e.__CANCEL__);
}
function W(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(W, b, {
  __CANCEL__: !0
});
function an(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function rs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ss(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = r[o];
    i || (i = u), n[s] = l, r[s] = u;
    let p = o, y = 0;
    for (; p !== s; )
      y += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const E = c && u - c;
    return E ? Math.round(y * 1e3 / E) : void 0;
  };
}
function os(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let s = null;
  return function() {
    const i = this === !0, a = Date.now();
    if (i || a - n > r)
      return s && (clearTimeout(s), s = null), n = a, e.apply(null, arguments);
    s || (s = setTimeout(() => (s = null, n = Date.now(), e.apply(null, arguments)), r - (a - n)));
  };
}
const pe = (e, t, n = 3) => {
  let r = 0;
  const s = ss(50, 250);
  return os((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = i - r, u = s(l), c = i <= a;
    r = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
      event: o,
      lengthComputable: a != null
    };
    p[t ? "download" : "upload"] = !0, e(p);
  }, n);
}, is = L.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const a = f.isString(i) ? s(i) : i;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), as = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      f.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), f.isString(r) && i.push("path=" + r), f.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function cs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function us(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function cn(e, t) {
  return e && !cs(t) ? us(e, t) : t;
}
const bt = (e) => e instanceof N ? { ...e } : e;
function z(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, p) {
    return f.isPlainObject(u) && f.isPlainObject(c) ? f.merge.call({ caseless: p }, u, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function s(u, c, p) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(u))
        return r(void 0, u, p);
    } else return r(u, c, p);
  }
  function o(u, c) {
    if (!f.isUndefined(c))
      return r(void 0, c);
  }
  function i(u, c) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, p) {
    if (p in t)
      return r(u, c);
    if (p in e)
      return r(void 0, u);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, c) => s(bt(u), bt(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const p = l[c] || s, y = p(e[c], t[c], c);
    f.isUndefined(y) && p !== a || (n[c] = y);
  }), n;
}
const un = (e) => {
  const t = z({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  t.headers = i = N.from(i), t.url = nn(cn(t.baseURL, t.url), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (f.isFormData(n)) {
    if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [u, ...c] = l ? l.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (L.hasStandardBrowserEnv && (r && f.isFunction(r) && (r = r(t)), r || r !== !1 && is(t.url))) {
    const u = s && o && as.read(o);
    u && i.set(s, u);
  }
  return t;
}, ls = typeof XMLHttpRequest < "u", fs = ls && function(e) {
  return new Promise(function(n, r) {
    const s = un(e);
    let o = s.data;
    const i = N.from(s.headers).normalize();
    let { responseType: a } = s, l;
    function u() {
      s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let c = new XMLHttpRequest();
    c.open(s.method.toUpperCase(), s.url, !0), c.timeout = s.timeout;
    function p() {
      if (!c)
        return;
      const E = N.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), m = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: E,
        config: e,
        request: c
      };
      an(function(g) {
        n(g), u();
      }, function(g) {
        r(g), u();
      }, m), c = null;
    }
    "onloadend" in c ? c.onloadend = p : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, c.onabort = function() {
      c && (r(new b("Request aborted", b.ECONNABORTED, s, c)), c = null);
    }, c.onerror = function() {
      r(new b("Network Error", b.ERR_NETWORK, s, c)), c = null;
    }, c.ontimeout = function() {
      let h = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const m = s.transitional || rn;
      s.timeoutErrorMessage && (h = s.timeoutErrorMessage), r(new b(
        h,
        m.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        s,
        c
      )), c = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in c && f.forEach(i.toJSON(), function(h, m) {
      c.setRequestHeader(m, h);
    }), f.isUndefined(s.withCredentials) || (c.withCredentials = !!s.withCredentials), a && a !== "json" && (c.responseType = s.responseType), typeof s.onDownloadProgress == "function" && c.addEventListener("progress", pe(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", pe(s.onUploadProgress)), (s.cancelToken || s.signal) && (l = (E) => {
      c && (r(!E || E.type ? new W(null, e, c) : E), c.abort(), c = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const y = rs(s.url);
    if (y && L.protocols.indexOf(y) === -1) {
      r(new b("Unsupported protocol " + y + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, ds = (e, t) => {
  let n = new AbortController(), r;
  const s = function(l) {
    if (!r) {
      r = !0, i();
      const u = l instanceof Error ? l : this.reason;
      n.abort(u instanceof b ? u : new W(u instanceof Error ? u.message : u));
    }
  };
  let o = t && setTimeout(() => {
    s(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((l) => {
      l && (l.removeEventListener ? l.removeEventListener("abort", s) : l.unsubscribe(s));
    }), e = null);
  };
  e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", s));
  const { signal: a } = n;
  return a.unsubscribe = i, [a, () => {
    o && clearTimeout(o), o = null;
  }];
}, ps = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, hs = async function* (e, t, n) {
  for await (const r of e)
    yield* ps(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Rt = (e, t, n, r, s) => {
  const o = hs(e, t, s);
  let i = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(a) {
      const { done: l, value: u } = await o.next();
      if (l) {
        a.close(), r();
        return;
      }
      let c = u.byteLength;
      n && n(i += c), a.enqueue(new Uint8Array(u));
    },
    cancel(a) {
      return r(a), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, St = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, Oe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ln = Oe && typeof ReadableStream == "function", Me = Oe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ms = ln && (() => {
  let e = !1;
  const t = new Request(L.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), gt = 64 * 1024, He = ln && !!(() => {
  try {
    return f.isReadableStream(new Response("").body);
  } catch {
  }
})(), he = {
  stream: He && ((e) => e.body)
};
Oe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !he[t] && (he[t] = f.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new b(`Response type '${t}' is not supported`, b.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const ys = async (e) => {
  if (e == null)
    return 0;
  if (f.isBlob(e))
    return e.size;
  if (f.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (f.isArrayBufferView(e))
    return e.byteLength;
  if (f.isURLSearchParams(e) && (e = e + ""), f.isString(e))
    return (await Me(e)).byteLength;
}, Es = async (e, t) => {
  const n = f.toFiniteNumber(e.getContentLength());
  return n ?? ys(t);
}, ws = Oe && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: u,
    headers: c,
    withCredentials: p = "same-origin",
    fetchOptions: y
  } = un(e);
  u = u ? (u + "").toLowerCase() : "text";
  let [E, h] = s || o || i ? ds([s, o], i) : [], m, S;
  const g = () => {
    !m && setTimeout(() => {
      E && E.unsubscribe();
    }), m = !0;
  };
  let A;
  try {
    if (l && ms && n !== "get" && n !== "head" && (A = await Es(c, r)) !== 0) {
      let x = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      f.isFormData(r) && (P = x.headers.get("content-type")) && c.setContentType(P), x.body && (r = Rt(x.body, gt, St(
        A,
        pe(l)
      ), null, Me));
    }
    f.isString(p) || (p = p ? "cors" : "omit"), S = new Request(t, {
      ...y,
      signal: E,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: p
    });
    let w = await fetch(S);
    const F = He && (u === "stream" || u === "response");
    if (He && (a || F)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((X) => {
        x[X] = w[X];
      });
      const P = f.toFiniteNumber(w.headers.get("content-length"));
      w = new Response(
        Rt(w.body, gt, a && St(
          P,
          pe(a, !0)
        ), F && g, Me),
        x
      );
    }
    u = u || "text";
    let $e = await he[f.findKey(he, u) || "text"](w, e);
    return !F && g(), h && h(), await new Promise((x, P) => {
      an(x, P, {
        data: $e,
        headers: N.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: S
      });
    });
  } catch (w) {
    throw g(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new b("Network Error", b.ERR_NETWORK, e, S),
      {
        cause: w.cause || w
      }
    ) : b.from(w, w && w.code, e, S);
  }
}), Ie = {
  http: Dr,
  xhr: fs,
  fetch: ws
};
f.forEach(Ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ot = (e) => `- ${e}`, bs = (e) => f.isFunction(e) || e === null || e === !1, fn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !bs(n) && (r = Ie[(i = String(n)).toLowerCase()], r === void 0))
        throw new b(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ot).join(`
`) : " " + Ot(o[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ie
};
function _e(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new W(null, e);
}
function Tt(e) {
  return _e(e), e.headers = N.from(e.headers), e.data = Le.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), fn.getAdapter(e.adapter || ne.adapter)(e).then(function(r) {
    return _e(e), r.data = Le.call(
      e,
      e.transformResponse,
      r
    ), r.headers = N.from(r.headers), r;
  }, function(r) {
    return on(r) || (_e(e), r && r.response && (r.response.data = Le.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = N.from(r.response.headers))), Promise.reject(r);
  });
}
const dn = "1.7.2", rt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  rt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const At = {};
rt.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + dn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new b(
        s(i, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !At[i] && (At[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
function Rs(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], l = a === void 0 || i(a, o, e);
      if (l !== !0)
        throw new b("option " + o + " must be " + l, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + o, b.ERR_BAD_OPTION);
  }
}
const ze = {
  assertOptions: Rs,
  validators: rt
}, k = ze.validators;
let I = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Et(),
      response: new Et()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = z(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ze.assertOptions(r, {
      silentJSONParsing: k.transitional(k.boolean),
      forcedJSONParsing: k.transitional(k.boolean),
      clarifyTimeoutError: k.transitional(k.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ze.assertOptions(s, {
      encode: k.function,
      serialize: k.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && f.merge(
      o.common,
      o[n.method]
    );
    o && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = N.concat(i, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, p = 0, y;
    if (!l) {
      const h = [Tt.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, u), y = h.length, c = Promise.resolve(n); p < y; )
        c = c.then(h[p++], h[p++]);
      return c;
    }
    y = a.length;
    let E = n;
    for (p = 0; p < y; ) {
      const h = a[p++], m = a[p++];
      try {
        E = h(E);
      } catch (S) {
        m.call(this, S);
        break;
      }
    }
    try {
      c = Tt.call(this, E);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, y = u.length; p < y; )
      c = c.then(u[p++], u[p++]);
    return c;
  }
  getUri(t) {
    t = z(this.defaults, t);
    const n = cn(t.baseURL, t.url);
    return nn(n, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(t) {
  I.prototype[t] = function(n, r) {
    return this.request(z(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(z(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  I.prototype[t] = n(), I.prototype[t + "Form"] = n(!0);
});
let Ss = class pn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new W(o, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new pn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function gs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Os(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const Je = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Je).forEach(([e, t]) => {
  Je[t] = e;
});
function hn(e) {
  const t = new I(e), n = zt(I.prototype.request, t);
  return f.extend(n, I.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return hn(z(e, s));
  }, n;
}
const O = hn(ne);
O.Axios = I;
O.CanceledError = W;
O.CancelToken = Ss;
O.isCancel = on;
O.VERSION = dn;
O.toFormData = ge;
O.AxiosError = b;
O.Cancel = O.CanceledError;
O.all = function(t) {
  return Promise.all(t);
};
O.spread = gs;
O.isAxiosError = Os;
O.mergeConfig = z;
O.AxiosHeaders = N;
O.formToJSON = (e) => sn(f.isHTMLForm(e) ? new FormData(e) : e);
O.getAdapter = fn.getAdapter;
O.HttpStatusCode = Je;
O.default = O;
var Ts = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }, M = O.create({
  baseURL: Ts.VITE_APP_API ?? "/",
  timeout: 6e4
});
const Ni = (e, t, n, r) => {
  M = O.create(e), n || (n = (o) => Object.prototype.hasOwnProperty.call(o.data, "data") ? o.data.data : o.data), t && M.interceptors.request.use(t), r ? M.interceptors.response.use(n, r) : M.interceptors.response.use(n);
}, Pi = (e, t, n) => M.request({
  url: e,
  params: t,
  method: "GET",
  ...n
}), Ci = (e, t, n) => M.request({
  url: e,
  data: t,
  method: "POST",
  ...n
}), $i = (e, t, n) => M.request({
  url: e,
  data: t,
  method: "PUT",
  ...n
}), Bi = (e, t, n) => M.request({
  url: e,
  data: t,
  method: "DELETE",
  ...n
});
var As = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var st = { exports: {} };
function mn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ns } = Object.prototype, { getPrototypeOf: ot } = Object, Te = /* @__PURE__ */ ((e) => (t) => {
  const n = Ns.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => Te(t) === e), Ae = (e) => (t) => typeof t === e, { isArray: K } = Array, ee = Ae("undefined");
function Ps(e) {
  return e !== null && !ee(e) && e.constructor !== null && !ee(e.constructor) && B(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yn = j("ArrayBuffer");
function Cs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yn(e.buffer), t;
}
const $s = Ae("string"), B = Ae("function"), En = Ae("number"), xe = (e) => e !== null && typeof e == "object", Bs = (e) => e === !0 || e === !1, le = (e) => {
  if (Te(e) !== "object")
    return !1;
  const t = ot(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Fs = j("Date"), Ls = j("File"), _s = j("Blob"), Ds = j("FileList"), Us = (e) => xe(e) && B(e.pipe), js = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || B(e.append) && ((t = Te(e)) === "formdata" || // detect form-data instance
  t === "object" && B(e.toString) && e.toString() === "[object FormData]"));
}, ks = j("URLSearchParams"), [qs, vs, Ms, Hs] = ["ReadableStream", "Request", "Response", "Headers"].map(j), Is = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function re(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), K(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function wn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : As, Rn = (e) => !ee(e) && e !== bn;
function Ve() {
  const { caseless: e } = Rn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && wn(t, s) || s;
    le(t[o]) && le(r) ? t[o] = Ve(t[o], r) : le(r) ? t[o] = Ve({}, r) : K(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && re(arguments[r], n);
  return t;
}
const zs = (e, t, n, { allOwnKeys: r } = {}) => (re(t, (s, o) => {
  n && B(s) ? e[o] = mn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Js = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Vs = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ws = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && ot(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ks = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Gs = (e) => {
  if (!e) return null;
  if (K(e)) return e;
  let t = e.length;
  if (!En(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Xs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ot(Uint8Array)), Qs = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Zs = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ys = j("HTMLFormElement"), eo = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), xt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), to = j("RegExp"), Sn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  re(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, no = (e) => {
  Sn(e, (t, n) => {
    if (B(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (B(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ro = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return K(e) ? r(e) : r(String(e).split(t)), n;
}, so = () => {
}, oo = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, De = "abcdefghijklmnopqrstuvwxyz", Nt = "0123456789", gn = {
  DIGIT: Nt,
  ALPHA: De,
  ALPHA_DIGIT: De + De.toUpperCase() + Nt
}, io = (e = 16, t = gn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ao(e) {
  return !!(e && B(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const co = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (xe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = K(r) ? [] : {};
        return re(r, (i, a) => {
          const l = n(i, s + 1);
          !ee(l) && (o[a] = l);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, uo = j("AsyncFunction"), lo = (e) => e && (xe(e) || B(e)) && B(e.then) && B(e.catch);
var d = {
  isArray: K,
  isArrayBuffer: yn,
  isBuffer: Ps,
  isFormData: js,
  isArrayBufferView: Cs,
  isString: $s,
  isNumber: En,
  isBoolean: Bs,
  isObject: xe,
  isPlainObject: le,
  isReadableStream: qs,
  isRequest: vs,
  isResponse: Ms,
  isHeaders: Hs,
  isUndefined: ee,
  isDate: Fs,
  isFile: Ls,
  isBlob: _s,
  isRegExp: to,
  isFunction: B,
  isStream: Us,
  isURLSearchParams: ks,
  isTypedArray: Xs,
  isFileList: Ds,
  forEach: re,
  merge: Ve,
  extend: zs,
  trim: Is,
  stripBOM: Js,
  inherits: Vs,
  toFlatObject: Ws,
  kindOf: Te,
  kindOfTest: j,
  endsWith: Ks,
  toArray: Gs,
  forEachEntry: Qs,
  matchAll: Zs,
  isHTMLForm: Ys,
  hasOwnProperty: xt,
  hasOwnProp: xt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Sn,
  freezeMethods: no,
  toObjectSet: ro,
  toCamelCase: eo,
  noop: so,
  toFiniteNumber: oo,
  findKey: wn,
  global: bn,
  isContextDefined: Rn,
  ALPHABET: gn,
  generateString: io,
  isSpecCompliantForm: ao,
  toJSONObject: co,
  isAsyncFn: uo,
  isThenable: lo
};
function R(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
d.inherits(R, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const On = R.prototype, Tn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Tn[e] = { value: e };
});
Object.defineProperties(R, Tn);
Object.defineProperty(On, "isAxiosError", { value: !0 });
R.from = (e, t, n, r, s, o) => {
  const i = Object.create(On);
  return d.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), R.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
var fo = null;
function We(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function An(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Pt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = An(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function po(e) {
  return d.isArray(e) && !e.some(We);
}
const ho = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ne(e, t, n) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = d.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, S) {
    return !d.isUndefined(S[m]);
  });
  const r = n.metaTokens, s = n.visitor || c, o = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (d.isDate(h))
      return h.toISOString();
    if (!l && d.isBlob(h))
      throw new R("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(h) || d.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function c(h, m, S) {
    let g = h;
    if (h && !S && typeof h == "object") {
      if (d.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (d.isArray(h) && po(h) || (d.isFileList(h) || d.endsWith(m, "[]")) && (g = d.toArray(h)))
        return m = An(m), g.forEach(function(w, F) {
          !(d.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Pt([m], F, o) : i === null ? m : m + "[]",
            u(w)
          );
        }), !1;
    }
    return We(h) ? !0 : (t.append(Pt(S, m, o), u(h)), !1);
  }
  const p = [], y = Object.assign(ho, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: We
  });
  function E(h, m) {
    if (!d.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(h), d.forEach(h, function(g, A) {
        (!(d.isUndefined(g) || g === null) && s.call(
          t,
          g,
          d.isString(A) ? A.trim() : A,
          m,
          y
        )) === !0 && E(g, m ? m.concat(A) : [A]);
      }), p.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Ct(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function it(e, t) {
  this._pairs = [], e && Ne(e, this, t);
}
const xn = it.prototype;
xn.append = function(t, n) {
  this._pairs.push([t, n]);
};
xn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ct);
  } : Ct;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function mo(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Nn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || mo, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = d.isURLSearchParams(t) ? t.toString() : new it(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class yo {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    d.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
var $t = yo, Pn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Eo = typeof URLSearchParams < "u" ? URLSearchParams : it, wo = typeof FormData < "u" ? FormData : null, bo = typeof Blob < "u" ? Blob : null, Ro = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Eo,
    FormData: wo,
    Blob: bo
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const at = typeof window < "u" && typeof document < "u", So = ((e) => at && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), go = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Oo = at && window.location.href || "http://localhost";
var To = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: at,
  hasStandardBrowserWebWorkerEnv: go,
  hasStandardBrowserEnv: So,
  origin: Oo
}), _ = {
  ...To,
  ...Ro
};
function Ao(e, t) {
  return Ne(e, new _.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return _.isNode && d.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xo(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function No(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Cn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = o >= n.length;
    return i = !i && d.isArray(s) ? s.length : i, l ? (d.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !d.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && d.isArray(s[i]) && (s[i] = No(s[i])), !a);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const n = {};
    return d.forEachEntry(e, (r, s) => {
      t(xo(r), s, n, 0);
    }), n;
  }
  return null;
}
function Po(e, t, n) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const ct = {
  transitional: Pn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = d.isObject(t);
    if (o && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return s ? JSON.stringify(Cn(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ao(t, this.formSerializer).toString();
      if ((a = d.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ne(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Po(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ct.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (d.isResponse(t) || d.isReadableStream(t))
      return t;
    if (t && d.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? R.from(a, R.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _.classes.FormData,
    Blob: _.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ct.headers[e] = {};
});
var ut = ct;
const Co = d.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var $o = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Co[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
const Bt = Symbol("internals");
function Z(e) {
  return e && String(e).trim().toLowerCase();
}
function fe(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(fe) : String(e);
}
function Bo(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Fo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ue(e, t, n, r, s) {
  if (d.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!d.isString(t)) {
    if (d.isString(r))
      return t.indexOf(r) !== -1;
    if (d.isRegExp(r))
      return r.test(t);
  }
}
function Lo(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _o(e, t) {
  const n = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class Pe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, l, u) {
      const c = Z(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const p = d.findKey(s, c);
      (!p || s[p] === void 0 || u === !0 || u === void 0 && s[p] !== !1) && (s[p || l] = fe(a));
    }
    const i = (a, l) => d.forEach(a, (u, c) => o(u, c, l));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (d.isString(t) && (t = t.trim()) && !Fo(t))
      i($o(t), n);
    else if (d.isHeaders(t))
      for (const [a, l] of t.entries())
        o(l, a, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Z(t), t) {
      const r = d.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Bo(s);
        if (d.isFunction(n))
          return n.call(this, s, r);
        if (d.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Z(t), t) {
      const r = d.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ue(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Z(i), i) {
        const a = d.findKey(r, i);
        a && (!n || Ue(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return d.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ue(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return d.forEach(this, (s, o) => {
      const i = d.findKey(r, o);
      if (i) {
        n[i] = fe(s), delete n[o];
        return;
      }
      const a = t ? Lo(o) : String(o).trim();
      a !== o && delete n[o], n[a] = fe(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && d.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Bt] = this[Bt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = Z(i);
      r[a] || (_o(s, i), r[a] = !0);
    }
    return d.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(Pe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
d.freezeMethods(Pe);
var D = Pe;
function je(e, t) {
  const n = this || ut, r = t || n, s = D.from(r.headers);
  let o = r.data;
  return d.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function $n(e) {
  return !!(e && e.__CANCEL__);
}
function G(e, t, n) {
  R.call(this, e ?? "canceled", R.ERR_CANCELED, t, n), this.name = "CanceledError";
}
d.inherits(G, R, {
  __CANCEL__: !0
});
function Bn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new R(
    "Request failed with status code " + n.status,
    [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Do(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Uo(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = r[o];
    i || (i = u), n[s] = l, r[s] = u;
    let p = o, y = 0;
    for (; p !== s; )
      y += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const E = c && u - c;
    return E ? Math.round(y * 1e3 / E) : void 0;
  };
}
function jo(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let s = null;
  return function() {
    const i = this === !0, a = Date.now();
    if (i || a - n > r)
      return s && (clearTimeout(s), s = null), n = a, e.apply(null, arguments);
    s || (s = setTimeout(() => (s = null, n = Date.now(), e.apply(null, arguments)), r - (a - n)));
  };
}
var me = (e, t, n = 3) => {
  let r = 0;
  const s = Uo(50, 250);
  return jo((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = i - r, u = s(l), c = i <= a;
    r = i;
    const p = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
      event: o,
      lengthComputable: a != null
    };
    p[t ? "download" : "upload"] = !0, e(p);
  }, n);
}, ko = _.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const a = d.isString(i) ? s(i) : i;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), qo = _.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      d.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), d.isString(r) && i.push("path=" + r), d.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function vo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Mo(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Fn(e, t) {
  return e && !vo(t) ? Mo(e, t) : t;
}
const Ft = (e) => e instanceof D ? { ...e } : e;
function J(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, p) {
    return d.isPlainObject(u) && d.isPlainObject(c) ? d.merge.call({ caseless: p }, u, c) : d.isPlainObject(c) ? d.merge({}, c) : d.isArray(c) ? c.slice() : c;
  }
  function s(u, c, p) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(u))
        return r(void 0, u, p);
    } else return r(u, c, p);
  }
  function o(u, c) {
    if (!d.isUndefined(c))
      return r(void 0, c);
  }
  function i(u, c) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, p) {
    if (p in t)
      return r(u, c);
    if (p in e)
      return r(void 0, u);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, c) => s(Ft(u), Ft(c), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const p = l[c] || s, y = p(e[c], t[c], c);
    d.isUndefined(y) && p !== a || (n[c] = y);
  }), n;
}
var Ln = (e) => {
  const t = J({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  t.headers = i = D.from(i), t.url = Nn(Fn(t.baseURL, t.url), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (d.isFormData(n)) {
    if (_.hasStandardBrowserEnv || _.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [u, ...c] = l ? l.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (_.hasStandardBrowserEnv && (r && d.isFunction(r) && (r = r(t)), r || r !== !1 && ko(t.url))) {
    const u = s && o && qo.read(o);
    u && i.set(s, u);
  }
  return t;
};
const Ho = typeof XMLHttpRequest < "u";
var Io = Ho && function(e) {
  return new Promise(function(n, r) {
    const s = Ln(e);
    let o = s.data;
    const i = D.from(s.headers).normalize();
    let { responseType: a } = s, l;
    function u() {
      s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let c = new XMLHttpRequest();
    c.open(s.method.toUpperCase(), s.url, !0), c.timeout = s.timeout;
    function p() {
      if (!c)
        return;
      const E = D.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), m = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: E,
        config: e,
        request: c
      };
      Bn(function(g) {
        n(g), u();
      }, function(g) {
        r(g), u();
      }, m), c = null;
    }
    "onloadend" in c ? c.onloadend = p : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, c.onabort = function() {
      c && (r(new R("Request aborted", R.ECONNABORTED, s, c)), c = null);
    }, c.onerror = function() {
      r(new R("Network Error", R.ERR_NETWORK, s, c)), c = null;
    }, c.ontimeout = function() {
      let h = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const m = s.transitional || Pn;
      s.timeoutErrorMessage && (h = s.timeoutErrorMessage), r(new R(
        h,
        m.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,
        s,
        c
      )), c = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in c && d.forEach(i.toJSON(), function(h, m) {
      c.setRequestHeader(m, h);
    }), d.isUndefined(s.withCredentials) || (c.withCredentials = !!s.withCredentials), a && a !== "json" && (c.responseType = s.responseType), typeof s.onDownloadProgress == "function" && c.addEventListener("progress", me(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", me(s.onUploadProgress)), (s.cancelToken || s.signal) && (l = (E) => {
      c && (r(!E || E.type ? new G(null, e, c) : E), c.abort(), c = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const y = Do(s.url);
    if (y && _.protocols.indexOf(y) === -1) {
      r(new R("Unsupported protocol " + y + ":", R.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
};
const zo = (e, t) => {
  let n = new AbortController(), r;
  const s = function(l) {
    if (!r) {
      r = !0, i();
      const u = l instanceof Error ? l : this.reason;
      n.abort(u instanceof R ? u : new G(u instanceof Error ? u.message : u));
    }
  };
  let o = t && setTimeout(() => {
    s(new R(`timeout ${t} of ms exceeded`, R.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((l) => {
      l && (l.removeEventListener ? l.removeEventListener("abort", s) : l.unsubscribe(s));
    }), e = null);
  };
  e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", s));
  const { signal: a } = n;
  return a.unsubscribe = i, [a, () => {
    o && clearTimeout(o), o = null;
  }];
};
var Jo = zo;
const Vo = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Wo = async function* (e, t, n) {
  for await (const r of e)
    yield* Vo(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Lt = (e, t, n, r, s) => {
  const o = Wo(e, t, s);
  let i = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(a) {
      const { done: l, value: u } = await o.next();
      if (l) {
        a.close(), r();
        return;
      }
      let c = u.byteLength;
      n && n(i += c), a.enqueue(new Uint8Array(u));
    },
    cancel(a) {
      return r(a), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, _t = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, Ce = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", _n = Ce && typeof ReadableStream == "function", Ke = Ce && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ko = _n && (() => {
  let e = !1;
  const t = new Request(_.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), Dt = 64 * 1024, Ge = _n && !!(() => {
  try {
    return d.isReadableStream(new Response("").body);
  } catch {
  }
})(), ye = {
  stream: Ge && ((e) => e.body)
};
Ce && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ye[t] && (ye[t] = d.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new R(`Response type '${t}' is not supported`, R.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Go = async (e) => {
  if (e == null)
    return 0;
  if (d.isBlob(e))
    return e.size;
  if (d.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (d.isArrayBufferView(e))
    return e.byteLength;
  if (d.isURLSearchParams(e) && (e = e + ""), d.isString(e))
    return (await Ke(e)).byteLength;
}, Xo = async (e, t) => {
  const n = d.toFiniteNumber(e.getContentLength());
  return n ?? Go(t);
};
var Qo = Ce && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: u,
    headers: c,
    withCredentials: p = "same-origin",
    fetchOptions: y
  } = Ln(e);
  u = u ? (u + "").toLowerCase() : "text";
  let [E, h] = s || o || i ? Jo([s, o], i) : [], m, S;
  const g = () => {
    !m && setTimeout(() => {
      E && E.unsubscribe();
    }), m = !0;
  };
  let A;
  try {
    if (l && Ko && n !== "get" && n !== "head" && (A = await Xo(c, r)) !== 0) {
      let x = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      d.isFormData(r) && (P = x.headers.get("content-type")) && c.setContentType(P), x.body && (r = Lt(x.body, Dt, _t(
        A,
        me(l)
      ), null, Ke));
    }
    d.isString(p) || (p = p ? "cors" : "omit"), S = new Request(t, {
      ...y,
      signal: E,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: p
    });
    let w = await fetch(S);
    const F = Ge && (u === "stream" || u === "response");
    if (Ge && (a || F)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((X) => {
        x[X] = w[X];
      });
      const P = d.toFiniteNumber(w.headers.get("content-length"));
      w = new Response(
        Lt(w.body, Dt, a && _t(
          P,
          me(a, !0)
        ), F && g, Ke),
        x
      );
    }
    u = u || "text";
    let $e = await ye[d.findKey(ye, u) || "text"](w, e);
    return !F && g(), h && h(), await new Promise((x, P) => {
      Bn(x, P, {
        data: $e,
        headers: D.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: S
      });
    });
  } catch (w) {
    throw g(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new R("Network Error", R.ERR_NETWORK, e, S),
      {
        cause: w.cause || w
      }
    ) : R.from(w, w && w.code, e, S);
  }
});
const Xe = {
  http: fo,
  xhr: Io,
  fetch: Qo
};
d.forEach(Xe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ut = (e) => `- ${e}`, Zo = (e) => d.isFunction(e) || e === null || e === !1;
var Dn = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Zo(n) && (r = Xe[(i = String(n)).toLowerCase()], r === void 0))
        throw new R(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ut).join(`
`) : " " + Ut(o[0]) : "as no adapter specified";
      throw new R(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Xe
};
function ke(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new G(null, e);
}
function jt(e) {
  return ke(e), e.headers = D.from(e.headers), e.data = je.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Dn.getAdapter(e.adapter || ut.adapter)(e).then(function(r) {
    return ke(e), r.data = je.call(
      e,
      e.transformResponse,
      r
    ), r.headers = D.from(r.headers), r;
  }, function(r) {
    return $n(r) || (ke(e), r && r.response && (r.response.data = je.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = D.from(r.response.headers))), Promise.reject(r);
  });
}
const Un = "1.7.2", lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  lt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const kt = {};
lt.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Un + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new R(
        s(i, " has been removed" + (n ? " in " + n : "")),
        R.ERR_DEPRECATED
      );
    return n && !kt[i] && (kt[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
function Yo(e, t, n) {
  if (typeof e != "object")
    throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], l = a === void 0 || i(a, o, e);
      if (l !== !0)
        throw new R("option " + o + " must be " + l, R.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new R("Unknown option " + o, R.ERR_BAD_OPTION);
  }
}
var Qe = {
  assertOptions: Yo,
  validators: lt
};
const q = Qe.validators;
class Ee {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new $t(),
      response: new $t()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = J(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Qe.assertOptions(r, {
      silentJSONParsing: q.transitional(q.boolean),
      forcedJSONParsing: q.transitional(q.boolean),
      clarifyTimeoutError: q.transitional(q.boolean)
    }, !1), s != null && (d.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Qe.assertOptions(s, {
      encode: q.function,
      serialize: q.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && d.merge(
      o.common,
      o[n.method]
    );
    o && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = D.concat(i, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, p = 0, y;
    if (!l) {
      const h = [jt.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, u), y = h.length, c = Promise.resolve(n); p < y; )
        c = c.then(h[p++], h[p++]);
      return c;
    }
    y = a.length;
    let E = n;
    for (p = 0; p < y; ) {
      const h = a[p++], m = a[p++];
      try {
        E = h(E);
      } catch (S) {
        m.call(this, S);
        break;
      }
    }
    try {
      c = jt.call(this, E);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, y = u.length; p < y; )
      c = c.then(u[p++], u[p++]);
    return c;
  }
  getUri(t) {
    t = J(this.defaults, t);
    const n = Fn(t.baseURL, t.url);
    return Nn(n, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  Ee.prototype[t] = function(n, r) {
    return this.request(J(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(J(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Ee.prototype[t] = n(), Ee.prototype[t + "Form"] = n(!0);
});
var de = Ee;
class ft {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new G(o, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ft(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
var ei = ft;
function ti(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ni(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const Ze = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ze).forEach(([e, t]) => {
  Ze[t] = e;
});
var ri = Ze;
function jn(e) {
  const t = new de(e), n = mn(de.prototype.request, t);
  return d.extend(n, de.prototype, t, { allOwnKeys: !0 }), d.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return jn(J(e, s));
  }, n;
}
const T = jn(ut);
T.Axios = de;
T.CanceledError = G;
T.CancelToken = ei;
T.isCancel = $n;
T.VERSION = Un;
T.toFormData = Ne;
T.AxiosError = R;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = ti;
T.isAxiosError = ni;
T.mergeConfig = J;
T.AxiosHeaders = D;
T.formToJSON = (e) => Cn(d.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = Dn.getAdapter;
T.HttpStatusCode = ri;
T.default = T;
var si = T, oi = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, s, o;
    if (Array.isArray(t)) {
      if (r = t.length, r != n.length) return !1;
      for (s = r; s-- !== 0; )
        if (!e(t[s], n[s])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
    for (s = r; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[s])) return !1;
    for (s = r; s-- !== 0; ) {
      var i = o[s];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var ii = function(t) {
  return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
};
/*!
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function ai(e) {
  return typeof Blob > "u" ? !1 : e instanceof Blob || Object.prototype.toString.call(e) === "[object Blob]";
}
var ci = ai, qt = si, kn = oi, ui = ii, li = ci, qn = Object.prototype.toString;
function vn(e, t) {
  for (var n = e.length, r = 0; r < n; r++) {
    var s = e[r];
    if (t(s)) return s;
  }
}
function Mn(e) {
  return qn.call(e) === "[object Function]";
}
function Hn(e) {
  return e !== null && typeof e == "object";
}
function fi(e) {
  return Hn(e) && Mn(e.pipe);
}
function di(e) {
  return qn.call(e) === "[object ArrayBuffer]";
}
function vt(e, t) {
  return e ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : t;
}
function pi(e, t, n, r, s, o, i) {
  return vn(e[t.toLowerCase()], function(a) {
    if (typeof a[0] == "string")
      return (Mt(n, a[0]) || Mt(vt(i, n), a[0])) && Ye(t, r, s, a[1]) && we(o, a[2]);
    if (a[0] instanceof RegExp)
      return (a[0].test(n) || a[0].test(vt(i, n))) && Ye(t, r, s, a[1]) && we(o, a[2]);
  });
}
function Mt(e, t) {
  var n = e[0] === "/" ? e.substr(1) : e, r = t[0] === "/" ? t.substr(1) : t;
  return n === r;
}
function Ye(e, t, n, r) {
  var s = ["delete", "get", "head", "options"];
  if (s.indexOf(e.toLowerCase()) >= 0) {
    var o = r ? r.data : void 0, i = r ? r.params : void 0;
    return we(n, i) && Ht(t, o);
  } else
    return Ht(t, r);
}
function we(e, t) {
  return t === void 0 ? !0 : typeof t.asymmetricMatch == "function" ? t.asymmetricMatch(e) : kn(e, t);
}
function Ht(e, t) {
  if (t === void 0)
    return !0;
  var n;
  try {
    n = JSON.parse(e);
  } catch {
  }
  return we(n || e, t);
}
function hi(e, t) {
  Object.keys(e.handlers).forEach(function(n) {
    var r = e.handlers[n].indexOf(t);
    r > -1 && e.handlers[n].splice(r, 1);
  });
}
function In(e, t, n, r) {
  if (r > 0) {
    setTimeout(In, r, e, t, n);
    return;
  }
  !n.config.validateStatus || n.config.validateStatus(n.status) ? e(n) : t(
    zn(
      "Request failed with status code " + n.status,
      n.config,
      n
    )
  );
}
function zn(e, t, n, r) {
  if (typeof qt.AxiosError == "function")
    return qt.AxiosError.from(new Error(e), r, t, null, n);
  var s = new Error(e);
  return s.isAxiosError = !0, s.config = t, n !== void 0 && (s.response = n), r !== void 0 && (s.code = r), s.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  }, s;
}
function mi(e) {
  var t = `Could not find mock for: 
` + JSON.stringify(e, ["method", "url"], 2), n = new Error(t);
  return n.isCouldNotFindMockError = !0, n.url = e.url, n.method = e.method, n;
}
var Jn = {
  find: vn,
  findHandler: pi,
  purgeIfReplyOnce: hi,
  settle: In,
  isStream: fi,
  isArrayBuffer: di,
  isFunction: Mn,
  isObjectOrArray: Hn,
  isBuffer: ui,
  isBlob: li,
  isBodyOrParametersMatching: Ye,
  isEqual: kn,
  createAxiosError: zn,
  createCouldNotFindMockError: mi
}, C = Jn;
function yi(e) {
  return C.isArrayBuffer(e) || C.isBuffer(e) || C.isStream(e) || C.isBlob(e) ? e : C.isObjectOrArray(e) ? JSON.parse(JSON.stringify(e)) : e;
}
function oe(e, t) {
  return {
    status: e[0],
    data: yi(e[1]),
    headers: e[2],
    config: t,
    request: {
      responseURL: t.url
    }
  };
}
function It(e, t, n, r) {
  var s = r.baseURL;
  if (r.baseURL && !/^https?:/.test(r.baseURL) && (s = void 0), typeof e.originalAdapter == "function")
    return e.originalAdapter(r).then(t, n);
  e.axiosInstanceWithoutInterceptors(Object.assign({}, r, {
    baseURL: s,
    //  Use the original adapter, not the mock adapter
    adapter: e.originalAdapter,
    // The request transformation runs on the original axios handler already
    transformRequest: [],
    transformResponse: []
  })).then(t, n);
}
function Ei(e, t, n, r) {
  var s = r.url || "";
  r.baseURL && s.substr(0, r.baseURL.length) === r.baseURL && (s = s.slice(r.baseURL.length)), delete r.adapter, e.history[r.method].push(r);
  var o = C.findHandler(
    e.handlers,
    r.method,
    s,
    r.data,
    r.params,
    r.headers && r.headers.constructor.name === "AxiosHeaders" ? Object.assign({}, r.headers) : r.headers,
    r.baseURL
  );
  if (o)
    if (o.length === 7 && C.purgeIfReplyOnce(e, o), o.length === 2)
      It(e, t, n, r);
    else if (typeof o[3] != "function")
      C.settle(
        t,
        n,
        oe(o.slice(3), r),
        ie(e, o)
      );
    else {
      var i = o[3](r);
      typeof i.then != "function" ? C.settle(
        t,
        n,
        oe(i, r),
        ie(e, o)
      ) : i.then(
        function(a) {
          a.config && a.status ? C.settle(
            t,
            n,
            oe(
              [a.status, a.data, a.headers],
              a.config
            ),
            0
          ) : C.settle(
            t,
            n,
            oe(a, r),
            ie(e, o)
          );
        },
        function(a) {
          e.delayResponse > 0 ? setTimeout(function() {
            n(a);
          }, ie(e, o)) : n(a);
        }
      );
    }
  else
    switch (e.onNoMatch) {
      case "passthrough":
        It(e, t, n, r);
        break;
      case "throwException":
        throw C.createCouldNotFindMockError(r);
      default:
        C.settle(
          t,
          n,
          {
            status: 404,
            config: r
          },
          e.delayResponse
        );
    }
}
function ie(e, t) {
  var n;
  return t.length === 8 && (n = t[7]), n || e.delayResponse;
}
var wi = Ei, bi = wi, v = Jn, dt = [
  "get",
  "post",
  "head",
  "delete",
  "patch",
  "put",
  "options",
  "list",
  "link",
  "unlink"
];
function Ri() {
  return (function(e) {
    var t = this;
    return new Promise(function(n, r) {
      bi(t, n, r, e);
    });
  }).bind(this);
}
function Vn() {
  return dt.reduce(function(e, t) {
    return e[t] = [], e;
  }, {});
}
function Wn() {
  Kn.call(this), Gn.call(this);
}
function Kn() {
  this.handlers = Vn();
}
function Gn() {
  this.history = Vn();
}
function H(e, t) {
  if (Wn.call(this), e)
    this.axiosInstance = e, this.axiosInstanceWithoutInterceptors = e.create ? e.create() : void 0, this.originalAdapter = e.defaults.adapter, this.delayResponse = t && t.delayResponse > 0 ? t.delayResponse : null, this.onNoMatch = t && t.onNoMatch || null, e.defaults.adapter = this.adapter.call(this);
  else
    throw new Error("Please provide an instance of axios to mock");
}
H.prototype.adapter = Ri;
H.prototype.restore = function() {
  this.axiosInstance && (this.axiosInstance.defaults.adapter = this.originalAdapter, this.axiosInstance = void 0);
};
H.prototype.reset = Wn;
H.prototype.resetHandlers = Kn;
H.prototype.resetHistory = Gn;
dt.concat("any").forEach(function(e) {
  var t = "on" + e.charAt(0).toUpperCase() + e.slice(1);
  H.prototype[t] = function(i, r, s) {
    var o = this, i = i === void 0 ? /.*/ : i;
    function a(p, y, E) {
      var h = [i, r, s, p, y, E];
      return ae(e, o.handlers, h), o;
    }
    function l(p, y, E, h) {
      var m = [i, r, s, y, E, h, !1, p];
      return ae(e, o.handlers, m), o;
    }
    function u(p) {
      return function(y, E, h) {
        l(p, y, E, h);
      };
    }
    function c(p, y, E) {
      var h = [
        i,
        r,
        s,
        p,
        y,
        E,
        !0
      ];
      return ae(e, o.handlers, h), o;
    }
    return {
      reply: a,
      replyOnce: c,
      withDelayInMs: u,
      passThrough: function() {
        var y = [i, r];
        return ae(e, o.handlers, y), o;
      },
      abortRequest: function() {
        return a(function(p) {
          var y = v.createAxiosError(
            "Request aborted",
            p,
            void 0,
            "ECONNABORTED"
          );
          return Promise.reject(y);
        });
      },
      abortRequestOnce: function() {
        return c(function(p) {
          var y = v.createAxiosError(
            "Request aborted",
            p,
            void 0,
            "ECONNABORTED"
          );
          return Promise.reject(y);
        });
      },
      networkError: function() {
        return a(function(p) {
          var y = v.createAxiosError("Network Error", p);
          return Promise.reject(y);
        });
      },
      networkErrorOnce: function() {
        return c(function(p) {
          var y = v.createAxiosError("Network Error", p);
          return Promise.reject(y);
        });
      },
      timeout: function() {
        return a(function(p) {
          var y = v.createAxiosError(
            p.timeoutErrorMessage || "timeout of " + p.timeout + "ms exceeded",
            p,
            void 0,
            p.transitional && p.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED"
          );
          return Promise.reject(y);
        });
      },
      timeoutOnce: function() {
        return c(function(p) {
          var y = v.createAxiosError(
            p.timeoutErrorMessage || "timeout of " + p.timeout + "ms exceeded",
            p,
            void 0,
            p.transitional && p.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED"
          );
          return Promise.reject(y);
        });
      }
    };
  };
});
function Si(e, t, n) {
  for (var r = -1, s = 0; s < t[e].length; s += 1) {
    var o = t[e][s], i = o.length === 7, a = o[0] instanceof RegExp && n[0] instanceof RegExp ? String(o[0]) === String(n[0]) : o[0] === n[0], l = a && v.isEqual(o[1], n[1]) && v.isEqual(o[2], n[2]);
    l && !i && (r = s);
  }
  return r;
}
function ae(e, t, n) {
  if (e === "any")
    dt.forEach(function(s) {
      t[s].push(n);
    });
  else {
    var r = Si(e, t, n);
    r > -1 && n.length < 7 ? t[e].splice(r, 1, n) : t[e].push(n);
  }
}
st.exports = H;
st.exports.default = H;
var gi = st.exports;
const Xn = /* @__PURE__ */ xs(gi), Oi = O.create({
  baseURL: "/",
  timeout: 6e4
});
var se = new Xn(Oi);
const Fi = (e) => {
  const t = O.create(e);
  se = new Xn(t);
}, Li = (e, t) => se.onGet(e).reply(t), _i = (e, t) => se.onPost(e).reply(t), Di = (e, t) => se.onDelete(e).reply(t), Ui = (e, t) => se.onPut(e).reply(t);
export {
  Di as mockDelete,
  Li as mockGet,
  _i as mockPost,
  Ui as mockPut,
  Fi as publicMock,
  Ni as publicRequests,
  Bi as useDelete,
  Pi as useGet,
  Ci as usePost,
  $i as usePut
};
