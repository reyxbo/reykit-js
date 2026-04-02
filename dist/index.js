import * as jr from "react";
import TS, { createElement as N2, Fragment as UT, useState as Qg, useEffect as J2, createContext as _T, useContext as CT } from "react";
import { useLocation as HT, useNavigate as NT } from "react-router-dom";
import { ChevronRightIcon as BT, Loader2Icon as K2, OctagonXIcon as xT, TriangleAlertIcon as jT, InfoIcon as qT, CircleCheckIcon as YT } from "lucide-react";
import { clsx as GT } from "clsx";
import { twMerge as XT } from "tailwind-merge";
import $2 from "react-dom";
import { useTheme as QT } from "next-themes";
import { Toaster as VT, toast as ZT } from "sonner";
var Yg = { exports: {} }, op = {};
var B2;
function LT() {
  if (B2) return op;
  B2 = 1;
  var g = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.fragment");
  function j(T, J, P) {
    var At = null;
    if (P !== void 0 && (At = "" + P), J.key !== void 0 && (At = "" + J.key), "key" in J) {
      P = {};
      for (var K in J)
        K !== "key" && (P[K] = J[K]);
    } else P = J;
    return J = P.ref, {
      $$typeof: g,
      type: T,
      key: At,
      ref: J !== void 0 ? J : null,
      props: P
    };
  }
  return op.Fragment = U, op.jsx = j, op.jsxs = j, op;
}
var fp = {};
var x2;
function wT() {
  return x2 || (x2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function g(Q) {
      if (Q == null) return null;
      if (typeof Q == "function")
        return Q.$$typeof === Ze ? null : Q.displayName || Q.name || null;
      if (typeof Q == "string") return Q;
      switch (Q) {
        case be:
          return "Fragment";
        case Ja:
          return "Profiler";
        case ne:
          return "StrictMode";
        case jl:
          return "Suspense";
        case Ie:
          return "SuspenseList";
        case ut:
          return "Activity";
      }
      if (typeof Q == "object")
        switch (typeof Q.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), Q.$$typeof) {
          case xl:
            return "Portal";
          case Ml:
            return Q.displayName || "Context";
          case Ve:
            return (Q._context.displayName || "Context") + ".Consumer";
          case ba:
            var tt = Q.render;
            return Q = Q.displayName, Q || (Q = tt.displayName || tt.name || "", Q = Q !== "" ? "ForwardRef(" + Q + ")" : "ForwardRef"), Q;
          case Xt:
            return tt = Q.displayName || null, tt !== null ? tt : g(Q.type) || "Memo";
          case sl:
            tt = Q._payload, Q = Q._init;
            try {
              return g(Q(tt));
            } catch {
            }
        }
      return null;
    }
    function U(Q) {
      return "" + Q;
    }
    function j(Q) {
      try {
        U(Q);
        var tt = !1;
      } catch {
        tt = !0;
      }
      if (tt) {
        tt = console;
        var nt = tt.error, ct = typeof Symbol == "function" && Symbol.toStringTag && Q[Symbol.toStringTag] || Q.constructor.name || "Object";
        return nt.call(
          tt,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ct
        ), U(Q);
      }
    }
    function T(Q) {
      if (Q === be) return "<>";
      if (typeof Q == "object" && Q !== null && Q.$$typeof === sl)
        return "<...>";
      try {
        var tt = g(Q);
        return tt ? "<" + tt + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function J() {
      var Q = jt.A;
      return Q === null ? null : Q.getOwner();
    }
    function P() {
      return Error("react-stack-top-frame");
    }
    function At(Q) {
      if (Ht.call(Q, "key")) {
        var tt = Object.getOwnPropertyDescriptor(Q, "key").get;
        if (tt && tt.isReactWarning) return !1;
      }
      return Q.key !== void 0;
    }
    function K(Q, tt) {
      function nt() {
        R || (R = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          tt
        ));
      }
      nt.isReactWarning = !0, Object.defineProperty(Q, "key", {
        get: nt,
        configurable: !0
      });
    }
    function ce() {
      var Q = g(this.type);
      return L[Q] || (L[Q] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), Q = this.props.ref, Q !== void 0 ? Q : null;
    }
    function Gt(Q, tt, nt, ct, je, Ka) {
      var Ee = nt.ref;
      return Q = {
        $$typeof: Ce,
        type: Q,
        key: tt,
        props: nt,
        _owner: ct
      }, (Ee !== void 0 ? Ee : null) !== null ? Object.defineProperty(Q, "ref", {
        enumerable: !1,
        get: ce
      }) : Object.defineProperty(Q, "ref", { enumerable: !1, value: null }), Q._store = {}, Object.defineProperty(Q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(Q, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(Q, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: je
      }), Object.defineProperty(Q, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ka
      }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
    }
    function Fe(Q, tt, nt, ct, je, Ka) {
      var Ee = tt.children;
      if (Ee !== void 0)
        if (ct)
          if (ql(Ee)) {
            for (ct = 0; ct < Ee.length; ct++)
              ot(Ee[ct]);
            Object.freeze && Object.freeze(Ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else ot(Ee);
      if (Ht.call(tt, "key")) {
        Ee = g(Q);
        var $a = Object.keys(tt).filter(function(Kf) {
          return Kf !== "key";
        });
        ct = 0 < $a.length ? "{key: someKey, " + $a.join(": ..., ") + ": ...}" : "{key: someKey}", yt[Ee + ct] || ($a = 0 < $a.length ? "{" + $a.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ct,
          Ee,
          $a,
          Ee
        ), yt[Ee + ct] = !0);
      }
      if (Ee = null, nt !== void 0 && (j(nt), Ee = "" + nt), At(tt) && (j(tt.key), Ee = "" + tt.key), "key" in tt) {
        nt = {};
        for (var Ea in tt)
          Ea !== "key" && (nt[Ea] = tt[Ea]);
      } else nt = tt;
      return Ee && K(
        nt,
        typeof Q == "function" ? Q.displayName || Q.name || "Unknown" : Q
      ), Gt(
        Q,
        Ee,
        nt,
        J(),
        je,
        Ka
      );
    }
    function ot(Q) {
      Ct(Q) ? Q._store && (Q._store.validated = 1) : typeof Q == "object" && Q !== null && Q.$$typeof === sl && (Q._payload.status === "fulfilled" ? Ct(Q._payload.value) && Q._payload.value._store && (Q._payload.value._store.validated = 1) : Q._store && (Q._store.validated = 1));
    }
    function Ct(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === Ce;
    }
    var wt = TS, Ce = /* @__PURE__ */ Symbol.for("react.transitional.element"), xl = /* @__PURE__ */ Symbol.for("react.portal"), be = /* @__PURE__ */ Symbol.for("react.fragment"), ne = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ja = /* @__PURE__ */ Symbol.for("react.profiler"), Ve = /* @__PURE__ */ Symbol.for("react.consumer"), Ml = /* @__PURE__ */ Symbol.for("react.context"), ba = /* @__PURE__ */ Symbol.for("react.forward_ref"), jl = /* @__PURE__ */ Symbol.for("react.suspense"), Ie = /* @__PURE__ */ Symbol.for("react.suspense_list"), Xt = /* @__PURE__ */ Symbol.for("react.memo"), sl = /* @__PURE__ */ Symbol.for("react.lazy"), ut = /* @__PURE__ */ Symbol.for("react.activity"), Ze = /* @__PURE__ */ Symbol.for("react.client.reference"), jt = wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ht = Object.prototype.hasOwnProperty, ql = Array.isArray, rl = console.createTask ? console.createTask : function() {
      return null;
    };
    wt = {
      react_stack_bottom_frame: function(Q) {
        return Q();
      }
    };
    var R, L = {}, $ = wt.react_stack_bottom_frame.bind(
      wt,
      P
    )(), rt = rl(T(P)), yt = {};
    fp.Fragment = be, fp.jsx = function(Q, tt, nt) {
      var ct = 1e4 > jt.recentlyCreatedOwnerStacks++;
      return Fe(
        Q,
        tt,
        nt,
        !1,
        ct ? Error("react-stack-top-frame") : $,
        ct ? rl(T(Q)) : rt
      );
    }, fp.jsxs = function(Q, tt, nt) {
      var ct = 1e4 > jt.recentlyCreatedOwnerStacks++;
      return Fe(
        Q,
        tt,
        nt,
        !0,
        ct ? Error("react-stack-top-frame") : $,
        ct ? rl(T(Q)) : rt
      );
    };
  })()), fp;
}
var j2;
function JT() {
  return j2 || (j2 = 1, process.env.NODE_ENV === "production" ? Yg.exports = LT() : Yg.exports = wT()), Yg.exports;
}
var ue = JT();
function SS(g, U) {
  if (g && !U)
    return g;
  if (!g && U)
    return U;
  if (g || U)
    return {
      ...g,
      ...U
    };
}
const dp = {};
function W2(g, U, j, T, J) {
  let P = {
    ...bS(g, dp)
  };
  return U && (P = k2(P, U)), P;
}
function KT(g) {
  if (g.length === 0)
    return dp;
  if (g.length === 1)
    return bS(g[0], dp);
  let U = {
    ...bS(g[0], dp)
  };
  for (let j = 1; j < g.length; j += 1)
    U = k2(U, g[j]);
  return U;
}
function k2(g, U) {
  return F2(U) ? U(g) : $T(g, U);
}
function $T(g, U) {
  if (!U)
    return g;
  for (const j in U) {
    const T = U[j];
    switch (j) {
      case "style": {
        g[j] = SS(g.style, T);
        break;
      }
      case "className": {
        g[j] = I2(g.className, T);
        break;
      }
      default:
        WT(j, T) ? g[j] = kT(g[j], T) : g[j] = T;
    }
  }
  return g;
}
function WT(g, U) {
  const j = g.charCodeAt(0), T = g.charCodeAt(1), J = g.charCodeAt(2);
  return j === 111 && T === 110 && J >= 65 && J <= 90 && (typeof U == "function" || typeof U > "u");
}
function F2(g) {
  return typeof g == "function";
}
function bS(g, U) {
  return F2(g) ? g(U) : g ?? dp;
}
function kT(g, U) {
  return U ? g ? (j) => {
    if (IT(j)) {
      const J = j;
      FT(J);
      const P = U(J);
      return J.baseUIHandlerPrevented || g?.(J), P;
    }
    const T = U(j);
    return g?.(j), T;
  } : U : g;
}
function FT(g) {
  return g.preventBaseUIHandler = () => {
    g.baseUIHandlerPrevented = !0;
  }, g;
}
function I2(g, U) {
  return U ? g ? U + " " + g : U : g;
}
function IT(g) {
  return g != null && typeof g == "object" && "nativeEvent" in g;
}
function PT(g, ...U) {
  const j = new URL("https://base-ui.com/production-error");
  return j.searchParams.set("code", g.toString()), U.forEach((T) => j.searchParams.append("args[]", T)), `Base UI error #${g}; visit ${j} for the full message.`;
}
const q2 = {};
function P2(g, U) {
  const j = jr.useRef(q2);
  return j.current === q2 && (j.current = g(U)), j;
}
function Y2(g, U, j, T) {
  const J = P2(tE).current;
  return eA(J, g, U, j, T) && eE(J, [g, U, j, T]), J.callback;
}
function tA(g) {
  const U = P2(tE).current;
  return lA(U, g) && eE(U, g), U.callback;
}
function tE() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function eA(g, U, j, T, J) {
  return g.refs[0] !== U || g.refs[1] !== j || g.refs[2] !== T || g.refs[3] !== J;
}
function lA(g, U) {
  return g.refs.length !== U.length || g.refs.some((j, T) => j !== U[T]);
}
function eE(g, U) {
  if (g.refs = U, U.every((j) => j == null)) {
    g.callback = null;
    return;
  }
  g.callback = (j) => {
    if (g.cleanup && (g.cleanup(), g.cleanup = null), j != null) {
      const T = Array(U.length).fill(null);
      for (let J = 0; J < U.length; J += 1) {
        const P = U[J];
        if (P != null)
          switch (typeof P) {
            case "function": {
              const At = P(j);
              typeof At == "function" && (T[J] = At);
              break;
            }
            case "object": {
              P.current = j;
              break;
            }
          }
      }
      g.cleanup = () => {
        for (let J = 0; J < U.length; J += 1) {
          const P = U[J];
          if (P != null)
            switch (typeof P) {
              case "function": {
                const At = T[J];
                typeof At == "function" ? At() : P(null);
                break;
              }
              case "object": {
                P.current = null;
                break;
              }
            }
        }
      };
    }
  };
}
const aA = parseInt(jr.version, 10);
function nA(g) {
  return aA >= g;
}
function G2(g) {
  if (!/* @__PURE__ */ jr.isValidElement(g))
    return null;
  const U = g, j = U.props;
  return (nA(19) ? j?.ref : U.ref) ?? null;
}
function uA(g, U) {
  const j = {};
  for (const T in g) {
    const J = g[T];
    if (U?.hasOwnProperty(T)) {
      const P = U[T](J);
      P != null && Object.assign(j, P);
      continue;
    }
    J === !0 ? j[`data-${T.toLowerCase()}`] = "" : J && (j[`data-${T.toLowerCase()}`] = J.toString());
  }
  return j;
}
function cA(g, U) {
  return typeof g == "function" ? g(U) : g;
}
function iA(g, U) {
  return typeof g == "function" ? g(U) : g;
}
const im = Object.freeze({});
function oA(g, U, j = {}) {
  const T = U.render, J = fA(U, j);
  if (j.enabled === !1)
    return null;
  const P = j.state ?? im;
  return rA(g, T, J, P);
}
function fA(g, U = {}) {
  const {
    className: j,
    style: T,
    render: J
  } = g, {
    state: P = im,
    ref: At,
    props: K,
    stateAttributesMapping: ce,
    enabled: Gt = !0
  } = U, Fe = Gt ? cA(j, P) : void 0, ot = Gt ? iA(T, P) : void 0, Ct = Gt ? uA(P, ce) : im, wt = Gt ? SS(Ct, Array.isArray(K) ? KT(K) : K) ?? im : im;
  return typeof document < "u" && (Gt ? Array.isArray(At) ? wt.ref = tA([wt.ref, G2(J), ...At]) : wt.ref = Y2(wt.ref, G2(J), At) : Y2(null, null)), Gt ? (Fe !== void 0 && (wt.className = I2(wt.className, Fe)), ot !== void 0 && (wt.style = SS(wt.style, ot)), wt) : im;
}
const sA = /* @__PURE__ */ Symbol.for("react.lazy");
function rA(g, U, j, T) {
  if (U) {
    if (typeof U == "function")
      return U(j, T);
    const J = W2(j, U.props);
    J.ref = j.ref;
    let P = U;
    if (P?.$$typeof === sA && (P = jr.Children.toArray(U)[0]), process.env.NODE_ENV !== "production" && !/* @__PURE__ */ jr.isValidElement(P))
      throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join(`
`));
    return /* @__PURE__ */ jr.cloneElement(P, J);
  }
  if (g && typeof g == "string")
    return dA(g, j);
  throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: Render element or function are not defined." : PT(8));
}
function dA(g, U) {
  return g === "button" ? /* @__PURE__ */ N2("button", {
    type: "button",
    ...U,
    key: U.key
  }) : g === "img" ? /* @__PURE__ */ N2("img", {
    alt: "",
    ...U,
    key: U.key
  }) : /* @__PURE__ */ jr.createElement(g, U);
}
function hA(g) {
  return oA(g.defaultTagName ?? "div", g, g);
}
function ti(...g) {
  return XT(GT(g));
}
const mA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cn: ti
}, Symbol.toStringTag, { value: "Module" }));
function yA({ dict: g }) {
  const { pathname: U } = HT(), j = g[U] || [];
  return /* @__PURE__ */ ue.jsx(pA, { children: /* @__PURE__ */ ue.jsx(vA, { children: j.map(
    (T, J) => /* @__PURE__ */ ue.jsxs(UT, { children: [
      /* @__PURE__ */ ue.jsx(gA, { children: T.href ? /* @__PURE__ */ ue.jsx(SA, { href: T.href, children: T.label }) : /* @__PURE__ */ ue.jsx(bA, { children: T.label }) }),
      J < j.length - 1 && /* @__PURE__ */ ue.jsx(EA, { className: "-mx-1 md:mx-0" })
    ] }, J)
  ) }) });
}
function pA({ className: g, ...U }) {
  return /* @__PURE__ */ ue.jsx(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: ti(g),
      ...U
    }
  );
}
function vA({ className: g, ...U }) {
  return /* @__PURE__ */ ue.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: ti(
        "text-muted-foreground gap-1.5 text-sm sm:gap-2.5 flex flex-wrap items-center wrap-break-word",
        g
      ),
      ...U
    }
  );
}
function gA({ className: g, ...U }) {
  return /* @__PURE__ */ ue.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: ti("gap-1.5 inline-flex items-center", g),
      ...U
    }
  );
}
function SA({
  className: g,
  render: U,
  ...j
}) {
  return hA({
    defaultTagName: "a",
    props: W2(
      {
        className: ti("hover:text-foreground transition-colors", g)
      },
      j
    ),
    render: U,
    state: {
      slot: "breadcrumb-link"
    }
  });
}
function bA({ className: g, ...U }) {
  return /* @__PURE__ */ ue.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: ti("text-foreground font-normal", g),
      ...U
    }
  );
}
function EA({
  children: g,
  className: U,
  ...j
}) {
  return /* @__PURE__ */ ue.jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: ti("[&>svg]:size-3.5", U),
      ...j,
      children: g ?? /* @__PURE__ */ ue.jsx(BT, {})
    }
  );
}
var Gg = { exports: {} }, sp = {}, Xg = { exports: {} }, yS = {};
var X2;
function TA() {
  return X2 || (X2 = 1, (function(g) {
    function U(R, L) {
      var $ = R.length;
      R.push(L);
      t: for (; 0 < $; ) {
        var rt = $ - 1 >>> 1, yt = R[rt];
        if (0 < J(yt, L))
          R[rt] = L, R[$] = yt, $ = rt;
        else break t;
      }
    }
    function j(R) {
      return R.length === 0 ? null : R[0];
    }
    function T(R) {
      if (R.length === 0) return null;
      var L = R[0], $ = R.pop();
      if ($ !== L) {
        R[0] = $;
        t: for (var rt = 0, yt = R.length, Q = yt >>> 1; rt < Q; ) {
          var tt = 2 * (rt + 1) - 1, nt = R[tt], ct = tt + 1, je = R[ct];
          if (0 > J(nt, $))
            ct < yt && 0 > J(je, nt) ? (R[rt] = je, R[ct] = $, rt = ct) : (R[rt] = nt, R[tt] = $, rt = tt);
          else if (ct < yt && 0 > J(je, $))
            R[rt] = je, R[ct] = $, rt = ct;
          else break t;
        }
      }
      return L;
    }
    function J(R, L) {
      var $ = R.sortIndex - L.sortIndex;
      return $ !== 0 ? $ : R.id - L.id;
    }
    if (g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var P = performance;
      g.unstable_now = function() {
        return P.now();
      };
    } else {
      var At = Date, K = At.now();
      g.unstable_now = function() {
        return At.now() - K;
      };
    }
    var ce = [], Gt = [], Fe = 1, ot = null, Ct = 3, wt = !1, Ce = !1, xl = !1, be = !1, ne = typeof setTimeout == "function" ? setTimeout : null, Ja = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null;
    function Ml(R) {
      for (var L = j(Gt); L !== null; ) {
        if (L.callback === null) T(Gt);
        else if (L.startTime <= R)
          T(Gt), L.sortIndex = L.expirationTime, U(ce, L);
        else break;
        L = j(Gt);
      }
    }
    function ba(R) {
      if (xl = !1, Ml(R), !Ce)
        if (j(ce) !== null)
          Ce = !0, jl || (jl = !0, jt());
        else {
          var L = j(Gt);
          L !== null && rl(ba, L.startTime - R);
        }
    }
    var jl = !1, Ie = -1, Xt = 5, sl = -1;
    function ut() {
      return be ? !0 : !(g.unstable_now() - sl < Xt);
    }
    function Ze() {
      if (be = !1, jl) {
        var R = g.unstable_now();
        sl = R;
        var L = !0;
        try {
          t: {
            Ce = !1, xl && (xl = !1, Ja(Ie), Ie = -1), wt = !0;
            var $ = Ct;
            try {
              e: {
                for (Ml(R), ot = j(ce); ot !== null && !(ot.expirationTime > R && ut()); ) {
                  var rt = ot.callback;
                  if (typeof rt == "function") {
                    ot.callback = null, Ct = ot.priorityLevel;
                    var yt = rt(
                      ot.expirationTime <= R
                    );
                    if (R = g.unstable_now(), typeof yt == "function") {
                      ot.callback = yt, Ml(R), L = !0;
                      break e;
                    }
                    ot === j(ce) && T(ce), Ml(R);
                  } else T(ce);
                  ot = j(ce);
                }
                if (ot !== null) L = !0;
                else {
                  var Q = j(Gt);
                  Q !== null && rl(
                    ba,
                    Q.startTime - R
                  ), L = !1;
                }
              }
              break t;
            } finally {
              ot = null, Ct = $, wt = !1;
            }
            L = void 0;
          }
        } finally {
          L ? jt() : jl = !1;
        }
      }
    }
    var jt;
    if (typeof Ve == "function")
      jt = function() {
        Ve(Ze);
      };
    else if (typeof MessageChannel < "u") {
      var Ht = new MessageChannel(), ql = Ht.port2;
      Ht.port1.onmessage = Ze, jt = function() {
        ql.postMessage(null);
      };
    } else
      jt = function() {
        ne(Ze, 0);
      };
    function rl(R, L) {
      Ie = ne(function() {
        R(g.unstable_now());
      }, L);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, g.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xt = 0 < R ? Math.floor(1e3 / R) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return Ct;
    }, g.unstable_next = function(R) {
      switch (Ct) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = Ct;
      }
      var $ = Ct;
      Ct = L;
      try {
        return R();
      } finally {
        Ct = $;
      }
    }, g.unstable_requestPaint = function() {
      be = !0;
    }, g.unstable_runWithPriority = function(R, L) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var $ = Ct;
      Ct = R;
      try {
        return L();
      } finally {
        Ct = $;
      }
    }, g.unstable_scheduleCallback = function(R, L, $) {
      var rt = g.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? rt + $ : rt) : $ = rt, R) {
        case 1:
          var yt = -1;
          break;
        case 2:
          yt = 250;
          break;
        case 5:
          yt = 1073741823;
          break;
        case 4:
          yt = 1e4;
          break;
        default:
          yt = 5e3;
      }
      return yt = $ + yt, R = {
        id: Fe++,
        callback: L,
        priorityLevel: R,
        startTime: $,
        expirationTime: yt,
        sortIndex: -1
      }, $ > rt ? (R.sortIndex = $, U(Gt, R), j(ce) === null && R === j(Gt) && (xl ? (Ja(Ie), Ie = -1) : xl = !0, rl(ba, $ - rt))) : (R.sortIndex = yt, U(ce, R), Ce || wt || (Ce = !0, jl || (jl = !0, jt()))), R;
    }, g.unstable_shouldYield = ut, g.unstable_wrapCallback = function(R) {
      var L = Ct;
      return function() {
        var $ = Ct;
        Ct = L;
        try {
          return R.apply(this, arguments);
        } finally {
          Ct = $;
        }
      };
    };
  })(yS)), yS;
}
var pS = {};
var Q2;
function AA() {
  return Q2 || (Q2 = 1, (function(g) {
    process.env.NODE_ENV !== "production" && (function() {
      function U() {
        if (ba = !1, sl) {
          var R = g.unstable_now();
          jt = R;
          var L = !0;
          try {
            t: {
              Ve = !1, Ml && (Ml = !1, Ie(ut), ut = -1), Ja = !0;
              var $ = ne;
              try {
                e: {
                  for (At(R), be = T(wt); be !== null && !(be.expirationTime > R && ce()); ) {
                    var rt = be.callback;
                    if (typeof rt == "function") {
                      be.callback = null, ne = be.priorityLevel;
                      var yt = rt(
                        be.expirationTime <= R
                      );
                      if (R = g.unstable_now(), typeof yt == "function") {
                        be.callback = yt, At(R), L = !0;
                        break e;
                      }
                      be === T(wt) && J(wt), At(R);
                    } else J(wt);
                    be = T(wt);
                  }
                  if (be !== null) L = !0;
                  else {
                    var Q = T(Ce);
                    Q !== null && Gt(
                      K,
                      Q.startTime - R
                    ), L = !1;
                  }
                }
                break t;
              } finally {
                be = null, ne = $, Ja = !1;
              }
              L = void 0;
            }
          } finally {
            L ? Ht() : sl = !1;
          }
        }
      }
      function j(R, L) {
        var $ = R.length;
        R.push(L);
        t: for (; 0 < $; ) {
          var rt = $ - 1 >>> 1, yt = R[rt];
          if (0 < P(yt, L))
            R[rt] = L, R[$] = yt, $ = rt;
          else break t;
        }
      }
      function T(R) {
        return R.length === 0 ? null : R[0];
      }
      function J(R) {
        if (R.length === 0) return null;
        var L = R[0], $ = R.pop();
        if ($ !== L) {
          R[0] = $;
          t: for (var rt = 0, yt = R.length, Q = yt >>> 1; rt < Q; ) {
            var tt = 2 * (rt + 1) - 1, nt = R[tt], ct = tt + 1, je = R[ct];
            if (0 > P(nt, $))
              ct < yt && 0 > P(je, nt) ? (R[rt] = je, R[ct] = $, rt = ct) : (R[rt] = nt, R[tt] = $, rt = tt);
            else if (ct < yt && 0 > P(je, $))
              R[rt] = je, R[ct] = $, rt = ct;
            else break t;
          }
        }
        return L;
      }
      function P(R, L) {
        var $ = R.sortIndex - L.sortIndex;
        return $ !== 0 ? $ : R.id - L.id;
      }
      function At(R) {
        for (var L = T(Ce); L !== null; ) {
          if (L.callback === null) J(Ce);
          else if (L.startTime <= R)
            J(Ce), L.sortIndex = L.expirationTime, j(wt, L);
          else break;
          L = T(Ce);
        }
      }
      function K(R) {
        if (Ml = !1, At(R), !Ve)
          if (T(wt) !== null)
            Ve = !0, sl || (sl = !0, Ht());
          else {
            var L = T(Ce);
            L !== null && Gt(
              K,
              L.startTime - R
            );
          }
      }
      function ce() {
        return ba ? !0 : !(g.unstable_now() - jt < Ze);
      }
      function Gt(R, L) {
        ut = jl(function() {
          R(g.unstable_now());
        }, L);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Fe = performance;
        g.unstable_now = function() {
          return Fe.now();
        };
      } else {
        var ot = Date, Ct = ot.now();
        g.unstable_now = function() {
          return ot.now() - Ct;
        };
      }
      var wt = [], Ce = [], xl = 1, be = null, ne = 3, Ja = !1, Ve = !1, Ml = !1, ba = !1, jl = typeof setTimeout == "function" ? setTimeout : null, Ie = typeof clearTimeout == "function" ? clearTimeout : null, Xt = typeof setImmediate < "u" ? setImmediate : null, sl = !1, ut = -1, Ze = 5, jt = -1;
      if (typeof Xt == "function")
        var Ht = function() {
          Xt(U);
        };
      else if (typeof MessageChannel < "u") {
        var ql = new MessageChannel(), rl = ql.port2;
        ql.port1.onmessage = U, Ht = function() {
          rl.postMessage(null);
        };
      } else
        Ht = function() {
          jl(U, 0);
        };
      g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(R) {
        R.callback = null;
      }, g.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ze = 0 < R ? Math.floor(1e3 / R) : 5;
      }, g.unstable_getCurrentPriorityLevel = function() {
        return ne;
      }, g.unstable_next = function(R) {
        switch (ne) {
          case 1:
          case 2:
          case 3:
            var L = 3;
            break;
          default:
            L = ne;
        }
        var $ = ne;
        ne = L;
        try {
          return R();
        } finally {
          ne = $;
        }
      }, g.unstable_requestPaint = function() {
        ba = !0;
      }, g.unstable_runWithPriority = function(R, L) {
        switch (R) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            R = 3;
        }
        var $ = ne;
        ne = R;
        try {
          return L();
        } finally {
          ne = $;
        }
      }, g.unstable_scheduleCallback = function(R, L, $) {
        var rt = g.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? rt + $ : rt) : $ = rt, R) {
          case 1:
            var yt = -1;
            break;
          case 2:
            yt = 250;
            break;
          case 5:
            yt = 1073741823;
            break;
          case 4:
            yt = 1e4;
            break;
          default:
            yt = 5e3;
        }
        return yt = $ + yt, R = {
          id: xl++,
          callback: L,
          priorityLevel: R,
          startTime: $,
          expirationTime: yt,
          sortIndex: -1
        }, $ > rt ? (R.sortIndex = $, j(Ce, R), T(wt) === null && R === T(Ce) && (Ml ? (Ie(ut), ut = -1) : Ml = !0, Gt(K, $ - rt))) : (R.sortIndex = yt, j(wt, R), Ve || Ja || (Ve = !0, sl || (sl = !0, Ht()))), R;
      }, g.unstable_shouldYield = ce, g.unstable_wrapCallback = function(R) {
        var L = ne;
        return function() {
          var $ = ne;
          ne = L;
          try {
            return R.apply(this, arguments);
          } finally {
            ne = $;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(pS)), pS;
}
var V2;
function lE() {
  return V2 || (V2 = 1, process.env.NODE_ENV === "production" ? Xg.exports = TA() : Xg.exports = AA()), Xg.exports;
}
var Z2;
function zA() {
  if (Z2) return sp;
  Z2 = 1;
  var g = lE(), U = TS, j = $2;
  function T(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function J(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function P(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function At(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function K(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ce(l) {
    if (P(l) !== l)
      throw Error(T(188));
  }
  function Gt(l) {
    var n = l.alternate;
    if (!n) {
      if (n = P(l), n === null) throw Error(T(188));
      return n !== l ? null : l;
    }
    for (var u = l, i = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (i = s.return, i !== null) {
          u = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ce(s), l;
          if (r === i) return ce(s), n;
          r = r.sibling;
        }
        throw Error(T(188));
      }
      if (u.return !== i.return) u = s, i = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, i = r;
            break;
          }
          if (v === i) {
            m = !0, i = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, i = s;
              break;
            }
            if (v === i) {
              m = !0, i = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(T(189));
        }
      }
      if (u.alternate !== i) throw Error(T(190));
    }
    if (u.tag !== 3) throw Error(T(188));
    return u.stateNode.current === u ? l : n;
  }
  function Fe(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Fe(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ot = Object.assign, Ct = /* @__PURE__ */ Symbol.for("react.element"), wt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ce = /* @__PURE__ */ Symbol.for("react.portal"), xl = /* @__PURE__ */ Symbol.for("react.fragment"), be = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), Ja = /* @__PURE__ */ Symbol.for("react.consumer"), Ve = /* @__PURE__ */ Symbol.for("react.context"), Ml = /* @__PURE__ */ Symbol.for("react.forward_ref"), ba = /* @__PURE__ */ Symbol.for("react.suspense"), jl = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ie = /* @__PURE__ */ Symbol.for("react.memo"), Xt = /* @__PURE__ */ Symbol.for("react.lazy"), sl = /* @__PURE__ */ Symbol.for("react.activity"), ut = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ze = Symbol.iterator;
  function jt(l) {
    return l === null || typeof l != "object" ? null : (l = Ze && l[Ze] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ht = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ql(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ht ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case xl:
        return "Fragment";
      case ne:
        return "Profiler";
      case be:
        return "StrictMode";
      case ba:
        return "Suspense";
      case jl:
        return "SuspenseList";
      case sl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ce:
          return "Portal";
        case Ve:
          return l.displayName || "Context";
        case Ja:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ml:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ie:
          return n = l.displayName || null, n !== null ? n : ql(l.type) || "Memo";
        case Xt:
          n = l._payload, l = l._init;
          try {
            return ql(l(n));
          } catch {
          }
      }
    return null;
  }
  var rl = Array.isArray, R = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, rt = [], yt = -1;
  function Q(l) {
    return { current: l };
  }
  function tt(l) {
    0 > yt || (l.current = rt[yt], rt[yt] = null, yt--);
  }
  function nt(l, n) {
    yt++, rt[yt] = l.current, l.current = n;
  }
  var ct = Q(null), je = Q(null), Ka = Q(null), Ee = Q(null);
  function $a(l, n) {
    switch (nt(Ka, n), nt(je, l), nt(ct, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Uv(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Uv(n), l = a0(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    tt(ct), nt(ct, l);
  }
  function Ea() {
    tt(ct), tt(je), tt(Ka);
  }
  function Kf(l) {
    l.memoizedState !== null && nt(Ee, l);
    var n = ct.current, u = a0(n, l.type);
    n !== u && (nt(je, l), nt(ct, u));
  }
  function I(l) {
    je.current === l && (tt(ct), tt(je)), Ee.current === l && (tt(Ee), fr._currentValue = $);
  }
  var $f, Wf;
  function Ln(l) {
    if ($f === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        $f = n && n[1] || "", Wf = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $f + l + Wf;
  }
  var ei = !1;
  function ie(l, n) {
    if (!l || ei) return "";
    ei = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var Z = function() {
                throw Error();
              };
              if (Object.defineProperty(Z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Z, []);
                } catch (Y) {
                  var N = Y;
                }
                Reflect.construct(l, [], Z);
              } else {
                try {
                  Z.call();
                } catch (Y) {
                  N = Y;
                }
                l.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                N = Y;
              }
              (Z = l()) && typeof Z.catch == "function" && Z.catch(function() {
              });
            }
          } catch (Y) {
            if (Y && N && typeof Y.stack == "string")
              return [Y.stack, N.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = i.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var A = m.split(`
`), H = v.split(`
`);
        for (s = i = 0; i < A.length && !A[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < H.length && !H[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === A.length || s === H.length)
          for (i = A.length - 1, s = H.length - 1; 1 <= i && 0 <= s && A[i] !== H[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (A[i] !== H[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || A[i] !== H[s]) {
                  var G = `
` + A[i].replace(" at new ", " at ");
                  return l.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", l.displayName)), G;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ei = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ln(u) : "";
  }
  function om(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ln(l.type);
      case 16:
        return Ln("Lazy");
      case 13:
        return l.child !== n && n !== null ? Ln("Suspense Fallback") : Ln("Suspense");
      case 19:
        return Ln("SuspenseList");
      case 0:
      case 15:
        return ie(l.type, !1);
      case 11:
        return ie(l.type.render, !1);
      case 1:
        return ie(l.type, !0);
      case 31:
        return Ln("Activity");
      default:
        return "";
    }
  }
  function qr(l) {
    try {
      var n = "", u = null;
      do
        n += om(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var fm = Object.prototype.hasOwnProperty, me = g.unstable_scheduleCallback, sm = g.unstable_cancelCallback, li = g.unstable_shouldYield, Yr = g.unstable_requestPaint, Rl = g.unstable_now, Vg = g.unstable_getCurrentPriorityLevel, Gr = g.unstable_ImmediatePriority, Xr = g.unstable_UserBlockingPriority, dc = g.unstable_NormalPriority, Zg = g.unstable_LowPriority, rm = g.unstable_IdlePriority, hp = g.log, mp = g.unstable_setDisableYieldValue, ai = null, sa = null;
  function xu(l) {
    if (typeof hp == "function" && mp(l), sa && typeof sa.setStrictMode == "function")
      try {
        sa.setStrictMode(ai, l);
      } catch {
      }
  }
  var Jl = Math.clz32 ? Math.clz32 : dm, yp = Math.log, pp = Math.LN2;
  function dm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (yp(l) / pp | 0) | 0;
  }
  var ju = 256, hn = 262144, hc = 4194304;
  function Wa(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Le(l, n, u) {
    var i = l.pendingLanes;
    if (i === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = i & 134217727;
    return v !== 0 ? (i = v & ~r, i !== 0 ? s = Wa(i) : (m &= v, m !== 0 ? s = Wa(m) : u || (u = v & ~l, u !== 0 && (s = Wa(u))))) : (v = i & ~r, v !== 0 ? s = Wa(v) : m !== 0 ? s = Wa(m) : u || (u = i & ~l, u !== 0 && (s = Wa(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function mn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function mo(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ni() {
    var l = hc;
    return hc <<= 1, (hc & 62914560) === 0 && (hc = 4194304), l;
  }
  function kf(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function yo(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Qr(l, n, u, i, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, A = l.expirationTimes, H = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var G = 31 - Jl(u), Z = 1 << G;
      v[G] = 0, A[G] = -1;
      var N = H[G];
      if (N !== null)
        for (H[G] = null, G = 0; G < N.length; G++) {
          var Y = N[G];
          Y !== null && (Y.lane &= -536870913);
        }
      u &= ~Z;
    }
    i !== 0 && Ff(l, i, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function Ff(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var i = 31 - Jl(n);
    l.entangledLanes |= n, l.entanglements[i] = l.entanglements[i] | 1073741824 | u & 261930;
  }
  function wn(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var i = 31 - Jl(u), s = 1 << i;
      s & n | l[i] & n && (l[i] |= n), u &= ~s;
    }
  }
  function Ta(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Vr(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Vr(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function hm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zr() {
    var l = L.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : sr(l.type));
  }
  function mm(l, n) {
    var u = L.p;
    try {
      return L.p = l, n();
    } finally {
      L.p = u;
    }
  }
  var yn = Math.random().toString(36).slice(2), oe = "__reactFiber$" + yn, Kl = "__reactProps$" + yn, mc = "__reactContainer$" + yn, Lr = "__reactEvents$" + yn, ym = "__reactListeners$" + yn, vp = "__reactHandles$" + yn, pm = "__reactResources$" + yn, Jn = "__reactMarker$" + yn;
  function wr(l) {
    delete l[oe], delete l[Kl], delete l[Lr], delete l[ym], delete l[vp];
  }
  function ui(l) {
    var n = l[oe];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[mc] || u[oe]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = jn(l); l !== null; ) {
            if (u = l[oe]) return u;
            l = jn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ci(l) {
    if (l = l[oe] || l[mc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function po(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(T(33));
  }
  function ii(l) {
    var n = l[pm];
    return n || (n = l[pm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Pt(l) {
    l[Jn] = !0;
  }
  var oi = /* @__PURE__ */ new Set(), yc = {};
  function pc(l, n) {
    Kn(l, n), Kn(l + "Capture", n);
  }
  function Kn(l, n) {
    for (yc[l] = n, l = 0; l < n.length; l++)
      oi.add(n[l]);
  }
  var Jr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Kr = {}, vo = {};
  function go(l) {
    return fm.call(vo, l) ? !0 : fm.call(Kr, l) ? !1 : Jr.test(l) ? vo[l] = !0 : (Kr[l] = !0, !1);
  }
  function So(l, n, u) {
    if (go(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function $r(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function qu(l, n, u, i) {
    if (i === null) l.removeAttribute(u);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + i);
    }
  }
  function Aa(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Wr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function vm(l, n, u) {
    var i = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var s = i.get, r = i.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function kr(l) {
    if (!l._valueTracker) {
      var n = Wr(l) ? "checked" : "value";
      l._valueTracker = vm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function gm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), i = "";
    return l && (i = Wr(l) ? l.checked ? "true" : "false" : l.value), l = i, l !== u ? (n.setValue(l), !0) : !1;
  }
  function If(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Lg = /[\n"\\]/g;
  function za(l) {
    return l.replace(
      Lg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pf(l, n, u, i, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Aa(n)) : l.value !== "" + Aa(n) && (l.value = "" + Aa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? fi(l, m, Aa(n)) : u != null ? fi(l, m, Aa(u)) : i != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Aa(v) : l.removeAttribute("name");
  }
  function ts(l, n, u, i, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        kr(l);
        return;
      }
      u = u != null ? "" + Aa(u) : "", n = n != null ? "" + Aa(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, l.checked = v ? l.checked : !!i, l.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), kr(l);
  }
  function fi(l, n, u) {
    n === "number" && If(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function bo(l, n, u, i) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && i && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Aa(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, i && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Sm(l, n, u) {
    if (n != null && (n = "" + Aa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Aa(u) : "";
  }
  function bm(l, n, u, i) {
    if (n == null) {
      if (i != null) {
        if (u != null) throw Error(T(92));
        if (rl(i)) {
          if (1 < i.length) throw Error(T(93));
          i = i[0];
        }
        u = i;
      }
      u == null && (u = ""), n = u;
    }
    u = Aa(n), l.defaultValue = u, i = l.textContent, i === u && i !== "" && i !== null && (l.value = i), kr(l);
  }
  function $n(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var gp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Sp(l, n, u) {
    var i = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? i ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : i ? l.setProperty(n, u) : typeof u != "number" || u === 0 || gp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function bp(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(T(62));
    if (l = l.style, u != null) {
      for (var i in u)
        !u.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? l.setProperty(i, "") : i === "float" ? l.cssFloat = "" : l[i] = "");
      for (var s in n)
        i = n[s], n.hasOwnProperty(s) && u[s] !== i && Sp(l, s, i);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Sp(l, r, n[r]);
  }
  function Em(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
        return !0;
    }
  }
  var wg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), es = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ka(l) {
    return es.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function pn() {
  }
  var Fr = null;
  function Ir(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wn = null, si = null;
  function ls(l) {
    var n = ci(l);
    if (n && (l = n.stateNode)) {
      var u = l[Kl] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (Pf(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + za(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var i = u[n];
              if (i !== l && i.form === l.form) {
                var s = i[Kl] || null;
                if (!s) throw Error(T(90));
                Pf(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              i = u[n], i.form === l.form && gm(i);
          }
          break t;
        case "textarea":
          Sm(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && bo(l, !!u.multiple, n, !1);
      }
    }
  }
  var Eo = !1;
  function Tm(l, n, u) {
    if (Eo) return l(n, u);
    Eo = !0;
    try {
      var i = l(n);
      return i;
    } finally {
      if (Eo = !1, (Wn !== null || si !== null) && (af(), Wn && (n = Wn, l = si, si = Wn = null, ls(n), l)))
        for (n = 0; n < l.length; n++) ls(l[n]);
    }
  }
  function dl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var i = u[Kl] || null;
    if (i === null) return null;
    u = i[n];
    t: switch (n) {
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
        (i = !i.disabled) || (l = l.type, i = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !i;
        break t;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        T(231, n, typeof u)
      );
    return u;
  }
  var Yu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), as = !1;
  if (Yu)
    try {
      var To = {};
      Object.defineProperty(To, "passive", {
        get: function() {
          as = !0;
        }
      }), window.addEventListener("test", To, To), window.removeEventListener("test", To, To);
    } catch {
      as = !1;
    }
  var Gu = null, Am = null, Pr = null;
  function zm() {
    if (Pr) return Pr;
    var l, n = Am, u = n.length, i, s = "value" in Gu ? Gu.value : Gu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (i = 1; i <= m && n[u - i] === s[r - i]; i++) ;
    return Pr = s.slice(l, 1 < i ? 1 - i : void 0);
  }
  function td(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function ns() {
    return !0;
  }
  function Ep() {
    return !1;
  }
  function Ul(l) {
    function n(u, i, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? ns : Ep, this.isPropagationStopped = Ep, this;
    }
    return ot(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ns);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ns);
      },
      persist: function() {
      },
      isPersistent: ns
    }), n;
  }
  var vc = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, us = Ul(vc), Ao = ot({}, vc, { view: 0, detail: 0 }), Jg = Ul(Ao), Dm, Om, cs, ed = ot({}, Ao, {
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
    getModifierState: Fa,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== cs && (cs && l.type === "mousemove" ? (Dm = l.screenX - cs.screenX, Om = l.screenY - cs.screenY) : Om = Dm = 0, cs = l), Dm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Om;
    }
  }), zo = Ul(ed), Tp = ot({}, ed, { dataTransfer: 0 }), Ap = Ul(Tp), zp = ot({}, Ao, { relatedTarget: 0 }), ld = Ul(zp), Mm = ot({}, vc, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dp = Ul(Mm), ri = ot({}, vc, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), di = Ul(ri), vn = ot({}, vc, { data: 0 }), Op = Ul(vn), Rm = {
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
  }, kn = {
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
  }, Mp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Mp[l]) ? !!n[l] : !1;
  }
  function Fa() {
    return gn;
  }
  var ad = ot({}, Ao, {
    key: function(l) {
      if (l.key) {
        var n = Rm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = td(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? kn[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fa,
    charCode: function(l) {
      return l.type === "keypress" ? td(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? td(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), nd = Ul(ad), Um = ot({}, ed, {
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
  }), Sn = Ul(Um), Kg = ot({}, Ao, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa
  }), Rp = Ul(Kg), Up = ot({}, vc, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $g = Ul(Up), _m = ot({}, ed, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wg = Ul(_m), _p = ot({}, vc, {
    newState: 0,
    oldState: 0
  }), Cm = Ul(_p), ud = [9, 13, 27, 32], Do = Yu && "CompositionEvent" in window, hi = null;
  Yu && "documentMode" in document && (hi = document.documentMode);
  var Yl = Yu && "TextEvent" in window && !hi, Hm = Yu && (!Do || hi && 8 < hi && 11 >= hi), is = " ", gc = !1;
  function cd(l, n) {
    switch (l) {
      case "keyup":
        return ud.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Nm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var mi = !1;
  function Cp(l, n) {
    switch (l) {
      case "compositionend":
        return Nm(n);
      case "keypress":
        return n.which !== 32 ? null : (gc = !0, is);
      case "textInput":
        return l = n.data, l === is && gc ? null : l;
      default:
        return null;
    }
  }
  function kg(l, n) {
    if (mi)
      return l === "compositionend" || !Do && cd(l, n) ? (l = zm(), Pr = Am = Gu = null, mi = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Hm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Bm = {
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
  function Fn(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Bm[l.type] : n === "textarea";
  }
  function xm(l, n, u, i) {
    Wn ? si ? si.push(i) : si = [i] : Wn = i, n = ar(n, "onChange"), 0 < n.length && (u = new us(
      "onChange",
      "change",
      null,
      u,
      i
    ), l.push({ event: u, listeners: n }));
  }
  var yi = null, Sc = null;
  function pi(l) {
    Ov(l, 0);
  }
  function Oo(l) {
    var n = po(l);
    if (gm(n)) return l;
  }
  function jm(l, n) {
    if (l === "change") return n;
  }
  var id = !1;
  if (Yu) {
    var $l;
    if (Yu) {
      var bn = "oninput" in document;
      if (!bn) {
        var qm = document.createElement("div");
        qm.setAttribute("oninput", "return;"), bn = typeof qm.oninput == "function";
      }
      $l = bn;
    } else $l = !1;
    id = $l && (!document.documentMode || 9 < document.documentMode);
  }
  function od() {
    yi && (yi.detachEvent("onpropertychange", fd), Sc = yi = null);
  }
  function fd(l) {
    if (l.propertyName === "value" && Oo(Sc)) {
      var n = [];
      xm(
        n,
        Sc,
        l,
        Ir(l)
      ), Tm(pi, n);
    }
  }
  function Hp(l, n, u) {
    l === "focusin" ? (od(), yi = n, Sc = u, yi.attachEvent("onpropertychange", fd)) : l === "focusout" && od();
  }
  function Np(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Oo(Sc);
  }
  function bc(l, n) {
    if (l === "click") return Oo(n);
  }
  function vi(l, n) {
    if (l === "input" || l === "change")
      return Oo(n);
  }
  function Bp(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Gl = typeof Object.is == "function" ? Object.is : Bp;
  function Ia(l, n) {
    if (Gl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), i = Object.keys(n);
    if (u.length !== i.length) return !1;
    for (i = 0; i < u.length; i++) {
      var s = u[i];
      if (!fm.call(n, s) || !Gl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Ym(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Gm(l, n) {
    var u = Ym(l);
    l = 0;
    for (var i; u; ) {
      if (u.nodeType === 3) {
        if (i = l + u.textContent.length, l <= n && i >= n)
          return { node: u, offset: n - l };
        l = i;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Ym(u);
    }
  }
  function gi(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? gi(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Ec(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = If(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = If(l.document);
    }
    return n;
  }
  function os(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var fs = Yu && "documentMode" in document && 11 >= document.documentMode, Tc = null, Mo = null, Pa = null, En = !1;
  function sd(l, n, u) {
    var i = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    En || Tc == null || Tc !== If(i) || (i = Tc, "selectionStart" in i && os(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Pa && Ia(Pa, i) || (Pa = i, i = ar(Mo, "onSelect"), 0 < i.length && (n = new us(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: i }), n.target = Tc)));
  }
  function Xu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Tn = {
    animationend: Xu("Animation", "AnimationEnd"),
    animationiteration: Xu("Animation", "AnimationIteration"),
    animationstart: Xu("Animation", "AnimationStart"),
    transitionrun: Xu("Transition", "TransitionRun"),
    transitionstart: Xu("Transition", "TransitionStart"),
    transitioncancel: Xu("Transition", "TransitionCancel"),
    transitionend: Xu("Transition", "TransitionEnd")
  }, Ro = {}, Ac = {};
  Yu && (Ac = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
  function kt(l) {
    if (Ro[l]) return Ro[l];
    if (!Tn[l]) return l;
    var n = Tn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ac)
        return Ro[l] = n[u];
    return l;
  }
  var ss = kt("animationend"), Xm = kt("animationiteration"), rd = kt("animationstart"), Si = kt("transitionrun"), rs = kt("transitionstart"), In = kt("transitioncancel"), xp = kt("transitionend"), Pn = /* @__PURE__ */ new Map(), Uo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Uo.push("scrollEnd");
  function Wl(l, n) {
    Pn.set(l, n), pc(n, [l]);
  }
  var bi = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, ze = [], hl = 0, tn = 0;
  function Da() {
    for (var l = hl, n = tn = hl = 0; n < l; ) {
      var u = ze[n];
      ze[n++] = null;
      var i = ze[n];
      ze[n++] = null;
      var s = ze[n];
      ze[n++] = null;
      var r = ze[n];
      if (ze[n++] = null, i !== null && s !== null) {
        var m = i.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), i.pending = s;
      }
      r !== 0 && dd(u, s, r);
    }
  }
  function Oa(l, n, u, i) {
    ze[hl++] = l, ze[hl++] = n, ze[hl++] = u, ze[hl++] = i, tn |= i, l.lanes |= i, l = l.alternate, l !== null && (l.lanes |= i);
  }
  function en(l, n, u, i) {
    return Oa(l, n, u, i), ds(l);
  }
  function Qu(l, n) {
    return Oa(l, null, null, n), ds(l);
  }
  function dd(l, n, u) {
    l.lanes |= u;
    var i = l.alternate;
    i !== null && (i.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, i = r.alternate, i !== null && (i.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Jl(u), l = r.hiddenUpdates, i = l[s], i === null ? l[s] = [n] : i.push(n), n.lane = u | 536870912), r) : null;
  }
  function ds(l) {
    if (50 < lf)
      throw lf = 0, $s = null, Error(T(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var kl = {};
  function jp(l, n, u, i) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qe(l, n, u, i) {
    return new jp(l, n, u, i);
  }
  function Ei(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Vu(l, n) {
    var u = l.alternate;
    return u === null ? (u = qe(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Qm(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function hd(l, n, u, i, s, r) {
    var m = 0;
    if (i = l, typeof l == "function") Ei(l) && (m = 1);
    else if (typeof l == "string")
      m = s0(
        l,
        u,
        ct.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case sl:
          return l = qe(31, u, n, s), l.elementType = sl, l.lanes = r, l;
        case xl:
          return Zu(u.children, s, r, n);
        case be:
          m = 8, s |= 24;
          break;
        case ne:
          return l = qe(12, u, n, s | 2), l.elementType = ne, l.lanes = r, l;
        case ba:
          return l = qe(13, u, n, s), l.elementType = ba, l.lanes = r, l;
        case jl:
          return l = qe(19, u, n, s), l.elementType = jl, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ve:
                m = 10;
                break t;
              case Ja:
                m = 9;
                break t;
              case Ml:
                m = 11;
                break t;
              case Ie:
                m = 14;
                break t;
              case Xt:
                m = 16, i = null;
                break t;
            }
          m = 29, u = Error(
            T(130, l === null ? "null" : typeof l, "")
          ), i = null;
      }
    return n = qe(m, u, n, s), n.elementType = l, n.type = i, n.lanes = r, n;
  }
  function Zu(l, n, u, i) {
    return l = qe(7, l, i, n), l.lanes = u, l;
  }
  function _o(l, n, u) {
    return l = qe(6, l, null, n), l.lanes = u, l;
  }
  function Vm(l) {
    var n = qe(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function md(l, n, u) {
    return n = qe(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Zm = /* @__PURE__ */ new WeakMap();
  function Ma(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Zm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: qr(n)
      }, Zm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: qr(n)
    };
  }
  var Ra = [], Ti = 0, hs = null, we = 0, ra = [], Fl = 0, An = null, da = 1, zn = "";
  function ln(l, n) {
    Ra[Ti++] = we, Ra[Ti++] = hs, hs = l, we = n;
  }
  function Lm(l, n, u) {
    ra[Fl++] = da, ra[Fl++] = zn, ra[Fl++] = An, An = l;
    var i = da;
    l = zn;
    var s = 32 - Jl(i) - 1;
    i &= ~(1 << s), u += 1;
    var r = 32 - Jl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (i & (1 << m) - 1).toString(32), i >>= m, s -= m, da = 1 << 32 - Jl(n) + s | u << s | i, zn = r + l;
    } else
      da = 1 << r | u << s | i, zn = l;
  }
  function Co(l) {
    l.return !== null && (ln(l, 1), Lm(l, 1, 0));
  }
  function yd(l) {
    for (; l === hs; )
      hs = Ra[--Ti], Ra[Ti] = null, we = Ra[--Ti], Ra[Ti] = null;
    for (; l === An; )
      An = ra[--Fl], ra[Fl] = null, zn = ra[--Fl], ra[Fl] = null, da = ra[--Fl], ra[Fl] = null;
  }
  function ms(l, n) {
    ra[Fl++] = da, ra[Fl++] = zn, ra[Fl++] = An, da = n.id, zn = n.overflow, An = l;
  }
  var ml = null, ye = null, qt = !1, tu = null, al = !1, eu = Error(T(519));
  function an(l) {
    var n = Error(
      T(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw No(Ma(n, l)), eu;
  }
  function ys(l) {
    var n = l.stateNode, u = l.type, i = l.memoizedProps;
    switch (n[oe] = l, n[Kl] = i, u) {
      case "dialog":
        xt("cancel", n), xt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        xt("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ff.length; u++)
          xt(ff[u], n);
        break;
      case "source":
        xt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        xt("error", n), xt("load", n);
        break;
      case "details":
        xt("toggle", n);
        break;
      case "input":
        xt("invalid", n), ts(
          n,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        xt("invalid", n);
        break;
      case "textarea":
        xt("invalid", n), bm(n, i.value, i.defaultValue, i.children);
    }
    u = i.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || i.suppressHydrationWarning === !0 || Py(n.textContent, u) ? (i.popover != null && (xt("beforetoggle", n), xt("toggle", n)), i.onScroll != null && xt("scroll", n), i.onScrollEnd != null && xt("scrollend", n), i.onClick != null && (n.onclick = pn), n = !0) : n = !1, n || an(l, !0);
  }
  function Ho(l) {
    for (ml = l.return; ml; )
      switch (ml.tag) {
        case 5:
        case 31:
        case 13:
          al = !1;
          return;
        case 27:
        case 3:
          al = !0;
          return;
        default:
          ml = ml.return;
      }
  }
  function lu(l) {
    if (l !== ml) return !1;
    if (!qt) return Ho(l), qt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || rf(l.type, l.memoizedProps)), u = !u), u && ye && an(l), Ho(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(317));
      ye = gh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(317));
      ye = gh(l);
    } else
      n === 27 ? (n = ye, xn(l.type) ? (l = cr, cr = null, ye = l) : ye = n) : ye = ml ? ia(l.stateNode.nextSibling) : null;
    return !0;
  }
  function zc() {
    ye = ml = null, qt = !1;
  }
  function wm() {
    var l = tu;
    return l !== null && (Be === null ? Be = l : Be.push.apply(
      Be,
      l
    ), tu = null), l;
  }
  function No(l) {
    tu === null ? tu = [l] : tu.push(l);
  }
  var pd = Q(null), Lu = null, Dn = null;
  function Il(l, n, u) {
    nt(pd, n._currentValue), n._currentValue = u;
  }
  function On(l) {
    l._currentValue = pd.current, tt(pd);
  }
  function vd(l, n, u) {
    for (; l !== null; ) {
      var i = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function au(l, n, u, i) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (v.context === n[A]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), vd(
                r.return,
                u,
                l
              ), i || (m = null);
              break t;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(T(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), vd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function yl(l, n, u, i) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(T(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          Gl(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === Ee.current) {
        if (m = s.alternate, m === null) throw Error(T(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(fr) : l = [fr]);
      }
      s = s.return;
    }
    l !== null && au(
      n,
      l,
      u,
      i
    ), n.flags |= 262144;
  }
  function Ai(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Gl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function gt(l) {
    Lu = l, Dn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function w(l) {
    return ps(Lu, l);
  }
  function wu(l, n) {
    return Lu === null && gt(l), ps(l, n);
  }
  function ps(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Dn === null) {
      if (l === null) throw Error(T(308));
      Dn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Dn = Dn.next = n;
    return u;
  }
  var Ye = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, i) {
        l.push(i);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Jm = g.unstable_scheduleCallback, Km = g.unstable_NormalPriority, Je = {
    $$typeof: Ve,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function vs() {
    return {
      controller: new Ye(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function gs(l) {
    l.refCount--, l.refCount === 0 && Jm(Km, function() {
      l.controller.abort();
    });
  }
  var zi = null, Ss = 0, Dc = 0, Pe = null;
  function te(l, n) {
    if (zi === null) {
      var u = zi = [];
      Ss = 0, Dc = sh(), Pe = {
        status: "pending",
        value: void 0,
        then: function(i) {
          u.push(i);
        }
      };
    }
    return Ss++, n.then(bs, bs), n;
  }
  function bs() {
    if (--Ss === 0 && zi !== null) {
      Pe !== null && (Pe.status = "fulfilled");
      var l = zi;
      zi = null, Dc = 0, Pe = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Es(l, n) {
    var u = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        i.status = "fulfilled", i.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), i;
  }
  var Ju = R.S;
  R.S = function(l, n) {
    Xy = Rl(), typeof n == "object" && n !== null && typeof n.then == "function" && te(l, n), Ju !== null && Ju(l, n);
  };
  var Ua = Q(null);
  function _a() {
    var l = Ua.current;
    return l !== null ? l : se.pooledCache;
  }
  function Bo(l, n) {
    n === null ? nt(Ua, Ua.current) : nt(Ua, n.pool);
  }
  function Di() {
    var l = _a();
    return l === null ? null : { parent: Je._currentValue, pool: l };
  }
  var Oc = Error(T(460)), Oi = Error(T(474)), xo = Error(T(542)), Mi = { then: function() {
  } };
  function $m(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Wm(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(pn, pn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, gd(l), l;
      default:
        if (typeof n.status == "string") n.then(pn, pn);
        else {
          if (l = se, l !== null && 100 < l.shellSuspendCounter)
            throw Error(T(482));
          l = n, l.status = "pending", l.then(
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, gd(l), l;
        }
        throw Rc = n, Oc;
    }
  }
  function Mc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Rc = u, Oc) : u;
    }
  }
  var Rc = null;
  function km() {
    if (Rc === null) throw Error(T(459));
    var l = Rc;
    return Rc = null, l;
  }
  function gd(l) {
    if (l === Oc || l === xo)
      throw Error(T(483));
  }
  var Uc = null, Ri = 0;
  function Ts(l) {
    var n = Ri;
    return Ri += 1, Uc === null && (Uc = []), Wm(Uc, l, n);
  }
  function jo(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function As(l, n) {
    throw n.$$typeof === Ct ? Error(T(525)) : (l = Object.prototype.toString.call(n), Error(
      T(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function qp(l) {
    function n(_, O) {
      if (l) {
        var C = _.deletions;
        C === null ? (_.deletions = [O], _.flags |= 16) : C.push(O);
      }
    }
    function u(_, O) {
      if (!l) return null;
      for (; O !== null; )
        n(_, O), O = O.sibling;
      return null;
    }
    function i(_) {
      for (var O = /* @__PURE__ */ new Map(); _ !== null; )
        _.key !== null ? O.set(_.key, _) : O.set(_.index, _), _ = _.sibling;
      return O;
    }
    function s(_, O) {
      return _ = Vu(_, O), _.index = 0, _.sibling = null, _;
    }
    function r(_, O, C) {
      return _.index = C, l ? (C = _.alternate, C !== null ? (C = C.index, C < O ? (_.flags |= 67108866, O) : C) : (_.flags |= 67108866, O)) : (_.flags |= 1048576, O);
    }
    function m(_) {
      return l && _.alternate === null && (_.flags |= 67108866), _;
    }
    function v(_, O, C, V) {
      return O === null || O.tag !== 6 ? (O = _o(C, _.mode, V), O.return = _, O) : (O = s(O, C), O.return = _, O);
    }
    function A(_, O, C, V) {
      var it = C.type;
      return it === xl ? G(
        _,
        O,
        C.props.children,
        V,
        C.key
      ) : O !== null && (O.elementType === it || typeof it == "object" && it !== null && it.$$typeof === Xt && Mc(it) === O.type) ? (O = s(O, C.props), jo(O, C), O.return = _, O) : (O = hd(
        C.type,
        C.key,
        C.props,
        null,
        _.mode,
        V
      ), jo(O, C), O.return = _, O);
    }
    function H(_, O, C, V) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== C.containerInfo || O.stateNode.implementation !== C.implementation ? (O = md(C, _.mode, V), O.return = _, O) : (O = s(O, C.children || []), O.return = _, O);
    }
    function G(_, O, C, V, it) {
      return O === null || O.tag !== 7 ? (O = Zu(
        C,
        _.mode,
        V,
        it
      ), O.return = _, O) : (O = s(O, C), O.return = _, O);
    }
    function Z(_, O, C) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return O = _o(
          "" + O,
          _.mode,
          C
        ), O.return = _, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case wt:
            return C = hd(
              O.type,
              O.key,
              O.props,
              null,
              _.mode,
              C
            ), jo(C, O), C.return = _, C;
          case Ce:
            return O = md(
              O,
              _.mode,
              C
            ), O.return = _, O;
          case Xt:
            return O = Mc(O), Z(_, O, C);
        }
        if (rl(O) || jt(O))
          return O = Zu(
            O,
            _.mode,
            C,
            null
          ), O.return = _, O;
        if (typeof O.then == "function")
          return Z(_, Ts(O), C);
        if (O.$$typeof === Ve)
          return Z(
            _,
            wu(_, O),
            C
          );
        As(_, O);
      }
      return null;
    }
    function N(_, O, C, V) {
      var it = O !== null ? O.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return it !== null ? null : v(_, O, "" + C, V);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case wt:
            return C.key === it ? A(_, O, C, V) : null;
          case Ce:
            return C.key === it ? H(_, O, C, V) : null;
          case Xt:
            return C = Mc(C), N(_, O, C, V);
        }
        if (rl(C) || jt(C))
          return it !== null ? null : G(_, O, C, V, null);
        if (typeof C.then == "function")
          return N(
            _,
            O,
            Ts(C),
            V
          );
        if (C.$$typeof === Ve)
          return N(
            _,
            O,
            wu(_, C),
            V
          );
        As(_, C);
      }
      return null;
    }
    function Y(_, O, C, V, it) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return _ = _.get(C) || null, v(O, _, "" + V, it);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case wt:
            return _ = _.get(
              V.key === null ? C : V.key
            ) || null, A(O, _, V, it);
          case Ce:
            return _ = _.get(
              V.key === null ? C : V.key
            ) || null, H(O, _, V, it);
          case Xt:
            return V = Mc(V), Y(
              _,
              O,
              C,
              V,
              it
            );
        }
        if (rl(V) || jt(V))
          return _ = _.get(C) || null, G(O, _, V, it, null);
        if (typeof V.then == "function")
          return Y(
            _,
            O,
            C,
            Ts(V),
            it
          );
        if (V.$$typeof === Ve)
          return Y(
            _,
            O,
            C,
            wu(O, V),
            it
          );
        As(O, V);
      }
      return null;
    }
    function et(_, O, C, V) {
      for (var it = null, Jt = null, lt = O, Et = O = 0, Dt = null; lt !== null && Et < C.length; Et++) {
        lt.index > Et ? (Dt = lt, lt = null) : Dt = lt.sibling;
        var Wt = N(
          _,
          lt,
          C[Et],
          V
        );
        if (Wt === null) {
          lt === null && (lt = Dt);
          break;
        }
        l && lt && Wt.alternate === null && n(_, lt), O = r(Wt, O, Et), Jt === null ? it = Wt : Jt.sibling = Wt, Jt = Wt, lt = Dt;
      }
      if (Et === C.length)
        return u(_, lt), qt && ln(_, Et), it;
      if (lt === null) {
        for (; Et < C.length; Et++)
          lt = Z(_, C[Et], V), lt !== null && (O = r(
            lt,
            O,
            Et
          ), Jt === null ? it = lt : Jt.sibling = lt, Jt = lt);
        return qt && ln(_, Et), it;
      }
      for (lt = i(lt); Et < C.length; Et++)
        Dt = Y(
          lt,
          _,
          Et,
          C[Et],
          V
        ), Dt !== null && (l && Dt.alternate !== null && lt.delete(
          Dt.key === null ? Et : Dt.key
        ), O = r(
          Dt,
          O,
          Et
        ), Jt === null ? it = Dt : Jt.sibling = Dt, Jt = Dt);
      return l && lt.forEach(function(Yn) {
        return n(_, Yn);
      }), qt && ln(_, Et), it;
    }
    function dt(_, O, C, V) {
      if (C == null) throw Error(T(151));
      for (var it = null, Jt = null, lt = O, Et = O = 0, Dt = null, Wt = C.next(); lt !== null && !Wt.done; Et++, Wt = C.next()) {
        lt.index > Et ? (Dt = lt, lt = null) : Dt = lt.sibling;
        var Yn = N(_, lt, Wt.value, V);
        if (Yn === null) {
          lt === null && (lt = Dt);
          break;
        }
        l && lt && Yn.alternate === null && n(_, lt), O = r(Yn, O, Et), Jt === null ? it = Yn : Jt.sibling = Yn, Jt = Yn, lt = Dt;
      }
      if (Wt.done)
        return u(_, lt), qt && ln(_, Et), it;
      if (lt === null) {
        for (; !Wt.done; Et++, Wt = C.next())
          Wt = Z(_, Wt.value, V), Wt !== null && (O = r(Wt, O, Et), Jt === null ? it = Wt : Jt.sibling = Wt, Jt = Wt);
        return qt && ln(_, Et), it;
      }
      for (lt = i(lt); !Wt.done; Et++, Wt = C.next())
        Wt = Y(lt, _, Et, Wt.value, V), Wt !== null && (l && Wt.alternate !== null && lt.delete(Wt.key === null ? Et : Wt.key), O = r(Wt, O, Et), Jt === null ? it = Wt : Jt.sibling = Wt, Jt = Wt);
      return l && lt.forEach(function(Qv) {
        return n(_, Qv);
      }), qt && ln(_, Et), it;
    }
    function de(_, O, C, V) {
      if (typeof C == "object" && C !== null && C.type === xl && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case wt:
            t: {
              for (var it = C.key; O !== null; ) {
                if (O.key === it) {
                  if (it = C.type, it === xl) {
                    if (O.tag === 7) {
                      u(
                        _,
                        O.sibling
                      ), V = s(
                        O,
                        C.props.children
                      ), V.return = _, _ = V;
                      break t;
                    }
                  } else if (O.elementType === it || typeof it == "object" && it !== null && it.$$typeof === Xt && Mc(it) === O.type) {
                    u(
                      _,
                      O.sibling
                    ), V = s(O, C.props), jo(V, C), V.return = _, _ = V;
                    break t;
                  }
                  u(_, O);
                  break;
                } else n(_, O);
                O = O.sibling;
              }
              C.type === xl ? (V = Zu(
                C.props.children,
                _.mode,
                V,
                C.key
              ), V.return = _, _ = V) : (V = hd(
                C.type,
                C.key,
                C.props,
                null,
                _.mode,
                V
              ), jo(V, C), V.return = _, _ = V);
            }
            return m(_);
          case Ce:
            t: {
              for (it = C.key; O !== null; ) {
                if (O.key === it)
                  if (O.tag === 4 && O.stateNode.containerInfo === C.containerInfo && O.stateNode.implementation === C.implementation) {
                    u(
                      _,
                      O.sibling
                    ), V = s(O, C.children || []), V.return = _, _ = V;
                    break t;
                  } else {
                    u(_, O);
                    break;
                  }
                else n(_, O);
                O = O.sibling;
              }
              V = md(C, _.mode, V), V.return = _, _ = V;
            }
            return m(_);
          case Xt:
            return C = Mc(C), de(
              _,
              O,
              C,
              V
            );
        }
        if (rl(C))
          return et(
            _,
            O,
            C,
            V
          );
        if (jt(C)) {
          if (it = jt(C), typeof it != "function") throw Error(T(150));
          return C = it.call(C), dt(
            _,
            O,
            C,
            V
          );
        }
        if (typeof C.then == "function")
          return de(
            _,
            O,
            Ts(C),
            V
          );
        if (C.$$typeof === Ve)
          return de(
            _,
            O,
            wu(_, C),
            V
          );
        As(_, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, O !== null && O.tag === 6 ? (u(_, O.sibling), V = s(O, C), V.return = _, _ = V) : (u(_, O), V = _o(C, _.mode, V), V.return = _, _ = V), m(_)) : u(_, O);
    }
    return function(_, O, C, V) {
      try {
        Ri = 0;
        var it = de(
          _,
          O,
          C,
          V
        );
        return Uc = null, it;
      } catch (lt) {
        if (lt === Oc || lt === xo) throw lt;
        var Jt = qe(29, lt, null, _.mode);
        return Jt.lanes = V, Jt.return = _, Jt;
      }
    };
  }
  var _c = qp(!0), Fm = qp(!1), Ku = !1;
  function zs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Sd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function $u(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ca(l, n, u) {
    var i = l.updateQueue;
    if (i === null) return null;
    if (i = i.shared, ($t & 2) !== 0) {
      var s = i.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), i.pending = n, n = ds(l), dd(l, null, u), n;
    }
    return Oa(l, i, n, u), ds(l);
  }
  function Cc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, wn(l, u);
    }
  }
  function bd(l, n) {
    var u = l.updateQueue, i = l.alternate;
    if (i !== null && (i = i.updateQueue, u === i)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Im = !1;
  function Hc() {
    if (Im) {
      var l = Pe;
      if (l !== null) throw l;
    }
  }
  function nu(l, n, u, i) {
    Im = !1;
    var s = l.updateQueue;
    Ku = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var A = v, H = A.next;
      A.next = null, m === null ? r = H : m.next = H, m = A;
      var G = l.alternate;
      G !== null && (G = G.updateQueue, v = G.lastBaseUpdate, v !== m && (v === null ? G.firstBaseUpdate = H : v.next = H, G.lastBaseUpdate = A));
    }
    if (r !== null) {
      var Z = s.baseState;
      m = 0, G = H = A = null, v = r;
      do {
        var N = v.lane & -536870913, Y = N !== v.lane;
        if (Y ? (Nt & N) === N : (i & N) === N) {
          N !== 0 && N === Dc && (Im = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var et = l, dt = v;
            N = n;
            var de = u;
            switch (dt.tag) {
              case 1:
                if (et = dt.payload, typeof et == "function") {
                  Z = et.call(de, Z, N);
                  break t;
                }
                Z = et;
                break t;
              case 3:
                et.flags = et.flags & -65537 | 128;
              case 0:
                if (et = dt.payload, N = typeof et == "function" ? et.call(de, Z, N) : et, N == null) break t;
                Z = ot({}, Z, N);
                break t;
              case 2:
                Ku = !0;
            }
          }
          N = v.callback, N !== null && (l.flags |= 64, Y && (l.flags |= 8192), Y = s.callbacks, Y === null ? s.callbacks = [N] : Y.push(N));
        } else
          Y = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, G === null ? (H = G = Y, A = Z) : G = G.next = Y, m |= N;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          Y = v, v = Y.next, Y.next = null, s.lastBaseUpdate = Y, s.shared.pending = null;
        }
      } while (!0);
      G === null && (A = Z), s.baseState = A, s.firstBaseUpdate = H, s.lastBaseUpdate = G, r === null && (s.shared.lanes = 0), Nn |= m, l.lanes = m, l.memoizedState = Z;
    }
  }
  function Ed(l, n) {
    if (typeof l != "function")
      throw Error(T(191, l));
    l.call(n);
  }
  function Nc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Ed(u[l], n);
  }
  var nl = Q(null), Ui = Q(0);
  function Yp(l, n) {
    l = Hn, nt(Ui, l), nt(nl, n), Hn = l | n.baseLanes;
  }
  function Ds() {
    nt(Ui, Hn), nt(nl, nl.current);
  }
  function qo() {
    Hn = Ui.current, tt(nl), tt(Ui);
  }
  var Pl = Q(null), Ha = null;
  function uu(l) {
    var n = l.alternate;
    nt(De, De.current & 1), nt(Pl, l), Ha === null && (n === null || nl.current !== null || n.memoizedState !== null) && (Ha = l);
  }
  function Yo(l) {
    nt(De, De.current), nt(Pl, l), Ha === null && (Ha = l);
  }
  function Td(l) {
    l.tag === 22 ? (nt(De, De.current), nt(Pl, l), Ha === null && (Ha = l)) : Mn();
  }
  function Mn() {
    nt(De, De.current), nt(Pl, Pl.current);
  }
  function ta(l) {
    tt(Pl), Ha === l && (Ha = null), tt(De);
  }
  var De = Q(0);
  function Go(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || on(u) || wc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var cu = 0, Tt = null, ee = null, Ke = null, _i = !1, Ci = !1, Wu = !1, Os = 0, Xo = 0, Bc = null, Gp = 0;
  function He() {
    throw Error(T(321));
  }
  function ku(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Gl(l[u], n[u])) return !1;
    return !0;
  }
  function Ms(l, n, u, i, s, r) {
    return cu = r, Tt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, R.H = l === null || l.memoizedState === null ? Kp : Gd, Wu = !1, r = u(i, s), Wu = !1, Ci && (r = Xp(
      n,
      u,
      i,
      s
    )), Ad(l), r;
  }
  function Ad(l) {
    R.H = js;
    var n = ee !== null && ee.next !== null;
    if (cu = 0, Ke = ee = Tt = null, _i = !1, Xo = 0, Bc = null, n) throw Error(T(300));
    l === null || $e || (l = l.dependencies, l !== null && Ai(l) && ($e = !0));
  }
  function Xp(l, n, u, i) {
    Tt = l;
    var s = 0;
    do {
      if (Ci && (Bc = null), Xo = 0, Ci = !1, 25 <= s) throw Error(T(301));
      if (s += 1, Ke = ee = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      R.H = $p, r = n(u, i);
    } while (Ci);
    return r;
  }
  function Fg() {
    var l = R.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ni(n) : n, l = l.useState()[0], (ee !== null ? ee.memoizedState : null) !== l && (Tt.flags |= 1024), n;
  }
  function zd() {
    var l = Os !== 0;
    return Os = 0, l;
  }
  function Hi(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Rs(l) {
    if (_i) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      _i = !1;
    }
    cu = 0, Ke = ee = Tt = null, Ci = !1, Xo = Os = 0, Bc = null;
  }
  function pl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ke === null ? Tt.memoizedState = Ke = l : Ke = Ke.next = l, Ke;
  }
  function Ge() {
    if (ee === null) {
      var l = Tt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ee.next;
    var n = Ke === null ? Tt.memoizedState : Ke.next;
    if (n !== null)
      Ke = n, ee = l;
    else {
      if (l === null)
        throw Tt.alternate === null ? Error(T(467)) : Error(T(310));
      ee = l, l = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null
      }, Ke === null ? Tt.memoizedState = Ke = l : Ke = Ke.next = l;
    }
    return Ke;
  }
  function Us() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ni(l) {
    var n = Xo;
    return Xo += 1, Bc === null && (Bc = []), l = Wm(Bc, l, n), n = Tt, (Ke === null ? n.memoizedState : Ke.next) === null && (n = n.alternate, R.H = n === null || n.memoizedState === null ? Kp : Gd), l;
  }
  function Qo(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ni(l);
      if (l.$$typeof === Ve) return w(l);
    }
    throw Error(T(438, String(l)));
  }
  function Dd(l) {
    var n = null, u = Tt.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var i = Tt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (n = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Us(), Tt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), i = 0; i < l; i++)
        u[i] = ut;
    return n.index++, u;
  }
  function iu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function ou(l) {
    var n = Ge();
    return Od(n, ee, l);
  }
  function Od(l, n, u) {
    var i = l.queue;
    if (i === null) throw Error(T(311));
    i.lastRenderedReducer = u;
    var s = l.baseQueue, r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, i.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, A = null, H = n, G = !1;
      do {
        var Z = H.lane & -536870913;
        if (Z !== H.lane ? (Nt & Z) === Z : (cu & Z) === Z) {
          var N = H.revertLane;
          if (N === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), Z === Dc && (G = !0);
          else if ((cu & N) === N) {
            H = H.next, N === Dc && (G = !0);
            continue;
          } else
            Z = {
              lane: 0,
              revertLane: H.revertLane,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, A === null ? (v = A = Z, m = r) : A = A.next = Z, Tt.lanes |= N, Nn |= N;
          Z = H.action, Wu && u(r, Z), r = H.hasEagerState ? H.eagerState : u(r, Z);
        } else
          N = {
            lane: Z,
            revertLane: H.revertLane,
            gesture: H.gesture,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, A === null ? (v = A = N, m = r) : A = A.next = N, Tt.lanes |= Z, Nn |= Z;
        H = H.next;
      } while (H !== null && H !== n);
      if (A === null ? m = r : A.next = v, !Gl(r, l.memoizedState) && ($e = !0, G && (u = Pe, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, i.lastRenderedState = r;
    }
    return s === null && (i.lanes = 0), [l.memoizedState, i.dispatch];
  }
  function Md(l) {
    var n = Ge(), u = n.queue;
    if (u === null) throw Error(T(311));
    u.lastRenderedReducer = l;
    var i = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Gl(r, n.memoizedState) || ($e = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, i];
  }
  function Pm(l, n, u) {
    var i = Tt, s = Ge(), r = qt;
    if (r) {
      if (u === void 0) throw Error(T(407));
      u = u();
    } else u = n();
    var m = !Gl(
      (ee || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, $e = !0), s = s.queue, Hd(Rd.bind(null, i, s, l), [
      l
    ]), s.getSnapshot !== n || m || Ke !== null && Ke.memoizedState.tag & 1) {
      if (i.flags |= 2048, xi(
        9,
        { destroy: void 0 },
        ty.bind(
          null,
          i,
          s,
          u,
          n
        ),
        null
      ), se === null) throw Error(T(349));
      r || (cu & 127) !== 0 || _s(i, n, u);
    }
    return u;
  }
  function _s(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Tt.updateQueue, n === null ? (n = Us(), Tt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function ty(l, n, u, i) {
    n.value = u, n.getSnapshot = i, Ud(n) && _d(l);
  }
  function Rd(l, n, u) {
    return u(function() {
      Ud(n) && _d(l);
    });
  }
  function Ud(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Gl(l, u);
    } catch {
      return !0;
    }
  }
  function _d(l) {
    var n = Qu(l, 2);
    n !== null && ca(n, l, 2);
  }
  function ey(l) {
    var n = pl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Wu) {
        xu(!0);
        try {
          u();
        } finally {
          xu(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: iu,
      lastRenderedState: l
    }, n;
  }
  function vl(l, n, u, i) {
    return l.baseState = u, Od(
      l,
      ee,
      typeof i == "function" ? i : iu
    );
  }
  function Qp(l, n, u, i, s) {
    if (xs(l)) throw Error(T(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      R.T !== null ? u(!0) : r.isTransition = !1, i(r), u = n.pending, u === null ? (r.next = n.pending = r, ly(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function ly(l, n) {
    var u = n.action, i = n.payload, s = l.state;
    if (n.isTransition) {
      var r = R.T, m = {};
      R.T = m;
      try {
        var v = u(s, i), A = R.S;
        A !== null && A(m, v), ay(l, n, v);
      } catch (H) {
        Bi(l, n, H);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), R.T = r;
      }
    } else
      try {
        r = u(s, i), ay(l, n, r);
      } catch (H) {
        Bi(l, n, H);
      }
  }
  function ay(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(i) {
        ny(l, n, i);
      },
      function(i) {
        return Bi(l, n, i);
      }
    ) : ny(l, n, u);
  }
  function ny(l, n, u) {
    n.status = "fulfilled", n.value = u, uy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, ly(l, u)));
  }
  function Bi(l, n, u) {
    var i = l.pending;
    if (l.pending = null, i !== null) {
      i = i.next;
      do
        n.status = "rejected", n.reason = u, uy(n), n = n.next;
      while (n !== i);
    }
    l.action = null;
  }
  function uy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Cs(l, n) {
    return n;
  }
  function cy(l, n) {
    if (qt) {
      var u = se.formState;
      if (u !== null) {
        t: {
          var i = Tt;
          if (qt) {
            if (ye) {
              e: {
                for (var s = ye, r = al; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (s = ia(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                ye = ia(
                  s.nextSibling
                ), i = s.data === "F!";
                break t;
              }
            }
            an(i);
          }
          i = !1;
        }
        i && (n = u[0]);
      }
    }
    return u = pl(), u.memoizedState = u.baseState = n, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cs,
      lastRenderedState: n
    }, u.queue = i, u = qd.bind(
      null,
      Tt,
      i
    ), i.dispatch = u, i = ey(!1), r = xc.bind(
      null,
      Tt,
      !1,
      i.queue
    ), i = pl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, i.queue = s, u = Qp.bind(
      null,
      Tt,
      s,
      r,
      u
    ), s.dispatch = u, i.memoizedState = l, [n, u, !1];
  }
  function Vp(l) {
    var n = Ge();
    return Hs(n, ee, l);
  }
  function Hs(l, n, u) {
    if (n = Od(
      l,
      n,
      Cs
    )[0], l = ou(iu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var i = Ni(n);
      } catch (m) {
        throw m === Oc ? xo : m;
      }
    else i = n;
    n = Ge();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Tt.flags |= 2048, xi(
      9,
      { destroy: void 0 },
      iy.bind(null, s, u),
      null
    )), [i, r, l];
  }
  function iy(l, n) {
    l.action = n;
  }
  function oy(l) {
    var n = Ge(), u = ee;
    if (u !== null)
      return Hs(n, u, l);
    Ge(), n = n.memoizedState, u = Ge();
    var i = u.queue.dispatch;
    return u.memoizedState = l, [n, i, !1];
  }
  function xi(l, n, u, i) {
    return l = { tag: l, create: u, deps: i, inst: n, next: null }, n = Tt.updateQueue, n === null && (n = Us(), Tt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (i = u.next, u.next = l, l.next = i, n.lastEffect = l), l;
  }
  function fy() {
    return Ge().memoizedState;
  }
  function Vo(l, n, u, i) {
    var s = pl();
    Tt.flags |= l, s.memoizedState = xi(
      1 | n,
      { destroy: void 0 },
      u,
      i === void 0 ? null : i
    );
  }
  function Zo(l, n, u, i) {
    var s = Ge();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    ee !== null && i !== null && ku(i, ee.memoizedState.deps) ? s.memoizedState = xi(n, r, u, i) : (Tt.flags |= l, s.memoizedState = xi(
      1 | n,
      r,
      u,
      i
    ));
  }
  function Cd(l, n) {
    Vo(8390656, 8, l, n);
  }
  function Hd(l, n) {
    Zo(2048, 8, l, n);
  }
  function sy(l) {
    Tt.flags |= 4;
    var n = Tt.updateQueue;
    if (n === null)
      n = Us(), Tt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Ns(l) {
    var n = Ge().memoizedState;
    return sy({ ref: n, nextImpl: l }), function() {
      if (($t & 2) !== 0) throw Error(T(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Nd(l, n) {
    return Zo(4, 2, l, n);
  }
  function ry(l, n) {
    return Zo(4, 4, l, n);
  }
  function Bd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function dy(l, n, u) {
    u = u != null ? u.concat([l]) : null, Zo(4, 4, Bd.bind(null, n, l), u);
  }
  function Rn() {
  }
  function xd(l, n) {
    var u = Ge();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    return n !== null && ku(n, i[1]) ? i[0] : (u.memoizedState = [l, n], l);
  }
  function Zp(l, n) {
    var u = Ge();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    if (n !== null && ku(n, i[1]))
      return i[0];
    if (i = l(), Wu) {
      xu(!0);
      try {
        l();
      } finally {
        xu(!1);
      }
    }
    return u.memoizedState = [i, n], i;
  }
  function Bs(l, n, u) {
    return u === void 0 || (cu & 1073741824) !== 0 && (Nt & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = nv(), Tt.lanes |= l, Nn |= l, u);
  }
  function fu(l, n, u, i) {
    return Gl(u, n) ? u : nl.current !== null ? (l = Bs(l, u, i), Gl(l, n) || ($e = !0), l) : (cu & 42) === 0 || (cu & 1073741824) !== 0 && (Nt & 261930) === 0 ? ($e = !0, l.memoizedState = u) : (l = nv(), Tt.lanes |= l, Nn |= l, n);
  }
  function jd(l, n, u, i, s) {
    var r = L.p;
    L.p = r !== 0 && 8 > r ? r : 8;
    var m = R.T, v = {};
    R.T = v, xc(l, !1, n, u);
    try {
      var A = s(), H = R.S;
      if (H !== null && H(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var G = Es(
          A,
          i
        );
        Fu(
          l,
          n,
          G,
          pa(l)
        );
      } else
        Fu(
          l,
          n,
          i,
          pa(l)
        );
    } catch (Z) {
      Fu(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: Z },
        pa()
      );
    } finally {
      L.p = r, m !== null && v.types !== null && (m.types = v.types), R.T = m;
    }
  }
  function Lp() {
  }
  function Lo(l, n, u, i) {
    if (l.tag !== 5) throw Error(T(476));
    var s = wo(l).queue;
    jd(
      l,
      s,
      n,
      $,
      u === null ? Lp : function() {
        return fe(l), u(i);
      }
    );
  }
  function wo(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: iu,
        lastRenderedState: $
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: iu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function fe(l) {
    var n = wo(l);
    n.next === null && (n = l.alternate.memoizedState), Fu(
      l,
      n.next.queue,
      {},
      pa()
    );
  }
  function hy() {
    return w(fr);
  }
  function wp() {
    return Ge().memoizedState;
  }
  function my() {
    return Ge().memoizedState;
  }
  function su(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = pa();
          l = $u(u);
          var i = Ca(n, l, u);
          i !== null && (ca(i, n, u), Cc(i, n, u)), n = { cache: vs() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Jp(l, n, u) {
    var i = pa();
    u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xs(l) ? Yd(n, u) : (u = en(l, n, u, i), u !== null && (ca(u, l, i), yy(u, n, i)));
  }
  function qd(l, n, u) {
    var i = pa();
    Fu(l, n, u, i);
  }
  function Fu(l, n, u, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (xs(l)) Yd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, Gl(v, m))
            return Oa(l, n, s, 0), se === null && Da(), !1;
        } catch {
        }
      if (u = en(l, n, s, i), u !== null)
        return ca(u, l, i), yy(u, n, i), !0;
    }
    return !1;
  }
  function xc(l, n, u, i) {
    if (i = {
      lane: 2,
      revertLane: sh(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xs(l)) {
      if (n) throw Error(T(479));
    } else
      n = en(
        l,
        u,
        i,
        2
      ), n !== null && ca(n, l, 2);
  }
  function xs(l) {
    var n = l.alternate;
    return l === Tt || n !== null && n === Tt;
  }
  function Yd(l, n) {
    Ci = _i = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function yy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, wn(l, u);
    }
  }
  var js = {
    readContext: w,
    use: Qo,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useLayoutEffect: He,
    useInsertionEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useSyncExternalStore: He,
    useId: He,
    useHostTransitionStatus: He,
    useFormState: He,
    useActionState: He,
    useOptimistic: He,
    useMemoCache: He,
    useCacheRefresh: He
  };
  js.useEffectEvent = He;
  var Kp = {
    readContext: w,
    use: Qo,
    useCallback: function(l, n) {
      return pl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: w,
    useEffect: Cd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Vo(
        4194308,
        4,
        Bd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Vo(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Vo(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = pl();
      n = n === void 0 ? null : n;
      var i = l();
      if (Wu) {
        xu(!0);
        try {
          l();
        } finally {
          xu(!1);
        }
      }
      return u.memoizedState = [i, n], i;
    },
    useReducer: function(l, n, u) {
      var i = pl();
      if (u !== void 0) {
        var s = u(n);
        if (Wu) {
          xu(!0);
          try {
            u(n);
          } finally {
            xu(!1);
          }
        }
      } else s = n;
      return i.memoizedState = i.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, i.queue = l, l = l.dispatch = Jp.bind(
        null,
        Tt,
        l
      ), [i.memoizedState, l];
    },
    useRef: function(l) {
      var n = pl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = ey(l);
      var n = l.queue, u = qd.bind(null, Tt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = pl();
      return Bs(u, l, n);
    },
    useTransition: function() {
      var l = ey(!1);
      return l = jd.bind(
        null,
        Tt,
        l.queue,
        !0,
        !1
      ), pl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var i = Tt, s = pl();
      if (qt) {
        if (u === void 0)
          throw Error(T(407));
        u = u();
      } else {
        if (u = n(), se === null)
          throw Error(T(349));
        (Nt & 127) !== 0 || _s(i, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Cd(Rd.bind(null, i, r, l), [
        l
      ]), i.flags |= 2048, xi(
        9,
        { destroy: void 0 },
        ty.bind(
          null,
          i,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = pl(), n = se.identifierPrefix;
      if (qt) {
        var u = zn, i = da;
        u = (i & ~(1 << 32 - Jl(i) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Os++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Gp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: hy,
    useFormState: cy,
    useActionState: cy,
    useOptimistic: function(l) {
      var n = pl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = xc.bind(
        null,
        Tt,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Dd,
    useCacheRefresh: function() {
      return pl().memoizedState = su.bind(
        null,
        Tt
      );
    },
    useEffectEvent: function(l) {
      var n = pl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if (($t & 2) !== 0)
          throw Error(T(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Gd = {
    readContext: w,
    use: Qo,
    useCallback: xd,
    useContext: w,
    useEffect: Hd,
    useImperativeHandle: dy,
    useInsertionEffect: Nd,
    useLayoutEffect: ry,
    useMemo: Zp,
    useReducer: ou,
    useRef: fy,
    useState: function() {
      return ou(iu);
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = Ge();
      return fu(
        u,
        ee.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = ou(iu)[0], n = Ge().memoizedState;
      return [
        typeof l == "boolean" ? l : Ni(l),
        n
      ];
    },
    useSyncExternalStore: Pm,
    useId: wp,
    useHostTransitionStatus: hy,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(l, n) {
      var u = Ge();
      return vl(u, ee, l, n);
    },
    useMemoCache: Dd,
    useCacheRefresh: my
  };
  Gd.useEffectEvent = Ns;
  var $p = {
    readContext: w,
    use: Qo,
    useCallback: xd,
    useContext: w,
    useEffect: Hd,
    useImperativeHandle: dy,
    useInsertionEffect: Nd,
    useLayoutEffect: ry,
    useMemo: Zp,
    useReducer: Md,
    useRef: fy,
    useState: function() {
      return Md(iu);
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = Ge();
      return ee === null ? Bs(u, l, n) : fu(
        u,
        ee.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Md(iu)[0], n = Ge().memoizedState;
      return [
        typeof l == "boolean" ? l : Ni(l),
        n
      ];
    },
    useSyncExternalStore: Pm,
    useId: wp,
    useHostTransitionStatus: hy,
    useFormState: oy,
    useActionState: oy,
    useOptimistic: function(l, n) {
      var u = Ge();
      return ee !== null ? vl(u, ee, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Dd,
    useCacheRefresh: my
  };
  $p.useEffectEvent = Ns;
  function ji(l, n, u, i) {
    n = l.memoizedState, u = u(i, n), u = u == null ? n : ot({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var nn = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var i = pa(), s = $u(i);
      s.payload = n, u != null && (s.callback = u), n = Ca(l, s, i), n !== null && (ca(n, l, i), Cc(n, l, i));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var i = pa(), s = $u(i);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Ca(l, s, i), n !== null && (ca(n, l, i), Cc(n, l, i));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = pa(), i = $u(u);
      i.tag = 2, n != null && (i.callback = n), n = Ca(l, i, u), n !== null && (ca(n, l, u), Cc(n, l, u));
    }
  };
  function py(l, n, u, i, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(i, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ia(u, i) || !Ia(s, r) : !0;
  }
  function Wp(l, n, u, i) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, i), n.state !== l && nn.enqueueReplaceState(n, n.state, null);
  }
  function jc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var i in n)
        i !== "ref" && (u[i] = n[i]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ot({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Xd(l) {
    bi(l);
  }
  function vy(l) {
    console.error(l);
  }
  function Qd(l) {
    bi(l);
  }
  function Jo(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function qs(l, n, u) {
    try {
      var i = l.onCaughtError;
      i(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function gy(l, n, u) {
    return u = $u(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Jo(l, n);
    }, u;
  }
  function Sy(l) {
    return l = $u(l), l.tag = 3, l;
  }
  function by(l, n, u, i) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        qs(n, u, i);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      qs(n, u, i), typeof s != "function" && (Oe === null ? Oe = /* @__PURE__ */ new Set([this]) : Oe.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Ig(l, n, u, i, s) {
    if (u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (n = u.alternate, n !== null && yl(
        n,
        u,
        s,
        !0
      ), u = Pl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Ha === null ? ch() : u.alternate === null && ve === 0 && (ve = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, i === Mi ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([i]) : n.add(i), Fs(l, i, s)), !1;
          case 22:
            return u.flags |= 65536, i === Mi ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([i]) : u.add(i)), Fs(l, i, s)), !1;
        }
        throw Error(T(435, u.tag));
      }
      return Fs(l, i, s), ch(), !1;
    }
    if (qt)
      return n = Pl.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, i !== eu && (l = Error(T(422), { cause: i }), No(Ma(l, u)))) : (i !== eu && (n = Error(T(423), {
        cause: i
      }), No(
        Ma(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, i = Ma(i, u), s = gy(
        l.stateNode,
        i,
        s
      ), bd(l, s), ve !== 4 && (ve = 2)), !1;
    var r = Error(T(520), { cause: i });
    if (r = Ma(r, u), Ks === null ? Ks = [r] : Ks.push(r), ve !== 4 && (ve = 2), n === null) return !0;
    i = Ma(i, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = gy(u.stateNode, i, l), bd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Oe === null || !Oe.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Sy(s), by(
              s,
              l,
              u,
              i
            ), bd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Vd = Error(T(461)), $e = !1;
  function Te(l, n, u, i) {
    n.child = l === null ? Fm(n, null, u, i) : _c(
      n,
      l.child,
      u,
      i
    );
  }
  function Ey(l, n, u, i, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in i) {
      var m = {};
      for (var v in i)
        v !== "ref" && (m[v] = i[v]);
    } else m = i;
    return gt(n), i = Ms(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = zd(), l !== null && !$e ? (Hi(l, n, s), xa(l, n, s)) : (qt && v && Co(n), n.flags |= 1, Te(l, n, i, s), n.child);
  }
  function Ty(l, n, u, i, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Ei(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Ay(
        l,
        n,
        r,
        i,
        s
      )) : (l = hd(
        u.type,
        null,
        i,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !wd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ia, u(m, i) && l.ref === n.ref)
        return xa(l, n, s);
    }
    return n.flags |= 1, l = Vu(r, i), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Ay(l, n, u, i, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ia(r, i) && l.ref === n.ref)
        if ($e = !1, n.pendingProps = i = r, wd(l, s))
          (l.flags & 131072) !== 0 && ($e = !0);
        else
          return n.lanes = l.lanes, xa(l, n, s);
    }
    return Zd(
      l,
      n,
      u,
      i,
      s
    );
  }
  function kp(l, n, u, i) {
    var s = i.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (i = n.child = l.child, s = 0; i !== null; )
            s = s | i.lanes | i.childLanes, i = i.sibling;
          i = s & ~r;
        } else i = 0, n.child = null;
        return ea(
          l,
          n,
          r,
          u,
          i
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Bo(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Yp(n, r) : Ds(), Td(n);
      else
        return i = n.lanes = 536870912, ea(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          i
        );
    } else
      r !== null ? (Bo(n, r.cachePool), Yp(n, r), Mn(), n.memoizedState = null) : (l !== null && Bo(n, null), Ds(), Mn());
    return Te(l, n, s, u), n.child;
  }
  function qc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function ea(l, n, u, i, s) {
    var r = _a();
    return r = r === null ? null : { parent: Je._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Bo(n, null), Ds(), Td(n), l !== null && yl(l, n, i, !0), n.childLanes = s, null;
  }
  function Ys(l, n) {
    return n = Qs(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function la(l, n, u) {
    return _c(n, l.child, null, u), l = Ys(n, n.pendingProps), l.flags |= 2, ta(n), n.memoizedState = null, l;
  }
  function Fp(l, n, u) {
    var i = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (qt) {
        if (i.mode === "hidden")
          return l = Ys(n, i), n.lanes = 536870912, qc(null, l);
        if (Yo(n), (l = ye) ? (l = Hv(
          l,
          al
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: An !== null ? { id: da, overflow: zn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Vm(l), u.return = n, n.child = u, ml = n, ye = null)) : l = null, l === null) throw an(n);
        return n.lanes = 536870912, null;
      }
      return Ys(n, i);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (Yo(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = la(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(T(558));
      else if ($e || yl(l, n, u, !1), s = (u & l.childLanes) !== 0, $e || s) {
        if (i = se, i !== null && (m = Ta(i, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, Qu(l, m), ca(i, l, m), Vd;
        ch(), n = la(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, ye = ia(m.nextSibling), ml = n, qt = !0, tu = null, al = !1, l !== null && ms(n, l), n = Ys(n, i), n.flags |= 4096;
      return n;
    }
    return l = Vu(l.child, {
      mode: i.mode,
      children: i.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Na(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(T(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Zd(l, n, u, i, s) {
    return gt(n), u = Ms(
      l,
      n,
      u,
      i,
      void 0,
      s
    ), i = zd(), l !== null && !$e ? (Hi(l, n, s), xa(l, n, s)) : (qt && i && Co(n), n.flags |= 1, Te(l, n, u, s), n.child);
  }
  function Yc(l, n, u, i, s, r) {
    return gt(n), n.updateQueue = null, u = Xp(
      n,
      i,
      u,
      s
    ), Ad(l), i = zd(), l !== null && !$e ? (Hi(l, n, r), xa(l, n, r)) : (qt && i && Co(n), n.flags |= 1, Te(l, n, u, r), n.child);
  }
  function zy(l, n, u, i, s) {
    if (gt(n), n.stateNode === null) {
      var r = kl, m = u.contextType;
      typeof m == "object" && m !== null && (r = w(m)), r = new u(i, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = nn, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = i, r.state = n.memoizedState, r.refs = {}, zs(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? w(m) : kl, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (ji(
        n,
        u,
        m,
        i
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && nn.enqueueReplaceState(r, r.state, null), nu(n, i, r, s), Hc(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, A = jc(u, v);
      r.props = A;
      var H = r.context, G = u.contextType;
      m = kl, typeof G == "object" && G !== null && (m = w(G));
      var Z = u.getDerivedStateFromProps;
      G = typeof Z == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, G || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || H !== m) && Wp(
        n,
        r,
        i,
        m
      ), Ku = !1;
      var N = n.memoizedState;
      r.state = N, nu(n, i, r, s), Hc(), H = n.memoizedState, v || N !== H || Ku ? (typeof Z == "function" && (ji(
        n,
        u,
        Z,
        i
      ), H = n.memoizedState), (A = Ku || py(
        n,
        u,
        A,
        i,
        N,
        H,
        m
      )) ? (G || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = H), r.props = i, r.state = H, r.context = m, i = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      r = n.stateNode, Sd(l, n), m = n.memoizedProps, G = jc(u, m), r.props = G, Z = n.pendingProps, N = r.context, H = u.contextType, A = kl, typeof H == "object" && H !== null && (A = w(H)), v = u.getDerivedStateFromProps, (H = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== Z || N !== A) && Wp(
        n,
        r,
        i,
        A
      ), Ku = !1, N = n.memoizedState, r.state = N, nu(n, i, r, s), Hc();
      var Y = n.memoizedState;
      m !== Z || N !== Y || Ku || l !== null && l.dependencies !== null && Ai(l.dependencies) ? (typeof v == "function" && (ji(
        n,
        u,
        v,
        i
      ), Y = n.memoizedState), (G = Ku || py(
        n,
        u,
        G,
        i,
        N,
        Y,
        A
      ) || l !== null && l.dependencies !== null && Ai(l.dependencies)) ? (H || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, Y, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        i,
        Y,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && N === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && N === l.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = Y), r.props = i, r.state = Y, r.context = A, i = G) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && N === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && N === l.memoizedState || (n.flags |= 1024), i = !1);
    }
    return r = i, Na(l, n), i = (n.flags & 128) !== 0, r || i ? (r = n.stateNode, u = i && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && i ? (n.child = _c(
      n,
      l.child,
      null,
      s
    ), n.child = _c(
      n,
      null,
      u,
      s
    )) : Te(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = xa(
      l,
      n,
      s
    ), l;
  }
  function Un(l, n, u, i) {
    return zc(), n.flags |= 256, Te(l, n, u, i), n.child;
  }
  var Gs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Xs(l) {
    return { baseLanes: l, cachePool: Di() };
  }
  function Ba(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ua), l;
  }
  function Dy(l, n, u) {
    var i = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (De.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (qt) {
        if (s ? uu(n) : Mn(), (l = ye) ? (l = Hv(
          l,
          al
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: An !== null ? { id: da, overflow: zn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Vm(l), u.return = n, n.child = u, ml = n, ye = null)) : l = null, l === null) throw an(n);
        return wc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, s ? (Mn(), s = n.mode, v = Qs(
        { mode: "hidden", children: v },
        s
      ), i = Zu(
        i,
        s,
        u,
        null
      ), v.return = n, i.return = n, v.sibling = i, n.child = v, i = n.child, i.memoizedState = Xs(u), i.childLanes = Ba(
        l,
        m,
        u
      ), n.memoizedState = Gs, qc(null, i)) : (uu(n), Gc(n, v));
    }
    var A = l.memoizedState;
    if (A !== null && (v = A.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (uu(n), n.flags &= -257, n = qi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Mn(), n.child = l.child, n.flags |= 128, n = null) : (Mn(), v = i.fallback, s = n.mode, i = Qs(
          { mode: "visible", children: i.children },
          s
        ), v = Zu(
          v,
          s,
          u,
          null
        ), v.flags |= 2, i.return = n, v.return = n, i.sibling = v, n.child = i, _c(
          n,
          l.child,
          null,
          u
        ), i = n.child, i.memoizedState = Xs(u), i.childLanes = Ba(
          l,
          m,
          u
        ), n.memoizedState = Gs, n = qc(null, i));
      else if (uu(n), wc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var H = m.dgst;
        m = H, i = Error(T(419)), i.stack = "", i.digest = m, No({ value: i, source: null, stack: null }), n = qi(
          l,
          n,
          u
        );
      } else if ($e || yl(l, n, u, !1), m = (u & l.childLanes) !== 0, $e || m) {
        if (m = se, m !== null && (i = Ta(m, u), i !== 0 && i !== A.retryLane))
          throw A.retryLane = i, Qu(l, i), ca(m, l, i), Vd;
        on(v) || ch(), n = qi(
          l,
          n,
          u
        );
      } else
        on(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, ye = ia(
          v.nextSibling
        ), ml = n, qt = !0, tu = null, al = !1, l !== null && ms(n, l), n = Gc(
          n,
          i.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Mn(), v = i.fallback, s = n.mode, A = l.child, H = A.sibling, i = Vu(A, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = A.subtreeFlags & 65011712, H !== null ? v = Vu(
      H,
      v
    ) : (v = Zu(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, i.return = n, i.sibling = v, n.child = i, qc(null, i), i = n.child, v = l.child.memoizedState, v === null ? v = Xs(u) : (s = v.cachePool, s !== null ? (A = Je._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = Di(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), i.memoizedState = v, i.childLanes = Ba(
      l,
      m,
      u
    ), n.memoizedState = Gs, qc(l.child, i)) : (uu(n), u = l.child, l = u.sibling, u = Vu(u, {
      mode: "visible",
      children: i.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Gc(l, n) {
    return n = Qs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Qs(l, n) {
    return l = qe(22, l, null, n), l.lanes = 0, l;
  }
  function qi(l, n, u) {
    return _c(n, l.child, null, u), l = Gc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Yi(l, n, u) {
    l.lanes |= n;
    var i = l.alternate;
    i !== null && (i.lanes |= n), vd(l.return, n, u);
  }
  function Ld(l, n, u, i, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = i, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function Oy(l, n, u) {
    var i = n.pendingProps, s = i.revealOrder, r = i.tail;
    i = i.children;
    var m = De.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, nt(De, m), Te(l, n, i, u), i = qt ? we : 0, !v && l !== null && (l.flags & 128) !== 0)
      t: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Yi(l, u, n);
        else if (l.tag === 19)
          Yi(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break t;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break t;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Go(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), Ld(
          n,
          !1,
          s,
          u,
          r,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Go(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        Ld(
          n,
          !0,
          u,
          null,
          r,
          i
        );
        break;
      case "together":
        Ld(
          n,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function xa(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Nn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (yl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(T(153));
    if (n.child !== null) {
      for (l = n.child, u = Vu(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Vu(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function wd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ai(l)));
  }
  function Jd(l, n, u) {
    switch (n.tag) {
      case 3:
        $a(n, n.stateNode.containerInfo), Il(n, Je, l.memoizedState.cache), zc();
        break;
      case 27:
      case 5:
        Kf(n);
        break;
      case 4:
        $a(n, n.stateNode.containerInfo);
        break;
      case 10:
        Il(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Yo(n), null;
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (uu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Dy(l, n, u) : (uu(n), l = xa(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        uu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (i = (u & n.childLanes) !== 0, i || (yl(
          l,
          n,
          u,
          !1
        ), i = (u & n.childLanes) !== 0), s) {
          if (i)
            return Oy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), nt(De, De.current), i) break;
        return null;
      case 22:
        return n.lanes = 0, kp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Il(n, Je, l.memoizedState.cache);
    }
    return xa(l, n, u);
  }
  function My(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        $e = !0;
      else {
        if (!wd(l, u) && (n.flags & 128) === 0)
          return $e = !1, Jd(
            l,
            n,
            u
          );
        $e = (l.flags & 131072) !== 0;
      }
    else
      $e = !1, qt && (n.flags & 1048576) !== 0 && Lm(n, we, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var i = n.pendingProps;
          if (l = Mc(n.elementType), n.type = l, typeof l == "function")
            Ei(l) ? (i = jc(l, i), n.tag = 1, n = zy(
              null,
              n,
              l,
              i,
              u
            )) : (n.tag = 0, n = Zd(
              null,
              n,
              l,
              i,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Ml) {
                n.tag = 11, n = Ey(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              } else if (s === Ie) {
                n.tag = 14, n = Ty(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              }
            }
            throw n = ql(l) || l, Error(T(306, n, ""));
          }
        }
        return n;
      case 0:
        return Zd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return i = n.type, s = jc(
          i,
          n.pendingProps
        ), zy(
          l,
          n,
          i,
          s,
          u
        );
      case 3:
        t: {
          if ($a(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(T(387));
          i = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Sd(l, n), nu(n, i, null, u);
          var m = n.memoizedState;
          if (i = m.cache, Il(n, Je, i), i !== r.cache && au(
            n,
            [Je],
            u,
            !0
          ), Hc(), i = m.element, r.isDehydrated)
            if (r = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Un(
                l,
                n,
                i,
                u
              );
              break t;
            } else if (i !== s) {
              s = Ma(
                Error(T(424)),
                n
              ), No(s), n = Un(
                l,
                n,
                i,
                u
              );
              break t;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, ye = ia(l.firstChild), ml = n, qt = !0, tu = null, al = !0, u = Fm(
                n,
                null,
                i,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (zc(), i === s) {
              n = xa(
                l,
                n,
                u
              );
              break t;
            }
            Te(l, n, i, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Na(l, n), l === null ? (u = yf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : qt || (u = n.type, l = n.pendingProps, i = Lc(
          Ka.current
        ).createElement(u), i[oe] = n, i[Kl] = l, _l(i, u, l), Pt(i), n.stateNode = i) : n.memoizedState = yf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Kf(n), l === null && qt && (i = n.stateNode = hf(
          n.type,
          n.pendingProps,
          Ka.current
        ), ml = n, al = !0, s = ye, xn(n.type) ? (cr = s, ye = ia(i.firstChild)) : ye = s), Te(
          l,
          n,
          n.pendingProps.children,
          u
        ), Na(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && qt && ((s = i = ye) && (i = e1(
          i,
          n.type,
          n.pendingProps,
          al
        ), i !== null ? (n.stateNode = i, ml = n, ye = ia(i.firstChild), al = !1, s = !0) : s = !1), s || an(n)), Kf(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, i = r.children, rf(s, r) ? i = null : m !== null && rf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ms(
          l,
          n,
          Fg,
          null,
          null,
          u
        ), fr._currentValue = s), Na(l, n), Te(l, n, i, u), n.child;
      case 6:
        return l === null && qt && ((l = u = ye) && (u = Mt(
          u,
          n.pendingProps,
          al
        ), u !== null ? (n.stateNode = u, ml = n, ye = null, l = !0) : l = !1), l || an(n)), null;
      case 13:
        return Dy(l, n, u);
      case 4:
        return $a(
          n,
          n.stateNode.containerInfo
        ), i = n.pendingProps, l === null ? n.child = _c(
          n,
          null,
          i,
          u
        ) : Te(l, n, i, u), n.child;
      case 11:
        return Ey(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Te(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Te(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Te(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return i = n.pendingProps, Il(n, n.type, i.value), Te(l, n, i.children, u), n.child;
      case 9:
        return s = n.type._context, i = n.pendingProps.children, gt(n), s = w(s), i = i(s), n.flags |= 1, Te(l, n, i, u), n.child;
      case 14:
        return Ty(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Ay(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Oy(l, n, u);
      case 31:
        return Fp(l, n, u);
      case 22:
        return kp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return gt(n), i = w(Je), l === null ? (s = _a(), s === null && (s = se, r = vs(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: i, cache: s }, zs(n), Il(n, Je, s)) : ((l.lanes & u) !== 0 && (Sd(l, n), nu(n, null, null, u), Hc()), s = l.memoizedState, r = n.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Il(n, Je, i)) : (i = r.cache, Il(n, Je, i), i !== s.cache && au(
          n,
          [Je],
          u,
          !0
        ))), Te(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(T(156, n.tag));
  }
  function ru(l) {
    l.flags |= 4;
  }
  function Ry(l, n, u, i, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (iv()) l.flags |= 8192;
        else
          throw Rc = Mi, Oi;
    } else l.flags &= -16777217;
  }
  function Uy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !ga(n))
      if (iv()) l.flags |= 8192;
      else
        throw Rc = Mi, Oi;
  }
  function Xl(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ni() : 536870912, l.lanes |= n, Ne |= n);
  }
  function Ko(l, n) {
    if (!qt)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var i = null; u !== null; )
            u.alternate !== null && (i = u), u = u.sibling;
          i === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : i.sibling = null;
      }
  }
  function vt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, i = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= i, l.childLanes = u, n;
  }
  function Ip(l, n, u) {
    var i = n.pendingProps;
    switch (yd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vt(n), null;
      case 1:
        return vt(n), null;
      case 3:
        return u = n.stateNode, i = null, l !== null && (i = l.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), On(Je), Ea(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (lu(n) ? ru(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, wm())), vt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (ru(n), r !== null ? (vt(n), Uy(n, r)) : (vt(n), Ry(
          n,
          s,
          null,
          i,
          u
        ))) : r ? r !== l.memoizedState ? (ru(n), vt(n), Uy(n, r)) : (vt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== i && ru(n), vt(n), Ry(
          n,
          s,
          l,
          i,
          u
        )), null;
      case 27:
        if (I(n), u = Ka.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && ru(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(T(166));
            return vt(n), null;
          }
          l = ct.current, lu(n) ? ys(n) : (l = hf(s, i, u), n.stateNode = l, ru(n));
        }
        return vt(n), null;
      case 5:
        if (I(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && ru(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(T(166));
            return vt(n), null;
          }
          if (r = ct.current, lu(n))
            ys(n);
          else {
            var m = Lc(
              Ka.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof i.is == "string" ? m.createElement("select", {
                      is: i.is
                    }) : m.createElement("select"), i.multiple ? r.multiple = !0 : i.size && (r.size = i.size);
                    break;
                  default:
                    r = typeof i.is == "string" ? m.createElement(s, { is: i.is }) : m.createElement(s);
                }
            }
            r[oe] = n, r[Kl] = i;
            t: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break t;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            t: switch (_l(r, s, i), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && ru(n);
          }
        }
        return vt(n), Ry(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== i && ru(n);
        else {
          if (typeof i != "string" && n.stateNode === null)
            throw Error(T(166));
          if (l = Ka.current, lu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, i = null, s = ml, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            l[oe] = n, l = !!(l.nodeValue === u || i !== null && i.suppressHydrationWarning === !0 || Py(l.nodeValue, u)), l || an(n, !0);
          } else
            l = Lc(l).createTextNode(
              i
            ), l[oe] = n, n.stateNode = l;
        }
        return vt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (i = lu(n), u !== null) {
            if (l === null) {
              if (!i) throw Error(T(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(557));
              l[oe] = n;
            } else
              zc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            vt(n), l = !1;
          } else
            u = wm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ta(n), n) : (ta(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(T(558));
        }
        return vt(n), null;
      case 13:
        if (i = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = lu(n), i !== null && i.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(T(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(T(317));
              s[oe] = n;
            } else
              zc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            vt(n), s = !1;
          } else
            s = wm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ta(n), n) : (ta(n), null);
        }
        return ta(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = i !== null, l = l !== null && l.memoizedState !== null, u && (i = n.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== s && (i.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), Xl(n, n.updateQueue), vt(n), null);
      case 4:
        return Ea(), l === null && sf(n.stateNode.containerInfo), vt(n), null;
      case 10:
        return On(n.type), vt(n), null;
      case 19:
        if (tt(De), i = n.memoizedState, i === null) return vt(n), null;
        if (s = (n.flags & 128) !== 0, r = i.rendering, r === null)
          if (s) Ko(i, !1);
          else {
            if (ve !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Go(l), r !== null) {
                  for (n.flags |= 128, Ko(i, !1), l = r.updateQueue, n.updateQueue = l, Xl(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Qm(u, l), u = u.sibling;
                  return nt(
                    De,
                    De.current & 1 | 2
                  ), qt && ln(n, i.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            i.tail !== null && Rl() > Ft && (n.flags |= 128, s = !0, Ko(i, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = Go(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, Xl(n, l), Ko(i, !0), i.tail === null && i.tailMode === "hidden" && !r.alternate && !qt)
                return vt(n), null;
            } else
              2 * Rl() - i.renderingStartTime > Ft && u !== 536870912 && (n.flags |= 128, s = !0, Ko(i, !1), n.lanes = 4194304);
          i.isBackwards ? (r.sibling = n.child, n.child = r) : (l = i.last, l !== null ? l.sibling = r : n.child = r, i.last = r);
        }
        return i.tail !== null ? (l = i.tail, i.rendering = l, i.tail = l.sibling, i.renderingStartTime = Rl(), l.sibling = null, u = De.current, nt(
          De,
          s ? u & 1 | 2 : u & 1
        ), qt && ln(n, i.treeForkCount), l) : (vt(n), null);
      case 22:
      case 23:
        return ta(n), qo(), i = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (vt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : vt(n), u = n.updateQueue, u !== null && Xl(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048), l !== null && tt(Ua), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), On(Je), vt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(T(156, n.tag));
  }
  function Pp(l, n) {
    switch (yd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return On(Je), Ea(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return I(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ta(n), n.alternate === null)
            throw Error(T(340));
          zc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ta(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(T(340));
          zc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return tt(De), null;
      case 4:
        return Ea(), null;
      case 10:
        return On(n.type), null;
      case 22:
      case 23:
        return ta(n), qo(), l !== null && tt(Ua), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return On(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function tv(l, n) {
    switch (yd(n), n.tag) {
      case 3:
        On(Je), Ea();
        break;
      case 26:
      case 27:
      case 5:
        I(n);
        break;
      case 4:
        Ea();
        break;
      case 31:
        n.memoizedState !== null && ta(n);
        break;
      case 13:
        ta(n);
        break;
      case 19:
        tt(De);
        break;
      case 10:
        On(n.type);
        break;
      case 22:
      case 23:
        ta(n), qo(), l !== null && tt(Ua);
        break;
      case 24:
        On(Je);
    }
  }
  function un(l, n) {
    try {
      var u = n.updateQueue, i = u !== null ? u.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            i = void 0;
            var r = u.create, m = u.inst;
            i = r(), m.destroy = i;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      ae(n, n.return, v);
    }
  }
  function ja(l, n, u) {
    try {
      var i = n.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & l) === l) {
            var m = i.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var A = u, H = v;
              try {
                H();
              } catch (G) {
                ae(
                  s,
                  A,
                  G
                );
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (G) {
      ae(n, n.return, G);
    }
  }
  function Kd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Nc(n, u);
      } catch (i) {
        ae(l, l.return, i);
      }
    }
  }
  function Xc(l, n, u) {
    u.props = jc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (i) {
      ae(l, n, i);
    }
  }
  function du(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var i = l.stateNode;
            break;
          case 30:
            i = l.stateNode;
            break;
          default:
            i = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(i) : u.current = i;
      }
    } catch (s) {
      ae(l, n, s);
    }
  }
  function _n(l, n) {
    var u = l.ref, i = l.refCleanup;
    if (u !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          ae(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          ae(l, n, s);
        }
      else u.current = null;
  }
  function _y(l) {
    var n = l.type, u = l.memoizedProps, i = l.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && i.focus();
          break t;
        case "img":
          u.src ? i.src = u.src : u.srcSet && (i.srcset = u.srcSet);
      }
    } catch (s) {
      ae(l, l.return, s);
    }
  }
  function $d(l, n, u) {
    try {
      var i = l.stateNode;
      e0(i, l.type, u, n), i[Kl] = n;
    } catch (s) {
      ae(l, l.return, s);
    }
  }
  function Cy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && xn(l.type) || l.tag === 4;
  }
  function $o(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Cy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && xn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Wo(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = pn));
    else if (i !== 4 && (i === 27 && xn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Wo(l, n, u), l = l.sibling; l !== null; )
        Wo(l, n, u), l = l.sibling;
  }
  function ko(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (i !== 4 && (i === 27 && xn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (ko(l, n, u), l = l.sibling; l !== null; )
        ko(l, n, u), l = l.sibling;
  }
  function Hy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var i = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      _l(n, i, u), n[oe] = l, n[Kl] = u;
    } catch (r) {
      ae(l, l.return, r);
    }
  }
  var Iu = !1, tl = !1, Wd = !1, Ny = typeof WeakSet == "function" ? WeakSet : Set, gl = null;
  function Fo(l, n) {
    if (l = l.containerInfo, yh = cl, l = Ec(l), os(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        t: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var i = u.getSelection && u.getSelection();
          if (i && i.rangeCount !== 0) {
            u = i.anchorNode;
            var s = i.anchorOffset, r = i.focusNode;
            i = i.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break t;
            }
            var m = 0, v = -1, A = -1, H = 0, G = 0, Z = l, N = null;
            e: for (; ; ) {
              for (var Y; Z !== u || s !== 0 && Z.nodeType !== 3 || (v = m + s), Z !== r || i !== 0 && Z.nodeType !== 3 || (A = m + i), Z.nodeType === 3 && (m += Z.nodeValue.length), (Y = Z.firstChild) !== null; )
                N = Z, Z = Y;
              for (; ; ) {
                if (Z === l) break e;
                if (N === u && ++H === s && (v = m), N === r && ++G === i && (A = m), (Y = Z.nextSibling) !== null) break;
                Z = N, N = Z.parentNode;
              }
              Z = Y;
            }
            u = v === -1 || A === -1 ? null : { start: v, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (ph = { focusedElem: l, selectionRange: u }, cl = !1, gl = n; gl !== null; )
      if (n = gl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, gl = l;
      else
        for (; gl !== null; ) {
          switch (n = gl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, i = u.stateNode;
                try {
                  var et = jc(
                    u.type,
                    s
                  );
                  l = i.getSnapshotBeforeUpdate(
                    et,
                    r
                  ), i.__reactInternalSnapshotBeforeUpdate = l;
                } catch (dt) {
                  ae(
                    u,
                    u.return,
                    dt
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  ur(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ur(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(T(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, gl = l;
            break;
          }
          gl = n.return;
        }
  }
  function Vs(l, n, u) {
    var i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Pu(l, u), i & 4 && un(5, u);
        break;
      case 1:
        if (Pu(l, u), i & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              ae(u, u.return, m);
            }
          else {
            var s = jc(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              ae(
                u,
                u.return,
                m
              );
            }
          }
        i & 64 && Kd(u), i & 512 && du(u, u.return);
        break;
      case 3:
        if (Pu(l, u), i & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Nc(l, n);
          } catch (m) {
            ae(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Hy(u);
      case 26:
      case 5:
        Pu(l, u), n === null && i & 4 && _y(u), i & 512 && du(u, u.return);
        break;
      case 12:
        Pu(l, u);
        break;
      case 31:
        Pu(l, u), i & 4 && ev(l, u);
        break;
      case 13:
        Pu(l, u), i & 4 && jy(l, u), i & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = qa.bind(
          null,
          u
        ), df(l, u))));
        break;
      case 22:
        if (i = u.memoizedState !== null || Iu, !i) {
          n = n !== null && n.memoizedState !== null || tl, s = Iu;
          var r = tl;
          Iu = i, (tl = n) && !r ? Cn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Pu(l, u), Iu = s, tl = r;
        }
        break;
      case 30:
        break;
      default:
        Pu(l, u);
    }
  }
  function By(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, By(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && wr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var pe = null, aa = !1;
  function hu(l, n, u) {
    for (u = u.child; u !== null; )
      xy(l, n, u), u = u.sibling;
  }
  function xy(l, n, u) {
    if (sa && typeof sa.onCommitFiberUnmount == "function")
      try {
        sa.onCommitFiberUnmount(ai, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        tl || _n(u, n), hu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        tl || _n(u, n);
        var i = pe, s = aa;
        xn(u.type) && (pe = u.stateNode, aa = !1), hu(
          l,
          n,
          u
        ), Ji(u.stateNode), pe = i, aa = s;
        break;
      case 5:
        tl || _n(u, n);
      case 6:
        if (i = pe, s = aa, pe = null, hu(
          l,
          n,
          u
        ), pe = i, aa = s, pe !== null)
          if (aa)
            try {
              (pe.nodeType === 9 ? pe.body : pe.nodeName === "HTML" ? pe.ownerDocument.body : pe).removeChild(u.stateNode);
            } catch (r) {
              ae(
                u,
                n,
                r
              );
            }
          else
            try {
              pe.removeChild(u.stateNode);
            } catch (r) {
              ae(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        pe !== null && (aa ? (l = pe, u0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Af(l)) : u0(pe, u.stateNode));
        break;
      case 4:
        i = pe, s = aa, pe = u.stateNode.containerInfo, aa = !0, hu(
          l,
          n,
          u
        ), pe = i, aa = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ja(2, u, n), tl || ja(4, u, n), hu(
          l,
          n,
          u
        );
        break;
      case 1:
        tl || (_n(u, n), i = u.stateNode, typeof i.componentWillUnmount == "function" && Xc(
          u,
          n,
          i
        )), hu(
          l,
          n,
          u
        );
        break;
      case 21:
        hu(
          l,
          n,
          u
        );
        break;
      case 22:
        tl = (i = tl) || u.memoizedState !== null, hu(
          l,
          n,
          u
        ), tl = i;
        break;
      default:
        hu(
          l,
          n,
          u
        );
    }
  }
  function ev(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Af(l);
      } catch (u) {
        ae(n, n.return, u);
      }
    }
  }
  function jy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Af(l);
      } catch (u) {
        ae(n, n.return, u);
      }
  }
  function Zs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Ny()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Ny()), n;
      default:
        throw Error(T(435, l.tag));
    }
  }
  function Ls(l, n) {
    var u = Zs(l);
    n.forEach(function(i) {
      if (!u.has(i)) {
        u.add(i);
        var s = Tv.bind(null, l, i);
        i.then(s, s);
      }
    });
  }
  function na(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var i = 0; i < u.length; i++) {
        var s = u[i], r = l, m = n, v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (xn(v.type)) {
                pe = v.stateNode, aa = !1;
                break t;
              }
              break;
            case 5:
              pe = v.stateNode, aa = !1;
              break t;
            case 3:
            case 4:
              pe = v.stateNode.containerInfo, aa = !0;
              break t;
          }
          v = v.return;
        }
        if (pe === null) throw Error(T(160));
        xy(r, m, s), pe = null, aa = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        kd(n, l), n = n.sibling;
  }
  var zt = null;
  function kd(l, n) {
    var u = l.alternate, i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        na(n, l), ha(l), i & 4 && (ja(3, l, l.return), un(3, l), ja(5, l, l.return));
        break;
      case 1:
        na(n, l), ha(l), i & 512 && (tl || u === null || _n(u, u.return)), i & 64 && Iu && (l = l.updateQueue, l !== null && (i = l.callbacks, i !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? i : u.concat(i))));
        break;
      case 26:
        var s = zt;
        if (na(n, l), ha(l), i & 512 && (tl || u === null || _n(u, u.return)), i & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (i = l.memoizedState, u === null)
            if (i === null)
              if (l.stateNode === null) {
                t: {
                  i = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  e: switch (i) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Jn] || r[oe] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), _l(r, i, u), r[oe] = l, Pt(r), i = r;
                      break t;
                    case "link":
                      var m = f0(
                        "link",
                        "href",
                        s
                      ).get(i + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      r = s.createElement(i), _l(r, i, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = f0(
                        "meta",
                        "content",
                        s
                      ).get(i + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      r = s.createElement(i), _l(r, i, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(T(468, i));
                  }
                  r[oe] = l, Pt(r), i = r;
                }
                l.stateNode = i;
              } else
                Eh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = o0(
                s,
                i,
                l.memoizedProps
              );
          else
            r !== i ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, i === null ? Eh(
              s,
              l.type,
              l.stateNode
            ) : o0(
              s,
              i,
              l.memoizedProps
            )) : i === null && l.stateNode !== null && $d(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        na(n, l), ha(l), i & 512 && (tl || u === null || _n(u, u.return)), u !== null && i & 4 && $d(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (na(n, l), ha(l), i & 512 && (tl || u === null || _n(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            $n(s, "");
          } catch (et) {
            ae(l, l.return, et);
          }
        }
        i & 4 && l.stateNode != null && (s = l.memoizedProps, $d(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), i & 1024 && (Wd = !0);
        break;
      case 6:
        if (na(n, l), ha(l), i & 4) {
          if (l.stateNode === null)
            throw Error(T(162));
          i = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = i;
          } catch (et) {
            ae(l, l.return, et);
          }
        }
        break;
      case 3:
        if (gf = null, s = zt, zt = Ql(n.containerInfo), na(n, l), zt = s, ha(l), i & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Af(n.containerInfo);
          } catch (et) {
            ae(l, l.return, et);
          }
        Wd && (Wd = !1, qy(l));
        break;
      case 4:
        i = zt, zt = Ql(
          l.stateNode.containerInfo
        ), na(n, l), ha(l), zt = i;
        break;
      case 12:
        na(n, l), ha(l);
        break;
      case 31:
        na(n, l), ha(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Ls(l, i)));
        break;
      case 13:
        na(n, l), ha(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Bn = Rl()), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Ls(l, i)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, H = Iu, G = tl;
        if (Iu = H || s, tl = G || A, na(n, l), tl = G, Iu = H, ha(l), i & 8192)
          t: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || Iu || tl || Gi(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = A.stateNode;
                    var Z = A.memoizedProps.style, N = Z != null && Z.hasOwnProperty("display") ? Z.display : null;
                    v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (et) {
                  ae(A, A.return, et);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (et) {
                  ae(A, A.return, et);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var Y = A.stateNode;
                  s ? We(Y, !0) : We(A.stateNode, !1);
                } catch (et) {
                  ae(A, A.return, et);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break t;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        i & 4 && (i = l.updateQueue, i !== null && (u = i.retryQueue, u !== null && (i.retryQueue = null, Ls(l, u))));
        break;
      case 19:
        na(n, l), ha(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Ls(l, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        na(n, l), ha(l);
    }
  }
  function ha(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, i = l.return; i !== null; ) {
          if (Cy(i)) {
            u = i;
            break;
          }
          i = i.return;
        }
        if (u == null) throw Error(T(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = $o(l);
            ko(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && ($n(m, ""), u.flags &= -33);
            var v = $o(l);
            ko(l, v, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, H = $o(l);
            Wo(
              l,
              H,
              A
            );
            break;
          default:
            throw Error(T(161));
        }
      } catch (G) {
        ae(l, l.return, G);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function qy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        qy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Pu(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Vs(l, n.alternate, n), n = n.sibling;
  }
  function Gi(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ja(4, n, n.return), Gi(n);
          break;
        case 1:
          _n(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Xc(
            n,
            n.return,
            u
          ), Gi(n);
          break;
        case 27:
          Ji(n.stateNode);
        case 26:
        case 5:
          _n(n, n.return), Gi(n);
          break;
        case 22:
          n.memoizedState === null && Gi(n);
          break;
        case 30:
          Gi(n);
          break;
        default:
          Gi(n);
      }
      l = l.sibling;
    }
  }
  function Cn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Cn(
            s,
            r,
            u
          ), un(4, r);
          break;
        case 1:
          if (Cn(
            s,
            r,
            u
          ), i = r, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (H) {
              ae(i, i.return, H);
            }
          if (i = r, s = i.updateQueue, s !== null) {
            var v = i.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  Ed(A[s], v);
            } catch (H) {
              ae(i, i.return, H);
            }
          }
          u && m & 64 && Kd(r), du(r, r.return);
          break;
        case 27:
          Hy(r);
        case 26:
        case 5:
          Cn(
            s,
            r,
            u
          ), u && i === null && m & 4 && _y(r), du(r, r.return);
          break;
        case 12:
          Cn(
            s,
            r,
            u
          );
          break;
        case 31:
          Cn(
            s,
            r,
            u
          ), u && m & 4 && ev(s, r);
          break;
        case 13:
          Cn(
            s,
            r,
            u
          ), u && m & 4 && jy(s, r);
          break;
        case 22:
          r.memoizedState === null && Cn(
            s,
            r,
            u
          ), du(r, r.return);
          break;
        case 30:
          break;
        default:
          Cn(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Fd(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && gs(u));
  }
  function Id(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && gs(l));
  }
  function cn(l, n, u, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Io(
          l,
          n,
          u,
          i
        ), n = n.sibling;
  }
  function Io(l, n, u, i) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        cn(
          l,
          n,
          u,
          i
        ), s & 2048 && un(9, n);
        break;
      case 1:
        cn(
          l,
          n,
          u,
          i
        );
        break;
      case 3:
        cn(
          l,
          n,
          u,
          i
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && gs(l)));
        break;
      case 12:
        if (s & 2048) {
          cn(
            l,
            n,
            u,
            i
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            ae(n, n.return, A);
          }
        } else
          cn(
            l,
            n,
            u,
            i
          );
        break;
      case 31:
        cn(
          l,
          n,
          u,
          i
        );
        break;
      case 13:
        cn(
          l,
          n,
          u,
          i
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? cn(
          l,
          n,
          u,
          i
        ) : ws(l, n) : r._visibility & 2 ? cn(
          l,
          n,
          u,
          i
        ) : (r._visibility |= 2, Po(
          l,
          n,
          u,
          i,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Fd(m, n);
        break;
      case 24:
        cn(
          l,
          n,
          u,
          i
        ), s & 2048 && Id(n.alternate, n);
        break;
      default:
        cn(
          l,
          n,
          u,
          i
        );
    }
  }
  function Po(l, n, u, i, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, A = i, H = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Po(
            r,
            m,
            v,
            A,
            s
          ), un(8, m);
          break;
        case 23:
          break;
        case 22:
          var G = m.stateNode;
          m.memoizedState !== null ? G._visibility & 2 ? Po(
            r,
            m,
            v,
            A,
            s
          ) : ws(
            r,
            m
          ) : (G._visibility |= 2, Po(
            r,
            m,
            v,
            A,
            s
          )), s && H & 2048 && Fd(
            m.alternate,
            m
          );
          break;
        case 24:
          Po(
            r,
            m,
            v,
            A,
            s
          ), s && H & 2048 && Id(m.alternate, m);
          break;
        default:
          Po(
            r,
            m,
            v,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function ws(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, i = n, s = i.flags;
        switch (i.tag) {
          case 22:
            ws(u, i), s & 2048 && Fd(
              i.alternate,
              i
            );
            break;
          case 24:
            ws(u, i), s & 2048 && Id(i.alternate, i);
            break;
          default:
            ws(u, i);
        }
        n = n.sibling;
      }
  }
  var ma = 8192;
  function mu(l, n, u) {
    if (l.subtreeFlags & ma)
      for (l = l.child; l !== null; )
        lv(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function lv(l, n, u) {
    switch (l.tag) {
      case 26:
        mu(
          l,
          n,
          u
        ), l.flags & ma && l.memoizedState !== null && Su(
          u,
          zt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        mu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var i = zt;
        zt = Ql(l.stateNode.containerInfo), mu(
          l,
          n,
          u
        ), zt = i;
        break;
      case 22:
        l.memoizedState === null && (i = l.alternate, i !== null && i.memoizedState !== null ? (i = ma, ma = 16777216, mu(
          l,
          n,
          u
        ), ma = i) : mu(
          l,
          n,
          u
        ));
        break;
      default:
        mu(
          l,
          n,
          u
        );
    }
  }
  function Pd(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function tf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          gl = i, th(
            i,
            l
          );
        }
      Pd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Yy(l), l = l.sibling;
  }
  function Yy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        tf(l), l.flags & 2048 && ja(9, l, l.return);
        break;
      case 3:
        tf(l);
        break;
      case 12:
        tf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Js(l)) : tf(l);
        break;
      default:
        tf(l);
    }
  }
  function Js(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          gl = i, th(
            i,
            l
          );
        }
      Pd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ja(8, n, n.return), Js(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Js(n));
          break;
        default:
          Js(n);
      }
      l = l.sibling;
    }
  }
  function th(l, n) {
    for (; gl !== null; ) {
      var u = gl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ja(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var i = u.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          gs(u.memoizedState.cache);
      }
      if (i = u.child, i !== null) i.return = u, gl = i;
      else
        t: for (u = l; gl !== null; ) {
          i = gl;
          var s = i.sibling, r = i.return;
          if (By(i), i === u) {
            gl = null;
            break t;
          }
          if (s !== null) {
            s.return = r, gl = s;
            break t;
          }
          gl = r;
        }
    }
  }
  var av = {
    getCacheForType: function(l) {
      var n = w(Je), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return w(Je).controller.signal;
    }
  }, Gy = typeof WeakMap == "function" ? WeakMap : Map, $t = 0, se = null, Yt = null, Nt = 0, le = 0, mt = null, yu = !1, Qc = !1, eh = !1, Hn = 0, ve = 0, Nn = 0, Xi = 0, lh = 0, ua = 0, Ne = 0, Ks = null, Be = null, ah = !1, Bn = 0, Xy = 0, Ft = 1 / 0, ef = null, Oe = null, ul = 0, tc = null, Vc = null, pu = 0, ya = 0, nh = null, uh = null, lf = 0, $s = null;
  function pa() {
    return ($t & 2) !== 0 && Nt !== 0 ? Nt & -Nt : R.T !== null ? sh() : Zr();
  }
  function nv() {
    if (ua === 0)
      if ((Nt & 536870912) === 0 || qt) {
        var l = hn;
        hn <<= 1, (hn & 3932160) === 0 && (hn = 262144), ua = l;
      } else ua = 536870912;
    return l = Pl.current, l !== null && (l.flags |= 32), ua;
  }
  function ca(l, n, u) {
    (l === se && (le === 2 || le === 9) || l.cancelPendingCommit !== null) && (vu(l, 0), ec(
      l,
      Nt,
      ua,
      !1
    )), yo(l, u), (($t & 2) === 0 || l !== se) && (l === se && (($t & 2) === 0 && (Xi |= u), ve === 4 && ec(
      l,
      Nt,
      ua,
      !1
    )), gu(l));
  }
  function uv(l, n, u) {
    if (($t & 6) !== 0) throw Error(T(327));
    var i = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || mn(l, n), s = i ? sv(l, n) : ih(l, n, !0), r = i;
    do {
      if (s === 0) {
        Qc && !i && ec(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !cv(u)) {
          s = ih(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            t: {
              var v = l;
              s = Ks;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (vu(v, m).flags |= 256), m = ih(
                v,
                m,
                !1
              ), m !== 2) {
                if (eh && !A) {
                  v.errorRecoveryDisabledLanes |= r, Xi |= r, s = 4;
                  break t;
                }
                r = Be, Be = s, r !== null && (Be === null ? Be = r : Be.push.apply(
                  Be,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          vu(l, 0), ec(l, n, 0, !0);
          break;
        }
        t: {
          switch (i = l, r = s, r) {
            case 0:
            case 1:
              throw Error(T(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              ec(
                i,
                n,
                ua,
                !yu
              );
              break t;
            case 2:
              Be = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(T(329));
          }
          if ((n & 62914560) === n && (s = Bn + 300 - Rl(), 10 < s)) {
            if (ec(
              i,
              n,
              ua,
              !yu
            ), Le(i, 0, !0) !== 0) break t;
            pu = n, i.timeoutHandle = nr(
              Ws.bind(
                null,
                i,
                u,
                Be,
                ef,
                ah,
                n,
                ua,
                Xi,
                Ne,
                yu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          Ws(
            i,
            u,
            Be,
            ef,
            ah,
            n,
            ua,
            Xi,
            Ne,
            yu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    gu(l);
  }
  function Ws(l, n, u, i, s, r, m, v, A, H, G, Z, N, Y) {
    if (l.timeoutHandle = -1, Z = n.subtreeFlags, Z & 8192 || (Z & 16785408) === 16785408) {
      Z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pn
      }, lv(
        n,
        r,
        Z
      );
      var et = (r & 62914560) === r ? Bn - Rl() : (r & 4194048) === r ? Xy - Rl() : 0;
      if (et = r0(
        Z,
        et
      ), et !== null) {
        pu = r, l.cancelPendingCommit = et(
          mv.bind(
            null,
            l,
            n,
            r,
            u,
            i,
            s,
            m,
            v,
            A,
            G,
            Z,
            null,
            N,
            Y
          )
        ), ec(l, r, m, !H);
        return;
      }
    }
    mv(
      l,
      n,
      r,
      u,
      i,
      s,
      m,
      v,
      A
    );
  }
  function cv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var i = 0; i < u.length; i++) {
          var s = u[i], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Gl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function ec(l, n, u, i) {
    n &= ~lh, n &= ~Xi, l.suspendedLanes |= n, l.pingedLanes &= ~n, i && (l.warmLanes |= n), i = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Jl(s), m = 1 << r;
      i[r] = -1, s &= ~m;
    }
    u !== 0 && Ff(l, u, n);
  }
  function af() {
    return ($t & 6) === 0 ? (ac(0), !1) : !0;
  }
  function Qy() {
    if (Yt !== null) {
      if (le === 0)
        var l = Yt.return;
      else
        l = Yt, Dn = Lu = null, Rs(l), Uc = null, Ri = 0, l = Yt;
      for (; l !== null; )
        tv(l.alternate, l), l = l.return;
      Yt = null;
    }
  }
  function vu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, _v(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), pu = 0, Qy(), se = l, Yt = u = Vu(l.current, null), Nt = n, le = 0, mt = null, yu = !1, Qc = mn(l, n), eh = !1, Ne = ua = lh = Xi = Nn = ve = 0, Be = Ks = null, ah = !1, (n & 8) !== 0 && (n |= n & 32);
    var i = l.entangledLanes;
    if (i !== 0)
      for (l = l.entanglements, i &= n; 0 < i; ) {
        var s = 31 - Jl(i), r = 1 << s;
        n |= l[s], i &= ~r;
      }
    return Hn = n, Da(), u;
  }
  function nf(l, n) {
    Tt = null, R.H = js, n === Oc || n === xo ? (n = km(), le = 3) : n === Oi ? (n = km(), le = 4) : le = n === Vd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, mt = n, Yt === null && (ve = 1, Jo(
      l,
      Ma(n, l.current)
    ));
  }
  function iv() {
    var l = Pl.current;
    return l === null ? !0 : (Nt & 4194048) === Nt ? Ha === null : (Nt & 62914560) === Nt || (Nt & 536870912) !== 0 ? l === Ha : !1;
  }
  function ov() {
    var l = R.H;
    return R.H = js, l === null ? js : l;
  }
  function fv() {
    var l = R.A;
    return R.A = av, l;
  }
  function ch() {
    ve = 4, yu || (Nt & 4194048) !== Nt && Pl.current !== null || (Qc = !0), (Nn & 134217727) === 0 && (Xi & 134217727) === 0 || se === null || ec(
      se,
      Nt,
      ua,
      !1
    );
  }
  function ih(l, n, u) {
    var i = $t;
    $t |= 2;
    var s = ov(), r = fv();
    (se !== l || Nt !== n) && (ef = null, vu(l, n)), n = !1;
    var m = ve;
    t: do
      try {
        if (le !== 0 && Yt !== null) {
          var v = Yt, A = mt;
          switch (le) {
            case 8:
              Qy(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pl.current === null && (n = !0);
              var H = le;
              if (le = 0, mt = null, Qi(l, v, A, H), u && Qc) {
                m = 0;
                break t;
              }
              break;
            default:
              H = le, le = 0, mt = null, Qi(l, v, A, H);
          }
        }
        Pg(), m = ve;
        break;
      } catch (G) {
        nf(l, G);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Dn = Lu = null, $t = i, R.H = s, R.A = r, Yt === null && (se = null, Nt = 0, Da()), m;
  }
  function Pg() {
    for (; Yt !== null; ) rv(Yt);
  }
  function sv(l, n) {
    var u = $t;
    $t |= 2;
    var i = ov(), s = fv();
    se !== l || Nt !== n ? (ef = null, Ft = Rl() + 500, vu(l, n)) : Qc = mn(
      l,
      n
    );
    t: do
      try {
        if (le !== 0 && Yt !== null) {
          n = Yt;
          var r = mt;
          e: switch (le) {
            case 1:
              le = 0, mt = null, Qi(l, n, r, 1);
              break;
            case 2:
            case 9:
              if ($m(r)) {
                le = 0, mt = null, dv(n);
                break;
              }
              n = function() {
                le !== 2 && le !== 9 || se !== l || (le = 7), gu(l);
              }, r.then(n, n);
              break t;
            case 3:
              le = 7;
              break t;
            case 4:
              le = 5;
              break t;
            case 7:
              $m(r) ? (le = 0, mt = null, dv(n)) : (le = 0, mt = null, Qi(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Yt.tag) {
                case 26:
                  m = Yt.memoizedState;
                case 5:
                case 27:
                  var v = Yt;
                  if (m ? ga(m) : v.stateNode.complete) {
                    le = 0, mt = null;
                    var A = v.sibling;
                    if (A !== null) Yt = A;
                    else {
                      var H = v.return;
                      H !== null ? (Yt = H, ks(H)) : Yt = null;
                    }
                    break e;
                  }
              }
              le = 0, mt = null, Qi(l, n, r, 5);
              break;
            case 6:
              le = 0, mt = null, Qi(l, n, r, 6);
              break;
            case 8:
              Qy(), ve = 6;
              break t;
            default:
              throw Error(T(462));
          }
        }
        Zc();
        break;
      } catch (G) {
        nf(l, G);
      }
    while (!0);
    return Dn = Lu = null, R.H = i, R.A = s, $t = u, Yt !== null ? 0 : (se = null, Nt = 0, Da(), ve);
  }
  function Zc() {
    for (; Yt !== null && !li(); )
      rv(Yt);
  }
  function rv(l) {
    var n = My(l.alternate, l, Hn);
    l.memoizedProps = l.pendingProps, n === null ? ks(l) : Yt = n;
  }
  function dv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Yc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Nt
        );
        break;
      case 11:
        n = Yc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Nt
        );
        break;
      case 5:
        Rs(n);
      default:
        tv(u, n), n = Yt = Qm(n, Hn), n = My(u, n, Hn);
    }
    l.memoizedProps = l.pendingProps, n === null ? ks(l) : Yt = n;
  }
  function Qi(l, n, u, i) {
    Dn = Lu = null, Rs(n), Uc = null, Ri = 0;
    var s = n.return;
    try {
      if (Ig(
        l,
        s,
        n,
        u,
        Nt
      )) {
        ve = 1, Jo(
          l,
          Ma(u, l.current)
        ), Yt = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Yt = s, r;
      ve = 1, Jo(
        l,
        Ma(u, l.current)
      ), Yt = null;
      return;
    }
    n.flags & 32768 ? (qt || i === 1 ? l = !0 : Qc || (Nt & 536870912) !== 0 ? l = !1 : (yu = l = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Pl.current, i !== null && i.tag === 13 && (i.flags |= 16384))), hv(n, l)) : ks(n);
  }
  function ks(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        hv(
          n,
          yu
        );
        return;
      }
      l = n.return;
      var u = Ip(
        n.alternate,
        n,
        Hn
      );
      if (u !== null) {
        Yt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Yt = n;
        return;
      }
      Yt = n = l;
    } while (n !== null);
    ve === 0 && (ve = 5);
  }
  function hv(l, n) {
    do {
      var u = Pp(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Yt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Yt = l;
        return;
      }
      Yt = l = u;
    } while (l !== null);
    ve = 6, Yt = null;
  }
  function mv(l, n, u, i, s, r, m, v, A) {
    l.cancelPendingCommit = null;
    do
      uf();
    while (ul !== 0);
    if (($t & 6) !== 0) throw Error(T(327));
    if (n !== null) {
      if (n === l.current) throw Error(T(177));
      if (r = n.lanes | n.childLanes, r |= tn, Qr(
        l,
        u,
        r,
        m,
        v,
        A
      ), l === se && (Yt = se = null, Nt = 0), Vc = n, tc = l, pu = u, ya = r, nh = s, uh = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Av(dc, function() {
        return Sv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
        i = R.T, R.T = null, s = L.p, L.p = 2, m = $t, $t |= 4;
        try {
          Fo(l, n, u);
        } finally {
          $t = m, L.p = s, R.T = i;
        }
      }
      ul = 1, yv(), pv(), vv();
    }
  }
  function yv() {
    if (ul === 1) {
      ul = 0;
      var l = tc, n = Vc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = R.T, R.T = null;
        var i = L.p;
        L.p = 2;
        var s = $t;
        $t |= 4;
        try {
          kd(n, l);
          var r = ph, m = Ec(l.containerInfo), v = r.focusedElem, A = r.selectionRange;
          if (m !== v && v && v.ownerDocument && gi(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && os(v)) {
              var H = A.start, G = A.end;
              if (G === void 0 && (G = H), "selectionStart" in v)
                v.selectionStart = H, v.selectionEnd = Math.min(
                  G,
                  v.value.length
                );
              else {
                var Z = v.ownerDocument || document, N = Z && Z.defaultView || window;
                if (N.getSelection) {
                  var Y = N.getSelection(), et = v.textContent.length, dt = Math.min(A.start, et), de = A.end === void 0 ? dt : Math.min(A.end, et);
                  !Y.extend && dt > de && (m = de, de = dt, dt = m);
                  var _ = Gm(
                    v,
                    dt
                  ), O = Gm(
                    v,
                    de
                  );
                  if (_ && O && (Y.rangeCount !== 1 || Y.anchorNode !== _.node || Y.anchorOffset !== _.offset || Y.focusNode !== O.node || Y.focusOffset !== O.offset)) {
                    var C = Z.createRange();
                    C.setStart(_.node, _.offset), Y.removeAllRanges(), dt > de ? (Y.addRange(C), Y.extend(O.node, O.offset)) : (C.setEnd(O.node, O.offset), Y.addRange(C));
                  }
                }
              }
            }
            for (Z = [], Y = v; Y = Y.parentNode; )
              Y.nodeType === 1 && Z.push({
                element: Y,
                left: Y.scrollLeft,
                top: Y.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < Z.length; v++) {
              var V = Z[v];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          cl = !!yh, ph = yh = null;
        } finally {
          $t = s, L.p = i, R.T = u;
        }
      }
      l.current = n, ul = 2;
    }
  }
  function pv() {
    if (ul === 2) {
      ul = 0;
      var l = tc, n = Vc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = R.T, R.T = null;
        var i = L.p;
        L.p = 2;
        var s = $t;
        $t |= 4;
        try {
          Vs(l, n.alternate, n);
        } finally {
          $t = s, L.p = i, R.T = u;
        }
      }
      ul = 3;
    }
  }
  function vv() {
    if (ul === 4 || ul === 3) {
      ul = 0, Yr();
      var l = tc, n = Vc, u = pu, i = uh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ul = 5 : (ul = 0, Vc = tc = null, gv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Oe = null), hm(u), n = n.stateNode, sa && typeof sa.onCommitFiberRoot == "function")
        try {
          sa.onCommitFiberRoot(
            ai,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        n = R.T, s = L.p, L.p = 2, R.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < i.length; m++) {
            var v = i[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          R.T = n, L.p = s;
        }
      }
      (pu & 3) !== 0 && uf(), gu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === $s ? lf++ : (lf = 0, $s = l) : lf = 0, ac(0);
    }
  }
  function gv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, gs(n)));
  }
  function uf() {
    return yv(), pv(), vv(), Sv();
  }
  function Sv() {
    if (ul !== 5) return !1;
    var l = tc, n = ya;
    ya = 0;
    var u = hm(pu), i = R.T, s = L.p;
    try {
      L.p = 32 > u ? 32 : u, R.T = null, u = nh, nh = null;
      var r = tc, m = pu;
      if (ul = 0, Vc = tc = null, pu = 0, ($t & 6) !== 0) throw Error(T(331));
      var v = $t;
      if ($t |= 4, Yy(r.current), Io(
        r,
        r.current,
        m,
        u
      ), $t = v, ac(0, !1), sa && typeof sa.onPostCommitFiberRoot == "function")
        try {
          sa.onPostCommitFiberRoot(ai, r);
        } catch {
        }
      return !0;
    } finally {
      L.p = s, R.T = i, gv(l, n);
    }
  }
  function bv(l, n, u) {
    n = Ma(u, n), n = gy(l.stateNode, n, 2), l = Ca(l, n, 2), l !== null && (yo(l, 2), gu(l));
  }
  function ae(l, n, u) {
    if (l.tag === 3)
      bv(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          bv(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Oe === null || !Oe.has(i))) {
            l = Ma(u, l), u = Sy(2), i = Ca(n, u, 2), i !== null && (by(
              u,
              i,
              n,
              l
            ), yo(i, 2), gu(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function Fs(l, n, u) {
    var i = l.pingCache;
    if (i === null) {
      i = l.pingCache = new Gy();
      var s = /* @__PURE__ */ new Set();
      i.set(n, s);
    } else
      s = i.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(n, s));
    s.has(u) || (eh = !0, s.add(u), l = Vy.bind(null, l, n, u), n.then(l, l));
  }
  function Vy(l, n, u) {
    var i = l.pingCache;
    i !== null && i.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, se === l && (Nt & u) === u && (ve === 4 || ve === 3 && (Nt & 62914560) === Nt && 300 > Rl() - Bn ? ($t & 2) === 0 && vu(l, 0) : lh |= u, Ne === Nt && (Ne = 0)), gu(l);
  }
  function Ev(l, n) {
    n === 0 && (n = ni()), l = Qu(l, n), l !== null && (yo(l, n), gu(l));
  }
  function qa(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Ev(l, u);
  }
  function Tv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var i = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        i = l.stateNode;
        break;
      case 22:
        i = l.stateNode._retryCache;
        break;
      default:
        throw Error(T(314));
    }
    i !== null && i.delete(n), Ev(l, u);
  }
  function Av(l, n) {
    return me(l, n);
  }
  var cf = null, Vi = null, Zy = !1, oh = !1, Ly = !1, lc = 0;
  function gu(l) {
    l !== Vi && l.next === null && (Vi === null ? cf = Vi = l : Vi = Vi.next = l), oh = !0, Zy || (Zy = !0, Ps());
  }
  function ac(l, n) {
    if (!Ly && oh) {
      Ly = !0;
      do
        for (var u = !1, i = cf; i !== null; ) {
          if (l !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = i.suspendedLanes, v = i.pingedLanes;
              r = (1 << 31 - Jl(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Zi(i, r));
          } else
            r = Nt, r = Le(
              i,
              i === se ? r : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (r & 3) === 0 || mn(i, r) || (u = !0, Zi(i, r));
          i = i.next;
        }
      while (u);
      Ly = !1;
    }
  }
  function fh() {
    wy();
  }
  function wy() {
    oh = Zy = !1;
    var l = 0;
    lc !== 0 && t1() && (l = lc);
    for (var n = Rl(), u = null, i = cf; i !== null; ) {
      var s = i.next, r = Jy(i, n);
      r === 0 ? (i.next = null, u === null ? cf = s : u.next = s, s === null && (Vi = u)) : (u = i, (l !== 0 || (r & 3) !== 0) && (oh = !0)), i = s;
    }
    ul !== 0 && ul !== 5 || ac(l), lc !== 0 && (lc = 0);
  }
  function Jy(l, n) {
    for (var u = l.suspendedLanes, i = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Jl(r), v = 1 << m, A = s[m];
      A === -1 ? ((v & u) === 0 || (v & i) !== 0) && (s[m] = mo(v, n)) : A <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = se, u = Nt, u = Le(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i = l.callbackNode, u === 0 || l === n && (le === 2 || le === 9) || l.cancelPendingCommit !== null)
      return i !== null && i !== null && sm(i), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || mn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (i !== null && sm(i), hm(u)) {
        case 2:
        case 8:
          u = Xr;
          break;
        case 32:
          u = dc;
          break;
        case 268435456:
          u = rm;
          break;
        default:
          u = dc;
      }
      return i = Is.bind(null, l), u = me(u, i), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return i !== null && i !== null && sm(i), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Is(l, n) {
    if (ul !== 0 && ul !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (uf() && l.callbackNode !== u)
      return null;
    var i = Nt;
    return i = Le(
      l,
      l === se ? i : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i === 0 ? null : (uv(l, i, n), Jy(l, Rl()), l.callbackNode != null && l.callbackNode === u ? Is.bind(null, l) : null);
  }
  function Zi(l, n) {
    if (uf()) return null;
    uv(l, n, !0);
  }
  function Ps() {
    Cv(function() {
      ($t & 6) !== 0 ? me(
        Gr,
        fh
      ) : wy();
    });
  }
  function sh() {
    if (lc === 0) {
      var l = Dc;
      l === 0 && (l = ju, ju <<= 1, (ju & 261888) === 0 && (ju = 256)), lc = l;
    }
    return lc;
  }
  function zv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ka("" + l);
  }
  function Li(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function tr(l, n, u, i, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = zv(
        (s[Kl] || null).action
      ), m = i.submitter;
      m && (n = (n = m[Kl] || null) ? zv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new us(
        "action",
        "action",
        null,
        i,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (lc !== 0) {
                  var A = m ? Li(s, m) : new FormData(s);
                  Lo(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), A = m ? Li(s, m) : new FormData(s), Lo(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var rh = 0; rh < Uo.length; rh++) {
    var of = Uo[rh], Ky = of.toLowerCase(), $y = of[0].toUpperCase() + of.slice(1);
    Wl(
      Ky,
      "on" + $y
    );
  }
  Wl(ss, "onAnimationEnd"), Wl(Xm, "onAnimationIteration"), Wl(rd, "onAnimationStart"), Wl("dblclick", "onDoubleClick"), Wl("focusin", "onFocus"), Wl("focusout", "onBlur"), Wl(Si, "onTransitionRun"), Wl(rs, "onTransitionStart"), Wl(In, "onTransitionCancel"), Wl(xp, "onTransitionEnd"), Kn("onMouseEnter", ["mouseout", "mouseover"]), Kn("onMouseLeave", ["mouseout", "mouseover"]), Kn("onPointerEnter", ["pointerout", "pointerover"]), Kn("onPointerLeave", ["pointerout", "pointerover"]), pc(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), pc(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), pc("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), pc(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), pc(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), pc(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ff = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Dv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ff)
  );
  function Ov(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var i = l[u], s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (n)
          for (var m = i.length - 1; 0 <= m; m--) {
            var v = i[m], A = v.instance, H = v.currentTarget;
            if (v = v.listener, A !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = H;
            try {
              r(s);
            } catch (G) {
              bi(G);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (v = i[m], A = v.instance, H = v.currentTarget, v = v.listener, A !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = H;
            try {
              r(s);
            } catch (G) {
              bi(G);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function xt(l, n) {
    var u = n[Lr];
    u === void 0 && (u = n[Lr] = /* @__PURE__ */ new Set());
    var i = l + "__bubble";
    u.has(i) || (er(n, l, 2, !1), u.add(i));
  }
  function Wy(l, n, u) {
    var i = 0;
    n && (i |= 4), er(
      u,
      l,
      i,
      n
    );
  }
  var dh = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(l) {
    if (!l[dh]) {
      l[dh] = !0, oi.forEach(function(u) {
        u !== "selectionchange" && (Dv.has(u) || Wy(u, !1, l), Wy(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[dh] || (n[dh] = !0, Wy("selectionchange", !1, n));
    }
  }
  function er(l, n, u, i) {
    switch (sr(n)) {
      case 2:
        var s = bu;
        break;
      case 8:
        s = Eu;
        break;
      default:
        s = Cl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !as || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), i ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function ky(l, n, u, i, s) {
    var r = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var v = i.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = ui(v), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              i = r = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    Tm(function() {
      var H = r, G = Ir(u), Z = [];
      t: {
        var N = Pn.get(l);
        if (N !== void 0) {
          var Y = us, et = l;
          switch (l) {
            case "keypress":
              if (td(u) === 0) break t;
            case "keydown":
            case "keyup":
              Y = nd;
              break;
            case "focusin":
              et = "focus", Y = ld;
              break;
            case "focusout":
              et = "blur", Y = ld;
              break;
            case "beforeblur":
            case "afterblur":
              Y = ld;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = zo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = Ap;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = Rp;
              break;
            case ss:
            case Xm:
            case rd:
              Y = Dp;
              break;
            case xp:
              Y = $g;
              break;
            case "scroll":
            case "scrollend":
              Y = Jg;
              break;
            case "wheel":
              Y = Wg;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = di;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Sn;
              break;
            case "toggle":
            case "beforetoggle":
              Y = Cm;
          }
          var dt = (n & 4) !== 0, de = !dt && (l === "scroll" || l === "scrollend"), _ = dt ? N !== null ? N + "Capture" : null : N;
          dt = [];
          for (var O = H, C; O !== null; ) {
            var V = O;
            if (C = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || C === null || _ === null || (V = dl(O, _), V != null && dt.push(
              lr(O, V, C)
            )), de) break;
            O = O.return;
          }
          0 < dt.length && (N = new Y(
            N,
            et,
            null,
            u,
            G
          ), Z.push({ event: N, listeners: dt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (N = l === "mouseover" || l === "pointerover", Y = l === "mouseout" || l === "pointerout", N && u !== Fr && (et = u.relatedTarget || u.fromElement) && (ui(et) || et[mc]))
            break t;
          if ((Y || N) && (N = G.window === G ? G : (N = G.ownerDocument) ? N.defaultView || N.parentWindow : window, Y ? (et = u.relatedTarget || u.toElement, Y = H, et = et ? ui(et) : null, et !== null && (de = P(et), dt = et.tag, et !== de || dt !== 5 && dt !== 27 && dt !== 6) && (et = null)) : (Y = null, et = H), Y !== et)) {
            if (dt = zo, V = "onMouseLeave", _ = "onMouseEnter", O = "mouse", (l === "pointerout" || l === "pointerover") && (dt = Sn, V = "onPointerLeave", _ = "onPointerEnter", O = "pointer"), de = Y == null ? N : po(Y), C = et == null ? N : po(et), N = new dt(
              V,
              O + "leave",
              Y,
              u,
              G
            ), N.target = de, N.relatedTarget = C, V = null, ui(G) === H && (dt = new dt(
              _,
              O + "enter",
              et,
              u,
              G
            ), dt.target = C, dt.relatedTarget = de, V = dt), de = V, Y && et)
              e: {
                for (dt = Mv, _ = Y, O = et, C = 0, V = _; V; V = dt(V))
                  C++;
                V = 0;
                for (var it = O; it; it = dt(it))
                  V++;
                for (; 0 < C - V; )
                  _ = dt(_), C--;
                for (; 0 < V - C; )
                  O = dt(O), V--;
                for (; C--; ) {
                  if (_ === O || O !== null && _ === O.alternate) {
                    dt = _;
                    break e;
                  }
                  _ = dt(_), O = dt(O);
                }
                dt = null;
              }
            else dt = null;
            Y !== null && hh(
              Z,
              N,
              Y,
              dt,
              !1
            ), et !== null && de !== null && hh(
              Z,
              de,
              et,
              dt,
              !0
            );
          }
        }
        t: {
          if (N = H ? po(H) : window, Y = N.nodeName && N.nodeName.toLowerCase(), Y === "select" || Y === "input" && N.type === "file")
            var Jt = jm;
          else if (Fn(N))
            if (id)
              Jt = vi;
            else {
              Jt = Np;
              var lt = Hp;
            }
          else
            Y = N.nodeName, !Y || Y.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? H && Em(H.elementType) && (Jt = jm) : Jt = bc;
          if (Jt && (Jt = Jt(l, H))) {
            xm(
              Z,
              Jt,
              u,
              G
            );
            break t;
          }
          lt && lt(l, N, H), l === "focusout" && H && N.type === "number" && H.memoizedProps.value != null && fi(N, "number", N.value);
        }
        switch (lt = H ? po(H) : window, l) {
          case "focusin":
            (Fn(lt) || lt.contentEditable === "true") && (Tc = lt, Mo = H, Pa = null);
            break;
          case "focusout":
            Pa = Mo = Tc = null;
            break;
          case "mousedown":
            En = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            En = !1, sd(Z, u, G);
            break;
          case "selectionchange":
            if (fs) break;
          case "keydown":
          case "keyup":
            sd(Z, u, G);
        }
        var Et;
        if (Do)
          t: {
            switch (l) {
              case "compositionstart":
                var Dt = "onCompositionStart";
                break t;
              case "compositionend":
                Dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Dt = "onCompositionUpdate";
                break t;
            }
            Dt = void 0;
          }
        else
          mi ? cd(l, u) && (Dt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Dt = "onCompositionStart");
        Dt && (Hm && u.locale !== "ko" && (mi || Dt !== "onCompositionStart" ? Dt === "onCompositionEnd" && mi && (Et = zm()) : (Gu = G, Am = "value" in Gu ? Gu.value : Gu.textContent, mi = !0)), lt = ar(H, Dt), 0 < lt.length && (Dt = new Op(
          Dt,
          l,
          null,
          u,
          G
        ), Z.push({ event: Dt, listeners: lt }), Et ? Dt.data = Et : (Et = Nm(u), Et !== null && (Dt.data = Et)))), (Et = Yl ? Cp(l, u) : kg(l, u)) && (Dt = ar(H, "onBeforeInput"), 0 < Dt.length && (lt = new Op(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          G
        ), Z.push({
          event: lt,
          listeners: Dt
        }), lt.data = Et)), tr(
          Z,
          l,
          H,
          u,
          G
        );
      }
      Ov(Z, n);
    });
  }
  function lr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function ar(l, n) {
    for (var u = n + "Capture", i = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = dl(l, u), s != null && i.unshift(
        lr(l, s, r)
      ), s = dl(l, n), s != null && i.push(
        lr(l, s, r)
      )), l.tag === 3) return i;
      l = l.return;
    }
    return [];
  }
  function Mv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function hh(l, n, u, i, s) {
    for (var r = n._reactName, m = []; u !== null && u !== i; ) {
      var v = u, A = v.alternate, H = v.stateNode;
      if (v = v.tag, A !== null && A === i) break;
      v !== 5 && v !== 26 && v !== 27 || H === null || (A = H, s ? (H = dl(u, r), H != null && m.unshift(
        lr(u, H, A)
      )) : s || (H = dl(u, r), H != null && m.push(
        lr(u, H, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Rv = /\r\n?/g, Fy = /\u0000|\uFFFD/g;
  function Iy(l) {
    return (typeof l == "string" ? l : "" + l).replace(Rv, `
`).replace(Fy, "");
  }
  function Py(l, n) {
    return n = Iy(n), Iy(l) === n;
  }
  function re(l, n, u, i, s, r) {
    switch (u) {
      case "children":
        typeof i == "string" ? n === "body" || n === "textarea" && i === "" || $n(l, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && $n(l, "" + i);
        break;
      case "className":
        $r(l, "class", i);
        break;
      case "tabIndex":
        $r(l, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $r(l, u, i);
        break;
      case "style":
        bp(l, i, r);
        break;
      case "data":
        if (n !== "object") {
          $r(l, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = ka("" + i), l.setAttribute(u, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && re(l, n, "name", s.name, s, null), re(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), re(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), re(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (re(l, n, "encType", s.encType, s, null), re(l, n, "method", s.method, s, null), re(l, n, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = ka("" + i), l.setAttribute(u, i);
        break;
      case "onClick":
        i != null && (l.onclick = pn);
        break;
      case "onScroll":
        i != null && xt("scroll", l);
        break;
      case "onScrollEnd":
        i != null && xt("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(T(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(T(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        l.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = ka("" + i), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "" + i) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        i === !0 ? l.setAttribute(u, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? l.removeAttribute(u) : l.setAttribute(u, i);
        break;
      case "popover":
        xt("beforetoggle", l), xt("toggle", l), So(l, "popover", i);
        break;
      case "xlinkActuate":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        So(l, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = wg.get(u) || u, So(l, u, i));
    }
  }
  function t0(l, n, u, i, s, r) {
    switch (u) {
      case "style":
        bp(l, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(T(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(T(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof i == "string" ? $n(l, i) : (typeof i == "number" || typeof i == "bigint") && $n(l, "" + i);
        break;
      case "onScroll":
        i != null && xt("scroll", l);
        break;
      case "onScrollEnd":
        i != null && xt("scrollend", l);
        break;
      case "onClick":
        i != null && (l.onclick = pn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!yc.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Kl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof i == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, i, s);
              break t;
            }
            u in l ? l[u] = i : i === !0 ? l.setAttribute(u, "") : So(l, u, i);
          }
    }
  }
  function _l(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        xt("error", l), xt("load", l);
        var i = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(T(137, n));
                default:
                  re(l, n, r, m, u, null);
              }
          }
        s && re(l, n, "srcSet", u.srcSet, u, null), i && re(l, n, "src", u.src, u, null);
        return;
      case "input":
        xt("invalid", l);
        var v = r = m = s = null, A = null, H = null;
        for (i in u)
          if (u.hasOwnProperty(i)) {
            var G = u[i];
            if (G != null)
              switch (i) {
                case "name":
                  s = G;
                  break;
                case "type":
                  m = G;
                  break;
                case "checked":
                  A = G;
                  break;
                case "defaultChecked":
                  H = G;
                  break;
                case "value":
                  r = G;
                  break;
                case "defaultValue":
                  v = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(T(137, n));
                  break;
                default:
                  re(l, n, i, G, u, null);
              }
          }
        ts(
          l,
          r,
          v,
          A,
          H,
          m,
          s,
          !1
        );
        return;
      case "select":
        xt("invalid", l), i = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                i = v;
              default:
                re(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!i, n != null ? bo(l, !!i, n, !1) : u != null && bo(l, !!i, u, !0);
        return;
      case "textarea":
        xt("invalid", l), r = s = i = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                i = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(T(91));
                break;
              default:
                re(l, n, m, v, u, null);
            }
        bm(l, i, s, r);
        return;
      case "option":
        for (A in u)
          u.hasOwnProperty(A) && (i = u[A], i != null) && (A === "selected" ? l.selected = i && typeof i != "function" && typeof i != "symbol" : re(l, n, A, i, u, null));
        return;
      case "dialog":
        xt("beforetoggle", l), xt("toggle", l), xt("cancel", l), xt("close", l);
        break;
      case "iframe":
      case "object":
        xt("load", l);
        break;
      case "video":
      case "audio":
        for (i = 0; i < ff.length; i++)
          xt(ff[i], l);
        break;
      case "image":
        xt("error", l), xt("load", l);
        break;
      case "details":
        xt("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        xt("error", l), xt("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in u)
          if (u.hasOwnProperty(H) && (i = u[H], i != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(T(137, n));
              default:
                re(l, n, H, i, u, null);
            }
        return;
      default:
        if (Em(n)) {
          for (G in u)
            u.hasOwnProperty(G) && (i = u[G], i !== void 0 && t0(
              l,
              n,
              G,
              i,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (i = u[v], i != null && re(l, n, v, i, u, null));
  }
  function e0(l, n, u, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, v = null, A = null, H = null, G = null;
        for (Y in u) {
          var Z = u[Y];
          if (u.hasOwnProperty(Y) && Z != null)
            switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = Z;
              default:
                i.hasOwnProperty(Y) || re(l, n, Y, null, i, Z);
            }
        }
        for (var N in i) {
          var Y = i[N];
          if (Z = u[N], i.hasOwnProperty(N) && (Y != null || Z != null))
            switch (N) {
              case "type":
                r = Y;
                break;
              case "name":
                s = Y;
                break;
              case "checked":
                H = Y;
                break;
              case "defaultChecked":
                G = Y;
                break;
              case "value":
                m = Y;
                break;
              case "defaultValue":
                v = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(T(137, n));
                break;
              default:
                Y !== Z && re(
                  l,
                  n,
                  N,
                  Y,
                  i,
                  Z
                );
            }
        }
        Pf(
          l,
          m,
          v,
          A,
          H,
          G,
          r,
          s
        );
        return;
      case "select":
        Y = m = v = N = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                Y = A;
              default:
                i.hasOwnProperty(r) || re(
                  l,
                  n,
                  r,
                  null,
                  i,
                  A
                );
            }
        for (s in i)
          if (r = i[s], A = u[s], i.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                N = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== A && re(
                  l,
                  n,
                  s,
                  r,
                  i,
                  A
                );
            }
        n = v, u = m, i = Y, N != null ? bo(l, !!u, N, !1) : !!i != !!u && (n != null ? bo(l, !!u, n, !0) : bo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        Y = N = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                re(l, n, v, null, i, s);
            }
        for (m in i)
          if (s = i[m], r = u[m], i.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                N = s;
                break;
              case "defaultValue":
                Y = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(T(91));
                break;
              default:
                s !== r && re(l, n, m, s, i, r);
            }
        Sm(l, N, Y);
        return;
      case "option":
        for (var et in u)
          N = u[et], u.hasOwnProperty(et) && N != null && !i.hasOwnProperty(et) && (et === "selected" ? l.selected = !1 : re(
            l,
            n,
            et,
            null,
            i,
            N
          ));
        for (A in i)
          N = i[A], Y = u[A], i.hasOwnProperty(A) && N !== Y && (N != null || Y != null) && (A === "selected" ? l.selected = N && typeof N != "function" && typeof N != "symbol" : re(
            l,
            n,
            A,
            N,
            i,
            Y
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var dt in u)
          N = u[dt], u.hasOwnProperty(dt) && N != null && !i.hasOwnProperty(dt) && re(l, n, dt, null, i, N);
        for (H in i)
          if (N = i[H], Y = u[H], i.hasOwnProperty(H) && N !== Y && (N != null || Y != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(T(137, n));
                break;
              default:
                re(
                  l,
                  n,
                  H,
                  N,
                  i,
                  Y
                );
            }
        return;
      default:
        if (Em(n)) {
          for (var de in u)
            N = u[de], u.hasOwnProperty(de) && N !== void 0 && !i.hasOwnProperty(de) && t0(
              l,
              n,
              de,
              void 0,
              i,
              N
            );
          for (G in i)
            N = i[G], Y = u[G], !i.hasOwnProperty(G) || N === Y || N === void 0 && Y === void 0 || t0(
              l,
              n,
              G,
              N,
              i,
              Y
            );
          return;
        }
    }
    for (var _ in u)
      N = u[_], u.hasOwnProperty(_) && N != null && !i.hasOwnProperty(_) && re(l, n, _, null, i, N);
    for (Z in i)
      N = i[Z], Y = u[Z], !i.hasOwnProperty(Z) || N === Y || N == null && Y == null || re(l, n, Z, N, i, Y);
  }
  function mh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function l0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), i = 0; i < u.length; i++) {
        var s = u[i], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && mh(m)) {
          for (m = 0, v = s.responseEnd, i += 1; i < u.length; i++) {
            var A = u[i], H = A.startTime;
            if (H > v) break;
            var G = A.transferSize, Z = A.initiatorType;
            G && mh(Z) && (A = A.responseEnd, m += G * (A < v ? 1 : (v - H) / (A - H)));
          }
          if (--i, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var yh = null, ph = null;
  function Lc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Uv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function a0(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function rf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var vh = null;
  function t1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === vh ? !1 : (vh = l, !0) : (vh = null, !1);
  }
  var nr = typeof setTimeout == "function" ? setTimeout : void 0, _v = typeof clearTimeout == "function" ? clearTimeout : void 0, wi = typeof Promise == "function" ? Promise : void 0, Cv = typeof queueMicrotask == "function" ? queueMicrotask : typeof wi < "u" ? function(l) {
    return wi.resolve(null).then(l).catch(n0);
  } : nr;
  function n0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function xn(l) {
    return l === "head";
  }
  function u0(l, n) {
    var u = n, i = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (i === 0) {
            l.removeChild(s), Af(n);
            return;
          }
          i--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          i++;
        else if (u === "html")
          Ji(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Ji(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[Jn] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && Ji(l.ownerDocument.body);
      u = s;
    } while (u);
    Af(n);
  }
  function We(l, n) {
    var u = l;
    l = 0;
    do {
      var i = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), i && i.nodeType === 8)
        if (u = i.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = i;
    } while (u);
  }
  function ur(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ur(u), wr(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function e1(l, n, u, i) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (i) {
        if (!l[Jn])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = ia(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Mt(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ia(l.nextSibling), l === null)) return null;
    return l;
  }
  function Hv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = ia(l.nextSibling), l === null)) return null;
    return l;
  }
  function on(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function wc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function df(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var i = function() {
        n(), u.removeEventListener("DOMContentLoaded", i);
      };
      u.addEventListener("DOMContentLoaded", i), l._reactRetry = i;
    }
  }
  function ia(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var cr = null;
  function gh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return ia(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function jn(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function hf(l, n, u) {
    switch (n = Lc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(T(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(T(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(T(454));
        return l;
      default:
        throw Error(T(451));
    }
  }
  function Ji(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    wr(l);
  }
  var va = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Set();
  function Ql(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var qn = L.d;
  L.d = {
    f: l1,
    r: Nv,
    D: q,
    C: It,
    L: a1,
    m: c0,
    X: nc,
    S: i0,
    M: Jc
  };
  function l1() {
    var l = qn.f(), n = af();
    return l || n;
  }
  function Nv(l) {
    var n = ci(l);
    n !== null && n.tag === 5 && n.type === "form" ? fe(n) : qn.r(l);
  }
  var mf = typeof document > "u" ? null : document;
  function el(l, n, u) {
    var i = mf;
    if (i && typeof n == "string" && n) {
      var s = za(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), ir.has(s) || (ir.add(s), l = { rel: l, crossOrigin: u, href: n }, i.querySelector(s) === null && (n = i.createElement("link"), _l(n, "link", l), Pt(n), i.head.appendChild(n)));
    }
  }
  function q(l) {
    qn.D(l), el("dns-prefetch", l, null);
  }
  function It(l, n) {
    qn.C(l, n), el("preconnect", l, n);
  }
  function a1(l, n, u) {
    qn.L(l, n, u);
    var i = mf;
    if (i && l && n) {
      var s = 'link[rel="preload"][as="' + za(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + za(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + za(
        u.imageSizes
      ) + '"]')) : s += '[href="' + za(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Ya(l);
          break;
        case "script":
          r = Ki(l);
      }
      va.has(r) || (l = ot(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), va.set(r, l), i.querySelector(s) !== null || n === "style" && i.querySelector(Kc(r)) || n === "script" && i.querySelector(vf(r)) || (n = i.createElement("link"), _l(n, "link", l), Pt(n), i.head.appendChild(n)));
    }
  }
  function c0(l, n) {
    qn.m(l, n);
    var u = mf;
    if (u && l) {
      var i = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + za(i) + '"][href="' + za(l) + '"]', r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ki(l);
      }
      if (!va.has(r) && (l = ot({ rel: "modulepreload", href: l }, n), va.set(r, l), u.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(vf(r)))
              return;
        }
        i = u.createElement("link"), _l(i, "link", l), Pt(i), u.head.appendChild(i);
      }
    }
  }
  function i0(l, n, u) {
    qn.S(l, n, u);
    var i = mf;
    if (i && l) {
      var s = ii(i).hoistableStyles, r = Ya(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = i.querySelector(
          Kc(r)
        ))
          v.loading = 5;
        else {
          l = ot(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = va.get(r)) && Sh(l, u);
          var A = m = i.createElement("link");
          Pt(A), _l(A, "link", l), A._p = new Promise(function(H, G) {
            A.onload = H, A.onerror = G;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, or(m, n, i);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function nc(l, n) {
    qn.X(l, n);
    var u = mf;
    if (u && l) {
      var i = ii(u).hoistableScripts, s = Ki(l), r = i.get(s);
      r || (r = u.querySelector(vf(s)), r || (l = ot({ src: l, async: !0 }, n), (n = va.get(s)) && bh(l, n), r = u.createElement("script"), Pt(r), _l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function Jc(l, n) {
    qn.M(l, n);
    var u = mf;
    if (u && l) {
      var i = ii(u).hoistableScripts, s = Ki(l), r = i.get(s);
      r || (r = u.querySelector(vf(s)), r || (l = ot({ src: l, async: !0, type: "module" }, n), (n = va.get(s)) && bh(l, n), r = u.createElement("script"), Pt(r), _l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function yf(l, n, u, i) {
    var s = (s = Ka.current) ? Ql(s) : null;
    if (!s) throw Error(T(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Ya(u.href), u = ii(
          s
        ).hoistableStyles, i = u.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Ya(u.href);
          var r = ii(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Kc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), va.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, va.set(l, u), r || Bv(
            s,
            l,
            u,
            m.state
          ))), n && i === null)
            throw Error(T(528, ""));
          return m;
        }
        if (n && i !== null)
          throw Error(T(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ki(u), u = ii(
          s
        ).hoistableScripts, i = u.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(T(444, l));
    }
  }
  function Ya(l) {
    return 'href="' + za(l) + '"';
  }
  function Kc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function pf(l) {
    return ot({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Bv(l, n, u, i) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = l.createElement("link"), i.preload = n, n.addEventListener("load", function() {
      return i.loading |= 1;
    }), n.addEventListener("error", function() {
      return i.loading |= 2;
    }), _l(n, "link", u), Pt(n), l.head.appendChild(n));
  }
  function Ki(l) {
    return '[src="' + za(l) + '"]';
  }
  function vf(l) {
    return "script[async]" + l;
  }
  function o0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var i = l.querySelector(
            'style[data-href~="' + za(u.href) + '"]'
          );
          if (i)
            return n.instance = i, Pt(i), i;
          var s = ot({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return i = (l.ownerDocument || l).createElement(
            "style"
          ), Pt(i), _l(i, "style", s), or(i, u.precedence, l), n.instance = i;
        case "stylesheet":
          s = Ya(u.href);
          var r = l.querySelector(
            Kc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Pt(r), r;
          i = pf(u), (s = va.get(s)) && Sh(i, s), r = (l.ownerDocument || l).createElement("link"), Pt(r);
          var m = r;
          return m._p = new Promise(function(v, A) {
            m.onload = v, m.onerror = A;
          }), _l(r, "link", i), n.state.loading |= 4, or(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ki(u.src), (s = l.querySelector(
            vf(r)
          )) ? (n.instance = s, Pt(s), s) : (i = u, (s = va.get(r)) && (i = ot({}, u), bh(i, s)), l = l.ownerDocument || l, s = l.createElement("script"), Pt(s), _l(s, "link", i), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(T(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, or(i, u.precedence, l));
    return n.instance;
  }
  function or(l, n, u) {
    for (var i = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, r = s, m = 0; m < i.length; m++) {
      var v = i[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Sh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function bh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var gf = null;
  function f0(l, n, u) {
    if (gf === null) {
      var i = /* @__PURE__ */ new Map(), s = gf = /* @__PURE__ */ new Map();
      s.set(u, i);
    } else
      s = gf, i = s.get(u), i || (i = /* @__PURE__ */ new Map(), s.set(u, i));
    if (i.has(l)) return i;
    for (i.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Jn] || r[oe] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = i.get(m);
        v ? v.push(r) : i.set(m, [r]);
      }
    }
    return i;
  }
  function Eh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function s0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function ga(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Su(l, n, u, i) {
    if (u.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = Ya(i.href), r = n.querySelector(
          Kc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Th.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Pt(r);
          return;
        }
        r = n.ownerDocument || n, i = pf(i), (s = va.get(s)) && Sh(i, s), r = r.createElement("link"), Pt(r);
        var m = r;
        m._p = new Promise(function(v, A) {
          m.onload = v, m.onerror = A;
        }), _l(r, "link", i), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Th.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Ga = 0;
  function r0(l, n) {
    return l.stylesheets && l.count === 0 && zh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var i = setTimeout(function() {
        if (l.stylesheets && zh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Ga === 0 && (Ga = 62500 * l0());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && zh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Ga ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function Th() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) zh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Ah = null;
  function zh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Ah = /* @__PURE__ */ new Map(), n.forEach(Sl, l), Ah = null, Th.call(l));
  }
  function Sl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Ah.get(l);
      if (u) var i = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Ah.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), i = m);
        }
        i && u.set(null, i);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || i, r === i && u.set(null, s), u.set(m, s), this.count++, i = Th.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var fr = {
    $$typeof: Ve,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0
  };
  function d0(l, n, u, i, s, r, m, v, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kf(0), this.hiddenUpdates = kf(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Dh(l, n, u, i, s, r, m, v, A, H, G, Z) {
    return l = new d0(
      l,
      n,
      u,
      m,
      A,
      H,
      G,
      Z,
      v
    ), n = 1, r === !0 && (n |= 24), r = qe(3, null, null, n), l.current = r, r.stateNode = l, n = vs(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: i,
      isDehydrated: u,
      cache: n
    }, zs(r), l;
  }
  function $i(l) {
    return l ? (l = kl, l) : kl;
  }
  function xv(l, n, u, i, s, r) {
    s = $i(s), i.context === null ? i.context = s : i.pendingContext = s, i = $u(n), i.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (i.callback = r), u = Ca(l, i, n), u !== null && (ca(u, l, n), Cc(u, l, n));
  }
  function Oh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function h0(l, n) {
    Oh(l, n), (l = l.alternate) && Oh(l, n);
  }
  function jv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Qu(l, 67108864);
      n !== null && ca(n, l, 67108864), h0(l, 67108864);
    }
  }
  function Wi(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = pa();
      n = Vr(n);
      var u = Qu(l, n);
      u !== null && ca(u, l, n), h0(l, n);
    }
  }
  var cl = !0;
  function bu(l, n, u, i) {
    var s = R.T;
    R.T = null;
    var r = L.p;
    try {
      L.p = 2, Cl(l, n, u, i);
    } finally {
      L.p = r, R.T = s;
    }
  }
  function Eu(l, n, u, i) {
    var s = R.T;
    R.T = null;
    var r = L.p;
    try {
      L.p = 8, Cl(l, n, u, i);
    } finally {
      L.p = r, R.T = s;
    }
  }
  function Cl(l, n, u, i) {
    if (cl) {
      var s = m0(i);
      if (s === null)
        ky(
          l,
          n,
          i,
          Mh,
          u
        ), uc(l, i);
      else if (n1(
        s,
        l,
        n,
        u,
        i
      ))
        i.stopPropagation();
      else if (uc(l, i), n & 4 && -1 < oa.indexOf(l)) {
        for (; s !== null; ) {
          var r = ci(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = Wa(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Jl(m);
                      v.entanglements[1] |= A, m &= ~A;
                    }
                    gu(r), ($t & 6) === 0 && (Ft = Rl() + 500, ac(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = Qu(r, 2), v !== null && ca(v, r, 2), af(), h0(r, 2);
            }
          if (r = m0(i), r === null && ky(
            l,
            n,
            i,
            Mh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else
        ky(
          l,
          n,
          i,
          null,
          u
        );
    }
  }
  function m0(l) {
    return l = Ir(l), Sf(l);
  }
  var Mh = null;
  function Sf(l) {
    if (Mh = null, l = ui(l), l !== null) {
      var n = P(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = At(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = K(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Mh = l, null;
  }
  function sr(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Vg()) {
          case Gr:
            return 2;
          case Xr:
            return 8;
          case dc:
          case Zg:
            return 32;
          case rm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bf = !1, il = null, Hl = null, Vl = null, $c = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), Me = [], oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function uc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        il = null;
        break;
      case "dragenter":
      case "dragleave":
        Hl = null;
        break;
      case "mouseover":
      case "mouseout":
        Vl = null;
        break;
      case "pointerover":
      case "pointerout":
        $c.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fn.delete(n.pointerId);
    }
  }
  function ki(l, n, u, i, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: i,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = ci(n), n !== null && jv(n)), l) : (l.eventSystemFlags |= i, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function n1(l, n, u, i, s) {
    switch (n) {
      case "focusin":
        return il = ki(
          il,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "dragenter":
        return Hl = ki(
          Hl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "mouseover":
        return Vl = ki(
          Vl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return $c.set(
          r,
          ki(
            $c.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, fn.set(
          r,
          ki(
            fn.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function qv(l) {
    var n = ui(l.target);
    if (n !== null) {
      var u = P(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = At(u), n !== null) {
            l.blockedOn = n, mm(l.priority, function() {
              Wi(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = K(u), n !== null) {
            l.blockedOn = n, mm(l.priority, function() {
              Wi(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function rr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = m0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var i = new u.constructor(
          u.type,
          u
        );
        Fr = i, u.target.dispatchEvent(i), Fr = null;
      } else
        return n = ci(u), n !== null && jv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Ef(l, n, u) {
    rr(l) && u.delete(n);
  }
  function Yv() {
    bf = !1, il !== null && rr(il) && (il = null), Hl !== null && rr(Hl) && (Hl = null), Vl !== null && rr(Vl) && (Vl = null), $c.forEach(Ef), fn.forEach(Ef);
  }
  function Tu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, bf || (bf = !0, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      Yv
    )));
  }
  var Tf = null;
  function Gv(l) {
    Tf !== l && (Tf = l, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      function() {
        Tf === l && (Tf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], i = l[n + 1], s = l[n + 2];
          if (typeof i != "function") {
            if (Sf(i || u) === null)
              continue;
            break;
          }
          var r = ci(u);
          r !== null && (l.splice(n, 3), n -= 3, Lo(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function Af(l) {
    function n(A) {
      return Tu(A, l);
    }
    il !== null && Tu(il, l), Hl !== null && Tu(Hl, l), Vl !== null && Tu(Vl, l), $c.forEach(n), fn.forEach(n);
    for (var u = 0; u < Me.length; u++) {
      var i = Me[u];
      i.blockedOn === l && (i.blockedOn = null);
    }
    for (; 0 < Me.length && (u = Me[0], u.blockedOn === null); )
      qv(u), u.blockedOn === null && Me.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (i = 0; i < u.length; i += 3) {
        var s = u[i], r = u[i + 1], m = s[Kl] || null;
        if (typeof r == "function")
          m || Gv(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Kl] || null)
              v = m.formAction;
            else if (Sf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[i + 1] = v : (u.splice(i, 3), i -= 3), Gv(u);
        }
      }
  }
  function y0() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), i || setTimeout(u, 20);
    }
    function u() {
      if (!i && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        i = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Rh(l) {
    this._internalRoot = l;
  }
  Uh.prototype.render = Rh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(T(409));
    var u = n.current, i = pa();
    xv(u, i, l, n, null, null);
  }, Uh.prototype.unmount = Rh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      xv(l.current, 2, null, l, null, null), af(), n[mc] = null;
    }
  };
  function Uh(l) {
    this._internalRoot = l;
  }
  Uh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Zr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Me.length && n !== 0 && n < Me[u].priority; u++) ;
      Me.splice(u, 0, l), u === 0 && qv(l);
    }
  };
  var p0 = U.version;
  if (p0 !== "19.2.4")
    throw Error(
      T(
        527,
        p0,
        "19.2.4"
      )
    );
  L.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(T(188)) : (l = Object.keys(l).join(","), Error(T(268, l)));
    return l = Gt(n), l = l !== null ? Fe(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Xv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dr.isDisabled && dr.supportsFiber)
      try {
        ai = dr.inject(
          Xv
        ), sa = dr;
      } catch {
      }
  }
  return sp.createRoot = function(l, n) {
    if (!J(l)) throw Error(T(299));
    var u = !1, i = "", s = Xd, r = vy, m = Qd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Dh(
      l,
      1,
      !1,
      null,
      null,
      u,
      i,
      null,
      s,
      r,
      m,
      y0
    ), l[mc] = n.current, sf(l), new Rh(n);
  }, sp.hydrateRoot = function(l, n, u) {
    if (!J(l)) throw Error(T(299));
    var i = !1, s = "", r = Xd, m = vy, v = Qd, A = null;
    return u != null && (u.unstable_strictMode === !0 && (i = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = Dh(
      l,
      1,
      !0,
      n,
      u ?? null,
      i,
      s,
      A,
      r,
      m,
      v,
      y0
    ), n.context = $i(null), u = n.current, i = pa(), i = Vr(i), s = $u(i), s.callback = null, Ca(u, s, i), u = i, n.current.lanes = u, yo(n, u), gu(n), l[mc] = n.current, sf(l), new Uh(n);
  }, sp.version = "19.2.4", sp;
}
var rp = {};
var L2;
function DA() {
  return L2 || (L2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function g(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function U(t, e, a, c) {
      if (a >= e.length) return c;
      var o = e[a], f = el(t) ? t.slice() : Mt({}, t);
      return f[o] = U(t[o], e, a + 1, c), f;
    }
    function j(t, e, a) {
      if (e.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var c = 0; c < a.length - 1; c++)
          if (e[c] !== a[c]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return T(t, e, a, 0);
      }
    }
    function T(t, e, a, c) {
      var o = e[c], f = el(t) ? t.slice() : Mt({}, t);
      return c + 1 === e.length ? (f[a[c]] = f[o], el(f) ? f.splice(o, 1) : delete f[o]) : f[o] = T(
        t[o],
        e,
        a,
        c + 1
      ), f;
    }
    function J(t, e, a) {
      var c = e[a], o = el(t) ? t.slice() : Mt({}, t);
      return a + 1 === e.length ? (el(o) ? o.splice(c, 1) : delete o[c], o) : (o[c] = J(t[c], e, a + 1), o);
    }
    function P() {
      return !1;
    }
    function At() {
      return null;
    }
    function K() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function ce() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Gt() {
    }
    function Fe() {
    }
    function ot(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function Ct(t, e, a, c) {
      return new kg(t, e, a, c);
    }
    function wt(t, e) {
      t.context === Mf && (hh(t.current, 2, e, t, null, null), ja());
    }
    function Ce(t, e) {
      if (Du !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, Zs(), Cp(
          t.current,
          e,
          a
        ), ja();
      }
    }
    function xl(t) {
      Du = t;
    }
    function be(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function ne(t) {
      var e = t, a = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? a : null;
    }
    function Ja(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Ve(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Ml(t) {
      if (ne(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function ba(t) {
      var e = t.alternate;
      if (!e) {
        if (e = ne(t), e === null)
          throw Error("Unable to find node on an unmounted component.");
        return e !== t ? null : t;
      }
      for (var a = t, c = e; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (c = o.return, c !== null) {
            a = c;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Ml(o), t;
            if (f === c) return Ml(o), e;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== c.return) a = o, c = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, c = f;
              break;
            }
            if (h === c) {
              d = !0, c = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, c = o;
                break;
              }
              if (h === c) {
                d = !0, c = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== c)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? t : e;
    }
    function jl(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = jl(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function Ie(t) {
      return t === null || typeof t != "object" ? null : (t = Nv && t[Nv] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function Xt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === mf ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case df:
          return "Fragment";
        case cr:
          return "Profiler";
        case ia:
          return "StrictMode";
        case Ji:
          return "Suspense";
        case va:
          return "SuspenseList";
        case qn:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case wc:
            return "Portal";
          case jn:
            return t.displayName || "Context";
          case gh:
            return (t._context.displayName || "Context") + ".Consumer";
          case hf:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ir:
            return e = t.displayName || null, e !== null ? e : Xt(t.type) || "Memo";
          case Ql:
            e = t._payload, t = t._init;
            try {
              return Xt(t(e));
            } catch {
            }
        }
      return null;
    }
    function sl(t) {
      return typeof t.tag == "number" ? ut(t) : typeof t.name == "string" ? t.name : null;
    }
    function ut(t) {
      var e = t.type;
      switch (t.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (e._context.displayName || "Context") + ".Consumer";
        case 10:
          return e.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return e;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Xt(e);
        case 8:
          return e === ia ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof e == "function")
            return e.displayName || e.name || null;
          if (typeof e == "string") return e;
          break;
        case 29:
          if (e = t._debugInfo, e != null) {
            for (var a = e.length - 1; 0 <= a; a--)
              if (typeof e[a].name == "string") return e[a].name;
          }
          if (t.return !== null)
            return ut(t.return);
      }
      return null;
    }
    function Ze(t) {
      return { current: t };
    }
    function jt(t, e) {
      0 > nc ? console.error("Unexpected pop.") : (e !== i0[nc] && console.error("Unexpected Fiber popped."), t.current = c0[nc], c0[nc] = null, i0[nc] = null, nc--);
    }
    function Ht(t, e, a) {
      nc++, c0[nc] = t.current, i0[nc] = a, t.current = e;
    }
    function ql(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function rl(t, e) {
      Ht(Ya, e, t), Ht(yf, t, t), Ht(Jc, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? cv(e) : so;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = cv(e), e = ec(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = um;
                break;
              case "math":
                e = Cg;
                break;
              default:
                e = so;
            }
      }
      a = a.toLowerCase(), a = gm(null, a), a = {
        context: e,
        ancestorInfo: a
      }, jt(Jc, t), Ht(Jc, a, t);
    }
    function R(t) {
      jt(Jc, t), jt(yf, t), jt(Ya, t);
    }
    function L() {
      return ql(Jc.current);
    }
    function $(t) {
      t.memoizedState !== null && Ht(Kc, t, t);
      var e = ql(Jc.current), a = t.type, c = ec(e.context, a);
      a = gm(e.ancestorInfo, a), c = { context: c, ancestorInfo: a }, e !== c && (Ht(yf, t, t), Ht(Jc, c, t));
    }
    function rt(t) {
      yf.current === t && (jt(Jc, t), jt(yf, t)), Kc.current === t && (jt(Kc, t), up._currentValue = xr);
    }
    function yt() {
    }
    function Q() {
      if (pf === 0) {
        Bv = console.log, Ki = console.info, vf = console.warn, o0 = console.error, or = console.group, Sh = console.groupCollapsed, bh = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: yt,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      pf++;
    }
    function tt() {
      if (pf--, pf === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Mt({}, t, { value: Bv }),
          info: Mt({}, t, { value: Ki }),
          warn: Mt({}, t, { value: vf }),
          error: Mt({}, t, { value: o0 }),
          group: Mt({}, t, { value: or }),
          groupCollapsed: Mt({}, t, { value: Sh }),
          groupEnd: Mt({}, t, { value: bh })
        });
      }
      0 > pf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function nt(t) {
      var e = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = e, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), e = t.indexOf(`
`), e !== -1 && (t = t.slice(e + 1)), e = t.indexOf("react_stack_bottom_frame"), e !== -1 && (e = t.lastIndexOf(
        `
`,
        e
      )), e !== -1)
        t = t.slice(0, e);
      else return "";
      return t;
    }
    function ct(t) {
      if (gf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          gf = e && e[1] || "", f0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + gf + t + f0;
    }
    function je(t, e) {
      if (!t || Eh) return "";
      var a = s0.get(t);
      if (a !== void 0) return a;
      Eh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var c = null;
      c = q.H, q.H = null, Q();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var b = function() {
                  throw Error();
                };
                if (Object.defineProperty(b.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(b, []);
                  } catch (W) {
                    var B = W;
                  }
                  Reflect.construct(t, [], b);
                } else {
                  try {
                    b.call();
                  } catch (W) {
                    B = W;
                  }
                  t.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (W) {
                  B = W;
                }
                (b = t()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (W) {
              if (W && B && typeof W.stack == "string")
                return [W.stack, B.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), D = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < D.length && !D[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === D.length)
            for (f = p.length - 1, d = D.length - 1; 1 <= f && 0 <= d && p[f] !== D[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== D[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== D[d]) {
                    var M = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), typeof t == "function" && s0.set(t, M), M;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Eh = !1, q.H = c, tt(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? ct(p) : "", typeof t == "function" && s0.set(t, p), p;
    }
    function Ka(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return ct(t.type);
        case 16:
          return ct("Lazy");
        case 13:
          return t.child !== e && e !== null ? ct("Suspense Fallback") : ct("Suspense");
        case 19:
          return ct("SuspenseList");
        case 0:
        case 15:
          return je(t.type, !1);
        case 11:
          return je(t.type.render, !1);
        case 1:
          return je(t.type, !0);
        case 31:
          return ct("Activity");
        default:
          return "";
      }
    }
    function Ee(t) {
      try {
        var e = "", a = null;
        do {
          e += Ka(t, a);
          var c = t._debugInfo;
          if (c)
            for (var o = c.length - 1; 0 <= o; o--) {
              var f = c[o];
              if (typeof f.name == "string") {
                var d = e;
                t: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var D = nt(p), M = D.lastIndexOf(`
`), b = M === -1 ? D : D.slice(M + 1);
                    if (b.indexOf(h) !== -1) {
                      var B = `
` + b;
                      break t;
                    }
                  }
                  B = ct(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                e = d + B;
              }
            }
          a = t, t = t.return;
        } while (t);
        return e;
      } catch (W) {
        return `
Error generating stack: ` + W.message + `
` + W.stack;
      }
    }
    function $a(t) {
      return (t = t ? t.displayName || t.name : "") ? ct(t) : "";
    }
    function Ea() {
      if (ga === null) return null;
      var t = ga._debugOwner;
      return t != null ? sl(t) : null;
    }
    function Kf() {
      if (ga === null) return "";
      var t = ga;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += ct(t.type);
            break;
          case 13:
            e += ct("Suspense");
            break;
          case 19:
            e += ct("SuspenseList");
            break;
          case 31:
            e += ct("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            t._debugOwner || e !== "" || (e += $a(
              t.type
            ));
            break;
          case 11:
            t._debugOwner || e !== "" || (e += $a(
              t.type.render
            ));
        }
        for (; t; )
          if (typeof t.tag == "number") {
            var a = t;
            t = a._debugOwner;
            var c = a._debugStack;
            if (t && c) {
              var o = nt(c);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + nt(f));
          } else break;
        var d = e;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function I(t, e, a, c, o, f, d) {
      var h = ga;
      $f(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, c, o, f, d)
        ) : e(a, c, o, f, d);
      } finally {
        $f(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function $f(t) {
      q.getCurrentStack = t === null ? null : Kf, Su = !1, ga = t;
    }
    function Wf(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function Ln(t) {
      try {
        return ei(t), !1;
      } catch {
        return !0;
      }
    }
    function ei(t) {
      return "" + t;
    }
    function ie(t, e) {
      if (Ln(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          Wf(t)
        ), ei(t);
    }
    function om(t, e) {
      if (Ln(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          Wf(t)
        ), ei(t);
    }
    function qr(t) {
      if (Ln(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Wf(t)
        ), ei(t);
    }
    function fm(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Wi = e.inject(t), cl = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function me(t) {
      if (typeof h0 == "function" && jv(t), cl && typeof cl.setStrictMode == "function")
        try {
          cl.setStrictMode(Wi, t);
        } catch (e) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function sm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (m0(t) / Mh | 0) | 0;
    }
    function li(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
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
          return 64;
        case 128:
          return 128;
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
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), t;
      }
    }
    function Yr(t, e, a) {
      var c = t.pendingLanes;
      if (c === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = c & 134217727;
      return h !== 0 ? (c = h & ~f, c !== 0 ? o = li(c) : (d &= h, d !== 0 ? o = li(d) : a || (a = h & ~t, a !== 0 && (o = li(a))))) : (h = c & ~f, h !== 0 ? o = li(h) : d !== 0 ? o = li(d) : a || (a = c & ~t, a !== 0 && (o = li(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function Rl(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Vg(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
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
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Gr() {
      var t = bf;
      return bf <<= 1, (bf & 62914560) === 0 && (bf = 4194304), t;
    }
    function Xr(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function dc(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Zg(t, e, a, c, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var D = 31 - Cl(a), M = 1 << D;
        h[D] = 0, y[D] = -1;
        var b = p[D];
        if (b !== null)
          for (p[D] = null, D = 0; D < b.length; D++) {
            var B = b[D];
            B !== null && (B.lane &= -536870913);
          }
        a &= ~M;
      }
      c !== 0 && rm(t, c, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function rm(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var c = 31 - Cl(e);
      t.entangledLanes |= e, t.entanglements[c] = t.entanglements[c] | 1073741824 | a & 261930;
    }
    function hp(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var c = 31 - Cl(a), o = 1 << c;
        o & e | t[c] & e && (t[c] |= e), a &= ~o;
      }
    }
    function mp(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : ai(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function ai(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function sa(t, e, a) {
      if (Eu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var c = 31 - Cl(a), o = 1 << c;
          t[c].add(e), a &= ~o;
        }
    }
    function xu(t, e) {
      if (Eu)
        for (var a = t.pendingUpdatersLaneMap, c = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - Cl(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && c.has(d) || c.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function Jl(t) {
      return t &= -t, il < t ? Hl < t ? (t & 134217727) !== 0 ? Vl : $c : Hl : il;
    }
    function yp() {
      var t = It.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? Vl : yh(t.type));
    }
    function pp(t, e) {
      var a = It.p;
      try {
        return It.p = t, e();
      } finally {
        It.p = a;
      }
    }
    function dm(t) {
      delete t[Me], delete t[oa], delete t[ki], delete t[n1], delete t[qv];
    }
    function ju(t) {
      var e = t[Me];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[uc] || a[Me]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = Vi(t); t !== null; ) {
              if (a = t[Me])
                return a;
              t = Vi(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function hn(t) {
      if (t = t[Me] || t[uc]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function hc(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Wa(t) {
      var e = t[rr];
      return e || (e = t[rr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function Le(t) {
      t[Ef] = !0;
    }
    function mn(t, e) {
      mo(t, e), mo(t + "Capture", e);
    }
    function mo(t, e) {
      Tu[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), Tu[t] = e;
      var a = t.toLowerCase();
      for (Tf[a] = t, t === "onDoubleClick" && (Tf.ondblclick = t), t = 0; t < e.length; t++)
        Yv.add(e[t]);
    }
    function ni(t, e) {
      Gv[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function kf(t) {
      return Ga.call(Rh, t) ? !0 : Ga.call(y0, t) ? !1 : Af.test(t) ? Rh[t] = !0 : (y0[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function yo(t, e, a) {
      if (kf(e)) {
        if (!t.hasAttribute(e)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (ie(a, e), t === "" + a ? a : t);
      }
    }
    function Qr(t, e, a) {
      if (kf(e))
        if (a === null) t.removeAttribute(e);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var c = e.toLowerCase().slice(0, 5);
              if (c !== "data-" && c !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          ie(a, e), t.setAttribute(e, "" + a);
        }
    }
    function Ff(t, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        ie(a, e), t.setAttribute(e, "" + a);
      }
    }
    function wn(t, e, a, c) {
      if (c === null) t.removeAttribute(a);
      else {
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        ie(c, a), t.setAttributeNS(e, a, "" + c);
      }
    }
    function Ta(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return qr(t), t;
        default:
          return "";
      }
    }
    function Vr(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function hm(t, e, a) {
      var c = Object.getOwnPropertyDescriptor(
        t.constructor.prototype,
        e
      );
      if (!t.hasOwnProperty(e) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
        var o = c.get, f = c.set;
        return Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            qr(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: c.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            qr(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function Zr(t) {
      if (!t._valueTracker) {
        var e = Vr(t) ? "checked" : "value";
        t._valueTracker = hm(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function mm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), c = "";
      return t && (c = Vr(t) ? t.checked ? "true" : "false" : t.value), t = c, t !== a ? (e.setValue(t), !0) : !1;
    }
    function yn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function oe(t) {
      return t.replace(
        Uh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Kl(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || Xv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ea() || "A component",
        e.type
      ), Xv = !0), e.value === void 0 || e.defaultValue === void 0 || p0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ea() || "A component",
        e.type
      ), p0 = !0);
    }
    function mc(t, e, a, c, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (ie(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ta(e)) : t.value !== "" + Ta(e) && (t.value = "" + Ta(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? ym(t, d, Ta(e)) : a != null ? ym(t, d, Ta(a)) : c != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (ie(h, "name"), t.name = "" + Ta(h)) : t.removeAttribute("name");
    }
    function Lr(t, e, a, c, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (ie(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          Zr(t);
          return;
        }
        a = a != null ? "" + Ta(a) : "", e = e != null ? "" + Ta(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      c = c ?? o, c = typeof c != "function" && typeof c != "symbol" && !!c, t.checked = h ? t.checked : !!c, t.defaultChecked = !!c, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (ie(d, "name"), t.name = d), Zr(t);
    }
    function ym(t, e, a) {
      e === "number" && yn(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function vp(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? ur.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || dr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), dr = !0);
    }
    function pm() {
      var t = Ea();
      return t ? `

Check the render method of \`` + t + "`." : "";
    }
    function Jn(t, e, a, c) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < a.length; o++)
          e["$" + a[o]] = !0;
        for (a = 0; a < t.length; a++)
          o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && c && (t[a].defaultSelected = !0);
      } else {
        for (a = "" + Ta(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, c && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function wr(t, e) {
      for (t = 0; t < i.length; t++) {
        var a = i[t];
        if (e[a] != null) {
          var c = el(e[a]);
          e.multiple && !c ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            pm()
          ) : !e.multiple && c && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            pm()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function ui(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ea() || "A component"
      ), s = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function ci(t, e, a) {
      if (e != null && (e = "" + Ta(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + Ta(a) : "";
    }
    function po(t, e, a, c) {
      if (e == null) {
        if (c != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (el(c)) {
            if (1 < c.length)
              throw Error("<textarea> can only have at most one child.");
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), e = a;
      }
      a = Ta(e), t.defaultValue = a, c = t.textContent, c === a && c !== "" && c !== null && (t.value = c), Zr(t);
    }
    function ii(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? ii(t.children[0], e) : t;
    }
    function Pt(t) {
      return "  " + "  ".repeat(t);
    }
    function oi(t) {
      return "+ " + "  ".repeat(t);
    }
    function yc(t) {
      return "- " + "  ".repeat(t);
    }
    function pc(t) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return t.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return t = t.type, t.displayName || t.name || null;
        case 11:
          return t = t.type.render, t.displayName || t.name || null;
        case 1:
          return t = t.type, t.displayName || t.name || null;
        default:
          return null;
      }
    }
    function Kn(t, e) {
      return r.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
    }
    function Jr(t, e, a) {
      var c = 120 - 2 * a;
      if (e === null)
        return oi(a) + Kn(t, c) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > c - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), oi(a) + Kn(t, c) + `
` + yc(a) + Kn(e, c) + `
`;
      }
      return Pt(a) + Kn(t, c) + `
`;
    }
    function Kr(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function vo(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (el(t)) return "[...]";
          if (t.$$typeof === on)
            return (e = Xt(t.type)) ? "<" + e + ">" : "<...>";
          var a = Kr(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var c in t)
              if (t.hasOwnProperty(c)) {
                var o = JSON.stringify(c);
                if (o !== '"' + c + '"' && (c = o), e -= c.length - 2, o = vo(
                  t[c],
                  15 > e ? e : 15
                ), e -= o.length, 0 > e) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + c + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (e = t.displayName || t.name) ? "function " + e : "function";
        default:
          return String(t);
      }
    }
    function go(t, e) {
      return typeof t != "string" || r.test(t) ? "{" + vo(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function So(t, e, a) {
      var c = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = go(
            e[f],
            120 - a.length - f.length - 1
          );
          c -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + t + `>
` : 0 < c ? a + "<" + t + " " + o.join(" ") + `>
` : a + "<" + t + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function $r(t, e, a) {
      var c = "", o = Mt({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = vo(t[f], d);
          e.hasOwnProperty(f) ? (d = vo(e[f], d), c += oi(a) + f + ": " + h + `
`, c += yc(a) + f + ": " + d + `
`) : c += oi(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = vo(
          o[y],
          120 - 2 * a - y.length - 2
        ), c += yc(a) + y + ": " + t + `
`);
      return c;
    }
    function qu(t, e, a, c) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += So(
          t,
          e,
          Pt(c)
        );
      else {
        for (var d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (c + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = e[d];
              y = a[y];
              var D = go(
                p,
                h
              );
              h = go(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && Kr(p) === "Object" && Kr(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < D.indexOf("...") || -1 < h.indexOf("...")) ? o += Pt(c + 1) + d + `={{
` + $r(
                p,
                y,
                c + 2
              ) + Pt(c + 1) + `}}
` : (o += oi(c + 1) + d + "=" + D + `
`, o += yc(c + 1) + d + "=" + h + `
`);
            } else
              o += Pt(c + 1) + d + "=" + go(e[d], h) + `
`;
          }
        f.forEach(function(M) {
          if (M !== "children") {
            var b = 120 - 2 * (c + 1) - M.length - 1;
            o += yc(c + 1) + M + "=" + go(a[M], b) + `
`;
          }
        }), o = o === "" ? Pt(c) + "<" + t + `>
` : Pt(c) + "<" + t + `
` + o + Pt(c) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += Jr(f, "" + t, c + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + Jr("" + e, null, c + 1) : o + Jr("" + e, void 0, c + 1)), o;
    }
    function Aa(t, e) {
      var a = pc(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += Aa(t, e), t = t.sibling;
        return a;
      }
      return Pt(e) + "<" + a + `>
`;
    }
    function Wr(t, e) {
      var a = ii(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return Pt(e) + `...
` + Wr(a, e + 1);
      a = "";
      var c = t.fiber._debugInfo;
      if (c)
        for (var o = 0; o < c.length; o++) {
          var f = c[o].name;
          typeof f == "string" && (a += Pt(e) + "<" + f + `>
`, e++);
        }
      if (c = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        c = Jr(o, t.serverProps, e), e++;
      else if (f = pc(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          c = e;
          var d = 120 - 2 * c - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = go(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          c = Pt(c) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (c = So(
            f,
            o,
            oi(e)
          ), e++) : typeof t.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (c = qu(
            f,
            o,
            t.serverProps,
            e
          ), e++);
      var p = "";
      for (o = t.fiber.child, f = 0; o && f < t.children.length; )
        d = t.children[f], d.fiber === o ? (p += Wr(d, e), f++) : p += Aa(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += Pt(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (yc(e) + Kn(f, 120 - 2 * e) + `
`) : p + So(
          f.type,
          f.props,
          yc(e)
        );
      return a + c + p;
    }
    function vm(t) {
      try {
        return `

` + Wr(t, 0);
      } catch {
        return "";
      }
    }
    function kr(t, e, a) {
      for (var c = e, o = null, f = 0; c; )
        c === t && (f = 0), o = {
          fiber: c,
          children: o !== null ? [o] : [],
          serverProps: c === e ? a : c === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, c = c.return;
      return o !== null ? vm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function gm(t, e) {
      var a = Mt({}, t || G), c = { tag: e };
      return v.indexOf(e) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(e) !== -1 && (a.pTagInButtonScope = null), m.indexOf(e) !== -1 && e !== "address" && e !== "div" && e !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = c, e === "form" && (a.formTag = c), e === "a" && (a.aTagInScope = c), e === "button" && (a.buttonTagInScope = c), e === "nobr" && (a.nobrTagInScope = c), e === "p" && (a.pTagInButtonScope = c), e === "li" && (a.listItemTagAutoclosing = c), (e === "dd" || e === "dt") && (a.dlItemTagAutoclosing = c), e === "#document" || e === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = c), t !== null || e !== "#document" && e !== "html" && e !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function If(t, e, a) {
      switch (e) {
        case "select":
          return t === "hr" || t === "option" || t === "optgroup" || t === "script" || t === "template" || t === "#text";
        case "optgroup":
          return t === "option" || t === "#text";
        case "option":
          return t === "#text";
        case "tr":
          return t === "th" || t === "td" || t === "style" || t === "script" || t === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return t === "tr" || t === "style" || t === "script" || t === "template";
        case "colgroup":
          return t === "col" || t === "template";
        case "table":
          return t === "caption" || t === "colgroup" || t === "tbody" || t === "tfoot" || t === "thead" || t === "style" || t === "script" || t === "template";
        case "head":
          return t === "base" || t === "basefont" || t === "bgsound" || t === "link" || t === "meta" || t === "title" || t === "noscript" || t === "noframes" || t === "style" || t === "script" || t === "template";
        case "html":
          if (a) break;
          return t === "head" || t === "body" || t === "frameset";
        case "frameset":
          return t === "frame";
        case "#document":
          if (!a) return t === "html";
      }
      switch (t) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6";
        case "rp":
        case "rt":
          return H.indexOf(e) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return e == null;
        case "head":
          return a || e === null;
        case "html":
          return a && e === "#document" || e === null;
        case "body":
          return a && (e === "#document" || e === "html") || e === null;
      }
      return !0;
    }
    function Lg(t, e) {
      switch (t) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e.pTagInButtonScope;
        case "form":
          return e.formTag || e.pTagInButtonScope;
        case "li":
          return e.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return e.dlItemTagAutoclosing;
        case "button":
          return e.buttonTagInScope;
        case "a":
          return e.aTagInScope;
        case "nobr":
          return e.nobrTagInScope;
      }
      return null;
    }
    function za(t, e) {
      for (; t; ) {
        switch (t.tag) {
          case 5:
          case 26:
          case 27:
            if (t.type === e) return t;
        }
        t = t.return;
      }
      return null;
    }
    function Pf(t, e) {
      e = e || G;
      var a = e.current;
      if (e = (a = If(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : Lg(t, e), e = a || e, !e) return !0;
      var c = e.tag;
      if (e = String(!!a) + "|" + t + "|" + c, Z[e]) return !1;
      Z[e] = !0;
      var o = (e = ga) ? za(e.return, c) : null, f = e !== null && o !== null ? kr(o, e, null) : "", d = "<" + t + ">";
      return a ? (a = "", c === "table" && t === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        c,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        c,
        f
      ), e && (t = e.return, o === null || t === null || o === t && t._debugOwner === e._debugOwner || I(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          c,
          d
        );
      })), !1;
    }
    function ts(t, e, a) {
      if (a || If("#text", e, !1))
        return !0;
      if (a = "#text|" + e, Z[a]) return !1;
      Z[a] = !0;
      var c = (a = ga) ? za(a, e) : null;
      return a = a !== null && c !== null ? kr(
        c,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(t) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        e,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        e,
        a
      ), !1;
    }
    function fi(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function bo(t) {
      return t.replace(_, function(e, a) {
        return a.toUpperCase();
      });
    }
    function Sm(t, e, a) {
      var c = e.indexOf("--") === 0;
      c || (-1 < e.indexOf("-") ? C.hasOwnProperty(e) && C[e] || (C[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        bo(e.replace(de, "ms-"))
      )) : dt.test(e) ? C.hasOwnProperty(e) && C[e] || (C[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !O.test(a) || V.hasOwnProperty(a) && V[a] || (V[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(O, "")
      )), typeof a == "number" && (isNaN(a) ? it || (it = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || Jt || (Jt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? c ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : c ? t.setProperty(e, a) : typeof a != "number" || a === 0 || lt.has(e) ? e === "float" ? t.cssFloat = a : (om(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function bm(t, e, a) {
      if (e != null && typeof e != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (e && Object.freeze(e), t = t.style, a != null) {
        if (e) {
          var c = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !e.hasOwnProperty(o))
                for (var f = N[o] || [o], d = 0; d < f.length; d++)
                  c[f[d]] = o;
          }
          for (var h in e)
            if (e.hasOwnProperty(h) && (!a || a[h] !== e[h]))
              for (o = N[h] || [h], f = 0; f < o.length; f++)
                c[o[f]] = h;
          h = {};
          for (var y in e)
            for (o = N[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in c)
            if (o = c[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var D = e[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                D == null || typeof D == "boolean" || D === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var M in a)
          !a.hasOwnProperty(M) || e != null && e.hasOwnProperty(M) || (M.indexOf("--") === 0 ? t.setProperty(M, "") : M === "float" ? t.cssFloat = "" : t[M] = "");
        for (var b in e)
          p = e[b], e.hasOwnProperty(b) && a[b] !== p && Sm(t, b, p);
      } else
        for (c in e)
          e.hasOwnProperty(c) && Sm(t, c, e[c]);
    }
    function $n(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
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
          return !0;
      }
    }
    function gp(t) {
      return Wt.get(t) || t;
    }
    function Sp(t, e) {
      if (Ga.call(_h, e) && _h[e])
        return !0;
      if (oE.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = Qv.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), _h[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), _h[e] = !0;
      }
      if (iE.test(e)) {
        if (t = e.toLowerCase(), t = Qv.hasOwnProperty(t) ? t : null, t == null) return _h[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), _h[e] = !0);
      }
      return !0;
    }
    function bp(t, e) {
      var a = [], c;
      for (c in e)
        Sp(t, c) || a.push(c);
      e = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      );
    }
    function Em(t, e, a, c) {
      if (Ga.call(Xa, e) && Xa[e])
        return !0;
      var o = e.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Xa[e] = !0;
      if (typeof a == "function" && (t === "form" && e === "action" || t === "input" && e === "formAction" || t === "button" && e === "formAction"))
        return !0;
      if (c != null) {
        if (t = c.possibleRegistrationNames, c.registrationNameDependencies.hasOwnProperty(e))
          return !0;
        if (c = t.hasOwnProperty(o) ? t[o] : null, c != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            e,
            c
          ), Xa[e] = !0;
        if (zS.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), Xa[e] = !0;
      } else if (zS.test(e))
        return fE.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), Xa[e] = !0;
      if (sE.test(e) || rE.test(e)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Xa[e] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Xa[e] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Xa[e] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          e
        ), Xa[e] = !0;
      if (Yn.hasOwnProperty(o)) {
        if (o = Yn[o], o !== e)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            e,
            o
          ), Xa[e] = !0;
      } else if (e !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          e,
          o
        ), Xa[e] = !0;
      switch (e) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (e) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = e.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                e,
                e,
                a,
                e
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                e,
                e,
                a,
                e,
                e,
                e
              ), Xa[e] = !0);
          }
        case "function":
        case "symbol":
          return Xa[e] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (e) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              e,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              e,
              a
            ), Xa[e] = !0;
          }
      }
      return !0;
    }
    function wg(t, e, a) {
      var c = [], o;
      for (o in e)
        Em(t, o, e[o], a) || c.push(o);
      e = c.map(function(f) {
        return "`" + f + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      ) : 1 < c.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      );
    }
    function es(t) {
      return dE.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function ka() {
    }
    function pn(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function Fr(t) {
      var e = hn(t);
      if (e && (t = e.stateNode)) {
        var a = t[oa] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (mc(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), e = a.name, a.type === "radio" && e != null) {
              for (a = t; a.parentNode; ) a = a.parentNode;
              for (ie(e, "name"), a = a.querySelectorAll(
                'input[name="' + oe(
                  "" + e
                ) + '"][type="radio"]'
              ), e = 0; e < a.length; e++) {
                var c = a[e];
                if (c !== t && c.form === t.form) {
                  var o = c[oa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  mc(
                    c,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (e = 0; e < a.length; e++)
                c = a[e], c.form === t.form && mm(c);
            }
            break t;
          case "textarea":
            ci(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && Jn(t, !!a.multiple, e, !1);
        }
      }
    }
    function Ir(t, e, a) {
      if (u1) return t(e, a);
      u1 = !0;
      try {
        var c = t(e);
        return c;
      } finally {
        if (u1 = !1, (Ch !== null || Hh !== null) && (ja(), Ch && (e = Ch, t = Hh, Hh = Ch = null, Fr(e), t)))
          for (e = 0; e < t.length; e++) Fr(t[e]);
      }
    }
    function Wn(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var c = a[oa] || null;
      if (c === null) return null;
      a = c[e];
      t: switch (e) {
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
          (c = !c.disabled) || (t = t.type, c = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !c;
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + e + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function si() {
      if (Vv) return Vv;
      var t, e = i1, a = e.length, c, o = "value" in zf ? zf.value : zf.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (c = 1; c <= d && e[a - c] === o[f - c]; c++) ;
      return Vv = o.slice(t, 1 < c ? 1 - c : void 0);
    }
    function ls(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function Eo() {
      return !0;
    }
    function Tm() {
      return !1;
    }
    function dl(t) {
      function e(a, c, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = c, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Eo : Tm, this.isPropagationStopped = Tm, this;
      }
      return Mt(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Eo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Eo);
        },
        persist: function() {
        },
        isPersistent: Eo
      }), e;
    }
    function Yu(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = DE[t]) ? !!e[t] : !1;
    }
    function as() {
      return Yu;
    }
    function To(t, e) {
      switch (t) {
        case "keyup":
          return qE.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== RS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gu(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    function Am(t, e) {
      switch (t) {
        case "compositionend":
          return Gu(e);
        case "keypress":
          return e.which !== _S ? null : (HS = !0, CS);
        case "textInput":
          return t = e.data, t === CS && HS ? null : t;
        default:
          return null;
      }
    }
    function Pr(t, e) {
      if (Nh)
        return t === "compositionend" || !r1 && To(t, e) ? (t = si(), Vv = i1 = zf = null, Nh = !1, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
              return e.char;
            if (e.which)
              return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return US && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function zm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!GE[t.type] : e === "textarea";
    }
    function td(t) {
      if (!Wc) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function ns(t, e, a, c) {
      Ch ? Hh ? Hh.push(c) : Hh = [c] : Ch = c, e = Nn(e, "onChange"), 0 < e.length && (a = new Zv(
        "onChange",
        "change",
        null,
        a,
        c
      ), t.push({ event: a, listeners: e }));
    }
    function Ep(t) {
      le(t, 0);
    }
    function Ul(t) {
      var e = hc(t);
      if (mm(e)) return t;
    }
    function vc(t, e) {
      if (t === "change") return e;
    }
    function us() {
      T0 && (T0.detachEvent("onpropertychange", Ao), A0 = T0 = null);
    }
    function Ao(t) {
      if (t.propertyName === "value" && Ul(A0)) {
        var e = [];
        ns(
          e,
          A0,
          t,
          pn(t)
        ), Ir(Ep, e);
      }
    }
    function Jg(t, e, a) {
      t === "focusin" ? (us(), T0 = e, A0 = a, T0.attachEvent("onpropertychange", Ao)) : t === "focusout" && us();
    }
    function Dm(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Ul(A0);
    }
    function Om(t, e) {
      if (t === "click") return Ul(e);
    }
    function cs(t, e) {
      if (t === "input" || t === "change")
        return Ul(e);
    }
    function ed(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function zo(t, e) {
      if (Qa(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
      var a = Object.keys(t), c = Object.keys(e);
      if (a.length !== c.length) return !1;
      for (c = 0; c < a.length; c++) {
        var o = a[c];
        if (!Ga.call(e, o) || !Qa(t[o], e[o]))
          return !1;
      }
      return !0;
    }
    function Tp(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Ap(t, e) {
      var a = Tp(t);
      t = 0;
      for (var c; a; ) {
        if (a.nodeType === 3) {
          if (c = t + a.textContent.length, t <= e && c >= e)
            return { node: a, offset: e - t };
          t = c;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Tp(a);
      }
    }
    function zp(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? zp(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
    }
    function ld(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = yn(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = yn(t.document);
      }
      return e;
    }
    function Mm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function Dp(t, e, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      h1 || Bh == null || Bh !== yn(c) || (c = Bh, "selectionStart" in c && Mm(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), z0 && zo(z0, c) || (z0 = c, c = Nn(d1, "onSelect"), 0 < c.length && (e = new Zv(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: c }), e.target = Bh)));
    }
    function ri(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function di(t) {
      if (m1[t]) return m1[t];
      if (!xh[t]) return t;
      var e = xh[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in BS)
          return m1[t] = e[a];
      return t;
    }
    function vn(t, e) {
      GS.set(t, e), mn(e, [t]);
    }
    function Op(t) {
      for (var e = wv, a = 0; a < t.length; a++) {
        var c = t[a];
        if (typeof c == "object" && c !== null)
          if (el(c) && c.length === 2 && typeof c[0] == "string") {
            if (e !== wv && e !== S1)
              return v1;
            e = S1;
          } else return v1;
        else {
          if (typeof c == "function" || typeof c == "string" && 50 < c.length || e !== wv && e !== g1)
            return v1;
          e = g1;
        }
      }
      return e;
    }
    function Rm(t, e, a, c) {
      for (var o in t)
        Ga.call(t, o) && o[0] !== "_" && kn(o, t[o], e, a, c);
    }
    function kn(t, e, a, c, o) {
      switch (typeof e) {
        case "object":
          if (e === null) {
            e = "null";
            break;
          } else {
            if (e.$$typeof === on) {
              var f = Xt(e.type) || "…", d = e.key;
              e = e.props;
              var h = Object.keys(e), y = h.length;
              if (d == null && y === 0) {
                e = "<" + f + " />";
                break;
              }
              if (3 > c || y === 1 && h[0] === "children" && d == null) {
                e = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(c) + t,
                "<" + f
              ]), d !== null && kn(
                "key",
                d,
                a,
                c + 1,
                o
              ), t = !1;
              for (var p in e)
                p === "children" ? e.children != null && (!el(e.children) || 0 < e.children.length) && (t = !0) : Ga.call(e, p) && p[0] !== "_" && kn(
                  p,
                  e[p],
                  a,
                  c + 1,
                  o
                );
              a.push([
                "",
                t ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(e), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Op(e), p === g1 || p === wv) {
                e = JSON.stringify(e);
                break;
              } else if (p === S1) {
                for (a.push([
                  o + "  ".repeat(c) + t,
                  ""
                ]), t = 0; t < e.length; t++)
                  f = e[t], kn(
                    f[0],
                    f[1],
                    a,
                    c + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (e.status === "fulfilled") {
                if (f = a.length, kn(
                  t,
                  e.value,
                  a,
                  c,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (e.status === "rejected" && (f = a.length, kn(
                t,
                e.reason,
                a,
                c,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(c) + t,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(e)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(c) + t,
              f === "Object" ? 3 > c ? "" : "…" : f
            ]), 3 > c && Rm(e, a, c + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === JE ? "…" : JSON.stringify(e);
          break;
        case "undefined":
          e = "undefined";
          break;
        case "boolean":
          e = e ? "true" : "false";
          break;
        default:
          e = String(e);
      }
      a.push([
        o + "  ".repeat(c) + t,
        e
      ]);
    }
    function Mp(t, e, a, c) {
      var o = !0;
      for (d in t)
        d in e || (a.push([
          Jv + "  ".repeat(c) + d,
          "…"
        ]), o = !1);
      for (var f in e)
        if (f in t) {
          var d = t[f], h = e[f];
          if (d !== h) {
            if (c === 0 && f === "children")
              o = "  ".repeat(c) + f, a.push(
                [Jv + o, "…"],
                [Kv + o, "…"]
              );
            else {
              if (!(3 <= c)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === on) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Xt(h.type) || "…", o = "  ".repeat(c) + f, d = "<" + d + " … />", a.push(
                        [Jv + o, d],
                        [Kv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        VS + "  ".repeat(c) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Mp(
                        d,
                        h,
                        a,
                        c + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    VS + "  ".repeat(c) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              kn(f, d, a, c, Jv), kn(f, h, a, c, Kv);
            }
            o = !1;
          }
        } else
          a.push([
            Kv + "  ".repeat(c) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function gn(t) {
      Lt = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function Fa(t, e, a, c) {
      Re && (Of.start = e, Of.end = a, Fi.color = "warning", Fi.tooltipText = c, Fi.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          c,
          Of
        )
      ) : performance.measure(c, Of));
    }
    function ad(t, e, a) {
      Fa(t, e, a, "Reconnect");
    }
    function nd(t, e, a, c, o) {
      var f = ut(t);
      if (f !== null && Re) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        c = 0.5 > h ? c ? "tertiary-light" : "primary-light" : 10 > h ? c ? "tertiary" : "primary" : 100 > h ? c ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [KE], p = Mp(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Df && (d.lanes & o) === 0 && 100 < t.actualDuration ? (Df = !0, y[0] = $E, Fi.color = "warning", Fi.tooltipText = ZS) : (Fi.color = c, Fi.tooltipText = f), Fi.properties = y, Of.start = e, Of.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Of
          )
        ) : performance.measure(
          "​" + f,
          Of
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Au,
            void 0,
            c
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Au,
          void 0,
          c
        );
      }
    }
    function Um(t, e, a, c) {
      if (Re) {
        var o = ut(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < c.length; h++) {
            var y = c[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && kn("key", t.key, d, 0, ""), t.memoizedProps !== null && Rm(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
            start: e,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Au,
                tooltipText: t.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, t)
          ) : performance.measure("​" + o, t);
        }
      }
    }
    function Sn(t, e, a, c, o) {
      if (o !== null) {
        if (Re) {
          var f = ut(t);
          if (f !== null) {
            c = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              c.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && kn("key", t.key, c, 0, ""), t.memoizedProps !== null && Rm(t.memoizedProps, c, 0, ""), e = {
              start: e,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Au,
                  tooltipText: "A lifecycle or effect errored",
                  properties: c
                }
              }
            }, (t = t._debugTask) ? t.run(
              performance.measure.bind(
                performance,
                "​" + f,
                e
              )
            ) : performance.measure("​" + f, e);
          }
        }
      } else
        f = ut(t), f !== null && Re && (o = 1 > c ? "secondary-light" : 100 > c ? "secondary" : 500 > c ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Au,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Au,
          void 0,
          o
        ));
    }
    function Kg(t, e, a, c) {
      if (Re && !(e <= t)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", c ? c.run(
          console.timeStamp.bind(
            console,
            a,
            t,
            e,
            Lt,
            Vt,
            o
          )
        ) : console.timeStamp(
          a,
          t,
          e,
          Lt,
          Vt,
          o
        );
      }
    }
    function Rp(t, e, a, c) {
      !Re || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          t,
          e,
          Lt,
          Vt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        t,
        e,
        Lt,
        Vt,
        a
      ));
    }
    function Up(t, e, a, c) {
      !Re || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          t,
          e,
          Lt,
          Vt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        t,
        e,
        Lt,
        Vt,
        a
      ));
    }
    function $g(t, e, a, c, o, f) {
      if (Re && !(e <= t)) {
        a = [];
        for (var d = 0; d < c.length; d++) {
          var h = c[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "primary-dark",
              track: Lt,
              trackGroup: Vt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", t)
        ) : performance.measure("Recovered", t);
      }
    }
    function _m(t, e, a, c) {
      !Re || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          "Errored",
          t,
          e,
          Lt,
          Vt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        t,
        e,
        Lt,
        Vt,
        "error"
      ));
    }
    function Wg(t, e, a, c) {
      !Re || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          a,
          t,
          e,
          Lt,
          Vt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        t,
        e,
        Lt,
        Vt,
        "secondary-light"
      ));
    }
    function _p(t, e, a, c, o) {
      if (Re && !(e <= t)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "error",
              track: Lt,
              trackGroup: Vt,
              tooltipText: c ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", t)
        ) : performance.measure("Errored", t);
      }
    }
    function Cm(t, e, a) {
      !Re || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        Lt,
        Vt,
        "secondary-dark"
      );
    }
    function ud() {
      for (var t = jh, e = b1 = jh = 0; e < t; ) {
        var a = zu[e];
        zu[e++] = null;
        var c = zu[e];
        zu[e++] = null;
        var o = zu[e];
        zu[e++] = null;
        var f = zu[e];
        if (zu[e++] = null, c !== null && o !== null) {
          var d = c.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), c.pending = o;
        }
        f !== 0 && Hm(a, o, f);
      }
    }
    function Do(t, e, a, c) {
      zu[jh++] = t, zu[jh++] = e, zu[jh++] = a, zu[jh++] = c, b1 |= c, t.lanes |= c, t = t.alternate, t !== null && (t.lanes |= c);
    }
    function hi(t, e, a, c) {
      return Do(t, e, a, c), is(t);
    }
    function Yl(t, e) {
      return Do(t, null, null, e), is(t);
    }
    function Hm(t, e, a) {
      t.lanes |= a;
      var c = t.alternate;
      c !== null && (c.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, c = f.alternate, c !== null && (c.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & D0 || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - Cl(a), t = f.hiddenUpdates, c = t[o], c === null ? t[o] = [e] : c.push(e), e.lane = a | 536870912), f) : null;
    }
    function is(t) {
      if (I0 > sT)
        throw Ur = I0 = 0, P0 = P1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Ur > rT && (Ur = 0, P0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), t.alternate === null && (t.flags & 4098) !== 0 && cn(t);
      for (var e = t, a = e.return; a !== null; )
        e.alternate === null && (e.flags & 4098) !== 0 && cn(t), e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    function gc(t) {
      if (Du === null) return t;
      var e = Du(t);
      return e === void 0 ? t : e.current;
    }
    function cd(t) {
      if (Du === null) return t;
      var e = Du(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = gc(t.render), t.render !== e) ? (e = { $$typeof: hf, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function Nm(t, e) {
      if (Du === null) return !1;
      var a = t.elementType;
      e = e.type;
      var c = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (c = !0);
          break;
        case 0:
          (typeof e == "function" || o === Ql) && (c = !0);
          break;
        case 11:
          (o === hf || o === Ql) && (c = !0);
          break;
        case 14:
        case 15:
          (o === ir || o === Ql) && (c = !0);
          break;
        default:
          return !1;
      }
      return !!(c && (t = Du(a), t !== void 0 && t === Du(e)));
    }
    function mi(t) {
      Du !== null && typeof WeakSet == "function" && (qh === null && (qh = /* @__PURE__ */ new WeakSet()), qh.add(t));
    }
    function Cp(t, e, a) {
      do {
        var c = t, o = c.alternate, f = c.child, d = c.sibling, h = c.tag;
        c = c.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = c;
            break;
          case 11:
            y = c.render;
        }
        if (Du === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (c = !1, y !== null && (y = Du(y), y !== void 0 && (a.has(y) ? c = !0 : e.has(y) && (h === 1 ? c = !0 : p = !0))), qh !== null && (qh.has(t) || o !== null && qh.has(o)) && (c = !0), c && (t._debugNeedsRemount = !0), (c || p) && (o = Yl(t, 2), o !== null && vt(o, t, 2)), f === null || c || Cp(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function kg(t, e, a, c) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, LS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Bm(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Fn(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = Ct(
        t.tag,
        e,
        t.key,
        t.mode
      ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a._debugOwner = t._debugOwner, a._debugStack = t._debugStack, a._debugTask = t._debugTask, a._debugHookTypes = t._debugHookTypes, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a.selfBaseDuration = t.selfBaseDuration, a.treeBaseDuration = t.treeBaseDuration, a._debugInfo = t._debugInfo, a._debugNeedsRemount = t._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = gc(t.type);
          break;
        case 1:
          a.type = gc(t.type);
          break;
        case 11:
          a.type = cd(t.type);
      }
      return a;
    }
    function xm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function yi(t, e, a, c, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        Bm(t) && (d = 1), h = gc(h);
      else if (typeof t == "string")
        d = L(), d = Ov(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case qn:
            return e = Ct(31, a, e, o), e.elementType = qn, e.lanes = f, e;
          case df:
            return pi(
              a.children,
              o,
              f,
              e
            );
          case ia:
            d = 8, o |= Sa, o |= cc;
            break;
          case cr:
            return t = a, c = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = Ct(12, t, e, c | Rt), e.elementType = cr, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case Ji:
            return e = Ct(13, a, e, o), e.elementType = Ji, e.lanes = f, e;
          case va:
            return e = Ct(19, a, e, o), e.elementType = va, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case jn:
                  d = 10;
                  break t;
                case gh:
                  d = 9;
                  break t;
                case hf:
                  d = 11, h = cd(h);
                  break t;
                case ir:
                  d = 14;
                  break t;
                case Ql:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : el(t) ? a = "array" : t !== void 0 && t.$$typeof === on ? (a = "<" + (Xt(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = c ? sl(c) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = Ct(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = c, e;
    }
    function Sc(t, e, a) {
      return e = yi(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function pi(t, e, a, c) {
      return t = Ct(7, t, c, e), t.lanes = a, t;
    }
    function Oo(t, e, a) {
      return t = Ct(6, t, null, e), t.lanes = a, t;
    }
    function jm(t) {
      var e = Ct(18, null, null, pt);
      return e.stateNode = t, e;
    }
    function id(t, e, a) {
      return e = Ct(
        4,
        t.children !== null ? t.children : [],
        t.key,
        e
      ), e.lanes = a, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    function $l(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = E1.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: Ee(e)
        }, E1.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Ee(e)
      };
    }
    function bn(t, e) {
      bc(), Yh[Gh++] = O0, Yh[Gh++] = $v, $v = t, O0 = e;
    }
    function qm(t, e, a) {
      bc(), Ou[Mu++] = Pi, Ou[Mu++] = to, Ou[Mu++] = mr, mr = t;
      var c = Pi;
      t = to;
      var o = 32 - Cl(c) - 1;
      c &= ~(1 << o), a += 1;
      var f = 32 - Cl(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (c & (1 << d) - 1).toString(32), c >>= d, o -= d, Pi = 1 << 32 - Cl(e) + o | a << o | c, to = f + t;
      } else
        Pi = 1 << f | a << o | c, to = t;
    }
    function od(t) {
      bc(), t.return !== null && (bn(t, 1), qm(t, 1, 0));
    }
    function fd(t) {
      for (; t === $v; )
        $v = Yh[--Gh], Yh[Gh] = null, O0 = Yh[--Gh], Yh[Gh] = null;
      for (; t === mr; )
        mr = Ou[--Mu], Ou[Mu] = null, to = Ou[--Mu], Ou[Mu] = null, Pi = Ou[--Mu], Ou[Mu] = null;
    }
    function Hp() {
      return bc(), mr !== null ? { id: Pi, overflow: to } : null;
    }
    function Np(t, e) {
      bc(), Ou[Mu++] = Pi, Ou[Mu++] = to, Ou[Mu++] = mr, Pi = e.id, to = e.overflow, mr = t;
    }
    function bc() {
      Qt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function vi(t, e) {
      if (t.return === null) {
        if (Gn === null)
          Gn = {
            fiber: t,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: e
          };
        else {
          if (Gn.fiber !== t)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Gn.distanceFromLeaf > e && (Gn.distanceFromLeaf = e);
        }
        return Gn;
      }
      var a = vi(
        t.return,
        e + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === t ? (a = a[a.length - 1], a.distanceFromLeaf > e && (a.distanceFromLeaf = e), a) : (e = {
        fiber: t,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: e
      }, a.push(e), e);
    }
    function Bp() {
      Qt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Gl(t, e) {
      kc || (t = vi(t, 0), t.serverProps = null, e !== null && (e = Tv(e), t.serverTail.push(e)));
    }
    function Ia(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", c = Gn;
      throw c !== null && (Gn = null, a = vm(c)), fs(
        $l(
          Error(
            "Hydration failed because the server rendered " + (e ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          t
        )
      ), T1;
    }
    function Ym(t) {
      var e = t.stateNode, a = t.type, c = t.memoizedProps;
      switch (e[Me] = t, e[oa] = c, ua(a, c), a) {
        case "dialog":
          mt("cancel", e), mt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          mt("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < tp.length; a++)
            mt(tp[a], e);
          break;
        case "source":
          mt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          mt("error", e), mt("load", e);
          break;
        case "details":
          mt("toggle", e);
          break;
        case "input":
          ni("input", c), mt("invalid", e), Kl(e, c), Lr(
            e,
            c.value,
            c.defaultValue,
            c.checked,
            c.defaultChecked,
            c.type,
            c.name,
            !0
          );
          break;
        case "option":
          vp(e, c);
          break;
        case "select":
          ni("select", c), mt("invalid", e), wr(e, c);
          break;
        case "textarea":
          ni("textarea", c), mt("invalid", e), ui(e, c), po(
            e,
            c.value,
            c.defaultValue,
            c.children
          );
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || c.suppressHydrationWarning === !0 || Xy(e.textContent, a) ? (c.popover != null && (mt("beforetoggle", e), mt("toggle", e)), c.onScroll != null && mt("scroll", e), c.onScrollEnd != null && mt("scrollend", e), c.onClick != null && (e.onclick = ka), e = !0) : e = !1, e || Ia(t, !0);
    }
    function Gm(t) {
      for (fa = t.return; fa; )
        switch (fa.tag) {
          case 5:
          case 31:
          case 13:
            Ru = !1;
            return;
          case 27:
          case 3:
            Ru = !0;
            return;
          default:
            fa = fa.return;
        }
    }
    function gi(t) {
      if (t !== fa) return !1;
      if (!Qt)
        return Gm(t), Qt = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || af(t.type, t.memoizedProps)), a = !a), a && Ue) {
        for (a = Ue; a; ) {
          var c = vi(t, 0), o = Tv(a);
          c.serverTail.push(o), a = o.type === "Suspense" ? cf(a) : qa(a.nextSibling);
        }
        Ia(t);
      }
      if (Gm(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ue = cf(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ue = cf(t);
      } else
        e === 27 ? (e = Ue, Zc(t.type) ? (t = rS, rS = null, Ue = t) : Ue = e) : Ue = fa ? qa(t.stateNode.nextSibling) : null;
      return !0;
    }
    function Ec() {
      Ue = fa = null, kc = Qt = !1;
    }
    function os() {
      var t = Rf;
      return t !== null && (wa === null ? wa = t : wa.push.apply(
        wa,
        t
      ), Rf = null), t;
    }
    function fs(t) {
      Rf === null ? Rf = [t] : Rf.push(t);
    }
    function Tc() {
      var t = Gn;
      if (t !== null) {
        Gn = null;
        for (var e = vm(t); 0 < t.children.length; )
          t = t.children[0];
        I(t.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            e
          );
        });
      }
    }
    function Mo() {
      Xh = Wv = null, Qh = !1;
    }
    function Pa(t, e, a) {
      Ht(A1, e._currentValue, t), e._currentValue = a, Ht(z1, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== JS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = JS;
    }
    function En(t, e) {
      t._currentValue = A1.current;
      var a = z1.current;
      jt(z1, e), t._currentRenderer = a, jt(A1, e);
    }
    function sd(t, e, a) {
      for (; t !== null; ) {
        var c = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, c !== null && (c.childLanes |= e)) : c !== null && (c.childLanes & e) !== e && (c.childLanes |= e), t === a) break;
        t = t.return;
      }
      t !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Xu(t, e, a, c) {
      var o = t.child;
      for (o !== null && (o.return = t); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          t: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < e.length; y++)
              if (h.context === e[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), sd(
                  f.return,
                  a,
                  t
                ), c || (d = null);
                break t;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), sd(
            d,
            a,
            t
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === t) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Tn(t, e, a, c) {
      t = null;
      for (var o = e, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            Qa(o.pendingProps.value, d.value) || (t !== null ? t.push(h) : t = [h]);
          }
        } else if (o === Kc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(up) : t = [up]);
        }
        o = o.return;
      }
      t !== null && Xu(
        e,
        t,
        a,
        c
      ), e.flags |= 262144;
    }
    function Ro(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Qa(
          t.context._currentValue,
          t.memoizedValue
        ))
          return !0;
        t = t.next;
      }
      return !1;
    }
    function Ac(t) {
      Wv = t, Xh = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function kt(t) {
      return Qh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Xm(Wv, t);
    }
    function ss(t, e) {
      return Wv === null && Ac(t), Xm(t, e);
    }
    function Xm(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, Xh === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Xh = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else Xh = Xh.next = e;
      return a;
    }
    function rd() {
      return {
        controller: new FE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Si(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function rs(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && IE(PE, function() {
        t.controller.abort();
      });
    }
    function In(t, e, a) {
      (t & 127) !== 0 ? 0 > Fc && (Fc = El(), R0 = kv(e), D1 = e, a != null && (O1 = ut(a)), (Kt & (Bl | Vn)) !== wl && (ke = !0, _f = M0), t = nf(), e = vu(), t !== Vh || e !== U0 ? Vh = -1.1 : e !== null && (_f = M0), vr = t, U0 = e) : (t & 4194048) !== 0 && 0 > Uu && (Uu = El(), _0 = kv(e), KS = e, a != null && ($S = ut(a)), 0 > no) && (t = nf(), e = vu(), (t !== Hf || e !== gr) && (Hf = -1.1), Cf = t, gr = e);
    }
    function xp(t) {
      if (0 > Fc) {
        Fc = El(), R0 = t._debugTask != null ? t._debugTask : null, (Kt & (Bl | Vn)) !== wl && (_f = M0);
        var e = nf(), a = vu();
        e !== Vh || a !== U0 ? Vh = -1.1 : a !== null && (_f = M0), vr = e, U0 = a;
      }
      0 > Uu && (Uu = El(), _0 = t._debugTask != null ? t._debugTask : null, 0 > no) && (t = nf(), e = vu(), (t !== Hf || e !== gr) && (Hf = -1.1), Cf = t, gr = e);
    }
    function Pn() {
      var t = yr;
      return yr = 0, t;
    }
    function Uo(t) {
      var e = yr;
      return yr = t, e;
    }
    function Wl(t) {
      var e = yr;
      return yr += t, e;
    }
    function bi() {
      ht = st = -1.1;
    }
    function ze() {
      var t = st;
      return st = -1.1, t;
    }
    function hl(t) {
      0 <= t && (st = t);
    }
    function tn() {
      var t = Xe;
      return Xe = -0, t;
    }
    function Da(t) {
      0 <= t && (Xe = t);
    }
    function Oa() {
      var t = xe;
      return xe = null, t;
    }
    function en() {
      var t = ke;
      return ke = !1, t;
    }
    function Qu(t) {
      Va = El(), 0 > t.actualStartTime && (t.actualStartTime = Va);
    }
    function dd(t) {
      if (0 <= Va) {
        var e = El() - Va;
        t.actualDuration += e, t.selfBaseDuration = e, Va = -1;
      }
    }
    function ds(t) {
      if (0 <= Va) {
        var e = El() - Va;
        t.actualDuration += e, Va = -1;
      }
    }
    function kl() {
      if (0 <= Va) {
        var t = El(), e = t - Va;
        Va = -1, yr += e, Xe += e, ht = t;
      }
    }
    function jp(t) {
      xe === null && (xe = []), xe.push(t), lo === null && (lo = []), lo.push(t);
    }
    function qe() {
      Va = El(), 0 > st && (st = Va);
    }
    function Ei(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function Vu(t, e) {
      if (H0 === null) {
        var a = H0 = [];
        R1 = 0, Sr = Gy(), Zh = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return R1++, e.then(Qm, Qm), e;
    }
    function Qm() {
      if (--R1 === 0 && (-1 < Uu || (no = -1.1), H0 !== null)) {
        Zh !== null && (Zh.status = "fulfilled");
        var t = H0;
        H0 = null, Sr = 0, Zh = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function hd(t, e) {
      var a = [], c = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return t.then(
        function() {
          c.status = "fulfilled", c.value = e;
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function(o) {
          for (c.status = "rejected", c.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), c;
    }
    function Zu() {
      var t = br.current;
      return t !== null ? t : Se.pooledCache;
    }
    function _o(t, e) {
      e === null ? Ht(br, br.current, t) : Ht(br, e.pool, t);
    }
    function Vm() {
      var t = Zu();
      return t === null ? null : { parent: bl._currentValue, pool: t };
    }
    function md() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Zm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Ma(t, e, a) {
      q.actQueue !== null && (q.didUsePromise = !0);
      var c = t.thenables;
      if (a = c[a], a === void 0 ? c.push(e) : a !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), e.then(ka, ka), e = a), e._debugInfo === void 0) {
        t = performance.now(), c = e.displayName;
        var o = {
          name: typeof c == "string" ? c : "Promise",
          start: t,
          end: t,
          value: e
        };
        e._debugInfo = [{ awaited: o }], e.status !== "fulfilled" && e.status !== "rejected" && (t = function() {
          o.end = performance.now();
        }, e.then(t, t));
      }
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, hs(t), t;
        default:
          if (typeof e.status == "string")
            e.then(ka, ka);
          else {
            if (t = Se, t !== null && 100 < t.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            t = e, t.status = "pending", t.then(
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, hs(t), t;
          }
          throw Tr = e, G0 = !0, Lh;
      }
    }
    function Ra(t) {
      try {
        return nT(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Tr = e, G0 = !0, Lh) : e;
      }
    }
    function Ti() {
      if (Tr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = Tr;
      return Tr = null, G0 = !1, t;
    }
    function hs(t) {
      if (t === Lh || t === ng)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function we(t) {
      var e = Ut;
      return t != null && (Ut = e === null ? t : e.concat(t)), e;
    }
    function ra() {
      var t = Ut;
      if (t != null) {
        for (var e = t.length - 1; 0 <= e; e--)
          if (t[e].name != null) {
            var a = t[e].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function Fl(t, e, a) {
      for (var c = Object.keys(t.props), o = 0; o < c.length; o++) {
        var f = c[o];
        if (f !== "children" && f !== "key") {
          e === null && (e = Sc(t, a.mode, 0), e._debugInfo = Ut, e.return = a), I(
            e,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function An(t) {
      var e = X0;
      return X0 += 1, wh === null && (wh = md()), Ma(wh, t, e);
    }
    function da(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function zn(t, e) {
      throw e.$$typeof === Hv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (t = Object.prototype.toString.call(e), Error(
        "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function ln(t, e) {
      var a = ra();
      a !== null ? a.run(
        zn.bind(null, t, e)
      ) : zn(t, e);
    }
    function Lm(t, e) {
      var a = ut(t) || "Component";
      mb[a] || (mb[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        e,
        e,
        e
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        e,
        e,
        a,
        e,
        a
      ));
    }
    function Co(t, e) {
      var a = ra();
      a !== null ? a.run(
        Lm.bind(null, t, e)
      ) : Lm(t, e);
    }
    function yd(t, e) {
      var a = ut(t) || "Component";
      yb[a] || (yb[a] = !0, e = String(e), t.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        e
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        e,
        a
      ));
    }
    function ms(t, e) {
      var a = ra();
      a !== null ? a.run(
        yd.bind(null, t, e)
      ) : yd(t, e);
    }
    function ml(t) {
      function e(S, E) {
        if (t) {
          var z = S.deletions;
          z === null ? (S.deletions = [E], S.flags |= 16) : z.push(E);
        }
      }
      function a(S, E) {
        if (!t) return null;
        for (; E !== null; )
          e(S, E), E = E.sibling;
        return null;
      }
      function c(S) {
        for (var E = /* @__PURE__ */ new Map(); S !== null; )
          S.key !== null ? E.set(S.key, S) : E.set(S.index, S), S = S.sibling;
        return E;
      }
      function o(S, E) {
        return S = Fn(S, E), S.index = 0, S.sibling = null, S;
      }
      function f(S, E, z) {
        return S.index = z, t ? (z = S.alternate, z !== null ? (z = z.index, z < E ? (S.flags |= 67108866, E) : z) : (S.flags |= 67108866, E)) : (S.flags |= 1048576, E);
      }
      function d(S) {
        return t && S.alternate === null && (S.flags |= 67108866), S;
      }
      function h(S, E, z, X) {
        return E === null || E.tag !== 6 ? (E = Oo(
          z,
          S.mode,
          X
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ut, E) : (E = o(E, z), E.return = S, E._debugInfo = Ut, E);
      }
      function y(S, E, z, X) {
        var k = z.type;
        return k === df ? (E = D(
          S,
          E,
          z.props.children,
          X,
          z.key
        ), Fl(z, E, S), E) : E !== null && (E.elementType === k || Nm(E, z) || typeof k == "object" && k !== null && k.$$typeof === Ql && Ra(k) === E.type) ? (E = o(E, z.props), da(E, z), E.return = S, E._debugOwner = z._owner, E._debugInfo = Ut, E) : (E = Sc(z, S.mode, X), da(E, z), E.return = S, E._debugInfo = Ut, E);
      }
      function p(S, E, z, X) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = id(z, S.mode, X), E.return = S, E._debugInfo = Ut, E) : (E = o(E, z.children || []), E.return = S, E._debugInfo = Ut, E);
      }
      function D(S, E, z, X, k) {
        return E === null || E.tag !== 7 ? (E = pi(
          z,
          S.mode,
          X,
          k
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ut, E) : (E = o(E, z), E.return = S, E._debugInfo = Ut, E);
      }
      function M(S, E, z) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = Oo(
            "" + E,
            S.mode,
            z
          ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ut, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case on:
              return z = Sc(
                E,
                S.mode,
                z
              ), da(z, E), z.return = S, S = we(E._debugInfo), z._debugInfo = Ut, Ut = S, z;
            case wc:
              return E = id(
                E,
                S.mode,
                z
              ), E.return = S, E._debugInfo = Ut, E;
            case Ql:
              var X = we(E._debugInfo);
              return E = Ra(E), S = M(S, E, z), Ut = X, S;
          }
          if (el(E) || Ie(E))
            return z = pi(
              E,
              S.mode,
              z,
              null
            ), z.return = S, z._debugOwner = S, z._debugTask = S._debugTask, S = we(E._debugInfo), z._debugInfo = Ut, Ut = S, z;
          if (typeof E.then == "function")
            return X = we(E._debugInfo), S = M(
              S,
              An(E),
              z
            ), Ut = X, S;
          if (E.$$typeof === jn)
            return M(
              S,
              ss(S, E),
              z
            );
          ln(S, E);
        }
        return typeof E == "function" && Co(S, E), typeof E == "symbol" && ms(S, E), null;
      }
      function b(S, E, z, X) {
        var k = E !== null ? E.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return k !== null ? null : h(S, E, "" + z, X);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case on:
              return z.key === k ? (k = we(z._debugInfo), S = y(
                S,
                E,
                z,
                X
              ), Ut = k, S) : null;
            case wc:
              return z.key === k ? p(S, E, z, X) : null;
            case Ql:
              return k = we(z._debugInfo), z = Ra(z), S = b(
                S,
                E,
                z,
                X
              ), Ut = k, S;
          }
          if (el(z) || Ie(z))
            return k !== null ? null : (k = we(z._debugInfo), S = D(
              S,
              E,
              z,
              X,
              null
            ), Ut = k, S);
          if (typeof z.then == "function")
            return k = we(z._debugInfo), S = b(
              S,
              E,
              An(z),
              X
            ), Ut = k, S;
          if (z.$$typeof === jn)
            return b(
              S,
              E,
              ss(S, z),
              X
            );
          ln(S, z);
        }
        return typeof z == "function" && Co(S, z), typeof z == "symbol" && ms(S, z), null;
      }
      function B(S, E, z, X, k) {
        if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
          return S = S.get(z) || null, h(E, S, "" + X, k);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case on:
              return z = S.get(
                X.key === null ? z : X.key
              ) || null, S = we(X._debugInfo), E = y(
                E,
                z,
                X,
                k
              ), Ut = S, E;
            case wc:
              return S = S.get(
                X.key === null ? z : X.key
              ) || null, p(E, S, X, k);
            case Ql:
              var bt = we(X._debugInfo);
              return X = Ra(X), E = B(
                S,
                E,
                z,
                X,
                k
              ), Ut = bt, E;
          }
          if (el(X) || Ie(X))
            return z = S.get(z) || null, S = we(X._debugInfo), E = D(
              E,
              z,
              X,
              k,
              null
            ), Ut = S, E;
          if (typeof X.then == "function")
            return bt = we(X._debugInfo), E = B(
              S,
              E,
              z,
              An(X),
              k
            ), Ut = bt, E;
          if (X.$$typeof === jn)
            return B(
              S,
              E,
              z,
              ss(E, X),
              k
            );
          ln(E, X);
        }
        return typeof X == "function" && Co(E, X), typeof X == "symbol" && ms(E, X), null;
      }
      function W(S, E, z, X) {
        if (typeof z != "object" || z === null) return X;
        switch (z.$$typeof) {
          case on:
          case wc:
            Fe(S, E, z);
            var k = z.key;
            if (typeof k != "string") break;
            if (X === null) {
              X = /* @__PURE__ */ new Set(), X.add(k);
              break;
            }
            if (!X.has(k)) {
              X.add(k);
              break;
            }
            I(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                k
              );
            });
            break;
          case Ql:
            z = Ra(z), W(S, E, z, X);
        }
        return X;
      }
      function F(S, E, z, X) {
        for (var k = null, bt = null, ft = null, at = E, Ot = E = 0, _e = null; at !== null && Ot < z.length; Ot++) {
          at.index > Ot ? (_e = at, at = null) : _e = at.sibling;
          var fl = b(
            S,
            at,
            z[Ot],
            X
          );
          if (fl === null) {
            at === null && (at = _e);
            break;
          }
          k = W(
            S,
            fl,
            z[Ot],
            k
          ), t && at && fl.alternate === null && e(S, at), E = f(fl, E, Ot), ft === null ? bt = fl : ft.sibling = fl, ft = fl, at = _e;
        }
        if (Ot === z.length)
          return a(S, at), Qt && bn(S, Ot), bt;
        if (at === null) {
          for (; Ot < z.length; Ot++)
            at = M(S, z[Ot], X), at !== null && (k = W(
              S,
              at,
              z[Ot],
              k
            ), E = f(
              at,
              E,
              Ot
            ), ft === null ? bt = at : ft.sibling = at, ft = at);
          return Qt && bn(S, Ot), bt;
        }
        for (at = c(at); Ot < z.length; Ot++)
          _e = B(
            at,
            S,
            Ot,
            z[Ot],
            X
          ), _e !== null && (k = W(
            S,
            _e,
            z[Ot],
            k
          ), t && _e.alternate !== null && at.delete(
            _e.key === null ? Ot : _e.key
          ), E = f(
            _e,
            E,
            Ot
          ), ft === null ? bt = _e : ft.sibling = _e, ft = _e);
        return t && at.forEach(function(ho) {
          return e(S, ho);
        }), Qt && bn(S, Ot), bt;
      }
      function Ae(S, E, z, X) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var k = null, bt = null, ft = E, at = E = 0, Ot = null, _e = null, fl = z.next(); ft !== null && !fl.done; at++, fl = z.next()) {
          ft.index > at ? (Ot = ft, ft = null) : Ot = ft.sibling;
          var ho = b(S, ft, fl.value, X);
          if (ho === null) {
            ft === null && (ft = Ot);
            break;
          }
          _e = W(
            S,
            ho,
            fl.value,
            _e
          ), t && ft && ho.alternate === null && e(S, ft), E = f(ho, E, at), bt === null ? k = ho : bt.sibling = ho, bt = ho, ft = Ot;
        }
        if (fl.done)
          return a(S, ft), Qt && bn(S, at), k;
        if (ft === null) {
          for (; !fl.done; at++, fl = z.next())
            ft = M(S, fl.value, X), ft !== null && (_e = W(
              S,
              ft,
              fl.value,
              _e
            ), E = f(
              ft,
              E,
              at
            ), bt === null ? k = ft : bt.sibling = ft, bt = ft);
          return Qt && bn(S, at), k;
        }
        for (ft = c(ft); !fl.done; at++, fl = z.next())
          Ot = B(
            ft,
            S,
            at,
            fl.value,
            X
          ), Ot !== null && (_e = W(
            S,
            Ot,
            fl.value,
            _e
          ), t && Ot.alternate !== null && ft.delete(
            Ot.key === null ? at : Ot.key
          ), E = f(
            Ot,
            E,
            at
          ), bt === null ? k = Ot : bt.sibling = Ot, bt = Ot);
        return t && ft.forEach(function(RT) {
          return e(S, RT);
        }), Qt && bn(S, at), k;
      }
      function Zt(S, E, z, X) {
        if (typeof z == "object" && z !== null && z.type === df && z.key === null && (Fl(z, null, S), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case on:
              var k = we(z._debugInfo);
              t: {
                for (var bt = z.key; E !== null; ) {
                  if (E.key === bt) {
                    if (bt = z.type, bt === df) {
                      if (E.tag === 7) {
                        a(
                          S,
                          E.sibling
                        ), X = o(
                          E,
                          z.props.children
                        ), X.return = S, X._debugOwner = z._owner, X._debugInfo = Ut, Fl(z, X, S), S = X;
                        break t;
                      }
                    } else if (E.elementType === bt || Nm(
                      E,
                      z
                    ) || typeof bt == "object" && bt !== null && bt.$$typeof === Ql && Ra(bt) === E.type) {
                      a(
                        S,
                        E.sibling
                      ), X = o(E, z.props), da(X, z), X.return = S, X._debugOwner = z._owner, X._debugInfo = Ut, S = X;
                      break t;
                    }
                    a(S, E);
                    break;
                  } else e(S, E);
                  E = E.sibling;
                }
                z.type === df ? (X = pi(
                  z.props.children,
                  S.mode,
                  X,
                  z.key
                ), X.return = S, X._debugOwner = S, X._debugTask = S._debugTask, X._debugInfo = Ut, Fl(z, X, S), S = X) : (X = Sc(
                  z,
                  S.mode,
                  X
                ), da(X, z), X.return = S, X._debugInfo = Ut, S = X);
              }
              return S = d(S), Ut = k, S;
            case wc:
              t: {
                for (k = z, z = k.key; E !== null; ) {
                  if (E.key === z)
                    if (E.tag === 4 && E.stateNode.containerInfo === k.containerInfo && E.stateNode.implementation === k.implementation) {
                      a(
                        S,
                        E.sibling
                      ), X = o(
                        E,
                        k.children || []
                      ), X.return = S, S = X;
                      break t;
                    } else {
                      a(S, E);
                      break;
                    }
                  else e(S, E);
                  E = E.sibling;
                }
                X = id(
                  k,
                  S.mode,
                  X
                ), X.return = S, S = X;
              }
              return d(S);
            case Ql:
              return k = we(z._debugInfo), z = Ra(z), S = Zt(
                S,
                E,
                z,
                X
              ), Ut = k, S;
          }
          if (el(z))
            return k = we(z._debugInfo), S = F(
              S,
              E,
              z,
              X
            ), Ut = k, S;
          if (Ie(z)) {
            if (k = we(z._debugInfo), bt = Ie(z), typeof bt != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ft = bt.call(z);
            return ft === z ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ft) !== "[object Generator]") && (db || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), db = !0) : z.entries !== bt || H1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), H1 = !0), S = Ae(
              S,
              E,
              ft,
              X
            ), Ut = k, S;
          }
          if (typeof z.then == "function")
            return k = we(z._debugInfo), S = Zt(
              S,
              E,
              An(z),
              X
            ), Ut = k, S;
          if (z.$$typeof === jn)
            return Zt(
              S,
              E,
              ss(S, z),
              X
            );
          ln(S, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (k = "" + z, E !== null && E.tag === 6 ? (a(
          S,
          E.sibling
        ), X = o(E, k), X.return = S, S = X) : (a(S, E), X = Oo(
          k,
          S.mode,
          X
        ), X.return = S, X._debugOwner = S, X._debugTask = S._debugTask, X._debugInfo = Ut, S = X), d(S)) : (typeof z == "function" && Co(S, z), typeof z == "symbol" && ms(S, z), a(S, E));
      }
      return function(S, E, z, X) {
        var k = Ut;
        Ut = null;
        try {
          X0 = 0;
          var bt = Zt(
            S,
            E,
            z,
            X
          );
          return wh = null, bt;
        } catch (_e) {
          if (_e === Lh || _e === ng) throw _e;
          var ft = Ct(29, _e, null, S.mode);
          ft.lanes = X, ft.return = S;
          var at = ft._debugInfo = Ut;
          if (ft._debugOwner = S._debugOwner, ft._debugTask = S._debugTask, at != null) {
            for (var Ot = at.length - 1; 0 <= Ot; Ot--)
              if (typeof at[Ot].stack == "string") {
                ft._debugOwner = at[Ot], ft._debugTask = at[Ot].debugTask;
                break;
              }
          }
          return ft;
        } finally {
          Ut = k;
        }
      };
    }
    function ye(t, e) {
      var a = el(t);
      return t = !a && typeof Ie(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        e,
        a
      ), !1) : !0;
    }
    function qt(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function tu(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function al(t) {
      return {
        lane: t,
        tag: vb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function eu(t, e, a) {
      var c = t.updateQueue;
      if (c === null) return null;
      if (c = c.shared, B1 === c && !bb) {
        var o = ut(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), bb = !0;
      }
      return (Kt & Bl) !== wl ? (o = c.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), c.pending = e, e = is(t), Hm(t, null, a), e) : (Do(t, c, e, a), is(t));
    }
    function an(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, hp(t, a);
      }
    }
    function ys(t, e) {
      var a = t.updateQueue, c = t.alternate;
      if (c !== null && (c = c.updateQueue, a === c)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = e : f = f.next = e;
        } else o = f = e;
        a = {
          baseState: c.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: c.shared,
          callbacks: c.callbacks
        }, t.updateQueue = a;
        return;
      }
      t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
    }
    function Ho() {
      if (x1) {
        var t = Zh;
        if (t !== null) throw t;
      }
    }
    function lu(t, e, a, c) {
      x1 = !1;
      var o = t.updateQueue;
      Nf = !1, B1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var D = t.alternate;
        D !== null && (D = D.updateQueue, h = D.lastBaseUpdate, h !== d && (h === null ? D.firstBaseUpdate = p : h.next = p, D.lastBaseUpdate = y));
      }
      if (f !== null) {
        var M = o.baseState;
        d = 0, D = p = y = null, h = f;
        do {
          var b = h.lane & -536870913, B = b !== h.lane;
          if (B ? (_t & b) === b : (c & b) === b) {
            b !== 0 && b === Sr && (x1 = !0), D !== null && (D = D.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              b = t;
              var W = h, F = e, Ae = a;
              switch (W.tag) {
                case gb:
                  if (W = W.payload, typeof W == "function") {
                    Qh = !0;
                    var Zt = W.call(
                      Ae,
                      M,
                      F
                    );
                    if (b.mode & Sa) {
                      me(!0);
                      try {
                        W.call(Ae, M, F);
                      } finally {
                        me(!1);
                      }
                    }
                    Qh = !1, M = Zt;
                    break t;
                  }
                  M = W;
                  break t;
                case N1:
                  b.flags = b.flags & -65537 | 128;
                case vb:
                  if (Zt = W.payload, typeof Zt == "function") {
                    if (Qh = !0, W = Zt.call(
                      Ae,
                      M,
                      F
                    ), b.mode & Sa) {
                      me(!0);
                      try {
                        Zt.call(Ae, M, F);
                      } finally {
                        me(!1);
                      }
                    }
                    Qh = !1;
                  } else W = Zt;
                  if (W == null) break t;
                  M = Mt({}, M, W);
                  break t;
                case Sb:
                  Nf = !0;
              }
            }
            b = h.callback, b !== null && (t.flags |= 64, B && (t.flags |= 8192), B = o.callbacks, B === null ? o.callbacks = [b] : B.push(b));
          } else
            B = {
              lane: b,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, D === null ? (p = D = B, y = M) : D = D.next = B, d |= b;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            B = h, h = B.next, B.next = null, o.lastBaseUpdate = B, o.shared.pending = null;
          }
        } while (!0);
        D === null && (y = M), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = D, f === null && (o.shared.lanes = 0), jf |= d, t.lanes = d, t.memoizedState = M;
      }
      B1 = null;
    }
    function zc(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function wm(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          zc(a[t], e);
    }
    function No(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          zc(a[t], e);
    }
    function pd(t, e) {
      var a = Pc;
      Ht(cg, a, t), Ht(Jh, e, t), Pc = a | e.baseLanes;
    }
    function Lu(t) {
      Ht(cg, Pc, t), Ht(
        Jh,
        Jh.current,
        t
      );
    }
    function Dn(t) {
      Pc = cg.current, jt(Jh, t), jt(cg, t);
    }
    function Il(t) {
      var e = t.alternate;
      Ht(
        ol,
        ol.current & Kh,
        t
      ), Ht(Xn, t, t), _u === null && (e === null || Jh.current !== null || e.memoizedState !== null) && (_u = t);
    }
    function On(t) {
      Ht(ol, ol.current, t), Ht(Xn, t, t), _u === null && (_u = t);
    }
    function vd(t) {
      t.tag === 22 ? (Ht(ol, ol.current, t), Ht(Xn, t, t), _u === null && (_u = t)) : au(t);
    }
    function au(t) {
      Ht(ol, ol.current, t), Ht(
        Xn,
        Xn.current,
        t
      );
    }
    function yl(t) {
      jt(Xn, t), _u === t && (_u = null), jt(ol, t);
    }
    function Ai(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || Fs(a) || Vy(a)))
            return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    function gt() {
      var t = x;
      Hu === null ? Hu = [t] : Hu.push(t);
    }
    function w() {
      var t = x;
      if (Hu !== null && (io++, Hu[io] !== t)) {
        var e = ut(St);
        if (!Eb.has(e) && (Eb.add(e), Hu !== null)) {
          for (var a = "", c = 0; c <= io; c++) {
            var o = Hu[c], f = c === io ? t : o;
            for (o = c + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            e,
            a
          );
        }
      }
    }
    function wu(t) {
      t == null || el(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        x,
        typeof t
      );
    }
    function ps() {
      var t = ut(St);
      Ab.has(t) || (Ab.add(t), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        t
      ));
    }
    function Ye() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Jm(t, e) {
      if (Z0) return !1;
      if (e === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          x
        ), !1;
      t.length !== e.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        x,
        "[" + e.join(", ") + "]",
        "[" + t.join(", ") + "]"
      );
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!Qa(t[a], e[a])) return !1;
      return !0;
    }
    function Km(t, e, a, c, o, f) {
      uo = f, St = e, Hu = t !== null ? t._debugHookTypes : null, io = -1, Z0 = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = ut(St), j1.has(f) || (j1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, q.H = t !== null && t.memoizedState !== null ? Y1 : Hu !== null ? zb : q1, zr = f = (e.mode & Sa) !== pt;
      var d = U1(a, c, o);
      if (zr = !1, Wh && (d = vs(
        e,
        a,
        c,
        o
      )), f) {
        me(!0);
        try {
          d = vs(
            e,
            a,
            c,
            o
          );
        } finally {
          me(!1);
        }
      }
      return Je(t, e), d;
    }
    function Je(t, e) {
      e._debugHookTypes = Hu, e.dependencies === null ? co !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: co
      }) : e.dependencies._debugThenableState = co, q.H = L0;
      var a = ge !== null && ge.next !== null;
      if (uo = 0, Hu = x = Tl = ge = St = null, io = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), og = !1, V0 = 0, co = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || Al || (t = t.dependencies, t !== null && Ro(t) && (Al = !0)), G0 ? (G0 = !1, t = !0) : t = !1, t && (e = ut(e) || "Unknown", Tb.has(e) || j1.has(e) || (Tb.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function vs(t, e, a, c) {
      St = t;
      var o = 0;
      do {
        if (Wh && (co = null), V0 = 0, Wh = !1, o >= cT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Z0 = !1, Tl = ge = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        io = -1, q.H = Db, f = U1(e, a, c);
      } while (Wh);
      return f;
    }
    function gs() {
      var t = q.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? Es(e) : e, t = t.useState()[0], (ge !== null ? ge.memoizedState : null) !== t && (St.flags |= 1024), e;
    }
    function zi() {
      var t = fg !== 0;
      return fg = 0, t;
    }
    function Ss(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & cc) !== pt ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function Dc(t) {
      if (og) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        og = !1;
      }
      uo = 0, Hu = Tl = ge = St = null, io = -1, x = null, Wh = !1, V0 = fg = 0, co = null;
    }
    function Pe() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Tl === null ? St.memoizedState = Tl = t : Tl = Tl.next = t, Tl;
    }
    function te() {
      if (ge === null) {
        var t = St.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = ge.next;
      var e = Tl === null ? St.memoizedState : Tl.next;
      if (e !== null)
        Tl = e, ge = t;
      else {
        if (t === null)
          throw St.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        ge = t, t = {
          memoizedState: ge.memoizedState,
          baseState: ge.baseState,
          baseQueue: ge.baseQueue,
          queue: ge.queue,
          next: null
        }, Tl === null ? St.memoizedState = Tl = t : Tl = Tl.next = t;
      }
      return Tl;
    }
    function bs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Es(t) {
      var e = V0;
      return V0 += 1, co === null && (co = md()), t = Ma(co, t, e), e = St, (Tl === null ? e.memoizedState : Tl.next) === null && (e = e.alternate, q.H = e !== null && e.memoizedState !== null ? Y1 : q1), t;
    }
    function Ju(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return Es(t);
        if (t.$$typeof === jn) return kt(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function Ua(t) {
      var e = null, a = St.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var c = St.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (e = {
          data: c.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = bs(), St.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || Z0)
        for (a = e.data[e.index] = Array(t), c = 0; c < t; c++)
          a[c] = l1;
      else
        a.length !== t && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          t
        );
      return e.index++, a;
    }
    function _a(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Bo(t, e, a) {
      var c = Pe();
      if (a !== void 0) {
        var o = a(e);
        if (zr) {
          me(!0);
          try {
            a(e);
          } finally {
            me(!1);
          }
        }
      } else o = e;
      return c.memoizedState = c.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, c.queue = t, t = t.dispatch = Fg.bind(
        null,
        St,
        t
      ), [c.memoizedState, t];
    }
    function Di(t) {
      var e = te();
      return Oc(e, ge, t);
    }
    function Oc(t, e, a) {
      var c = t.queue;
      if (c === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      c.lastRenderedReducer = a;
      var o = t.baseQueue, f = c.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        e.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), e.baseQueue = o = f, c.pending = null;
      }
      if (f = t.baseState, o === null) t.memoizedState = f;
      else {
        e = o.next;
        var h = d = null, y = null, p = e, D = !1;
        do {
          var M = p.lane & -536870913;
          if (M !== p.lane ? (_t & M) === M : (uo & M) === M) {
            var b = p.revertLane;
            if (b === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), M === Sr && (D = !0);
            else if ((uo & b) === b) {
              p = p.next, b === Sr && (D = !0);
              continue;
            } else
              M = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = M, d = f) : y = y.next = M, St.lanes |= b, jf |= b;
            M = p.action, zr && a(f, M), f = p.hasEagerState ? p.eagerState : a(f, M);
          } else
            b = {
              lane: M,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = b, d = f) : y = y.next = b, St.lanes |= M, jf |= M;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !Qa(f, t.memoizedState) && (Al = !0, D && (a = Zh, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, c.lastRenderedState = f;
      }
      return o === null && (c.lanes = 0), [t.memoizedState, c.dispatch];
    }
    function Oi(t) {
      var e = te(), a = e.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = t;
      var c = a.dispatch, o = a.pending, f = e.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = t(f, d.action), d = d.next;
        while (d !== o);
        Qa(f, e.memoizedState) || (Al = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, c];
    }
    function xo(t, e, a) {
      var c = St, o = Pe();
      if (Qt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        $h || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), $h = !0);
      } else {
        if (f = e(), $h || (a = e(), Qa(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), $h = !0)), Se === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (_t & 127) !== 0 || $m(c, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Ui(
        Mc.bind(null, c, a, t),
        [t]
      ), c.flags |= 2048, nu(
        Cu | La,
        { destroy: void 0 },
        Wm.bind(
          null,
          c,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Mi(t, e, a) {
      var c = St, o = te(), f = Qt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !$h) {
        var d = e();
        Qa(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), $h = !0);
      }
      (d = !Qa(
        (ge || o).memoizedState,
        a
      )) && (o.memoizedState = a, Al = !0), o = o.queue;
      var h = Mc.bind(null, c, o, t);
      if (nl(2048, La, h, [t]), o.getSnapshot !== e || d || Tl !== null && Tl.memoizedState.tag & Cu) {
        if (c.flags |= 2048, nu(
          Cu | La,
          { destroy: void 0 },
          Wm.bind(
            null,
            c,
            o,
            a,
            e
          ),
          null
        ), Se === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (uo & 127) !== 0 || $m(c, e, a);
      }
      return a;
    }
    function $m(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = St.updateQueue, e === null ? (e = bs(), St.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function Wm(t, e, a, c) {
      e.value = a, e.getSnapshot = c, Rc(e) && km(t);
    }
    function Mc(t, e, a) {
      return a(function() {
        Rc(e) && (In(2, "updateSyncExternalStore()", t), km(t));
      });
    }
    function Rc(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !Qa(t, a);
      } catch {
        return !0;
      }
    }
    function km(t) {
      var e = Yl(t, 2);
      e !== null && vt(e, t, 2);
    }
    function gd(t) {
      var e = Pe();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), zr) {
          me(!0);
          try {
            a();
          } finally {
            me(!1);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _a,
        lastRenderedState: t
      }, e;
    }
    function Uc(t) {
      t = gd(t);
      var e = t.queue, a = zd.bind(null, St, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function Ri(t) {
      var e = Pe();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Rs.bind(
        null,
        St,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function Ts(t, e) {
      var a = te();
      return jo(a, ge, t, e);
    }
    function jo(t, e, a, c) {
      return t.baseState = a, Oc(
        t,
        ge,
        typeof c == "function" ? c : _a
      );
    }
    function As(t, e) {
      var a = te();
      return ge !== null ? jo(a, ge, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }
    function qp(t, e, a, c, o) {
      if (pl(t))
        throw Error("Cannot update form state while rendering.");
      if (t = e.action, t !== null) {
        var f = {
          payload: o,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        q.T !== null ? a(!0) : f.isTransition = !1, c(f), a = e.pending, a === null ? (f.next = e.pending = f, _c(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function _c(t, e) {
      var a = e.action, c = e.payload, o = t.state;
      if (e.isTransition) {
        var f = q.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), q.T = d;
        try {
          var h = a(o, c), y = q.S;
          y !== null && y(d, h), Fm(t, e, h);
        } catch (p) {
          zs(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), q.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, c), Fm(t, e, d);
        } catch (p) {
          zs(t, e, p);
        }
    }
    function Fm(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (q.asyncTransitions++, a.then(_i, _i), a.then(
        function(c) {
          Ku(t, e, c);
        },
        function(c) {
          return zs(t, e, c);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Ku(t, e, a);
    }
    function Ku(t, e, a) {
      e.status = "fulfilled", e.value = a, Sd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, _c(t, a)));
    }
    function zs(t, e, a) {
      var c = t.pending;
      if (t.pending = null, c !== null) {
        c = c.next;
        do
          e.status = "rejected", e.reason = a, Sd(e), e = e.next;
        while (e !== c);
      }
      t.action = null;
    }
    function Sd(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function $u(t, e) {
      return e;
    }
    function Ca(t, e) {
      if (Qt) {
        var a = Se.formState;
        if (a !== null) {
          t: {
            var c = St;
            if (Qt) {
              if (Ue) {
                e: {
                  for (var o = Ue, f = Ru; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = qa(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === iS || f === s2 ? o : null;
                }
                if (o) {
                  Ue = qa(
                    o.nextSibling
                  ), c = o.data === iS;
                  break t;
                }
              }
              Ia(c);
            }
            c = !1;
          }
          c && (e = a[0]);
        }
      }
      return a = Pe(), a.memoizedState = a.baseState = e, c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $u,
        lastRenderedState: e
      }, a.queue = c, a = zd.bind(
        null,
        St,
        c
      ), c.dispatch = a, c = gd(!1), f = Rs.bind(
        null,
        St,
        !1,
        c.queue
      ), c = Pe(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, c.queue = o, a = qp.bind(
        null,
        St,
        o,
        f,
        a
      ), o.dispatch = a, c.memoizedState = t, [e, a, !1];
    }
    function Cc(t) {
      var e = te();
      return bd(e, ge, t);
    }
    function bd(t, e, a) {
      if (e = Oc(
        t,
        e,
        $u
      )[0], t = Di(_a)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var c = Es(e);
        } catch (d) {
          throw d === Lh ? ng : d;
        }
      else c = e;
      e = te();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (St.flags |= 2048, nu(
        Cu | La,
        { destroy: void 0 },
        Im.bind(null, o, a),
        null
      )), [c, f, t];
    }
    function Im(t, e) {
      t.action = e;
    }
    function Hc(t) {
      var e = te(), a = ge;
      if (a !== null)
        return bd(e, a, t);
      te(), e = e.memoizedState, a = te();
      var c = a.queue.dispatch;
      return a.memoizedState = t, [e, c, !1];
    }
    function nu(t, e, a, c) {
      return t = { tag: t, create: a, deps: c, inst: e, next: null }, e = St.updateQueue, e === null && (e = bs(), St.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (c = a.next, a.next = t, t.next = c, e.lastEffect = t), t;
    }
    function Ed(t) {
      var e = Pe();
      return t = { current: t }, e.memoizedState = t;
    }
    function Nc(t, e, a, c) {
      var o = Pe();
      St.flags |= t, o.memoizedState = nu(
        Cu | e,
        { destroy: void 0 },
        a,
        c === void 0 ? null : c
      );
    }
    function nl(t, e, a, c) {
      var o = te();
      c = c === void 0 ? null : c;
      var f = o.memoizedState.inst;
      ge !== null && c !== null && Jm(c, ge.memoizedState.deps) ? o.memoizedState = nu(e, f, a, c) : (St.flags |= t, o.memoizedState = nu(
        Cu | e,
        f,
        a,
        c
      ));
    }
    function Ui(t, e) {
      (St.mode & cc) !== pt ? Nc(276826112, La, t, e) : Nc(8390656, La, t, e);
    }
    function Yp(t) {
      St.flags |= 4;
      var e = St.updateQueue;
      if (e === null)
        e = bs(), St.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function Ds(t) {
      var e = Pe(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Kt & Bl) !== wl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function qo(t) {
      var e = te().memoizedState;
      return Yp({ ref: e, nextImpl: t }), function() {
        if ((Kt & Bl) !== wl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function Pl(t, e) {
      var a = 4194308;
      return (St.mode & cc) !== pt && (a |= 134217728), Nc(a, Qn, t, e);
    }
    function Ha(t, e) {
      if (typeof e == "function") {
        t = t();
        var a = e(t);
        return function() {
          typeof a == "function" ? a() : e(null);
        };
      }
      if (e != null)
        return e.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(e).join(", ") + "}"
        ), t = t(), e.current = t, function() {
          e.current = null;
        };
    }
    function uu(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null;
      var c = 4194308;
      (St.mode & cc) !== pt && (c |= 134217728), Nc(
        c,
        Qn,
        Ha.bind(null, e, t),
        a
      );
    }
    function Yo(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null, nl(
        4,
        Qn,
        Ha.bind(null, e, t),
        a
      );
    }
    function Td(t, e) {
      return Pe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function Mn(t, e) {
      var a = te();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      return e !== null && Jm(e, c[1]) ? c[0] : (a.memoizedState = [t, e], t);
    }
    function ta(t, e) {
      var a = Pe();
      e = e === void 0 ? null : e;
      var c = t();
      if (zr) {
        me(!0);
        try {
          t();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function De(t, e) {
      var a = te();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      if (e !== null && Jm(e, c[1]))
        return c[0];
      if (c = t(), zr) {
        me(!0);
        try {
          t();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function Go(t, e) {
      var a = Pe();
      return ee(a, t, e);
    }
    function cu(t, e) {
      var a = te();
      return Ke(
        a,
        ge.memoizedState,
        t,
        e
      );
    }
    function Tt(t, e) {
      var a = te();
      return ge === null ? ee(a, t, e) : Ke(
        a,
        ge.memoizedState,
        t,
        e
      );
    }
    function ee(t, e, a) {
      return a === void 0 || (uo & 1073741824) !== 0 && (_t & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Ko(), St.lanes |= t, jf |= t, a);
    }
    function Ke(t, e, a, c) {
      return Qa(a, e) ? a : Jh.current !== null ? (t = ee(t, a, c), Qa(t, e) || (Al = !0), t) : (uo & 42) === 0 || (uo & 1073741824) !== 0 && (_t & 261930) === 0 ? (Al = !0, t.memoizedState = a) : (t = Ko(), St.lanes |= t, jf |= t, e);
    }
    function _i() {
      q.asyncTransitions--;
    }
    function Ci(t, e, a, c, o) {
      var f = It.p;
      It.p = f !== 0 && f < Hl ? f : Hl;
      var d = q.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), q.T = h, Rs(t, !1, e, a);
      try {
        var y = o(), p = q.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          q.asyncTransitions++, y.then(_i, _i);
          var D = hd(
            y,
            c
          );
          Hi(
            t,
            e,
            D,
            Xl(t)
          );
        } else
          Hi(
            t,
            e,
            c,
            Xl(t)
          );
      } catch (M) {
        Hi(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: M },
          Xl(t)
        );
      } finally {
        It.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), q.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Wu(t, e, a, c) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Os(t).queue;
      xp(t), Ci(
        t,
        o,
        e,
        xr,
        a === null ? Gt : function() {
          return Xo(t), a(c);
        }
      );
    }
    function Os(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: xr,
        baseState: xr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _a,
          lastRenderedState: xr
        },
        next: null
      };
      var a = {};
      return e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _a,
          lastRenderedState: a
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Xo(t) {
      q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = Os(t);
      e.next === null && (e = t.alternate.memoizedState), Hi(
        t,
        e.next.queue,
        {},
        Xl(t)
      );
    }
    function Bc() {
      var t = gd(!1);
      return t = Ci.bind(
        null,
        St,
        t.queue,
        !0,
        !1
      ), Pe().memoizedState = t, [!1, t];
    }
    function Gp() {
      var t = Di(_a)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : Es(t),
        e
      ];
    }
    function He() {
      var t = Oi(_a)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : Es(t),
        e
      ];
    }
    function ku() {
      return kt(up);
    }
    function Ms() {
      var t = Pe(), e = Se.identifierPrefix;
      if (Qt) {
        var a = to, c = Pi;
        a = (c & ~(1 << 32 - Cl(c) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = fg++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = uT++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function Ad() {
      return Pe().memoizedState = Xp.bind(
        null,
        St
      );
    }
    function Xp(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var c = Xl(a), o = al(c), f = eu(a, o, c);
            f !== null && (In(c, "refresh()", t), vt(f, a, c), an(f, a, c)), t = rd(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function Fg(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Xl(t);
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      pl(t) ? Ge(e, o) : (o = hi(t, e, o, c), o !== null && (In(c, "dispatch()", t), vt(o, t, c), Us(o, e, c)));
    }
    function zd(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Xl(t), Hi(t, e, a, c) && In(c, "setState()", t);
    }
    function Hi(t, e, a, c) {
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (pl(t)) Ge(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = q.H;
          q.H = oc;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Qa(y, h))
              return Do(t, e, o, 0), Se === null && ud(), !1;
          } catch {
          } finally {
            q.H = d;
          }
        }
        if (a = hi(t, e, o, c), a !== null)
          return vt(a, t, c), Us(a, e, c), !0;
      }
      return !1;
    }
    function Rs(t, e, a, c) {
      if (q.T === null && Sr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), c = {
        lane: 2,
        revertLane: Gy(),
        gesture: null,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, pl(t)) {
        if (e)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        e = hi(
          t,
          a,
          c,
          2
        ), e !== null && (In(2, "setOptimistic()", t), vt(e, t, 2));
    }
    function pl(t) {
      var e = t.alternate;
      return t === St || e !== null && e === St;
    }
    function Ge(t, e) {
      Wh = og = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Us(t, e, a) {
      if ((a & 4194048) !== 0) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, hp(t, a);
      }
    }
    function Ni(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        jb.has(e) || (jb.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function Qo(t, e, a, c) {
      var o = t.memoizedState, f = a(c, o);
      if (t.mode & Sa) {
        me(!0);
        try {
          f = a(c, o);
        } finally {
          me(!1);
        }
      }
      f === void 0 && (e = Xt(e) || "Component", Hb.has(e) || (Hb.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : Mt({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function Dd(t, e, a, c, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          c,
          f,
          d
        ), t.mode & Sa) {
          me(!0);
          try {
            a = h.shouldComponentUpdate(
              c,
              f,
              d
            );
          } finally {
            me(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Xt(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !zo(a, c) || !zo(o, f) : !0;
    }
    function iu(t, e, a, c) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, c), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, c), e.state !== o && (t = ut(t) || "Component", Mb.has(t) || (Mb.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), G1.enqueueReplaceState(
        e,
        e.state,
        null
      ));
    }
    function ou(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var c in e)
          c !== "ref" && (a[c] = e[c]);
      }
      if (t = t.defaultProps) {
        a === e && (a = Mt({}, a));
        for (var o in t)
          a[o] === void 0 && (a[o] = t[o]);
      }
      return a;
    }
    function Od(t) {
      p1(t), console.warn(
        `%s

%s
`,
        kh ? "An error occurred in the <" + kh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Md(t) {
      var e = kh ? "The above error occurred in the <" + kh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((X1 || "Anonymous") + ".");
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var c = t.environmentName;
        t = [
          `%o

%s

%s
`,
          t,
          e,
          a
        ].slice(0), typeof t[0] == "string" ? t.splice(
          0,
          1,
          g2 + " " + t[0],
          S2,
          Bg + c + Bg,
          b2
        ) : t.splice(
          0,
          0,
          g2,
          S2,
          Bg + c + Bg,
          b2
        ), t.unshift(console), c = OT.apply(console.error, t), c();
      } else
        console.error(
          `%o

%s

%s
`,
          t,
          e,
          a
        );
    }
    function Pm(t) {
      p1(t);
    }
    function _s(t, e) {
      try {
        kh = e.source ? ut(e.source) : null, X1 = null;
        var a = e.value;
        if (q.actQueue !== null)
          q.thrownErrors.push(a);
        else {
          var c = t.onUncaughtError;
          c(a, { componentStack: e.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function ty(t, e, a) {
      try {
        kh = a.source ? ut(a.source) : null, X1 = ut(e);
        var c = t.onCaughtError;
        c(a.value, {
          componentStack: a.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Rd(t, e, a) {
      return a = al(a), a.tag = N1, a.payload = { element: null }, a.callback = function() {
        I(e.source, _s, t, e);
      }, a;
    }
    function Ud(t) {
      return t = al(t), t.tag = N1, t;
    }
    function _d(t, e, a, c) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = c.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          mi(a), I(
            c.source,
            ty,
            e,
            a,
            c
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        mi(a), I(
          c.source,
          ty,
          e,
          a,
          c
        ), typeof o != "function" && (Yf === null ? Yf = /* @__PURE__ */ new Set([this]) : Yf.add(this)), eT(this, c), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          ut(a) || "Unknown"
        );
      });
    }
    function ey(t, e, a, c, o) {
      if (a.flags |= 32768, Eu && Io(t, o), c !== null && typeof c == "object" && typeof c.then == "function") {
        if (e = a.alternate, e !== null && Tn(
          e,
          a,
          o,
          !0
        ), Qt && (kc = !0), a = Xn.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return _u === null ? Wo() : a.alternate === null && Qe === fo && (Qe = dg), a.flags &= -257, a.flags |= 65536, a.lanes = o, c === ug ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([c]) : e.add(c), kd(t, c, o)), !1;
            case 22:
              return a.flags |= 65536, c === ug ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([c])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([c]) : a.add(c)), kd(t, c, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return kd(t, c, o), Wo(), !1;
      }
      if (Qt)
        return kc = !0, e = Xn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, c !== T1 && fs(
          $l(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: c }
            ),
            a
          )
        )) : (c !== T1 && fs(
          $l(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: c }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, c = $l(c, a), o = Rd(
          t.stateNode,
          c,
          o
        ), ys(t, o), Qe !== Bf && (Qe = Dr)), !1;
      var f = $l(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: c }
        ),
        a
      );
      if (k0 === null ? k0 = [f] : k0.push(f), Qe !== Bf && (Qe = Dr), e === null) return !0;
      c = $l(c, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = Rd(
              a.stateNode,
              c,
              t
            ), ys(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Yf === null || !Yf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Ud(o), _d(
                o,
                t,
                a,
                c
              ), ys(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function vl(t, e, a, c) {
      e.child = t === null ? pb(e, null, a, c) : Ar(
        e,
        t.child,
        a,
        c
      );
    }
    function Qp(t, e, a, c, o) {
      a = a.render;
      var f = e.ref;
      if ("ref" in c) {
        var d = {};
        for (var h in c)
          h !== "ref" && (d[h] = c[h]);
      } else d = c;
      return Ac(e), c = Km(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = zi(), t !== null && !Al ? (Ss(t, e, o), Rn(t, e, o)) : (Qt && h && od(e), e.flags |= 1, vl(t, e, c, o), e.child);
    }
    function ly(t, e, a, c, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !Bm(f) && f.defaultProps === void 0 && a.compare === null ? (a = gc(f), e.tag = 15, e.type = a, Vo(e, f), ay(
          t,
          e,
          a,
          c,
          o
        )) : (t = yi(
          a.type,
          null,
          c,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !xd(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : zo, a(d, c) && t.ref === e.ref)
          return Rn(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = Fn(f, c), t.ref = e.ref, t.return = e, e.child = t;
    }
    function ay(t, e, a, c, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (zo(f, c) && t.ref === e.ref && e.type === t.type)
          if (Al = !1, e.pendingProps = c = f, xd(t, o))
            (t.flags & 131072) !== 0 && (Al = !0);
          else
            return e.lanes = t.lanes, Rn(t, e, o);
      }
      return iy(
        t,
        e,
        a,
        c,
        o
      );
    }
    function ny(t, e, a, c) {
      var o = c.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: D0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), c.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, t !== null) {
            for (c = e.child = t.child, o = 0; c !== null; )
              o = o | c.lanes | c.childLanes, c = c.sibling;
            c = o & ~f;
          } else c = 0, e.child = null;
          return uy(
            t,
            e,
            f,
            a,
            c
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && _o(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? pd(e, f) : Lu(e), vd(e);
        else
          return c = e.lanes = 536870912, uy(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            c
          );
      } else
        f !== null ? (_o(e, f.cachePool), pd(e, f), au(e), e.memoizedState = null) : (t !== null && _o(e, null), Lu(e), au(e));
      return vl(t, e, o, a), e.child;
    }
    function Bi(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: D0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function uy(t, e, a, c, o) {
      var f = Zu();
      return f = f === null ? null : {
        parent: bl._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && _o(e, null), Lu(e), vd(e), t !== null && Tn(t, e, c, !0), e.childLanes = o, null;
    }
    function Cs(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = Ns(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function cy(t, e, a) {
      return Ar(e, t.child, null, a), t = Cs(
        e,
        e.pendingProps
      ), t.flags |= 2, yl(e), e.memoizedState = null, t;
    }
    function Vp(t, e, a) {
      var c = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (Qt) {
          if (c.mode === "hidden")
            return t = Cs(e, c), e.lanes = 536870912, Bi(null, t);
          if (On(e), (t = Ue) ? (a = ae(
            t,
            Ru
          ), a = a !== null && a.data === Cr ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Hp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = jm(a), c.return = e, e.child = c, fa = e, Ue = null)) : a = null, a === null)
            throw Gl(e, t), Ia(e);
          return e.lanes = 536870912, null;
        }
        return Cs(e, c);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (On(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = cy(
              t,
              e,
              a
            );
          else if (e.memoizedState !== null)
            e.child = t.child, e.flags |= 128, e = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Bp(), (a & 536870912) !== 0 && $o(e), Al || Tn(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, Al || o) {
          if (c = Se, c !== null && (d = mp(
            c,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Yl(t, d), vt(c, t, d), Q1;
          Wo(), e = cy(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, Ue = qa(
            d.nextSibling
          ), fa = e, Qt = !0, Rf = null, kc = !1, Gn = null, Ru = !1, t !== null && Np(e, t), e = Cs(e, c), e.flags |= 4096;
        return e;
      }
      return f = t.child, c = { mode: c.mode, children: c.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && $o(e), t = Fn(f, c), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Hs(t, e) {
      var a = e.ref;
      if (a === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (t === null || t.ref !== a) && (e.flags |= 4194816);
      }
    }
    function iy(t, e, a, c, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Xt(a) || "Unknown";
        qb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), qb[f] = !0);
      }
      return e.mode & Sa && ic.recordLegacyContextWarning(
        e,
        null
      ), t === null && (Vo(e, e.type), a.contextTypes && (f = Xt(a) || "Unknown", Gb[f] || (Gb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Ac(e), a = Km(
        t,
        e,
        a,
        c,
        void 0,
        o
      ), c = zi(), t !== null && !Al ? (Ss(t, e, o), Rn(t, e, o)) : (Qt && c && od(e), e.flags |= 1, vl(t, e, a, o), e.child);
    }
    function oy(t, e, a, c, o, f) {
      return Ac(e), io = -1, Z0 = t !== null && t.type !== e.type, e.updateQueue = null, a = vs(
        e,
        c,
        a,
        o
      ), Je(t, e), c = zi(), t !== null && !Al ? (Ss(t, e, f), Rn(t, e, f)) : (Qt && c && od(e), e.flags |= 1, vl(t, e, a, f), e.child);
    }
    function xi(t, e, a, c, o) {
      switch (At(e)) {
        case !1:
          var f = e.stateNode, d = new e.type(
            e.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          e.flags |= 128, e.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (e.lanes |= h, d = Se, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Ud(h), _d(
            h,
            d,
            e,
            $l(f, e)
          ), ys(e, h);
      }
      if (Ac(e), e.stateNode === null) {
        if (d = Mf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== jn) && !xb.has(a) && (xb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === gh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Xt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = kt(f)), f = new a(c, d), e.mode & Sa) {
          me(!0);
          try {
            f = new a(c, d);
          } finally {
            me(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = G1, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = Ob, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Xt(a) || "Component", Rb.has(d) || (Rb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Xt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _b.has(f) || (_b.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = e.stateNode, d = Xt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Bb.has(a) && (Bb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Nb.has(a) && (Nb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Xt(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== c, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Ub.has(a) || (Ub.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Xt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || el(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = c, f.state = e.memoizedState, f.refs = {}, qt(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? kt(d) : Mf, f.state === c && (d = Xt(a) || "Component", Cb.has(d) || (Cb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & Sa && ic.recordLegacyContextWarning(
          e,
          f
        ), ic.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Qo(
          e,
          a,
          d,
          c
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          ut(e) || "Component"
        ), G1.enqueueReplaceState(
          f,
          f.state,
          null
        )), lu(e, c, f, o), Ho(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== pt && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var D = e.memoizedProps;
        h = ou(a, D), f.props = h;
        var M = f.context;
        y = a.contextType, d = Mf, typeof y == "object" && y !== null && (d = kt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", D = e.pendingProps !== D, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (D || M !== d) && iu(
          e,
          f,
          c,
          d
        ), Nf = !1;
        var b = e.memoizedState;
        f.state = b, lu(e, c, f, o), Ho(), M = e.memoizedState, D || b !== M || Nf ? (typeof p == "function" && (Qo(
          e,
          a,
          p,
          c
        ), M = e.memoizedState), (h = Nf || Dd(
          e,
          a,
          h,
          c,
          b,
          M,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== pt && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== pt && (e.flags |= 134217728), e.memoizedProps = c, e.memoizedState = M), f.props = c, f.state = M, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== pt && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, tu(t, e), d = e.memoizedProps, y = ou(a, d), f.props = y, p = e.pendingProps, b = f.context, M = a.contextType, h = Mf, typeof M == "object" && M !== null && (h = kt(M)), D = a.getDerivedStateFromProps, (M = typeof D == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || b !== h) && iu(
          e,
          f,
          c,
          h
        ), Nf = !1, b = e.memoizedState, f.state = b, lu(e, c, f, o), Ho();
        var B = e.memoizedState;
        d !== p || b !== B || Nf || t !== null && t.dependencies !== null && Ro(t.dependencies) ? (typeof D == "function" && (Qo(
          e,
          a,
          D,
          c
        ), B = e.memoizedState), (y = Nf || Dd(
          e,
          a,
          y,
          c,
          b,
          B,
          h
        ) || t !== null && t.dependencies !== null && Ro(t.dependencies)) ? (M || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(c, B, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          c,
          B,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && b === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && b === t.memoizedState || (e.flags |= 1024), e.memoizedProps = c, e.memoizedState = B), f.props = c, f.state = B, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && b === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && b === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, Hs(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, $f(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, Va = -1;
        else if (a = lb(h), e.mode & Sa) {
          me(!0);
          try {
            lb(h);
          } finally {
            me(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = Ar(
          e,
          t.child,
          null,
          o
        ), e.child = Ar(
          e,
          null,
          a,
          o
        )) : vl(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = Rn(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== c && (Fh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        ut(e) || "a component"
      ), Fh = !0), t;
    }
    function fy(t, e, a, c) {
      return Ec(), e.flags |= 256, vl(t, e, a, c), e.child;
    }
    function Vo(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = Xt(e) || "Unknown", Xb[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), Xb[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = Xt(e) || "Unknown", Yb[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), Yb[e] = !0));
    }
    function Zo(t) {
      return { baseLanes: t, cachePool: Vm() };
    }
    function Cd(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= dn), t;
    }
    function Hd(t, e, a) {
      var c, o = e.pendingProps;
      P(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((c = d) || (c = t !== null && t.memoizedState === null ? !1 : (ol.current & Q0) !== 0), c && (f = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Qt) {
          if (f ? Il(e) : au(e), (t = Ue) ? (a = ae(
            t,
            Ru
          ), a = a !== null && a.data !== Cr ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Hp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = jm(a), c.return = e, e.child = c, fa = e, Ue = null)) : a = null, a === null)
            throw Gl(e, t), Ia(e);
          return Vy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          au(e);
          var y = e.mode;
          return h = Ns(
            { mode: "hidden", children: h },
            y
          ), o = pi(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = Zo(a), o.childLanes = Cd(
            t,
            c,
            a
          ), e.memoizedState = V1, Bi(
            null,
            o
          );
        }
        return Il(e), sy(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var D = p.dehydrated;
        if (D !== null) {
          if (d)
            e.flags & 256 ? (Il(e), e.flags &= -257, e = Nd(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (au(e), e.child = t.child, e.flags |= 128, e = null) : (au(e), h = o.fallback, y = e.mode, o = Ns(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = pi(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, Ar(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = Zo(a), o.childLanes = Cd(
              t,
              c,
              a
            ), e.memoizedState = V1, e = Bi(
              null,
              o
            ));
          else if (Il(e), Bp(), (a & 536870912) !== 0 && $o(e), Vy(
            D
          )) {
            if (c = D.nextSibling && D.nextSibling.dataset, c) {
              h = c.dgst;
              var M = c.msg;
              y = c.stck;
              var b = c.cstck;
            }
            f = M, c = h, o = y, D = b, h = f, y = D, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = c, c = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: c
            }, typeof c == "string" && E1.set(
              h,
              o
            ), fs(o), e = Nd(
              t,
              e,
              a
            );
          } else if (Al || Tn(
            t,
            e,
            a,
            !1
          ), c = (a & t.childLanes) !== 0, Al || c) {
            if (c = Se, c !== null && (o = mp(
              c,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Yl(
                t,
                o
              ), vt(
                c,
                t,
                o
              ), Q1;
            Fs(
              D
            ) || Wo(), e = Nd(
              t,
              e,
              a
            );
          } else
            Fs(
              D
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, Ue = qa(
              D.nextSibling
            ), fa = e, Qt = !0, Rf = null, kc = !1, Gn = null, Ru = !1, t !== null && Np(e, t), e = sy(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (au(e), h = o.fallback, y = e.mode, b = t.child, D = b.sibling, o = Fn(
        b,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = b.subtreeFlags & 65011712, D !== null ? h = Fn(
        D,
        h
      ) : (h = pi(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, Bi(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = Zo(a) : (y = h.cachePool, y !== null ? (b = bl._currentValue, y = y.parent !== b ? { parent: b, pool: b } : y) : y = Vm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Cd(
        t,
        c,
        a
      ), e.memoizedState = V1, Bi(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && $o(e), Il(e), a = t.child, t = a.sibling, a = Fn(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function sy(t, e) {
      return e = Ns(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function Ns(t, e) {
      return t = Ct(22, t, null, e), t.lanes = 0, t;
    }
    function Nd(t, e, a) {
      return Ar(e, t.child, null, a), t = sy(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function ry(t, e, a) {
      t.lanes |= e;
      var c = t.alternate;
      c !== null && (c.lanes |= e), sd(
        t.return,
        e,
        a
      );
    }
    function Bd(t, e, a, c, o, f) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = c, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function dy(t, e, a) {
      var c = e.pendingProps, o = c.revealOrder, f = c.tail, d = c.children, h = ol.current;
      if ((c = (h & Q0) !== 0) ? (h = h & Kh | Q0, e.flags |= 128) : h &= Kh, Ht(ol, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Qb[h])
        if (Qb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", rg[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (rg[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (rg[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (rg[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      t: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (el(d)) {
          for (h = 0; h < d.length; h++)
            if (!ye(
              d[h],
              h
            ))
              break t;
        } else if (h = Ie(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!ye(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (vl(t, e, d, a), Qt ? (bc(), d = O0) : d = 0, !c && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && ry(t, a, e);
          else if (t.tag === 19)
            ry(t, a, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = e.child, o = null; a !== null; )
            t = a.alternate, t !== null && Ai(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Bd(
            e,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = e.child, e.child = null; o !== null; ) {
            if (t = o.alternate, t !== null && Ai(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          Bd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Bd(
            e,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function Rn(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), Va = -1, jf |= e.lanes, (a & e.childLanes) === 0)
        if (t !== null) {
          if (Tn(
            t,
            e,
            a,
            !1
          ), (a & e.childLanes) === 0)
            return null;
        } else return null;
      if (t !== null && e.child !== t.child)
        throw Error("Resuming work not yet implemented.");
      if (e.child !== null) {
        for (t = e.child, a = Fn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
          t = t.sibling, a = a.sibling = Fn(t, t.pendingProps), a.return = e;
        a.sibling = null;
      }
      return e.child;
    }
    function xd(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ro(t)));
    }
    function Zp(t, e, a) {
      switch (e.tag) {
        case 3:
          rl(
            e,
            e.stateNode.containerInfo
          ), Pa(
            e,
            bl,
            t.memoizedState.cache
          ), Ec();
          break;
        case 27:
        case 5:
          $(e);
          break;
        case 4:
          rl(
            e,
            e.stateNode.containerInfo
          );
          break;
        case 10:
          Pa(
            e,
            e.type,
            e.memoizedProps.value
          );
          break;
        case 12:
          (a & e.childLanes) !== 0 && (e.flags |= 4), e.flags |= 2048;
          var c = e.stateNode;
          c.effectDuration = -0, c.passiveEffectDuration = -0;
          break;
        case 31:
          if (e.memoizedState !== null)
            return e.flags |= 128, On(e), null;
          break;
        case 13:
          if (c = e.memoizedState, c !== null)
            return c.dehydrated !== null ? (Il(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Hd(
              t,
              e,
              a
            ) : (Il(e), t = Rn(
              t,
              e,
              a
            ), t !== null ? t.sibling : null);
          Il(e);
          break;
        case 19:
          var o = (t.flags & 128) !== 0;
          if (c = (a & e.childLanes) !== 0, c || (Tn(
            t,
            e,
            a,
            !1
          ), c = (a & e.childLanes) !== 0), o) {
            if (c)
              return dy(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ht(
            ol,
            ol.current,
            e
          ), c) break;
          return null;
        case 22:
          return e.lanes = 0, ny(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          Pa(
            e,
            bl,
            t.memoizedState.cache
          );
      }
      return Rn(t, e, a);
    }
    function Bs(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = yi(
          e.type,
          e.key,
          e.pendingProps,
          e._debugOwner || null,
          e.mode,
          e.lanes
        ), a._debugStack = e._debugStack, a._debugTask = e._debugTask;
        var c = e.return;
        if (c === null) throw Error("Cannot swap the root fiber.");
        if (t.alternate = null, e.alternate = null, a.index = e.index, a.sibling = e.sibling, a.return = e.return, a.ref = e.ref, a._debugInfo = e._debugInfo, e === c.child)
          c.child = a;
        else {
          var o = c.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== e; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return e = c.deletions, e === null ? (c.deletions = [t], c.flags |= 16) : e.push(t), a.flags |= 2, a;
      }
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps || e.type !== t.type)
          Al = !0;
        else {
          if (!xd(t, a) && (e.flags & 128) === 0)
            return Al = !1, Zp(
              t,
              e,
              a
            );
          Al = (t.flags & 131072) !== 0;
        }
      else
        Al = !1, (c = Qt) && (bc(), c = (e.flags & 1048576) !== 0), c && (c = e.index, bc(), qm(e, O0, c));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (c = e.pendingProps, t = Ra(e.elementType), e.type = t, typeof t == "function")
            Bm(t) ? (c = ou(
              t,
              c
            ), e.tag = 1, e.type = t = gc(t), e = xi(
              null,
              e,
              t,
              c,
              a
            )) : (e.tag = 0, Vo(e, t), e.type = t = gc(t), e = iy(
              null,
              e,
              t,
              c,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === hf) {
                e.tag = 11, e.type = t = cd(t), e = Qp(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              } else if (o === ir) {
                e.tag = 14, e = ly(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === Ql && (e = " Did you wrap a component in React.lazy() more than once?"), a = Xt(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return iy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 1:
          return c = e.type, o = ou(
            c,
            e.pendingProps
          ), xi(
            t,
            e,
            c,
            o,
            a
          );
        case 3:
          t: {
            if (rl(
              e,
              e.stateNode.containerInfo
            ), t === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            c = e.pendingProps;
            var f = e.memoizedState;
            o = f.element, tu(t, e), lu(e, c, null, a);
            var d = e.memoizedState;
            if (c = d.cache, Pa(e, bl, c), c !== f.cache && Xu(
              e,
              [bl],
              a,
              !0
            ), Ho(), c = d.element, f.isDehydrated)
              if (f = {
                element: c,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = fy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else if (c !== o) {
                o = $l(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  e
                ), fs(o), e = fy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else
                for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ue = qa(t.firstChild), fa = e, Qt = !0, Rf = null, kc = !1, Gn = null, Ru = !0, a = pb(
                  e,
                  null,
                  c,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Ec(), c === o) {
                e = Rn(
                  t,
                  e,
                  a
                );
                break t;
              }
              vl(
                t,
                e,
                c,
                a
              );
            }
            e = e.child;
          }
          return e;
        case 26:
          return Hs(t, e), t === null ? (a = Jy(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : Qt || (a = e.type, t = e.pendingProps, c = ql(
            Ya.current
          ), c = Ws(
            c
          ).createElement(a), c[Me] = e, c[oa] = t, Oe(c, a, t), Le(c), e.stateNode = c) : e.memoizedState = Jy(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return $(e), t === null && Qt && (c = ql(Ya.current), o = L(), c = e.stateNode = lc(
            e.type,
            e.pendingProps,
            c,
            o,
            !1
          ), kc || (o = pa(
            c,
            e.type,
            e.pendingProps,
            o
          ), o !== null && (vi(e, 0).serverProps = o)), fa = e, Ru = !0, o = Ue, Zc(e.type) ? (rS = o, Ue = qa(
            c.firstChild
          )) : Ue = o), vl(
            t,
            e,
            e.pendingProps.children,
            a
          ), Hs(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && Qt && (f = L(), c = Pf(
            e.type,
            f.ancestorInfo
          ), o = Ue, (d = !o) || (d = Sv(
            o,
            e.type,
            e.pendingProps,
            Ru
          ), d !== null ? (e.stateNode = d, kc || (f = pa(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (vi(e, 0).serverProps = f)), fa = e, Ue = qa(
            d.firstChild
          ), Ru = !1, f = !0) : f = !1, d = !f), d && (c && Gl(e, o), Ia(e))), $(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, c = f.children, af(o, f) ? c = null : d !== null && af(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = Km(
            t,
            e,
            gs,
            null,
            null,
            a
          ), up._currentValue = o), Hs(t, e), vl(
            t,
            e,
            c,
            a
          ), e.child;
        case 6:
          return t === null && Qt && (a = e.pendingProps, t = L(), c = t.ancestorInfo.current, a = c != null ? ts(
            a,
            c.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = Ue, (c = !t) || (c = bv(
            t,
            e.pendingProps,
            Ru
          ), c !== null ? (e.stateNode = c, fa = e, Ue = null, c = !0) : c = !1, c = !c), c && (a && Gl(e, t), Ia(e))), null;
        case 13:
          return Hd(t, e, a);
        case 4:
          return rl(
            e,
            e.stateNode.containerInfo
          ), c = e.pendingProps, t === null ? e.child = Ar(
            e,
            null,
            c,
            a
          ) : vl(
            t,
            e,
            c,
            a
          ), e.child;
        case 11:
          return Qp(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 7:
          return vl(
            t,
            e,
            e.pendingProps,
            a
          ), e.child;
        case 8:
          return vl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 12:
          return e.flags |= 4, e.flags |= 2048, c = e.stateNode, c.effectDuration = -0, c.passiveEffectDuration = -0, vl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 10:
          return c = e.type, o = e.pendingProps, f = o.value, "value" in o || Vb || (Vb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Pa(e, c, f), vl(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, c = e.pendingProps.children, typeof c != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Ac(e), o = kt(o), c = U1(
            c,
            o,
            void 0
          ), e.flags |= 1, vl(
            t,
            e,
            c,
            a
          ), e.child;
        case 14:
          return ly(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return ay(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return dy(
            t,
            e,
            a
          );
        case 31:
          return Vp(t, e, a);
        case 22:
          return ny(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return Ac(e), c = kt(bl), t === null ? (o = Zu(), o === null && (o = Se, f = rd(), o.pooledCache = f, Si(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: c,
            cache: o
          }, qt(e), Pa(e, bl, o)) : ((t.lanes & a) !== 0 && (tu(t, e), lu(e, null, null, a), Ho()), o = t.memoizedState, f = e.memoizedState, o.parent !== c ? (o = {
            parent: c,
            cache: c
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Pa(e, bl, c)) : (c = f.cache, Pa(e, bl, c), c !== o.cache && Xu(
            e,
            [bl],
            a,
            !0
          ))), vl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function fu(t) {
      t.flags |= 4;
    }
    function jd(t, e, a, c, o) {
      if ((e = (t.mode & kE) !== pt) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (_y()) t.flags |= 8192;
          else
            throw Tr = ug, C1;
      } else t.flags &= -16777217;
    }
    function Lp(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & Nu) !== Br)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !xt(e))
        if (_y()) t.flags |= 8192;
        else
          throw Tr = ug, C1;
    }
    function Lo(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Gr() : 536870912, t.lanes |= e, Rr |= e);
    }
    function wo(t, e) {
      if (!Qt)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var a = null; e !== null; )
              e.alternate !== null && (a = e), e = e.sibling;
            a === null ? t.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = t.tail;
            for (var c = null; a !== null; )
              a.alternate !== null && (c = a), a = a.sibling;
            c === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : c.sibling = null;
        }
    }
    function fe(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, c = 0;
      if (e)
        if ((t.mode & Rt) !== pt) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, c |= o.subtreeFlags & 65011712, c |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & Rt) !== pt) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, c |= o.subtreeFlags, c |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= c, t.childLanes = a, e;
    }
    function hy(t, e, a) {
      var c = e.pendingProps;
      switch (fd(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return fe(e), null;
        case 1:
          return fe(e), null;
        case 3:
          return a = e.stateNode, c = null, t !== null && (c = t.memoizedState.cache), e.memoizedState.cache !== c && (e.flags |= 2048), En(bl, e), R(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (gi(e) ? (Tc(), fu(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, os())), fe(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (fu(e), f !== null ? (fe(e), Lp(
            e,
            f
          )) : (fe(e), jd(
            e,
            o,
            null,
            c,
            a
          ))) : f ? f !== t.memoizedState ? (fu(e), fe(e), Lp(
            e,
            f
          )) : (fe(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== c && fu(e), fe(e), jd(
            e,
            o,
            t,
            c,
            a
          )), null;
        case 27:
          if (rt(e), a = ql(Ya.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && fu(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return fe(e), null;
            }
            t = L(), gi(e) ? Ym(e) : (t = lc(
              o,
              c,
              a,
              t,
              !0
            ), e.stateNode = t, fu(e));
          }
          return fe(e), null;
        case 5:
          if (rt(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && fu(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return fe(e), null;
            }
            var d = L();
            if (gi(e))
              Ym(e);
            else {
              switch (f = ql(Ya.current), Pf(o, d.ancestorInfo), d = d.context, f = Ws(f), d) {
                case um:
                  f = f.createElementNS(
                    Dt,
                    o
                  );
                  break;
                case Cg:
                  f = f.createElementNS(
                    Et,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        Dt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Et,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof c.is == "string" ? f.createElement("select", {
                        is: c.is
                      }) : f.createElement("select"), c.multiple ? f.multiple = !0 : c.size && (f.size = c.size);
                      break;
                    default:
                      f = typeof c.is == "string" ? f.createElement(o, {
                        is: c.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Ga.call(d2, o) || (d2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Me] = e, f[oa] = c;
              t: for (d = e.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break t;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e)
                    break t;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              e.stateNode = f;
              t: switch (Oe(f, o, c), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break t;
                case "img":
                  c = !0;
                  break t;
                default:
                  c = !1;
              }
              c && fu(e);
            }
          }
          return fe(e), jd(
            e,
            e.type,
            t === null ? null : t.memoizedProps,
            e.pendingProps,
            a
          ), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== c && fu(e);
          else {
            if (typeof c != "string" && e.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (t = ql(Ya.current), a = L(), gi(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !kc, c = null, f = fa, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Av(
                      t,
                      a,
                      c
                    ), o !== null && (vi(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    c = f.memoizedProps, o && (o = Av(
                      t,
                      a,
                      c
                    ), o !== null && (vi(
                      e,
                      0
                    ).serverProps = o));
                }
              t[Me] = e, t = !!(t.nodeValue === a || c !== null && c.suppressHydrationWarning === !0 || Xy(t.nodeValue, a)), t || Ia(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && ts(
                c,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = Ws(t).createTextNode(
                c
              ), t[Me] = e, e.stateNode = t;
          }
          return fe(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (c = gi(e), a !== null) {
              if (t === null) {
                if (!c)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[Me] = e, fe(e), (e.mode & Rt) !== pt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                Tc(), Ec(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, fe(e), (e.mode & Rt) !== pt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = os(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (yl(e), e) : (yl(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return fe(e), null;
        case 13:
          if (c = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = c, f = gi(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Me] = e, fe(e), (e.mode & Rt) !== pt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                Tc(), Ec(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, fe(e), (e.mode & Rt) !== pt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = os(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (yl(e), e) : (yl(e), null);
          }
          return yl(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & Rt) !== pt && Ei(e), e) : (a = c !== null, t = t !== null && t.memoizedState !== null, a && (c = e.child, o = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (o = c.alternate.memoizedState.cachePool.pool), f = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (f = c.memoizedState.cachePool.pool), f !== o && (c.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Lo(e, e.updateQueue), fe(e), (e.mode & Rt) !== pt && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return R(e), t === null && Qc(
            e.stateNode.containerInfo
          ), fe(e), null;
        case 10:
          return En(e.type, e), fe(e), null;
        case 19:
          if (jt(ol, e), c = e.memoizedState, c === null) return fe(e), null;
          if (o = (e.flags & 128) !== 0, f = c.rendering, f === null)
            if (o) wo(c, !1);
            else {
              if (Qe !== fo || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = Ai(t), f !== null) {
                    for (e.flags |= 128, wo(c, !1), t = f.updateQueue, e.updateQueue = t, Lo(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      xm(a, t), a = a.sibling;
                    return Ht(
                      ol,
                      ol.current & Kh | Q0,
                      e
                    ), Qt && bn(e, c.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              c.tail !== null && Sl() > gg && (e.flags |= 128, o = !0, wo(c, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = Ai(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Lo(e, t), wo(c, !0), c.tail === null && c.tailMode === "hidden" && !f.alternate && !Qt)
                  return fe(e), null;
              } else
                2 * Sl() - c.renderingStartTime > gg && a !== 536870912 && (e.flags |= 128, o = !0, wo(c, !1), e.lanes = 4194304);
            c.isBackwards ? (f.sibling = e.child, e.child = f) : (t = c.last, t !== null ? t.sibling = f : e.child = f, c.last = f);
          }
          return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = Sl(), t.sibling = null, a = ol.current, a = o ? a & Kh | Q0 : a & Kh, Ht(ol, a, e), Qt && bn(e, c.treeForkCount), t) : (fe(e), null);
        case 22:
        case 23:
          return yl(e), Dn(e), c = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== c && (e.flags |= 8192) : c && (e.flags |= 8192), c ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (fe(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : fe(e), a = e.updateQueue, a !== null && Lo(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), c = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (c = e.memoizedState.cachePool.pool), c !== a && (e.flags |= 2048), t !== null && jt(br, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), En(bl, e), fe(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function wp(t, e) {
      switch (fd(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Rt) !== pt && Ei(e), e) : null;
        case 3:
          return En(bl, e), R(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return rt(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (yl(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Ec();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Rt) !== pt && Ei(e), e) : null;
        case 13:
          if (yl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Ec();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Rt) !== pt && Ei(e), e) : null;
        case 19:
          return jt(ol, e), null;
        case 4:
          return R(e), null;
        case 10:
          return En(e.type, e), null;
        case 22:
        case 23:
          return yl(e), Dn(e), t !== null && jt(br, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Rt) !== pt && Ei(e), e) : null;
        case 24:
          return En(bl, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function my(t, e) {
      switch (fd(e), e.tag) {
        case 3:
          En(bl, e), R(e);
          break;
        case 26:
        case 27:
        case 5:
          rt(e);
          break;
        case 4:
          R(e);
          break;
        case 31:
          e.memoizedState !== null && yl(e);
          break;
        case 13:
          yl(e);
          break;
        case 19:
          jt(ol, e);
          break;
        case 10:
          En(e.type, e);
          break;
        case 22:
        case 23:
          yl(e), Dn(e), t !== null && jt(br, e);
          break;
        case 24:
          En(bl, e);
      }
    }
    function su(t) {
      return (t.mode & Rt) !== pt;
    }
    function Jp(t, e) {
      su(t) ? (qe(), Fu(e, t), kl()) : Fu(e, t);
    }
    function qd(t, e, a) {
      su(t) ? (qe(), xc(
        a,
        t,
        e
      ), kl()) : xc(
        a,
        t,
        e
      );
    }
    function Fu(t, e) {
      try {
        var a = e.updateQueue, c = a !== null ? a.lastEffect : null;
        if (c !== null) {
          var o = c.next;
          a = o;
          do {
            if ((a.tag & t) === t && (c = void 0, (t & Za) !== ig && (lm = !0), c = I(
              e,
              lT,
              a
            ), (t & Za) !== ig && (lm = !1), c !== void 0 && typeof c != "function")) {
              var f = void 0;
              f = (a.tag & Qn) !== 0 ? "useLayoutEffect" : (a.tag & Za) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = c === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof c.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + c, I(
                e,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        zt(e, e.return, h);
      }
    }
    function xc(t, e, a) {
      try {
        var c = e.updateQueue, o = c !== null ? c.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          c = f;
          do {
            if ((c.tag & t) === t) {
              var d = c.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (t & Za) !== ig && (lm = !0), o = e, I(
                o,
                aT,
                o,
                a,
                h
              ), (t & Za) !== ig && (lm = !1));
            }
            c = c.next;
          } while (c !== f);
        }
      } catch (y) {
        zt(e, e.return, y);
      }
    }
    function xs(t, e) {
      su(t) ? (qe(), Fu(e, t), kl()) : Fu(e, t);
    }
    function Yd(t, e, a) {
      su(t) ? (qe(), xc(
        a,
        t,
        e
      ), kl()) : xc(
        a,
        t,
        e
      );
    }
    function yy(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || Fh || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          ut(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          ut(t) || "instance"
        ));
        try {
          I(
            t,
            No,
            e,
            a
          );
        } catch (c) {
          zt(t, t.return, c);
        }
      }
    }
    function js(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function Kp(t, e) {
      var a = e.memoizedProps, c = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || Fh || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        ut(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        ut(t) || "instance"
      ));
      try {
        var o = ou(
          t.type,
          a
        ), f = I(
          t,
          js,
          e,
          o,
          c
        );
        a = Zb, f !== void 0 || a.has(t.type) || (a.add(t.type), I(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            ut(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        zt(t, t.return, d);
      }
    }
    function Gd(t, e, a) {
      a.props = ou(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, su(t) ? (qe(), I(
        t,
        ob,
        t,
        e,
        a
      ), kl()) : I(
        t,
        ob,
        t,
        e,
        a
      );
    }
    function $p(t) {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        if (typeof e == "function")
          if (su(t))
            try {
              qe(), t.refCleanup = e(a);
            } finally {
              kl();
            }
          else t.refCleanup = e(a);
        else
          typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            ut(t)
          ), e.current = a;
      }
    }
    function ji(t, e) {
      try {
        I(t, $p, t);
      } catch (a) {
        zt(t, e, a);
      }
    }
    function nn(t, e) {
      var a = t.ref, c = t.refCleanup;
      if (a !== null)
        if (typeof c == "function")
          try {
            if (su(t))
              try {
                qe(), I(t, c);
              } finally {
                kl(t);
              }
            else I(t, c);
          } catch (o) {
            zt(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (su(t))
              try {
                qe(), I(t, a, null);
              } finally {
                kl(t);
              }
            else I(t, a, null);
          } catch (o) {
            zt(t, e, o);
          }
        else a.current = null;
    }
    function py(t, e, a, c) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", eg && (e = "nested-update"), typeof o == "function" && o(
        f,
        e,
        t.actualDuration,
        t.treeBaseDuration,
        t.actualStartTime,
        a
      ), typeof d == "function" && d(f, e, c, a);
    }
    function Wp(t, e, a, c) {
      var o = t.memoizedProps;
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", eg && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        c,
        a
      );
    }
    function jc(t) {
      var e = t.type, a = t.memoizedProps, c = t.stateNode;
      try {
        I(
          t,
          ov,
          c,
          e,
          a,
          t
        );
      } catch (o) {
        zt(t, t.return, o);
      }
    }
    function Xd(t, e, a) {
      try {
        I(
          t,
          ch,
          t.stateNode,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        zt(t, t.return, c);
      }
    }
    function vy(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Zc(t.type) || t.tag === 4;
    }
    function Qd(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || vy(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Zc(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Jo(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? (sv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (sv(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ka));
      else if (c !== 4 && (c === 27 && Zc(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (Jo(t, e, a), t = t.sibling; t !== null; )
          Jo(t, e, a), t = t.sibling;
    }
    function qs(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (c !== 4 && (c === 27 && Zc(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (qs(t, e, a), t = t.sibling; t !== null; )
          qs(t, e, a), t = t.sibling;
    }
    function gy(t) {
      for (var e, a = t.return; a !== null; ) {
        if (vy(a)) {
          e = a;
          break;
        }
        a = a.return;
      }
      if (e == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (e.tag) {
        case 27:
          e = e.stateNode, a = Qd(t), qs(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (ih(a), e.flags &= -33), e = Qd(t), qs(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = Qd(t), Jo(
            t,
            a,
            e
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Sy(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        I(
          t,
          gu,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        zt(t, t.return, c);
      }
    }
    function by(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function Ig(t, e) {
      if (t = t.containerInfo, oS = xg, t = ld(t), Mm(t)) {
        if ("selectionStart" in t)
          var a = {
            start: t.selectionStart,
            end: t.selectionEnd
          };
        else
          t: {
            a = (a = t.ownerDocument) && a.defaultView || window;
            var c = a.getSelection && a.getSelection();
            if (c && c.rangeCount !== 0) {
              a = c.anchorNode;
              var o = c.anchorOffset, f = c.focusNode;
              c = c.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break t;
              }
              var d = 0, h = -1, y = -1, p = 0, D = 0, M = t, b = null;
              e: for (; ; ) {
                for (var B; M !== a || o !== 0 && M.nodeType !== 3 || (h = d + o), M !== f || c !== 0 && M.nodeType !== 3 || (y = d + c), M.nodeType === 3 && (d += M.nodeValue.length), (B = M.firstChild) !== null; )
                  b = M, M = B;
                for (; ; ) {
                  if (M === t) break e;
                  if (b === a && ++p === o && (h = d), b === f && ++D === c && (y = d), (B = M.nextSibling) !== null) break;
                  M = b, b = M.parentNode;
                }
                M = B;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (fS = {
        focusedElem: t,
        selectionRange: a
      }, xg = !1, Ll = e; Ll !== null; )
        if (e = Ll, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, Ll = t;
        else
          for (; Ll !== null; ) {
            switch (t = e = Ll, a = t.alternate, o = t.flags, t.tag) {
              case 0:
                if ((o & 4) !== 0 && (t = t.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (a = 0; a < t.length; a++)
                    o = t[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Kp(t, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (t = t.stateNode.containerInfo, a = t.nodeType, a === 9)
                    uf(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        uf(t);
                        break;
                      default:
                        t.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (t = e.sibling, t !== null) {
              t.return = e.return, Ll = t;
              break;
            }
            Ll = e.return;
          }
    }
    function Vd(t, e, a) {
      var c = ze(), o = tn(), f = Oa(), d = en(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Na(t, a), h & 4 && Jp(a, Qn | Cu);
          break;
        case 1:
          if (Na(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Fh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ut(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ut(a) || "instance"
              )), su(a) ? (qe(), I(
                a,
                _1,
                a,
                t
              ), kl()) : I(
                a,
                _1,
                a,
                t
              );
            else {
              var y = ou(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Fh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ut(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ut(a) || "instance"
              )), su(a) ? (qe(), I(
                a,
                ub,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), kl()) : I(
                a,
                ub,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && yy(a), h & 512 && ji(a, a.return);
          break;
        case 3:
          if (e = Pn(), Na(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              I(
                a,
                No,
                h,
                y
              );
            } catch (D) {
              zt(a, a.return, D);
            }
          }
          t.effectDuration += Uo(e);
          break;
        case 27:
          e === null && h & 4 && Sy(a);
        case 26:
        case 5:
          if (Na(t, a), e === null) {
            if (h & 4) jc(a);
            else if (h & 64) {
              t = a.type, e = a.memoizedProps, y = a.stateNode;
              try {
                I(
                  a,
                  fv,
                  y,
                  t,
                  e,
                  a
                );
              } catch (D) {
                zt(
                  a,
                  a.return,
                  D
                );
              }
            }
          }
          h & 512 && ji(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Pn(), Na(t, a), t = a.stateNode, t.effectDuration += Wl(h);
            try {
              I(
                a,
                py,
                a,
                e,
                Uf,
                t.effectDuration
              );
            } catch (D) {
              zt(a, a.return, D);
            }
          } else Na(t, a);
          break;
        case 31:
          Na(t, a), h & 4 && Ty(t, a);
          break;
        case 13:
          Na(t, a), h & 4 && Ay(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = Pu.bind(
            null,
            a
          ), Ev(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || oo, !h) {
            e = e !== null && e.memoizedState !== null || zl, y = oo;
            var p = zl;
            oo = h, (zl = e) && !p ? (Un(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Rt) !== pt && 0 <= st && 0 <= ht && 0.05 < ht - st && ad(
              a,
              st,
              ht
            )) : Na(t, a), oo = y, zl = p;
          }
          break;
        case 30:
          break;
        default:
          Na(t, a);
      }
      (a.mode & Rt) !== pt && 0 <= st && 0 <= ht && ((ke || 0.05 < Xe) && Sn(
        a,
        st,
        ht,
        Xe,
        xe
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < ht - st && (by(
        a.return.alternate,
        a.return
      ) || Fa(
        a,
        st,
        ht,
        "Mount"
      ))), hl(c), Da(o), xe = f, ke = d;
    }
    function $e(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, $e(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && dm(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function Te(t, e, a) {
      for (a = a.child; a !== null; )
        Ey(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function Ey(t, e, a) {
      if (cl && typeof cl.onCommitFiberUnmount == "function")
        try {
          cl.onCommitFiberUnmount(Wi, a);
        } catch (p) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var c = ze(), o = tn(), f = Oa(), d = en();
      switch (a.tag) {
        case 26:
          zl || nn(a, e), Te(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          zl || nn(a, e);
          var h = Dl, y = sn;
          Zc(a.type) && (Dl = a.stateNode, sn = !1), Te(
            t,
            e,
            a
          ), I(
            a,
            ac,
            a.stateNode
          ), Dl = h, sn = y;
          break;
        case 5:
          zl || nn(a, e);
        case 6:
          if (h = Dl, y = sn, Dl = null, Te(
            t,
            e,
            a
          ), Dl = h, sn = y, Dl !== null)
            if (sn)
              try {
                I(
                  a,
                  dv,
                  Dl,
                  a.stateNode
                );
              } catch (p) {
                zt(
                  a,
                  e,
                  p
                );
              }
            else
              try {
                I(
                  a,
                  rv,
                  Dl,
                  a.stateNode
                );
              } catch (p) {
                zt(
                  a,
                  e,
                  p
                );
              }
          break;
        case 18:
          Dl !== null && (sn ? (t = Dl, Qi(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), wi(t)) : Qi(Dl, a.stateNode));
          break;
        case 4:
          h = Dl, y = sn, Dl = a.stateNode.containerInfo, sn = !0, Te(
            t,
            e,
            a
          ), Dl = h, sn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          xc(
            Za,
            a,
            e
          ), zl || qd(
            a,
            e,
            Qn
          ), Te(
            t,
            e,
            a
          );
          break;
        case 1:
          zl || (nn(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && Gd(
            a,
            e,
            h
          )), Te(
            t,
            e,
            a
          );
          break;
        case 21:
          Te(
            t,
            e,
            a
          );
          break;
        case 22:
          zl = (h = zl) || a.memoizedState !== null, Te(
            t,
            e,
            a
          ), zl = h;
          break;
        default:
          Te(
            t,
            e,
            a
          );
      }
      (a.mode & Rt) !== pt && 0 <= st && 0 <= ht && (ke || 0.05 < Xe) && Sn(
        a,
        st,
        ht,
        Xe,
        xe
      ), hl(c), Da(o), xe = f, ke = d;
    }
    function Ty(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          I(
            e,
            oh,
            t
          );
        } catch (a) {
          zt(e, e.return, a);
        }
      }
    }
    function Ay(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          I(
            e,
            Ly,
            t
          );
        } catch (a) {
          zt(e, e.return, a);
        }
    }
    function kp(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new Lb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Lb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function qc(t, e) {
      var a = kp(t);
      e.forEach(function(c) {
        if (!a.has(c)) {
          if (a.add(c), Eu)
            if (Ih !== null && Ph !== null)
              Io(Ph, Ih);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Gi.bind(null, t, c);
          c.then(o, o);
        }
      });
    }
    function ea(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var c = 0; c < a.length; c++) {
          var o = t, f = e, d = a[c], h = ze(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (Zc(y.type)) {
                  Dl = y.stateNode, sn = !1;
                  break t;
                }
                break;
              case 5:
                Dl = y.stateNode, sn = !1;
                break t;
              case 3:
              case 4:
                Dl = y.stateNode.containerInfo, sn = !0;
                break t;
            }
            y = y.return;
          }
          if (Dl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Ey(o, f, d), Dl = null, sn = !1, (d.mode & Rt) !== pt && 0 <= st && 0 <= ht && 0.05 < ht - st && Fa(
            d,
            st,
            ht,
            "Unmount"
          ), hl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          Ys(e, t), e = e.sibling;
    }
    function Ys(t, e) {
      var a = ze(), c = tn(), o = Oa(), f = en(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(e, t), la(t), h & 4 && (xc(
            Za | Cu,
            t,
            t.return
          ), Fu(Za | Cu, t), qd(
            t,
            t.return,
            Qn | Cu
          ));
          break;
        case 1:
          if (ea(e, t), la(t), h & 512 && (zl || d === null || nn(d, d.return)), h & 64 && oo && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = fc, ea(e, t), la(t), h & 512 && (zl || d === null || nn(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = t.memoizedState, d === null)
              if (h === null)
                if (t.stateNode === null) {
                  t: {
                    h = t.type, d = t.memoizedProps, y = y.ownerDocument || y;
                    e: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Ef] || p[Me] || p.namespaceURI === Dt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), Oe(p, h, d), p[Me] = t, Le(p), h = p;
                        break t;
                      case "link":
                        var D = ff(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (D) {
                          for (var M = 0; M < D.length; M++)
                            if (p = D[M], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              D.splice(M, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Oe(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (D = ff(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (M = 0; M < D.length; M++)
                            if (p = D[M], ie(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              D.splice(M, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Oe(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Me] = t, Le(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  Dv(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = rh(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Dv(
                y,
                t.type,
                t.stateNode
              ) : rh(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && Xd(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          ea(e, t), la(t), h & 512 && (zl || d === null || nn(d, d.return)), d !== null && h & 4 && Xd(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (ea(e, t), la(t), h & 512 && (zl || d === null || nn(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              I(
                t,
                ih,
                y
              );
            } catch (F) {
              zt(t, t.return, F);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, Xd(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (Z1 = !0, t.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (ea(e, t), la(t), h & 4) {
            if (t.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = t.memoizedProps, d = d !== null ? d.memoizedProps : h, y = t.stateNode;
            try {
              I(
                t,
                Pg,
                y,
                d,
                h
              );
            } catch (F) {
              zt(t, t.return, F);
            }
          }
          break;
        case 3:
          if (y = Pn(), Hg = null, p = fc, fc = fh(e.containerInfo), ea(e, t), fc = p, la(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              I(
                t,
                Zy,
                e.containerInfo
              );
            } catch (F) {
              zt(t, t.return, F);
            }
          Z1 && (Z1 = !1, Fp(t)), e.effectDuration += Uo(
            y
          );
          break;
        case 4:
          h = fc, fc = fh(
            t.stateNode.containerInfo
          ), ea(e, t), la(t), fc = h;
          break;
        case 12:
          h = Pn(), ea(e, t), la(t), t.stateNode.effectDuration += Wl(h);
          break;
        case 31:
          ea(e, t), la(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 13:
          ea(e, t), la(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (vg = Sl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var b = d !== null && d.memoizedState !== null, B = oo, W = zl;
          if (oo = B || y, zl = W || b, ea(e, t), zl = W, oo = B, b && !y && !B && !W && (t.mode & Rt) !== pt && 0 <= st && 0 <= ht && 0.05 < ht - st && ad(
            t,
            st,
            ht
          ), la(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~D0 : e._visibility | D0, !y || d === null || b || oo || zl || (Yc(t), (t.mode & Rt) !== pt && 0 <= st && 0 <= ht && 0.05 < ht - st && Fa(
              t,
              st,
              ht,
              "Disconnect"
            )), d = null, e = t; ; ) {
              if (e.tag === 5 || e.tag === 26) {
                if (d === null) {
                  b = d = e;
                  try {
                    p = b.stateNode, y ? I(
                      b,
                      mv,
                      p
                    ) : I(
                      b,
                      vv,
                      b.stateNode,
                      b.memoizedProps
                    );
                  } catch (F) {
                    zt(b, b.return, F);
                  }
                }
              } else if (e.tag === 6) {
                if (d === null) {
                  b = e;
                  try {
                    D = b.stateNode, y ? I(
                      b,
                      yv,
                      D
                    ) : I(
                      b,
                      gv,
                      D,
                      b.memoizedProps
                    );
                  } catch (F) {
                    zt(b, b.return, F);
                  }
                }
              } else if (e.tag === 18) {
                if (d === null) {
                  b = e;
                  try {
                    M = b.stateNode, y ? I(
                      b,
                      hv,
                      M
                    ) : I(
                      b,
                      pv,
                      b.stateNode
                    );
                  } catch (F) {
                    zt(b, b.return, F);
                  }
                }
              } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break t;
                d === e && (d = null), e = e.return;
              }
              d === e && (d = null), e.sibling.return = e.return, e = e.sibling;
            }
          h & 4 && (h = t.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, qc(t, d))));
          break;
        case 19:
          ea(e, t), la(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ea(e, t), la(t);
      }
      (t.mode & Rt) !== pt && 0 <= st && 0 <= ht && ((ke || 0.05 < Xe) && Sn(
        t,
        st,
        ht,
        Xe,
        xe
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < ht - st && (by(
        t.return.alternate,
        t.return
      ) || Fa(
        t,
        st,
        ht,
        "Mount"
      ))), hl(a), Da(c), xe = o, ke = f;
    }
    function la(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          I(t, gy, t);
        } catch (a) {
          zt(t, t.return, a);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function Fp(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          Fp(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function Na(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          Vd(t, e.alternate, e), e = e.sibling;
    }
    function Zd(t) {
      var e = ze(), a = tn(), c = Oa(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qd(
            t,
            t.return,
            Qn
          ), Yc(t);
          break;
        case 1:
          nn(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && Gd(
            t,
            t.return,
            f
          ), Yc(t);
          break;
        case 27:
          I(
            t,
            ac,
            t.stateNode
          );
        case 26:
        case 5:
          nn(t, t.return), Yc(t);
          break;
        case 22:
          t.memoizedState === null && Yc(t);
          break;
        case 30:
          Yc(t);
          break;
        default:
          Yc(t);
      }
      (t.mode & Rt) !== pt && 0 <= st && 0 <= ht && (ke || 0.05 < Xe) && Sn(
        t,
        st,
        ht,
        Xe,
        xe
      ), hl(e), Da(a), xe = c, ke = o;
    }
    function Yc(t) {
      for (t = t.child; t !== null; )
        Zd(t), t = t.sibling;
    }
    function zy(t, e, a, c) {
      var o = ze(), f = tn(), d = Oa(), h = en(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            t,
            a,
            c
          ), Jp(a, Qn);
          break;
        case 1:
          if (Un(
            t,
            a,
            c
          ), e = a.stateNode, typeof e.componentDidMount == "function" && I(
            a,
            _1,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              I(
                a,
                wm,
                e,
                t
              );
            } catch (p) {
              zt(a, a.return, p);
            }
          }
          c && y & 64 && yy(a), ji(a, a.return);
          break;
        case 27:
          Sy(a);
        case 26:
        case 5:
          Un(
            t,
            a,
            c
          ), c && e === null && y & 4 && jc(a), ji(a, a.return);
          break;
        case 12:
          if (c && y & 4) {
            y = Pn(), Un(
              t,
              a,
              c
            ), c = a.stateNode, c.effectDuration += Wl(y);
            try {
              I(
                a,
                py,
                a,
                e,
                Uf,
                c.effectDuration
              );
            } catch (p) {
              zt(a, a.return, p);
            }
          } else
            Un(
              t,
              a,
              c
            );
          break;
        case 31:
          Un(
            t,
            a,
            c
          ), c && y & 4 && Ty(t, a);
          break;
        case 13:
          Un(
            t,
            a,
            c
          ), c && y & 4 && Ay(t, a);
          break;
        case 22:
          a.memoizedState === null && Un(
            t,
            a,
            c
          ), ji(a, a.return);
          break;
        case 30:
          break;
        default:
          Un(
            t,
            a,
            c
          );
      }
      (a.mode & Rt) !== pt && 0 <= st && 0 <= ht && (ke || 0.05 < Xe) && Sn(
        a,
        st,
        ht,
        Xe,
        xe
      ), hl(o), Da(f), xe = d, ke = h;
    }
    function Un(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        zy(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function Gs(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && Si(t), a != null && rs(a));
    }
    function Xs(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (Si(e), t != null && rs(t));
    }
    function Ba(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          Dy(
            t,
            e,
            a,
            c,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function Dy(t, e, a, c, o) {
      var f = ze(), d = tn(), h = Oa(), y = en(), p = Df, D = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & Rt) !== pt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && nd(
            e,
            e.actualStartTime,
            o,
            Nl,
            a
          ), Ba(
            t,
            e,
            a,
            c,
            o
          ), D & 2048 && xs(e, La | Cu);
          break;
        case 1:
          (e.mode & Rt) !== pt && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? Um(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && nd(
            e,
            e.actualStartTime,
            o,
            Nl,
            a
          )), Ba(
            t,
            e,
            a,
            c,
            o
          );
          break;
        case 3:
          var M = Pn(), b = Nl;
          Nl = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, Ba(
            t,
            e,
            a,
            c,
            o
          ), Nl = b, D & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), c = e.memoizedState.cache, c !== a && (Si(c), a != null && rs(a))), t.passiveEffectDuration += Uo(
            M
          );
          break;
        case 12:
          if (D & 2048) {
            D = Pn(), Ba(
              t,
              e,
              a,
              c,
              o
            ), t = e.stateNode, t.passiveEffectDuration += Wl(D);
            try {
              I(
                e,
                Wp,
                e,
                e.alternate,
                Uf,
                t.passiveEffectDuration
              );
            } catch (B) {
              zt(e, e.return, B);
            }
          } else
            Ba(
              t,
              e,
              a,
              c,
              o
            );
          break;
        case 31:
          D = Nl, M = e.alternate !== null ? e.alternate.memoizedState : null, b = e.memoizedState, M !== null && b === null ? (b = e.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Nl = !1, M = M.hydrationErrors, M !== null && Um(
            e,
            e.actualStartTime,
            o,
            M
          )) : Nl = !0) : Nl = !1, Ba(
            t,
            e,
            a,
            c,
            o
          ), Nl = D;
          break;
        case 13:
          D = Nl, M = e.alternate !== null ? e.alternate.memoizedState : null, b = e.memoizedState, M === null || M.dehydrated === null || b !== null && b.dehydrated !== null ? Nl = !1 : (b = e.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Nl = !1, M = M.hydrationErrors, M !== null && Um(
            e,
            e.actualStartTime,
            o,
            M
          )) : Nl = !0), Ba(
            t,
            e,
            a,
            c,
            o
          ), Nl = D;
          break;
        case 23:
          break;
        case 22:
          b = e.stateNode, M = e.alternate, e.memoizedState !== null ? b._visibility & Ii ? Ba(
            t,
            e,
            a,
            c,
            o
          ) : qi(
            t,
            e,
            a,
            c,
            o
          ) : b._visibility & Ii ? Ba(
            t,
            e,
            a,
            c,
            o
          ) : (b._visibility |= Ii, Gc(
            t,
            e,
            a,
            c,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & Rt) === pt || Nl || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && ad(e, t, o), 0 <= st && 0 <= ht && 0.05 < ht - st && ad(
            e,
            st,
            ht
          ))), D & 2048 && Gs(
            M,
            e
          );
          break;
        case 24:
          Ba(
            t,
            e,
            a,
            c,
            o
          ), D & 2048 && Xs(e.alternate, e);
          break;
        default:
          Ba(
            t,
            e,
            a,
            c,
            o
          );
      }
      (e.mode & Rt) !== pt && ((t = !Nl && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && Fa(
        e,
        a,
        o,
        "Mount"
      )), 0 <= st && 0 <= ht && ((ke || 0.05 < Xe) && Sn(
        e,
        st,
        ht,
        Xe,
        xe
      ), t && 0.05 < ht - st && Fa(
        e,
        st,
        ht,
        "Mount"
      ))), hl(f), Da(d), xe = h, ke = y, Df = p;
    }
    function Gc(t, e, a, c, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        Qs(
          t,
          e,
          a,
          c,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function Qs(t, e, a, c, o, f) {
      var d = ze(), h = tn(), y = Oa(), p = en(), D = Df;
      o && (e.mode & Rt) !== pt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && nd(
        e,
        e.actualStartTime,
        f,
        Nl,
        a
      );
      var M = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Gc(
            t,
            e,
            a,
            c,
            o,
            f
          ), xs(e, La);
          break;
        case 23:
          break;
        case 22:
          var b = e.stateNode;
          e.memoizedState !== null ? b._visibility & Ii ? Gc(
            t,
            e,
            a,
            c,
            o,
            f
          ) : qi(
            t,
            e,
            a,
            c,
            f
          ) : (b._visibility |= Ii, Gc(
            t,
            e,
            a,
            c,
            o,
            f
          )), o && M & 2048 && Gs(
            e.alternate,
            e
          );
          break;
        case 24:
          Gc(
            t,
            e,
            a,
            c,
            o,
            f
          ), o && M & 2048 && Xs(e.alternate, e);
          break;
        default:
          Gc(
            t,
            e,
            a,
            c,
            o,
            f
          );
      }
      (e.mode & Rt) !== pt && 0 <= st && 0 <= ht && (ke || 0.05 < Xe) && Sn(
        e,
        st,
        ht,
        Xe,
        xe
      ), hl(d), Da(h), xe = y, ke = p, Df = D;
    }
    function qi(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = c, p = e !== null ? e.actualStartTime : o, D = Df;
          (f.mode & Rt) !== pt && 0 < f.actualStartTime && (f.flags & 1) !== 0 && nd(
            f,
            f.actualStartTime,
            p,
            Nl,
            h
          );
          var M = f.flags;
          switch (f.tag) {
            case 22:
              qi(
                d,
                f,
                h,
                y,
                p
              ), M & 2048 && Gs(f.alternate, f);
              break;
            case 24:
              qi(
                d,
                f,
                h,
                y,
                p
              ), M & 2048 && Xs(f.alternate, f);
              break;
            default:
              qi(
                d,
                f,
                h,
                y,
                p
              );
          }
          Df = D, f = e;
        }
    }
    function Yi(t, e, a) {
      if (t.subtreeFlags & w0)
        for (t = t.child; t !== null; )
          Ld(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function Ld(t, e, a) {
      switch (t.tag) {
        case 26:
          Yi(
            t,
            e,
            a
          ), t.flags & w0 && t.memoizedState !== null && Wy(
            a,
            fc,
            t.memoizedState,
            t.memoizedProps
          );
          break;
        case 5:
          Yi(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          var c = fc;
          fc = fh(
            t.stateNode.containerInfo
          ), Yi(
            t,
            e,
            a
          ), fc = c;
          break;
        case 22:
          t.memoizedState === null && (c = t.alternate, c !== null && c.memoizedState !== null ? (c = w0, w0 = 16777216, Yi(
            t,
            e,
            a
          ), w0 = c) : Yi(
            t,
            e,
            a
          ));
          break;
        default:
          Yi(
            t,
            e,
            a
          );
      }
    }
    function Oy(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function xa(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = ze();
            Ll = c, ru(
              c,
              t
            ), (c.mode & Rt) !== pt && 0 <= st && 0 <= ht && 0.05 < ht - st && Fa(
              c,
              st,
              ht,
              "Unmount"
            ), hl(o);
          }
        Oy(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          wd(t), t = t.sibling;
    }
    function wd(t) {
      var e = ze(), a = tn(), c = Oa(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          xa(t), t.flags & 2048 && Yd(
            t,
            t.return,
            La | Cu
          );
          break;
        case 3:
          var f = Pn();
          xa(t), t.stateNode.passiveEffectDuration += Uo(f);
          break;
        case 12:
          f = Pn(), xa(t), t.stateNode.passiveEffectDuration += Wl(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & Ii && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~Ii, Jd(t), (t.mode & Rt) !== pt && 0 <= st && 0 <= ht && 0.05 < ht - st && Fa(
            t,
            st,
            ht,
            "Disconnect"
          )) : xa(t);
          break;
        default:
          xa(t);
      }
      (t.mode & Rt) !== pt && 0 <= st && 0 <= ht && (ke || 0.05 < Xe) && Sn(
        t,
        st,
        ht,
        Xe,
        xe
      ), hl(e), Da(a), ke = o, xe = c;
    }
    function Jd(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = ze();
            Ll = c, ru(
              c,
              t
            ), (c.mode & Rt) !== pt && 0 <= st && 0 <= ht && 0.05 < ht - st && Fa(
              c,
              st,
              ht,
              "Unmount"
            ), hl(o);
          }
        Oy(t);
      }
      for (t = t.child; t !== null; )
        My(t), t = t.sibling;
    }
    function My(t) {
      var e = ze(), a = tn(), c = Oa(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Yd(
            t,
            t.return,
            La
          ), Jd(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & Ii && (f._visibility &= ~Ii, Jd(t));
          break;
        default:
          Jd(t);
      }
      (t.mode & Rt) !== pt && 0 <= st && 0 <= ht && (ke || 0.05 < Xe) && Sn(
        t,
        st,
        ht,
        Xe,
        xe
      ), hl(e), Da(a), ke = o, xe = c;
    }
    function ru(t, e) {
      for (; Ll !== null; ) {
        var a = Ll, c = a, o = e, f = ze(), d = tn(), h = Oa(), y = en();
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Yd(
              c,
              o,
              La
            );
            break;
          case 23:
          case 22:
            c.memoizedState !== null && c.memoizedState.cachePool !== null && (o = c.memoizedState.cachePool.pool, o != null && Si(o));
            break;
          case 24:
            rs(c.memoizedState.cache);
        }
        if ((c.mode & Rt) !== pt && 0 <= st && 0 <= ht && (ke || 0.05 < Xe) && Sn(
          c,
          st,
          ht,
          Xe,
          xe
        ), hl(f), Da(d), ke = y, xe = h, c = a.child, c !== null) c.return = a, Ll = c;
        else
          t: for (a = t; Ll !== null; ) {
            if (c = Ll, f = c.sibling, d = c.return, $e(c), c === a) {
              Ll = null;
              break t;
            }
            if (f !== null) {
              f.return = d, Ll = f;
              break t;
            }
            Ll = d;
          }
      }
    }
    function Ry() {
      oT.forEach(function(t) {
        return t();
      });
    }
    function Uy() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function Xl(t) {
      if ((Kt & Bl) !== wl && _t !== 0)
        return _t & -_t;
      var e = q.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), Gy()) : yp();
    }
    function Ko() {
      if (dn === 0)
        if ((_t & 536870912) === 0 || Qt) {
          var t = sr;
          sr <<= 1, (sr & 3932160) === 0 && (sr = 262144), dn = t;
        } else dn = 536870912;
      return t = Xn.current, t !== null && (t.flags |= 32), dn;
    }
    function vt(t, e, a) {
      if (lm && console.error("useInsertionEffect must not schedule updates."), tS && (Eg = !0), (t === Se && (he === Or || he === Mr) || t.cancelPendingCommit !== null) && (du(t, 0), un(
        t,
        _t,
        dn,
        !1
      )), dc(t, a), (Kt & Bl) !== wl && t === Se) {
        if (Su)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = Bt && ut(Bt) || "Unknown", u2.has(t) || (u2.add(t), e = ut(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              n2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), n2 = !0);
          }
      } else
        Eu && sa(t, e, a), ws(e), t === Se && ((Kt & Bl) === wl && (qf |= a), Qe === Bf && un(
          t,
          _t,
          dn,
          !1
        )), ma(t);
    }
    function Ip(t, e, a) {
      if ((Kt & (Bl | Vn)) !== wl)
        throw Error("Should not already be working.");
      if (_t !== 0 && Bt !== null) {
        var c = Bt, o = Sl();
        switch (FS) {
          case $0:
          case Or:
            var f = C0;
            Re && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Au,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Au,
              void 0,
              "primary-light"
            ));
            break;
          case Mr:
            f = C0, Re && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Au,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Au,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Re && (c = o - C0, 3 > c || console.timeStamp(
              "Blocked",
              C0,
              o,
              Au,
              void 0,
              5 > c ? "primary-light" : 10 > c ? "primary" : 100 > c ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Rl(t, e)) ? Iu(t, e) : ko(t, e, !0);
      var d = a;
      do {
        if (f === fo) {
          tm && !a && un(t, e, 0, !1), e = he, C0 = El(), FS = e;
          break;
        } else {
          if (c = Sl(), o = t.current.alternate, d && !tv(o)) {
            gn(e), o = Zl, f = c, !Re || f <= o || (ll ? ll.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                Lt,
                Vt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              Lt,
              Vt,
              "error"
            )), Xc(e, c), f = ko(t, e, !1), d = !1;
            continue;
          }
          if (f === Dr) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              gn(e), _m(
                Zl,
                c,
                e,
                ll
              ), Xc(e, c), e = h;
              t: {
                c = t, f = d, d = k0;
                var y = c.current.memoizedState.isDehydrated;
                if (y && (du(c, h).flags |= 256), h = ko(
                  c,
                  h,
                  !1
                ), h !== Dr) {
                  if (J1 && !y) {
                    c.errorRecoveryDisabledLanes |= f, qf |= f, f = Bf;
                    break t;
                  }
                  c = wa, wa = d, c !== null && (wa === null ? wa = c : wa.push.apply(
                    wa,
                    c
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Dr) continue;
              c = Sl();
            }
          }
          if (f === K0) {
            gn(e), _m(
              Zl,
              c,
              e,
              ll
            ), Xc(e, c), du(t, 0), un(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case fo:
              case K0:
                throw Error("Root did not complete. This is a bug in React.");
              case Bf:
                if ((e & 4194048) !== e) break;
              case hg:
                gn(e), Rp(
                  Zl,
                  c,
                  e,
                  ll
                ), Xc(e, c), o = e, (o & 127) !== 0 ? Iv = c : (o & 4194048) !== 0 && (Pv = c), un(
                  a,
                  e,
                  dn,
                  !xf
                );
                break t;
              case Dr:
                wa = null;
                break;
              case dg:
              case wb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (q.actQueue !== null)
              pe(
                a,
                o,
                e,
                wa,
                F0,
                pg,
                dn,
                qf,
                Rr,
                f,
                null,
                null,
                Zl,
                c
              );
            else {
              if ((e & 62914560) === e && (d = vg + $b - Sl(), 10 < d)) {
                if (un(
                  a,
                  e,
                  dn,
                  !xf
                ), Yr(a, 0, !0) !== 0) break t;
                sc = e, a.timeoutHandle = h2(
                  Pp.bind(
                    null,
                    a,
                    o,
                    wa,
                    F0,
                    pg,
                    e,
                    dn,
                    qf,
                    Rr,
                    xf,
                    f,
                    "Throttled",
                    Zl,
                    c
                  ),
                  d
                );
                break t;
              }
              Pp(
                a,
                o,
                wa,
                F0,
                pg,
                e,
                dn,
                qf,
                Rr,
                xf,
                f,
                null,
                Zl,
                c
              );
            }
          }
        }
        break;
      } while (!0);
      ma(t);
    }
    function Pp(t, e, a, c, o, f, d, h, y, p, D, M, b, B) {
      t.timeoutHandle = Nr;
      var W = e.subtreeFlags, F = null;
      if ((W & 8192 || (W & 16785408) === 16785408) && (F = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ka
      }, Ld(e, f, F), W = (f & 62914560) === f ? vg - Sl() : (f & 4194048) === f ? Kb - Sl() : 0, W = dh(F, W), W !== null)) {
        sc = f, t.cancelPendingCommit = W(
          pe.bind(
            null,
            t,
            e,
            f,
            a,
            c,
            o,
            d,
            h,
            y,
            D,
            F,
            F.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < F.count ? 0 < F.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : F.imgCount === 1 ? "Suspended on an Image" : 0 < F.imgCount ? "Suspended on Images" : null,
            b,
            B
          )
        ), un(
          t,
          f,
          d,
          !p
        );
        return;
      }
      pe(
        t,
        e,
        f,
        a,
        c,
        o,
        d,
        h,
        y,
        D,
        F,
        M,
        b,
        B
      );
    }
    function tv(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var c = 0; c < a.length; c++) {
            var o = a[c], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Qa(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = e.child, e.subtreeFlags & 16384 && a !== null)
          a.return = e, e = a;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return !0;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return !0;
    }
    function un(t, e, a, c) {
      e &= ~K1, e &= ~qf, t.suspendedLanes |= e, t.pingedLanes &= ~e, c && (t.warmLanes |= e), c = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - Cl(o), d = 1 << f;
        c[f] = -1, o &= ~d;
      }
      a !== 0 && rm(t, a, e);
    }
    function ja() {
      return (Kt & (Bl | Vn)) === wl ? (mu(0), !1) : !0;
    }
    function Kd() {
      if (Bt !== null) {
        if (he === rn)
          var t = Bt.return;
        else
          t = Bt, Mo(), Dc(t), wh = null, X0 = 0, t = Bt;
        for (; t !== null; )
          my(t.alternate, t), t = t.return;
        Bt = null;
      }
    }
    function Xc(t, e) {
      (t & 127) !== 0 && (pr = e), (t & 4194048) !== 0 && (ao = e), (t & 62914560) !== 0 && (WS = e), (t & 2080374784) !== 0 && (kS = e);
    }
    function du(t, e) {
      Re && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        Vt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        Vt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        Vt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        Vt,
        "primary-light"
      ));
      var a = Zl;
      if (Zl = El(), _t !== 0 && 0 < a) {
        if (gn(_t), Qe === dg || Qe === Bf)
          Rp(
            a,
            Zl,
            e,
            ll
          );
        else {
          var c = Zl, o = ll;
          if (Re && !(c <= a)) {
            var f = (e & 738197653) === e ? "tertiary-dark" : "primary-dark", d = (e & 536870912) === e ? "Prewarm" : (e & 201326741) === e ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                c,
                Lt,
                Vt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              c,
              Lt,
              Vt,
              f
            );
          }
        }
        Xc(_t, Zl);
      }
      if (a = ll, ll = null, (e & 127) !== 0) {
        ll = R0, o = 0 <= Fc && Fc < pr ? pr : Fc, c = 0 <= vr && vr < pr ? pr : vr, f = 0 <= c ? c : 0 <= o ? o : Zl, 0 <= Iv ? (gn(2), Up(
          Iv,
          f,
          e,
          a
        )) : tg & 127, a = o;
        var h = c, y = U0, p = 0 < Vh, D = _f === M0, M = _f === Fv;
        if (o = Zl, c = R0, f = D1, d = O1, Re) {
          if (Lt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var b = p ? "secondary-light" : "warning";
            c ? c.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                Lt,
                Vt,
                b
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              Lt,
              Vt,
              b
            );
          }
          o > a && (h = D ? "error" : (e & 738197653) === e ? "tertiary-light" : "primary-light", D = M ? "Promise Resolved" : D ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", M = [], d != null && M.push(["Component name", d]), f != null && M.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: M,
                track: Lt,
                trackGroup: Vt,
                color: h
              }
            }
          }, c ? c.run(
            performance.measure.bind(
              performance,
              D,
              a
            )
          ) : performance.measure(D, a));
        }
        Fc = -1.1, _f = 0, O1 = D1 = null, Iv = -1.1, Vh = vr, vr = -1.1, pr = El();
      }
      if ((e & 4194048) !== 0 && (ll = _0, o = 0 <= no && no < ao ? ao : no, a = 0 <= Uu && Uu < ao ? ao : Uu, c = 0 <= Cf && Cf < ao ? ao : Cf, f = 0 <= c ? c : 0 <= a ? a : Zl, 0 <= Pv ? (gn(256), Up(
        Pv,
        f,
        e,
        ll
      )) : tg & 4194048, M = c, h = gr, y = 0 < Hf, p = M1 === Fv, f = Zl, c = _0, d = KS, D = $S, Re && (Lt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < M ? M > o && (M = o) : M = o, o > M && h !== null && (b = y ? "secondary-light" : "warning", c ? c.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          M,
          o,
          Lt,
          Vt,
          b
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        M,
        o,
        Lt,
        Vt,
        b
      )), a > o && (c ? c.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          Lt,
          Vt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        Lt,
        Vt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", M = [], D != null && M.push(["Component name", D]), d != null && M.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: M,
            track: Lt,
            trackGroup: Vt,
            color: "primary-light"
          }
        }
      }, c ? c.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Uu = no = -1.1, M1 = 0, Pv = -1.1, Hf = Cf, Cf = -1.1, ao = El()), (e & 62914560) !== 0 && (tg & 62914560) !== 0 && (gn(4194304), Cm(WS, Zl)), (e & 2080374784) !== 0 && (tg & 2080374784) !== 0 && (gn(268435456), Cm(kS, Zl)), a = t.timeoutHandle, a !== Nr && (t.timeoutHandle = Nr, ET(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), sc = 0, Kd(), Se = t, Bt = a = Fn(
        t.current,
        null
      ), _t = e, he = rn, Zn = null, xf = !1, tm = Rl(t, e), J1 = !1, Qe = fo, Rr = dn = K1 = qf = jf = 0, wa = k0 = null, pg = !1, (e & 8) !== 0 && (e |= e & 32), c = t.entangledLanes, c !== 0)
        for (t = t.entanglements, c &= e; 0 < c; )
          o = 31 - Cl(c), f = 1 << o, e |= t[o], c &= ~f;
      return Pc = e, ud(), t = QS(), 1e3 < t - XS && (q.recentlyCreatedOwnerStacks = 0, XS = t), ic.discardPendingWarnings(), a;
    }
    function _n(t, e) {
      St = null, q.H = L0, q.getCurrentStack = null, Su = !1, ga = null, e === Lh || e === ng ? (e = Ti(), he = $0) : e === C1 ? (e = Ti(), he = Jb) : he = e === Q1 ? w1 : e !== null && typeof e == "object" && typeof e.then == "function" ? W0 : mg, Zn = e;
      var a = Bt;
      a === null ? (Qe = K0, _s(
        t,
        $l(e, t.current)
      )) : a.mode & Rt && dd(a);
    }
    function _y() {
      var t = Xn.current;
      return t === null ? !0 : (_t & 4194048) === _t ? _u === null : (_t & 62914560) === _t || (_t & 536870912) !== 0 ? t === _u : !1;
    }
    function $d() {
      var t = q.H;
      return q.H = L0, t === null ? L0 : t;
    }
    function Cy() {
      var t = q.A;
      return q.A = iT, t;
    }
    function $o(t) {
      ll === null && (ll = t._debugTask == null ? null : t._debugTask);
    }
    function Wo() {
      Qe = Bf, xf || (_t & 4194048) !== _t && Xn.current !== null || (tm = !0), (jf & 134217727) === 0 && (qf & 134217727) === 0 || Se === null || un(
        Se,
        _t,
        dn,
        !1
      );
    }
    function ko(t, e, a) {
      var c = Kt;
      Kt |= Bl;
      var o = $d(), f = Cy();
      if (Se !== t || _t !== e) {
        if (Eu) {
          var d = t.memoizedUpdaters;
          0 < d.size && (Io(t, _t), d.clear()), xu(t, e);
        }
        F0 = null, du(t, e);
      }
      e = !1, d = Qe;
      t: do
        try {
          if (he !== rn && Bt !== null) {
            var h = Bt, y = Zn;
            switch (he) {
              case w1:
                Kd(), d = hg;
                break t;
              case $0:
              case Or:
              case Mr:
              case W0:
                Xn.current === null && (e = !0);
                var p = he;
                if (he = rn, Zn = null, Fo(t, h, y, p), a && tm) {
                  d = fo;
                  break t;
                }
                break;
              default:
                p = he, he = rn, Zn = null, Fo(t, h, y, p);
            }
          }
          Hy(), d = Qe;
          break;
        } catch (D) {
          _n(t, D);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Mo(), Kt = c, q.H = o, q.A = f, Bt === null && (Se = null, _t = 0, ud()), d;
    }
    function Hy() {
      for (; Bt !== null; ) Wd(Bt);
    }
    function Iu(t, e) {
      var a = Kt;
      Kt |= Bl;
      var c = $d(), o = Cy();
      if (Se !== t || _t !== e) {
        if (Eu) {
          var f = t.memoizedUpdaters;
          0 < f.size && (Io(t, _t), f.clear()), xu(t, e);
        }
        F0 = null, gg = Sl() + Wb, du(t, e);
      } else
        tm = Rl(
          t,
          e
        );
      t: do
        try {
          if (he !== rn && Bt !== null)
            e: switch (e = Bt, f = Zn, he) {
              case mg:
                he = rn, Zn = null, Fo(
                  t,
                  e,
                  f,
                  mg
                );
                break;
              case Or:
              case Mr:
                if (Zm(f)) {
                  he = rn, Zn = null, Ny(e);
                  break;
                }
                e = function() {
                  he !== Or && he !== Mr || Se !== t || (he = yg), ma(t);
                }, f.then(e, e);
                break t;
              case $0:
                he = yg;
                break t;
              case Jb:
                he = L1;
                break t;
              case yg:
                Zm(f) ? (he = rn, Zn = null, Ny(e)) : (he = rn, Zn = null, Fo(
                  t,
                  e,
                  f,
                  yg
                ));
                break;
              case L1:
                var d = null;
                switch (Bt.tag) {
                  case 26:
                    d = Bt.memoizedState;
                  case 5:
                  case 27:
                    var h = Bt;
                    if (d ? xt(d) : h.stateNode.complete) {
                      he = rn, Zn = null;
                      var y = h.sibling;
                      if (y !== null) Bt = y;
                      else {
                        var p = h.return;
                        p !== null ? (Bt = p, Vs(p)) : Bt = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                he = rn, Zn = null, Fo(
                  t,
                  e,
                  f,
                  L1
                );
                break;
              case W0:
                he = rn, Zn = null, Fo(
                  t,
                  e,
                  f,
                  W0
                );
                break;
              case w1:
                Kd(), Qe = hg;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          q.actQueue !== null ? Hy() : tl();
          break;
        } catch (D) {
          _n(t, D);
        }
      while (!0);
      return Mo(), q.H = c, q.A = o, Kt = a, Bt !== null ? fo : (Se = null, _t = 0, ud(), Qe);
    }
    function tl() {
      for (; Bt !== null && !Ah(); )
        Wd(Bt);
    }
    function Wd(t) {
      var e = t.alternate;
      (t.mode & Rt) !== pt ? (Qu(t), e = I(
        t,
        Bs,
        e,
        t,
        Pc
      ), dd(t)) : e = I(
        t,
        Bs,
        e,
        t,
        Pc
      ), t.memoizedProps = t.pendingProps, e === null ? Vs(t) : Bt = e;
    }
    function Ny(t) {
      var e = I(t, gl, t);
      t.memoizedProps = t.pendingProps, e === null ? Vs(t) : Bt = e;
    }
    function gl(t) {
      var e = t.alternate, a = (t.mode & Rt) !== pt;
      switch (a && Qu(t), t.tag) {
        case 15:
        case 0:
          e = oy(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            _t
          );
          break;
        case 11:
          e = oy(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            _t
          );
          break;
        case 5:
          Dc(t);
        default:
          my(e, t), t = Bt = xm(t, Pc), e = Bs(e, t, Pc);
      }
      return a && dd(t), e;
    }
    function Fo(t, e, a, c) {
      Mo(), Dc(e), wh = null, X0 = 0;
      var o = e.return;
      try {
        if (ey(
          t,
          o,
          e,
          a,
          _t
        )) {
          Qe = K0, _s(
            t,
            $l(a, t.current)
          ), Bt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Bt = o, f;
        Qe = K0, _s(
          t,
          $l(a, t.current)
        ), Bt = null;
        return;
      }
      e.flags & 32768 ? (Qt || c === mg ? t = !0 : tm || (_t & 536870912) !== 0 ? t = !1 : (xf = t = !0, (c === Or || c === Mr || c === $0 || c === W0) && (c = Xn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), By(e, t)) : Vs(e);
    }
    function Vs(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          By(
            e,
            xf
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, Qu(e), a = I(
          e,
          hy,
          a,
          e,
          Pc
        ), (e.mode & Rt) !== pt && ds(e), a !== null) {
          Bt = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          Bt = e;
          return;
        }
        Bt = e = t;
      } while (e !== null);
      Qe === fo && (Qe = wb);
    }
    function By(t, e) {
      do {
        var a = wp(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, Bt = a;
          return;
        }
        if ((t.mode & Rt) !== pt) {
          ds(t), a = t.actualDuration;
          for (var c = t.child; c !== null; )
            a += c.actualDuration, c = c.sibling;
          t.actualDuration = a;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          Bt = t;
          return;
        }
        Bt = t = a;
      } while (t !== null);
      Qe = hg, Bt = null;
    }
    function pe(t, e, a, c, o, f, d, h, y, p, D, M, b, B) {
      t.cancelPendingCommit = null;
      do
        Zs();
      while (Ol !== Gf);
      if (ic.flushLegacyContextWarning(), ic.flushPendingUnsafeLifecycleWarnings(), (Kt & (Bl | Vn)) !== wl)
        throw Error("Should not already be working.");
      if (gn(a), p === Dr ? _m(
        b,
        B,
        a,
        ll
      ) : c !== null ? $g(
        b,
        B,
        a,
        c,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        ll
      ) : Kg(
        b,
        B,
        a,
        ll
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= b1, Zg(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === Se && (Bt = Se = null, _t = 0), em = e, Xf = t, sc = a, k1 = f, I1 = o, e2 = c, F1 = B, l2 = M, rc = Sg, a2 = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Po($i, function() {
          return ap = window.event, rc === Sg && (rc = W1), Ls(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), lo = null, Uf = El(), M !== null && Wg(
          B,
          Uf,
          M,
          ll
        ), c = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || c) {
          c = q.T, q.T = null, o = It.p, It.p = il, d = Kt, Kt |= Vn;
          try {
            Ig(t, e, a);
          } finally {
            Kt = d, It.p = o, q.T = c;
          }
        }
        Ol = Fb, aa(), hu(), xy();
      }
    }
    function aa() {
      if (Ol === Fb) {
        Ol = Gf;
        var t = Xf, e = em, a = sc, c = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || c) {
          c = q.T, q.T = null;
          var o = It.p;
          It.p = il;
          var f = Kt;
          Kt |= Vn;
          try {
            Ih = a, Ph = t, bi(), Ys(e, t), Ph = Ih = null, a = fS;
            var d = ld(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && zp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Mm(h)) {
                var p = y.start, D = y.end;
                if (D === void 0 && (D = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    D,
                    h.value.length
                  );
                else {
                  var M = h.ownerDocument || document, b = M && M.defaultView || window;
                  if (b.getSelection) {
                    var B = b.getSelection(), W = h.textContent.length, F = Math.min(
                      y.start,
                      W
                    ), Ae = y.end === void 0 ? F : Math.min(y.end, W);
                    !B.extend && F > Ae && (d = Ae, Ae = F, F = d);
                    var Zt = Ap(
                      h,
                      F
                    ), S = Ap(
                      h,
                      Ae
                    );
                    if (Zt && S && (B.rangeCount !== 1 || B.anchorNode !== Zt.node || B.anchorOffset !== Zt.offset || B.focusNode !== S.node || B.focusOffset !== S.offset)) {
                      var E = M.createRange();
                      E.setStart(Zt.node, Zt.offset), B.removeAllRanges(), F > Ae ? (B.addRange(E), B.extend(S.node, S.offset)) : (E.setEnd(S.node, S.offset), B.addRange(E));
                    }
                  }
                }
              }
              for (M = [], B = h; B = B.parentNode; )
                B.nodeType === 1 && M.push({
                  element: B,
                  left: B.scrollLeft,
                  top: B.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < M.length; h++) {
                var z = M[h];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            xg = !!oS, fS = oS = null;
          } finally {
            Kt = f, It.p = o, q.T = c;
          }
        }
        t.current = e, Ol = Ib;
      }
    }
    function hu() {
      if (Ol === Ib) {
        Ol = Gf;
        var t = a2;
        if (t !== null) {
          Uf = El();
          var e = eo, a = Uf;
          !Re || a <= e || console.timeStamp(
            t,
            e,
            a,
            Lt,
            Vt,
            "secondary-light"
          );
        }
        t = Xf, e = em, a = sc;
        var c = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || c) {
          c = q.T, q.T = null;
          var o = It.p;
          It.p = il;
          var f = Kt;
          Kt |= Vn;
          try {
            Ih = a, Ph = t, bi(), Vd(
              t,
              e.alternate,
              e
            ), Ph = Ih = null;
          } finally {
            Kt = f, It.p = o, q.T = c;
          }
        }
        t = F1, e = l2, eo = El(), t = e === null ? t : Uf, e = eo, a = rc === $1, c = ll, lo !== null ? _p(
          t,
          e,
          lo,
          !1,
          c
        ) : !Re || e <= t || (c ? c.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            t,
            e,
            Lt,
            Vt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          t,
          e,
          Lt,
          Vt,
          a ? "error" : "secondary-dark"
        )), Ol = Pb;
      }
    }
    function xy() {
      if (Ol === t2 || Ol === Pb) {
        if (Ol === t2) {
          var t = eo;
          eo = El();
          var e = eo, a = rc === $1;
          !Re || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            Lt,
            Vt,
            a ? " error" : "secondary-light"
          ), rc !== $1 && (rc = kb);
        }
        Ol = Gf, zh(), t = Xf;
        var c = em;
        e = sc, a = e2;
        var o = c.actualDuration !== 0 || (c.subtreeFlags & 10256) !== 0 || (c.flags & 10256) !== 0;
        o ? Ol = bg : (Ol = Gf, em = Xf = null, jy(
          t,
          t.pendingLanes
        ), Ur = 0, P0 = null);
        var f = t.pendingLanes;
        if (f === 0 && (Yf = null), o || Id(t), f = Jl(e), c = c.stateNode, cl && typeof cl.onCommitFiberRoot == "function")
          try {
            var d = (c.current.flags & 128) === 128;
            switch (f) {
              case il:
                var h = d0;
                break;
              case Hl:
                h = Dh;
                break;
              case Vl:
                h = $i;
                break;
              case $c:
                h = Oh;
                break;
              default:
                h = $i;
            }
            cl.onCommitFiberRoot(
              Wi,
              c,
              h,
              d
            );
          } catch (M) {
            bu || (bu = !0, console.error(
              "React instrumentation encountered an error: %o",
              M
            ));
          }
        if (Eu && t.memoizedUpdaters.clear(), Ry(), a !== null) {
          d = q.T, h = It.p, It.p = il, q.T = null;
          try {
            var y = t.onRecoverableError;
            for (c = 0; c < a.length; c++) {
              var p = a[c], D = ev(p.stack);
              I(
                p.source,
                y,
                p.value,
                D
              );
            }
          } finally {
            q.T = d, It.p = h;
          }
        }
        (sc & 3) !== 0 && Zs(), ma(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (lg = !0, t === P1 ? I0++ : (I0 = 0, P1 = t)) : I0 = 0, o || Xc(e, eo), mu(0);
      }
    }
    function ev(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function jy(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, rs(e)));
    }
    function Zs() {
      return aa(), hu(), xy(), Ls();
    }
    function Ls() {
      if (Ol !== bg) return !1;
      var t = Xf, e = k1;
      k1 = 0;
      var a = Jl(sc), c = Vl > a ? Vl : a;
      a = q.T;
      var o = It.p;
      try {
        It.p = c, q.T = null;
        var f = I1;
        I1 = null, c = Xf;
        var d = sc;
        if (Ol = Gf, em = Xf = null, sc = 0, (Kt & (Bl | Vn)) !== wl)
          throw Error("Cannot flush passive effects while already rendering.");
        gn(d), tS = !0, Eg = !1;
        var h = 0;
        if (lo = null, h = Sl(), rc === kb)
          Cm(
            eo,
            h,
            tT
          );
        else {
          var y = eo, p = h, D = rc === W1;
          !Re || p <= y || (ll ? ll.run(
            console.timeStamp.bind(
              console,
              D ? "Waiting for Paint" : "Waiting",
              y,
              p,
              Lt,
              Vt,
              "secondary-light"
            )
          ) : console.timeStamp(
            D ? "Waiting for Paint" : "Waiting",
            y,
            p,
            Lt,
            Vt,
            "secondary-light"
          ));
        }
        y = Kt, Kt |= Vn;
        var M = c.current;
        bi(), wd(M);
        var b = c.current;
        M = F1, bi(), Dy(
          c,
          b,
          d,
          f,
          M
        ), Id(c), Kt = y;
        var B = Sl();
        if (b = h, M = ll, lo !== null ? _p(
          b,
          B,
          lo,
          !0,
          M
        ) : !Re || B <= b || (M ? M.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            b,
            B,
            Lt,
            Vt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          b,
          B,
          Lt,
          Vt,
          "secondary-dark"
        )), Xc(d, B), mu(0, !1), Eg ? c === P0 ? Ur++ : (Ur = 0, P0 = c) : Ur = 0, Eg = tS = !1, cl && typeof cl.onPostCommitFiberRoot == "function")
          try {
            cl.onPostCommitFiberRoot(Wi, c);
          } catch (F) {
            bu || (bu = !0, console.error(
              "React instrumentation encountered an error: %o",
              F
            ));
          }
        var W = c.current.stateNode;
        return W.effectDuration = 0, W.passiveEffectDuration = 0, !0;
      } finally {
        It.p = o, q.T = a, jy(t, e);
      }
    }
    function na(t, e, a) {
      e = $l(a, e), jp(e), e = Rd(t.stateNode, e, 2), t = eu(t, e, 2), t !== null && (dc(t, 2), ma(t));
    }
    function zt(t, e, a) {
      if (lm = !1, t.tag === 3)
        na(t, t, a);
      else {
        for (; e !== null; ) {
          if (e.tag === 3) {
            na(
              e,
              t,
              a
            );
            return;
          }
          if (e.tag === 1) {
            var c = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Yf === null || !Yf.has(c))) {
              t = $l(a, t), jp(t), a = Ud(2), c = eu(e, a, 2), c !== null && (_d(
                a,
                c,
                e,
                t
              ), dc(c, 2), ma(c));
              return;
            }
          }
          e = e.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function kd(t, e, a) {
      var c = t.pingCache;
      if (c === null) {
        c = t.pingCache = new fT();
        var o = /* @__PURE__ */ new Set();
        c.set(e, o);
      } else
        o = c.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), c.set(e, o));
      o.has(a) || (J1 = !0, o.add(a), c = ha.bind(null, t, e, a), Eu && Io(t, a), e.then(c, c));
    }
    function ha(t, e, a) {
      var c = t.pingCache;
      c !== null && c.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Fc && (pr = Fc = El(), R0 = kv("Promise Resolved"), _f = Fv) : (a & 4194048) !== 0 && 0 > Uu && (ao = Uu = El(), _0 = kv("Promise Resolved"), M1 = Fv), Uy() && q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Se === t && (_t & a) === a && (Qe === Bf || Qe === dg && (_t & 62914560) === _t && Sl() - vg < $b ? (Kt & Bl) === wl && du(t, 0) : K1 |= a, Rr === _t && (Rr = 0)), ma(t);
    }
    function qy(t, e) {
      e === 0 && (e = Gr()), t = Yl(t, e), t !== null && (dc(t, e), ma(t));
    }
    function Pu(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), qy(t, a);
    }
    function Gi(t, e) {
      var a = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var c = t.stateNode, o = t.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          c = t.stateNode;
          break;
        case 22:
          c = t.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      c !== null && c.delete(e), qy(t, a);
    }
    function Cn(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var c = t, o = e, f = o.type === ia;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && I(
            o,
            Fd,
            c,
            o
          ) : Cn(
            c,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? I(
            o,
            Fd,
            c,
            o
          ) : o.subtreeFlags & 67108864 && I(
            o,
            Cn,
            c,
            o,
            f
          )), e = e.sibling;
        }
    }
    function Fd(t, e) {
      me(!0);
      try {
        Zd(e), My(e), zy(t, e.alternate, e, !1), Qs(t, e, 0, null, !1, 0);
      } finally {
        me(!1);
      }
    }
    function Id(t) {
      var e = !0;
      t.current.mode & (Sa | cc) || (e = !1), Cn(
        t,
        t.current,
        e
      );
    }
    function cn(t) {
      if ((Kt & Bl) === wl) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = ut(t) || "ReactComponent", Tg !== null) {
            if (Tg.has(e)) return;
            Tg.add(e);
          } else Tg = /* @__PURE__ */ new Set([e]);
          I(t, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Io(t, e) {
      Eu && t.memoizedUpdaters.forEach(function(a) {
        sa(t, a, e);
      });
    }
    function Po(t, e) {
      var a = q.actQueue;
      return a !== null ? (a.push(e), dT) : r0(t, e);
    }
    function ws(t) {
      Uy() && q.actQueue === null && I(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          ut(t)
        );
      });
    }
    function ma(t) {
      t !== am && t.next === null && (am === null ? Ag = am = t : am = am.next = t), zg = !0, q.actQueue !== null ? lS || (lS = !0, av()) : eS || (eS = !0, av());
    }
    function mu(t, e) {
      if (!aS && zg) {
        aS = !0;
        do
          for (var a = !1, c = Ag; c !== null; ) {
            if (t !== 0) {
              var o = c.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = c.suspendedLanes, h = c.pingedLanes;
                f = (1 << 31 - Cl(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, Js(c, f));
            } else
              f = _t, f = Yr(
                c,
                c === Se ? f : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== Nr
              ), (f & 3) === 0 || Rl(c, f) || (a = !0, Js(c, f));
            c = c.next;
          }
        while (a);
        aS = !1;
      }
    }
    function lv() {
      ap = window.event, Pd();
    }
    function Pd() {
      zg = lS = eS = !1;
      var t = 0;
      Qf !== 0 && Qy() && (t = Qf);
      for (var e = Sl(), a = null, c = Ag; c !== null; ) {
        var o = c.next, f = tf(c, e);
        f === 0 ? (c.next = null, a === null ? Ag = o : a.next = o, o === null && (am = a)) : (a = c, (t !== 0 || (f & 3) !== 0) && (zg = !0)), c = o;
      }
      Ol !== Gf && Ol !== bg || mu(t), Qf !== 0 && (Qf = 0);
    }
    function tf(t, e) {
      for (var a = t.suspendedLanes, c = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Cl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & c) !== 0) && (o[d] = Vg(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = Se, a = _t, a = Yr(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Nr
      ), c = t.callbackNode, a === 0 || t === e && (he === Or || he === Mr) || t.cancelPendingCommit !== null)
        return c !== null && th(c), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || Rl(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || q.actQueue !== null && c !== nS)
          th(c);
        else return e;
        switch (Jl(a)) {
          case il:
          case Hl:
            a = Dh;
            break;
          case Vl:
            a = $i;
            break;
          case $c:
            a = Oh;
            break;
          default:
            a = $i;
        }
        return c = Yy.bind(null, t), q.actQueue !== null ? (q.actQueue.push(c), a = nS) : a = r0(a, c), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return c !== null && th(c), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Yy(t, e) {
      if (lg = eg = !1, ap = window.event, Ol !== Gf && Ol !== bg)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (rc === Sg && (rc = W1), Zs() && t.callbackNode !== a)
        return null;
      var c = _t;
      return c = Yr(
        t,
        t === Se ? c : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Nr
      ), c === 0 ? null : (Ip(
        t,
        c,
        e
      ), tf(t, Sl()), t.callbackNode != null && t.callbackNode === a ? Yy.bind(null, t) : null);
    }
    function Js(t, e) {
      if (Zs()) return null;
      eg = lg, lg = !1, Ip(t, e, !0);
    }
    function th(t) {
      t !== nS && t !== null && Th(t);
    }
    function av() {
      q.actQueue !== null && q.actQueue.push(function() {
        return Pd(), null;
      }), TT(function() {
        (Kt & (Bl | Vn)) !== wl ? r0(
          d0,
          lv
        ) : Pd();
      });
    }
    function Gy() {
      if (Qf === 0) {
        var t = Sr;
        t === 0 && (t = Sf, Sf <<= 1, (Sf & 261888) === 0 && (Sf = 256)), Qf = t;
      }
      return Qf;
    }
    function $t(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (ie(t, "action"), es("" + t));
    }
    function se(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function Yt(t, e, a, c, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = $t(
          (o[oa] || null).action
        ), d = c.submitter;
        d && (e = (e = d[oa] || null) ? $t(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
        var h = new Zv(
          "action",
          "action",
          null,
          c,
          o
        );
        t.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (c.defaultPrevented) {
                  if (Qf !== 0) {
                    var y = d ? se(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), Wu(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? se(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), Wu(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Nt(t, e, a) {
      t.currentTarget = a;
      try {
        e(t);
      } catch (c) {
        p1(c);
      }
      t.currentTarget = null;
    }
    function le(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        t: {
          var o = void 0, f = c.event;
          if (c = c.listeners, e)
            for (var d = c.length - 1; 0 <= d; d--) {
              var h = c[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? I(
                y,
                Nt,
                f,
                h,
                p
              ) : Nt(f, h, p), o = y;
            }
          else
            for (d = 0; d < c.length; d++) {
              if (h = c[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? I(
                y,
                Nt,
                f,
                h,
                p
              ) : Nt(f, h, p), o = y;
            }
        }
      }
    }
    function mt(t, e) {
      uS.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[ki];
      a === void 0 && (a = e[ki] = /* @__PURE__ */ new Set());
      var c = t + "__bubble";
      a.has(c) || (eh(e, t, 2, !1), a.add(c));
    }
    function yu(t, e, a) {
      uS.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var c = 0;
      e && (c |= 4), eh(
        a,
        t,
        c,
        e
      );
    }
    function Qc(t) {
      if (!t[Dg]) {
        t[Dg] = !0, Yv.forEach(function(a) {
          a !== "selectionchange" && (uS.has(a) || yu(a, !1, t), yu(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Dg] || (e[Dg] = !0, yu("selectionchange", !1, e));
      }
    }
    function eh(t, e, a, c) {
      switch (yh(e)) {
        case il:
          var o = t0;
          break;
        case Hl:
          o = _l;
          break;
        default:
          o = e0;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !c1 || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), c ? o !== void 0 ? t.addEventListener(e, a, {
        capture: !0,
        passive: o
      }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, {
        passive: o
      }) : t.addEventListener(
        e,
        a,
        !1
      );
    }
    function Hn(t, e, a, c, o) {
      var f = c;
      if ((e & 1) === 0 && (e & 2) === 0 && c !== null)
        t: for (; ; ) {
          if (c === null) return;
          var d = c.tag;
          if (d === 3 || d === 4) {
            var h = c.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = c.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = ju(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                c = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          c = c.return;
        }
      Ir(function() {
        var p = f, D = pn(a), M = [];
        t: {
          var b = GS.get(t);
          if (b !== void 0) {
            var B = Zv, W = t;
            switch (t) {
              case "keypress":
                if (ls(a) === 0) break t;
              case "keydown":
              case "keyup":
                B = ME;
                break;
              case "focusin":
                W = "focus", B = s1;
                break;
              case "focusout":
                W = "blur", B = s1;
                break;
              case "beforeblur":
              case "afterblur":
                B = s1;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                B = DS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                B = yE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                B = _E;
                break;
              case xS:
              case jS:
              case qS:
                B = gE;
                break;
              case YS:
                B = HE;
                break;
              case "scroll":
              case "scrollend":
                B = hE;
                break;
              case "wheel":
                B = BE;
                break;
              case "copy":
              case "cut":
              case "paste":
                B = bE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                B = MS;
                break;
              case "toggle":
              case "beforetoggle":
                B = jE;
            }
            var F = (e & 4) !== 0, Ae = !F && (t === "scroll" || t === "scrollend"), Zt = F ? b !== null ? b + "Capture" : null : b;
            F = [];
            for (var S = p, E; S !== null; ) {
              var z = S;
              if (E = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || E === null || Zt === null || (z = Wn(S, Zt), z != null && F.push(
                ve(
                  S,
                  z,
                  E
                )
              )), Ae) break;
              S = S.return;
            }
            0 < F.length && (b = new B(
              b,
              W,
              null,
              a,
              D
            ), M.push({
              event: b,
              listeners: F
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (b = t === "mouseover" || t === "pointerover", B = t === "mouseout" || t === "pointerout", b && a !== v0 && (W = a.relatedTarget || a.fromElement) && (ju(W) || W[uc]))
              break t;
            if ((B || b) && (b = D.window === D ? D : (b = D.ownerDocument) ? b.defaultView || b.parentWindow : window, B ? (W = a.relatedTarget || a.toElement, B = p, W = W ? ju(W) : null, W !== null && (Ae = ne(W), F = W.tag, W !== Ae || F !== 5 && F !== 27 && F !== 6) && (W = null)) : (B = null, W = p), B !== W)) {
              if (F = DS, z = "onMouseLeave", Zt = "onMouseEnter", S = "mouse", (t === "pointerout" || t === "pointerover") && (F = MS, z = "onPointerLeave", Zt = "onPointerEnter", S = "pointer"), Ae = B == null ? b : hc(B), E = W == null ? b : hc(W), b = new F(
                z,
                S + "leave",
                B,
                a,
                D
              ), b.target = Ae, b.relatedTarget = E, z = null, ju(D) === p && (F = new F(
                Zt,
                S + "enter",
                W,
                a,
                D
              ), F.target = E, F.relatedTarget = Ae, z = F), Ae = z, B && W)
                e: {
                  for (F = Xi, Zt = B, S = W, E = 0, z = Zt; z; z = F(z))
                    E++;
                  z = 0;
                  for (var X = S; X; X = F(X))
                    z++;
                  for (; 0 < E - z; )
                    Zt = F(Zt), E--;
                  for (; 0 < z - E; )
                    S = F(S), z--;
                  for (; E--; ) {
                    if (Zt === S || S !== null && Zt === S.alternate) {
                      F = Zt;
                      break e;
                    }
                    Zt = F(Zt), S = F(S);
                  }
                  F = null;
                }
              else F = null;
              B !== null && lh(
                M,
                b,
                B,
                F,
                !1
              ), W !== null && Ae !== null && lh(
                M,
                Ae,
                W,
                F,
                !0
              );
            }
          }
          t: {
            if (b = p ? hc(p) : window, B = b.nodeName && b.nodeName.toLowerCase(), B === "select" || B === "input" && b.type === "file")
              var k = vc;
            else if (zm(b))
              if (NS)
                k = cs;
              else {
                k = Dm;
                var bt = Jg;
              }
            else
              B = b.nodeName, !B || B.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && $n(p.elementType) && (k = vc) : k = Om;
            if (k && (k = k(t, p))) {
              ns(
                M,
                k,
                a,
                D
              );
              break t;
            }
            bt && bt(t, b, p), t === "focusout" && p && b.type === "number" && p.memoizedProps.value != null && ym(b, "number", b.value);
          }
          switch (bt = p ? hc(p) : window, t) {
            case "focusin":
              (zm(bt) || bt.contentEditable === "true") && (Bh = bt, d1 = p, z0 = null);
              break;
            case "focusout":
              z0 = d1 = Bh = null;
              break;
            case "mousedown":
              h1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              h1 = !1, Dp(
                M,
                a,
                D
              );
              break;
            case "selectionchange":
              if (XE) break;
            case "keydown":
            case "keyup":
              Dp(
                M,
                a,
                D
              );
          }
          var ft;
          if (r1)
            t: {
              switch (t) {
                case "compositionstart":
                  var at = "onCompositionStart";
                  break t;
                case "compositionend":
                  at = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  at = "onCompositionUpdate";
                  break t;
              }
              at = void 0;
            }
          else
            Nh ? To(t, a) && (at = "onCompositionEnd") : t === "keydown" && a.keyCode === RS && (at = "onCompositionStart");
          at && (US && a.locale !== "ko" && (Nh || at !== "onCompositionStart" ? at === "onCompositionEnd" && Nh && (ft = si()) : (zf = D, i1 = "value" in zf ? zf.value : zf.textContent, Nh = !0)), bt = Nn(
            p,
            at
          ), 0 < bt.length && (at = new OS(
            at,
            t,
            null,
            a,
            D
          ), M.push({
            event: at,
            listeners: bt
          }), ft ? at.data = ft : (ft = Gu(a), ft !== null && (at.data = ft)))), (ft = YE ? Am(t, a) : Pr(t, a)) && (at = Nn(
            p,
            "onBeforeInput"
          ), 0 < at.length && (bt = new TE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            D
          ), M.push({
            event: bt,
            listeners: at
          }), bt.data = ft)), Yt(
            M,
            t,
            p,
            a,
            D
          );
        }
        le(M, e);
      });
    }
    function ve(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function Nn(t, e) {
      for (var a = e + "Capture", c = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Wn(t, a), o != null && c.unshift(
          ve(t, o, f)
        ), o = Wn(t, e), o != null && c.push(
          ve(t, o, f)
        )), t.tag === 3) return c;
        t = t.return;
      }
      return [];
    }
    function Xi(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function lh(t, e, a, c, o) {
      for (var f = e._reactName, d = []; a !== null && a !== c; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === c) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = Wn(a, f), p != null && d.unshift(
          ve(a, p, y)
        )) : o || (p = Wn(a, f), p != null && d.push(
          ve(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function ua(t, e) {
      bp(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || AS || (AS = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: Tu,
        possibleRegistrationNames: Tf
      };
      $n(t) || typeof e.is == "string" || wg(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ne(t, e, a, c) {
      e !== a && (a = Bn(a), Bn(e) !== a && (c[t] = e));
    }
    function Ks(t, e, a) {
      e.forEach(function(c) {
        a[tc(c)] = c === "style" ? Vc(t) : t.getAttribute(c);
      });
    }
    function Be(t, e) {
      e === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        t,
        t,
        t
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        t,
        typeof e
      );
    }
    function ah(t, e) {
      return t = t.namespaceURI === Et || t.namespaceURI === Dt ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function Bn(t) {
      return Ln(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Wf(t)
      ), ei(t)), (typeof t == "string" ? t : "" + t).replace(hT, `
`).replace(mT, "");
    }
    function Xy(t, e) {
      return e = Bn(e), Bn(t) === e;
    }
    function Ft(t, e, a, c, o, f) {
      switch (a) {
        case "children":
          typeof c == "string" ? (ts(c, e, !1), e === "body" || e === "textarea" && c === "" || fi(t, c)) : (typeof c == "number" || typeof c == "bigint") && (ts("" + c, e, !1), e !== "body" && fi(t, "" + c));
          break;
        case "className":
          Ff(t, "class", c);
          break;
        case "tabIndex":
          Ff(t, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ff(t, a, c);
          break;
        case "style":
          bm(t, c, f);
          break;
        case "data":
          if (e !== "object") {
            Ff(t, "data", c);
            break;
          }
        case "src":
        case "href":
          if (c === "" && (e !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), t.removeAttribute(a);
            break;
          }
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ie(c, a), c = es("" + c), t.setAttribute(a, c);
          break;
        case "action":
        case "formAction":
          if (c != null && (e === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof c == "function" && (o.encType == null && o.method == null || Rg || (Rg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Mg || (Mg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : e === "input" || e === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Og ? e !== "button" || o.type == null || o.type === "submit" || Og ? typeof c == "function" && (o.name == null || o2 || (o2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Rg || (Rg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Mg || (Mg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Og = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Og = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof c == "function") {
            t.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (e !== "input" && Ft(t, e, "name", o.name, o, null), Ft(
              t,
              e,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Ft(
              t,
              e,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Ft(
              t,
              e,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Ft(
              t,
              e,
              "encType",
              o.encType,
              o,
              null
            ), Ft(t, e, "method", o.method, o, null), Ft(
              t,
              e,
              "target",
              o.target,
              o,
              null
            )));
          if (c == null || typeof c == "symbol" || typeof c == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ie(c, a), c = es("" + c), t.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (typeof c != "function" && Be(a, c), t.onclick = ka);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && Be(a, c), mt("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && Be(a, c), mt("scrollend", t));
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "muted":
          t.muted = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          ie(c, a), a = es("" + c), t.setAttributeNS(_r, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? (ie(c, a), t.setAttribute(a, "" + c)) : t.removeAttribute(a);
          break;
        case "inert":
          c !== "" || Ug[a] || (Ug[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          c && typeof c != "function" && typeof c != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          c === !0 ? t.setAttribute(a, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? (ie(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? (ie(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? t.removeAttribute(a) : (ie(c, a), t.setAttribute(a, c));
          break;
        case "popover":
          mt("beforetoggle", t), mt("toggle", t), Qr(t, "popover", c);
          break;
        case "xlinkActuate":
          wn(
            t,
            _r,
            "xlink:actuate",
            c
          );
          break;
        case "xlinkArcrole":
          wn(
            t,
            _r,
            "xlink:arcrole",
            c
          );
          break;
        case "xlinkRole":
          wn(
            t,
            _r,
            "xlink:role",
            c
          );
          break;
        case "xlinkShow":
          wn(
            t,
            _r,
            "xlink:show",
            c
          );
          break;
        case "xlinkTitle":
          wn(
            t,
            _r,
            "xlink:title",
            c
          );
          break;
        case "xlinkType":
          wn(
            t,
            _r,
            "xlink:type",
            c
          );
          break;
        case "xmlBase":
          wn(
            t,
            cS,
            "xml:base",
            c
          );
          break;
        case "xmlLang":
          wn(
            t,
            cS,
            "xml:lang",
            c
          );
          break;
        case "xmlSpace":
          wn(
            t,
            cS,
            "xml:space",
            c
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Qr(t, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          f2 || c == null || typeof c != "object" || (f2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            c
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = gp(a), Qr(t, a, c)) : Tu.hasOwnProperty(a) && c != null && typeof c != "function" && Be(a, c);
      }
    }
    function ef(t, e, a, c, o, f) {
      switch (a) {
        case "style":
          bm(t, c, f);
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof c == "string" ? fi(t, c) : (typeof c == "number" || typeof c == "bigint") && fi(t, "" + c);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && Be(a, c), mt("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && Be(a, c), mt("scrollend", t));
          break;
        case "onClick":
          c != null && (typeof c != "function" && Be(a, c), t.onclick = ka);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Tu.hasOwnProperty(a))
            c != null && typeof c != "function" && Be(a, c);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[oa] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof c == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, c, o);
                break t;
              }
              a in t ? t[a] = c : c === !0 ? t.setAttribute(a, "") : Qr(t, a, c);
            }
      }
    }
    function Oe(t, e, a) {
      switch (ua(e, a), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          mt("error", t), mt("load", t);
          var c = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    c = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Ft(t, e, f, d, a, null);
                }
            }
          o && Ft(t, e, "srcSet", a.srcSet, a, null), c && Ft(t, e, "src", a.src, a, null);
          return;
        case "input":
          ni("input", a), mt("invalid", t);
          var h = f = d = o = null, y = null, p = null;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var D = a[c];
              if (D != null)
                switch (c) {
                  case "name":
                    o = D;
                    break;
                  case "type":
                    d = D;
                    break;
                  case "checked":
                    y = D;
                    break;
                  case "defaultChecked":
                    p = D;
                    break;
                  case "value":
                    f = D;
                    break;
                  case "defaultValue":
                    h = D;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (D != null)
                      throw Error(
                        e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Ft(t, e, c, D, a, null);
                }
            }
          Kl(t, a), Lr(
            t,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ni("select", a), mt("invalid", t), c = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  c = h;
                default:
                  Ft(
                    t,
                    e,
                    o,
                    h,
                    a,
                    null
                  );
              }
          wr(t, a), e = f, a = d, t.multiple = !!c, e != null ? Jn(t, !!c, e, !1) : a != null && Jn(t, !!c, a, !0);
          return;
        case "textarea":
          ni("textarea", a), mt("invalid", t), f = o = c = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  c = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Ft(
                    t,
                    e,
                    d,
                    h,
                    a,
                    null
                  );
              }
          ui(t, a), po(t, c, o, f);
          return;
        case "option":
          vp(t, a);
          for (y in a)
            a.hasOwnProperty(y) && (c = a[y], c != null) && (y === "selected" ? t.selected = c && typeof c != "function" && typeof c != "symbol" : Ft(t, e, y, c, a, null));
          return;
        case "dialog":
          mt("beforetoggle", t), mt("toggle", t), mt("cancel", t), mt("close", t);
          break;
        case "iframe":
        case "object":
          mt("load", t);
          break;
        case "video":
        case "audio":
          for (c = 0; c < tp.length; c++)
            mt(tp[c], t);
          break;
        case "image":
          mt("error", t), mt("load", t);
          break;
        case "details":
          mt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          mt("error", t), mt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (c = a[p], c != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Ft(t, e, p, c, a, null);
              }
          return;
        default:
          if ($n(e)) {
            for (D in a)
              a.hasOwnProperty(D) && (c = a[D], c !== void 0 && ef(
                t,
                e,
                D,
                c,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (c = a[h], c != null && Ft(t, e, h, c, a, null));
    }
    function ul(t, e, a, c) {
      switch (ua(e, c), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, D = null;
          for (B in a) {
            var M = a[B];
            if (a.hasOwnProperty(B) && M != null)
              switch (B) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = M;
                default:
                  c.hasOwnProperty(B) || Ft(
                    t,
                    e,
                    B,
                    null,
                    c,
                    M
                  );
              }
          }
          for (var b in c) {
            var B = c[b];
            if (M = a[b], c.hasOwnProperty(b) && (B != null || M != null))
              switch (b) {
                case "type":
                  f = B;
                  break;
                case "name":
                  o = B;
                  break;
                case "checked":
                  p = B;
                  break;
                case "defaultChecked":
                  D = B;
                  break;
                case "value":
                  d = B;
                  break;
                case "defaultValue":
                  h = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  B !== M && Ft(
                    t,
                    e,
                    b,
                    B,
                    c,
                    M
                  );
              }
          }
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, c = c.type === "checkbox" || c.type === "radio" ? c.checked != null : c.value != null, e || !c || i2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), i2 = !0), !e || c || c2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), c2 = !0), mc(
            t,
            d,
            h,
            y,
            p,
            D,
            f,
            o
          );
          return;
        case "select":
          B = d = h = b = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  B = y;
                default:
                  c.hasOwnProperty(f) || Ft(
                    t,
                    e,
                    f,
                    null,
                    c,
                    y
                  );
              }
          for (o in c)
            if (f = c[o], y = a[o], c.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  b = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Ft(
                    t,
                    e,
                    o,
                    f,
                    c,
                    y
                  );
              }
          c = h, e = d, a = B, b != null ? Jn(t, !!e, b, !1) : !!a != !!e && (c != null ? Jn(t, !!e, c, !0) : Jn(t, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          B = b = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !c.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Ft(t, e, h, null, c, o);
              }
          for (d in c)
            if (o = c[d], f = a[d], c.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  b = o;
                  break;
                case "defaultValue":
                  B = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Ft(t, e, d, o, c, f);
              }
          ci(t, b, B);
          return;
        case "option":
          for (var W in a)
            b = a[W], a.hasOwnProperty(W) && b != null && !c.hasOwnProperty(W) && (W === "selected" ? t.selected = !1 : Ft(
              t,
              e,
              W,
              null,
              c,
              b
            ));
          for (y in c)
            b = c[y], B = a[y], c.hasOwnProperty(y) && b !== B && (b != null || B != null) && (y === "selected" ? t.selected = b && typeof b != "function" && typeof b != "symbol" : Ft(
              t,
              e,
              y,
              b,
              c,
              B
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var F in a)
            b = a[F], a.hasOwnProperty(F) && b != null && !c.hasOwnProperty(F) && Ft(
              t,
              e,
              F,
              null,
              c,
              b
            );
          for (p in c)
            if (b = c[p], B = a[p], c.hasOwnProperty(p) && b !== B && (b != null || B != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Ft(
                    t,
                    e,
                    p,
                    b,
                    c,
                    B
                  );
              }
          return;
        default:
          if ($n(e)) {
            for (var Ae in a)
              b = a[Ae], a.hasOwnProperty(Ae) && b !== void 0 && !c.hasOwnProperty(Ae) && ef(
                t,
                e,
                Ae,
                void 0,
                c,
                b
              );
            for (D in c)
              b = c[D], B = a[D], !c.hasOwnProperty(D) || b === B || b === void 0 && B === void 0 || ef(
                t,
                e,
                D,
                b,
                c,
                B
              );
            return;
          }
      }
      for (var Zt in a)
        b = a[Zt], a.hasOwnProperty(Zt) && b != null && !c.hasOwnProperty(Zt) && Ft(t, e, Zt, null, c, b);
      for (M in c)
        b = c[M], B = a[M], !c.hasOwnProperty(M) || b === B || b == null && B == null || Ft(t, e, M, b, c, B);
    }
    function tc(t) {
      switch (t) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return t;
      }
    }
    function Vc(t) {
      var e = {};
      t = t.style;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        e[c] = t.getPropertyValue(c);
      }
      return e;
    }
    function pu(t, e, a) {
      if (e != null && typeof e != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var c, o = c = "", f;
        for (f in e)
          if (e.hasOwnProperty(f)) {
            var d = e[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (om(d, f), c += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || lt.has(f) ? (om(d, f), c += o + f.replace(Y, "-$1").toLowerCase().replace(et, "-ms-") + ":" + ("" + d).trim()) : c += o + f.replace(Y, "-$1").toLowerCase().replace(et, "-ms-") + ":" + d + "px", o = ";");
          }
        c = c || null, e = t.getAttribute("style"), e !== c && (c = Bn(c), Bn(e) !== c && (a.style = Vc(t)));
      }
    }
    function ya(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ie(c, e), t === "" + c)
              return;
        }
      Ne(e, t, c, f);
    }
    function nh(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
        }
        if (!c) return;
      } else
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (c) return;
        }
      Ne(e, t, c, f);
    }
    function uh(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (ie(c, a), t === "" + c)
              return;
        }
      Ne(e, t, c, f);
    }
    function lf(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(c)) return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(c) && (ie(c, e), t === "" + c))
              return;
        }
      Ne(e, t, c, f);
    }
    function $s(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ie(c, e), a = es("" + c), t === a)
              return;
        }
      Ne(e, t, c, f);
    }
    function pa(t, e, a, c) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = t.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if ($n(e)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Tu.hasOwnProperty(y))
                typeof p != "function" && Be(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || Ne(
                      "children",
                      t.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = ah(t, p), Ne(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), pu(t, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = yo(
                      t,
                      "class",
                      p
                    ), Ne(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    c.context === so && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = yo(
                      t,
                      y,
                      p
                    ), Ne(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Tu.hasOwnProperty(p))
              typeof y != "function" && Be(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || Ne(
                    "children",
                    t.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = ah(t, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  ya(
                    t,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  ya(
                    t,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), pu(t, y, o);
                  continue;
                case "multiple":
                  f.delete(p), Ne(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), Ne(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ne(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), Ne(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || e === "a" && p === "href" || e === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  $s(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = t.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === yT) {
                    f.delete(p.toLowerCase()), Ne(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  $s(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  $s(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  uh(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  uh(
                    t,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  uh(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  nh(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  t: {
                    h = t;
                    var D = d = p, M = o;
                    if (f.delete(D), h = h.getAttribute(D), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break t;
                        default:
                          if (y === !1) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break t;
                          break;
                        default:
                          if (ie(y, d), h === "" + y)
                            break t;
                      }
                    Ne(
                      d,
                      h,
                      y,
                      M
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  t: {
                    if (h = t, D = d = p, M = o, f.delete(D), h = h.getAttribute(D), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break t;
                        default:
                          if (isNaN(y) || 1 > y) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (ie(y, d), h === "" + y))
                            break t;
                      }
                    Ne(
                      d,
                      h,
                      y,
                      M
                    );
                  }
                  continue;
                case "rowSpan":
                  lf(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  lf(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  ya(
                    t,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  ya(
                    t,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  ya(
                    t,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  ya(
                    t,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  ya(
                    t,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  ya(
                    t,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  ya(
                    t,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  ya(
                    t,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  ya(
                    t,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  ya(
                    t,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Ug[p] || (Ug[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), nh(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = gp(p), d = !1, c.context === so && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (D = p.toLowerCase(), D = Yn.hasOwnProperty(
                      D
                    ) && Yn[D] || null, D !== null && D !== p && (d = !0, f.delete(D)), f.delete(h));
                    t: if (D = t, M = h, h = y, kf(M))
                      if (D.hasAttribute(M))
                        D = D.getAttribute(
                          M
                        ), ie(
                          h,
                          M
                        ), h = D === "" + h ? h : D;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break t;
                          case "boolean":
                            if (D = M.toLowerCase().slice(0, 5), D !== "data-" && D !== "aria-")
                              break t;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Ne(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Ks(t, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function nv(t, e) {
      switch (t.length) {
        case 0:
          return "";
        case 1:
          return t[0];
        case 2:
          return t[0] + " " + e + " " + t[1];
        default:
          return t.slice(0, -1).join(", ") + ", " + e + " " + t[t.length - 1];
      }
    }
    function ca(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function uv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), c = 0; c < a.length; c++) {
          var o = a[c], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && ca(d)) {
            for (d = 0, h = o.responseEnd, c += 1; c < a.length; c++) {
              var y = a[c], p = y.startTime;
              if (p > h) break;
              var D = y.transferSize, M = y.initiatorType;
              D && ca(M) && (y = y.responseEnd, d += D * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--c, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function Ws(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function cv(t) {
      switch (t) {
        case Dt:
          return um;
        case Et:
          return Cg;
        default:
          return so;
      }
    }
    function ec(t, e) {
      if (t === so)
        switch (e) {
          case "svg":
            return um;
          case "math":
            return Cg;
          default:
            return so;
        }
      return t === um && e === "foreignObject" ? so : t;
    }
    function af(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function Qy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === sS ? !1 : (sS = t, !0) : (sS = null, !1);
    }
    function vu() {
      var t = window.event;
      return t && t !== ap ? t.type : null;
    }
    function nf() {
      var t = window.event;
      return t && t !== ap ? t.timeStamp : -1.1;
    }
    function iv(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function ov(t, e, a) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && t.focus();
          break;
        case "img":
          a.src ? t.src = a.src : a.srcSet && (t.srcset = a.srcSet);
      }
    }
    function fv() {
    }
    function ch(t, e, a, c) {
      ul(t, e, a, c), t[oa] = c;
    }
    function ih(t) {
      fi(t, "");
    }
    function Pg(t, e, a) {
      t.nodeValue = a;
    }
    function sv(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[oa] || null;
        if (e !== null) {
          var a = hn(t);
          a !== null && (typeof e.children == "string" || typeof e.children == "number" ? (t.__reactWarnedAboutChildrenConflict = !0, I(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : e.dangerouslySetInnerHTML != null && (t.__reactWarnedAboutChildrenConflict = !0, I(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function Zc(t) {
      return t === "head";
    }
    function rv(t, e) {
      t.removeChild(e);
    }
    function dv(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function Qi(t, e) {
      var a = e, c = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === lp || a === _g) {
            if (c === 0) {
              t.removeChild(o), wi(e);
              return;
            }
            c--;
          } else if (a === ep || a === Vf || a === Hr || a === nm || a === Cr)
            c++;
          else if (a === vT)
            ac(
              t.ownerDocument.documentElement
            );
          else if (a === ST) {
            a = t.ownerDocument.head, ac(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Ef] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === gT && ac(t.ownerDocument.body);
        a = o;
      } while (a);
      wi(e);
    }
    function ks(t, e) {
      var a = t;
      t = 0;
      do {
        var c = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), c && c.nodeType === 8)
          if (a = c.data, a === lp) {
            if (t === 0) break;
            t--;
          } else
            a !== ep && a !== Vf && a !== Hr && a !== nm || t++;
        a = c;
      } while (a);
    }
    function hv(t) {
      ks(t, !0);
    }
    function mv(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function yv(t) {
      t.nodeValue = "";
    }
    function pv(t) {
      ks(t, !1);
    }
    function vv(t, e) {
      e = e[bT], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function gv(t, e) {
      t.nodeValue = e;
    }
    function uf(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            uf(a), dm(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(a);
      }
    }
    function Sv(t, e, a, c) {
      for (; t.nodeType === 1; ) {
        var o = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!c && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (c) {
          if (!t[Ef])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (f = t.getAttribute("src"), (f !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          ie(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = qa(t.nextSibling), t === null) break;
      }
      return null;
    }
    function bv(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = qa(t.nextSibling), t === null)) return null;
      return t;
    }
    function ae(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = qa(t.nextSibling), t === null)) return null;
      return t;
    }
    function Fs(t) {
      return t.data === Vf || t.data === Hr;
    }
    function Vy(t) {
      return t.data === nm || t.data === Vf && t.ownerDocument.readyState !== r2;
    }
    function Ev(t, e) {
      var a = t.ownerDocument;
      if (t.data === Hr)
        t._reactRetry = e;
      else if (t.data !== Vf || a.readyState !== r2)
        e();
      else {
        var c = function() {
          e(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), t._reactRetry = c;
      }
    }
    function qa(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === ep || e === nm || e === Vf || e === Hr || e === Cr || e === iS || e === s2)
            break;
          if (e === lp || e === _g)
            return null;
        }
      }
      return t;
    }
    function Tv(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, c = t.attributes, o = 0; o < c.length; o++) {
          var f = c[o];
          a[tc(f.name)] = f.name.toLowerCase() === "style" ? Vc(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === Cr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function Av(t, e, a) {
      return a === null || a[pT] !== !0 ? (t.nodeValue === e ? t = null : (e = Bn(e), t = Bn(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function cf(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === lp || a === _g) {
            if (e === 0)
              return qa(t.nextSibling);
            e--;
          } else
            a !== ep && a !== nm && a !== Vf && a !== Hr && a !== Cr || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Vi(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === ep || a === nm || a === Vf || a === Hr || a === Cr) {
            if (e === 0) return t;
            e--;
          } else
            a !== lp && a !== _g || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Zy(t) {
      wi(t);
    }
    function oh(t) {
      wi(t);
    }
    function Ly(t) {
      wi(t);
    }
    function lc(t, e, a, c, o) {
      switch (o && Pf(t, c.ancestorInfo), e = Ws(a), t) {
        case "html":
          if (t = e.documentElement, !t)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "head":
          if (t = e.head, !t)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "body":
          if (t = e.body, !t)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function gu(t, e, a, c) {
      if (!a[uc] && hn(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (t) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Oe(a, t, e), a[Me] = c, a[oa] = e;
    }
    function ac(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      dm(t);
    }
    function fh(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function wy(t, e, a) {
      var c = cm;
      if (c && typeof e == "string" && e) {
        var o = oe(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), v2.has(o) || (v2.add(o), t = { rel: t, crossOrigin: a, href: e }, c.querySelector(o) === null && (e = c.createElement("link"), Oe(e, "link", t), Le(e), c.head.appendChild(e)));
      }
    }
    function Jy(t, e, a, c) {
      var o = (o = Ya.current) ? fh(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Zi(a.href), e = Wa(o).hoistableStyles, c = e.get(a), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = Zi(a.href);
            var f = Wa(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Br, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              Ps(t)
            )) && !f._p && (d.instance = f, d.state.loading = np | Nu), !Bu.has(t))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Bu.set(t, h), f || zv(
                o,
                t,
                h,
                d.state
              );
            }
            if (e && c === null)
              throw a = `

  - ` + Is(e) + `
  + ` + Is(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (e && c !== null)
            throw a = `

  - ` + Is(e) + `
  + ` + Is(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Li(a), e = Wa(o).hoistableScripts, c = e.get(a), c || (c = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + t + '". this is a bug in React.'
          );
      }
    }
    function Is(t) {
      var e = 0, a = "<link";
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : Ga.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : Ga.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : Ga.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function Zi(t) {
      return 'href="' + oe(t) + '"';
    }
    function Ps(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function sh(t) {
      return Mt({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function zv(t, e, a, c) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? c.loading = np : (e = t.createElement("link"), c.preload = e, e.addEventListener("load", function() {
        return c.loading |= np;
      }), e.addEventListener("error", function() {
        return c.loading |= y2;
      }), Oe(e, "link", a), Le(e), t.head.appendChild(e));
    }
    function Li(t) {
      return '[src="' + oe(t) + '"]';
    }
    function tr(t) {
      return "script[async]" + t;
    }
    function rh(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var c = t.querySelector(
              'style[data-href~="' + oe(a.href) + '"]'
            );
            if (c)
              return e.instance = c, Le(c), c;
            var o = Mt({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return c = (t.ownerDocument || t).createElement("style"), Le(c), Oe(c, "style", o), of(c, a.precedence, t), e.instance = c;
          case "stylesheet":
            o = Zi(a.href);
            var f = t.querySelector(
              Ps(o)
            );
            if (f)
              return e.state.loading |= Nu, e.instance = f, Le(f), f;
            c = sh(a), (o = Bu.get(o)) && Ky(c, o), f = (t.ownerDocument || t).createElement("link"), Le(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), Oe(f, "link", c), e.state.loading |= Nu, of(f, a.precedence, t), e.instance = f;
          case "script":
            return f = Li(a.src), (o = t.querySelector(
              tr(f)
            )) ? (e.instance = o, Le(o), o) : (c = a, (o = Bu.get(f)) && (c = Mt({}, a), $y(c, o)), t = t.ownerDocument || t, o = t.createElement("script"), Le(o), Oe(o, "link", c), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & Nu) === Br && (c = e.instance, e.state.loading |= Nu, of(c, a.precedence, t));
      return e.instance;
    }
    function of(t, e, a) {
      for (var c = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = c.length ? c[c.length - 1] : null, f = o, d = 0; d < c.length; d++) {
        var h = c[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function Ky(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function $y(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function ff(t, e, a) {
      if (Hg === null) {
        var c = /* @__PURE__ */ new Map(), o = Hg = /* @__PURE__ */ new Map();
        o.set(a, c);
      } else
        o = Hg, c = o.get(a), c || (c = /* @__PURE__ */ new Map(), o.set(a, c));
      if (c.has(t)) return c;
      for (c.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Ef] || f[Me] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Dt) {
          var d = f.getAttribute(e) || "";
          d = t + d;
          var h = c.get(d);
          h ? h.push(f) : c.set(d, [f]);
        }
      }
      return c;
    }
    function Dv(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
    }
    function Ov(t, e, a) {
      var c = !a.ancestorInfo.containerTagInScope;
      if (a.context === um || e.itemProp != null)
        return !c || e.itemProp == null || t !== "meta" && t !== "title" && t !== "style" && t !== "link" && t !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          t,
          t
        ), !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") {
            c && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) {
            if (e.rel === "stylesheet" && typeof e.precedence == "string") {
              t = e.href;
              var o = e.onError, f = e.disabled;
              a = [], e.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = nv(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                t,
                f,
                o
              );
            }
            c && (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (e.onError || e.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return e.rel === "stylesheet" ? (t = e.precedence, e = e.disabled, typeof t != "string" && c && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof t == "string" && e == null) : !0;
        case "script":
          if (t = e.async && typeof e.async != "function" && typeof e.async != "symbol", !t || e.onLoad || e.onError || !e.src || typeof e.src != "string") {
            c && (t ? e.onLoad || e.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          c && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            t
          );
      }
      return !1;
    }
    function xt(t) {
      return !(t.type === "stylesheet" && (t.state.loading & p2) === Br);
    }
    function Wy(t, e, a, c) {
      if (a.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (a.state.loading & Nu) === Br) {
        if (a.instance === null) {
          var o = Zi(c.href), f = e.querySelector(
            Ps(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = sf.bind(t), e.then(t, t)), a.state.loading |= Nu, a.instance = f, Le(f);
            return;
          }
          f = e.ownerDocument || e, c = sh(c), (o = Bu.get(o)) && Ky(c, o), f = f.createElement("link"), Le(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), Oe(f, "link", c), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & p2) === Br && (t.count++, a = sf.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function dh(t, e) {
      return t.stylesheets && t.count === 0 && er(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var c = setTimeout(function() {
          if (t.stylesheets && er(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, AT + e);
        0 < t.imgBytes && dS === 0 && (dS = 125 * uv() * DT);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && er(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > dS ? 50 : zT) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(c), clearTimeout(o);
        };
      } : null;
    }
    function sf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          er(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function er(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Ng = /* @__PURE__ */ new Map(), e.forEach(ky, t), Ng = null, sf.call(t));
    }
    function ky(t, e) {
      if (!(e.state.loading & Nu)) {
        var a = Ng.get(t);
        if (a) var c = a.get(hS);
        else {
          a = /* @__PURE__ */ new Map(), Ng.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), c = d);
          }
          c && a.set(hS, c);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || c, f === c && a.set(hS, o), a.set(d, o), this.count++, c = sf.bind(this), o.addEventListener("load", c), o.addEventListener("error", c), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= Nu;
      }
    }
    function lr(t, e, a, c, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Nr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xr(0), this.hiddenUpdates = Xr(null), this.identifierPrefix = c, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function ar(t, e, a, c, o, f, d, h, y, p, D, M) {
      return t = new lr(
        t,
        e,
        a,
        d,
        y,
        p,
        D,
        M,
        h
      ), e = WE, f === !0 && (e |= Sa | cc), e |= Rt, f = Ct(3, null, null, e), t.current = f, f.stateNode = t, e = rd(), Si(e), t.pooledCache = e, Si(e), f.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: e
      }, qt(f), t;
    }
    function Mv(t) {
      return t ? (t = Mf, t) : Mf;
    }
    function hh(t, e, a, c, o, f) {
      if (cl && typeof cl.onScheduleFiberRoot == "function")
        try {
          cl.onScheduleFiberRoot(Wi, c, a);
        } catch (d) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Mv(o), c.context === null ? c.context = o : c.pendingContext = o, Su && ga !== null && !E2 && (E2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        ut(ga) || "Unknown"
      )), c = al(e), c.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), c.callback = f), a = eu(t, c, e), a !== null && (In(e, "root.render()", null), vt(a, t, e), an(a, t, e));
    }
    function Rv(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function Fy(t, e) {
      Rv(t, e), (t = t.alternate) && Rv(t, e);
    }
    function Iy(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Yl(t, 67108864);
        e !== null && vt(e, t, 67108864), Fy(t, 67108864);
      }
    }
    function Py(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Xl(t);
        e = ai(e);
        var a = Yl(t, e);
        a !== null && vt(a, t, e), Fy(t, e);
      }
    }
    function re() {
      return ga;
    }
    function t0(t, e, a, c) {
      var o = q.T;
      q.T = null;
      var f = It.p;
      try {
        It.p = il, e0(t, e, a, c);
      } finally {
        It.p = f, q.T = o;
      }
    }
    function _l(t, e, a, c) {
      var o = q.T;
      q.T = null;
      var f = It.p;
      try {
        It.p = Hl, e0(t, e, a, c);
      } finally {
        It.p = f, q.T = o;
      }
    }
    function e0(t, e, a, c) {
      if (xg) {
        var o = mh(c);
        if (o === null)
          Hn(
            t,
            e,
            c,
            jg,
            a
          ), ph(t, c);
        else if (Uv(
          o,
          t,
          e,
          a,
          c
        ))
          c.stopPropagation();
        else if (ph(t, c), e & 4 && -1 < MT.indexOf(t)) {
          for (; o !== null; ) {
            var f = hn(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = li(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Cl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      ma(f), (Kt & (Bl | Vn)) === wl && (gg = Sl() + Wb, mu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Yl(f, 2), h !== null && vt(h, f, 2), ja(), Fy(f, 2);
              }
            if (f = mh(c), f === null && Hn(
              t,
              e,
              c,
              jg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && c.stopPropagation();
        } else
          Hn(
            t,
            e,
            c,
            null,
            a
          );
      }
    }
    function mh(t) {
      return t = pn(t), l0(t);
    }
    function l0(t) {
      if (jg = null, t = ju(t), t !== null) {
        var e = ne(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = Ja(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = Ve(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return jg = t, null;
    }
    function yh(t) {
      switch (t) {
        case "beforetoggle":
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
        case "toggle":
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
          return il;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Hl;
        case "message":
          switch (fr()) {
            case d0:
              return il;
            case Dh:
              return Hl;
            case $i:
            case xv:
              return Vl;
            case Oh:
              return $c;
            default:
              return Vl;
          }
        default:
          return Vl;
      }
    }
    function ph(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Zf = null;
          break;
        case "dragenter":
        case "dragleave":
          Lf = null;
          break;
        case "mouseover":
        case "mouseout":
          wf = null;
          break;
        case "pointerover":
        case "pointerout":
          cp.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ip.delete(e.pointerId);
      }
    }
    function Lc(t, e, a, c, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = hn(e), e !== null && Iy(e)), t) : (t.eventSystemFlags |= c, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function Uv(t, e, a, c, o) {
      switch (e) {
        case "focusin":
          return Zf = Lc(
            Zf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "dragenter":
          return Lf = Lc(
            Lf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "mouseover":
          return wf = Lc(
            wf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return cp.set(
            f,
            Lc(
              cp.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, ip.set(
            f,
            Lc(
              ip.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
      }
      return !1;
    }
    function a0(t) {
      var e = ju(t.target);
      if (e !== null) {
        var a = ne(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = Ja(a), e !== null) {
              t.blockedOn = e, pp(t.priority, function() {
                Py(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = Ve(a), e !== null) {
              t.blockedOn = e, pp(t.priority, function() {
                Py(a);
              });
              return;
            }
          } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function rf(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = mh(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var c = new a.constructor(
            a.type,
            a
          ), o = c;
          v0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), v0 = o, a.target.dispatchEvent(c), v0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), v0 = null;
        } else
          return e = hn(a), e !== null && Iy(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function vh(t, e, a) {
      rf(t) && a.delete(e);
    }
    function t1() {
      mS = !1, Zf !== null && rf(Zf) && (Zf = null), Lf !== null && rf(Lf) && (Lf = null), wf !== null && rf(wf) && (wf = null), cp.forEach(vh), ip.forEach(vh);
    }
    function nr(t, e) {
      t.blockedOn === e && (t.blockedOn = null, mS || (mS = !0, We.unstable_scheduleCallback(
        We.unstable_NormalPriority,
        t1
      )));
    }
    function _v(t) {
      qg !== t && (qg = t, We.unstable_scheduleCallback(
        We.unstable_NormalPriority,
        function() {
          qg === t && (qg = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], c = t[e + 1], o = t[e + 2];
            if (typeof c != "function") {
              if (l0(c || a) === null)
                continue;
              break;
            }
            var f = hn(a);
            f !== null && (t.splice(e, 3), e -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: c
            }, Object.freeze(a), Wu(
              f,
              a,
              c,
              o
            ));
          }
        }
      ));
    }
    function wi(t) {
      function e(y) {
        return nr(y, t);
      }
      Zf !== null && nr(Zf, t), Lf !== null && nr(Lf, t), wf !== null && nr(wf, t), cp.forEach(e), ip.forEach(e);
      for (var a = 0; a < Jf.length; a++) {
        var c = Jf[a];
        c.blockedOn === t && (c.blockedOn = null);
      }
      for (; 0 < Jf.length && (a = Jf[0], a.blockedOn === null); )
        a0(a), a.blockedOn === null && Jf.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (c = 0; c < a.length; c += 3) {
          var o = a[c], f = a[c + 1], d = o[oa] || null;
          if (typeof f == "function")
            d || _v(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[oa] || null)
                h = d.formAction;
              else if (l0(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[c + 1] = h : (a.splice(c, 3), c -= 3), _v(a);
          }
        }
    }
    function Cv() {
      function t(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        o !== null && (o(), o = null), c || setTimeout(a, 20);
      }
      function a() {
        if (!c && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var c = !1, o = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
          c = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener(
            "navigatesuccess",
            e
          ), navigation.removeEventListener(
            "navigateerror",
            e
          ), o !== null && (o(), o = null);
        };
      }
    }
    function n0(t) {
      this._internalRoot = t;
    }
    function xn(t) {
      this._internalRoot = t;
    }
    function u0(t) {
      t[uc] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var We = lE(), ur = TS, e1 = $2, Mt = Object.assign, Hv = /* @__PURE__ */ Symbol.for("react.element"), on = /* @__PURE__ */ Symbol.for("react.transitional.element"), wc = /* @__PURE__ */ Symbol.for("react.portal"), df = /* @__PURE__ */ Symbol.for("react.fragment"), ia = /* @__PURE__ */ Symbol.for("react.strict_mode"), cr = /* @__PURE__ */ Symbol.for("react.profiler"), gh = /* @__PURE__ */ Symbol.for("react.consumer"), jn = /* @__PURE__ */ Symbol.for("react.context"), hf = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ji = /* @__PURE__ */ Symbol.for("react.suspense"), va = /* @__PURE__ */ Symbol.for("react.suspense_list"), ir = /* @__PURE__ */ Symbol.for("react.memo"), Ql = /* @__PURE__ */ Symbol.for("react.lazy"), qn = /* @__PURE__ */ Symbol.for("react.activity"), l1 = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Nv = Symbol.iterator, mf = /* @__PURE__ */ Symbol.for("react.client.reference"), el = Array.isArray, q = ur.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, It = e1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, a1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), c0 = [], i0 = [], nc = -1, Jc = Ze(null), yf = Ze(null), Ya = Ze(null), Kc = Ze(null), pf = 0, Bv, Ki, vf, o0, or, Sh, bh;
    yt.__reactDisabledLog = !0;
    var gf, f0, Eh = !1, s0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), ga = null, Su = !1, Ga = Object.prototype.hasOwnProperty, r0 = We.unstable_scheduleCallback, Th = We.unstable_cancelCallback, Ah = We.unstable_shouldYield, zh = We.unstable_requestPaint, Sl = We.unstable_now, fr = We.unstable_getCurrentPriorityLevel, d0 = We.unstable_ImmediatePriority, Dh = We.unstable_UserBlockingPriority, $i = We.unstable_NormalPriority, xv = We.unstable_LowPriority, Oh = We.unstable_IdlePriority, h0 = We.log, jv = We.unstable_setDisableYieldValue, Wi = null, cl = null, bu = !1, Eu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Cl = Math.clz32 ? Math.clz32 : sm, m0 = Math.log, Mh = Math.LN2, Sf = 256, sr = 262144, bf = 4194304, il = 2, Hl = 8, Vl = 32, $c = 268435456, fn = Math.random().toString(36).slice(2), Me = "__reactFiber$" + fn, oa = "__reactProps$" + fn, uc = "__reactContainer$" + fn, ki = "__reactEvents$" + fn, n1 = "__reactListeners$" + fn, qv = "__reactHandles$" + fn, rr = "__reactResources$" + fn, Ef = "__reactMarker$" + fn, Yv = /* @__PURE__ */ new Set(), Tu = {}, Tf = {}, Gv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Af = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), y0 = {}, Rh = {}, Uh = /[\n"\\]/g, p0 = !1, Xv = !1, dr = !1, l = !1, n = !1, u = !1, i = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = v.concat(["button"]), H = "dd dt li option optgroup p rp rt".split(" "), G = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, Z = {}, N = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Y = /([A-Z])/g, et = /^ms-/, dt = /^(?:webkit|moz|o)[A-Z]/, de = /^-ms-/, _ = /-(.)/g, O = /;\s*$/, C = {}, V = {}, it = !1, Jt = !1, lt = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Et = "http://www.w3.org/1998/Math/MathML", Dt = "http://www.w3.org/2000/svg", Wt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Yn = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Qv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, _h = {}, iE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), oE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), AS = !1, Xa = {}, zS = /^on./, fE = /^on[^A-Z]/, sE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), rE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), dE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, v0 = null, Ch = null, Hh = null, u1 = !1, Wc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), c1 = !1;
    if (Wc)
      try {
        var g0 = {};
        Object.defineProperty(g0, "passive", {
          get: function() {
            c1 = !0;
          }
        }), window.addEventListener("test", g0, g0), window.removeEventListener("test", g0, g0);
      } catch {
        c1 = !1;
      }
    var zf = null, i1 = null, Vv = null, hr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Zv = dl(hr), S0 = Mt({}, hr, { view: 0, detail: 0 }), hE = dl(S0), o1, f1, b0, Lv = Mt({}, S0, {
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
      getModifierState: as,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== b0 && (b0 && t.type === "mousemove" ? (o1 = t.screenX - b0.screenX, f1 = t.screenY - b0.screenY) : f1 = o1 = 0, b0 = t), o1);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : f1;
      }
    }), DS = dl(Lv), mE = Mt({}, Lv, { dataTransfer: 0 }), yE = dl(mE), pE = Mt({}, S0, { relatedTarget: 0 }), s1 = dl(pE), vE = Mt({}, hr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), gE = dl(vE), SE = Mt({}, hr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), bE = dl(SE), EE = Mt({}, hr, { data: 0 }), OS = dl(
      EE
    ), TE = OS, AE = {
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
    }, zE = {
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
    }, DE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, OE = Mt({}, S0, {
      key: function(t) {
        if (t.key) {
          var e = AE[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = ls(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? zE[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: as,
      charCode: function(t) {
        return t.type === "keypress" ? ls(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? ls(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), ME = dl(OE), RE = Mt({}, Lv, {
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
    }), MS = dl(RE), UE = Mt({}, S0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: as
    }), _E = dl(UE), CE = Mt({}, hr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), HE = dl(CE), NE = Mt({}, Lv, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), BE = dl(NE), xE = Mt({}, hr, {
      newState: 0,
      oldState: 0
    }), jE = dl(xE), qE = [9, 13, 27, 32], RS = 229, r1 = Wc && "CompositionEvent" in window, E0 = null;
    Wc && "documentMode" in document && (E0 = document.documentMode);
    var YE = Wc && "TextEvent" in window && !E0, US = Wc && (!r1 || E0 && 8 < E0 && 11 >= E0), _S = 32, CS = String.fromCharCode(_S), HS = !1, Nh = !1, GE = {
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
    }, T0 = null, A0 = null, NS = !1;
    Wc && (NS = td("input") && (!document.documentMode || 9 < document.documentMode));
    var Qa = typeof Object.is == "function" ? Object.is : ed, XE = Wc && "documentMode" in document && 11 >= document.documentMode, Bh = null, d1 = null, z0 = null, h1 = !1, xh = {
      animationend: ri("Animation", "AnimationEnd"),
      animationiteration: ri("Animation", "AnimationIteration"),
      animationstart: ri("Animation", "AnimationStart"),
      transitionrun: ri("Transition", "TransitionRun"),
      transitionstart: ri("Transition", "TransitionStart"),
      transitioncancel: ri("Transition", "TransitionCancel"),
      transitionend: ri("Transition", "TransitionEnd")
    }, m1 = {}, BS = {};
    Wc && (BS = document.createElement("div").style, "AnimationEvent" in window || (delete xh.animationend.animation, delete xh.animationiteration.animation, delete xh.animationstart.animation), "TransitionEvent" in window || delete xh.transitionend.transition);
    var xS = di("animationend"), jS = di("animationiteration"), qS = di("animationstart"), QE = di("transitionrun"), VE = di("transitionstart"), ZE = di("transitioncancel"), YS = di("transitionend"), GS = /* @__PURE__ */ new Map(), y1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    y1.push("scrollEnd");
    var XS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var LE = performance, QS = function() {
        return LE.now();
      };
    else {
      var wE = Date;
      QS = function() {
        return wE.now();
      };
    }
    var p1 = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, JE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", wv = 0, v1 = 1, g1 = 2, S1 = 3, Jv = "– ", Kv = "+ ", VS = "  ", Re = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Au = "Components ⚛", Vt = "Scheduler ⚛", Lt = "Blocking", Df = !1, Fi = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Au
    }, Of = {
      start: -0,
      end: -0,
      detail: { devtools: Fi }
    }, KE = ["Changed Props", ""], ZS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", $E = ["Changed Props", ZS], D0 = 1, Ii = 2, zu = [], jh = 0, b1 = 0, Mf = {};
    Object.freeze(Mf);
    var Du = null, qh = null, pt = 0, WE = 1, Rt = 2, Sa = 8, cc = 16, kE = 32, LS = !1;
    try {
      var wS = Object.preventExtensions({});
    } catch {
      LS = !0;
    }
    var E1 = /* @__PURE__ */ new WeakMap(), Yh = [], Gh = 0, $v = null, O0 = 0, Ou = [], Mu = 0, mr = null, Pi = 1, to = "", fa = null, Ue = null, Qt = !1, kc = !1, Gn = null, Rf = null, Ru = !1, T1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), A1 = Ze(null), z1 = Ze(null), JS = {}, Wv = null, Xh = null, Qh = !1, FE = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: !1,
        addEventListener: function(a, c) {
          t.push(c);
        }
      };
      this.abort = function() {
        e.aborted = !0, t.forEach(function(a) {
          return a();
        });
      };
    }, IE = We.unstable_scheduleCallback, PE = We.unstable_NormalPriority, bl = {
      $$typeof: jn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, El = We.unstable_now, kv = console.createTask ? console.createTask : function() {
      return null;
    }, M0 = 1, Fv = 2, Zl = -0, Uf = -0, eo = -0, lo = null, Va = -1.1, yr = -0, Xe = -0, st = -1.1, ht = -1.1, xe = null, ke = !1, pr = -0, Fc = -1.1, R0 = null, _f = 0, D1 = null, O1 = null, vr = -1.1, U0 = null, Vh = -1.1, Iv = -1.1, ao = -0, no = -1.1, Uu = -1.1, M1 = 0, _0 = null, KS = null, $S = null, Cf = -1.1, gr = null, Hf = -1.1, Pv = -1.1, WS = -0, kS = -0, tg = 0, tT = null, FS = 0, C0 = -1.1, eg = !1, lg = !1, H0 = null, R1 = 0, Sr = 0, Zh = null, IS = q.S;
    q.S = function(t, e) {
      if (Kb = Sl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > no && 0 > Uu) {
          no = El();
          var a = nf(), c = vu();
          (a !== Hf || c !== gr) && (Hf = -1.1), Cf = a, gr = c;
        }
        Vu(t, e);
      }
      IS !== null && IS(t, e);
    };
    var br = Ze(null), ic = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, N0 = [], B0 = [], x0 = [], j0 = [], q0 = [], Y0 = [], Er = /* @__PURE__ */ new Set();
    ic.recordUnsafeLifecycleWarnings = function(t, e) {
      Er.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && N0.push(t), t.mode & Sa && typeof e.UNSAFE_componentWillMount == "function" && B0.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && x0.push(t), t.mode & Sa && typeof e.UNSAFE_componentWillReceiveProps == "function" && j0.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && q0.push(t), t.mode & Sa && typeof e.UNSAFE_componentWillUpdate == "function" && Y0.push(t));
    }, ic.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < N0.length && (N0.forEach(function(h) {
        t.add(
          ut(h) || "Component"
        ), Er.add(h.type);
      }), N0 = []);
      var e = /* @__PURE__ */ new Set();
      0 < B0.length && (B0.forEach(function(h) {
        e.add(
          ut(h) || "Component"
        ), Er.add(h.type);
      }), B0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < x0.length && (x0.forEach(function(h) {
        a.add(
          ut(h) || "Component"
        ), Er.add(h.type);
      }), x0 = []);
      var c = /* @__PURE__ */ new Set();
      0 < j0.length && (j0.forEach(
        function(h) {
          c.add(
            ut(h) || "Component"
          ), Er.add(h.type);
        }
      ), j0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < q0.length && (q0.forEach(function(h) {
        o.add(
          ut(h) || "Component"
        ), Er.add(h.type);
      }), q0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Y0.length && (Y0.forEach(function(h) {
        f.add(
          ut(h) || "Component"
        ), Er.add(h.type);
      }), Y0 = []), 0 < e.size) {
        var d = ot(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < c.size && (d = ot(
        c
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = ot(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = ot(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = ot(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = ot(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var ag = /* @__PURE__ */ new Map(), PS = /* @__PURE__ */ new Set();
    ic.recordLegacyContextWarning = function(t, e) {
      for (var a = null, c = t; c !== null; )
        c.mode & Sa && (a = c), c = c.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !PS.has(t.type) && (c = ag.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (c === void 0 && (c = [], ag.set(a, c)), c.push(t));
    }, ic.flushLegacyContextWarning = function() {
      ag.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(ut(o) || "Component"), PS.add(o.type);
          });
          var c = ot(a);
          I(e, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              c
            );
          });
        }
      });
    }, ic.discardPendingWarnings = function() {
      N0 = [], B0 = [], x0 = [], j0 = [], q0 = [], Y0 = [], ag = /* @__PURE__ */ new Map();
    };
    var tb = {
      react_stack_bottom_frame: function(t, e, a) {
        var c = Su;
        Su = !0;
        try {
          return t(e, a);
        } finally {
          Su = c;
        }
      }
    }, U1 = tb.react_stack_bottom_frame.bind(tb), eb = {
      react_stack_bottom_frame: function(t) {
        var e = Su;
        Su = !0;
        try {
          return t.render();
        } finally {
          Su = e;
        }
      }
    }, lb = eb.react_stack_bottom_frame.bind(eb), ab = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          zt(t, t.return, a);
        }
      }
    }, _1 = ab.react_stack_bottom_frame.bind(
      ab
    ), nb = {
      react_stack_bottom_frame: function(t, e, a, c, o) {
        try {
          e.componentDidUpdate(a, c, o);
        } catch (f) {
          zt(t, t.return, f);
        }
      }
    }, ub = nb.react_stack_bottom_frame.bind(
      nb
    ), cb = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, eT = cb.react_stack_bottom_frame.bind(
      cb
    ), ib = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (c) {
          zt(t, e, c);
        }
      }
    }, ob = ib.react_stack_bottom_frame.bind(
      ib
    ), fb = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, lT = fb.react_stack_bottom_frame.bind(fb), sb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (c) {
          zt(t, e, c);
        }
      }
    }, aT = sb.react_stack_bottom_frame.bind(sb), rb = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, nT = rb.react_stack_bottom_frame.bind(rb), Lh = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), C1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ng = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), ug = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Tr = null, G0 = !1, wh = null, X0 = 0, Ut = null, H1, db = H1 = !1, hb = {}, mb = {}, yb = {};
    Fe = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var c = ut(t), o = c || "null";
        if (!hb[o]) {
          hb[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = ut(t)) && (f = `

Check the render method of \`` + o + "`."), f || c && (f = `

Check the top-level render call using <` + c + ">.");
          var d = "";
          a != null && t !== a && (c = null, typeof a.tag == "number" ? c = ut(a) : typeof a.name == "string" && (c = a.name), c && (d = " It was passed a child from " + c + ".")), I(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Ar = ml(!0), pb = ml(!1), vb = 0, gb = 1, Sb = 2, N1 = 3, Nf = !1, bb = !1, B1 = null, x1 = !1, Jh = Ze(null), cg = Ze(0), Xn = Ze(null), _u = null, Kh = 1, Q0 = 2, ol = Ze(0), ig = 0, Cu = 1, Za = 2, Qn = 4, La = 8, $h, Eb = /* @__PURE__ */ new Set(), Tb = /* @__PURE__ */ new Set(), j1 = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), uo = 0, St = null, ge = null, Tl = null, og = !1, Wh = !1, zr = !1, fg = 0, V0 = 0, co = null, uT = 0, cT = 25, x = null, Hu = null, io = -1, Z0 = !1, L0 = {
      readContext: kt,
      use: Ju,
      useCallback: Ye,
      useContext: Ye,
      useEffect: Ye,
      useImperativeHandle: Ye,
      useLayoutEffect: Ye,
      useInsertionEffect: Ye,
      useMemo: Ye,
      useReducer: Ye,
      useRef: Ye,
      useState: Ye,
      useDebugValue: Ye,
      useDeferredValue: Ye,
      useTransition: Ye,
      useSyncExternalStore: Ye,
      useId: Ye,
      useHostTransitionStatus: Ye,
      useFormState: Ye,
      useActionState: Ye,
      useOptimistic: Ye,
      useMemoCache: Ye,
      useCacheRefresh: Ye
    };
    L0.useEffectEvent = Ye;
    var q1 = null, zb = null, Y1 = null, Db = null, Ic = null, oc = null, sg = null;
    q1 = {
      readContext: function(t) {
        return kt(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return x = "useCallback", gt(), wu(e), Td(t, e);
      },
      useContext: function(t) {
        return x = "useContext", gt(), kt(t);
      },
      useEffect: function(t, e) {
        return x = "useEffect", gt(), wu(e), Ui(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", gt(), wu(a), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        x = "useInsertionEffect", gt(), wu(e), Nc(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", gt(), wu(e), Pl(t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", gt(), wu(e);
        var a = q.H;
        q.H = Ic;
        try {
          return ta(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", gt();
        var c = q.H;
        q.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          q.H = c;
        }
      },
      useRef: function(t) {
        return x = "useRef", gt(), Ed(t);
      },
      useState: function(t) {
        x = "useState", gt();
        var e = q.H;
        q.H = Ic;
        try {
          return Uc(t);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", gt();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", gt(), Go(t, e);
      },
      useTransition: function() {
        return x = "useTransition", gt(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", gt(), xo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", gt(), Ms();
      },
      useFormState: function(t, e) {
        return x = "useFormState", gt(), ps(), Ca(t, e);
      },
      useActionState: function(t, e) {
        return x = "useActionState", gt(), Ca(t, e);
      },
      useOptimistic: function(t) {
        return x = "useOptimistic", gt(), Ri(t);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ua,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", gt(), Ad();
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", gt(), Ds(t);
      }
    }, zb = {
      readContext: function(t) {
        return kt(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return x = "useCallback", w(), Td(t, e);
      },
      useContext: function(t) {
        return x = "useContext", w(), kt(t);
      },
      useEffect: function(t, e) {
        return x = "useEffect", w(), Ui(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", w(), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        x = "useInsertionEffect", w(), Nc(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", w(), Pl(t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", w();
        var a = q.H;
        q.H = Ic;
        try {
          return ta(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", w();
        var c = q.H;
        q.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          q.H = c;
        }
      },
      useRef: function(t) {
        return x = "useRef", w(), Ed(t);
      },
      useState: function(t) {
        x = "useState", w();
        var e = q.H;
        q.H = Ic;
        try {
          return Uc(t);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", w();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", w(), Go(t, e);
      },
      useTransition: function() {
        return x = "useTransition", w(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", w(), xo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", w(), Ms();
      },
      useActionState: function(t, e) {
        return x = "useActionState", w(), Ca(t, e);
      },
      useFormState: function(t, e) {
        return x = "useFormState", w(), ps(), Ca(t, e);
      },
      useOptimistic: function(t) {
        return x = "useOptimistic", w(), Ri(t);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ua,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", w(), Ad();
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", w(), Ds(t);
      }
    }, Y1 = {
      readContext: function(t) {
        return kt(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return x = "useCallback", w(), Mn(t, e);
      },
      useContext: function(t) {
        return x = "useContext", w(), kt(t);
      },
      useEffect: function(t, e) {
        x = "useEffect", w(), nl(2048, La, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", w(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return x = "useInsertionEffect", w(), nl(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", w(), nl(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", w();
        var a = q.H;
        q.H = oc;
        try {
          return De(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", w();
        var c = q.H;
        q.H = oc;
        try {
          return Di(t, e, a);
        } finally {
          q.H = c;
        }
      },
      useRef: function() {
        return x = "useRef", w(), te().memoizedState;
      },
      useState: function() {
        x = "useState", w();
        var t = q.H;
        q.H = oc;
        try {
          return Di(_a);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", w();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", w(), cu(t, e);
      },
      useTransition: function() {
        return x = "useTransition", w(), Gp();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", w(), Mi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", w(), te().memoizedState;
      },
      useFormState: function(t) {
        return x = "useFormState", w(), ps(), Cc(t);
      },
      useActionState: function(t) {
        return x = "useActionState", w(), Cc(t);
      },
      useOptimistic: function(t, e) {
        return x = "useOptimistic", w(), Ts(t, e);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ua,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", w(), te().memoizedState;
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", w(), qo(t);
      }
    }, Db = {
      readContext: function(t) {
        return kt(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return x = "useCallback", w(), Mn(t, e);
      },
      useContext: function(t) {
        return x = "useContext", w(), kt(t);
      },
      useEffect: function(t, e) {
        x = "useEffect", w(), nl(2048, La, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", w(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return x = "useInsertionEffect", w(), nl(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", w(), nl(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", w();
        var a = q.H;
        q.H = sg;
        try {
          return De(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", w();
        var c = q.H;
        q.H = sg;
        try {
          return Oi(t, e, a);
        } finally {
          q.H = c;
        }
      },
      useRef: function() {
        return x = "useRef", w(), te().memoizedState;
      },
      useState: function() {
        x = "useState", w();
        var t = q.H;
        q.H = sg;
        try {
          return Oi(_a);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", w();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", w(), Tt(t, e);
      },
      useTransition: function() {
        return x = "useTransition", w(), He();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", w(), Mi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", w(), te().memoizedState;
      },
      useFormState: function(t) {
        return x = "useFormState", w(), ps(), Hc(t);
      },
      useActionState: function(t) {
        return x = "useActionState", w(), Hc(t);
      },
      useOptimistic: function(t, e) {
        return x = "useOptimistic", w(), As(t, e);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ua,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", w(), te().memoizedState;
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", w(), qo(t);
      }
    }, Ic = {
      readContext: function(t) {
        return ce(), kt(t);
      },
      use: function(t) {
        return K(), Ju(t);
      },
      useCallback: function(t, e) {
        return x = "useCallback", K(), gt(), Td(t, e);
      },
      useContext: function(t) {
        return x = "useContext", K(), gt(), kt(t);
      },
      useEffect: function(t, e) {
        return x = "useEffect", K(), gt(), Ui(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", K(), gt(), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        x = "useInsertionEffect", K(), gt(), Nc(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", K(), gt(), Pl(t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", K(), gt();
        var a = q.H;
        q.H = Ic;
        try {
          return ta(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", K(), gt();
        var c = q.H;
        q.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          q.H = c;
        }
      },
      useRef: function(t) {
        return x = "useRef", K(), gt(), Ed(t);
      },
      useState: function(t) {
        x = "useState", K(), gt();
        var e = q.H;
        q.H = Ic;
        try {
          return Uc(t);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K(), gt();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", K(), gt(), Go(t, e);
      },
      useTransition: function() {
        return x = "useTransition", K(), gt(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", K(), gt(), xo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), gt(), Ms();
      },
      useFormState: function(t, e) {
        return x = "useFormState", K(), gt(), Ca(t, e);
      },
      useActionState: function(t, e) {
        return x = "useActionState", K(), gt(), Ca(t, e);
      },
      useOptimistic: function(t) {
        return x = "useOptimistic", K(), gt(), Ri(t);
      },
      useMemoCache: function(t) {
        return K(), Ua(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", gt(), Ad();
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", K(), gt(), Ds(t);
      }
    }, oc = {
      readContext: function(t) {
        return ce(), kt(t);
      },
      use: function(t) {
        return K(), Ju(t);
      },
      useCallback: function(t, e) {
        return x = "useCallback", K(), w(), Mn(t, e);
      },
      useContext: function(t) {
        return x = "useContext", K(), w(), kt(t);
      },
      useEffect: function(t, e) {
        x = "useEffect", K(), w(), nl(2048, La, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", K(), w(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return x = "useInsertionEffect", K(), w(), nl(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", K(), w(), nl(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", K(), w();
        var a = q.H;
        q.H = oc;
        try {
          return De(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", K(), w();
        var c = q.H;
        q.H = oc;
        try {
          return Di(t, e, a);
        } finally {
          q.H = c;
        }
      },
      useRef: function() {
        return x = "useRef", K(), w(), te().memoizedState;
      },
      useState: function() {
        x = "useState", K(), w();
        var t = q.H;
        q.H = oc;
        try {
          return Di(_a);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K(), w();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", K(), w(), cu(t, e);
      },
      useTransition: function() {
        return x = "useTransition", K(), w(), Gp();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", K(), w(), Mi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), w(), te().memoizedState;
      },
      useFormState: function(t) {
        return x = "useFormState", K(), w(), Cc(t);
      },
      useActionState: function(t) {
        return x = "useActionState", K(), w(), Cc(t);
      },
      useOptimistic: function(t, e) {
        return x = "useOptimistic", K(), w(), Ts(t, e);
      },
      useMemoCache: function(t) {
        return K(), Ua(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", w(), te().memoizedState;
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", K(), w(), qo(t);
      }
    }, sg = {
      readContext: function(t) {
        return ce(), kt(t);
      },
      use: function(t) {
        return K(), Ju(t);
      },
      useCallback: function(t, e) {
        return x = "useCallback", K(), w(), Mn(t, e);
      },
      useContext: function(t) {
        return x = "useContext", K(), w(), kt(t);
      },
      useEffect: function(t, e) {
        x = "useEffect", K(), w(), nl(2048, La, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return x = "useImperativeHandle", K(), w(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return x = "useInsertionEffect", K(), w(), nl(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return x = "useLayoutEffect", K(), w(), nl(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        x = "useMemo", K(), w();
        var a = q.H;
        q.H = oc;
        try {
          return De(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        x = "useReducer", K(), w();
        var c = q.H;
        q.H = oc;
        try {
          return Oi(t, e, a);
        } finally {
          q.H = c;
        }
      },
      useRef: function() {
        return x = "useRef", K(), w(), te().memoizedState;
      },
      useState: function() {
        x = "useState", K(), w();
        var t = q.H;
        q.H = oc;
        try {
          return Oi(_a);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", K(), w();
      },
      useDeferredValue: function(t, e) {
        return x = "useDeferredValue", K(), w(), Tt(t, e);
      },
      useTransition: function() {
        return x = "useTransition", K(), w(), He();
      },
      useSyncExternalStore: function(t, e, a) {
        return x = "useSyncExternalStore", K(), w(), Mi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return x = "useId", K(), w(), te().memoizedState;
      },
      useFormState: function(t) {
        return x = "useFormState", K(), w(), Hc(t);
      },
      useActionState: function(t) {
        return x = "useActionState", K(), w(), Hc(t);
      },
      useOptimistic: function(t, e) {
        return x = "useOptimistic", K(), w(), As(t, e);
      },
      useMemoCache: function(t) {
        return K(), Ua(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", w(), te().memoizedState;
      },
      useEffectEvent: function(t) {
        return x = "useEffectEvent", K(), w(), qo(t);
      }
    };
    var Ob = {}, Mb = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set();
    Object.freeze(Ob);
    var G1 = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var c = Xl(t), o = al(c);
        o.payload = e, a != null && (Ni(a), o.callback = a), e = eu(t, o, c), e !== null && (In(c, "this.setState()", t), vt(e, t, c), an(e, t, c));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var c = Xl(t), o = al(c);
        o.tag = gb, o.payload = e, a != null && (Ni(a), o.callback = a), e = eu(t, o, c), e !== null && (In(c, "this.replaceState()", t), vt(e, t, c), an(e, t, c));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = Xl(t), c = al(a);
        c.tag = Sb, e != null && (Ni(e), c.callback = e), e = eu(t, c, a), e !== null && (In(a, "this.forceUpdate()", t), vt(e, t, a), an(e, t, a));
      }
    }, kh = null, X1 = null, Q1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Al = !1, qb = {}, Yb = {}, Gb = {}, Xb = {}, Fh = !1, Qb = {}, rg = {}, V1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Vb = !1, Zb = null;
    Zb = /* @__PURE__ */ new Set();
    var oo = !1, zl = !1, Z1 = !1, Lb = typeof WeakSet == "function" ? WeakSet : Set, Ll = null, Ih = null, Ph = null, Dl = null, sn = !1, fc = null, Nl = !1, w0 = 8192, iT = {
      getCacheForType: function(t) {
        var e = kt(bl), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return kt(bl).controller.signal;
      },
      getOwner: function() {
        return ga;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var J0 = Symbol.for;
      J0("selector.component"), J0("selector.has_pseudo_class"), J0("selector.role"), J0("selector.test_id"), J0("selector.text");
    }
    var oT = [], fT = typeof WeakMap == "function" ? WeakMap : Map, wl = 0, Bl = 2, Vn = 4, fo = 0, K0 = 1, Dr = 2, dg = 3, Bf = 4, hg = 6, wb = 5, Kt = wl, Se = null, Bt = null, _t = 0, rn = 0, mg = 1, Or = 2, $0 = 3, Jb = 4, L1 = 5, W0 = 6, yg = 7, w1 = 8, Mr = 9, he = rn, Zn = null, xf = !1, tm = !1, J1 = !1, Pc = 0, Qe = fo, jf = 0, qf = 0, K1 = 0, dn = 0, Rr = 0, k0 = null, wa = null, pg = !1, vg = 0, Kb = 0, $b = 300, gg = 1 / 0, Wb = 500, F0 = null, ll = null, Yf = null, Sg = 0, $1 = 1, W1 = 2, kb = 3, Gf = 0, Fb = 1, Ib = 2, Pb = 3, t2 = 4, bg = 5, Ol = 0, Xf = null, em = null, sc = 0, k1 = 0, F1 = -0, I1 = null, e2 = null, l2 = null, rc = Sg, a2 = null, sT = 50, I0 = 0, P1 = null, tS = !1, Eg = !1, rT = 50, Ur = 0, P0 = null, lm = !1, Tg = null, n2 = !1, u2 = /* @__PURE__ */ new Set(), dT = {}, Ag = null, am = null, eS = !1, lS = !1, zg = !1, aS = !1, Qf = 0, nS = {};
    (function() {
      for (var t = 0; t < y1.length; t++) {
        var e = y1[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), vn(a, "on" + e);
      }
      vn(xS, "onAnimationEnd"), vn(jS, "onAnimationIteration"), vn(qS, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(QE, "onTransitionRun"), vn(VE, "onTransitionStart"), vn(ZE, "onTransitionCancel"), vn(YS, "onTransitionEnd");
    })(), mo("onMouseEnter", ["mouseout", "mouseover"]), mo("onMouseLeave", ["mouseout", "mouseover"]), mo("onPointerEnter", ["pointerout", "pointerover"]), mo("onPointerLeave", ["pointerout", "pointerover"]), mn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), mn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), mn("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), mn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), mn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), mn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var tp = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), uS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tp)
    ), Dg = "_reactListening" + Math.random().toString(36).slice(2), c2 = !1, i2 = !1, Og = !1, o2 = !1, Mg = !1, Rg = !1, f2 = !1, Ug = {}, hT = /\r\n?/g, mT = /\u0000|\uFFFD/g, _r = "http://www.w3.org/1999/xlink", cS = "http://www.w3.org/XML/1998/namespace", yT = "javascript:throw new Error('React form unexpectedly submitted.')", pT = "suppressHydrationWarning", Cr = "&", _g = "/&", ep = "$", lp = "/$", Vf = "$?", Hr = "$~", nm = "$!", vT = "html", gT = "body", ST = "head", iS = "F!", s2 = "F", r2 = "loading", bT = "style", so = 0, um = 1, Cg = 2, oS = null, fS = null, d2 = { dialog: !0, webview: !0 }, sS = null, ap = void 0, h2 = typeof setTimeout == "function" ? setTimeout : void 0, ET = typeof clearTimeout == "function" ? clearTimeout : void 0, Nr = -1, m2 = typeof Promise == "function" ? Promise : void 0, TT = typeof queueMicrotask == "function" ? queueMicrotask : typeof m2 < "u" ? function(t) {
      return m2.resolve(null).then(t).catch(iv);
    } : h2, rS = null, Br = 0, np = 1, y2 = 2, p2 = 3, Nu = 4, Bu = /* @__PURE__ */ new Map(), v2 = /* @__PURE__ */ new Set(), ro = It.d;
    It.d = {
      f: function() {
        var t = ro.f(), e = ja();
        return t || e;
      },
      r: function(t) {
        var e = hn(t);
        e !== null && e.tag === 5 && e.type === "form" ? Xo(e) : ro.r(t);
      },
      D: function(t) {
        ro.D(t), wy("dns-prefetch", t, null);
      },
      C: function(t, e) {
        ro.C(t, e), wy("preconnect", t, e);
      },
      L: function(t, e, a) {
        ro.L(t, e, a);
        var c = cm;
        if (c && t && e) {
          var o = 'link[rel="preload"][as="' + oe(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + oe(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + oe(
            a.imageSizes
          ) + '"]')) : o += '[href="' + oe(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = Zi(t);
              break;
            case "script":
              f = Li(t);
          }
          Bu.has(f) || (t = Mt(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Bu.set(f, t), c.querySelector(o) !== null || e === "style" && c.querySelector(
            Ps(f)
          ) || e === "script" && c.querySelector(tr(f)) || (e = c.createElement("link"), Oe(e, "link", t), Le(e), c.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        ro.m(t, e);
        var a = cm;
        if (a && t) {
          var c = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + oe(c) + '"][href="' + oe(t) + '"]', f = o;
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Li(t);
          }
          if (!Bu.has(f) && (t = Mt({ rel: "modulepreload", href: t }, e), Bu.set(f, t), a.querySelector(o) === null)) {
            switch (c) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(tr(f)))
                  return;
            }
            c = a.createElement("link"), Oe(c, "link", t), Le(c), a.head.appendChild(c);
          }
        }
      },
      X: function(t, e) {
        ro.X(t, e);
        var a = cm;
        if (a && t) {
          var c = Wa(a).hoistableScripts, o = Li(t), f = c.get(o);
          f || (f = a.querySelector(
            tr(o)
          ), f || (t = Mt({ src: t, async: !0 }, e), (e = Bu.get(o)) && $y(t, e), f = a.createElement("script"), Le(f), Oe(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      },
      S: function(t, e, a) {
        ro.S(t, e, a);
        var c = cm;
        if (c && t) {
          var o = Wa(c).hoistableStyles, f = Zi(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Br, preload: null };
            if (d = c.querySelector(
              Ps(f)
            ))
              h.loading = np | Nu;
            else {
              t = Mt(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Bu.get(f)) && Ky(t, a);
              var y = d = c.createElement("link");
              Le(y), Oe(y, "link", t), y._p = new Promise(function(p, D) {
                y.onload = p, y.onerror = D;
              }), y.addEventListener("load", function() {
                h.loading |= np;
              }), y.addEventListener("error", function() {
                h.loading |= y2;
              }), h.loading |= Nu, of(d, e, c);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(t, e) {
        ro.M(t, e);
        var a = cm;
        if (a && t) {
          var c = Wa(a).hoistableScripts, o = Li(t), f = c.get(o);
          f || (f = a.querySelector(
            tr(o)
          ), f || (t = Mt({ src: t, async: !0, type: "module" }, e), (e = Bu.get(o)) && $y(t, e), f = a.createElement("script"), Le(f), Oe(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      }
    };
    var cm = typeof document > "u" ? null : document, Hg = null, AT = 6e4, zT = 800, DT = 500, dS = 0, hS = null, Ng = null, xr = a1, up = {
      $$typeof: jn,
      Provider: null,
      Consumer: null,
      _currentValue: xr,
      _currentValue2: xr,
      _threadCount: 0
    }, g2 = "%c%s%c", S2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", b2 = "", Bg = " ", OT = Function.prototype.bind, E2 = !1, T2 = null, A2 = null, z2 = null, D2 = null, O2 = null, M2 = null, R2 = null, U2 = null, _2 = null, C2 = null;
    T2 = function(t, e, a, c) {
      e = g(t, e), e !== null && (a = U(e.memoizedState, a, 0, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Mt({}, t.memoizedProps), a = Yl(t, 2), a !== null && vt(a, t, 2));
    }, A2 = function(t, e, a) {
      e = g(t, e), e !== null && (a = J(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = Mt({}, t.memoizedProps), a = Yl(t, 2), a !== null && vt(a, t, 2));
    }, z2 = function(t, e, a, c) {
      e = g(t, e), e !== null && (a = j(e.memoizedState, a, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Mt({}, t.memoizedProps), a = Yl(t, 2), a !== null && vt(a, t, 2));
    }, D2 = function(t, e, a) {
      t.pendingProps = U(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && vt(e, t, 2);
    }, O2 = function(t, e) {
      t.pendingProps = J(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && vt(e, t, 2);
    }, M2 = function(t, e, a) {
      t.pendingProps = j(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && vt(e, t, 2);
    }, R2 = function(t) {
      var e = Yl(t, 2);
      e !== null && vt(e, t, 2);
    }, U2 = function(t) {
      var e = Gr(), a = Yl(t, e);
      a !== null && vt(a, t, e);
    }, _2 = function(t) {
      At = t;
    }, C2 = function(t) {
      P = t;
    };
    var xg = !0, jg = null, mS = !1, Zf = null, Lf = null, wf = null, cp = /* @__PURE__ */ new Map(), ip = /* @__PURE__ */ new Map(), Jf = [], MT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), qg = null;
    if (xn.prototype.render = n0.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : be(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var c = e.current, o = Xl(c);
      hh(c, o, a, e, null, null);
    }, xn.prototype.unmount = n0.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (Kt & (Bl | Vn)) !== wl && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), hh(t.current, 2, null, t, null, null), ja(), e[uc] = null;
      }
    }, xn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = yp();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < Jf.length && e !== 0 && e < Jf[a].priority; a++) ;
        Jf.splice(a, 0, t), a === 0 && a0(t);
      }
    }, (function() {
      var t = ur.version;
      if (t !== "19.2.4")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (t + `
  - react-dom:  19.2.4
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), It.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + t
        ));
      return t = ba(e), t = t !== null ? jl(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: q,
        reconcilerVersion: "19.2.4"
      };
      return t.overrideHookState = T2, t.overrideHookStateDeletePath = A2, t.overrideHookStateRenamePath = z2, t.overrideProps = D2, t.overridePropsDeletePath = O2, t.overridePropsRenamePath = M2, t.scheduleUpdate = R2, t.scheduleRetry = U2, t.setErrorHandler = _2, t.setSuspenseHandler = C2, t.scheduleRefresh = Ce, t.scheduleRoot = wt, t.setRefreshHandler = xl, t.getCurrentFiber = re, fm(t);
    })() && Wc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var H2 = window.location.protocol;
      /^(https?|file):$/.test(H2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (H2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    rp.createRoot = function(t, e) {
      if (!be(t))
        throw Error("Target container is not a DOM element.");
      u0(t);
      var a = !1, c = "", o = Od, f = Md, d = Pm;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === on && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (c = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = ar(
        t,
        1,
        !1,
        null,
        null,
        a,
        c,
        null,
        o,
        f,
        d,
        Cv
      ), t[uc] = e.current, Qc(t), new n0(e);
    }, rp.hydrateRoot = function(t, e, a) {
      if (!be(t))
        throw Error("Target container is not a DOM element.");
      u0(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var c = !1, o = "", f = Od, d = Md, h = Pm, y = null;
      return a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = ar(
        t,
        1,
        !0,
        e,
        a ?? null,
        c,
        o,
        y,
        f,
        d,
        h,
        Cv
      ), e.context = Mv(null), a = e.current, c = Xl(a), c = ai(c), o = al(c), o.callback = null, eu(a, o, c), In(c, "hydrateRoot()", null), a = c, e.current.lanes = a, dc(e, a), ma(e), t[uc] = e.current, Qc(t), new xn(e);
    }, rp.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), rp;
}
var w2;
function OA() {
  if (w2) return Gg.exports;
  w2 = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (U) {
        console.error(U);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (g(), Gg.exports = zA()) : Gg.exports = DA(), Gg.exports;
}
var MA = OA();
const vS = 768;
let gS = null;
function RA(g, U = "root") {
  const j = document.getElementById(U);
  if (!j) throw new Error(`Element ID "${U}" not found`);
  gS || (gS = MA.createRoot(j)), gS.render(g);
}
function aE(g = !0) {
  const [U, j] = Qg(g);
  return [U, (J) => {
    J = J === void 0 ? !U : J, j(J);
  }];
}
function nE(g = 0, U = 1, j = 1 / 0, T = !0) {
  const [J, P] = Qg(g);
  return [J, () => {
    let K = J + U;
    K > j && (K = T ? g : j), P(K);
  }];
}
function uE(g, U = !0) {
  const j = Object.keys(g).length, [T, J] = nE(0, 1, j - 1, U);
  return [T, J];
}
function UA() {
  const [g, U] = Qg(void 0);
  return J2(() => {
    const j = window.matchMedia(`(max-width: ${vS - 1}px)`), T = () => {
      U(window.innerWidth < vS);
    };
    return j.addEventListener("change", T), U(window.innerWidth < vS), () => j.removeEventListener("change", T);
  }, []), !!g;
}
const _A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  renderReact: RA,
  useCount: nE,
  useIndex: uE,
  useIsMobile: UA,
  useOpen: aE
}, Symbol.toStringTag, { value: "Module" }));
function CA({
  childrens: g,
  handleCycle: U,
  onClick: j,
  ...T
}) {
  const [J, P] = uE(g), At = async (K) => {
    j && j(K), await U(J), P();
  };
  return /* @__PURE__ */ ue.jsx("button", { onClick: At, ...T, children: g[J] });
}
function HA({
  handleFormData: g,
  link: U,
  onSubmit: j,
  ...T
}) {
  const J = NT();
  let P = async (At) => {
    if (At.preventDefault(), j && j(At), g) {
      const K = new FormData(At.currentTarget);
      await g(K);
    }
    U && J(U);
  };
  return /* @__PURE__ */ ue.jsx("form", { onSubmit: P, ...T });
}
const cE = _T(null);
function NA({ children: g }) {
  const [U, j] = Qg(!1), T = {
    isLoading: U,
    setIsLoading: j
  };
  return /* @__PURE__ */ ue.jsxs(cE, { value: T, children: [
    g,
    U && /* @__PURE__ */ ue.jsx("div", { className: "fixed inset-0 z-50 flex justify-center items-center bg-black/5", children: /* @__PURE__ */ ue.jsx("div", { className: "flex justify-center items-center size-10 rounded-full bg-white shadow-md", children: /* @__PURE__ */ ue.jsx(K2, { role: "status", "aria-label": "Loading", className: "size-full animate-spin" }) }) })
  ] });
}
function BA() {
  const g = CT(cE);
  if (!g) throw new Error("must be used within Loading component");
  return {
    ...g,
    withLoading: async (U, ...j) => {
      g.setIsLoading(!0);
      try {
        return await U(...j);
      } finally {
        g.setIsLoading(!1);
      }
    }
  };
}
const xA = ({ ...g }) => {
  const { theme: U = "system" } = QT();
  return /* @__PURE__ */ ue.jsx(
    VT,
    {
      theme: U,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ ue.jsx(YT, { className: "size-4" }),
        info: /* @__PURE__ */ ue.jsx(qT, { className: "size-4" }),
        warning: /* @__PURE__ */ ue.jsx(jT, { className: "size-4" }),
        error: /* @__PURE__ */ ue.jsx(xT, { className: "size-4" }),
        loading: /* @__PURE__ */ ue.jsx(K2, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      toastOptions: {
        classNames: {
          toast: "cn-toast"
        }
      },
      ...g
    }
  );
};
function jA({ children: g }) {
  return /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
    g,
    /* @__PURE__ */ ue.jsx(xA, { position: "top-center", richColors: !0 })
  ] });
}
function qA({
  openIcon: g,
  closeIcon: U,
  handleOpen: j,
  defaultOpen: T = !0,
  rotate: J = !1,
  listenOpen: P,
  className: At,
  onClick: K,
  ...ce
}) {
  const [Gt, Fe] = aE(T);
  J2(
    () => {
      P !== void 0 && P !== Gt && Fe(P);
    },
    [P]
  );
  const ot = async (Ct) => {
    K && K(Ct), await j(!Gt), Fe();
  };
  return /* @__PURE__ */ ue.jsxs(
    "button",
    {
      onClick: ot,
      "data-open": Gt,
      className: ti("group relative", At),
      ...ce,
      children: [
        /* @__PURE__ */ ue.jsx(
          "div",
          {
            className: ti(
              "grid place-content-center size-full transition group-data-[open=false]:opacity-0 absolute",
              J ? "group-data-[open=false]:-rotate-90" : void 0
            ),
            children: g
          }
        ),
        /* @__PURE__ */ ue.jsx(
          "div",
          {
            className: ti(
              "grid place-content-center size-full transition group-data-[open=true]:opacity-0 absolute",
              J ? "group-data-[open=true]:rotate-90" : void 0
            ),
            children: U
          }
        )
      ]
    }
  );
}
const YA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Breadcrumb: yA,
  CycleButton: CA,
  Form: HA,
  IconToggle: qA,
  Loading: NA,
  Notice: jA,
  notice: ZT,
  useLoading: BA
}, Symbol.toStringTag, { value: "Module" }));
function GA() {
  document.documentElement.classList.add("debug");
}
const XA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  debugCss: GA
}, Symbol.toStringTag, { value: "Module" }));
function* ES(g, U, j) {
  if (j === 0) throw new Error('the parameter "step" cannot be 0');
  let T;
  if (U === void 0 ? (T = 0, U = g) : T = g, j = j ?? 1, j > 0)
    for (let J = T; J < U; J += j)
      yield J;
  else
    for (let J = T; J > U; J += j)
      yield J;
}
function QA(g, U, j) {
  let T;
  return U === void 0 ? T = ES(g) : T = ES(g, U, j), Array.from(T);
}
const VA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  range: ES,
  rangeArray: QA
}, Symbol.toStringTag, { value: "Module" }));
async function ZA(g, U) {
  let {
    params: j,
    body: T,
    headers: J,
    method: P,
    check: At
  } = U ?? {};
  if (j && (j = Object.fromEntries(
    Object.entries(j).map(
      ([Gt, Fe]) => [Gt, String(Fe)]
    )
  ), g = g + "?" + new URLSearchParams(j).toString()), J = J ?? {}, J = Object.fromEntries(
    Object.entries(J).map(
      ([Gt, Fe]) => [Gt, String(Fe)]
    )
  ), T instanceof File) {
    const Gt = new FormData();
    Gt.append("file", T), T = Gt;
  } else T instanceof Blob ? J["Content-Type"] = J["Content-Type"] ?? T.type ?? "application/octet-stream" : T instanceof Object && !(T instanceof URLSearchParams) && !(T instanceof FormData) ? (T = JSON.stringify(T), J["Content-Type"] = J["Content-Type"] ?? "application/json") : typeof T == "string" && (J["Content-Type"] = J["Content-Type"] ?? "application/json");
  const K = {
    method: P ? P.toUpperCase() : T ? "POST" : "GET",
    headers: J
  };
  T && (K.body = T), At = At ?? !1;
  const ce = await fetch(
    g,
    K
  );
  if (At && !ce.ok) {
    const Gt = await ce.text();
    throw new Error(Gt, { cause: ce });
  }
  return ce;
}
const LA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  request: ZA
}, Symbol.toStringTag, { value: "Module" })), wA = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, JA = /^https?:\/\/[^\s/$.?#].[^\s]*$/, KA = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, $A = /^1[3-9]\d{9}$/, WA = /^[\u4e00-\u9fa5]+$/, kA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PATTERN_CN: WA,
  PATTERN_EMAIL: KA,
  PATTERN_IP: wA,
  PATTERN_PHONE: $A,
  PATTERN_URL: JA
}, Symbol.toStringTag, { value: "Module" }));
class FA {
  /**
   * Build instance.
   * 
   * @param name - Local storage key.
   */
  constructor(U) {
    this.name = U, localStorage.getItem(U) || localStorage.setItem(U, "{}");
  }
  /**
   * Get all data.
   * 
   * @returns All data.
   */
  get data() {
    const U = localStorage.getItem(this.name);
    return JSON.parse(U);
  }
  /**
   * Get all keys.
   * 
   * @returns All keys.
   */
  get keys() {
    return Object.keys(this.data);
  }
  /**
   * Get all values.
   * 
   * @returns All values.
   */
  get values() {
    return Object.values(this.data);
  }
  /**
   * Update data.
   * 
   * @param data - New data.
   */
  update(U) {
    const j = Object.assign(this.data, U), T = JSON.stringify(j);
    localStorage.setItem(this.name, T);
  }
  /**
   * Clear data.
   */
  clear() {
    localStorage.setItem(this.name, "{}");
  }
  /**
   * Get a item value.
   * 
   * @param key - Item key.
   * @returns Item value.
   */
  get(U) {
    return this.data[U];
  }
  /**
   * Set a item.
   * 
   * @param key - Item key.
   * @param value - Item value.
   */
  set(U, j) {
    const T = { [U]: j };
    this.update(T);
  }
  /**
   * Delete a item.
   * 
   * @param key - Item key.
   */
  del(U) {
    const j = this.data;
    delete j[U];
    const T = JSON.stringify(j);
    localStorage.setItem(this.name, T);
  }
  /**
   * Toggle boolean value.
   * 
   * @param key - Item key.
   */
  toggle(U) {
    const j = this.data;
    if (!(U in j)) throw new Error(`Key "${U}" not found`);
    const T = j[U];
    if (typeof T != "boolean") throw new Error(`The value type of key "${U}" is not boolean`);
    this.set(U, !T);
  }
}
const IA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Storager: FA
}, Symbol.toStringTag, { value: "Module" })), i3 = {
  component: YA,
  base: XA,
  data: VA,
  net: LA,
  re: kA,
  react: _A,
  twc: mA,
  window: IA
};
export {
  i3 as default
};
