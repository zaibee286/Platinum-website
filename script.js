var sc = e => {
    throw TypeError(e)
}
;
var Js = (e, t, n) => t.has(e) || sc("Cannot " + n);
var P = (e, t, n) => (Js(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , q = (e, t, n) => t.has(e) ? sc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (Js(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ce = (e, t, n) => (Js(e, t, "access private method"),
n);
var ri = (e, t, n, r) => ({
    set _(o) {
        H(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});
function s0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function of(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var sf = {
    exports: {}
}
  , xs = {}
  , lf = {
    exports: {}
}
  , K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo = Symbol.for("react.element")
  , l0 = Symbol.for("react.portal")
  , a0 = Symbol.for("react.fragment")
  , u0 = Symbol.for("react.strict_mode")
  , c0 = Symbol.for("react.profiler")
  , d0 = Symbol.for("react.provider")
  , f0 = Symbol.for("react.context")
  , p0 = Symbol.for("react.forward_ref")
  , h0 = Symbol.for("react.suspense")
  , m0 = Symbol.for("react.memo")
  , g0 = Symbol.for("react.lazy")
  , lc = Symbol.iterator;
function v0(e) {
    return e === null || typeof e != "object" ? null : (e = lc && e[lc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var af = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , uf = Object.assign
  , cf = {};
function Wr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = cf,
    this.updater = n || af
}
Wr.prototype.isReactComponent = {};
Wr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Wr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function df() {}
df.prototype = Wr.prototype;
function Va(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = cf,
    this.updater = n || af
}
var Ha = Va.prototype = new df;
Ha.constructor = Va;
uf(Ha, Wr.prototype);
Ha.isPureReactComponent = !0;
var ac = Array.isArray
  , ff = Object.prototype.hasOwnProperty
  , Wa = {
    current: null
}
  , pf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function hf(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            ff.call(t, r) && !pf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Qo,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Wa.current
    }
}
function y0(e, t) {
    return {
        $$typeof: Qo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Qa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Qo
}
function x0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var uc = /\/+/g;
function el(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? x0("" + e.key) : t.toString(36)
}
function Ni(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Qo:
            case l0:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + el(s, 0) : r,
        ac(o) ? (n = "",
        e != null && (n = e.replace(uc, "$&/") + "/"),
        Ni(o, t, n, "", function(u) {
            return u
        })) : o != null && (Qa(o) && (o = y0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(uc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    ac(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + el(i, l);
            s += Ni(i, t, n, a, o)
        }
    else if (a = v0(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + el(i, l++),
            s += Ni(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function oi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ni(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function w0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Le = {
    current: null
}
  , Pi = {
    transition: null
}
  , b0 = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: Pi,
    ReactCurrentOwner: Wa
};
function mf() {
    throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
    map: oi,
    forEach: function(e, t, n) {
        oi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return oi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return oi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Qa(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = Wr;
K.Fragment = a0;
K.Profiler = c0;
K.PureComponent = Va;
K.StrictMode = u0;
K.Suspense = h0;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b0;
K.act = mf;
K.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = uf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = Wa.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            ff.call(t, a) && !pf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Qo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
K.createContext = function(e) {
    return e = {
        $$typeof: f0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: d0,
        _context: e
    },
    e.Consumer = e
}
;
K.createElement = hf;
K.createFactory = function(e) {
    var t = hf.bind(null, e);
    return t.type = e,
    t
}
;
K.createRef = function() {
    return {
        current: null
    }
}
;
K.forwardRef = function(e) {
    return {
        $$typeof: p0,
        render: e
    }
}
;
K.isValidElement = Qa;
K.lazy = function(e) {
    return {
        $$typeof: g0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: w0
    }
}
;
K.memo = function(e, t) {
    return {
        $$typeof: m0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
K.startTransition = function(e) {
    var t = Pi.transition;
    Pi.transition = {};
    try {
        e()
    } finally {
        Pi.transition = t
    }
}
;
K.unstable_act = mf;
K.useCallback = function(e, t) {
    return Le.current.useCallback(e, t)
}
;
K.useContext = function(e) {
    return Le.current.useContext(e)
}
;
K.useDebugValue = function() {}
;
K.useDeferredValue = function(e) {
    return Le.current.useDeferredValue(e)
}
;
K.useEffect = function(e, t) {
    return Le.current.useEffect(e, t)
}
;
K.useId = function() {
    return Le.current.useId()
}
;
K.useImperativeHandle = function(e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
}
;
K.useInsertionEffect = function(e, t) {
    return Le.current.useInsertionEffect(e, t)
}
;
K.useLayoutEffect = function(e, t) {
    return Le.current.useLayoutEffect(e, t)
}
;
K.useMemo = function(e, t) {
    return Le.current.useMemo(e, t)
}
;
K.useReducer = function(e, t, n) {
    return Le.current.useReducer(e, t, n)
}
;
K.useRef = function(e) {
    return Le.current.useRef(e)
}
;
K.useState = function(e) {
    return Le.current.useState(e)
}
;
K.useSyncExternalStore = function(e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
}
;
K.useTransition = function() {
    return Le.current.useTransition()
}
;
K.version = "18.3.1";
lf.exports = K;
var w = lf.exports;
const A = of(w)
  , E0 = s0({
    __proto__: null,
    default: A
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S0 = w
  , k0 = Symbol.for("react.element")
  , C0 = Symbol.for("react.fragment")
  , N0 = Object.prototype.hasOwnProperty
  , P0 = S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , T0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function gf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        N0.call(t, r) && !T0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: k0,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: P0.current
    }
}
xs.Fragment = C0;
xs.jsx = gf;
xs.jsxs = gf;
sf.exports = xs;
var d = sf.exports
  , vf = {
    exports: {}
}
  , Je = {}
  , yf = {
    exports: {}
}
  , xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, R) {
        var z = k.length;
        k.push(R);
        e: for (; 0 < z; ) {
            var L = z - 1 >>> 1
              , F = k[L];
            if (0 < o(F, R))
                k[L] = R,
                k[z] = F,
                z = L;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var R = k[0]
          , z = k.pop();
        if (z !== R) {
            k[0] = z;
            e: for (var L = 0, F = k.length, Y = F >>> 1; L < Y; ) {
                var le = 2 * (L + 1) - 1
                  , He = k[le]
                  , Z = le + 1
                  , at = k[Z];
                if (0 > o(He, z))
                    Z < F && 0 > o(at, He) ? (k[L] = at,
                    k[Z] = z,
                    L = Z) : (k[L] = He,
                    k[le] = z,
                    L = le);
                else if (Z < F && 0 > o(at, z))
                    k[L] = at,
                    k[Z] = z,
                    L = Z;
                else
                    break e
            }
        }
        return R
    }
    function o(k, R) {
        var z = k.sortIndex - R.sortIndex;
        return z !== 0 ? z : k.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , f = 1
      , p = null
      , c = 3
      , y = !1
      , x = !1
      , v = !1
      , b = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(k) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= k)
                r(u),
                R.sortIndex = R.expirationTime,
                t(a, R);
            else
                break;
            R = n(u)
        }
    }
    function E(k) {
        if (v = !1,
        g(k),
        !x)
            if (n(a) !== null)
                x = !0,
                U(S);
            else {
                var R = n(u);
                R !== null && G(E, R.startTime - k)
            }
    }
    function S(k, R) {
        x = !1,
        v && (v = !1,
        m(T),
        T = -1),
        y = !0;
        var z = c;
        try {
            for (g(R),
            p = n(a); p !== null && (!(p.expirationTime > R) || k && !$()); ) {
                var L = p.callback;
                if (typeof L == "function") {
                    p.callback = null,
                    c = p.priorityLevel;
                    var F = L(p.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof F == "function" ? p.callback = F : p === n(a) && r(a),
                    g(R)
                } else
                    r(a);
                p = n(a)
            }
            if (p !== null)
                var Y = !0;
            else {
                var le = n(u);
                le !== null && G(E, le.startTime - R),
                Y = !1
            }
            return Y
        } finally {
            p = null,
            c = z,
            y = !1
        }
    }
    var C = !1
      , N = null
      , T = -1
      , I = 5
      , O = -1;
    function $() {
        return !(e.unstable_now() - O < I)
    }
    function D() {
        if (N !== null) {
            var k = e.unstable_now();
            O = k;
            var R = !0;
            try {
                R = N(!0, k)
            } finally {
                R ? W() : (C = !1,
                N = null)
            }
        } else
            C = !1
    }
    var W;
    if (typeof h == "function")
        W = function() {
            h(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
          , Q = M.port2;
        M.port1.onmessage = D,
        W = function() {
            Q.postMessage(null)
        }
    } else
        W = function() {
            b(D, 0)
        }
        ;
    function U(k) {
        N = k,
        C || (C = !0,
        W())
    }
    function G(k, R) {
        T = b(function() {
            k(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || y || (x = !0,
        U(S))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return c
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(k) {
        switch (c) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = c
        }
        var z = c;
        c = R;
        try {
            return k()
        } finally {
            c = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, R) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var z = c;
        c = k;
        try {
            return R()
        } finally {
            c = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, R, z) {
        var L = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? L + z : L) : z = L,
        k) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = z + F,
        k = {
            id: f++,
            callback: R,
            priorityLevel: k,
            startTime: z,
            expirationTime: F,
            sortIndex: -1
        },
        z > L ? (k.sortIndex = z,
        t(u, k),
        n(a) === null && k === n(u) && (v ? (m(T),
        T = -1) : v = !0,
        G(E, z - L))) : (k.sortIndex = F,
        t(a, k),
        x || y || (x = !0,
        U(S))),
        k
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(k) {
        var R = c;
        return function() {
            var z = c;
            c = R;
            try {
                return k.apply(this, arguments)
            } finally {
                c = z
            }
        }
    }
}
)(xf);
yf.exports = xf;
var j0 = yf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R0 = w
  , Ze = j0;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var wf = new Set
  , So = {};
function Zn(e, t) {
    Ir(e, t),
    Ir(e + "Capture", t)
}
function Ir(e, t) {
    for (So[e] = t,
    e = 0; e < t.length; e++)
        wf.add(t[e])
}
var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ml = Object.prototype.hasOwnProperty
  , A0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , cc = {}
  , dc = {};
function O0(e) {
    return Ml.call(dc, e) ? !0 : Ml.call(cc, e) ? !1 : A0.test(e) ? dc[e] = !0 : (cc[e] = !0,
    !1)
}
function M0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function _0(e, t, n, r) {
    if (t === null || typeof t > "u" || M0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ie(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new Ie(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ke[t] = new Ie(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new Ie(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new Ie(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new Ie(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new Ie(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Ga = /[\-:]([a-z])/g;
function Ka(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ga, Ka);
    ke[t] = new Ie(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ga, Ka);
    ke[t] = new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ga, Ka);
    ke[t] = new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ke.xlinkHref = new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ya(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_0(t, n, o, r) && (n = null),
    r || o === null ? O0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Gt = R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ii = Symbol.for("react.element")
  , sr = Symbol.for("react.portal")
  , lr = Symbol.for("react.fragment")
  , Xa = Symbol.for("react.strict_mode")
  , _l = Symbol.for("react.profiler")
  , bf = Symbol.for("react.provider")
  , Ef = Symbol.for("react.context")
  , qa = Symbol.for("react.forward_ref")
  , Ll = Symbol.for("react.suspense")
  , Il = Symbol.for("react.suspense_list")
  , Za = Symbol.for("react.memo")
  , rn = Symbol.for("react.lazy")
  , Sf = Symbol.for("react.offscreen")
  , fc = Symbol.iterator;
function Zr(e) {
    return e === null || typeof e != "object" ? null : (e = fc && e[fc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ce = Object.assign, tl;
function ao(e) {
    if (tl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            tl = t && t[1] || ""
        }
    return `
` + tl + e
}
var nl = !1;
function rl(e, t) {
    if (!e || nl)
        return "";
    nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        nl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ao(e) : ""
}
function L0(e) {
    switch (e.tag) {
    case 5:
        return ao(e.type);
    case 16:
        return ao("Lazy");
    case 13:
        return ao("Suspense");
    case 19:
        return ao("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = rl(e.type, !1),
        e;
    case 11:
        return e = rl(e.type.render, !1),
        e;
    case 1:
        return e = rl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Dl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case lr:
        return "Fragment";
    case sr:
        return "Portal";
    case _l:
        return "Profiler";
    case Xa:
        return "StrictMode";
    case Ll:
        return "Suspense";
    case Il:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ef:
            return (e.displayName || "Context") + ".Consumer";
        case bf:
            return (e._context.displayName || "Context") + ".Provider";
        case qa:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Za:
            return t = e.displayName || null,
            t !== null ? t : Dl(e.type) || "Memo";
        case rn:
            t = e._payload,
            e = e._init;
            try {
                return Dl(e(t))
            } catch {}
        }
    return null
}
function I0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Dl(t);
    case 8:
        return t === Xa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function kn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function kf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function D0(e) {
    var t = kf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function si(e) {
    e._valueTracker || (e._valueTracker = D0(e))
}
function Cf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = kf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ui(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function zl(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function pc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = kn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Nf(e, t) {
    t = t.checked,
    t != null && Ya(e, "checked", t, !1)
}
function Fl(e, t) {
    Nf(e, t);
    var n = kn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? $l(e, t.type, n) : t.hasOwnProperty("defaultValue") && $l(e, t.type, kn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function hc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function $l(e, t, n) {
    (t !== "number" || Ui(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var uo = Array.isArray;
function yr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + kn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Ul(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function mc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (uo(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: kn(n)
    }
}
function Pf(e, t) {
    var n = kn(t.value)
      , r = kn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function gc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Tf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Bl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var li, jf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (li = li || document.createElement("div"),
        li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = li.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ko(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var po = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , z0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(po).forEach(function(e) {
    z0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        po[t] = po[e]
    })
});
function Rf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || po.hasOwnProperty(e) && po[e] ? ("" + t).trim() : t + "px"
}
function Af(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Rf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var F0 = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Vl(e, t) {
    if (t) {
        if (F0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Hl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Wl = null;
function Ja(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ql = null
  , xr = null
  , wr = null;
function vc(e) {
    if (e = Yo(e)) {
        if (typeof Ql != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = ks(t),
        Ql(e.stateNode, e.type, t))
    }
}
function Of(e) {
    xr ? wr ? wr.push(e) : wr = [e] : xr = e
}
function Mf() {
    if (xr) {
        var e = xr
          , t = wr;
        if (wr = xr = null,
        vc(e),
        t)
            for (e = 0; e < t.length; e++)
                vc(t[e])
    }
}
function _f(e, t) {
    return e(t)
}
function Lf() {}
var ol = !1;
function If(e, t, n) {
    if (ol)
        return e(t, n);
    ol = !0;
    try {
        return _f(e, t, n)
    } finally {
        ol = !1,
        (xr !== null || wr !== null) && (Lf(),
        Mf())
    }
}
function Co(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ks(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var Gl = !1;
if (Ut)
    try {
        var Jr = {};
        Object.defineProperty(Jr, "passive", {
            get: function() {
                Gl = !0
            }
        }),
        window.addEventListener("test", Jr, Jr),
        window.removeEventListener("test", Jr, Jr)
    } catch {
        Gl = !1
    }
function $0(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var ho = !1
  , Bi = null
  , Vi = !1
  , Kl = null
  , U0 = {
    onError: function(e) {
        ho = !0,
        Bi = e
    }
};
function B0(e, t, n, r, o, i, s, l, a) {
    ho = !1,
    Bi = null,
    $0.apply(U0, arguments)
}
function V0(e, t, n, r, o, i, s, l, a) {
    if (B0.apply(this, arguments),
    ho) {
        if (ho) {
            var u = Bi;
            ho = !1,
            Bi = null
        } else
            throw Error(j(198));
        Vi || (Vi = !0,
        Kl = u)
    }
}
function Jn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Df(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function yc(e) {
    if (Jn(e) !== e)
        throw Error(j(188))
}
function H0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Jn(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return yc(o),
                    e;
                if (i === r)
                    return yc(o),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function zf(e) {
    return e = H0(e),
    e !== null ? Ff(e) : null
}
function Ff(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ff(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var $f = Ze.unstable_scheduleCallback
  , xc = Ze.unstable_cancelCallback
  , W0 = Ze.unstable_shouldYield
  , Q0 = Ze.unstable_requestPaint
  , he = Ze.unstable_now
  , G0 = Ze.unstable_getCurrentPriorityLevel
  , eu = Ze.unstable_ImmediatePriority
  , Uf = Ze.unstable_UserBlockingPriority
  , Hi = Ze.unstable_NormalPriority
  , K0 = Ze.unstable_LowPriority
  , Bf = Ze.unstable_IdlePriority
  , ws = null
  , jt = null;
function Y0(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function")
        try {
            jt.onCommitFiberRoot(ws, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Z0
  , X0 = Math.log
  , q0 = Math.LN2;
function Z0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (X0(e) / q0 | 0) | 0
}
var ai = 64
  , ui = 4194304;
function co(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Wi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = co(l) : (i &= s,
        i !== 0 && (r = co(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = co(s) : i !== 0 && (r = co(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - mt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function J0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function eg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - mt(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = J0(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function Yl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Vf() {
    var e = ai;
    return ai <<= 1,
    !(ai & 4194240) && (ai = 64),
    e
}
function il(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Go(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - mt(t),
    e[t] = n
}
function tg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - mt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function tu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - mt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var J = 0;
function Hf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Wf, nu, Qf, Gf, Kf, Xl = !1, ci = [], gn = null, vn = null, yn = null, No = new Map, Po = new Map, sn = [], ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        gn = null;
        break;
    case "dragenter":
    case "dragleave":
        vn = null;
        break;
    case "mouseover":
    case "mouseout":
        yn = null;
        break;
    case "pointerover":
    case "pointerout":
        No.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Po.delete(t.pointerId)
    }
}
function eo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Yo(t),
    t !== null && nu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function rg(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return gn = eo(gn, e, t, n, r, o),
        !0;
    case "dragenter":
        return vn = eo(vn, e, t, n, r, o),
        !0;
    case "mouseover":
        return yn = eo(yn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return No.set(i, eo(No.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Po.set(i, eo(Po.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Yf(e) {
    var t = In(e.target);
    if (t !== null) {
        var n = Jn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Df(n),
                t !== null) {
                    e.blockedOn = t,
                    Kf(e.priority, function() {
                        Qf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ti(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Wl = r,
            n.target.dispatchEvent(r),
            Wl = null
        } else
            return t = Yo(n),
            t !== null && nu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function bc(e, t, n) {
    Ti(e) && n.delete(t)
}
function og() {
    Xl = !1,
    gn !== null && Ti(gn) && (gn = null),
    vn !== null && Ti(vn) && (vn = null),
    yn !== null && Ti(yn) && (yn = null),
    No.forEach(bc),
    Po.forEach(bc)
}
function to(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Xl || (Xl = !0,
    Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, og)))
}
function To(e) {
    function t(o) {
        return to(o, e)
    }
    if (0 < ci.length) {
        to(ci[0], e);
        for (var n = 1; n < ci.length; n++) {
            var r = ci[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (gn !== null && to(gn, e),
    vn !== null && to(vn, e),
    yn !== null && to(yn, e),
    No.forEach(t),
    Po.forEach(t),
    n = 0; n < sn.length; n++)
        r = sn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < sn.length && (n = sn[0],
    n.blockedOn === null); )
        Yf(n),
        n.blockedOn === null && sn.shift()
}
var br = Gt.ReactCurrentBatchConfig
  , Qi = !0;
function ig(e, t, n, r) {
    var o = J
      , i = br.transition;
    br.transition = null;
    try {
        J = 1,
        ru(e, t, n, r)
    } finally {
        J = o,
        br.transition = i
    }
}
function sg(e, t, n, r) {
    var o = J
      , i = br.transition;
    br.transition = null;
    try {
        J = 4,
        ru(e, t, n, r)
    } finally {
        J = o,
        br.transition = i
    }
}
function ru(e, t, n, r) {
    if (Qi) {
        var o = ql(e, t, n, r);
        if (o === null)
            ml(e, t, r, Gi, n),
            wc(e, r);
        else if (rg(o, e, t, n, r))
            r.stopPropagation();
        else if (wc(e, r),
        t & 4 && -1 < ng.indexOf(e)) {
            for (; o !== null; ) {
                var i = Yo(o);
                if (i !== null && Wf(i),
                i = ql(e, t, n, r),
                i === null && ml(e, t, r, Gi, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            ml(e, t, r, null, n)
    }
}
var Gi = null;
function ql(e, t, n, r) {
    if (Gi = null,
    e = Ja(r),
    e = In(e),
    e !== null)
        if (t = Jn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Df(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Gi = e,
    null
}
function Xf(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (G0()) {
        case eu:
            return 1;
        case Uf:
            return 4;
        case Hi:
        case K0:
            return 16;
        case Bf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var pn = null
  , ou = null
  , ji = null;
function qf() {
    if (ji)
        return ji;
    var e, t = ou, n = t.length, r, o = "value"in pn ? pn.value : pn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return ji = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Ri(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function di() {
    return !0
}
function Ec() {
    return !1
}
function et(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? di : Ec,
        this.isPropagationStopped = Ec,
        this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = di)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = di)
        },
        persist: function() {},
        isPersistent: di
    }),
    t
}
var Qr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, iu = et(Qr), Ko = ce({}, Qr, {
    view: 0,
    detail: 0
}), lg = et(Ko), sl, ll, no, bs = ce({}, Ko, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: su,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== no && (no && e.type === "mousemove" ? (sl = e.screenX - no.screenX,
        ll = e.screenY - no.screenY) : ll = sl = 0,
        no = e),
        sl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ll
    }
}), Sc = et(bs), ag = ce({}, bs, {
    dataTransfer: 0
}), ug = et(ag), cg = ce({}, Ko, {
    relatedTarget: 0
}), al = et(cg), dg = ce({}, Qr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), fg = et(dg), pg = ce({}, Qr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), hg = et(pg), mg = ce({}, Qr, {
    data: 0
}), kc = et(mg), gg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, vg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, yg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function xg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = yg[e]) ? !!t[e] : !1
}
function su() {
    return xg
}
var wg = ce({}, Ko, {
    key: function(e) {
        if (e.key) {
            var t = gg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ri(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: su,
    charCode: function(e) {
        return e.type === "keypress" ? Ri(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ri(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , bg = et(wg)
  , Eg = ce({}, bs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Cc = et(Eg)
  , Sg = ce({}, Ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su
})
  , kg = et(Sg)
  , Cg = ce({}, Qr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Ng = et(Cg)
  , Pg = ce({}, bs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Tg = et(Pg)
  , jg = [9, 13, 27, 32]
  , lu = Ut && "CompositionEvent"in window
  , mo = null;
Ut && "documentMode"in document && (mo = document.documentMode);
var Rg = Ut && "TextEvent"in window && !mo
  , Zf = Ut && (!lu || mo && 8 < mo && 11 >= mo)
  , Nc = " "
  , Pc = !1;
function Jf(e, t) {
    switch (e) {
    case "keyup":
        return jg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ep(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ar = !1;
function Ag(e, t) {
    switch (e) {
    case "compositionend":
        return ep(t);
    case "keypress":
        return t.which !== 32 ? null : (Pc = !0,
        Nc);
    case "textInput":
        return e = t.data,
        e === Nc && Pc ? null : e;
    default:
        return null
    }
}
function Og(e, t) {
    if (ar)
        return e === "compositionend" || !lu && Jf(e, t) ? (e = qf(),
        ji = ou = pn = null,
        ar = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Zf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Mg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Mg[e.type] : t === "textarea"
}
function tp(e, t, n, r) {
    Of(r),
    t = Ki(t, "onChange"),
    0 < t.length && (n = new iu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var go = null
  , jo = null;
function _g(e) {
    fp(e, 0)
}
function Es(e) {
    var t = dr(e);
    if (Cf(t))
        return e
}
function Lg(e, t) {
    if (e === "change")
        return t
}
var np = !1;
if (Ut) {
    var ul;
    if (Ut) {
        var cl = "oninput"in document;
        if (!cl) {
            var jc = document.createElement("div");
            jc.setAttribute("oninput", "return;"),
            cl = typeof jc.oninput == "function"
        }
        ul = cl
    } else
        ul = !1;
    np = ul && (!document.documentMode || 9 < document.documentMode)
}
function Rc() {
    go && (go.detachEvent("onpropertychange", rp),
    jo = go = null)
}
function rp(e) {
    if (e.propertyName === "value" && Es(jo)) {
        var t = [];
        tp(t, jo, e, Ja(e)),
        If(_g, t)
    }
}
function Ig(e, t, n) {
    e === "focusin" ? (Rc(),
    go = t,
    jo = n,
    go.attachEvent("onpropertychange", rp)) : e === "focusout" && Rc()
}
function Dg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Es(jo)
}
function zg(e, t) {
    if (e === "click")
        return Es(t)
}
function Fg(e, t) {
    if (e === "input" || e === "change")
        return Es(t)
}
function $g(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var vt = typeof Object.is == "function" ? Object.is : $g;
function Ro(e, t) {
    if (vt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ml.call(t, o) || !vt(e[o], t[o]))
            return !1
    }
    return !0
}
function Ac(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Oc(e, t) {
    var n = Ac(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ac(n)
    }
}
function op(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? op(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function ip() {
    for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ui(e.document)
    }
    return t
}
function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Ug(e) {
    var t = ip()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && op(n.ownerDocument.documentElement, n)) {
        if (r !== null && au(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Oc(n, i);
                var s = Oc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Bg = Ut && "documentMode"in document && 11 >= document.documentMode
  , ur = null
  , Zl = null
  , vo = null
  , Jl = !1;
function Mc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Jl || ur == null || ur !== Ui(r) || (r = ur,
    "selectionStart"in r && au(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    vo && Ro(vo, r) || (vo = r,
    r = Ki(Zl, "onSelect"),
    0 < r.length && (t = new iu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ur)))
}
function fi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var cr = {
    animationend: fi("Animation", "AnimationEnd"),
    animationiteration: fi("Animation", "AnimationIteration"),
    animationstart: fi("Animation", "AnimationStart"),
    transitionend: fi("Transition", "TransitionEnd")
}
  , dl = {}
  , sp = {};
Ut && (sp = document.createElement("div").style,
"AnimationEvent"in window || (delete cr.animationend.animation,
delete cr.animationiteration.animation,
delete cr.animationstart.animation),
"TransitionEvent"in window || delete cr.transitionend.transition);
function Ss(e) {
    if (dl[e])
        return dl[e];
    if (!cr[e])
        return e;
    var t = cr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in sp)
            return dl[e] = t[n];
    return e
}
var lp = Ss("animationend")
  , ap = Ss("animationiteration")
  , up = Ss("animationstart")
  , cp = Ss("transitionend")
  , dp = new Map
  , _c = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rn(e, t) {
    dp.set(e, t),
    Zn(t, [e])
}
for (var fl = 0; fl < _c.length; fl++) {
    var pl = _c[fl]
      , Vg = pl.toLowerCase()
      , Hg = pl[0].toUpperCase() + pl.slice(1);
    Rn(Vg, "on" + Hg)
}
Rn(lp, "onAnimationEnd");
Rn(ap, "onAnimationIteration");
Rn(up, "onAnimationStart");
Rn("dblclick", "onDoubleClick");
Rn("focusin", "onFocus");
Rn("focusout", "onBlur");
Rn(cp, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
Zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Wg = new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));
function Lc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    V0(r, t, void 0, e),
    e.currentTarget = null
}
function fp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Lc(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Lc(o, l, u),
                    i = a
                }
        }
    }
    if (Vi)
        throw e = Kl,
        Vi = !1,
        Kl = null,
        e
}
function oe(e, t) {
    var n = t[oa];
    n === void 0 && (n = t[oa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (pp(t, e, 2, !1),
    n.add(r))
}
function hl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    pp(n, e, r, t)
}
var pi = "_reactListening" + Math.random().toString(36).slice(2);
function Ao(e) {
    if (!e[pi]) {
        e[pi] = !0,
        wf.forEach(function(n) {
            n !== "selectionchange" && (Wg.has(n) || hl(n, !1, e),
            hl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[pi] || (t[pi] = !0,
        hl("selectionchange", !1, t))
    }
}
function pp(e, t, n, r) {
    switch (Xf(t)) {
    case 1:
        var o = ig;
        break;
    case 4:
        o = sg;
        break;
    default:
        o = ru
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Gl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function ml(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = In(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    If(function() {
        var u = i
          , f = Ja(n)
          , p = [];
        e: {
            var c = dp.get(e);
            if (c !== void 0) {
                var y = iu
                  , x = e;
                switch (e) {
                case "keypress":
                    if (Ri(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = bg;
                    break;
                case "focusin":
                    x = "focus",
                    y = al;
                    break;
                case "focusout":
                    x = "blur",
                    y = al;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = al;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Sc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = ug;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = kg;
                    break;
                case lp:
                case ap:
                case up:
                    y = fg;
                    break;
                case cp:
                    y = Ng;
                    break;
                case "scroll":
                    y = lg;
                    break;
                case "wheel":
                    y = Tg;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = hg;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Cc
                }
                var v = (t & 4) !== 0
                  , b = !v && e === "scroll"
                  , m = v ? c !== null ? c + "Capture" : null : c;
                v = [];
                for (var h = u, g; h !== null; ) {
                    g = h;
                    var E = g.stateNode;
                    if (g.tag === 5 && E !== null && (g = E,
                    m !== null && (E = Co(h, m),
                    E != null && v.push(Oo(h, E, g)))),
                    b)
                        break;
                    h = h.return
                }
                0 < v.length && (c = new y(c,x,null,n,f),
                p.push({
                    event: c,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                c && n !== Wl && (x = n.relatedTarget || n.fromElement) && (In(x) || x[Bt]))
                    break e;
                if ((y || c) && (c = f.window === f ? f : (c = f.ownerDocument) ? c.defaultView || c.parentWindow : window,
                y ? (x = n.relatedTarget || n.toElement,
                y = u,
                x = x ? In(x) : null,
                x !== null && (b = Jn(x),
                x !== b || x.tag !== 5 && x.tag !== 6) && (x = null)) : (y = null,
                x = u),
                y !== x)) {
                    if (v = Sc,
                    E = "onMouseLeave",
                    m = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Cc,
                    E = "onPointerLeave",
                    m = "onPointerEnter",
                    h = "pointer"),
                    b = y == null ? c : dr(y),
                    g = x == null ? c : dr(x),
                    c = new v(E,h + "leave",y,n,f),
                    c.target = b,
                    c.relatedTarget = g,
                    E = null,
                    In(f) === u && (v = new v(m,h + "enter",x,n,f),
                    v.target = g,
                    v.relatedTarget = b,
                    E = v),
                    b = E,
                    y && x)
                        t: {
                            for (v = y,
                            m = x,
                            h = 0,
                            g = v; g; g = ir(g))
                                h++;
                            for (g = 0,
                            E = m; E; E = ir(E))
                                g++;
                            for (; 0 < h - g; )
                                v = ir(v),
                                h--;
                            for (; 0 < g - h; )
                                m = ir(m),
                                g--;
                            for (; h--; ) {
                                if (v === m || m !== null && v === m.alternate)
                                    break t;
                                v = ir(v),
                                m = ir(m)
                            }
                            v = null
                        }
                    else
                        v = null;
                    y !== null && Ic(p, c, y, v, !1),
                    x !== null && b !== null && Ic(p, b, x, v, !0)
                }
            }
            e: {
                if (c = u ? dr(u) : window,
                y = c.nodeName && c.nodeName.toLowerCase(),
                y === "select" || y === "input" && c.type === "file")
                    var S = Lg;
                else if (Tc(c))
                    if (np)
                        S = Fg;
                    else {
                        S = Dg;
                        var C = Ig
                    }
                else
                    (y = c.nodeName) && y.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (S = zg);
                if (S && (S = S(e, u))) {
                    tp(p, S, n, f);
                    break e
                }
                C && C(e, c, u),
                e === "focusout" && (C = c._wrapperState) && C.controlled && c.type === "number" && $l(c, "number", c.value)
            }
            switch (C = u ? dr(u) : window,
            e) {
            case "focusin":
                (Tc(C) || C.contentEditable === "true") && (ur = C,
                Zl = u,
                vo = null);
                break;
            case "focusout":
                vo = Zl = ur = null;
                break;
            case "mousedown":
                Jl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Jl = !1,
                Mc(p, n, f);
                break;
            case "selectionchange":
                if (Bg)
                    break;
            case "keydown":
            case "keyup":
                Mc(p, n, f)
            }
            var N;
            if (lu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                ar ? Jf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (Zf && n.locale !== "ko" && (ar || T !== "onCompositionStart" ? T === "onCompositionEnd" && ar && (N = qf()) : (pn = f,
            ou = "value"in pn ? pn.value : pn.textContent,
            ar = !0)),
            C = Ki(u, T),
            0 < C.length && (T = new kc(T,e,null,n,f),
            p.push({
                event: T,
                listeners: C
            }),
            N ? T.data = N : (N = ep(n),
            N !== null && (T.data = N)))),
            (N = Rg ? Ag(e, n) : Og(e, n)) && (u = Ki(u, "onBeforeInput"),
            0 < u.length && (f = new kc("onBeforeInput","beforeinput",null,n,f),
            p.push({
                event: f,
                listeners: u
            }),
            f.data = N))
        }
        fp(p, t)
    })
}
function Oo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ki(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Co(e, n),
        i != null && r.unshift(Oo(e, i, o)),
        i = Co(e, t),
        i != null && r.push(Oo(e, i, o))),
        e = e.return
    }
    return r
}
function ir(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ic(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = Co(n, i),
        a != null && s.unshift(Oo(n, a, l))) : o || (a = Co(n, i),
        a != null && s.push(Oo(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Qg = /\r\n?/g
  , Gg = /\u0000|\uFFFD/g;
function Dc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Qg, `
`).replace(Gg, "")
}
function hi(e, t, n) {
    if (t = Dc(t),
    Dc(e) !== t && n)
        throw Error(j(425))
}
function Yi() {}
var ea = null
  , ta = null;
function na(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ra = typeof setTimeout == "function" ? setTimeout : void 0
  , Kg = typeof clearTimeout == "function" ? clearTimeout : void 0
  , zc = typeof Promise == "function" ? Promise : void 0
  , Yg = typeof queueMicrotask == "function" ? queueMicrotask : typeof zc < "u" ? function(e) {
    return zc.resolve(null).then(e).catch(Xg)
}
: ra;
function Xg(e) {
    setTimeout(function() {
        throw e
    })
}
function gl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    To(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    To(t)
}
function xn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Fc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Gr = Math.random().toString(36).slice(2)
  , Tt = "__reactFiber$" + Gr
  , Mo = "__reactProps$" + Gr
  , Bt = "__reactContainer$" + Gr
  , oa = "__reactEvents$" + Gr
  , qg = "__reactListeners$" + Gr
  , Zg = "__reactHandles$" + Gr;
function In(e) {
    var t = e[Tt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Bt] || n[Tt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Fc(e); e !== null; ) {
                    if (n = e[Tt])
                        return n;
                    e = Fc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Yo(e) {
    return e = e[Tt] || e[Bt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function dr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function ks(e) {
    return e[Mo] || null
}
var ia = []
  , fr = -1;
function An(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > fr || (e.current = ia[fr],
    ia[fr] = null,
    fr--)
}
function te(e, t) {
    fr++,
    ia[fr] = e.current,
    e.current = t
}
var Cn = {}
  , Re = An(Cn)
  , Fe = An(!1)
  , Wn = Cn;
function Dr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Cn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function $e(e) {
    return e = e.childContextTypes,
    e != null
}
function Xi() {
    ie(Fe),
    ie(Re)
}
function $c(e, t, n) {
    if (Re.current !== Cn)
        throw Error(j(168));
    te(Re, t),
    te(Fe, n)
}
function hp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, I0(e) || "Unknown", o));
    return ce({}, n, r)
}
function qi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Cn,
    Wn = Re.current,
    te(Re, e),
    te(Fe, Fe.current),
    !0
}
function Uc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = hp(e, t, Wn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(Fe),
    ie(Re),
    te(Re, e)) : ie(Fe),
    te(Fe, n)
}
var Dt = null
  , Cs = !1
  , vl = !1;
function mp(e) {
    Dt === null ? Dt = [e] : Dt.push(e)
}
function Jg(e) {
    Cs = !0,
    mp(e)
}
function On() {
    if (!vl && Dt !== null) {
        vl = !0;
        var e = 0
          , t = J;
        try {
            var n = Dt;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Dt = null,
            Cs = !1
        } catch (o) {
            throw Dt !== null && (Dt = Dt.slice(e + 1)),
            $f(eu, On),
            o
        } finally {
            J = t,
            vl = !1
        }
    }
    return null
}
var pr = []
  , hr = 0
  , Zi = null
  , Ji = 0
  , nt = []
  , rt = 0
  , Qn = null
  , zt = 1
  , Ft = "";
function _n(e, t) {
    pr[hr++] = Ji,
    pr[hr++] = Zi,
    Zi = e,
    Ji = t
}
function gp(e, t, n) {
    nt[rt++] = zt,
    nt[rt++] = Ft,
    nt[rt++] = Qn,
    Qn = e;
    var r = zt;
    e = Ft;
    var o = 32 - mt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - mt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        zt = 1 << 32 - mt(t) + o | n << o | r,
        Ft = i + e
    } else
        zt = 1 << i | n << o | r,
        Ft = e
}
function uu(e) {
    e.return !== null && (_n(e, 1),
    gp(e, 1, 0))
}
function cu(e) {
    for (; e === Zi; )
        Zi = pr[--hr],
        pr[hr] = null,
        Ji = pr[--hr],
        pr[hr] = null;
    for (; e === Qn; )
        Qn = nt[--rt],
        nt[rt] = null,
        Ft = nt[--rt],
        nt[rt] = null,
        zt = nt[--rt],
        nt[rt] = null
}
var Xe = null
  , Ye = null
  , se = !1
  , ht = null;
function vp(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Bc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ye = xn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ye = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Qn !== null ? {
            id: zt,
            overflow: Ft
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ot(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Xe = e,
        Ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function sa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function la(e) {
    if (se) {
        var t = Ye;
        if (t) {
            var n = t;
            if (!Bc(e, t)) {
                if (sa(e))
                    throw Error(j(418));
                t = xn(n.nextSibling);
                var r = Xe;
                t && Bc(e, t) ? vp(r, n) : (e.flags = e.flags & -4097 | 2,
                se = !1,
                Xe = e)
            }
        } else {
            if (sa(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            se = !1,
            Xe = e
        }
    }
}
function Vc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Xe = e
}
function mi(e) {
    if (e !== Xe)
        return !1;
    if (!se)
        return Vc(e),
        se = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !na(e.type, e.memoizedProps)),
    t && (t = Ye)) {
        if (sa(e))
            throw yp(),
            Error(j(418));
        for (; t; )
            vp(e, t),
            t = xn(t.nextSibling)
    }
    if (Vc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ye = xn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ye = null
        }
    } else
        Ye = Xe ? xn(e.stateNode.nextSibling) : null;
    return !0
}
function yp() {
    for (var e = Ye; e; )
        e = xn(e.nextSibling)
}
function zr() {
    Ye = Xe = null,
    se = !1
}
function du(e) {
    ht === null ? ht = [e] : ht.push(e)
}
var ev = Gt.ReactCurrentBatchConfig;
function ro(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function gi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Hc(e) {
    var t = e._init;
    return t(e._payload)
}
function xp(e) {
    function t(m, h) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [h],
            m.flags |= 16) : g.push(h)
        }
    }
    function n(m, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(m, h),
            h = h.sibling;
        return null
    }
    function r(m, h) {
        for (m = new Map; h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
            h = h.sibling;
        return m
    }
    function o(m, h) {
        return m = Sn(m, h),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, h, g) {
        return m.index = g,
        e ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < h ? (m.flags |= 2,
        h) : g) : (m.flags |= 2,
        h)) : (m.flags |= 1048576,
        h)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, h, g, E) {
        return h === null || h.tag !== 6 ? (h = kl(g, m.mode, E),
        h.return = m,
        h) : (h = o(h, g),
        h.return = m,
        h)
    }
    function a(m, h, g, E) {
        var S = g.type;
        return S === lr ? f(m, h, g.props.children, E, g.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === rn && Hc(S) === h.type) ? (E = o(h, g.props),
        E.ref = ro(m, h, g),
        E.return = m,
        E) : (E = Di(g.type, g.key, g.props, null, m.mode, E),
        E.ref = ro(m, h, g),
        E.return = m,
        E)
    }
    function u(m, h, g, E) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Cl(g, m.mode, E),
        h.return = m,
        h) : (h = o(h, g.children || []),
        h.return = m,
        h)
    }
    function f(m, h, g, E, S) {
        return h === null || h.tag !== 7 ? (h = Hn(g, m.mode, E, S),
        h.return = m,
        h) : (h = o(h, g),
        h.return = m,
        h)
    }
    function p(m, h, g) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = kl("" + h, m.mode, g),
            h.return = m,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case ii:
                return g = Di(h.type, h.key, h.props, null, m.mode, g),
                g.ref = ro(m, null, h),
                g.return = m,
                g;
            case sr:
                return h = Cl(h, m.mode, g),
                h.return = m,
                h;
            case rn:
                var E = h._init;
                return p(m, E(h._payload), g)
            }
            if (uo(h) || Zr(h))
                return h = Hn(h, m.mode, g, null),
                h.return = m,
                h;
            gi(m, h)
        }
        return null
    }
    function c(m, h, g, E) {
        var S = h !== null ? h.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return S !== null ? null : l(m, h, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case ii:
                return g.key === S ? a(m, h, g, E) : null;
            case sr:
                return g.key === S ? u(m, h, g, E) : null;
            case rn:
                return S = g._init,
                c(m, h, S(g._payload), E)
            }
            if (uo(g) || Zr(g))
                return S !== null ? null : f(m, h, g, E, null);
            gi(m, g)
        }
        return null
    }
    function y(m, h, g, E, S) {
        if (typeof E == "string" && E !== "" || typeof E == "number")
            return m = m.get(g) || null,
            l(h, m, "" + E, S);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
            case ii:
                return m = m.get(E.key === null ? g : E.key) || null,
                a(h, m, E, S);
            case sr:
                return m = m.get(E.key === null ? g : E.key) || null,
                u(h, m, E, S);
            case rn:
                var C = E._init;
                return y(m, h, g, C(E._payload), S)
            }
            if (uo(E) || Zr(E))
                return m = m.get(g) || null,
                f(h, m, E, S, null);
            gi(h, E)
        }
        return null
    }
    function x(m, h, g, E) {
        for (var S = null, C = null, N = h, T = h = 0, I = null; N !== null && T < g.length; T++) {
            N.index > T ? (I = N,
            N = null) : I = N.sibling;
            var O = c(m, N, g[T], E);
            if (O === null) {
                N === null && (N = I);
                break
            }
            e && N && O.alternate === null && t(m, N),
            h = i(O, h, T),
            C === null ? S = O : C.sibling = O,
            C = O,
            N = I
        }
        if (T === g.length)
            return n(m, N),
            se && _n(m, T),
            S;
        if (N === null) {
            for (; T < g.length; T++)
                N = p(m, g[T], E),
                N !== null && (h = i(N, h, T),
                C === null ? S = N : C.sibling = N,
                C = N);
            return se && _n(m, T),
            S
        }
        for (N = r(m, N); T < g.length; T++)
            I = y(N, m, T, g[T], E),
            I !== null && (e && I.alternate !== null && N.delete(I.key === null ? T : I.key),
            h = i(I, h, T),
            C === null ? S = I : C.sibling = I,
            C = I);
        return e && N.forEach(function($) {
            return t(m, $)
        }),
        se && _n(m, T),
        S
    }
    function v(m, h, g, E) {
        var S = Zr(g);
        if (typeof S != "function")
            throw Error(j(150));
        if (g = S.call(g),
        g == null)
            throw Error(j(151));
        for (var C = S = null, N = h, T = h = 0, I = null, O = g.next(); N !== null && !O.done; T++,
        O = g.next()) {
            N.index > T ? (I = N,
            N = null) : I = N.sibling;
            var $ = c(m, N, O.value, E);
            if ($ === null) {
                N === null && (N = I);
                break
            }
            e && N && $.alternate === null && t(m, N),
            h = i($, h, T),
            C === null ? S = $ : C.sibling = $,
            C = $,
            N = I
        }
        if (O.done)
            return n(m, N),
            se && _n(m, T),
            S;
        if (N === null) {
            for (; !O.done; T++,
            O = g.next())
                O = p(m, O.value, E),
                O !== null && (h = i(O, h, T),
                C === null ? S = O : C.sibling = O,
                C = O);
            return se && _n(m, T),
            S
        }
        for (N = r(m, N); !O.done; T++,
        O = g.next())
            O = y(N, m, T, O.value, E),
            O !== null && (e && O.alternate !== null && N.delete(O.key === null ? T : O.key),
            h = i(O, h, T),
            C === null ? S = O : C.sibling = O,
            C = O);
        return e && N.forEach(function(D) {
            return t(m, D)
        }),
        se && _n(m, T),
        S
    }
    function b(m, h, g, E) {
        if (typeof g == "object" && g !== null && g.type === lr && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case ii:
                e: {
                    for (var S = g.key, C = h; C !== null; ) {
                        if (C.key === S) {
                            if (S = g.type,
                            S === lr) {
                                if (C.tag === 7) {
                                    n(m, C.sibling),
                                    h = o(C, g.props.children),
                                    h.return = m,
                                    m = h;
                                    break e
                                }
                            } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === rn && Hc(S) === C.type) {
                                n(m, C.sibling),
                                h = o(C, g.props),
                                h.ref = ro(m, C, g),
                                h.return = m,
                                m = h;
                                break e
                            }
                            n(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    g.type === lr ? (h = Hn(g.props.children, m.mode, E, g.key),
                    h.return = m,
                    m = h) : (E = Di(g.type, g.key, g.props, null, m.mode, E),
                    E.ref = ro(m, h, g),
                    E.return = m,
                    m = E)
                }
                return s(m);
            case sr:
                e: {
                    for (C = g.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                                n(m, h.sibling),
                                h = o(h, g.children || []),
                                h.return = m,
                                m = h;
                                break e
                            } else {
                                n(m, h);
                                break
                            }
                        else
                            t(m, h);
                        h = h.sibling
                    }
                    h = Cl(g, m.mode, E),
                    h.return = m,
                    m = h
                }
                return s(m);
            case rn:
                return C = g._init,
                b(m, h, C(g._payload), E)
            }
            if (uo(g))
                return x(m, h, g, E);
            if (Zr(g))
                return v(m, h, g, E);
            gi(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        h !== null && h.tag === 6 ? (n(m, h.sibling),
        h = o(h, g),
        h.return = m,
        m = h) : (n(m, h),
        h = kl(g, m.mode, E),
        h.return = m,
        m = h),
        s(m)) : n(m, h)
    }
    return b
}
var Fr = xp(!0)
  , wp = xp(!1)
  , es = An(null)
  , ts = null
  , mr = null
  , fu = null;
function pu() {
    fu = mr = ts = null
}
function hu(e) {
    var t = es.current;
    ie(es),
    e._currentValue = t
}
function aa(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Er(e, t) {
    ts = e,
    fu = mr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0),
    e.firstContext = null)
}
function st(e) {
    var t = e._currentValue;
    if (fu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        mr === null) {
            if (ts === null)
                throw Error(j(308));
            mr = e,
            ts.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            mr = mr.next = e;
    return t
}
var Dn = null;
function mu(e) {
    Dn === null ? Dn = [e] : Dn.push(e)
}
function bp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    mu(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Vt(e, r)
}
function Vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var on = !1;
function gu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ep(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function $t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function wn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Vt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    mu(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Vt(e, n)
}
function Ai(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        tu(e, n)
    }
}
function Wc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ns(e, t, n, r) {
    var o = e.updateQueue;
    on = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        l = f.lastBaseUpdate,
        l !== s && (l === null ? f.firstBaseUpdate = u : l.next = u,
        f.lastBaseUpdate = a))
    }
    if (i !== null) {
        var p = o.baseState;
        s = 0,
        f = u = a = null,
        l = i;
        do {
            var c = l.lane
              , y = l.eventTime;
            if ((r & c) === c) {
                f !== null && (f = f.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e
                      , v = l;
                    switch (c = t,
                    y = n,
                    v.tag) {
                    case 1:
                        if (x = v.payload,
                        typeof x == "function") {
                            p = x.call(y, p, c);
                            break e
                        }
                        p = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = v.payload,
                        c = typeof x == "function" ? x.call(y, p, c) : x,
                        c == null)
                            break e;
                        p = ce({}, p, c);
                        break e;
                    case 2:
                        on = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                c = o.effects,
                c === null ? o.effects = [l] : c.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: c,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                f === null ? (u = f = y,
                a = p) : f = f.next = y,
                s |= c;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                c = l,
                l = c.next,
                c.next = null,
                o.lastBaseUpdate = c,
                o.shared.pending = null
            }
        } while (!0);
        if (f === null && (a = p),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = f,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Kn |= s,
        e.lanes = s,
        e.memoizedState = p
    }
}
function Qc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var Xo = {}
  , Rt = An(Xo)
  , _o = An(Xo)
  , Lo = An(Xo);
function zn(e) {
    if (e === Xo)
        throw Error(j(174));
    return e
}
function vu(e, t) {
    switch (te(Lo, t),
    te(_o, e),
    te(Rt, Xo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Bl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Bl(t, e)
    }
    ie(Rt),
    te(Rt, t)
}
function $r() {
    ie(Rt),
    ie(_o),
    ie(Lo)
}
function Sp(e) {
    zn(Lo.current);
    var t = zn(Rt.current)
      , n = Bl(t, e.type);
    t !== n && (te(_o, e),
    te(Rt, n))
}
function yu(e) {
    _o.current === e && (ie(Rt),
    ie(_o))
}
var ae = An(0);
function rs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var yl = [];
function xu() {
    for (var e = 0; e < yl.length; e++)
        yl[e]._workInProgressVersionPrimary = null;
    yl.length = 0
}
var Oi = Gt.ReactCurrentDispatcher
  , xl = Gt.ReactCurrentBatchConfig
  , Gn = 0
  , ue = null
  , ge = null
  , xe = null
  , os = !1
  , yo = !1
  , Io = 0
  , tv = 0;
function Ne() {
    throw Error(j(321))
}
function wu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!vt(e[n], t[n]))
            return !1;
    return !0
}
function bu(e, t, n, r, o, i) {
    if (Gn = i,
    ue = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Oi.current = e === null || e.memoizedState === null ? iv : sv,
    e = n(r, o),
    yo) {
        i = 0;
        do {
            if (yo = !1,
            Io = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            xe = ge = null,
            t.updateQueue = null,
            Oi.current = lv,
            e = n(r, o)
        } while (yo)
    }
    if (Oi.current = is,
    t = ge !== null && ge.next !== null,
    Gn = 0,
    xe = ge = ue = null,
    os = !1,
    t)
        throw Error(j(300));
    return e
}
function Eu() {
    var e = Io !== 0;
    return Io = 0,
    e
}
function kt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return xe === null ? ue.memoizedState = xe = e : xe = xe.next = e,
    xe
}
function lt() {
    if (ge === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ge.next;
    var t = xe === null ? ue.memoizedState : xe.next;
    if (t !== null)
        xe = t,
        ge = e;
    else {
        if (e === null)
            throw Error(j(310));
        ge = e,
        e = {
            memoizedState: ge.memoizedState,
            baseState: ge.baseState,
            baseQueue: ge.baseQueue,
            queue: ge.queue,
            next: null
        },
        xe === null ? ue.memoizedState = xe = e : xe = xe.next = e
    }
    return xe
}
function Do(e, t) {
    return typeof t == "function" ? t(e) : t
}
function wl(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = ge
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var f = u.lane;
            if ((Gn & f) === f)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = p,
                s = r) : a = a.next = p,
                ue.lanes |= f,
                Kn |= f
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        vt(r, t.memoizedState) || (ze = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ue.lanes |= i,
            Kn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function bl(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        vt(i, t.memoizedState) || (ze = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function kp() {}
function Cp(e, t) {
    var n = ue
      , r = lt()
      , o = t()
      , i = !vt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    ze = !0),
    r = r.queue,
    Su(Tp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        zo(9, Pp.bind(null, n, r, o, t), void 0, null),
        we === null)
            throw Error(j(349));
        Gn & 30 || Np(n, t, o)
    }
    return o
}
function Np(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Pp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    jp(t) && Rp(e)
}
function Tp(e, t, n) {
    return n(function() {
        jp(t) && Rp(e)
    })
}
function jp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !vt(e, n)
    } catch {
        return !0
    }
}
function Rp(e) {
    var t = Vt(e, 1);
    t !== null && gt(t, e, 1, -1)
}
function Gc(e) {
    var t = kt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Do,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = ov.bind(null, ue, e),
    [t.memoizedState, e]
}
function zo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Ap() {
    return lt().memoizedState
}
function Mi(e, t, n, r) {
    var o = kt();
    ue.flags |= e,
    o.memoizedState = zo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ns(e, t, n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ge !== null) {
        var s = ge.memoizedState;
        if (i = s.destroy,
        r !== null && wu(r, s.deps)) {
            o.memoizedState = zo(t, n, i, r);
            return
        }
    }
    ue.flags |= e,
    o.memoizedState = zo(1 | t, n, i, r)
}
function Kc(e, t) {
    return Mi(8390656, 8, e, t)
}
function Su(e, t) {
    return Ns(2048, 8, e, t)
}
function Op(e, t) {
    return Ns(4, 2, e, t)
}
function Mp(e, t) {
    return Ns(4, 4, e, t)
}
function _p(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Lp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ns(4, 4, _p.bind(null, t, e), n)
}
function ku() {}
function Ip(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Dp(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function zp(e, t, n) {
    return Gn & 21 ? (vt(n, t) || (n = Vf(),
    ue.lanes |= n,
    Kn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ze = !0),
    e.memoizedState = n)
}
function nv(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = xl.transition;
    xl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        J = n,
        xl.transition = r
    }
}
function Fp() {
    return lt().memoizedState
}
function rv(e, t, n) {
    var r = En(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    $p(e))
        Up(t, n);
    else if (n = bp(e, t, n, r),
    n !== null) {
        var o = _e();
        gt(n, e, r, o),
        Bp(n, t, r)
    }
}
function ov(e, t, n) {
    var r = En(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($p(e))
        Up(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                vt(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    mu(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = bp(e, t, o, r),
        n !== null && (o = _e(),
        gt(n, e, r, o),
        Bp(n, t, r))
    }
}
function $p(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}
function Up(e, t) {
    yo = os = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Bp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        tu(e, n)
    }
}
var is = {
    readContext: st,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1
}
  , iv = {
    readContext: st,
    useCallback: function(e, t) {
        return kt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: st,
    useEffect: Kc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Mi(4194308, 4, _p.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Mi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Mi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = kt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = kt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = rv.bind(null, ue, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = kt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Gc,
    useDebugValue: ku,
    useDeferredValue: function(e) {
        return kt().memoizedState = e
    },
    useTransition: function() {
        var e = Gc(!1)
          , t = e[0];
        return e = nv.bind(null, e[1]),
        kt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ue
          , o = kt();
        if (se) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            we === null)
                throw Error(j(349));
            Gn & 30 || Np(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Kc(Tp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        zo(9, Pp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = kt()
          , t = we.identifierPrefix;
        if (se) {
            var n = Ft
              , r = zt;
            n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Io++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = tv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , sv = {
    readContext: st,
    useCallback: Ip,
    useContext: st,
    useEffect: Su,
    useImperativeHandle: Lp,
    useInsertionEffect: Op,
    useLayoutEffect: Mp,
    useMemo: Dp,
    useReducer: wl,
    useRef: Ap,
    useState: function() {
        return wl(Do)
    },
    useDebugValue: ku,
    useDeferredValue: function(e) {
        var t = lt();
        return zp(t, ge.memoizedState, e)
    },
    useTransition: function() {
        var e = wl(Do)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: kp,
    useSyncExternalStore: Cp,
    useId: Fp,
    unstable_isNewReconciler: !1
}
  , lv = {
    readContext: st,
    useCallback: Ip,
    useContext: st,
    useEffect: Su,
    useImperativeHandle: Lp,
    useInsertionEffect: Op,
    useLayoutEffect: Mp,
    useMemo: Dp,
    useReducer: bl,
    useRef: Ap,
    useState: function() {
        return bl(Do)
    },
    useDebugValue: ku,
    useDeferredValue: function(e) {
        var t = lt();
        return ge === null ? t.memoizedState = e : zp(t, ge.memoizedState, e)
    },
    useTransition: function() {
        var e = bl(Do)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: kp,
    useSyncExternalStore: Cp,
    useId: Fp,
    unstable_isNewReconciler: !1
};
function ct(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ua(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ps = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Jn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = _e()
          , o = En(e)
          , i = $t(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = wn(e, i, o),
        t !== null && (gt(t, e, o, r),
        Ai(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = _e()
          , o = En(e)
          , i = $t(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = wn(e, i, o),
        t !== null && (gt(t, e, o, r),
        Ai(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = _e()
          , r = En(e)
          , o = $t(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = wn(e, o, r),
        t !== null && (gt(t, e, r, n),
        Ai(t, e, r))
    }
};
function Yc(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ro(n, r) || !Ro(o, i) : !0
}
function Vp(e, t, n) {
    var r = !1
      , o = Cn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = st(i) : (o = $e(t) ? Wn : Re.current,
    r = t.contextTypes,
    i = (r = r != null) ? Dr(e, o) : Cn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ps,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Xc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ps.enqueueReplaceState(t, t.state, null)
}
function ca(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    gu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = st(i) : (i = $e(t) ? Wn : Re.current,
    o.context = Dr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ua(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Ps.enqueueReplaceState(o, o.state, null),
    ns(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ur(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += L0(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function El(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function da(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var av = typeof WeakMap == "function" ? WeakMap : Map;
function Hp(e, t, n) {
    n = $t(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ls || (ls = !0,
        ba = r),
        da(e, t)
    }
    ,
    n
}
function Wp(e, t, n) {
    n = $t(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            da(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        da(e, t),
        typeof r != "function" && (bn === null ? bn = new Set([this]) : bn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function qc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new av;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Ev.bind(null, e, t, n),
    t.then(e, e))
}
function Zc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Jc(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1),
    t.tag = 2,
    wn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var uv = Gt.ReactCurrentOwner
  , ze = !1;
function Oe(e, t, n, r) {
    t.child = e === null ? wp(t, null, n, r) : Fr(t, e.child, n, r)
}
function ed(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Er(t, o),
    r = bu(e, t, n, r, i, o),
    n = Eu(),
    e !== null && !ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ht(e, t, o)) : (se && n && uu(t),
    t.flags |= 1,
    Oe(e, t, r, o),
    t.child)
}
function td(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Ou(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Qp(e, t, i, r, o)) : (e = Di(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ro,
        n(s, r) && e.ref === t.ref)
            return Ht(e, t, o)
    }
    return t.flags |= 1,
    e = Sn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Qp(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ro(i, r) && e.ref === t.ref)
            if (ze = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (ze = !0);
            else
                return t.lanes = e.lanes,
                Ht(e, t, o)
    }
    return fa(e, t, n, r, o)
}
function Gp(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            te(vr, Ge),
            Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                te(vr, Ge),
                Ge |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            te(vr, Ge),
            Ge |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        te(vr, Ge),
        Ge |= r;
    return Oe(e, t, o, n),
    t.child
}
function Kp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function fa(e, t, n, r, o) {
    var i = $e(n) ? Wn : Re.current;
    return i = Dr(t, i),
    Er(t, o),
    n = bu(e, t, n, r, i, o),
    r = Eu(),
    e !== null && !ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ht(e, t, o)) : (se && r && uu(t),
    t.flags |= 1,
    Oe(e, t, n, o),
    t.child)
}
function nd(e, t, n, r, o) {
    if ($e(n)) {
        var i = !0;
        qi(t)
    } else
        i = !1;
    if (Er(t, o),
    t.stateNode === null)
        _i(e, t),
        Vp(t, n, r),
        ca(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = st(u) : (u = $e(n) ? Wn : Re.current,
        u = Dr(t, u));
        var f = n.getDerivedStateFromProps
          , p = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Xc(t, s, r, u),
        on = !1;
        var c = t.memoizedState;
        s.state = c,
        ns(t, r, s, o),
        a = t.memoizedState,
        l !== r || c !== a || Fe.current || on ? (typeof f == "function" && (ua(t, n, f, r),
        a = t.memoizedState),
        (l = on || Yc(t, n, l, r, c, a, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Ep(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : ct(t.type, l),
        s.props = u,
        p = t.pendingProps,
        c = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = st(a) : (a = $e(n) ? Wn : Re.current,
        a = Dr(t, a));
        var y = n.getDerivedStateFromProps;
        (f = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || c !== a) && Xc(t, s, r, a),
        on = !1,
        c = t.memoizedState,
        s.state = c,
        ns(t, r, s, o);
        var x = t.memoizedState;
        l !== p || c !== x || Fe.current || on ? (typeof y == "function" && (ua(t, n, y, r),
        x = t.memoizedState),
        (u = on || Yc(t, n, u, r, c, x, a) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        s.props = r,
        s.state = x,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return pa(e, t, n, r, i, o)
}
function pa(e, t, n, r, o, i) {
    Kp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Uc(t, n, !1),
        Ht(e, t, i);
    r = t.stateNode,
    uv.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Fr(t, e.child, null, i),
    t.child = Fr(t, null, l, i)) : Oe(e, t, l, i),
    t.memoizedState = r.state,
    o && Uc(t, n, !0),
    t.child
}
function Yp(e) {
    var t = e.stateNode;
    t.pendingContext ? $c(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $c(e, t.context, !1),
    vu(e, t.containerInfo)
}
function rd(e, t, n, r, o) {
    return zr(),
    du(o),
    t.flags |= 256,
    Oe(e, t, n, r),
    t.child
}
var ha = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ma(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Xp(e, t, n) {
    var r = t.pendingProps, o = ae.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    te(ae, o & 1),
    e === null)
        return la(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Rs(s, r, 0, null),
        e = Hn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = ma(n),
        t.memoizedState = ha,
        e) : Cu(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return cv(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Sn(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = Sn(l, i) : (i = Hn(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? ma(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = ha,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Sn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Cu(e, t) {
    return t = Rs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function vi(e, t, n, r) {
    return r !== null && du(r),
    Fr(t, e.child, null, n),
    e = Cu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function cv(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = El(Error(j(422))),
        vi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Rs({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Hn(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Fr(t, e.child, null, s),
        t.child.memoizedState = ma(s),
        t.memoizedState = ha,
        i);
    if (!(t.mode & 1))
        return vi(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(j(419)),
        r = El(i, r, void 0),
        vi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    ze || l) {
        if (r = we,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Vt(e, o),
            gt(r, e, o, -1))
        }
        return Au(),
        r = El(Error(j(421))),
        vi(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Sv.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Ye = xn(o.nextSibling),
    Xe = t,
    se = !0,
    ht = null,
    e !== null && (nt[rt++] = zt,
    nt[rt++] = Ft,
    nt[rt++] = Qn,
    zt = e.id,
    Ft = e.overflow,
    Qn = t),
    t = Cu(t, r.children),
    t.flags |= 4096,
    t)
}
function od(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    aa(e.return, t, n)
}
function Sl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function qp(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Oe(e, t, r.children, n),
    r = ae.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && od(e, n, t);
                else if (e.tag === 19)
                    od(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (te(ae, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && rs(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Sl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && rs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Sl(t, !0, n, null, i);
            break;
        case "together":
            Sl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function _i(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Kn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Sn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Sn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function dv(e, t, n) {
    switch (t.tag) {
    case 3:
        Yp(t),
        zr();
        break;
    case 5:
        Sp(t);
        break;
    case 1:
        $e(t.type) && qi(t);
        break;
    case 4:
        vu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        te(es, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (te(ae, ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Xp(e, t, n) : (te(ae, ae.current & 1),
            e = Ht(e, t, n),
            e !== null ? e.sibling : null);
        te(ae, ae.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return qp(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        te(ae, ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Gp(e, t, n)
    }
    return Ht(e, t, n)
}
var Zp, ga, Jp, eh;
Zp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ga = function() {}
;
Jp = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        zn(Rt.current);
        var i = null;
        switch (n) {
        case "input":
            o = zl(e, o),
            r = zl(e, r),
            i = [];
            break;
        case "select":
            o = ce({}, o, {
                value: void 0
            }),
            r = ce({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Ul(e, o),
            r = Ul(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yi)
        }
        Vl(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (So.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (So.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
eh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function oo(e, t) {
    if (!se)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function fv(e, t, n) {
    var r = t.pendingProps;
    switch (cu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Pe(t),
        null;
    case 1:
        return $e(t.type) && Xi(),
        Pe(t),
        null;
    case 3:
        return r = t.stateNode,
        $r(),
        ie(Fe),
        ie(Re),
        xu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (mi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ht !== null && (ka(ht),
        ht = null))),
        ga(e, t),
        Pe(t),
        null;
    case 5:
        yu(t);
        var o = zn(Lo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Jp(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Pe(t),
                null
            }
            if (e = zn(Rt.current),
            mi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Tt] = t,
                r[Mo] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < fo.length; o++)
                        oe(fo[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    pc(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    mc(r, i),
                    oe("invalid", r)
                }
                Vl(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && hi(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && hi(r.textContent, l, e),
                        o = ["children", "" + l]) : So.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    si(r),
                    hc(r, i, !0);
                    break;
                case "textarea":
                    si(r),
                    gc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Yi)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Tf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Tt] = t,
                e[Mo] = r,
                Zp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Hl(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < fo.length; o++)
                            oe(fo[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        pc(e, r),
                        o = zl(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ce({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        mc(e, r),
                        o = Ul(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Vl(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? Af(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && jf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ko(e, a) : typeof a == "number" && ko(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (So.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && Ya(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        si(e),
                        hc(e, r, !1);
                        break;
                    case "textarea":
                        si(e),
                        gc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + kn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? yr(e, !!r.multiple, i, !1) : r.defaultValue != null && yr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Yi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Pe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            eh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = zn(Lo.current),
            zn(Rt.current),
            mi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Tt] = t,
                (i = r.nodeValue !== n) && (e = Xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        hi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && hi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Tt] = t,
                t.stateNode = r
        }
        return Pe(t),
        null;
    case 13:
        if (ie(ae),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && Ye !== null && t.mode & 1 && !(t.flags & 128))
                yp(),
                zr(),
                t.flags |= 98560,
                i = !1;
            else if (i = mi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[Tt] = t
                } else
                    zr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Pe(t),
                i = !1
            } else
                ht !== null && (ka(ht),
                ht = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Au())),
        t.updateQueue !== null && (t.flags |= 4),
        Pe(t),
        null);
    case 4:
        return $r(),
        ga(e, t),
        e === null && Ao(t.stateNode.containerInfo),
        Pe(t),
        null;
    case 10:
        return hu(t.type._context),
        Pe(t),
        null;
    case 17:
        return $e(t.type) && Xi(),
        Pe(t),
        null;
    case 19:
        if (ie(ae),
        i = t.memoizedState,
        i === null)
            return Pe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                oo(i, !1);
            else {
                if (ye !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = rs(e),
                        s !== null) {
                            for (t.flags |= 128,
                            oo(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return te(ae, ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && he() > Br && (t.flags |= 128,
                r = !0,
                oo(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = rs(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    oo(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !se)
                        return Pe(t),
                        null
                } else
                    2 * he() - i.renderingStartTime > Br && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    oo(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = he(),
        t.sibling = null,
        n = ae.current,
        te(ae, r ? n & 1 | 2 : n & 1),
        t) : (Pe(t),
        null);
    case 22:
    case 23:
        return Ru(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (Pe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function pv(e, t) {
    switch (cu(t),
    t.tag) {
    case 1:
        return $e(t.type) && Xi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return $r(),
        ie(Fe),
        ie(Re),
        xu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return yu(t),
        null;
    case 13:
        if (ie(ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            zr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ae),
        null;
    case 4:
        return $r(),
        null;
    case 10:
        return hu(t.type._context),
        null;
    case 22:
    case 23:
        return Ru(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var yi = !1
  , je = !1
  , hv = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function gr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                pe(e, t, r)
            }
        else
            n.current = null
}
function va(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var id = !1;
function mv(e, t) {
    if (ea = Qi,
    e = ip(),
    au(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , f = 0
                      , p = e
                      , c = null;
                    t: for (; ; ) {
                        for (var y; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o),
                        p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r),
                        p.nodeType === 3 && (s += p.nodeValue.length),
                        (y = p.firstChild) !== null; )
                            c = p,
                            p = y;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (c === n && ++u === o && (l = s),
                            c === i && ++f === r && (a = s),
                            (y = p.nextSibling) !== null)
                                break;
                            p = c,
                            c = p.parentNode
                        }
                        p = y
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ta = {
        focusedElem: e,
        selectionRange: n
    },
    Qi = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var v = x.memoizedProps
                                  , b = x.memoizedState
                                  , m = t.stateNode
                                  , h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ct(t.type, v), b);
                                m.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (E) {
                    pe(t, t.return, E)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return x = id,
    id = !1,
    x
}
function xo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && va(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Ts(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ya(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function th(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    th(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Tt],
    delete t[Mo],
    delete t[oa],
    delete t[qg],
    delete t[Zg])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function nh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function sd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || nh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function xa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Yi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (xa(e, t, n),
        e = e.sibling; e !== null; )
            xa(e, t, n),
            e = e.sibling
}
function wa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (wa(e, t, n),
        e = e.sibling; e !== null; )
            wa(e, t, n),
            e = e.sibling
}
var Ee = null
  , pt = !1;
function Jt(e, t, n) {
    for (n = n.child; n !== null; )
        rh(e, t, n),
        n = n.sibling
}
function rh(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
        try {
            jt.onCommitFiberUnmount(ws, n)
        } catch {}
    switch (n.tag) {
    case 5:
        je || gr(n, t);
    case 6:
        var r = Ee
          , o = pt;
        Ee = null,
        Jt(e, t, n),
        Ee = r,
        pt = o,
        Ee !== null && (pt ? (e = Ee,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
        break;
    case 18:
        Ee !== null && (pt ? (e = Ee,
        n = n.stateNode,
        e.nodeType === 8 ? gl(e.parentNode, n) : e.nodeType === 1 && gl(e, n),
        To(e)) : gl(Ee, n.stateNode));
        break;
    case 4:
        r = Ee,
        o = pt,
        Ee = n.stateNode.containerInfo,
        pt = !0,
        Jt(e, t, n),
        Ee = r,
        pt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!je && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && va(n, t, s),
                o = o.next
            } while (o !== r)
        }
        Jt(e, t, n);
        break;
    case 1:
        if (!je && (gr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                pe(n, t, l)
            }
        Jt(e, t, n);
        break;
    case 21:
        Jt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (je = (r = je) || n.memoizedState !== null,
        Jt(e, t, n),
        je = r) : Jt(e, t, n);
        break;
    default:
        Jt(e, t, n)
    }
}
function ld(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new hv),
        t.forEach(function(r) {
            var o = kv.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Ee = l.stateNode,
                        pt = !1;
                        break e;
                    case 3:
                        Ee = l.stateNode.containerInfo,
                        pt = !0;
                        break e;
                    case 4:
                        Ee = l.stateNode.containerInfo,
                        pt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Ee === null)
                    throw Error(j(160));
                rh(i, s, o),
                Ee = null,
                pt = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            oh(t, e),
            t = t.sibling
}
function oh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ut(t, e),
        St(e),
        r & 4) {
            try {
                xo(3, e, e.return),
                Ts(3, e)
            } catch (v) {
                pe(e, e.return, v)
            }
            try {
                xo(5, e, e.return)
            } catch (v) {
                pe(e, e.return, v)
            }
        }
        break;
    case 1:
        ut(t, e),
        St(e),
        r & 512 && n !== null && gr(n, n.return);
        break;
    case 5:
        if (ut(t, e),
        St(e),
        r & 512 && n !== null && gr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                ko(o, "")
            } catch (v) {
                pe(e, e.return, v)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Nf(o, i),
                    Hl(l, s);
                    var u = Hl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var f = a[s]
                          , p = a[s + 1];
                        f === "style" ? Af(o, p) : f === "dangerouslySetInnerHTML" ? jf(o, p) : f === "children" ? ko(o, p) : Ya(o, f, p, u)
                    }
                    switch (l) {
                    case "input":
                        Fl(o, i);
                        break;
                    case "textarea":
                        Pf(o, i);
                        break;
                    case "select":
                        var c = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? yr(o, !!i.multiple, y, !1) : c !== !!i.multiple && (i.defaultValue != null ? yr(o, !!i.multiple, i.defaultValue, !0) : yr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Mo] = i
                } catch (v) {
                    pe(e, e.return, v)
                }
        }
        break;
    case 6:
        if (ut(t, e),
        St(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (v) {
                pe(e, e.return, v)
            }
        }
        break;
    case 3:
        if (ut(t, e),
        St(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                To(t.containerInfo)
            } catch (v) {
                pe(e, e.return, v)
            }
        break;
    case 4:
        ut(t, e),
        St(e);
        break;
    case 13:
        ut(t, e),
        St(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Tu = he())),
        r & 4 && ld(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (je = (u = je) || f,
        ut(t, e),
        je = u) : ut(t, e),
        St(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (_ = e,
                f = e.child; f !== null; ) {
                    for (p = _ = f; _ !== null; ) {
                        switch (c = _,
                        y = c.child,
                        c.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            xo(4, c, c.return);
                            break;
                        case 1:
                            gr(c, c.return);
                            var x = c.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = c,
                                n = c.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (v) {
                                    pe(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            gr(c, c.return);
                            break;
                        case 22:
                            if (c.memoizedState !== null) {
                                ud(p);
                                continue
                            }
                        }
                        y !== null ? (y.return = c,
                        _ = y) : ud(p)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (f === null) {
                        f = p;
                        try {
                            o = p.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode,
                            a = p.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Rf("display", s))
                        } catch (v) {
                            pe(e, e.return, v)
                        }
                    }
                } else if (p.tag === 6) {
                    if (f === null)
                        try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (v) {
                            pe(e, e.return, v)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    f === p && (f = null),
                    p = p.return
                }
                f === p && (f = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        ut(t, e),
        St(e),
        r & 4 && ld(e);
        break;
    case 21:
        break;
    default:
        ut(t, e),
        St(e)
    }
}
function St(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (nh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (ko(o, ""),
                r.flags &= -33);
                var i = sd(e);
                wa(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = sd(e);
                xa(e, l, s);
                break;
            default:
                throw Error(j(161))
            }
        } catch (a) {
            pe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function gv(e, t, n) {
    _ = e,
    ih(e)
}
function ih(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var o = _
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || yi;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || je;
                l = yi;
                var u = je;
                if (yi = s,
                (je = a) && !u)
                    for (_ = o; _ !== null; )
                        s = _,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? cd(o) : a !== null ? (a.return = s,
                        _ = a) : cd(o);
                for (; i !== null; )
                    _ = i,
                    ih(i),
                    i = i.sibling;
                _ = o,
                yi = l,
                je = u
            }
            ad(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            _ = i) : ad(e)
    }
}
function ad(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        je || Ts(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !je)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Qc(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Qc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var p = f.dehydrated;
                                    p !== null && To(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                je || t.flags & 512 && ya(t)
            } catch (c) {
                pe(t, t.return, c)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function ud(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function cd(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ts(4, t)
                } catch (a) {
                    pe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        pe(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    ya(t)
                } catch (a) {
                    pe(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    ya(t)
                } catch (a) {
                    pe(t, s, a)
                }
            }
        } catch (a) {
            pe(t, t.return, a)
        }
        if (t === e) {
            _ = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            _ = l;
            break
        }
        _ = t.return
    }
}
var vv = Math.ceil
  , ss = Gt.ReactCurrentDispatcher
  , Nu = Gt.ReactCurrentOwner
  , it = Gt.ReactCurrentBatchConfig
  , X = 0
  , we = null
  , me = null
  , Se = 0
  , Ge = 0
  , vr = An(0)
  , ye = 0
  , Fo = null
  , Kn = 0
  , js = 0
  , Pu = 0
  , wo = null
  , De = null
  , Tu = 0
  , Br = 1 / 0
  , It = null
  , ls = !1
  , ba = null
  , bn = null
  , xi = !1
  , hn = null
  , as = 0
  , bo = 0
  , Ea = null
  , Li = -1
  , Ii = 0;
function _e() {
    return X & 6 ? he() : Li !== -1 ? Li : Li = he()
}
function En(e) {
    return e.mode & 1 ? X & 2 && Se !== 0 ? Se & -Se : ev.transition !== null ? (Ii === 0 && (Ii = Vf()),
    Ii) : (e = J,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Xf(e.type)),
    e) : 1
}
function gt(e, t, n, r) {
    if (50 < bo)
        throw bo = 0,
        Ea = null,
        Error(j(185));
    Go(e, n, r),
    (!(X & 2) || e !== we) && (e === we && (!(X & 2) && (js |= n),
    ye === 4 && ln(e, Se)),
    Ue(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (Br = he() + 500,
    Cs && On()))
}
function Ue(e, t) {
    var n = e.callbackNode;
    eg(e, t);
    var r = Wi(e, e === we ? Se : 0);
    if (r === 0)
        n !== null && xc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && xc(n),
        t === 1)
            e.tag === 0 ? Jg(dd.bind(null, e)) : mp(dd.bind(null, e)),
            Yg(function() {
                !(X & 6) && On()
            }),
            n = null;
        else {
            switch (Hf(r)) {
            case 1:
                n = eu;
                break;
            case 4:
                n = Uf;
                break;
            case 16:
                n = Hi;
                break;
            case 536870912:
                n = Bf;
                break;
            default:
                n = Hi
            }
            n = ph(n, sh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function sh(e, t) {
    if (Li = -1,
    Ii = 0,
    X & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Sr() && e.callbackNode !== n)
        return null;
    var r = Wi(e, e === we ? Se : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = us(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = ah();
        (we !== e || Se !== t) && (It = null,
        Br = he() + 500,
        Vn(e, t));
        do
            try {
                wv();
                break
            } catch (l) {
                lh(e, l)
            }
        while (!0);
        pu(),
        ss.current = i,
        X = o,
        me !== null ? t = 0 : (we = null,
        Se = 0,
        t = ye)
    }
    if (t !== 0) {
        if (t === 2 && (o = Yl(e),
        o !== 0 && (r = o,
        t = Sa(e, o))),
        t === 1)
            throw n = Fo,
            Vn(e, 0),
            ln(e, r),
            Ue(e, he()),
            n;
        if (t === 6)
            ln(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !yv(o) && (t = us(e, r),
            t === 2 && (i = Yl(e),
            i !== 0 && (r = i,
            t = Sa(e, i))),
            t === 1))
                throw n = Fo,
                Vn(e, 0),
                ln(e, r),
                Ue(e, he()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Ln(e, De, It);
                break;
            case 3:
                if (ln(e, r),
                (r & 130023424) === r && (t = Tu + 500 - he(),
                10 < t)) {
                    if (Wi(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        _e(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = ra(Ln.bind(null, e, De, It), t);
                    break
                }
                Ln(e, De, It);
                break;
            case 4:
                if (ln(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - mt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = he() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ra(Ln.bind(null, e, De, It), r);
                    break
                }
                Ln(e, De, It);
                break;
            case 5:
                Ln(e, De, It);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return Ue(e, he()),
    e.callbackNode === n ? sh.bind(null, e) : null
}
function Sa(e, t) {
    var n = wo;
    return e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
    e = us(e, t),
    e !== 2 && (t = De,
    De = n,
    t !== null && ka(t)),
    e
}
function ka(e) {
    De === null ? De = e : De.push.apply(De, e)
}
function yv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!vt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function ln(e, t) {
    for (t &= ~Pu,
    t &= ~js,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - mt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function dd(e) {
    if (X & 6)
        throw Error(j(327));
    Sr();
    var t = Wi(e, 0);
    if (!(t & 1))
        return Ue(e, he()),
        null;
    var n = us(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Yl(e);
        r !== 0 && (t = r,
        n = Sa(e, r))
    }
    if (n === 1)
        throw n = Fo,
        Vn(e, 0),
        ln(e, t),
        Ue(e, he()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ln(e, De, It),
    Ue(e, he()),
    null
}
function ju(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (Br = he() + 500,
        Cs && On())
    }
}
function Yn(e) {
    hn !== null && hn.tag === 0 && !(X & 6) && Sr();
    var t = X;
    X |= 1;
    var n = it.transition
      , r = J;
    try {
        if (it.transition = null,
        J = 1,
        e)
            return e()
    } finally {
        J = r,
        it.transition = n,
        X = t,
        !(X & 6) && On()
    }
}
function Ru() {
    Ge = vr.current,
    ie(vr)
}
function Vn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Kg(n)),
    me !== null)
        for (n = me.return; n !== null; ) {
            var r = n;
            switch (cu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Xi();
                break;
            case 3:
                $r(),
                ie(Fe),
                ie(Re),
                xu();
                break;
            case 5:
                yu(r);
                break;
            case 4:
                $r();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                hu(r.type._context);
                break;
            case 22:
            case 23:
                Ru()
            }
            n = n.return
        }
    if (we = e,
    me = e = Sn(e.current, null),
    Se = Ge = t,
    ye = 0,
    Fo = null,
    Pu = js = Kn = 0,
    De = wo = null,
    Dn !== null) {
        for (t = 0; t < Dn.length; t++)
            if (n = Dn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Dn = null
    }
    return e
}
function lh(e, t) {
    do {
        var n = me;
        try {
            if (pu(),
            Oi.current = is,
            os) {
                for (var r = ue.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                os = !1
            }
            if (Gn = 0,
            xe = ge = ue = null,
            yo = !1,
            Io = 0,
            Nu.current = null,
            n === null || n.return === null) {
                ye = 1,
                Fo = t,
                me = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = Se,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , f = l
                      , p = f.tag;
                    if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var c = f.alternate;
                        c ? (f.updateQueue = c.updateQueue,
                        f.memoizedState = c.memoizedState,
                        f.lanes = c.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var y = Zc(s);
                    if (y !== null) {
                        y.flags &= -257,
                        Jc(y, s, l, i, t),
                        y.mode & 1 && qc(i, u, t),
                        t = y,
                        a = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var v = new Set;
                            v.add(a),
                            t.updateQueue = v
                        } else
                            x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            qc(i, u, t),
                            Au();
                            break e
                        }
                        a = Error(j(426))
                    }
                } else if (se && l.mode & 1) {
                    var b = Zc(s);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256),
                        Jc(b, s, l, i, t),
                        du(Ur(a, l));
                        break e
                    }
                }
                i = a = Ur(a, l),
                ye !== 4 && (ye = 2),
                wo === null ? wo = [i] : wo.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = Hp(i, a, t);
                        Wc(i, m);
                        break e;
                    case 1:
                        l = a;
                        var h = i.type
                          , g = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (bn === null || !bn.has(g)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var E = Wp(i, l, t);
                            Wc(i, E);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            ch(n)
        } catch (S) {
            t = S,
            me === n && n !== null && (me = n = n.return);
            continue
        }
        break
    } while (!0)
}
function ah() {
    var e = ss.current;
    return ss.current = is,
    e === null ? is : e
}
function Au() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    we === null || !(Kn & 268435455) && !(js & 268435455) || ln(we, Se)
}
function us(e, t) {
    var n = X;
    X |= 2;
    var r = ah();
    (we !== e || Se !== t) && (It = null,
    Vn(e, t));
    do
        try {
            xv();
            break
        } catch (o) {
            lh(e, o)
        }
    while (!0);
    if (pu(),
    X = n,
    ss.current = r,
    me !== null)
        throw Error(j(261));
    return we = null,
    Se = 0,
    ye
}
function xv() {
    for (; me !== null; )
        uh(me)
}
function wv() {
    for (; me !== null && !W0(); )
        uh(me)
}
function uh(e) {
    var t = fh(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
    t === null ? ch(e) : me = t,
    Nu.current = null
}
function ch(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = pv(n, t),
            n !== null) {
                n.flags &= 32767,
                me = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ye = 6,
                me = null;
                return
            }
        } else if (n = fv(n, t, Ge),
        n !== null) {
            me = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            me = t;
            return
        }
        me = t = e
    } while (t !== null);
    ye === 0 && (ye = 5)
}
function Ln(e, t, n) {
    var r = J
      , o = it.transition;
    try {
        it.transition = null,
        J = 1,
        bv(e, t, n, r)
    } finally {
        it.transition = o,
        J = r
    }
    return null
}
function bv(e, t, n, r) {
    do
        Sr();
    while (hn !== null);
    if (X & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (tg(e, i),
    e === we && (me = we = null,
    Se = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || xi || (xi = !0,
    ph(Hi, function() {
        return Sr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = it.transition,
        it.transition = null;
        var s = J;
        J = 1;
        var l = X;
        X |= 4,
        Nu.current = null,
        mv(e, n),
        oh(n, e),
        Ug(ta),
        Qi = !!ea,
        ta = ea = null,
        e.current = n,
        gv(n),
        Q0(),
        X = l,
        J = s,
        it.transition = i
    } else
        e.current = n;
    if (xi && (xi = !1,
    hn = e,
    as = o),
    i = e.pendingLanes,
    i === 0 && (bn = null),
    Y0(n.stateNode),
    Ue(e, he()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (ls)
        throw ls = !1,
        e = ba,
        ba = null,
        e;
    return as & 1 && e.tag !== 0 && Sr(),
    i = e.pendingLanes,
    i & 1 ? e === Ea ? bo++ : (bo = 0,
    Ea = e) : bo = 0,
    On(),
    null
}
function Sr() {
    if (hn !== null) {
        var e = Hf(as)
          , t = it.transition
          , n = J;
        try {
            if (it.transition = null,
            J = 16 > e ? 16 : e,
            hn === null)
                var r = !1;
            else {
                if (e = hn,
                hn = null,
                as = 0,
                X & 6)
                    throw Error(j(331));
                var o = X;
                for (X |= 4,
                _ = e.current; _ !== null; ) {
                    var i = _
                      , s = i.child;
                    if (_.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (_ = u; _ !== null; ) {
                                    var f = _;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        xo(8, f, i)
                                    }
                                    var p = f.child;
                                    if (p !== null)
                                        p.return = f,
                                        _ = p;
                                    else
                                        for (; _ !== null; ) {
                                            f = _;
                                            var c = f.sibling
                                              , y = f.return;
                                            if (th(f),
                                            f === u) {
                                                _ = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = y,
                                                _ = c;
                                                break
                                            }
                                            _ = y
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var v = x.child;
                                if (v !== null) {
                                    x.child = null;
                                    do {
                                        var b = v.sibling;
                                        v.sibling = null,
                                        v = b
                                    } while (v !== null)
                                }
                            }
                            _ = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        _ = s;
                    else
                        e: for (; _ !== null; ) {
                            if (i = _,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    xo(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                _ = m;
                                break e
                            }
                            _ = i.return
                        }
                }
                var h = e.current;
                for (_ = h; _ !== null; ) {
                    s = _;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null)
                        g.return = s,
                        _ = g;
                    else
                        e: for (s = h; _ !== null; ) {
                            if (l = _,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ts(9, l)
                                    }
                                } catch (S) {
                                    pe(l, l.return, S)
                                }
                            if (l === s) {
                                _ = null;
                                break e
                            }
                            var E = l.sibling;
                            if (E !== null) {
                                E.return = l.return,
                                _ = E;
                                break e
                            }
                            _ = l.return
                        }
                }
                if (X = o,
                On(),
                jt && typeof jt.onPostCommitFiberRoot == "function")
                    try {
                        jt.onPostCommitFiberRoot(ws, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            J = n,
            it.transition = t
        }
    }
    return !1
}
function fd(e, t, n) {
    t = Ur(n, t),
    t = Hp(e, t, 1),
    e = wn(e, t, 1),
    t = _e(),
    e !== null && (Go(e, 1, t),
    Ue(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        fd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                fd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r))) {
                    e = Ur(n, e),
                    e = Wp(t, e, 1),
                    t = wn(t, e, 1),
                    e = _e(),
                    t !== null && (Go(t, 1, e),
                    Ue(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Ev(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = _e(),
    e.pingedLanes |= e.suspendedLanes & n,
    we === e && (Se & n) === n && (ye === 4 || ye === 3 && (Se & 130023424) === Se && 500 > he() - Tu ? Vn(e, 0) : Pu |= n),
    Ue(e, t)
}
function dh(e, t) {
    t === 0 && (e.mode & 1 ? (t = ui,
    ui <<= 1,
    !(ui & 130023424) && (ui = 4194304)) : t = 1);
    var n = _e();
    e = Vt(e, t),
    e !== null && (Go(e, t, n),
    Ue(e, n))
}
function Sv(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    dh(e, n)
}
function kv(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    dh(e, n)
}
var fh;
fh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Fe.current)
            ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ze = !1,
                dv(e, t, n);
            ze = !!(e.flags & 131072)
        }
    else
        ze = !1,
        se && t.flags & 1048576 && gp(t, Ji, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        _i(e, t),
        e = t.pendingProps;
        var o = Dr(t, Re.current);
        Er(t, n),
        o = bu(null, t, r, e, o, n);
        var i = Eu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        $e(r) ? (i = !0,
        qi(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        gu(t),
        o.updater = Ps,
        t.stateNode = o,
        o._reactInternals = t,
        ca(t, r, e, n),
        t = pa(null, t, r, !0, i, n)) : (t.tag = 0,
        se && i && uu(t),
        Oe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (_i(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Nv(r),
            e = ct(r, e),
            o) {
            case 0:
                t = fa(null, t, r, e, n);
                break e;
            case 1:
                t = nd(null, t, r, e, n);
                break e;
            case 11:
                t = ed(null, t, r, e, n);
                break e;
            case 14:
                t = td(null, t, r, ct(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ct(r, o),
        fa(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ct(r, o),
        nd(e, t, r, o, n);
    case 3:
        e: {
            if (Yp(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Ep(e, t),
            ns(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Ur(Error(j(423)), t),
                    t = rd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Ur(Error(j(424)), t),
                    t = rd(e, t, r, n, o);
                    break e
                } else
                    for (Ye = xn(t.stateNode.containerInfo.firstChild),
                    Xe = t,
                    se = !0,
                    ht = null,
                    n = wp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (zr(),
                r === o) {
                    t = Ht(e, t, n);
                    break e
                }
                Oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Sp(t),
        e === null && la(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        na(r, o) ? s = null : i !== null && na(r, i) && (t.flags |= 32),
        Kp(e, t),
        Oe(e, t, s, n),
        t.child;
    case 6:
        return e === null && la(t),
        null;
    case 13:
        return Xp(e, t, n);
    case 4:
        return vu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Fr(t, null, r, n) : Oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ct(r, o),
        ed(e, t, r, o, n);
    case 7:
        return Oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            te(es, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (vt(i.value, s)) {
                    if (i.children === o.children && !Fe.current) {
                        t = Ht(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = $t(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? a.next = a : (a.next = f.next,
                                            f.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    aa(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(j(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            aa(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Oe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Er(t, n),
        o = st(o),
        r = r(o),
        t.flags |= 1,
        Oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = ct(r, t.pendingProps),
        o = ct(r.type, o),
        td(e, t, r, o, n);
    case 15:
        return Qp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ct(r, o),
        _i(e, t),
        t.tag = 1,
        $e(r) ? (e = !0,
        qi(t)) : e = !1,
        Er(t, n),
        Vp(t, r, o),
        ca(t, r, o, n),
        pa(null, t, r, !0, e, n);
    case 19:
        return qp(e, t, n);
    case 22:
        return Gp(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function ph(e, t) {
    return $f(e, t)
}
function Cv(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ot(e, t, n, r) {
    return new Cv(e,t,n,r)
}
function Ou(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Nv(e) {
    if (typeof e == "function")
        return Ou(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === qa)
            return 11;
        if (e === Za)
            return 14
    }
    return 2
}
function Sn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Di(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Ou(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case lr:
            return Hn(n.children, o, i, t);
        case Xa:
            s = 8,
            o |= 8;
            break;
        case _l:
            return e = ot(12, n, t, o | 2),
            e.elementType = _l,
            e.lanes = i,
            e;
        case Ll:
            return e = ot(13, n, t, o),
            e.elementType = Ll,
            e.lanes = i,
            e;
        case Il:
            return e = ot(19, n, t, o),
            e.elementType = Il,
            e.lanes = i,
            e;
        case Sf:
            return Rs(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case bf:
                    s = 10;
                    break e;
                case Ef:
                    s = 9;
                    break e;
                case qa:
                    s = 11;
                    break e;
                case Za:
                    s = 14;
                    break e;
                case rn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = ot(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Hn(e, t, n, r) {
    return e = ot(7, e, r, t),
    e.lanes = n,
    e
}
function Rs(e, t, n, r) {
    return e = ot(22, e, r, t),
    e.elementType = Sf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function kl(e, t, n) {
    return e = ot(6, e, null, t),
    e.lanes = n,
    e
}
function Cl(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Pv(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = il(0),
    this.expirationTimes = il(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = il(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Mu(e, t, n, r, o, i, s, l, a) {
    return e = new Pv(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = ot(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    gu(i),
    e
}
function Tv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: sr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function hh(e) {
    if (!e)
        return Cn;
    e = e._reactInternals;
    e: {
        if (Jn(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if ($e(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if ($e(n))
            return hp(e, n, t)
    }
    return t
}
function mh(e, t, n, r, o, i, s, l, a) {
    return e = Mu(n, r, !0, e, o, i, s, l, a),
    e.context = hh(null),
    n = e.current,
    r = _e(),
    o = En(n),
    i = $t(r, o),
    i.callback = t ?? null,
    wn(n, i, o),
    e.current.lanes = o,
    Go(e, o, r),
    Ue(e, r),
    e
}
function As(e, t, n, r) {
    var o = t.current
      , i = _e()
      , s = En(o);
    return n = hh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = $t(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = wn(o, t, s),
    e !== null && (gt(e, o, s, i),
    Ai(e, o, s)),
    s
}
function cs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function pd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function _u(e, t) {
    pd(e, t),
    (e = e.alternate) && pd(e, t)
}
function jv() {
    return null
}
var gh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Lu(e) {
    this._internalRoot = e
}
Os.prototype.render = Lu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    As(e, t, null, null)
}
;
Os.prototype.unmount = Lu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Yn(function() {
            As(null, e, null, null)
        }),
        t[Bt] = null
    }
}
;
function Os(e) {
    this._internalRoot = e
}
Os.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Gf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++)
            ;
        sn.splice(n, 0, e),
        n === 0 && Yf(e)
    }
}
;
function Iu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ms(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function hd() {}
function Rv(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = cs(s);
                i.call(u)
            }
        }
        var s = mh(t, r, e, 0, null, !1, !1, "", hd);
        return e._reactRootContainer = s,
        e[Bt] = s.current,
        Ao(e.nodeType === 8 ? e.parentNode : e),
        Yn(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = cs(a);
            l.call(u)
        }
    }
    var a = Mu(e, 0, !1, null, null, !1, !1, "", hd);
    return e._reactRootContainer = a,
    e[Bt] = a.current,
    Ao(e.nodeType === 8 ? e.parentNode : e),
    Yn(function() {
        As(t, a, n, r)
    }),
    a
}
function _s(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = cs(s);
                l.call(a)
            }
        }
        As(t, s, e, o)
    } else
        s = Rv(n, t, e, o, r);
    return cs(s)
}
Wf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = co(t.pendingLanes);
            n !== 0 && (tu(t, n | 1),
            Ue(t, he()),
            !(X & 6) && (Br = he() + 500,
            On()))
        }
        break;
    case 13:
        Yn(function() {
            var r = Vt(e, 1);
            if (r !== null) {
                var o = _e();
                gt(r, e, 1, o)
            }
        }),
        _u(e, 1)
    }
}
;
nu = function(e) {
    if (e.tag === 13) {
        var t = Vt(e, 134217728);
        if (t !== null) {
            var n = _e();
            gt(t, e, 134217728, n)
        }
        _u(e, 134217728)
    }
}
;
Qf = function(e) {
    if (e.tag === 13) {
        var t = En(e)
          , n = Vt(e, t);
        if (n !== null) {
            var r = _e();
            gt(n, e, t, r)
        }
        _u(e, t)
    }
}
;
Gf = function() {
    return J
}
;
Kf = function(e, t) {
    var n = J;
    try {
        return J = e,
        t()
    } finally {
        J = n
    }
}
;
Ql = function(e, t, n) {
    switch (t) {
    case "input":
        if (Fl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ks(r);
                    if (!o)
                        throw Error(j(90));
                    Cf(r),
                    Fl(r, o)
                }
            }
        }
        break;
    case "textarea":
        Pf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && yr(e, !!n.multiple, t, !1)
    }
}
;
_f = ju;
Lf = Yn;
var Av = {
    usingClientEntryPoint: !1,
    Events: [Yo, dr, ks, Of, Mf, ju]
}
  , io = {
    findFiberByHostInstance: In,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Ov = {
    bundleType: io.bundleType,
    version: io.version,
    rendererPackageName: io.rendererPackageName,
    rendererConfig: io.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = zf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: io.findFiberByHostInstance || jv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wi.isDisabled && wi.supportsFiber)
        try {
            ws = wi.inject(Ov),
            jt = wi
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Av;
Je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Iu(t))
        throw Error(j(200));
    return Tv(e, t, null, n)
}
;
Je.createRoot = function(e, t) {
    if (!Iu(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = gh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Mu(e, 1, !1, null, null, n, !1, r, o),
    e[Bt] = t.current,
    Ao(e.nodeType === 8 ? e.parentNode : e),
    new Lu(t)
}
;
Je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = zf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Je.flushSync = function(e) {
    return Yn(e)
}
;
Je.hydrate = function(e, t, n) {
    if (!Ms(t))
        throw Error(j(200));
    return _s(null, e, t, !0, n)
}
;
Je.hydrateRoot = function(e, t, n) {
    if (!Iu(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = gh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = mh(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Bt] = t.current,
    Ao(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Os(t)
}
;
Je.render = function(e, t, n) {
    if (!Ms(t))
        throw Error(j(200));
    return _s(null, e, t, !1, n)
}
;
Je.unmountComponentAtNode = function(e) {
    if (!Ms(e))
        throw Error(j(40));
    return e._reactRootContainer ? (Yn(function() {
        _s(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Bt] = null
        })
    }),
    !0) : !1
}
;
Je.unstable_batchedUpdates = ju;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ms(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return _s(e, t, n, !1, r)
}
;
Je.version = "18.3.1-next-f1338f8080-20240426";
function vh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh)
        } catch (e) {
            console.error(e)
        }
}
vh(),
vf.exports = Je;
var qo = vf.exports;
const yh = of(qo);
var xh, md = qo;
xh = md.createRoot,
md.hydrateRoot;
const Mv = 1
  , _v = 1e6;
let Nl = 0;
function Lv() {
    return Nl = (Nl + 1) % Number.MAX_SAFE_INTEGER,
    Nl.toString()
}
const Pl = new Map
  , gd = e => {
    if (Pl.has(e))
        return;
    const t = setTimeout( () => {
        Pl.delete(e),
        Eo({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , _v);
    Pl.set(e, t)
}
  , Iv = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Mv)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? gd(n) : e.toasts.forEach(r => {
                gd(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , zi = [];
let Fi = {
    toasts: []
};
function Eo(e) {
    Fi = Iv(Fi, e),
    zi.forEach(t => {
        t(Fi)
    }
    )
}
function Dv({...e}) {
    const t = Lv()
      , n = o => Eo({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Eo({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Eo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function zv() {
    const [e,t] = w.useState(Fi);
    return w.useEffect( () => (zi.push(t),
    () => {
        const n = zi.indexOf(t);
        n > -1 && zi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Dv,
        dismiss: n => Eo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ve(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Fv(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function wh(...e) {
    return t => e.forEach(n => Fv(n, t))
}
function yt(...e) {
    return w.useCallback(wh(...e), e)
}
function $v(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = w.createContext(s)
          , a = n.length;
        n = [...n, s];
        function u(p) {
            const {scope: c, children: y, ...x} = p
              , v = (c == null ? void 0 : c[e][a]) || l
              , b = w.useMemo( () => x, Object.values(x));
            return d.jsx(v.Provider, {
                value: b,
                children: y
            })
        }
        function f(p, c) {
            const y = (c == null ? void 0 : c[e][a]) || l
              , x = w.useContext(y);
            if (x)
                return x;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, f]
    }
    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, Uv(o, ...t)]
}
function Uv(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const p = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...p
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var ds = w.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = w.Children.toArray(n)
      , i = o.find(Bv);
    if (i) {
        const s = i.props.children
          , l = o.map(a => a === i ? w.Children.count(s) > 1 ? w.Children.only(null) : w.isValidElement(s) ? s.props.children : null : a);
        return d.jsx(Ca, {
            ...r,
            ref: t,
            children: w.isValidElement(s) ? w.cloneElement(s, void 0, l) : null
        })
    }
    return d.jsx(Ca, {
        ...r,
        ref: t,
        children: n
    })
}
);
ds.displayName = "Slot";
var Ca = w.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (w.isValidElement(n)) {
        const o = Hv(n);
        return w.cloneElement(n, {
            ...Vv(r, n.props),
            ref: t ? wh(t, o) : o
        })
    }
    return w.Children.count(n) > 1 ? w.Children.only(null) : null
}
);
Ca.displayName = "SlotClone";
var bh = ({children: e}) => d.jsx(d.Fragment, {
    children: e
});
function Bv(e) {
    return w.isValidElement(e) && e.type === bh
}
function Vv(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l),
            o(...l)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Hv(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Wv(e) {
    const t = e + "CollectionProvider"
      , [n,r] = $v(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: x, children: v} = y
          , b = A.useRef(null)
          , m = A.useRef(new Map).current;
        return d.jsx(o, {
            scope: x,
            itemMap: m,
            collectionRef: b,
            children: v
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = A.forwardRef( (y, x) => {
        const {scope: v, children: b} = y
          , m = i(l, v)
          , h = yt(x, m.collectionRef);
        return d.jsx(ds, {
            ref: h,
            children: b
        })
    }
    );
    a.displayName = l;
    const u = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , p = A.forwardRef( (y, x) => {
        const {scope: v, children: b, ...m} = y
          , h = A.useRef(null)
          , g = yt(x, h)
          , E = i(u, v);
        return A.useEffect( () => (E.itemMap.set(h, {
            ref: h,
            ...m
        }),
        () => void E.itemMap.delete(h))),
        d.jsx(ds, {
            [f]: "",
            ref: g,
            children: b
        })
    }
    );
    p.displayName = u;
    function c(y) {
        const x = i(e + "CollectionConsumer", y);
        return A.useCallback( () => {
            const b = x.collectionRef.current;
            if (!b)
                return [];
            const m = Array.from(b.querySelectorAll(`[${f}]`));
            return Array.from(x.itemMap.values()).sort( (E, S) => m.indexOf(E.ref.current) - m.indexOf(S.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: a,
        ItemSlot: p
    }, c, r]
}
function Eh(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = w.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = p => {
            var m;
            const {scope: c, children: y, ...x} = p
              , v = ((m = c == null ? void 0 : c[e]) == null ? void 0 : m[a]) || l
              , b = w.useMemo( () => x, Object.values(x));
            return d.jsx(v.Provider, {
                value: b,
                children: y
            })
        }
        ;
        u.displayName = i + "Provider";
        function f(p, c) {
            var v;
            const y = ((v = c == null ? void 0 : c[e]) == null ? void 0 : v[a]) || l
              , x = w.useContext(y);
            if (x)
                return x;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${i}\``)
        }
        return [u, f]
    }
    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, Qv(o, ...t)]
}
function Qv(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const p = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...p
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Gv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Ve = Gv.reduce( (e, t) => {
    const n = w.forwardRef( (r, o) => {
        const {asChild: i, ...s} = r
          , l = i ? ds : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        d.jsx(l, {
            ...s,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function Sh(e, t) {
    e && qo.flushSync( () => e.dispatchEvent(t))
}
function At(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Kv(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = At(e);
    w.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Yv = "DismissableLayer", Na = "dismissableLayer.update", Xv = "dismissableLayer.pointerDownOutside", qv = "dismissableLayer.focusOutside", vd, kh = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Du = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = w.useContext(kh)
      , [f,p] = w.useState(null)
      , c = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,y] = w.useState({})
      , x = yt(t, N => p(N))
      , v = Array.from(u.layers)
      , [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = v.indexOf(b)
      , h = f ? v.indexOf(f) : -1
      , g = u.layersWithOutsidePointerEventsDisabled.size > 0
      , E = h >= m
      , S = Jv(N => {
        const T = N.target
          , I = [...u.branches].some(O => O.contains(T));
        !E || I || (o == null || o(N),
        s == null || s(N),
        N.defaultPrevented || l == null || l())
    }
    , c)
      , C = ey(N => {
        const T = N.target;
        [...u.branches].some(O => O.contains(T)) || (i == null || i(N),
        s == null || s(N),
        N.defaultPrevented || l == null || l())
    }
    , c);
    return Kv(N => {
        h === u.layers.size - 1 && (r == null || r(N),
        !N.defaultPrevented && l && (N.preventDefault(),
        l()))
    }
    , c),
    w.useEffect( () => {
        if (f)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (vd = c.body.style.pointerEvents,
            c.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            yd(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = vd)
            }
    }
    , [f, c, n, u]),
    w.useEffect( () => () => {
        f && (u.layers.delete(f),
        u.layersWithOutsidePointerEventsDisabled.delete(f),
        yd())
    }
    , [f, u]),
    w.useEffect( () => {
        const N = () => y({});
        return document.addEventListener(Na, N),
        () => document.removeEventListener(Na, N)
    }
    , []),
    d.jsx(Ve.div, {
        ...a,
        ref: x,
        style: {
            pointerEvents: g ? E ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ve(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ve(e.onPointerDownCapture, S.onPointerDownCapture)
    })
}
);
Du.displayName = Yv;
var Zv = "DismissableLayerBranch"
  , Ch = w.forwardRef( (e, t) => {
    const n = w.useContext(kh)
      , r = w.useRef(null)
      , o = yt(t, r);
    return w.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    d.jsx(Ve.div, {
        ...e,
        ref: o
    })
}
);
Ch.displayName = Zv;
function Jv(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = At(e)
      , r = w.useRef(!1)
      , o = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    Nh(Xv, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function ey(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = At(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        const o = i => {
            i.target && !r.current && Nh(qv, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function yd() {
    const e = new CustomEvent(Na);
    document.dispatchEvent(e)
}
function Nh(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Sh(o, i) : o.dispatchEvent(i)
}
var ty = Du
  , ny = Ch
  , Xn = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , ry = "Portal"
  , Ph = w.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = w.useState(!1);
    Xn( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? yh.createPortal(d.jsx(Ve.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Ph.displayName = ry;
function oy(e, t) {
    return w.useReducer( (n, r) => t[n][r] ?? n, e)
}
var zu = e => {
    const {present: t, children: n} = e
      , r = iy(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , i = yt(r.ref, sy(o));
    return typeof n == "function" || r.isPresent ? w.cloneElement(o, {
        ref: i
    }) : null
}
;
zu.displayName = "Presence";
function iy(e) {
    const [t,n] = w.useState()
      , r = w.useRef({})
      , o = w.useRef(e)
      , i = w.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = oy(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const u = bi(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    Xn( () => {
        const u = r.current
          , f = o.current;
        if (f !== e) {
            const c = i.current
              , y = bi(u);
            e ? a("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(f && c !== y ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    Xn( () => {
        if (t) {
            let u;
            const f = t.ownerDocument.defaultView ?? window
              , p = y => {
                const v = bi(r.current).includes(y.animationName);
                if (y.target === t && v && (a("ANIMATION_END"),
                !o.current)) {
                    const b = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = f.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b)
                    }
                    )
                }
            }
              , c = y => {
                y.target === t && (i.current = bi(r.current))
            }
            ;
            return t.addEventListener("animationstart", c),
            t.addEventListener("animationcancel", p),
            t.addEventListener("animationend", p),
            () => {
                f.clearTimeout(u),
                t.removeEventListener("animationstart", c),
                t.removeEventListener("animationcancel", p),
                t.removeEventListener("animationend", p)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: w.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
            n(u)
        }
        , [])
    }
}
function bi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function sy(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function ly({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = ay({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , s = i ? e : r
      , l = At(n)
      , a = w.useCallback(u => {
        if (i) {
            const p = typeof u == "function" ? u(e) : u;
            p !== e && l(p)
        } else
            o(u)
    }
    , [i, e, o, l]);
    return [s, a]
}
function ay({defaultProp: e, onChange: t}) {
    const n = w.useState(e)
      , [r] = n
      , o = w.useRef(r)
      , i = At(t);
    return w.useEffect( () => {
        o.current !== r && (i(r),
        o.current = r)
    }
    , [r, o, i]),
    n
}
var uy = "VisuallyHidden"
  , Ls = w.forwardRef( (e, t) => d.jsx(Ve.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Ls.displayName = uy;
var cy = Ls
  , Fu = "ToastProvider"
  , [$u,dy,fy] = Wv("Toast")
  , [Th,nb] = Eh("Toast", [fy])
  , [py,Is] = Th(Fu)
  , jh = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = w.useState(null)
      , [u,f] = w.useState(0)
      , p = w.useRef(!1)
      , c = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Fu}\`. Expected non-empty \`string\`.`),
    d.jsx($u.Provider, {
        scope: t,
        children: d.jsx(py, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: w.useCallback( () => f(y => y + 1), []),
            onToastRemove: w.useCallback( () => f(y => y - 1), []),
            isFocusedToastEscapeKeyDownRef: p,
            isClosePausedRef: c,
            children: s
        })
    })
}
;
jh.displayName = Fu;
var Rh = "ToastViewport"
  , hy = ["F8"]
  , Pa = "toast.viewportPause"
  , Ta = "toast.viewportResume"
  , Ah = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=hy, label: o="Notifications ({hotkey})", ...i} = e
      , s = Is(Rh, n)
      , l = dy(n)
      , a = w.useRef(null)
      , u = w.useRef(null)
      , f = w.useRef(null)
      , p = w.useRef(null)
      , c = yt(t, p, s.onViewportChange)
      , y = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , x = s.toastCount > 0;
    w.useEffect( () => {
        const b = m => {
            var g;
            r.length !== 0 && r.every(E => m[E] || m.code === E) && ((g = p.current) == null || g.focus())
        }
        ;
        return document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
    }
    , [r]),
    w.useEffect( () => {
        const b = a.current
          , m = p.current;
        if (x && b && m) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const C = new CustomEvent(Pa);
                    m.dispatchEvent(C),
                    s.isClosePausedRef.current = !0
                }
            }
              , g = () => {
                if (s.isClosePausedRef.current) {
                    const C = new CustomEvent(Ta);
                    m.dispatchEvent(C),
                    s.isClosePausedRef.current = !1
                }
            }
              , E = C => {
                !b.contains(C.relatedTarget) && g()
            }
              , S = () => {
                b.contains(document.activeElement) || g()
            }
            ;
            return b.addEventListener("focusin", h),
            b.addEventListener("focusout", E),
            b.addEventListener("pointermove", h),
            b.addEventListener("pointerleave", S),
            window.addEventListener("blur", h),
            window.addEventListener("focus", g),
            () => {
                b.removeEventListener("focusin", h),
                b.removeEventListener("focusout", E),
                b.removeEventListener("pointermove", h),
                b.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", g)
            }
        }
    }
    , [x, s.isClosePausedRef]);
    const v = w.useCallback( ({tabbingDirection: b}) => {
        const h = l().map(g => {
            const E = g.ref.current
              , S = [E, ...Py(E)];
            return b === "forwards" ? S : S.reverse()
        }
        );
        return (b === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return w.useEffect( () => {
        const b = p.current;
        if (b) {
            const m = h => {
                var S, C, N;
                const g = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !g) {
                    const T = document.activeElement
                      , I = h.shiftKey;
                    if (h.target === b && I) {
                        (S = u.current) == null || S.focus();
                        return
                    }
                    const D = v({
                        tabbingDirection: I ? "backwards" : "forwards"
                    })
                      , W = D.findIndex(M => M === T);
                    Tl(D.slice(W + 1)) ? h.preventDefault() : I ? (C = u.current) == null || C.focus() : (N = f.current) == null || N.focus()
                }
            }
            ;
            return b.addEventListener("keydown", m),
            () => b.removeEventListener("keydown", m)
        }
    }
    , [l, v]),
    d.jsxs(ny, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", y),
        tabIndex: -1,
        style: {
            pointerEvents: x ? void 0 : "none"
        },
        children: [x && d.jsx(ja, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const b = v({
                    tabbingDirection: "forwards"
                });
                Tl(b)
            }
        }), d.jsx($u.Slot, {
            scope: n,
            children: d.jsx(Ve.ol, {
                tabIndex: -1,
                ...i,
                ref: c
            })
        }), x && d.jsx(ja, {
            ref: f,
            onFocusFromOutsideViewport: () => {
                const b = v({
                    tabbingDirection: "backwards"
                });
                Tl(b)
            }
        })]
    })
}
);
Ah.displayName = Rh;
var Oh = "ToastFocusProxy"
  , ja = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Is(Oh, n);
    return d.jsx(Ls, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
ja.displayName = Oh;
var Ds = "Toast"
  , my = "toast.swipeStart"
  , gy = "toast.swipeMove"
  , vy = "toast.swipeCancel"
  , yy = "toast.swipeEnd"
  , Mh = w.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l=!0,a] = ly({
        prop: r,
        defaultProp: o,
        onChange: i
    });
    return d.jsx(zu, {
        present: n || l,
        children: d.jsx(by, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: At(e.onPause),
            onResume: At(e.onResume),
            onSwipeStart: ve(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ve(e.onSwipeMove, u => {
                const {x: f, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
            }
            ),
            onSwipeCancel: ve(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ve(e.onSwipeEnd, u => {
                const {x: f, y: p} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                a(!1)
            }
            )
        })
    })
}
);
Mh.displayName = Ds;
var [xy,wy] = Th(Ds, {
    onClose() {}
})
  , by = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: f, onSwipeMove: p, onSwipeCancel: c, onSwipeEnd: y, ...x} = e
      , v = Is(Ds, n)
      , [b,m] = w.useState(null)
      , h = yt(t, M => m(M))
      , g = w.useRef(null)
      , E = w.useRef(null)
      , S = o || v.duration
      , C = w.useRef(0)
      , N = w.useRef(S)
      , T = w.useRef(0)
      , {onToastAdd: I, onToastRemove: O} = v
      , $ = At( () => {
        var Q;
        (b == null ? void 0 : b.contains(document.activeElement)) && ((Q = v.viewport) == null || Q.focus()),
        s()
    }
    )
      , D = w.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(T.current),
        C.current = new Date().getTime(),
        T.current = window.setTimeout($, M))
    }
    , [$]);
    w.useEffect( () => {
        const M = v.viewport;
        if (M) {
            const Q = () => {
                D(N.current),
                u == null || u()
            }
              , U = () => {
                const G = new Date().getTime() - C.current;
                N.current = N.current - G,
                window.clearTimeout(T.current),
                a == null || a()
            }
            ;
            return M.addEventListener(Pa, U),
            M.addEventListener(Ta, Q),
            () => {
                M.removeEventListener(Pa, U),
                M.removeEventListener(Ta, Q)
            }
        }
    }
    , [v.viewport, S, a, u, D]),
    w.useEffect( () => {
        i && !v.isClosePausedRef.current && D(S)
    }
    , [i, S, v.isClosePausedRef, D]),
    w.useEffect( () => (I(),
    () => O()), [I, O]);
    const W = w.useMemo( () => b ? $h(b) : null, [b]);
    return v.viewport ? d.jsxs(d.Fragment, {
        children: [W && d.jsx(Ey, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), d.jsx(xy, {
            scope: n,
            onClose: $,
            children: qo.createPortal(d.jsx($u.ItemSlot, {
                scope: n,
                children: d.jsx(ty, {
                    asChild: !0,
                    onEscapeKeyDown: ve(l, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || $(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: d.jsx(Ve.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...x,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ve(e.onKeyDown, M => {
                            M.key === "Escape" && (l == null || l(M.nativeEvent),
                            M.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: ve(e.onPointerDown, M => {
                            M.button === 0 && (g.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }
                        ),
                        onPointerMove: ve(e.onPointerMove, M => {
                            if (!g.current)
                                return;
                            const Q = M.clientX - g.current.x
                              , U = M.clientY - g.current.y
                              , G = !!E.current
                              , k = ["left", "right"].includes(v.swipeDirection)
                              , R = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , z = k ? R(0, Q) : 0
                              , L = k ? 0 : R(0, U)
                              , F = M.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: z,
                                y: L
                            }
                              , le = {
                                originalEvent: M,
                                delta: Y
                            };
                            G ? (E.current = Y,
                            Ei(gy, p, le, {
                                discrete: !1
                            })) : xd(Y, v.swipeDirection, F) ? (E.current = Y,
                            Ei(my, f, le, {
                                discrete: !1
                            }),
                            M.target.setPointerCapture(M.pointerId)) : (Math.abs(Q) > F || Math.abs(U) > F) && (g.current = null)
                        }
                        ),
                        onPointerUp: ve(e.onPointerUp, M => {
                            const Q = E.current
                              , U = M.target;
                            if (U.hasPointerCapture(M.pointerId) && U.releasePointerCapture(M.pointerId),
                            E.current = null,
                            g.current = null,
                            Q) {
                                const G = M.currentTarget
                                  , k = {
                                    originalEvent: M,
                                    delta: Q
                                };
                                xd(Q, v.swipeDirection, v.swipeThreshold) ? Ei(yy, y, k, {
                                    discrete: !0
                                }) : Ei(vy, c, k, {
                                    discrete: !0
                                }),
                                G.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , Ey = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Is(Ds, t)
      , [i,s] = w.useState(!1)
      , [l,a] = w.useState(!1);
    return Cy( () => s(!0)),
    w.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : d.jsx(Ph, {
        asChild: !0,
        children: d.jsx(Ls, {
            ...r,
            children: i && d.jsxs(d.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , Sy = "ToastTitle"
  , _h = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return d.jsx(Ve.div, {
        ...r,
        ref: t
    })
}
);
_h.displayName = Sy;
var ky = "ToastDescription"
  , Lh = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return d.jsx(Ve.div, {
        ...r,
        ref: t
    })
}
);
Lh.displayName = ky;
var Ih = "ToastAction"
  , Dh = w.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? d.jsx(Fh, {
        altText: n,
        asChild: !0,
        children: d.jsx(Uu, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ih}\`. Expected non-empty \`string\`.`),
    null)
}
);
Dh.displayName = Ih;
var zh = "ToastClose"
  , Uu = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = wy(zh, n);
    return d.jsx(Fh, {
        asChild: !0,
        children: d.jsx(Ve.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ve(e.onClick, o.onClose)
        })
    })
}
);
Uu.displayName = zh;
var Fh = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return d.jsx(Ve.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function $h(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Ny(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...$h(r))
        }
    }
    ),
    t
}
function Ei(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Sh(o, i) : o.dispatchEvent(i)
}
var xd = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function Cy(e= () => {}
) {
    const t = At(e);
    Xn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function Ny(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Py(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Tl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Ty = jh
  , Uh = Ah
  , Bh = Mh
  , Vh = _h
  , Hh = Lh
  , Wh = Dh
  , Qh = Uu;
function Gh(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Gh(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Kh() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Gh(e)) && (r && (r += " "),
        r += t);
    return r
}
const wd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , bd = Kh
  , jy = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return bd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const f = n == null ? void 0 : n[u]
          , p = i == null ? void 0 : i[u];
        if (f === null)
            return null;
        const c = wd(f) || wd(p);
        return o[u][c]
    }
    )
      , l = n && Object.entries(n).reduce( (u, f) => {
        let[p,c] = f;
        return c === void 0 || (u[p] = c),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, f) => {
        let {class: p, className: c, ...y} = f;
        return Object.entries(y).every(x => {
            let[v,b] = x;
            return Array.isArray(b) ? b.includes({
                ...i,
                ...l
            }[v]) : {
                ...i,
                ...l
            }[v] === b
        }
        ) ? [...u, p, c] : u
    }
    , []);
    return bd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Yh = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ay = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => w.createElement("svg", {
    ref: a,
    ...Ay,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Yh("lucide", o),
    ...l
}, [...s.map( ([u,f]) => w.createElement(u, f)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (e, t) => {
    const n = w.forwardRef( ({className: r, ...o}, i) => w.createElement(Oy, {
        ref: i,
        iconNode: t,
        className: Yh(`lucide-${Ry(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = de("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = de("Briefcase", [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = de("Building", [["rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2",
    ry: "2",
    key: "76otgf"
}], ["path", {
    d: "M9 22v-4h6v4",
    key: "r93iot"
}], ["path", {
    d: "M8 6h.01",
    key: "1dz90k"
}], ["path", {
    d: "M16 6h.01",
    key: "1x0f13"
}], ["path", {
    d: "M12 6h.01",
    key: "1vi96p"
}], ["path", {
    d: "M12 10h.01",
    key: "1nrarc"
}], ["path", {
    d: "M12 14h.01",
    key: "1etili"
}], ["path", {
    d: "M16 10h.01",
    key: "1m94wz"
}], ["path", {
    d: "M16 14h.01",
    key: "1gbofw"
}], ["path", {
    d: "M8 10h.01",
    key: "19clt8"
}], ["path", {
    d: "M8 14h.01",
    key: "6423bh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = de("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iy = de("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = de("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zy = de("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = de("HandHeart", [["path", {
    d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",
    key: "1ifwr1"
}], ["path", {
    d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
    key: "17abbs"
}], ["path", {
    d: "m2 15 6 6",
    key: "10dquu"
}], ["path", {
    d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",
    key: "1h3036"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = de("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uy = de("Instagram", [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = de("Leaf", [["path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    key: "nnexq3"
}], ["path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
    key: "mt58a7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = de("Lightbulb", [["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1gvzjb"
}], ["path", {
    d: "M9 18h6",
    key: "x1upvd"
}], ["path", {
    d: "M10 22h4",
    key: "ceow96"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bu = de("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = de("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = de("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = de("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = de("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hy = de("Send", [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = de("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = de("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = de("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = de("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = de("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Vu = "-"
  , Yy = e => {
    const t = qy(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(Vu);
            return l[0] === "" && l.length !== 1 && l.shift(),
            em(l, t) || Xy(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , em = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? em(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Vu);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , Ed = /^\[(.+)\]$/
  , Xy = e => {
    if (Ed.test(e)) {
        const t = Ed.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , qy = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Jy(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Aa(s, r, i, t)
    }
    ),
    r
}
  , Aa = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Sd(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Zy(o)) {
                Aa(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Aa(s, Sd(t, i), n, r)
        }
        )
    }
    )
}
  , Sd = (e, t) => {
    let n = e;
    return t.split(Vu).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , Zy = e => e.isThemeGetter
  , Jy = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , e1 = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , tm = "!"
  , t1 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, f = 0, p;
        for (let b = 0; b < l.length; b++) {
            let m = l[b];
            if (u === 0) {
                if (m === o && (r || l.slice(b, b + i) === t)) {
                    a.push(l.slice(f, b)),
                    f = b + i;
                    continue
                }
                if (m === "/") {
                    p = b;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const c = a.length === 0 ? l : l.substring(f)
          , y = c.startsWith(tm)
          , x = y ? c.substring(1) : c
          , v = p && p > f ? p - f : void 0;
        return {
            modifiers: a,
            hasImportantModifier: y,
            baseClassName: x,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , n1 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , r1 = e => ({
    cache: e1(e.cacheSize),
    parseClassName: t1(e),
    ...Yy(e)
})
  , o1 = /\s+/
  , i1 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(o1);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: f, hasImportantModifier: p, baseClassName: c, maybePostfixModifierPosition: y} = n(u);
        let x = !!y
          , v = r(x ? c.substring(0, y) : c);
        if (!v) {
            if (!x) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (v = r(c),
            !v) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            x = !1
        }
        const b = n1(f).join(":")
          , m = p ? b + tm : b
          , h = m + v;
        if (i.includes(h))
            continue;
        i.push(h);
        const g = o(v, x);
        for (let E = 0; E < g.length; ++E) {
            const S = g[E];
            i.push(m + S)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function s1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = nm(t)) && (r && (r += " "),
        r += n);
    return r
}
const nm = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = nm(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function l1(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (f, p) => p(f), e());
        return n = r1(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const f = i1(a, n);
        return o(a, f),
        f
    }
    return function() {
        return i(s1.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , rm = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , a1 = /^\d+\/\d+$/
  , u1 = new Set(["px", "full", "screen"])
  , c1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , d1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , f1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , p1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , h1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , _t = e => kr(e) || u1.has(e) || a1.test(e)
  , en = e => Kr(e, "length", E1)
  , kr = e => !!e && !Number.isNaN(Number(e))
  , jl = e => Kr(e, "number", kr)
  , so = e => !!e && Number.isInteger(Number(e))
  , m1 = e => e.endsWith("%") && kr(e.slice(0, -1))
  , V = e => rm.test(e)
  , tn = e => c1.test(e)
  , g1 = new Set(["length", "size", "percentage"])
  , v1 = e => Kr(e, g1, om)
  , y1 = e => Kr(e, "position", om)
  , x1 = new Set(["image", "url"])
  , w1 = e => Kr(e, x1, k1)
  , b1 = e => Kr(e, "", S1)
  , lo = () => !0
  , Kr = (e, t, n) => {
    const r = rm.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , E1 = e => d1.test(e) && !f1.test(e)
  , om = () => !1
  , S1 = e => p1.test(e)
  , k1 = e => h1.test(e)
  , C1 = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , l = re("borderWidth")
      , a = re("contrast")
      , u = re("grayscale")
      , f = re("hueRotate")
      , p = re("invert")
      , c = re("gap")
      , y = re("gradientColorStops")
      , x = re("gradientColorStopPositions")
      , v = re("inset")
      , b = re("margin")
      , m = re("opacity")
      , h = re("padding")
      , g = re("saturate")
      , E = re("scale")
      , S = re("sepia")
      , C = re("skew")
      , N = re("space")
      , T = re("translate")
      , I = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", V, t]
      , D = () => [V, t]
      , W = () => ["", _t, en]
      , M = () => ["auto", kr, V]
      , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , U = () => ["solid", "dashed", "dotted", "double", "none"]
      , G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", V]
      , z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , L = () => [kr, V];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [lo],
            spacing: [_t, en],
            blur: ["none", "", tn, V],
            brightness: L(),
            borderColor: [e],
            borderRadius: ["none", "", "full", tn, V],
            borderSpacing: D(),
            borderWidth: W(),
            contrast: L(),
            grayscale: R(),
            hueRotate: L(),
            invert: R(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [m1, en],
            inset: $(),
            margin: $(),
            opacity: L(),
            padding: D(),
            saturate: L(),
            scale: L(),
            sepia: R(),
            skew: L(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", V]
            }],
            container: ["container"],
            columns: [{
                columns: [tn]
            }],
            "break-after": [{
                "break-after": z()
            }],
            "break-before": [{
                "break-before": z()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Q(), V]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: I()
            }],
            "overscroll-x": [{
                "overscroll-x": I()
            }],
            "overscroll-y": [{
                "overscroll-y": I()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", so, V]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", V]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", so, V]
            }],
            "grid-cols": [{
                "grid-cols": [lo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", so, V]
                }, V]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [lo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [so, V]
                }, V]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", V]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", V]
            }],
            gap: [{
                gap: [c]
            }],
            "gap-x": [{
                "gap-x": [c]
            }],
            "gap-y": [{
                "gap-y": [c]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [b]
            }],
            mx: [{
                mx: [b]
            }],
            my: [{
                my: [b]
            }],
            ms: [{
                ms: [b]
            }],
            me: [{
                me: [b]
            }],
            mt: [{
                mt: [b]
            }],
            mr: [{
                mr: [b]
            }],
            mb: [{
                mb: [b]
            }],
            ml: [{
                ml: [b]
            }],
            "space-x": [{
                "space-x": [N]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [N]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
            }],
            "min-w": [{
                "min-w": [V, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [tn]
                }, tn]
            }],
            h: [{
                h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [V, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", tn, en]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", jl]
            }],
            "font-family": [{
                font: [lo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
            }],
            "line-clamp": [{
                "line-clamp": ["none", kr, jl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _t, V]
            }],
            "list-image": [{
                "list-image": ["none", V]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", V]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...U(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", _t, en]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", _t, V]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", V]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Q(), y1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", v1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, w1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [y]
            }],
            "gradient-via": [{
                via: [y]
            }],
            "gradient-to": [{
                to: [y]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...U(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: U()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...U()]
            }],
            "outline-offset": [{
                "outline-offset": [_t, V]
            }],
            "outline-w": [{
                outline: [_t, en]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [_t, en]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", tn, b1]
            }],
            "shadow-color": [{
                shadow: [lo]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...G(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": G()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", tn, V]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [f]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [g]
            }],
            sepia: [{
                sepia: [S]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [f]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [g]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [S]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
            }],
            duration: [{
                duration: L()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", V]
            }],
            delay: [{
                delay: L()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", V]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [E]
            }],
            "scale-x": [{
                "scale-x": [E]
            }],
            "scale-y": [{
                "scale-y": [E]
            }],
            rotate: [{
                rotate: [so, V]
            }],
            "translate-x": [{
                "translate-x": [T]
            }],
            "translate-y": [{
                "translate-y": [T]
            }],
            "skew-x": [{
                "skew-x": [C]
            }],
            "skew-y": [{
                "skew-y": [C]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", V]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [_t, en, jl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , N1 = l1(C1);
function er(...e) {
    return N1(Kh(e))
}
const P1 = Ty
  , im = w.forwardRef( ({className: e, ...t}, n) => d.jsx(Uh, {
    ref: n,
    className: er("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
im.displayName = Uh.displayName;
const T1 = jy("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , sm = w.forwardRef( ({className: e, variant: t, ...n}, r) => d.jsx(Bh, {
    ref: r,
    className: er(T1({
        variant: t
    }), e),
    ...n
}));
sm.displayName = Bh.displayName;
const j1 = w.forwardRef( ({className: e, ...t}, n) => d.jsx(Wh, {
    ref: n,
    className: er("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
j1.displayName = Wh.displayName;
const lm = w.forwardRef( ({className: e, ...t}, n) => d.jsx(Qh, {
    ref: n,
    className: er("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: d.jsx(Jh, {
        className: "h-4 w-4"
    })
}));
lm.displayName = Qh.displayName;
const am = w.forwardRef( ({className: e, ...t}, n) => d.jsx(Vh, {
    ref: n,
    className: er("text-sm font-semibold", e),
    ...t
}));
am.displayName = Vh.displayName;
const um = w.forwardRef( ({className: e, ...t}, n) => d.jsx(Hh, {
    ref: n,
    className: er("text-sm opacity-90", e),
    ...t
}));
um.displayName = Hh.displayName;
function R1() {
    const {toasts: e} = zv();
    return d.jsxs(P1, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return d.jsxs(sm, {
                ...i,
                children: [d.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && d.jsx(am, {
                        children: n
                    }), r && d.jsx(um, {
                        children: r
                    })]
                }), o, d.jsx(lm, {})]
            }, t)
        }), d.jsx(im, {})]
    })
}
var kd = ["light", "dark"]
  , A1 = "(prefers-color-scheme: dark)"
  , O1 = w.createContext(void 0)
  , M1 = {
    setTheme: e => {}
    ,
    themes: []
}
  , _1 = () => {
    var e;
    return (e = w.useContext(O1)) != null ? e : M1
}
;
w.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(x => `'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , p = o ? kd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , c = (x, v=!1, b=!0) => {
        let m = s ? s[x] : x
          , h = v ? x + "|| ''" : `'${m}'`
          , g = "";
        return o && b && !v && kd.includes(x) && (g += `d.style.colorScheme = '${x}';`),
        n === "class" ? v || m ? g += `c.add(${h})` : g += "null" : m && (g += `d[s](n,${h})`),
        g
    }
      , y = e ? `!function(){${f}${c(e)}}()` : r ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${A1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + c(i, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}else{${c(i, !1, !1)};}${p}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: y
        }
    })
}
);
var L1 = e => {
    switch (e) {
    case "success":
        return z1;
    case "info":
        return $1;
    case "warning":
        return F1;
    case "error":
        return U1;
    default:
        return null
    }
}
  , I1 = Array(12).fill(0)
  , D1 = ({visible: e}) => A.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, A.createElement("div", {
    className: "sonner-spinner"
}, I1.map( (t, n) => A.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , z1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , F1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , $1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , U1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , B1 = () => {
    let[e,t] = A.useState(document.hidden);
    return A.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Oa = 1
  , V1 = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Oa++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e()
              , o = n !== void 0;
            return r.then(async i => {
                if (W1(i) && !i.ok) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error
                      , l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let s = typeof t.success == "function" ? await t.success(i) : t.success
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: s,
                        description: l
                    })
                }
            }
            ).catch(async i => {
                if (t.error !== void 0) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(i) : t.error
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                }
            }
            ).finally( () => {
                var i;
                o && (this.dismiss(n),
                n = void 0),
                (i = t.finally) == null || i.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Oa++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , Qe = new V1
  , H1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Oa++;
    return Qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , W1 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , Q1 = H1
  , G1 = () => Qe.toasts;
Object.assign(Q1, {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading
}, {
    getHistory: G1
});
function K1(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
K1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Si(e) {
    return e.label !== void 0
}
var Y1 = 3
  , X1 = "32px"
  , q1 = 4e3
  , Z1 = 356
  , J1 = 14
  , ex = 20
  , tx = 200;
function nx(...e) {
    return e.filter(Boolean).join(" ")
}
var rx = e => {
    var t, n, r, o, i, s, l, a, u, f;
    let {invert: p, toast: c, unstyled: y, interacting: x, setHeights: v, visibleToasts: b, heights: m, index: h, toasts: g, expanded: E, removeToast: S, defaultRichColors: C, closeButton: N, style: T, cancelButtonStyle: I, actionButtonStyle: O, className: $="", descriptionClassName: D="", duration: W, position: M, gap: Q, loadingIcon: U, expandByDefault: G, classNames: k, icons: R, closeButtonAriaLabel: z="Close toast", pauseWhenPageIsHidden: L, cn: F} = e
      , [Y,le] = A.useState(!1)
      , [He,Z] = A.useState(!1)
      , [at,Kt] = A.useState(!1)
      , [Yt,Xt] = A.useState(!1)
      , [Jo,tr] = A.useState(0)
      , [Mn,qr] = A.useState(0)
      , ei = A.useRef(null)
      , qt = A.useRef(null)
      , Ys = h === 0
      , Xs = h + 1 <= b
      , be = c.type
      , nr = c.dismissible !== !1
      , Jm = c.className || ""
      , e0 = c.descriptionClassName || ""
      , ti = A.useMemo( () => m.findIndex(B => B.toastId === c.id) || 0, [m, c.id])
      , t0 = A.useMemo( () => {
        var B;
        return (B = c.closeButton) != null ? B : N
    }
    , [c.closeButton, N])
      , tc = A.useMemo( () => c.duration || W || q1, [c.duration, W])
      , qs = A.useRef(0)
      , rr = A.useRef(0)
      , nc = A.useRef(0)
      , or = A.useRef(null)
      , [rc,n0] = M.split("-")
      , oc = A.useMemo( () => m.reduce( (B, ne, ee) => ee >= ti ? B : B + ne.height, 0), [m, ti])
      , ic = B1()
      , r0 = c.invert || p
      , Zs = be === "loading";
    rr.current = A.useMemo( () => ti * Q + oc, [ti, oc]),
    A.useEffect( () => {
        le(!0)
    }
    , []),
    A.useLayoutEffect( () => {
        if (!Y)
            return;
        let B = qt.current
          , ne = B.style.height;
        B.style.height = "auto";
        let ee = B.getBoundingClientRect().height;
        B.style.height = ne,
        qr(ee),
        v(bt => bt.find(Et => Et.toastId === c.id) ? bt.map(Et => Et.toastId === c.id ? {
            ...Et,
            height: ee
        } : Et) : [{
            toastId: c.id,
            height: ee,
            position: c.position
        }, ...bt])
    }
    , [Y, c.title, c.description, v, c.id]);
    let Zt = A.useCallback( () => {
        Z(!0),
        tr(rr.current),
        v(B => B.filter(ne => ne.toastId !== c.id)),
        setTimeout( () => {
            S(c)
        }
        , tx)
    }
    , [c, S, v, rr]);
    A.useEffect( () => {
        if (c.promise && be === "loading" || c.duration === 1 / 0 || c.type === "loading")
            return;
        let B, ne = tc;
        return E || x || L && ic ? ( () => {
            if (nc.current < qs.current) {
                let ee = new Date().getTime() - qs.current;
                ne = ne - ee
            }
            nc.current = new Date().getTime()
        }
        )() : ne !== 1 / 0 && (qs.current = new Date().getTime(),
        B = setTimeout( () => {
            var ee;
            (ee = c.onAutoClose) == null || ee.call(c, c),
            Zt()
        }
        , ne)),
        () => clearTimeout(B)
    }
    , [E, x, G, c, tc, Zt, c.promise, be, L, ic]),
    A.useEffect( () => {
        let B = qt.current;
        if (B) {
            let ne = B.getBoundingClientRect().height;
            return qr(ne),
            v(ee => [{
                toastId: c.id,
                height: ne,
                position: c.position
            }, ...ee]),
            () => v(ee => ee.filter(bt => bt.toastId !== c.id))
        }
    }
    , [v, c.id]),
    A.useEffect( () => {
        c.delete && Zt()
    }
    , [Zt, c.delete]);
    function o0() {
        return R != null && R.loading ? A.createElement("div", {
            className: "sonner-loader",
            "data-visible": be === "loading"
        }, R.loading) : U ? A.createElement("div", {
            className: "sonner-loader",
            "data-visible": be === "loading"
        }, U) : A.createElement(D1, {
            visible: be === "loading"
        })
    }
    return A.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: qt,
        className: F($, Jm, k == null ? void 0 : k.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, k == null ? void 0 : k.default, k == null ? void 0 : k[be], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[be]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : C,
        "data-styled": !(c.jsx || c.unstyled || y),
        "data-mounted": Y,
        "data-promise": !!c.promise,
        "data-removed": He,
        "data-visible": Xs,
        "data-y-position": rc,
        "data-x-position": n0,
        "data-index": h,
        "data-front": Ys,
        "data-swiping": at,
        "data-dismissible": nr,
        "data-type": be,
        "data-invert": r0,
        "data-swipe-out": Yt,
        "data-expanded": !!(E || G && Y),
        style: {
            "--index": h,
            "--toasts-before": h,
            "--z-index": g.length - h,
            "--offset": `${He ? Jo : rr.current}px`,
            "--initial-height": G ? "auto" : `${Mn}px`,
            ...T,
            ...c.style
        },
        onPointerDown: B => {
            Zs || !nr || (ei.current = new Date,
            tr(rr.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (Kt(!0),
            or.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, ne, ee, bt;
            if (Yt || !nr)
                return;
            or.current = null;
            let Et = Number(((B = qt.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , ni = new Date().getTime() - ((ne = ei.current) == null ? void 0 : ne.getTime())
              , i0 = Math.abs(Et) / ni;
            if (Math.abs(Et) >= ex || i0 > .11) {
                tr(rr.current),
                (ee = c.onDismiss) == null || ee.call(c, c),
                Zt(),
                Xt(!0);
                return
            }
            (bt = qt.current) == null || bt.style.setProperty("--swipe-amount", "0px"),
            Kt(!1)
        }
        ,
        onPointerMove: B => {
            var ne;
            if (!or.current || !nr)
                return;
            let ee = B.clientY - or.current.y
              , bt = B.clientX - or.current.x
              , Et = (rc === "top" ? Math.min : Math.max)(0, ee)
              , ni = B.pointerType === "touch" ? 10 : 2;
            Math.abs(Et) > ni ? (ne = qt.current) == null || ne.style.setProperty("--swipe-amount", `${ee}px`) : Math.abs(bt) > ni && (or.current = null)
        }
    }, t0 && !c.jsx ? A.createElement("button", {
        "aria-label": z,
        "data-disabled": Zs,
        "data-close-button": !0,
        onClick: Zs || !nr ? () => {}
        : () => {
            var B;
            Zt(),
            (B = c.onDismiss) == null || B.call(c, c)
        }
        ,
        className: F(k == null ? void 0 : k.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
    }, A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, A.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), A.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || A.isValidElement(c.title) ? c.jsx || c.title : A.createElement(A.Fragment, null, be || c.icon || c.promise ? A.createElement("div", {
        "data-icon": "",
        className: F(k == null ? void 0 : k.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || o0() : null, c.type !== "loading" ? c.icon || (R == null ? void 0 : R[be]) || L1(be) : null) : null, A.createElement("div", {
        "data-content": "",
        className: F(k == null ? void 0 : k.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content)
    }, A.createElement("div", {
        "data-title": "",
        className: F(k == null ? void 0 : k.title, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title)
    }, c.title), c.description ? A.createElement("div", {
        "data-description": "",
        className: F(D, e0, k == null ? void 0 : k.description, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description)
    }, c.description) : null), A.isValidElement(c.cancel) ? c.cancel : c.cancel && Si(c.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || I,
        onClick: B => {
            var ne, ee;
            Si(c.cancel) && nr && ((ee = (ne = c.cancel).onClick) == null || ee.call(ne, B),
            Zt())
        }
        ,
        className: F(k == null ? void 0 : k.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
    }, c.cancel.label) : null, A.isValidElement(c.action) ? c.action : c.action && Si(c.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || O,
        onClick: B => {
            var ne, ee;
            Si(c.action) && (B.defaultPrevented || ((ee = (ne = c.action).onClick) == null || ee.call(ne, B),
            Zt()))
        }
        ,
        className: F(k == null ? void 0 : k.actionButton, (f = c == null ? void 0 : c.classNames) == null ? void 0 : f.actionButton)
    }, c.action.label) : null))
}
;
function Cd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var ox = e => {
    let {invert: t, position: n="bottom-right", hotkey: r=["altKey", "KeyT"], expand: o, closeButton: i, className: s, offset: l, theme: a="light", richColors: u, duration: f, style: p, visibleToasts: c=Y1, toastOptions: y, dir: x=Cd(), gap: v=J1, loadingIcon: b, icons: m, containerAriaLabel: h="Notifications", pauseWhenPageIsHidden: g, cn: E=nx} = e
      , [S,C] = A.useState([])
      , N = A.useMemo( () => Array.from(new Set([n].concat(S.filter(L => L.position).map(L => L.position)))), [S, n])
      , [T,I] = A.useState([])
      , [O,$] = A.useState(!1)
      , [D,W] = A.useState(!1)
      , [M,Q] = A.useState(a !== "system" ? a : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , U = A.useRef(null)
      , G = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , k = A.useRef(null)
      , R = A.useRef(!1)
      , z = A.useCallback(L => {
        var F;
        (F = S.find(Y => Y.id === L.id)) != null && F.delete || Qe.dismiss(L.id),
        C(Y => Y.filter( ({id: le}) => le !== L.id))
    }
    , [S]);
    return A.useEffect( () => Qe.subscribe(L => {
        if (L.dismiss) {
            C(F => F.map(Y => Y.id === L.id ? {
                ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout( () => {
            yh.flushSync( () => {
                C(F => {
                    let Y = F.findIndex(le => le.id === L.id);
                    return Y !== -1 ? [...F.slice(0, Y), {
                        ...F[Y],
                        ...L
                    }, ...F.slice(Y + 1)] : [L, ...F]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    A.useEffect( () => {
        if (a !== "system") {
            Q(a);
            return
        }
        a === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: L}) => {
            Q(L ? "dark" : "light")
        }
        )
    }
    , [a]),
    A.useEffect( () => {
        S.length <= 1 && $(!1)
    }
    , [S]),
    A.useEffect( () => {
        let L = F => {
            var Y, le;
            r.every(He => F[He] || F.code === He) && ($(!0),
            (Y = U.current) == null || Y.focus()),
            F.code === "Escape" && (document.activeElement === U.current || (le = U.current) != null && le.contains(document.activeElement)) && $(!1)
        }
        ;
        return document.addEventListener("keydown", L),
        () => document.removeEventListener("keydown", L)
    }
    , [r]),
    A.useEffect( () => {
        if (U.current)
            return () => {
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null,
                R.current = !1)
            }
    }
    , [U.current]),
    S.length ? A.createElement("section", {
        "aria-label": `${h} ${G}`,
        tabIndex: -1
    }, N.map( (L, F) => {
        var Y;
        let[le,He] = L.split("-");
        return A.createElement("ol", {
            key: L,
            dir: x === "auto" ? Cd() : x,
            tabIndex: -1,
            ref: U,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": M,
            "data-y-position": le,
            "data-x-position": He,
            style: {
                "--front-toast-height": `${((Y = T[0]) == null ? void 0 : Y.height) || 0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || X1,
                "--width": `${Z1}px`,
                "--gap": `${v}px`,
                ...p
            },
            onBlur: Z => {
                R.current && !Z.currentTarget.contains(Z.relatedTarget) && (R.current = !1,
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || R.current || (R.current = !0,
                k.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => $(!0),
            onMouseMove: () => $(!0),
            onMouseLeave: () => {
                D || $(!1)
            }
            ,
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || W(!0)
            }
            ,
            onPointerUp: () => W(!1)
        }, S.filter(Z => !Z.position && F === 0 || Z.position === L).map( (Z, at) => {
            var Kt, Yt;
            return A.createElement(rx, {
                key: Z.id,
                icons: m,
                index: at,
                toast: Z,
                defaultRichColors: u,
                duration: (Kt = y == null ? void 0 : y.duration) != null ? Kt : f,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (Yt = y == null ? void 0 : y.closeButton) != null ? Yt : i,
                interacting: D,
                position: L,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: z,
                toasts: S.filter(Xt => Xt.position == Z.position),
                heights: T.filter(Xt => Xt.position == Z.position),
                setHeights: I,
                expandByDefault: o,
                gap: v,
                loadingIcon: b,
                expanded: O,
                pauseWhenPageIsHidden: g,
                cn: E
            })
        }
        ))
    }
    )) : null
}
;
const ix = ({...e}) => {
    const {theme: t="system"} = _1();
    return d.jsx(ox, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , sx = ["top", "right", "bottom", "left"]
  , Nn = Math.min
  , Ke = Math.max
  , fs = Math.round
  , ki = Math.floor
  , Pn = e => ({
    x: e,
    y: e
})
  , lx = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , ax = {
    start: "end",
    end: "start"
};
function Ma(e, t, n) {
    return Ke(e, Nn(t, n))
}
function Wt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Qt(e) {
    return e.split("-")[0]
}
function Yr(e) {
    return e.split("-")[1]
}
function Hu(e) {
    return e === "x" ? "y" : "x"
}
function Wu(e) {
    return e === "y" ? "height" : "width"
}
function Tn(e) {
    return ["top", "bottom"].includes(Qt(e)) ? "y" : "x"
}
function Qu(e) {
    return Hu(Tn(e))
}
function ux(e, t, n) {
    n === void 0 && (n = !1);
    const r = Yr(e)
      , o = Qu(e)
      , i = Wu(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = ps(s)),
    [s, ps(s)]
}
function cx(e) {
    const t = ps(e);
    return [_a(e), t, _a(t)]
}
function _a(e) {
    return e.replace(/start|end/g, t => ax[t])
}
function dx(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function fx(e, t, n, r) {
    const o = Yr(e);
    let i = dx(Qt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(_a)))),
    i
}
function ps(e) {
    return e.replace(/left|right|bottom|top/g, t => lx[t])
}
function px(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function cm(e) {
    return typeof e != "number" ? px(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function hs(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Nd(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Tn(t)
      , s = Qu(t)
      , l = Wu(s)
      , a = Qt(t)
      , u = i === "y"
      , f = r.x + r.width / 2 - o.width / 2
      , p = r.y + r.height / 2 - o.height / 2
      , c = r[l] / 2 - o[l] / 2;
    let y;
    switch (a) {
    case "top":
        y = {
            x: f,
            y: r.y - o.height
        };
        break;
    case "bottom":
        y = {
            x: f,
            y: r.y + r.height
        };
        break;
    case "right":
        y = {
            x: r.x + r.width,
            y: p
        };
        break;
    case "left":
        y = {
            x: r.x - o.width,
            y: p
        };
        break;
    default:
        y = {
            x: r.x,
            y: r.y
        }
    }
    switch (Yr(t)) {
    case "start":
        y[s] -= c * (n && u ? -1 : 1);
        break;
    case "end":
        y[s] += c * (n && u ? -1 : 1);
        break
    }
    return y
}
const hx = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: f, y: p} = Nd(u, r, a)
      , c = r
      , y = {}
      , x = 0;
    for (let v = 0; v < l.length; v++) {
        const {name: b, fn: m} = l[v]
          , {x: h, y: g, data: E, reset: S} = await m({
            x: f,
            y: p,
            initialPlacement: r,
            placement: c,
            strategy: o,
            middlewareData: y,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = h ?? f,
        p = g ?? p,
        y = {
            ...y,
            [b]: {
                ...y[b],
                ...E
            }
        },
        S && x <= 50 && (x++,
        typeof S == "object" && (S.placement && (c = S.placement),
        S.rects && (u = S.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : S.rects),
        {x: f, y: p} = Nd(u, c, a)),
        v = -1)
    }
    return {
        x: f,
        y: p,
        placement: c,
        strategy: o,
        middlewareData: y
    }
}
;
async function $o(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: f="viewport", elementContext: p="floating", altBoundary: c=!1, padding: y=0} = Wt(t, e)
      , x = cm(y)
      , b = l[c ? p === "floating" ? "reference" : "floating" : p]
      , m = hs(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: f,
        strategy: a
    }))
      , h = p === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , E = await (i.isElement == null ? void 0 : i.isElement(g)) ? await (i.getScale == null ? void 0 : i.getScale(g)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , S = hs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: g,
        strategy: a
    }) : h);
    return {
        top: (m.top - S.top + x.top) / E.y,
        bottom: (S.bottom - m.bottom + x.bottom) / E.y,
        left: (m.left - S.left + x.left) / E.x,
        right: (S.right - m.right + x.right) / E.x
    }
}
const mx = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: f=0} = Wt(e, t) || {};
        if (u == null)
            return {};
        const p = cm(f)
          , c = {
            x: n,
            y: r
        }
          , y = Qu(o)
          , x = Wu(y)
          , v = await s.getDimensions(u)
          , b = y === "y"
          , m = b ? "top" : "left"
          , h = b ? "bottom" : "right"
          , g = b ? "clientHeight" : "clientWidth"
          , E = i.reference[x] + i.reference[y] - c[y] - i.floating[x]
          , S = c[y] - i.reference[y]
          , C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let N = C ? C[g] : 0;
        (!N || !await (s.isElement == null ? void 0 : s.isElement(C))) && (N = l.floating[g] || i.floating[x]);
        const T = E / 2 - S / 2
          , I = N / 2 - v[x] / 2 - 1
          , O = Nn(p[m], I)
          , $ = Nn(p[h], I)
          , D = O
          , W = N - v[x] - $
          , M = N / 2 - v[x] / 2 + T
          , Q = Ma(D, M, W)
          , U = !a.arrow && Yr(o) != null && M !== Q && i.reference[x] / 2 - (M < D ? O : $) - v[x] / 2 < 0
          , G = U ? M < D ? M - D : M - W : 0;
        return {
            [y]: c[y] + G,
            data: {
                [y]: Q,
                centerOffset: M - Q - G,
                ...U && {
                    alignmentOffset: G
                }
            },
            reset: U
        }
    }
})
  , gx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: f=!0, crossAxis: p=!0, fallbackPlacements: c, fallbackStrategy: y="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: v=!0, ...b} = Wt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const m = Qt(o)
              , h = Tn(l)
              , g = Qt(l) === l
              , E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , S = c || (g || !v ? [ps(l)] : cx(l))
              , C = x !== "none";
            !c && C && S.push(...fx(l, v, x, E));
            const N = [l, ...S]
              , T = await $o(t, b)
              , I = [];
            let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (f && I.push(T[m]),
            p) {
                const M = ux(o, s, E);
                I.push(T[M[0]], T[M[1]])
            }
            if (O = [...O, {
                placement: o,
                overflows: I
            }],
            !I.every(M => M <= 0)) {
                var $, D;
                const M = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1
                  , Q = N[M];
                if (Q)
                    return {
                        data: {
                            index: M,
                            overflows: O
                        },
                        reset: {
                            placement: Q
                        }
                    };
                let U = (D = O.filter(G => G.overflows[0] <= 0).sort( (G, k) => G.overflows[1] - k.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!U)
                    switch (y) {
                    case "bestFit":
                        {
                            var W;
                            const G = (W = O.filter(k => {
                                if (C) {
                                    const R = Tn(k.placement);
                                    return R === h || R === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(R => R > 0).reduce( (R, z) => R + z, 0)]).sort( (k, R) => k[1] - R[1])[0]) == null ? void 0 : W[0];
                            G && (U = G);
                            break
                        }
                    case "initialPlacement":
                        U = l;
                        break
                    }
                if (o !== U)
                    return {
                        reset: {
                            placement: U
                        }
                    }
            }
            return {}
        }
    }
};
function Pd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Td(e) {
    return sx.some(t => e[t] >= 0)
}
const vx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Wt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await $o(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Pd(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Td(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await $o(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Pd(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Td(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function yx(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Qt(n)
      , l = Yr(n)
      , a = Tn(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , f = i && a ? -1 : 1
      , p = Wt(t, e);
    let {mainAxis: c, crossAxis: y, alignmentAxis: x} = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return l && typeof x == "number" && (y = l === "end" ? x * -1 : x),
    a ? {
        x: y * f,
        y: c * u
    } : {
        x: c * u,
        y: y * f
    }
}
const xx = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await yx(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , wx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: b => {
                    let {x: m, y: h} = b;
                    return {
                        x: m,
                        y: h
                    }
                }
            }, ...a} = Wt(e, t)
              , u = {
                x: n,
                y: r
            }
              , f = await $o(t, a)
              , p = Tn(Qt(o))
              , c = Hu(p);
            let y = u[c]
              , x = u[p];
            if (i) {
                const b = c === "y" ? "top" : "left"
                  , m = c === "y" ? "bottom" : "right"
                  , h = y + f[b]
                  , g = y - f[m];
                y = Ma(h, y, g)
            }
            if (s) {
                const b = p === "y" ? "top" : "left"
                  , m = p === "y" ? "bottom" : "right"
                  , h = x + f[b]
                  , g = x - f[m];
                x = Ma(h, x, g)
            }
            const v = l.fn({
                ...t,
                [c]: y,
                [p]: x
            });
            return {
                ...v,
                data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                        [c]: i,
                        [p]: s
                    }
                }
            }
        }
    }
}
  , bx = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = Wt(e, t)
              , f = {
                x: n,
                y: r
            }
              , p = Tn(o)
              , c = Hu(p);
            let y = f[c]
              , x = f[p];
            const v = Wt(l, t)
              , b = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (a) {
                const g = c === "y" ? "height" : "width"
                  , E = i.reference[c] - i.floating[g] + b.mainAxis
                  , S = i.reference[c] + i.reference[g] - b.mainAxis;
                y < E ? y = E : y > S && (y = S)
            }
            if (u) {
                var m, h;
                const g = c === "y" ? "width" : "height"
                  , E = ["top", "left"].includes(Qt(o))
                  , S = i.reference[p] - i.floating[g] + (E && ((m = s.offset) == null ? void 0 : m[p]) || 0) + (E ? 0 : b.crossAxis)
                  , C = i.reference[p] + i.reference[g] + (E ? 0 : ((h = s.offset) == null ? void 0 : h[p]) || 0) - (E ? b.crossAxis : 0);
                x < S ? x = S : x > C && (x = C)
            }
            return {
                [c]: y,
                [p]: x
            }
        }
    }
}
  , Ex = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = Wt(e, t)
              , f = await $o(t, u)
              , p = Qt(o)
              , c = Yr(o)
              , y = Tn(o) === "y"
              , {width: x, height: v} = i.floating;
            let b, m;
            p === "top" || p === "bottom" ? (b = p,
            m = c === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = p,
            b = c === "end" ? "top" : "bottom");
            const h = v - f.top - f.bottom
              , g = x - f.left - f.right
              , E = Nn(v - f[b], h)
              , S = Nn(x - f[m], g)
              , C = !t.middlewareData.shift;
            let N = E
              , T = S;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = g),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            C && !c) {
                const O = Ke(f.left, 0)
                  , $ = Ke(f.right, 0)
                  , D = Ke(f.top, 0)
                  , W = Ke(f.bottom, 0);
                y ? T = x - 2 * (O !== 0 || $ !== 0 ? O + $ : Ke(f.left, f.right)) : N = v - 2 * (D !== 0 || W !== 0 ? D + W : Ke(f.top, f.bottom))
            }
            await a({
                ...t,
                availableWidth: T,
                availableHeight: N
            });
            const I = await s.getDimensions(l.floating);
            return x !== I.width || v !== I.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Fs() {
    return typeof window < "u"
}
function Xr(e) {
    return dm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Mt(e) {
    var t;
    return (t = (dm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function dm(e) {
    return Fs() ? e instanceof Node || e instanceof qe(e).Node : !1
}
function xt(e) {
    return Fs() ? e instanceof Element || e instanceof qe(e).Element : !1
}
function Ot(e) {
    return Fs() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1
}
function jd(e) {
    return !Fs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot
}
function Zo(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = wt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function Sx(e) {
    return ["table", "td", "th"].includes(Xr(e))
}
function $s(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Gu(e) {
    const t = Ku()
      , n = xt(e) ? wt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function kx(e) {
    let t = jn(e);
    for (; Ot(t) && !Vr(t); ) {
        if (Gu(t))
            return t;
        if ($s(t))
            return null;
        t = jn(t)
    }
    return null
}
function Ku() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Vr(e) {
    return ["html", "body", "#document"].includes(Xr(e))
}
function wt(e) {
    return qe(e).getComputedStyle(e)
}
function Us(e) {
    return xt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function jn(e) {
    if (Xr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || jd(e) && e.host || Mt(e);
    return jd(t) ? t.host : t
}
function fm(e) {
    const t = jn(e);
    return Vr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ot(t) && Zo(t) ? t : fm(t)
}
function Uo(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = fm(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = qe(o);
    if (i) {
        const l = La(s);
        return t.concat(s, s.visualViewport || [], Zo(o) ? o : [], l && n ? Uo(l) : [])
    }
    return t.concat(o, Uo(o, [], n))
}
function La(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function pm(e) {
    const t = wt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Ot(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = fs(n) !== i || fs(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function Yu(e) {
    return xt(e) ? e : e.contextElement
}
function Cr(e) {
    const t = Yu(e);
    if (!Ot(t))
        return Pn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = pm(t);
    let s = (i ? fs(n.width) : n.width) / r
      , l = (i ? fs(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const Cx = Pn(0);
function hm(e) {
    const t = qe(e);
    return !Ku() || !t.visualViewport ? Cx : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Nx(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== qe(e) ? !1 : t
}
function qn(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = Yu(e);
    let s = Pn(1);
    t && (r ? xt(r) && (s = Cr(r)) : s = Cr(e));
    const l = Nx(i, n, r) ? hm(i) : Pn(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , f = o.width / s.x
      , p = o.height / s.y;
    if (i) {
        const c = qe(i)
          , y = r && xt(r) ? qe(r) : r;
        let x = c
          , v = La(x);
        for (; v && r && y !== x; ) {
            const b = Cr(v)
              , m = v.getBoundingClientRect()
              , h = wt(v)
              , g = m.left + (v.clientLeft + parseFloat(h.paddingLeft)) * b.x
              , E = m.top + (v.clientTop + parseFloat(h.paddingTop)) * b.y;
            a *= b.x,
            u *= b.y,
            f *= b.x,
            p *= b.y,
            a += g,
            u += E,
            x = qe(v),
            v = La(x)
        }
    }
    return hs({
        width: f,
        height: p,
        x: a,
        y: u
    })
}
function Px(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = Mt(r)
      , l = t ? $s(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Pn(1);
    const f = Pn(0)
      , p = Ot(r);
    if ((p || !p && !i) && ((Xr(r) !== "body" || Zo(s)) && (a = Us(r)),
    Ot(r))) {
        const c = qn(r);
        u = Cr(r),
        f.x = c.x + r.clientLeft,
        f.y = c.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + f.x,
        y: n.y * u.y - a.scrollTop * u.y + f.y
    }
}
function Tx(e) {
    return Array.from(e.getClientRects())
}
function Ia(e, t) {
    const n = Us(e).scrollLeft;
    return t ? t.left + n : qn(Mt(e)).left + n
}
function jx(e) {
    const t = Mt(e)
      , n = Us(e)
      , r = e.ownerDocument.body
      , o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Ia(e);
    const l = -n.scrollTop;
    return wt(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function Rx(e, t) {
    const n = qe(e)
      , r = Mt(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = Ku();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
function Ax(e, t) {
    const n = qn(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Ot(e) ? Cr(e) : Pn(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function Rd(e, t, n) {
    let r;
    if (t === "viewport")
        r = Rx(e, n);
    else if (t === "document")
        r = jx(Mt(e));
    else if (xt(t))
        r = Ax(t, n);
    else {
        const o = hm(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return hs(r)
}
function mm(e, t) {
    const n = jn(e);
    return n === t || !xt(n) || Vr(n) ? !1 : wt(n).position === "fixed" || mm(n, t)
}
function Ox(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Uo(e, [], !1).filter(l => xt(l) && Xr(l) !== "body")
      , o = null;
    const i = wt(e).position === "fixed";
    let s = i ? jn(e) : e;
    for (; xt(s) && !Vr(s); ) {
        const l = wt(s)
          , a = Gu(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Zo(s) && !a && mm(e, s)) ? r = r.filter(f => f !== s) : o = l,
        s = jn(s)
    }
    return t.set(e, r),
    r
}
function Mx(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? $s(t) ? [] : Ox(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, f) => {
        const p = Rd(t, f, o);
        return u.top = Ke(p.top, u.top),
        u.right = Nn(p.right, u.right),
        u.bottom = Nn(p.bottom, u.bottom),
        u.left = Ke(p.left, u.left),
        u
    }
    , Rd(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function _x(e) {
    const {width: t, height: n} = pm(e);
    return {
        width: t,
        height: n
    }
}
function Lx(e, t, n) {
    const r = Ot(t)
      , o = Mt(t)
      , i = n === "fixed"
      , s = qn(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = Pn(0);
    if (r || !r && !i)
        if ((Xr(t) !== "body" || Zo(o)) && (l = Us(t)),
        r) {
            const y = qn(t, !0, i, t);
            a.x = y.x + t.clientLeft,
            a.y = y.y + t.clientTop
        } else
            o && (a.x = Ia(o));
    let u = 0
      , f = 0;
    if (o && !r && !i) {
        const y = o.getBoundingClientRect();
        f = y.top + l.scrollTop,
        u = y.left + l.scrollLeft - Ia(o, y)
    }
    const p = s.left + l.scrollLeft - a.x - u
      , c = s.top + l.scrollTop - a.y - f;
    return {
        x: p,
        y: c,
        width: s.width,
        height: s.height
    }
}
function Rl(e) {
    return wt(e).position === "static"
}
function Ad(e, t) {
    if (!Ot(e) || wt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Mt(e) === n && (n = n.ownerDocument.body),
    n
}
function gm(e, t) {
    const n = qe(e);
    if ($s(e))
        return n;
    if (!Ot(e)) {
        let o = jn(e);
        for (; o && !Vr(o); ) {
            if (xt(o) && !Rl(o))
                return o;
            o = jn(o)
        }
        return n
    }
    let r = Ad(e, t);
    for (; r && Sx(r) && Rl(r); )
        r = Ad(r, t);
    return r && Vr(r) && Rl(r) && !Gu(r) ? n : r || kx(e) || n
}
const Ix = async function(e) {
    const t = this.getOffsetParent || gm
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: Lx(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Dx(e) {
    return wt(e).direction === "rtl"
}
const zx = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Px,
    getDocumentElement: Mt,
    getClippingRect: Mx,
    getOffsetParent: gm,
    getElementRects: Ix,
    getClientRects: Tx,
    getDimensions: _x,
    getScale: Cr,
    isElement: xt,
    isRTL: Dx
};
function Fx(e, t) {
    let n = null, r;
    const o = Mt(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const {left: u, top: f, width: p, height: c} = e.getBoundingClientRect();
        if (l || t(),
        !p || !c)
            return;
        const y = ki(f)
          , x = ki(o.clientWidth - (u + p))
          , v = ki(o.clientHeight - (f + c))
          , b = ki(u)
          , h = {
            rootMargin: -y + "px " + -x + "px " + -v + "px " + -b + "px",
            threshold: Ke(0, Nn(1, a)) || 1
        };
        let g = !0;
        function E(S) {
            const C = S[0].intersectionRatio;
            if (C !== a) {
                if (!g)
                    return s();
                C ? s(!1, C) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            g = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...h,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,h)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function $x(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = Yu(e)
      , f = o || i ? [...u ? Uo(u) : [], ...Uo(t)] : [];
    f.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }),
        i && m.addEventListener("resize", n)
    }
    );
    const p = u && l ? Fx(u, n) : null;
    let c = -1
      , y = null;
    s && (y = new ResizeObserver(m => {
        let[h] = m;
        h && h.target === u && y && (y.unobserve(t),
        cancelAnimationFrame(c),
        c = requestAnimationFrame( () => {
            var g;
            (g = y) == null || g.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && y.observe(u),
    y.observe(t));
    let x, v = a ? qn(e) : null;
    a && b();
    function b() {
        const m = qn(e);
        v && (m.x !== v.x || m.y !== v.y || m.width !== v.width || m.height !== v.height) && n(),
        v = m,
        x = requestAnimationFrame(b)
    }
    return n(),
    () => {
        var m;
        f.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        p == null || p(),
        (m = y) == null || m.disconnect(),
        y = null,
        a && cancelAnimationFrame(x)
    }
}
const Ux = xx
  , Bx = wx
  , Vx = gx
  , Hx = Ex
  , Wx = vx
  , Od = mx
  , Qx = bx
  , Gx = (e, t, n) => {
    const r = new Map
      , o = {
        platform: zx,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return hx(e, t, {
        ...o,
        platform: i
    })
}
;
var $i = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function ms(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!ms(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !ms(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function vm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Md(e, t) {
    const n = vm(e);
    return Math.round(t * n) / n
}
function Al(e) {
    const t = w.useRef(e);
    return $i( () => {
        t.current = e
    }
    ),
    t
}
function Kx(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [f,p] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [c,y] = w.useState(r);
    ms(c, r) || y(r);
    const [x,v] = w.useState(null)
      , [b,m] = w.useState(null)
      , h = w.useCallback(k => {
        k !== C.current && (C.current = k,
        v(k))
    }
    , [])
      , g = w.useCallback(k => {
        k !== N.current && (N.current = k,
        m(k))
    }
    , [])
      , E = i || x
      , S = s || b
      , C = w.useRef(null)
      , N = w.useRef(null)
      , T = w.useRef(f)
      , I = a != null
      , O = Al(a)
      , $ = Al(o)
      , D = Al(u)
      , W = w.useCallback( () => {
        if (!C.current || !N.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: c
        };
        $.current && (k.platform = $.current),
        Gx(C.current, N.current, k).then(R => {
            const z = {
                ...R,
                isPositioned: D.current !== !1
            };
            M.current && !ms(T.current, z) && (T.current = z,
            qo.flushSync( () => {
                p(z)
            }
            ))
        }
        )
    }
    , [c, t, n, $, D]);
    $i( () => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
        p(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const M = w.useRef(!1);
    $i( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    $i( () => {
        if (E && (C.current = E),
        S && (N.current = S),
        E && S) {
            if (O.current)
                return O.current(E, S, W);
            W()
        }
    }
    , [E, S, W, O, I]);
    const Q = w.useMemo( () => ({
        reference: C,
        floating: N,
        setReference: h,
        setFloating: g
    }), [h, g])
      , U = w.useMemo( () => ({
        reference: E,
        floating: S
    }), [E, S])
      , G = w.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!U.floating)
            return k;
        const R = Md(U.floating, f.x)
          , z = Md(U.floating, f.y);
        return l ? {
            ...k,
            transform: "translate(" + R + "px, " + z + "px)",
            ...vm(U.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: R,
            top: z
        }
    }
    , [n, l, U.floating, f.x, f.y]);
    return w.useMemo( () => ({
        ...f,
        update: W,
        refs: Q,
        elements: U,
        floatingStyles: G
    }), [f, W, Q, U, G])
}
const Yx = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Od({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Od({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , Xx = (e, t) => ({
    ...Ux(e),
    options: [e, t]
})
  , qx = (e, t) => ({
    ...Bx(e),
    options: [e, t]
})
  , Zx = (e, t) => ({
    ...Qx(e),
    options: [e, t]
})
  , Jx = (e, t) => ({
    ...Vx(e),
    options: [e, t]
})
  , ew = (e, t) => ({
    ...Hx(e),
    options: [e, t]
})
  , tw = (e, t) => ({
    ...Wx(e),
    options: [e, t]
})
  , nw = (e, t) => ({
    ...Yx(e),
    options: [e, t]
});
var rw = "Arrow"
  , ym = w.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return d.jsx(Ve.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : d.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
ym.displayName = rw;
var ow = ym;
function iw(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = w.createContext(s)
          , a = n.length;
        n = [...n, s];
        function u(p) {
            const {scope: c, children: y, ...x} = p
              , v = (c == null ? void 0 : c[e][a]) || l
              , b = w.useMemo( () => x, Object.values(x));
            return d.jsx(v.Provider, {
                value: b,
                children: y
            })
        }
        function f(p, c) {
            const y = (c == null ? void 0 : c[e][a]) || l
              , x = w.useContext(y);
            if (x)
                return x;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, f]
    }
    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, sw(o, ...t)]
}
function sw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const p = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...p
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function lw(e) {
    const [t,n] = w.useState(void 0);
    return Xn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var xm = "Popper"
  , [wm,bm] = iw(xm)
  , [rb,Em] = wm(xm)
  , Sm = "PopperAnchor"
  , km = w.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Em(Sm, n)
      , s = w.useRef(null)
      , l = yt(t, s);
    return w.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : d.jsx(Ve.div, {
        ...o,
        ref: l
    })
}
);
km.displayName = Sm;
var Xu = "PopperContent"
  , [aw,uw] = wm(Xu)
  , Cm = w.forwardRef( (e, t) => {
    var at, Kt, Yt, Xt, Jo, tr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: f=0, sticky: p="partial", hideWhenDetached: c=!1, updatePositionStrategy: y="optimized", onPlaced: x, ...v} = e
      , b = Em(Xu, n)
      , [m,h] = w.useState(null)
      , g = yt(t, Mn => h(Mn))
      , [E,S] = w.useState(null)
      , C = lw(E)
      , N = (C == null ? void 0 : C.width) ?? 0
      , T = (C == null ? void 0 : C.height) ?? 0
      , I = r + (i !== "center" ? "-" + i : "")
      , O = typeof f == "number" ? f : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...f
    }
      , $ = Array.isArray(u) ? u : [u]
      , D = $.length > 0
      , W = {
        padding: O,
        boundary: $.filter(dw),
        altBoundary: D
    }
      , {refs: M, floatingStyles: Q, placement: U, isPositioned: G, middlewareData: k} = Kx({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...Mn) => $x(...Mn, {
            animationFrame: y === "always"
        }),
        elements: {
            reference: b.anchor
        },
        middleware: [Xx({
            mainAxis: o + T,
            alignmentAxis: s
        }), a && qx({
            mainAxis: !0,
            crossAxis: !1,
            limiter: p === "partial" ? Zx() : void 0,
            ...W
        }), a && Jx({
            ...W
        }), ew({
            ...W,
            apply: ({elements: Mn, rects: qr, availableWidth: ei, availableHeight: qt}) => {
                const {width: Ys, height: Xs} = qr.reference
                  , be = Mn.floating.style;
                be.setProperty("--radix-popper-available-width", `${ei}px`),
                be.setProperty("--radix-popper-available-height", `${qt}px`),
                be.setProperty("--radix-popper-anchor-width", `${Ys}px`),
                be.setProperty("--radix-popper-anchor-height", `${Xs}px`)
            }
        }), E && nw({
            element: E,
            padding: l
        }), fw({
            arrowWidth: N,
            arrowHeight: T
        }), c && tw({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [R,z] = Tm(U)
      , L = At(x);
    Xn( () => {
        G && (L == null || L())
    }
    , [G, L]);
    const F = (at = k.arrow) == null ? void 0 : at.x
      , Y = (Kt = k.arrow) == null ? void 0 : Kt.y
      , le = ((Yt = k.arrow) == null ? void 0 : Yt.centerOffset) !== 0
      , [He,Z] = w.useState();
    return Xn( () => {
        m && Z(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    d.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Q,
            transform: G ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: He,
            "--radix-popper-transform-origin": [(Xt = k.transformOrigin) == null ? void 0 : Xt.x, (Jo = k.transformOrigin) == null ? void 0 : Jo.y].join(" "),
            ...((tr = k.hide) == null ? void 0 : tr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: d.jsx(aw, {
            scope: n,
            placedSide: R,
            onArrowChange: S,
            arrowX: F,
            arrowY: Y,
            shouldHideArrow: le,
            children: d.jsx(Ve.div, {
                "data-side": R,
                "data-align": z,
                ...v,
                ref: g,
                style: {
                    ...v.style,
                    animation: G ? void 0 : "none"
                }
            })
        })
    })
}
);
Cm.displayName = Xu;
var Nm = "PopperArrow"
  , cw = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Pm = w.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = uw(Nm, r)
      , s = cw[i.placedSide];
    return d.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: d.jsx(ow, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Pm.displayName = Nm;
function dw(e) {
    return e !== null
}
var fw = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var b, m, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,f] = Tm(n)
          , p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f]
          , c = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2
          , y = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
        let x = ""
          , v = "";
        return u === "bottom" ? (x = s ? p : `${c}px`,
        v = `${-a}px`) : u === "top" ? (x = s ? p : `${c}px`,
        v = `${r.floating.height + a}px`) : u === "right" ? (x = `${-a}px`,
        v = s ? p : `${y}px`) : u === "left" && (x = `${r.floating.width + a}px`,
        v = s ? p : `${y}px`),
        {
            data: {
                x,
                y: v
            }
        }
    }
});
function Tm(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var pw = km
  , hw = Cm
  , mw = Pm
  , [Bs,ob] = Eh("Tooltip", [bm])
  , qu = bm()
  , jm = "TooltipProvider"
  , gw = 700
  , _d = "tooltip.open"
  , [vw,Rm] = Bs(jm)
  , Am = e => {
    const {__scopeTooltip: t, delayDuration: n=gw, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , [s,l] = w.useState(!0)
      , a = w.useRef(!1)
      , u = w.useRef(0);
    return w.useEffect( () => {
        const f = u.current;
        return () => window.clearTimeout(f)
    }
    , []),
    d.jsx(vw, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: w.useCallback( () => {
            window.clearTimeout(u.current),
            l(!1)
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => l(!0), r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback(f => {
            a.current = f
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
Am.displayName = jm;
var Om = "Tooltip"
  , [ib,Vs] = Bs(Om)
  , Da = "TooltipTrigger"
  , yw = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Vs(Da, n)
      , i = Rm(Da, n)
      , s = qu(n)
      , l = w.useRef(null)
      , a = yt(t, l, o.onTriggerChange)
      , u = w.useRef(!1)
      , f = w.useRef(!1)
      , p = w.useCallback( () => u.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", p), [p]),
    d.jsx(pw, {
        asChild: !0,
        ...s,
        children: d.jsx(Ve.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: ve(e.onPointerMove, c => {
                c.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                f.current = !0)
            }
            ),
            onPointerLeave: ve(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                f.current = !1
            }
            ),
            onPointerDown: ve(e.onPointerDown, () => {
                u.current = !0,
                document.addEventListener("pointerup", p, {
                    once: !0
                })
            }
            ),
            onFocus: ve(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ve(e.onBlur, o.onClose),
            onClick: ve(e.onClick, o.onClose)
        })
    })
}
);
yw.displayName = Da;
var xw = "TooltipPortal"
  , [sb,ww] = Bs(xw, {
    forceMount: void 0
})
  , Hr = "TooltipContent"
  , Mm = w.forwardRef( (e, t) => {
    const n = ww(Hr, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = Vs(Hr, e.__scopeTooltip);
    return d.jsx(zu, {
        present: r || s.open,
        children: s.disableHoverableContent ? d.jsx(_m, {
            side: o,
            ...i,
            ref: t
        }) : d.jsx(bw, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , bw = w.forwardRef( (e, t) => {
    const n = Vs(Hr, e.__scopeTooltip)
      , r = Rm(Hr, e.__scopeTooltip)
      , o = w.useRef(null)
      , i = yt(t, o)
      , [s,l] = w.useState(null)
      , {trigger: a, onClose: u} = n
      , f = o.current
      , {onPointerInTransitChange: p} = r
      , c = w.useCallback( () => {
        l(null),
        p(!1)
    }
    , [p])
      , y = w.useCallback( (x, v) => {
        const b = x.currentTarget
          , m = {
            x: x.clientX,
            y: x.clientY
        }
          , h = Cw(m, b.getBoundingClientRect())
          , g = Nw(m, h)
          , E = Pw(v.getBoundingClientRect())
          , S = jw([...g, ...E]);
        l(S),
        p(!0)
    }
    , [p]);
    return w.useEffect( () => () => c(), [c]),
    w.useEffect( () => {
        if (a && f) {
            const x = b => y(b, f)
              , v = b => y(b, a);
            return a.addEventListener("pointerleave", x),
            f.addEventListener("pointerleave", v),
            () => {
                a.removeEventListener("pointerleave", x),
                f.removeEventListener("pointerleave", v)
            }
        }
    }
    , [a, f, y, c]),
    w.useEffect( () => {
        if (s) {
            const x = v => {
                const b = v.target
                  , m = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , h = (a == null ? void 0 : a.contains(b)) || (f == null ? void 0 : f.contains(b))
                  , g = !Tw(m, s);
                h ? c() : g && (c(),
                u())
            }
            ;
            return document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
        }
    }
    , [a, f, s, u, c]),
    d.jsx(_m, {
        ...e,
        ref: i
    })
}
)
  , [Ew,Sw] = Bs(Om, {
    isInside: !1
})
  , _m = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = Vs(Hr, n)
      , u = qu(n)
      , {onClose: f} = a;
    return w.useEffect( () => (document.addEventListener(_d, f),
    () => document.removeEventListener(_d, f)), [f]),
    w.useEffect( () => {
        if (a.trigger) {
            const p = c => {
                const y = c.target;
                y != null && y.contains(a.trigger) && f()
            }
            ;
            return window.addEventListener("scroll", p, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", p, {
                capture: !0
            })
        }
    }
    , [a.trigger, f]),
    d.jsx(Du, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: f,
        children: d.jsxs(hw, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [d.jsx(bh, {
                children: r
            }), d.jsx(Ew, {
                scope: n,
                isInside: !0,
                children: d.jsx(cy, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Mm.displayName = Hr;
var Lm = "TooltipArrow"
  , kw = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = qu(n);
    return Sw(Lm, n).isInside ? null : d.jsx(mw, {
        ...o,
        ...r,
        ref: t
    })
}
);
kw.displayName = Lm;
function Cw(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Nw(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Pw(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function Tw(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x
          , a = t[i].y
          , u = t[s].x
          , f = t[s].y;
        a > r != f > r && n < (u - l) * (r - a) / (f - a) + l && (o = !o)
    }
    return o
}
function jw(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Rw(t)
}
function Rw(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Aw = Am
  , Im = Mm;
const Ow = Aw
  , Mw = w.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => d.jsx(Im, {
    ref: r,
    sideOffset: t,
    className: er("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Mw.displayName = Im.displayName;
var Hs = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Ws = typeof window > "u" || "Deno"in globalThis;
function dt() {}
function _w(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Lw(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function Iw(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ld(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Dw(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Id(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Zu(s, t.options))
                return !1
        } else if (!Vo(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function Dd(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Bo(t.options.mutationKey) !== Bo(i))
                return !1
        } else if (!Vo(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Zu(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Bo)(e)
}
function Bo(e) {
    return JSON.stringify(e, (t, n) => za(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Vo(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Vo(e[n], t[n])) : !1
}
function Dm(e, t) {
    if (e === t)
        return e;
    const n = zd(e) && zd(t);
    if (n || za(e) && za(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < s; u++) {
            const f = n ? u : i[u];
            (!n && r.includes(f) || n) && e[f] === void 0 && t[f] === void 0 ? (l[f] = void 0,
            a++) : (l[f] = Dm(e[f], t[f]),
            l[f] === e[f] && e[f] !== void 0 && a++)
        }
        return o === s && a === o ? e : l
    }
    return t
}
function zd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function za(e) {
    if (!Fd(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Fd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Fd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function zw(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Fw(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Dm(e, t) : t
}
function $w(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Uw(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Ju = Symbol();
function zm(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Ju ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Fn, an, Pr, Xd, Bw = (Xd = class extends Hs {
    constructor() {
        super();
        q(this, Fn);
        q(this, an);
        q(this, Pr);
        H(this, Pr, t => {
            if (!Ws && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, an) || this.setEventListener(P(this, Pr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, an)) == null || t.call(this),
        H(this, an, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Pr, t),
        (n = P(this, an)) == null || n.call(this),
        H(this, an, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        P(this, Fn) !== t && (H(this, Fn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof P(this, Fn) == "boolean" ? P(this, Fn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Fn = new WeakMap,
an = new WeakMap,
Pr = new WeakMap,
Xd), Fm = new Bw, Tr, un, jr, qd, Vw = (qd = class extends Hs {
    constructor() {
        super();
        q(this, Tr, !0);
        q(this, un);
        q(this, jr);
        H(this, jr, t => {
            if (!Ws && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, un) || this.setEventListener(P(this, jr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, un)) == null || t.call(this),
        H(this, un, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, jr, t),
        (n = P(this, un)) == null || n.call(this),
        H(this, un, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        P(this, Tr) !== t && (H(this, Tr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return P(this, Tr)
    }
}
,
Tr = new WeakMap,
un = new WeakMap,
jr = new WeakMap,
qd), gs = new Vw;
function Hw() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Ww(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function $m(e) {
    return (e ?? "online") === "online" ? gs.isOnline() : !0
}
var Um = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Ol(e) {
    return e instanceof Um
}
function Bm(e) {
    let t = !1, n = 0, r = !1, o;
    const i = Hw()
      , s = v => {
        var b;
        r || (c(new Um(v)),
        (b = e.abort) == null || b.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Fm.isFocused() && (e.networkMode === "always" || gs.isOnline()) && e.canRun()
      , f = () => $m(e.networkMode) && e.canRun()
      , p = v => {
        var b;
        r || (r = !0,
        (b = e.onSuccess) == null || b.call(e, v),
        o == null || o(),
        i.resolve(v))
    }
      , c = v => {
        var b;
        r || (r = !0,
        (b = e.onError) == null || b.call(e, v),
        o == null || o(),
        i.reject(v))
    }
      , y = () => new Promise(v => {
        var b;
        o = m => {
            (r || u()) && v(m)
        }
        ,
        (b = e.onPause) == null || b.call(e)
    }
    ).then( () => {
        var v;
        o = void 0,
        r || (v = e.onContinue) == null || v.call(e)
    }
    )
      , x = () => {
        if (r)
            return;
        let v;
        const b = n === 0 ? e.initialPromise : void 0;
        try {
            v = b ?? e.fn()
        } catch (m) {
            v = Promise.reject(m)
        }
        Promise.resolve(v).then(p).catch(m => {
            var C;
            if (r)
                return;
            const h = e.retry ?? (Ws ? 0 : 3)
              , g = e.retryDelay ?? Ww
              , E = typeof g == "function" ? g(n, m) : g
              , S = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, m);
            if (t || !S) {
                c(m);
                return
            }
            n++,
            (C = e.onFail) == null || C.call(e, n, m),
            zw(E).then( () => u() ? void 0 : y()).then( () => {
                t ? c(m) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: f,
        start: () => (f() ? x() : y().then(x),
        i)
    }
}
function Qw() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = l => setTimeout(l, 0);
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var Me = Qw(), $n, Zd, Vm = (Zd = class {
    constructor() {
        q(this, $n)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Lw(this.gcTime) && H(this, $n, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ws ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        P(this, $n) && (clearTimeout(P(this, $n)),
        H(this, $n, void 0))
    }
}
,
$n = new WeakMap,
Zd), Rr, Ar, tt, Te, Ho, Un, ft, Lt, Jd, Gw = (Jd = class extends Vm {
    constructor(t) {
        super();
        q(this, ft);
        q(this, Rr);
        q(this, Ar);
        q(this, tt);
        q(this, Te);
        q(this, Ho);
        q(this, Un);
        H(this, Un, !1),
        H(this, Ho, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, tt, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, Rr, Yw(this.options)),
        this.state = t.state ?? P(this, Rr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = P(this, Te)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...P(this, Ho),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, tt).remove(this)
    }
    setData(t, n) {
        const r = Fw(this.state.data, t, this.options);
        return Ce(this, ft, Lt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ce(this, ft, Lt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = P(this, Te)) == null ? void 0 : r.promise;
        return (o = P(this, Te)) == null || o.cancel(t),
        n ? n.then(dt).catch(dt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, Rr))
    }
    isActive() {
        return this.observers.some(t => Dw(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ju || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !Iw(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, Te)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, Te)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        P(this, tt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (P(this, Te) && (P(this, Un) ? P(this, Te).cancel({
            revert: !0
        }) : P(this, Te).cancelRetry()),
        this.scheduleGc()),
        P(this, tt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ce(this, ft, Lt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var a, u, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, Te))
                return P(this, Te).continueRetry(),
                P(this, Te).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const p = this.observers.find(c => c.options.queryFn);
            p && this.setOptions(p.options)
        }
        const r = new AbortController
          , o = p => {
            Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (H(this, Un, !0),
                r.signal)
            })
        }
          , i = () => {
            const p = zm(this.options, n)
              , c = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(c),
            H(this, Un, !1),
            this.options.persister ? this.options.persister(p, c, this) : p(c)
        }
          , s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i
        };
        o(s),
        (a = this.options.behavior) == null || a.onFetch(s, this),
        H(this, Ar, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && Ce(this, ft, Lt).call(this, {
            type: "fetch",
            meta: (f = s.fetchOptions) == null ? void 0 : f.meta
        });
        const l = p => {
            var c, y, x, v;
            Ol(p) && p.silent || Ce(this, ft, Lt).call(this, {
                type: "error",
                error: p
            }),
            Ol(p) || ((y = (c = P(this, tt).config).onError) == null || y.call(c, p, this),
            (v = (x = P(this, tt).config).onSettled) == null || v.call(x, this.state.data, p, this)),
            this.scheduleGc()
        }
        ;
        return H(this, Te, Bm({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: p => {
                var c, y, x, v;
                if (p === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(p)
                } catch (b) {
                    l(b);
                    return
                }
                (y = (c = P(this, tt).config).onSuccess) == null || y.call(c, p, this),
                (v = (x = P(this, tt).config).onSettled) == null || v.call(x, p, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (p, c) => {
                Ce(this, ft, Lt).call(this, {
                    type: "failed",
                    failureCount: p,
                    error: c
                })
            }
            ,
            onPause: () => {
                Ce(this, ft, Lt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ce(this, ft, Lt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        P(this, Te).start()
    }
}
,
Rr = new WeakMap,
Ar = new WeakMap,
tt = new WeakMap,
Te = new WeakMap,
Ho = new WeakMap,
Un = new WeakMap,
ft = new WeakSet,
Lt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Kw(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Ol(o) && o.revert && P(this, Ar) ? {
                ...P(this, Ar),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Me.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        P(this, tt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Jd);
function Kw(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: $m(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Yw(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ct, ef, Xw = (ef = class extends Hs {
    constructor(t={}) {
        super();
        q(this, Ct);
        this.config = t,
        H(this, Ct, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? Zu(o, n);
        let s = this.get(i);
        return s || (s = new Gw({
            cache: this,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        P(this, Ct).has(t.queryHash) || (P(this, Ct).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = P(this, Ct).get(t.queryHash);
        n && (t.destroy(),
        n === t && P(this, Ct).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, Ct).get(t)
    }
    getAll() {
        return [...P(this, Ct).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Id(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Id(t, r)) : n
    }
    notify(t) {
        Me.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Ct = new WeakMap,
ef), Nt, Ae, Bn, Pt, nn, tf, qw = (tf = class extends Vm {
    constructor(t) {
        super();
        q(this, Pt);
        q(this, Nt);
        q(this, Ae);
        q(this, Bn);
        this.mutationId = t.mutationId,
        H(this, Ae, t.mutationCache),
        H(this, Nt, []),
        this.state = t.state || Zw(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        P(this, Nt).includes(t) || (P(this, Nt).push(t),
        this.clearGcTimeout(),
        P(this, Ae).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Nt, P(this, Nt).filter(n => n !== t)),
        this.scheduleGc(),
        P(this, Ae).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        P(this, Nt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Ae).remove(this))
    }
    continue() {
        var t;
        return ((t = P(this, Bn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, i, s, l, a, u, f, p, c, y, x, v, b, m, h, g, E, S, C, N;
        H(this, Bn, Bm({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (T, I) => {
                Ce(this, Pt, nn).call(this, {
                    type: "failed",
                    failureCount: T,
                    error: I
                })
            }
            ,
            onPause: () => {
                Ce(this, Pt, nn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ce(this, Pt, nn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Ae).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !P(this, Bn).canStart();
        try {
            if (!n) {
                Ce(this, Pt, nn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((i = (o = P(this, Ae).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const I = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                I !== this.state.context && Ce(this, Pt, nn).call(this, {
                    type: "pending",
                    context: I,
                    variables: t,
                    isPaused: r
                })
            }
            const T = await P(this, Bn).start();
            return await ((u = (a = P(this, Ae).config).onSuccess) == null ? void 0 : u.call(a, T, t, this.state.context, this)),
            await ((p = (f = this.options).onSuccess) == null ? void 0 : p.call(f, T, t, this.state.context)),
            await ((y = (c = P(this, Ae).config).onSettled) == null ? void 0 : y.call(c, T, null, this.state.variables, this.state.context, this)),
            await ((v = (x = this.options).onSettled) == null ? void 0 : v.call(x, T, null, t, this.state.context)),
            Ce(this, Pt, nn).call(this, {
                type: "success",
                data: T
            }),
            T
        } catch (T) {
            try {
                throw await ((m = (b = P(this, Ae).config).onError) == null ? void 0 : m.call(b, T, t, this.state.context, this)),
                await ((g = (h = this.options).onError) == null ? void 0 : g.call(h, T, t, this.state.context)),
                await ((S = (E = P(this, Ae).config).onSettled) == null ? void 0 : S.call(E, void 0, T, this.state.variables, this.state.context, this)),
                await ((N = (C = this.options).onSettled) == null ? void 0 : N.call(C, void 0, T, t, this.state.context)),
                T
            } finally {
                Ce(this, Pt, nn).call(this, {
                    type: "error",
                    error: T
                })
            }
        } finally {
            P(this, Ae).runNext(this)
        }
    }
}
,
Nt = new WeakMap,
Ae = new WeakMap,
Bn = new WeakMap,
Pt = new WeakSet,
nn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Me.batch( () => {
        P(this, Nt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        P(this, Ae).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
tf);
function Zw() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var We, Wo, nf, Jw = (nf = class extends Hs {
    constructor(t={}) {
        super();
        q(this, We);
        q(this, Wo);
        this.config = t,
        H(this, We, new Map),
        H(this, Wo, Date.now())
    }
    build(t, n, r) {
        const o = new qw({
            mutationCache: this,
            mutationId: ++ri(this, Wo)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        const n = Ci(t)
          , r = P(this, We).get(n) ?? [];
        r.push(t),
        P(this, We).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ci(t);
        if (P(this, We).has(n)) {
            const o = (r = P(this, We).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? P(this, We).delete(n) : P(this, We).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = P(this, We).get(Ci(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = P(this, We).get(Ci(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...P(this, We).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Dd(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Dd(t, n))
    }
    notify(t) {
        Me.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Me.batch( () => Promise.all(t.map(n => n.continue().catch(dt))))
    }
}
,
We = new WeakMap,
Wo = new WeakMap,
nf);
function Ci(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function $d(e) {
    return {
        onFetch: (t, n) => {
            var f, p, c, y, x;
            const r = t.options
              , o = (c = (p = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : c.direction
              , i = ((y = t.state.data) == null ? void 0 : y.pages) || []
              , s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let v = !1;
                const b = g => {
                    Object.defineProperty(g, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = zm(t.options, t.fetchOptions)
                  , h = async (g, E, S) => {
                    if (v)
                        return Promise.reject();
                    if (E == null && g.pages.length)
                        return Promise.resolve(g);
                    const C = {
                        queryKey: t.queryKey,
                        pageParam: E,
                        direction: S ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    b(C);
                    const N = await m(C)
                      , {maxPages: T} = t.options
                      , I = S ? Uw : $w;
                    return {
                        pages: I(g.pages, N, T),
                        pageParams: I(g.pageParams, E, T)
                    }
                }
                ;
                if (o && i.length) {
                    const g = o === "backward"
                      , E = g ? e2 : Ud
                      , S = {
                        pages: i,
                        pageParams: s
                    }
                      , C = E(r, S);
                    l = await h(S, C, g)
                } else {
                    const g = e ?? i.length;
                    do {
                        const E = a === 0 ? s[0] ?? r.initialPageParam : Ud(r, l);
                        if (a > 0 && E == null)
                            break;
                        l = await h(l, E),
                        a++
                    } while (a < g)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, b;
                return (b = (v = t.options).persister) == null ? void 0 : b.call(v, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Ud(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function e2(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var fe, cn, dn, Or, Mr, fn, _r, Lr, rf, t2 = (rf = class {
    constructor(e={}) {
        q(this, fe);
        q(this, cn);
        q(this, dn);
        q(this, Or);
        q(this, Mr);
        q(this, fn);
        q(this, _r);
        q(this, Lr);
        H(this, fe, e.queryCache || new Xw),
        H(this, cn, e.mutationCache || new Jw),
        H(this, dn, e.defaultOptions || {}),
        H(this, Or, new Map),
        H(this, Mr, new Map),
        H(this, fn, 0)
    }
    mount() {
        ri(this, fn)._++,
        P(this, fn) === 1 && (H(this, _r, Fm.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, fe).onFocus())
        }
        )),
        H(this, Lr, gs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, fe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        ri(this, fn)._--,
        P(this, fn) === 0 && ((e = P(this, _r)) == null || e.call(this),
        H(this, _r, void 0),
        (t = P(this, Lr)) == null || t.call(this),
        H(this, Lr, void 0))
    }
    isFetching(e) {
        return P(this, fe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, cn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, fe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = P(this, fe).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime(Ld(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return P(this, fe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = P(this, fe).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = _w(t, i);
        if (s !== void 0)
            return P(this, fe).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Me.batch( () => P(this, fe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, fe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, fe);
        Me.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, fe)
          , r = {
            type: "active",
            ...e
        };
        return Me.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Me.batch( () => P(this, fe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(dt).catch(dt)
    }
    invalidateQueries(e={}, t={}) {
        return Me.batch( () => {
            if (P(this, fe).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = Me.batch( () => P(this, fe).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(dt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(dt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, fe).build(this, t);
        return n.isStaleByTime(Ld(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(dt).catch(dt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = $d(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(dt).catch(dt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = $d(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return gs.isOnline() ? P(this, cn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, fe)
    }
    getMutationCache() {
        return P(this, cn)
    }
    getDefaultOptions() {
        return P(this, dn)
    }
    setDefaultOptions(e) {
        H(this, dn, e)
    }
    setQueryDefaults(e, t) {
        P(this, Or).set(Bo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, Or).values()];
        let n = {};
        return t.forEach(r => {
            Vo(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        P(this, Mr).set(Bo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, Mr).values()];
        let n = {};
        return t.forEach(r => {
            Vo(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, dn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Zu(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === Ju && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, dn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, fe).clear(),
        P(this, cn).clear()
    }
}
,
fe = new WeakMap,
cn = new WeakMap,
dn = new WeakMap,
Or = new WeakMap,
Mr = new WeakMap,
fn = new WeakMap,
_r = new WeakMap,
Lr = new WeakMap,
rf), n2 = w.createContext(void 0), r2 = ({client: e, children: t}) => (w.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
d.jsx(n2.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function vs() {
    return vs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    vs.apply(this, arguments)
}
var mn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(mn || (mn = {}));
const Bd = "popstate";
function o2(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Fa("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Wm(o)
    }
    return s2(t, n, null, e)
}
function Be(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Hm(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function i2() {
    return Math.random().toString(36).substr(2, 8)
}
function Vd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Fa(e, t, n, r) {
    return n === void 0 && (n = null),
    vs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Qs(t) : t, {
        state: n,
        key: t && t.key || r || i2()
    })
}
function Wm(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Qs(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function s2(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = mn.Pop
      , a = null
      , u = f();
    u == null && (u = 0,
    s.replaceState(vs({}, s.state, {
        idx: u
    }), ""));
    function f() {
        return (s.state || {
            idx: null
        }).idx
    }
    function p() {
        l = mn.Pop;
        let b = f()
          , m = b == null ? null : b - u;
        u = b,
        a && a({
            action: l,
            location: v.location,
            delta: m
        })
    }
    function c(b, m) {
        l = mn.Push;
        let h = Fa(v.location, b, m);
        u = f() + 1;
        let g = Vd(h, u)
          , E = v.createHref(h);
        try {
            s.pushState(g, "", E)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError")
                throw S;
            o.location.assign(E)
        }
        i && a && a({
            action: l,
            location: v.location,
            delta: 1
        })
    }
    function y(b, m) {
        l = mn.Replace;
        let h = Fa(v.location, b, m);
        u = f();
        let g = Vd(h, u)
          , E = v.createHref(h);
        s.replaceState(g, "", E),
        i && a && a({
            action: l,
            location: v.location,
            delta: 0
        })
    }
    function x(b) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof b == "string" ? b : Wm(b);
        return h = h.replace(/ $/, "%20"),
        Be(m, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,m)
    }
    let v = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(b) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Bd, p),
            a = b,
            () => {
                o.removeEventListener(Bd, p),
                a = null
            }
        },
        createHref(b) {
            return t(o, b)
        },
        createURL: x,
        encodeLocation(b) {
            let m = x(b);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: c,
        replace: y,
        go(b) {
            return s.go(b)
        }
    };
    return v
}
var Hd;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Hd || (Hd = {}));
function l2(e, t, n) {
    return n === void 0 && (n = "/"),
    a2(e, t, n, !1)
}
function a2(e, t, n, r) {
    let o = typeof t == "string" ? Qs(t) : t
      , i = Km(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = Qm(e);
    u2(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = w2(i);
        l = y2(s[a], u, r)
    }
    return l
}
function Qm(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (Be(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Nr([r, a.relativePath])
          , f = n.concat(a);
        i.children && i.children.length > 0 && (Be(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Qm(i.children, t, f, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: g2(u, i.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of Gm(i.path))
                o(i, s, a)
    }
    ),
    t
}
function Gm(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = Gm(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function u2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : v2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const c2 = /^:[\w-]+$/
  , d2 = 3
  , f2 = 2
  , p2 = 1
  , h2 = 10
  , m2 = -2
  , Wd = e => e === "*";
function g2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Wd) && (r += m2),
    t && (r += f2),
    n.filter(o => !Wd(o)).reduce( (o, i) => o + (c2.test(i) ? d2 : i === "" ? p2 : h2), r)
}
function v2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function y2(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , f = i === "/" ? t : t.slice(i.length) || "/"
          , p = Qd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, f)
          , c = a.route;
        if (!p && u && n && !r[r.length - 1].route.index && (p = Qd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, f)),
        !p)
            return null;
        Object.assign(o, p.params),
        s.push({
            params: o,
            pathname: Nr([i, p.pathname]),
            pathnameBase: b2(Nr([i, p.pathnameBase])),
            route: c
        }),
        p.pathnameBase !== "/" && (i = Nr([i, p.pathnameBase]))
    }
    return s
}
function Qd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = x2(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, f, p) => {
            let {paramName: c, isOptional: y} = f;
            if (c === "*") {
                let v = l[p] || "";
                s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[p];
            return y && !x ? u[c] = void 0 : u[c] = (x || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function x2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Hm(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function w2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Hm(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Km(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Nr = e => e.join("/").replace(/\/\/+/g, "/")
  , b2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function E2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Ym = ["post", "put", "patch", "delete"];
new Set(Ym);
const S2 = ["get", ...Ym];
new Set(S2);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ys() {
    return ys = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ys.apply(this, arguments)
}
const k2 = w.createContext(null)
  , C2 = w.createContext(null)
  , Xm = w.createContext(null)
  , Gs = w.createContext(null)
  , Ks = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , qm = w.createContext(null);
function ec() {
    return w.useContext(Gs) != null
}
function Zm() {
    return ec() || Be(!1),
    w.useContext(Gs).location
}
function N2(e, t) {
    return P2(e, t)
}
function P2(e, t, n, r) {
    ec() || Be(!1);
    let {navigator: o} = w.useContext(Xm)
      , {matches: i} = w.useContext(Ks)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Zm(), f;
    if (t) {
        var p;
        let b = typeof t == "string" ? Qs(t) : t;
        a === "/" || (p = b.pathname) != null && p.startsWith(a) || Be(!1),
        f = b
    } else
        f = u;
    let c = f.pathname || "/"
      , y = c;
    if (a !== "/") {
        let b = a.replace(/^\//, "").split("/");
        y = "/" + c.replace(/^\//, "").split("/").slice(b.length).join("/")
    }
    let x = l2(e, {
        pathname: y
    })
      , v = O2(x && x.map(b => Object.assign({}, b, {
        params: Object.assign({}, l, b.params),
        pathname: Nr([a, o.encodeLocation ? o.encodeLocation(b.pathname).pathname : b.pathname]),
        pathnameBase: b.pathnameBase === "/" ? a : Nr([a, o.encodeLocation ? o.encodeLocation(b.pathnameBase).pathname : b.pathnameBase])
    })), i, n, r);
    return t && v ? w.createElement(Gs.Provider, {
        value: {
            location: ys({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: mn.Pop
        }
    }, v) : v
}
function T2() {
    let e = I2()
      , t = E2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: o
    }, n) : null, null)
}
const j2 = w.createElement(T2, null);
class R2 extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(Ks.Provider, {
            value: this.props.routeContext
        }, w.createElement(qm.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function A2(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = w.useContext(k2);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Ks.Provider, {
        value: t
    }, r)
}
function O2(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let f = s.findIndex(p => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0);
        f >= 0 || Be(!1),
        s = s.slice(0, Math.min(s.length, f + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < s.length; f++) {
            let p = s[f];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = f),
            p.route.id) {
                let {loaderData: c, errors: y} = n
                  , x = p.route.loader && c[p.route.id] === void 0 && (!y || y[p.route.id] === void 0);
                if (p.route.lazy || x) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (f, p, c) => {
        let y, x = !1, v = null, b = null;
        n && (y = l && p.route.id ? l[p.route.id] : void 0,
        v = p.route.errorElement || j2,
        a && (u < 0 && c === 0 ? (x = !0,
        b = null) : u === c && (x = !0,
        b = p.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, c + 1))
          , h = () => {
            let g;
            return y ? g = v : x ? g = b : p.route.Component ? g = w.createElement(p.route.Component, null) : p.route.element ? g = p.route.element : g = f,
            w.createElement(A2, {
                match: p,
                routeContext: {
                    outlet: f,
                    matches: m,
                    isDataRoute: n != null
                },
                children: g
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || c === 0) ? w.createElement(R2, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: y,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var $a = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}($a || {});
function M2(e) {
    let t = w.useContext(C2);
    return t || Be(!1),
    t
}
function _2(e) {
    let t = w.useContext(Ks);
    return t || Be(!1),
    t
}
function L2(e) {
    let t = _2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Be(!1),
    n.route.id
}
function I2() {
    var e;
    let t = w.useContext(qm)
      , n = M2($a.UseRouteError)
      , r = L2($a.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Ua(e) {
    Be(!1)
}
function D2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=mn.Pop, navigator: i, static: s=!1, future: l} = e;
    ec() && Be(!1);
    let a = t.replace(/^\/*/, "/")
      , u = w.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: ys({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = Qs(r));
    let {pathname: f="/", search: p="", hash: c="", state: y=null, key: x="default"} = r
      , v = w.useMemo( () => {
        let b = Km(f, a);
        return b == null ? null : {
            location: {
                pathname: b,
                search: p,
                hash: c,
                state: y,
                key: x
            },
            navigationType: o
        }
    }
    , [a, f, p, c, y, x, o]);
    return v == null ? null : w.createElement(Xm.Provider, {
        value: u
    }, w.createElement(Gs.Provider, {
        children: n,
        value: v
    }))
}
function z2(e) {
    let {children: t, location: n} = e;
    return N2(Ba(t), n)
}
new Promise( () => {}
);
function Ba(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, o) => {
        if (!w.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === w.Fragment) {
            n.push.apply(n, Ba(r.props.children, i));
            return
        }
        r.type !== Ua && Be(!1),
        !r.props.index || !r.props.children || Be(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Ba(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const F2 = "6";
try {
    window.__reactRouterVersion = F2
} catch {}
const $2 = "startTransition"
  , Gd = E0[$2];
function U2(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = w.useRef();
    i.current == null && (i.current = o2({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = w.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , f = w.useCallback(p => {
        u && Gd ? Gd( () => a(p)) : a(p)
    }
    , [a, u]);
    return w.useLayoutEffect( () => s.listen(f), [s, f]),
    w.createElement(D2, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var Kd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Kd || (Kd = {}));
var Yd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Yd || (Yd = {}));
const B2 = () => {
    const [e,t] = w.useState(!1)
      , [n,r] = w.useState(!1);
    w.useEffect( () => {
        const s = () => {
            t(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
    }
    , []);
    const o = [{
        name: "Home",
        href: "#home"
    }, {
        name: "About Us",
        href: "#about"
    }, {
        name: "Companies",
        href: "#companies"
    }, {
        name: "Leadership",
        href: "#leadership"
    }, {
        name: "Career",
        href: "#career"
    }, {
        name: "Contact",
        href: "#contact"
    }]
      , i = s => {
        const l = document.querySelector(s);
        l && (l.scrollIntoView({
            behavior: "smooth"
        }),
        r(!1))
    }
    ;
    return d.jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20" : "bg-transparent"}`,
        children: [d.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: d.jsxs("div", {
                className: "flex items-center justify-between h-20",
                children: [d.jsx("div", {
                    className: "flex-shrink-0",
                    children: d.jsx("div", {
                        className: "w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300",
                        children: d.jsx("img", {
                            src: "logos/PEG Logo-01-01.png?w=64&h=64&fit=crop&crop=center",
                            alt: "Company Logo",
                            className: "w-16 h-16 object-contain rounded-lg"
                        })
                    })
                }), d.jsx("div", {
                    className: "hidden md:block",
                    children: d.jsx("div", {
                        className: "flex items-center space-x-1",
                        children: o.map(s => d.jsx("button", {
                            onClick: () => i(s.href),
                            className: `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${e ? "text-gray-700 hover:text-primary hover:bg-gray-100" : "text-white/90 hover:text-white hover:bg-white/10"}`,
                            children: s.name
                        }, s.name))
                    })
                }), d.jsx("div", {
                    className: "md:hidden",
                    children: d.jsx("button", {
                        onClick: () => r(!n),
                        className: `p-2 rounded-lg transition-all duration-300 ${e ? "text-gray-700 hover:bg-gray-100" : "text-white/90 hover:bg-white/10"}`,
                        children: n ? d.jsx(Jh, {
                            size: 24
                        }) : d.jsx(Vy, {
                            size: 24
                        })
                    })
                })]
            })
        }), n && d.jsx("div", {
            className: "md:hidden bg-white/95 backdrop-blur-md border-t border-white/20",
            children: d.jsx("div", {
                className: "px-4 pt-2 pb-3 space-y-1",
                children: o.map(s => d.jsx("button", {
                    onClick: () => i(s.href),
                    className: "block w-full text-left px-3 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors duration-200",
                    children: s.name
                }, s.name))
            })
        })]
    })
}
  , V2 = () => {
    const e = [{
        icon: _y,
        label: "24+ Companies",
        count: "24"
    }, {
        icon: Gy,
        label: "5+ Years Growth",
        count: "5"
    }, {
        icon: zy,
        label: "Global Reach",
        count: "∞"
    }];
    return d.jsxs("section", {
        id: "home",
        className: "min-h-screen lg:min-h-[120vh] relative flex items-center justify-center overflow-hidden pt-20",
        children: [d.jsxs("div", {
            className: "absolute inset-0",
            children: [d.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&h=1200&fit=crop&crop=center')"
                }
            }), d.jsx("div", {
                className: "absolute inset-0 bg-black/50"
            }), d.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-blue-900/30"
            }), d.jsx("div", {
                className: "absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40"
            })]
        }), d.jsxs("div", {
            className: "absolute inset-0",
            children: [d.jsx("div", {
                className: "absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float opacity-50"
            }), d.jsx("div", {
                className: "absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-float opacity-40",
                style: {
                    animationDelay: "2s"
                }
            }), d.jsx("div", {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-liquid-morph"
            }), d.jsx("div", {
                className: "absolute top-40 right-40 w-64 h-64 bg-gradient-to-r from-violet-400/15 to-purple-400/15 rounded-full blur-2xl animate-float opacity-40",
                style: {
                    animationDelay: "1s"
                }
            }), d.jsx("div", {
                className: "absolute bottom-40 left-40 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-float opacity-30",
                style: {
                    animationDelay: "3s"
                }
            }), d.jsx("div", {
                className: "absolute top-60 left-60 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-xl animate-float opacity-40",
                style: {
                    animationDelay: "0.5s"
                }
            }), d.jsx("div", {
                className: "absolute bottom-60 right-60 w-40 h-40 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-xl animate-float opacity-30",
                style: {
                    animationDelay: "2.5s"
                }
            }), d.jsx("div", {
                className: "absolute top-32 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-sm animate-float opacity-30",
                style: {
                    animationDelay: "1.5s"
                }
            }), d.jsx("div", {
                className: "absolute bottom-32 right-1/3 w-20 h-20 bg-white/8 rounded-full blur-sm animate-float opacity-25",
                style: {
                    animationDelay: "3.5s"
                }
            })]
        }), d.jsx("div", {
            className: "absolute inset-0 opacity-5",
            children: d.jsx("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px"
                }
            })
        }), d.jsxs("div", {
            className: "relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto",
            children: [d.jsx("h1", {
                className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in font-['Playfair_Display'] drop-shadow-2xl",
                children: "Platinum Executive Group"
            }), d.jsx("p", {
                className: "text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-slide-up font-light drop-shadow-lg",
                children: "A group of complementary, innovative and customer centric companies"
            }), d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-16",
                children: e.map( (t, n) => d.jsx("div", {
                    className: "relative group",
                    style: {
                        animationDelay: `${n * .2}s`
                    },
                    children: d.jsxs("div", {
                        className: "glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-500 animate-scale-in border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 shadow-2xl hover:shadow-purple-500/20",
                        children: [d.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        }), d.jsxs("div", {
                            className: "flex flex-col items-center relative z-10",
                            children: [d.jsx("div", {
                                className: "w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10",
                                children: d.jsx(t.icon, {
                                    className: "w-8 h-8 text-white animate-float drop-shadow-lg"
                                })
                            }), d.jsx("div", {
                                className: "text-4xl font-bold text-white mb-2 drop-shadow-lg",
                                children: t.count
                            }), d.jsx("div", {
                                className: "text-white/80 text-sm font-medium drop-shadow-sm",
                                children: t.label
                            })]
                        })]
                    })
                }, t.label))
            })]
        }), d.jsx("div", {
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
            children: d.jsx("div", {
                className: "w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm",
                children: d.jsx("div", {
                    className: "w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse shadow-lg"
                })
            })
        })]
    })
}
  , H2 = () => d.jsxs("section", {
    id: "about",
    className: "py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    children: [d.jsxs("div", {
        className: "absolute inset-0",
        children: [d.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop')"
            }
        }), d.jsx("div", {
            className: "absolute inset-0 bg-black/60"
        }), d.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"
        }), d.jsx("div", {
            className: "absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float"
        }), d.jsx("div", {
            className: "absolute bottom-20 right-20 w-52 h-52 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-float",
            style: {
                animationDelay: "3s"
            }
        }), d.jsx("div", {
            className: "absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float",
            style: {
                animationDelay: "1.5s"
            }
        })]
    }), d.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: [d.jsxs("div", {
            className: "text-center mb-16",
            children: [d.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']",
                children: "About Us"
            }), d.jsx("div", {
                className: "w-24 h-1 bg-gradient-to-r from-platinum-400 to-platinum-600 mx-auto"
            })]
        }), d.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
            children: [d.jsxs("div", {
                className: "space-y-6",
                children: [d.jsx("p", {
                    className: "text-lg text-white/90 leading-relaxed",
                    children: "Incorporated in 2019, Platinum Executive Group (PEG) completes six years of operations, marking a journey of remarkable growth and innovation."
                }), d.jsx("p", {
                    className: "text-lg text-white/90 leading-relaxed",
                    children: "Our vision is to be a leading conglomerate with a diversified portfolio that meets global standards in product quality and service delivery. We aim to be at the forefront of innovation and excellence in every sector we operate."
                }), d.jsx("p", {
                    className: "text-lg text-white/90 leading-relaxed",
                    children: "From our humble beginnings in automobiles to our current diverse portfolio spanning Construction, Petroleum, Solar Energy, Agriculture, Geological Engineering Services, Steel Industry, Travelling and Tourism, Shipping, IT, Education Networking, Textile and Real Estate, we continue to expand our horizons."
                })]
            }), d.jsxs("div", {
                className: "space-y-6",
                children: [d.jsxs("div", {
                    className: "glass-effect p-6 rounded-xl border border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-white/10",
                    children: [d.jsx(Qy, {
                        className: "w-12 h-12 text-platinum-300 mb-4"
                    }), d.jsx("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Our Vision"
                    }), d.jsx("p", {
                        className: "text-white/80",
                        children: "Leading conglomerate with diversified portfolio meeting global standards"
                    })]
                }), d.jsxs("div", {
                    className: "glass-effect p-6 rounded-xl border border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-white/10",
                    children: [d.jsx(Xh, {
                        className: "w-12 h-12 text-platinum-300 mb-4"
                    }), d.jsx("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Our Mission"
                    }), d.jsx("p", {
                        className: "text-white/80",
                        children: "Excellence in product quality and service delivery across all sectors"
                    })]
                }), d.jsxs("div", {
                    className: "glass-effect p-6 rounded-xl border border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-white/10",
                    children: [d.jsx(qh, {
                        className: "w-12 h-12 text-platinum-300 mb-4"
                    }), d.jsx("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Innovation"
                    }), d.jsx("p", {
                        className: "text-white/80",
                        children: "Forefront of innovation and technology in every industry we serve"
                    })]
                })]
            })]
        })]
    })]
})
  , W2 = () => {
    const e = [{
        icon: $y,
        title: "Passion",
        description: "We are passionate about everything we do and strive for excellence"
    }, {
        icon: Wy,
        title: "Trust",
        description: "Building lasting relationships through transparency and reliability"
    }, {
        icon: Ky,
        title: "People",
        description: "Our people are our greatest asset and the foundation of our success"
    }, {
        icon: Fy,
        title: "Teamwork",
        description: "Collaboration and unity drive our collective achievements"
    }, {
        icon: Dy,
        title: "Accountability",
        description: "We take ownership of our actions and deliver on our promises"
    }, {
        icon: Xh,
        title: "Integrity",
        description: "Conducting business with the highest ethical standards"
    }, {
        icon: qh,
        title: "Innovation",
        description: "Continuously pushing boundaries and embracing new possibilities"
    }, {
        icon: By,
        title: "Environment",
        description: "Committed to sustainable practices and environmental responsibility"
    }];
    return d.jsxs("section", {
        id: "values",
        className: "py-20 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900",
        children: [d.jsxs("div", {
            className: "absolute inset-0",
            children: [d.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')"
                }
            }), d.jsx("div", {
                className: "absolute inset-0 bg-black/60"
            }), d.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"
            }), d.jsx("div", {
                className: "absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float"
            }), d.jsx("div", {
                className: "absolute bottom-32 right-16 w-56 h-56 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float",
                style: {
                    animationDelay: "2s"
                }
            }), d.jsx("div", {
                className: "absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded-full blur-2xl animate-float",
                style: {
                    animationDelay: "4s"
                }
            })]
        }), d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [d.jsxs("div", {
                className: "text-center mb-16",
                children: [d.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']",
                    children: "Our Values"
                }), d.jsx("p", {
                    className: "text-xl text-white/90 max-w-3xl mx-auto",
                    children: "Our core values guide everything we do and shape our commitment to excellence"
                }), d.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-platinum-400 to-platinum-600 mx-auto mt-6"
                })]
            }), d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: e.map( (t, n) => d.jsx("div", {
                    className: "bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 group animate-scale-in border border-white/20",
                    style: {
                        animationDelay: `${n * .1}s`
                    },
                    children: d.jsxs("div", {
                        className: "flex flex-col items-center text-center",
                        children: [d.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-platinum-400 to-platinum-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                            children: d.jsx(t.icon, {
                                className: "w-8 h-8 text-white"
                            })
                        }), d.jsx("h3", {
                            className: "text-xl font-semibold text-white mb-4",
                            children: t.title
                        }), d.jsx("p", {
                            className: "text-white/80 text-sm leading-relaxed",
                            children: t.description
                        })]
                    })
                }, t.title))
            })]
        })]
    })
}
  , Q2 = () => {
    const [e,t] = w.useState(null)
      , n = [{
        name: "RED FOLDER",
        sector: "Technology",
        description: "Red Folder is an IT company and part of Platinum Executive Group specializing in technology solutions. Provides innovative services to clients. With expertise in various areas drives digital transformation. Supporting businesses with cutting-edge tech.",
        linkedin: "https://www.linkedin.com/company/redfolder",
        logo: "logos/logo.jpg?w=100&h=100&fit=crop&crop=center"
    }, {
                 name: "PLATINUM EXECUTIVE CARS",
                 sector: "Luxury Car Rental",
                 description: "Platinum Executive Cars is a Luxury car hire company based in Karachi Sindh Pakistan providing luxury travel for both corporate & private clients.",
                 linkedin: "https://www.linkedin.com/company/platinumexecutivecars",
                 logo: "logos/WhatsApp Image 2020-05-12 at 15.30.05.jpeg?w=100&h=100&fit=crop&crop=center"
             }, {
                 name: "ILFORD STEEL INDUSTRIES",
                 sector: "Steel Manufacturing",
                 description: "Ilford Steel Industries, a subsidiary of Platinum Executive Group, was founded in 2023 with a focus on providing high-quality steel products and services, delivering exceptional value to our clients.",
                 linkedin: "https://www.linkedin.com/company/ilfordsteel.co.uk",
                 logo: "logos/Ilford Steel Logo-01-01.jpg?w=100&h=100&fit=crop&crop=center"
             }, {
                 name: "MAIWAND X1 ENERGIES",
                 sector: "Natural Gas Fields",
                 description: "Maiwand X1, a subsidiary of Platinum Executive Group Inc. (USA), specializes in strategic investments and acquisitions of gas fields, with a focus on Pakistan, the Middle East, and Germany, to drive energy growth and development",
                 linkedin: "https://www.linkedin.com/company/mx1e",
                 logo: "logos/mawand.jpg?w=100&h=100&fit=crop&crop=center"
             },{
        name: "PLATINUM EXECUTIVE D.M WORKS",
        sector: "Motor Vehicle Parts Manufacturing",
        description: "Platinum Executive DM Works, specialize in delivering top-quality vehicle repair services. founded in 2023 as part of Platinum Executive Group.",
        linkedin: "https://www.linkedin.com/company/pedmw.co.uk",
        logo: "logos/logo (2).png?w=100&h=100&fit=crop&crop=center"
    }, {
        name: "SOUTHEND ON SEA MARINE SERVICES",
        sector: "Marine",
        description: "Southend On Sea Marine Services, a Platinum Executive Group subsidiary, is a leading marine company providing comprehensive marine solutions. We specialize in various marine-related businesses. Our expertise ensures efficient and reliable services. Delivering exceptional results for our clients.",
        linkedin: "https://www.linkedin.com/company/southonsea.co.uk",
        logo: "logos/Southend sea logo-01.jpg?w=100&h=100&fit=crop&crop=center"
    }, {
        name: "EXECUTIVE CORP.SERVICES",
        sector: "Asset Management",
        description: "Executive Corporate Services (ECS), a wholly-owned subsidiary of Platinum Executive Group, is a diversified conglomerate that offers premium services in luxury vehicle rentals and commercial property rentals, tailored to meet the needs of esteemed corporate clients",
        linkedin: "https://www.linkedin.com/in/mirfazalhassan",
        logo: "logos/WhatsApp Image 2024-05-29 at 18.24.59.jpeg?w=100&h=100&fit=crop&crop=center"
    },{
                 name: "DAZLAT BORCO",
                 sector: "Drilling & Mining",
                 description: "DBC (Dazlat Borco) is a leading drilling company under Platinum Executive Group, founded in 2022 delivers precise and efficient drilling services. With state-of-the-art rigs and expertise drives project success. Prioritizing safety, sustainability, and customer satisfaction.",
                 linkedin: "https://www.linkedin.com/company/dbc.co.uk",
                 logo: "logos/Dazlat Borco-01 (2).jpg?w=100&h=100&fit=crop&crop=center"
             },{
                 name: "GARDAF AGRI",
                 sector: "Agriculture",
                 description: "GARDAF AGRI was founded for development goals especially in the field of agricultural, vegetables and livestock production, Gardaf Agri is member of Platinum Executive group.",
                 linkedin: "https://www.linkedin.com/company/gardaf-agri",
                 logo: "logos/Gardaf agri logo-01.jpg?w=100&h=100&fit=crop&crop=center"
             }, {
                 name: "WESTGATE CORP.",
                 sector: "Helicopters",
                 description: "Westgate Corp. a subsidiary of Platinum Executive Group Inc. (Miami, USA), is a global leader in helicopter sales and acquisitions. With strategic offices in South Asia, the UK, and UAE, we cater to the diverse needs of our clients worldwide.",
                 linkedin: "https://www.linkedin.com/company/westgate-corp",
                 logo: "logos/westgate logo-01.jpg?w=100&h=100&fit=crop&crop=center"
             }, {
                 name: "PLATINUM EXECUTIVE GROUP LTD. UK",
                 sector: "Holding Company",
                 description: "Platinum Executive Group Ltd. (UK): A globally diversified holding company headquartered in London, with strategic investments and subsidiaries across Pakistan, the United States, and the United Kingdom, fostering innovation and growth through its multifaceted portfolio.",
                 linkedin: "https://www.linkedin.com/company/peggroup.co.uk",
                 logo: "logos/PEG Logo-01-01.png?w=100&h=100&fit=crop&crop=center"
             },{
                 name: "RASCO FUELS & PETROLEUM",
                 sector: "Petroleum",
                 description: "Rasco Fuels & Petroleum was established in 2022 on the basis and know-how of trading petroleum & petrochemical products.",
                 linkedin: "https://www.linkedin.com/company/rfppl",
                 logo: "logos/RASCO Petroleum Energy logo-01.jpg?w=100&h=100&fit=crop&crop=center"
             },  {
        name: "MAZHVI TEXTILE",
        sector: "Textile Manufacturing",
        description: "MAZHVI TEXTILE, a wholly-owned subsidiary of Platinum Executive Group, is a textile manufacturing company that not only caters to the domestic market but also exports high-quality textile materials to various countries around the globe, the company also owns and operates its clothing brand, MAZHVI.",
        linkedin: "https://www.linkedin.com/company/mazhvi-textile",
        logo: "logos/Mazhvi textile logo-01.png?w=100&h=100&fit=crop&crop=center"
    },  {
        name: "PLATINUM EXECUTIVE HOLDINGS",
        sector: "Investment",
        description: "Platinum Executive Holdings is a global investment and management Company dedicated to establishing, investing in, and supporting its subsidiary and associated companies worldwide.",
        linkedin: "https://www.linkedin.com/company/peh-co",
        logo: "logos/peh logo.jpg?w=100&h=100&fit=crop&crop=center"
    }, {
        name: "THALCROP",
        sector: "Farming",
        description: "Specializes in crop procurement, collection, and sales.",
        linkedin: "https://www.linkedin.com/company/thalcrop",
        logo: "logos/Thalcrop logo-01.jpg?w=100&h=100&fit=crop&crop=center"
    },  {
                 name: "PLATINUM EXECUTIVE GROUP INC. US",
                 sector: "Holding Company",
                 description: "Platinum Executive Group Inc. (US): A globally diversified holding company headquartered in Miami, Florida, with strategic investments and subsidiaries across Pakistan, the United States, and the United Kingdom, fostering innovation and growth through its multifaceted portfolio.",
                 linkedin: "https://www.linkedin.com/company/peggroup.co.uk",
                 logo: "logos/PEG Logo-01-01.png?w=100&h=100&fit=crop&crop=center"
             },{
        name: "RASCO ENERGY",
        sector: "Renewable Energy",
        description: "Rascoh Energy is a solar energy company that aims to provide revolutionary solutions for commercial, residential, agricultural and industrial sectors.",
        linkedin: "https://www.linkedin.com/company/repl.pk",
        logo: "logos/RASCO Petroleum Energy logo-02.jpg?w=100&h=100&fit=crop&crop=center"
    }, {
        name: "ILFORD TYRES & WHEELS",
        sector: "Automotive",
        description: "Ilford Tyres and Wheels, part of Platinum Executive Group, is a leading provider of high-quality tyres and wheels, delivering exceptional products and services to customers.",
        linkedin: "https://www.linkedin.com/company/itw.co.uk",
        logo: "logos/ILFORD tyres & wheels logo-01.jpg?w=100&h=100&fit=crop&crop=center"
    }, {
        name: "LEED LITERACY CONSORTIUM",
        sector: "Education",
        description: "Leeds Literacy Consortium (LLC) is dedicated to empowering underprivileged communities in Pakistan, particularly in Balochistan and Sindh, through quality education and skill development. Our mission is to bridge the educational gap and foster socio-economic growth in these regions.",
        linkedin: "https://www.linkedin.com/company/llc.edu.pk",
        logo: "logos/LLC Logo.png?w=100&h=100&fit=crop&crop=center"
    }, {
        name: "BOAGRI",
        sector: "Agricultural Chemical Manufacturing",
        description: "A fertilizer company dealing in seeds for various crops and fertilizers providing credit facilities to farmers.",
        linkedin: "https://www.linkedin.com/company/boagri",
        logo: "logos/boagri logo-01.jpg?w=100&h=100&fit=crop&crop=center"
    }, {
        name: "SURATSON'S FARM",
        sector: "Tourism",
        description: "Suratson's Farm: A private farm house owned by GARDAF Agri, available for rental purposes.",
        linkedin: "https://www.linkedin.com/company/suratson-s-farm",
        logo: "logos/FARM01.jpg?w=100&h=100&fit=crop&crop=center"
    },  {
        name: "TAXSERVICE.CO.UK",
        sector: "Wealth Management",
        description: "Tax Service.co.uk (TSCU) was founded in 2022 as part of the Platinum Executive Group. We're a premier UK-based firm of financial experts dedicated to delivering exceptional services in financial planning, wealth management, accounting, and tax advisory.",
        linkedin: "https://www.linkedin.com/company/taxservicedotcodotuk",
        logo: "logos/tax service logo-01.jpg?w=100&h=100&fit=crop&crop=center"
    },{
                 name: "PLATINUM EXECUTIVE REALTORS",
                 sector: "Real Estate & Construction",
                 description: "Platinum Executive Realtors: A real estate, construction media and marketing company, founded in 2022 under Platinum Executive Group specialize in innovative real estate solutions, leveraging expertise in marketing and media to drive growth and success.",
                 linkedin: "https://www.linkedin.com/company/platinum-executive-realtors-private-limited",
                 logo: "logos/PER Logo-02 (1).jpg?w=100&h=100&fit=crop&crop=center"
             }, {
        name: "GHC",
        sector: "Law",
        description: "GHC, a wholly-owned subsidiary of Platinum Executive Group, is a law firm providing expert legal services across Pakistan, UAE, and the UK. Our expertise spans various legal matters, delivering tailored solutions for individuals and corporations",
        linkedin: "https://www.linkedin.com/company/ghc-uk",
        logo: "logos/Gatehouse Chambers logo-01.jpg?w=100&h=100&fit=crop&crop=center"
    },  {
        name: "PLATINUM EXE. CONSULTANCY SERVICES",
        sector: "Management Consulting",
        description: "At Platinum Executive Consultancy Services, we empower organizations to exceed their potential. Our global team of 30 experts delivers solutions in 5 core areas: Organization Strategy, Assessment & Succession, Talent Acquisition, Leadership Development, and Total Rewards. We help clients design optimal structures, hire the right talent, and develop professionals.",
        linkedin: "https://www.linkedin.com/company/platinumexecutiveconsultancy",
        logo: "logos/Consultancy Logo-02.jpg?w=100&h=100&fit=crop&crop=center"
    }];
    return d.jsxs("section", {
        id: "companies",
        className: "py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900",
        children: [d.jsxs("div", {
            className: "absolute inset-0",
            children: [d.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=1080&fit=crop')"
                }
            }), d.jsx("div", {
                className: "absolute inset-0 bg-black/60"
            }), d.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-gray-700/20 via-slate-700/20 to-gray-700/20"
            }), d.jsx("div", {
                className: "absolute top-16 right-20 w-44 h-44 bg-gradient-to-r from-gray-400/30 to-slate-400/30 rounded-full blur-3xl animate-float"
            }), d.jsx("div", {
                className: "absolute bottom-24 left-16 w-52 h-52 bg-gradient-to-r from-slate-400/30 to-gray-400/30 rounded-full blur-3xl animate-float",
                style: {
                    animationDelay: "1.5s"
                }
            }), d.jsx("div", {
                className: "absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-platinum-400/30 to-silver-400/30 rounded-full blur-2xl animate-float",
                style: {
                    animationDelay: "3s"
                }
            })]
        }), d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [d.jsxs("div", {
                className: "text-center mb-16",
                children: [d.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']",
                    children: "Our Companies"
                }), d.jsx("p", {
                    className: "text-xl text-white/90 max-w-3xl mx-auto",
                    children: "A diverse portfolio of companies across multiple industries, each committed to excellence and innovation"
                }), d.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-platinum-400 to-platinum-600 mx-auto mt-6"
                })]
            }), d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: n.map( (r, o) => d.jsx("div", {
                    className: "bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-300 overflow-hidden group",
                    children: d.jsxs("div", {
                        className: "p-6",
                        children: [d.jsxs("div", {
                            className: "flex items-start justify-between mb-4",
                            children: [d.jsxs("div", {
                                className: "flex items-start space-x-4 flex-1 min-w-0",
                                children: [d.jsx("div", {
                                    className: "w-16 h-16 rounded-lg overflow-hidden shadow-lg flex-shrink-0 bg-white flex items-center justify-center p-2",
                                    children: d.jsx("img", {
                                        src: r.logo,
                                        alt: `${r.name} logo`,
                                        className: "max-w-full max-h-full object-contain"
                                    })
                                }), d.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [d.jsx("h3", {
                                        className: "font-semibold text-white text-lg leading-tight mb-1 break-words",
                                        children: r.name
                                    }), d.jsx("p", {
                                        className: "text-sm text-platinum-300 font-medium",
                                        children: r.sector
                                    })]
                                })]
                            }), d.jsx("button", {
                                onClick: () => t(e === o ? null : o),
                                className: "text-platinum-300 hover:text-white transition-colors p-1 flex-shrink-0 ml-2",
                                children: e === o ? d.jsx(Iy, {
                                    size: 20
                                }) : d.jsx(Ly, {
                                    size: 20
                                })
                            })]
                        }), e === o && d.jsxs("div", {
                            className: "mt-4 pt-4 border-t border-white/20 animate-slide-up",
                            children: [d.jsx("h4", {
                                className: "font-medium text-white mb-2",
                                children: "About"
                            }), d.jsx("p", {
                                className: "text-white/80 text-sm leading-relaxed mb-4",
                                children: r.description
                            }), d.jsx("div", {
                                className: "flex justify-center",
                                children: d.jsxs("a", {
                                    href: r.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl",
                                    children: [d.jsx(Bu, {
                                        className: "w-4 h-4"
                                    }), d.jsx("span", {
                                        className: "text-sm font-medium",
                                        children: "LinkedIn"
                                    })]
                                })
                            })]
                        })]
                    })
                }, o))
            })]
        })]
    })
}
  , G2 = () => {
    const e = [{
        name: "Mir Fazal Hassan Marri",
        position: "CEO/Founder",
        image: "logos/fazal hassan .jpg?w=400&h=400&fit=crop&crop=face",
        description: "Visionary leader with over 12 years of experience in building global enterprises and driving strategic growth.",
        hasContact: !0
    }, {
        name: "Miss Adila Durrani",
        position: "Director",
        image: "logos/WhatsApp Image 2025-06-26 at 12.16.16_1d536b93.jpg?w=400&h=400&fit=crop&crop=face",
        description: "Strategic leader providing guidance and oversight to drive organizational excellence and governance.",
        hasContact: !1
    }, {
        name: "Muhammad Noor",
        position: "Director",
        image: "logos/WhatsApp Image 2025-06-25 at 03.31.18_53f7a399.jpg?w=400&h=400&fit=crop&crop=face",
        description: "Experienced Director in Organizational Psychology, focused on improving employee performance, team dynamics, and building healthy work environments for long-term success.",
        hasContact: !1
    },{
        name: "Umair Sabir",
        position: "Director",
        image: "logos/WhatsApp Image 2025-06-25 at 05.13.17_8cde98e4.jpg?w=400&h=400&fit=crop&crop=face",
        description: "Director specializing in financial management, accounting excellence, and driving sustainable business growth.",
        hasContact: !1
    }, {
        name: "Miss Mariam Awan",
        position: "Director",
        image: "logos/WhatsApp Image 2025-06-26 at 12.39.20_7e81ae6a.jpg?w=400&h=400&fit=crop&crop=face",
        description: "Director specializing in HR management and educational development programs.",
        hasContact: !1
    }, {
        name: "Miss Samaira Shaheen",
        position: "Director",
        image: "logos/WhatsApp Image 2025-06-25 at 03.24.54_37fc43ff.jpg?w=400&h=400&fit=crop&crop=face",
        description: "Director with expertise in finance and economics, driving strategic financial initiatives.",
        hasContact: !1
    }, {
                      name: "Miss Milla Kovacik",
                      position: "Director",
                      image: "logos/WhatsApp Image 2025-06-25 at 04.53.54_aae2621b.jpg?w=400&h=400&fit=crop&crop=face",
                      description: "Director focused on foreign language education, global communication, and language skills development.",
                      hasContact: !1
                  },{
        name: "Khalique Ur Rehman",
        position: "Director",
        image: "logos/WhatsApp Image 2025-06-26 at 12.35.07_5b9d124d.jpg?w=400&h=400&fit=crop&crop=face",
        description: "Director focused on farming strategy and sustainable agricultural development.",
        hasContact: !1
    },  {
        name: "Zareef Ur Rehman",
        position: "Director",
        image: "logos/WhatsApp Image 2025-06-26 at 12.58.12_32ab5784.jpg?w=400&h=400&fit=crop&crop=face",
        description: "Director with extensive experience in finance and economics, specializing in strategic planning.",
        hasContact: !1
    }, {
                   name: "Zaib Azeem",
                   position: "Director",
                   image: "logos/WhatsApp Image 2025-06-26 at 12.58.20_8dbebdd9.jpg?w=400&h=400&fit=crop&crop=face",
                   description: "Director specializing in IT solutions and technology-driven organizational development.",
                   hasContact: !1
               }]
      , t = n => {
        n === "linkedin" ? window.open("https://www.linkedin.com/in/mirfazalhassan", "_blank", "noopener,noreferrer") : n === "email" && (window.location.href = "mailto:connect@peggroup.co.uk")
    }
    ;
    return d.jsxs("section", {
        id: "leadership",
        className: "py-20 relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900",
        children: [d.jsxs("div", {
            className: "absolute inset-0",
            children: [d.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1920&h=1080&fit=crop')"
                }
            }), d.jsx("div", {
                className: "absolute inset-0 bg-black/60"
            }), d.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-blue-600/20"
            }), d.jsx("div", {
                className: "absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float"
            }), d.jsx("div", {
                className: "absolute bottom-32 right-16 w-56 h-56 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-float",
                style: {
                    animationDelay: "2s"
                }
            }), d.jsx("div", {
                className: "absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-2xl animate-float",
                style: {
                    animationDelay: "1s"
                }
            })]
        }), d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [d.jsxs("div", {
                className: "text-center mb-16",
                children: [d.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']",
                    children: "Leadership Team"
                }), d.jsx("p", {
                    className: "text-xl text-white/90 max-w-3xl mx-auto",
                    children: "Meet the visionary leaders driving innovation and excellence across our diverse portfolio"
                }), d.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-platinum-400 to-platinum-600 mx-auto mt-6"
                })]
            }), d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: e.map( (n, r) => d.jsxs("div", {
                    className: "bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group animate-scale-in border border-white/20",
                    style: {
                        animationDelay: `${r * .1}s`
                    },
                    children: [d.jsxs("div", {
                        className: "relative overflow-hidden",
                        children: [d.jsx("img", {
                            src: n.image,
                            alt: n.name,
                            className: "w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        }), d.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        })]
                    }), d.jsxs("div", {
                        className: "p-6",
                        children: [d.jsx("h3", {
                            className: "text-xl font-semibold text-white mb-1",
                            children: n.name
                        }), d.jsx("p", {
                            className: "text-platinum-300 font-medium mb-4",
                            children: n.position
                        }), d.jsx("p", {
                            className: "text-white/80 text-sm leading-relaxed mb-6",
                            children: n.description
                        }), n.hasContact && d.jsxs("div", {
                            className: "flex space-x-3",
                            children: [d.jsx("button", {
                                onClick: () => t("linkedin"),
                                className: "w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20",
                                children: d.jsx(Bu, {
                                    className: "w-5 h-5 text-white"
                                })
                            }), d.jsx("button", {
                                onClick: () => t("email"),
                                className: "w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20",
                                children: d.jsx(zs, {
                                    className: "w-5 h-5 text-white"
                                })
                            })]
                        })]
                    })]
                }, r))
            })]
        })]
    })
}
  , K2 = () => d.jsxs("section", {
    id: "career",
    className: "py-20 relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900",
    children: [d.jsxs("div", {
        className: "absolute inset-0",
        children: [d.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop')"
            }
        }), d.jsx("div", {
            className: "absolute inset-0 bg-black/60"
        }), d.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20"
        }), d.jsx("div", {
            className: "absolute top-16 left-16 w-44 h-44 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-float"
        }), d.jsx("div", {
            className: "absolute bottom-24 right-24 w-56 h-56 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl animate-float",
            style: {
                animationDelay: "2.5s"
            }
        }), d.jsx("div", {
            className: "absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-teal-400/30 to-emerald-400/30 rounded-full blur-2xl animate-float",
            style: {
                animationDelay: "4.2s"
            }
        })]
    }), d.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: [d.jsxs("div", {
            className: "text-center mb-16",
            children: [d.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display']",
                children: "Join Our Team"
            }), d.jsx("p", {
                className: "text-xl text-white/90 max-w-3xl mx-auto",
                children: "Be part of our journey to build tomorrow's success. We're always looking for talented individuals to join our diverse portfolio of companies."
            }), d.jsx("div", {
                className: "w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto mt-6"
            })]
        }), d.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: d.jsxs("div", {
                className: "bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300",
                children: [d.jsxs("div", {
                    className: "text-center mb-8",
                    children: [d.jsx("div", {
                        className: "w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse",
                        children: d.jsx(My, {
                            className: "w-10 h-10 text-white"
                        })
                    }), d.jsx("h3", {
                        className: "text-2xl md:text-3xl font-semibold text-white mb-4",
                        children: "Start Your Career With Us"
                    }), d.jsx("p", {
                        className: "text-white/80 text-lg leading-relaxed max-w-2xl mx-auto",
                        children: "We believe in nurturing talent and providing opportunities for growth across all sectors of our business. From automobiles to renewable energy, from construction to technology - there's a place for everyone at PEG."
                    })]
                }), d.jsxs("div", {
                    className: "bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20",
                    children: [d.jsxs("div", {
                        className: "flex items-center justify-center mb-6",
                        children: [d.jsx(zs, {
                            className: "w-8 h-8 text-emerald-300 mr-3"
                        }), d.jsx("h4", {
                            className: "text-xl font-semibold text-white",
                            children: "Send Your CV"
                        })]
                    }), d.jsx("p", {
                        className: "text-white/80 text-center mb-6",
                        children: "Ready to take the next step in your career? Send us your CV and let's explore the possibilities together."
                    }), d.jsxs("div", {
                        className: "text-center",
                        children: [d.jsxs("a", {
                            href: "mailto:connect@peggroup.co.uk?subject=Career Opportunity - CV Submission",
                            className: "inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
                            children: [d.jsx(Hy, {
                                className: "w-5 h-5 mr-2"
                            }), "Email Your CV"]
                        }), d.jsx("div", {
                            className: "mt-4",
                            children: d.jsxs("p", {
                                className: "text-white/70 text-sm",
                                children: ["Email: ", d.jsx("span", {
                                    className: "text-emerald-300 font-medium",
                                    children: "connect@peggroup.co.uk"
                                })]
                            })
                        })]
                    })]
                }), d.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",
                    children: [d.jsxs("div", {
                        className: "text-center",
                        children: [d.jsx("div", {
                            className: "w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-3",
                            children: d.jsx("span", {
                                className: "text-emerald-300 font-bold text-lg",
                                children: "1"
                            })
                        }), d.jsx("h5", {
                            className: "text-white font-semibold mb-2",
                            children: "Apply"
                        }), d.jsx("p", {
                            className: "text-white/70 text-sm",
                            children: "Send your CV to our email"
                        })]
                    }), d.jsxs("div", {
                        className: "text-center",
                        children: [d.jsx("div", {
                            className: "w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-3",
                            children: d.jsx("span", {
                                className: "text-teal-300 font-bold text-lg",
                                children: "2"
                            })
                        }), d.jsx("h5", {
                            className: "text-white font-semibold mb-2",
                            children: "Review"
                        }), d.jsx("p", {
                            className: "text-white/70 text-sm",
                            children: "Our HR team will review your application"
                        })]
                    }), d.jsxs("div", {
                        className: "text-center",
                        children: [d.jsx("div", {
                            className: "w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3",
                            children: d.jsx("span", {
                                className: "text-cyan-300 font-bold text-lg",
                                children: "3"
                            })
                        }), d.jsx("h5", {
                            className: "text-white font-semibold mb-2",
                            children: "Connect"
                        }), d.jsx("p", {
                            className: "text-white/70 text-sm",
                            children: "We'll reach out for next steps"
                        })]
                    })]
                })]
            })
        })]
    })]
})
  , Y2 = () => {
    const e = [{
        icon: Ra,
        title: "Phone",
        details: ["+92(0) 3360 074 776"]
    }, {
        icon: Ra,
        title: "UAN",
        details: ["111 111 734"]
    }, {
        icon: zs,
        title: "Email",
        details: ["connect@peggroup.co.uk"]
    }]
      , t = ["London, UK", "Karachi, Pakistan", "Mawand, Pakistan", "Islamabad, Pakistan", "Miami, USA", "Erfurt, Germany"];
    return d.jsxs("section", {
        id: "contact",
        className: "py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden",
        children: [d.jsxs("div", {
            className: "absolute inset-0",
            children: [d.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop')"
                }
            }), d.jsx("div", {
                className: "absolute inset-0 bg-black/60"
            }), d.jsxs("div", {
                className: "absolute inset-0",
                children: [d.jsx("div", {
                    className: "absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"
                }), d.jsx("div", {
                    className: "absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float",
                    style: {
                        animationDelay: "2s"
                    }
                }), d.jsx("div", {
                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"
                })]
            })]
        }), d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [d.jsxs("div", {
                className: "text-center mb-16",
                children: [d.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6 font-['Playfair_Display'] animate-fade-in",
                    children: "Contact Us"
                }), d.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto animate-scale-in"
                })]
            }), d.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",
                children: e.map( (n, r) => d.jsxs("div", {
                    className: "glass-effect p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in",
                    style: {
                        animationDelay: `${r * .2}s`
                    },
                    children: [d.jsx("div", {
                        className: "w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-float",
                        children: d.jsx(n.icon, {
                            className: "w-8 h-8 text-white"
                        })
                    }), d.jsx("h3", {
                        className: "text-xl font-semibold text-white mb-4",
                        children: n.title
                    }), n.details.map( (o, i) => d.jsx("p", {
                        className: "text-gray-300 text-lg",
                        children: o
                    }, i))]
                }, n.title))
            }), d.jsxs("div", {
                className: "text-center",
                children: [d.jsx("h3", {
                    className: "text-3xl font-bold text-white mb-8 font-['Playfair_Display'] animate-fade-in",
                    children: "Our Locations"
                }), d.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: t.map( (n, r) => d.jsx("div", {
                        className: "glass-effect p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up",
                        style: {
                            animationDelay: `${r * .1}s`
                        },
                        children: d.jsxs("div", {
                            className: "flex items-center justify-center space-x-3",
                            children: [d.jsx(Zh, {
                                className: "w-5 h-5 text-cyan-400 animate-pulse"
                            }), d.jsx("span", {
                                className: "text-white font-medium",
                                children: n
                            })]
                        })
                    }, n))
                })]
            })]
        })]
    })
}
  , X2 = () => {
    const e = new Date().getFullYear()
      , t = [{
        name: "Home",
        href: "#home"
    }, {
        name: "About Us",
        href: "#about"
    }, {
        name: "Our Values",
        href: "#values"
    }, {
        name: "Companies",
        href: "#companies"
    }, {
        name: "Leadership",
        href: "#leadership"
    }, {
        name: "Career",
        href: "#career"
    }, {
        name: "Contact",
        href: "#contact"
    }]
      , n = o => {
        let i = "";
        switch (o) {
        case "linkedin":
            i = "https://www.linkedin.com/company/peggroup.co.uk";
            break;
        case "x":
            i = "https://x.com/peggroup_uk";
            break;
        case "instagram":
            i = "https://www.instagram.com/peggroup.co.uk";
            break;
        default:
            return
        }
        window.open(i, "_blank", "noopener,noreferrer")
    }
      , r = () => d.jsx("svg", {
        viewBox: "0 0 24 24",
        className: "w-5 h-5",
        fill: "currentColor",
        children: d.jsx("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
    });
    return d.jsx("footer", {
        className: "bg-gray-900 text-white",
        children: d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [d.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: [d.jsxs("div", {
                    className: "lg:col-span-2",
                    children: [d.jsx("h3", {
                        className: "text-2xl font-bold text-gradient font-['Playfair_Display'] mb-4",
                        children: "Platinum Executive Group"
                    }), d.jsx("p", {
                        className: "text-gray-300 mb-6 max-w-md",
                        children: "A group of complementary, innovative and customer centric companies."
                    }), d.jsxs("div", {
                        className: "flex space-x-4",
                        children: [d.jsx("button", {
                            onClick: () => n("linkedin"),
                            className: "w-10 h-10 bg-platinum-600 rounded-full flex items-center justify-center hover:bg-platinum-700 transition-colors",
                            children: d.jsx(Bu, {
                                className: "w-5 h-5"
                            })
                        }), d.jsx("button", {
                            onClick: () => n("x"),
                            className: "w-10 h-10 bg-platinum-600 rounded-full flex items-center justify-center hover:bg-platinum-700 transition-colors",
                            children: d.jsx(r, {})
                        }), d.jsx("button", {
                            onClick: () => n("instagram"),
                            className: "w-10 h-10 bg-platinum-600 rounded-full flex items-center justify-center hover:bg-platinum-700 transition-colors",
                            children: d.jsx(Uy, {
                                className: "w-5 h-5"
                            })
                        })]
                    })]
                }), d.jsxs("div", {
                    children: [d.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Quick Links"
                    }), d.jsx("ul", {
                        className: "space-y-2",
                        children: t.map(o => d.jsx("li", {
                            children: d.jsx("button", {
                                onClick: () => {
                                    const i = document.querySelector(o.href);
                                    i && i.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                }
                                ,
                                className: "text-gray-300 hover:text-platinum-300 transition-colors",
                                children: o.name
                            })
                        }, o.name))
                    })]
                })]
            }), d.jsx("div", {
                className: "border-t border-gray-800 mt-12 pt-8",
                children: d.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [d.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [d.jsx(zs, {
                            className: "w-5 h-5 text-platinum-400"
                        }), d.jsx("span", {
                            className: "text-gray-300",
                            children: "connect@peggroup.co.uk"
                        })]
                    }), d.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [d.jsx(Ra, {
                            className: "w-5 h-5 text-platinum-400"
                        }), d.jsx("span", {
                            className: "text-gray-300",
                            children: "+92(0) 3360 074 776"
                        })]
                    }), d.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [d.jsx(Zh, {
                            className: "w-5 h-5 text-platinum-400"
                        }), d.jsx("span", {
                            className: "text-gray-300",
                            children: "Karachi, PK . London, UK"
                        })]
                    })]
                })
            }), d.jsx("div", {
                className: "border-t border-gray-800 mt-8 pt-8 text-center",
                children: d.jsxs("p", {
                    className: "text-gray-400",
                    children: ["© ", e, " Platinum Executive Group. All rights reserved."]
                })
            })]
        })
    })
}
  , q2 = () => d.jsxs("div", {
    className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
    children: [d.jsx(B2, {}), d.jsx(V2, {}), d.jsx(H2, {}), d.jsx(W2, {}), d.jsx(Q2, {}), d.jsx(G2, {}), d.jsx(K2, {}), d.jsx(Y2, {}), d.jsx(X2, {})]
})
  , Z2 = () => {
    const e = Zm();
    return w.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    d.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: d.jsxs("div", {
            className: "text-center",
            children: [d.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), d.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), d.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , J2 = new t2
  , eb = () => d.jsx(r2, {
    client: J2,
    children: d.jsxs(Ow, {
        children: [d.jsx(R1, {}), d.jsx(ix, {}), d.jsx(U2, {
            children: d.jsxs(z2, {
                children: [d.jsx(Ua, {
                    path: "/",
                    element: d.jsx(q2, {})
                }), d.jsx(Ua, {
                    path: "*",
                    element: d.jsx(Z2, {})
                })]
            })
        })]
    })
});
xh(document.getElementById("root")).render(d.jsx(eb, {}));
