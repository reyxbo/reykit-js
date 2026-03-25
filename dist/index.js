import vS, { useState as jg, useEffect as Y2, createContext as hE, useContext as mE } from "react";
import j2 from "react-dom";
import { useNavigate as yE } from "react-router-dom";
import { Loader2Icon as G2, OctagonXIcon as pE, TriangleAlertIcon as vE, InfoIcon as gE, CircleCheckIcon as SE } from "lucide-react";
import { useTheme as bE } from "next-themes";
import { Toaster as TE, toast as EE } from "sonner";
import { clsx as AE } from "clsx";
import { twMerge as zE } from "tailwind-merge";
var Ng = { exports: {} }, up = {};
var R2;
function DE() {
  if (R2) return up;
  R2 = 1;
  var G = /* @__PURE__ */ Symbol.for("react.transitional.element"), $ = /* @__PURE__ */ Symbol.for("react.fragment");
  function W(M, tt, Bt) {
    var kt = null;
    if (Bt !== void 0 && (kt = "" + Bt), tt.key !== void 0 && (kt = "" + tt.key), "key" in tt) {
      Bt = {};
      for (var L in tt)
        L !== "key" && (Bt[L] = tt[L]);
    } else Bt = tt;
    return tt = Bt.ref, {
      $$typeof: G,
      type: M,
      key: kt,
      ref: tt !== void 0 ? tt : null,
      props: Bt
    };
  }
  return up.Fragment = $, up.jsx = W, up.jsxs = W, up;
}
var cp = {};
var U2;
function OE() {
  return U2 || (U2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function G(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === Ve ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case ge:
          return "Fragment";
        case Ja:
          return "Profiler";
        case le:
          return "StrictMode";
        case xl:
          return "Suspense";
        case ke:
          return "SuspenseList";
        case nt:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case Nl:
            return "Portal";
          case Ol:
            return j.displayName || "Context";
          case Qe:
            return (j._context.displayName || "Context") + ".Consumer";
          case ba:
            var I = j.render;
            return j = j.displayName, j || (j = I.displayName || I.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case jt:
            return I = j.displayName || null, I !== null ? I : G(j.type) || "Memo";
          case ol:
            I = j._payload, j = j._init;
            try {
              return G(j(I));
            } catch {
            }
        }
      return null;
    }
    function $(j) {
      return "" + j;
    }
    function W(j) {
      try {
        $(j);
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var at = I.error, ut = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return at.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ut
        ), $(j);
      }
    }
    function M(j) {
      if (j === ge) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === ol)
        return "<...>";
      try {
        var I = G(j);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function tt() {
      var j = xt.A;
      return j === null ? null : j.getOwner();
    }
    function Bt() {
      return Error("react-stack-top-frame");
    }
    function kt(j) {
      if (Ut.call(j, "key")) {
        var I = Object.getOwnPropertyDescriptor(j, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function L(j, I) {
      function at() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      at.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: at,
        configurable: !0
      });
    }
    function re() {
      var j = G(this.type);
      return V[j] || (V[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function ae(j, I, at, ut, xe, Ka) {
      var Se = at.ref;
      return j = {
        $$typeof: _e,
        type: j,
        key: I,
        props: at,
        _owner: ut
      }, (Se !== void 0 ? Se : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: re
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ka
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function Dl(j, I, at, ut, xe, Ka) {
      var Se = I.children;
      if (Se !== void 0)
        if (ut)
          if (ql(Se)) {
            for (ut = 0; ut < Se.length; ut++)
              st(Se[ut]);
            Object.freeze && Object.freeze(Se);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else st(Se);
      if (Ut.call(I, "key")) {
        Se = G(j);
        var $a = Object.keys(I).filter(function(Jf) {
          return Jf !== "key";
        });
        ut = 0 < $a.length ? "{key: someKey, " + $a.join(": ..., ") + ": ...}" : "{key: someKey}", mt[Se + ut] || ($a = 0 < $a.length ? "{" + $a.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ut,
          Se,
          $a,
          Se
        ), mt[Se + ut] = !0);
      }
      if (Se = null, at !== void 0 && (W(at), Se = "" + at), kt(I) && (W(I.key), Se = "" + I.key), "key" in I) {
        at = {};
        for (var Ta in I)
          Ta !== "key" && (at[Ta] = I[Ta]);
      } else at = I;
      return Se && L(
        at,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), ae(
        j,
        Se,
        at,
        tt(),
        xe,
        Ka
      );
    }
    function st(j) {
      Nt(j) ? j._store && (j._store.validated = 1) : typeof j == "object" && j !== null && j.$$typeof === ol && (j._payload.status === "fulfilled" ? Nt(j._payload.value) && j._payload.value._store && (j._payload.value._store.validated = 1) : j._store && (j._store.validated = 1));
    }
    function Nt(j) {
      return typeof j == "object" && j !== null && j.$$typeof === _e;
    }
    var Ue = vS, _e = /* @__PURE__ */ Symbol.for("react.transitional.element"), Nl = /* @__PURE__ */ Symbol.for("react.portal"), ge = /* @__PURE__ */ Symbol.for("react.fragment"), le = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ja = /* @__PURE__ */ Symbol.for("react.profiler"), Qe = /* @__PURE__ */ Symbol.for("react.consumer"), Ol = /* @__PURE__ */ Symbol.for("react.context"), ba = /* @__PURE__ */ Symbol.for("react.forward_ref"), xl = /* @__PURE__ */ Symbol.for("react.suspense"), ke = /* @__PURE__ */ Symbol.for("react.suspense_list"), jt = /* @__PURE__ */ Symbol.for("react.memo"), ol = /* @__PURE__ */ Symbol.for("react.lazy"), nt = /* @__PURE__ */ Symbol.for("react.activity"), Ve = /* @__PURE__ */ Symbol.for("react.client.reference"), xt = Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ut = Object.prototype.hasOwnProperty, ql = Array.isArray, fl = console.createTask ? console.createTask : function() {
      return null;
    };
    Ue = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var O, V = {}, w = Ue.react_stack_bottom_frame.bind(
      Ue,
      Bt
    )(), ft = fl(M(Bt)), mt = {};
    cp.Fragment = ge, cp.jsx = function(j, I, at) {
      var ut = 1e4 > xt.recentlyCreatedOwnerStacks++;
      return Dl(
        j,
        I,
        at,
        !1,
        ut ? Error("react-stack-top-frame") : w,
        ut ? fl(M(j)) : ft
      );
    }, cp.jsxs = function(j, I, at) {
      var ut = 1e4 > xt.recentlyCreatedOwnerStacks++;
      return Dl(
        j,
        I,
        at,
        !0,
        ut ? Error("react-stack-top-frame") : w,
        ut ? fl(M(j)) : ft
      );
    };
  })()), cp;
}
var _2;
function ME() {
  return _2 || (_2 = 1, process.env.NODE_ENV === "production" ? Ng.exports = DE() : Ng.exports = OE()), Ng.exports;
}
var wl = ME(), xg = { exports: {} }, ip = {}, qg = { exports: {} }, dS = {};
var C2;
function RE() {
  return C2 || (C2 = 1, (function(G) {
    function $(O, V) {
      var w = O.length;
      O.push(V);
      t: for (; 0 < w; ) {
        var ft = w - 1 >>> 1, mt = O[ft];
        if (0 < tt(mt, V))
          O[ft] = V, O[w] = mt, w = ft;
        else break t;
      }
    }
    function W(O) {
      return O.length === 0 ? null : O[0];
    }
    function M(O) {
      if (O.length === 0) return null;
      var V = O[0], w = O.pop();
      if (w !== V) {
        O[0] = w;
        t: for (var ft = 0, mt = O.length, j = mt >>> 1; ft < j; ) {
          var I = 2 * (ft + 1) - 1, at = O[I], ut = I + 1, xe = O[ut];
          if (0 > tt(at, w))
            ut < mt && 0 > tt(xe, at) ? (O[ft] = xe, O[ut] = w, ft = ut) : (O[ft] = at, O[I] = w, ft = I);
          else if (ut < mt && 0 > tt(xe, w))
            O[ft] = xe, O[ut] = w, ft = ut;
          else break t;
        }
      }
      return V;
    }
    function tt(O, V) {
      var w = O.sortIndex - V.sortIndex;
      return w !== 0 ? w : O.id - V.id;
    }
    if (G.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Bt = performance;
      G.unstable_now = function() {
        return Bt.now();
      };
    } else {
      var kt = Date, L = kt.now();
      G.unstable_now = function() {
        return kt.now() - L;
      };
    }
    var re = [], ae = [], Dl = 1, st = null, Nt = 3, Ue = !1, _e = !1, Nl = !1, ge = !1, le = typeof setTimeout == "function" ? setTimeout : null, Ja = typeof clearTimeout == "function" ? clearTimeout : null, Qe = typeof setImmediate < "u" ? setImmediate : null;
    function Ol(O) {
      for (var V = W(ae); V !== null; ) {
        if (V.callback === null) M(ae);
        else if (V.startTime <= O)
          M(ae), V.sortIndex = V.expirationTime, $(re, V);
        else break;
        V = W(ae);
      }
    }
    function ba(O) {
      if (Nl = !1, Ol(O), !_e)
        if (W(re) !== null)
          _e = !0, xl || (xl = !0, xt());
        else {
          var V = W(ae);
          V !== null && fl(ba, V.startTime - O);
        }
    }
    var xl = !1, ke = -1, jt = 5, ol = -1;
    function nt() {
      return ge ? !0 : !(G.unstable_now() - ol < jt);
    }
    function Ve() {
      if (ge = !1, xl) {
        var O = G.unstable_now();
        ol = O;
        var V = !0;
        try {
          t: {
            _e = !1, Nl && (Nl = !1, Ja(ke), ke = -1), Ue = !0;
            var w = Nt;
            try {
              e: {
                for (Ol(O), st = W(re); st !== null && !(st.expirationTime > O && nt()); ) {
                  var ft = st.callback;
                  if (typeof ft == "function") {
                    st.callback = null, Nt = st.priorityLevel;
                    var mt = ft(
                      st.expirationTime <= O
                    );
                    if (O = G.unstable_now(), typeof mt == "function") {
                      st.callback = mt, Ol(O), V = !0;
                      break e;
                    }
                    st === W(re) && M(re), Ol(O);
                  } else M(re);
                  st = W(re);
                }
                if (st !== null) V = !0;
                else {
                  var j = W(ae);
                  j !== null && fl(
                    ba,
                    j.startTime - O
                  ), V = !1;
                }
              }
              break t;
            } finally {
              st = null, Nt = w, Ue = !1;
            }
            V = void 0;
          }
        } finally {
          V ? xt() : xl = !1;
        }
      }
    }
    var xt;
    if (typeof Qe == "function")
      xt = function() {
        Qe(Ve);
      };
    else if (typeof MessageChannel < "u") {
      var Ut = new MessageChannel(), ql = Ut.port2;
      Ut.port1.onmessage = Ve, xt = function() {
        ql.postMessage(null);
      };
    } else
      xt = function() {
        le(Ve, 0);
      };
    function fl(O, V) {
      ke = le(function() {
        O(G.unstable_now());
      }, V);
    }
    G.unstable_IdlePriority = 5, G.unstable_ImmediatePriority = 1, G.unstable_LowPriority = 4, G.unstable_NormalPriority = 3, G.unstable_Profiling = null, G.unstable_UserBlockingPriority = 2, G.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, G.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : jt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, G.unstable_getCurrentPriorityLevel = function() {
      return Nt;
    }, G.unstable_next = function(O) {
      switch (Nt) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = Nt;
      }
      var w = Nt;
      Nt = V;
      try {
        return O();
      } finally {
        Nt = w;
      }
    }, G.unstable_requestPaint = function() {
      ge = !0;
    }, G.unstable_runWithPriority = function(O, V) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var w = Nt;
      Nt = O;
      try {
        return V();
      } finally {
        Nt = w;
      }
    }, G.unstable_scheduleCallback = function(O, V, w) {
      var ft = G.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ft + w : ft) : w = ft, O) {
        case 1:
          var mt = -1;
          break;
        case 2:
          mt = 250;
          break;
        case 5:
          mt = 1073741823;
          break;
        case 4:
          mt = 1e4;
          break;
        default:
          mt = 5e3;
      }
      return mt = w + mt, O = {
        id: Dl++,
        callback: V,
        priorityLevel: O,
        startTime: w,
        expirationTime: mt,
        sortIndex: -1
      }, w > ft ? (O.sortIndex = w, $(ae, O), W(re) === null && O === W(ae) && (Nl ? (Ja(ke), ke = -1) : Nl = !0, fl(ba, w - ft))) : (O.sortIndex = mt, $(re, O), _e || Ue || (_e = !0, xl || (xl = !0, xt()))), O;
    }, G.unstable_shouldYield = nt, G.unstable_wrapCallback = function(O) {
      var V = Nt;
      return function() {
        var w = Nt;
        Nt = V;
        try {
          return O.apply(this, arguments);
        } finally {
          Nt = w;
        }
      };
    };
  })(dS)), dS;
}
var hS = {};
var H2;
function UE() {
  return H2 || (H2 = 1, (function(G) {
    process.env.NODE_ENV !== "production" && (function() {
      function $() {
        if (ba = !1, ol) {
          var O = G.unstable_now();
          xt = O;
          var V = !0;
          try {
            t: {
              Qe = !1, Ol && (Ol = !1, ke(nt), nt = -1), Ja = !0;
              var w = le;
              try {
                e: {
                  for (kt(O), ge = M(Ue); ge !== null && !(ge.expirationTime > O && re()); ) {
                    var ft = ge.callback;
                    if (typeof ft == "function") {
                      ge.callback = null, le = ge.priorityLevel;
                      var mt = ft(
                        ge.expirationTime <= O
                      );
                      if (O = G.unstable_now(), typeof mt == "function") {
                        ge.callback = mt, kt(O), V = !0;
                        break e;
                      }
                      ge === M(Ue) && tt(Ue), kt(O);
                    } else tt(Ue);
                    ge = M(Ue);
                  }
                  if (ge !== null) V = !0;
                  else {
                    var j = M(_e);
                    j !== null && ae(
                      L,
                      j.startTime - O
                    ), V = !1;
                  }
                }
                break t;
              } finally {
                ge = null, le = w, Ja = !1;
              }
              V = void 0;
            }
          } finally {
            V ? Ut() : ol = !1;
          }
        }
      }
      function W(O, V) {
        var w = O.length;
        O.push(V);
        t: for (; 0 < w; ) {
          var ft = w - 1 >>> 1, mt = O[ft];
          if (0 < Bt(mt, V))
            O[ft] = V, O[w] = mt, w = ft;
          else break t;
        }
      }
      function M(O) {
        return O.length === 0 ? null : O[0];
      }
      function tt(O) {
        if (O.length === 0) return null;
        var V = O[0], w = O.pop();
        if (w !== V) {
          O[0] = w;
          t: for (var ft = 0, mt = O.length, j = mt >>> 1; ft < j; ) {
            var I = 2 * (ft + 1) - 1, at = O[I], ut = I + 1, xe = O[ut];
            if (0 > Bt(at, w))
              ut < mt && 0 > Bt(xe, at) ? (O[ft] = xe, O[ut] = w, ft = ut) : (O[ft] = at, O[I] = w, ft = I);
            else if (ut < mt && 0 > Bt(xe, w))
              O[ft] = xe, O[ut] = w, ft = ut;
            else break t;
          }
        }
        return V;
      }
      function Bt(O, V) {
        var w = O.sortIndex - V.sortIndex;
        return w !== 0 ? w : O.id - V.id;
      }
      function kt(O) {
        for (var V = M(_e); V !== null; ) {
          if (V.callback === null) tt(_e);
          else if (V.startTime <= O)
            tt(_e), V.sortIndex = V.expirationTime, W(Ue, V);
          else break;
          V = M(_e);
        }
      }
      function L(O) {
        if (Ol = !1, kt(O), !Qe)
          if (M(Ue) !== null)
            Qe = !0, ol || (ol = !0, Ut());
          else {
            var V = M(_e);
            V !== null && ae(
              L,
              V.startTime - O
            );
          }
      }
      function re() {
        return ba ? !0 : !(G.unstable_now() - xt < Ve);
      }
      function ae(O, V) {
        nt = xl(function() {
          O(G.unstable_now());
        }, V);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), G.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Dl = performance;
        G.unstable_now = function() {
          return Dl.now();
        };
      } else {
        var st = Date, Nt = st.now();
        G.unstable_now = function() {
          return st.now() - Nt;
        };
      }
      var Ue = [], _e = [], Nl = 1, ge = null, le = 3, Ja = !1, Qe = !1, Ol = !1, ba = !1, xl = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, jt = typeof setImmediate < "u" ? setImmediate : null, ol = !1, nt = -1, Ve = 5, xt = -1;
      if (typeof jt == "function")
        var Ut = function() {
          jt($);
        };
      else if (typeof MessageChannel < "u") {
        var ql = new MessageChannel(), fl = ql.port2;
        ql.port1.onmessage = $, Ut = function() {
          fl.postMessage(null);
        };
      } else
        Ut = function() {
          xl($, 0);
        };
      G.unstable_IdlePriority = 5, G.unstable_ImmediatePriority = 1, G.unstable_LowPriority = 4, G.unstable_NormalPriority = 3, G.unstable_Profiling = null, G.unstable_UserBlockingPriority = 2, G.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, G.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ve = 0 < O ? Math.floor(1e3 / O) : 5;
      }, G.unstable_getCurrentPriorityLevel = function() {
        return le;
      }, G.unstable_next = function(O) {
        switch (le) {
          case 1:
          case 2:
          case 3:
            var V = 3;
            break;
          default:
            V = le;
        }
        var w = le;
        le = V;
        try {
          return O();
        } finally {
          le = w;
        }
      }, G.unstable_requestPaint = function() {
        ba = !0;
      }, G.unstable_runWithPriority = function(O, V) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var w = le;
        le = O;
        try {
          return V();
        } finally {
          le = w;
        }
      }, G.unstable_scheduleCallback = function(O, V, w) {
        var ft = G.unstable_now();
        switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ft + w : ft) : w = ft, O) {
          case 1:
            var mt = -1;
            break;
          case 2:
            mt = 250;
            break;
          case 5:
            mt = 1073741823;
            break;
          case 4:
            mt = 1e4;
            break;
          default:
            mt = 5e3;
        }
        return mt = w + mt, O = {
          id: Nl++,
          callback: V,
          priorityLevel: O,
          startTime: w,
          expirationTime: mt,
          sortIndex: -1
        }, w > ft ? (O.sortIndex = w, W(_e, O), M(Ue) === null && O === M(_e) && (Ol ? (ke(nt), nt = -1) : Ol = !0, ae(L, w - ft))) : (O.sortIndex = mt, W(Ue, O), Qe || Ja || (Qe = !0, ol || (ol = !0, Ut()))), O;
      }, G.unstable_shouldYield = re, G.unstable_wrapCallback = function(O) {
        var V = le;
        return function() {
          var w = le;
          le = V;
          try {
            return O.apply(this, arguments);
          } finally {
            le = w;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(hS)), hS;
}
var B2;
function X2() {
  return B2 || (B2 = 1, process.env.NODE_ENV === "production" ? qg.exports = RE() : qg.exports = UE()), qg.exports;
}
var N2;
function _E() {
  if (N2) return ip;
  N2 = 1;
  var G = X2(), $ = vS, W = j2;
  function M(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function tt(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Bt(l) {
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
  function kt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function L(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function re(l) {
    if (Bt(l) !== l)
      throw Error(M(188));
  }
  function ae(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Bt(l), n === null) throw Error(M(188));
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
          if (r === u) return re(s), l;
          if (r === i) return re(s), n;
          r = r.sibling;
        }
        throw Error(M(188));
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
          if (!m) throw Error(M(189));
        }
      }
      if (u.alternate !== i) throw Error(M(190));
    }
    if (u.tag !== 3) throw Error(M(188));
    return u.stateNode.current === u ? l : n;
  }
  function Dl(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Dl(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var st = Object.assign, Nt = /* @__PURE__ */ Symbol.for("react.element"), Ue = /* @__PURE__ */ Symbol.for("react.transitional.element"), _e = /* @__PURE__ */ Symbol.for("react.portal"), Nl = /* @__PURE__ */ Symbol.for("react.fragment"), ge = /* @__PURE__ */ Symbol.for("react.strict_mode"), le = /* @__PURE__ */ Symbol.for("react.profiler"), Ja = /* @__PURE__ */ Symbol.for("react.consumer"), Qe = /* @__PURE__ */ Symbol.for("react.context"), Ol = /* @__PURE__ */ Symbol.for("react.forward_ref"), ba = /* @__PURE__ */ Symbol.for("react.suspense"), xl = /* @__PURE__ */ Symbol.for("react.suspense_list"), ke = /* @__PURE__ */ Symbol.for("react.memo"), jt = /* @__PURE__ */ Symbol.for("react.lazy"), ol = /* @__PURE__ */ Symbol.for("react.activity"), nt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ve = Symbol.iterator;
  function xt(l) {
    return l === null || typeof l != "object" ? null : (l = Ve && l[Ve] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ut = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ql(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ut ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Nl:
        return "Fragment";
      case le:
        return "Profiler";
      case ge:
        return "StrictMode";
      case ba:
        return "Suspense";
      case xl:
        return "SuspenseList";
      case ol:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case _e:
          return "Portal";
        case Qe:
          return l.displayName || "Context";
        case Ja:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ol:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ke:
          return n = l.displayName || null, n !== null ? n : ql(l.type) || "Memo";
        case jt:
          n = l._payload, l = l._init;
          try {
            return ql(l(n));
          } catch {
          }
      }
    return null;
  }
  var fl = Array.isArray, O = $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ft = [], mt = -1;
  function j(l) {
    return { current: l };
  }
  function I(l) {
    0 > mt || (l.current = ft[mt], ft[mt] = null, mt--);
  }
  function at(l, n) {
    mt++, ft[mt] = l.current, l.current = n;
  }
  var ut = j(null), xe = j(null), Ka = j(null), Se = j(null);
  function $a(l, n) {
    switch (at(Ka, n), at(xe, l), at(ut, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Dv(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Dv(n), l = t0(n, l);
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
    I(ut), at(ut, l);
  }
  function Ta() {
    I(ut), I(xe), I(Ka);
  }
  function Jf(l) {
    l.memoizedState !== null && at(Se, l);
    var n = ut.current, u = t0(n, l.type);
    n !== u && (at(xe, l), at(ut, u));
  }
  function F(l) {
    xe.current === l && (I(ut), I(xe)), Se.current === l && (I(Se), or._currentValue = w);
  }
  var Kf, $f;
  function Ln(l) {
    if (Kf === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Kf = n && n[1] || "", $f = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kf + l + $f;
  }
  var ti = !1;
  function ne(l, n) {
    if (!l || ti) return "";
    ti = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (x) {
                  var C = x;
                }
                Reflect.construct(l, [], Q);
              } else {
                try {
                  Q.call();
                } catch (x) {
                  C = x;
                }
                l.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                C = x;
              }
              (Q = l()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (x) {
            if (x && C && typeof x.stack == "string")
              return [x.stack, C.stack];
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
        var T = m.split(`
`), _ = v.split(`
`);
        for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < _.length && !_[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === T.length || s === _.length)
          for (i = T.length - 1, s = _.length - 1; 1 <= i && 0 <= s && T[i] !== _[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== _[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || T[i] !== _[s]) {
                  var q = `
` + T[i].replace(" at new ", " at ");
                  return l.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", l.displayName)), q;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ti = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ln(u) : "";
  }
  function um(l, n) {
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
        return ne(l.type, !1);
      case 11:
        return ne(l.type.render, !1);
      case 1:
        return ne(l.type, !0);
      case 31:
        return Ln("Activity");
      default:
        return "";
    }
  }
  function xr(l) {
    try {
      var n = "", u = null;
      do
        n += um(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var cm = Object.prototype.hasOwnProperty, de = G.unstable_scheduleCallback, im = G.unstable_cancelCallback, ei = G.unstable_shouldYield, qr = G.unstable_requestPaint, Ml = G.unstable_now, Gg = G.unstable_getCurrentPriorityLevel, Yr = G.unstable_ImmediatePriority, jr = G.unstable_UserBlockingPriority, dc = G.unstable_NormalPriority, Xg = G.unstable_LowPriority, om = G.unstable_IdlePriority, fp = G.log, sp = G.unstable_setDisableYieldValue, li = null, sa = null;
  function xu(l) {
    if (typeof fp == "function" && sp(l), sa && typeof sa.setStrictMode == "function")
      try {
        sa.setStrictMode(li, l);
      } catch {
      }
  }
  var Jl = Math.clz32 ? Math.clz32 : fm, rp = Math.log, dp = Math.LN2;
  function fm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (rp(l) / dp | 0) | 0;
  }
  var qu = 256, hn = 262144, hc = 4194304;
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
  function Ze(l, n, u) {
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
  function ho(l, n) {
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
  function ai() {
    var l = hc;
    return hc <<= 1, (hc & 62914560) === 0 && (hc = 4194304), l;
  }
  function Wf(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function mo(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Gr(l, n, u, i, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, T = l.expirationTimes, _ = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var q = 31 - Jl(u), Q = 1 << q;
      v[q] = 0, T[q] = -1;
      var C = _[q];
      if (C !== null)
        for (_[q] = null, q = 0; q < C.length; q++) {
          var x = C[q];
          x !== null && (x.lane &= -536870913);
        }
      u &= ~Q;
    }
    i !== 0 && kf(l, i, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function kf(l, n, u) {
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
  function Ea(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Xr(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Xr(l) {
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
  function sm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Qr() {
    var l = V.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fr(l.type));
  }
  function rm(l, n) {
    var u = V.p;
    try {
      return V.p = l, n();
    } finally {
      V.p = u;
    }
  }
  var yn = Math.random().toString(36).slice(2), ue = "__reactFiber$" + yn, Kl = "__reactProps$" + yn, mc = "__reactContainer$" + yn, Vr = "__reactEvents$" + yn, dm = "__reactListeners$" + yn, hp = "__reactHandles$" + yn, hm = "__reactResources$" + yn, Jn = "__reactMarker$" + yn;
  function Zr(l) {
    delete l[ue], delete l[Kl], delete l[Vr], delete l[dm], delete l[hp];
  }
  function ni(l) {
    var n = l[ue];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[mc] || u[ue]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = qn(l); l !== null; ) {
            if (u = l[ue]) return u;
            l = qn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ui(l) {
    if (l = l[ue] || l[mc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function yo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(M(33));
  }
  function ci(l) {
    var n = l[hm];
    return n || (n = l[hm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ft(l) {
    l[Jn] = !0;
  }
  var ii = /* @__PURE__ */ new Set(), yc = {};
  function pc(l, n) {
    Kn(l, n), Kn(l + "Capture", n);
  }
  function Kn(l, n) {
    for (yc[l] = n, l = 0; l < n.length; l++)
      ii.add(n[l]);
  }
  var Lr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wr = {}, po = {};
  function vo(l) {
    return cm.call(po, l) ? !0 : cm.call(wr, l) ? !1 : Lr.test(l) ? po[l] = !0 : (wr[l] = !0, !1);
  }
  function go(l, n, u) {
    if (vo(n))
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
  function Jr(l, n, u) {
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
  function Yu(l, n, u, i) {
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
  function Kr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function mm(l, n, u) {
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
  function $r(l) {
    if (!l._valueTracker) {
      var n = Kr(l) ? "checked" : "value";
      l._valueTracker = mm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function ym(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), i = "";
    return l && (i = Kr(l) ? l.checked ? "true" : "false" : l.value), l = i, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Ff(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Qg = /[\n"\\]/g;
  function za(l) {
    return l.replace(
      Qg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function If(l, n, u, i, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Aa(n)) : l.value !== "" + Aa(n) && (l.value = "" + Aa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? oi(l, m, Aa(n)) : u != null ? oi(l, m, Aa(u)) : i != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Aa(v) : l.removeAttribute("name");
  }
  function Pf(l, n, u, i, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        $r(l);
        return;
      }
      u = u != null ? "" + Aa(u) : "", n = n != null ? "" + Aa(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, l.checked = v ? l.checked : !!i, l.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), $r(l);
  }
  function oi(l, n, u) {
    n === "number" && Ff(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function So(l, n, u, i) {
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
  function pm(l, n, u) {
    if (n != null && (n = "" + Aa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Aa(u) : "";
  }
  function vm(l, n, u, i) {
    if (n == null) {
      if (i != null) {
        if (u != null) throw Error(M(92));
        if (fl(i)) {
          if (1 < i.length) throw Error(M(93));
          i = i[0];
        }
        u = i;
      }
      u == null && (u = ""), n = u;
    }
    u = Aa(n), l.defaultValue = u, i = l.textContent, i === u && i !== "" && i !== null && (l.value = i), $r(l);
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
  var mp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function yp(l, n, u) {
    var i = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? i ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : i ? l.setProperty(n, u) : typeof u != "number" || u === 0 || mp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function pp(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(M(62));
    if (l = l.style, u != null) {
      for (var i in u)
        !u.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? l.setProperty(i, "") : i === "float" ? l.cssFloat = "" : l[i] = "");
      for (var s in n)
        i = n[s], n.hasOwnProperty(s) && u[s] !== i && yp(l, s, i);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && yp(l, r, n[r]);
  }
  function gm(l) {
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
  var Vg = /* @__PURE__ */ new Map([
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
  ]), ts = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ka(l) {
    return ts.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function pn() {
  }
  var Wr = null;
  function kr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wn = null, fi = null;
  function es(l) {
    var n = ui(l);
    if (n && (l = n.stateNode)) {
      var u = l[Kl] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (If(
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
                if (!s) throw Error(M(90));
                If(
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
              i = u[n], i.form === l.form && ym(i);
          }
          break t;
        case "textarea":
          pm(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && So(l, !!u.multiple, n, !1);
      }
    }
  }
  var bo = !1;
  function Sm(l, n, u) {
    if (bo) return l(n, u);
    bo = !0;
    try {
      var i = l(n);
      return i;
    } finally {
      if (bo = !1, (Wn !== null || fi !== null) && (lf(), Wn && (n = Wn, l = fi, fi = Wn = null, es(n), l)))
        for (n = 0; n < l.length; n++) es(l[n]);
    }
  }
  function sl(l, n) {
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
        M(231, n, typeof u)
      );
    return u;
  }
  var ju = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ls = !1;
  if (ju)
    try {
      var To = {};
      Object.defineProperty(To, "passive", {
        get: function() {
          ls = !0;
        }
      }), window.addEventListener("test", To, To), window.removeEventListener("test", To, To);
    } catch {
      ls = !1;
    }
  var Gu = null, bm = null, Fr = null;
  function Tm() {
    if (Fr) return Fr;
    var l, n = bm, u = n.length, i, s = "value" in Gu ? Gu.value : Gu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (i = 1; i <= m && n[u - i] === s[r - i]; i++) ;
    return Fr = s.slice(l, 1 < i ? 1 - i : void 0);
  }
  function Ir(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function as() {
    return !0;
  }
  function vp() {
    return !1;
  }
  function Rl(l) {
    function n(u, i, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? as : vp, this.isPropagationStopped = vp, this;
    }
    return st(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = as);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = as);
      },
      persist: function() {
      },
      isPersistent: as
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
  }, ns = Rl(vc), Eo = st({}, vc, { view: 0, detail: 0 }), Zg = Rl(Eo), Em, Am, us, Pr = st({}, Eo, {
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
      return "movementX" in l ? l.movementX : (l !== us && (us && l.type === "mousemove" ? (Em = l.screenX - us.screenX, Am = l.screenY - us.screenY) : Am = Em = 0, us = l), Em);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Am;
    }
  }), Ao = Rl(Pr), gp = st({}, Pr, { dataTransfer: 0 }), Sp = Rl(gp), bp = st({}, Eo, { relatedTarget: 0 }), td = Rl(bp), zm = st({}, vc, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Tp = Rl(zm), si = st({}, vc, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ri = Rl(si), vn = st({}, vc, { data: 0 }), Ep = Rl(vn), Dm = {
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
  }, Ap = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Ap[l]) ? !!n[l] : !1;
  }
  function Fa() {
    return gn;
  }
  var ed = st({}, Eo, {
    key: function(l) {
      if (l.key) {
        var n = Dm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Ir(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? kn[l.keyCode] || "Unidentified" : "";
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
      return l.type === "keypress" ? Ir(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ir(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ld = Rl(ed), Om = st({}, Pr, {
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
  }), Sn = Rl(Om), Lg = st({}, Eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa
  }), zp = Rl(Lg), Dp = st({}, vc, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wg = Rl(Dp), Mm = st({}, Pr, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jg = Rl(Mm), Op = st({}, vc, {
    newState: 0,
    oldState: 0
  }), Rm = Rl(Op), ad = [9, 13, 27, 32], zo = ju && "CompositionEvent" in window, di = null;
  ju && "documentMode" in document && (di = document.documentMode);
  var Yl = ju && "TextEvent" in window && !di, Um = ju && (!zo || di && 8 < di && 11 >= di), cs = " ", gc = !1;
  function nd(l, n) {
    switch (l) {
      case "keyup":
        return ad.indexOf(n.keyCode) !== -1;
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
  function _m(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var hi = !1;
  function Mp(l, n) {
    switch (l) {
      case "compositionend":
        return _m(n);
      case "keypress":
        return n.which !== 32 ? null : (gc = !0, cs);
      case "textInput":
        return l = n.data, l === cs && gc ? null : l;
      default:
        return null;
    }
  }
  function Kg(l, n) {
    if (hi)
      return l === "compositionend" || !zo && nd(l, n) ? (l = Tm(), Fr = bm = Gu = null, hi = !1, l) : null;
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
        return Um && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Cm = {
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
    return n === "input" ? !!Cm[l.type] : n === "textarea";
  }
  function Hm(l, n, u, i) {
    Wn ? fi ? fi.push(i) : fi = [i] : Wn = i, n = lr(n, "onChange"), 0 < n.length && (u = new ns(
      "onChange",
      "change",
      null,
      u,
      i
    ), l.push({ event: u, listeners: n }));
  }
  var mi = null, Sc = null;
  function yi(l) {
    Ev(l, 0);
  }
  function Do(l) {
    var n = yo(l);
    if (ym(n)) return l;
  }
  function Bm(l, n) {
    if (l === "change") return n;
  }
  var ud = !1;
  if (ju) {
    var $l;
    if (ju) {
      var bn = "oninput" in document;
      if (!bn) {
        var Nm = document.createElement("div");
        Nm.setAttribute("oninput", "return;"), bn = typeof Nm.oninput == "function";
      }
      $l = bn;
    } else $l = !1;
    ud = $l && (!document.documentMode || 9 < document.documentMode);
  }
  function cd() {
    mi && (mi.detachEvent("onpropertychange", id), Sc = mi = null);
  }
  function id(l) {
    if (l.propertyName === "value" && Do(Sc)) {
      var n = [];
      Hm(
        n,
        Sc,
        l,
        kr(l)
      ), Sm(yi, n);
    }
  }
  function Rp(l, n, u) {
    l === "focusin" ? (cd(), mi = n, Sc = u, mi.attachEvent("onpropertychange", id)) : l === "focusout" && cd();
  }
  function Up(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Do(Sc);
  }
  function bc(l, n) {
    if (l === "click") return Do(n);
  }
  function pi(l, n) {
    if (l === "input" || l === "change")
      return Do(n);
  }
  function _p(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var jl = typeof Object.is == "function" ? Object.is : _p;
  function Ia(l, n) {
    if (jl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), i = Object.keys(n);
    if (u.length !== i.length) return !1;
    for (i = 0; i < u.length; i++) {
      var s = u[i];
      if (!cm.call(n, s) || !jl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function xm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function qm(l, n) {
    var u = xm(l);
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
      u = xm(u);
    }
  }
  function vi(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? vi(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Tc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Ff(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Ff(l.document);
    }
    return n;
  }
  function is(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var os = ju && "documentMode" in document && 11 >= document.documentMode, Ec = null, Oo = null, Pa = null, Tn = !1;
  function od(l, n, u) {
    var i = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Tn || Ec == null || Ec !== Ff(i) || (i = Ec, "selectionStart" in i && is(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Pa && Ia(Pa, i) || (Pa = i, i = lr(Oo, "onSelect"), 0 < i.length && (n = new ns(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: i }), n.target = Ec)));
  }
  function Xu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var En = {
    animationend: Xu("Animation", "AnimationEnd"),
    animationiteration: Xu("Animation", "AnimationIteration"),
    animationstart: Xu("Animation", "AnimationStart"),
    transitionrun: Xu("Transition", "TransitionRun"),
    transitionstart: Xu("Transition", "TransitionStart"),
    transitioncancel: Xu("Transition", "TransitionCancel"),
    transitionend: Xu("Transition", "TransitionEnd")
  }, Mo = {}, Ac = {};
  ju && (Ac = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
  function Kt(l) {
    if (Mo[l]) return Mo[l];
    if (!En[l]) return l;
    var n = En[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ac)
        return Mo[l] = n[u];
    return l;
  }
  var fs = Kt("animationend"), Ym = Kt("animationiteration"), fd = Kt("animationstart"), gi = Kt("transitionrun"), ss = Kt("transitionstart"), In = Kt("transitioncancel"), Cp = Kt("transitionend"), Pn = /* @__PURE__ */ new Map(), Ro = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ro.push("scrollEnd");
  function Wl(l, n) {
    Pn.set(l, n), pc(n, [l]);
  }
  var Si = typeof reportError == "function" ? reportError : function(l) {
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
  }, Ee = [], rl = 0, tn = 0;
  function Da() {
    for (var l = rl, n = tn = rl = 0; n < l; ) {
      var u = Ee[n];
      Ee[n++] = null;
      var i = Ee[n];
      Ee[n++] = null;
      var s = Ee[n];
      Ee[n++] = null;
      var r = Ee[n];
      if (Ee[n++] = null, i !== null && s !== null) {
        var m = i.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), i.pending = s;
      }
      r !== 0 && sd(u, s, r);
    }
  }
  function Oa(l, n, u, i) {
    Ee[rl++] = l, Ee[rl++] = n, Ee[rl++] = u, Ee[rl++] = i, tn |= i, l.lanes |= i, l = l.alternate, l !== null && (l.lanes |= i);
  }
  function en(l, n, u, i) {
    return Oa(l, n, u, i), rs(l);
  }
  function Qu(l, n) {
    return Oa(l, null, null, n), rs(l);
  }
  function sd(l, n, u) {
    l.lanes |= u;
    var i = l.alternate;
    i !== null && (i.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, i = r.alternate, i !== null && (i.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Jl(u), l = r.hiddenUpdates, i = l[s], i === null ? l[s] = [n] : i.push(n), n.lane = u | 536870912), r) : null;
  }
  function rs(l) {
    if (50 < ef)
      throw ef = 0, Ks = null, Error(M(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var kl = {};
  function Hp(l, n, u, i) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qe(l, n, u, i) {
    return new Hp(l, n, u, i);
  }
  function bi(l) {
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
  function jm(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function rd(l, n, u, i, s, r) {
    var m = 0;
    if (i = l, typeof l == "function") bi(l) && (m = 1);
    else if (typeof l == "string")
      m = i0(
        l,
        u,
        ut.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case ol:
          return l = qe(31, u, n, s), l.elementType = ol, l.lanes = r, l;
        case Nl:
          return Zu(u.children, s, r, n);
        case ge:
          m = 8, s |= 24;
          break;
        case le:
          return l = qe(12, u, n, s | 2), l.elementType = le, l.lanes = r, l;
        case ba:
          return l = qe(13, u, n, s), l.elementType = ba, l.lanes = r, l;
        case xl:
          return l = qe(19, u, n, s), l.elementType = xl, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Qe:
                m = 10;
                break t;
              case Ja:
                m = 9;
                break t;
              case Ol:
                m = 11;
                break t;
              case ke:
                m = 14;
                break t;
              case jt:
                m = 16, i = null;
                break t;
            }
          m = 29, u = Error(
            M(130, l === null ? "null" : typeof l, "")
          ), i = null;
      }
    return n = qe(m, u, n, s), n.elementType = l, n.type = i, n.lanes = r, n;
  }
  function Zu(l, n, u, i) {
    return l = qe(7, l, i, n), l.lanes = u, l;
  }
  function Uo(l, n, u) {
    return l = qe(6, l, null, n), l.lanes = u, l;
  }
  function Gm(l) {
    var n = qe(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function dd(l, n, u) {
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
  var Xm = /* @__PURE__ */ new WeakMap();
  function Ma(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Xm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: xr(n)
      }, Xm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: xr(n)
    };
  }
  var Ra = [], Ti = 0, ds = null, Le = 0, ra = [], Fl = 0, An = null, da = 1, zn = "";
  function ln(l, n) {
    Ra[Ti++] = Le, Ra[Ti++] = ds, ds = l, Le = n;
  }
  function Qm(l, n, u) {
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
  function _o(l) {
    l.return !== null && (ln(l, 1), Qm(l, 1, 0));
  }
  function hd(l) {
    for (; l === ds; )
      ds = Ra[--Ti], Ra[Ti] = null, Le = Ra[--Ti], Ra[Ti] = null;
    for (; l === An; )
      An = ra[--Fl], ra[Fl] = null, zn = ra[--Fl], ra[Fl] = null, da = ra[--Fl], ra[Fl] = null;
  }
  function hs(l, n) {
    ra[Fl++] = da, ra[Fl++] = zn, ra[Fl++] = An, da = n.id, zn = n.overflow, An = l;
  }
  var dl = null, he = null, qt = !1, tu = null, el = !1, eu = Error(M(519));
  function an(l) {
    var n = Error(
      M(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ho(Ma(n, l)), eu;
  }
  function ms(l) {
    var n = l.stateNode, u = l.type, i = l.memoizedProps;
    switch (n[ue] = l, n[Kl] = i, u) {
      case "dialog":
        Ht("cancel", n), Ht("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ht("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < of.length; u++)
          Ht(of[u], n);
        break;
      case "source":
        Ht("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ht("error", n), Ht("load", n);
        break;
      case "details":
        Ht("toggle", n);
        break;
      case "input":
        Ht("invalid", n), Pf(
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
        Ht("invalid", n);
        break;
      case "textarea":
        Ht("invalid", n), vm(n, i.value, i.defaultValue, i.children);
    }
    u = i.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || i.suppressHydrationWarning === !0 || ky(n.textContent, u) ? (i.popover != null && (Ht("beforetoggle", n), Ht("toggle", n)), i.onScroll != null && Ht("scroll", n), i.onScrollEnd != null && Ht("scrollend", n), i.onClick != null && (n.onclick = pn), n = !0) : n = !1, n || an(l, !0);
  }
  function Co(l) {
    for (dl = l.return; dl; )
      switch (dl.tag) {
        case 5:
        case 31:
        case 13:
          el = !1;
          return;
        case 27:
        case 3:
          el = !0;
          return;
        default:
          dl = dl.return;
      }
  }
  function lu(l) {
    if (l !== dl) return !1;
    if (!qt) return Co(l), qt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || sf(l.type, l.memoizedProps)), u = !u), u && he && an(l), Co(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(317));
      he = ph(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(317));
      he = ph(l);
    } else
      n === 27 ? (n = he, xn(l.type) ? (l = ur, ur = null, he = l) : he = n) : he = dl ? ia(l.stateNode.nextSibling) : null;
    return !0;
  }
  function zc() {
    he = dl = null, qt = !1;
  }
  function Vm() {
    var l = tu;
    return l !== null && (Be === null ? Be = l : Be.push.apply(
      Be,
      l
    ), tu = null), l;
  }
  function Ho(l) {
    tu === null ? tu = [l] : tu.push(l);
  }
  var md = j(null), Lu = null, Dn = null;
  function Il(l, n, u) {
    at(md, n._currentValue), n._currentValue = u;
  }
  function On(l) {
    l._currentValue = md.current, I(md);
  }
  function yd(l, n, u) {
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
          for (var T = 0; T < n.length; T++)
            if (v.context === n[T]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), yd(
                r.return,
                u,
                l
              ), i || (m = null);
              break t;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(M(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), yd(m, u, l), m = null;
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
  function hl(l, n, u, i) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(M(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          jl(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === Se.current) {
        if (m = s.alternate, m === null) throw Error(M(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(or) : l = [or]);
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
  function Ei(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!jl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function vt(l) {
    Lu = l, Dn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Z(l) {
    return ys(Lu, l);
  }
  function wu(l, n) {
    return Lu === null && vt(l), ys(l, n);
  }
  function ys(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Dn === null) {
      if (l === null) throw Error(M(308));
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
  }, Zm = G.unstable_scheduleCallback, Lm = G.unstable_NormalPriority, we = {
    $$typeof: Qe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ps() {
    return {
      controller: new Ye(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vs(l) {
    l.refCount--, l.refCount === 0 && Zm(Lm, function() {
      l.controller.abort();
    });
  }
  var Ai = null, gs = 0, Dc = 0, Fe = null;
  function It(l, n) {
    if (Ai === null) {
      var u = Ai = [];
      gs = 0, Dc = oh(), Fe = {
        status: "pending",
        value: void 0,
        then: function(i) {
          u.push(i);
        }
      };
    }
    return gs++, n.then(Ss, Ss), n;
  }
  function Ss() {
    if (--gs === 0 && Ai !== null) {
      Fe !== null && (Fe.status = "fulfilled");
      var l = Ai;
      Ai = null, Dc = 0, Fe = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function bs(l, n) {
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
  var Ju = O.S;
  O.S = function(l, n) {
    Yy = Ml(), typeof n == "object" && n !== null && typeof n.then == "function" && It(l, n), Ju !== null && Ju(l, n);
  };
  var Ua = j(null);
  function _a() {
    var l = Ua.current;
    return l !== null ? l : ie.pooledCache;
  }
  function Bo(l, n) {
    n === null ? at(Ua, Ua.current) : at(Ua, n.pool);
  }
  function zi() {
    var l = _a();
    return l === null ? null : { parent: we._currentValue, pool: l };
  }
  var Oc = Error(M(460)), Di = Error(M(474)), No = Error(M(542)), Oi = { then: function() {
  } };
  function wm(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Jm(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(pn, pn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, pd(l), l;
      default:
        if (typeof n.status == "string") n.then(pn, pn);
        else {
          if (l = ie, l !== null && 100 < l.shellSuspendCounter)
            throw Error(M(482));
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
            throw l = n.reason, pd(l), l;
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
  function Km() {
    if (Rc === null) throw Error(M(459));
    var l = Rc;
    return Rc = null, l;
  }
  function pd(l) {
    if (l === Oc || l === No)
      throw Error(M(483));
  }
  var Uc = null, Mi = 0;
  function Ts(l) {
    var n = Mi;
    return Mi += 1, Uc === null && (Uc = []), Jm(Uc, l, n);
  }
  function xo(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Es(l, n) {
    throw n.$$typeof === Nt ? Error(M(525)) : (l = Object.prototype.toString.call(n), Error(
      M(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Bp(l) {
    function n(R, z) {
      if (l) {
        var U = R.deletions;
        U === null ? (R.deletions = [z], R.flags |= 16) : U.push(z);
      }
    }
    function u(R, z) {
      if (!l) return null;
      for (; z !== null; )
        n(R, z), z = z.sibling;
      return null;
    }
    function i(R) {
      for (var z = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? z.set(R.key, R) : z.set(R.index, R), R = R.sibling;
      return z;
    }
    function s(R, z) {
      return R = Vu(R, z), R.index = 0, R.sibling = null, R;
    }
    function r(R, z, U) {
      return R.index = U, l ? (U = R.alternate, U !== null ? (U = U.index, U < z ? (R.flags |= 67108866, z) : U) : (R.flags |= 67108866, z)) : (R.flags |= 1048576, z);
    }
    function m(R) {
      return l && R.alternate === null && (R.flags |= 67108866), R;
    }
    function v(R, z, U, X) {
      return z === null || z.tag !== 6 ? (z = Uo(U, R.mode, X), z.return = R, z) : (z = s(z, U), z.return = R, z);
    }
    function T(R, z, U, X) {
      var ct = U.type;
      return ct === Nl ? q(
        R,
        z,
        U.props.children,
        X,
        U.key
      ) : z !== null && (z.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === jt && Mc(ct) === z.type) ? (z = s(z, U.props), xo(z, U), z.return = R, z) : (z = rd(
        U.type,
        U.key,
        U.props,
        null,
        R.mode,
        X
      ), xo(z, U), z.return = R, z);
    }
    function _(R, z, U, X) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== U.containerInfo || z.stateNode.implementation !== U.implementation ? (z = dd(U, R.mode, X), z.return = R, z) : (z = s(z, U.children || []), z.return = R, z);
    }
    function q(R, z, U, X, ct) {
      return z === null || z.tag !== 7 ? (z = Zu(
        U,
        R.mode,
        X,
        ct
      ), z.return = R, z) : (z = s(z, U), z.return = R, z);
    }
    function Q(R, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Uo(
          "" + z,
          R.mode,
          U
        ), z.return = R, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ue:
            return U = rd(
              z.type,
              z.key,
              z.props,
              null,
              R.mode,
              U
            ), xo(U, z), U.return = R, U;
          case _e:
            return z = dd(
              z,
              R.mode,
              U
            ), z.return = R, z;
          case jt:
            return z = Mc(z), Q(R, z, U);
        }
        if (fl(z) || xt(z))
          return z = Zu(
            z,
            R.mode,
            U,
            null
          ), z.return = R, z;
        if (typeof z.then == "function")
          return Q(R, Ts(z), U);
        if (z.$$typeof === Qe)
          return Q(
            R,
            wu(R, z),
            U
          );
        Es(R, z);
      }
      return null;
    }
    function C(R, z, U, X) {
      var ct = z !== null ? z.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return ct !== null ? null : v(R, z, "" + U, X);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Ue:
            return U.key === ct ? T(R, z, U, X) : null;
          case _e:
            return U.key === ct ? _(R, z, U, X) : null;
          case jt:
            return U = Mc(U), C(R, z, U, X);
        }
        if (fl(U) || xt(U))
          return ct !== null ? null : q(R, z, U, X, null);
        if (typeof U.then == "function")
          return C(
            R,
            z,
            Ts(U),
            X
          );
        if (U.$$typeof === Qe)
          return C(
            R,
            z,
            wu(R, U),
            X
          );
        Es(R, U);
      }
      return null;
    }
    function x(R, z, U, X, ct) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return R = R.get(U) || null, v(z, R, "" + X, ct);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case Ue:
            return R = R.get(
              X.key === null ? U : X.key
            ) || null, T(z, R, X, ct);
          case _e:
            return R = R.get(
              X.key === null ? U : X.key
            ) || null, _(z, R, X, ct);
          case jt:
            return X = Mc(X), x(
              R,
              z,
              U,
              X,
              ct
            );
        }
        if (fl(X) || xt(X))
          return R = R.get(U) || null, q(z, R, X, ct, null);
        if (typeof X.then == "function")
          return x(
            R,
            z,
            U,
            Ts(X),
            ct
          );
        if (X.$$typeof === Qe)
          return x(
            R,
            z,
            U,
            wu(z, X),
            ct
          );
        Es(z, X);
      }
      return null;
    }
    function P(R, z, U, X) {
      for (var ct = null, Zt = null, et = z, bt = z = 0, At = null; et !== null && bt < U.length; bt++) {
        et.index > bt ? (At = et, et = null) : At = et.sibling;
        var Jt = C(
          R,
          et,
          U[bt],
          X
        );
        if (Jt === null) {
          et === null && (et = At);
          break;
        }
        l && et && Jt.alternate === null && n(R, et), z = r(Jt, z, bt), Zt === null ? ct = Jt : Zt.sibling = Jt, Zt = Jt, et = At;
      }
      if (bt === U.length)
        return u(R, et), qt && ln(R, bt), ct;
      if (et === null) {
        for (; bt < U.length; bt++)
          et = Q(R, U[bt], X), et !== null && (z = r(
            et,
            z,
            bt
          ), Zt === null ? ct = et : Zt.sibling = et, Zt = et);
        return qt && ln(R, bt), ct;
      }
      for (et = i(et); bt < U.length; bt++)
        At = x(
          et,
          R,
          bt,
          U[bt],
          X
        ), At !== null && (l && At.alternate !== null && et.delete(
          At.key === null ? bt : At.key
        ), z = r(
          At,
          z,
          bt
        ), Zt === null ? ct = At : Zt.sibling = At, Zt = At);
      return l && et.forEach(function(jn) {
        return n(R, jn);
      }), qt && ln(R, bt), ct;
    }
    function rt(R, z, U, X) {
      if (U == null) throw Error(M(151));
      for (var ct = null, Zt = null, et = z, bt = z = 0, At = null, Jt = U.next(); et !== null && !Jt.done; bt++, Jt = U.next()) {
        et.index > bt ? (At = et, et = null) : At = et.sibling;
        var jn = C(R, et, Jt.value, X);
        if (jn === null) {
          et === null && (et = At);
          break;
        }
        l && et && jn.alternate === null && n(R, et), z = r(jn, z, bt), Zt === null ? ct = jn : Zt.sibling = jn, Zt = jn, et = At;
      }
      if (Jt.done)
        return u(R, et), qt && ln(R, bt), ct;
      if (et === null) {
        for (; !Jt.done; bt++, Jt = U.next())
          Jt = Q(R, Jt.value, X), Jt !== null && (z = r(Jt, z, bt), Zt === null ? ct = Jt : Zt.sibling = Jt, Zt = Jt);
        return qt && ln(R, bt), ct;
      }
      for (et = i(et); !Jt.done; bt++, Jt = U.next())
        Jt = x(et, R, bt, Jt.value, X), Jt !== null && (l && Jt.alternate !== null && et.delete(Jt.key === null ? bt : Jt.key), z = r(Jt, z, bt), Zt === null ? ct = Jt : Zt.sibling = Jt, Zt = Jt);
      return l && et.forEach(function(Yv) {
        return n(R, Yv);
      }), qt && ln(R, bt), ct;
    }
    function fe(R, z, U, X) {
      if (typeof U == "object" && U !== null && U.type === Nl && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Ue:
            t: {
              for (var ct = U.key; z !== null; ) {
                if (z.key === ct) {
                  if (ct = U.type, ct === Nl) {
                    if (z.tag === 7) {
                      u(
                        R,
                        z.sibling
                      ), X = s(
                        z,
                        U.props.children
                      ), X.return = R, R = X;
                      break t;
                    }
                  } else if (z.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === jt && Mc(ct) === z.type) {
                    u(
                      R,
                      z.sibling
                    ), X = s(z, U.props), xo(X, U), X.return = R, R = X;
                    break t;
                  }
                  u(R, z);
                  break;
                } else n(R, z);
                z = z.sibling;
              }
              U.type === Nl ? (X = Zu(
                U.props.children,
                R.mode,
                X,
                U.key
              ), X.return = R, R = X) : (X = rd(
                U.type,
                U.key,
                U.props,
                null,
                R.mode,
                X
              ), xo(X, U), X.return = R, R = X);
            }
            return m(R);
          case _e:
            t: {
              for (ct = U.key; z !== null; ) {
                if (z.key === ct)
                  if (z.tag === 4 && z.stateNode.containerInfo === U.containerInfo && z.stateNode.implementation === U.implementation) {
                    u(
                      R,
                      z.sibling
                    ), X = s(z, U.children || []), X.return = R, R = X;
                    break t;
                  } else {
                    u(R, z);
                    break;
                  }
                else n(R, z);
                z = z.sibling;
              }
              X = dd(U, R.mode, X), X.return = R, R = X;
            }
            return m(R);
          case jt:
            return U = Mc(U), fe(
              R,
              z,
              U,
              X
            );
        }
        if (fl(U))
          return P(
            R,
            z,
            U,
            X
          );
        if (xt(U)) {
          if (ct = xt(U), typeof ct != "function") throw Error(M(150));
          return U = ct.call(U), rt(
            R,
            z,
            U,
            X
          );
        }
        if (typeof U.then == "function")
          return fe(
            R,
            z,
            Ts(U),
            X
          );
        if (U.$$typeof === Qe)
          return fe(
            R,
            z,
            wu(R, U),
            X
          );
        Es(R, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, z !== null && z.tag === 6 ? (u(R, z.sibling), X = s(z, U), X.return = R, R = X) : (u(R, z), X = Uo(U, R.mode, X), X.return = R, R = X), m(R)) : u(R, z);
    }
    return function(R, z, U, X) {
      try {
        Mi = 0;
        var ct = fe(
          R,
          z,
          U,
          X
        );
        return Uc = null, ct;
      } catch (et) {
        if (et === Oc || et === No) throw et;
        var Zt = qe(29, et, null, R.mode);
        return Zt.lanes = X, Zt.return = R, Zt;
      }
    };
  }
  var _c = Bp(!0), $m = Bp(!1), Ku = !1;
  function As(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function vd(l, n) {
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
    if (i = i.shared, (wt & 2) !== 0) {
      var s = i.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), i.pending = n, n = rs(l), sd(l, null, u), n;
    }
    return Oa(l, i, n, u), rs(l);
  }
  function Cc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, wn(l, u);
    }
  }
  function gd(l, n) {
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
  var Wm = !1;
  function Hc() {
    if (Wm) {
      var l = Fe;
      if (l !== null) throw l;
    }
  }
  function nu(l, n, u, i) {
    Wm = !1;
    var s = l.updateQueue;
    Ku = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var T = v, _ = T.next;
      T.next = null, m === null ? r = _ : m.next = _, m = T;
      var q = l.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== m && (v === null ? q.firstBaseUpdate = _ : v.next = _, q.lastBaseUpdate = T));
    }
    if (r !== null) {
      var Q = s.baseState;
      m = 0, q = _ = T = null, v = r;
      do {
        var C = v.lane & -536870913, x = C !== v.lane;
        if (x ? (_t & C) === C : (i & C) === C) {
          C !== 0 && C === Dc && (Wm = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var P = l, rt = v;
            C = n;
            var fe = u;
            switch (rt.tag) {
              case 1:
                if (P = rt.payload, typeof P == "function") {
                  Q = P.call(fe, Q, C);
                  break t;
                }
                Q = P;
                break t;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = rt.payload, C = typeof P == "function" ? P.call(fe, Q, C) : P, C == null) break t;
                Q = st({}, Q, C);
                break t;
              case 2:
                Ku = !0;
            }
          }
          C = v.callback, C !== null && (l.flags |= 64, x && (l.flags |= 8192), x = s.callbacks, x === null ? s.callbacks = [C] : x.push(C));
        } else
          x = {
            lane: C,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, q === null ? (_ = q = x, T = Q) : q = q.next = x, m |= C;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          x = v, v = x.next, x.next = null, s.lastBaseUpdate = x, s.shared.pending = null;
        }
      } while (!0);
      q === null && (T = Q), s.baseState = T, s.firstBaseUpdate = _, s.lastBaseUpdate = q, r === null && (s.shared.lanes = 0), Bn |= m, l.lanes = m, l.memoizedState = Q;
    }
  }
  function Sd(l, n) {
    if (typeof l != "function")
      throw Error(M(191, l));
    l.call(n);
  }
  function Bc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Sd(u[l], n);
  }
  var ll = j(null), Ri = j(0);
  function Np(l, n) {
    l = Hn, at(Ri, l), at(ll, n), Hn = l | n.baseLanes;
  }
  function zs() {
    at(Ri, Hn), at(ll, ll.current);
  }
  function qo() {
    Hn = Ri.current, I(ll), I(Ri);
  }
  var Pl = j(null), Ha = null;
  function uu(l) {
    var n = l.alternate;
    at(Ae, Ae.current & 1), at(Pl, l), Ha === null && (n === null || ll.current !== null || n.memoizedState !== null) && (Ha = l);
  }
  function Yo(l) {
    at(Ae, Ae.current), at(Pl, l), Ha === null && (Ha = l);
  }
  function bd(l) {
    l.tag === 22 ? (at(Ae, Ae.current), at(Pl, l), Ha === null && (Ha = l)) : Mn();
  }
  function Mn() {
    at(Ae, Ae.current), at(Pl, Pl.current);
  }
  function ta(l) {
    I(Pl), Ha === l && (Ha = null), I(Ae);
  }
  var Ae = j(0);
  function jo(l) {
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
  var cu = 0, Tt = null, Pt = null, Je = null, Ui = !1, _i = !1, Wu = !1, Ds = 0, Go = 0, Nc = null, xp = 0;
  function Ce() {
    throw Error(M(321));
  }
  function ku(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!jl(l[u], n[u])) return !1;
    return !0;
  }
  function Os(l, n, u, i, s, r) {
    return cu = r, Tt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Zp : Yd, Wu = !1, r = u(i, s), Wu = !1, _i && (r = qp(
      n,
      u,
      i,
      s
    )), Td(l), r;
  }
  function Td(l) {
    O.H = xs;
    var n = Pt !== null && Pt.next !== null;
    if (cu = 0, Je = Pt = Tt = null, Ui = !1, Go = 0, Nc = null, n) throw Error(M(300));
    l === null || Ke || (l = l.dependencies, l !== null && Ei(l) && (Ke = !0));
  }
  function qp(l, n, u, i) {
    Tt = l;
    var s = 0;
    do {
      if (_i && (Nc = null), Go = 0, _i = !1, 25 <= s) throw Error(M(301));
      if (s += 1, Je = Pt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = Lp, r = n(u, i);
    } while (_i);
    return r;
  }
  function $g() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Hi(n) : n, l = l.useState()[0], (Pt !== null ? Pt.memoizedState : null) !== l && (Tt.flags |= 1024), n;
  }
  function Ed() {
    var l = Ds !== 0;
    return Ds = 0, l;
  }
  function Ci(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ms(l) {
    if (Ui) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Ui = !1;
    }
    cu = 0, Je = Pt = Tt = null, _i = !1, Go = Ds = 0, Nc = null;
  }
  function ml() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Je === null ? Tt.memoizedState = Je = l : Je = Je.next = l, Je;
  }
  function je() {
    if (Pt === null) {
      var l = Tt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Pt.next;
    var n = Je === null ? Tt.memoizedState : Je.next;
    if (n !== null)
      Je = n, Pt = l;
    else {
      if (l === null)
        throw Tt.alternate === null ? Error(M(467)) : Error(M(310));
      Pt = l, l = {
        memoizedState: Pt.memoizedState,
        baseState: Pt.baseState,
        baseQueue: Pt.baseQueue,
        queue: Pt.queue,
        next: null
      }, Je === null ? Tt.memoizedState = Je = l : Je = Je.next = l;
    }
    return Je;
  }
  function Rs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Hi(l) {
    var n = Go;
    return Go += 1, Nc === null && (Nc = []), l = Jm(Nc, l, n), n = Tt, (Je === null ? n.memoizedState : Je.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Zp : Yd), l;
  }
  function Xo(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Hi(l);
      if (l.$$typeof === Qe) return Z(l);
    }
    throw Error(M(438, String(l)));
  }
  function Ad(l) {
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
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Rs(), Tt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), i = 0; i < l; i++)
        u[i] = nt;
    return n.index++, u;
  }
  function iu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function ou(l) {
    var n = je();
    return zd(n, Pt, l);
  }
  function zd(l, n, u) {
    var i = l.queue;
    if (i === null) throw Error(M(311));
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
      var v = m = null, T = null, _ = n, q = !1;
      do {
        var Q = _.lane & -536870913;
        if (Q !== _.lane ? (_t & Q) === Q : (cu & Q) === Q) {
          var C = _.revertLane;
          if (C === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), Q === Dc && (q = !0);
          else if ((cu & C) === C) {
            _ = _.next, C === Dc && (q = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, T === null ? (v = T = Q, m = r) : T = T.next = Q, Tt.lanes |= C, Bn |= C;
          Q = _.action, Wu && u(r, Q), r = _.hasEagerState ? _.eagerState : u(r, Q);
        } else
          C = {
            lane: Q,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, T === null ? (v = T = C, m = r) : T = T.next = C, Tt.lanes |= Q, Bn |= Q;
        _ = _.next;
      } while (_ !== null && _ !== n);
      if (T === null ? m = r : T.next = v, !jl(r, l.memoizedState) && (Ke = !0, q && (u = Fe, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, i.lastRenderedState = r;
    }
    return s === null && (i.lanes = 0), [l.memoizedState, i.dispatch];
  }
  function Dd(l) {
    var n = je(), u = n.queue;
    if (u === null) throw Error(M(311));
    u.lastRenderedReducer = l;
    var i = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      jl(r, n.memoizedState) || (Ke = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, i];
  }
  function km(l, n, u) {
    var i = Tt, s = je(), r = qt;
    if (r) {
      if (u === void 0) throw Error(M(407));
      u = u();
    } else u = n();
    var m = !jl(
      (Pt || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, Ke = !0), s = s.queue, _d(Od.bind(null, i, s, l), [
      l
    ]), s.getSnapshot !== n || m || Je !== null && Je.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ni(
        9,
        { destroy: void 0 },
        Fm.bind(
          null,
          i,
          s,
          u,
          n
        ),
        null
      ), ie === null) throw Error(M(349));
      r || (cu & 127) !== 0 || Us(i, n, u);
    }
    return u;
  }
  function Us(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Tt.updateQueue, n === null ? (n = Rs(), Tt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Fm(l, n, u, i) {
    n.value = u, n.getSnapshot = i, Md(n) && Rd(l);
  }
  function Od(l, n, u) {
    return u(function() {
      Md(n) && Rd(l);
    });
  }
  function Md(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !jl(l, u);
    } catch {
      return !0;
    }
  }
  function Rd(l) {
    var n = Qu(l, 2);
    n !== null && ca(n, l, 2);
  }
  function Im(l) {
    var n = ml();
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
  function yl(l, n, u, i) {
    return l.baseState = u, zd(
      l,
      Pt,
      typeof i == "function" ? i : iu
    );
  }
  function Yp(l, n, u, i, s) {
    if (Ns(l)) throw Error(M(485));
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
      O.T !== null ? u(!0) : r.isTransition = !1, i(r), u = n.pending, u === null ? (r.next = n.pending = r, Pm(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Pm(l, n) {
    var u = n.action, i = n.payload, s = l.state;
    if (n.isTransition) {
      var r = O.T, m = {};
      O.T = m;
      try {
        var v = u(s, i), T = O.S;
        T !== null && T(m, v), ty(l, n, v);
      } catch (_) {
        Bi(l, n, _);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), O.T = r;
      }
    } else
      try {
        r = u(s, i), ty(l, n, r);
      } catch (_) {
        Bi(l, n, _);
      }
  }
  function ty(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(i) {
        ey(l, n, i);
      },
      function(i) {
        return Bi(l, n, i);
      }
    ) : ey(l, n, u);
  }
  function ey(l, n, u) {
    n.status = "fulfilled", n.value = u, ly(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Pm(l, u)));
  }
  function Bi(l, n, u) {
    var i = l.pending;
    if (l.pending = null, i !== null) {
      i = i.next;
      do
        n.status = "rejected", n.reason = u, ly(n), n = n.next;
      while (n !== i);
    }
    l.action = null;
  }
  function ly(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function _s(l, n) {
    return n;
  }
  function ay(l, n) {
    if (qt) {
      var u = ie.formState;
      if (u !== null) {
        t: {
          var i = Tt;
          if (qt) {
            if (he) {
              e: {
                for (var s = he, r = el; s.nodeType !== 8; ) {
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
                he = ia(
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
    return u = ml(), u.memoizedState = u.baseState = n, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _s,
      lastRenderedState: n
    }, u.queue = i, u = xd.bind(
      null,
      Tt,
      i
    ), i.dispatch = u, i = Im(!1), r = xc.bind(
      null,
      Tt,
      !1,
      i.queue
    ), i = ml(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, i.queue = s, u = Yp.bind(
      null,
      Tt,
      s,
      r,
      u
    ), s.dispatch = u, i.memoizedState = l, [n, u, !1];
  }
  function jp(l) {
    var n = je();
    return Cs(n, Pt, l);
  }
  function Cs(l, n, u) {
    if (n = zd(
      l,
      n,
      _s
    )[0], l = ou(iu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var i = Hi(n);
      } catch (m) {
        throw m === Oc ? No : m;
      }
    else i = n;
    n = je();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Tt.flags |= 2048, Ni(
      9,
      { destroy: void 0 },
      ny.bind(null, s, u),
      null
    )), [i, r, l];
  }
  function ny(l, n) {
    l.action = n;
  }
  function uy(l) {
    var n = je(), u = Pt;
    if (u !== null)
      return Cs(n, u, l);
    je(), n = n.memoizedState, u = je();
    var i = u.queue.dispatch;
    return u.memoizedState = l, [n, i, !1];
  }
  function Ni(l, n, u, i) {
    return l = { tag: l, create: u, deps: i, inst: n, next: null }, n = Tt.updateQueue, n === null && (n = Rs(), Tt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (i = u.next, u.next = l, l.next = i, n.lastEffect = l), l;
  }
  function cy() {
    return je().memoizedState;
  }
  function Qo(l, n, u, i) {
    var s = ml();
    Tt.flags |= l, s.memoizedState = Ni(
      1 | n,
      { destroy: void 0 },
      u,
      i === void 0 ? null : i
    );
  }
  function Vo(l, n, u, i) {
    var s = je();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    Pt !== null && i !== null && ku(i, Pt.memoizedState.deps) ? s.memoizedState = Ni(n, r, u, i) : (Tt.flags |= l, s.memoizedState = Ni(
      1 | n,
      r,
      u,
      i
    ));
  }
  function Ud(l, n) {
    Qo(8390656, 8, l, n);
  }
  function _d(l, n) {
    Vo(2048, 8, l, n);
  }
  function iy(l) {
    Tt.flags |= 4;
    var n = Tt.updateQueue;
    if (n === null)
      n = Rs(), Tt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Hs(l) {
    var n = je().memoizedState;
    return iy({ ref: n, nextImpl: l }), function() {
      if ((wt & 2) !== 0) throw Error(M(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Cd(l, n) {
    return Vo(4, 2, l, n);
  }
  function oy(l, n) {
    return Vo(4, 4, l, n);
  }
  function Hd(l, n) {
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
  function fy(l, n, u) {
    u = u != null ? u.concat([l]) : null, Vo(4, 4, Hd.bind(null, n, l), u);
  }
  function Rn() {
  }
  function Bd(l, n) {
    var u = je();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    return n !== null && ku(n, i[1]) ? i[0] : (u.memoizedState = [l, n], l);
  }
  function Gp(l, n) {
    var u = je();
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
    return u === void 0 || (cu & 1073741824) !== 0 && (_t & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = tv(), Tt.lanes |= l, Bn |= l, u);
  }
  function fu(l, n, u, i) {
    return jl(u, n) ? u : ll.current !== null ? (l = Bs(l, u, i), jl(l, n) || (Ke = !0), l) : (cu & 42) === 0 || (cu & 1073741824) !== 0 && (_t & 261930) === 0 ? (Ke = !0, l.memoizedState = u) : (l = tv(), Tt.lanes |= l, Bn |= l, n);
  }
  function Nd(l, n, u, i, s) {
    var r = V.p;
    V.p = r !== 0 && 8 > r ? r : 8;
    var m = O.T, v = {};
    O.T = v, xc(l, !1, n, u);
    try {
      var T = s(), _ = O.S;
      if (_ !== null && _(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var q = bs(
          T,
          i
        );
        Fu(
          l,
          n,
          q,
          pa(l)
        );
      } else
        Fu(
          l,
          n,
          i,
          pa(l)
        );
    } catch (Q) {
      Fu(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: Q },
        pa()
      );
    } finally {
      V.p = r, m !== null && v.types !== null && (m.types = v.types), O.T = m;
    }
  }
  function Xp() {
  }
  function Zo(l, n, u, i) {
    if (l.tag !== 5) throw Error(M(476));
    var s = Lo(l).queue;
    Nd(
      l,
      s,
      n,
      w,
      u === null ? Xp : function() {
        return ce(l), u(i);
      }
    );
  }
  function Lo(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: iu,
        lastRenderedState: w
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
  function ce(l) {
    var n = Lo(l);
    n.next === null && (n = l.alternate.memoizedState), Fu(
      l,
      n.next.queue,
      {},
      pa()
    );
  }
  function sy() {
    return Z(or);
  }
  function Qp() {
    return je().memoizedState;
  }
  function ry() {
    return je().memoizedState;
  }
  function su(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = pa();
          l = $u(u);
          var i = Ca(n, l, u);
          i !== null && (ca(i, n, u), Cc(i, n, u)), n = { cache: ps() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Vp(l, n, u) {
    var i = pa();
    u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ns(l) ? qd(n, u) : (u = en(l, n, u, i), u !== null && (ca(u, l, i), dy(u, n, i)));
  }
  function xd(l, n, u) {
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
    if (Ns(l)) qd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, jl(v, m))
            return Oa(l, n, s, 0), ie === null && Da(), !1;
        } catch {
        }
      if (u = en(l, n, s, i), u !== null)
        return ca(u, l, i), dy(u, n, i), !0;
    }
    return !1;
  }
  function xc(l, n, u, i) {
    if (i = {
      lane: 2,
      revertLane: oh(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ns(l)) {
      if (n) throw Error(M(479));
    } else
      n = en(
        l,
        u,
        i,
        2
      ), n !== null && ca(n, l, 2);
  }
  function Ns(l) {
    var n = l.alternate;
    return l === Tt || n !== null && n === Tt;
  }
  function qd(l, n) {
    _i = Ui = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function dy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, wn(l, u);
    }
  }
  var xs = {
    readContext: Z,
    use: Xo,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useLayoutEffect: Ce,
    useInsertionEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    useHostTransitionStatus: Ce,
    useFormState: Ce,
    useActionState: Ce,
    useOptimistic: Ce,
    useMemoCache: Ce,
    useCacheRefresh: Ce
  };
  xs.useEffectEvent = Ce;
  var Zp = {
    readContext: Z,
    use: Xo,
    useCallback: function(l, n) {
      return ml().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: Z,
    useEffect: Ud,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Qo(
        4194308,
        4,
        Hd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Qo(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Qo(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ml();
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
      var i = ml();
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
      }, i.queue = l, l = l.dispatch = Vp.bind(
        null,
        Tt,
        l
      ), [i.memoizedState, l];
    },
    useRef: function(l) {
      var n = ml();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Im(l);
      var n = l.queue, u = xd.bind(null, Tt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = ml();
      return Bs(u, l, n);
    },
    useTransition: function() {
      var l = Im(!1);
      return l = Nd.bind(
        null,
        Tt,
        l.queue,
        !0,
        !1
      ), ml().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var i = Tt, s = ml();
      if (qt) {
        if (u === void 0)
          throw Error(M(407));
        u = u();
      } else {
        if (u = n(), ie === null)
          throw Error(M(349));
        (_t & 127) !== 0 || Us(i, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Ud(Od.bind(null, i, r, l), [
        l
      ]), i.flags |= 2048, Ni(
        9,
        { destroy: void 0 },
        Fm.bind(
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
      var l = ml(), n = ie.identifierPrefix;
      if (qt) {
        var u = zn, i = da;
        u = (i & ~(1 << 32 - Jl(i) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Ds++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = xp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: sy,
    useFormState: ay,
    useActionState: ay,
    useOptimistic: function(l) {
      var n = ml();
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
    useMemoCache: Ad,
    useCacheRefresh: function() {
      return ml().memoizedState = su.bind(
        null,
        Tt
      );
    },
    useEffectEvent: function(l) {
      var n = ml(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((wt & 2) !== 0)
          throw Error(M(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Yd = {
    readContext: Z,
    use: Xo,
    useCallback: Bd,
    useContext: Z,
    useEffect: _d,
    useImperativeHandle: fy,
    useInsertionEffect: Cd,
    useLayoutEffect: oy,
    useMemo: Gp,
    useReducer: ou,
    useRef: cy,
    useState: function() {
      return ou(iu);
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = je();
      return fu(
        u,
        Pt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = ou(iu)[0], n = je().memoizedState;
      return [
        typeof l == "boolean" ? l : Hi(l),
        n
      ];
    },
    useSyncExternalStore: km,
    useId: Qp,
    useHostTransitionStatus: sy,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(l, n) {
      var u = je();
      return yl(u, Pt, l, n);
    },
    useMemoCache: Ad,
    useCacheRefresh: ry
  };
  Yd.useEffectEvent = Hs;
  var Lp = {
    readContext: Z,
    use: Xo,
    useCallback: Bd,
    useContext: Z,
    useEffect: _d,
    useImperativeHandle: fy,
    useInsertionEffect: Cd,
    useLayoutEffect: oy,
    useMemo: Gp,
    useReducer: Dd,
    useRef: cy,
    useState: function() {
      return Dd(iu);
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = je();
      return Pt === null ? Bs(u, l, n) : fu(
        u,
        Pt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Dd(iu)[0], n = je().memoizedState;
      return [
        typeof l == "boolean" ? l : Hi(l),
        n
      ];
    },
    useSyncExternalStore: km,
    useId: Qp,
    useHostTransitionStatus: sy,
    useFormState: uy,
    useActionState: uy,
    useOptimistic: function(l, n) {
      var u = je();
      return Pt !== null ? yl(u, Pt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ad,
    useCacheRefresh: ry
  };
  Lp.useEffectEvent = Hs;
  function xi(l, n, u, i) {
    n = l.memoizedState, u = u(i, n), u = u == null ? n : st({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
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
  function hy(l, n, u, i, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(i, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ia(u, i) || !Ia(s, r) : !0;
  }
  function wp(l, n, u, i) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, i), n.state !== l && nn.enqueueReplaceState(n, n.state, null);
  }
  function qc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var i in n)
        i !== "ref" && (u[i] = n[i]);
    }
    if (l = l.defaultProps) {
      u === n && (u = st({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function jd(l) {
    Si(l);
  }
  function my(l) {
    console.error(l);
  }
  function Gd(l) {
    Si(l);
  }
  function wo(l, n) {
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
  function yy(l, n, u) {
    return u = $u(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      wo(l, n);
    }, u;
  }
  function py(l) {
    return l = $u(l), l.tag = 3, l;
  }
  function vy(l, n, u, i) {
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
      qs(n, u, i), typeof s != "function" && (ze === null ? ze = /* @__PURE__ */ new Set([this]) : ze.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Wg(l, n, u, i, s) {
    if (u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (n = u.alternate, n !== null && hl(
        n,
        u,
        s,
        !0
      ), u = Pl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Ha === null ? nh() : u.alternate === null && ye === 0 && (ye = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, i === Oi ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([i]) : n.add(i), ks(l, i, s)), !1;
          case 22:
            return u.flags |= 65536, i === Oi ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([i]) : u.add(i)), ks(l, i, s)), !1;
        }
        throw Error(M(435, u.tag));
      }
      return ks(l, i, s), nh(), !1;
    }
    if (qt)
      return n = Pl.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, i !== eu && (l = Error(M(422), { cause: i }), Ho(Ma(l, u)))) : (i !== eu && (n = Error(M(423), {
        cause: i
      }), Ho(
        Ma(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, i = Ma(i, u), s = yy(
        l.stateNode,
        i,
        s
      ), gd(l, s), ye !== 4 && (ye = 2)), !1;
    var r = Error(M(520), { cause: i });
    if (r = Ma(r, u), Js === null ? Js = [r] : Js.push(r), ye !== 4 && (ye = 2), n === null) return !0;
    i = Ma(i, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = yy(u.stateNode, i, l), gd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ze === null || !ze.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = py(s), vy(
              s,
              l,
              u,
              i
            ), gd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Xd = Error(M(461)), Ke = !1;
  function be(l, n, u, i) {
    n.child = l === null ? $m(n, null, u, i) : _c(
      n,
      l.child,
      u,
      i
    );
  }
  function gy(l, n, u, i, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in i) {
      var m = {};
      for (var v in i)
        v !== "ref" && (m[v] = i[v]);
    } else m = i;
    return vt(n), i = Os(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = Ed(), l !== null && !Ke ? (Ci(l, n, s), xa(l, n, s)) : (qt && v && _o(n), n.flags |= 1, be(l, n, i, s), n.child);
  }
  function Sy(l, n, u, i, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !bi(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, by(
        l,
        n,
        r,
        i,
        s
      )) : (l = rd(
        u.type,
        null,
        i,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Zd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ia, u(m, i) && l.ref === n.ref)
        return xa(l, n, s);
    }
    return n.flags |= 1, l = Vu(r, i), l.ref = n.ref, l.return = n, n.child = l;
  }
  function by(l, n, u, i, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ia(r, i) && l.ref === n.ref)
        if (Ke = !1, n.pendingProps = i = r, Zd(l, s))
          (l.flags & 131072) !== 0 && (Ke = !0);
        else
          return n.lanes = l.lanes, xa(l, n, s);
    }
    return Qd(
      l,
      n,
      u,
      i,
      s
    );
  }
  function Jp(l, n, u, i) {
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
        ), r !== null ? Np(n, r) : zs(), bd(n);
      else
        return i = n.lanes = 536870912, ea(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          i
        );
    } else
      r !== null ? (Bo(n, r.cachePool), Np(n, r), Mn(), n.memoizedState = null) : (l !== null && Bo(n, null), zs(), Mn());
    return be(l, n, s, u), n.child;
  }
  function Yc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function ea(l, n, u, i, s) {
    var r = _a();
    return r = r === null ? null : { parent: we._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Bo(n, null), zs(), bd(n), l !== null && hl(l, n, i, !0), n.childLanes = s, null;
  }
  function Ys(l, n) {
    return n = Xs(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function la(l, n, u) {
    return _c(n, l.child, null, u), l = Ys(n, n.pendingProps), l.flags |= 2, ta(n), n.memoizedState = null, l;
  }
  function Kp(l, n, u) {
    var i = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (qt) {
        if (i.mode === "hidden")
          return l = Ys(n, i), n.lanes = 536870912, Yc(null, l);
        if (Yo(n), (l = he) ? (l = Rv(
          l,
          el
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: An !== null ? { id: da, overflow: zn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Gm(l), u.return = n, n.child = u, dl = n, he = null)) : l = null, l === null) throw an(n);
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
        else throw Error(M(558));
      else if (Ke || hl(l, n, u, !1), s = (u & l.childLanes) !== 0, Ke || s) {
        if (i = ie, i !== null && (m = Ea(i, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, Qu(l, m), ca(i, l, m), Xd;
        nh(), n = la(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, he = ia(m.nextSibling), dl = n, qt = !0, tu = null, el = !1, l !== null && hs(n, l), n = Ys(n, i), n.flags |= 4096;
      return n;
    }
    return l = Vu(l.child, {
      mode: i.mode,
      children: i.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ba(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(M(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Qd(l, n, u, i, s) {
    return vt(n), u = Os(
      l,
      n,
      u,
      i,
      void 0,
      s
    ), i = Ed(), l !== null && !Ke ? (Ci(l, n, s), xa(l, n, s)) : (qt && i && _o(n), n.flags |= 1, be(l, n, u, s), n.child);
  }
  function jc(l, n, u, i, s, r) {
    return vt(n), n.updateQueue = null, u = qp(
      n,
      i,
      u,
      s
    ), Td(l), i = Ed(), l !== null && !Ke ? (Ci(l, n, r), xa(l, n, r)) : (qt && i && _o(n), n.flags |= 1, be(l, n, u, r), n.child);
  }
  function Ty(l, n, u, i, s) {
    if (vt(n), n.stateNode === null) {
      var r = kl, m = u.contextType;
      typeof m == "object" && m !== null && (r = Z(m)), r = new u(i, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = nn, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = i, r.state = n.memoizedState, r.refs = {}, As(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? Z(m) : kl, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (xi(
        n,
        u,
        m,
        i
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && nn.enqueueReplaceState(r, r.state, null), nu(n, i, r, s), Hc(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, T = qc(u, v);
      r.props = T;
      var _ = r.context, q = u.contextType;
      m = kl, typeof q == "object" && q !== null && (m = Z(q));
      var Q = u.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || _ !== m) && wp(
        n,
        r,
        i,
        m
      ), Ku = !1;
      var C = n.memoizedState;
      r.state = C, nu(n, i, r, s), Hc(), _ = n.memoizedState, v || C !== _ || Ku ? (typeof Q == "function" && (xi(
        n,
        u,
        Q,
        i
      ), _ = n.memoizedState), (T = Ku || hy(
        n,
        u,
        T,
        i,
        C,
        _,
        m
      )) ? (q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = _), r.props = i, r.state = _, r.context = m, i = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      r = n.stateNode, vd(l, n), m = n.memoizedProps, q = qc(u, m), r.props = q, Q = n.pendingProps, C = r.context, _ = u.contextType, T = kl, typeof _ == "object" && _ !== null && (T = Z(_)), v = u.getDerivedStateFromProps, (_ = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== Q || C !== T) && wp(
        n,
        r,
        i,
        T
      ), Ku = !1, C = n.memoizedState, r.state = C, nu(n, i, r, s), Hc();
      var x = n.memoizedState;
      m !== Q || C !== x || Ku || l !== null && l.dependencies !== null && Ei(l.dependencies) ? (typeof v == "function" && (xi(
        n,
        u,
        v,
        i
      ), x = n.memoizedState), (q = Ku || hy(
        n,
        u,
        q,
        i,
        C,
        x,
        T
      ) || l !== null && l.dependencies !== null && Ei(l.dependencies)) ? (_ || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, x, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        i,
        x,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = x), r.props = i, r.state = x, r.context = T, i = q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), i = !1);
    }
    return r = i, Ba(l, n), i = (n.flags & 128) !== 0, r || i ? (r = n.stateNode, u = i && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && i ? (n.child = _c(
      n,
      l.child,
      null,
      s
    ), n.child = _c(
      n,
      null,
      u,
      s
    )) : be(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = xa(
      l,
      n,
      s
    ), l;
  }
  function Un(l, n, u, i) {
    return zc(), n.flags |= 256, be(l, n, u, i), n.child;
  }
  var js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Gs(l) {
    return { baseLanes: l, cachePool: zi() };
  }
  function Na(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ua), l;
  }
  function Ey(l, n, u) {
    var i = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Ae.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (qt) {
        if (s ? uu(n) : Mn(), (l = he) ? (l = Rv(
          l,
          el
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: An !== null ? { id: da, overflow: zn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Gm(l), u.return = n, n.child = u, dl = n, he = null)) : l = null, l === null) throw an(n);
        return wc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, s ? (Mn(), s = n.mode, v = Xs(
        { mode: "hidden", children: v },
        s
      ), i = Zu(
        i,
        s,
        u,
        null
      ), v.return = n, i.return = n, v.sibling = i, n.child = v, i = n.child, i.memoizedState = Gs(u), i.childLanes = Na(
        l,
        m,
        u
      ), n.memoizedState = js, Yc(null, i)) : (uu(n), Gc(n, v));
    }
    var T = l.memoizedState;
    if (T !== null && (v = T.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (uu(n), n.flags &= -257, n = qi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Mn(), n.child = l.child, n.flags |= 128, n = null) : (Mn(), v = i.fallback, s = n.mode, i = Xs(
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
        ), i = n.child, i.memoizedState = Gs(u), i.childLanes = Na(
          l,
          m,
          u
        ), n.memoizedState = js, n = Yc(null, i));
      else if (uu(n), wc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var _ = m.dgst;
        m = _, i = Error(M(419)), i.stack = "", i.digest = m, Ho({ value: i, source: null, stack: null }), n = qi(
          l,
          n,
          u
        );
      } else if (Ke || hl(l, n, u, !1), m = (u & l.childLanes) !== 0, Ke || m) {
        if (m = ie, m !== null && (i = Ea(m, u), i !== 0 && i !== T.retryLane))
          throw T.retryLane = i, Qu(l, i), ca(m, l, i), Xd;
        on(v) || nh(), n = qi(
          l,
          n,
          u
        );
      } else
        on(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, he = ia(
          v.nextSibling
        ), dl = n, qt = !0, tu = null, el = !1, l !== null && hs(n, l), n = Gc(
          n,
          i.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Mn(), v = i.fallback, s = n.mode, T = l.child, _ = T.sibling, i = Vu(T, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = T.subtreeFlags & 65011712, _ !== null ? v = Vu(
      _,
      v
    ) : (v = Zu(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, i.return = n, i.sibling = v, n.child = i, Yc(null, i), i = n.child, v = l.child.memoizedState, v === null ? v = Gs(u) : (s = v.cachePool, s !== null ? (T = we._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = zi(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), i.memoizedState = v, i.childLanes = Na(
      l,
      m,
      u
    ), n.memoizedState = js, Yc(l.child, i)) : (uu(n), u = l.child, l = u.sibling, u = Vu(u, {
      mode: "visible",
      children: i.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Gc(l, n) {
    return n = Xs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Xs(l, n) {
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
    i !== null && (i.lanes |= n), yd(l.return, n, u);
  }
  function Vd(l, n, u, i, s, r) {
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
  function Ay(l, n, u) {
    var i = n.pendingProps, s = i.revealOrder, r = i.tail;
    i = i.children;
    var m = Ae.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, at(Ae, m), be(l, n, i, u), i = qt ? Le : 0, !v && l !== null && (l.flags & 128) !== 0)
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
          l = u.alternate, l !== null && jo(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), Vd(
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
          if (l = s.alternate, l !== null && jo(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        Vd(
          n,
          !0,
          u,
          null,
          r,
          i
        );
        break;
      case "together":
        Vd(
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
    if (l !== null && (n.dependencies = l.dependencies), Bn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (hl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(M(153));
    if (n.child !== null) {
      for (l = n.child, u = Vu(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Vu(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Zd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ei(l)));
  }
  function Ld(l, n, u) {
    switch (n.tag) {
      case 3:
        $a(n, n.stateNode.containerInfo), Il(n, we, l.memoizedState.cache), zc();
        break;
      case 27:
      case 5:
        Jf(n);
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
          return i.dehydrated !== null ? (uu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ey(l, n, u) : (uu(n), l = xa(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        uu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (i = (u & n.childLanes) !== 0, i || (hl(
          l,
          n,
          u,
          !1
        ), i = (u & n.childLanes) !== 0), s) {
          if (i)
            return Ay(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), at(Ae, Ae.current), i) break;
        return null;
      case 22:
        return n.lanes = 0, Jp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Il(n, we, l.memoizedState.cache);
    }
    return xa(l, n, u);
  }
  function zy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Ke = !0;
      else {
        if (!Zd(l, u) && (n.flags & 128) === 0)
          return Ke = !1, Ld(
            l,
            n,
            u
          );
        Ke = (l.flags & 131072) !== 0;
      }
    else
      Ke = !1, qt && (n.flags & 1048576) !== 0 && Qm(n, Le, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var i = n.pendingProps;
          if (l = Mc(n.elementType), n.type = l, typeof l == "function")
            bi(l) ? (i = qc(l, i), n.tag = 1, n = Ty(
              null,
              n,
              l,
              i,
              u
            )) : (n.tag = 0, n = Qd(
              null,
              n,
              l,
              i,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Ol) {
                n.tag = 11, n = gy(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              } else if (s === ke) {
                n.tag = 14, n = Sy(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              }
            }
            throw n = ql(l) || l, Error(M(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return i = n.type, s = qc(
          i,
          n.pendingProps
        ), Ty(
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
          ), l === null) throw Error(M(387));
          i = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, vd(l, n), nu(n, i, null, u);
          var m = n.memoizedState;
          if (i = m.cache, Il(n, we, i), i !== r.cache && au(
            n,
            [we],
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
                Error(M(424)),
                n
              ), Ho(s), n = Un(
                l,
                n,
                i,
                u
              );
              break t;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, he = ia(l.firstChild), dl = n, qt = !0, tu = null, el = !0, u = $m(
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
            be(l, n, i, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ba(l, n), l === null ? (u = mf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : qt || (u = n.type, l = n.pendingProps, i = Lc(
          Ka.current
        ).createElement(u), i[ue] = n, i[Kl] = l, Ul(i, u, l), Ft(i), n.stateNode = i) : n.memoizedState = mf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Jf(n), l === null && qt && (i = n.stateNode = df(
          n.type,
          n.pendingProps,
          Ka.current
        ), dl = n, el = !0, s = he, xn(n.type) ? (ur = s, he = ia(i.firstChild)) : he = s), be(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ba(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && qt && ((s = i = he) && (i = Ig(
          i,
          n.type,
          n.pendingProps,
          el
        ), i !== null ? (n.stateNode = i, dl = n, he = ia(i.firstChild), el = !1, s = !0) : s = !1), s || an(n)), Jf(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, i = r.children, sf(s, r) ? i = null : m !== null && sf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Os(
          l,
          n,
          $g,
          null,
          null,
          u
        ), or._currentValue = s), Ba(l, n), be(l, n, i, u), n.child;
      case 6:
        return l === null && qt && ((l = u = he) && (u = Dt(
          u,
          n.pendingProps,
          el
        ), u !== null ? (n.stateNode = u, dl = n, he = null, l = !0) : l = !1), l || an(n)), null;
      case 13:
        return Ey(l, n, u);
      case 4:
        return $a(
          n,
          n.stateNode.containerInfo
        ), i = n.pendingProps, l === null ? n.child = _c(
          n,
          null,
          i,
          u
        ) : be(l, n, i, u), n.child;
      case 11:
        return gy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return be(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return be(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return be(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return i = n.pendingProps, Il(n, n.type, i.value), be(l, n, i.children, u), n.child;
      case 9:
        return s = n.type._context, i = n.pendingProps.children, vt(n), s = Z(s), i = i(s), n.flags |= 1, be(l, n, i, u), n.child;
      case 14:
        return Sy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return by(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Ay(l, n, u);
      case 31:
        return Kp(l, n, u);
      case 22:
        return Jp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return vt(n), i = Z(we), l === null ? (s = _a(), s === null && (s = ie, r = ps(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: i, cache: s }, As(n), Il(n, we, s)) : ((l.lanes & u) !== 0 && (vd(l, n), nu(n, null, null, u), Hc()), s = l.memoizedState, r = n.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Il(n, we, i)) : (i = r.cache, Il(n, we, i), i !== s.cache && au(
          n,
          [we],
          u,
          !0
        ))), be(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(M(156, n.tag));
  }
  function ru(l) {
    l.flags |= 4;
  }
  function Dy(l, n, u, i, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (av()) l.flags |= 8192;
        else
          throw Rc = Oi, Di;
    } else l.flags &= -16777217;
  }
  function Oy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !ga(n))
      if (av()) l.flags |= 8192;
      else
        throw Rc = Oi, Di;
  }
  function Gl(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ai() : 536870912, l.lanes |= n, He |= n);
  }
  function Jo(l, n) {
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
  function pt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, i = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= i, l.childLanes = u, n;
  }
  function $p(l, n, u) {
    var i = n.pendingProps;
    switch (hd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pt(n), null;
      case 1:
        return pt(n), null;
      case 3:
        return u = n.stateNode, i = null, l !== null && (i = l.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), On(we), Ta(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (lu(n) ? ru(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Vm())), pt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (ru(n), r !== null ? (pt(n), Oy(n, r)) : (pt(n), Dy(
          n,
          s,
          null,
          i,
          u
        ))) : r ? r !== l.memoizedState ? (ru(n), pt(n), Oy(n, r)) : (pt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== i && ru(n), pt(n), Dy(
          n,
          s,
          l,
          i,
          u
        )), null;
      case 27:
        if (F(n), u = Ka.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && ru(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(M(166));
            return pt(n), null;
          }
          l = ut.current, lu(n) ? ms(n) : (l = df(s, i, u), n.stateNode = l, ru(n));
        }
        return pt(n), null;
      case 5:
        if (F(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && ru(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(M(166));
            return pt(n), null;
          }
          if (r = ut.current, lu(n))
            ms(n);
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
            r[ue] = n, r[Kl] = i;
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
            t: switch (Ul(r, s, i), s) {
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
        return pt(n), Dy(
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
            throw Error(M(166));
          if (l = Ka.current, lu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, i = null, s = dl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            l[ue] = n, l = !!(l.nodeValue === u || i !== null && i.suppressHydrationWarning === !0 || ky(l.nodeValue, u)), l || an(n, !0);
          } else
            l = Lc(l).createTextNode(
              i
            ), l[ue] = n, n.stateNode = l;
        }
        return pt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (i = lu(n), u !== null) {
            if (l === null) {
              if (!i) throw Error(M(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(557));
              l[ue] = n;
            } else
              zc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            pt(n), l = !1;
          } else
            u = Vm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ta(n), n) : (ta(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(M(558));
        }
        return pt(n), null;
      case 13:
        if (i = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = lu(n), i !== null && i.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(M(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(M(317));
              s[ue] = n;
            } else
              zc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            pt(n), s = !1;
          } else
            s = Vm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ta(n), n) : (ta(n), null);
        }
        return ta(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = i !== null, l = l !== null && l.memoizedState !== null, u && (i = n.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== s && (i.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), Gl(n, n.updateQueue), pt(n), null);
      case 4:
        return Ta(), l === null && ff(n.stateNode.containerInfo), pt(n), null;
      case 10:
        return On(n.type), pt(n), null;
      case 19:
        if (I(Ae), i = n.memoizedState, i === null) return pt(n), null;
        if (s = (n.flags & 128) !== 0, r = i.rendering, r === null)
          if (s) Jo(i, !1);
          else {
            if (ye !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = jo(l), r !== null) {
                  for (n.flags |= 128, Jo(i, !1), l = r.updateQueue, n.updateQueue = l, Gl(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    jm(u, l), u = u.sibling;
                  return at(
                    Ae,
                    Ae.current & 1 | 2
                  ), qt && ln(n, i.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            i.tail !== null && Ml() > $t && (n.flags |= 128, s = !0, Jo(i, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = jo(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, Gl(n, l), Jo(i, !0), i.tail === null && i.tailMode === "hidden" && !r.alternate && !qt)
                return pt(n), null;
            } else
              2 * Ml() - i.renderingStartTime > $t && u !== 536870912 && (n.flags |= 128, s = !0, Jo(i, !1), n.lanes = 4194304);
          i.isBackwards ? (r.sibling = n.child, n.child = r) : (l = i.last, l !== null ? l.sibling = r : n.child = r, i.last = r);
        }
        return i.tail !== null ? (l = i.tail, i.rendering = l, i.tail = l.sibling, i.renderingStartTime = Ml(), l.sibling = null, u = Ae.current, at(
          Ae,
          s ? u & 1 | 2 : u & 1
        ), qt && ln(n, i.treeForkCount), l) : (pt(n), null);
      case 22:
      case 23:
        return ta(n), qo(), i = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (pt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : pt(n), u = n.updateQueue, u !== null && Gl(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048), l !== null && I(Ua), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), On(we), pt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(M(156, n.tag));
  }
  function Wp(l, n) {
    switch (hd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return On(we), Ta(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return F(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ta(n), n.alternate === null)
            throw Error(M(340));
          zc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ta(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(M(340));
          zc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return I(Ae), null;
      case 4:
        return Ta(), null;
      case 10:
        return On(n.type), null;
      case 22:
      case 23:
        return ta(n), qo(), l !== null && I(Ua), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return On(we), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kp(l, n) {
    switch (hd(n), n.tag) {
      case 3:
        On(we), Ta();
        break;
      case 26:
      case 27:
      case 5:
        F(n);
        break;
      case 4:
        Ta();
        break;
      case 31:
        n.memoizedState !== null && ta(n);
        break;
      case 13:
        ta(n);
        break;
      case 19:
        I(Ae);
        break;
      case 10:
        On(n.type);
        break;
      case 22:
      case 23:
        ta(n), qo(), l !== null && I(Ua);
        break;
      case 24:
        On(we);
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
      ee(n, n.return, v);
    }
  }
  function qa(l, n, u) {
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
              var T = u, _ = v;
              try {
                _();
              } catch (q) {
                ee(
                  s,
                  T,
                  q
                );
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (q) {
      ee(n, n.return, q);
    }
  }
  function wd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Bc(n, u);
      } catch (i) {
        ee(l, l.return, i);
      }
    }
  }
  function Xc(l, n, u) {
    u.props = qc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (i) {
      ee(l, n, i);
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
      ee(l, n, s);
    }
  }
  function _n(l, n) {
    var u = l.ref, i = l.refCleanup;
    if (u !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          ee(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          ee(l, n, s);
        }
      else u.current = null;
  }
  function My(l) {
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
      ee(l, l.return, s);
    }
  }
  function Jd(l, n, u) {
    try {
      var i = l.stateNode;
      Iy(i, l.type, u, n), i[Kl] = n;
    } catch (s) {
      ee(l, l.return, s);
    }
  }
  function Ry(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && xn(l.type) || l.tag === 4;
  }
  function Ko(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ry(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && xn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function $o(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = pn));
    else if (i !== 4 && (i === 27 && xn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for ($o(l, n, u), l = l.sibling; l !== null; )
        $o(l, n, u), l = l.sibling;
  }
  function Wo(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (i !== 4 && (i === 27 && xn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Wo(l, n, u), l = l.sibling; l !== null; )
        Wo(l, n, u), l = l.sibling;
  }
  function Uy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var i = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Ul(n, i, u), n[ue] = l, n[Kl] = u;
    } catch (r) {
      ee(l, l.return, r);
    }
  }
  var Iu = !1, Ie = !1, Kd = !1, _y = typeof WeakSet == "function" ? WeakSet : Set, pl = null;
  function ko(l, n) {
    if (l = l.containerInfo, hh = nl, l = Tc(l), is(l)) {
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
            var m = 0, v = -1, T = -1, _ = 0, q = 0, Q = l, C = null;
            e: for (; ; ) {
              for (var x; Q !== u || s !== 0 && Q.nodeType !== 3 || (v = m + s), Q !== r || i !== 0 && Q.nodeType !== 3 || (T = m + i), Q.nodeType === 3 && (m += Q.nodeValue.length), (x = Q.firstChild) !== null; )
                C = Q, Q = x;
              for (; ; ) {
                if (Q === l) break e;
                if (C === u && ++_ === s && (v = m), C === r && ++q === i && (T = m), (x = Q.nextSibling) !== null) break;
                Q = C, C = Q.parentNode;
              }
              Q = x;
            }
            u = v === -1 || T === -1 ? null : { start: v, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (mh = { focusedElem: l, selectionRange: u }, nl = !1, pl = n; pl !== null; )
      if (n = pl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, pl = l;
      else
        for (; pl !== null; ) {
          switch (n = pl, r = n.alternate, l = n.flags, n.tag) {
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
                  var P = qc(
                    u.type,
                    s
                  );
                  l = i.getSnapshotBeforeUpdate(
                    P,
                    r
                  ), i.__reactInternalSnapshotBeforeUpdate = l;
                } catch (rt) {
                  ee(
                    u,
                    u.return,
                    rt
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  nr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nr(l);
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
              if ((l & 1024) !== 0) throw Error(M(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, pl = l;
            break;
          }
          pl = n.return;
        }
  }
  function Qs(l, n, u) {
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
              ee(u, u.return, m);
            }
          else {
            var s = qc(
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
              ee(
                u,
                u.return,
                m
              );
            }
          }
        i & 64 && wd(u), i & 512 && du(u, u.return);
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
            Bc(l, n);
          } catch (m) {
            ee(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Uy(u);
      case 26:
      case 5:
        Pu(l, u), n === null && i & 4 && My(u), i & 512 && du(u, u.return);
        break;
      case 12:
        Pu(l, u);
        break;
      case 31:
        Pu(l, u), i & 4 && Fp(l, u);
        break;
      case 13:
        Pu(l, u), i & 4 && By(l, u), i & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Ya.bind(
          null,
          u
        ), rf(l, u))));
        break;
      case 22:
        if (i = u.memoizedState !== null || Iu, !i) {
          n = n !== null && n.memoizedState !== null || Ie, s = Iu;
          var r = Ie;
          Iu = i, (Ie = n) && !r ? Cn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Pu(l, u), Iu = s, Ie = r;
        }
        break;
      case 30:
        break;
      default:
        Pu(l, u);
    }
  }
  function Cy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Cy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Zr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var me = null, aa = !1;
  function hu(l, n, u) {
    for (u = u.child; u !== null; )
      Hy(l, n, u), u = u.sibling;
  }
  function Hy(l, n, u) {
    if (sa && typeof sa.onCommitFiberUnmount == "function")
      try {
        sa.onCommitFiberUnmount(li, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Ie || _n(u, n), hu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Ie || _n(u, n);
        var i = me, s = aa;
        xn(u.type) && (me = u.stateNode, aa = !1), hu(
          l,
          n,
          u
        ), wi(u.stateNode), me = i, aa = s;
        break;
      case 5:
        Ie || _n(u, n);
      case 6:
        if (i = me, s = aa, me = null, hu(
          l,
          n,
          u
        ), me = i, aa = s, me !== null)
          if (aa)
            try {
              (me.nodeType === 9 ? me.body : me.nodeName === "HTML" ? me.ownerDocument.body : me).removeChild(u.stateNode);
            } catch (r) {
              ee(
                u,
                n,
                r
              );
            }
          else
            try {
              me.removeChild(u.stateNode);
            } catch (r) {
              ee(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        me !== null && (aa ? (l = me, l0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Ef(l)) : l0(me, u.stateNode));
        break;
      case 4:
        i = me, s = aa, me = u.stateNode.containerInfo, aa = !0, hu(
          l,
          n,
          u
        ), me = i, aa = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qa(2, u, n), Ie || qa(4, u, n), hu(
          l,
          n,
          u
        );
        break;
      case 1:
        Ie || (_n(u, n), i = u.stateNode, typeof i.componentWillUnmount == "function" && Xc(
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
        Ie = (i = Ie) || u.memoizedState !== null, hu(
          l,
          n,
          u
        ), Ie = i;
        break;
      default:
        hu(
          l,
          n,
          u
        );
    }
  }
  function Fp(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ef(l);
      } catch (u) {
        ee(n, n.return, u);
      }
    }
  }
  function By(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ef(l);
      } catch (u) {
        ee(n, n.return, u);
      }
  }
  function Vs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new _y()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new _y()), n;
      default:
        throw Error(M(435, l.tag));
    }
  }
  function Zs(l, n) {
    var u = Vs(l);
    n.forEach(function(i) {
      if (!u.has(i)) {
        u.add(i);
        var s = gv.bind(null, l, i);
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
                me = v.stateNode, aa = !1;
                break t;
              }
              break;
            case 5:
              me = v.stateNode, aa = !1;
              break t;
            case 3:
            case 4:
              me = v.stateNode.containerInfo, aa = !0;
              break t;
          }
          v = v.return;
        }
        if (me === null) throw Error(M(160));
        Hy(r, m, s), me = null, aa = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        $d(n, l), n = n.sibling;
  }
  var Et = null;
  function $d(l, n) {
    var u = l.alternate, i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        na(n, l), ha(l), i & 4 && (qa(3, l, l.return), un(3, l), qa(5, l, l.return));
        break;
      case 1:
        na(n, l), ha(l), i & 512 && (Ie || u === null || _n(u, u.return)), i & 64 && Iu && (l = l.updateQueue, l !== null && (i = l.callbacks, i !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? i : u.concat(i))));
        break;
      case 26:
        var s = Et;
        if (na(n, l), ha(l), i & 512 && (Ie || u === null || _n(u, u.return)), i & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (i = l.memoizedState, u === null)
            if (i === null)
              if (l.stateNode === null) {
                t: {
                  i = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  e: switch (i) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Jn] || r[ue] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Ul(r, i, u), r[ue] = l, Ft(r), i = r;
                      break t;
                    case "link":
                      var m = c0(
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
                      r = s.createElement(i), Ul(r, i, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = c0(
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
                      r = s.createElement(i), Ul(r, i, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(M(468, i));
                  }
                  r[ue] = l, Ft(r), i = r;
                }
                l.stateNode = i;
              } else
                Sh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = u0(
                s,
                i,
                l.memoizedProps
              );
          else
            r !== i ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, i === null ? Sh(
              s,
              l.type,
              l.stateNode
            ) : u0(
              s,
              i,
              l.memoizedProps
            )) : i === null && l.stateNode !== null && Jd(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        na(n, l), ha(l), i & 512 && (Ie || u === null || _n(u, u.return)), u !== null && i & 4 && Jd(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (na(n, l), ha(l), i & 512 && (Ie || u === null || _n(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            $n(s, "");
          } catch (P) {
            ee(l, l.return, P);
          }
        }
        i & 4 && l.stateNode != null && (s = l.memoizedProps, Jd(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), i & 1024 && (Kd = !0);
        break;
      case 6:
        if (na(n, l), ha(l), i & 4) {
          if (l.stateNode === null)
            throw Error(M(162));
          i = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = i;
          } catch (P) {
            ee(l, l.return, P);
          }
        }
        break;
      case 3:
        if (vf = null, s = Et, Et = Xl(n.containerInfo), na(n, l), Et = s, ha(l), i & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ef(n.containerInfo);
          } catch (P) {
            ee(l, l.return, P);
          }
        Kd && (Kd = !1, Ny(l));
        break;
      case 4:
        i = Et, Et = Xl(
          l.stateNode.containerInfo
        ), na(n, l), ha(l), Et = i;
        break;
      case 12:
        na(n, l), ha(l);
        break;
      case 31:
        na(n, l), ha(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
        break;
      case 13:
        na(n, l), ha(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Nn = Ml()), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, _ = Iu, q = Ie;
        if (Iu = _ || s, Ie = q || T, na(n, l), Ie = q, Iu = _, ha(l), i & 8192)
          t: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || Iu || Ie || ji(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = T.stateNode;
                    var Q = T.memoizedProps.style, C = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    v.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (P) {
                  ee(T, T.return, P);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (P) {
                  ee(T, T.return, P);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var x = T.stateNode;
                  s ? $e(x, !0) : $e(T.stateNode, !1);
                } catch (P) {
                  ee(T, T.return, P);
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
        i & 4 && (i = l.updateQueue, i !== null && (u = i.retryQueue, u !== null && (i.retryQueue = null, Zs(l, u))));
        break;
      case 19:
        na(n, l), ha(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
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
          if (Ry(i)) {
            u = i;
            break;
          }
          i = i.return;
        }
        if (u == null) throw Error(M(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Ko(l);
            Wo(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && ($n(m, ""), u.flags &= -33);
            var v = Ko(l);
            Wo(l, v, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, _ = Ko(l);
            $o(
              l,
              _,
              T
            );
            break;
          default:
            throw Error(M(161));
        }
      } catch (q) {
        ee(l, l.return, q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Ny(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Ny(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Pu(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Qs(l, n.alternate, n), n = n.sibling;
  }
  function ji(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qa(4, n, n.return), ji(n);
          break;
        case 1:
          _n(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Xc(
            n,
            n.return,
            u
          ), ji(n);
          break;
        case 27:
          wi(n.stateNode);
        case 26:
        case 5:
          _n(n, n.return), ji(n);
          break;
        case 22:
          n.memoizedState === null && ji(n);
          break;
        case 30:
          ji(n);
          break;
        default:
          ji(n);
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
            } catch (_) {
              ee(i, i.return, _);
            }
          if (i = r, s = i.updateQueue, s !== null) {
            var v = i.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Sd(T[s], v);
            } catch (_) {
              ee(i, i.return, _);
            }
          }
          u && m & 64 && wd(r), du(r, r.return);
          break;
        case 27:
          Uy(r);
        case 26:
        case 5:
          Cn(
            s,
            r,
            u
          ), u && i === null && m & 4 && My(r), du(r, r.return);
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
          ), u && m & 4 && Fp(s, r);
          break;
        case 13:
          Cn(
            s,
            r,
            u
          ), u && m & 4 && By(s, r);
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
  function Wd(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && vs(u));
  }
  function kd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && vs(l));
  }
  function cn(l, n, u, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Fo(
          l,
          n,
          u,
          i
        ), n = n.sibling;
  }
  function Fo(l, n, u, i) {
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
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && vs(l)));
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
          } catch (T) {
            ee(n, n.return, T);
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
        ) : Ls(l, n) : r._visibility & 2 ? cn(
          l,
          n,
          u,
          i
        ) : (r._visibility |= 2, Io(
          l,
          n,
          u,
          i,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Wd(m, n);
        break;
      case 24:
        cn(
          l,
          n,
          u,
          i
        ), s & 2048 && kd(n.alternate, n);
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
  function Io(l, n, u, i, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, T = i, _ = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Io(
            r,
            m,
            v,
            T,
            s
          ), un(8, m);
          break;
        case 23:
          break;
        case 22:
          var q = m.stateNode;
          m.memoizedState !== null ? q._visibility & 2 ? Io(
            r,
            m,
            v,
            T,
            s
          ) : Ls(
            r,
            m
          ) : (q._visibility |= 2, Io(
            r,
            m,
            v,
            T,
            s
          )), s && _ & 2048 && Wd(
            m.alternate,
            m
          );
          break;
        case 24:
          Io(
            r,
            m,
            v,
            T,
            s
          ), s && _ & 2048 && kd(m.alternate, m);
          break;
        default:
          Io(
            r,
            m,
            v,
            T,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Ls(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, i = n, s = i.flags;
        switch (i.tag) {
          case 22:
            Ls(u, i), s & 2048 && Wd(
              i.alternate,
              i
            );
            break;
          case 24:
            Ls(u, i), s & 2048 && kd(i.alternate, i);
            break;
          default:
            Ls(u, i);
        }
        n = n.sibling;
      }
  }
  var ma = 8192;
  function mu(l, n, u) {
    if (l.subtreeFlags & ma)
      for (l = l.child; l !== null; )
        Ip(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function Ip(l, n, u) {
    switch (l.tag) {
      case 26:
        mu(
          l,
          n,
          u
        ), l.flags & ma && l.memoizedState !== null && Su(
          u,
          Et,
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
        var i = Et;
        Et = Xl(l.stateNode.containerInfo), mu(
          l,
          n,
          u
        ), Et = i;
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
  function Fd(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Po(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          pl = i, Id(
            i,
            l
          );
        }
      Fd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        xy(l), l = l.sibling;
  }
  function xy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Po(l), l.flags & 2048 && qa(9, l, l.return);
        break;
      case 3:
        Po(l);
        break;
      case 12:
        Po(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ws(l)) : Po(l);
        break;
      default:
        Po(l);
    }
  }
  function ws(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          pl = i, Id(
            i,
            l
          );
        }
      Fd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          qa(8, n, n.return), ws(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ws(n));
          break;
        default:
          ws(n);
      }
      l = l.sibling;
    }
  }
  function Id(l, n) {
    for (; pl !== null; ) {
      var u = pl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          qa(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var i = u.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          vs(u.memoizedState.cache);
      }
      if (i = u.child, i !== null) i.return = u, pl = i;
      else
        t: for (u = l; pl !== null; ) {
          i = pl;
          var s = i.sibling, r = i.return;
          if (Cy(i), i === u) {
            pl = null;
            break t;
          }
          if (s !== null) {
            s.return = r, pl = s;
            break t;
          }
          pl = r;
        }
    }
  }
  var Pp = {
    getCacheForType: function(l) {
      var n = Z(we), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Z(we).controller.signal;
    }
  }, qy = typeof WeakMap == "function" ? WeakMap : Map, wt = 0, ie = null, Yt = null, _t = 0, te = 0, ht = null, yu = !1, Qc = !1, Pd = !1, Hn = 0, ye = 0, Bn = 0, Gi = 0, th = 0, ua = 0, He = 0, Js = null, Be = null, eh = !1, Nn = 0, Yy = 0, $t = 1 / 0, tf = null, ze = null, al = 0, tc = null, Vc = null, pu = 0, ya = 0, lh = null, ah = null, ef = 0, Ks = null;
  function pa() {
    return (wt & 2) !== 0 && _t !== 0 ? _t & -_t : O.T !== null ? oh() : Qr();
  }
  function tv() {
    if (ua === 0)
      if ((_t & 536870912) === 0 || qt) {
        var l = hn;
        hn <<= 1, (hn & 3932160) === 0 && (hn = 262144), ua = l;
      } else ua = 536870912;
    return l = Pl.current, l !== null && (l.flags |= 32), ua;
  }
  function ca(l, n, u) {
    (l === ie && (te === 2 || te === 9) || l.cancelPendingCommit !== null) && (vu(l, 0), ec(
      l,
      _t,
      ua,
      !1
    )), mo(l, u), ((wt & 2) === 0 || l !== ie) && (l === ie && ((wt & 2) === 0 && (Gi |= u), ye === 4 && ec(
      l,
      _t,
      ua,
      !1
    )), gu(l));
  }
  function ev(l, n, u) {
    if ((wt & 6) !== 0) throw Error(M(327));
    var i = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || mn(l, n), s = i ? cv(l, n) : uh(l, n, !0), r = i;
    do {
      if (s === 0) {
        Qc && !i && ec(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !lv(u)) {
          s = uh(l, n, !1), r = !1;
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
              s = Js;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (vu(v, m).flags |= 256), m = uh(
                v,
                m,
                !1
              ), m !== 2) {
                if (Pd && !T) {
                  v.errorRecoveryDisabledLanes |= r, Gi |= r, s = 4;
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
              throw Error(M(345));
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
              throw Error(M(329));
          }
          if ((n & 62914560) === n && (s = Nn + 300 - Ml(), 10 < s)) {
            if (ec(
              i,
              n,
              ua,
              !yu
            ), Ze(i, 0, !0) !== 0) break t;
            pu = n, i.timeoutHandle = ar(
              $s.bind(
                null,
                i,
                u,
                Be,
                tf,
                eh,
                n,
                ua,
                Gi,
                He,
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
          $s(
            i,
            u,
            Be,
            tf,
            eh,
            n,
            ua,
            Gi,
            He,
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
  function $s(l, n, u, i, s, r, m, v, T, _, q, Q, C, x) {
    if (l.timeoutHandle = -1, Q = n.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pn
      }, Ip(
        n,
        r,
        Q
      );
      var P = (r & 62914560) === r ? Nn - Ml() : (r & 4194048) === r ? Yy - Ml() : 0;
      if (P = o0(
        Q,
        P
      ), P !== null) {
        pu = r, l.cancelPendingCommit = P(
          sv.bind(
            null,
            l,
            n,
            r,
            u,
            i,
            s,
            m,
            v,
            T,
            q,
            Q,
            null,
            C,
            x
          )
        ), ec(l, r, m, !_);
        return;
      }
    }
    sv(
      l,
      n,
      r,
      u,
      i,
      s,
      m,
      v,
      T
    );
  }
  function lv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var i = 0; i < u.length; i++) {
          var s = u[i], r = s.getSnapshot;
          s = s.value;
          try {
            if (!jl(r(), s)) return !1;
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
    n &= ~th, n &= ~Gi, l.suspendedLanes |= n, l.pingedLanes &= ~n, i && (l.warmLanes |= n), i = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Jl(s), m = 1 << r;
      i[r] = -1, s &= ~m;
    }
    u !== 0 && kf(l, u, n);
  }
  function lf() {
    return (wt & 6) === 0 ? (ac(0), !1) : !0;
  }
  function jy() {
    if (Yt !== null) {
      if (te === 0)
        var l = Yt.return;
      else
        l = Yt, Dn = Lu = null, Ms(l), Uc = null, Mi = 0, l = Yt;
      for (; l !== null; )
        kp(l.alternate, l), l = l.return;
      Yt = null;
    }
  }
  function vu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Ov(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), pu = 0, jy(), ie = l, Yt = u = Vu(l.current, null), _t = n, te = 0, ht = null, yu = !1, Qc = mn(l, n), Pd = !1, He = ua = th = Gi = Bn = ye = 0, Be = Js = null, eh = !1, (n & 8) !== 0 && (n |= n & 32);
    var i = l.entangledLanes;
    if (i !== 0)
      for (l = l.entanglements, i &= n; 0 < i; ) {
        var s = 31 - Jl(i), r = 1 << s;
        n |= l[s], i &= ~r;
      }
    return Hn = n, Da(), u;
  }
  function af(l, n) {
    Tt = null, O.H = xs, n === Oc || n === No ? (n = Km(), te = 3) : n === Di ? (n = Km(), te = 4) : te = n === Xd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, ht = n, Yt === null && (ye = 1, wo(
      l,
      Ma(n, l.current)
    ));
  }
  function av() {
    var l = Pl.current;
    return l === null ? !0 : (_t & 4194048) === _t ? Ha === null : (_t & 62914560) === _t || (_t & 536870912) !== 0 ? l === Ha : !1;
  }
  function nv() {
    var l = O.H;
    return O.H = xs, l === null ? xs : l;
  }
  function uv() {
    var l = O.A;
    return O.A = Pp, l;
  }
  function nh() {
    ye = 4, yu || (_t & 4194048) !== _t && Pl.current !== null || (Qc = !0), (Bn & 134217727) === 0 && (Gi & 134217727) === 0 || ie === null || ec(
      ie,
      _t,
      ua,
      !1
    );
  }
  function uh(l, n, u) {
    var i = wt;
    wt |= 2;
    var s = nv(), r = uv();
    (ie !== l || _t !== n) && (tf = null, vu(l, n)), n = !1;
    var m = ye;
    t: do
      try {
        if (te !== 0 && Yt !== null) {
          var v = Yt, T = ht;
          switch (te) {
            case 8:
              jy(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pl.current === null && (n = !0);
              var _ = te;
              if (te = 0, ht = null, Xi(l, v, T, _), u && Qc) {
                m = 0;
                break t;
              }
              break;
            default:
              _ = te, te = 0, ht = null, Xi(l, v, T, _);
          }
        }
        kg(), m = ye;
        break;
      } catch (q) {
        af(l, q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Dn = Lu = null, wt = i, O.H = s, O.A = r, Yt === null && (ie = null, _t = 0, Da()), m;
  }
  function kg() {
    for (; Yt !== null; ) iv(Yt);
  }
  function cv(l, n) {
    var u = wt;
    wt |= 2;
    var i = nv(), s = uv();
    ie !== l || _t !== n ? (tf = null, $t = Ml() + 500, vu(l, n)) : Qc = mn(
      l,
      n
    );
    t: do
      try {
        if (te !== 0 && Yt !== null) {
          n = Yt;
          var r = ht;
          e: switch (te) {
            case 1:
              te = 0, ht = null, Xi(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (wm(r)) {
                te = 0, ht = null, ov(n);
                break;
              }
              n = function() {
                te !== 2 && te !== 9 || ie !== l || (te = 7), gu(l);
              }, r.then(n, n);
              break t;
            case 3:
              te = 7;
              break t;
            case 4:
              te = 5;
              break t;
            case 7:
              wm(r) ? (te = 0, ht = null, ov(n)) : (te = 0, ht = null, Xi(l, n, r, 7));
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
                    te = 0, ht = null;
                    var T = v.sibling;
                    if (T !== null) Yt = T;
                    else {
                      var _ = v.return;
                      _ !== null ? (Yt = _, Ws(_)) : Yt = null;
                    }
                    break e;
                  }
              }
              te = 0, ht = null, Xi(l, n, r, 5);
              break;
            case 6:
              te = 0, ht = null, Xi(l, n, r, 6);
              break;
            case 8:
              jy(), ye = 6;
              break t;
            default:
              throw Error(M(462));
          }
        }
        Zc();
        break;
      } catch (q) {
        af(l, q);
      }
    while (!0);
    return Dn = Lu = null, O.H = i, O.A = s, wt = u, Yt !== null ? 0 : (ie = null, _t = 0, Da(), ye);
  }
  function Zc() {
    for (; Yt !== null && !ei(); )
      iv(Yt);
  }
  function iv(l) {
    var n = zy(l.alternate, l, Hn);
    l.memoizedProps = l.pendingProps, n === null ? Ws(l) : Yt = n;
  }
  function ov(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = jc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          _t
        );
        break;
      case 11:
        n = jc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          _t
        );
        break;
      case 5:
        Ms(n);
      default:
        kp(u, n), n = Yt = jm(n, Hn), n = zy(u, n, Hn);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ws(l) : Yt = n;
  }
  function Xi(l, n, u, i) {
    Dn = Lu = null, Ms(n), Uc = null, Mi = 0;
    var s = n.return;
    try {
      if (Wg(
        l,
        s,
        n,
        u,
        _t
      )) {
        ye = 1, wo(
          l,
          Ma(u, l.current)
        ), Yt = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Yt = s, r;
      ye = 1, wo(
        l,
        Ma(u, l.current)
      ), Yt = null;
      return;
    }
    n.flags & 32768 ? (qt || i === 1 ? l = !0 : Qc || (_t & 536870912) !== 0 ? l = !1 : (yu = l = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Pl.current, i !== null && i.tag === 13 && (i.flags |= 16384))), fv(n, l)) : Ws(n);
  }
  function Ws(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        fv(
          n,
          yu
        );
        return;
      }
      l = n.return;
      var u = $p(
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
    ye === 0 && (ye = 5);
  }
  function fv(l, n) {
    do {
      var u = Wp(l.alternate, l);
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
    ye = 6, Yt = null;
  }
  function sv(l, n, u, i, s, r, m, v, T) {
    l.cancelPendingCommit = null;
    do
      nf();
    while (al !== 0);
    if ((wt & 6) !== 0) throw Error(M(327));
    if (n !== null) {
      if (n === l.current) throw Error(M(177));
      if (r = n.lanes | n.childLanes, r |= tn, Gr(
        l,
        u,
        r,
        m,
        v,
        T
      ), l === ie && (Yt = ie = null, _t = 0), Vc = n, tc = l, pu = u, ya = r, lh = s, ah = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Sv(dc, function() {
        return yv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
        i = O.T, O.T = null, s = V.p, V.p = 2, m = wt, wt |= 4;
        try {
          ko(l, n, u);
        } finally {
          wt = m, V.p = s, O.T = i;
        }
      }
      al = 1, rv(), dv(), hv();
    }
  }
  function rv() {
    if (al === 1) {
      al = 0;
      var l = tc, n = Vc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var i = V.p;
        V.p = 2;
        var s = wt;
        wt |= 4;
        try {
          $d(n, l);
          var r = mh, m = Tc(l.containerInfo), v = r.focusedElem, T = r.selectionRange;
          if (m !== v && v && v.ownerDocument && vi(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && is(v)) {
              var _ = T.start, q = T.end;
              if (q === void 0 && (q = _), "selectionStart" in v)
                v.selectionStart = _, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var Q = v.ownerDocument || document, C = Q && Q.defaultView || window;
                if (C.getSelection) {
                  var x = C.getSelection(), P = v.textContent.length, rt = Math.min(T.start, P), fe = T.end === void 0 ? rt : Math.min(T.end, P);
                  !x.extend && rt > fe && (m = fe, fe = rt, rt = m);
                  var R = qm(
                    v,
                    rt
                  ), z = qm(
                    v,
                    fe
                  );
                  if (R && z && (x.rangeCount !== 1 || x.anchorNode !== R.node || x.anchorOffset !== R.offset || x.focusNode !== z.node || x.focusOffset !== z.offset)) {
                    var U = Q.createRange();
                    U.setStart(R.node, R.offset), x.removeAllRanges(), rt > fe ? (x.addRange(U), x.extend(z.node, z.offset)) : (U.setEnd(z.node, z.offset), x.addRange(U));
                  }
                }
              }
            }
            for (Q = [], x = v; x = x.parentNode; )
              x.nodeType === 1 && Q.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < Q.length; v++) {
              var X = Q[v];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          nl = !!hh, mh = hh = null;
        } finally {
          wt = s, V.p = i, O.T = u;
        }
      }
      l.current = n, al = 2;
    }
  }
  function dv() {
    if (al === 2) {
      al = 0;
      var l = tc, n = Vc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var i = V.p;
        V.p = 2;
        var s = wt;
        wt |= 4;
        try {
          Qs(l, n.alternate, n);
        } finally {
          wt = s, V.p = i, O.T = u;
        }
      }
      al = 3;
    }
  }
  function hv() {
    if (al === 4 || al === 3) {
      al = 0, qr();
      var l = tc, n = Vc, u = pu, i = ah;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? al = 5 : (al = 0, Vc = tc = null, mv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (ze = null), sm(u), n = n.stateNode, sa && typeof sa.onCommitFiberRoot == "function")
        try {
          sa.onCommitFiberRoot(
            li,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        n = O.T, s = V.p, V.p = 2, O.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < i.length; m++) {
            var v = i[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          O.T = n, V.p = s;
        }
      }
      (pu & 3) !== 0 && nf(), gu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === Ks ? ef++ : (ef = 0, Ks = l) : ef = 0, ac(0);
    }
  }
  function mv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, vs(n)));
  }
  function nf() {
    return rv(), dv(), hv(), yv();
  }
  function yv() {
    if (al !== 5) return !1;
    var l = tc, n = ya;
    ya = 0;
    var u = sm(pu), i = O.T, s = V.p;
    try {
      V.p = 32 > u ? 32 : u, O.T = null, u = lh, lh = null;
      var r = tc, m = pu;
      if (al = 0, Vc = tc = null, pu = 0, (wt & 6) !== 0) throw Error(M(331));
      var v = wt;
      if (wt |= 4, xy(r.current), Fo(
        r,
        r.current,
        m,
        u
      ), wt = v, ac(0, !1), sa && typeof sa.onPostCommitFiberRoot == "function")
        try {
          sa.onPostCommitFiberRoot(li, r);
        } catch {
        }
      return !0;
    } finally {
      V.p = s, O.T = i, mv(l, n);
    }
  }
  function pv(l, n, u) {
    n = Ma(u, n), n = yy(l.stateNode, n, 2), l = Ca(l, n, 2), l !== null && (mo(l, 2), gu(l));
  }
  function ee(l, n, u) {
    if (l.tag === 3)
      pv(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          pv(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ze === null || !ze.has(i))) {
            l = Ma(u, l), u = py(2), i = Ca(n, u, 2), i !== null && (vy(
              u,
              i,
              n,
              l
            ), mo(i, 2), gu(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function ks(l, n, u) {
    var i = l.pingCache;
    if (i === null) {
      i = l.pingCache = new qy();
      var s = /* @__PURE__ */ new Set();
      i.set(n, s);
    } else
      s = i.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(n, s));
    s.has(u) || (Pd = !0, s.add(u), l = Gy.bind(null, l, n, u), n.then(l, l));
  }
  function Gy(l, n, u) {
    var i = l.pingCache;
    i !== null && i.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ie === l && (_t & u) === u && (ye === 4 || ye === 3 && (_t & 62914560) === _t && 300 > Ml() - Nn ? (wt & 2) === 0 && vu(l, 0) : th |= u, He === _t && (He = 0)), gu(l);
  }
  function vv(l, n) {
    n === 0 && (n = ai()), l = Qu(l, n), l !== null && (mo(l, n), gu(l));
  }
  function Ya(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), vv(l, u);
  }
  function gv(l, n) {
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
        throw Error(M(314));
    }
    i !== null && i.delete(n), vv(l, u);
  }
  function Sv(l, n) {
    return de(l, n);
  }
  var uf = null, Qi = null, Xy = !1, ch = !1, Qy = !1, lc = 0;
  function gu(l) {
    l !== Qi && l.next === null && (Qi === null ? uf = Qi = l : Qi = Qi.next = l), ch = !0, Xy || (Xy = !0, Is());
  }
  function ac(l, n) {
    if (!Qy && ch) {
      Qy = !0;
      do
        for (var u = !1, i = uf; i !== null; ) {
          if (l !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = i.suspendedLanes, v = i.pingedLanes;
              r = (1 << 31 - Jl(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Vi(i, r));
          } else
            r = _t, r = Ze(
              i,
              i === ie ? r : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (r & 3) === 0 || mn(i, r) || (u = !0, Vi(i, r));
          i = i.next;
        }
      while (u);
      Qy = !1;
    }
  }
  function ih() {
    Vy();
  }
  function Vy() {
    ch = Xy = !1;
    var l = 0;
    lc !== 0 && Fg() && (l = lc);
    for (var n = Ml(), u = null, i = uf; i !== null; ) {
      var s = i.next, r = Zy(i, n);
      r === 0 ? (i.next = null, u === null ? uf = s : u.next = s, s === null && (Qi = u)) : (u = i, (l !== 0 || (r & 3) !== 0) && (ch = !0)), i = s;
    }
    al !== 0 && al !== 5 || ac(l), lc !== 0 && (lc = 0);
  }
  function Zy(l, n) {
    for (var u = l.suspendedLanes, i = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Jl(r), v = 1 << m, T = s[m];
      T === -1 ? ((v & u) === 0 || (v & i) !== 0) && (s[m] = ho(v, n)) : T <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = ie, u = _t, u = Ze(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i = l.callbackNode, u === 0 || l === n && (te === 2 || te === 9) || l.cancelPendingCommit !== null)
      return i !== null && i !== null && im(i), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || mn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (i !== null && im(i), sm(u)) {
        case 2:
        case 8:
          u = jr;
          break;
        case 32:
          u = dc;
          break;
        case 268435456:
          u = om;
          break;
        default:
          u = dc;
      }
      return i = Fs.bind(null, l), u = de(u, i), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return i !== null && i !== null && im(i), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Fs(l, n) {
    if (al !== 0 && al !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (nf() && l.callbackNode !== u)
      return null;
    var i = _t;
    return i = Ze(
      l,
      l === ie ? i : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i === 0 ? null : (ev(l, i, n), Zy(l, Ml()), l.callbackNode != null && l.callbackNode === u ? Fs.bind(null, l) : null);
  }
  function Vi(l, n) {
    if (nf()) return null;
    ev(l, n, !0);
  }
  function Is() {
    Mv(function() {
      (wt & 6) !== 0 ? de(
        Yr,
        ih
      ) : Vy();
    });
  }
  function oh() {
    if (lc === 0) {
      var l = Dc;
      l === 0 && (l = qu, qu <<= 1, (qu & 261888) === 0 && (qu = 256)), lc = l;
    }
    return lc;
  }
  function bv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ka("" + l);
  }
  function Zi(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Ps(l, n, u, i, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = bv(
        (s[Kl] || null).action
      ), m = i.submitter;
      m && (n = (n = m[Kl] || null) ? bv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new ns(
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
                  var T = m ? Zi(s, m) : new FormData(s);
                  Zo(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: r
                    },
                    null,
                    T
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), T = m ? Zi(s, m) : new FormData(s), Zo(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: r
                  },
                  r,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var fh = 0; fh < Ro.length; fh++) {
    var cf = Ro[fh], Ly = cf.toLowerCase(), wy = cf[0].toUpperCase() + cf.slice(1);
    Wl(
      Ly,
      "on" + wy
    );
  }
  Wl(fs, "onAnimationEnd"), Wl(Ym, "onAnimationIteration"), Wl(fd, "onAnimationStart"), Wl("dblclick", "onDoubleClick"), Wl("focusin", "onFocus"), Wl("focusout", "onBlur"), Wl(gi, "onTransitionRun"), Wl(ss, "onTransitionStart"), Wl(In, "onTransitionCancel"), Wl(Cp, "onTransitionEnd"), Kn("onMouseEnter", ["mouseout", "mouseover"]), Kn("onMouseLeave", ["mouseout", "mouseover"]), Kn("onPointerEnter", ["pointerout", "pointerover"]), Kn("onPointerLeave", ["pointerout", "pointerover"]), pc(
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
  var of = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Tv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(of)
  );
  function Ev(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var i = l[u], s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (n)
          for (var m = i.length - 1; 0 <= m; m--) {
            var v = i[m], T = v.instance, _ = v.currentTarget;
            if (v = v.listener, T !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = _;
            try {
              r(s);
            } catch (q) {
              Si(q);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (v = i[m], T = v.instance, _ = v.currentTarget, v = v.listener, T !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = _;
            try {
              r(s);
            } catch (q) {
              Si(q);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function Ht(l, n) {
    var u = n[Vr];
    u === void 0 && (u = n[Vr] = /* @__PURE__ */ new Set());
    var i = l + "__bubble";
    u.has(i) || (tr(n, l, 2, !1), u.add(i));
  }
  function Jy(l, n, u) {
    var i = 0;
    n && (i |= 4), tr(
      u,
      l,
      i,
      n
    );
  }
  var sh = "_reactListening" + Math.random().toString(36).slice(2);
  function ff(l) {
    if (!l[sh]) {
      l[sh] = !0, ii.forEach(function(u) {
        u !== "selectionchange" && (Tv.has(u) || Jy(u, !1, l), Jy(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[sh] || (n[sh] = !0, Jy("selectionchange", !1, n));
    }
  }
  function tr(l, n, u, i) {
    switch (fr(n)) {
      case 2:
        var s = bu;
        break;
      case 8:
        s = Tu;
        break;
      default:
        s = _l;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ls || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), i ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Ky(l, n, u, i, s) {
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
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = ni(v), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              i = r = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    Sm(function() {
      var _ = r, q = kr(u), Q = [];
      t: {
        var C = Pn.get(l);
        if (C !== void 0) {
          var x = ns, P = l;
          switch (l) {
            case "keypress":
              if (Ir(u) === 0) break t;
            case "keydown":
            case "keyup":
              x = ld;
              break;
            case "focusin":
              P = "focus", x = td;
              break;
            case "focusout":
              P = "blur", x = td;
              break;
            case "beforeblur":
            case "afterblur":
              x = td;
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
              x = Ao;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = Sp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = zp;
              break;
            case fs:
            case Ym:
            case fd:
              x = Tp;
              break;
            case Cp:
              x = wg;
              break;
            case "scroll":
            case "scrollend":
              x = Zg;
              break;
            case "wheel":
              x = Jg;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = ri;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = Sn;
              break;
            case "toggle":
            case "beforetoggle":
              x = Rm;
          }
          var rt = (n & 4) !== 0, fe = !rt && (l === "scroll" || l === "scrollend"), R = rt ? C !== null ? C + "Capture" : null : C;
          rt = [];
          for (var z = _, U; z !== null; ) {
            var X = z;
            if (U = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || U === null || R === null || (X = sl(z, R), X != null && rt.push(
              er(z, X, U)
            )), fe) break;
            z = z.return;
          }
          0 < rt.length && (C = new x(
            C,
            P,
            null,
            u,
            q
          ), Q.push({ event: C, listeners: rt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (C = l === "mouseover" || l === "pointerover", x = l === "mouseout" || l === "pointerout", C && u !== Wr && (P = u.relatedTarget || u.fromElement) && (ni(P) || P[mc]))
            break t;
          if ((x || C) && (C = q.window === q ? q : (C = q.ownerDocument) ? C.defaultView || C.parentWindow : window, x ? (P = u.relatedTarget || u.toElement, x = _, P = P ? ni(P) : null, P !== null && (fe = Bt(P), rt = P.tag, P !== fe || rt !== 5 && rt !== 27 && rt !== 6) && (P = null)) : (x = null, P = _), x !== P)) {
            if (rt = Ao, X = "onMouseLeave", R = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (rt = Sn, X = "onPointerLeave", R = "onPointerEnter", z = "pointer"), fe = x == null ? C : yo(x), U = P == null ? C : yo(P), C = new rt(
              X,
              z + "leave",
              x,
              u,
              q
            ), C.target = fe, C.relatedTarget = U, X = null, ni(q) === _ && (rt = new rt(
              R,
              z + "enter",
              P,
              u,
              q
            ), rt.target = U, rt.relatedTarget = fe, X = rt), fe = X, x && P)
              e: {
                for (rt = Av, R = x, z = P, U = 0, X = R; X; X = rt(X))
                  U++;
                X = 0;
                for (var ct = z; ct; ct = rt(ct))
                  X++;
                for (; 0 < U - X; )
                  R = rt(R), U--;
                for (; 0 < X - U; )
                  z = rt(z), X--;
                for (; U--; ) {
                  if (R === z || z !== null && R === z.alternate) {
                    rt = R;
                    break e;
                  }
                  R = rt(R), z = rt(z);
                }
                rt = null;
              }
            else rt = null;
            x !== null && rh(
              Q,
              C,
              x,
              rt,
              !1
            ), P !== null && fe !== null && rh(
              Q,
              fe,
              P,
              rt,
              !0
            );
          }
        }
        t: {
          if (C = _ ? yo(_) : window, x = C.nodeName && C.nodeName.toLowerCase(), x === "select" || x === "input" && C.type === "file")
            var Zt = Bm;
          else if (Fn(C))
            if (ud)
              Zt = pi;
            else {
              Zt = Up;
              var et = Rp;
            }
          else
            x = C.nodeName, !x || x.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? _ && gm(_.elementType) && (Zt = Bm) : Zt = bc;
          if (Zt && (Zt = Zt(l, _))) {
            Hm(
              Q,
              Zt,
              u,
              q
            );
            break t;
          }
          et && et(l, C, _), l === "focusout" && _ && C.type === "number" && _.memoizedProps.value != null && oi(C, "number", C.value);
        }
        switch (et = _ ? yo(_) : window, l) {
          case "focusin":
            (Fn(et) || et.contentEditable === "true") && (Ec = et, Oo = _, Pa = null);
            break;
          case "focusout":
            Pa = Oo = Ec = null;
            break;
          case "mousedown":
            Tn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Tn = !1, od(Q, u, q);
            break;
          case "selectionchange":
            if (os) break;
          case "keydown":
          case "keyup":
            od(Q, u, q);
        }
        var bt;
        if (zo)
          t: {
            switch (l) {
              case "compositionstart":
                var At = "onCompositionStart";
                break t;
              case "compositionend":
                At = "onCompositionEnd";
                break t;
              case "compositionupdate":
                At = "onCompositionUpdate";
                break t;
            }
            At = void 0;
          }
        else
          hi ? nd(l, u) && (At = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (At = "onCompositionStart");
        At && (Um && u.locale !== "ko" && (hi || At !== "onCompositionStart" ? At === "onCompositionEnd" && hi && (bt = Tm()) : (Gu = q, bm = "value" in Gu ? Gu.value : Gu.textContent, hi = !0)), et = lr(_, At), 0 < et.length && (At = new Ep(
          At,
          l,
          null,
          u,
          q
        ), Q.push({ event: At, listeners: et }), bt ? At.data = bt : (bt = _m(u), bt !== null && (At.data = bt)))), (bt = Yl ? Mp(l, u) : Kg(l, u)) && (At = lr(_, "onBeforeInput"), 0 < At.length && (et = new Ep(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          q
        ), Q.push({
          event: et,
          listeners: At
        }), et.data = bt)), Ps(
          Q,
          l,
          _,
          u,
          q
        );
      }
      Ev(Q, n);
    });
  }
  function er(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function lr(l, n) {
    for (var u = n + "Capture", i = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = sl(l, u), s != null && i.unshift(
        er(l, s, r)
      ), s = sl(l, n), s != null && i.push(
        er(l, s, r)
      )), l.tag === 3) return i;
      l = l.return;
    }
    return [];
  }
  function Av(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function rh(l, n, u, i, s) {
    for (var r = n._reactName, m = []; u !== null && u !== i; ) {
      var v = u, T = v.alternate, _ = v.stateNode;
      if (v = v.tag, T !== null && T === i) break;
      v !== 5 && v !== 26 && v !== 27 || _ === null || (T = _, s ? (_ = sl(u, r), _ != null && m.unshift(
        er(u, _, T)
      )) : s || (_ = sl(u, r), _ != null && m.push(
        er(u, _, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var zv = /\r\n?/g, $y = /\u0000|\uFFFD/g;
  function Wy(l) {
    return (typeof l == "string" ? l : "" + l).replace(zv, `
`).replace($y, "");
  }
  function ky(l, n) {
    return n = Wy(n), Wy(l) === n;
  }
  function oe(l, n, u, i, s, r) {
    switch (u) {
      case "children":
        typeof i == "string" ? n === "body" || n === "textarea" && i === "" || $n(l, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && $n(l, "" + i);
        break;
      case "className":
        Jr(l, "class", i);
        break;
      case "tabIndex":
        Jr(l, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jr(l, u, i);
        break;
      case "style":
        pp(l, i, r);
        break;
      case "data":
        if (n !== "object") {
          Jr(l, "data", i);
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
          typeof r == "function" && (u === "formAction" ? (n !== "input" && oe(l, n, "name", s.name, s, null), oe(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), oe(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), oe(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (oe(l, n, "encType", s.encType, s, null), oe(l, n, "method", s.method, s, null), oe(l, n, "target", s.target, s, null)));
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
        i != null && Ht("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Ht("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(M(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(M(60));
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
        Ht("beforetoggle", l), Ht("toggle", l), go(l, "popover", i);
        break;
      case "xlinkActuate":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Yu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Yu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Yu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        go(l, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Vg.get(u) || u, go(l, u, i));
    }
  }
  function Fy(l, n, u, i, s, r) {
    switch (u) {
      case "style":
        pp(l, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(M(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(M(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof i == "string" ? $n(l, i) : (typeof i == "number" || typeof i == "bigint") && $n(l, "" + i);
        break;
      case "onScroll":
        i != null && Ht("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Ht("scrollend", l);
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
            u in l ? l[u] = i : i === !0 ? l.setAttribute(u, "") : go(l, u, i);
          }
    }
  }
  function Ul(l, n, u) {
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
        Ht("error", l), Ht("load", l);
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
                  throw Error(M(137, n));
                default:
                  oe(l, n, r, m, u, null);
              }
          }
        s && oe(l, n, "srcSet", u.srcSet, u, null), i && oe(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ht("invalid", l);
        var v = r = m = s = null, T = null, _ = null;
        for (i in u)
          if (u.hasOwnProperty(i)) {
            var q = u[i];
            if (q != null)
              switch (i) {
                case "name":
                  s = q;
                  break;
                case "type":
                  m = q;
                  break;
                case "checked":
                  T = q;
                  break;
                case "defaultChecked":
                  _ = q;
                  break;
                case "value":
                  r = q;
                  break;
                case "defaultValue":
                  v = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(M(137, n));
                  break;
                default:
                  oe(l, n, i, q, u, null);
              }
          }
        Pf(
          l,
          r,
          v,
          T,
          _,
          m,
          s,
          !1
        );
        return;
      case "select":
        Ht("invalid", l), i = m = r = null;
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
                oe(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!i, n != null ? So(l, !!i, n, !1) : u != null && So(l, !!i, u, !0);
        return;
      case "textarea":
        Ht("invalid", l), r = s = i = null;
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
                if (v != null) throw Error(M(91));
                break;
              default:
                oe(l, n, m, v, u, null);
            }
        vm(l, i, s, r);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (i = u[T], i != null) && (T === "selected" ? l.selected = i && typeof i != "function" && typeof i != "symbol" : oe(l, n, T, i, u, null));
        return;
      case "dialog":
        Ht("beforetoggle", l), Ht("toggle", l), Ht("cancel", l), Ht("close", l);
        break;
      case "iframe":
      case "object":
        Ht("load", l);
        break;
      case "video":
      case "audio":
        for (i = 0; i < of.length; i++)
          Ht(of[i], l);
        break;
      case "image":
        Ht("error", l), Ht("load", l);
        break;
      case "details":
        Ht("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ht("error", l), Ht("load", l);
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
        for (_ in u)
          if (u.hasOwnProperty(_) && (i = u[_], i != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(137, n));
              default:
                oe(l, n, _, i, u, null);
            }
        return;
      default:
        if (gm(n)) {
          for (q in u)
            u.hasOwnProperty(q) && (i = u[q], i !== void 0 && Fy(
              l,
              n,
              q,
              i,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (i = u[v], i != null && oe(l, n, v, i, u, null));
  }
  function Iy(l, n, u, i) {
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
        var s = null, r = null, m = null, v = null, T = null, _ = null, q = null;
        for (x in u) {
          var Q = u[x];
          if (u.hasOwnProperty(x) && Q != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = Q;
              default:
                i.hasOwnProperty(x) || oe(l, n, x, null, i, Q);
            }
        }
        for (var C in i) {
          var x = i[C];
          if (Q = u[C], i.hasOwnProperty(C) && (x != null || Q != null))
            switch (C) {
              case "type":
                r = x;
                break;
              case "name":
                s = x;
                break;
              case "checked":
                _ = x;
                break;
              case "defaultChecked":
                q = x;
                break;
              case "value":
                m = x;
                break;
              case "defaultValue":
                v = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(M(137, n));
                break;
              default:
                x !== Q && oe(
                  l,
                  n,
                  C,
                  x,
                  i,
                  Q
                );
            }
        }
        If(
          l,
          m,
          v,
          T,
          _,
          q,
          r,
          s
        );
        return;
      case "select":
        x = m = v = C = null;
        for (r in u)
          if (T = u[r], u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                x = T;
              default:
                i.hasOwnProperty(r) || oe(
                  l,
                  n,
                  r,
                  null,
                  i,
                  T
                );
            }
        for (s in i)
          if (r = i[s], T = u[s], i.hasOwnProperty(s) && (r != null || T != null))
            switch (s) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== T && oe(
                  l,
                  n,
                  s,
                  r,
                  i,
                  T
                );
            }
        n = v, u = m, i = x, C != null ? So(l, !!u, C, !1) : !!i != !!u && (n != null ? So(l, !!u, n, !0) : So(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        x = C = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                oe(l, n, v, null, i, s);
            }
        for (m in i)
          if (s = i[m], r = u[m], i.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                x = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(M(91));
                break;
              default:
                s !== r && oe(l, n, m, s, i, r);
            }
        pm(l, C, x);
        return;
      case "option":
        for (var P in u)
          C = u[P], u.hasOwnProperty(P) && C != null && !i.hasOwnProperty(P) && (P === "selected" ? l.selected = !1 : oe(
            l,
            n,
            P,
            null,
            i,
            C
          ));
        for (T in i)
          C = i[T], x = u[T], i.hasOwnProperty(T) && C !== x && (C != null || x != null) && (T === "selected" ? l.selected = C && typeof C != "function" && typeof C != "symbol" : oe(
            l,
            n,
            T,
            C,
            i,
            x
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
        for (var rt in u)
          C = u[rt], u.hasOwnProperty(rt) && C != null && !i.hasOwnProperty(rt) && oe(l, n, rt, null, i, C);
        for (_ in i)
          if (C = i[_], x = u[_], i.hasOwnProperty(_) && C !== x && (C != null || x != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(M(137, n));
                break;
              default:
                oe(
                  l,
                  n,
                  _,
                  C,
                  i,
                  x
                );
            }
        return;
      default:
        if (gm(n)) {
          for (var fe in u)
            C = u[fe], u.hasOwnProperty(fe) && C !== void 0 && !i.hasOwnProperty(fe) && Fy(
              l,
              n,
              fe,
              void 0,
              i,
              C
            );
          for (q in i)
            C = i[q], x = u[q], !i.hasOwnProperty(q) || C === x || C === void 0 && x === void 0 || Fy(
              l,
              n,
              q,
              C,
              i,
              x
            );
          return;
        }
    }
    for (var R in u)
      C = u[R], u.hasOwnProperty(R) && C != null && !i.hasOwnProperty(R) && oe(l, n, R, null, i, C);
    for (Q in i)
      C = i[Q], x = u[Q], !i.hasOwnProperty(Q) || C === x || C == null && x == null || oe(l, n, Q, C, i, x);
  }
  function dh(l) {
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
  function Py() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), i = 0; i < u.length; i++) {
        var s = u[i], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && dh(m)) {
          for (m = 0, v = s.responseEnd, i += 1; i < u.length; i++) {
            var T = u[i], _ = T.startTime;
            if (_ > v) break;
            var q = T.transferSize, Q = T.initiatorType;
            q && dh(Q) && (T = T.responseEnd, m += q * (T < v ? 1 : (v - _) / (T - _)));
          }
          if (--i, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var hh = null, mh = null;
  function Lc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Dv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function t0(l, n) {
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
  function sf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var yh = null;
  function Fg() {
    var l = window.event;
    return l && l.type === "popstate" ? l === yh ? !1 : (yh = l, !0) : (yh = null, !1);
  }
  var ar = typeof setTimeout == "function" ? setTimeout : void 0, Ov = typeof clearTimeout == "function" ? clearTimeout : void 0, Li = typeof Promise == "function" ? Promise : void 0, Mv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Li < "u" ? function(l) {
    return Li.resolve(null).then(l).catch(e0);
  } : ar;
  function e0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function xn(l) {
    return l === "head";
  }
  function l0(l, n) {
    var u = n, i = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (i === 0) {
            l.removeChild(s), Ef(n);
            return;
          }
          i--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          i++;
        else if (u === "html")
          wi(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, wi(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[Jn] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && wi(l.ownerDocument.body);
      u = s;
    } while (u);
    Ef(n);
  }
  function $e(l, n) {
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
  function nr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nr(u), Zr(u);
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
  function Ig(l, n, u, i) {
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
  function Dt(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ia(l.nextSibling), l === null)) return null;
    return l;
  }
  function Rv(l, n) {
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
  function rf(l, n) {
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
  var ur = null;
  function ph(l) {
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
  function qn(l) {
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
  function df(l, n, u) {
    switch (n = Lc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(M(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(M(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(M(454));
        return l;
      default:
        throw Error(M(451));
    }
  }
  function wi(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Zr(l);
  }
  var va = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ new Set();
  function Xl(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Yn = V.d;
  V.d = {
    f: Pg,
    r: Uv,
    D: N,
    C: Wt,
    L: t1,
    m: a0,
    X: nc,
    S: n0,
    M: Jc
  };
  function Pg() {
    var l = Yn.f(), n = lf();
    return l || n;
  }
  function Uv(l) {
    var n = ui(l);
    n !== null && n.tag === 5 && n.type === "form" ? ce(n) : Yn.r(l);
  }
  var hf = typeof document > "u" ? null : document;
  function Pe(l, n, u) {
    var i = hf;
    if (i && typeof n == "string" && n) {
      var s = za(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), cr.has(s) || (cr.add(s), l = { rel: l, crossOrigin: u, href: n }, i.querySelector(s) === null && (n = i.createElement("link"), Ul(n, "link", l), Ft(n), i.head.appendChild(n)));
    }
  }
  function N(l) {
    Yn.D(l), Pe("dns-prefetch", l, null);
  }
  function Wt(l, n) {
    Yn.C(l, n), Pe("preconnect", l, n);
  }
  function t1(l, n, u) {
    Yn.L(l, n, u);
    var i = hf;
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
          r = ja(l);
          break;
        case "script":
          r = Ji(l);
      }
      va.has(r) || (l = st(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), va.set(r, l), i.querySelector(s) !== null || n === "style" && i.querySelector(Kc(r)) || n === "script" && i.querySelector(pf(r)) || (n = i.createElement("link"), Ul(n, "link", l), Ft(n), i.head.appendChild(n)));
    }
  }
  function a0(l, n) {
    Yn.m(l, n);
    var u = hf;
    if (u && l) {
      var i = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + za(i) + '"][href="' + za(l) + '"]', r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ji(l);
      }
      if (!va.has(r) && (l = st({ rel: "modulepreload", href: l }, n), va.set(r, l), u.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(pf(r)))
              return;
        }
        i = u.createElement("link"), Ul(i, "link", l), Ft(i), u.head.appendChild(i);
      }
    }
  }
  function n0(l, n, u) {
    Yn.S(l, n, u);
    var i = hf;
    if (i && l) {
      var s = ci(i).hoistableStyles, r = ja(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = i.querySelector(
          Kc(r)
        ))
          v.loading = 5;
        else {
          l = st(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = va.get(r)) && vh(l, u);
          var T = m = i.createElement("link");
          Ft(T), Ul(T, "link", l), T._p = new Promise(function(_, q) {
            T.onload = _, T.onerror = q;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, ir(m, n, i);
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
    Yn.X(l, n);
    var u = hf;
    if (u && l) {
      var i = ci(u).hoistableScripts, s = Ji(l), r = i.get(s);
      r || (r = u.querySelector(pf(s)), r || (l = st({ src: l, async: !0 }, n), (n = va.get(s)) && gh(l, n), r = u.createElement("script"), Ft(r), Ul(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function Jc(l, n) {
    Yn.M(l, n);
    var u = hf;
    if (u && l) {
      var i = ci(u).hoistableScripts, s = Ji(l), r = i.get(s);
      r || (r = u.querySelector(pf(s)), r || (l = st({ src: l, async: !0, type: "module" }, n), (n = va.get(s)) && gh(l, n), r = u.createElement("script"), Ft(r), Ul(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function mf(l, n, u, i) {
    var s = (s = Ka.current) ? Xl(s) : null;
    if (!s) throw Error(M(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = ja(u.href), u = ci(
          s
        ).hoistableStyles, i = u.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ja(u.href);
          var r = ci(
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
          }, va.set(l, u), r || _v(
            s,
            l,
            u,
            m.state
          ))), n && i === null)
            throw Error(M(528, ""));
          return m;
        }
        if (n && i !== null)
          throw Error(M(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ji(u), u = ci(
          s
        ).hoistableScripts, i = u.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(M(444, l));
    }
  }
  function ja(l) {
    return 'href="' + za(l) + '"';
  }
  function Kc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function yf(l) {
    return st({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function _v(l, n, u, i) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = l.createElement("link"), i.preload = n, n.addEventListener("load", function() {
      return i.loading |= 1;
    }), n.addEventListener("error", function() {
      return i.loading |= 2;
    }), Ul(n, "link", u), Ft(n), l.head.appendChild(n));
  }
  function Ji(l) {
    return '[src="' + za(l) + '"]';
  }
  function pf(l) {
    return "script[async]" + l;
  }
  function u0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var i = l.querySelector(
            'style[data-href~="' + za(u.href) + '"]'
          );
          if (i)
            return n.instance = i, Ft(i), i;
          var s = st({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return i = (l.ownerDocument || l).createElement(
            "style"
          ), Ft(i), Ul(i, "style", s), ir(i, u.precedence, l), n.instance = i;
        case "stylesheet":
          s = ja(u.href);
          var r = l.querySelector(
            Kc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Ft(r), r;
          i = yf(u), (s = va.get(s)) && vh(i, s), r = (l.ownerDocument || l).createElement("link"), Ft(r);
          var m = r;
          return m._p = new Promise(function(v, T) {
            m.onload = v, m.onerror = T;
          }), Ul(r, "link", i), n.state.loading |= 4, ir(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ji(u.src), (s = l.querySelector(
            pf(r)
          )) ? (n.instance = s, Ft(s), s) : (i = u, (s = va.get(r)) && (i = st({}, u), gh(i, s)), l = l.ownerDocument || l, s = l.createElement("script"), Ft(s), Ul(s, "link", i), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(M(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, ir(i, u.precedence, l));
    return n.instance;
  }
  function ir(l, n, u) {
    for (var i = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, r = s, m = 0; m < i.length; m++) {
      var v = i[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function vh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function gh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var vf = null;
  function c0(l, n, u) {
    if (vf === null) {
      var i = /* @__PURE__ */ new Map(), s = vf = /* @__PURE__ */ new Map();
      s.set(u, i);
    } else
      s = vf, i = s.get(u), i || (i = /* @__PURE__ */ new Map(), s.set(u, i));
    if (i.has(l)) return i;
    for (i.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Jn] || r[ue] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = i.get(m);
        v ? v.push(r) : i.set(m, [r]);
      }
    }
    return i;
  }
  function Sh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function i0(l, n, u) {
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
        var s = ja(i.href), r = n.querySelector(
          Kc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = bh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Ft(r);
          return;
        }
        r = n.ownerDocument || n, i = yf(i), (s = va.get(s)) && vh(i, s), r = r.createElement("link"), Ft(r);
        var m = r;
        m._p = new Promise(function(v, T) {
          m.onload = v, m.onerror = T;
        }), Ul(r, "link", i), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = bh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Ga = 0;
  function o0(l, n) {
    return l.stylesheets && l.count === 0 && Eh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var i = setTimeout(function() {
        if (l.stylesheets && Eh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Ga === 0 && (Ga = 62500 * Py());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Eh(l, l.stylesheets), l.unsuspend)) {
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
  function bh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Eh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Th = null;
  function Eh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Th = /* @__PURE__ */ new Map(), n.forEach(vl, l), Th = null, bh.call(l));
  }
  function vl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Th.get(l);
      if (u) var i = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Th.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), i = m);
        }
        i && u.set(null, i);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || i, r === i && u.set(null, s), u.set(m, s), this.count++, i = bh.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var or = {
    $$typeof: Qe,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function f0(l, n, u, i, s, r, m, v, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wf(0), this.hiddenUpdates = Wf(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ah(l, n, u, i, s, r, m, v, T, _, q, Q) {
    return l = new f0(
      l,
      n,
      u,
      m,
      T,
      _,
      q,
      Q,
      v
    ), n = 1, r === !0 && (n |= 24), r = qe(3, null, null, n), l.current = r, r.stateNode = l, n = ps(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: i,
      isDehydrated: u,
      cache: n
    }, As(r), l;
  }
  function Ki(l) {
    return l ? (l = kl, l) : kl;
  }
  function Cv(l, n, u, i, s, r) {
    s = Ki(s), i.context === null ? i.context = s : i.pendingContext = s, i = $u(n), i.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (i.callback = r), u = Ca(l, i, n), u !== null && (ca(u, l, n), Cc(u, l, n));
  }
  function zh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function s0(l, n) {
    zh(l, n), (l = l.alternate) && zh(l, n);
  }
  function Hv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Qu(l, 67108864);
      n !== null && ca(n, l, 67108864), s0(l, 67108864);
    }
  }
  function $i(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = pa();
      n = Xr(n);
      var u = Qu(l, n);
      u !== null && ca(u, l, n), s0(l, n);
    }
  }
  var nl = !0;
  function bu(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = V.p;
    try {
      V.p = 2, _l(l, n, u, i);
    } finally {
      V.p = r, O.T = s;
    }
  }
  function Tu(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = V.p;
    try {
      V.p = 8, _l(l, n, u, i);
    } finally {
      V.p = r, O.T = s;
    }
  }
  function _l(l, n, u, i) {
    if (nl) {
      var s = r0(i);
      if (s === null)
        Ky(
          l,
          n,
          i,
          Dh,
          u
        ), uc(l, i);
      else if (e1(
        s,
        l,
        n,
        u,
        i
      ))
        i.stopPropagation();
      else if (uc(l, i), n & 4 && -1 < oa.indexOf(l)) {
        for (; s !== null; ) {
          var r = ui(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = Wa(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Jl(m);
                      v.entanglements[1] |= T, m &= ~T;
                    }
                    gu(r), (wt & 6) === 0 && ($t = Ml() + 500, ac(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = Qu(r, 2), v !== null && ca(v, r, 2), lf(), s0(r, 2);
            }
          if (r = r0(i), r === null && Ky(
            l,
            n,
            i,
            Dh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else
        Ky(
          l,
          n,
          i,
          null,
          u
        );
    }
  }
  function r0(l) {
    return l = kr(l), gf(l);
  }
  var Dh = null;
  function gf(l) {
    if (Dh = null, l = ni(l), l !== null) {
      var n = Bt(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = kt(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = L(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Dh = l, null;
  }
  function fr(l) {
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
        switch (Gg()) {
          case Yr:
            return 2;
          case jr:
            return 8;
          case dc:
          case Xg:
            return 32;
          case om:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Sf = !1, ul = null, Cl = null, Ql = null, $c = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), De = [], oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function uc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        ul = null;
        break;
      case "dragenter":
      case "dragleave":
        Cl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ql = null;
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
  function Wi(l, n, u, i, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: i,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = ui(n), n !== null && Hv(n)), l) : (l.eventSystemFlags |= i, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function e1(l, n, u, i, s) {
    switch (n) {
      case "focusin":
        return ul = Wi(
          ul,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "dragenter":
        return Cl = Wi(
          Cl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "mouseover":
        return Ql = Wi(
          Ql,
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
          Wi(
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
          Wi(
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
  function Bv(l) {
    var n = ni(l.target);
    if (n !== null) {
      var u = Bt(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = kt(u), n !== null) {
            l.blockedOn = n, rm(l.priority, function() {
              $i(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = L(u), n !== null) {
            l.blockedOn = n, rm(l.priority, function() {
              $i(u);
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
  function sr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = r0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var i = new u.constructor(
          u.type,
          u
        );
        Wr = i, u.target.dispatchEvent(i), Wr = null;
      } else
        return n = ui(u), n !== null && Hv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function bf(l, n, u) {
    sr(l) && u.delete(n);
  }
  function Nv() {
    Sf = !1, ul !== null && sr(ul) && (ul = null), Cl !== null && sr(Cl) && (Cl = null), Ql !== null && sr(Ql) && (Ql = null), $c.forEach(bf), fn.forEach(bf);
  }
  function Eu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Sf || (Sf = !0, G.unstable_scheduleCallback(
      G.unstable_NormalPriority,
      Nv
    )));
  }
  var Tf = null;
  function xv(l) {
    Tf !== l && (Tf = l, G.unstable_scheduleCallback(
      G.unstable_NormalPriority,
      function() {
        Tf === l && (Tf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], i = l[n + 1], s = l[n + 2];
          if (typeof i != "function") {
            if (gf(i || u) === null)
              continue;
            break;
          }
          var r = ui(u);
          r !== null && (l.splice(n, 3), n -= 3, Zo(
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
  function Ef(l) {
    function n(T) {
      return Eu(T, l);
    }
    ul !== null && Eu(ul, l), Cl !== null && Eu(Cl, l), Ql !== null && Eu(Ql, l), $c.forEach(n), fn.forEach(n);
    for (var u = 0; u < De.length; u++) {
      var i = De[u];
      i.blockedOn === l && (i.blockedOn = null);
    }
    for (; 0 < De.length && (u = De[0], u.blockedOn === null); )
      Bv(u), u.blockedOn === null && De.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (i = 0; i < u.length; i += 3) {
        var s = u[i], r = u[i + 1], m = s[Kl] || null;
        if (typeof r == "function")
          m || xv(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Kl] || null)
              v = m.formAction;
            else if (gf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[i + 1] = v : (u.splice(i, 3), i -= 3), xv(u);
        }
      }
  }
  function d0() {
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
  function Oh(l) {
    this._internalRoot = l;
  }
  Mh.prototype.render = Oh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(M(409));
    var u = n.current, i = pa();
    Cv(u, i, l, n, null, null);
  }, Mh.prototype.unmount = Oh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Cv(l.current, 2, null, l, null, null), lf(), n[mc] = null;
    }
  };
  function Mh(l) {
    this._internalRoot = l;
  }
  Mh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Qr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < De.length && n !== 0 && n < De[u].priority; u++) ;
      De.splice(u, 0, l), u === 0 && Bv(l);
    }
  };
  var h0 = $.version;
  if (h0 !== "19.2.4")
    throw Error(
      M(
        527,
        h0,
        "19.2.4"
      )
    );
  V.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(M(188)) : (l = Object.keys(l).join(","), Error(M(268, l)));
    return l = ae(n), l = l !== null ? Dl(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var qv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rr.isDisabled && rr.supportsFiber)
      try {
        li = rr.inject(
          qv
        ), sa = rr;
      } catch {
      }
  }
  return ip.createRoot = function(l, n) {
    if (!tt(l)) throw Error(M(299));
    var u = !1, i = "", s = jd, r = my, m = Gd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Ah(
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
      d0
    ), l[mc] = n.current, ff(l), new Oh(n);
  }, ip.hydrateRoot = function(l, n, u) {
    if (!tt(l)) throw Error(M(299));
    var i = !1, s = "", r = jd, m = my, v = Gd, T = null;
    return u != null && (u.unstable_strictMode === !0 && (i = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Ah(
      l,
      1,
      !0,
      n,
      u ?? null,
      i,
      s,
      T,
      r,
      m,
      v,
      d0
    ), n.context = Ki(null), u = n.current, i = pa(), i = Xr(i), s = $u(i), s.callback = null, Ca(u, s, i), u = i, n.current.lanes = u, mo(n, u), gu(n), l[mc] = n.current, ff(l), new Mh(n);
  }, ip.version = "19.2.4", ip;
}
var op = {};
var x2;
function CE() {
  return x2 || (x2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function G(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function $(t, e, a, c) {
      if (a >= e.length) return c;
      var o = e[a], f = Pe(t) ? t.slice() : Dt({}, t);
      return f[o] = $(t[o], e, a + 1, c), f;
    }
    function W(t, e, a) {
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
        return M(t, e, a, 0);
      }
    }
    function M(t, e, a, c) {
      var o = e[c], f = Pe(t) ? t.slice() : Dt({}, t);
      return c + 1 === e.length ? (f[a[c]] = f[o], Pe(f) ? f.splice(o, 1) : delete f[o]) : f[o] = M(
        t[o],
        e,
        a,
        c + 1
      ), f;
    }
    function tt(t, e, a) {
      var c = e[a], o = Pe(t) ? t.slice() : Dt({}, t);
      return a + 1 === e.length ? (Pe(o) ? o.splice(c, 1) : delete o[c], o) : (o[c] = tt(t[c], e, a + 1), o);
    }
    function Bt() {
      return !1;
    }
    function kt() {
      return null;
    }
    function L() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function re() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function ae() {
    }
    function Dl() {
    }
    function st(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function Nt(t, e, a, c) {
      return new Kg(t, e, a, c);
    }
    function Ue(t, e) {
      t.context === Of && (rh(t.current, 2, e, t, null, null), qa());
    }
    function _e(t, e) {
      if (Du !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, Vs(), Mp(
          t.current,
          e,
          a
        ), qa();
      }
    }
    function Nl(t) {
      Du = t;
    }
    function ge(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function le(t) {
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
    function Qe(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Ol(t) {
      if (le(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function ba(t) {
      var e = t.alternate;
      if (!e) {
        if (e = le(t), e === null)
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
            if (f === a) return Ol(o), t;
            if (f === c) return Ol(o), e;
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
    function xl(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = xl(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function ke(t) {
      return t === null || typeof t != "object" ? null : (t = Uv && t[Uv] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function jt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === hf ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case rf:
          return "Fragment";
        case ur:
          return "Profiler";
        case ia:
          return "StrictMode";
        case wi:
          return "Suspense";
        case va:
          return "SuspenseList";
        case Yn:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case wc:
            return "Portal";
          case qn:
            return t.displayName || "Context";
          case ph:
            return (t._context.displayName || "Context") + ".Consumer";
          case df:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case cr:
            return e = t.displayName || null, e !== null ? e : jt(t.type) || "Memo";
          case Xl:
            e = t._payload, t = t._init;
            try {
              return jt(t(e));
            } catch {
            }
        }
      return null;
    }
    function ol(t) {
      return typeof t.tag == "number" ? nt(t) : typeof t.name == "string" ? t.name : null;
    }
    function nt(t) {
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
          return jt(e);
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
            return nt(t.return);
      }
      return null;
    }
    function Ve(t) {
      return { current: t };
    }
    function xt(t, e) {
      0 > nc ? console.error("Unexpected pop.") : (e !== n0[nc] && console.error("Unexpected Fiber popped."), t.current = a0[nc], a0[nc] = null, n0[nc] = null, nc--);
    }
    function Ut(t, e, a) {
      nc++, a0[nc] = t.current, n0[nc] = a, t.current = e;
    }
    function ql(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function fl(t, e) {
      Ut(ja, e, t), Ut(mf, t, t), Ut(Jc, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? lv(e) : fo;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = lv(e), e = ec(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = am;
                break;
              case "math":
                e = Mg;
                break;
              default:
                e = fo;
            }
      }
      a = a.toLowerCase(), a = ym(null, a), a = {
        context: e,
        ancestorInfo: a
      }, xt(Jc, t), Ut(Jc, a, t);
    }
    function O(t) {
      xt(Jc, t), xt(mf, t), xt(ja, t);
    }
    function V() {
      return ql(Jc.current);
    }
    function w(t) {
      t.memoizedState !== null && Ut(Kc, t, t);
      var e = ql(Jc.current), a = t.type, c = ec(e.context, a);
      a = ym(e.ancestorInfo, a), c = { context: c, ancestorInfo: a }, e !== c && (Ut(mf, t, t), Ut(Jc, c, t));
    }
    function ft(t) {
      mf.current === t && (xt(Jc, t), xt(mf, t)), Kc.current === t && (xt(Kc, t), lp._currentValue = Nr);
    }
    function mt() {
    }
    function j() {
      if (yf === 0) {
        _v = console.log, Ji = console.info, pf = console.warn, u0 = console.error, ir = console.group, vh = console.groupCollapsed, gh = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: mt,
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
      yf++;
    }
    function I() {
      if (yf--, yf === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Dt({}, t, { value: _v }),
          info: Dt({}, t, { value: Ji }),
          warn: Dt({}, t, { value: pf }),
          error: Dt({}, t, { value: u0 }),
          group: Dt({}, t, { value: ir }),
          groupCollapsed: Dt({}, t, { value: vh }),
          groupEnd: Dt({}, t, { value: gh })
        });
      }
      0 > yf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function at(t) {
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
    function ut(t) {
      if (vf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          vf = e && e[1] || "", c0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + vf + t + c0;
    }
    function xe(t, e) {
      if (!t || Sh) return "";
      var a = i0.get(t);
      if (a !== void 0) return a;
      Sh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var c = null;
      c = N.H, N.H = null, j();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var S = function() {
                  throw Error();
                };
                if (Object.defineProperty(S.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(S, []);
                  } catch (J) {
                    var H = J;
                  }
                  Reflect.construct(t, [], S);
                } else {
                  try {
                    S.call();
                  } catch (J) {
                    H = J;
                  }
                  t.call(S.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (J) {
                  H = J;
                }
                (S = t()) && typeof S.catch == "function" && S.catch(function() {
                });
              }
            } catch (J) {
              if (J && H && typeof J.stack == "string")
                return [J.stack, H.stack];
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
`), A = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < A.length && !A[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === A.length)
            for (f = p.length - 1, d = A.length - 1; 1 <= f && 0 <= d && p[f] !== A[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== A[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== A[d]) {
                    var D = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), typeof t == "function" && i0.set(t, D), D;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Sh = !1, N.H = c, I(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? ut(p) : "", typeof t == "function" && i0.set(t, p), p;
    }
    function Ka(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return ut(t.type);
        case 16:
          return ut("Lazy");
        case 13:
          return t.child !== e && e !== null ? ut("Suspense Fallback") : ut("Suspense");
        case 19:
          return ut("SuspenseList");
        case 0:
        case 15:
          return xe(t.type, !1);
        case 11:
          return xe(t.type.render, !1);
        case 1:
          return xe(t.type, !0);
        case 31:
          return ut("Activity");
        default:
          return "";
      }
    }
    function Se(t) {
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
                    var A = at(p), D = A.lastIndexOf(`
`), S = D === -1 ? A : A.slice(D + 1);
                    if (S.indexOf(h) !== -1) {
                      var H = `
` + S;
                      break t;
                    }
                  }
                  H = ut(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                e = d + H;
              }
            }
          a = t, t = t.return;
        } while (t);
        return e;
      } catch (J) {
        return `
Error generating stack: ` + J.message + `
` + J.stack;
      }
    }
    function $a(t) {
      return (t = t ? t.displayName || t.name : "") ? ut(t) : "";
    }
    function Ta() {
      if (ga === null) return null;
      var t = ga._debugOwner;
      return t != null ? ol(t) : null;
    }
    function Jf() {
      if (ga === null) return "";
      var t = ga;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += ut(t.type);
            break;
          case 13:
            e += ut("Suspense");
            break;
          case 19:
            e += ut("SuspenseList");
            break;
          case 31:
            e += ut("Activity");
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
              var o = at(c);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + at(f));
          } else break;
        var d = e;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function F(t, e, a, c, o, f, d) {
      var h = ga;
      Kf(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, c, o, f, d)
        ) : e(a, c, o, f, d);
      } finally {
        Kf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Kf(t) {
      N.getCurrentStack = t === null ? null : Jf, Su = !1, ga = t;
    }
    function $f(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function Ln(t) {
      try {
        return ti(t), !1;
      } catch {
        return !0;
      }
    }
    function ti(t) {
      return "" + t;
    }
    function ne(t, e) {
      if (Ln(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          $f(t)
        ), ti(t);
    }
    function um(t, e) {
      if (Ln(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          $f(t)
        ), ti(t);
    }
    function xr(t) {
      if (Ln(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          $f(t)
        ), ti(t);
    }
    function cm(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        $i = e.inject(t), nl = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function de(t) {
      if (typeof s0 == "function" && Hv(t), nl && typeof nl.setStrictMode == "function")
        try {
          nl.setStrictMode($i, t);
        } catch (e) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function im(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (r0(t) / Dh | 0) | 0;
    }
    function ei(t) {
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
    function qr(t, e, a) {
      var c = t.pendingLanes;
      if (c === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = c & 134217727;
      return h !== 0 ? (c = h & ~f, c !== 0 ? o = ei(c) : (d &= h, d !== 0 ? o = ei(d) : a || (a = h & ~t, a !== 0 && (o = ei(a))))) : (h = c & ~f, h !== 0 ? o = ei(h) : d !== 0 ? o = ei(d) : a || (a = c & ~t, a !== 0 && (o = ei(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function Ml(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Gg(t, e) {
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
    function Yr() {
      var t = Sf;
      return Sf <<= 1, (Sf & 62914560) === 0 && (Sf = 4194304), t;
    }
    function jr(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function dc(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Xg(t, e, a, c, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var A = 31 - _l(a), D = 1 << A;
        h[A] = 0, y[A] = -1;
        var S = p[A];
        if (S !== null)
          for (p[A] = null, A = 0; A < S.length; A++) {
            var H = S[A];
            H !== null && (H.lane &= -536870913);
          }
        a &= ~D;
      }
      c !== 0 && om(t, c, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function om(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var c = 31 - _l(e);
      t.entangledLanes |= e, t.entanglements[c] = t.entanglements[c] | 1073741824 | a & 261930;
    }
    function fp(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var c = 31 - _l(a), o = 1 << c;
        o & e | t[c] & e && (t[c] |= e), a &= ~o;
      }
    }
    function sp(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : li(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function li(t) {
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
      if (Tu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var c = 31 - _l(a), o = 1 << c;
          t[c].add(e), a &= ~o;
        }
    }
    function xu(t, e) {
      if (Tu)
        for (var a = t.pendingUpdatersLaneMap, c = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - _l(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && c.has(d) || c.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function Jl(t) {
      return t &= -t, ul < t ? Cl < t ? (t & 134217727) !== 0 ? Ql : $c : Cl : ul;
    }
    function rp() {
      var t = Wt.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? Ql : hh(t.type));
    }
    function dp(t, e) {
      var a = Wt.p;
      try {
        return Wt.p = t, e();
      } finally {
        Wt.p = a;
      }
    }
    function fm(t) {
      delete t[De], delete t[oa], delete t[Wi], delete t[e1], delete t[Bv];
    }
    function qu(t) {
      var e = t[De];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[uc] || a[De]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = Qi(t); t !== null; ) {
              if (a = t[De])
                return a;
              t = Qi(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function hn(t) {
      if (t = t[De] || t[uc]) {
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
      var e = t[sr];
      return e || (e = t[sr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function Ze(t) {
      t[bf] = !0;
    }
    function mn(t, e) {
      ho(t, e), ho(t + "Capture", e);
    }
    function ho(t, e) {
      Eu[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), Eu[t] = e;
      var a = t.toLowerCase();
      for (Tf[a] = t, t === "onDoubleClick" && (Tf.ondblclick = t), t = 0; t < e.length; t++)
        Nv.add(e[t]);
    }
    function ai(t, e) {
      xv[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Wf(t) {
      return Ga.call(Oh, t) ? !0 : Ga.call(d0, t) ? !1 : Ef.test(t) ? Oh[t] = !0 : (d0[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function mo(t, e, a) {
      if (Wf(e)) {
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
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (ne(a, e), t === "" + a ? a : t);
      }
    }
    function Gr(t, e, a) {
      if (Wf(e))
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
          ne(a, e), t.setAttribute(e, "" + a);
        }
    }
    function kf(t, e, a) {
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
        ne(a, e), t.setAttribute(e, "" + a);
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
        ne(c, a), t.setAttributeNS(e, a, "" + c);
      }
    }
    function Ea(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return xr(t), t;
        default:
          return "";
      }
    }
    function Xr(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function sm(t, e, a) {
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
            xr(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: c.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            xr(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function Qr(t) {
      if (!t._valueTracker) {
        var e = Xr(t) ? "checked" : "value";
        t._valueTracker = sm(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function rm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), c = "";
      return t && (c = Xr(t) ? t.checked ? "true" : "false" : t.value), t = c, t !== a ? (e.setValue(t), !0) : !1;
    }
    function yn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function ue(t) {
      return t.replace(
        Mh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Kl(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || qv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ta() || "A component",
        e.type
      ), qv = !0), e.value === void 0 || e.defaultValue === void 0 || h0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ta() || "A component",
        e.type
      ), h0 = !0);
    }
    function mc(t, e, a, c, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (ne(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ea(e)) : t.value !== "" + Ea(e) && (t.value = "" + Ea(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? dm(t, d, Ea(e)) : a != null ? dm(t, d, Ea(a)) : c != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (ne(h, "name"), t.name = "" + Ea(h)) : t.removeAttribute("name");
    }
    function Vr(t, e, a, c, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (ne(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          Qr(t);
          return;
        }
        a = a != null ? "" + Ea(a) : "", e = e != null ? "" + Ea(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      c = c ?? o, c = typeof c != "function" && typeof c != "symbol" && !!c, t.checked = h ? t.checked : !!c, t.defaultChecked = !!c, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (ne(d, "name"), t.name = d), Qr(t);
    }
    function dm(t, e, a) {
      e === "number" && yn(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function hp(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? nr.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || rr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), rr = !0);
    }
    function hm() {
      var t = Ta();
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
        for (a = "" + Ea(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, c && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Zr(t, e) {
      for (t = 0; t < i.length; t++) {
        var a = i[t];
        if (e[a] != null) {
          var c = Pe(e[a]);
          e.multiple && !c ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            hm()
          ) : !e.multiple && c && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            hm()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function ni(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ta() || "A component"
      ), s = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function ui(t, e, a) {
      if (e != null && (e = "" + Ea(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + Ea(a) : "";
    }
    function yo(t, e, a, c) {
      if (e == null) {
        if (c != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Pe(c)) {
            if (1 < c.length)
              throw Error("<textarea> can only have at most one child.");
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), e = a;
      }
      a = Ea(e), t.defaultValue = a, c = t.textContent, c === a && c !== "" && c !== null && (t.value = c), Qr(t);
    }
    function ci(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? ci(t.children[0], e) : t;
    }
    function Ft(t) {
      return "  " + "  ".repeat(t);
    }
    function ii(t) {
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
    function Lr(t, e, a) {
      var c = 120 - 2 * a;
      if (e === null)
        return ii(a) + Kn(t, c) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > c - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), ii(a) + Kn(t, c) + `
` + yc(a) + Kn(e, c) + `
`;
      }
      return Ft(a) + Kn(t, c) + `
`;
    }
    function wr(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function po(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (Pe(t)) return "[...]";
          if (t.$$typeof === on)
            return (e = jt(t.type)) ? "<" + e + ">" : "<...>";
          var a = wr(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var c in t)
              if (t.hasOwnProperty(c)) {
                var o = JSON.stringify(c);
                if (o !== '"' + c + '"' && (c = o), e -= c.length - 2, o = po(
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
    function vo(t, e) {
      return typeof t != "string" || r.test(t) ? "{" + po(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function go(t, e, a) {
      var c = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = vo(
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
    function Jr(t, e, a) {
      var c = "", o = Dt({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = po(t[f], d);
          e.hasOwnProperty(f) ? (d = po(e[f], d), c += ii(a) + f + ": " + h + `
`, c += yc(a) + f + ": " + d + `
`) : c += ii(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = po(
          o[y],
          120 - 2 * a - y.length - 2
        ), c += yc(a) + y + ": " + t + `
`);
      return c;
    }
    function Yu(t, e, a, c) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += go(
          t,
          e,
          Ft(c)
        );
      else {
        for (var d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (c + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = e[d];
              y = a[y];
              var A = vo(
                p,
                h
              );
              h = vo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && wr(p) === "Object" && wr(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < A.indexOf("...") || -1 < h.indexOf("...")) ? o += Ft(c + 1) + d + `={{
` + Jr(
                p,
                y,
                c + 2
              ) + Ft(c + 1) + `}}
` : (o += ii(c + 1) + d + "=" + A + `
`, o += yc(c + 1) + d + "=" + h + `
`);
            } else
              o += Ft(c + 1) + d + "=" + vo(e[d], h) + `
`;
          }
        f.forEach(function(D) {
          if (D !== "children") {
            var S = 120 - 2 * (c + 1) - D.length - 1;
            o += yc(c + 1) + D + "=" + vo(a[D], S) + `
`;
          }
        }), o = o === "" ? Ft(c) + "<" + t + `>
` : Ft(c) + "<" + t + `
` + o + Ft(c) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += Lr(f, "" + t, c + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + Lr("" + e, null, c + 1) : o + Lr("" + e, void 0, c + 1)), o;
    }
    function Aa(t, e) {
      var a = pc(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += Aa(t, e), t = t.sibling;
        return a;
      }
      return Ft(e) + "<" + a + `>
`;
    }
    function Kr(t, e) {
      var a = ci(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return Ft(e) + `...
` + Kr(a, e + 1);
      a = "";
      var c = t.fiber._debugInfo;
      if (c)
        for (var o = 0; o < c.length; o++) {
          var f = c[o].name;
          typeof f == "string" && (a += Ft(e) + "<" + f + `>
`, e++);
        }
      if (c = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        c = Lr(o, t.serverProps, e), e++;
      else if (f = pc(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          c = e;
          var d = 120 - 2 * c - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = vo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          c = Ft(c) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (c = go(
            f,
            o,
            ii(e)
          ), e++) : typeof t.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (c = Yu(
            f,
            o,
            t.serverProps,
            e
          ), e++);
      var p = "";
      for (o = t.fiber.child, f = 0; o && f < t.children.length; )
        d = t.children[f], d.fiber === o ? (p += Kr(d, e), f++) : p += Aa(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += Ft(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (yc(e) + Kn(f, 120 - 2 * e) + `
`) : p + go(
          f.type,
          f.props,
          yc(e)
        );
      return a + c + p;
    }
    function mm(t) {
      try {
        return `

` + Kr(t, 0);
      } catch {
        return "";
      }
    }
    function $r(t, e, a) {
      for (var c = e, o = null, f = 0; c; )
        c === t && (f = 0), o = {
          fiber: c,
          children: o !== null ? [o] : [],
          serverProps: c === e ? a : c === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, c = c.return;
      return o !== null ? mm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ym(t, e) {
      var a = Dt({}, t || q), c = { tag: e };
      return v.indexOf(e) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), T.indexOf(e) !== -1 && (a.pTagInButtonScope = null), m.indexOf(e) !== -1 && e !== "address" && e !== "div" && e !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = c, e === "form" && (a.formTag = c), e === "a" && (a.aTagInScope = c), e === "button" && (a.buttonTagInScope = c), e === "nobr" && (a.nobrTagInScope = c), e === "p" && (a.pTagInButtonScope = c), e === "li" && (a.listItemTagAutoclosing = c), (e === "dd" || e === "dt") && (a.dlItemTagAutoclosing = c), e === "#document" || e === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = c), t !== null || e !== "#document" && e !== "html" && e !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Ff(t, e, a) {
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
          return _.indexOf(e) === -1;
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
    function Qg(t, e) {
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
    function If(t, e) {
      e = e || q;
      var a = e.current;
      if (e = (a = Ff(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : Qg(t, e), e = a || e, !e) return !0;
      var c = e.tag;
      if (e = String(!!a) + "|" + t + "|" + c, Q[e]) return !1;
      Q[e] = !0;
      var o = (e = ga) ? za(e.return, c) : null, f = e !== null && o !== null ? $r(o, e, null) : "", d = "<" + t + ">";
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
      ), e && (t = e.return, o === null || t === null || o === t && t._debugOwner === e._debugOwner || F(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          c,
          d
        );
      })), !1;
    }
    function Pf(t, e, a) {
      if (a || Ff("#text", e, !1))
        return !0;
      if (a = "#text|" + e, Q[a]) return !1;
      Q[a] = !0;
      var c = (a = ga) ? za(a, e) : null;
      return a = a !== null && c !== null ? $r(
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
    function oi(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function So(t) {
      return t.replace(R, function(e, a) {
        return a.toUpperCase();
      });
    }
    function pm(t, e, a) {
      var c = e.indexOf("--") === 0;
      c || (-1 < e.indexOf("-") ? U.hasOwnProperty(e) && U[e] || (U[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        So(e.replace(fe, "ms-"))
      )) : rt.test(e) ? U.hasOwnProperty(e) && U[e] || (U[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !z.test(a) || X.hasOwnProperty(a) && X[a] || (X[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(z, "")
      )), typeof a == "number" && (isNaN(a) ? ct || (ct = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || Zt || (Zt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? c ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : c ? t.setProperty(e, a) : typeof a != "number" || a === 0 || et.has(e) ? e === "float" ? t.cssFloat = a : (um(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function vm(t, e, a) {
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
                for (var f = C[o] || [o], d = 0; d < f.length; d++)
                  c[f[d]] = o;
          }
          for (var h in e)
            if (e.hasOwnProperty(h) && (!a || a[h] !== e[h]))
              for (o = C[h] || [h], f = 0; f < o.length; f++)
                c[o[f]] = h;
          h = {};
          for (var y in e)
            for (o = C[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in c)
            if (o = c[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var A = e[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                A == null || typeof A == "boolean" || A === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var D in a)
          !a.hasOwnProperty(D) || e != null && e.hasOwnProperty(D) || (D.indexOf("--") === 0 ? t.setProperty(D, "") : D === "float" ? t.cssFloat = "" : t[D] = "");
        for (var S in e)
          p = e[S], e.hasOwnProperty(S) && a[S] !== p && pm(t, S, p);
      } else
        for (c in e)
          e.hasOwnProperty(c) && pm(t, c, e[c]);
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
    function mp(t) {
      return Jt.get(t) || t;
    }
    function yp(t, e) {
      if (Ga.call(Rh, e) && Rh[e])
        return !0;
      if (J2.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = Yv.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), Rh[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), Rh[e] = !0;
      }
      if (w2.test(e)) {
        if (t = e.toLowerCase(), t = Yv.hasOwnProperty(t) ? t : null, t == null) return Rh[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), Rh[e] = !0);
      }
      return !0;
    }
    function pp(t, e) {
      var a = [], c;
      for (c in e)
        yp(t, c) || a.push(c);
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
    function gm(t, e, a, c) {
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
        if (SS.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), Xa[e] = !0;
      } else if (SS.test(e))
        return K2.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), Xa[e] = !0;
      if ($2.test(e) || W2.test(e)) return !0;
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
      if (jn.hasOwnProperty(o)) {
        if (o = jn[o], o !== e)
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
    function Vg(t, e, a) {
      var c = [], o;
      for (o in e)
        gm(t, o, e[o], a) || c.push(o);
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
    function ts(t) {
      return k2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function ka() {
    }
    function pn(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function Wr(t) {
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
              for (ne(e, "name"), a = a.querySelectorAll(
                'input[name="' + ue(
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
                c = a[e], c.form === t.form && rm(c);
            }
            break t;
          case "textarea":
            ui(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && Jn(t, !!a.multiple, e, !1);
        }
      }
    }
    function kr(t, e, a) {
      if (l1) return t(e, a);
      l1 = !0;
      try {
        var c = t(e);
        return c;
      } finally {
        if (l1 = !1, (Uh !== null || _h !== null) && (qa(), Uh && (e = Uh, t = _h, _h = Uh = null, Wr(e), t)))
          for (e = 0; e < t.length; e++) Wr(t[e]);
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
    function fi() {
      if (jv) return jv;
      var t, e = n1, a = e.length, c, o = "value" in Af ? Af.value : Af.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (c = 1; c <= d && e[a - c] === o[f - c]; c++) ;
      return jv = o.slice(t, 1 < c ? 1 - c : void 0);
    }
    function es(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function bo() {
      return !0;
    }
    function Sm() {
      return !1;
    }
    function sl(t) {
      function e(a, c, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = c, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? bo : Sm, this.isPropagationStopped = Sm, this;
      }
      return Dt(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = bo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = bo);
        },
        persist: function() {
        },
        isPersistent: bo
      }), e;
    }
    function ju(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = fT[t]) ? !!e[t] : !1;
    }
    function ls() {
      return ju;
    }
    function To(t, e) {
      switch (t) {
        case "keyup":
          return TT.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== AS;
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
    function bm(t, e) {
      switch (t) {
        case "compositionend":
          return Gu(e);
        case "keypress":
          return e.which !== DS ? null : (MS = !0, OS);
        case "textInput":
          return t = e.data, t === OS && MS ? null : t;
        default:
          return null;
      }
    }
    function Fr(t, e) {
      if (Ch)
        return t === "compositionend" || !o1 && To(t, e) ? (t = fi(), jv = n1 = Af = null, Ch = !1, t) : null;
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
          return zS && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function Tm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!AT[t.type] : e === "textarea";
    }
    function Ir(t) {
      if (!Wc) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function as(t, e, a, c) {
      Uh ? _h ? _h.push(c) : _h = [c] : Uh = c, e = Bn(e, "onChange"), 0 < e.length && (a = new Gv(
        "onChange",
        "change",
        null,
        a,
        c
      ), t.push({ event: a, listeners: e }));
    }
    function vp(t) {
      te(t, 0);
    }
    function Rl(t) {
      var e = hc(t);
      if (rm(e)) return t;
    }
    function vc(t, e) {
      if (t === "change") return e;
    }
    function ns() {
      S0 && (S0.detachEvent("onpropertychange", Eo), b0 = S0 = null);
    }
    function Eo(t) {
      if (t.propertyName === "value" && Rl(b0)) {
        var e = [];
        as(
          e,
          b0,
          t,
          pn(t)
        ), kr(vp, e);
      }
    }
    function Zg(t, e, a) {
      t === "focusin" ? (ns(), S0 = e, b0 = a, S0.attachEvent("onpropertychange", Eo)) : t === "focusout" && ns();
    }
    function Em(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Rl(b0);
    }
    function Am(t, e) {
      if (t === "click") return Rl(e);
    }
    function us(t, e) {
      if (t === "input" || t === "change")
        return Rl(e);
    }
    function Pr(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function Ao(t, e) {
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
    function gp(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Sp(t, e) {
      var a = gp(t);
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
        a = gp(a);
      }
    }
    function bp(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? bp(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
    }
    function td(t) {
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
    function zm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function Tp(t, e, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      s1 || Hh == null || Hh !== yn(c) || (c = Hh, "selectionStart" in c && zm(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), T0 && Ao(T0, c) || (T0 = c, c = Bn(f1, "onSelect"), 0 < c.length && (e = new Gv(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: c }), e.target = Hh)));
    }
    function si(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function ri(t) {
      if (r1[t]) return r1[t];
      if (!Bh[t]) return t;
      var e = Bh[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in US)
          return r1[t] = e[a];
      return t;
    }
    function vn(t, e) {
      NS.set(t, e), mn(e, [t]);
    }
    function Ep(t) {
      for (var e = Qv, a = 0; a < t.length; a++) {
        var c = t[a];
        if (typeof c == "object" && c !== null)
          if (Pe(c) && c.length === 2 && typeof c[0] == "string") {
            if (e !== Qv && e !== p1)
              return m1;
            e = p1;
          } else return m1;
        else {
          if (typeof c == "function" || typeof c == "string" && 50 < c.length || e !== Qv && e !== y1)
            return m1;
          e = y1;
        }
      }
      return e;
    }
    function Dm(t, e, a, c) {
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
              var f = jt(e.type) || "…", d = e.key;
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
                p === "children" ? e.children != null && (!Pe(e.children) || 0 < e.children.length) && (t = !0) : Ga.call(e, p) && p[0] !== "_" && kn(
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
              if (p = Ep(e), p === y1 || p === Qv) {
                e = JSON.stringify(e);
                break;
              } else if (p === p1) {
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
            ]), 3 > c && Dm(e, a, c + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === _T ? "…" : JSON.stringify(e);
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
    function Ap(t, e, a, c) {
      var o = !0;
      for (d in t)
        d in e || (a.push([
          Vv + "  ".repeat(c) + d,
          "…"
        ]), o = !1);
      for (var f in e)
        if (f in t) {
          var d = t[f], h = e[f];
          if (d !== h) {
            if (c === 0 && f === "children")
              o = "  ".repeat(c) + f, a.push(
                [Vv + o, "…"],
                [Zv + o, "…"]
              );
            else {
              if (!(3 <= c)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === on) {
                    if (d.type === h.type && d.key === h.key) {
                      d = jt(h.type) || "…", o = "  ".repeat(c) + f, d = "<" + d + " … />", a.push(
                        [Vv + o, d],
                        [Zv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        YS + "  ".repeat(c) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Ap(
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
                    YS + "  ".repeat(c) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              kn(f, d, a, c, Vv), kn(f, h, a, c, Zv);
            }
            o = !1;
          }
        } else
          a.push([
            Zv + "  ".repeat(c) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function gn(t) {
      Vt = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function Fa(t, e, a, c) {
      Oe && (Df.start = e, Df.end = a, ki.color = "warning", ki.tooltipText = c, ki.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          c,
          Df
        )
      ) : performance.measure(c, Df));
    }
    function ed(t, e, a) {
      Fa(t, e, a, "Reconnect");
    }
    function ld(t, e, a, c, o) {
      var f = nt(t);
      if (f !== null && Oe) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        c = 0.5 > h ? c ? "tertiary-light" : "primary-light" : 10 > h ? c ? "tertiary" : "primary" : 100 > h ? c ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [CT], p = Ap(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !zf && (d.lanes & o) === 0 && 100 < t.actualDuration ? (zf = !0, y[0] = HT, ki.color = "warning", ki.tooltipText = jS) : (ki.color = c, ki.tooltipText = f), ki.properties = y, Df.start = e, Df.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Df
          )
        ) : performance.measure(
          "​" + f,
          Df
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
    function Om(t, e, a, c) {
      if (Oe) {
        var o = nt(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < c.length; h++) {
            var y = c[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && kn("key", t.key, d, 0, ""), t.memoizedProps !== null && Dm(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
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
        if (Oe) {
          var f = nt(t);
          if (f !== null) {
            c = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              c.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && kn("key", t.key, c, 0, ""), t.memoizedProps !== null && Dm(t.memoizedProps, c, 0, ""), e = {
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
        f = nt(t), f !== null && Oe && (o = 1 > c ? "secondary-light" : 100 > c ? "secondary" : 500 > c ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
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
    function Lg(t, e, a, c) {
      if (Oe && !(e <= t)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", c ? c.run(
          console.timeStamp.bind(
            console,
            a,
            t,
            e,
            Vt,
            Xt,
            o
          )
        ) : console.timeStamp(
          a,
          t,
          e,
          Vt,
          Xt,
          o
        );
      }
    }
    function zp(t, e, a, c) {
      !Oe || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          t,
          e,
          Vt,
          Xt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        t,
        e,
        Vt,
        Xt,
        a
      ));
    }
    function Dp(t, e, a, c) {
      !Oe || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          t,
          e,
          Vt,
          Xt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        t,
        e,
        Vt,
        Xt,
        a
      ));
    }
    function wg(t, e, a, c, o, f) {
      if (Oe && !(e <= t)) {
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
              track: Vt,
              trackGroup: Xt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", t)
        ) : performance.measure("Recovered", t);
      }
    }
    function Mm(t, e, a, c) {
      !Oe || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          "Errored",
          t,
          e,
          Vt,
          Xt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        t,
        e,
        Vt,
        Xt,
        "error"
      ));
    }
    function Jg(t, e, a, c) {
      !Oe || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          a,
          t,
          e,
          Vt,
          Xt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        t,
        e,
        Vt,
        Xt,
        "secondary-light"
      ));
    }
    function Op(t, e, a, c, o) {
      if (Oe && !(e <= t)) {
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
              track: Vt,
              trackGroup: Xt,
              tooltipText: c ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", t)
        ) : performance.measure("Errored", t);
      }
    }
    function Rm(t, e, a) {
      !Oe || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        Vt,
        Xt,
        "secondary-dark"
      );
    }
    function ad() {
      for (var t = Nh, e = v1 = Nh = 0; e < t; ) {
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
        f !== 0 && Um(a, o, f);
      }
    }
    function zo(t, e, a, c) {
      zu[Nh++] = t, zu[Nh++] = e, zu[Nh++] = a, zu[Nh++] = c, v1 |= c, t.lanes |= c, t = t.alternate, t !== null && (t.lanes |= c);
    }
    function di(t, e, a, c) {
      return zo(t, e, a, c), cs(t);
    }
    function Yl(t, e) {
      return zo(t, null, null, e), cs(t);
    }
    function Um(t, e, a) {
      t.lanes |= a;
      var c = t.alternate;
      c !== null && (c.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, c = f.alternate, c !== null && (c.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & E0 || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - _l(a), t = f.hiddenUpdates, c = t[o], c === null ? t[o] = [e] : c.push(e), e.lane = a | 536870912), f) : null;
    }
    function cs(t) {
      if (W0 > $T)
        throw Rr = W0 = 0, k0 = k1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Rr > WT && (Rr = 0, k0 = null, console.error(
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
    function nd(t) {
      if (Du === null) return t;
      var e = Du(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = gc(t.render), t.render !== e) ? (e = { $$typeof: df, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function _m(t, e) {
      if (Du === null) return !1;
      var a = t.elementType;
      e = e.type;
      var c = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (c = !0);
          break;
        case 0:
          (typeof e == "function" || o === Xl) && (c = !0);
          break;
        case 11:
          (o === df || o === Xl) && (c = !0);
          break;
        case 14:
        case 15:
          (o === cr || o === Xl) && (c = !0);
          break;
        default:
          return !1;
      }
      return !!(c && (t = Du(a), t !== void 0 && t === Du(e)));
    }
    function hi(t) {
      Du !== null && typeof WeakSet == "function" && (xh === null && (xh = /* @__PURE__ */ new WeakSet()), xh.add(t));
    }
    function Mp(t, e, a) {
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
        if (c = !1, y !== null && (y = Du(y), y !== void 0 && (a.has(y) ? c = !0 : e.has(y) && (h === 1 ? c = !0 : p = !0))), xh !== null && (xh.has(t) || o !== null && xh.has(o)) && (c = !0), c && (t._debugNeedsRemount = !0), (c || p) && (o = Yl(t, 2), o !== null && pt(o, t, 2)), f === null || c || Mp(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function Kg(t, e, a, c) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, GS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Cm(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Fn(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = Nt(
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
          a.type = nd(t.type);
      }
      return a;
    }
    function Hm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function mi(t, e, a, c, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        Cm(t) && (d = 1), h = gc(h);
      else if (typeof t == "string")
        d = V(), d = Ev(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case Yn:
            return e = Nt(31, a, e, o), e.elementType = Yn, e.lanes = f, e;
          case rf:
            return yi(
              a.children,
              o,
              f,
              e
            );
          case ia:
            d = 8, o |= Sa, o |= cc;
            break;
          case ur:
            return t = a, c = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = Nt(12, t, e, c | Ot), e.elementType = ur, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case wi:
            return e = Nt(13, a, e, o), e.elementType = wi, e.lanes = f, e;
          case va:
            return e = Nt(19, a, e, o), e.elementType = va, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case qn:
                  d = 10;
                  break t;
                case ph:
                  d = 9;
                  break t;
                case df:
                  d = 11, h = nd(h);
                  break t;
                case cr:
                  d = 14;
                  break t;
                case Xl:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : Pe(t) ? a = "array" : t !== void 0 && t.$$typeof === on ? (a = "<" + (jt(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = c ? ol(c) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = Nt(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = c, e;
    }
    function Sc(t, e, a) {
      return e = mi(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function yi(t, e, a, c) {
      return t = Nt(7, t, c, e), t.lanes = a, t;
    }
    function Do(t, e, a) {
      return t = Nt(6, t, null, e), t.lanes = a, t;
    }
    function Bm(t) {
      var e = Nt(18, null, null, yt);
      return e.stateNode = t, e;
    }
    function ud(t, e, a) {
      return e = Nt(
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
        var a = g1.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: Se(e)
        }, g1.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Se(e)
      };
    }
    function bn(t, e) {
      bc(), qh[Yh++] = A0, qh[Yh++] = Lv, Lv = t, A0 = e;
    }
    function Nm(t, e, a) {
      bc(), Ou[Mu++] = Ii, Ou[Mu++] = Pi, Ou[Mu++] = hr, hr = t;
      var c = Ii;
      t = Pi;
      var o = 32 - _l(c) - 1;
      c &= ~(1 << o), a += 1;
      var f = 32 - _l(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (c & (1 << d) - 1).toString(32), c >>= d, o -= d, Ii = 1 << 32 - _l(e) + o | a << o | c, Pi = f + t;
      } else
        Ii = 1 << f | a << o | c, Pi = t;
    }
    function cd(t) {
      bc(), t.return !== null && (bn(t, 1), Nm(t, 1, 0));
    }
    function id(t) {
      for (; t === Lv; )
        Lv = qh[--Yh], qh[Yh] = null, A0 = qh[--Yh], qh[Yh] = null;
      for (; t === hr; )
        hr = Ou[--Mu], Ou[Mu] = null, Pi = Ou[--Mu], Ou[Mu] = null, Ii = Ou[--Mu], Ou[Mu] = null;
    }
    function Rp() {
      return bc(), hr !== null ? { id: Ii, overflow: Pi } : null;
    }
    function Up(t, e) {
      bc(), Ou[Mu++] = Ii, Ou[Mu++] = Pi, Ou[Mu++] = hr, Ii = e.id, Pi = e.overflow, hr = t;
    }
    function bc() {
      Gt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function pi(t, e) {
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
      var a = pi(
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
    function _p() {
      Gt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function jl(t, e) {
      kc || (t = pi(t, 0), t.serverProps = null, e !== null && (e = gv(e), t.serverTail.push(e)));
    }
    function Ia(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", c = Gn;
      throw c !== null && (Gn = null, a = mm(c)), os(
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
      ), S1;
    }
    function xm(t) {
      var e = t.stateNode, a = t.type, c = t.memoizedProps;
      switch (e[De] = t, e[oa] = c, ua(a, c), a) {
        case "dialog":
          ht("cancel", e), ht("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ht("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < F0.length; a++)
            ht(F0[a], e);
          break;
        case "source":
          ht("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ht("error", e), ht("load", e);
          break;
        case "details":
          ht("toggle", e);
          break;
        case "input":
          ai("input", c), ht("invalid", e), Kl(e, c), Vr(
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
          hp(e, c);
          break;
        case "select":
          ai("select", c), ht("invalid", e), Zr(e, c);
          break;
        case "textarea":
          ai("textarea", c), ht("invalid", e), ni(e, c), yo(
            e,
            c.value,
            c.defaultValue,
            c.children
          );
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || c.suppressHydrationWarning === !0 || Yy(e.textContent, a) ? (c.popover != null && (ht("beforetoggle", e), ht("toggle", e)), c.onScroll != null && ht("scroll", e), c.onScrollEnd != null && ht("scrollend", e), c.onClick != null && (e.onclick = ka), e = !0) : e = !1, e || Ia(t, !0);
    }
    function qm(t) {
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
    function vi(t) {
      if (t !== fa) return !1;
      if (!Gt)
        return qm(t), Gt = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || lf(t.type, t.memoizedProps)), a = !a), a && Me) {
        for (a = Me; a; ) {
          var c = pi(t, 0), o = gv(a);
          c.serverTail.push(o), a = o.type === "Suspense" ? uf(a) : Ya(a.nextSibling);
        }
        Ia(t);
      }
      if (qm(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Me = uf(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Me = uf(t);
      } else
        e === 27 ? (e = Me, Zc(t.type) ? (t = oS, oS = null, Me = t) : Me = e) : Me = fa ? Ya(t.stateNode.nextSibling) : null;
      return !0;
    }
    function Tc() {
      Me = fa = null, kc = Gt = !1;
    }
    function is() {
      var t = Mf;
      return t !== null && (wa === null ? wa = t : wa.push.apply(
        wa,
        t
      ), Mf = null), t;
    }
    function os(t) {
      Mf === null ? Mf = [t] : Mf.push(t);
    }
    function Ec() {
      var t = Gn;
      if (t !== null) {
        Gn = null;
        for (var e = mm(t); 0 < t.children.length; )
          t = t.children[0];
        F(t.fiber, function() {
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
    function Oo() {
      jh = wv = null, Gh = !1;
    }
    function Pa(t, e, a) {
      Ut(b1, e._currentValue, t), e._currentValue = a, Ut(T1, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== QS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = QS;
    }
    function Tn(t, e) {
      t._currentValue = b1.current;
      var a = T1.current;
      xt(T1, e), t._currentRenderer = a, xt(b1, e);
    }
    function od(t, e, a) {
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
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), od(
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
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), od(
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
    function En(t, e, a, c) {
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
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(lp) : t = [lp]);
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
    function Mo(t) {
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
      wv = t, jh = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Kt(t) {
      return Gh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Ym(wv, t);
    }
    function fs(t, e) {
      return wv === null && Ac(t), Ym(t, e);
    }
    function Ym(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, jh === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        jh = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else jh = jh.next = e;
      return a;
    }
    function fd() {
      return {
        controller: new xT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function gi(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function ss(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && qT(YT, function() {
        t.controller.abort();
      });
    }
    function In(t, e, a) {
      (t & 127) !== 0 ? 0 > Fc && (Fc = Sl(), D0 = Jv(e), E1 = e, a != null && (A1 = nt(a)), (Lt & (Bl | Vn)) !== Ll && (We = !0, Uf = z0), t = af(), e = vu(), t !== Xh || e !== O0 ? Xh = -1.1 : e !== null && (Uf = z0), pr = t, O0 = e) : (t & 4194048) !== 0 && 0 > Uu && (Uu = Sl(), M0 = Jv(e), VS = e, a != null && (ZS = nt(a)), 0 > ao) && (t = af(), e = vu(), (t !== Cf || e !== vr) && (Cf = -1.1), _f = t, vr = e);
    }
    function Cp(t) {
      if (0 > Fc) {
        Fc = Sl(), D0 = t._debugTask != null ? t._debugTask : null, (Lt & (Bl | Vn)) !== Ll && (Uf = z0);
        var e = af(), a = vu();
        e !== Xh || a !== O0 ? Xh = -1.1 : a !== null && (Uf = z0), pr = e, O0 = a;
      }
      0 > Uu && (Uu = Sl(), M0 = t._debugTask != null ? t._debugTask : null, 0 > ao) && (t = af(), e = vu(), (t !== Cf || e !== vr) && (Cf = -1.1), _f = t, vr = e);
    }
    function Pn() {
      var t = mr;
      return mr = 0, t;
    }
    function Ro(t) {
      var e = mr;
      return mr = t, e;
    }
    function Wl(t) {
      var e = mr;
      return mr += t, e;
    }
    function Si() {
      dt = ot = -1.1;
    }
    function Ee() {
      var t = ot;
      return ot = -1.1, t;
    }
    function rl(t) {
      0 <= t && (ot = t);
    }
    function tn() {
      var t = Ge;
      return Ge = -0, t;
    }
    function Da(t) {
      0 <= t && (Ge = t);
    }
    function Oa() {
      var t = Ne;
      return Ne = null, t;
    }
    function en() {
      var t = We;
      return We = !1, t;
    }
    function Qu(t) {
      Va = Sl(), 0 > t.actualStartTime && (t.actualStartTime = Va);
    }
    function sd(t) {
      if (0 <= Va) {
        var e = Sl() - Va;
        t.actualDuration += e, t.selfBaseDuration = e, Va = -1;
      }
    }
    function rs(t) {
      if (0 <= Va) {
        var e = Sl() - Va;
        t.actualDuration += e, Va = -1;
      }
    }
    function kl() {
      if (0 <= Va) {
        var t = Sl(), e = t - Va;
        Va = -1, mr += e, Ge += e, dt = t;
      }
    }
    function Hp(t) {
      Ne === null && (Ne = []), Ne.push(t), eo === null && (eo = []), eo.push(t);
    }
    function qe() {
      Va = Sl(), 0 > ot && (ot = Va);
    }
    function bi(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function Vu(t, e) {
      if (U0 === null) {
        var a = U0 = [];
        D1 = 0, gr = qy(), Qh = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return D1++, e.then(jm, jm), e;
    }
    function jm() {
      if (--D1 === 0 && (-1 < Uu || (ao = -1.1), U0 !== null)) {
        Qh !== null && (Qh.status = "fulfilled");
        var t = U0;
        U0 = null, gr = 0, Qh = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function rd(t, e) {
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
      var t = Sr.current;
      return t !== null ? t : ve.pooledCache;
    }
    function Uo(t, e) {
      e === null ? Ut(Sr, Sr.current, t) : Ut(Sr, e.pool, t);
    }
    function Gm() {
      var t = Zu();
      return t === null ? null : { parent: gl._currentValue, pool: t };
    }
    function dd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Xm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Ma(t, e, a) {
      N.actQueue !== null && (N.didUsePromise = !0);
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
          throw t = e.reason, ds(t), t;
        default:
          if (typeof e.status == "string")
            e.then(ka, ka);
          else {
            if (t = ve, t !== null && 100 < t.shellSuspendCounter)
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
              throw t = e.reason, ds(t), t;
          }
          throw Tr = e, q0 = !0, Vh;
      }
    }
    function Ra(t) {
      try {
        return VT(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Tr = e, q0 = !0, Vh) : e;
      }
    }
    function Ti() {
      if (Tr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = Tr;
      return Tr = null, q0 = !1, t;
    }
    function ds(t) {
      if (t === Vh || t === tg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Le(t) {
      var e = Mt;
      return t != null && (Mt = e === null ? t : e.concat(t)), e;
    }
    function ra() {
      var t = Mt;
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
          e === null && (e = Sc(t, a.mode, 0), e._debugInfo = Mt, e.return = a), F(
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
      var e = Y0;
      return Y0 += 1, Zh === null && (Zh = dd()), Ma(Zh, t, e);
    }
    function da(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function zn(t, e) {
      throw e.$$typeof === Rv ? Error(
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
    function Qm(t, e) {
      var a = nt(t) || "Component";
      fb[a] || (fb[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
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
    function _o(t, e) {
      var a = ra();
      a !== null ? a.run(
        Qm.bind(null, t, e)
      ) : Qm(t, e);
    }
    function hd(t, e) {
      var a = nt(t) || "Component";
      sb[a] || (sb[a] = !0, e = String(e), t.tag === 3 ? console.error(
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
    function hs(t, e) {
      var a = ra();
      a !== null ? a.run(
        hd.bind(null, t, e)
      ) : hd(t, e);
    }
    function dl(t) {
      function e(g, b) {
        if (t) {
          var E = g.deletions;
          E === null ? (g.deletions = [b], g.flags |= 16) : E.push(b);
        }
      }
      function a(g, b) {
        if (!t) return null;
        for (; b !== null; )
          e(g, b), b = b.sibling;
        return null;
      }
      function c(g) {
        for (var b = /* @__PURE__ */ new Map(); g !== null; )
          g.key !== null ? b.set(g.key, g) : b.set(g.index, g), g = g.sibling;
        return b;
      }
      function o(g, b) {
        return g = Fn(g, b), g.index = 0, g.sibling = null, g;
      }
      function f(g, b, E) {
        return g.index = E, t ? (E = g.alternate, E !== null ? (E = E.index, E < b ? (g.flags |= 67108866, b) : E) : (g.flags |= 67108866, b)) : (g.flags |= 1048576, b);
      }
      function d(g) {
        return t && g.alternate === null && (g.flags |= 67108866), g;
      }
      function h(g, b, E, Y) {
        return b === null || b.tag !== 6 ? (b = Do(
          E,
          g.mode,
          Y
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Mt, b) : (b = o(b, E), b.return = g, b._debugInfo = Mt, b);
      }
      function y(g, b, E, Y) {
        var K = E.type;
        return K === rf ? (b = A(
          g,
          b,
          E.props.children,
          Y,
          E.key
        ), Fl(E, b, g), b) : b !== null && (b.elementType === K || _m(b, E) || typeof K == "object" && K !== null && K.$$typeof === Xl && Ra(K) === b.type) ? (b = o(b, E.props), da(b, E), b.return = g, b._debugOwner = E._owner, b._debugInfo = Mt, b) : (b = Sc(E, g.mode, Y), da(b, E), b.return = g, b._debugInfo = Mt, b);
      }
      function p(g, b, E, Y) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = ud(E, g.mode, Y), b.return = g, b._debugInfo = Mt, b) : (b = o(b, E.children || []), b.return = g, b._debugInfo = Mt, b);
      }
      function A(g, b, E, Y, K) {
        return b === null || b.tag !== 7 ? (b = yi(
          E,
          g.mode,
          Y,
          K
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Mt, b) : (b = o(b, E), b.return = g, b._debugInfo = Mt, b);
      }
      function D(g, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = Do(
            "" + b,
            g.mode,
            E
          ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Mt, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case on:
              return E = Sc(
                b,
                g.mode,
                E
              ), da(E, b), E.return = g, g = Le(b._debugInfo), E._debugInfo = Mt, Mt = g, E;
            case wc:
              return b = ud(
                b,
                g.mode,
                E
              ), b.return = g, b._debugInfo = Mt, b;
            case Xl:
              var Y = Le(b._debugInfo);
              return b = Ra(b), g = D(g, b, E), Mt = Y, g;
          }
          if (Pe(b) || ke(b))
            return E = yi(
              b,
              g.mode,
              E,
              null
            ), E.return = g, E._debugOwner = g, E._debugTask = g._debugTask, g = Le(b._debugInfo), E._debugInfo = Mt, Mt = g, E;
          if (typeof b.then == "function")
            return Y = Le(b._debugInfo), g = D(
              g,
              An(b),
              E
            ), Mt = Y, g;
          if (b.$$typeof === qn)
            return D(
              g,
              fs(g, b),
              E
            );
          ln(g, b);
        }
        return typeof b == "function" && _o(g, b), typeof b == "symbol" && hs(g, b), null;
      }
      function S(g, b, E, Y) {
        var K = b !== null ? b.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return K !== null ? null : h(g, b, "" + E, Y);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case on:
              return E.key === K ? (K = Le(E._debugInfo), g = y(
                g,
                b,
                E,
                Y
              ), Mt = K, g) : null;
            case wc:
              return E.key === K ? p(g, b, E, Y) : null;
            case Xl:
              return K = Le(E._debugInfo), E = Ra(E), g = S(
                g,
                b,
                E,
                Y
              ), Mt = K, g;
          }
          if (Pe(E) || ke(E))
            return K !== null ? null : (K = Le(E._debugInfo), g = A(
              g,
              b,
              E,
              Y,
              null
            ), Mt = K, g);
          if (typeof E.then == "function")
            return K = Le(E._debugInfo), g = S(
              g,
              b,
              An(E),
              Y
            ), Mt = K, g;
          if (E.$$typeof === qn)
            return S(
              g,
              b,
              fs(g, E),
              Y
            );
          ln(g, E);
        }
        return typeof E == "function" && _o(g, E), typeof E == "symbol" && hs(g, E), null;
      }
      function H(g, b, E, Y, K) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
          return g = g.get(E) || null, h(b, g, "" + Y, K);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case on:
              return E = g.get(
                Y.key === null ? E : Y.key
              ) || null, g = Le(Y._debugInfo), b = y(
                b,
                E,
                Y,
                K
              ), Mt = g, b;
            case wc:
              return g = g.get(
                Y.key === null ? E : Y.key
              ) || null, p(b, g, Y, K);
            case Xl:
              var St = Le(Y._debugInfo);
              return Y = Ra(Y), b = H(
                g,
                b,
                E,
                Y,
                K
              ), Mt = St, b;
          }
          if (Pe(Y) || ke(Y))
            return E = g.get(E) || null, g = Le(Y._debugInfo), b = A(
              b,
              E,
              Y,
              K,
              null
            ), Mt = g, b;
          if (typeof Y.then == "function")
            return St = Le(Y._debugInfo), b = H(
              g,
              b,
              E,
              An(Y),
              K
            ), Mt = St, b;
          if (Y.$$typeof === qn)
            return H(
              g,
              b,
              E,
              fs(b, Y),
              K
            );
          ln(b, Y);
        }
        return typeof Y == "function" && _o(b, Y), typeof Y == "symbol" && hs(b, Y), null;
      }
      function J(g, b, E, Y) {
        if (typeof E != "object" || E === null) return Y;
        switch (E.$$typeof) {
          case on:
          case wc:
            Dl(g, b, E);
            var K = E.key;
            if (typeof K != "string") break;
            if (Y === null) {
              Y = /* @__PURE__ */ new Set(), Y.add(K);
              break;
            }
            if (!Y.has(K)) {
              Y.add(K);
              break;
            }
            F(b, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                K
              );
            });
            break;
          case Xl:
            E = Ra(E), J(g, b, E, Y);
        }
        return Y;
      }
      function k(g, b, E, Y) {
        for (var K = null, St = null, it = null, lt = b, zt = b = 0, Re = null; lt !== null && zt < E.length; zt++) {
          lt.index > zt ? (Re = lt, lt = null) : Re = lt.sibling;
          var il = S(
            g,
            lt,
            E[zt],
            Y
          );
          if (il === null) {
            lt === null && (lt = Re);
            break;
          }
          K = J(
            g,
            il,
            E[zt],
            K
          ), t && lt && il.alternate === null && e(g, lt), b = f(il, b, zt), it === null ? St = il : it.sibling = il, it = il, lt = Re;
        }
        if (zt === E.length)
          return a(g, lt), Gt && bn(g, zt), St;
        if (lt === null) {
          for (; zt < E.length; zt++)
            lt = D(g, E[zt], Y), lt !== null && (K = J(
              g,
              lt,
              E[zt],
              K
            ), b = f(
              lt,
              b,
              zt
            ), it === null ? St = lt : it.sibling = lt, it = lt);
          return Gt && bn(g, zt), St;
        }
        for (lt = c(lt); zt < E.length; zt++)
          Re = H(
            lt,
            g,
            zt,
            E[zt],
            Y
          ), Re !== null && (K = J(
            g,
            Re,
            E[zt],
            K
          ), t && Re.alternate !== null && lt.delete(
            Re.key === null ? zt : Re.key
          ), b = f(
            Re,
            b,
            zt
          ), it === null ? St = Re : it.sibling = Re, it = Re);
        return t && lt.forEach(function(ro) {
          return e(g, ro);
        }), Gt && bn(g, zt), St;
      }
      function Te(g, b, E, Y) {
        if (E == null)
          throw Error("An iterable object provided no iterator.");
        for (var K = null, St = null, it = b, lt = b = 0, zt = null, Re = null, il = E.next(); it !== null && !il.done; lt++, il = E.next()) {
          it.index > lt ? (zt = it, it = null) : zt = it.sibling;
          var ro = S(g, it, il.value, Y);
          if (ro === null) {
            it === null && (it = zt);
            break;
          }
          Re = J(
            g,
            ro,
            il.value,
            Re
          ), t && it && ro.alternate === null && e(g, it), b = f(ro, b, lt), St === null ? K = ro : St.sibling = ro, St = ro, it = zt;
        }
        if (il.done)
          return a(g, it), Gt && bn(g, lt), K;
        if (it === null) {
          for (; !il.done; lt++, il = E.next())
            it = D(g, il.value, Y), it !== null && (Re = J(
              g,
              it,
              il.value,
              Re
            ), b = f(
              it,
              b,
              lt
            ), St === null ? K = it : St.sibling = it, St = it);
          return Gt && bn(g, lt), K;
        }
        for (it = c(it); !il.done; lt++, il = E.next())
          zt = H(
            it,
            g,
            lt,
            il.value,
            Y
          ), zt !== null && (Re = J(
            g,
            zt,
            il.value,
            Re
          ), t && zt.alternate !== null && it.delete(
            zt.key === null ? lt : zt.key
          ), b = f(
            zt,
            b,
            lt
          ), St === null ? K = zt : St.sibling = zt, St = zt);
        return t && it.forEach(function(dE) {
          return e(g, dE);
        }), Gt && bn(g, lt), K;
      }
      function Qt(g, b, E, Y) {
        if (typeof E == "object" && E !== null && E.type === rf && E.key === null && (Fl(E, null, g), E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case on:
              var K = Le(E._debugInfo);
              t: {
                for (var St = E.key; b !== null; ) {
                  if (b.key === St) {
                    if (St = E.type, St === rf) {
                      if (b.tag === 7) {
                        a(
                          g,
                          b.sibling
                        ), Y = o(
                          b,
                          E.props.children
                        ), Y.return = g, Y._debugOwner = E._owner, Y._debugInfo = Mt, Fl(E, Y, g), g = Y;
                        break t;
                      }
                    } else if (b.elementType === St || _m(
                      b,
                      E
                    ) || typeof St == "object" && St !== null && St.$$typeof === Xl && Ra(St) === b.type) {
                      a(
                        g,
                        b.sibling
                      ), Y = o(b, E.props), da(Y, E), Y.return = g, Y._debugOwner = E._owner, Y._debugInfo = Mt, g = Y;
                      break t;
                    }
                    a(g, b);
                    break;
                  } else e(g, b);
                  b = b.sibling;
                }
                E.type === rf ? (Y = yi(
                  E.props.children,
                  g.mode,
                  Y,
                  E.key
                ), Y.return = g, Y._debugOwner = g, Y._debugTask = g._debugTask, Y._debugInfo = Mt, Fl(E, Y, g), g = Y) : (Y = Sc(
                  E,
                  g.mode,
                  Y
                ), da(Y, E), Y.return = g, Y._debugInfo = Mt, g = Y);
              }
              return g = d(g), Mt = K, g;
            case wc:
              t: {
                for (K = E, E = K.key; b !== null; ) {
                  if (b.key === E)
                    if (b.tag === 4 && b.stateNode.containerInfo === K.containerInfo && b.stateNode.implementation === K.implementation) {
                      a(
                        g,
                        b.sibling
                      ), Y = o(
                        b,
                        K.children || []
                      ), Y.return = g, g = Y;
                      break t;
                    } else {
                      a(g, b);
                      break;
                    }
                  else e(g, b);
                  b = b.sibling;
                }
                Y = ud(
                  K,
                  g.mode,
                  Y
                ), Y.return = g, g = Y;
              }
              return d(g);
            case Xl:
              return K = Le(E._debugInfo), E = Ra(E), g = Qt(
                g,
                b,
                E,
                Y
              ), Mt = K, g;
          }
          if (Pe(E))
            return K = Le(E._debugInfo), g = k(
              g,
              b,
              E,
              Y
            ), Mt = K, g;
          if (ke(E)) {
            if (K = Le(E._debugInfo), St = ke(E), typeof St != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var it = St.call(E);
            return it === E ? (g.tag !== 0 || Object.prototype.toString.call(g.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(it) !== "[object Generator]") && (ib || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), ib = !0) : E.entries !== St || U1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), U1 = !0), g = Te(
              g,
              b,
              it,
              Y
            ), Mt = K, g;
          }
          if (typeof E.then == "function")
            return K = Le(E._debugInfo), g = Qt(
              g,
              b,
              An(E),
              Y
            ), Mt = K, g;
          if (E.$$typeof === qn)
            return Qt(
              g,
              b,
              fs(g, E),
              Y
            );
          ln(g, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (K = "" + E, b !== null && b.tag === 6 ? (a(
          g,
          b.sibling
        ), Y = o(b, K), Y.return = g, g = Y) : (a(g, b), Y = Do(
          K,
          g.mode,
          Y
        ), Y.return = g, Y._debugOwner = g, Y._debugTask = g._debugTask, Y._debugInfo = Mt, g = Y), d(g)) : (typeof E == "function" && _o(g, E), typeof E == "symbol" && hs(g, E), a(g, b));
      }
      return function(g, b, E, Y) {
        var K = Mt;
        Mt = null;
        try {
          Y0 = 0;
          var St = Qt(
            g,
            b,
            E,
            Y
          );
          return Zh = null, St;
        } catch (Re) {
          if (Re === Vh || Re === tg) throw Re;
          var it = Nt(29, Re, null, g.mode);
          it.lanes = Y, it.return = g;
          var lt = it._debugInfo = Mt;
          if (it._debugOwner = g._debugOwner, it._debugTask = g._debugTask, lt != null) {
            for (var zt = lt.length - 1; 0 <= zt; zt--)
              if (typeof lt[zt].stack == "string") {
                it._debugOwner = lt[zt], it._debugTask = lt[zt].debugTask;
                break;
              }
          }
          return it;
        } finally {
          Mt = K;
        }
      };
    }
    function he(t, e) {
      var a = Pe(t);
      return t = !a && typeof ke(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
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
    function el(t) {
      return {
        lane: t,
        tag: db,
        payload: null,
        callback: null,
        next: null
      };
    }
    function eu(t, e, a) {
      var c = t.updateQueue;
      if (c === null) return null;
      if (c = c.shared, C1 === c && !yb) {
        var o = nt(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), yb = !0;
      }
      return (Lt & Bl) !== Ll ? (o = c.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), c.pending = e, e = cs(t), Um(t, null, a), e) : (zo(t, c, e, a), cs(t));
    }
    function an(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, fp(t, a);
      }
    }
    function ms(t, e) {
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
    function Co() {
      if (H1) {
        var t = Qh;
        if (t !== null) throw t;
      }
    }
    function lu(t, e, a, c) {
      H1 = !1;
      var o = t.updateQueue;
      Hf = !1, C1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var A = t.alternate;
        A !== null && (A = A.updateQueue, h = A.lastBaseUpdate, h !== d && (h === null ? A.firstBaseUpdate = p : h.next = p, A.lastBaseUpdate = y));
      }
      if (f !== null) {
        var D = o.baseState;
        d = 0, A = p = y = null, h = f;
        do {
          var S = h.lane & -536870913, H = S !== h.lane;
          if (H ? (Rt & S) === S : (c & S) === S) {
            S !== 0 && S === gr && (H1 = !0), A !== null && (A = A.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              S = t;
              var J = h, k = e, Te = a;
              switch (J.tag) {
                case hb:
                  if (J = J.payload, typeof J == "function") {
                    Gh = !0;
                    var Qt = J.call(
                      Te,
                      D,
                      k
                    );
                    if (S.mode & Sa) {
                      de(!0);
                      try {
                        J.call(Te, D, k);
                      } finally {
                        de(!1);
                      }
                    }
                    Gh = !1, D = Qt;
                    break t;
                  }
                  D = J;
                  break t;
                case _1:
                  S.flags = S.flags & -65537 | 128;
                case db:
                  if (Qt = J.payload, typeof Qt == "function") {
                    if (Gh = !0, J = Qt.call(
                      Te,
                      D,
                      k
                    ), S.mode & Sa) {
                      de(!0);
                      try {
                        Qt.call(Te, D, k);
                      } finally {
                        de(!1);
                      }
                    }
                    Gh = !1;
                  } else J = Qt;
                  if (J == null) break t;
                  D = Dt({}, D, J);
                  break t;
                case mb:
                  Hf = !0;
              }
            }
            S = h.callback, S !== null && (t.flags |= 64, H && (t.flags |= 8192), H = o.callbacks, H === null ? o.callbacks = [S] : H.push(S));
          } else
            H = {
              lane: S,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, A === null ? (p = A = H, y = D) : A = A.next = H, d |= S;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            H = h, h = H.next, H.next = null, o.lastBaseUpdate = H, o.shared.pending = null;
          }
        } while (!0);
        A === null && (y = D), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = A, f === null && (o.shared.lanes = 0), xf |= d, t.lanes = d, t.memoizedState = D;
      }
      C1 = null;
    }
    function zc(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function Vm(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          zc(a[t], e);
    }
    function Ho(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          zc(a[t], e);
    }
    function md(t, e) {
      var a = Pc;
      Ut(lg, a, t), Ut(Lh, e, t), Pc = a | e.baseLanes;
    }
    function Lu(t) {
      Ut(lg, Pc, t), Ut(
        Lh,
        Lh.current,
        t
      );
    }
    function Dn(t) {
      Pc = lg.current, xt(Lh, t), xt(lg, t);
    }
    function Il(t) {
      var e = t.alternate;
      Ut(
        cl,
        cl.current & wh,
        t
      ), Ut(Xn, t, t), _u === null && (e === null || Lh.current !== null || e.memoizedState !== null) && (_u = t);
    }
    function On(t) {
      Ut(cl, cl.current, t), Ut(Xn, t, t), _u === null && (_u = t);
    }
    function yd(t) {
      t.tag === 22 ? (Ut(cl, cl.current, t), Ut(Xn, t, t), _u === null && (_u = t)) : au(t);
    }
    function au(t) {
      Ut(cl, cl.current, t), Ut(
        Xn,
        Xn.current,
        t
      );
    }
    function hl(t) {
      xt(Xn, t), _u === t && (_u = null), xt(cl, t);
    }
    function Ei(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || ks(a) || Gy(a)))
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
    function vt() {
      var t = B;
      Hu === null ? Hu = [t] : Hu.push(t);
    }
    function Z() {
      var t = B;
      if (Hu !== null && (co++, Hu[co] !== t)) {
        var e = nt(gt);
        if (!pb.has(e) && (pb.add(e), Hu !== null)) {
          for (var a = "", c = 0; c <= co; c++) {
            var o = Hu[c], f = c === co ? t : o;
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
      t == null || Pe(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        B,
        typeof t
      );
    }
    function ys() {
      var t = nt(gt);
      gb.has(t) || (gb.add(t), console.error(
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
    function Zm(t, e) {
      if (X0) return !1;
      if (e === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          B
        ), !1;
      t.length !== e.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        B,
        "[" + e.join(", ") + "]",
        "[" + t.join(", ") + "]"
      );
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!Qa(t[a], e[a])) return !1;
      return !0;
    }
    function Lm(t, e, a, c, o, f) {
      no = f, gt = e, Hu = t !== null ? t._debugHookTypes : null, co = -1, X0 = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = nt(gt), B1.has(f) || (B1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = t !== null && t.memoizedState !== null ? x1 : Hu !== null ? Sb : N1, Ar = f = (e.mode & Sa) !== yt;
      var d = O1(a, c, o);
      if (Ar = !1, Kh && (d = ps(
        e,
        a,
        c,
        o
      )), f) {
        de(!0);
        try {
          d = ps(
            e,
            a,
            c,
            o
          );
        } finally {
          de(!1);
        }
      }
      return we(t, e), d;
    }
    function we(t, e) {
      e._debugHookTypes = Hu, e.dependencies === null ? uo !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: uo
      }) : e.dependencies._debugThenableState = uo, N.H = Q0;
      var a = pe !== null && pe.next !== null;
      if (no = 0, Hu = B = bl = pe = gt = null, co = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), ng = !1, G0 = 0, uo = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || Tl || (t = t.dependencies, t !== null && Mo(t) && (Tl = !0)), q0 ? (q0 = !1, t = !0) : t = !1, t && (e = nt(e) || "Unknown", vb.has(e) || B1.has(e) || (vb.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function ps(t, e, a, c) {
      gt = t;
      var o = 0;
      do {
        if (Kh && (uo = null), G0 = 0, Kh = !1, o >= LT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, X0 = !1, bl = pe = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        co = -1, N.H = bb, f = O1(e, a, c);
      } while (Kh);
      return f;
    }
    function vs() {
      var t = N.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? bs(e) : e, t = t.useState()[0], (pe !== null ? pe.memoizedState : null) !== t && (gt.flags |= 1024), e;
    }
    function Ai() {
      var t = ug !== 0;
      return ug = 0, t;
    }
    function gs(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & cc) !== yt ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function Dc(t) {
      if (ng) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        ng = !1;
      }
      no = 0, Hu = bl = pe = gt = null, co = -1, B = null, Kh = !1, G0 = ug = 0, uo = null;
    }
    function Fe() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return bl === null ? gt.memoizedState = bl = t : bl = bl.next = t, bl;
    }
    function It() {
      if (pe === null) {
        var t = gt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = pe.next;
      var e = bl === null ? gt.memoizedState : bl.next;
      if (e !== null)
        bl = e, pe = t;
      else {
        if (t === null)
          throw gt.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        pe = t, t = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null
        }, bl === null ? gt.memoizedState = bl = t : bl = bl.next = t;
      }
      return bl;
    }
    function Ss() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function bs(t) {
      var e = G0;
      return G0 += 1, uo === null && (uo = dd()), t = Ma(uo, t, e), e = gt, (bl === null ? e.memoizedState : bl.next) === null && (e = e.alternate, N.H = e !== null && e.memoizedState !== null ? x1 : N1), t;
    }
    function Ju(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return bs(t);
        if (t.$$typeof === qn) return Kt(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function Ua(t) {
      var e = null, a = gt.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var c = gt.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (e = {
          data: c.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = Ss(), gt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || X0)
        for (a = e.data[e.index] = Array(t), c = 0; c < t; c++)
          a[c] = Pg;
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
      var c = Fe();
      if (a !== void 0) {
        var o = a(e);
        if (Ar) {
          de(!0);
          try {
            a(e);
          } finally {
            de(!1);
          }
        }
      } else o = e;
      return c.memoizedState = c.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, c.queue = t, t = t.dispatch = $g.bind(
        null,
        gt,
        t
      ), [c.memoizedState, t];
    }
    function zi(t) {
      var e = It();
      return Oc(e, pe, t);
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
        var h = d = null, y = null, p = e, A = !1;
        do {
          var D = p.lane & -536870913;
          if (D !== p.lane ? (Rt & D) === D : (no & D) === D) {
            var S = p.revertLane;
            if (S === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), D === gr && (A = !0);
            else if ((no & S) === S) {
              p = p.next, S === gr && (A = !0);
              continue;
            } else
              D = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = D, d = f) : y = y.next = D, gt.lanes |= S, xf |= S;
            D = p.action, Ar && a(f, D), f = p.hasEagerState ? p.eagerState : a(f, D);
          } else
            S = {
              lane: D,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = S, d = f) : y = y.next = S, gt.lanes |= D, xf |= D;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !Qa(f, t.memoizedState) && (Tl = !0, A && (a = Qh, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, c.lastRenderedState = f;
      }
      return o === null && (c.lanes = 0), [t.memoizedState, c.dispatch];
    }
    function Di(t) {
      var e = It(), a = e.queue;
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
        Qa(f, e.memoizedState) || (Tl = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, c];
    }
    function No(t, e, a) {
      var c = gt, o = Fe();
      if (Gt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Jh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0);
      } else {
        if (f = e(), Jh || (a = e(), Qa(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0)), ve === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Rt & 127) !== 0 || wm(c, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Ri(
        Mc.bind(null, c, a, t),
        [t]
      ), c.flags |= 2048, nu(
        Cu | La,
        { destroy: void 0 },
        Jm.bind(
          null,
          c,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Oi(t, e, a) {
      var c = gt, o = It(), f = Gt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !Jh) {
        var d = e();
        Qa(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0);
      }
      (d = !Qa(
        (pe || o).memoizedState,
        a
      )) && (o.memoizedState = a, Tl = !0), o = o.queue;
      var h = Mc.bind(null, c, o, t);
      if (ll(2048, La, h, [t]), o.getSnapshot !== e || d || bl !== null && bl.memoizedState.tag & Cu) {
        if (c.flags |= 2048, nu(
          Cu | La,
          { destroy: void 0 },
          Jm.bind(
            null,
            c,
            o,
            a,
            e
          ),
          null
        ), ve === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (no & 127) !== 0 || wm(c, e, a);
      }
      return a;
    }
    function wm(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = gt.updateQueue, e === null ? (e = Ss(), gt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function Jm(t, e, a, c) {
      e.value = a, e.getSnapshot = c, Rc(e) && Km(t);
    }
    function Mc(t, e, a) {
      return a(function() {
        Rc(e) && (In(2, "updateSyncExternalStore()", t), Km(t));
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
    function Km(t) {
      var e = Yl(t, 2);
      e !== null && pt(e, t, 2);
    }
    function pd(t) {
      var e = Fe();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), Ar) {
          de(!0);
          try {
            a();
          } finally {
            de(!1);
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
      t = pd(t);
      var e = t.queue, a = Ed.bind(null, gt, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function Mi(t) {
      var e = Fe();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Ms.bind(
        null,
        gt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function Ts(t, e) {
      var a = It();
      return xo(a, pe, t, e);
    }
    function xo(t, e, a, c) {
      return t.baseState = a, Oc(
        t,
        pe,
        typeof c == "function" ? c : _a
      );
    }
    function Es(t, e) {
      var a = It();
      return pe !== null ? xo(a, pe, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }
    function Bp(t, e, a, c, o) {
      if (ml(t))
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
        N.T !== null ? a(!0) : f.isTransition = !1, c(f), a = e.pending, a === null ? (f.next = e.pending = f, _c(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function _c(t, e) {
      var a = e.action, c = e.payload, o = t.state;
      if (e.isTransition) {
        var f = N.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), N.T = d;
        try {
          var h = a(o, c), y = N.S;
          y !== null && y(d, h), $m(t, e, h);
        } catch (p) {
          As(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), N.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, c), $m(t, e, d);
        } catch (p) {
          As(t, e, p);
        }
    }
    function $m(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (N.asyncTransitions++, a.then(Ui, Ui), a.then(
        function(c) {
          Ku(t, e, c);
        },
        function(c) {
          return As(t, e, c);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Ku(t, e, a);
    }
    function Ku(t, e, a) {
      e.status = "fulfilled", e.value = a, vd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, _c(t, a)));
    }
    function As(t, e, a) {
      var c = t.pending;
      if (t.pending = null, c !== null) {
        c = c.next;
        do
          e.status = "rejected", e.reason = a, vd(e), e = e.next;
        while (e !== c);
      }
      t.action = null;
    }
    function vd(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function $u(t, e) {
      return e;
    }
    function Ca(t, e) {
      if (Gt) {
        var a = ve.formState;
        if (a !== null) {
          t: {
            var c = gt;
            if (Gt) {
              if (Me) {
                e: {
                  for (var o = Me, f = Ru; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = Ya(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === nS || f === u2 ? o : null;
                }
                if (o) {
                  Me = Ya(
                    o.nextSibling
                  ), c = o.data === nS;
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
      return a = Fe(), a.memoizedState = a.baseState = e, c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $u,
        lastRenderedState: e
      }, a.queue = c, a = Ed.bind(
        null,
        gt,
        c
      ), c.dispatch = a, c = pd(!1), f = Ms.bind(
        null,
        gt,
        !1,
        c.queue
      ), c = Fe(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, c.queue = o, a = Bp.bind(
        null,
        gt,
        o,
        f,
        a
      ), o.dispatch = a, c.memoizedState = t, [e, a, !1];
    }
    function Cc(t) {
      var e = It();
      return gd(e, pe, t);
    }
    function gd(t, e, a) {
      if (e = Oc(
        t,
        e,
        $u
      )[0], t = zi(_a)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var c = bs(e);
        } catch (d) {
          throw d === Vh ? tg : d;
        }
      else c = e;
      e = It();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (gt.flags |= 2048, nu(
        Cu | La,
        { destroy: void 0 },
        Wm.bind(null, o, a),
        null
      )), [c, f, t];
    }
    function Wm(t, e) {
      t.action = e;
    }
    function Hc(t) {
      var e = It(), a = pe;
      if (a !== null)
        return gd(e, a, t);
      It(), e = e.memoizedState, a = It();
      var c = a.queue.dispatch;
      return a.memoizedState = t, [e, c, !1];
    }
    function nu(t, e, a, c) {
      return t = { tag: t, create: a, deps: c, inst: e, next: null }, e = gt.updateQueue, e === null && (e = Ss(), gt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (c = a.next, a.next = t, t.next = c, e.lastEffect = t), t;
    }
    function Sd(t) {
      var e = Fe();
      return t = { current: t }, e.memoizedState = t;
    }
    function Bc(t, e, a, c) {
      var o = Fe();
      gt.flags |= t, o.memoizedState = nu(
        Cu | e,
        { destroy: void 0 },
        a,
        c === void 0 ? null : c
      );
    }
    function ll(t, e, a, c) {
      var o = It();
      c = c === void 0 ? null : c;
      var f = o.memoizedState.inst;
      pe !== null && c !== null && Zm(c, pe.memoizedState.deps) ? o.memoizedState = nu(e, f, a, c) : (gt.flags |= t, o.memoizedState = nu(
        Cu | e,
        f,
        a,
        c
      ));
    }
    function Ri(t, e) {
      (gt.mode & cc) !== yt ? Bc(276826112, La, t, e) : Bc(8390656, La, t, e);
    }
    function Np(t) {
      gt.flags |= 4;
      var e = gt.updateQueue;
      if (e === null)
        e = Ss(), gt.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function zs(t) {
      var e = Fe(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Lt & Bl) !== Ll)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function qo(t) {
      var e = It().memoizedState;
      return Np({ ref: e, nextImpl: t }), function() {
        if ((Lt & Bl) !== Ll)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function Pl(t, e) {
      var a = 4194308;
      return (gt.mode & cc) !== yt && (a |= 134217728), Bc(a, Qn, t, e);
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
      (gt.mode & cc) !== yt && (c |= 134217728), Bc(
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
      ), a = a != null ? a.concat([t]) : null, ll(
        4,
        Qn,
        Ha.bind(null, e, t),
        a
      );
    }
    function bd(t, e) {
      return Fe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function Mn(t, e) {
      var a = It();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      return e !== null && Zm(e, c[1]) ? c[0] : (a.memoizedState = [t, e], t);
    }
    function ta(t, e) {
      var a = Fe();
      e = e === void 0 ? null : e;
      var c = t();
      if (Ar) {
        de(!0);
        try {
          t();
        } finally {
          de(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function Ae(t, e) {
      var a = It();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      if (e !== null && Zm(e, c[1]))
        return c[0];
      if (c = t(), Ar) {
        de(!0);
        try {
          t();
        } finally {
          de(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function jo(t, e) {
      var a = Fe();
      return Pt(a, t, e);
    }
    function cu(t, e) {
      var a = It();
      return Je(
        a,
        pe.memoizedState,
        t,
        e
      );
    }
    function Tt(t, e) {
      var a = It();
      return pe === null ? Pt(a, t, e) : Je(
        a,
        pe.memoizedState,
        t,
        e
      );
    }
    function Pt(t, e, a) {
      return a === void 0 || (no & 1073741824) !== 0 && (Rt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Jo(), gt.lanes |= t, xf |= t, a);
    }
    function Je(t, e, a, c) {
      return Qa(a, e) ? a : Lh.current !== null ? (t = Pt(t, a, c), Qa(t, e) || (Tl = !0), t) : (no & 42) === 0 || (no & 1073741824) !== 0 && (Rt & 261930) === 0 ? (Tl = !0, t.memoizedState = a) : (t = Jo(), gt.lanes |= t, xf |= t, e);
    }
    function Ui() {
      N.asyncTransitions--;
    }
    function _i(t, e, a, c, o) {
      var f = Wt.p;
      Wt.p = f !== 0 && f < Cl ? f : Cl;
      var d = N.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), N.T = h, Ms(t, !1, e, a);
      try {
        var y = o(), p = N.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          N.asyncTransitions++, y.then(Ui, Ui);
          var A = rd(
            y,
            c
          );
          Ci(
            t,
            e,
            A,
            Gl(t)
          );
        } else
          Ci(
            t,
            e,
            c,
            Gl(t)
          );
      } catch (D) {
        Ci(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: D },
          Gl(t)
        );
      } finally {
        Wt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), N.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Wu(t, e, a, c) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Ds(t).queue;
      Cp(t), _i(
        t,
        o,
        e,
        Nr,
        a === null ? ae : function() {
          return Go(t), a(c);
        }
      );
    }
    function Ds(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Nr,
        baseState: Nr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _a,
          lastRenderedState: Nr
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
    function Go(t) {
      N.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = Ds(t);
      e.next === null && (e = t.alternate.memoizedState), Ci(
        t,
        e.next.queue,
        {},
        Gl(t)
      );
    }
    function Nc() {
      var t = pd(!1);
      return t = _i.bind(
        null,
        gt,
        t.queue,
        !0,
        !1
      ), Fe().memoizedState = t, [!1, t];
    }
    function xp() {
      var t = zi(_a)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : bs(t),
        e
      ];
    }
    function Ce() {
      var t = Di(_a)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : bs(t),
        e
      ];
    }
    function ku() {
      return Kt(lp);
    }
    function Os() {
      var t = Fe(), e = ve.identifierPrefix;
      if (Gt) {
        var a = Pi, c = Ii;
        a = (c & ~(1 << 32 - _l(c) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = ug++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = ZT++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function Td() {
      return Fe().memoizedState = qp.bind(
        null,
        gt
      );
    }
    function qp(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var c = Gl(a), o = el(c), f = eu(a, o, c);
            f !== null && (In(c, "refresh()", t), pt(f, a, c), an(f, a, c)), t = fd(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function $g(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Gl(t);
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ml(t) ? je(e, o) : (o = di(t, e, o, c), o !== null && (In(c, "dispatch()", t), pt(o, t, c), Rs(o, e, c)));
    }
    function Ed(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Gl(t), Ci(t, e, a, c) && In(c, "setState()", t);
    }
    function Ci(t, e, a, c) {
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ml(t)) je(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = N.H;
          N.H = oc;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Qa(y, h))
              return zo(t, e, o, 0), ve === null && ad(), !1;
          } catch {
          } finally {
            N.H = d;
          }
        }
        if (a = di(t, e, o, c), a !== null)
          return pt(a, t, c), Rs(a, e, c), !0;
      }
      return !1;
    }
    function Ms(t, e, a, c) {
      if (N.T === null && gr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), c = {
        lane: 2,
        revertLane: qy(),
        gesture: null,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, ml(t)) {
        if (e)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        e = di(
          t,
          a,
          c,
          2
        ), e !== null && (In(2, "setOptimistic()", t), pt(e, t, 2));
    }
    function ml(t) {
      var e = t.alternate;
      return t === gt || e !== null && e === gt;
    }
    function je(t, e) {
      Kh = ng = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Rs(t, e, a) {
      if ((a & 4194048) !== 0) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, fp(t, a);
      }
    }
    function Hi(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        Cb.has(e) || (Cb.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function Xo(t, e, a, c) {
      var o = t.memoizedState, f = a(c, o);
      if (t.mode & Sa) {
        de(!0);
        try {
          f = a(c, o);
        } finally {
          de(!1);
        }
      }
      f === void 0 && (e = jt(e) || "Component", Mb.has(e) || (Mb.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : Dt({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function Ad(t, e, a, c, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          c,
          f,
          d
        ), t.mode & Sa) {
          de(!0);
          try {
            a = h.shouldComponentUpdate(
              c,
              f,
              d
            );
          } finally {
            de(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          jt(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !Ao(a, c) || !Ao(o, f) : !0;
    }
    function iu(t, e, a, c) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, c), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, c), e.state !== o && (t = nt(t) || "Component", Eb.has(t) || (Eb.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), q1.enqueueReplaceState(
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
        a === e && (a = Dt({}, a));
        for (var o in t)
          a[o] === void 0 && (a[o] = t[o]);
      }
      return a;
    }
    function zd(t) {
      h1(t), console.warn(
        `%s

%s
`,
        $h ? "An error occurred in the <" + $h + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Dd(t) {
      var e = $h ? "The above error occurred in the <" + $h + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Y1 || "Anonymous") + ".");
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
          h2 + " " + t[0],
          m2,
          _g + c + _g,
          y2
        ) : t.splice(
          0,
          0,
          h2,
          m2,
          _g + c + _g,
          y2
        ), t.unshift(console), c = sE.apply(console.error, t), c();
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
    function km(t) {
      h1(t);
    }
    function Us(t, e) {
      try {
        $h = e.source ? nt(e.source) : null, Y1 = null;
        var a = e.value;
        if (N.actQueue !== null)
          N.thrownErrors.push(a);
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
    function Fm(t, e, a) {
      try {
        $h = a.source ? nt(a.source) : null, Y1 = nt(e);
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
    function Od(t, e, a) {
      return a = el(a), a.tag = _1, a.payload = { element: null }, a.callback = function() {
        F(e.source, Us, t, e);
      }, a;
    }
    function Md(t) {
      return t = el(t), t.tag = _1, t;
    }
    function Rd(t, e, a, c) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = c.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          hi(a), F(
            c.source,
            Fm,
            e,
            a,
            c
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        hi(a), F(
          c.source,
          Fm,
          e,
          a,
          c
        ), typeof o != "function" && (Yf === null ? Yf = /* @__PURE__ */ new Set([this]) : Yf.add(this)), GT(this, c), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          nt(a) || "Unknown"
        );
      });
    }
    function Im(t, e, a, c, o) {
      if (a.flags |= 32768, Tu && Fo(t, o), c !== null && typeof c == "object" && typeof c.then == "function") {
        if (e = a.alternate, e !== null && En(
          e,
          a,
          o,
          !0
        ), Gt && (kc = !0), a = Xn.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return _u === null ? $o() : a.alternate === null && Xe === oo && (Xe = og), a.flags &= -257, a.flags |= 65536, a.lanes = o, c === eg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([c]) : e.add(c), $d(t, c, o)), !1;
            case 22:
              return a.flags |= 65536, c === eg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([c])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([c]) : a.add(c)), $d(t, c, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return $d(t, c, o), $o(), !1;
      }
      if (Gt)
        return kc = !0, e = Xn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, c !== S1 && os(
          $l(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: c }
            ),
            a
          )
        )) : (c !== S1 && os(
          $l(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: c }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, c = $l(c, a), o = Od(
          t.stateNode,
          c,
          o
        ), ms(t, o), Xe !== Bf && (Xe = zr)), !1;
      var f = $l(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: c }
        ),
        a
      );
      if (K0 === null ? K0 = [f] : K0.push(f), Xe !== Bf && (Xe = zr), e === null) return !0;
      c = $l(c, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = Od(
              a.stateNode,
              c,
              t
            ), ms(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Yf === null || !Yf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Md(o), Rd(
                o,
                t,
                a,
                c
              ), ms(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function yl(t, e, a, c) {
      e.child = t === null ? rb(e, null, a, c) : Er(
        e,
        t.child,
        a,
        c
      );
    }
    function Yp(t, e, a, c, o) {
      a = a.render;
      var f = e.ref;
      if ("ref" in c) {
        var d = {};
        for (var h in c)
          h !== "ref" && (d[h] = c[h]);
      } else d = c;
      return Ac(e), c = Lm(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = Ai(), t !== null && !Tl ? (gs(t, e, o), Rn(t, e, o)) : (Gt && h && cd(e), e.flags |= 1, yl(t, e, c, o), e.child);
    }
    function Pm(t, e, a, c, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !Cm(f) && f.defaultProps === void 0 && a.compare === null ? (a = gc(f), e.tag = 15, e.type = a, Qo(e, f), ty(
          t,
          e,
          a,
          c,
          o
        )) : (t = mi(
          a.type,
          null,
          c,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !Bd(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Ao, a(d, c) && t.ref === e.ref)
          return Rn(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = Fn(f, c), t.ref = e.ref, t.return = e, e.child = t;
    }
    function ty(t, e, a, c, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (Ao(f, c) && t.ref === e.ref && e.type === t.type)
          if (Tl = !1, e.pendingProps = c = f, Bd(t, o))
            (t.flags & 131072) !== 0 && (Tl = !0);
          else
            return e.lanes = t.lanes, Rn(t, e, o);
      }
      return ny(
        t,
        e,
        a,
        c,
        o
      );
    }
    function ey(t, e, a, c) {
      var o = c.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: E0,
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
          return ly(
            t,
            e,
            f,
            a,
            c
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Uo(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? md(e, f) : Lu(e), yd(e);
        else
          return c = e.lanes = 536870912, ly(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            c
          );
      } else
        f !== null ? (Uo(e, f.cachePool), md(e, f), au(e), e.memoizedState = null) : (t !== null && Uo(e, null), Lu(e), au(e));
      return yl(t, e, o, a), e.child;
    }
    function Bi(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: E0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function ly(t, e, a, c, o) {
      var f = Zu();
      return f = f === null ? null : {
        parent: gl._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && Uo(e, null), Lu(e), yd(e), t !== null && En(t, e, c, !0), e.childLanes = o, null;
    }
    function _s(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = Hs(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function ay(t, e, a) {
      return Er(e, t.child, null, a), t = _s(
        e,
        e.pendingProps
      ), t.flags |= 2, hl(e), e.memoizedState = null, t;
    }
    function jp(t, e, a) {
      var c = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (Gt) {
          if (c.mode === "hidden")
            return t = _s(e, c), e.lanes = 536870912, Bi(null, t);
          if (On(e), (t = Me) ? (a = ee(
            t,
            Ru
          ), a = a !== null && a.data === _r ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Rp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Bm(a), c.return = e, e.child = c, fa = e, Me = null)) : a = null, a === null)
            throw jl(e, t), Ia(e);
          return e.lanes = 536870912, null;
        }
        return _s(e, c);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (On(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = ay(
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
        else if (_p(), (a & 536870912) !== 0 && Ko(e), Tl || En(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, Tl || o) {
          if (c = ve, c !== null && (d = sp(
            c,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Yl(t, d), pt(c, t, d), j1;
          $o(), e = ay(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, Me = Ya(
            d.nextSibling
          ), fa = e, Gt = !0, Mf = null, kc = !1, Gn = null, Ru = !1, t !== null && Up(e, t), e = _s(e, c), e.flags |= 4096;
        return e;
      }
      return f = t.child, c = { mode: c.mode, children: c.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && Ko(e), t = Fn(f, c), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Cs(t, e) {
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
    function ny(t, e, a, c, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = jt(a) || "Unknown";
        Hb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Hb[f] = !0);
      }
      return e.mode & Sa && ic.recordLegacyContextWarning(
        e,
        null
      ), t === null && (Qo(e, e.type), a.contextTypes && (f = jt(a) || "Unknown", Nb[f] || (Nb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Ac(e), a = Lm(
        t,
        e,
        a,
        c,
        void 0,
        o
      ), c = Ai(), t !== null && !Tl ? (gs(t, e, o), Rn(t, e, o)) : (Gt && c && cd(e), e.flags |= 1, yl(t, e, a, o), e.child);
    }
    function uy(t, e, a, c, o, f) {
      return Ac(e), co = -1, X0 = t !== null && t.type !== e.type, e.updateQueue = null, a = ps(
        e,
        c,
        a,
        o
      ), we(t, e), c = Ai(), t !== null && !Tl ? (gs(t, e, f), Rn(t, e, f)) : (Gt && c && cd(e), e.flags |= 1, yl(t, e, a, f), e.child);
    }
    function Ni(t, e, a, c, o) {
      switch (kt(e)) {
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
          if (e.lanes |= h, d = ve, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Md(h), Rd(
            h,
            d,
            e,
            $l(f, e)
          ), ms(e, h);
      }
      if (Ac(e), e.stateNode === null) {
        if (d = Of, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== qn) && !_b.has(a) && (_b.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === ph ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          jt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Kt(f)), f = new a(c, d), e.mode & Sa) {
          de(!0);
          try {
            f = new a(c, d);
          } finally {
            de(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = q1, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = Tb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = jt(a) || "Component", Ab.has(d) || (Ab.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = jt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Db.has(f) || (Db.add(f), console.error(
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
        f = e.stateNode, d = jt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
        ), a.childContextTypes && !Ub.has(a) && (Ub.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Rb.has(a) && (Rb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          jt(a) || "A pure component"
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
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || zb.has(a) || (zb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          jt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Pe(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = c, f.state = e.memoizedState, f.refs = {}, qt(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? Kt(d) : Of, f.state === c && (d = jt(a) || "Component", Ob.has(d) || (Ob.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & Sa && ic.recordLegacyContextWarning(
          e,
          f
        ), ic.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Xo(
          e,
          a,
          d,
          c
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          nt(e) || "Component"
        ), q1.enqueueReplaceState(
          f,
          f.state,
          null
        )), lu(e, c, f, o), Co(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== yt && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var A = e.memoizedProps;
        h = ou(a, A), f.props = h;
        var D = f.context;
        y = a.contextType, d = Of, typeof y == "object" && y !== null && (d = Kt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", A = e.pendingProps !== A, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (A || D !== d) && iu(
          e,
          f,
          c,
          d
        ), Hf = !1;
        var S = e.memoizedState;
        f.state = S, lu(e, c, f, o), Co(), D = e.memoizedState, A || S !== D || Hf ? (typeof p == "function" && (Xo(
          e,
          a,
          p,
          c
        ), D = e.memoizedState), (h = Hf || Ad(
          e,
          a,
          h,
          c,
          S,
          D,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== yt && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== yt && (e.flags |= 134217728), e.memoizedProps = c, e.memoizedState = D), f.props = c, f.state = D, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== yt && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, tu(t, e), d = e.memoizedProps, y = ou(a, d), f.props = y, p = e.pendingProps, S = f.context, D = a.contextType, h = Of, typeof D == "object" && D !== null && (h = Kt(D)), A = a.getDerivedStateFromProps, (D = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || S !== h) && iu(
          e,
          f,
          c,
          h
        ), Hf = !1, S = e.memoizedState, f.state = S, lu(e, c, f, o), Co();
        var H = e.memoizedState;
        d !== p || S !== H || Hf || t !== null && t.dependencies !== null && Mo(t.dependencies) ? (typeof A == "function" && (Xo(
          e,
          a,
          A,
          c
        ), H = e.memoizedState), (y = Hf || Ad(
          e,
          a,
          y,
          c,
          S,
          H,
          h
        ) || t !== null && t.dependencies !== null && Mo(t.dependencies)) ? (D || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(c, H, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          c,
          H,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = c, e.memoizedState = H), f.props = c, f.state = H, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, Cs(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, Kf(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, Va = -1;
        else if (a = FS(h), e.mode & Sa) {
          de(!0);
          try {
            FS(h);
          } finally {
            de(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = Er(
          e,
          t.child,
          null,
          o
        ), e.child = Er(
          e,
          null,
          a,
          o
        )) : yl(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = Rn(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== c && (Wh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        nt(e) || "a component"
      ), Wh = !0), t;
    }
    function cy(t, e, a, c) {
      return Tc(), e.flags |= 256, yl(t, e, a, c), e.child;
    }
    function Qo(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = jt(e) || "Unknown", xb[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), xb[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = jt(e) || "Unknown", Bb[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), Bb[e] = !0));
    }
    function Vo(t) {
      return { baseLanes: t, cachePool: Gm() };
    }
    function Ud(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= dn), t;
    }
    function _d(t, e, a) {
      var c, o = e.pendingProps;
      Bt(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((c = d) || (c = t !== null && t.memoizedState === null ? !1 : (cl.current & j0) !== 0), c && (f = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Gt) {
          if (f ? Il(e) : au(e), (t = Me) ? (a = ee(
            t,
            Ru
          ), a = a !== null && a.data !== _r ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Rp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Bm(a), c.return = e, e.child = c, fa = e, Me = null)) : a = null, a === null)
            throw jl(e, t), Ia(e);
          return Gy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          au(e);
          var y = e.mode;
          return h = Hs(
            { mode: "hidden", children: h },
            y
          ), o = yi(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = Vo(a), o.childLanes = Ud(
            t,
            c,
            a
          ), e.memoizedState = G1, Bi(
            null,
            o
          );
        }
        return Il(e), iy(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var A = p.dehydrated;
        if (A !== null) {
          if (d)
            e.flags & 256 ? (Il(e), e.flags &= -257, e = Cd(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (au(e), e.child = t.child, e.flags |= 128, e = null) : (au(e), h = o.fallback, y = e.mode, o = Hs(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = yi(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, Er(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = Vo(a), o.childLanes = Ud(
              t,
              c,
              a
            ), e.memoizedState = G1, e = Bi(
              null,
              o
            ));
          else if (Il(e), _p(), (a & 536870912) !== 0 && Ko(e), Gy(
            A
          )) {
            if (c = A.nextSibling && A.nextSibling.dataset, c) {
              h = c.dgst;
              var D = c.msg;
              y = c.stck;
              var S = c.cstck;
            }
            f = D, c = h, o = y, A = S, h = f, y = A, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = c, c = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: c
            }, typeof c == "string" && g1.set(
              h,
              o
            ), os(o), e = Cd(
              t,
              e,
              a
            );
          } else if (Tl || En(
            t,
            e,
            a,
            !1
          ), c = (a & t.childLanes) !== 0, Tl || c) {
            if (c = ve, c !== null && (o = sp(
              c,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Yl(
                t,
                o
              ), pt(
                c,
                t,
                o
              ), j1;
            ks(
              A
            ) || $o(), e = Cd(
              t,
              e,
              a
            );
          } else
            ks(
              A
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, Me = Ya(
              A.nextSibling
            ), fa = e, Gt = !0, Mf = null, kc = !1, Gn = null, Ru = !1, t !== null && Up(e, t), e = iy(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (au(e), h = o.fallback, y = e.mode, S = t.child, A = S.sibling, o = Fn(
        S,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = S.subtreeFlags & 65011712, A !== null ? h = Fn(
        A,
        h
      ) : (h = yi(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, Bi(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = Vo(a) : (y = h.cachePool, y !== null ? (S = gl._currentValue, y = y.parent !== S ? { parent: S, pool: S } : y) : y = Gm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ud(
        t,
        c,
        a
      ), e.memoizedState = G1, Bi(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && Ko(e), Il(e), a = t.child, t = a.sibling, a = Fn(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function iy(t, e) {
      return e = Hs(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function Hs(t, e) {
      return t = Nt(22, t, null, e), t.lanes = 0, t;
    }
    function Cd(t, e, a) {
      return Er(e, t.child, null, a), t = iy(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function oy(t, e, a) {
      t.lanes |= e;
      var c = t.alternate;
      c !== null && (c.lanes |= e), od(
        t.return,
        e,
        a
      );
    }
    function Hd(t, e, a, c, o, f) {
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
    function fy(t, e, a) {
      var c = e.pendingProps, o = c.revealOrder, f = c.tail, d = c.children, h = cl.current;
      if ((c = (h & j0) !== 0) ? (h = h & wh | j0, e.flags |= 128) : h &= wh, Ut(cl, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !qb[h])
        if (qb[h] = !0, o == null)
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
      h = f ?? "null", ig[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (ig[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (ig[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (ig[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      t: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (Pe(d)) {
          for (h = 0; h < d.length; h++)
            if (!he(
              d[h],
              h
            ))
              break t;
        } else if (h = ke(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!he(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (yl(t, e, d, a), Gt ? (bc(), d = A0) : d = 0, !c && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && oy(t, a, e);
          else if (t.tag === 19)
            oy(t, a, e);
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
            t = a.alternate, t !== null && Ei(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Hd(
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
            if (t = o.alternate, t !== null && Ei(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          Hd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Hd(
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
      if (t !== null && (e.dependencies = t.dependencies), Va = -1, xf |= e.lanes, (a & e.childLanes) === 0)
        if (t !== null) {
          if (En(
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
    function Bd(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Mo(t)));
    }
    function Gp(t, e, a) {
      switch (e.tag) {
        case 3:
          fl(
            e,
            e.stateNode.containerInfo
          ), Pa(
            e,
            gl,
            t.memoizedState.cache
          ), Tc();
          break;
        case 27:
        case 5:
          w(e);
          break;
        case 4:
          fl(
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
            return c.dehydrated !== null ? (Il(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? _d(
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
          if (c = (a & e.childLanes) !== 0, c || (En(
            t,
            e,
            a,
            !1
          ), c = (a & e.childLanes) !== 0), o) {
            if (c)
              return fy(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ut(
            cl,
            cl.current,
            e
          ), c) break;
          return null;
        case 22:
          return e.lanes = 0, ey(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          Pa(
            e,
            gl,
            t.memoizedState.cache
          );
      }
      return Rn(t, e, a);
    }
    function Bs(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = mi(
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
          Tl = !0;
        else {
          if (!Bd(t, a) && (e.flags & 128) === 0)
            return Tl = !1, Gp(
              t,
              e,
              a
            );
          Tl = (t.flags & 131072) !== 0;
        }
      else
        Tl = !1, (c = Gt) && (bc(), c = (e.flags & 1048576) !== 0), c && (c = e.index, bc(), Nm(e, A0, c));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (c = e.pendingProps, t = Ra(e.elementType), e.type = t, typeof t == "function")
            Cm(t) ? (c = ou(
              t,
              c
            ), e.tag = 1, e.type = t = gc(t), e = Ni(
              null,
              e,
              t,
              c,
              a
            )) : (e.tag = 0, Qo(e, t), e.type = t = gc(t), e = ny(
              null,
              e,
              t,
              c,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === df) {
                e.tag = 11, e.type = t = nd(t), e = Yp(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              } else if (o === cr) {
                e.tag = 14, e = Pm(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === Xl && (e = " Did you wrap a component in React.lazy() more than once?"), a = jt(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return ny(
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
          ), Ni(
            t,
            e,
            c,
            o,
            a
          );
        case 3:
          t: {
            if (fl(
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
            if (c = d.cache, Pa(e, gl, c), c !== f.cache && Xu(
              e,
              [gl],
              a,
              !0
            ), Co(), c = d.element, f.isDehydrated)
              if (f = {
                element: c,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = cy(
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
                ), os(o), e = cy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else
                for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Me = Ya(t.firstChild), fa = e, Gt = !0, Mf = null, kc = !1, Gn = null, Ru = !0, a = rb(
                  e,
                  null,
                  c,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Tc(), c === o) {
                e = Rn(
                  t,
                  e,
                  a
                );
                break t;
              }
              yl(
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
          return Cs(t, e), t === null ? (a = Zy(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : Gt || (a = e.type, t = e.pendingProps, c = ql(
            ja.current
          ), c = $s(
            c
          ).createElement(a), c[De] = e, c[oa] = t, ze(c, a, t), Ze(c), e.stateNode = c) : e.memoizedState = Zy(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return w(e), t === null && Gt && (c = ql(ja.current), o = V(), c = e.stateNode = lc(
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
          ), o !== null && (pi(e, 0).serverProps = o)), fa = e, Ru = !0, o = Me, Zc(e.type) ? (oS = o, Me = Ya(
            c.firstChild
          )) : Me = o), yl(
            t,
            e,
            e.pendingProps.children,
            a
          ), Cs(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && Gt && (f = V(), c = If(
            e.type,
            f.ancestorInfo
          ), o = Me, (d = !o) || (d = yv(
            o,
            e.type,
            e.pendingProps,
            Ru
          ), d !== null ? (e.stateNode = d, kc || (f = pa(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (pi(e, 0).serverProps = f)), fa = e, Me = Ya(
            d.firstChild
          ), Ru = !1, f = !0) : f = !1, d = !f), d && (c && jl(e, o), Ia(e))), w(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, c = f.children, lf(o, f) ? c = null : d !== null && lf(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = Lm(
            t,
            e,
            vs,
            null,
            null,
            a
          ), lp._currentValue = o), Cs(t, e), yl(
            t,
            e,
            c,
            a
          ), e.child;
        case 6:
          return t === null && Gt && (a = e.pendingProps, t = V(), c = t.ancestorInfo.current, a = c != null ? Pf(
            a,
            c.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = Me, (c = !t) || (c = pv(
            t,
            e.pendingProps,
            Ru
          ), c !== null ? (e.stateNode = c, fa = e, Me = null, c = !0) : c = !1, c = !c), c && (a && jl(e, t), Ia(e))), null;
        case 13:
          return _d(t, e, a);
        case 4:
          return fl(
            e,
            e.stateNode.containerInfo
          ), c = e.pendingProps, t === null ? e.child = Er(
            e,
            null,
            c,
            a
          ) : yl(
            t,
            e,
            c,
            a
          ), e.child;
        case 11:
          return Yp(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 7:
          return yl(
            t,
            e,
            e.pendingProps,
            a
          ), e.child;
        case 8:
          return yl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 12:
          return e.flags |= 4, e.flags |= 2048, c = e.stateNode, c.effectDuration = -0, c.passiveEffectDuration = -0, yl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 10:
          return c = e.type, o = e.pendingProps, f = o.value, "value" in o || Yb || (Yb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Pa(e, c, f), yl(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, c = e.pendingProps.children, typeof c != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Ac(e), o = Kt(o), c = O1(
            c,
            o,
            void 0
          ), e.flags |= 1, yl(
            t,
            e,
            c,
            a
          ), e.child;
        case 14:
          return Pm(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return ty(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return fy(
            t,
            e,
            a
          );
        case 31:
          return jp(t, e, a);
        case 22:
          return ey(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return Ac(e), c = Kt(gl), t === null ? (o = Zu(), o === null && (o = ve, f = fd(), o.pooledCache = f, gi(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: c,
            cache: o
          }, qt(e), Pa(e, gl, o)) : ((t.lanes & a) !== 0 && (tu(t, e), lu(e, null, null, a), Co()), o = t.memoizedState, f = e.memoizedState, o.parent !== c ? (o = {
            parent: c,
            cache: c
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Pa(e, gl, c)) : (c = f.cache, Pa(e, gl, c), c !== o.cache && Xu(
            e,
            [gl],
            a,
            !0
          ))), yl(
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
    function Nd(t, e, a, c, o) {
      if ((e = (t.mode & NT) !== yt) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (My()) t.flags |= 8192;
          else
            throw Tr = eg, R1;
      } else t.flags &= -16777217;
    }
    function Xp(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & Bu) !== Br)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !Ht(e))
        if (My()) t.flags |= 8192;
        else
          throw Tr = eg, R1;
    }
    function Zo(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Yr() : 536870912, t.lanes |= e, Mr |= e);
    }
    function Lo(t, e) {
      if (!Gt)
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
    function ce(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, c = 0;
      if (e)
        if ((t.mode & Ot) !== yt) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, c |= o.subtreeFlags & 65011712, c |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & Ot) !== yt) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, c |= o.subtreeFlags, c |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= c, t.childLanes = a, e;
    }
    function sy(t, e, a) {
      var c = e.pendingProps;
      switch (id(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ce(e), null;
        case 1:
          return ce(e), null;
        case 3:
          return a = e.stateNode, c = null, t !== null && (c = t.memoizedState.cache), e.memoizedState.cache !== c && (e.flags |= 2048), Tn(gl, e), O(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (vi(e) ? (Ec(), fu(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, is())), ce(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (fu(e), f !== null ? (ce(e), Xp(
            e,
            f
          )) : (ce(e), Nd(
            e,
            o,
            null,
            c,
            a
          ))) : f ? f !== t.memoizedState ? (fu(e), ce(e), Xp(
            e,
            f
          )) : (ce(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== c && fu(e), ce(e), Nd(
            e,
            o,
            t,
            c,
            a
          )), null;
        case 27:
          if (ft(e), a = ql(ja.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && fu(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ce(e), null;
            }
            t = V(), vi(e) ? xm(e) : (t = lc(
              o,
              c,
              a,
              t,
              !0
            ), e.stateNode = t, fu(e));
          }
          return ce(e), null;
        case 5:
          if (ft(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && fu(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ce(e), null;
            }
            var d = V();
            if (vi(e))
              xm(e);
            else {
              switch (f = ql(ja.current), If(o, d.ancestorInfo), d = d.context, f = $s(f), d) {
                case am:
                  f = f.createElementNS(
                    At,
                    o
                  );
                  break;
                case Mg:
                  f = f.createElementNS(
                    bt,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        At,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        bt,
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
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Ga.call(i2, o) || (i2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[De] = e, f[oa] = c;
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
              t: switch (ze(f, o, c), o) {
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
          return ce(e), Nd(
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
            if (t = ql(ja.current), a = V(), vi(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !kc, c = null, f = fa, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Sv(
                      t,
                      a,
                      c
                    ), o !== null && (pi(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    c = f.memoizedProps, o && (o = Sv(
                      t,
                      a,
                      c
                    ), o !== null && (pi(
                      e,
                      0
                    ).serverProps = o));
                }
              t[De] = e, t = !!(t.nodeValue === a || c !== null && c.suppressHydrationWarning === !0 || Yy(t.nodeValue, a)), t || Ia(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && Pf(
                c,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = $s(t).createTextNode(
                c
              ), t[De] = e, e.stateNode = t;
          }
          return ce(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (c = vi(e), a !== null) {
              if (t === null) {
                if (!c)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[De] = e, ce(e), (e.mode & Ot) !== yt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                Ec(), Tc(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, ce(e), (e.mode & Ot) !== yt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = is(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (hl(e), e) : (hl(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return ce(e), null;
        case 13:
          if (c = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = c, f = vi(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[De] = e, ce(e), (e.mode & Ot) !== yt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                Ec(), Tc(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, ce(e), (e.mode & Ot) !== yt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = is(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (hl(e), e) : (hl(e), null);
          }
          return hl(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & Ot) !== yt && bi(e), e) : (a = c !== null, t = t !== null && t.memoizedState !== null, a && (c = e.child, o = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (o = c.alternate.memoizedState.cachePool.pool), f = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (f = c.memoizedState.cachePool.pool), f !== o && (c.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Zo(e, e.updateQueue), ce(e), (e.mode & Ot) !== yt && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return O(e), t === null && Qc(
            e.stateNode.containerInfo
          ), ce(e), null;
        case 10:
          return Tn(e.type, e), ce(e), null;
        case 19:
          if (xt(cl, e), c = e.memoizedState, c === null) return ce(e), null;
          if (o = (e.flags & 128) !== 0, f = c.rendering, f === null)
            if (o) Lo(c, !1);
            else {
              if (Xe !== oo || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = Ei(t), f !== null) {
                    for (e.flags |= 128, Lo(c, !1), t = f.updateQueue, e.updateQueue = t, Zo(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      Hm(a, t), a = a.sibling;
                    return Ut(
                      cl,
                      cl.current & wh | j0,
                      e
                    ), Gt && bn(e, c.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              c.tail !== null && vl() > mg && (e.flags |= 128, o = !0, Lo(c, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = Ei(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Zo(e, t), Lo(c, !0), c.tail === null && c.tailMode === "hidden" && !f.alternate && !Gt)
                  return ce(e), null;
              } else
                2 * vl() - c.renderingStartTime > mg && a !== 536870912 && (e.flags |= 128, o = !0, Lo(c, !1), e.lanes = 4194304);
            c.isBackwards ? (f.sibling = e.child, e.child = f) : (t = c.last, t !== null ? t.sibling = f : e.child = f, c.last = f);
          }
          return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = vl(), t.sibling = null, a = cl.current, a = o ? a & wh | j0 : a & wh, Ut(cl, a, e), Gt && bn(e, c.treeForkCount), t) : (ce(e), null);
        case 22:
        case 23:
          return hl(e), Dn(e), c = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== c && (e.flags |= 8192) : c && (e.flags |= 8192), c ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (ce(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ce(e), a = e.updateQueue, a !== null && Zo(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), c = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (c = e.memoizedState.cachePool.pool), c !== a && (e.flags |= 2048), t !== null && xt(Sr, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Tn(gl, e), ce(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Qp(t, e) {
      switch (id(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ot) !== yt && bi(e), e) : null;
        case 3:
          return Tn(gl, e), O(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return ft(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (hl(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Tc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ot) !== yt && bi(e), e) : null;
        case 13:
          if (hl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Tc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ot) !== yt && bi(e), e) : null;
        case 19:
          return xt(cl, e), null;
        case 4:
          return O(e), null;
        case 10:
          return Tn(e.type, e), null;
        case 22:
        case 23:
          return hl(e), Dn(e), t !== null && xt(Sr, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ot) !== yt && bi(e), e) : null;
        case 24:
          return Tn(gl, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ry(t, e) {
      switch (id(e), e.tag) {
        case 3:
          Tn(gl, e), O(e);
          break;
        case 26:
        case 27:
        case 5:
          ft(e);
          break;
        case 4:
          O(e);
          break;
        case 31:
          e.memoizedState !== null && hl(e);
          break;
        case 13:
          hl(e);
          break;
        case 19:
          xt(cl, e);
          break;
        case 10:
          Tn(e.type, e);
          break;
        case 22:
        case 23:
          hl(e), Dn(e), t !== null && xt(Sr, e);
          break;
        case 24:
          Tn(gl, e);
      }
    }
    function su(t) {
      return (t.mode & Ot) !== yt;
    }
    function Vp(t, e) {
      su(t) ? (qe(), Fu(e, t), kl()) : Fu(e, t);
    }
    function xd(t, e, a) {
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
            if ((a.tag & t) === t && (c = void 0, (t & Za) !== ag && (tm = !0), c = F(
              e,
              XT,
              a
            ), (t & Za) !== ag && (tm = !1), c !== void 0 && typeof c != "function")) {
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

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + c, F(
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
        Et(e, e.return, h);
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
              h !== void 0 && (d.destroy = void 0, (t & Za) !== ag && (tm = !0), o = e, F(
                o,
                QT,
                o,
                a,
                h
              ), (t & Za) !== ag && (tm = !1));
            }
            c = c.next;
          } while (c !== f);
        }
      } catch (y) {
        Et(e, e.return, y);
      }
    }
    function Ns(t, e) {
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
    function dy(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || Wh || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          nt(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          nt(t) || "instance"
        ));
        try {
          F(
            t,
            Ho,
            e,
            a
          );
        } catch (c) {
          Et(t, t.return, c);
        }
      }
    }
    function xs(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function Zp(t, e) {
      var a = e.memoizedProps, c = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || Wh || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        nt(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        nt(t) || "instance"
      ));
      try {
        var o = ou(
          t.type,
          a
        ), f = F(
          t,
          xs,
          e,
          o,
          c
        );
        a = jb, f !== void 0 || a.has(t.type) || (a.add(t.type), F(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            nt(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Et(t, t.return, d);
      }
    }
    function Yd(t, e, a) {
      a.props = ou(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, su(t) ? (qe(), F(
        t,
        ab,
        t,
        e,
        a
      ), kl()) : F(
        t,
        ab,
        t,
        e,
        a
      );
    }
    function Lp(t) {
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
            nt(t)
          ), e.current = a;
      }
    }
    function xi(t, e) {
      try {
        F(t, Lp, t);
      } catch (a) {
        Et(t, e, a);
      }
    }
    function nn(t, e) {
      var a = t.ref, c = t.refCleanup;
      if (a !== null)
        if (typeof c == "function")
          try {
            if (su(t))
              try {
                qe(), F(t, c);
              } finally {
                kl(t);
              }
            else F(t, c);
          } catch (o) {
            Et(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (su(t))
              try {
                qe(), F(t, a, null);
              } finally {
                kl(t);
              }
            else F(t, a, null);
          } catch (o) {
            Et(t, e, o);
          }
        else a.current = null;
    }
    function hy(t, e, a, c) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", Fv && (e = "nested-update"), typeof o == "function" && o(
        f,
        e,
        t.actualDuration,
        t.treeBaseDuration,
        t.actualStartTime,
        a
      ), typeof d == "function" && d(f, e, c, a);
    }
    function wp(t, e, a, c) {
      var o = t.memoizedProps;
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", Fv && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        c,
        a
      );
    }
    function qc(t) {
      var e = t.type, a = t.memoizedProps, c = t.stateNode;
      try {
        F(
          t,
          nv,
          c,
          e,
          a,
          t
        );
      } catch (o) {
        Et(t, t.return, o);
      }
    }
    function jd(t, e, a) {
      try {
        F(
          t,
          nh,
          t.stateNode,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        Et(t, t.return, c);
      }
    }
    function my(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Zc(t.type) || t.tag === 4;
    }
    function Gd(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || my(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Zc(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function wo(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? (cv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (cv(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ka));
      else if (c !== 4 && (c === 27 && Zc(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (wo(t, e, a), t = t.sibling; t !== null; )
          wo(t, e, a), t = t.sibling;
    }
    function qs(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (c !== 4 && (c === 27 && Zc(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (qs(t, e, a), t = t.sibling; t !== null; )
          qs(t, e, a), t = t.sibling;
    }
    function yy(t) {
      for (var e, a = t.return; a !== null; ) {
        if (my(a)) {
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
          e = e.stateNode, a = Gd(t), qs(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (uh(a), e.flags &= -33), e = Gd(t), qs(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = Gd(t), wo(
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
    function py(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        F(
          t,
          gu,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        Et(t, t.return, c);
      }
    }
    function vy(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function Wg(t, e) {
      if (t = t.containerInfo, uS = Cg, t = td(t), zm(t)) {
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
              var d = 0, h = -1, y = -1, p = 0, A = 0, D = t, S = null;
              e: for (; ; ) {
                for (var H; D !== a || o !== 0 && D.nodeType !== 3 || (h = d + o), D !== f || c !== 0 && D.nodeType !== 3 || (y = d + c), D.nodeType === 3 && (d += D.nodeValue.length), (H = D.firstChild) !== null; )
                  S = D, D = H;
                for (; ; ) {
                  if (D === t) break e;
                  if (S === a && ++p === o && (h = d), S === f && ++A === c && (y = d), (H = D.nextSibling) !== null) break;
                  D = S, S = D.parentNode;
                }
                D = H;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (cS = {
        focusedElem: t,
        selectionRange: a
      }, Cg = !1, Zl = e; Zl !== null; )
        if (e = Zl, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, Zl = t;
        else
          for (; Zl !== null; ) {
            switch (t = e = Zl, a = t.alternate, o = t.flags, t.tag) {
              case 0:
                if ((o & 4) !== 0 && (t = t.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (a = 0; a < t.length; a++)
                    o = t[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Zp(t, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (t = t.stateNode.containerInfo, a = t.nodeType, a === 9)
                    nf(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        nf(t);
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
              t.return = e.return, Zl = t;
              break;
            }
            Zl = e.return;
          }
    }
    function Xd(t, e, a) {
      var c = Ee(), o = tn(), f = Oa(), d = en(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ba(t, a), h & 4 && Vp(a, Qn | Cu);
          break;
        case 1:
          if (Ba(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Wh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                nt(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                nt(a) || "instance"
              )), su(a) ? (qe(), F(
                a,
                M1,
                a,
                t
              ), kl()) : F(
                a,
                M1,
                a,
                t
              );
            else {
              var y = ou(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Wh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                nt(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                nt(a) || "instance"
              )), su(a) ? (qe(), F(
                a,
                tb,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), kl()) : F(
                a,
                tb,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && dy(a), h & 512 && xi(a, a.return);
          break;
        case 3:
          if (e = Pn(), Ba(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
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
              F(
                a,
                Ho,
                h,
                y
              );
            } catch (A) {
              Et(a, a.return, A);
            }
          }
          t.effectDuration += Ro(e);
          break;
        case 27:
          e === null && h & 4 && py(a);
        case 26:
        case 5:
          if (Ba(t, a), e === null) {
            if (h & 4) qc(a);
            else if (h & 64) {
              t = a.type, e = a.memoizedProps, y = a.stateNode;
              try {
                F(
                  a,
                  uv,
                  y,
                  t,
                  e,
                  a
                );
              } catch (A) {
                Et(
                  a,
                  a.return,
                  A
                );
              }
            }
          }
          h & 512 && xi(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Pn(), Ba(t, a), t = a.stateNode, t.effectDuration += Wl(h);
            try {
              F(
                a,
                hy,
                a,
                e,
                Rf,
                t.effectDuration
              );
            } catch (A) {
              Et(a, a.return, A);
            }
          } else Ba(t, a);
          break;
        case 31:
          Ba(t, a), h & 4 && Sy(t, a);
          break;
        case 13:
          Ba(t, a), h & 4 && by(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = Pu.bind(
            null,
            a
          ), vv(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || io, !h) {
            e = e !== null && e.memoizedState !== null || El, y = io;
            var p = El;
            io = h, (El = e) && !p ? (Un(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Ot) !== yt && 0 <= ot && 0 <= dt && 0.05 < dt - ot && ed(
              a,
              ot,
              dt
            )) : Ba(t, a), io = y, El = p;
          }
          break;
        case 30:
          break;
        default:
          Ba(t, a);
      }
      (a.mode & Ot) !== yt && 0 <= ot && 0 <= dt && ((We || 0.05 < Ge) && Sn(
        a,
        ot,
        dt,
        Ge,
        Ne
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < dt - ot && (vy(
        a.return.alternate,
        a.return
      ) || Fa(
        a,
        ot,
        dt,
        "Mount"
      ))), rl(c), Da(o), Ne = f, We = d;
    }
    function Ke(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Ke(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && fm(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function be(t, e, a) {
      for (a = a.child; a !== null; )
        gy(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function gy(t, e, a) {
      if (nl && typeof nl.onCommitFiberUnmount == "function")
        try {
          nl.onCommitFiberUnmount($i, a);
        } catch (p) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var c = Ee(), o = tn(), f = Oa(), d = en();
      switch (a.tag) {
        case 26:
          El || nn(a, e), be(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          El || nn(a, e);
          var h = Al, y = sn;
          Zc(a.type) && (Al = a.stateNode, sn = !1), be(
            t,
            e,
            a
          ), F(
            a,
            ac,
            a.stateNode
          ), Al = h, sn = y;
          break;
        case 5:
          El || nn(a, e);
        case 6:
          if (h = Al, y = sn, Al = null, be(
            t,
            e,
            a
          ), Al = h, sn = y, Al !== null)
            if (sn)
              try {
                F(
                  a,
                  ov,
                  Al,
                  a.stateNode
                );
              } catch (p) {
                Et(
                  a,
                  e,
                  p
                );
              }
            else
              try {
                F(
                  a,
                  iv,
                  Al,
                  a.stateNode
                );
              } catch (p) {
                Et(
                  a,
                  e,
                  p
                );
              }
          break;
        case 18:
          Al !== null && (sn ? (t = Al, Xi(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), Li(t)) : Xi(Al, a.stateNode));
          break;
        case 4:
          h = Al, y = sn, Al = a.stateNode.containerInfo, sn = !0, be(
            t,
            e,
            a
          ), Al = h, sn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          xc(
            Za,
            a,
            e
          ), El || xd(
            a,
            e,
            Qn
          ), be(
            t,
            e,
            a
          );
          break;
        case 1:
          El || (nn(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && Yd(
            a,
            e,
            h
          )), be(
            t,
            e,
            a
          );
          break;
        case 21:
          be(
            t,
            e,
            a
          );
          break;
        case 22:
          El = (h = El) || a.memoizedState !== null, be(
            t,
            e,
            a
          ), El = h;
          break;
        default:
          be(
            t,
            e,
            a
          );
      }
      (a.mode & Ot) !== yt && 0 <= ot && 0 <= dt && (We || 0.05 < Ge) && Sn(
        a,
        ot,
        dt,
        Ge,
        Ne
      ), rl(c), Da(o), Ne = f, We = d;
    }
    function Sy(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          F(
            e,
            ch,
            t
          );
        } catch (a) {
          Et(e, e.return, a);
        }
      }
    }
    function by(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          F(
            e,
            Qy,
            t
          );
        } catch (a) {
          Et(e, e.return, a);
        }
    }
    function Jp(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new Gb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Gb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function Yc(t, e) {
      var a = Jp(t);
      e.forEach(function(c) {
        if (!a.has(c)) {
          if (a.add(c), Tu)
            if (kh !== null && Fh !== null)
              Fo(Fh, kh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = ji.bind(null, t, c);
          c.then(o, o);
        }
      });
    }
    function ea(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var c = 0; c < a.length; c++) {
          var o = t, f = e, d = a[c], h = Ee(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (Zc(y.type)) {
                  Al = y.stateNode, sn = !1;
                  break t;
                }
                break;
              case 5:
                Al = y.stateNode, sn = !1;
                break t;
              case 3:
              case 4:
                Al = y.stateNode.containerInfo, sn = !0;
                break t;
            }
            y = y.return;
          }
          if (Al === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          gy(o, f, d), Al = null, sn = !1, (d.mode & Ot) !== yt && 0 <= ot && 0 <= dt && 0.05 < dt - ot && Fa(
            d,
            ot,
            dt,
            "Unmount"
          ), rl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          Ys(e, t), e = e.sibling;
    }
    function Ys(t, e) {
      var a = Ee(), c = tn(), o = Oa(), f = en(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(e, t), la(t), h & 4 && (xc(
            Za | Cu,
            t,
            t.return
          ), Fu(Za | Cu, t), xd(
            t,
            t.return,
            Qn | Cu
          ));
          break;
        case 1:
          if (ea(e, t), la(t), h & 512 && (El || d === null || nn(d, d.return)), h & 64 && io && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = fc, ea(e, t), la(t), h & 512 && (El || d === null || nn(d, d.return)), h & 4) {
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
                        )[0], (!p || p[bf] || p[De] || p.namespaceURI === At || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ze(p, h, d), p[De] = t, Ze(p), h = p;
                        break t;
                      case "link":
                        var A = of(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (A) {
                          for (var D = 0; D < A.length; D++)
                            if (p = A[D], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), ze(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (A = of(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (D = 0; D < A.length; D++)
                            if (p = A[D], ne(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), ze(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[De] = t, Ze(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  Tv(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = fh(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Tv(
                y,
                t.type,
                t.stateNode
              ) : fh(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && jd(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          ea(e, t), la(t), h & 512 && (El || d === null || nn(d, d.return)), d !== null && h & 4 && jd(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (ea(e, t), la(t), h & 512 && (El || d === null || nn(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              F(
                t,
                uh,
                y
              );
            } catch (k) {
              Et(t, t.return, k);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, jd(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (X1 = !0, t.type !== "form" && console.error(
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
              F(
                t,
                kg,
                y,
                d,
                h
              );
            } catch (k) {
              Et(t, t.return, k);
            }
          }
          break;
        case 3:
          if (y = Pn(), Rg = null, p = fc, fc = ih(e.containerInfo), ea(e, t), fc = p, la(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              F(
                t,
                Xy,
                e.containerInfo
              );
            } catch (k) {
              Et(t, t.return, k);
            }
          X1 && (X1 = !1, Kp(t)), e.effectDuration += Ro(
            y
          );
          break;
        case 4:
          h = fc, fc = ih(
            t.stateNode.containerInfo
          ), ea(e, t), la(t), fc = h;
          break;
        case 12:
          h = Pn(), ea(e, t), la(t), t.stateNode.effectDuration += Wl(h);
          break;
        case 31:
          ea(e, t), la(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Yc(t, h)));
          break;
        case 13:
          ea(e, t), la(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (hg = vl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Yc(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var S = d !== null && d.memoizedState !== null, H = io, J = El;
          if (io = H || y, El = J || S, ea(e, t), El = J, io = H, S && !y && !H && !J && (t.mode & Ot) !== yt && 0 <= ot && 0 <= dt && 0.05 < dt - ot && ed(
            t,
            ot,
            dt
          ), la(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~E0 : e._visibility | E0, !y || d === null || S || io || El || (jc(t), (t.mode & Ot) !== yt && 0 <= ot && 0 <= dt && 0.05 < dt - ot && Fa(
              t,
              ot,
              dt,
              "Disconnect"
            )), d = null, e = t; ; ) {
              if (e.tag === 5 || e.tag === 26) {
                if (d === null) {
                  S = d = e;
                  try {
                    p = S.stateNode, y ? F(
                      S,
                      sv,
                      p
                    ) : F(
                      S,
                      hv,
                      S.stateNode,
                      S.memoizedProps
                    );
                  } catch (k) {
                    Et(S, S.return, k);
                  }
                }
              } else if (e.tag === 6) {
                if (d === null) {
                  S = e;
                  try {
                    A = S.stateNode, y ? F(
                      S,
                      rv,
                      A
                    ) : F(
                      S,
                      mv,
                      A,
                      S.memoizedProps
                    );
                  } catch (k) {
                    Et(S, S.return, k);
                  }
                }
              } else if (e.tag === 18) {
                if (d === null) {
                  S = e;
                  try {
                    D = S.stateNode, y ? F(
                      S,
                      fv,
                      D
                    ) : F(
                      S,
                      dv,
                      S.stateNode
                    );
                  } catch (k) {
                    Et(S, S.return, k);
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
          h & 4 && (h = t.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, Yc(t, d))));
          break;
        case 19:
          ea(e, t), la(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Yc(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ea(e, t), la(t);
      }
      (t.mode & Ot) !== yt && 0 <= ot && 0 <= dt && ((We || 0.05 < Ge) && Sn(
        t,
        ot,
        dt,
        Ge,
        Ne
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < dt - ot && (vy(
        t.return.alternate,
        t.return
      ) || Fa(
        t,
        ot,
        dt,
        "Mount"
      ))), rl(a), Da(c), Ne = o, We = f;
    }
    function la(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          F(t, yy, t);
        } catch (a) {
          Et(t, t.return, a);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function Kp(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          Kp(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function Ba(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          Xd(t, e.alternate, e), e = e.sibling;
    }
    function Qd(t) {
      var e = Ee(), a = tn(), c = Oa(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xd(
            t,
            t.return,
            Qn
          ), jc(t);
          break;
        case 1:
          nn(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && Yd(
            t,
            t.return,
            f
          ), jc(t);
          break;
        case 27:
          F(
            t,
            ac,
            t.stateNode
          );
        case 26:
        case 5:
          nn(t, t.return), jc(t);
          break;
        case 22:
          t.memoizedState === null && jc(t);
          break;
        case 30:
          jc(t);
          break;
        default:
          jc(t);
      }
      (t.mode & Ot) !== yt && 0 <= ot && 0 <= dt && (We || 0.05 < Ge) && Sn(
        t,
        ot,
        dt,
        Ge,
        Ne
      ), rl(e), Da(a), Ne = c, We = o;
    }
    function jc(t) {
      for (t = t.child; t !== null; )
        Qd(t), t = t.sibling;
    }
    function Ty(t, e, a, c) {
      var o = Ee(), f = tn(), d = Oa(), h = en(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            t,
            a,
            c
          ), Vp(a, Qn);
          break;
        case 1:
          if (Un(
            t,
            a,
            c
          ), e = a.stateNode, typeof e.componentDidMount == "function" && F(
            a,
            M1,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              F(
                a,
                Vm,
                e,
                t
              );
            } catch (p) {
              Et(a, a.return, p);
            }
          }
          c && y & 64 && dy(a), xi(a, a.return);
          break;
        case 27:
          py(a);
        case 26:
        case 5:
          Un(
            t,
            a,
            c
          ), c && e === null && y & 4 && qc(a), xi(a, a.return);
          break;
        case 12:
          if (c && y & 4) {
            y = Pn(), Un(
              t,
              a,
              c
            ), c = a.stateNode, c.effectDuration += Wl(y);
            try {
              F(
                a,
                hy,
                a,
                e,
                Rf,
                c.effectDuration
              );
            } catch (p) {
              Et(a, a.return, p);
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
          ), c && y & 4 && Sy(t, a);
          break;
        case 13:
          Un(
            t,
            a,
            c
          ), c && y & 4 && by(t, a);
          break;
        case 22:
          a.memoizedState === null && Un(
            t,
            a,
            c
          ), xi(a, a.return);
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
      (a.mode & Ot) !== yt && 0 <= ot && 0 <= dt && (We || 0.05 < Ge) && Sn(
        a,
        ot,
        dt,
        Ge,
        Ne
      ), rl(o), Da(f), Ne = d, We = h;
    }
    function Un(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        Ty(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function js(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && gi(t), a != null && ss(a));
    }
    function Gs(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (gi(e), t != null && ss(t));
    }
    function Na(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          Ey(
            t,
            e,
            a,
            c,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function Ey(t, e, a, c, o) {
      var f = Ee(), d = tn(), h = Oa(), y = en(), p = zf, A = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & Ot) !== yt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ld(
            e,
            e.actualStartTime,
            o,
            Hl,
            a
          ), Na(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && Ns(e, La | Cu);
          break;
        case 1:
          (e.mode & Ot) !== yt && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? Om(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && ld(
            e,
            e.actualStartTime,
            o,
            Hl,
            a
          )), Na(
            t,
            e,
            a,
            c,
            o
          );
          break;
        case 3:
          var D = Pn(), S = Hl;
          Hl = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, Na(
            t,
            e,
            a,
            c,
            o
          ), Hl = S, A & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), c = e.memoizedState.cache, c !== a && (gi(c), a != null && ss(a))), t.passiveEffectDuration += Ro(
            D
          );
          break;
        case 12:
          if (A & 2048) {
            A = Pn(), Na(
              t,
              e,
              a,
              c,
              o
            ), t = e.stateNode, t.passiveEffectDuration += Wl(A);
            try {
              F(
                e,
                wp,
                e,
                e.alternate,
                Rf,
                t.passiveEffectDuration
              );
            } catch (H) {
              Et(e, e.return, H);
            }
          } else
            Na(
              t,
              e,
              a,
              c,
              o
            );
          break;
        case 31:
          A = Hl, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D !== null && S === null ? (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (Hl = !1, D = D.hydrationErrors, D !== null && Om(
            e,
            e.actualStartTime,
            o,
            D
          )) : Hl = !0) : Hl = !1, Na(
            t,
            e,
            a,
            c,
            o
          ), Hl = A;
          break;
        case 13:
          A = Hl, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D === null || D.dehydrated === null || S !== null && S.dehydrated !== null ? Hl = !1 : (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (Hl = !1, D = D.hydrationErrors, D !== null && Om(
            e,
            e.actualStartTime,
            o,
            D
          )) : Hl = !0), Na(
            t,
            e,
            a,
            c,
            o
          ), Hl = A;
          break;
        case 23:
          break;
        case 22:
          S = e.stateNode, D = e.alternate, e.memoizedState !== null ? S._visibility & Fi ? Na(
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
          ) : S._visibility & Fi ? Na(
            t,
            e,
            a,
            c,
            o
          ) : (S._visibility |= Fi, Gc(
            t,
            e,
            a,
            c,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & Ot) === yt || Hl || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && ed(e, t, o), 0 <= ot && 0 <= dt && 0.05 < dt - ot && ed(
            e,
            ot,
            dt
          ))), A & 2048 && js(
            D,
            e
          );
          break;
        case 24:
          Na(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && Gs(e.alternate, e);
          break;
        default:
          Na(
            t,
            e,
            a,
            c,
            o
          );
      }
      (e.mode & Ot) !== yt && ((t = !Hl && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && Fa(
        e,
        a,
        o,
        "Mount"
      )), 0 <= ot && 0 <= dt && ((We || 0.05 < Ge) && Sn(
        e,
        ot,
        dt,
        Ge,
        Ne
      ), t && 0.05 < dt - ot && Fa(
        e,
        ot,
        dt,
        "Mount"
      ))), rl(f), Da(d), Ne = h, We = y, zf = p;
    }
    function Gc(t, e, a, c, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        Xs(
          t,
          e,
          a,
          c,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function Xs(t, e, a, c, o, f) {
      var d = Ee(), h = tn(), y = Oa(), p = en(), A = zf;
      o && (e.mode & Ot) !== yt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ld(
        e,
        e.actualStartTime,
        f,
        Hl,
        a
      );
      var D = e.flags;
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
          ), Ns(e, La);
          break;
        case 23:
          break;
        case 22:
          var S = e.stateNode;
          e.memoizedState !== null ? S._visibility & Fi ? Gc(
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
          ) : (S._visibility |= Fi, Gc(
            t,
            e,
            a,
            c,
            o,
            f
          )), o && D & 2048 && js(
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
          ), o && D & 2048 && Gs(e.alternate, e);
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
      (e.mode & Ot) !== yt && 0 <= ot && 0 <= dt && (We || 0.05 < Ge) && Sn(
        e,
        ot,
        dt,
        Ge,
        Ne
      ), rl(d), Da(h), Ne = y, We = p, zf = A;
    }
    function qi(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = c, p = e !== null ? e.actualStartTime : o, A = zf;
          (f.mode & Ot) !== yt && 0 < f.actualStartTime && (f.flags & 1) !== 0 && ld(
            f,
            f.actualStartTime,
            p,
            Hl,
            h
          );
          var D = f.flags;
          switch (f.tag) {
            case 22:
              qi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && js(f.alternate, f);
              break;
            case 24:
              qi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && Gs(f.alternate, f);
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
          zf = A, f = e;
        }
    }
    function Yi(t, e, a) {
      if (t.subtreeFlags & V0)
        for (t = t.child; t !== null; )
          Vd(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function Vd(t, e, a) {
      switch (t.tag) {
        case 26:
          Yi(
            t,
            e,
            a
          ), t.flags & V0 && t.memoizedState !== null && Jy(
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
          fc = ih(
            t.stateNode.containerInfo
          ), Yi(
            t,
            e,
            a
          ), fc = c;
          break;
        case 22:
          t.memoizedState === null && (c = t.alternate, c !== null && c.memoizedState !== null ? (c = V0, V0 = 16777216, Yi(
            t,
            e,
            a
          ), V0 = c) : Yi(
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
    function Ay(t) {
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
            var c = e[a], o = Ee();
            Zl = c, ru(
              c,
              t
            ), (c.mode & Ot) !== yt && 0 <= ot && 0 <= dt && 0.05 < dt - ot && Fa(
              c,
              ot,
              dt,
              "Unmount"
            ), rl(o);
          }
        Ay(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Zd(t), t = t.sibling;
    }
    function Zd(t) {
      var e = Ee(), a = tn(), c = Oa(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          xa(t), t.flags & 2048 && qd(
            t,
            t.return,
            La | Cu
          );
          break;
        case 3:
          var f = Pn();
          xa(t), t.stateNode.passiveEffectDuration += Ro(f);
          break;
        case 12:
          f = Pn(), xa(t), t.stateNode.passiveEffectDuration += Wl(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & Fi && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~Fi, Ld(t), (t.mode & Ot) !== yt && 0 <= ot && 0 <= dt && 0.05 < dt - ot && Fa(
            t,
            ot,
            dt,
            "Disconnect"
          )) : xa(t);
          break;
        default:
          xa(t);
      }
      (t.mode & Ot) !== yt && 0 <= ot && 0 <= dt && (We || 0.05 < Ge) && Sn(
        t,
        ot,
        dt,
        Ge,
        Ne
      ), rl(e), Da(a), We = o, Ne = c;
    }
    function Ld(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = Ee();
            Zl = c, ru(
              c,
              t
            ), (c.mode & Ot) !== yt && 0 <= ot && 0 <= dt && 0.05 < dt - ot && Fa(
              c,
              ot,
              dt,
              "Unmount"
            ), rl(o);
          }
        Ay(t);
      }
      for (t = t.child; t !== null; )
        zy(t), t = t.sibling;
    }
    function zy(t) {
      var e = Ee(), a = tn(), c = Oa(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          qd(
            t,
            t.return,
            La
          ), Ld(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & Fi && (f._visibility &= ~Fi, Ld(t));
          break;
        default:
          Ld(t);
      }
      (t.mode & Ot) !== yt && 0 <= ot && 0 <= dt && (We || 0.05 < Ge) && Sn(
        t,
        ot,
        dt,
        Ge,
        Ne
      ), rl(e), Da(a), We = o, Ne = c;
    }
    function ru(t, e) {
      for (; Zl !== null; ) {
        var a = Zl, c = a, o = e, f = Ee(), d = tn(), h = Oa(), y = en();
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            qd(
              c,
              o,
              La
            );
            break;
          case 23:
          case 22:
            c.memoizedState !== null && c.memoizedState.cachePool !== null && (o = c.memoizedState.cachePool.pool, o != null && gi(o));
            break;
          case 24:
            ss(c.memoizedState.cache);
        }
        if ((c.mode & Ot) !== yt && 0 <= ot && 0 <= dt && (We || 0.05 < Ge) && Sn(
          c,
          ot,
          dt,
          Ge,
          Ne
        ), rl(f), Da(d), We = y, Ne = h, c = a.child, c !== null) c.return = a, Zl = c;
        else
          t: for (a = t; Zl !== null; ) {
            if (c = Zl, f = c.sibling, d = c.return, Ke(c), c === a) {
              Zl = null;
              break t;
            }
            if (f !== null) {
              f.return = d, Zl = f;
              break t;
            }
            Zl = d;
          }
      }
    }
    function Dy() {
      JT.forEach(function(t) {
        return t();
      });
    }
    function Oy() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || N.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function Gl(t) {
      if ((Lt & Bl) !== Ll && Rt !== 0)
        return Rt & -Rt;
      var e = N.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), qy()) : rp();
    }
    function Jo() {
      if (dn === 0)
        if ((Rt & 536870912) === 0 || Gt) {
          var t = fr;
          fr <<= 1, (fr & 3932160) === 0 && (fr = 262144), dn = t;
        } else dn = 536870912;
      return t = Xn.current, t !== null && (t.flags |= 32), dn;
    }
    function pt(t, e, a) {
      if (tm && console.error("useInsertionEffect must not schedule updates."), F1 && (vg = !0), (t === ve && (se === Dr || se === Or) || t.cancelPendingCommit !== null) && (du(t, 0), un(
        t,
        Rt,
        dn,
        !1
      )), dc(t, a), (Lt & Bl) !== Ll && t === ve) {
        if (Su)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = Ct && nt(Ct) || "Unknown", t2.has(t) || (t2.add(t), e = nt(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              Pb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Pb = !0);
          }
      } else
        Tu && sa(t, e, a), Ls(e), t === ve && ((Lt & Bl) === Ll && (qf |= a), Xe === Bf && un(
          t,
          Rt,
          dn,
          !1
        )), ma(t);
    }
    function $p(t, e, a) {
      if ((Lt & (Bl | Vn)) !== Ll)
        throw Error("Should not already be working.");
      if (Rt !== 0 && Ct !== null) {
        var c = Ct, o = vl();
        switch (JS) {
          case w0:
          case Dr:
            var f = R0;
            Oe && ((c = c._debugTask) ? c.run(
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
          case Or:
            f = R0, Oe && ((c = c._debugTask) ? c.run(
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
            Oe && (c = o - R0, 3 > c || console.timeStamp(
              "Blocked",
              R0,
              o,
              Au,
              void 0,
              5 > c ? "primary-light" : 10 > c ? "primary" : 100 > c ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ml(t, e)) ? Iu(t, e) : Wo(t, e, !0);
      var d = a;
      do {
        if (f === oo) {
          Ih && !a && un(t, e, 0, !1), e = se, R0 = Sl(), JS = e;
          break;
        } else {
          if (c = vl(), o = t.current.alternate, d && !kp(o)) {
            gn(e), o = Vl, f = c, !Oe || f <= o || (tl ? tl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                Vt,
                Xt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              Vt,
              Xt,
              "error"
            )), Xc(e, c), f = Wo(t, e, !1), d = !1;
            continue;
          }
          if (f === zr) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              gn(e), Mm(
                Vl,
                c,
                e,
                tl
              ), Xc(e, c), e = h;
              t: {
                c = t, f = d, d = K0;
                var y = c.current.memoizedState.isDehydrated;
                if (y && (du(c, h).flags |= 256), h = Wo(
                  c,
                  h,
                  !1
                ), h !== zr) {
                  if (Z1 && !y) {
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
              if (d = !1, f !== zr) continue;
              c = vl();
            }
          }
          if (f === L0) {
            gn(e), Mm(
              Vl,
              c,
              e,
              tl
            ), Xc(e, c), du(t, 0), un(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case oo:
              case L0:
                throw Error("Root did not complete. This is a bug in React.");
              case Bf:
                if ((e & 4194048) !== e) break;
              case fg:
                gn(e), zp(
                  Vl,
                  c,
                  e,
                  tl
                ), Xc(e, c), o = e, (o & 127) !== 0 ? $v = c : (o & 4194048) !== 0 && (Wv = c), un(
                  a,
                  e,
                  dn,
                  !Nf
                );
                break t;
              case zr:
                wa = null;
                break;
              case og:
              case Xb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (N.actQueue !== null)
              me(
                a,
                o,
                e,
                wa,
                $0,
                dg,
                dn,
                qf,
                Mr,
                f,
                null,
                null,
                Vl,
                c
              );
            else {
              if ((e & 62914560) === e && (d = hg + Zb - vl(), 10 < d)) {
                if (un(
                  a,
                  e,
                  dn,
                  !Nf
                ), qr(a, 0, !0) !== 0) break t;
                sc = e, a.timeoutHandle = o2(
                  Wp.bind(
                    null,
                    a,
                    o,
                    wa,
                    $0,
                    dg,
                    e,
                    dn,
                    qf,
                    Mr,
                    Nf,
                    f,
                    "Throttled",
                    Vl,
                    c
                  ),
                  d
                );
                break t;
              }
              Wp(
                a,
                o,
                wa,
                $0,
                dg,
                e,
                dn,
                qf,
                Mr,
                Nf,
                f,
                null,
                Vl,
                c
              );
            }
          }
        }
        break;
      } while (!0);
      ma(t);
    }
    function Wp(t, e, a, c, o, f, d, h, y, p, A, D, S, H) {
      t.timeoutHandle = Hr;
      var J = e.subtreeFlags, k = null;
      if ((J & 8192 || (J & 16785408) === 16785408) && (k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ka
      }, Vd(e, f, k), J = (f & 62914560) === f ? hg - vl() : (f & 4194048) === f ? Vb - vl() : 0, J = sh(k, J), J !== null)) {
        sc = f, t.cancelPendingCommit = J(
          me.bind(
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
            A,
            k,
            k.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < k.count ? 0 < k.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : k.imgCount === 1 ? "Suspended on an Image" : 0 < k.imgCount ? "Suspended on Images" : null,
            S,
            H
          )
        ), un(
          t,
          f,
          d,
          !p
        );
        return;
      }
      me(
        t,
        e,
        f,
        a,
        c,
        o,
        d,
        h,
        y,
        A,
        k,
        D,
        S,
        H
      );
    }
    function kp(t) {
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
      e &= ~L1, e &= ~qf, t.suspendedLanes |= e, t.pingedLanes &= ~e, c && (t.warmLanes |= e), c = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - _l(o), d = 1 << f;
        c[f] = -1, o &= ~d;
      }
      a !== 0 && om(t, a, e);
    }
    function qa() {
      return (Lt & (Bl | Vn)) === Ll ? (mu(0), !1) : !0;
    }
    function wd() {
      if (Ct !== null) {
        if (se === rn)
          var t = Ct.return;
        else
          t = Ct, Oo(), Dc(t), Zh = null, Y0 = 0, t = Ct;
        for (; t !== null; )
          ry(t.alternate, t), t = t.return;
        Ct = null;
      }
    }
    function Xc(t, e) {
      (t & 127) !== 0 && (yr = e), (t & 4194048) !== 0 && (lo = e), (t & 62914560) !== 0 && (LS = e), (t & 2080374784) !== 0 && (wS = e);
    }
    function du(t, e) {
      Oe && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        Xt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        Xt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        Xt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        Xt,
        "primary-light"
      ));
      var a = Vl;
      if (Vl = Sl(), Rt !== 0 && 0 < a) {
        if (gn(Rt), Xe === og || Xe === Bf)
          zp(
            a,
            Vl,
            e,
            tl
          );
        else {
          var c = Vl, o = tl;
          if (Oe && !(c <= a)) {
            var f = (e & 738197653) === e ? "tertiary-dark" : "primary-dark", d = (e & 536870912) === e ? "Prewarm" : (e & 201326741) === e ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                c,
                Vt,
                Xt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              c,
              Vt,
              Xt,
              f
            );
          }
        }
        Xc(Rt, Vl);
      }
      if (a = tl, tl = null, (e & 127) !== 0) {
        tl = D0, o = 0 <= Fc && Fc < yr ? yr : Fc, c = 0 <= pr && pr < yr ? yr : pr, f = 0 <= c ? c : 0 <= o ? o : Vl, 0 <= $v ? (gn(2), Dp(
          $v,
          f,
          e,
          a
        )) : kv & 127, a = o;
        var h = c, y = O0, p = 0 < Xh, A = Uf === z0, D = Uf === Kv;
        if (o = Vl, c = D0, f = E1, d = A1, Oe) {
          if (Vt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var S = p ? "secondary-light" : "warning";
            c ? c.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                Vt,
                Xt,
                S
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              Vt,
              Xt,
              S
            );
          }
          o > a && (h = A ? "error" : (e & 738197653) === e ? "tertiary-light" : "primary-light", A = D ? "Promise Resolved" : A ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", D = [], d != null && D.push(["Component name", d]), f != null && D.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: D,
                track: Vt,
                trackGroup: Xt,
                color: h
              }
            }
          }, c ? c.run(
            performance.measure.bind(
              performance,
              A,
              a
            )
          ) : performance.measure(A, a));
        }
        Fc = -1.1, Uf = 0, A1 = E1 = null, $v = -1.1, Xh = pr, pr = -1.1, yr = Sl();
      }
      if ((e & 4194048) !== 0 && (tl = M0, o = 0 <= ao && ao < lo ? lo : ao, a = 0 <= Uu && Uu < lo ? lo : Uu, c = 0 <= _f && _f < lo ? lo : _f, f = 0 <= c ? c : 0 <= a ? a : Vl, 0 <= Wv ? (gn(256), Dp(
        Wv,
        f,
        e,
        tl
      )) : kv & 4194048, D = c, h = vr, y = 0 < Cf, p = z1 === Kv, f = Vl, c = M0, d = VS, A = ZS, Oe && (Vt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < D ? D > o && (D = o) : D = o, o > D && h !== null && (S = y ? "secondary-light" : "warning", c ? c.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          D,
          o,
          Vt,
          Xt,
          S
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        D,
        o,
        Vt,
        Xt,
        S
      )), a > o && (c ? c.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          Vt,
          Xt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        Vt,
        Xt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", D = [], A != null && D.push(["Component name", A]), d != null && D.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: D,
            track: Vt,
            trackGroup: Xt,
            color: "primary-light"
          }
        }
      }, c ? c.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Uu = ao = -1.1, z1 = 0, Wv = -1.1, Cf = _f, _f = -1.1, lo = Sl()), (e & 62914560) !== 0 && (kv & 62914560) !== 0 && (gn(4194304), Rm(LS, Vl)), (e & 2080374784) !== 0 && (kv & 2080374784) !== 0 && (gn(268435456), Rm(wS, Vl)), a = t.timeoutHandle, a !== Hr && (t.timeoutHandle = Hr, uE(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), sc = 0, wd(), ve = t, Ct = a = Fn(
        t.current,
        null
      ), Rt = e, se = rn, Zn = null, Nf = !1, Ih = Ml(t, e), Z1 = !1, Xe = oo, Mr = dn = L1 = qf = xf = 0, wa = K0 = null, dg = !1, (e & 8) !== 0 && (e |= e & 32), c = t.entangledLanes, c !== 0)
        for (t = t.entanglements, c &= e; 0 < c; )
          o = 31 - _l(c), f = 1 << o, e |= t[o], c &= ~f;
      return Pc = e, ad(), t = qS(), 1e3 < t - xS && (N.recentlyCreatedOwnerStacks = 0, xS = t), ic.discardPendingWarnings(), a;
    }
    function _n(t, e) {
      gt = null, N.H = Q0, N.getCurrentStack = null, Su = !1, ga = null, e === Vh || e === tg ? (e = Ti(), se = w0) : e === R1 ? (e = Ti(), se = Qb) : se = e === j1 ? V1 : e !== null && typeof e == "object" && typeof e.then == "function" ? J0 : sg, Zn = e;
      var a = Ct;
      a === null ? (Xe = L0, Us(
        t,
        $l(e, t.current)
      )) : a.mode & Ot && sd(a);
    }
    function My() {
      var t = Xn.current;
      return t === null ? !0 : (Rt & 4194048) === Rt ? _u === null : (Rt & 62914560) === Rt || (Rt & 536870912) !== 0 ? t === _u : !1;
    }
    function Jd() {
      var t = N.H;
      return N.H = Q0, t === null ? Q0 : t;
    }
    function Ry() {
      var t = N.A;
      return N.A = wT, t;
    }
    function Ko(t) {
      tl === null && (tl = t._debugTask == null ? null : t._debugTask);
    }
    function $o() {
      Xe = Bf, Nf || (Rt & 4194048) !== Rt && Xn.current !== null || (Ih = !0), (xf & 134217727) === 0 && (qf & 134217727) === 0 || ve === null || un(
        ve,
        Rt,
        dn,
        !1
      );
    }
    function Wo(t, e, a) {
      var c = Lt;
      Lt |= Bl;
      var o = Jd(), f = Ry();
      if (ve !== t || Rt !== e) {
        if (Tu) {
          var d = t.memoizedUpdaters;
          0 < d.size && (Fo(t, Rt), d.clear()), xu(t, e);
        }
        $0 = null, du(t, e);
      }
      e = !1, d = Xe;
      t: do
        try {
          if (se !== rn && Ct !== null) {
            var h = Ct, y = Zn;
            switch (se) {
              case V1:
                wd(), d = fg;
                break t;
              case w0:
              case Dr:
              case Or:
              case J0:
                Xn.current === null && (e = !0);
                var p = se;
                if (se = rn, Zn = null, ko(t, h, y, p), a && Ih) {
                  d = oo;
                  break t;
                }
                break;
              default:
                p = se, se = rn, Zn = null, ko(t, h, y, p);
            }
          }
          Uy(), d = Xe;
          break;
        } catch (A) {
          _n(t, A);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Oo(), Lt = c, N.H = o, N.A = f, Ct === null && (ve = null, Rt = 0, ad()), d;
    }
    function Uy() {
      for (; Ct !== null; ) Kd(Ct);
    }
    function Iu(t, e) {
      var a = Lt;
      Lt |= Bl;
      var c = Jd(), o = Ry();
      if (ve !== t || Rt !== e) {
        if (Tu) {
          var f = t.memoizedUpdaters;
          0 < f.size && (Fo(t, Rt), f.clear()), xu(t, e);
        }
        $0 = null, mg = vl() + Lb, du(t, e);
      } else
        Ih = Ml(
          t,
          e
        );
      t: do
        try {
          if (se !== rn && Ct !== null)
            e: switch (e = Ct, f = Zn, se) {
              case sg:
                se = rn, Zn = null, ko(
                  t,
                  e,
                  f,
                  sg
                );
                break;
              case Dr:
              case Or:
                if (Xm(f)) {
                  se = rn, Zn = null, _y(e);
                  break;
                }
                e = function() {
                  se !== Dr && se !== Or || ve !== t || (se = rg), ma(t);
                }, f.then(e, e);
                break t;
              case w0:
                se = rg;
                break t;
              case Qb:
                se = Q1;
                break t;
              case rg:
                Xm(f) ? (se = rn, Zn = null, _y(e)) : (se = rn, Zn = null, ko(
                  t,
                  e,
                  f,
                  rg
                ));
                break;
              case Q1:
                var d = null;
                switch (Ct.tag) {
                  case 26:
                    d = Ct.memoizedState;
                  case 5:
                  case 27:
                    var h = Ct;
                    if (d ? Ht(d) : h.stateNode.complete) {
                      se = rn, Zn = null;
                      var y = h.sibling;
                      if (y !== null) Ct = y;
                      else {
                        var p = h.return;
                        p !== null ? (Ct = p, Qs(p)) : Ct = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                se = rn, Zn = null, ko(
                  t,
                  e,
                  f,
                  Q1
                );
                break;
              case J0:
                se = rn, Zn = null, ko(
                  t,
                  e,
                  f,
                  J0
                );
                break;
              case V1:
                wd(), Xe = fg;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          N.actQueue !== null ? Uy() : Ie();
          break;
        } catch (A) {
          _n(t, A);
        }
      while (!0);
      return Oo(), N.H = c, N.A = o, Lt = a, Ct !== null ? oo : (ve = null, Rt = 0, ad(), Xe);
    }
    function Ie() {
      for (; Ct !== null && !Th(); )
        Kd(Ct);
    }
    function Kd(t) {
      var e = t.alternate;
      (t.mode & Ot) !== yt ? (Qu(t), e = F(
        t,
        Bs,
        e,
        t,
        Pc
      ), sd(t)) : e = F(
        t,
        Bs,
        e,
        t,
        Pc
      ), t.memoizedProps = t.pendingProps, e === null ? Qs(t) : Ct = e;
    }
    function _y(t) {
      var e = F(t, pl, t);
      t.memoizedProps = t.pendingProps, e === null ? Qs(t) : Ct = e;
    }
    function pl(t) {
      var e = t.alternate, a = (t.mode & Ot) !== yt;
      switch (a && Qu(t), t.tag) {
        case 15:
        case 0:
          e = uy(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            Rt
          );
          break;
        case 11:
          e = uy(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            Rt
          );
          break;
        case 5:
          Dc(t);
        default:
          ry(e, t), t = Ct = Hm(t, Pc), e = Bs(e, t, Pc);
      }
      return a && sd(t), e;
    }
    function ko(t, e, a, c) {
      Oo(), Dc(e), Zh = null, Y0 = 0;
      var o = e.return;
      try {
        if (Im(
          t,
          o,
          e,
          a,
          Rt
        )) {
          Xe = L0, Us(
            t,
            $l(a, t.current)
          ), Ct = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Ct = o, f;
        Xe = L0, Us(
          t,
          $l(a, t.current)
        ), Ct = null;
        return;
      }
      e.flags & 32768 ? (Gt || c === sg ? t = !0 : Ih || (Rt & 536870912) !== 0 ? t = !1 : (Nf = t = !0, (c === Dr || c === Or || c === w0 || c === J0) && (c = Xn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Cy(e, t)) : Qs(e);
    }
    function Qs(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Cy(
            e,
            Nf
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, Qu(e), a = F(
          e,
          sy,
          a,
          e,
          Pc
        ), (e.mode & Ot) !== yt && rs(e), a !== null) {
          Ct = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          Ct = e;
          return;
        }
        Ct = e = t;
      } while (e !== null);
      Xe === oo && (Xe = Xb);
    }
    function Cy(t, e) {
      do {
        var a = Qp(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, Ct = a;
          return;
        }
        if ((t.mode & Ot) !== yt) {
          rs(t), a = t.actualDuration;
          for (var c = t.child; c !== null; )
            a += c.actualDuration, c = c.sibling;
          t.actualDuration = a;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          Ct = t;
          return;
        }
        Ct = t = a;
      } while (t !== null);
      Xe = fg, Ct = null;
    }
    function me(t, e, a, c, o, f, d, h, y, p, A, D, S, H) {
      t.cancelPendingCommit = null;
      do
        Vs();
      while (zl !== jf);
      if (ic.flushLegacyContextWarning(), ic.flushPendingUnsafeLifecycleWarnings(), (Lt & (Bl | Vn)) !== Ll)
        throw Error("Should not already be working.");
      if (gn(a), p === zr ? Mm(
        S,
        H,
        a,
        tl
      ) : c !== null ? wg(
        S,
        H,
        a,
        c,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        tl
      ) : Lg(
        S,
        H,
        a,
        tl
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= v1, Xg(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === ve && (Ct = ve = null, Rt = 0), Ph = e, Gf = t, sc = a, K1 = f, W1 = o, kb = c, $1 = H, Fb = D, rc = yg, Ib = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Io(Ki, function() {
          return tp = window.event, rc === yg && (rc = J1), Zs(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), eo = null, Rf = Sl(), D !== null && Jg(
          H,
          Rf,
          D,
          tl
        ), c = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || c) {
          c = N.T, N.T = null, o = Wt.p, Wt.p = ul, d = Lt, Lt |= Vn;
          try {
            Wg(t, e, a);
          } finally {
            Lt = d, Wt.p = o, N.T = c;
          }
        }
        zl = Jb, aa(), hu(), Hy();
      }
    }
    function aa() {
      if (zl === Jb) {
        zl = jf;
        var t = Gf, e = Ph, a = sc, c = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || c) {
          c = N.T, N.T = null;
          var o = Wt.p;
          Wt.p = ul;
          var f = Lt;
          Lt |= Vn;
          try {
            kh = a, Fh = t, Si(), Ys(e, t), Fh = kh = null, a = cS;
            var d = td(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && bp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && zm(h)) {
                var p = y.start, A = y.end;
                if (A === void 0 && (A = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    A,
                    h.value.length
                  );
                else {
                  var D = h.ownerDocument || document, S = D && D.defaultView || window;
                  if (S.getSelection) {
                    var H = S.getSelection(), J = h.textContent.length, k = Math.min(
                      y.start,
                      J
                    ), Te = y.end === void 0 ? k : Math.min(y.end, J);
                    !H.extend && k > Te && (d = Te, Te = k, k = d);
                    var Qt = Sp(
                      h,
                      k
                    ), g = Sp(
                      h,
                      Te
                    );
                    if (Qt && g && (H.rangeCount !== 1 || H.anchorNode !== Qt.node || H.anchorOffset !== Qt.offset || H.focusNode !== g.node || H.focusOffset !== g.offset)) {
                      var b = D.createRange();
                      b.setStart(Qt.node, Qt.offset), H.removeAllRanges(), k > Te ? (H.addRange(b), H.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), H.addRange(b));
                    }
                  }
                }
              }
              for (D = [], H = h; H = H.parentNode; )
                H.nodeType === 1 && D.push({
                  element: H,
                  left: H.scrollLeft,
                  top: H.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < D.length; h++) {
                var E = D[h];
                E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
              }
            }
            Cg = !!uS, cS = uS = null;
          } finally {
            Lt = f, Wt.p = o, N.T = c;
          }
        }
        t.current = e, zl = Kb;
      }
    }
    function hu() {
      if (zl === Kb) {
        zl = jf;
        var t = Ib;
        if (t !== null) {
          Rf = Sl();
          var e = to, a = Rf;
          !Oe || a <= e || console.timeStamp(
            t,
            e,
            a,
            Vt,
            Xt,
            "secondary-light"
          );
        }
        t = Gf, e = Ph, a = sc;
        var c = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || c) {
          c = N.T, N.T = null;
          var o = Wt.p;
          Wt.p = ul;
          var f = Lt;
          Lt |= Vn;
          try {
            kh = a, Fh = t, Si(), Xd(
              t,
              e.alternate,
              e
            ), Fh = kh = null;
          } finally {
            Lt = f, Wt.p = o, N.T = c;
          }
        }
        t = $1, e = Fb, to = Sl(), t = e === null ? t : Rf, e = to, a = rc === w1, c = tl, eo !== null ? Op(
          t,
          e,
          eo,
          !1,
          c
        ) : !Oe || e <= t || (c ? c.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            t,
            e,
            Vt,
            Xt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          t,
          e,
          Vt,
          Xt,
          a ? "error" : "secondary-dark"
        )), zl = $b;
      }
    }
    function Hy() {
      if (zl === Wb || zl === $b) {
        if (zl === Wb) {
          var t = to;
          to = Sl();
          var e = to, a = rc === w1;
          !Oe || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            Vt,
            Xt,
            a ? " error" : "secondary-light"
          ), rc !== w1 && (rc = wb);
        }
        zl = jf, Eh(), t = Gf;
        var c = Ph;
        e = sc, a = kb;
        var o = c.actualDuration !== 0 || (c.subtreeFlags & 10256) !== 0 || (c.flags & 10256) !== 0;
        o ? zl = pg : (zl = jf, Ph = Gf = null, By(
          t,
          t.pendingLanes
        ), Rr = 0, k0 = null);
        var f = t.pendingLanes;
        if (f === 0 && (Yf = null), o || kd(t), f = Jl(e), c = c.stateNode, nl && typeof nl.onCommitFiberRoot == "function")
          try {
            var d = (c.current.flags & 128) === 128;
            switch (f) {
              case ul:
                var h = f0;
                break;
              case Cl:
                h = Ah;
                break;
              case Ql:
                h = Ki;
                break;
              case $c:
                h = zh;
                break;
              default:
                h = Ki;
            }
            nl.onCommitFiberRoot(
              $i,
              c,
              h,
              d
            );
          } catch (D) {
            bu || (bu = !0, console.error(
              "React instrumentation encountered an error: %o",
              D
            ));
          }
        if (Tu && t.memoizedUpdaters.clear(), Dy(), a !== null) {
          d = N.T, h = Wt.p, Wt.p = ul, N.T = null;
          try {
            var y = t.onRecoverableError;
            for (c = 0; c < a.length; c++) {
              var p = a[c], A = Fp(p.stack);
              F(
                p.source,
                y,
                p.value,
                A
              );
            }
          } finally {
            N.T = d, Wt.p = h;
          }
        }
        (sc & 3) !== 0 && Vs(), ma(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (Iv = !0, t === k1 ? W0++ : (W0 = 0, k1 = t)) : W0 = 0, o || Xc(e, to), mu(0);
      }
    }
    function Fp(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function By(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ss(e)));
    }
    function Vs() {
      return aa(), hu(), Hy(), Zs();
    }
    function Zs() {
      if (zl !== pg) return !1;
      var t = Gf, e = K1;
      K1 = 0;
      var a = Jl(sc), c = Ql > a ? Ql : a;
      a = N.T;
      var o = Wt.p;
      try {
        Wt.p = c, N.T = null;
        var f = W1;
        W1 = null, c = Gf;
        var d = sc;
        if (zl = jf, Ph = Gf = null, sc = 0, (Lt & (Bl | Vn)) !== Ll)
          throw Error("Cannot flush passive effects while already rendering.");
        gn(d), F1 = !0, vg = !1;
        var h = 0;
        if (eo = null, h = vl(), rc === wb)
          Rm(
            to,
            h,
            jT
          );
        else {
          var y = to, p = h, A = rc === J1;
          !Oe || p <= y || (tl ? tl.run(
            console.timeStamp.bind(
              console,
              A ? "Waiting for Paint" : "Waiting",
              y,
              p,
              Vt,
              Xt,
              "secondary-light"
            )
          ) : console.timeStamp(
            A ? "Waiting for Paint" : "Waiting",
            y,
            p,
            Vt,
            Xt,
            "secondary-light"
          ));
        }
        y = Lt, Lt |= Vn;
        var D = c.current;
        Si(), Zd(D);
        var S = c.current;
        D = $1, Si(), Ey(
          c,
          S,
          d,
          f,
          D
        ), kd(c), Lt = y;
        var H = vl();
        if (S = h, D = tl, eo !== null ? Op(
          S,
          H,
          eo,
          !0,
          D
        ) : !Oe || H <= S || (D ? D.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            S,
            H,
            Vt,
            Xt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          S,
          H,
          Vt,
          Xt,
          "secondary-dark"
        )), Xc(d, H), mu(0, !1), vg ? c === k0 ? Rr++ : (Rr = 0, k0 = c) : Rr = 0, vg = F1 = !1, nl && typeof nl.onPostCommitFiberRoot == "function")
          try {
            nl.onPostCommitFiberRoot($i, c);
          } catch (k) {
            bu || (bu = !0, console.error(
              "React instrumentation encountered an error: %o",
              k
            ));
          }
        var J = c.current.stateNode;
        return J.effectDuration = 0, J.passiveEffectDuration = 0, !0;
      } finally {
        Wt.p = o, N.T = a, By(t, e);
      }
    }
    function na(t, e, a) {
      e = $l(a, e), Hp(e), e = Od(t.stateNode, e, 2), t = eu(t, e, 2), t !== null && (dc(t, 2), ma(t));
    }
    function Et(t, e, a) {
      if (tm = !1, t.tag === 3)
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
              t = $l(a, t), Hp(t), a = Md(2), c = eu(e, a, 2), c !== null && (Rd(
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
    function $d(t, e, a) {
      var c = t.pingCache;
      if (c === null) {
        c = t.pingCache = new KT();
        var o = /* @__PURE__ */ new Set();
        c.set(e, o);
      } else
        o = c.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), c.set(e, o));
      o.has(a) || (Z1 = !0, o.add(a), c = ha.bind(null, t, e, a), Tu && Fo(t, a), e.then(c, c));
    }
    function ha(t, e, a) {
      var c = t.pingCache;
      c !== null && c.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Fc && (yr = Fc = Sl(), D0 = Jv("Promise Resolved"), Uf = Kv) : (a & 4194048) !== 0 && 0 > Uu && (lo = Uu = Sl(), M0 = Jv("Promise Resolved"), z1 = Kv), Oy() && N.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), ve === t && (Rt & a) === a && (Xe === Bf || Xe === og && (Rt & 62914560) === Rt && vl() - hg < Zb ? (Lt & Bl) === Ll && du(t, 0) : L1 |= a, Mr === Rt && (Mr = 0)), ma(t);
    }
    function Ny(t, e) {
      e === 0 && (e = Yr()), t = Yl(t, e), t !== null && (dc(t, e), ma(t));
    }
    function Pu(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), Ny(t, a);
    }
    function ji(t, e) {
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
      c !== null && c.delete(e), Ny(t, a);
    }
    function Cn(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var c = t, o = e, f = o.type === ia;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && F(
            o,
            Wd,
            c,
            o
          ) : Cn(
            c,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? F(
            o,
            Wd,
            c,
            o
          ) : o.subtreeFlags & 67108864 && F(
            o,
            Cn,
            c,
            o,
            f
          )), e = e.sibling;
        }
    }
    function Wd(t, e) {
      de(!0);
      try {
        Qd(e), zy(e), Ty(t, e.alternate, e, !1), Xs(t, e, 0, null, !1, 0);
      } finally {
        de(!1);
      }
    }
    function kd(t) {
      var e = !0;
      t.current.mode & (Sa | cc) || (e = !1), Cn(
        t,
        t.current,
        e
      );
    }
    function cn(t) {
      if ((Lt & Bl) === Ll) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = nt(t) || "ReactComponent", gg !== null) {
            if (gg.has(e)) return;
            gg.add(e);
          } else gg = /* @__PURE__ */ new Set([e]);
          F(t, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Fo(t, e) {
      Tu && t.memoizedUpdaters.forEach(function(a) {
        sa(t, a, e);
      });
    }
    function Io(t, e) {
      var a = N.actQueue;
      return a !== null ? (a.push(e), kT) : o0(t, e);
    }
    function Ls(t) {
      Oy() && N.actQueue === null && F(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          nt(t)
        );
      });
    }
    function ma(t) {
      t !== em && t.next === null && (em === null ? Sg = em = t : em = em.next = t), bg = !0, N.actQueue !== null ? P1 || (P1 = !0, Pp()) : I1 || (I1 = !0, Pp());
    }
    function mu(t, e) {
      if (!tS && bg) {
        tS = !0;
        do
          for (var a = !1, c = Sg; c !== null; ) {
            if (t !== 0) {
              var o = c.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = c.suspendedLanes, h = c.pingedLanes;
                f = (1 << 31 - _l(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ws(c, f));
            } else
              f = Rt, f = qr(
                c,
                c === ve ? f : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== Hr
              ), (f & 3) === 0 || Ml(c, f) || (a = !0, ws(c, f));
            c = c.next;
          }
        while (a);
        tS = !1;
      }
    }
    function Ip() {
      tp = window.event, Fd();
    }
    function Fd() {
      bg = P1 = I1 = !1;
      var t = 0;
      Xf !== 0 && jy() && (t = Xf);
      for (var e = vl(), a = null, c = Sg; c !== null; ) {
        var o = c.next, f = Po(c, e);
        f === 0 ? (c.next = null, a === null ? Sg = o : a.next = o, o === null && (em = a)) : (a = c, (t !== 0 || (f & 3) !== 0) && (bg = !0)), c = o;
      }
      zl !== jf && zl !== pg || mu(t), Xf !== 0 && (Xf = 0);
    }
    function Po(t, e) {
      for (var a = t.suspendedLanes, c = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - _l(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & c) !== 0) && (o[d] = Gg(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = ve, a = Rt, a = qr(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Hr
      ), c = t.callbackNode, a === 0 || t === e && (se === Dr || se === Or) || t.cancelPendingCommit !== null)
        return c !== null && Id(c), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || Ml(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || N.actQueue !== null && c !== eS)
          Id(c);
        else return e;
        switch (Jl(a)) {
          case ul:
          case Cl:
            a = Ah;
            break;
          case Ql:
            a = Ki;
            break;
          case $c:
            a = zh;
            break;
          default:
            a = Ki;
        }
        return c = xy.bind(null, t), N.actQueue !== null ? (N.actQueue.push(c), a = eS) : a = o0(a, c), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return c !== null && Id(c), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function xy(t, e) {
      if (Iv = Fv = !1, tp = window.event, zl !== jf && zl !== pg)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (rc === yg && (rc = J1), Vs() && t.callbackNode !== a)
        return null;
      var c = Rt;
      return c = qr(
        t,
        t === ve ? c : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Hr
      ), c === 0 ? null : ($p(
        t,
        c,
        e
      ), Po(t, vl()), t.callbackNode != null && t.callbackNode === a ? xy.bind(null, t) : null);
    }
    function ws(t, e) {
      if (Vs()) return null;
      Fv = Iv, Iv = !1, $p(t, e, !0);
    }
    function Id(t) {
      t !== eS && t !== null && bh(t);
    }
    function Pp() {
      N.actQueue !== null && N.actQueue.push(function() {
        return Fd(), null;
      }), cE(function() {
        (Lt & (Bl | Vn)) !== Ll ? o0(
          f0,
          Ip
        ) : Fd();
      });
    }
    function qy() {
      if (Xf === 0) {
        var t = gr;
        t === 0 && (t = gf, gf <<= 1, (gf & 261888) === 0 && (gf = 256)), Xf = t;
      }
      return Xf;
    }
    function wt(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (ne(t, "action"), ts("" + t));
    }
    function ie(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function Yt(t, e, a, c, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = wt(
          (o[oa] || null).action
        ), d = c.submitter;
        d && (e = (e = d[oa] || null) ? wt(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
        var h = new Gv(
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
                  if (Xf !== 0) {
                    var y = d ? ie(
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
                  typeof f == "function" && (h.preventDefault(), y = d ? ie(
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
    function _t(t, e, a) {
      t.currentTarget = a;
      try {
        e(t);
      } catch (c) {
        h1(c);
      }
      t.currentTarget = null;
    }
    function te(t, e) {
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
              y !== null ? F(
                y,
                _t,
                f,
                h,
                p
              ) : _t(f, h, p), o = y;
            }
          else
            for (d = 0; d < c.length; d++) {
              if (h = c[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? F(
                y,
                _t,
                f,
                h,
                p
              ) : _t(f, h, p), o = y;
            }
        }
      }
    }
    function ht(t, e) {
      lS.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[Wi];
      a === void 0 && (a = e[Wi] = /* @__PURE__ */ new Set());
      var c = t + "__bubble";
      a.has(c) || (Pd(e, t, 2, !1), a.add(c));
    }
    function yu(t, e, a) {
      lS.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var c = 0;
      e && (c |= 4), Pd(
        a,
        t,
        c,
        e
      );
    }
    function Qc(t) {
      if (!t[Tg]) {
        t[Tg] = !0, Nv.forEach(function(a) {
          a !== "selectionchange" && (lS.has(a) || yu(a, !1, t), yu(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Tg] || (e[Tg] = !0, yu("selectionchange", !1, e));
      }
    }
    function Pd(t, e, a, c) {
      switch (hh(e)) {
        case ul:
          var o = Fy;
          break;
        case Cl:
          o = Ul;
          break;
        default:
          o = Iy;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !a1 || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), c ? o !== void 0 ? t.addEventListener(e, a, {
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
              if (d = qu(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                c = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          c = c.return;
        }
      kr(function() {
        var p = f, A = pn(a), D = [];
        t: {
          var S = NS.get(t);
          if (S !== void 0) {
            var H = Gv, J = t;
            switch (t) {
              case "keypress":
                if (es(a) === 0) break t;
              case "keydown":
              case "keyup":
                H = rT;
                break;
              case "focusin":
                J = "focus", H = i1;
                break;
              case "focusout":
                J = "blur", H = i1;
                break;
              case "beforeblur":
              case "afterblur":
                H = i1;
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
                H = bS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                H = P2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                H = mT;
                break;
              case _S:
              case CS:
              case HS:
                H = lT;
                break;
              case BS:
                H = pT;
                break;
              case "scroll":
              case "scrollend":
                H = F2;
                break;
              case "wheel":
                H = gT;
                break;
              case "copy":
              case "cut":
              case "paste":
                H = nT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                H = ES;
                break;
              case "toggle":
              case "beforetoggle":
                H = bT;
            }
            var k = (e & 4) !== 0, Te = !k && (t === "scroll" || t === "scrollend"), Qt = k ? S !== null ? S + "Capture" : null : S;
            k = [];
            for (var g = p, b; g !== null; ) {
              var E = g;
              if (b = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || b === null || Qt === null || (E = Wn(g, Qt), E != null && k.push(
                ye(
                  g,
                  E,
                  b
                )
              )), Te) break;
              g = g.return;
            }
            0 < k.length && (S = new H(
              S,
              J,
              null,
              a,
              A
            ), D.push({
              event: S,
              listeners: k
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (S = t === "mouseover" || t === "pointerover", H = t === "mouseout" || t === "pointerout", S && a !== m0 && (J = a.relatedTarget || a.fromElement) && (qu(J) || J[uc]))
              break t;
            if ((H || S) && (S = A.window === A ? A : (S = A.ownerDocument) ? S.defaultView || S.parentWindow : window, H ? (J = a.relatedTarget || a.toElement, H = p, J = J ? qu(J) : null, J !== null && (Te = le(J), k = J.tag, J !== Te || k !== 5 && k !== 27 && k !== 6) && (J = null)) : (H = null, J = p), H !== J)) {
              if (k = bS, E = "onMouseLeave", Qt = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (k = ES, E = "onPointerLeave", Qt = "onPointerEnter", g = "pointer"), Te = H == null ? S : hc(H), b = J == null ? S : hc(J), S = new k(
                E,
                g + "leave",
                H,
                a,
                A
              ), S.target = Te, S.relatedTarget = b, E = null, qu(A) === p && (k = new k(
                Qt,
                g + "enter",
                J,
                a,
                A
              ), k.target = b, k.relatedTarget = Te, E = k), Te = E, H && J)
                e: {
                  for (k = Gi, Qt = H, g = J, b = 0, E = Qt; E; E = k(E))
                    b++;
                  E = 0;
                  for (var Y = g; Y; Y = k(Y))
                    E++;
                  for (; 0 < b - E; )
                    Qt = k(Qt), b--;
                  for (; 0 < E - b; )
                    g = k(g), E--;
                  for (; b--; ) {
                    if (Qt === g || g !== null && Qt === g.alternate) {
                      k = Qt;
                      break e;
                    }
                    Qt = k(Qt), g = k(g);
                  }
                  k = null;
                }
              else k = null;
              H !== null && th(
                D,
                S,
                H,
                k,
                !1
              ), J !== null && Te !== null && th(
                D,
                Te,
                J,
                k,
                !0
              );
            }
          }
          t: {
            if (S = p ? hc(p) : window, H = S.nodeName && S.nodeName.toLowerCase(), H === "select" || H === "input" && S.type === "file")
              var K = vc;
            else if (Tm(S))
              if (RS)
                K = us;
              else {
                K = Em;
                var St = Zg;
              }
            else
              H = S.nodeName, !H || H.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? p && $n(p.elementType) && (K = vc) : K = Am;
            if (K && (K = K(t, p))) {
              as(
                D,
                K,
                a,
                A
              );
              break t;
            }
            St && St(t, S, p), t === "focusout" && p && S.type === "number" && p.memoizedProps.value != null && dm(S, "number", S.value);
          }
          switch (St = p ? hc(p) : window, t) {
            case "focusin":
              (Tm(St) || St.contentEditable === "true") && (Hh = St, f1 = p, T0 = null);
              break;
            case "focusout":
              T0 = f1 = Hh = null;
              break;
            case "mousedown":
              s1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              s1 = !1, Tp(
                D,
                a,
                A
              );
              break;
            case "selectionchange":
              if (zT) break;
            case "keydown":
            case "keyup":
              Tp(
                D,
                a,
                A
              );
          }
          var it;
          if (o1)
            t: {
              switch (t) {
                case "compositionstart":
                  var lt = "onCompositionStart";
                  break t;
                case "compositionend":
                  lt = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  lt = "onCompositionUpdate";
                  break t;
              }
              lt = void 0;
            }
          else
            Ch ? To(t, a) && (lt = "onCompositionEnd") : t === "keydown" && a.keyCode === AS && (lt = "onCompositionStart");
          lt && (zS && a.locale !== "ko" && (Ch || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && Ch && (it = fi()) : (Af = A, n1 = "value" in Af ? Af.value : Af.textContent, Ch = !0)), St = Bn(
            p,
            lt
          ), 0 < St.length && (lt = new TS(
            lt,
            t,
            null,
            a,
            A
          ), D.push({
            event: lt,
            listeners: St
          }), it ? lt.data = it : (it = Gu(a), it !== null && (lt.data = it)))), (it = ET ? bm(t, a) : Fr(t, a)) && (lt = Bn(
            p,
            "onBeforeInput"
          ), 0 < lt.length && (St = new cT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            A
          ), D.push({
            event: St,
            listeners: lt
          }), St.data = it)), Yt(
            D,
            t,
            p,
            a,
            A
          );
        }
        te(D, e);
      });
    }
    function ye(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function Bn(t, e) {
      for (var a = e + "Capture", c = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Wn(t, a), o != null && c.unshift(
          ye(t, o, f)
        ), o = Wn(t, e), o != null && c.push(
          ye(t, o, f)
        )), t.tag === 3) return c;
        t = t.return;
      }
      return [];
    }
    function Gi(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function th(t, e, a, c, o) {
      for (var f = e._reactName, d = []; a !== null && a !== c; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === c) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = Wn(a, f), p != null && d.unshift(
          ye(a, p, y)
        )) : o || (p = Wn(a, f), p != null && d.push(
          ye(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function ua(t, e) {
      pp(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || gS || (gS = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: Eu,
        possibleRegistrationNames: Tf
      };
      $n(t) || typeof e.is == "string" || Vg(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function He(t, e, a, c) {
      e !== a && (a = Nn(a), Nn(e) !== a && (c[t] = e));
    }
    function Js(t, e, a) {
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
    function eh(t, e) {
      return t = t.namespaceURI === bt || t.namespaceURI === At ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function Nn(t) {
      return Ln(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        $f(t)
      ), ti(t)), (typeof t == "string" ? t : "" + t).replace(FT, `
`).replace(IT, "");
    }
    function Yy(t, e) {
      return e = Nn(e), Nn(t) === e;
    }
    function $t(t, e, a, c, o, f) {
      switch (a) {
        case "children":
          typeof c == "string" ? (Pf(c, e, !1), e === "body" || e === "textarea" && c === "" || oi(t, c)) : (typeof c == "number" || typeof c == "bigint") && (Pf("" + c, e, !1), e !== "body" && oi(t, "" + c));
          break;
        case "className":
          kf(t, "class", c);
          break;
        case "tabIndex":
          kf(t, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          kf(t, a, c);
          break;
        case "style":
          vm(t, c, f);
          break;
        case "data":
          if (e !== "object") {
            kf(t, "data", c);
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
          ne(c, a), c = ts("" + c), t.setAttribute(a, c);
          break;
        case "action":
        case "formAction":
          if (c != null && (e === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof c == "function" && (o.encType == null && o.method == null || zg || (zg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Ag || (Ag = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : e === "input" || e === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Eg ? e !== "button" || o.type == null || o.type === "submit" || Eg ? typeof c == "function" && (o.name == null || a2 || (a2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || zg || (zg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Ag || (Ag = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Eg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Eg = !0, console.error(
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
            typeof f == "function" && (a === "formAction" ? (e !== "input" && $t(t, e, "name", o.name, o, null), $t(
              t,
              e,
              "formEncType",
              o.formEncType,
              o,
              null
            ), $t(
              t,
              e,
              "formMethod",
              o.formMethod,
              o,
              null
            ), $t(
              t,
              e,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : ($t(
              t,
              e,
              "encType",
              o.encType,
              o,
              null
            ), $t(t, e, "method", o.method, o, null), $t(
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
          ne(c, a), c = ts("" + c), t.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (typeof c != "function" && Be(a, c), t.onclick = ka);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && Be(a, c), ht("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && Be(a, c), ht("scrollend", t));
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
          ne(c, a), a = ts("" + c), t.setAttributeNS(Ur, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? (ne(c, a), t.setAttribute(a, "" + c)) : t.removeAttribute(a);
          break;
        case "inert":
          c !== "" || Dg[a] || (Dg[a] = !0, console.error(
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
          c === !0 ? t.setAttribute(a, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? (ne(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? (ne(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? t.removeAttribute(a) : (ne(c, a), t.setAttribute(a, c));
          break;
        case "popover":
          ht("beforetoggle", t), ht("toggle", t), Gr(t, "popover", c);
          break;
        case "xlinkActuate":
          wn(
            t,
            Ur,
            "xlink:actuate",
            c
          );
          break;
        case "xlinkArcrole":
          wn(
            t,
            Ur,
            "xlink:arcrole",
            c
          );
          break;
        case "xlinkRole":
          wn(
            t,
            Ur,
            "xlink:role",
            c
          );
          break;
        case "xlinkShow":
          wn(
            t,
            Ur,
            "xlink:show",
            c
          );
          break;
        case "xlinkTitle":
          wn(
            t,
            Ur,
            "xlink:title",
            c
          );
          break;
        case "xlinkType":
          wn(
            t,
            Ur,
            "xlink:type",
            c
          );
          break;
        case "xmlBase":
          wn(
            t,
            aS,
            "xml:base",
            c
          );
          break;
        case "xmlLang":
          wn(
            t,
            aS,
            "xml:lang",
            c
          );
          break;
        case "xmlSpace":
          wn(
            t,
            aS,
            "xml:space",
            c
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Gr(t, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          n2 || c == null || typeof c != "object" || (n2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            c
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = mp(a), Gr(t, a, c)) : Eu.hasOwnProperty(a) && c != null && typeof c != "function" && Be(a, c);
      }
    }
    function tf(t, e, a, c, o, f) {
      switch (a) {
        case "style":
          vm(t, c, f);
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
          typeof c == "string" ? oi(t, c) : (typeof c == "number" || typeof c == "bigint") && oi(t, "" + c);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && Be(a, c), ht("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && Be(a, c), ht("scrollend", t));
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
          if (Eu.hasOwnProperty(a))
            c != null && typeof c != "function" && Be(a, c);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[oa] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof c == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, c, o);
                break t;
              }
              a in t ? t[a] = c : c === !0 ? t.setAttribute(a, "") : Gr(t, a, c);
            }
      }
    }
    function ze(t, e, a) {
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
          ht("error", t), ht("load", t);
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
                    $t(t, e, f, d, a, null);
                }
            }
          o && $t(t, e, "srcSet", a.srcSet, a, null), c && $t(t, e, "src", a.src, a, null);
          return;
        case "input":
          ai("input", a), ht("invalid", t);
          var h = f = d = o = null, y = null, p = null;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var A = a[c];
              if (A != null)
                switch (c) {
                  case "name":
                    o = A;
                    break;
                  case "type":
                    d = A;
                    break;
                  case "checked":
                    y = A;
                    break;
                  case "defaultChecked":
                    p = A;
                    break;
                  case "value":
                    f = A;
                    break;
                  case "defaultValue":
                    h = A;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (A != null)
                      throw Error(
                        e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    $t(t, e, c, A, a, null);
                }
            }
          Kl(t, a), Vr(
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
          ai("select", a), ht("invalid", t), c = d = f = null;
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
                  $t(
                    t,
                    e,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Zr(t, a), e = f, a = d, t.multiple = !!c, e != null ? Jn(t, !!c, e, !1) : a != null && Jn(t, !!c, a, !0);
          return;
        case "textarea":
          ai("textarea", a), ht("invalid", t), f = o = c = null;
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
                  $t(
                    t,
                    e,
                    d,
                    h,
                    a,
                    null
                  );
              }
          ni(t, a), yo(t, c, o, f);
          return;
        case "option":
          hp(t, a);
          for (y in a)
            a.hasOwnProperty(y) && (c = a[y], c != null) && (y === "selected" ? t.selected = c && typeof c != "function" && typeof c != "symbol" : $t(t, e, y, c, a, null));
          return;
        case "dialog":
          ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
          break;
        case "iframe":
        case "object":
          ht("load", t);
          break;
        case "video":
        case "audio":
          for (c = 0; c < F0.length; c++)
            ht(F0[c], t);
          break;
        case "image":
          ht("error", t), ht("load", t);
          break;
        case "details":
          ht("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          ht("error", t), ht("load", t);
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
                  $t(t, e, p, c, a, null);
              }
          return;
        default:
          if ($n(e)) {
            for (A in a)
              a.hasOwnProperty(A) && (c = a[A], c !== void 0 && tf(
                t,
                e,
                A,
                c,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (c = a[h], c != null && $t(t, e, h, c, a, null));
    }
    function al(t, e, a, c) {
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
          var o = null, f = null, d = null, h = null, y = null, p = null, A = null;
          for (H in a) {
            var D = a[H];
            if (a.hasOwnProperty(H) && D != null)
              switch (H) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = D;
                default:
                  c.hasOwnProperty(H) || $t(
                    t,
                    e,
                    H,
                    null,
                    c,
                    D
                  );
              }
          }
          for (var S in c) {
            var H = c[S];
            if (D = a[S], c.hasOwnProperty(S) && (H != null || D != null))
              switch (S) {
                case "type":
                  f = H;
                  break;
                case "name":
                  o = H;
                  break;
                case "checked":
                  p = H;
                  break;
                case "defaultChecked":
                  A = H;
                  break;
                case "value":
                  d = H;
                  break;
                case "defaultValue":
                  h = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  H !== D && $t(
                    t,
                    e,
                    S,
                    H,
                    c,
                    D
                  );
              }
          }
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, c = c.type === "checkbox" || c.type === "radio" ? c.checked != null : c.value != null, e || !c || l2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), l2 = !0), !e || c || e2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), e2 = !0), mc(
            t,
            d,
            h,
            y,
            p,
            A,
            f,
            o
          );
          return;
        case "select":
          H = d = h = S = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  H = y;
                default:
                  c.hasOwnProperty(f) || $t(
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
                  S = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && $t(
                    t,
                    e,
                    o,
                    f,
                    c,
                    y
                  );
              }
          c = h, e = d, a = H, S != null ? Jn(t, !!e, S, !1) : !!a != !!e && (c != null ? Jn(t, !!e, c, !0) : Jn(t, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          H = S = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !c.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  $t(t, e, h, null, c, o);
              }
          for (d in c)
            if (o = c[d], f = a[d], c.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  S = o;
                  break;
                case "defaultValue":
                  H = o;
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
                  o !== f && $t(t, e, d, o, c, f);
              }
          ui(t, S, H);
          return;
        case "option":
          for (var J in a)
            S = a[J], a.hasOwnProperty(J) && S != null && !c.hasOwnProperty(J) && (J === "selected" ? t.selected = !1 : $t(
              t,
              e,
              J,
              null,
              c,
              S
            ));
          for (y in c)
            S = c[y], H = a[y], c.hasOwnProperty(y) && S !== H && (S != null || H != null) && (y === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : $t(
              t,
              e,
              y,
              S,
              c,
              H
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
          for (var k in a)
            S = a[k], a.hasOwnProperty(k) && S != null && !c.hasOwnProperty(k) && $t(
              t,
              e,
              k,
              null,
              c,
              S
            );
          for (p in c)
            if (S = c[p], H = a[p], c.hasOwnProperty(p) && S !== H && (S != null || H != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  $t(
                    t,
                    e,
                    p,
                    S,
                    c,
                    H
                  );
              }
          return;
        default:
          if ($n(e)) {
            for (var Te in a)
              S = a[Te], a.hasOwnProperty(Te) && S !== void 0 && !c.hasOwnProperty(Te) && tf(
                t,
                e,
                Te,
                void 0,
                c,
                S
              );
            for (A in c)
              S = c[A], H = a[A], !c.hasOwnProperty(A) || S === H || S === void 0 && H === void 0 || tf(
                t,
                e,
                A,
                S,
                c,
                H
              );
            return;
          }
      }
      for (var Qt in a)
        S = a[Qt], a.hasOwnProperty(Qt) && S != null && !c.hasOwnProperty(Qt) && $t(t, e, Qt, null, c, S);
      for (D in c)
        S = c[D], H = a[D], !c.hasOwnProperty(D) || S === H || S == null && H == null || $t(t, e, D, S, c, H);
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
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (um(d, f), c += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || et.has(f) ? (um(d, f), c += o + f.replace(x, "-$1").toLowerCase().replace(P, "-ms-") + ":" + ("" + d).trim()) : c += o + f.replace(x, "-$1").toLowerCase().replace(P, "-ms-") + ":" + d + "px", o = ";");
          }
        c = c || null, e = t.getAttribute("style"), e !== c && (c = Nn(c), Nn(e) !== c && (a.style = Vc(t)));
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
            if (ne(c, e), t === "" + c)
              return;
        }
      He(e, t, c, f);
    }
    function lh(t, e, a, c, o, f) {
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
      He(e, t, c, f);
    }
    function ah(t, e, a, c, o, f) {
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
            if (ne(c, a), t === "" + c)
              return;
        }
      He(e, t, c, f);
    }
    function ef(t, e, a, c, o, f) {
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
            if (!isNaN(c) && (ne(c, e), t === "" + c))
              return;
        }
      He(e, t, c, f);
    }
    function Ks(t, e, a, c, o, f) {
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
            if (ne(c, e), a = ts("" + c), t === a)
              return;
        }
      He(e, t, c, f);
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
              if (Eu.hasOwnProperty(y))
                typeof p != "function" && Be(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || He(
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
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = eh(t, p), He(
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
                    f.delete("class"), d = mo(
                      t,
                      "class",
                      p
                    ), He(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    c.context === fo && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = mo(
                      t,
                      y,
                      p
                    ), He(
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
            if (Eu.hasOwnProperty(p))
              typeof y != "function" && Be(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || He(
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
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = eh(t, y), d !== y && (o[p] = { __html: d }));
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
                  f.delete(p), He(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), He(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), He(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), He(
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
                  Ks(
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
                  } else if (d === PT) {
                    f.delete(p.toLowerCase()), He(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Ks(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Ks(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  ah(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  ah(
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
                  ah(
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
                  lh(
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
                    var A = d = p, D = o;
                    if (f.delete(A), h = h.getAttribute(A), h === null)
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
                          if (ne(y, d), h === "" + y)
                            break t;
                      }
                    He(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  t: {
                    if (h = t, A = d = p, D = o, f.delete(A), h = h.getAttribute(A), h === null)
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
                          if (!(isNaN(y) || 1 > y) && (ne(y, d), h === "" + y))
                            break t;
                      }
                    He(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "rowSpan":
                  ef(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  ef(
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
                  y !== "" || Dg[p] || (Dg[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), lh(
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
                    h = mp(p), d = !1, c.context === fo && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (A = p.toLowerCase(), A = jn.hasOwnProperty(
                      A
                    ) && jn[A] || null, A !== null && A !== p && (d = !0, f.delete(A)), f.delete(h));
                    t: if (A = t, D = h, h = y, Wf(D))
                      if (A.hasAttribute(D))
                        A = A.getAttribute(
                          D
                        ), ne(
                          h,
                          D
                        ), h = A === "" + h ? h : A;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break t;
                          case "boolean":
                            if (A = D.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
                              break t;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || He(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Js(t, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function tv(t, e) {
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
    function ev() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), c = 0; c < a.length; c++) {
          var o = a[c], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && ca(d)) {
            for (d = 0, h = o.responseEnd, c += 1; c < a.length; c++) {
              var y = a[c], p = y.startTime;
              if (p > h) break;
              var A = y.transferSize, D = y.initiatorType;
              A && ca(D) && (y = y.responseEnd, d += A * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--c, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function $s(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function lv(t) {
      switch (t) {
        case At:
          return am;
        case bt:
          return Mg;
        default:
          return fo;
      }
    }
    function ec(t, e) {
      if (t === fo)
        switch (e) {
          case "svg":
            return am;
          case "math":
            return Mg;
          default:
            return fo;
        }
      return t === am && e === "foreignObject" ? fo : t;
    }
    function lf(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function jy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === iS ? !1 : (iS = t, !0) : (iS = null, !1);
    }
    function vu() {
      var t = window.event;
      return t && t !== tp ? t.type : null;
    }
    function af() {
      var t = window.event;
      return t && t !== tp ? t.timeStamp : -1.1;
    }
    function av(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function nv(t, e, a) {
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
    function uv() {
    }
    function nh(t, e, a, c) {
      al(t, e, a, c), t[oa] = c;
    }
    function uh(t) {
      oi(t, "");
    }
    function kg(t, e, a) {
      t.nodeValue = a;
    }
    function cv(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[oa] || null;
        if (e !== null) {
          var a = hn(t);
          a !== null && (typeof e.children == "string" || typeof e.children == "number" ? (t.__reactWarnedAboutChildrenConflict = !0, F(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : e.dangerouslySetInnerHTML != null && (t.__reactWarnedAboutChildrenConflict = !0, F(a, function() {
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
    function iv(t, e) {
      t.removeChild(e);
    }
    function ov(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function Xi(t, e) {
      var a = e, c = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === P0 || a === Og) {
            if (c === 0) {
              t.removeChild(o), Li(e);
              return;
            }
            c--;
          } else if (a === I0 || a === Qf || a === Cr || a === lm || a === _r)
            c++;
          else if (a === eE)
            ac(
              t.ownerDocument.documentElement
            );
          else if (a === aE) {
            a = t.ownerDocument.head, ac(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[bf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === lE && ac(t.ownerDocument.body);
        a = o;
      } while (a);
      Li(e);
    }
    function Ws(t, e) {
      var a = t;
      t = 0;
      do {
        var c = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), c && c.nodeType === 8)
          if (a = c.data, a === P0) {
            if (t === 0) break;
            t--;
          } else
            a !== I0 && a !== Qf && a !== Cr && a !== lm || t++;
        a = c;
      } while (a);
    }
    function fv(t) {
      Ws(t, !0);
    }
    function sv(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function rv(t) {
      t.nodeValue = "";
    }
    function dv(t) {
      Ws(t, !1);
    }
    function hv(t, e) {
      e = e[nE], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function mv(t, e) {
      t.nodeValue = e;
    }
    function nf(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            nf(a), fm(a);
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
    function yv(t, e, a, c) {
      for (; t.nodeType === 1; ) {
        var o = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!c && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (c) {
          if (!t[bf])
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
          ne(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = Ya(t.nextSibling), t === null) break;
      }
      return null;
    }
    function pv(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Ya(t.nextSibling), t === null)) return null;
      return t;
    }
    function ee(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ya(t.nextSibling), t === null)) return null;
      return t;
    }
    function ks(t) {
      return t.data === Qf || t.data === Cr;
    }
    function Gy(t) {
      return t.data === lm || t.data === Qf && t.ownerDocument.readyState !== c2;
    }
    function vv(t, e) {
      var a = t.ownerDocument;
      if (t.data === Cr)
        t._reactRetry = e;
      else if (t.data !== Qf || a.readyState !== c2)
        e();
      else {
        var c = function() {
          e(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), t._reactRetry = c;
      }
    }
    function Ya(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === I0 || e === lm || e === Qf || e === Cr || e === _r || e === nS || e === u2)
            break;
          if (e === P0 || e === Og)
            return null;
        }
      }
      return t;
    }
    function gv(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, c = t.attributes, o = 0; o < c.length; o++) {
          var f = c[o];
          a[tc(f.name)] = f.name.toLowerCase() === "style" ? Vc(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === _r ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function Sv(t, e, a) {
      return a === null || a[tE] !== !0 ? (t.nodeValue === e ? t = null : (e = Nn(e), t = Nn(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function uf(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === P0 || a === Og) {
            if (e === 0)
              return Ya(t.nextSibling);
            e--;
          } else
            a !== I0 && a !== lm && a !== Qf && a !== Cr && a !== _r || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Qi(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === I0 || a === lm || a === Qf || a === Cr || a === _r) {
            if (e === 0) return t;
            e--;
          } else
            a !== P0 && a !== Og || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Xy(t) {
      Li(t);
    }
    function ch(t) {
      Li(t);
    }
    function Qy(t) {
      Li(t);
    }
    function lc(t, e, a, c, o) {
      switch (o && If(t, c.ancestorInfo), e = $s(a), t) {
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
      ze(a, t, e), a[De] = c, a[oa] = e;
    }
    function ac(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      fm(t);
    }
    function ih(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Vy(t, e, a) {
      var c = nm;
      if (c && typeof e == "string" && e) {
        var o = ue(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), d2.has(o) || (d2.add(o), t = { rel: t, crossOrigin: a, href: e }, c.querySelector(o) === null && (e = c.createElement("link"), ze(e, "link", t), Ze(e), c.head.appendChild(e)));
      }
    }
    function Zy(t, e, a, c) {
      var o = (o = ja.current) ? ih(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Vi(a.href), e = Wa(o).hoistableStyles, c = e.get(a), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = Vi(a.href);
            var f = Wa(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Br, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              Is(t)
            )) && !f._p && (d.instance = f, d.state.loading = ep | Bu), !Nu.has(t))) {
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
              Nu.set(t, h), f || bv(
                o,
                t,
                h,
                d.state
              );
            }
            if (e && c === null)
              throw a = `

  - ` + Fs(e) + `
  + ` + Fs(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (e && c !== null)
            throw a = `

  - ` + Fs(e) + `
  + ` + Fs(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Zi(a), e = Wa(o).hoistableScripts, c = e.get(a), c || (c = {
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
    function Fs(t) {
      var e = 0, a = "<link";
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : Ga.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : Ga.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : Ga.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function Vi(t) {
      return 'href="' + ue(t) + '"';
    }
    function Is(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function oh(t) {
      return Dt({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function bv(t, e, a, c) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? c.loading = ep : (e = t.createElement("link"), c.preload = e, e.addEventListener("load", function() {
        return c.loading |= ep;
      }), e.addEventListener("error", function() {
        return c.loading |= s2;
      }), ze(e, "link", a), Ze(e), t.head.appendChild(e));
    }
    function Zi(t) {
      return '[src="' + ue(t) + '"]';
    }
    function Ps(t) {
      return "script[async]" + t;
    }
    function fh(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var c = t.querySelector(
              'style[data-href~="' + ue(a.href) + '"]'
            );
            if (c)
              return e.instance = c, Ze(c), c;
            var o = Dt({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return c = (t.ownerDocument || t).createElement("style"), Ze(c), ze(c, "style", o), cf(c, a.precedence, t), e.instance = c;
          case "stylesheet":
            o = Vi(a.href);
            var f = t.querySelector(
              Is(o)
            );
            if (f)
              return e.state.loading |= Bu, e.instance = f, Ze(f), f;
            c = oh(a), (o = Nu.get(o)) && Ly(c, o), f = (t.ownerDocument || t).createElement("link"), Ze(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ze(f, "link", c), e.state.loading |= Bu, cf(f, a.precedence, t), e.instance = f;
          case "script":
            return f = Zi(a.src), (o = t.querySelector(
              Ps(f)
            )) ? (e.instance = o, Ze(o), o) : (c = a, (o = Nu.get(f)) && (c = Dt({}, a), wy(c, o)), t = t.ownerDocument || t, o = t.createElement("script"), Ze(o), ze(o, "link", c), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & Bu) === Br && (c = e.instance, e.state.loading |= Bu, cf(c, a.precedence, t));
      return e.instance;
    }
    function cf(t, e, a) {
      for (var c = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = c.length ? c[c.length - 1] : null, f = o, d = 0; d < c.length; d++) {
        var h = c[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function Ly(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function wy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function of(t, e, a) {
      if (Rg === null) {
        var c = /* @__PURE__ */ new Map(), o = Rg = /* @__PURE__ */ new Map();
        o.set(a, c);
      } else
        o = Rg, c = o.get(a), c || (c = /* @__PURE__ */ new Map(), o.set(a, c));
      if (c.has(t)) return c;
      for (c.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[bf] || f[De] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== At) {
          var d = f.getAttribute(e) || "";
          d = t + d;
          var h = c.get(d);
          h ? h.push(f) : c.set(d, [f]);
        }
      }
      return c;
    }
    function Tv(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
    }
    function Ev(t, e, a) {
      var c = !a.ancestorInfo.containerTagInScope;
      if (a.context === am || e.itemProp != null)
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
              a = [], e.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = tv(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
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
    function Ht(t) {
      return !(t.type === "stylesheet" && (t.state.loading & r2) === Br);
    }
    function Jy(t, e, a, c) {
      if (a.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (a.state.loading & Bu) === Br) {
        if (a.instance === null) {
          var o = Vi(c.href), f = e.querySelector(
            Is(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ff.bind(t), e.then(t, t)), a.state.loading |= Bu, a.instance = f, Ze(f);
            return;
          }
          f = e.ownerDocument || e, c = oh(c), (o = Nu.get(o)) && Ly(c, o), f = f.createElement("link"), Ze(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ze(f, "link", c), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & r2) === Br && (t.count++, a = ff.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function sh(t, e) {
      return t.stylesheets && t.count === 0 && tr(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var c = setTimeout(function() {
          if (t.stylesheets && tr(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, iE + e);
        0 < t.imgBytes && fS === 0 && (fS = 125 * ev() * fE);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && tr(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > fS ? 50 : oE) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(c), clearTimeout(o);
        };
      } : null;
    }
    function ff() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          tr(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function tr(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Ug = /* @__PURE__ */ new Map(), e.forEach(Ky, t), Ug = null, ff.call(t));
    }
    function Ky(t, e) {
      if (!(e.state.loading & Bu)) {
        var a = Ug.get(t);
        if (a) var c = a.get(sS);
        else {
          a = /* @__PURE__ */ new Map(), Ug.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), c = d);
          }
          c && a.set(sS, c);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || c, f === c && a.set(sS, o), a.set(d, o), this.count++, c = ff.bind(this), o.addEventListener("load", c), o.addEventListener("error", c), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= Bu;
      }
    }
    function er(t, e, a, c, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Hr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jr(0), this.hiddenUpdates = jr(null), this.identifierPrefix = c, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function lr(t, e, a, c, o, f, d, h, y, p, A, D) {
      return t = new er(
        t,
        e,
        a,
        d,
        y,
        p,
        A,
        D,
        h
      ), e = BT, f === !0 && (e |= Sa | cc), e |= Ot, f = Nt(3, null, null, e), t.current = f, f.stateNode = t, e = fd(), gi(e), t.pooledCache = e, gi(e), f.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: e
      }, qt(f), t;
    }
    function Av(t) {
      return t ? (t = Of, t) : Of;
    }
    function rh(t, e, a, c, o, f) {
      if (nl && typeof nl.onScheduleFiberRoot == "function")
        try {
          nl.onScheduleFiberRoot($i, c, a);
        } catch (d) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Av(o), c.context === null ? c.context = o : c.pendingContext = o, Su && ga !== null && !p2 && (p2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        nt(ga) || "Unknown"
      )), c = el(e), c.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), c.callback = f), a = eu(t, c, e), a !== null && (In(e, "root.render()", null), pt(a, t, e), an(a, t, e));
    }
    function zv(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function $y(t, e) {
      zv(t, e), (t = t.alternate) && zv(t, e);
    }
    function Wy(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Yl(t, 67108864);
        e !== null && pt(e, t, 67108864), $y(t, 67108864);
      }
    }
    function ky(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Gl(t);
        e = li(e);
        var a = Yl(t, e);
        a !== null && pt(a, t, e), $y(t, e);
      }
    }
    function oe() {
      return ga;
    }
    function Fy(t, e, a, c) {
      var o = N.T;
      N.T = null;
      var f = Wt.p;
      try {
        Wt.p = ul, Iy(t, e, a, c);
      } finally {
        Wt.p = f, N.T = o;
      }
    }
    function Ul(t, e, a, c) {
      var o = N.T;
      N.T = null;
      var f = Wt.p;
      try {
        Wt.p = Cl, Iy(t, e, a, c);
      } finally {
        Wt.p = f, N.T = o;
      }
    }
    function Iy(t, e, a, c) {
      if (Cg) {
        var o = dh(c);
        if (o === null)
          Hn(
            t,
            e,
            c,
            Hg,
            a
          ), mh(t, c);
        else if (Dv(
          o,
          t,
          e,
          a,
          c
        ))
          c.stopPropagation();
        else if (mh(t, c), e & 4 && -1 < rE.indexOf(t)) {
          for (; o !== null; ) {
            var f = hn(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ei(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - _l(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      ma(f), (Lt & (Bl | Vn)) === Ll && (mg = vl() + Lb, mu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Yl(f, 2), h !== null && pt(h, f, 2), qa(), $y(f, 2);
              }
            if (f = dh(c), f === null && Hn(
              t,
              e,
              c,
              Hg,
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
    function dh(t) {
      return t = pn(t), Py(t);
    }
    function Py(t) {
      if (Hg = null, t = qu(t), t !== null) {
        var e = le(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = Ja(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = Qe(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Hg = t, null;
    }
    function hh(t) {
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
          return ul;
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
          return Cl;
        case "message":
          switch (or()) {
            case f0:
              return ul;
            case Ah:
              return Cl;
            case Ki:
            case Cv:
              return Ql;
            case zh:
              return $c;
            default:
              return Ql;
          }
        default:
          return Ql;
      }
    }
    function mh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Vf = null;
          break;
        case "dragenter":
        case "dragleave":
          Zf = null;
          break;
        case "mouseover":
        case "mouseout":
          Lf = null;
          break;
        case "pointerover":
        case "pointerout":
          ap.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          np.delete(e.pointerId);
      }
    }
    function Lc(t, e, a, c, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = hn(e), e !== null && Wy(e)), t) : (t.eventSystemFlags |= c, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function Dv(t, e, a, c, o) {
      switch (e) {
        case "focusin":
          return Vf = Lc(
            Vf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "dragenter":
          return Zf = Lc(
            Zf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "mouseover":
          return Lf = Lc(
            Lf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return ap.set(
            f,
            Lc(
              ap.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, np.set(
            f,
            Lc(
              np.get(f) || null,
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
    function t0(t) {
      var e = qu(t.target);
      if (e !== null) {
        var a = le(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = Ja(a), e !== null) {
              t.blockedOn = e, dp(t.priority, function() {
                ky(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = Qe(a), e !== null) {
              t.blockedOn = e, dp(t.priority, function() {
                ky(a);
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
    function sf(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = dh(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var c = new a.constructor(
            a.type,
            a
          ), o = c;
          m0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), m0 = o, a.target.dispatchEvent(c), m0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), m0 = null;
        } else
          return e = hn(a), e !== null && Wy(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function yh(t, e, a) {
      sf(t) && a.delete(e);
    }
    function Fg() {
      rS = !1, Vf !== null && sf(Vf) && (Vf = null), Zf !== null && sf(Zf) && (Zf = null), Lf !== null && sf(Lf) && (Lf = null), ap.forEach(yh), np.forEach(yh);
    }
    function ar(t, e) {
      t.blockedOn === e && (t.blockedOn = null, rS || (rS = !0, $e.unstable_scheduleCallback(
        $e.unstable_NormalPriority,
        Fg
      )));
    }
    function Ov(t) {
      Bg !== t && (Bg = t, $e.unstable_scheduleCallback(
        $e.unstable_NormalPriority,
        function() {
          Bg === t && (Bg = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], c = t[e + 1], o = t[e + 2];
            if (typeof c != "function") {
              if (Py(c || a) === null)
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
    function Li(t) {
      function e(y) {
        return ar(y, t);
      }
      Vf !== null && ar(Vf, t), Zf !== null && ar(Zf, t), Lf !== null && ar(Lf, t), ap.forEach(e), np.forEach(e);
      for (var a = 0; a < wf.length; a++) {
        var c = wf[a];
        c.blockedOn === t && (c.blockedOn = null);
      }
      for (; 0 < wf.length && (a = wf[0], a.blockedOn === null); )
        t0(a), a.blockedOn === null && wf.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (c = 0; c < a.length; c += 3) {
          var o = a[c], f = a[c + 1], d = o[oa] || null;
          if (typeof f == "function")
            d || Ov(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[oa] || null)
                h = d.formAction;
              else if (Py(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[c + 1] = h : (a.splice(c, 3), c -= 3), Ov(a);
          }
        }
    }
    function Mv() {
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
    function e0(t) {
      this._internalRoot = t;
    }
    function xn(t) {
      this._internalRoot = t;
    }
    function l0(t) {
      t[uc] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var $e = X2(), nr = vS, Ig = j2, Dt = Object.assign, Rv = /* @__PURE__ */ Symbol.for("react.element"), on = /* @__PURE__ */ Symbol.for("react.transitional.element"), wc = /* @__PURE__ */ Symbol.for("react.portal"), rf = /* @__PURE__ */ Symbol.for("react.fragment"), ia = /* @__PURE__ */ Symbol.for("react.strict_mode"), ur = /* @__PURE__ */ Symbol.for("react.profiler"), ph = /* @__PURE__ */ Symbol.for("react.consumer"), qn = /* @__PURE__ */ Symbol.for("react.context"), df = /* @__PURE__ */ Symbol.for("react.forward_ref"), wi = /* @__PURE__ */ Symbol.for("react.suspense"), va = /* @__PURE__ */ Symbol.for("react.suspense_list"), cr = /* @__PURE__ */ Symbol.for("react.memo"), Xl = /* @__PURE__ */ Symbol.for("react.lazy"), Yn = /* @__PURE__ */ Symbol.for("react.activity"), Pg = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Uv = Symbol.iterator, hf = /* @__PURE__ */ Symbol.for("react.client.reference"), Pe = Array.isArray, N = nr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Wt = Ig.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, t1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), a0 = [], n0 = [], nc = -1, Jc = Ve(null), mf = Ve(null), ja = Ve(null), Kc = Ve(null), yf = 0, _v, Ji, pf, u0, ir, vh, gh;
    mt.__reactDisabledLog = !0;
    var vf, c0, Sh = !1, i0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), ga = null, Su = !1, Ga = Object.prototype.hasOwnProperty, o0 = $e.unstable_scheduleCallback, bh = $e.unstable_cancelCallback, Th = $e.unstable_shouldYield, Eh = $e.unstable_requestPaint, vl = $e.unstable_now, or = $e.unstable_getCurrentPriorityLevel, f0 = $e.unstable_ImmediatePriority, Ah = $e.unstable_UserBlockingPriority, Ki = $e.unstable_NormalPriority, Cv = $e.unstable_LowPriority, zh = $e.unstable_IdlePriority, s0 = $e.log, Hv = $e.unstable_setDisableYieldValue, $i = null, nl = null, bu = !1, Tu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", _l = Math.clz32 ? Math.clz32 : im, r0 = Math.log, Dh = Math.LN2, gf = 256, fr = 262144, Sf = 4194304, ul = 2, Cl = 8, Ql = 32, $c = 268435456, fn = Math.random().toString(36).slice(2), De = "__reactFiber$" + fn, oa = "__reactProps$" + fn, uc = "__reactContainer$" + fn, Wi = "__reactEvents$" + fn, e1 = "__reactListeners$" + fn, Bv = "__reactHandles$" + fn, sr = "__reactResources$" + fn, bf = "__reactMarker$" + fn, Nv = /* @__PURE__ */ new Set(), Eu = {}, Tf = {}, xv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Ef = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), d0 = {}, Oh = {}, Mh = /[\n"\\]/g, h0 = !1, qv = !1, rr = !1, l = !1, n = !1, u = !1, i = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), T = v.concat(["button"]), _ = "dd dt li option optgroup p rp rt".split(" "), q = {
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
    }, Q = {}, C = {
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
    }, x = /([A-Z])/g, P = /^ms-/, rt = /^(?:webkit|moz|o)[A-Z]/, fe = /^-ms-/, R = /-(.)/g, z = /;\s*$/, U = {}, X = {}, ct = !1, Zt = !1, et = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), bt = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", Jt = /* @__PURE__ */ new Map([
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
    ]), jn = {
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
    }, Yv = {
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
    }, Rh = {}, w2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), J2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), gS = !1, Xa = {}, SS = /^on./, K2 = /^on[^A-Z]/, $2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), W2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), k2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, m0 = null, Uh = null, _h = null, l1 = !1, Wc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), a1 = !1;
    if (Wc)
      try {
        var y0 = {};
        Object.defineProperty(y0, "passive", {
          get: function() {
            a1 = !0;
          }
        }), window.addEventListener("test", y0, y0), window.removeEventListener("test", y0, y0);
      } catch {
        a1 = !1;
      }
    var Af = null, n1 = null, jv = null, dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Gv = sl(dr), p0 = Dt({}, dr, { view: 0, detail: 0 }), F2 = sl(p0), u1, c1, v0, Xv = Dt({}, p0, {
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
      getModifierState: ls,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== v0 && (v0 && t.type === "mousemove" ? (u1 = t.screenX - v0.screenX, c1 = t.screenY - v0.screenY) : c1 = u1 = 0, v0 = t), u1);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : c1;
      }
    }), bS = sl(Xv), I2 = Dt({}, Xv, { dataTransfer: 0 }), P2 = sl(I2), tT = Dt({}, p0, { relatedTarget: 0 }), i1 = sl(tT), eT = Dt({}, dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), lT = sl(eT), aT = Dt({}, dr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), nT = sl(aT), uT = Dt({}, dr, { data: 0 }), TS = sl(
      uT
    ), cT = TS, iT = {
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
    }, oT = {
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
    }, fT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, sT = Dt({}, p0, {
      key: function(t) {
        if (t.key) {
          var e = iT[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = es(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? oT[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ls,
      charCode: function(t) {
        return t.type === "keypress" ? es(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? es(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), rT = sl(sT), dT = Dt({}, Xv, {
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
    }), ES = sl(dT), hT = Dt({}, p0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ls
    }), mT = sl(hT), yT = Dt({}, dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), pT = sl(yT), vT = Dt({}, Xv, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), gT = sl(vT), ST = Dt({}, dr, {
      newState: 0,
      oldState: 0
    }), bT = sl(ST), TT = [9, 13, 27, 32], AS = 229, o1 = Wc && "CompositionEvent" in window, g0 = null;
    Wc && "documentMode" in document && (g0 = document.documentMode);
    var ET = Wc && "TextEvent" in window && !g0, zS = Wc && (!o1 || g0 && 8 < g0 && 11 >= g0), DS = 32, OS = String.fromCharCode(DS), MS = !1, Ch = !1, AT = {
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
    }, S0 = null, b0 = null, RS = !1;
    Wc && (RS = Ir("input") && (!document.documentMode || 9 < document.documentMode));
    var Qa = typeof Object.is == "function" ? Object.is : Pr, zT = Wc && "documentMode" in document && 11 >= document.documentMode, Hh = null, f1 = null, T0 = null, s1 = !1, Bh = {
      animationend: si("Animation", "AnimationEnd"),
      animationiteration: si("Animation", "AnimationIteration"),
      animationstart: si("Animation", "AnimationStart"),
      transitionrun: si("Transition", "TransitionRun"),
      transitionstart: si("Transition", "TransitionStart"),
      transitioncancel: si("Transition", "TransitionCancel"),
      transitionend: si("Transition", "TransitionEnd")
    }, r1 = {}, US = {};
    Wc && (US = document.createElement("div").style, "AnimationEvent" in window || (delete Bh.animationend.animation, delete Bh.animationiteration.animation, delete Bh.animationstart.animation), "TransitionEvent" in window || delete Bh.transitionend.transition);
    var _S = ri("animationend"), CS = ri("animationiteration"), HS = ri("animationstart"), DT = ri("transitionrun"), OT = ri("transitionstart"), MT = ri("transitioncancel"), BS = ri("transitionend"), NS = /* @__PURE__ */ new Map(), d1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    d1.push("scrollEnd");
    var xS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var RT = performance, qS = function() {
        return RT.now();
      };
    else {
      var UT = Date;
      qS = function() {
        return UT.now();
      };
    }
    var h1 = typeof reportError == "function" ? reportError : function(t) {
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
    }, _T = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Qv = 0, m1 = 1, y1 = 2, p1 = 3, Vv = "– ", Zv = "+ ", YS = "  ", Oe = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Au = "Components ⚛", Xt = "Scheduler ⚛", Vt = "Blocking", zf = !1, ki = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Au
    }, Df = {
      start: -0,
      end: -0,
      detail: { devtools: ki }
    }, CT = ["Changed Props", ""], jS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", HT = ["Changed Props", jS], E0 = 1, Fi = 2, zu = [], Nh = 0, v1 = 0, Of = {};
    Object.freeze(Of);
    var Du = null, xh = null, yt = 0, BT = 1, Ot = 2, Sa = 8, cc = 16, NT = 32, GS = !1;
    try {
      var XS = Object.preventExtensions({});
    } catch {
      GS = !0;
    }
    var g1 = /* @__PURE__ */ new WeakMap(), qh = [], Yh = 0, Lv = null, A0 = 0, Ou = [], Mu = 0, hr = null, Ii = 1, Pi = "", fa = null, Me = null, Gt = !1, kc = !1, Gn = null, Mf = null, Ru = !1, S1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), b1 = Ve(null), T1 = Ve(null), QS = {}, wv = null, jh = null, Gh = !1, xT = typeof AbortController < "u" ? AbortController : function() {
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
    }, qT = $e.unstable_scheduleCallback, YT = $e.unstable_NormalPriority, gl = {
      $$typeof: qn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Sl = $e.unstable_now, Jv = console.createTask ? console.createTask : function() {
      return null;
    }, z0 = 1, Kv = 2, Vl = -0, Rf = -0, to = -0, eo = null, Va = -1.1, mr = -0, Ge = -0, ot = -1.1, dt = -1.1, Ne = null, We = !1, yr = -0, Fc = -1.1, D0 = null, Uf = 0, E1 = null, A1 = null, pr = -1.1, O0 = null, Xh = -1.1, $v = -1.1, lo = -0, ao = -1.1, Uu = -1.1, z1 = 0, M0 = null, VS = null, ZS = null, _f = -1.1, vr = null, Cf = -1.1, Wv = -1.1, LS = -0, wS = -0, kv = 0, jT = null, JS = 0, R0 = -1.1, Fv = !1, Iv = !1, U0 = null, D1 = 0, gr = 0, Qh = null, KS = N.S;
    N.S = function(t, e) {
      if (Vb = vl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > ao && 0 > Uu) {
          ao = Sl();
          var a = af(), c = vu();
          (a !== Cf || c !== vr) && (Cf = -1.1), _f = a, vr = c;
        }
        Vu(t, e);
      }
      KS !== null && KS(t, e);
    };
    var Sr = Ve(null), ic = {
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
    }, _0 = [], C0 = [], H0 = [], B0 = [], N0 = [], x0 = [], br = /* @__PURE__ */ new Set();
    ic.recordUnsafeLifecycleWarnings = function(t, e) {
      br.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && _0.push(t), t.mode & Sa && typeof e.UNSAFE_componentWillMount == "function" && C0.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && H0.push(t), t.mode & Sa && typeof e.UNSAFE_componentWillReceiveProps == "function" && B0.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && N0.push(t), t.mode & Sa && typeof e.UNSAFE_componentWillUpdate == "function" && x0.push(t));
    }, ic.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < _0.length && (_0.forEach(function(h) {
        t.add(
          nt(h) || "Component"
        ), br.add(h.type);
      }), _0 = []);
      var e = /* @__PURE__ */ new Set();
      0 < C0.length && (C0.forEach(function(h) {
        e.add(
          nt(h) || "Component"
        ), br.add(h.type);
      }), C0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < H0.length && (H0.forEach(function(h) {
        a.add(
          nt(h) || "Component"
        ), br.add(h.type);
      }), H0 = []);
      var c = /* @__PURE__ */ new Set();
      0 < B0.length && (B0.forEach(
        function(h) {
          c.add(
            nt(h) || "Component"
          ), br.add(h.type);
        }
      ), B0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < N0.length && (N0.forEach(function(h) {
        o.add(
          nt(h) || "Component"
        ), br.add(h.type);
      }), N0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < x0.length && (x0.forEach(function(h) {
        f.add(
          nt(h) || "Component"
        ), br.add(h.type);
      }), x0 = []), 0 < e.size) {
        var d = st(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < c.size && (d = st(
        c
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = st(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = st(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = st(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = st(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Pv = /* @__PURE__ */ new Map(), $S = /* @__PURE__ */ new Set();
    ic.recordLegacyContextWarning = function(t, e) {
      for (var a = null, c = t; c !== null; )
        c.mode & Sa && (a = c), c = c.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !$S.has(t.type) && (c = Pv.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (c === void 0 && (c = [], Pv.set(a, c)), c.push(t));
    }, ic.flushLegacyContextWarning = function() {
      Pv.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(nt(o) || "Component"), $S.add(o.type);
          });
          var c = st(a);
          F(e, function() {
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
      _0 = [], C0 = [], H0 = [], B0 = [], N0 = [], x0 = [], Pv = /* @__PURE__ */ new Map();
    };
    var WS = {
      react_stack_bottom_frame: function(t, e, a) {
        var c = Su;
        Su = !0;
        try {
          return t(e, a);
        } finally {
          Su = c;
        }
      }
    }, O1 = WS.react_stack_bottom_frame.bind(WS), kS = {
      react_stack_bottom_frame: function(t) {
        var e = Su;
        Su = !0;
        try {
          return t.render();
        } finally {
          Su = e;
        }
      }
    }, FS = kS.react_stack_bottom_frame.bind(kS), IS = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          Et(t, t.return, a);
        }
      }
    }, M1 = IS.react_stack_bottom_frame.bind(
      IS
    ), PS = {
      react_stack_bottom_frame: function(t, e, a, c, o) {
        try {
          e.componentDidUpdate(a, c, o);
        } catch (f) {
          Et(t, t.return, f);
        }
      }
    }, tb = PS.react_stack_bottom_frame.bind(
      PS
    ), eb = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, GT = eb.react_stack_bottom_frame.bind(
      eb
    ), lb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (c) {
          Et(t, e, c);
        }
      }
    }, ab = lb.react_stack_bottom_frame.bind(
      lb
    ), nb = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, XT = nb.react_stack_bottom_frame.bind(nb), ub = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (c) {
          Et(t, e, c);
        }
      }
    }, QT = ub.react_stack_bottom_frame.bind(ub), cb = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, VT = cb.react_stack_bottom_frame.bind(cb), Vh = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), R1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), tg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), eg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Tr = null, q0 = !1, Zh = null, Y0 = 0, Mt = null, U1, ib = U1 = !1, ob = {}, fb = {}, sb = {};
    Dl = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var c = nt(t), o = c || "null";
        if (!ob[o]) {
          ob[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = nt(t)) && (f = `

Check the render method of \`` + o + "`."), f || c && (f = `

Check the top-level render call using <` + c + ">.");
          var d = "";
          a != null && t !== a && (c = null, typeof a.tag == "number" ? c = nt(a) : typeof a.name == "string" && (c = a.name), c && (d = " It was passed a child from " + c + ".")), F(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Er = dl(!0), rb = dl(!1), db = 0, hb = 1, mb = 2, _1 = 3, Hf = !1, yb = !1, C1 = null, H1 = !1, Lh = Ve(null), lg = Ve(0), Xn = Ve(null), _u = null, wh = 1, j0 = 2, cl = Ve(0), ag = 0, Cu = 1, Za = 2, Qn = 4, La = 8, Jh, pb = /* @__PURE__ */ new Set(), vb = /* @__PURE__ */ new Set(), B1 = /* @__PURE__ */ new Set(), gb = /* @__PURE__ */ new Set(), no = 0, gt = null, pe = null, bl = null, ng = !1, Kh = !1, Ar = !1, ug = 0, G0 = 0, uo = null, ZT = 0, LT = 25, B = null, Hu = null, co = -1, X0 = !1, Q0 = {
      readContext: Kt,
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
    Q0.useEffectEvent = Ye;
    var N1 = null, Sb = null, x1 = null, bb = null, Ic = null, oc = null, cg = null;
    N1 = {
      readContext: function(t) {
        return Kt(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return B = "useCallback", vt(), wu(e), bd(t, e);
      },
      useContext: function(t) {
        return B = "useContext", vt(), Kt(t);
      },
      useEffect: function(t, e) {
        return B = "useEffect", vt(), wu(e), Ri(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", vt(), wu(a), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        B = "useInsertionEffect", vt(), wu(e), Bc(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", vt(), wu(e), Pl(t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", vt(), wu(e);
        var a = N.H;
        N.H = Ic;
        try {
          return ta(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", vt();
        var c = N.H;
        N.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return B = "useRef", vt(), Sd(t);
      },
      useState: function(t) {
        B = "useState", vt();
        var e = N.H;
        N.H = Ic;
        try {
          return Uc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", vt();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", vt(), jo(t, e);
      },
      useTransition: function() {
        return B = "useTransition", vt(), Nc();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", vt(), No(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", vt(), Os();
      },
      useFormState: function(t, e) {
        return B = "useFormState", vt(), ys(), Ca(t, e);
      },
      useActionState: function(t, e) {
        return B = "useActionState", vt(), Ca(t, e);
      },
      useOptimistic: function(t) {
        return B = "useOptimistic", vt(), Mi(t);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ua,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", vt(), Td();
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", vt(), zs(t);
      }
    }, Sb = {
      readContext: function(t) {
        return Kt(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return B = "useCallback", Z(), bd(t, e);
      },
      useContext: function(t) {
        return B = "useContext", Z(), Kt(t);
      },
      useEffect: function(t, e) {
        return B = "useEffect", Z(), Ri(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", Z(), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        B = "useInsertionEffect", Z(), Bc(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", Z(), Pl(t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", Z();
        var a = N.H;
        N.H = Ic;
        try {
          return ta(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", Z();
        var c = N.H;
        N.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return B = "useRef", Z(), Sd(t);
      },
      useState: function(t) {
        B = "useState", Z();
        var e = N.H;
        N.H = Ic;
        try {
          return Uc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Z();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", Z(), jo(t, e);
      },
      useTransition: function() {
        return B = "useTransition", Z(), Nc();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", Z(), No(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", Z(), Os();
      },
      useActionState: function(t, e) {
        return B = "useActionState", Z(), Ca(t, e);
      },
      useFormState: function(t, e) {
        return B = "useFormState", Z(), ys(), Ca(t, e);
      },
      useOptimistic: function(t) {
        return B = "useOptimistic", Z(), Mi(t);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ua,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Z(), Td();
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", Z(), zs(t);
      }
    }, x1 = {
      readContext: function(t) {
        return Kt(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return B = "useCallback", Z(), Mn(t, e);
      },
      useContext: function(t) {
        return B = "useContext", Z(), Kt(t);
      },
      useEffect: function(t, e) {
        B = "useEffect", Z(), ll(2048, La, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", Z(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return B = "useInsertionEffect", Z(), ll(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", Z(), ll(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", Z();
        var a = N.H;
        N.H = oc;
        try {
          return Ae(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", Z();
        var c = N.H;
        N.H = oc;
        try {
          return zi(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return B = "useRef", Z(), It().memoizedState;
      },
      useState: function() {
        B = "useState", Z();
        var t = N.H;
        N.H = oc;
        try {
          return zi(_a);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Z();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", Z(), cu(t, e);
      },
      useTransition: function() {
        return B = "useTransition", Z(), xp();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", Z(), Oi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", Z(), It().memoizedState;
      },
      useFormState: function(t) {
        return B = "useFormState", Z(), ys(), Cc(t);
      },
      useActionState: function(t) {
        return B = "useActionState", Z(), Cc(t);
      },
      useOptimistic: function(t, e) {
        return B = "useOptimistic", Z(), Ts(t, e);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ua,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Z(), It().memoizedState;
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", Z(), qo(t);
      }
    }, bb = {
      readContext: function(t) {
        return Kt(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return B = "useCallback", Z(), Mn(t, e);
      },
      useContext: function(t) {
        return B = "useContext", Z(), Kt(t);
      },
      useEffect: function(t, e) {
        B = "useEffect", Z(), ll(2048, La, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", Z(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return B = "useInsertionEffect", Z(), ll(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", Z(), ll(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", Z();
        var a = N.H;
        N.H = cg;
        try {
          return Ae(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", Z();
        var c = N.H;
        N.H = cg;
        try {
          return Di(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return B = "useRef", Z(), It().memoizedState;
      },
      useState: function() {
        B = "useState", Z();
        var t = N.H;
        N.H = cg;
        try {
          return Di(_a);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Z();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", Z(), Tt(t, e);
      },
      useTransition: function() {
        return B = "useTransition", Z(), Ce();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", Z(), Oi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", Z(), It().memoizedState;
      },
      useFormState: function(t) {
        return B = "useFormState", Z(), ys(), Hc(t);
      },
      useActionState: function(t) {
        return B = "useActionState", Z(), Hc(t);
      },
      useOptimistic: function(t, e) {
        return B = "useOptimistic", Z(), Es(t, e);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ua,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Z(), It().memoizedState;
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", Z(), qo(t);
      }
    }, Ic = {
      readContext: function(t) {
        return re(), Kt(t);
      },
      use: function(t) {
        return L(), Ju(t);
      },
      useCallback: function(t, e) {
        return B = "useCallback", L(), vt(), bd(t, e);
      },
      useContext: function(t) {
        return B = "useContext", L(), vt(), Kt(t);
      },
      useEffect: function(t, e) {
        return B = "useEffect", L(), vt(), Ri(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", L(), vt(), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        B = "useInsertionEffect", L(), vt(), Bc(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", L(), vt(), Pl(t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", L(), vt();
        var a = N.H;
        N.H = Ic;
        try {
          return ta(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", L(), vt();
        var c = N.H;
        N.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return B = "useRef", L(), vt(), Sd(t);
      },
      useState: function(t) {
        B = "useState", L(), vt();
        var e = N.H;
        N.H = Ic;
        try {
          return Uc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), vt();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", L(), vt(), jo(t, e);
      },
      useTransition: function() {
        return B = "useTransition", L(), vt(), Nc();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", L(), vt(), No(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), vt(), Os();
      },
      useFormState: function(t, e) {
        return B = "useFormState", L(), vt(), Ca(t, e);
      },
      useActionState: function(t, e) {
        return B = "useActionState", L(), vt(), Ca(t, e);
      },
      useOptimistic: function(t) {
        return B = "useOptimistic", L(), vt(), Mi(t);
      },
      useMemoCache: function(t) {
        return L(), Ua(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", vt(), Td();
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", L(), vt(), zs(t);
      }
    }, oc = {
      readContext: function(t) {
        return re(), Kt(t);
      },
      use: function(t) {
        return L(), Ju(t);
      },
      useCallback: function(t, e) {
        return B = "useCallback", L(), Z(), Mn(t, e);
      },
      useContext: function(t) {
        return B = "useContext", L(), Z(), Kt(t);
      },
      useEffect: function(t, e) {
        B = "useEffect", L(), Z(), ll(2048, La, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", L(), Z(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return B = "useInsertionEffect", L(), Z(), ll(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", L(), Z(), ll(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", L(), Z();
        var a = N.H;
        N.H = oc;
        try {
          return Ae(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", L(), Z();
        var c = N.H;
        N.H = oc;
        try {
          return zi(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return B = "useRef", L(), Z(), It().memoizedState;
      },
      useState: function() {
        B = "useState", L(), Z();
        var t = N.H;
        N.H = oc;
        try {
          return zi(_a);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), Z();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", L(), Z(), cu(t, e);
      },
      useTransition: function() {
        return B = "useTransition", L(), Z(), xp();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", L(), Z(), Oi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), Z(), It().memoizedState;
      },
      useFormState: function(t) {
        return B = "useFormState", L(), Z(), Cc(t);
      },
      useActionState: function(t) {
        return B = "useActionState", L(), Z(), Cc(t);
      },
      useOptimistic: function(t, e) {
        return B = "useOptimistic", L(), Z(), Ts(t, e);
      },
      useMemoCache: function(t) {
        return L(), Ua(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Z(), It().memoizedState;
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", L(), Z(), qo(t);
      }
    }, cg = {
      readContext: function(t) {
        return re(), Kt(t);
      },
      use: function(t) {
        return L(), Ju(t);
      },
      useCallback: function(t, e) {
        return B = "useCallback", L(), Z(), Mn(t, e);
      },
      useContext: function(t) {
        return B = "useContext", L(), Z(), Kt(t);
      },
      useEffect: function(t, e) {
        B = "useEffect", L(), Z(), ll(2048, La, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", L(), Z(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return B = "useInsertionEffect", L(), Z(), ll(4, Za, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", L(), Z(), ll(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", L(), Z();
        var a = N.H;
        N.H = oc;
        try {
          return Ae(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", L(), Z();
        var c = N.H;
        N.H = oc;
        try {
          return Di(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return B = "useRef", L(), Z(), It().memoizedState;
      },
      useState: function() {
        B = "useState", L(), Z();
        var t = N.H;
        N.H = oc;
        try {
          return Di(_a);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), Z();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", L(), Z(), Tt(t, e);
      },
      useTransition: function() {
        return B = "useTransition", L(), Z(), Ce();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", L(), Z(), Oi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), Z(), It().memoizedState;
      },
      useFormState: function(t) {
        return B = "useFormState", L(), Z(), Hc(t);
      },
      useActionState: function(t) {
        return B = "useActionState", L(), Z(), Hc(t);
      },
      useOptimistic: function(t, e) {
        return B = "useOptimistic", L(), Z(), Es(t, e);
      },
      useMemoCache: function(t) {
        return L(), Ua(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Z(), It().memoizedState;
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", L(), Z(), qo(t);
      }
    };
    var Tb = {}, Eb = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Ob = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set();
    Object.freeze(Tb);
    var q1 = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var c = Gl(t), o = el(c);
        o.payload = e, a != null && (Hi(a), o.callback = a), e = eu(t, o, c), e !== null && (In(c, "this.setState()", t), pt(e, t, c), an(e, t, c));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var c = Gl(t), o = el(c);
        o.tag = hb, o.payload = e, a != null && (Hi(a), o.callback = a), e = eu(t, o, c), e !== null && (In(c, "this.replaceState()", t), pt(e, t, c), an(e, t, c));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = Gl(t), c = el(a);
        c.tag = mb, e != null && (Hi(e), c.callback = e), e = eu(t, c, a), e !== null && (In(a, "this.forceUpdate()", t), pt(e, t, a), an(e, t, a));
      }
    }, $h = null, Y1 = null, j1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Tl = !1, Hb = {}, Bb = {}, Nb = {}, xb = {}, Wh = !1, qb = {}, ig = {}, G1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Yb = !1, jb = null;
    jb = /* @__PURE__ */ new Set();
    var io = !1, El = !1, X1 = !1, Gb = typeof WeakSet == "function" ? WeakSet : Set, Zl = null, kh = null, Fh = null, Al = null, sn = !1, fc = null, Hl = !1, V0 = 8192, wT = {
      getCacheForType: function(t) {
        var e = Kt(gl), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return Kt(gl).controller.signal;
      },
      getOwner: function() {
        return ga;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Z0 = Symbol.for;
      Z0("selector.component"), Z0("selector.has_pseudo_class"), Z0("selector.role"), Z0("selector.test_id"), Z0("selector.text");
    }
    var JT = [], KT = typeof WeakMap == "function" ? WeakMap : Map, Ll = 0, Bl = 2, Vn = 4, oo = 0, L0 = 1, zr = 2, og = 3, Bf = 4, fg = 6, Xb = 5, Lt = Ll, ve = null, Ct = null, Rt = 0, rn = 0, sg = 1, Dr = 2, w0 = 3, Qb = 4, Q1 = 5, J0 = 6, rg = 7, V1 = 8, Or = 9, se = rn, Zn = null, Nf = !1, Ih = !1, Z1 = !1, Pc = 0, Xe = oo, xf = 0, qf = 0, L1 = 0, dn = 0, Mr = 0, K0 = null, wa = null, dg = !1, hg = 0, Vb = 0, Zb = 300, mg = 1 / 0, Lb = 500, $0 = null, tl = null, Yf = null, yg = 0, w1 = 1, J1 = 2, wb = 3, jf = 0, Jb = 1, Kb = 2, $b = 3, Wb = 4, pg = 5, zl = 0, Gf = null, Ph = null, sc = 0, K1 = 0, $1 = -0, W1 = null, kb = null, Fb = null, rc = yg, Ib = null, $T = 50, W0 = 0, k1 = null, F1 = !1, vg = !1, WT = 50, Rr = 0, k0 = null, tm = !1, gg = null, Pb = !1, t2 = /* @__PURE__ */ new Set(), kT = {}, Sg = null, em = null, I1 = !1, P1 = !1, bg = !1, tS = !1, Xf = 0, eS = {};
    (function() {
      for (var t = 0; t < d1.length; t++) {
        var e = d1[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), vn(a, "on" + e);
      }
      vn(_S, "onAnimationEnd"), vn(CS, "onAnimationIteration"), vn(HS, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(DT, "onTransitionRun"), vn(OT, "onTransitionStart"), vn(MT, "onTransitionCancel"), vn(BS, "onTransitionEnd");
    })(), ho("onMouseEnter", ["mouseout", "mouseover"]), ho("onMouseLeave", ["mouseout", "mouseover"]), ho("onPointerEnter", ["pointerout", "pointerover"]), ho("onPointerLeave", ["pointerout", "pointerover"]), mn(
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
    var F0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), lS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(F0)
    ), Tg = "_reactListening" + Math.random().toString(36).slice(2), e2 = !1, l2 = !1, Eg = !1, a2 = !1, Ag = !1, zg = !1, n2 = !1, Dg = {}, FT = /\r\n?/g, IT = /\u0000|\uFFFD/g, Ur = "http://www.w3.org/1999/xlink", aS = "http://www.w3.org/XML/1998/namespace", PT = "javascript:throw new Error('React form unexpectedly submitted.')", tE = "suppressHydrationWarning", _r = "&", Og = "/&", I0 = "$", P0 = "/$", Qf = "$?", Cr = "$~", lm = "$!", eE = "html", lE = "body", aE = "head", nS = "F!", u2 = "F", c2 = "loading", nE = "style", fo = 0, am = 1, Mg = 2, uS = null, cS = null, i2 = { dialog: !0, webview: !0 }, iS = null, tp = void 0, o2 = typeof setTimeout == "function" ? setTimeout : void 0, uE = typeof clearTimeout == "function" ? clearTimeout : void 0, Hr = -1, f2 = typeof Promise == "function" ? Promise : void 0, cE = typeof queueMicrotask == "function" ? queueMicrotask : typeof f2 < "u" ? function(t) {
      return f2.resolve(null).then(t).catch(av);
    } : o2, oS = null, Br = 0, ep = 1, s2 = 2, r2 = 3, Bu = 4, Nu = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Set(), so = Wt.d;
    Wt.d = {
      f: function() {
        var t = so.f(), e = qa();
        return t || e;
      },
      r: function(t) {
        var e = hn(t);
        e !== null && e.tag === 5 && e.type === "form" ? Go(e) : so.r(t);
      },
      D: function(t) {
        so.D(t), Vy("dns-prefetch", t, null);
      },
      C: function(t, e) {
        so.C(t, e), Vy("preconnect", t, e);
      },
      L: function(t, e, a) {
        so.L(t, e, a);
        var c = nm;
        if (c && t && e) {
          var o = 'link[rel="preload"][as="' + ue(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + ue(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + ue(
            a.imageSizes
          ) + '"]')) : o += '[href="' + ue(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = Vi(t);
              break;
            case "script":
              f = Zi(t);
          }
          Nu.has(f) || (t = Dt(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Nu.set(f, t), c.querySelector(o) !== null || e === "style" && c.querySelector(
            Is(f)
          ) || e === "script" && c.querySelector(Ps(f)) || (e = c.createElement("link"), ze(e, "link", t), Ze(e), c.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        so.m(t, e);
        var a = nm;
        if (a && t) {
          var c = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + ue(c) + '"][href="' + ue(t) + '"]', f = o;
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Zi(t);
          }
          if (!Nu.has(f) && (t = Dt({ rel: "modulepreload", href: t }, e), Nu.set(f, t), a.querySelector(o) === null)) {
            switch (c) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Ps(f)))
                  return;
            }
            c = a.createElement("link"), ze(c, "link", t), Ze(c), a.head.appendChild(c);
          }
        }
      },
      X: function(t, e) {
        so.X(t, e);
        var a = nm;
        if (a && t) {
          var c = Wa(a).hoistableScripts, o = Zi(t), f = c.get(o);
          f || (f = a.querySelector(
            Ps(o)
          ), f || (t = Dt({ src: t, async: !0 }, e), (e = Nu.get(o)) && wy(t, e), f = a.createElement("script"), Ze(f), ze(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      },
      S: function(t, e, a) {
        so.S(t, e, a);
        var c = nm;
        if (c && t) {
          var o = Wa(c).hoistableStyles, f = Vi(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Br, preload: null };
            if (d = c.querySelector(
              Is(f)
            ))
              h.loading = ep | Bu;
            else {
              t = Dt(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Nu.get(f)) && Ly(t, a);
              var y = d = c.createElement("link");
              Ze(y), ze(y, "link", t), y._p = new Promise(function(p, A) {
                y.onload = p, y.onerror = A;
              }), y.addEventListener("load", function() {
                h.loading |= ep;
              }), y.addEventListener("error", function() {
                h.loading |= s2;
              }), h.loading |= Bu, cf(d, e, c);
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
        so.M(t, e);
        var a = nm;
        if (a && t) {
          var c = Wa(a).hoistableScripts, o = Zi(t), f = c.get(o);
          f || (f = a.querySelector(
            Ps(o)
          ), f || (t = Dt({ src: t, async: !0, type: "module" }, e), (e = Nu.get(o)) && wy(t, e), f = a.createElement("script"), Ze(f), ze(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      }
    };
    var nm = typeof document > "u" ? null : document, Rg = null, iE = 6e4, oE = 800, fE = 500, fS = 0, sS = null, Ug = null, Nr = t1, lp = {
      $$typeof: qn,
      Provider: null,
      Consumer: null,
      _currentValue: Nr,
      _currentValue2: Nr,
      _threadCount: 0
    }, h2 = "%c%s%c", m2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", y2 = "", _g = " ", sE = Function.prototype.bind, p2 = !1, v2 = null, g2 = null, S2 = null, b2 = null, T2 = null, E2 = null, A2 = null, z2 = null, D2 = null, O2 = null;
    v2 = function(t, e, a, c) {
      e = G(t, e), e !== null && (a = $(e.memoizedState, a, 0, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Dt({}, t.memoizedProps), a = Yl(t, 2), a !== null && pt(a, t, 2));
    }, g2 = function(t, e, a) {
      e = G(t, e), e !== null && (a = tt(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = Dt({}, t.memoizedProps), a = Yl(t, 2), a !== null && pt(a, t, 2));
    }, S2 = function(t, e, a, c) {
      e = G(t, e), e !== null && (a = W(e.memoizedState, a, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Dt({}, t.memoizedProps), a = Yl(t, 2), a !== null && pt(a, t, 2));
    }, b2 = function(t, e, a) {
      t.pendingProps = $(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && pt(e, t, 2);
    }, T2 = function(t, e) {
      t.pendingProps = tt(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && pt(e, t, 2);
    }, E2 = function(t, e, a) {
      t.pendingProps = W(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && pt(e, t, 2);
    }, A2 = function(t) {
      var e = Yl(t, 2);
      e !== null && pt(e, t, 2);
    }, z2 = function(t) {
      var e = Yr(), a = Yl(t, e);
      a !== null && pt(a, t, e);
    }, D2 = function(t) {
      kt = t;
    }, O2 = function(t) {
      Bt = t;
    };
    var Cg = !0, Hg = null, rS = !1, Vf = null, Zf = null, Lf = null, ap = /* @__PURE__ */ new Map(), np = /* @__PURE__ */ new Map(), wf = [], rE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Bg = null;
    if (xn.prototype.render = e0.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ge(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var c = e.current, o = Gl(c);
      rh(c, o, a, e, null, null);
    }, xn.prototype.unmount = e0.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (Lt & (Bl | Vn)) !== Ll && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), rh(t.current, 2, null, t, null, null), qa(), e[uc] = null;
      }
    }, xn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = rp();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < wf.length && e !== 0 && e < wf[a].priority; a++) ;
        wf.splice(a, 0, t), a === 0 && t0(t);
      }
    }, (function() {
      var t = nr.version;
      if (t !== "19.2.4")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (t + `
  - react-dom:  19.2.4
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Wt.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + t
        ));
      return t = ba(e), t = t !== null ? xl(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: N,
        reconcilerVersion: "19.2.4"
      };
      return t.overrideHookState = v2, t.overrideHookStateDeletePath = g2, t.overrideHookStateRenamePath = S2, t.overrideProps = b2, t.overridePropsDeletePath = T2, t.overridePropsRenamePath = E2, t.scheduleUpdate = A2, t.scheduleRetry = z2, t.setErrorHandler = D2, t.setSuspenseHandler = O2, t.scheduleRefresh = _e, t.scheduleRoot = Ue, t.setRefreshHandler = Nl, t.getCurrentFiber = oe, cm(t);
    })() && Wc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var M2 = window.location.protocol;
      /^(https?|file):$/.test(M2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (M2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    op.createRoot = function(t, e) {
      if (!ge(t))
        throw Error("Target container is not a DOM element.");
      l0(t);
      var a = !1, c = "", o = zd, f = Dd, d = km;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === on && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (c = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = lr(
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
        Mv
      ), t[uc] = e.current, Qc(t), new e0(e);
    }, op.hydrateRoot = function(t, e, a) {
      if (!ge(t))
        throw Error("Target container is not a DOM element.");
      l0(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var c = !1, o = "", f = zd, d = Dd, h = km, y = null;
      return a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = lr(
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
        Mv
      ), e.context = Av(null), a = e.current, c = Gl(a), c = li(c), o = el(c), o.callback = null, eu(a, o, c), In(c, "hydrateRoot()", null), a = c, e.current.lanes = a, dc(e, a), ma(e), t[uc] = e.current, Qc(t), new xn(e);
    }, op.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), op;
}
var q2;
function HE() {
  if (q2) return xg.exports;
  q2 = 1;
  function G() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G);
      } catch ($) {
        console.error($);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (G(), xg.exports = _E()) : xg.exports = CE(), xg.exports;
}
var BE = HE();
const mS = 768;
let yS = null;
function NE(G, $ = "root") {
  const W = document.getElementById($);
  if (!W) throw new Error(`Element ID "${$}" not found`);
  yS || (yS = BE.createRoot(W)), yS.render(G);
}
function Q2(G = !0) {
  const [$, W] = jg(G);
  return [$, (tt) => {
    tt = tt === void 0 ? !$ : tt, W(tt);
  }];
}
function V2(G = 0, $ = 1, W = 1 / 0, M = !0) {
  const [tt, Bt] = jg(G);
  return [tt, () => {
    let L = tt + $;
    L > W && (L = M ? G : W), Bt(L);
  }];
}
function Z2(G, $ = !0) {
  const W = Object.keys(G).length, [M, tt] = V2(0, 1, W - 1, $);
  return [M, tt];
}
function xE() {
  const [G, $] = jg(void 0);
  return Y2(() => {
    const W = window.matchMedia(`(max-width: ${mS - 1}px)`), M = () => {
      $(window.innerWidth < mS);
    };
    return W.addEventListener("change", M), $(window.innerWidth < mS), () => W.removeEventListener("change", M);
  }, []), !!G;
}
const qE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  renderReact: NE,
  useCount: V2,
  useIndex: Z2,
  useIsMobile: xE,
  useOpen: Q2
}, Symbol.toStringTag, { value: "Module" }));
function YE({
  childrens: G,
  handleCycle: $,
  onClick: W,
  ...M
}) {
  const [tt, Bt] = Z2(G), kt = async (L) => {
    W && W(L), await $(tt), Bt();
  };
  return /* @__PURE__ */ wl.jsx("button", { onClick: kt, ...M, children: G[tt] });
}
function jE({
  handleFormData: G,
  link: $,
  onSubmit: W,
  ...M
}) {
  const tt = yE();
  let Bt = async (kt) => {
    if (kt.preventDefault(), W && W(kt), G) {
      const L = new FormData(kt.currentTarget);
      await G(L);
    }
    $ && tt($);
  };
  return /* @__PURE__ */ wl.jsx("form", { onSubmit: Bt, ...M });
}
const L2 = hE(null);
function GE({ children: G }) {
  const [$, W] = jg(!1), M = {
    isLoading: $,
    setIsLoading: W
  };
  return /* @__PURE__ */ wl.jsxs(L2, { value: M, children: [
    G,
    $ && /* @__PURE__ */ wl.jsx("div", { className: "fixed inset-0 z-50 flex justify-center items-center bg-black/5", children: /* @__PURE__ */ wl.jsx("div", { className: "flex justify-center items-center size-10 rounded-full bg-white shadow-md", children: /* @__PURE__ */ wl.jsx(G2, { role: "status", "aria-label": "Loading", className: "size-full animate-spin" }) }) })
  ] });
}
function XE() {
  const G = mE(L2);
  if (!G) throw new Error("not used in the context");
  return G;
}
const QE = ({ ...G }) => {
  const { theme: $ = "system" } = bE();
  return /* @__PURE__ */ wl.jsx(
    TE,
    {
      theme: $,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ wl.jsx(SE, { className: "size-4" }),
        info: /* @__PURE__ */ wl.jsx(gE, { className: "size-4" }),
        warning: /* @__PURE__ */ wl.jsx(vE, { className: "size-4" }),
        error: /* @__PURE__ */ wl.jsx(pE, { className: "size-4" }),
        loading: /* @__PURE__ */ wl.jsx(G2, { className: "size-4 animate-spin" })
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
      ...G
    }
  );
};
function VE({ children: G }) {
  return /* @__PURE__ */ wl.jsxs(wl.Fragment, { children: [
    G,
    /* @__PURE__ */ wl.jsx(QE, { position: "top-center", richColors: !0 })
  ] });
}
function Yg(...G) {
  return zE(AE(G));
}
const ZE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cn: Yg
}, Symbol.toStringTag, { value: "Module" }));
function LE({
  openIcon: G,
  closeIcon: $,
  handleOpen: W,
  defaultOpen: M = !0,
  rotate: tt = !0,
  listenOpen: Bt,
  className: kt,
  onClick: L,
  ...re
}) {
  const [ae, Dl] = Q2(M);
  Bt !== void 0 && Y2(
    () => {
      Dl(Bt);
    },
    [Bt]
  );
  const st = async (Nt) => {
    L && L(Nt), await W(ae), Dl();
  };
  return /* @__PURE__ */ wl.jsxs(
    "button",
    {
      onClick: st,
      "data-open": ae,
      className: Yg("group relative", kt),
      ...re,
      children: [
        /* @__PURE__ */ wl.jsx(
          "div",
          {
            className: Yg(
              "grid place-content-center size-full transition group-data-[open=false]:opacity-0 absolute",
              tt ? "group-data-[open=false]:-rotate-90" : void 0
            ),
            children: G
          }
        ),
        /* @__PURE__ */ wl.jsx(
          "div",
          {
            className: Yg(
              "grid place-content-center size-full transition group-data-[open=true]:opacity-0 absolute",
              tt ? "group-data-[open=true]:rotate-90" : void 0
            ),
            children: $
          }
        )
      ]
    }
  );
}
const wE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CycleButton: YE,
  Form: jE,
  IconToggle: LE,
  Loading: GE,
  Notice: VE,
  notice: EE,
  useLoading: XE
}, Symbol.toStringTag, { value: "Module" })), JE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function* pS(G, $, W) {
  if (W == 0) throw new Error('the parameter "step" cannot be 0');
  let M;
  if ($ === void 0 ? (M = 0, $ = G) : M = G, W = W ?? 1, W > 0)
    for (let tt = M; tt < $; tt += W)
      yield tt;
  else
    for (let tt = M; tt > $; tt += W)
      yield tt;
}
function KE(G, $, W) {
  let M;
  return $ == null ? M = pS(G) : M = pS(G, $, W), Array.from(M);
}
const $E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  range: pS,
  rangeArray: KE
}, Symbol.toStringTag, { value: "Module" }));
async function WE(G, $) {
  let {
    params: W,
    body: M,
    headers: tt,
    method: Bt,
    check: kt
  } = $ ?? {};
  if (W && (W = Object.fromEntries(
    Object.entries(W).map(
      ([ae, Dl]) => [ae, String(Dl)]
    )
  ), G = G + "?" + new URLSearchParams(W).toString()), tt = tt ?? {}, tt = Object.fromEntries(
    Object.entries(tt).map(
      ([ae, Dl]) => [ae, String(Dl)]
    )
  ), M instanceof File) {
    const ae = new FormData();
    ae.append("file", M), M = ae;
  } else M instanceof Blob ? tt["Content-Type"] = tt["Content-Type"] ?? M.type ?? "application/octet-stream" : M instanceof Object && !(M instanceof URLSearchParams) && !(M instanceof FormData) ? (M = JSON.stringify(M), tt["Content-Type"] = tt["Content-Type"] ?? "application/json") : typeof M == "string" && (tt["Content-Type"] = tt["Content-Type"] ?? "application/json");
  const L = {
    method: Bt ? Bt.toUpperCase() : M ? "POST" : "GET",
    headers: tt
  };
  M && (L.body = M), kt = kt ?? !1;
  const re = await fetch(
    G,
    L
  );
  if (kt && !re.ok) {
    const ae = await re.text();
    throw new Error(ae, { cause: re });
  }
  return re;
}
const kE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  request: WE
}, Symbol.toStringTag, { value: "Module" })), FE = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, IE = /^https?:\/\/[^\s/$.?#].[^\s]*$/, PE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, tA = /^1[3-9]\d{9}$/, eA = /^[\u4e00-\u9fa5]+$/, lA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PATTERN_CN: eA,
  PATTERN_EMAIL: PE,
  PATTERN_IP: FE,
  PATTERN_PHONE: tA,
  PATTERN_URL: IE
}, Symbol.toStringTag, { value: "Module" }));
class aA {
  /**
   * Build instance.
   * 
   * @param name - Local storage key.
   */
  constructor($) {
    this.name = $, localStorage.getItem($) || localStorage.setItem($, "{}");
  }
  /**
   * Get all data.
   * 
   * @returns All data.
   */
  get data() {
    const $ = localStorage.getItem(this.name);
    return JSON.parse($);
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
  update($) {
    const W = Object.assign(this.data, $), M = JSON.stringify(W);
    localStorage.setItem(this.name, M);
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
  get($) {
    return this.data[$];
  }
  /**
   * Set a item.
   * 
   * @param key - Item key.
   * @param value - Item value.
   */
  set($, W) {
    const M = { [$]: W };
    this.update(M);
  }
  /**
   * Delete a item.
   * 
   * @param key - Item key.
   */
  del($) {
    const W = this.data;
    delete W[$];
    const M = JSON.stringify(W);
    localStorage.setItem(this.name, M);
  }
  /**
   * Toggle boolean value.
   * 
   * @param key - Item key.
   */
  toggle($) {
    const W = this.data;
    if (!($ in W)) throw new Error(`Key "${$}" not found`);
    const M = W[$];
    if (typeof M != "boolean") throw new Error(`The value type of key "${$}" is not boolean`);
    this.set($, !M);
  }
}
const nA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Storager: aA
}, Symbol.toStringTag, { value: "Module" })), hA = {
  component: wE,
  base: JE,
  data: $E,
  net: kE,
  re: lA,
  react: qE,
  twc: ZE,
  window: nA
};
export {
  hA as default
};
