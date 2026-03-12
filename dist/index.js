import yS, { useState as pS, useEffect as fE } from "react";
import q2 from "react-dom";
import { useNavigate as sE } from "react-router-dom";
import { clsx as rE } from "clsx";
import { twMerge as dE } from "tailwind-merge";
var Ng = { exports: {} }, np = {};
var M2;
function hE() {
  if (M2) return np;
  M2 = 1;
  var Z = /* @__PURE__ */ Symbol.for("react.transitional.element"), I = /* @__PURE__ */ Symbol.for("react.fragment");
  function W(R, Tt, jt) {
    var le = null;
    if (jt !== void 0 && (le = "" + jt), Tt.key !== void 0 && (le = "" + Tt.key), "key" in Tt) {
      jt = {};
      for (var L in Tt)
        L !== "key" && (jt[L] = Tt[L]);
    } else jt = Tt;
    return Tt = jt.ref, {
      $$typeof: Z,
      type: R,
      key: le,
      ref: Tt !== void 0 ? Tt : null,
      props: jt
    };
  }
  return np.Fragment = I, np.jsx = W, np.jsxs = W, np;
}
var up = {};
var R2;
function mE() {
  return R2 || (R2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function Z(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === Qe ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case ve:
          return "Fragment";
        case wa:
          return "Profiler";
        case ee:
          return "StrictMode";
        case Nl:
          return "Suspense";
        case We:
          return "SuspenseList";
        case at:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case Bl:
            return "Portal";
          case Dl:
            return j.displayName || "Context";
          case Xe:
            return (j._context.displayName || "Context") + ".Consumer";
          case ga:
            var k = j.render;
            return j = j.displayName, j || (j = k.displayName || k.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case qt:
            return k = j.displayName || null, k !== null ? k : Z(j.type) || "Memo";
          case ol:
            k = j._payload, j = j._init;
            try {
              return Z(j(k));
            } catch {
            }
        }
      return null;
    }
    function I(j) {
      return "" + j;
    }
    function W(j) {
      try {
        I(j);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var lt = k.error, nt = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return lt.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          nt
        ), I(j);
      }
    }
    function R(j) {
      if (j === ve) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === ol)
        return "<...>";
      try {
        var k = Z(j);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Tt() {
      var j = Bt.A;
      return j === null ? null : j.getOwner();
    }
    function jt() {
      return Error("react-stack-top-frame");
    }
    function le(j) {
      if (Ut.call(j, "key")) {
        var k = Object.getOwnPropertyDescriptor(j, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function L(j, k) {
      function lt() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      lt.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: lt,
        configurable: !0
      });
    }
    function se() {
      var j = Z(this.type);
      return Q[j] || (Q[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function il(j, k, lt, nt, Ne, Ja) {
      var ge = lt.ref;
      return j = {
        $$typeof: Ue,
        type: j,
        key: k,
        props: lt,
        _owner: nt
      }, (ge !== void 0 ? ge : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: se
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
        value: Ne
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ja
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function La(j, k, lt, nt, Ne, Ja) {
      var ge = k.children;
      if (ge !== void 0)
        if (nt)
          if (xl(ge)) {
            for (nt = 0; nt < ge.length; nt++)
              ft(ge[nt]);
            Object.freeze && Object.freeze(ge);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else ft(ge);
      if (Ut.call(k, "key")) {
        ge = Z(j);
        var Ka = Object.keys(k).filter(function(wf) {
          return wf !== "key";
        });
        nt = 0 < Ka.length ? "{key: someKey, " + Ka.join(": ..., ") + ": ...}" : "{key: someKey}", ht[ge + nt] || (Ka = 0 < Ka.length ? "{" + Ka.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          nt,
          ge,
          Ka,
          ge
        ), ht[ge + nt] = !0);
      }
      if (ge = null, lt !== void 0 && (W(lt), ge = "" + lt), le(k) && (W(k.key), ge = "" + k.key), "key" in k) {
        lt = {};
        for (var Sa in k)
          Sa !== "key" && (lt[Sa] = k[Sa]);
      } else lt = k;
      return ge && L(
        lt,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), il(
        j,
        ge,
        lt,
        Tt(),
        Ne,
        Ja
      );
    }
    function ft(j) {
      Gt(j) ? j._store && (j._store.validated = 1) : typeof j == "object" && j !== null && j.$$typeof === ol && (j._payload.status === "fulfilled" ? Gt(j._payload.value) && j._payload.value._store && (j._payload.value._store.validated = 1) : j._store && (j._store.validated = 1));
    }
    function Gt(j) {
      return typeof j == "object" && j !== null && j.$$typeof === Ue;
    }
    var Re = yS, Ue = /* @__PURE__ */ Symbol.for("react.transitional.element"), Bl = /* @__PURE__ */ Symbol.for("react.portal"), ve = /* @__PURE__ */ Symbol.for("react.fragment"), ee = /* @__PURE__ */ Symbol.for("react.strict_mode"), wa = /* @__PURE__ */ Symbol.for("react.profiler"), Xe = /* @__PURE__ */ Symbol.for("react.consumer"), Dl = /* @__PURE__ */ Symbol.for("react.context"), ga = /* @__PURE__ */ Symbol.for("react.forward_ref"), Nl = /* @__PURE__ */ Symbol.for("react.suspense"), We = /* @__PURE__ */ Symbol.for("react.suspense_list"), qt = /* @__PURE__ */ Symbol.for("react.memo"), ol = /* @__PURE__ */ Symbol.for("react.lazy"), at = /* @__PURE__ */ Symbol.for("react.activity"), Qe = /* @__PURE__ */ Symbol.for("react.client.reference"), Bt = Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ut = Object.prototype.hasOwnProperty, xl = Array.isArray, fl = console.createTask ? console.createTask : function() {
      return null;
    };
    Re = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var O, Q = {}, w = Re.react_stack_bottom_frame.bind(
      Re,
      jt
    )(), ot = fl(R(jt)), ht = {};
    up.Fragment = ve, up.jsx = function(j, k, lt) {
      var nt = 1e4 > Bt.recentlyCreatedOwnerStacks++;
      return La(
        j,
        k,
        lt,
        !1,
        nt ? Error("react-stack-top-frame") : w,
        nt ? fl(R(j)) : ot
      );
    }, up.jsxs = function(j, k, lt) {
      var nt = 1e4 > Bt.recentlyCreatedOwnerStacks++;
      return La(
        j,
        k,
        lt,
        !0,
        nt ? Error("react-stack-top-frame") : w,
        nt ? fl(R(j)) : ot
      );
    };
  })()), up;
}
var U2;
function yE() {
  return U2 || (U2 = 1, process.env.NODE_ENV === "production" ? Ng.exports = hE() : Ng.exports = mE()), Ng.exports;
}
var op = yE(), xg = { exports: {} }, cp = {}, qg = { exports: {} }, rS = {};
var _2;
function pE() {
  return _2 || (_2 = 1, (function(Z) {
    function I(O, Q) {
      var w = O.length;
      O.push(Q);
      t: for (; 0 < w; ) {
        var ot = w - 1 >>> 1, ht = O[ot];
        if (0 < Tt(ht, Q))
          O[ot] = Q, O[w] = ht, w = ot;
        else break t;
      }
    }
    function W(O) {
      return O.length === 0 ? null : O[0];
    }
    function R(O) {
      if (O.length === 0) return null;
      var Q = O[0], w = O.pop();
      if (w !== Q) {
        O[0] = w;
        t: for (var ot = 0, ht = O.length, j = ht >>> 1; ot < j; ) {
          var k = 2 * (ot + 1) - 1, lt = O[k], nt = k + 1, Ne = O[nt];
          if (0 > Tt(lt, w))
            nt < ht && 0 > Tt(Ne, lt) ? (O[ot] = Ne, O[nt] = w, ot = nt) : (O[ot] = lt, O[k] = w, ot = k);
          else if (nt < ht && 0 > Tt(Ne, w))
            O[ot] = Ne, O[nt] = w, ot = nt;
          else break t;
        }
      }
      return Q;
    }
    function Tt(O, Q) {
      var w = O.sortIndex - Q.sortIndex;
      return w !== 0 ? w : O.id - Q.id;
    }
    if (Z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var jt = performance;
      Z.unstable_now = function() {
        return jt.now();
      };
    } else {
      var le = Date, L = le.now();
      Z.unstable_now = function() {
        return le.now() - L;
      };
    }
    var se = [], il = [], La = 1, ft = null, Gt = 3, Re = !1, Ue = !1, Bl = !1, ve = !1, ee = typeof setTimeout == "function" ? setTimeout : null, wa = typeof clearTimeout == "function" ? clearTimeout : null, Xe = typeof setImmediate < "u" ? setImmediate : null;
    function Dl(O) {
      for (var Q = W(il); Q !== null; ) {
        if (Q.callback === null) R(il);
        else if (Q.startTime <= O)
          R(il), Q.sortIndex = Q.expirationTime, I(se, Q);
        else break;
        Q = W(il);
      }
    }
    function ga(O) {
      if (Bl = !1, Dl(O), !Ue)
        if (W(se) !== null)
          Ue = !0, Nl || (Nl = !0, Bt());
        else {
          var Q = W(il);
          Q !== null && fl(ga, Q.startTime - O);
        }
    }
    var Nl = !1, We = -1, qt = 5, ol = -1;
    function at() {
      return ve ? !0 : !(Z.unstable_now() - ol < qt);
    }
    function Qe() {
      if (ve = !1, Nl) {
        var O = Z.unstable_now();
        ol = O;
        var Q = !0;
        try {
          t: {
            Ue = !1, Bl && (Bl = !1, wa(We), We = -1), Re = !0;
            var w = Gt;
            try {
              e: {
                for (Dl(O), ft = W(se); ft !== null && !(ft.expirationTime > O && at()); ) {
                  var ot = ft.callback;
                  if (typeof ot == "function") {
                    ft.callback = null, Gt = ft.priorityLevel;
                    var ht = ot(
                      ft.expirationTime <= O
                    );
                    if (O = Z.unstable_now(), typeof ht == "function") {
                      ft.callback = ht, Dl(O), Q = !0;
                      break e;
                    }
                    ft === W(se) && R(se), Dl(O);
                  } else R(se);
                  ft = W(se);
                }
                if (ft !== null) Q = !0;
                else {
                  var j = W(il);
                  j !== null && fl(
                    ga,
                    j.startTime - O
                  ), Q = !1;
                }
              }
              break t;
            } finally {
              ft = null, Gt = w, Re = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? Bt() : Nl = !1;
        }
      }
    }
    var Bt;
    if (typeof Xe == "function")
      Bt = function() {
        Xe(Qe);
      };
    else if (typeof MessageChannel < "u") {
      var Ut = new MessageChannel(), xl = Ut.port2;
      Ut.port1.onmessage = Qe, Bt = function() {
        xl.postMessage(null);
      };
    } else
      Bt = function() {
        ee(Qe, 0);
      };
    function fl(O, Q) {
      We = ee(function() {
        O(Z.unstable_now());
      }, Q);
    }
    Z.unstable_IdlePriority = 5, Z.unstable_ImmediatePriority = 1, Z.unstable_LowPriority = 4, Z.unstable_NormalPriority = 3, Z.unstable_Profiling = null, Z.unstable_UserBlockingPriority = 2, Z.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, Z.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : qt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, Z.unstable_getCurrentPriorityLevel = function() {
      return Gt;
    }, Z.unstable_next = function(O) {
      switch (Gt) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = Gt;
      }
      var w = Gt;
      Gt = Q;
      try {
        return O();
      } finally {
        Gt = w;
      }
    }, Z.unstable_requestPaint = function() {
      ve = !0;
    }, Z.unstable_runWithPriority = function(O, Q) {
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
      var w = Gt;
      Gt = O;
      try {
        return Q();
      } finally {
        Gt = w;
      }
    }, Z.unstable_scheduleCallback = function(O, Q, w) {
      var ot = Z.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ot + w : ot) : w = ot, O) {
        case 1:
          var ht = -1;
          break;
        case 2:
          ht = 250;
          break;
        case 5:
          ht = 1073741823;
          break;
        case 4:
          ht = 1e4;
          break;
        default:
          ht = 5e3;
      }
      return ht = w + ht, O = {
        id: La++,
        callback: Q,
        priorityLevel: O,
        startTime: w,
        expirationTime: ht,
        sortIndex: -1
      }, w > ot ? (O.sortIndex = w, I(il, O), W(se) === null && O === W(il) && (Bl ? (wa(We), We = -1) : Bl = !0, fl(ga, w - ot))) : (O.sortIndex = ht, I(se, O), Ue || Re || (Ue = !0, Nl || (Nl = !0, Bt()))), O;
    }, Z.unstable_shouldYield = at, Z.unstable_wrapCallback = function(O) {
      var Q = Gt;
      return function() {
        var w = Gt;
        Gt = Q;
        try {
          return O.apply(this, arguments);
        } finally {
          Gt = w;
        }
      };
    };
  })(rS)), rS;
}
var dS = {};
var C2;
function vE() {
  return C2 || (C2 = 1, (function(Z) {
    process.env.NODE_ENV !== "production" && (function() {
      function I() {
        if (ga = !1, ol) {
          var O = Z.unstable_now();
          Bt = O;
          var Q = !0;
          try {
            t: {
              Xe = !1, Dl && (Dl = !1, We(at), at = -1), wa = !0;
              var w = ee;
              try {
                e: {
                  for (le(O), ve = R(Re); ve !== null && !(ve.expirationTime > O && se()); ) {
                    var ot = ve.callback;
                    if (typeof ot == "function") {
                      ve.callback = null, ee = ve.priorityLevel;
                      var ht = ot(
                        ve.expirationTime <= O
                      );
                      if (O = Z.unstable_now(), typeof ht == "function") {
                        ve.callback = ht, le(O), Q = !0;
                        break e;
                      }
                      ve === R(Re) && Tt(Re), le(O);
                    } else Tt(Re);
                    ve = R(Re);
                  }
                  if (ve !== null) Q = !0;
                  else {
                    var j = R(Ue);
                    j !== null && il(
                      L,
                      j.startTime - O
                    ), Q = !1;
                  }
                }
                break t;
              } finally {
                ve = null, ee = w, wa = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? Ut() : ol = !1;
          }
        }
      }
      function W(O, Q) {
        var w = O.length;
        O.push(Q);
        t: for (; 0 < w; ) {
          var ot = w - 1 >>> 1, ht = O[ot];
          if (0 < jt(ht, Q))
            O[ot] = Q, O[w] = ht, w = ot;
          else break t;
        }
      }
      function R(O) {
        return O.length === 0 ? null : O[0];
      }
      function Tt(O) {
        if (O.length === 0) return null;
        var Q = O[0], w = O.pop();
        if (w !== Q) {
          O[0] = w;
          t: for (var ot = 0, ht = O.length, j = ht >>> 1; ot < j; ) {
            var k = 2 * (ot + 1) - 1, lt = O[k], nt = k + 1, Ne = O[nt];
            if (0 > jt(lt, w))
              nt < ht && 0 > jt(Ne, lt) ? (O[ot] = Ne, O[nt] = w, ot = nt) : (O[ot] = lt, O[k] = w, ot = k);
            else if (nt < ht && 0 > jt(Ne, w))
              O[ot] = Ne, O[nt] = w, ot = nt;
            else break t;
          }
        }
        return Q;
      }
      function jt(O, Q) {
        var w = O.sortIndex - Q.sortIndex;
        return w !== 0 ? w : O.id - Q.id;
      }
      function le(O) {
        for (var Q = R(Ue); Q !== null; ) {
          if (Q.callback === null) Tt(Ue);
          else if (Q.startTime <= O)
            Tt(Ue), Q.sortIndex = Q.expirationTime, W(Re, Q);
          else break;
          Q = R(Ue);
        }
      }
      function L(O) {
        if (Dl = !1, le(O), !Xe)
          if (R(Re) !== null)
            Xe = !0, ol || (ol = !0, Ut());
          else {
            var Q = R(Ue);
            Q !== null && il(
              L,
              Q.startTime - O
            );
          }
      }
      function se() {
        return ga ? !0 : !(Z.unstable_now() - Bt < Qe);
      }
      function il(O, Q) {
        at = Nl(function() {
          O(Z.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), Z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var La = performance;
        Z.unstable_now = function() {
          return La.now();
        };
      } else {
        var ft = Date, Gt = ft.now();
        Z.unstable_now = function() {
          return ft.now() - Gt;
        };
      }
      var Re = [], Ue = [], Bl = 1, ve = null, ee = 3, wa = !1, Xe = !1, Dl = !1, ga = !1, Nl = typeof setTimeout == "function" ? setTimeout : null, We = typeof clearTimeout == "function" ? clearTimeout : null, qt = typeof setImmediate < "u" ? setImmediate : null, ol = !1, at = -1, Qe = 5, Bt = -1;
      if (typeof qt == "function")
        var Ut = function() {
          qt(I);
        };
      else if (typeof MessageChannel < "u") {
        var xl = new MessageChannel(), fl = xl.port2;
        xl.port1.onmessage = I, Ut = function() {
          fl.postMessage(null);
        };
      } else
        Ut = function() {
          Nl(I, 0);
        };
      Z.unstable_IdlePriority = 5, Z.unstable_ImmediatePriority = 1, Z.unstable_LowPriority = 4, Z.unstable_NormalPriority = 3, Z.unstable_Profiling = null, Z.unstable_UserBlockingPriority = 2, Z.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, Z.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Qe = 0 < O ? Math.floor(1e3 / O) : 5;
      }, Z.unstable_getCurrentPriorityLevel = function() {
        return ee;
      }, Z.unstable_next = function(O) {
        switch (ee) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = ee;
        }
        var w = ee;
        ee = Q;
        try {
          return O();
        } finally {
          ee = w;
        }
      }, Z.unstable_requestPaint = function() {
        ga = !0;
      }, Z.unstable_runWithPriority = function(O, Q) {
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
        var w = ee;
        ee = O;
        try {
          return Q();
        } finally {
          ee = w;
        }
      }, Z.unstable_scheduleCallback = function(O, Q, w) {
        var ot = Z.unstable_now();
        switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ot + w : ot) : w = ot, O) {
          case 1:
            var ht = -1;
            break;
          case 2:
            ht = 250;
            break;
          case 5:
            ht = 1073741823;
            break;
          case 4:
            ht = 1e4;
            break;
          default:
            ht = 5e3;
        }
        return ht = w + ht, O = {
          id: Bl++,
          callback: Q,
          priorityLevel: O,
          startTime: w,
          expirationTime: ht,
          sortIndex: -1
        }, w > ot ? (O.sortIndex = w, W(Ue, O), R(Re) === null && O === R(Ue) && (Dl ? (We(at), at = -1) : Dl = !0, il(L, w - ot))) : (O.sortIndex = ht, W(Re, O), Xe || wa || (Xe = !0, ol || (ol = !0, Ut()))), O;
      }, Z.unstable_shouldYield = se, Z.unstable_wrapCallback = function(O) {
        var Q = ee;
        return function() {
          var w = ee;
          ee = Q;
          try {
            return O.apply(this, arguments);
          } finally {
            ee = w;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(dS)), dS;
}
var H2;
function Y2() {
  return H2 || (H2 = 1, process.env.NODE_ENV === "production" ? qg.exports = pE() : qg.exports = vE()), qg.exports;
}
var B2;
function gE() {
  if (B2) return cp;
  B2 = 1;
  var Z = Y2(), I = yS, W = q2;
  function R(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Tt(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function jt(l) {
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
  function le(l) {
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
  function se(l) {
    if (jt(l) !== l)
      throw Error(R(188));
  }
  function il(l) {
    var n = l.alternate;
    if (!n) {
      if (n = jt(l), n === null) throw Error(R(188));
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
          if (r === u) return se(s), l;
          if (r === i) return se(s), n;
          r = r.sibling;
        }
        throw Error(R(188));
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
          if (!m) throw Error(R(189));
        }
      }
      if (u.alternate !== i) throw Error(R(190));
    }
    if (u.tag !== 3) throw Error(R(188));
    return u.stateNode.current === u ? l : n;
  }
  function La(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = La(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ft = Object.assign, Gt = /* @__PURE__ */ Symbol.for("react.element"), Re = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ue = /* @__PURE__ */ Symbol.for("react.portal"), Bl = /* @__PURE__ */ Symbol.for("react.fragment"), ve = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), wa = /* @__PURE__ */ Symbol.for("react.consumer"), Xe = /* @__PURE__ */ Symbol.for("react.context"), Dl = /* @__PURE__ */ Symbol.for("react.forward_ref"), ga = /* @__PURE__ */ Symbol.for("react.suspense"), Nl = /* @__PURE__ */ Symbol.for("react.suspense_list"), We = /* @__PURE__ */ Symbol.for("react.memo"), qt = /* @__PURE__ */ Symbol.for("react.lazy"), ol = /* @__PURE__ */ Symbol.for("react.activity"), at = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Qe = Symbol.iterator;
  function Bt(l) {
    return l === null || typeof l != "object" ? null : (l = Qe && l[Qe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ut = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ut ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case ee:
        return "Profiler";
      case ve:
        return "StrictMode";
      case ga:
        return "Suspense";
      case Nl:
        return "SuspenseList";
      case ol:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ue:
          return "Portal";
        case Xe:
          return l.displayName || "Context";
        case wa:
          return (l._context.displayName || "Context") + ".Consumer";
        case Dl:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case We:
          return n = l.displayName || null, n !== null ? n : xl(l.type) || "Memo";
        case qt:
          n = l._payload, l = l._init;
          try {
            return xl(l(n));
          } catch {
          }
      }
    return null;
  }
  var fl = Array.isArray, O = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ot = [], ht = -1;
  function j(l) {
    return { current: l };
  }
  function k(l) {
    0 > ht || (l.current = ot[ht], ot[ht] = null, ht--);
  }
  function lt(l, n) {
    ht++, ot[ht] = l.current, l.current = n;
  }
  var nt = j(null), Ne = j(null), Ja = j(null), ge = j(null);
  function Ka(l, n) {
    switch (lt(Ja, n), lt(Ne, l), lt(nt, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Dv(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Dv(n), l = Py(n, l);
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
    k(nt), lt(nt, l);
  }
  function Sa() {
    k(nt), k(Ne), k(Ja);
  }
  function wf(l) {
    l.memoizedState !== null && lt(ge, l);
    var n = nt.current, u = Py(n, l.type);
    n !== u && (lt(Ne, l), lt(nt, u));
  }
  function F(l) {
    Ne.current === l && (k(nt), k(Ne)), ge.current === l && (k(ge), ir._currentValue = w);
  }
  var Jf, Kf;
  function Zn(l) {
    if (Jf === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Jf = n && n[1] || "", Kf = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Jf + l + Kf;
  }
  var Pc = !1;
  function ae(l, n) {
    if (!l || Pc) return "";
    Pc = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (x) {
                  var C = x;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (x) {
                  C = x;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                C = x;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
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
      Pc = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Zn(u) : "";
  }
  function nm(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Zn(l.type);
      case 16:
        return Zn("Lazy");
      case 13:
        return l.child !== n && n !== null ? Zn("Suspense Fallback") : Zn("Suspense");
      case 19:
        return Zn("SuspenseList");
      case 0:
      case 15:
        return ae(l.type, !1);
      case 11:
        return ae(l.type.render, !1);
      case 1:
        return ae(l.type, !0);
      case 31:
        return Zn("Activity");
      default:
        return "";
    }
  }
  function Nr(l) {
    try {
      var n = "", u = null;
      do
        n += nm(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var um = Object.prototype.hasOwnProperty, re = Z.unstable_scheduleCallback, cm = Z.unstable_cancelCallback, ti = Z.unstable_shouldYield, xr = Z.unstable_requestPaint, Ol = Z.unstable_now, jg = Z.unstable_getCurrentPriorityLevel, qr = Z.unstable_ImmediatePriority, Yr = Z.unstable_UserBlockingPriority, rc = Z.unstable_NormalPriority, Gg = Z.unstable_LowPriority, im = Z.unstable_IdlePriority, fp = Z.log, sp = Z.unstable_setDisableYieldValue, ei = null, oa = null;
  function Nu(l) {
    if (typeof fp == "function" && sp(l), oa && typeof oa.setStrictMode == "function")
      try {
        oa.setStrictMode(ei, l);
      } catch {
      }
  }
  var Ll = Math.clz32 ? Math.clz32 : om, rp = Math.log, dp = Math.LN2;
  function om(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (rp(l) / dp | 0) | 0;
  }
  var xu = 256, dn = 262144, dc = 4194304;
  function $a(l) {
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
  function Ve(l, n, u) {
    var i = l.pendingLanes;
    if (i === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = i & 134217727;
    return v !== 0 ? (i = v & ~r, i !== 0 ? s = $a(i) : (m &= v, m !== 0 ? s = $a(m) : u || (u = v & ~l, u !== 0 && (s = $a(u))))) : (v = i & ~r, v !== 0 ? s = $a(v) : m !== 0 ? s = $a(m) : u || (u = i & ~l, u !== 0 && (s = $a(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function hn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function ro(l, n) {
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
  function li() {
    var l = dc;
    return dc <<= 1, (dc & 62914560) === 0 && (dc = 4194304), l;
  }
  function $f(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function ho(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jr(l, n, u, i, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, T = l.expirationTimes, _ = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var q = 31 - Ll(u), X = 1 << q;
      v[q] = 0, T[q] = -1;
      var C = _[q];
      if (C !== null)
        for (_[q] = null, q = 0; q < C.length; q++) {
          var x = C[q];
          x !== null && (x.lane &= -536870913);
        }
      u &= ~X;
    }
    i !== 0 && Wf(l, i, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function Wf(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var i = 31 - Ll(n);
    l.entangledLanes |= n, l.entanglements[i] = l.entanglements[i] | 1073741824 | u & 261930;
  }
  function Ln(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var i = 31 - Ll(u), s = 1 << i;
      s & n | l[i] & n && (l[i] |= n), u &= ~s;
    }
  }
  function ba(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Gr(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Gr(l) {
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
  function fm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Xr() {
    var l = Q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : or(l.type));
  }
  function sm(l, n) {
    var u = Q.p;
    try {
      return Q.p = l, n();
    } finally {
      Q.p = u;
    }
  }
  var mn = Math.random().toString(36).slice(2), ne = "__reactFiber$" + mn, wl = "__reactProps$" + mn, hc = "__reactContainer$" + mn, Qr = "__reactEvents$" + mn, rm = "__reactListeners$" + mn, hp = "__reactHandles$" + mn, dm = "__reactResources$" + mn, wn = "__reactMarker$" + mn;
  function Vr(l) {
    delete l[ne], delete l[wl], delete l[Qr], delete l[rm], delete l[hp];
  }
  function ai(l) {
    var n = l[ne];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[hc] || u[ne]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = xn(l); l !== null; ) {
            if (u = l[ne]) return u;
            l = xn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ni(l) {
    if (l = l[ne] || l[hc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function mo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(R(33));
  }
  function ui(l) {
    var n = l[dm];
    return n || (n = l[dm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ft(l) {
    l[wn] = !0;
  }
  var ci = /* @__PURE__ */ new Set(), mc = {};
  function yc(l, n) {
    Jn(l, n), Jn(l + "Capture", n);
  }
  function Jn(l, n) {
    for (mc[l] = n, l = 0; l < n.length; l++)
      ci.add(n[l]);
  }
  var Zr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Lr = {}, yo = {};
  function po(l) {
    return um.call(yo, l) ? !0 : um.call(Lr, l) ? !1 : Zr.test(l) ? yo[l] = !0 : (Lr[l] = !0, !1);
  }
  function vo(l, n, u) {
    if (po(n))
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
  function wr(l, n, u) {
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
  function Ta(l) {
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
  function Jr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function hm(l, n, u) {
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
  function Kr(l) {
    if (!l._valueTracker) {
      var n = Jr(l) ? "checked" : "value";
      l._valueTracker = hm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function mm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), i = "";
    return l && (i = Jr(l) ? l.checked ? "true" : "false" : l.value), l = i, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Ff(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Xg = /[\n"\\]/g;
  function Ea(l) {
    return l.replace(
      Xg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kf(l, n, u, i, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Ta(n)) : l.value !== "" + Ta(n) && (l.value = "" + Ta(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? ii(l, m, Ta(n)) : u != null ? ii(l, m, Ta(u)) : i != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Ta(v) : l.removeAttribute("name");
  }
  function If(l, n, u, i, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        Kr(l);
        return;
      }
      u = u != null ? "" + Ta(u) : "", n = n != null ? "" + Ta(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, l.checked = v ? l.checked : !!i, l.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), Kr(l);
  }
  function ii(l, n, u) {
    n === "number" && Ff(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function go(l, n, u, i) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && i && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ta(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, i && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function ym(l, n, u) {
    if (n != null && (n = "" + Ta(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Ta(u) : "";
  }
  function pm(l, n, u, i) {
    if (n == null) {
      if (i != null) {
        if (u != null) throw Error(R(92));
        if (fl(i)) {
          if (1 < i.length) throw Error(R(93));
          i = i[0];
        }
        u = i;
      }
      u == null && (u = ""), n = u;
    }
    u = Ta(n), l.defaultValue = u, i = l.textContent, i === u && i !== "" && i !== null && (l.value = i), Kr(l);
  }
  function Kn(l, n) {
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
      throw Error(R(62));
    if (l = l.style, u != null) {
      for (var i in u)
        !u.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? l.setProperty(i, "") : i === "float" ? l.cssFloat = "" : l[i] = "");
      for (var s in n)
        i = n[s], n.hasOwnProperty(s) && u[s] !== i && yp(l, s, i);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && yp(l, r, n[r]);
  }
  function vm(l) {
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
  var Qg = /* @__PURE__ */ new Map([
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
  ]), Pf = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wa(l) {
    return Pf.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function yn() {
  }
  var $r = null;
  function Wr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $n = null, oi = null;
  function ts(l) {
    var n = ni(l);
    if (n && (l = n.stateNode)) {
      var u = l[wl] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (kf(
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
              'input[name="' + Ea(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var i = u[n];
              if (i !== l && i.form === l.form) {
                var s = i[wl] || null;
                if (!s) throw Error(R(90));
                kf(
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
              i = u[n], i.form === l.form && mm(i);
          }
          break t;
        case "textarea":
          ym(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && go(l, !!u.multiple, n, !1);
      }
    }
  }
  var So = !1;
  function gm(l, n, u) {
    if (So) return l(n, u);
    So = !0;
    try {
      var i = l(n);
      return i;
    } finally {
      if (So = !1, ($n !== null || oi !== null) && (ef(), $n && (n = $n, l = oi, oi = $n = null, ts(n), l)))
        for (n = 0; n < l.length; n++) ts(l[n]);
    }
  }
  function sl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var i = u[wl] || null;
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
        R(231, n, typeof u)
      );
    return u;
  }
  var Yu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), es = !1;
  if (Yu)
    try {
      var bo = {};
      Object.defineProperty(bo, "passive", {
        get: function() {
          es = !0;
        }
      }), window.addEventListener("test", bo, bo), window.removeEventListener("test", bo, bo);
    } catch {
      es = !1;
    }
  var ju = null, Sm = null, Fr = null;
  function bm() {
    if (Fr) return Fr;
    var l, n = Sm, u = n.length, i, s = "value" in ju ? ju.value : ju.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (i = 1; i <= m && n[u - i] === s[r - i]; i++) ;
    return Fr = s.slice(l, 1 < i ? 1 - i : void 0);
  }
  function kr(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function ls() {
    return !0;
  }
  function vp() {
    return !1;
  }
  function Ml(l) {
    function n(u, i, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? ls : vp, this.isPropagationStopped = vp, this;
    }
    return ft(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ls);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ls);
      },
      persist: function() {
      },
      isPersistent: ls
    }), n;
  }
  var pc = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, as = Ml(pc), To = ft({}, pc, { view: 0, detail: 0 }), Vg = Ml(To), Tm, Em, ns, Ir = ft({}, To, {
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
      return "movementX" in l ? l.movementX : (l !== ns && (ns && l.type === "mousemove" ? (Tm = l.screenX - ns.screenX, Em = l.screenY - ns.screenY) : Em = Tm = 0, ns = l), Tm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Em;
    }
  }), Eo = Ml(Ir), gp = ft({}, Ir, { dataTransfer: 0 }), Sp = Ml(gp), bp = ft({}, To, { relatedTarget: 0 }), Pr = Ml(bp), Am = ft({}, pc, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Tp = Ml(Am), fi = ft({}, pc, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), si = Ml(fi), pn = ft({}, pc, { data: 0 }), Ep = Ml(pn), zm = {
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
  }, Wn = {
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
  function vn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Ap[l]) ? !!n[l] : !1;
  }
  function Fa() {
    return vn;
  }
  var td = ft({}, To, {
    key: function(l) {
      if (l.key) {
        var n = zm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = kr(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Wn[l.keyCode] || "Unidentified" : "";
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
      return l.type === "keypress" ? kr(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? kr(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ed = Ml(td), Dm = ft({}, Ir, {
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
  }), gn = Ml(Dm), Zg = ft({}, To, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa
  }), zp = Ml(Zg), Dp = ft({}, pc, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Lg = Ml(Dp), Om = ft({}, Ir, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wg = Ml(Om), Op = ft({}, pc, {
    newState: 0,
    oldState: 0
  }), Mm = Ml(Op), ld = [9, 13, 27, 32], Ao = Yu && "CompositionEvent" in window, ri = null;
  Yu && "documentMode" in document && (ri = document.documentMode);
  var ql = Yu && "TextEvent" in window && !ri, Rm = Yu && (!Ao || ri && 8 < ri && 11 >= ri), us = " ", vc = !1;
  function ad(l, n) {
    switch (l) {
      case "keyup":
        return ld.indexOf(n.keyCode) !== -1;
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
  function Um(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var di = !1;
  function Mp(l, n) {
    switch (l) {
      case "compositionend":
        return Um(n);
      case "keypress":
        return n.which !== 32 ? null : (vc = !0, us);
      case "textInput":
        return l = n.data, l === us && vc ? null : l;
      default:
        return null;
    }
  }
  function Jg(l, n) {
    if (di)
      return l === "compositionend" || !Ao && ad(l, n) ? (l = bm(), Fr = Sm = ju = null, di = !1, l) : null;
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
        return Rm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var _m = {
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
    return n === "input" ? !!_m[l.type] : n === "textarea";
  }
  function Cm(l, n, u, i) {
    $n ? oi ? oi.push(i) : oi = [i] : $n = i, n = er(n, "onChange"), 0 < n.length && (u = new as(
      "onChange",
      "change",
      null,
      u,
      i
    ), l.push({ event: u, listeners: n }));
  }
  var hi = null, gc = null;
  function mi(l) {
    Ev(l, 0);
  }
  function zo(l) {
    var n = mo(l);
    if (mm(n)) return l;
  }
  function Hm(l, n) {
    if (l === "change") return n;
  }
  var nd = !1;
  if (Yu) {
    var Jl;
    if (Yu) {
      var Sn = "oninput" in document;
      if (!Sn) {
        var Bm = document.createElement("div");
        Bm.setAttribute("oninput", "return;"), Sn = typeof Bm.oninput == "function";
      }
      Jl = Sn;
    } else Jl = !1;
    nd = Jl && (!document.documentMode || 9 < document.documentMode);
  }
  function ud() {
    hi && (hi.detachEvent("onpropertychange", cd), gc = hi = null);
  }
  function cd(l) {
    if (l.propertyName === "value" && zo(gc)) {
      var n = [];
      Cm(
        n,
        gc,
        l,
        Wr(l)
      ), gm(mi, n);
    }
  }
  function Rp(l, n, u) {
    l === "focusin" ? (ud(), hi = n, gc = u, hi.attachEvent("onpropertychange", cd)) : l === "focusout" && ud();
  }
  function Up(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return zo(gc);
  }
  function Sc(l, n) {
    if (l === "click") return zo(n);
  }
  function yi(l, n) {
    if (l === "input" || l === "change")
      return zo(n);
  }
  function _p(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Yl = typeof Object.is == "function" ? Object.is : _p;
  function ka(l, n) {
    if (Yl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), i = Object.keys(n);
    if (u.length !== i.length) return !1;
    for (i = 0; i < u.length; i++) {
      var s = u[i];
      if (!um.call(n, s) || !Yl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Nm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function xm(l, n) {
    var u = Nm(l);
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
      u = Nm(u);
    }
  }
  function pi(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? pi(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function bc(l) {
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
  function cs(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var is = Yu && "documentMode" in document && 11 >= document.documentMode, Tc = null, Do = null, Ia = null, bn = !1;
  function id(l, n, u) {
    var i = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    bn || Tc == null || Tc !== Ff(i) || (i = Tc, "selectionStart" in i && cs(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Ia && ka(Ia, i) || (Ia = i, i = er(Do, "onSelect"), 0 < i.length && (n = new as(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: i }), n.target = Tc)));
  }
  function Gu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Tn = {
    animationend: Gu("Animation", "AnimationEnd"),
    animationiteration: Gu("Animation", "AnimationIteration"),
    animationstart: Gu("Animation", "AnimationStart"),
    transitionrun: Gu("Transition", "TransitionRun"),
    transitionstart: Gu("Transition", "TransitionStart"),
    transitioncancel: Gu("Transition", "TransitionCancel"),
    transitionend: Gu("Transition", "TransitionEnd")
  }, Oo = {}, Ec = {};
  Yu && (Ec = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
  function Kt(l) {
    if (Oo[l]) return Oo[l];
    if (!Tn[l]) return l;
    var n = Tn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ec)
        return Oo[l] = n[u];
    return l;
  }
  var os = Kt("animationend"), qm = Kt("animationiteration"), od = Kt("animationstart"), vi = Kt("transitionrun"), fs = Kt("transitionstart"), kn = Kt("transitioncancel"), Cp = Kt("transitionend"), In = /* @__PURE__ */ new Map(), Mo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mo.push("scrollEnd");
  function Kl(l, n) {
    In.set(l, n), yc(n, [l]);
  }
  var gi = typeof reportError == "function" ? reportError : function(l) {
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
  }, Te = [], rl = 0, Pa = 0;
  function Aa() {
    for (var l = rl, n = Pa = rl = 0; n < l; ) {
      var u = Te[n];
      Te[n++] = null;
      var i = Te[n];
      Te[n++] = null;
      var s = Te[n];
      Te[n++] = null;
      var r = Te[n];
      if (Te[n++] = null, i !== null && s !== null) {
        var m = i.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), i.pending = s;
      }
      r !== 0 && fd(u, s, r);
    }
  }
  function za(l, n, u, i) {
    Te[rl++] = l, Te[rl++] = n, Te[rl++] = u, Te[rl++] = i, Pa |= i, l.lanes |= i, l = l.alternate, l !== null && (l.lanes |= i);
  }
  function tn(l, n, u, i) {
    return za(l, n, u, i), ss(l);
  }
  function Xu(l, n) {
    return za(l, null, null, n), ss(l);
  }
  function fd(l, n, u) {
    l.lanes |= u;
    var i = l.alternate;
    i !== null && (i.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, i = r.alternate, i !== null && (i.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ll(u), l = r.hiddenUpdates, i = l[s], i === null ? l[s] = [n] : i.push(n), n.lane = u | 536870912), r) : null;
  }
  function ss(l) {
    if (50 < tf)
      throw tf = 0, Js = null, Error(R(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $l = {};
  function Hp(l, n, u, i) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xe(l, n, u, i) {
    return new Hp(l, n, u, i);
  }
  function Si(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Qu(l, n) {
    var u = l.alternate;
    return u === null ? (u = xe(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Ym(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function sd(l, n, u, i, s, r) {
    var m = 0;
    if (i = l, typeof l == "function") Si(l) && (m = 1);
    else if (typeof l == "string")
      m = c0(
        l,
        u,
        nt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case ol:
          return l = xe(31, u, n, s), l.elementType = ol, l.lanes = r, l;
        case Bl:
          return Vu(u.children, s, r, n);
        case ve:
          m = 8, s |= 24;
          break;
        case ee:
          return l = xe(12, u, n, s | 2), l.elementType = ee, l.lanes = r, l;
        case ga:
          return l = xe(13, u, n, s), l.elementType = ga, l.lanes = r, l;
        case Nl:
          return l = xe(19, u, n, s), l.elementType = Nl, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Xe:
                m = 10;
                break t;
              case wa:
                m = 9;
                break t;
              case Dl:
                m = 11;
                break t;
              case We:
                m = 14;
                break t;
              case qt:
                m = 16, i = null;
                break t;
            }
          m = 29, u = Error(
            R(130, l === null ? "null" : typeof l, "")
          ), i = null;
      }
    return n = xe(m, u, n, s), n.elementType = l, n.type = i, n.lanes = r, n;
  }
  function Vu(l, n, u, i) {
    return l = xe(7, l, i, n), l.lanes = u, l;
  }
  function Ro(l, n, u) {
    return l = xe(6, l, null, n), l.lanes = u, l;
  }
  function jm(l) {
    var n = xe(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function rd(l, n, u) {
    return n = xe(
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
  var Gm = /* @__PURE__ */ new WeakMap();
  function Da(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Gm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Nr(n)
      }, Gm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Nr(n)
    };
  }
  var Oa = [], bi = 0, rs = null, Ze = 0, fa = [], Wl = 0, En = null, sa = 1, An = "";
  function en(l, n) {
    Oa[bi++] = Ze, Oa[bi++] = rs, rs = l, Ze = n;
  }
  function Xm(l, n, u) {
    fa[Wl++] = sa, fa[Wl++] = An, fa[Wl++] = En, En = l;
    var i = sa;
    l = An;
    var s = 32 - Ll(i) - 1;
    i &= ~(1 << s), u += 1;
    var r = 32 - Ll(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (i & (1 << m) - 1).toString(32), i >>= m, s -= m, sa = 1 << 32 - Ll(n) + s | u << s | i, An = r + l;
    } else
      sa = 1 << r | u << s | i, An = l;
  }
  function Uo(l) {
    l.return !== null && (en(l, 1), Xm(l, 1, 0));
  }
  function dd(l) {
    for (; l === rs; )
      rs = Oa[--bi], Oa[bi] = null, Ze = Oa[--bi], Oa[bi] = null;
    for (; l === En; )
      En = fa[--Wl], fa[Wl] = null, An = fa[--Wl], fa[Wl] = null, sa = fa[--Wl], fa[Wl] = null;
  }
  function ds(l, n) {
    fa[Wl++] = sa, fa[Wl++] = An, fa[Wl++] = En, sa = n.id, An = n.overflow, En = l;
  }
  var dl = null, de = null, Nt = !1, Pn = null, tl = !1, tu = Error(R(519));
  function ln(l) {
    var n = Error(
      R(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Co(Da(n, l)), tu;
  }
  function hs(l) {
    var n = l.stateNode, u = l.type, i = l.memoizedProps;
    switch (n[ne] = l, n[wl] = i, u) {
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
        for (u = 0; u < cf.length; u++)
          Ht(cf[u], n);
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
        Ht("invalid", n), If(
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
        Ht("invalid", n), pm(n, i.value, i.defaultValue, i.children);
    }
    u = i.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || i.suppressHydrationWarning === !0 || Wy(n.textContent, u) ? (i.popover != null && (Ht("beforetoggle", n), Ht("toggle", n)), i.onScroll != null && Ht("scroll", n), i.onScrollEnd != null && Ht("scrollend", n), i.onClick != null && (n.onclick = yn), n = !0) : n = !1, n || ln(l, !0);
  }
  function _o(l) {
    for (dl = l.return; dl; )
      switch (dl.tag) {
        case 5:
        case 31:
        case 13:
          tl = !1;
          return;
        case 27:
        case 3:
          tl = !0;
          return;
        default:
          dl = dl.return;
      }
  }
  function eu(l) {
    if (l !== dl) return !1;
    if (!Nt) return _o(l), Nt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || ff(l.type, l.memoizedProps)), u = !u), u && de && ln(l), _o(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(R(317));
      de = yh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(R(317));
      de = yh(l);
    } else
      n === 27 ? (n = de, Nn(l.type) ? (l = nr, nr = null, de = l) : de = n) : de = dl ? ua(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ac() {
    de = dl = null, Nt = !1;
  }
  function Qm() {
    var l = Pn;
    return l !== null && (He === null ? He = l : He.push.apply(
      He,
      l
    ), Pn = null), l;
  }
  function Co(l) {
    Pn === null ? Pn = [l] : Pn.push(l);
  }
  var hd = j(null), Zu = null, zn = null;
  function Fl(l, n, u) {
    lt(hd, n._currentValue), n._currentValue = u;
  }
  function Dn(l) {
    l._currentValue = hd.current, k(hd);
  }
  function md(l, n, u) {
    for (; l !== null; ) {
      var i = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function lu(l, n, u, i) {
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
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), md(
                r.return,
                u,
                l
              ), i || (m = null);
              break t;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(R(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), md(m, u, l), m = null;
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
        if (m === null) throw Error(R(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          Yl(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === ge.current) {
        if (m = s.alternate, m === null) throw Error(R(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(ir) : l = [ir]);
      }
      s = s.return;
    }
    l !== null && lu(
      n,
      l,
      u,
      i
    ), n.flags |= 262144;
  }
  function Ti(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Yl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function pt(l) {
    Zu = l, zn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function V(l) {
    return ms(Zu, l);
  }
  function Lu(l, n) {
    return Zu === null && pt(l), ms(l, n);
  }
  function ms(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, zn === null) {
      if (l === null) throw Error(R(308));
      zn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else zn = zn.next = n;
    return u;
  }
  var qe = typeof AbortController < "u" ? AbortController : function() {
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
  }, Vm = Z.unstable_scheduleCallback, Zm = Z.unstable_NormalPriority, Le = {
    $$typeof: Xe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ys() {
    return {
      controller: new qe(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ps(l) {
    l.refCount--, l.refCount === 0 && Vm(Zm, function() {
      l.controller.abort();
    });
  }
  var Ei = null, vs = 0, zc = 0, Fe = null;
  function kt(l, n) {
    if (Ei === null) {
      var u = Ei = [];
      vs = 0, zc = ih(), Fe = {
        status: "pending",
        value: void 0,
        then: function(i) {
          u.push(i);
        }
      };
    }
    return vs++, n.then(gs, gs), n;
  }
  function gs() {
    if (--vs === 0 && Ei !== null) {
      Fe !== null && (Fe.status = "fulfilled");
      var l = Ei;
      Ei = null, zc = 0, Fe = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Ss(l, n) {
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
  var wu = O.S;
  O.S = function(l, n) {
    qy = Ol(), typeof n == "object" && n !== null && typeof n.then == "function" && kt(l, n), wu !== null && wu(l, n);
  };
  var Ma = j(null);
  function Ra() {
    var l = Ma.current;
    return l !== null ? l : ce.pooledCache;
  }
  function Ho(l, n) {
    n === null ? lt(Ma, Ma.current) : lt(Ma, n.pool);
  }
  function Ai() {
    var l = Ra();
    return l === null ? null : { parent: Le._currentValue, pool: l };
  }
  var Dc = Error(R(460)), zi = Error(R(474)), Bo = Error(R(542)), Di = { then: function() {
  } };
  function Lm(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function wm(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(yn, yn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, yd(l), l;
      default:
        if (typeof n.status == "string") n.then(yn, yn);
        else {
          if (l = ce, l !== null && 100 < l.shellSuspendCounter)
            throw Error(R(482));
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
            throw l = n.reason, yd(l), l;
        }
        throw Mc = n, Dc;
    }
  }
  function Oc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Mc = u, Dc) : u;
    }
  }
  var Mc = null;
  function Jm() {
    if (Mc === null) throw Error(R(459));
    var l = Mc;
    return Mc = null, l;
  }
  function yd(l) {
    if (l === Dc || l === Bo)
      throw Error(R(483));
  }
  var Rc = null, Oi = 0;
  function bs(l) {
    var n = Oi;
    return Oi += 1, Rc === null && (Rc = []), wm(Rc, l, n);
  }
  function No(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Ts(l, n) {
    throw n.$$typeof === Gt ? Error(R(525)) : (l = Object.prototype.toString.call(n), Error(
      R(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Bp(l) {
    function n(M, z) {
      if (l) {
        var U = M.deletions;
        U === null ? (M.deletions = [z], M.flags |= 16) : U.push(z);
      }
    }
    function u(M, z) {
      if (!l) return null;
      for (; z !== null; )
        n(M, z), z = z.sibling;
      return null;
    }
    function i(M) {
      for (var z = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
      return z;
    }
    function s(M, z) {
      return M = Qu(M, z), M.index = 0, M.sibling = null, M;
    }
    function r(M, z, U) {
      return M.index = U, l ? (U = M.alternate, U !== null ? (U = U.index, U < z ? (M.flags |= 67108866, z) : U) : (M.flags |= 67108866, z)) : (M.flags |= 1048576, z);
    }
    function m(M) {
      return l && M.alternate === null && (M.flags |= 67108866), M;
    }
    function v(M, z, U, G) {
      return z === null || z.tag !== 6 ? (z = Ro(U, M.mode, G), z.return = M, z) : (z = s(z, U), z.return = M, z);
    }
    function T(M, z, U, G) {
      var ut = U.type;
      return ut === Bl ? q(
        M,
        z,
        U.props.children,
        G,
        U.key
      ) : z !== null && (z.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === qt && Oc(ut) === z.type) ? (z = s(z, U.props), No(z, U), z.return = M, z) : (z = sd(
        U.type,
        U.key,
        U.props,
        null,
        M.mode,
        G
      ), No(z, U), z.return = M, z);
    }
    function _(M, z, U, G) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== U.containerInfo || z.stateNode.implementation !== U.implementation ? (z = rd(U, M.mode, G), z.return = M, z) : (z = s(z, U.children || []), z.return = M, z);
    }
    function q(M, z, U, G, ut) {
      return z === null || z.tag !== 7 ? (z = Vu(
        U,
        M.mode,
        G,
        ut
      ), z.return = M, z) : (z = s(z, U), z.return = M, z);
    }
    function X(M, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Ro(
          "" + z,
          M.mode,
          U
        ), z.return = M, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Re:
            return U = sd(
              z.type,
              z.key,
              z.props,
              null,
              M.mode,
              U
            ), No(U, z), U.return = M, U;
          case Ue:
            return z = rd(
              z,
              M.mode,
              U
            ), z.return = M, z;
          case qt:
            return z = Oc(z), X(M, z, U);
        }
        if (fl(z) || Bt(z))
          return z = Vu(
            z,
            M.mode,
            U,
            null
          ), z.return = M, z;
        if (typeof z.then == "function")
          return X(M, bs(z), U);
        if (z.$$typeof === Xe)
          return X(
            M,
            Lu(M, z),
            U
          );
        Ts(M, z);
      }
      return null;
    }
    function C(M, z, U, G) {
      var ut = z !== null ? z.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return ut !== null ? null : v(M, z, "" + U, G);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Re:
            return U.key === ut ? T(M, z, U, G) : null;
          case Ue:
            return U.key === ut ? _(M, z, U, G) : null;
          case qt:
            return U = Oc(U), C(M, z, U, G);
        }
        if (fl(U) || Bt(U))
          return ut !== null ? null : q(M, z, U, G, null);
        if (typeof U.then == "function")
          return C(
            M,
            z,
            bs(U),
            G
          );
        if (U.$$typeof === Xe)
          return C(
            M,
            z,
            Lu(M, U),
            G
          );
        Ts(M, U);
      }
      return null;
    }
    function x(M, z, U, G, ut) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return M = M.get(U) || null, v(z, M, "" + G, ut);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Re:
            return M = M.get(
              G.key === null ? U : G.key
            ) || null, T(z, M, G, ut);
          case Ue:
            return M = M.get(
              G.key === null ? U : G.key
            ) || null, _(z, M, G, ut);
          case qt:
            return G = Oc(G), x(
              M,
              z,
              U,
              G,
              ut
            );
        }
        if (fl(G) || Bt(G))
          return M = M.get(U) || null, q(z, M, G, ut, null);
        if (typeof G.then == "function")
          return x(
            M,
            z,
            U,
            bs(G),
            ut
          );
        if (G.$$typeof === Xe)
          return x(
            M,
            z,
            U,
            Lu(z, G),
            ut
          );
        Ts(z, G);
      }
      return null;
    }
    function P(M, z, U, G) {
      for (var ut = null, Zt = null, tt = z, St = z = 0, At = null; tt !== null && St < U.length; St++) {
        tt.index > St ? (At = tt, tt = null) : At = tt.sibling;
        var Jt = C(
          M,
          tt,
          U[St],
          G
        );
        if (Jt === null) {
          tt === null && (tt = At);
          break;
        }
        l && tt && Jt.alternate === null && n(M, tt), z = r(Jt, z, St), Zt === null ? ut = Jt : Zt.sibling = Jt, Zt = Jt, tt = At;
      }
      if (St === U.length)
        return u(M, tt), Nt && en(M, St), ut;
      if (tt === null) {
        for (; St < U.length; St++)
          tt = X(M, U[St], G), tt !== null && (z = r(
            tt,
            z,
            St
          ), Zt === null ? ut = tt : Zt.sibling = tt, Zt = tt);
        return Nt && en(M, St), ut;
      }
      for (tt = i(tt); St < U.length; St++)
        At = x(
          tt,
          M,
          St,
          U[St],
          G
        ), At !== null && (l && At.alternate !== null && tt.delete(
          At.key === null ? St : At.key
        ), z = r(
          At,
          z,
          St
        ), Zt === null ? ut = At : Zt.sibling = At, Zt = At);
      return l && tt.forEach(function(Yn) {
        return n(M, Yn);
      }), Nt && en(M, St), ut;
    }
    function st(M, z, U, G) {
      if (U == null) throw Error(R(151));
      for (var ut = null, Zt = null, tt = z, St = z = 0, At = null, Jt = U.next(); tt !== null && !Jt.done; St++, Jt = U.next()) {
        tt.index > St ? (At = tt, tt = null) : At = tt.sibling;
        var Yn = C(M, tt, Jt.value, G);
        if (Yn === null) {
          tt === null && (tt = At);
          break;
        }
        l && tt && Yn.alternate === null && n(M, tt), z = r(Yn, z, St), Zt === null ? ut = Yn : Zt.sibling = Yn, Zt = Yn, tt = At;
      }
      if (Jt.done)
        return u(M, tt), Nt && en(M, St), ut;
      if (tt === null) {
        for (; !Jt.done; St++, Jt = U.next())
          Jt = X(M, Jt.value, G), Jt !== null && (z = r(Jt, z, St), Zt === null ? ut = Jt : Zt.sibling = Jt, Zt = Jt);
        return Nt && en(M, St), ut;
      }
      for (tt = i(tt); !Jt.done; St++, Jt = U.next())
        Jt = x(tt, M, St, Jt.value, G), Jt !== null && (l && Jt.alternate !== null && tt.delete(Jt.key === null ? St : Jt.key), z = r(Jt, z, St), Zt === null ? ut = Jt : Zt.sibling = Jt, Zt = Jt);
      return l && tt.forEach(function(Yv) {
        return n(M, Yv);
      }), Nt && en(M, St), ut;
    }
    function oe(M, z, U, G) {
      if (typeof U == "object" && U !== null && U.type === Bl && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Re:
            t: {
              for (var ut = U.key; z !== null; ) {
                if (z.key === ut) {
                  if (ut = U.type, ut === Bl) {
                    if (z.tag === 7) {
                      u(
                        M,
                        z.sibling
                      ), G = s(
                        z,
                        U.props.children
                      ), G.return = M, M = G;
                      break t;
                    }
                  } else if (z.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === qt && Oc(ut) === z.type) {
                    u(
                      M,
                      z.sibling
                    ), G = s(z, U.props), No(G, U), G.return = M, M = G;
                    break t;
                  }
                  u(M, z);
                  break;
                } else n(M, z);
                z = z.sibling;
              }
              U.type === Bl ? (G = Vu(
                U.props.children,
                M.mode,
                G,
                U.key
              ), G.return = M, M = G) : (G = sd(
                U.type,
                U.key,
                U.props,
                null,
                M.mode,
                G
              ), No(G, U), G.return = M, M = G);
            }
            return m(M);
          case Ue:
            t: {
              for (ut = U.key; z !== null; ) {
                if (z.key === ut)
                  if (z.tag === 4 && z.stateNode.containerInfo === U.containerInfo && z.stateNode.implementation === U.implementation) {
                    u(
                      M,
                      z.sibling
                    ), G = s(z, U.children || []), G.return = M, M = G;
                    break t;
                  } else {
                    u(M, z);
                    break;
                  }
                else n(M, z);
                z = z.sibling;
              }
              G = rd(U, M.mode, G), G.return = M, M = G;
            }
            return m(M);
          case qt:
            return U = Oc(U), oe(
              M,
              z,
              U,
              G
            );
        }
        if (fl(U))
          return P(
            M,
            z,
            U,
            G
          );
        if (Bt(U)) {
          if (ut = Bt(U), typeof ut != "function") throw Error(R(150));
          return U = ut.call(U), st(
            M,
            z,
            U,
            G
          );
        }
        if (typeof U.then == "function")
          return oe(
            M,
            z,
            bs(U),
            G
          );
        if (U.$$typeof === Xe)
          return oe(
            M,
            z,
            Lu(M, U),
            G
          );
        Ts(M, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, z !== null && z.tag === 6 ? (u(M, z.sibling), G = s(z, U), G.return = M, M = G) : (u(M, z), G = Ro(U, M.mode, G), G.return = M, M = G), m(M)) : u(M, z);
    }
    return function(M, z, U, G) {
      try {
        Oi = 0;
        var ut = oe(
          M,
          z,
          U,
          G
        );
        return Rc = null, ut;
      } catch (tt) {
        if (tt === Dc || tt === Bo) throw tt;
        var Zt = xe(29, tt, null, M.mode);
        return Zt.lanes = G, Zt.return = M, Zt;
      }
    };
  }
  var Uc = Bp(!0), Km = Bp(!1), Ju = !1;
  function Es(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function pd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ku(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(l, n, u) {
    var i = l.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (wt & 2) !== 0) {
      var s = i.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), i.pending = n, n = ss(l), fd(l, null, u), n;
    }
    return za(l, i, n, u), ss(l);
  }
  function _c(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, Ln(l, u);
    }
  }
  function vd(l, n) {
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
  var $m = !1;
  function Cc() {
    if ($m) {
      var l = Fe;
      if (l !== null) throw l;
    }
  }
  function au(l, n, u, i) {
    $m = !1;
    var s = l.updateQueue;
    Ju = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var T = v, _ = T.next;
      T.next = null, m === null ? r = _ : m.next = _, m = T;
      var q = l.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== m && (v === null ? q.firstBaseUpdate = _ : v.next = _, q.lastBaseUpdate = T));
    }
    if (r !== null) {
      var X = s.baseState;
      m = 0, q = _ = T = null, v = r;
      do {
        var C = v.lane & -536870913, x = C !== v.lane;
        if (x ? (_t & C) === C : (i & C) === C) {
          C !== 0 && C === zc && ($m = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var P = l, st = v;
            C = n;
            var oe = u;
            switch (st.tag) {
              case 1:
                if (P = st.payload, typeof P == "function") {
                  X = P.call(oe, X, C);
                  break t;
                }
                X = P;
                break t;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = st.payload, C = typeof P == "function" ? P.call(oe, X, C) : P, C == null) break t;
                X = ft({}, X, C);
                break t;
              case 2:
                Ju = !0;
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
          }, q === null ? (_ = q = x, T = X) : q = q.next = x, m |= C;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          x = v, v = x.next, x.next = null, s.lastBaseUpdate = x, s.shared.pending = null;
        }
      } while (!0);
      q === null && (T = X), s.baseState = T, s.firstBaseUpdate = _, s.lastBaseUpdate = q, r === null && (s.shared.lanes = 0), Hn |= m, l.lanes = m, l.memoizedState = X;
    }
  }
  function gd(l, n) {
    if (typeof l != "function")
      throw Error(R(191, l));
    l.call(n);
  }
  function Hc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        gd(u[l], n);
  }
  var el = j(null), Mi = j(0);
  function Np(l, n) {
    l = Cn, lt(Mi, l), lt(el, n), Cn = l | n.baseLanes;
  }
  function As() {
    lt(Mi, Cn), lt(el, el.current);
  }
  function xo() {
    Cn = Mi.current, k(el), k(Mi);
  }
  var kl = j(null), _a = null;
  function nu(l) {
    var n = l.alternate;
    lt(Ee, Ee.current & 1), lt(kl, l), _a === null && (n === null || el.current !== null || n.memoizedState !== null) && (_a = l);
  }
  function qo(l) {
    lt(Ee, Ee.current), lt(kl, l), _a === null && (_a = l);
  }
  function Sd(l) {
    l.tag === 22 ? (lt(Ee, Ee.current), lt(kl, l), _a === null && (_a = l)) : On();
  }
  function On() {
    lt(Ee, Ee.current), lt(kl, kl.current);
  }
  function Il(l) {
    k(kl), _a === l && (_a = null), k(Ee);
  }
  var Ee = j(0);
  function Yo(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || cn(u) || Lc(u)))
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
  var uu = 0, bt = null, It = null, we = null, Ri = !1, Ui = !1, $u = !1, zs = 0, jo = 0, Bc = null, xp = 0;
  function _e() {
    throw Error(R(321));
  }
  function Wu(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Yl(l[u], n[u])) return !1;
    return !0;
  }
  function Ds(l, n, u, i, s, r) {
    return uu = r, bt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Zp : qd, $u = !1, r = u(i, s), $u = !1, Ui && (r = qp(
      n,
      u,
      i,
      s
    )), bd(l), r;
  }
  function bd(l) {
    O.H = Ns;
    var n = It !== null && It.next !== null;
    if (uu = 0, we = It = bt = null, Ri = !1, jo = 0, Bc = null, n) throw Error(R(300));
    l === null || Je || (l = l.dependencies, l !== null && Ti(l) && (Je = !0));
  }
  function qp(l, n, u, i) {
    bt = l;
    var s = 0;
    do {
      if (Ui && (Bc = null), jo = 0, Ui = !1, 25 <= s) throw Error(R(301));
      if (s += 1, we = It = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = Lp, r = n(u, i);
    } while (Ui);
    return r;
  }
  function Kg() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ci(n) : n, l = l.useState()[0], (It !== null ? It.memoizedState : null) !== l && (bt.flags |= 1024), n;
  }
  function Td() {
    var l = zs !== 0;
    return zs = 0, l;
  }
  function _i(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Os(l) {
    if (Ri) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Ri = !1;
    }
    uu = 0, we = It = bt = null, Ui = !1, jo = zs = 0, Bc = null;
  }
  function ml() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return we === null ? bt.memoizedState = we = l : we = we.next = l, we;
  }
  function Ye() {
    if (It === null) {
      var l = bt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = It.next;
    var n = we === null ? bt.memoizedState : we.next;
    if (n !== null)
      we = n, It = l;
    else {
      if (l === null)
        throw bt.alternate === null ? Error(R(467)) : Error(R(310));
      It = l, l = {
        memoizedState: It.memoizedState,
        baseState: It.baseState,
        baseQueue: It.baseQueue,
        queue: It.queue,
        next: null
      }, we === null ? bt.memoizedState = we = l : we = we.next = l;
    }
    return we;
  }
  function Ms() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ci(l) {
    var n = jo;
    return jo += 1, Bc === null && (Bc = []), l = wm(Bc, l, n), n = bt, (we === null ? n.memoizedState : we.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Zp : qd), l;
  }
  function Go(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ci(l);
      if (l.$$typeof === Xe) return V(l);
    }
    throw Error(R(438, String(l)));
  }
  function Ed(l) {
    var n = null, u = bt.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var i = bt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (n = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Ms(), bt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), i = 0; i < l; i++)
        u[i] = at;
    return n.index++, u;
  }
  function cu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function iu(l) {
    var n = Ye();
    return Ad(n, It, l);
  }
  function Ad(l, n, u) {
    var i = l.queue;
    if (i === null) throw Error(R(311));
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
        var X = _.lane & -536870913;
        if (X !== _.lane ? (_t & X) === X : (uu & X) === X) {
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
            }), X === zc && (q = !0);
          else if ((uu & C) === C) {
            _ = _.next, C === zc && (q = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, T === null ? (v = T = X, m = r) : T = T.next = X, bt.lanes |= C, Hn |= C;
          X = _.action, $u && u(r, X), r = _.hasEagerState ? _.eagerState : u(r, X);
        } else
          C = {
            lane: X,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, T === null ? (v = T = C, m = r) : T = T.next = C, bt.lanes |= X, Hn |= X;
        _ = _.next;
      } while (_ !== null && _ !== n);
      if (T === null ? m = r : T.next = v, !Yl(r, l.memoizedState) && (Je = !0, q && (u = Fe, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, i.lastRenderedState = r;
    }
    return s === null && (i.lanes = 0), [l.memoizedState, i.dispatch];
  }
  function zd(l) {
    var n = Ye(), u = n.queue;
    if (u === null) throw Error(R(311));
    u.lastRenderedReducer = l;
    var i = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Yl(r, n.memoizedState) || (Je = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, i];
  }
  function Wm(l, n, u) {
    var i = bt, s = Ye(), r = Nt;
    if (r) {
      if (u === void 0) throw Error(R(407));
      u = u();
    } else u = n();
    var m = !Yl(
      (It || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, Je = !0), s = s.queue, Ud(Dd.bind(null, i, s, l), [
      l
    ]), s.getSnapshot !== n || m || we !== null && we.memoizedState.tag & 1) {
      if (i.flags |= 2048, Bi(
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
      ), ce === null) throw Error(R(349));
      r || (uu & 127) !== 0 || Rs(i, n, u);
    }
    return u;
  }
  function Rs(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = bt.updateQueue, n === null ? (n = Ms(), bt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Fm(l, n, u, i) {
    n.value = u, n.getSnapshot = i, Od(n) && Md(l);
  }
  function Dd(l, n, u) {
    return u(function() {
      Od(n) && Md(l);
    });
  }
  function Od(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Yl(l, u);
    } catch {
      return !0;
    }
  }
  function Md(l) {
    var n = Xu(l, 2);
    n !== null && na(n, l, 2);
  }
  function km(l) {
    var n = ml();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), $u) {
        Nu(!0);
        try {
          u();
        } finally {
          Nu(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cu,
      lastRenderedState: l
    }, n;
  }
  function yl(l, n, u, i) {
    return l.baseState = u, Ad(
      l,
      It,
      typeof i == "function" ? i : cu
    );
  }
  function Yp(l, n, u, i, s) {
    if (Bs(l)) throw Error(R(485));
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
      O.T !== null ? u(!0) : r.isTransition = !1, i(r), u = n.pending, u === null ? (r.next = n.pending = r, Im(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Im(l, n) {
    var u = n.action, i = n.payload, s = l.state;
    if (n.isTransition) {
      var r = O.T, m = {};
      O.T = m;
      try {
        var v = u(s, i), T = O.S;
        T !== null && T(m, v), Pm(l, n, v);
      } catch (_) {
        Hi(l, n, _);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), O.T = r;
      }
    } else
      try {
        r = u(s, i), Pm(l, n, r);
      } catch (_) {
        Hi(l, n, _);
      }
  }
  function Pm(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(i) {
        ty(l, n, i);
      },
      function(i) {
        return Hi(l, n, i);
      }
    ) : ty(l, n, u);
  }
  function ty(l, n, u) {
    n.status = "fulfilled", n.value = u, ey(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Im(l, u)));
  }
  function Hi(l, n, u) {
    var i = l.pending;
    if (l.pending = null, i !== null) {
      i = i.next;
      do
        n.status = "rejected", n.reason = u, ey(n), n = n.next;
      while (n !== i);
    }
    l.action = null;
  }
  function ey(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Us(l, n) {
    return n;
  }
  function ly(l, n) {
    if (Nt) {
      var u = ce.formState;
      if (u !== null) {
        t: {
          var i = bt;
          if (Nt) {
            if (de) {
              e: {
                for (var s = de, r = tl; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (s = ua(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                de = ua(
                  s.nextSibling
                ), i = s.data === "F!";
                break t;
              }
            }
            ln(i);
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
      lastRenderedReducer: Us,
      lastRenderedState: n
    }, u.queue = i, u = Nd.bind(
      null,
      bt,
      i
    ), i.dispatch = u, i = km(!1), r = Nc.bind(
      null,
      bt,
      !1,
      i.queue
    ), i = ml(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, i.queue = s, u = Yp.bind(
      null,
      bt,
      s,
      r,
      u
    ), s.dispatch = u, i.memoizedState = l, [n, u, !1];
  }
  function jp(l) {
    var n = Ye();
    return _s(n, It, l);
  }
  function _s(l, n, u) {
    if (n = Ad(
      l,
      n,
      Us
    )[0], l = iu(cu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var i = Ci(n);
      } catch (m) {
        throw m === Dc ? Bo : m;
      }
    else i = n;
    n = Ye();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (bt.flags |= 2048, Bi(
      9,
      { destroy: void 0 },
      ay.bind(null, s, u),
      null
    )), [i, r, l];
  }
  function ay(l, n) {
    l.action = n;
  }
  function ny(l) {
    var n = Ye(), u = It;
    if (u !== null)
      return _s(n, u, l);
    Ye(), n = n.memoizedState, u = Ye();
    var i = u.queue.dispatch;
    return u.memoizedState = l, [n, i, !1];
  }
  function Bi(l, n, u, i) {
    return l = { tag: l, create: u, deps: i, inst: n, next: null }, n = bt.updateQueue, n === null && (n = Ms(), bt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (i = u.next, u.next = l, l.next = i, n.lastEffect = l), l;
  }
  function uy() {
    return Ye().memoizedState;
  }
  function Xo(l, n, u, i) {
    var s = ml();
    bt.flags |= l, s.memoizedState = Bi(
      1 | n,
      { destroy: void 0 },
      u,
      i === void 0 ? null : i
    );
  }
  function Qo(l, n, u, i) {
    var s = Ye();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    It !== null && i !== null && Wu(i, It.memoizedState.deps) ? s.memoizedState = Bi(n, r, u, i) : (bt.flags |= l, s.memoizedState = Bi(
      1 | n,
      r,
      u,
      i
    ));
  }
  function Rd(l, n) {
    Xo(8390656, 8, l, n);
  }
  function Ud(l, n) {
    Qo(2048, 8, l, n);
  }
  function cy(l) {
    bt.flags |= 4;
    var n = bt.updateQueue;
    if (n === null)
      n = Ms(), bt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Cs(l) {
    var n = Ye().memoizedState;
    return cy({ ref: n, nextImpl: l }), function() {
      if ((wt & 2) !== 0) throw Error(R(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function _d(l, n) {
    return Qo(4, 2, l, n);
  }
  function iy(l, n) {
    return Qo(4, 4, l, n);
  }
  function Cd(l, n) {
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
  function oy(l, n, u) {
    u = u != null ? u.concat([l]) : null, Qo(4, 4, Cd.bind(null, n, l), u);
  }
  function Mn() {
  }
  function Hd(l, n) {
    var u = Ye();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    return n !== null && Wu(n, i[1]) ? i[0] : (u.memoizedState = [l, n], l);
  }
  function Gp(l, n) {
    var u = Ye();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    if (n !== null && Wu(n, i[1]))
      return i[0];
    if (i = l(), $u) {
      Nu(!0);
      try {
        l();
      } finally {
        Nu(!1);
      }
    }
    return u.memoizedState = [i, n], i;
  }
  function Hs(l, n, u) {
    return u === void 0 || (uu & 1073741824) !== 0 && (_t & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = tv(), bt.lanes |= l, Hn |= l, u);
  }
  function ou(l, n, u, i) {
    return Yl(u, n) ? u : el.current !== null ? (l = Hs(l, u, i), Yl(l, n) || (Je = !0), l) : (uu & 42) === 0 || (uu & 1073741824) !== 0 && (_t & 261930) === 0 ? (Je = !0, l.memoizedState = u) : (l = tv(), bt.lanes |= l, Hn |= l, n);
  }
  function Bd(l, n, u, i, s) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var m = O.T, v = {};
    O.T = v, Nc(l, !1, n, u);
    try {
      var T = s(), _ = O.S;
      if (_ !== null && _(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var q = Ss(
          T,
          i
        );
        Fu(
          l,
          n,
          q,
          ma(l)
        );
      } else
        Fu(
          l,
          n,
          i,
          ma(l)
        );
    } catch (X) {
      Fu(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        ma()
      );
    } finally {
      Q.p = r, m !== null && v.types !== null && (m.types = v.types), O.T = m;
    }
  }
  function Xp() {
  }
  function Vo(l, n, u, i) {
    if (l.tag !== 5) throw Error(R(476));
    var s = Zo(l).queue;
    Bd(
      l,
      s,
      n,
      w,
      u === null ? Xp : function() {
        return ue(l), u(i);
      }
    );
  }
  function Zo(l) {
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
        lastRenderedReducer: cu,
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
        lastRenderedReducer: cu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function ue(l) {
    var n = Zo(l);
    n.next === null && (n = l.alternate.memoizedState), Fu(
      l,
      n.next.queue,
      {},
      ma()
    );
  }
  function fy() {
    return V(ir);
  }
  function Qp() {
    return Ye().memoizedState;
  }
  function sy() {
    return Ye().memoizedState;
  }
  function fu(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = ma();
          l = Ku(u);
          var i = Ua(n, l, u);
          i !== null && (na(i, n, u), _c(i, n, u)), n = { cache: ys() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Vp(l, n, u) {
    var i = ma();
    u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bs(l) ? xd(n, u) : (u = tn(l, n, u, i), u !== null && (na(u, l, i), ry(u, n, i)));
  }
  function Nd(l, n, u) {
    var i = ma();
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
    if (Bs(l)) xd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, Yl(v, m))
            return za(l, n, s, 0), ce === null && Aa(), !1;
        } catch {
        }
      if (u = tn(l, n, s, i), u !== null)
        return na(u, l, i), ry(u, n, i), !0;
    }
    return !1;
  }
  function Nc(l, n, u, i) {
    if (i = {
      lane: 2,
      revertLane: ih(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bs(l)) {
      if (n) throw Error(R(479));
    } else
      n = tn(
        l,
        u,
        i,
        2
      ), n !== null && na(n, l, 2);
  }
  function Bs(l) {
    var n = l.alternate;
    return l === bt || n !== null && n === bt;
  }
  function xd(l, n) {
    Ui = Ri = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ry(l, n, u) {
    if ((u & 4194048) !== 0) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, Ln(l, u);
    }
  }
  var Ns = {
    readContext: V,
    use: Go,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useLayoutEffect: _e,
    useInsertionEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useSyncExternalStore: _e,
    useId: _e,
    useHostTransitionStatus: _e,
    useFormState: _e,
    useActionState: _e,
    useOptimistic: _e,
    useMemoCache: _e,
    useCacheRefresh: _e
  };
  Ns.useEffectEvent = _e;
  var Zp = {
    readContext: V,
    use: Go,
    useCallback: function(l, n) {
      return ml().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: V,
    useEffect: Rd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Xo(
        4194308,
        4,
        Cd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Xo(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Xo(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ml();
      n = n === void 0 ? null : n;
      var i = l();
      if ($u) {
        Nu(!0);
        try {
          l();
        } finally {
          Nu(!1);
        }
      }
      return u.memoizedState = [i, n], i;
    },
    useReducer: function(l, n, u) {
      var i = ml();
      if (u !== void 0) {
        var s = u(n);
        if ($u) {
          Nu(!0);
          try {
            u(n);
          } finally {
            Nu(!1);
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
        bt,
        l
      ), [i.memoizedState, l];
    },
    useRef: function(l) {
      var n = ml();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = km(l);
      var n = l.queue, u = Nd.bind(null, bt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Mn,
    useDeferredValue: function(l, n) {
      var u = ml();
      return Hs(u, l, n);
    },
    useTransition: function() {
      var l = km(!1);
      return l = Bd.bind(
        null,
        bt,
        l.queue,
        !0,
        !1
      ), ml().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var i = bt, s = ml();
      if (Nt) {
        if (u === void 0)
          throw Error(R(407));
        u = u();
      } else {
        if (u = n(), ce === null)
          throw Error(R(349));
        (_t & 127) !== 0 || Rs(i, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Rd(Dd.bind(null, i, r, l), [
        l
      ]), i.flags |= 2048, Bi(
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
      var l = ml(), n = ce.identifierPrefix;
      if (Nt) {
        var u = An, i = sa;
        u = (i & ~(1 << 32 - Ll(i) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = zs++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = xp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: fy,
    useFormState: ly,
    useActionState: ly,
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
      return n.queue = u, n = Nc.bind(
        null,
        bt,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Ed,
    useCacheRefresh: function() {
      return ml().memoizedState = fu.bind(
        null,
        bt
      );
    },
    useEffectEvent: function(l) {
      var n = ml(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((wt & 2) !== 0)
          throw Error(R(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, qd = {
    readContext: V,
    use: Go,
    useCallback: Hd,
    useContext: V,
    useEffect: Ud,
    useImperativeHandle: oy,
    useInsertionEffect: _d,
    useLayoutEffect: iy,
    useMemo: Gp,
    useReducer: iu,
    useRef: uy,
    useState: function() {
      return iu(cu);
    },
    useDebugValue: Mn,
    useDeferredValue: function(l, n) {
      var u = Ye();
      return ou(
        u,
        It.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = iu(cu)[0], n = Ye().memoizedState;
      return [
        typeof l == "boolean" ? l : Ci(l),
        n
      ];
    },
    useSyncExternalStore: Wm,
    useId: Qp,
    useHostTransitionStatus: fy,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(l, n) {
      var u = Ye();
      return yl(u, It, l, n);
    },
    useMemoCache: Ed,
    useCacheRefresh: sy
  };
  qd.useEffectEvent = Cs;
  var Lp = {
    readContext: V,
    use: Go,
    useCallback: Hd,
    useContext: V,
    useEffect: Ud,
    useImperativeHandle: oy,
    useInsertionEffect: _d,
    useLayoutEffect: iy,
    useMemo: Gp,
    useReducer: zd,
    useRef: uy,
    useState: function() {
      return zd(cu);
    },
    useDebugValue: Mn,
    useDeferredValue: function(l, n) {
      var u = Ye();
      return It === null ? Hs(u, l, n) : ou(
        u,
        It.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = zd(cu)[0], n = Ye().memoizedState;
      return [
        typeof l == "boolean" ? l : Ci(l),
        n
      ];
    },
    useSyncExternalStore: Wm,
    useId: Qp,
    useHostTransitionStatus: fy,
    useFormState: ny,
    useActionState: ny,
    useOptimistic: function(l, n) {
      var u = Ye();
      return It !== null ? yl(u, It, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ed,
    useCacheRefresh: sy
  };
  Lp.useEffectEvent = Cs;
  function Ni(l, n, u, i) {
    n = l.memoizedState, u = u(i, n), u = u == null ? n : ft({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var an = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var i = ma(), s = Ku(i);
      s.payload = n, u != null && (s.callback = u), n = Ua(l, s, i), n !== null && (na(n, l, i), _c(n, l, i));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var i = ma(), s = Ku(i);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Ua(l, s, i), n !== null && (na(n, l, i), _c(n, l, i));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = ma(), i = Ku(u);
      i.tag = 2, n != null && (i.callback = n), n = Ua(l, i, u), n !== null && (na(n, l, u), _c(n, l, u));
    }
  };
  function dy(l, n, u, i, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(i, r, m) : n.prototype && n.prototype.isPureReactComponent ? !ka(u, i) || !ka(s, r) : !0;
  }
  function wp(l, n, u, i) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, i), n.state !== l && an.enqueueReplaceState(n, n.state, null);
  }
  function xc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var i in n)
        i !== "ref" && (u[i] = n[i]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ft({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Yd(l) {
    gi(l);
  }
  function hy(l) {
    console.error(l);
  }
  function jd(l) {
    gi(l);
  }
  function Lo(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function xs(l, n, u) {
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
  function my(l, n, u) {
    return u = Ku(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Lo(l, n);
    }, u;
  }
  function yy(l) {
    return l = Ku(l), l.tag = 3, l;
  }
  function py(l, n, u, i) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        xs(n, u, i);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      xs(n, u, i), typeof s != "function" && (Ae === null ? Ae = /* @__PURE__ */ new Set([this]) : Ae.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function $g(l, n, u, i, s) {
    if (u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (n = u.alternate, n !== null && hl(
        n,
        u,
        s,
        !0
      ), u = kl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return _a === null ? ah() : u.alternate === null && me === 0 && (me = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, i === Di ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([i]) : n.add(i), Ws(l, i, s)), !1;
          case 22:
            return u.flags |= 65536, i === Di ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([i]) : u.add(i)), Ws(l, i, s)), !1;
        }
        throw Error(R(435, u.tag));
      }
      return Ws(l, i, s), ah(), !1;
    }
    if (Nt)
      return n = kl.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, i !== tu && (l = Error(R(422), { cause: i }), Co(Da(l, u)))) : (i !== tu && (n = Error(R(423), {
        cause: i
      }), Co(
        Da(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, i = Da(i, u), s = my(
        l.stateNode,
        i,
        s
      ), vd(l, s), me !== 4 && (me = 2)), !1;
    var r = Error(R(520), { cause: i });
    if (r = Da(r, u), ws === null ? ws = [r] : ws.push(r), me !== 4 && (me = 2), n === null) return !0;
    i = Da(i, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = my(u.stateNode, i, l), vd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Ae === null || !Ae.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = yy(s), py(
              s,
              l,
              u,
              i
            ), vd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Gd = Error(R(461)), Je = !1;
  function Se(l, n, u, i) {
    n.child = l === null ? Km(n, null, u, i) : Uc(
      n,
      l.child,
      u,
      i
    );
  }
  function vy(l, n, u, i, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in i) {
      var m = {};
      for (var v in i)
        v !== "ref" && (m[v] = i[v]);
    } else m = i;
    return pt(n), i = Ds(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = Td(), l !== null && !Je ? (_i(l, n, s), Ba(l, n, s)) : (Nt && v && Uo(n), n.flags |= 1, Se(l, n, i, s), n.child);
  }
  function gy(l, n, u, i, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Si(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Sy(
        l,
        n,
        r,
        i,
        s
      )) : (l = sd(
        u.type,
        null,
        i,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Vd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ka, u(m, i) && l.ref === n.ref)
        return Ba(l, n, s);
    }
    return n.flags |= 1, l = Qu(r, i), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Sy(l, n, u, i, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (ka(r, i) && l.ref === n.ref)
        if (Je = !1, n.pendingProps = i = r, Vd(l, s))
          (l.flags & 131072) !== 0 && (Je = !0);
        else
          return n.lanes = l.lanes, Ba(l, n, s);
    }
    return Xd(
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
        return Pl(
          l,
          n,
          r,
          u,
          i
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ho(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Np(n, r) : As(), Sd(n);
      else
        return i = n.lanes = 536870912, Pl(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          i
        );
    } else
      r !== null ? (Ho(n, r.cachePool), Np(n, r), On(), n.memoizedState = null) : (l !== null && Ho(n, null), As(), On());
    return Se(l, n, s, u), n.child;
  }
  function qc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Pl(l, n, u, i, s) {
    var r = Ra();
    return r = r === null ? null : { parent: Le._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Ho(n, null), As(), Sd(n), l !== null && hl(l, n, i, !0), n.childLanes = s, null;
  }
  function qs(l, n) {
    return n = Gs(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function ta(l, n, u) {
    return Uc(n, l.child, null, u), l = qs(n, n.pendingProps), l.flags |= 2, Il(n), n.memoizedState = null, l;
  }
  function Kp(l, n, u) {
    var i = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (Nt) {
        if (i.mode === "hidden")
          return l = qs(n, i), n.lanes = 536870912, qc(null, l);
        if (qo(n), (l = de) ? (l = Rv(
          l,
          tl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: En !== null ? { id: sa, overflow: An } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = jm(l), u.return = n, n.child = u, dl = n, de = null)) : l = null, l === null) throw ln(n);
        return n.lanes = 536870912, null;
      }
      return qs(n, i);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (qo(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = ta(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(R(558));
      else if (Je || hl(l, n, u, !1), s = (u & l.childLanes) !== 0, Je || s) {
        if (i = ce, i !== null && (m = ba(i, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, Xu(l, m), na(i, l, m), Gd;
        ah(), n = ta(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, de = ua(m.nextSibling), dl = n, Nt = !0, Pn = null, tl = !1, l !== null && ds(n, l), n = qs(n, i), n.flags |= 4096;
      return n;
    }
    return l = Qu(l.child, {
      mode: i.mode,
      children: i.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ca(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(R(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Xd(l, n, u, i, s) {
    return pt(n), u = Ds(
      l,
      n,
      u,
      i,
      void 0,
      s
    ), i = Td(), l !== null && !Je ? (_i(l, n, s), Ba(l, n, s)) : (Nt && i && Uo(n), n.flags |= 1, Se(l, n, u, s), n.child);
  }
  function Yc(l, n, u, i, s, r) {
    return pt(n), n.updateQueue = null, u = qp(
      n,
      i,
      u,
      s
    ), bd(l), i = Td(), l !== null && !Je ? (_i(l, n, r), Ba(l, n, r)) : (Nt && i && Uo(n), n.flags |= 1, Se(l, n, u, r), n.child);
  }
  function by(l, n, u, i, s) {
    if (pt(n), n.stateNode === null) {
      var r = $l, m = u.contextType;
      typeof m == "object" && m !== null && (r = V(m)), r = new u(i, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = an, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = i, r.state = n.memoizedState, r.refs = {}, Es(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? V(m) : $l, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Ni(
        n,
        u,
        m,
        i
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && an.enqueueReplaceState(r, r.state, null), au(n, i, r, s), Cc(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, T = xc(u, v);
      r.props = T;
      var _ = r.context, q = u.contextType;
      m = $l, typeof q == "object" && q !== null && (m = V(q));
      var X = u.getDerivedStateFromProps;
      q = typeof X == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || _ !== m) && wp(
        n,
        r,
        i,
        m
      ), Ju = !1;
      var C = n.memoizedState;
      r.state = C, au(n, i, r, s), Cc(), _ = n.memoizedState, v || C !== _ || Ju ? (typeof X == "function" && (Ni(
        n,
        u,
        X,
        i
      ), _ = n.memoizedState), (T = Ju || dy(
        n,
        u,
        T,
        i,
        C,
        _,
        m
      )) ? (q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = _), r.props = i, r.state = _, r.context = m, i = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      r = n.stateNode, pd(l, n), m = n.memoizedProps, q = xc(u, m), r.props = q, X = n.pendingProps, C = r.context, _ = u.contextType, T = $l, typeof _ == "object" && _ !== null && (T = V(_)), v = u.getDerivedStateFromProps, (_ = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== X || C !== T) && wp(
        n,
        r,
        i,
        T
      ), Ju = !1, C = n.memoizedState, r.state = C, au(n, i, r, s), Cc();
      var x = n.memoizedState;
      m !== X || C !== x || Ju || l !== null && l.dependencies !== null && Ti(l.dependencies) ? (typeof v == "function" && (Ni(
        n,
        u,
        v,
        i
      ), x = n.memoizedState), (q = Ju || dy(
        n,
        u,
        q,
        i,
        C,
        x,
        T
      ) || l !== null && l.dependencies !== null && Ti(l.dependencies)) ? (_ || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, x, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        i,
        x,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = x), r.props = i, r.state = x, r.context = T, i = q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), i = !1);
    }
    return r = i, Ca(l, n), i = (n.flags & 128) !== 0, r || i ? (r = n.stateNode, u = i && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && i ? (n.child = Uc(
      n,
      l.child,
      null,
      s
    ), n.child = Uc(
      n,
      null,
      u,
      s
    )) : Se(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Ba(
      l,
      n,
      s
    ), l;
  }
  function Rn(l, n, u, i) {
    return Ac(), n.flags |= 256, Se(l, n, u, i), n.child;
  }
  var Ys = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function js(l) {
    return { baseLanes: l, cachePool: Ai() };
  }
  function Ha(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= aa), l;
  }
  function Ty(l, n, u) {
    var i = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Ee.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (Nt) {
        if (s ? nu(n) : On(), (l = de) ? (l = Rv(
          l,
          tl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: En !== null ? { id: sa, overflow: An } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = jm(l), u.return = n, n.child = u, dl = n, de = null)) : l = null, l === null) throw ln(n);
        return Lc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, s ? (On(), s = n.mode, v = Gs(
        { mode: "hidden", children: v },
        s
      ), i = Vu(
        i,
        s,
        u,
        null
      ), v.return = n, i.return = n, v.sibling = i, n.child = v, i = n.child, i.memoizedState = js(u), i.childLanes = Ha(
        l,
        m,
        u
      ), n.memoizedState = Ys, qc(null, i)) : (nu(n), jc(n, v));
    }
    var T = l.memoizedState;
    if (T !== null && (v = T.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (nu(n), n.flags &= -257, n = xi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (On(), n.child = l.child, n.flags |= 128, n = null) : (On(), v = i.fallback, s = n.mode, i = Gs(
          { mode: "visible", children: i.children },
          s
        ), v = Vu(
          v,
          s,
          u,
          null
        ), v.flags |= 2, i.return = n, v.return = n, i.sibling = v, n.child = i, Uc(
          n,
          l.child,
          null,
          u
        ), i = n.child, i.memoizedState = js(u), i.childLanes = Ha(
          l,
          m,
          u
        ), n.memoizedState = Ys, n = qc(null, i));
      else if (nu(n), Lc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var _ = m.dgst;
        m = _, i = Error(R(419)), i.stack = "", i.digest = m, Co({ value: i, source: null, stack: null }), n = xi(
          l,
          n,
          u
        );
      } else if (Je || hl(l, n, u, !1), m = (u & l.childLanes) !== 0, Je || m) {
        if (m = ce, m !== null && (i = ba(m, u), i !== 0 && i !== T.retryLane))
          throw T.retryLane = i, Xu(l, i), na(m, l, i), Gd;
        cn(v) || ah(), n = xi(
          l,
          n,
          u
        );
      } else
        cn(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, de = ua(
          v.nextSibling
        ), dl = n, Nt = !0, Pn = null, tl = !1, l !== null && ds(n, l), n = jc(
          n,
          i.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (On(), v = i.fallback, s = n.mode, T = l.child, _ = T.sibling, i = Qu(T, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = T.subtreeFlags & 65011712, _ !== null ? v = Qu(
      _,
      v
    ) : (v = Vu(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, i.return = n, i.sibling = v, n.child = i, qc(null, i), i = n.child, v = l.child.memoizedState, v === null ? v = js(u) : (s = v.cachePool, s !== null ? (T = Le._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = Ai(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), i.memoizedState = v, i.childLanes = Ha(
      l,
      m,
      u
    ), n.memoizedState = Ys, qc(l.child, i)) : (nu(n), u = l.child, l = u.sibling, u = Qu(u, {
      mode: "visible",
      children: i.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function jc(l, n) {
    return n = Gs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Gs(l, n) {
    return l = xe(22, l, null, n), l.lanes = 0, l;
  }
  function xi(l, n, u) {
    return Uc(n, l.child, null, u), l = jc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function qi(l, n, u) {
    l.lanes |= n;
    var i = l.alternate;
    i !== null && (i.lanes |= n), md(l.return, n, u);
  }
  function Qd(l, n, u, i, s, r) {
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
  function Ey(l, n, u) {
    var i = n.pendingProps, s = i.revealOrder, r = i.tail;
    i = i.children;
    var m = Ee.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, lt(Ee, m), Se(l, n, i, u), i = Nt ? Ze : 0, !v && l !== null && (l.flags & 128) !== 0)
      t: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && qi(l, u, n);
        else if (l.tag === 19)
          qi(l, u, n);
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
          l = u.alternate, l !== null && Yo(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), Qd(
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
          if (l = s.alternate, l !== null && Yo(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        Qd(
          n,
          !0,
          u,
          null,
          r,
          i
        );
        break;
      case "together":
        Qd(
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
  function Ba(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Hn |= n.lanes, (u & n.childLanes) === 0)
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
      throw Error(R(153));
    if (n.child !== null) {
      for (l = n.child, u = Qu(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Qu(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Vd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ti(l)));
  }
  function Zd(l, n, u) {
    switch (n.tag) {
      case 3:
        Ka(n, n.stateNode.containerInfo), Fl(n, Le, l.memoizedState.cache), Ac();
        break;
      case 27:
      case 5:
        wf(n);
        break;
      case 4:
        Ka(n, n.stateNode.containerInfo);
        break;
      case 10:
        Fl(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, qo(n), null;
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (nu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ty(l, n, u) : (nu(n), l = Ba(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        nu(n);
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
            return Ey(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), lt(Ee, Ee.current), i) break;
        return null;
      case 22:
        return n.lanes = 0, Jp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Fl(n, Le, l.memoizedState.cache);
    }
    return Ba(l, n, u);
  }
  function Ay(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Je = !0;
      else {
        if (!Vd(l, u) && (n.flags & 128) === 0)
          return Je = !1, Zd(
            l,
            n,
            u
          );
        Je = (l.flags & 131072) !== 0;
      }
    else
      Je = !1, Nt && (n.flags & 1048576) !== 0 && Xm(n, Ze, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var i = n.pendingProps;
          if (l = Oc(n.elementType), n.type = l, typeof l == "function")
            Si(l) ? (i = xc(l, i), n.tag = 1, n = by(
              null,
              n,
              l,
              i,
              u
            )) : (n.tag = 0, n = Xd(
              null,
              n,
              l,
              i,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Dl) {
                n.tag = 11, n = vy(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              } else if (s === We) {
                n.tag = 14, n = gy(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              }
            }
            throw n = xl(l) || l, Error(R(306, n, ""));
          }
        }
        return n;
      case 0:
        return Xd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return i = n.type, s = xc(
          i,
          n.pendingProps
        ), by(
          l,
          n,
          i,
          s,
          u
        );
      case 3:
        t: {
          if (Ka(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(R(387));
          i = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, pd(l, n), au(n, i, null, u);
          var m = n.memoizedState;
          if (i = m.cache, Fl(n, Le, i), i !== r.cache && lu(
            n,
            [Le],
            u,
            !0
          ), Cc(), i = m.element, r.isDehydrated)
            if (r = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Rn(
                l,
                n,
                i,
                u
              );
              break t;
            } else if (i !== s) {
              s = Da(
                Error(R(424)),
                n
              ), Co(s), n = Rn(
                l,
                n,
                i,
                u
              );
              break t;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, de = ua(l.firstChild), dl = n, Nt = !0, Pn = null, tl = !0, u = Km(
                n,
                null,
                i,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Ac(), i === s) {
              n = Ba(
                l,
                n,
                u
              );
              break t;
            }
            Se(l, n, i, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ca(l, n), l === null ? (u = hf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : Nt || (u = n.type, l = n.pendingProps, i = Zc(
          Ja.current
        ).createElement(u), i[ne] = n, i[wl] = l, Rl(i, u, l), Ft(i), n.stateNode = i) : n.memoizedState = hf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return wf(n), l === null && Nt && (i = n.stateNode = rf(
          n.type,
          n.pendingProps,
          Ja.current
        ), dl = n, tl = !0, s = de, Nn(n.type) ? (nr = s, de = ua(i.firstChild)) : de = s), Se(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ca(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && Nt && ((s = i = de) && (i = kg(
          i,
          n.type,
          n.pendingProps,
          tl
        ), i !== null ? (n.stateNode = i, dl = n, de = ua(i.firstChild), tl = !1, s = !0) : s = !1), s || ln(n)), wf(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, i = r.children, ff(s, r) ? i = null : m !== null && ff(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ds(
          l,
          n,
          Kg,
          null,
          null,
          u
        ), ir._currentValue = s), Ca(l, n), Se(l, n, i, u), n.child;
      case 6:
        return l === null && Nt && ((l = u = de) && (u = Dt(
          u,
          n.pendingProps,
          tl
        ), u !== null ? (n.stateNode = u, dl = n, de = null, l = !0) : l = !1), l || ln(n)), null;
      case 13:
        return Ty(l, n, u);
      case 4:
        return Ka(
          n,
          n.stateNode.containerInfo
        ), i = n.pendingProps, l === null ? n.child = Uc(
          n,
          null,
          i,
          u
        ) : Se(l, n, i, u), n.child;
      case 11:
        return vy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Se(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Se(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Se(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return i = n.pendingProps, Fl(n, n.type, i.value), Se(l, n, i.children, u), n.child;
      case 9:
        return s = n.type._context, i = n.pendingProps.children, pt(n), s = V(s), i = i(s), n.flags |= 1, Se(l, n, i, u), n.child;
      case 14:
        return gy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Sy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Ey(l, n, u);
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
        return pt(n), i = V(Le), l === null ? (s = Ra(), s === null && (s = ce, r = ys(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: i, cache: s }, Es(n), Fl(n, Le, s)) : ((l.lanes & u) !== 0 && (pd(l, n), au(n, null, null, u), Cc()), s = l.memoizedState, r = n.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Fl(n, Le, i)) : (i = r.cache, Fl(n, Le, i), i !== s.cache && lu(
          n,
          [Le],
          u,
          !0
        ))), Se(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(R(156, n.tag));
  }
  function su(l) {
    l.flags |= 4;
  }
  function zy(l, n, u, i, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (av()) l.flags |= 8192;
        else
          throw Mc = Di, zi;
    } else l.flags &= -16777217;
  }
  function Dy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !pa(n))
      if (av()) l.flags |= 8192;
      else
        throw Mc = Di, zi;
  }
  function jl(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? li() : 536870912, l.lanes |= n, Ce |= n);
  }
  function wo(l, n) {
    if (!Nt)
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
  function yt(l) {
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
    switch (dd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yt(n), null;
      case 1:
        return yt(n), null;
      case 3:
        return u = n.stateNode, i = null, l !== null && (i = l.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), Dn(Le), Sa(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (eu(n) ? su(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Qm())), yt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (su(n), r !== null ? (yt(n), Dy(n, r)) : (yt(n), zy(
          n,
          s,
          null,
          i,
          u
        ))) : r ? r !== l.memoizedState ? (su(n), yt(n), Dy(n, r)) : (yt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== i && su(n), yt(n), zy(
          n,
          s,
          l,
          i,
          u
        )), null;
      case 27:
        if (F(n), u = Ja.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && su(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(R(166));
            return yt(n), null;
          }
          l = nt.current, eu(n) ? hs(n) : (l = rf(s, i, u), n.stateNode = l, su(n));
        }
        return yt(n), null;
      case 5:
        if (F(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && su(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(R(166));
            return yt(n), null;
          }
          if (r = nt.current, eu(n))
            hs(n);
          else {
            var m = Zc(
              Ja.current
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
            r[ne] = n, r[wl] = i;
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
            t: switch (Rl(r, s, i), s) {
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
            i && su(n);
          }
        }
        return yt(n), zy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== i && su(n);
        else {
          if (typeof i != "string" && n.stateNode === null)
            throw Error(R(166));
          if (l = Ja.current, eu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, i = null, s = dl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            l[ne] = n, l = !!(l.nodeValue === u || i !== null && i.suppressHydrationWarning === !0 || Wy(l.nodeValue, u)), l || ln(n, !0);
          } else
            l = Zc(l).createTextNode(
              i
            ), l[ne] = n, n.stateNode = l;
        }
        return yt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (i = eu(n), u !== null) {
            if (l === null) {
              if (!i) throw Error(R(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(R(557));
              l[ne] = n;
            } else
              Ac(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            yt(n), l = !1;
          } else
            u = Qm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (Il(n), n) : (Il(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(R(558));
        }
        return yt(n), null;
      case 13:
        if (i = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = eu(n), i !== null && i.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(R(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(R(317));
              s[ne] = n;
            } else
              Ac(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            yt(n), s = !1;
          } else
            s = Qm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Il(n), n) : (Il(n), null);
        }
        return Il(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = i !== null, l = l !== null && l.memoizedState !== null, u && (i = n.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== s && (i.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), jl(n, n.updateQueue), yt(n), null);
      case 4:
        return Sa(), l === null && of(n.stateNode.containerInfo), yt(n), null;
      case 10:
        return Dn(n.type), yt(n), null;
      case 19:
        if (k(Ee), i = n.memoizedState, i === null) return yt(n), null;
        if (s = (n.flags & 128) !== 0, r = i.rendering, r === null)
          if (s) wo(i, !1);
          else {
            if (me !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Yo(l), r !== null) {
                  for (n.flags |= 128, wo(i, !1), l = r.updateQueue, n.updateQueue = l, jl(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Ym(u, l), u = u.sibling;
                  return lt(
                    Ee,
                    Ee.current & 1 | 2
                  ), Nt && en(n, i.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            i.tail !== null && Ol() > $t && (n.flags |= 128, s = !0, wo(i, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = Yo(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, jl(n, l), wo(i, !0), i.tail === null && i.tailMode === "hidden" && !r.alternate && !Nt)
                return yt(n), null;
            } else
              2 * Ol() - i.renderingStartTime > $t && u !== 536870912 && (n.flags |= 128, s = !0, wo(i, !1), n.lanes = 4194304);
          i.isBackwards ? (r.sibling = n.child, n.child = r) : (l = i.last, l !== null ? l.sibling = r : n.child = r, i.last = r);
        }
        return i.tail !== null ? (l = i.tail, i.rendering = l, i.tail = l.sibling, i.renderingStartTime = Ol(), l.sibling = null, u = Ee.current, lt(
          Ee,
          s ? u & 1 | 2 : u & 1
        ), Nt && en(n, i.treeForkCount), l) : (yt(n), null);
      case 22:
      case 23:
        return Il(n), xo(), i = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (yt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : yt(n), u = n.updateQueue, u !== null && jl(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048), l !== null && k(Ma), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Dn(Le), yt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(R(156, n.tag));
  }
  function Wp(l, n) {
    switch (dd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Dn(Le), Sa(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return F(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Il(n), n.alternate === null)
            throw Error(R(340));
          Ac();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (Il(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(R(340));
          Ac();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return k(Ee), null;
      case 4:
        return Sa(), null;
      case 10:
        return Dn(n.type), null;
      case 22:
      case 23:
        return Il(n), xo(), l !== null && k(Ma), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Dn(Le), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fp(l, n) {
    switch (dd(n), n.tag) {
      case 3:
        Dn(Le), Sa();
        break;
      case 26:
      case 27:
      case 5:
        F(n);
        break;
      case 4:
        Sa();
        break;
      case 31:
        n.memoizedState !== null && Il(n);
        break;
      case 13:
        Il(n);
        break;
      case 19:
        k(Ee);
        break;
      case 10:
        Dn(n.type);
        break;
      case 22:
      case 23:
        Il(n), xo(), l !== null && k(Ma);
        break;
      case 24:
        Dn(Le);
    }
  }
  function nn(l, n) {
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
      te(n, n.return, v);
    }
  }
  function Na(l, n, u) {
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
                te(
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
      te(n, n.return, q);
    }
  }
  function Ld(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Hc(n, u);
      } catch (i) {
        te(l, l.return, i);
      }
    }
  }
  function Gc(l, n, u) {
    u.props = xc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (i) {
      te(l, n, i);
    }
  }
  function ru(l, n) {
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
      te(l, n, s);
    }
  }
  function Un(l, n) {
    var u = l.ref, i = l.refCleanup;
    if (u !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          te(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          te(l, n, s);
        }
      else u.current = null;
  }
  function Oy(l) {
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
      te(l, l.return, s);
    }
  }
  function wd(l, n, u) {
    try {
      var i = l.stateNode;
      ky(i, l.type, u, n), i[wl] = n;
    } catch (s) {
      te(l, l.return, s);
    }
  }
  function My(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Nn(l.type) || l.tag === 4;
  }
  function Jo(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || My(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Nn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ko(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = yn));
    else if (i !== 4 && (i === 27 && Nn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Ko(l, n, u), l = l.sibling; l !== null; )
        Ko(l, n, u), l = l.sibling;
  }
  function $o(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (i !== 4 && (i === 27 && Nn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for ($o(l, n, u), l = l.sibling; l !== null; )
        $o(l, n, u), l = l.sibling;
  }
  function Ry(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var i = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Rl(n, i, u), n[ne] = l, n[wl] = u;
    } catch (r) {
      te(l, l.return, r);
    }
  }
  var ku = !1, ke = !1, Jd = !1, Uy = typeof WeakSet == "function" ? WeakSet : Set, pl = null;
  function Wo(l, n) {
    if (l = l.containerInfo, dh = al, l = bc(l), cs(l)) {
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
            var m = 0, v = -1, T = -1, _ = 0, q = 0, X = l, C = null;
            e: for (; ; ) {
              for (var x; X !== u || s !== 0 && X.nodeType !== 3 || (v = m + s), X !== r || i !== 0 && X.nodeType !== 3 || (T = m + i), X.nodeType === 3 && (m += X.nodeValue.length), (x = X.firstChild) !== null; )
                C = X, X = x;
              for (; ; ) {
                if (X === l) break e;
                if (C === u && ++_ === s && (v = m), C === r && ++q === i && (T = m), (x = X.nextSibling) !== null) break;
                X = C, C = X.parentNode;
              }
              X = x;
            }
            u = v === -1 || T === -1 ? null : { start: v, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (hh = { focusedElem: l, selectionRange: u }, al = !1, pl = n; pl !== null; )
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
                  var P = xc(
                    u.type,
                    s
                  );
                  l = i.getSnapshotBeforeUpdate(
                    P,
                    r
                  ), i.__reactInternalSnapshotBeforeUpdate = l;
                } catch (st) {
                  te(
                    u,
                    u.return,
                    st
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  ar(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ar(l);
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
              if ((l & 1024) !== 0) throw Error(R(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, pl = l;
            break;
          }
          pl = n.return;
        }
  }
  function Xs(l, n, u) {
    var i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Iu(l, u), i & 4 && nn(5, u);
        break;
      case 1:
        if (Iu(l, u), i & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              te(u, u.return, m);
            }
          else {
            var s = xc(
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
              te(
                u,
                u.return,
                m
              );
            }
          }
        i & 64 && Ld(u), i & 512 && ru(u, u.return);
        break;
      case 3:
        if (Iu(l, u), i & 64 && (l = u.updateQueue, l !== null)) {
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
            Hc(l, n);
          } catch (m) {
            te(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Ry(u);
      case 26:
      case 5:
        Iu(l, u), n === null && i & 4 && Oy(u), i & 512 && ru(u, u.return);
        break;
      case 12:
        Iu(l, u);
        break;
      case 31:
        Iu(l, u), i & 4 && kp(l, u);
        break;
      case 13:
        Iu(l, u), i & 4 && Hy(l, u), i & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = xa.bind(
          null,
          u
        ), sf(l, u))));
        break;
      case 22:
        if (i = u.memoizedState !== null || ku, !i) {
          n = n !== null && n.memoizedState !== null || ke, s = ku;
          var r = ke;
          ku = i, (ke = n) && !r ? _n(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Iu(l, u), ku = s, ke = r;
        }
        break;
      case 30:
        break;
      default:
        Iu(l, u);
    }
  }
  function _y(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, _y(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Vr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var he = null, ea = !1;
  function du(l, n, u) {
    for (u = u.child; u !== null; )
      Cy(l, n, u), u = u.sibling;
  }
  function Cy(l, n, u) {
    if (oa && typeof oa.onCommitFiberUnmount == "function")
      try {
        oa.onCommitFiberUnmount(ei, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        ke || Un(u, n), du(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        ke || Un(u, n);
        var i = he, s = ea;
        Nn(u.type) && (he = u.stateNode, ea = !1), du(
          l,
          n,
          u
        ), Li(u.stateNode), he = i, ea = s;
        break;
      case 5:
        ke || Un(u, n);
      case 6:
        if (i = he, s = ea, he = null, du(
          l,
          n,
          u
        ), he = i, ea = s, he !== null)
          if (ea)
            try {
              (he.nodeType === 9 ? he.body : he.nodeName === "HTML" ? he.ownerDocument.body : he).removeChild(u.stateNode);
            } catch (r) {
              te(
                u,
                n,
                r
              );
            }
          else
            try {
              he.removeChild(u.stateNode);
            } catch (r) {
              te(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        he !== null && (ea ? (l = he, e0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Tf(l)) : e0(he, u.stateNode));
        break;
      case 4:
        i = he, s = ea, he = u.stateNode.containerInfo, ea = !0, du(
          l,
          n,
          u
        ), he = i, ea = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Na(2, u, n), ke || Na(4, u, n), du(
          l,
          n,
          u
        );
        break;
      case 1:
        ke || (Un(u, n), i = u.stateNode, typeof i.componentWillUnmount == "function" && Gc(
          u,
          n,
          i
        )), du(
          l,
          n,
          u
        );
        break;
      case 21:
        du(
          l,
          n,
          u
        );
        break;
      case 22:
        ke = (i = ke) || u.memoizedState !== null, du(
          l,
          n,
          u
        ), ke = i;
        break;
      default:
        du(
          l,
          n,
          u
        );
    }
  }
  function kp(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Tf(l);
      } catch (u) {
        te(n, n.return, u);
      }
    }
  }
  function Hy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Tf(l);
      } catch (u) {
        te(n, n.return, u);
      }
  }
  function Qs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Uy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Uy()), n;
      default:
        throw Error(R(435, l.tag));
    }
  }
  function Vs(l, n) {
    var u = Qs(l);
    n.forEach(function(i) {
      if (!u.has(i)) {
        u.add(i);
        var s = gv.bind(null, l, i);
        i.then(s, s);
      }
    });
  }
  function la(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var i = 0; i < u.length; i++) {
        var s = u[i], r = l, m = n, v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Nn(v.type)) {
                he = v.stateNode, ea = !1;
                break t;
              }
              break;
            case 5:
              he = v.stateNode, ea = !1;
              break t;
            case 3:
            case 4:
              he = v.stateNode.containerInfo, ea = !0;
              break t;
          }
          v = v.return;
        }
        if (he === null) throw Error(R(160));
        Cy(r, m, s), he = null, ea = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Kd(n, l), n = n.sibling;
  }
  var Et = null;
  function Kd(l, n) {
    var u = l.alternate, i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        la(n, l), ra(l), i & 4 && (Na(3, l, l.return), nn(3, l), Na(5, l, l.return));
        break;
      case 1:
        la(n, l), ra(l), i & 512 && (ke || u === null || Un(u, u.return)), i & 64 && ku && (l = l.updateQueue, l !== null && (i = l.callbacks, i !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? i : u.concat(i))));
        break;
      case 26:
        var s = Et;
        if (la(n, l), ra(l), i & 512 && (ke || u === null || Un(u, u.return)), i & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (i = l.memoizedState, u === null)
            if (i === null)
              if (l.stateNode === null) {
                t: {
                  i = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  e: switch (i) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[wn] || r[ne] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Rl(r, i, u), r[ne] = l, Ft(r), i = r;
                      break t;
                    case "link":
                      var m = u0(
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
                      r = s.createElement(i), Rl(r, i, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = u0(
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
                      r = s.createElement(i), Rl(r, i, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(R(468, i));
                  }
                  r[ne] = l, Ft(r), i = r;
                }
                l.stateNode = i;
              } else
                gh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = n0(
                s,
                i,
                l.memoizedProps
              );
          else
            r !== i ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, i === null ? gh(
              s,
              l.type,
              l.stateNode
            ) : n0(
              s,
              i,
              l.memoizedProps
            )) : i === null && l.stateNode !== null && wd(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        la(n, l), ra(l), i & 512 && (ke || u === null || Un(u, u.return)), u !== null && i & 4 && wd(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (la(n, l), ra(l), i & 512 && (ke || u === null || Un(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Kn(s, "");
          } catch (P) {
            te(l, l.return, P);
          }
        }
        i & 4 && l.stateNode != null && (s = l.memoizedProps, wd(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), i & 1024 && (Jd = !0);
        break;
      case 6:
        if (la(n, l), ra(l), i & 4) {
          if (l.stateNode === null)
            throw Error(R(162));
          i = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = i;
          } catch (P) {
            te(l, l.return, P);
          }
        }
        break;
      case 3:
        if (pf = null, s = Et, Et = Gl(n.containerInfo), la(n, l), Et = s, ra(l), i & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Tf(n.containerInfo);
          } catch (P) {
            te(l, l.return, P);
          }
        Jd && (Jd = !1, By(l));
        break;
      case 4:
        i = Et, Et = Gl(
          l.stateNode.containerInfo
        ), la(n, l), ra(l), Et = i;
        break;
      case 12:
        la(n, l), ra(l);
        break;
      case 31:
        la(n, l), ra(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Vs(l, i)));
        break;
      case 13:
        la(n, l), ra(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Bn = Ol()), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Vs(l, i)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, _ = ku, q = ke;
        if (ku = _ || s, ke = q || T, la(n, l), ke = q, ku = _, ra(l), i & 8192)
          t: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || ku || ke || Yi(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = T.stateNode;
                    var X = T.memoizedProps.style, C = X != null && X.hasOwnProperty("display") ? X.display : null;
                    v.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (P) {
                  te(T, T.return, P);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (P) {
                  te(T, T.return, P);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var x = T.stateNode;
                  s ? Ke(x, !0) : Ke(T.stateNode, !1);
                } catch (P) {
                  te(T, T.return, P);
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
        i & 4 && (i = l.updateQueue, i !== null && (u = i.retryQueue, u !== null && (i.retryQueue = null, Vs(l, u))));
        break;
      case 19:
        la(n, l), ra(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Vs(l, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        la(n, l), ra(l);
    }
  }
  function ra(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, i = l.return; i !== null; ) {
          if (My(i)) {
            u = i;
            break;
          }
          i = i.return;
        }
        if (u == null) throw Error(R(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Jo(l);
            $o(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Kn(m, ""), u.flags &= -33);
            var v = Jo(l);
            $o(l, v, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, _ = Jo(l);
            Ko(
              l,
              _,
              T
            );
            break;
          default:
            throw Error(R(161));
        }
      } catch (q) {
        te(l, l.return, q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function By(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        By(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Iu(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Xs(l, n.alternate, n), n = n.sibling;
  }
  function Yi(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Na(4, n, n.return), Yi(n);
          break;
        case 1:
          Un(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Gc(
            n,
            n.return,
            u
          ), Yi(n);
          break;
        case 27:
          Li(n.stateNode);
        case 26:
        case 5:
          Un(n, n.return), Yi(n);
          break;
        case 22:
          n.memoizedState === null && Yi(n);
          break;
        case 30:
          Yi(n);
          break;
        default:
          Yi(n);
      }
      l = l.sibling;
    }
  }
  function _n(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          _n(
            s,
            r,
            u
          ), nn(4, r);
          break;
        case 1:
          if (_n(
            s,
            r,
            u
          ), i = r, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (_) {
              te(i, i.return, _);
            }
          if (i = r, s = i.updateQueue, s !== null) {
            var v = i.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  gd(T[s], v);
            } catch (_) {
              te(i, i.return, _);
            }
          }
          u && m & 64 && Ld(r), ru(r, r.return);
          break;
        case 27:
          Ry(r);
        case 26:
        case 5:
          _n(
            s,
            r,
            u
          ), u && i === null && m & 4 && Oy(r), ru(r, r.return);
          break;
        case 12:
          _n(
            s,
            r,
            u
          );
          break;
        case 31:
          _n(
            s,
            r,
            u
          ), u && m & 4 && kp(s, r);
          break;
        case 13:
          _n(
            s,
            r,
            u
          ), u && m & 4 && Hy(s, r);
          break;
        case 22:
          r.memoizedState === null && _n(
            s,
            r,
            u
          ), ru(r, r.return);
          break;
        case 30:
          break;
        default:
          _n(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function $d(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && ps(u));
  }
  function Wd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && ps(l));
  }
  function un(l, n, u, i) {
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
        un(
          l,
          n,
          u,
          i
        ), s & 2048 && nn(9, n);
        break;
      case 1:
        un(
          l,
          n,
          u,
          i
        );
        break;
      case 3:
        un(
          l,
          n,
          u,
          i
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && ps(l)));
        break;
      case 12:
        if (s & 2048) {
          un(
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
            te(n, n.return, T);
          }
        } else
          un(
            l,
            n,
            u,
            i
          );
        break;
      case 31:
        un(
          l,
          n,
          u,
          i
        );
        break;
      case 13:
        un(
          l,
          n,
          u,
          i
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? un(
          l,
          n,
          u,
          i
        ) : Zs(l, n) : r._visibility & 2 ? un(
          l,
          n,
          u,
          i
        ) : (r._visibility |= 2, ko(
          l,
          n,
          u,
          i,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && $d(m, n);
        break;
      case 24:
        un(
          l,
          n,
          u,
          i
        ), s & 2048 && Wd(n.alternate, n);
        break;
      default:
        un(
          l,
          n,
          u,
          i
        );
    }
  }
  function ko(l, n, u, i, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, T = i, _ = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          ko(
            r,
            m,
            v,
            T,
            s
          ), nn(8, m);
          break;
        case 23:
          break;
        case 22:
          var q = m.stateNode;
          m.memoizedState !== null ? q._visibility & 2 ? ko(
            r,
            m,
            v,
            T,
            s
          ) : Zs(
            r,
            m
          ) : (q._visibility |= 2, ko(
            r,
            m,
            v,
            T,
            s
          )), s && _ & 2048 && $d(
            m.alternate,
            m
          );
          break;
        case 24:
          ko(
            r,
            m,
            v,
            T,
            s
          ), s && _ & 2048 && Wd(m.alternate, m);
          break;
        default:
          ko(
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
  function Zs(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, i = n, s = i.flags;
        switch (i.tag) {
          case 22:
            Zs(u, i), s & 2048 && $d(
              i.alternate,
              i
            );
            break;
          case 24:
            Zs(u, i), s & 2048 && Wd(i.alternate, i);
            break;
          default:
            Zs(u, i);
        }
        n = n.sibling;
      }
  }
  var da = 8192;
  function hu(l, n, u) {
    if (l.subtreeFlags & da)
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
        hu(
          l,
          n,
          u
        ), l.flags & da && l.memoizedState !== null && gu(
          u,
          Et,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        hu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var i = Et;
        Et = Gl(l.stateNode.containerInfo), hu(
          l,
          n,
          u
        ), Et = i;
        break;
      case 22:
        l.memoizedState === null && (i = l.alternate, i !== null && i.memoizedState !== null ? (i = da, da = 16777216, hu(
          l,
          n,
          u
        ), da = i) : hu(
          l,
          n,
          u
        ));
        break;
      default:
        hu(
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
  function Io(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          pl = i, kd(
            i,
            l
          );
        }
      Fd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Ny(l), l = l.sibling;
  }
  function Ny(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Io(l), l.flags & 2048 && Na(9, l, l.return);
        break;
      case 3:
        Io(l);
        break;
      case 12:
        Io(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Ls(l)) : Io(l);
        break;
      default:
        Io(l);
    }
  }
  function Ls(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          pl = i, kd(
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
          Na(8, n, n.return), Ls(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Ls(n));
          break;
        default:
          Ls(n);
      }
      l = l.sibling;
    }
  }
  function kd(l, n) {
    for (; pl !== null; ) {
      var u = pl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Na(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var i = u.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          ps(u.memoizedState.cache);
      }
      if (i = u.child, i !== null) i.return = u, pl = i;
      else
        t: for (u = l; pl !== null; ) {
          i = pl;
          var s = i.sibling, r = i.return;
          if (_y(i), i === u) {
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
      var n = V(Le), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return V(Le).controller.signal;
    }
  }, xy = typeof WeakMap == "function" ? WeakMap : Map, wt = 0, ce = null, xt = null, _t = 0, Pt = 0, dt = null, mu = !1, Xc = !1, Id = !1, Cn = 0, me = 0, Hn = 0, ji = 0, Pd = 0, aa = 0, Ce = 0, ws = null, He = null, th = !1, Bn = 0, qy = 0, $t = 1 / 0, Po = null, Ae = null, ll = 0, Pu = null, Qc = null, yu = 0, ha = 0, eh = null, lh = null, tf = 0, Js = null;
  function ma() {
    return (wt & 2) !== 0 && _t !== 0 ? _t & -_t : O.T !== null ? ih() : Xr();
  }
  function tv() {
    if (aa === 0)
      if ((_t & 536870912) === 0 || Nt) {
        var l = dn;
        dn <<= 1, (dn & 3932160) === 0 && (dn = 262144), aa = l;
      } else aa = 536870912;
    return l = kl.current, l !== null && (l.flags |= 32), aa;
  }
  function na(l, n, u) {
    (l === ce && (Pt === 2 || Pt === 9) || l.cancelPendingCommit !== null) && (pu(l, 0), tc(
      l,
      _t,
      aa,
      !1
    )), ho(l, u), ((wt & 2) === 0 || l !== ce) && (l === ce && ((wt & 2) === 0 && (ji |= u), me === 4 && tc(
      l,
      _t,
      aa,
      !1
    )), vu(l));
  }
  function ev(l, n, u) {
    if ((wt & 6) !== 0) throw Error(R(327));
    var i = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || hn(l, n), s = i ? cv(l, n) : nh(l, n, !0), r = i;
    do {
      if (s === 0) {
        Xc && !i && tc(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !lv(u)) {
          s = nh(l, n, !1), r = !1;
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
              s = ws;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (pu(v, m).flags |= 256), m = nh(
                v,
                m,
                !1
              ), m !== 2) {
                if (Id && !T) {
                  v.errorRecoveryDisabledLanes |= r, ji |= r, s = 4;
                  break t;
                }
                r = He, He = s, r !== null && (He === null ? He = r : He.push.apply(
                  He,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          pu(l, 0), tc(l, n, 0, !0);
          break;
        }
        t: {
          switch (i = l, r = s, r) {
            case 0:
            case 1:
              throw Error(R(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              tc(
                i,
                n,
                aa,
                !mu
              );
              break t;
            case 2:
              He = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(R(329));
          }
          if ((n & 62914560) === n && (s = Bn + 300 - Ol(), 10 < s)) {
            if (tc(
              i,
              n,
              aa,
              !mu
            ), Ve(i, 0, !0) !== 0) break t;
            yu = n, i.timeoutHandle = lr(
              Ks.bind(
                null,
                i,
                u,
                He,
                Po,
                th,
                n,
                aa,
                ji,
                Ce,
                mu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          Ks(
            i,
            u,
            He,
            Po,
            th,
            n,
            aa,
            ji,
            Ce,
            mu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    vu(l);
  }
  function Ks(l, n, u, i, s, r, m, v, T, _, q, X, C, x) {
    if (l.timeoutHandle = -1, X = n.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
      X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: yn
      }, Ip(
        n,
        r,
        X
      );
      var P = (r & 62914560) === r ? Bn - Ol() : (r & 4194048) === r ? qy - Ol() : 0;
      if (P = i0(
        X,
        P
      ), P !== null) {
        yu = r, l.cancelPendingCommit = P(
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
            X,
            null,
            C,
            x
          )
        ), tc(l, r, m, !_);
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
            if (!Yl(r(), s)) return !1;
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
  function tc(l, n, u, i) {
    n &= ~Pd, n &= ~ji, l.suspendedLanes |= n, l.pingedLanes &= ~n, i && (l.warmLanes |= n), i = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ll(s), m = 1 << r;
      i[r] = -1, s &= ~m;
    }
    u !== 0 && Wf(l, u, n);
  }
  function ef() {
    return (wt & 6) === 0 ? (lc(0), !1) : !0;
  }
  function Yy() {
    if (xt !== null) {
      if (Pt === 0)
        var l = xt.return;
      else
        l = xt, zn = Zu = null, Os(l), Rc = null, Oi = 0, l = xt;
      for (; l !== null; )
        Fp(l.alternate, l), l = l.return;
      xt = null;
    }
  }
  function pu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Ov(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), yu = 0, Yy(), ce = l, xt = u = Qu(l.current, null), _t = n, Pt = 0, dt = null, mu = !1, Xc = hn(l, n), Id = !1, Ce = aa = Pd = ji = Hn = me = 0, He = ws = null, th = !1, (n & 8) !== 0 && (n |= n & 32);
    var i = l.entangledLanes;
    if (i !== 0)
      for (l = l.entanglements, i &= n; 0 < i; ) {
        var s = 31 - Ll(i), r = 1 << s;
        n |= l[s], i &= ~r;
      }
    return Cn = n, Aa(), u;
  }
  function lf(l, n) {
    bt = null, O.H = Ns, n === Dc || n === Bo ? (n = Jm(), Pt = 3) : n === zi ? (n = Jm(), Pt = 4) : Pt = n === Gd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, dt = n, xt === null && (me = 1, Lo(
      l,
      Da(n, l.current)
    ));
  }
  function av() {
    var l = kl.current;
    return l === null ? !0 : (_t & 4194048) === _t ? _a === null : (_t & 62914560) === _t || (_t & 536870912) !== 0 ? l === _a : !1;
  }
  function nv() {
    var l = O.H;
    return O.H = Ns, l === null ? Ns : l;
  }
  function uv() {
    var l = O.A;
    return O.A = Pp, l;
  }
  function ah() {
    me = 4, mu || (_t & 4194048) !== _t && kl.current !== null || (Xc = !0), (Hn & 134217727) === 0 && (ji & 134217727) === 0 || ce === null || tc(
      ce,
      _t,
      aa,
      !1
    );
  }
  function nh(l, n, u) {
    var i = wt;
    wt |= 2;
    var s = nv(), r = uv();
    (ce !== l || _t !== n) && (Po = null, pu(l, n)), n = !1;
    var m = me;
    t: do
      try {
        if (Pt !== 0 && xt !== null) {
          var v = xt, T = dt;
          switch (Pt) {
            case 8:
              Yy(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              kl.current === null && (n = !0);
              var _ = Pt;
              if (Pt = 0, dt = null, Gi(l, v, T, _), u && Xc) {
                m = 0;
                break t;
              }
              break;
            default:
              _ = Pt, Pt = 0, dt = null, Gi(l, v, T, _);
          }
        }
        Wg(), m = me;
        break;
      } catch (q) {
        lf(l, q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, zn = Zu = null, wt = i, O.H = s, O.A = r, xt === null && (ce = null, _t = 0, Aa()), m;
  }
  function Wg() {
    for (; xt !== null; ) iv(xt);
  }
  function cv(l, n) {
    var u = wt;
    wt |= 2;
    var i = nv(), s = uv();
    ce !== l || _t !== n ? (Po = null, $t = Ol() + 500, pu(l, n)) : Xc = hn(
      l,
      n
    );
    t: do
      try {
        if (Pt !== 0 && xt !== null) {
          n = xt;
          var r = dt;
          e: switch (Pt) {
            case 1:
              Pt = 0, dt = null, Gi(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Lm(r)) {
                Pt = 0, dt = null, ov(n);
                break;
              }
              n = function() {
                Pt !== 2 && Pt !== 9 || ce !== l || (Pt = 7), vu(l);
              }, r.then(n, n);
              break t;
            case 3:
              Pt = 7;
              break t;
            case 4:
              Pt = 5;
              break t;
            case 7:
              Lm(r) ? (Pt = 0, dt = null, ov(n)) : (Pt = 0, dt = null, Gi(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (xt.tag) {
                case 26:
                  m = xt.memoizedState;
                case 5:
                case 27:
                  var v = xt;
                  if (m ? pa(m) : v.stateNode.complete) {
                    Pt = 0, dt = null;
                    var T = v.sibling;
                    if (T !== null) xt = T;
                    else {
                      var _ = v.return;
                      _ !== null ? (xt = _, $s(_)) : xt = null;
                    }
                    break e;
                  }
              }
              Pt = 0, dt = null, Gi(l, n, r, 5);
              break;
            case 6:
              Pt = 0, dt = null, Gi(l, n, r, 6);
              break;
            case 8:
              Yy(), me = 6;
              break t;
            default:
              throw Error(R(462));
          }
        }
        Vc();
        break;
      } catch (q) {
        lf(l, q);
      }
    while (!0);
    return zn = Zu = null, O.H = i, O.A = s, wt = u, xt !== null ? 0 : (ce = null, _t = 0, Aa(), me);
  }
  function Vc() {
    for (; xt !== null && !ti(); )
      iv(xt);
  }
  function iv(l) {
    var n = Ay(l.alternate, l, Cn);
    l.memoizedProps = l.pendingProps, n === null ? $s(l) : xt = n;
  }
  function ov(l) {
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
          _t
        );
        break;
      case 11:
        n = Yc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          _t
        );
        break;
      case 5:
        Os(n);
      default:
        Fp(u, n), n = xt = Ym(n, Cn), n = Ay(u, n, Cn);
    }
    l.memoizedProps = l.pendingProps, n === null ? $s(l) : xt = n;
  }
  function Gi(l, n, u, i) {
    zn = Zu = null, Os(n), Rc = null, Oi = 0;
    var s = n.return;
    try {
      if ($g(
        l,
        s,
        n,
        u,
        _t
      )) {
        me = 1, Lo(
          l,
          Da(u, l.current)
        ), xt = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw xt = s, r;
      me = 1, Lo(
        l,
        Da(u, l.current)
      ), xt = null;
      return;
    }
    n.flags & 32768 ? (Nt || i === 1 ? l = !0 : Xc || (_t & 536870912) !== 0 ? l = !1 : (mu = l = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = kl.current, i !== null && i.tag === 13 && (i.flags |= 16384))), fv(n, l)) : $s(n);
  }
  function $s(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        fv(
          n,
          mu
        );
        return;
      }
      l = n.return;
      var u = $p(
        n.alternate,
        n,
        Cn
      );
      if (u !== null) {
        xt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        xt = n;
        return;
      }
      xt = n = l;
    } while (n !== null);
    me === 0 && (me = 5);
  }
  function fv(l, n) {
    do {
      var u = Wp(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, xt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        xt = l;
        return;
      }
      xt = l = u;
    } while (l !== null);
    me = 6, xt = null;
  }
  function sv(l, n, u, i, s, r, m, v, T) {
    l.cancelPendingCommit = null;
    do
      af();
    while (ll !== 0);
    if ((wt & 6) !== 0) throw Error(R(327));
    if (n !== null) {
      if (n === l.current) throw Error(R(177));
      if (r = n.lanes | n.childLanes, r |= Pa, jr(
        l,
        u,
        r,
        m,
        v,
        T
      ), l === ce && (xt = ce = null, _t = 0), Qc = n, Pu = l, yu = u, ha = r, eh = s, lh = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Sv(rc, function() {
        return yv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
        i = O.T, O.T = null, s = Q.p, Q.p = 2, m = wt, wt |= 4;
        try {
          Wo(l, n, u);
        } finally {
          wt = m, Q.p = s, O.T = i;
        }
      }
      ll = 1, rv(), dv(), hv();
    }
  }
  function rv() {
    if (ll === 1) {
      ll = 0;
      var l = Pu, n = Qc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = wt;
        wt |= 4;
        try {
          Kd(n, l);
          var r = hh, m = bc(l.containerInfo), v = r.focusedElem, T = r.selectionRange;
          if (m !== v && v && v.ownerDocument && pi(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && cs(v)) {
              var _ = T.start, q = T.end;
              if (q === void 0 && (q = _), "selectionStart" in v)
                v.selectionStart = _, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var X = v.ownerDocument || document, C = X && X.defaultView || window;
                if (C.getSelection) {
                  var x = C.getSelection(), P = v.textContent.length, st = Math.min(T.start, P), oe = T.end === void 0 ? st : Math.min(T.end, P);
                  !x.extend && st > oe && (m = oe, oe = st, st = m);
                  var M = xm(
                    v,
                    st
                  ), z = xm(
                    v,
                    oe
                  );
                  if (M && z && (x.rangeCount !== 1 || x.anchorNode !== M.node || x.anchorOffset !== M.offset || x.focusNode !== z.node || x.focusOffset !== z.offset)) {
                    var U = X.createRange();
                    U.setStart(M.node, M.offset), x.removeAllRanges(), st > oe ? (x.addRange(U), x.extend(z.node, z.offset)) : (U.setEnd(z.node, z.offset), x.addRange(U));
                  }
                }
              }
            }
            for (X = [], x = v; x = x.parentNode; )
              x.nodeType === 1 && X.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < X.length; v++) {
              var G = X[v];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          al = !!dh, hh = dh = null;
        } finally {
          wt = s, Q.p = i, O.T = u;
        }
      }
      l.current = n, ll = 2;
    }
  }
  function dv() {
    if (ll === 2) {
      ll = 0;
      var l = Pu, n = Qc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = wt;
        wt |= 4;
        try {
          Xs(l, n.alternate, n);
        } finally {
          wt = s, Q.p = i, O.T = u;
        }
      }
      ll = 3;
    }
  }
  function hv() {
    if (ll === 4 || ll === 3) {
      ll = 0, xr();
      var l = Pu, n = Qc, u = yu, i = lh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ll = 5 : (ll = 0, Qc = Pu = null, mv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Ae = null), fm(u), n = n.stateNode, oa && typeof oa.onCommitFiberRoot == "function")
        try {
          oa.onCommitFiberRoot(
            ei,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        n = O.T, s = Q.p, Q.p = 2, O.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < i.length; m++) {
            var v = i[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          O.T = n, Q.p = s;
        }
      }
      (yu & 3) !== 0 && af(), vu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === Js ? tf++ : (tf = 0, Js = l) : tf = 0, lc(0);
    }
  }
  function mv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, ps(n)));
  }
  function af() {
    return rv(), dv(), hv(), yv();
  }
  function yv() {
    if (ll !== 5) return !1;
    var l = Pu, n = ha;
    ha = 0;
    var u = fm(yu), i = O.T, s = Q.p;
    try {
      Q.p = 32 > u ? 32 : u, O.T = null, u = eh, eh = null;
      var r = Pu, m = yu;
      if (ll = 0, Qc = Pu = null, yu = 0, (wt & 6) !== 0) throw Error(R(331));
      var v = wt;
      if (wt |= 4, Ny(r.current), Fo(
        r,
        r.current,
        m,
        u
      ), wt = v, lc(0, !1), oa && typeof oa.onPostCommitFiberRoot == "function")
        try {
          oa.onPostCommitFiberRoot(ei, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, O.T = i, mv(l, n);
    }
  }
  function pv(l, n, u) {
    n = Da(u, n), n = my(l.stateNode, n, 2), l = Ua(l, n, 2), l !== null && (ho(l, 2), vu(l));
  }
  function te(l, n, u) {
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
          if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ae === null || !Ae.has(i))) {
            l = Da(u, l), u = yy(2), i = Ua(n, u, 2), i !== null && (py(
              u,
              i,
              n,
              l
            ), ho(i, 2), vu(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ws(l, n, u) {
    var i = l.pingCache;
    if (i === null) {
      i = l.pingCache = new xy();
      var s = /* @__PURE__ */ new Set();
      i.set(n, s);
    } else
      s = i.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(n, s));
    s.has(u) || (Id = !0, s.add(u), l = jy.bind(null, l, n, u), n.then(l, l));
  }
  function jy(l, n, u) {
    var i = l.pingCache;
    i !== null && i.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ce === l && (_t & u) === u && (me === 4 || me === 3 && (_t & 62914560) === _t && 300 > Ol() - Bn ? (wt & 2) === 0 && pu(l, 0) : Pd |= u, Ce === _t && (Ce = 0)), vu(l);
  }
  function vv(l, n) {
    n === 0 && (n = li()), l = Xu(l, n), l !== null && (ho(l, n), vu(l));
  }
  function xa(l) {
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
        throw Error(R(314));
    }
    i !== null && i.delete(n), vv(l, u);
  }
  function Sv(l, n) {
    return re(l, n);
  }
  var nf = null, Xi = null, Gy = !1, uh = !1, Xy = !1, ec = 0;
  function vu(l) {
    l !== Xi && l.next === null && (Xi === null ? nf = Xi = l : Xi = Xi.next = l), uh = !0, Gy || (Gy = !0, ks());
  }
  function lc(l, n) {
    if (!Xy && uh) {
      Xy = !0;
      do
        for (var u = !1, i = nf; i !== null; ) {
          if (l !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = i.suspendedLanes, v = i.pingedLanes;
              r = (1 << 31 - Ll(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Qi(i, r));
          } else
            r = _t, r = Ve(
              i,
              i === ce ? r : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (r & 3) === 0 || hn(i, r) || (u = !0, Qi(i, r));
          i = i.next;
        }
      while (u);
      Xy = !1;
    }
  }
  function ch() {
    Qy();
  }
  function Qy() {
    uh = Gy = !1;
    var l = 0;
    ec !== 0 && Fg() && (l = ec);
    for (var n = Ol(), u = null, i = nf; i !== null; ) {
      var s = i.next, r = Vy(i, n);
      r === 0 ? (i.next = null, u === null ? nf = s : u.next = s, s === null && (Xi = u)) : (u = i, (l !== 0 || (r & 3) !== 0) && (uh = !0)), i = s;
    }
    ll !== 0 && ll !== 5 || lc(l), ec !== 0 && (ec = 0);
  }
  function Vy(l, n) {
    for (var u = l.suspendedLanes, i = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ll(r), v = 1 << m, T = s[m];
      T === -1 ? ((v & u) === 0 || (v & i) !== 0) && (s[m] = ro(v, n)) : T <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = ce, u = _t, u = Ve(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i = l.callbackNode, u === 0 || l === n && (Pt === 2 || Pt === 9) || l.cancelPendingCommit !== null)
      return i !== null && i !== null && cm(i), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || hn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (i !== null && cm(i), fm(u)) {
        case 2:
        case 8:
          u = Yr;
          break;
        case 32:
          u = rc;
          break;
        case 268435456:
          u = im;
          break;
        default:
          u = rc;
      }
      return i = Fs.bind(null, l), u = re(u, i), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return i !== null && i !== null && cm(i), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Fs(l, n) {
    if (ll !== 0 && ll !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (af() && l.callbackNode !== u)
      return null;
    var i = _t;
    return i = Ve(
      l,
      l === ce ? i : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i === 0 ? null : (ev(l, i, n), Vy(l, Ol()), l.callbackNode != null && l.callbackNode === u ? Fs.bind(null, l) : null);
  }
  function Qi(l, n) {
    if (af()) return null;
    ev(l, n, !0);
  }
  function ks() {
    Mv(function() {
      (wt & 6) !== 0 ? re(
        qr,
        ch
      ) : Qy();
    });
  }
  function ih() {
    if (ec === 0) {
      var l = zc;
      l === 0 && (l = xu, xu <<= 1, (xu & 261888) === 0 && (xu = 256)), ec = l;
    }
    return ec;
  }
  function bv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Wa("" + l);
  }
  function Vi(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Is(l, n, u, i, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = bv(
        (s[wl] || null).action
      ), m = i.submitter;
      m && (n = (n = m[wl] || null) ? bv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new as(
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
                if (ec !== 0) {
                  var T = m ? Vi(s, m) : new FormData(s);
                  Vo(
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
                typeof r == "function" && (v.preventDefault(), T = m ? Vi(s, m) : new FormData(s), Vo(
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
  for (var oh = 0; oh < Mo.length; oh++) {
    var uf = Mo[oh], Zy = uf.toLowerCase(), Ly = uf[0].toUpperCase() + uf.slice(1);
    Kl(
      Zy,
      "on" + Ly
    );
  }
  Kl(os, "onAnimationEnd"), Kl(qm, "onAnimationIteration"), Kl(od, "onAnimationStart"), Kl("dblclick", "onDoubleClick"), Kl("focusin", "onFocus"), Kl("focusout", "onBlur"), Kl(vi, "onTransitionRun"), Kl(fs, "onTransitionStart"), Kl(kn, "onTransitionCancel"), Kl(Cp, "onTransitionEnd"), Jn("onMouseEnter", ["mouseout", "mouseover"]), Jn("onMouseLeave", ["mouseout", "mouseover"]), Jn("onPointerEnter", ["pointerout", "pointerover"]), Jn("onPointerLeave", ["pointerout", "pointerover"]), yc(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), yc(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), yc("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), yc(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), yc(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), yc(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var cf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Tv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cf)
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
              gi(q);
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
              gi(q);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function Ht(l, n) {
    var u = n[Qr];
    u === void 0 && (u = n[Qr] = /* @__PURE__ */ new Set());
    var i = l + "__bubble";
    u.has(i) || (Ps(n, l, 2, !1), u.add(i));
  }
  function wy(l, n, u) {
    var i = 0;
    n && (i |= 4), Ps(
      u,
      l,
      i,
      n
    );
  }
  var fh = "_reactListening" + Math.random().toString(36).slice(2);
  function of(l) {
    if (!l[fh]) {
      l[fh] = !0, ci.forEach(function(u) {
        u !== "selectionchange" && (Tv.has(u) || wy(u, !1, l), wy(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[fh] || (n[fh] = !0, wy("selectionchange", !1, n));
    }
  }
  function Ps(l, n, u, i) {
    switch (or(n)) {
      case 2:
        var s = Su;
        break;
      case 8:
        s = bu;
        break;
      default:
        s = Ul;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !es || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), i ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Jy(l, n, u, i, s) {
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
            if (m = ai(v), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              i = r = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    gm(function() {
      var _ = r, q = Wr(u), X = [];
      t: {
        var C = In.get(l);
        if (C !== void 0) {
          var x = as, P = l;
          switch (l) {
            case "keypress":
              if (kr(u) === 0) break t;
            case "keydown":
            case "keyup":
              x = ed;
              break;
            case "focusin":
              P = "focus", x = Pr;
              break;
            case "focusout":
              P = "blur", x = Pr;
              break;
            case "beforeblur":
            case "afterblur":
              x = Pr;
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
              x = Eo;
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
            case os:
            case qm:
            case od:
              x = Tp;
              break;
            case Cp:
              x = Lg;
              break;
            case "scroll":
            case "scrollend":
              x = Vg;
              break;
            case "wheel":
              x = wg;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = si;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = gn;
              break;
            case "toggle":
            case "beforetoggle":
              x = Mm;
          }
          var st = (n & 4) !== 0, oe = !st && (l === "scroll" || l === "scrollend"), M = st ? C !== null ? C + "Capture" : null : C;
          st = [];
          for (var z = _, U; z !== null; ) {
            var G = z;
            if (U = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || U === null || M === null || (G = sl(z, M), G != null && st.push(
              tr(z, G, U)
            )), oe) break;
            z = z.return;
          }
          0 < st.length && (C = new x(
            C,
            P,
            null,
            u,
            q
          ), X.push({ event: C, listeners: st }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (C = l === "mouseover" || l === "pointerover", x = l === "mouseout" || l === "pointerout", C && u !== $r && (P = u.relatedTarget || u.fromElement) && (ai(P) || P[hc]))
            break t;
          if ((x || C) && (C = q.window === q ? q : (C = q.ownerDocument) ? C.defaultView || C.parentWindow : window, x ? (P = u.relatedTarget || u.toElement, x = _, P = P ? ai(P) : null, P !== null && (oe = jt(P), st = P.tag, P !== oe || st !== 5 && st !== 27 && st !== 6) && (P = null)) : (x = null, P = _), x !== P)) {
            if (st = Eo, G = "onMouseLeave", M = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (st = gn, G = "onPointerLeave", M = "onPointerEnter", z = "pointer"), oe = x == null ? C : mo(x), U = P == null ? C : mo(P), C = new st(
              G,
              z + "leave",
              x,
              u,
              q
            ), C.target = oe, C.relatedTarget = U, G = null, ai(q) === _ && (st = new st(
              M,
              z + "enter",
              P,
              u,
              q
            ), st.target = U, st.relatedTarget = oe, G = st), oe = G, x && P)
              e: {
                for (st = Av, M = x, z = P, U = 0, G = M; G; G = st(G))
                  U++;
                G = 0;
                for (var ut = z; ut; ut = st(ut))
                  G++;
                for (; 0 < U - G; )
                  M = st(M), U--;
                for (; 0 < G - U; )
                  z = st(z), G--;
                for (; U--; ) {
                  if (M === z || z !== null && M === z.alternate) {
                    st = M;
                    break e;
                  }
                  M = st(M), z = st(z);
                }
                st = null;
              }
            else st = null;
            x !== null && sh(
              X,
              C,
              x,
              st,
              !1
            ), P !== null && oe !== null && sh(
              X,
              oe,
              P,
              st,
              !0
            );
          }
        }
        t: {
          if (C = _ ? mo(_) : window, x = C.nodeName && C.nodeName.toLowerCase(), x === "select" || x === "input" && C.type === "file")
            var Zt = Hm;
          else if (Fn(C))
            if (nd)
              Zt = yi;
            else {
              Zt = Up;
              var tt = Rp;
            }
          else
            x = C.nodeName, !x || x.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? _ && vm(_.elementType) && (Zt = Hm) : Zt = Sc;
          if (Zt && (Zt = Zt(l, _))) {
            Cm(
              X,
              Zt,
              u,
              q
            );
            break t;
          }
          tt && tt(l, C, _), l === "focusout" && _ && C.type === "number" && _.memoizedProps.value != null && ii(C, "number", C.value);
        }
        switch (tt = _ ? mo(_) : window, l) {
          case "focusin":
            (Fn(tt) || tt.contentEditable === "true") && (Tc = tt, Do = _, Ia = null);
            break;
          case "focusout":
            Ia = Do = Tc = null;
            break;
          case "mousedown":
            bn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bn = !1, id(X, u, q);
            break;
          case "selectionchange":
            if (is) break;
          case "keydown":
          case "keyup":
            id(X, u, q);
        }
        var St;
        if (Ao)
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
          di ? ad(l, u) && (At = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (At = "onCompositionStart");
        At && (Rm && u.locale !== "ko" && (di || At !== "onCompositionStart" ? At === "onCompositionEnd" && di && (St = bm()) : (ju = q, Sm = "value" in ju ? ju.value : ju.textContent, di = !0)), tt = er(_, At), 0 < tt.length && (At = new Ep(
          At,
          l,
          null,
          u,
          q
        ), X.push({ event: At, listeners: tt }), St ? At.data = St : (St = Um(u), St !== null && (At.data = St)))), (St = ql ? Mp(l, u) : Jg(l, u)) && (At = er(_, "onBeforeInput"), 0 < At.length && (tt = new Ep(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          q
        ), X.push({
          event: tt,
          listeners: At
        }), tt.data = St)), Is(
          X,
          l,
          _,
          u,
          q
        );
      }
      Ev(X, n);
    });
  }
  function tr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function er(l, n) {
    for (var u = n + "Capture", i = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = sl(l, u), s != null && i.unshift(
        tr(l, s, r)
      ), s = sl(l, n), s != null && i.push(
        tr(l, s, r)
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
  function sh(l, n, u, i, s) {
    for (var r = n._reactName, m = []; u !== null && u !== i; ) {
      var v = u, T = v.alternate, _ = v.stateNode;
      if (v = v.tag, T !== null && T === i) break;
      v !== 5 && v !== 26 && v !== 27 || _ === null || (T = _, s ? (_ = sl(u, r), _ != null && m.unshift(
        tr(u, _, T)
      )) : s || (_ = sl(u, r), _ != null && m.push(
        tr(u, _, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var zv = /\r\n?/g, Ky = /\u0000|\uFFFD/g;
  function $y(l) {
    return (typeof l == "string" ? l : "" + l).replace(zv, `
`).replace(Ky, "");
  }
  function Wy(l, n) {
    return n = $y(n), $y(l) === n;
  }
  function ie(l, n, u, i, s, r) {
    switch (u) {
      case "children":
        typeof i == "string" ? n === "body" || n === "textarea" && i === "" || Kn(l, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && Kn(l, "" + i);
        break;
      case "className":
        wr(l, "class", i);
        break;
      case "tabIndex":
        wr(l, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        wr(l, u, i);
        break;
      case "style":
        pp(l, i, r);
        break;
      case "data":
        if (n !== "object") {
          wr(l, "data", i);
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
        i = Wa("" + i), l.setAttribute(u, i);
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
          typeof r == "function" && (u === "formAction" ? (n !== "input" && ie(l, n, "name", s.name, s, null), ie(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), ie(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), ie(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (ie(l, n, "encType", s.encType, s, null), ie(l, n, "method", s.method, s, null), ie(l, n, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = Wa("" + i), l.setAttribute(u, i);
        break;
      case "onClick":
        i != null && (l.onclick = yn);
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
            throw Error(R(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(R(60));
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
        u = Wa("" + i), l.setAttributeNS(
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
        Ht("beforetoggle", l), Ht("toggle", l), vo(l, "popover", i);
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
        vo(l, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Qg.get(u) || u, vo(l, u, i));
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
            throw Error(R(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(R(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Kn(l, i) : (typeof i == "number" || typeof i == "bigint") && Kn(l, "" + i);
        break;
      case "onScroll":
        i != null && Ht("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Ht("scrollend", l);
        break;
      case "onClick":
        i != null && (l.onclick = yn);
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
        if (!mc.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[wl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof i == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, i, s);
              break t;
            }
            u in l ? l[u] = i : i === !0 ? l.setAttribute(u, "") : vo(l, u, i);
          }
    }
  }
  function Rl(l, n, u) {
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
                  throw Error(R(137, n));
                default:
                  ie(l, n, r, m, u, null);
              }
          }
        s && ie(l, n, "srcSet", u.srcSet, u, null), i && ie(l, n, "src", u.src, u, null);
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
                    throw Error(R(137, n));
                  break;
                default:
                  ie(l, n, i, q, u, null);
              }
          }
        If(
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
                ie(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!i, n != null ? go(l, !!i, n, !1) : u != null && go(l, !!i, u, !0);
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
                if (v != null) throw Error(R(91));
                break;
              default:
                ie(l, n, m, v, u, null);
            }
        pm(l, i, s, r);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (i = u[T], i != null) && (T === "selected" ? l.selected = i && typeof i != "function" && typeof i != "symbol" : ie(l, n, T, i, u, null));
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
        for (i = 0; i < cf.length; i++)
          Ht(cf[i], l);
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
                throw Error(R(137, n));
              default:
                ie(l, n, _, i, u, null);
            }
        return;
      default:
        if (vm(n)) {
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
      u.hasOwnProperty(v) && (i = u[v], i != null && ie(l, n, v, i, u, null));
  }
  function ky(l, n, u, i) {
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
          var X = u[x];
          if (u.hasOwnProperty(x) && X != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = X;
              default:
                i.hasOwnProperty(x) || ie(l, n, x, null, i, X);
            }
        }
        for (var C in i) {
          var x = i[C];
          if (X = u[C], i.hasOwnProperty(C) && (x != null || X != null))
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
                  throw Error(R(137, n));
                break;
              default:
                x !== X && ie(
                  l,
                  n,
                  C,
                  x,
                  i,
                  X
                );
            }
        }
        kf(
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
                i.hasOwnProperty(r) || ie(
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
                r !== T && ie(
                  l,
                  n,
                  s,
                  r,
                  i,
                  T
                );
            }
        n = v, u = m, i = x, C != null ? go(l, !!u, C, !1) : !!i != !!u && (n != null ? go(l, !!u, n, !0) : go(l, !!u, u ? [] : "", !1));
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
                ie(l, n, v, null, i, s);
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
                if (s != null) throw Error(R(91));
                break;
              default:
                s !== r && ie(l, n, m, s, i, r);
            }
        ym(l, C, x);
        return;
      case "option":
        for (var P in u)
          C = u[P], u.hasOwnProperty(P) && C != null && !i.hasOwnProperty(P) && (P === "selected" ? l.selected = !1 : ie(
            l,
            n,
            P,
            null,
            i,
            C
          ));
        for (T in i)
          C = i[T], x = u[T], i.hasOwnProperty(T) && C !== x && (C != null || x != null) && (T === "selected" ? l.selected = C && typeof C != "function" && typeof C != "symbol" : ie(
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
        for (var st in u)
          C = u[st], u.hasOwnProperty(st) && C != null && !i.hasOwnProperty(st) && ie(l, n, st, null, i, C);
        for (_ in i)
          if (C = i[_], x = u[_], i.hasOwnProperty(_) && C !== x && (C != null || x != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(R(137, n));
                break;
              default:
                ie(
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
        if (vm(n)) {
          for (var oe in u)
            C = u[oe], u.hasOwnProperty(oe) && C !== void 0 && !i.hasOwnProperty(oe) && Fy(
              l,
              n,
              oe,
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
    for (var M in u)
      C = u[M], u.hasOwnProperty(M) && C != null && !i.hasOwnProperty(M) && ie(l, n, M, null, i, C);
    for (X in i)
      C = i[X], x = u[X], !i.hasOwnProperty(X) || C === x || C == null && x == null || ie(l, n, X, C, i, x);
  }
  function rh(l) {
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
  function Iy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), i = 0; i < u.length; i++) {
        var s = u[i], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && rh(m)) {
          for (m = 0, v = s.responseEnd, i += 1; i < u.length; i++) {
            var T = u[i], _ = T.startTime;
            if (_ > v) break;
            var q = T.transferSize, X = T.initiatorType;
            q && rh(X) && (T = T.responseEnd, m += q * (T < v ? 1 : (v - _) / (T - _)));
          }
          if (--i, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var dh = null, hh = null;
  function Zc(l) {
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
  function Py(l, n) {
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
  function ff(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var mh = null;
  function Fg() {
    var l = window.event;
    return l && l.type === "popstate" ? l === mh ? !1 : (mh = l, !0) : (mh = null, !1);
  }
  var lr = typeof setTimeout == "function" ? setTimeout : void 0, Ov = typeof clearTimeout == "function" ? clearTimeout : void 0, Zi = typeof Promise == "function" ? Promise : void 0, Mv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zi < "u" ? function(l) {
    return Zi.resolve(null).then(l).catch(t0);
  } : lr;
  function t0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Nn(l) {
    return l === "head";
  }
  function e0(l, n) {
    var u = n, i = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (i === 0) {
            l.removeChild(s), Tf(n);
            return;
          }
          i--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          i++;
        else if (u === "html")
          Li(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Li(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[wn] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && Li(l.ownerDocument.body);
      u = s;
    } while (u);
    Tf(n);
  }
  function Ke(l, n) {
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
  function ar(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ar(u), Vr(u);
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
  function kg(l, n, u, i) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (i) {
        if (!l[wn])
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
      if (l = ua(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Dt(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ua(l.nextSibling), l === null)) return null;
    return l;
  }
  function Rv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = ua(l.nextSibling), l === null)) return null;
    return l;
  }
  function cn(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Lc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function sf(l, n) {
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
  function ua(l) {
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
  var nr = null;
  function yh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return ua(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function xn(l) {
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
  function rf(l, n, u) {
    switch (n = Zc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(R(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(R(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(R(454));
        return l;
      default:
        throw Error(R(451));
    }
  }
  function Li(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Vr(l);
  }
  var ya = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Set();
  function Gl(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var qn = Q.d;
  Q.d = {
    f: Ig,
    r: Uv,
    D: N,
    C: Wt,
    L: Pg,
    m: l0,
    X: ac,
    S: a0,
    M: wc
  };
  function Ig() {
    var l = qn.f(), n = ef();
    return l || n;
  }
  function Uv(l) {
    var n = ni(l);
    n !== null && n.tag === 5 && n.type === "form" ? ue(n) : qn.r(l);
  }
  var df = typeof document > "u" ? null : document;
  function Ie(l, n, u) {
    var i = df;
    if (i && typeof n == "string" && n) {
      var s = Ea(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), ur.has(s) || (ur.add(s), l = { rel: l, crossOrigin: u, href: n }, i.querySelector(s) === null && (n = i.createElement("link"), Rl(n, "link", l), Ft(n), i.head.appendChild(n)));
    }
  }
  function N(l) {
    qn.D(l), Ie("dns-prefetch", l, null);
  }
  function Wt(l, n) {
    qn.C(l, n), Ie("preconnect", l, n);
  }
  function Pg(l, n, u) {
    qn.L(l, n, u);
    var i = df;
    if (i && l && n) {
      var s = 'link[rel="preload"][as="' + Ea(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Ea(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Ea(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Ea(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = qa(l);
          break;
        case "script":
          r = wi(l);
      }
      ya.has(r) || (l = ft(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), ya.set(r, l), i.querySelector(s) !== null || n === "style" && i.querySelector(Jc(r)) || n === "script" && i.querySelector(yf(r)) || (n = i.createElement("link"), Rl(n, "link", l), Ft(n), i.head.appendChild(n)));
    }
  }
  function l0(l, n) {
    qn.m(l, n);
    var u = df;
    if (u && l) {
      var i = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Ea(i) + '"][href="' + Ea(l) + '"]', r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = wi(l);
      }
      if (!ya.has(r) && (l = ft({ rel: "modulepreload", href: l }, n), ya.set(r, l), u.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(yf(r)))
              return;
        }
        i = u.createElement("link"), Rl(i, "link", l), Ft(i), u.head.appendChild(i);
      }
    }
  }
  function a0(l, n, u) {
    qn.S(l, n, u);
    var i = df;
    if (i && l) {
      var s = ui(i).hoistableStyles, r = qa(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = i.querySelector(
          Jc(r)
        ))
          v.loading = 5;
        else {
          l = ft(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = ya.get(r)) && ph(l, u);
          var T = m = i.createElement("link");
          Ft(T), Rl(T, "link", l), T._p = new Promise(function(_, q) {
            T.onload = _, T.onerror = q;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, cr(m, n, i);
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
  function ac(l, n) {
    qn.X(l, n);
    var u = df;
    if (u && l) {
      var i = ui(u).hoistableScripts, s = wi(l), r = i.get(s);
      r || (r = u.querySelector(yf(s)), r || (l = ft({ src: l, async: !0 }, n), (n = ya.get(s)) && vh(l, n), r = u.createElement("script"), Ft(r), Rl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function wc(l, n) {
    qn.M(l, n);
    var u = df;
    if (u && l) {
      var i = ui(u).hoistableScripts, s = wi(l), r = i.get(s);
      r || (r = u.querySelector(yf(s)), r || (l = ft({ src: l, async: !0, type: "module" }, n), (n = ya.get(s)) && vh(l, n), r = u.createElement("script"), Ft(r), Rl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function hf(l, n, u, i) {
    var s = (s = Ja.current) ? Gl(s) : null;
    if (!s) throw Error(R(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = qa(u.href), u = ui(
          s
        ).hoistableStyles, i = u.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = qa(u.href);
          var r = ui(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Jc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), ya.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ya.set(l, u), r || _v(
            s,
            l,
            u,
            m.state
          ))), n && i === null)
            throw Error(R(528, ""));
          return m;
        }
        if (n && i !== null)
          throw Error(R(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = wi(u), u = ui(
          s
        ).hoistableScripts, i = u.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(R(444, l));
    }
  }
  function qa(l) {
    return 'href="' + Ea(l) + '"';
  }
  function Jc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function mf(l) {
    return ft({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function _v(l, n, u, i) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = l.createElement("link"), i.preload = n, n.addEventListener("load", function() {
      return i.loading |= 1;
    }), n.addEventListener("error", function() {
      return i.loading |= 2;
    }), Rl(n, "link", u), Ft(n), l.head.appendChild(n));
  }
  function wi(l) {
    return '[src="' + Ea(l) + '"]';
  }
  function yf(l) {
    return "script[async]" + l;
  }
  function n0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var i = l.querySelector(
            'style[data-href~="' + Ea(u.href) + '"]'
          );
          if (i)
            return n.instance = i, Ft(i), i;
          var s = ft({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return i = (l.ownerDocument || l).createElement(
            "style"
          ), Ft(i), Rl(i, "style", s), cr(i, u.precedence, l), n.instance = i;
        case "stylesheet":
          s = qa(u.href);
          var r = l.querySelector(
            Jc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Ft(r), r;
          i = mf(u), (s = ya.get(s)) && ph(i, s), r = (l.ownerDocument || l).createElement("link"), Ft(r);
          var m = r;
          return m._p = new Promise(function(v, T) {
            m.onload = v, m.onerror = T;
          }), Rl(r, "link", i), n.state.loading |= 4, cr(r, u.precedence, l), n.instance = r;
        case "script":
          return r = wi(u.src), (s = l.querySelector(
            yf(r)
          )) ? (n.instance = s, Ft(s), s) : (i = u, (s = ya.get(r)) && (i = ft({}, u), vh(i, s)), l = l.ownerDocument || l, s = l.createElement("script"), Ft(s), Rl(s, "link", i), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(R(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, cr(i, u.precedence, l));
    return n.instance;
  }
  function cr(l, n, u) {
    for (var i = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, r = s, m = 0; m < i.length; m++) {
      var v = i[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function ph(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function vh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var pf = null;
  function u0(l, n, u) {
    if (pf === null) {
      var i = /* @__PURE__ */ new Map(), s = pf = /* @__PURE__ */ new Map();
      s.set(u, i);
    } else
      s = pf, i = s.get(u), i || (i = /* @__PURE__ */ new Map(), s.set(u, i));
    if (i.has(l)) return i;
    for (i.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[wn] || r[ne] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = i.get(m);
        v ? v.push(r) : i.set(m, [r]);
      }
    }
    return i;
  }
  function gh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function c0(l, n, u) {
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
  function pa(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function gu(l, n, u, i) {
    if (u.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = qa(i.href), r = n.querySelector(
          Jc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Sh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Ft(r);
          return;
        }
        r = n.ownerDocument || n, i = mf(i), (s = ya.get(s)) && ph(i, s), r = r.createElement("link"), Ft(r);
        var m = r;
        m._p = new Promise(function(v, T) {
          m.onload = v, m.onerror = T;
        }), Rl(r, "link", i), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Sh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Ya = 0;
  function i0(l, n) {
    return l.stylesheets && l.count === 0 && Th(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var i = setTimeout(function() {
        if (l.stylesheets && Th(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Ya === 0 && (Ya = 62500 * Iy());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Th(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Ya ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function Sh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Th(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var bh = null;
  function Th(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, bh = /* @__PURE__ */ new Map(), n.forEach(vl, l), bh = null, Sh.call(l));
  }
  function vl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = bh.get(l);
      if (u) var i = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), bh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), i = m);
        }
        i && u.set(null, i);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || i, r === i && u.set(null, s), u.set(m, s), this.count++, i = Sh.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var ir = {
    $$typeof: Xe,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function o0(l, n, u, i, s, r, m, v, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $f(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $f(0), this.hiddenUpdates = $f(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Eh(l, n, u, i, s, r, m, v, T, _, q, X) {
    return l = new o0(
      l,
      n,
      u,
      m,
      T,
      _,
      q,
      X,
      v
    ), n = 1, r === !0 && (n |= 24), r = xe(3, null, null, n), l.current = r, r.stateNode = l, n = ys(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: i,
      isDehydrated: u,
      cache: n
    }, Es(r), l;
  }
  function Ji(l) {
    return l ? (l = $l, l) : $l;
  }
  function Cv(l, n, u, i, s, r) {
    s = Ji(s), i.context === null ? i.context = s : i.pendingContext = s, i = Ku(n), i.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (i.callback = r), u = Ua(l, i, n), u !== null && (na(u, l, n), _c(u, l, n));
  }
  function Ah(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function f0(l, n) {
    Ah(l, n), (l = l.alternate) && Ah(l, n);
  }
  function Hv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Xu(l, 67108864);
      n !== null && na(n, l, 67108864), f0(l, 67108864);
    }
  }
  function Ki(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ma();
      n = Gr(n);
      var u = Xu(l, n);
      u !== null && na(u, l, n), f0(l, n);
    }
  }
  var al = !0;
  function Su(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = Q.p;
    try {
      Q.p = 2, Ul(l, n, u, i);
    } finally {
      Q.p = r, O.T = s;
    }
  }
  function bu(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = Q.p;
    try {
      Q.p = 8, Ul(l, n, u, i);
    } finally {
      Q.p = r, O.T = s;
    }
  }
  function Ul(l, n, u, i) {
    if (al) {
      var s = s0(i);
      if (s === null)
        Jy(
          l,
          n,
          i,
          zh,
          u
        ), nc(l, i);
      else if (t1(
        s,
        l,
        n,
        u,
        i
      ))
        i.stopPropagation();
      else if (nc(l, i), n & 4 && -1 < ca.indexOf(l)) {
        for (; s !== null; ) {
          var r = ni(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = $a(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Ll(m);
                      v.entanglements[1] |= T, m &= ~T;
                    }
                    vu(r), (wt & 6) === 0 && ($t = Ol() + 500, lc(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = Xu(r, 2), v !== null && na(v, r, 2), ef(), f0(r, 2);
            }
          if (r = s0(i), r === null && Jy(
            l,
            n,
            i,
            zh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else
        Jy(
          l,
          n,
          i,
          null,
          u
        );
    }
  }
  function s0(l) {
    return l = Wr(l), vf(l);
  }
  var zh = null;
  function vf(l) {
    if (zh = null, l = ai(l), l !== null) {
      var n = jt(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = le(n), l !== null) return l;
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
    return zh = l, null;
  }
  function or(l) {
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
        switch (jg()) {
          case qr:
            return 2;
          case Yr:
            return 8;
          case rc:
          case Gg:
            return 32;
          case im:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1, nl = null, _l = null, Xl = null, Kc = /* @__PURE__ */ new Map(), on = /* @__PURE__ */ new Map(), ze = [], ca = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function nc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        nl = null;
        break;
      case "dragenter":
      case "dragleave":
        _l = null;
        break;
      case "mouseover":
      case "mouseout":
        Xl = null;
        break;
      case "pointerover":
      case "pointerout":
        Kc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        on.delete(n.pointerId);
    }
  }
  function $i(l, n, u, i, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: i,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = ni(n), n !== null && Hv(n)), l) : (l.eventSystemFlags |= i, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function t1(l, n, u, i, s) {
    switch (n) {
      case "focusin":
        return nl = $i(
          nl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "dragenter":
        return _l = $i(
          _l,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "mouseover":
        return Xl = $i(
          Xl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Kc.set(
          r,
          $i(
            Kc.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, on.set(
          r,
          $i(
            on.get(r) || null,
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
    var n = ai(l.target);
    if (n !== null) {
      var u = jt(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = le(u), n !== null) {
            l.blockedOn = n, sm(l.priority, function() {
              Ki(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = L(u), n !== null) {
            l.blockedOn = n, sm(l.priority, function() {
              Ki(u);
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
  function fr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = s0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var i = new u.constructor(
          u.type,
          u
        );
        $r = i, u.target.dispatchEvent(i), $r = null;
      } else
        return n = ni(u), n !== null && Hv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Sf(l, n, u) {
    fr(l) && u.delete(n);
  }
  function Nv() {
    gf = !1, nl !== null && fr(nl) && (nl = null), _l !== null && fr(_l) && (_l = null), Xl !== null && fr(Xl) && (Xl = null), Kc.forEach(Sf), on.forEach(Sf);
  }
  function Tu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, gf || (gf = !0, Z.unstable_scheduleCallback(
      Z.unstable_NormalPriority,
      Nv
    )));
  }
  var bf = null;
  function xv(l) {
    bf !== l && (bf = l, Z.unstable_scheduleCallback(
      Z.unstable_NormalPriority,
      function() {
        bf === l && (bf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], i = l[n + 1], s = l[n + 2];
          if (typeof i != "function") {
            if (vf(i || u) === null)
              continue;
            break;
          }
          var r = ni(u);
          r !== null && (l.splice(n, 3), n -= 3, Vo(
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
  function Tf(l) {
    function n(T) {
      return Tu(T, l);
    }
    nl !== null && Tu(nl, l), _l !== null && Tu(_l, l), Xl !== null && Tu(Xl, l), Kc.forEach(n), on.forEach(n);
    for (var u = 0; u < ze.length; u++) {
      var i = ze[u];
      i.blockedOn === l && (i.blockedOn = null);
    }
    for (; 0 < ze.length && (u = ze[0], u.blockedOn === null); )
      Bv(u), u.blockedOn === null && ze.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (i = 0; i < u.length; i += 3) {
        var s = u[i], r = u[i + 1], m = s[wl] || null;
        if (typeof r == "function")
          m || xv(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[wl] || null)
              v = m.formAction;
            else if (vf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[i + 1] = v : (u.splice(i, 3), i -= 3), xv(u);
        }
      }
  }
  function r0() {
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
  function Dh(l) {
    this._internalRoot = l;
  }
  Oh.prototype.render = Dh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(R(409));
    var u = n.current, i = ma();
    Cv(u, i, l, n, null, null);
  }, Oh.prototype.unmount = Dh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Cv(l.current, 2, null, l, null, null), ef(), n[hc] = null;
    }
  };
  function Oh(l) {
    this._internalRoot = l;
  }
  Oh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Xr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < ze.length && n !== 0 && n < ze[u].priority; u++) ;
      ze.splice(u, 0, l), u === 0 && Bv(l);
    }
  };
  var d0 = I.version;
  if (d0 !== "19.2.4")
    throw Error(
      R(
        527,
        d0,
        "19.2.4"
      )
    );
  Q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(R(188)) : (l = Object.keys(l).join(","), Error(R(268, l)));
    return l = il(n), l = l !== null ? La(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var qv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sr.isDisabled && sr.supportsFiber)
      try {
        ei = sr.inject(
          qv
        ), oa = sr;
      } catch {
      }
  }
  return cp.createRoot = function(l, n) {
    if (!Tt(l)) throw Error(R(299));
    var u = !1, i = "", s = Yd, r = hy, m = jd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Eh(
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
      r0
    ), l[hc] = n.current, of(l), new Dh(n);
  }, cp.hydrateRoot = function(l, n, u) {
    if (!Tt(l)) throw Error(R(299));
    var i = !1, s = "", r = Yd, m = hy, v = jd, T = null;
    return u != null && (u.unstable_strictMode === !0 && (i = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Eh(
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
      r0
    ), n.context = Ji(null), u = n.current, i = ma(), i = Gr(i), s = Ku(i), s.callback = null, Ua(u, s, i), u = i, n.current.lanes = u, ho(n, u), vu(n), l[hc] = n.current, of(l), new Oh(n);
  }, cp.version = "19.2.4", cp;
}
var ip = {};
var N2;
function SE() {
  return N2 || (N2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function Z(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function I(t, e, a, c) {
      if (a >= e.length) return c;
      var o = e[a], f = Ie(t) ? t.slice() : Dt({}, t);
      return f[o] = I(t[o], e, a + 1, c), f;
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
        return R(t, e, a, 0);
      }
    }
    function R(t, e, a, c) {
      var o = e[c], f = Ie(t) ? t.slice() : Dt({}, t);
      return c + 1 === e.length ? (f[a[c]] = f[o], Ie(f) ? f.splice(o, 1) : delete f[o]) : f[o] = R(
        t[o],
        e,
        a,
        c + 1
      ), f;
    }
    function Tt(t, e, a) {
      var c = e[a], o = Ie(t) ? t.slice() : Dt({}, t);
      return a + 1 === e.length ? (Ie(o) ? o.splice(c, 1) : delete o[c], o) : (o[c] = Tt(t[c], e, a + 1), o);
    }
    function jt() {
      return !1;
    }
    function le() {
      return null;
    }
    function L() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function se() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function il() {
    }
    function La() {
    }
    function ft(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function Gt(t, e, a, c) {
      return new Jg(t, e, a, c);
    }
    function Re(t, e) {
      t.context === Df && (sh(t.current, 2, e, t, null, null), Na());
    }
    function Ue(t, e) {
      if (zu !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, Qs(), Mp(
          t.current,
          e,
          a
        ), Na();
      }
    }
    function Bl(t) {
      zu = t;
    }
    function ve(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function ee(t) {
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
    function wa(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Xe(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Dl(t) {
      if (ee(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function ga(t) {
      var e = t.alternate;
      if (!e) {
        if (e = ee(t), e === null)
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
            if (f === a) return Dl(o), t;
            if (f === c) return Dl(o), e;
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
    function Nl(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = Nl(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function We(t) {
      return t === null || typeof t != "object" ? null : (t = Uv && t[Uv] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function qt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === df ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case sf:
          return "Fragment";
        case nr:
          return "Profiler";
        case ua:
          return "StrictMode";
        case Li:
          return "Suspense";
        case ya:
          return "SuspenseList";
        case qn:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case Lc:
            return "Portal";
          case xn:
            return t.displayName || "Context";
          case yh:
            return (t._context.displayName || "Context") + ".Consumer";
          case rf:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ur:
            return e = t.displayName || null, e !== null ? e : qt(t.type) || "Memo";
          case Gl:
            e = t._payload, t = t._init;
            try {
              return qt(t(e));
            } catch {
            }
        }
      return null;
    }
    function ol(t) {
      return typeof t.tag == "number" ? at(t) : typeof t.name == "string" ? t.name : null;
    }
    function at(t) {
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
          return qt(e);
        case 8:
          return e === ua ? "StrictMode" : "Mode";
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
            return at(t.return);
      }
      return null;
    }
    function Qe(t) {
      return { current: t };
    }
    function Bt(t, e) {
      0 > ac ? console.error("Unexpected pop.") : (e !== a0[ac] && console.error("Unexpected Fiber popped."), t.current = l0[ac], l0[ac] = null, a0[ac] = null, ac--);
    }
    function Ut(t, e, a) {
      ac++, l0[ac] = t.current, a0[ac] = a, t.current = e;
    }
    function xl(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function fl(t, e) {
      Ut(qa, e, t), Ut(hf, t, t), Ut(wc, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? lv(e) : oo;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = lv(e), e = tc(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = lm;
                break;
              case "math":
                e = Mg;
                break;
              default:
                e = oo;
            }
      }
      a = a.toLowerCase(), a = mm(null, a), a = {
        context: e,
        ancestorInfo: a
      }, Bt(wc, t), Ut(wc, a, t);
    }
    function O(t) {
      Bt(wc, t), Bt(hf, t), Bt(qa, t);
    }
    function Q() {
      return xl(wc.current);
    }
    function w(t) {
      t.memoizedState !== null && Ut(Jc, t, t);
      var e = xl(wc.current), a = t.type, c = tc(e.context, a);
      a = mm(e.ancestorInfo, a), c = { context: c, ancestorInfo: a }, e !== c && (Ut(hf, t, t), Ut(wc, c, t));
    }
    function ot(t) {
      hf.current === t && (Bt(wc, t), Bt(hf, t)), Jc.current === t && (Bt(Jc, t), ep._currentValue = Br);
    }
    function ht() {
    }
    function j() {
      if (mf === 0) {
        _v = console.log, wi = console.info, yf = console.warn, n0 = console.error, cr = console.group, ph = console.groupCollapsed, vh = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: ht,
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
      mf++;
    }
    function k() {
      if (mf--, mf === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Dt({}, t, { value: _v }),
          info: Dt({}, t, { value: wi }),
          warn: Dt({}, t, { value: yf }),
          error: Dt({}, t, { value: n0 }),
          group: Dt({}, t, { value: cr }),
          groupCollapsed: Dt({}, t, { value: ph }),
          groupEnd: Dt({}, t, { value: vh })
        });
      }
      0 > mf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function lt(t) {
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
    function nt(t) {
      if (pf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          pf = e && e[1] || "", u0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + pf + t + u0;
    }
    function Ne(t, e) {
      if (!t || gh) return "";
      var a = c0.get(t);
      if (a !== void 0) return a;
      gh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
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
                    return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), typeof t == "function" && c0.set(t, D), D;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        gh = !1, N.H = c, k(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? nt(p) : "", typeof t == "function" && c0.set(t, p), p;
    }
    function Ja(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return nt(t.type);
        case 16:
          return nt("Lazy");
        case 13:
          return t.child !== e && e !== null ? nt("Suspense Fallback") : nt("Suspense");
        case 19:
          return nt("SuspenseList");
        case 0:
        case 15:
          return Ne(t.type, !1);
        case 11:
          return Ne(t.type.render, !1);
        case 1:
          return Ne(t.type, !0);
        case 31:
          return nt("Activity");
        default:
          return "";
      }
    }
    function ge(t) {
      try {
        var e = "", a = null;
        do {
          e += Ja(t, a);
          var c = t._debugInfo;
          if (c)
            for (var o = c.length - 1; 0 <= o; o--) {
              var f = c[o];
              if (typeof f.name == "string") {
                var d = e;
                t: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var A = lt(p), D = A.lastIndexOf(`
`), S = D === -1 ? A : A.slice(D + 1);
                    if (S.indexOf(h) !== -1) {
                      var H = `
` + S;
                      break t;
                    }
                  }
                  H = nt(
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
    function Ka(t) {
      return (t = t ? t.displayName || t.name : "") ? nt(t) : "";
    }
    function Sa() {
      if (pa === null) return null;
      var t = pa._debugOwner;
      return t != null ? ol(t) : null;
    }
    function wf() {
      if (pa === null) return "";
      var t = pa;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += nt(t.type);
            break;
          case 13:
            e += nt("Suspense");
            break;
          case 19:
            e += nt("SuspenseList");
            break;
          case 31:
            e += nt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            t._debugOwner || e !== "" || (e += Ka(
              t.type
            ));
            break;
          case 11:
            t._debugOwner || e !== "" || (e += Ka(
              t.type.render
            ));
        }
        for (; t; )
          if (typeof t.tag == "number") {
            var a = t;
            t = a._debugOwner;
            var c = a._debugStack;
            if (t && c) {
              var o = lt(c);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + lt(f));
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
      var h = pa;
      Jf(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, c, o, f, d)
        ) : e(a, c, o, f, d);
      } finally {
        Jf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Jf(t) {
      N.getCurrentStack = t === null ? null : wf, gu = !1, pa = t;
    }
    function Kf(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function Zn(t) {
      try {
        return Pc(t), !1;
      } catch {
        return !0;
      }
    }
    function Pc(t) {
      return "" + t;
    }
    function ae(t, e) {
      if (Zn(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          Kf(t)
        ), Pc(t);
    }
    function nm(t, e) {
      if (Zn(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          Kf(t)
        ), Pc(t);
    }
    function Nr(t) {
      if (Zn(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Kf(t)
        ), Pc(t);
    }
    function um(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ki = e.inject(t), al = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function re(t) {
      if (typeof f0 == "function" && Hv(t), al && typeof al.setStrictMode == "function")
        try {
          al.setStrictMode(Ki, t);
        } catch (e) {
          Su || (Su = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function cm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (s0(t) / zh | 0) | 0;
    }
    function ti(t) {
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
    function xr(t, e, a) {
      var c = t.pendingLanes;
      if (c === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = c & 134217727;
      return h !== 0 ? (c = h & ~f, c !== 0 ? o = ti(c) : (d &= h, d !== 0 ? o = ti(d) : a || (a = h & ~t, a !== 0 && (o = ti(a))))) : (h = c & ~f, h !== 0 ? o = ti(h) : d !== 0 ? o = ti(d) : a || (a = c & ~t, a !== 0 && (o = ti(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function Ol(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function jg(t, e) {
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
    function qr() {
      var t = gf;
      return gf <<= 1, (gf & 62914560) === 0 && (gf = 4194304), t;
    }
    function Yr(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function rc(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Gg(t, e, a, c, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var A = 31 - Ul(a), D = 1 << A;
        h[A] = 0, y[A] = -1;
        var S = p[A];
        if (S !== null)
          for (p[A] = null, A = 0; A < S.length; A++) {
            var H = S[A];
            H !== null && (H.lane &= -536870913);
          }
        a &= ~D;
      }
      c !== 0 && im(t, c, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function im(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var c = 31 - Ul(e);
      t.entangledLanes |= e, t.entanglements[c] = t.entanglements[c] | 1073741824 | a & 261930;
    }
    function fp(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var c = 31 - Ul(a), o = 1 << c;
        o & e | t[c] & e && (t[c] |= e), a &= ~o;
      }
    }
    function sp(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : ei(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function ei(t) {
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
    function oa(t, e, a) {
      if (bu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var c = 31 - Ul(a), o = 1 << c;
          t[c].add(e), a &= ~o;
        }
    }
    function Nu(t, e) {
      if (bu)
        for (var a = t.pendingUpdatersLaneMap, c = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - Ul(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && c.has(d) || c.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function Ll(t) {
      return t &= -t, nl < t ? _l < t ? (t & 134217727) !== 0 ? Xl : Kc : _l : nl;
    }
    function rp() {
      var t = Wt.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? Xl : dh(t.type));
    }
    function dp(t, e) {
      var a = Wt.p;
      try {
        return Wt.p = t, e();
      } finally {
        Wt.p = a;
      }
    }
    function om(t) {
      delete t[ze], delete t[ca], delete t[$i], delete t[t1], delete t[Bv];
    }
    function xu(t) {
      var e = t[ze];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[nc] || a[ze]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = Xi(t); t !== null; ) {
              if (a = t[ze])
                return a;
              t = Xi(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function dn(t) {
      if (t = t[ze] || t[nc]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function dc(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function $a(t) {
      var e = t[fr];
      return e || (e = t[fr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function Ve(t) {
      t[Sf] = !0;
    }
    function hn(t, e) {
      ro(t, e), ro(t + "Capture", e);
    }
    function ro(t, e) {
      Tu[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), Tu[t] = e;
      var a = t.toLowerCase();
      for (bf[a] = t, t === "onDoubleClick" && (bf.ondblclick = t), t = 0; t < e.length; t++)
        Nv.add(e[t]);
    }
    function li(t, e) {
      xv[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function $f(t) {
      return Ya.call(Dh, t) ? !0 : Ya.call(r0, t) ? !1 : Tf.test(t) ? Dh[t] = !0 : (r0[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function ho(t, e, a) {
      if ($f(e)) {
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
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (ae(a, e), t === "" + a ? a : t);
      }
    }
    function jr(t, e, a) {
      if ($f(e))
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
          ae(a, e), t.setAttribute(e, "" + a);
        }
    }
    function Wf(t, e, a) {
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
        ae(a, e), t.setAttribute(e, "" + a);
      }
    }
    function Ln(t, e, a, c) {
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
        ae(c, a), t.setAttributeNS(e, a, "" + c);
      }
    }
    function ba(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return Nr(t), t;
        default:
          return "";
      }
    }
    function Gr(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function fm(t, e, a) {
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
            Nr(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: c.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Nr(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function Xr(t) {
      if (!t._valueTracker) {
        var e = Gr(t) ? "checked" : "value";
        t._valueTracker = fm(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function sm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), c = "";
      return t && (c = Gr(t) ? t.checked ? "true" : "false" : t.value), t = c, t !== a ? (e.setValue(t), !0) : !1;
    }
    function mn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function ne(t) {
      return t.replace(
        Oh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function wl(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || qv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Sa() || "A component",
        e.type
      ), qv = !0), e.value === void 0 || e.defaultValue === void 0 || d0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Sa() || "A component",
        e.type
      ), d0 = !0);
    }
    function hc(t, e, a, c, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (ae(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ba(e)) : t.value !== "" + ba(e) && (t.value = "" + ba(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? rm(t, d, ba(e)) : a != null ? rm(t, d, ba(a)) : c != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (ae(h, "name"), t.name = "" + ba(h)) : t.removeAttribute("name");
    }
    function Qr(t, e, a, c, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (ae(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          Xr(t);
          return;
        }
        a = a != null ? "" + ba(a) : "", e = e != null ? "" + ba(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      c = c ?? o, c = typeof c != "function" && typeof c != "symbol" && !!c, t.checked = h ? t.checked : !!c, t.defaultChecked = !!c, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (ae(d, "name"), t.name = d), Xr(t);
    }
    function rm(t, e, a) {
      e === "number" && mn(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function hp(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? ar.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || sr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), sr = !0);
    }
    function dm() {
      var t = Sa();
      return t ? `

Check the render method of \`` + t + "`." : "";
    }
    function wn(t, e, a, c) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < a.length; o++)
          e["$" + a[o]] = !0;
        for (a = 0; a < t.length; a++)
          o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && c && (t[a].defaultSelected = !0);
      } else {
        for (a = "" + ba(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, c && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Vr(t, e) {
      for (t = 0; t < i.length; t++) {
        var a = i[t];
        if (e[a] != null) {
          var c = Ie(e[a]);
          e.multiple && !c ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            dm()
          ) : !e.multiple && c && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            dm()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function ai(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Sa() || "A component"
      ), s = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function ni(t, e, a) {
      if (e != null && (e = "" + ba(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + ba(a) : "";
    }
    function mo(t, e, a, c) {
      if (e == null) {
        if (c != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Ie(c)) {
            if (1 < c.length)
              throw Error("<textarea> can only have at most one child.");
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), e = a;
      }
      a = ba(e), t.defaultValue = a, c = t.textContent, c === a && c !== "" && c !== null && (t.value = c), Xr(t);
    }
    function ui(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? ui(t.children[0], e) : t;
    }
    function Ft(t) {
      return "  " + "  ".repeat(t);
    }
    function ci(t) {
      return "+ " + "  ".repeat(t);
    }
    function mc(t) {
      return "- " + "  ".repeat(t);
    }
    function yc(t) {
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
    function Jn(t, e) {
      return r.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
    }
    function Zr(t, e, a) {
      var c = 120 - 2 * a;
      if (e === null)
        return ci(a) + Jn(t, c) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > c - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), ci(a) + Jn(t, c) + `
` + mc(a) + Jn(e, c) + `
`;
      }
      return Ft(a) + Jn(t, c) + `
`;
    }
    function Lr(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function yo(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (Ie(t)) return "[...]";
          if (t.$$typeof === cn)
            return (e = qt(t.type)) ? "<" + e + ">" : "<...>";
          var a = Lr(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var c in t)
              if (t.hasOwnProperty(c)) {
                var o = JSON.stringify(c);
                if (o !== '"' + c + '"' && (c = o), e -= c.length - 2, o = yo(
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
    function po(t, e) {
      return typeof t != "string" || r.test(t) ? "{" + yo(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function vo(t, e, a) {
      var c = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = po(
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
    function wr(t, e, a) {
      var c = "", o = Dt({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = yo(t[f], d);
          e.hasOwnProperty(f) ? (d = yo(e[f], d), c += ci(a) + f + ": " + h + `
`, c += mc(a) + f + ": " + d + `
`) : c += ci(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), c += mc(a) + y + ": " + t + `
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
        o += vo(
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
              var A = po(
                p,
                h
              );
              h = po(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && Lr(p) === "Object" && Lr(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < A.indexOf("...") || -1 < h.indexOf("...")) ? o += Ft(c + 1) + d + `={{
` + wr(
                p,
                y,
                c + 2
              ) + Ft(c + 1) + `}}
` : (o += ci(c + 1) + d + "=" + A + `
`, o += mc(c + 1) + d + "=" + h + `
`);
            } else
              o += Ft(c + 1) + d + "=" + po(e[d], h) + `
`;
          }
        f.forEach(function(D) {
          if (D !== "children") {
            var S = 120 - 2 * (c + 1) - D.length - 1;
            o += mc(c + 1) + D + "=" + po(a[D], S) + `
`;
          }
        }), o = o === "" ? Ft(c) + "<" + t + `>
` : Ft(c) + "<" + t + `
` + o + Ft(c) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += Zr(f, "" + t, c + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + Zr("" + e, null, c + 1) : o + Zr("" + e, void 0, c + 1)), o;
    }
    function Ta(t, e) {
      var a = yc(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += Ta(t, e), t = t.sibling;
        return a;
      }
      return Ft(e) + "<" + a + `>
`;
    }
    function Jr(t, e) {
      var a = ui(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return Ft(e) + `...
` + Jr(a, e + 1);
      a = "";
      var c = t.fiber._debugInfo;
      if (c)
        for (var o = 0; o < c.length; o++) {
          var f = c[o].name;
          typeof f == "string" && (a += Ft(e) + "<" + f + `>
`, e++);
        }
      if (c = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        c = Zr(o, t.serverProps, e), e++;
      else if (f = yc(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          c = e;
          var d = 120 - 2 * c - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = po(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          c = Ft(c) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (c = vo(
            f,
            o,
            ci(e)
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
        d = t.children[f], d.fiber === o ? (p += Jr(d, e), f++) : p += Ta(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += Ft(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (mc(e) + Jn(f, 120 - 2 * e) + `
`) : p + vo(
          f.type,
          f.props,
          mc(e)
        );
      return a + c + p;
    }
    function hm(t) {
      try {
        return `

` + Jr(t, 0);
      } catch {
        return "";
      }
    }
    function Kr(t, e, a) {
      for (var c = e, o = null, f = 0; c; )
        c === t && (f = 0), o = {
          fiber: c,
          children: o !== null ? [o] : [],
          serverProps: c === e ? a : c === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, c = c.return;
      return o !== null ? hm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function mm(t, e) {
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
    function Xg(t, e) {
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
    function Ea(t, e) {
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
    function kf(t, e) {
      e = e || q;
      var a = e.current;
      if (e = (a = Ff(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : Xg(t, e), e = a || e, !e) return !0;
      var c = e.tag;
      if (e = String(!!a) + "|" + t + "|" + c, X[e]) return !1;
      X[e] = !0;
      var o = (e = pa) ? Ea(e.return, c) : null, f = e !== null && o !== null ? Kr(o, e, null) : "", d = "<" + t + ">";
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
    function If(t, e, a) {
      if (a || Ff("#text", e, !1))
        return !0;
      if (a = "#text|" + e, X[a]) return !1;
      X[a] = !0;
      var c = (a = pa) ? Ea(a, e) : null;
      return a = a !== null && c !== null ? Kr(
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
    function ii(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function go(t) {
      return t.replace(M, function(e, a) {
        return a.toUpperCase();
      });
    }
    function ym(t, e, a) {
      var c = e.indexOf("--") === 0;
      c || (-1 < e.indexOf("-") ? U.hasOwnProperty(e) && U[e] || (U[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        go(e.replace(oe, "ms-"))
      )) : st.test(e) ? U.hasOwnProperty(e) && U[e] || (U[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !z.test(a) || G.hasOwnProperty(a) && G[a] || (G[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(z, "")
      )), typeof a == "number" && (isNaN(a) ? ut || (ut = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || Zt || (Zt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? c ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : c ? t.setProperty(e, a) : typeof a != "number" || a === 0 || tt.has(e) ? e === "float" ? t.cssFloat = a : (nm(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function pm(t, e, a) {
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
          p = e[S], e.hasOwnProperty(S) && a[S] !== p && ym(t, S, p);
      } else
        for (c in e)
          e.hasOwnProperty(c) && ym(t, c, e[c]);
    }
    function Kn(t) {
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
      if (Ya.call(Mh, e) && Mh[e])
        return !0;
      if (V2.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = Yv.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), Mh[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), Mh[e] = !0;
      }
      if (Q2.test(e)) {
        if (t = e.toLowerCase(), t = Yv.hasOwnProperty(t) ? t : null, t == null) return Mh[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), Mh[e] = !0);
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
    function vm(t, e, a, c) {
      if (Ya.call(ja, e) && ja[e])
        return !0;
      var o = e.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), ja[e] = !0;
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
          ), ja[e] = !0;
        if (gS.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), ja[e] = !0;
      } else if (gS.test(e))
        return Z2.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), ja[e] = !0;
      if (L2.test(e) || w2.test(e)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), ja[e] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), ja[e] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), ja[e] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          e
        ), ja[e] = !0;
      if (Yn.hasOwnProperty(o)) {
        if (o = Yn[o], o !== e)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            e,
            o
          ), ja[e] = !0;
      } else if (e !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          e,
          o
        ), ja[e] = !0;
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
              ), ja[e] = !0);
          }
        case "function":
        case "symbol":
          return ja[e] = !0, !1;
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
            ), ja[e] = !0;
          }
      }
      return !0;
    }
    function Qg(t, e, a) {
      var c = [], o;
      for (o in e)
        vm(t, o, e[o], a) || c.push(o);
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
    function Pf(t) {
      return J2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Wa() {
    }
    function yn(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function $r(t) {
      var e = dn(t);
      if (e && (t = e.stateNode)) {
        var a = t[ca] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (hc(
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
              for (ae(e, "name"), a = a.querySelectorAll(
                'input[name="' + ne(
                  "" + e
                ) + '"][type="radio"]'
              ), e = 0; e < a.length; e++) {
                var c = a[e];
                if (c !== t && c.form === t.form) {
                  var o = c[ca] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  hc(
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
                c = a[e], c.form === t.form && sm(c);
            }
            break t;
          case "textarea":
            ni(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && wn(t, !!a.multiple, e, !1);
        }
      }
    }
    function Wr(t, e, a) {
      if (e1) return t(e, a);
      e1 = !0;
      try {
        var c = t(e);
        return c;
      } finally {
        if (e1 = !1, (Rh !== null || Uh !== null) && (Na(), Rh && (e = Rh, t = Uh, Uh = Rh = null, $r(e), t)))
          for (e = 0; e < t.length; e++) $r(t[e]);
      }
    }
    function $n(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var c = a[ca] || null;
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
    function oi() {
      if (jv) return jv;
      var t, e = a1, a = e.length, c, o = "value" in Ef ? Ef.value : Ef.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (c = 1; c <= d && e[a - c] === o[f - c]; c++) ;
      return jv = o.slice(t, 1 < c ? 1 - c : void 0);
    }
    function ts(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function So() {
      return !0;
    }
    function gm() {
      return !1;
    }
    function sl(t) {
      function e(a, c, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = c, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? So : gm, this.isPropagationStopped = gm, this;
      }
      return Dt(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = So);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = So);
        },
        persist: function() {
        },
        isPersistent: So
      }), e;
    }
    function Yu(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = uT[t]) ? !!e[t] : !1;
    }
    function es() {
      return Yu;
    }
    function bo(t, e) {
      switch (t) {
        case "keyup":
          return vT.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== ES;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ju(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    function Sm(t, e) {
      switch (t) {
        case "compositionend":
          return ju(e);
        case "keypress":
          return e.which !== zS ? null : (OS = !0, DS);
        case "textInput":
          return t = e.data, t === DS && OS ? null : t;
        default:
          return null;
      }
    }
    function Fr(t, e) {
      if (_h)
        return t === "compositionend" || !i1 && bo(t, e) ? (t = oi(), jv = a1 = Ef = null, _h = !1, t) : null;
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
          return AS && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function bm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!ST[t.type] : e === "textarea";
    }
    function kr(t) {
      if (!$c) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function ls(t, e, a, c) {
      Rh ? Uh ? Uh.push(c) : Uh = [c] : Rh = c, e = Hn(e, "onChange"), 0 < e.length && (a = new Gv(
        "onChange",
        "change",
        null,
        a,
        c
      ), t.push({ event: a, listeners: e }));
    }
    function vp(t) {
      Pt(t, 0);
    }
    function Ml(t) {
      var e = dc(t);
      if (sm(e)) return t;
    }
    function pc(t, e) {
      if (t === "change") return e;
    }
    function as() {
      g0 && (g0.detachEvent("onpropertychange", To), S0 = g0 = null);
    }
    function To(t) {
      if (t.propertyName === "value" && Ml(S0)) {
        var e = [];
        ls(
          e,
          S0,
          t,
          yn(t)
        ), Wr(vp, e);
      }
    }
    function Vg(t, e, a) {
      t === "focusin" ? (as(), g0 = e, S0 = a, g0.attachEvent("onpropertychange", To)) : t === "focusout" && as();
    }
    function Tm(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Ml(S0);
    }
    function Em(t, e) {
      if (t === "click") return Ml(e);
    }
    function ns(t, e) {
      if (t === "input" || t === "change")
        return Ml(e);
    }
    function Ir(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function Eo(t, e) {
      if (Ga(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
      var a = Object.keys(t), c = Object.keys(e);
      if (a.length !== c.length) return !1;
      for (c = 0; c < a.length; c++) {
        var o = a[c];
        if (!Ya.call(e, o) || !Ga(t[o], e[o]))
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
    function Pr(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = mn(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = mn(t.document);
      }
      return e;
    }
    function Am(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function Tp(t, e, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      f1 || Ch == null || Ch !== mn(c) || (c = Ch, "selectionStart" in c && Am(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), b0 && Eo(b0, c) || (b0 = c, c = Hn(o1, "onSelect"), 0 < c.length && (e = new Gv(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: c }), e.target = Ch)));
    }
    function fi(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function si(t) {
      if (s1[t]) return s1[t];
      if (!Hh[t]) return t;
      var e = Hh[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in RS)
          return s1[t] = e[a];
      return t;
    }
    function pn(t, e) {
      BS.set(t, e), hn(e, [t]);
    }
    function Ep(t) {
      for (var e = Qv, a = 0; a < t.length; a++) {
        var c = t[a];
        if (typeof c == "object" && c !== null)
          if (Ie(c) && c.length === 2 && typeof c[0] == "string") {
            if (e !== Qv && e !== y1)
              return h1;
            e = y1;
          } else return h1;
        else {
          if (typeof c == "function" || typeof c == "string" && 50 < c.length || e !== Qv && e !== m1)
            return h1;
          e = m1;
        }
      }
      return e;
    }
    function zm(t, e, a, c) {
      for (var o in t)
        Ya.call(t, o) && o[0] !== "_" && Wn(o, t[o], e, a, c);
    }
    function Wn(t, e, a, c, o) {
      switch (typeof e) {
        case "object":
          if (e === null) {
            e = "null";
            break;
          } else {
            if (e.$$typeof === cn) {
              var f = qt(e.type) || "…", d = e.key;
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
              ]), d !== null && Wn(
                "key",
                d,
                a,
                c + 1,
                o
              ), t = !1;
              for (var p in e)
                p === "children" ? e.children != null && (!Ie(e.children) || 0 < e.children.length) && (t = !0) : Ya.call(e, p) && p[0] !== "_" && Wn(
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
              if (p = Ep(e), p === m1 || p === Qv) {
                e = JSON.stringify(e);
                break;
              } else if (p === y1) {
                for (a.push([
                  o + "  ".repeat(c) + t,
                  ""
                ]), t = 0; t < e.length; t++)
                  f = e[t], Wn(
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
                if (f = a.length, Wn(
                  t,
                  e.value,
                  a,
                  c,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (e.status === "rejected" && (f = a.length, Wn(
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
            ]), 3 > c && zm(e, a, c + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === OT ? "…" : JSON.stringify(e);
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
                  if (h.$$typeof === cn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = qt(h.type) || "…", o = "  ".repeat(c) + f, d = "<" + d + " … />", a.push(
                        [Vv + o, d],
                        [Zv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        qS + "  ".repeat(c) + f,
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
                    qS + "  ".repeat(c) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              Wn(f, d, a, c, Vv), Wn(f, h, a, c, Zv);
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
    function vn(t) {
      Vt = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function Fa(t, e, a, c) {
      De && (zf.start = e, zf.end = a, Wi.color = "warning", Wi.tooltipText = c, Wi.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          c,
          zf
        )
      ) : performance.measure(c, zf));
    }
    function td(t, e, a) {
      Fa(t, e, a, "Reconnect");
    }
    function ed(t, e, a, c, o) {
      var f = at(t);
      if (f !== null && De) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        c = 0.5 > h ? c ? "tertiary-light" : "primary-light" : 10 > h ? c ? "tertiary" : "primary" : 100 > h ? c ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [MT], p = Ap(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Af && (d.lanes & o) === 0 && 100 < t.actualDuration ? (Af = !0, y[0] = RT, Wi.color = "warning", Wi.tooltipText = YS) : (Wi.color = c, Wi.tooltipText = f), Wi.properties = y, zf.start = e, zf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            zf
          )
        ) : performance.measure(
          "​" + f,
          zf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Eu,
            void 0,
            c
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Eu,
          void 0,
          c
        );
      }
    }
    function Dm(t, e, a, c) {
      if (De) {
        var o = at(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < c.length; h++) {
            var y = c[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && Wn("key", t.key, d, 0, ""), t.memoizedProps !== null && zm(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
            start: e,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Eu,
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
    function gn(t, e, a, c, o) {
      if (o !== null) {
        if (De) {
          var f = at(t);
          if (f !== null) {
            c = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              c.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && Wn("key", t.key, c, 0, ""), t.memoizedProps !== null && zm(t.memoizedProps, c, 0, ""), e = {
              start: e,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Eu,
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
        f = at(t), f !== null && De && (o = 1 > c ? "secondary-light" : 100 > c ? "secondary" : 500 > c ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Eu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Eu,
          void 0,
          o
        ));
    }
    function Zg(t, e, a, c) {
      if (De && !(e <= t)) {
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
      !De || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
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
      !De || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
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
    function Lg(t, e, a, c, o, f) {
      if (De && !(e <= t)) {
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
    function Om(t, e, a, c) {
      !De || e <= t || (c ? c.run(
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
    function wg(t, e, a, c) {
      !De || e <= t || (c ? c.run(
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
      if (De && !(e <= t)) {
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
    function Mm(t, e, a) {
      !De || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        Vt,
        Xt,
        "secondary-dark"
      );
    }
    function ld() {
      for (var t = Bh, e = p1 = Bh = 0; e < t; ) {
        var a = Au[e];
        Au[e++] = null;
        var c = Au[e];
        Au[e++] = null;
        var o = Au[e];
        Au[e++] = null;
        var f = Au[e];
        if (Au[e++] = null, c !== null && o !== null) {
          var d = c.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), c.pending = o;
        }
        f !== 0 && Rm(a, o, f);
      }
    }
    function Ao(t, e, a, c) {
      Au[Bh++] = t, Au[Bh++] = e, Au[Bh++] = a, Au[Bh++] = c, p1 |= c, t.lanes |= c, t = t.alternate, t !== null && (t.lanes |= c);
    }
    function ri(t, e, a, c) {
      return Ao(t, e, a, c), us(t);
    }
    function ql(t, e) {
      return Ao(t, null, null, e), us(t);
    }
    function Rm(t, e, a) {
      t.lanes |= a;
      var c = t.alternate;
      c !== null && (c.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, c = f.alternate, c !== null && (c.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & T0 || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - Ul(a), t = f.hiddenUpdates, c = t[o], c === null ? t[o] = [e] : c.push(e), e.lane = a | 536870912), f) : null;
    }
    function us(t) {
      if ($0 > LT)
        throw Mr = $0 = 0, W0 = W1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Mr > wT && (Mr = 0, W0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), t.alternate === null && (t.flags & 4098) !== 0 && un(t);
      for (var e = t, a = e.return; a !== null; )
        e.alternate === null && (e.flags & 4098) !== 0 && un(t), e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    function vc(t) {
      if (zu === null) return t;
      var e = zu(t);
      return e === void 0 ? t : e.current;
    }
    function ad(t) {
      if (zu === null) return t;
      var e = zu(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = vc(t.render), t.render !== e) ? (e = { $$typeof: rf, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function Um(t, e) {
      if (zu === null) return !1;
      var a = t.elementType;
      e = e.type;
      var c = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (c = !0);
          break;
        case 0:
          (typeof e == "function" || o === Gl) && (c = !0);
          break;
        case 11:
          (o === rf || o === Gl) && (c = !0);
          break;
        case 14:
        case 15:
          (o === ur || o === Gl) && (c = !0);
          break;
        default:
          return !1;
      }
      return !!(c && (t = zu(a), t !== void 0 && t === zu(e)));
    }
    function di(t) {
      zu !== null && typeof WeakSet == "function" && (Nh === null && (Nh = /* @__PURE__ */ new WeakSet()), Nh.add(t));
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
        if (zu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (c = !1, y !== null && (y = zu(y), y !== void 0 && (a.has(y) ? c = !0 : e.has(y) && (h === 1 ? c = !0 : p = !0))), Nh !== null && (Nh.has(t) || o !== null && Nh.has(o)) && (c = !0), c && (t._debugNeedsRemount = !0), (c || p) && (o = ql(t, 2), o !== null && yt(o, t, 2)), f === null || c || Mp(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function Jg(t, e, a, c) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, jS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function _m(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Fn(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = Gt(
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
          a.type = vc(t.type);
          break;
        case 1:
          a.type = vc(t.type);
          break;
        case 11:
          a.type = ad(t.type);
      }
      return a;
    }
    function Cm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function hi(t, e, a, c, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        _m(t) && (d = 1), h = vc(h);
      else if (typeof t == "string")
        d = Q(), d = Ev(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case qn:
            return e = Gt(31, a, e, o), e.elementType = qn, e.lanes = f, e;
          case sf:
            return mi(
              a.children,
              o,
              f,
              e
            );
          case ua:
            d = 8, o |= va, o |= uc;
            break;
          case nr:
            return t = a, c = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = Gt(12, t, e, c | Ot), e.elementType = nr, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case Li:
            return e = Gt(13, a, e, o), e.elementType = Li, e.lanes = f, e;
          case ya:
            return e = Gt(19, a, e, o), e.elementType = ya, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case xn:
                  d = 10;
                  break t;
                case yh:
                  d = 9;
                  break t;
                case rf:
                  d = 11, h = ad(h);
                  break t;
                case ur:
                  d = 14;
                  break t;
                case Gl:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : Ie(t) ? a = "array" : t !== void 0 && t.$$typeof === cn ? (a = "<" + (qt(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = c ? ol(c) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = Gt(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = c, e;
    }
    function gc(t, e, a) {
      return e = hi(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function mi(t, e, a, c) {
      return t = Gt(7, t, c, e), t.lanes = a, t;
    }
    function zo(t, e, a) {
      return t = Gt(6, t, null, e), t.lanes = a, t;
    }
    function Hm(t) {
      var e = Gt(18, null, null, mt);
      return e.stateNode = t, e;
    }
    function nd(t, e, a) {
      return e = Gt(
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
    function Jl(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = v1.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: ge(e)
        }, v1.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: ge(e)
      };
    }
    function Sn(t, e) {
      Sc(), xh[qh++] = E0, xh[qh++] = Lv, Lv = t, E0 = e;
    }
    function Bm(t, e, a) {
      Sc(), Du[Ou++] = ki, Du[Ou++] = Ii, Du[Ou++] = dr, dr = t;
      var c = ki;
      t = Ii;
      var o = 32 - Ul(c) - 1;
      c &= ~(1 << o), a += 1;
      var f = 32 - Ul(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (c & (1 << d) - 1).toString(32), c >>= d, o -= d, ki = 1 << 32 - Ul(e) + o | a << o | c, Ii = f + t;
      } else
        ki = 1 << f | a << o | c, Ii = t;
    }
    function ud(t) {
      Sc(), t.return !== null && (Sn(t, 1), Bm(t, 1, 0));
    }
    function cd(t) {
      for (; t === Lv; )
        Lv = xh[--qh], xh[qh] = null, E0 = xh[--qh], xh[qh] = null;
      for (; t === dr; )
        dr = Du[--Ou], Du[Ou] = null, Ii = Du[--Ou], Du[Ou] = null, ki = Du[--Ou], Du[Ou] = null;
    }
    function Rp() {
      return Sc(), dr !== null ? { id: ki, overflow: Ii } : null;
    }
    function Up(t, e) {
      Sc(), Du[Ou++] = ki, Du[Ou++] = Ii, Du[Ou++] = dr, ki = e.id, Ii = e.overflow, dr = t;
    }
    function Sc() {
      Yt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function yi(t, e) {
      if (t.return === null) {
        if (jn === null)
          jn = {
            fiber: t,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: e
          };
        else {
          if (jn.fiber !== t)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          jn.distanceFromLeaf > e && (jn.distanceFromLeaf = e);
        }
        return jn;
      }
      var a = yi(
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
      Yt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Yl(t, e) {
      Wc || (t = yi(t, 0), t.serverProps = null, e !== null && (e = gv(e), t.serverTail.push(e)));
    }
    function ka(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", c = jn;
      throw c !== null && (jn = null, a = hm(c)), is(
        Jl(
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
      ), g1;
    }
    function Nm(t) {
      var e = t.stateNode, a = t.type, c = t.memoizedProps;
      switch (e[ze] = t, e[ca] = c, aa(a, c), a) {
        case "dialog":
          dt("cancel", e), dt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          dt("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < F0.length; a++)
            dt(F0[a], e);
          break;
        case "source":
          dt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          dt("error", e), dt("load", e);
          break;
        case "details":
          dt("toggle", e);
          break;
        case "input":
          li("input", c), dt("invalid", e), wl(e, c), Qr(
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
          li("select", c), dt("invalid", e), Vr(e, c);
          break;
        case "textarea":
          li("textarea", c), dt("invalid", e), ai(e, c), mo(
            e,
            c.value,
            c.defaultValue,
            c.children
          );
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || c.suppressHydrationWarning === !0 || qy(e.textContent, a) ? (c.popover != null && (dt("beforetoggle", e), dt("toggle", e)), c.onScroll != null && dt("scroll", e), c.onScrollEnd != null && dt("scrollend", e), c.onClick != null && (e.onclick = Wa), e = !0) : e = !1, e || ka(t, !0);
    }
    function xm(t) {
      for (ia = t.return; ia; )
        switch (ia.tag) {
          case 5:
          case 31:
          case 13:
            Mu = !1;
            return;
          case 27:
          case 3:
            Mu = !0;
            return;
          default:
            ia = ia.return;
        }
    }
    function pi(t) {
      if (t !== ia) return !1;
      if (!Yt)
        return xm(t), Yt = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || ef(t.type, t.memoizedProps)), a = !a), a && Oe) {
        for (a = Oe; a; ) {
          var c = yi(t, 0), o = gv(a);
          c.serverTail.push(o), a = o.type === "Suspense" ? nf(a) : xa(a.nextSibling);
        }
        ka(t);
      }
      if (xm(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Oe = nf(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Oe = nf(t);
      } else
        e === 27 ? (e = Oe, Vc(t.type) ? (t = iS, iS = null, Oe = t) : Oe = e) : Oe = ia ? xa(t.stateNode.nextSibling) : null;
      return !0;
    }
    function bc() {
      Oe = ia = null, Wc = Yt = !1;
    }
    function cs() {
      var t = Of;
      return t !== null && (Za === null ? Za = t : Za.push.apply(
        Za,
        t
      ), Of = null), t;
    }
    function is(t) {
      Of === null ? Of = [t] : Of.push(t);
    }
    function Tc() {
      var t = jn;
      if (t !== null) {
        jn = null;
        for (var e = hm(t); 0 < t.children.length; )
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
    function Do() {
      Yh = wv = null, jh = !1;
    }
    function Ia(t, e, a) {
      Ut(S1, e._currentValue, t), e._currentValue = a, Ut(b1, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== XS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = XS;
    }
    function bn(t, e) {
      t._currentValue = S1.current;
      var a = b1.current;
      Bt(b1, e), t._currentRenderer = a, Bt(S1, e);
    }
    function id(t, e, a) {
      for (; t !== null; ) {
        var c = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, c !== null && (c.childLanes |= e)) : c !== null && (c.childLanes & e) !== e && (c.childLanes |= e), t === a) break;
        t = t.return;
      }
      t !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Gu(t, e, a, c) {
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
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), id(
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
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), id(
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
            Ga(o.pendingProps.value, d.value) || (t !== null ? t.push(h) : t = [h]);
          }
        } else if (o === Jc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ep) : t = [ep]);
        }
        o = o.return;
      }
      t !== null && Gu(
        e,
        t,
        a,
        c
      ), e.flags |= 262144;
    }
    function Oo(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Ga(
          t.context._currentValue,
          t.memoizedValue
        ))
          return !0;
        t = t.next;
      }
      return !1;
    }
    function Ec(t) {
      wv = t, Yh = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Kt(t) {
      return jh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), qm(wv, t);
    }
    function os(t, e) {
      return wv === null && Ec(t), qm(t, e);
    }
    function qm(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, Yh === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Yh = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else Yh = Yh.next = e;
      return a;
    }
    function od() {
      return {
        controller: new CT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function vi(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function fs(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && HT(BT, function() {
        t.controller.abort();
      });
    }
    function kn(t, e, a) {
      (t & 127) !== 0 ? 0 > Fc && (Fc = Sl(), z0 = Jv(e), T1 = e, a != null && (E1 = at(a)), (Lt & (Hl | Qn)) !== Zl && ($e = !0, Rf = A0), t = lf(), e = pu(), t !== Gh || e !== D0 ? Gh = -1.1 : e !== null && (Rf = A0), yr = t, D0 = e) : (t & 4194048) !== 0 && 0 > Ru && (Ru = Sl(), O0 = Jv(e), QS = e, a != null && (VS = at(a)), 0 > lo) && (t = lf(), e = pu(), (t !== _f || e !== pr) && (_f = -1.1), Uf = t, pr = e);
    }
    function Cp(t) {
      if (0 > Fc) {
        Fc = Sl(), z0 = t._debugTask != null ? t._debugTask : null, (Lt & (Hl | Qn)) !== Zl && (Rf = A0);
        var e = lf(), a = pu();
        e !== Gh || a !== D0 ? Gh = -1.1 : a !== null && (Rf = A0), yr = e, D0 = a;
      }
      0 > Ru && (Ru = Sl(), O0 = t._debugTask != null ? t._debugTask : null, 0 > lo) && (t = lf(), e = pu(), (t !== _f || e !== pr) && (_f = -1.1), Uf = t, pr = e);
    }
    function In() {
      var t = hr;
      return hr = 0, t;
    }
    function Mo(t) {
      var e = hr;
      return hr = t, e;
    }
    function Kl(t) {
      var e = hr;
      return hr += t, e;
    }
    function gi() {
      rt = it = -1.1;
    }
    function Te() {
      var t = it;
      return it = -1.1, t;
    }
    function rl(t) {
      0 <= t && (it = t);
    }
    function Pa() {
      var t = je;
      return je = -0, t;
    }
    function Aa(t) {
      0 <= t && (je = t);
    }
    function za() {
      var t = Be;
      return Be = null, t;
    }
    function tn() {
      var t = $e;
      return $e = !1, t;
    }
    function Xu(t) {
      Xa = Sl(), 0 > t.actualStartTime && (t.actualStartTime = Xa);
    }
    function fd(t) {
      if (0 <= Xa) {
        var e = Sl() - Xa;
        t.actualDuration += e, t.selfBaseDuration = e, Xa = -1;
      }
    }
    function ss(t) {
      if (0 <= Xa) {
        var e = Sl() - Xa;
        t.actualDuration += e, Xa = -1;
      }
    }
    function $l() {
      if (0 <= Xa) {
        var t = Sl(), e = t - Xa;
        Xa = -1, hr += e, je += e, rt = t;
      }
    }
    function Hp(t) {
      Be === null && (Be = []), Be.push(t), to === null && (to = []), to.push(t);
    }
    function xe() {
      Xa = Sl(), 0 > it && (it = Xa);
    }
    function Si(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function Qu(t, e) {
      if (R0 === null) {
        var a = R0 = [];
        z1 = 0, vr = xy(), Xh = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return z1++, e.then(Ym, Ym), e;
    }
    function Ym() {
      if (--z1 === 0 && (-1 < Ru || (lo = -1.1), R0 !== null)) {
        Xh !== null && (Xh.status = "fulfilled");
        var t = R0;
        R0 = null, vr = 0, Xh = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function sd(t, e) {
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
    function Vu() {
      var t = gr.current;
      return t !== null ? t : pe.pooledCache;
    }
    function Ro(t, e) {
      e === null ? Ut(gr, gr.current, t) : Ut(gr, e.pool, t);
    }
    function jm() {
      var t = Vu();
      return t === null ? null : { parent: gl._currentValue, pool: t };
    }
    function rd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Gm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Da(t, e, a) {
      N.actQueue !== null && (N.didUsePromise = !0);
      var c = t.thenables;
      if (a = c[a], a === void 0 ? c.push(e) : a !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), e.then(Wa, Wa), e = a), e._debugInfo === void 0) {
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
          throw t = e.reason, rs(t), t;
        default:
          if (typeof e.status == "string")
            e.then(Wa, Wa);
          else {
            if (t = pe, t !== null && 100 < t.shellSuspendCounter)
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
              throw t = e.reason, rs(t), t;
          }
          throw br = e, x0 = !0, Qh;
      }
    }
    function Oa(t) {
      try {
        return jT(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (br = e, x0 = !0, Qh) : e;
      }
    }
    function bi() {
      if (br === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = br;
      return br = null, x0 = !1, t;
    }
    function rs(t) {
      if (t === Qh || t === tg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ze(t) {
      var e = Mt;
      return t != null && (Mt = e === null ? t : e.concat(t)), e;
    }
    function fa() {
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
    function Wl(t, e, a) {
      for (var c = Object.keys(t.props), o = 0; o < c.length; o++) {
        var f = c[o];
        if (f !== "children" && f !== "key") {
          e === null && (e = gc(t, a.mode, 0), e._debugInfo = Mt, e.return = a), F(
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
    function En(t) {
      var e = q0;
      return q0 += 1, Vh === null && (Vh = rd()), Da(Vh, t, e);
    }
    function sa(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function An(t, e) {
      throw e.$$typeof === Rv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (t = Object.prototype.toString.call(e), Error(
        "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function en(t, e) {
      var a = fa();
      a !== null ? a.run(
        An.bind(null, t, e)
      ) : An(t, e);
    }
    function Xm(t, e) {
      var a = at(t) || "Component";
      ob[a] || (ob[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
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
    function Uo(t, e) {
      var a = fa();
      a !== null ? a.run(
        Xm.bind(null, t, e)
      ) : Xm(t, e);
    }
    function dd(t, e) {
      var a = at(t) || "Component";
      fb[a] || (fb[a] = !0, e = String(e), t.tag === 3 ? console.error(
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
    function ds(t, e) {
      var a = fa();
      a !== null ? a.run(
        dd.bind(null, t, e)
      ) : dd(t, e);
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
        return b === null || b.tag !== 6 ? (b = zo(
          E,
          g.mode,
          Y
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Mt, b) : (b = o(b, E), b.return = g, b._debugInfo = Mt, b);
      }
      function y(g, b, E, Y) {
        var K = E.type;
        return K === sf ? (b = A(
          g,
          b,
          E.props.children,
          Y,
          E.key
        ), Wl(E, b, g), b) : b !== null && (b.elementType === K || Um(b, E) || typeof K == "object" && K !== null && K.$$typeof === Gl && Oa(K) === b.type) ? (b = o(b, E.props), sa(b, E), b.return = g, b._debugOwner = E._owner, b._debugInfo = Mt, b) : (b = gc(E, g.mode, Y), sa(b, E), b.return = g, b._debugInfo = Mt, b);
      }
      function p(g, b, E, Y) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = nd(E, g.mode, Y), b.return = g, b._debugInfo = Mt, b) : (b = o(b, E.children || []), b.return = g, b._debugInfo = Mt, b);
      }
      function A(g, b, E, Y, K) {
        return b === null || b.tag !== 7 ? (b = mi(
          E,
          g.mode,
          Y,
          K
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Mt, b) : (b = o(b, E), b.return = g, b._debugInfo = Mt, b);
      }
      function D(g, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = zo(
            "" + b,
            g.mode,
            E
          ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Mt, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case cn:
              return E = gc(
                b,
                g.mode,
                E
              ), sa(E, b), E.return = g, g = Ze(b._debugInfo), E._debugInfo = Mt, Mt = g, E;
            case Lc:
              return b = nd(
                b,
                g.mode,
                E
              ), b.return = g, b._debugInfo = Mt, b;
            case Gl:
              var Y = Ze(b._debugInfo);
              return b = Oa(b), g = D(g, b, E), Mt = Y, g;
          }
          if (Ie(b) || We(b))
            return E = mi(
              b,
              g.mode,
              E,
              null
            ), E.return = g, E._debugOwner = g, E._debugTask = g._debugTask, g = Ze(b._debugInfo), E._debugInfo = Mt, Mt = g, E;
          if (typeof b.then == "function")
            return Y = Ze(b._debugInfo), g = D(
              g,
              En(b),
              E
            ), Mt = Y, g;
          if (b.$$typeof === xn)
            return D(
              g,
              os(g, b),
              E
            );
          en(g, b);
        }
        return typeof b == "function" && Uo(g, b), typeof b == "symbol" && ds(g, b), null;
      }
      function S(g, b, E, Y) {
        var K = b !== null ? b.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return K !== null ? null : h(g, b, "" + E, Y);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case cn:
              return E.key === K ? (K = Ze(E._debugInfo), g = y(
                g,
                b,
                E,
                Y
              ), Mt = K, g) : null;
            case Lc:
              return E.key === K ? p(g, b, E, Y) : null;
            case Gl:
              return K = Ze(E._debugInfo), E = Oa(E), g = S(
                g,
                b,
                E,
                Y
              ), Mt = K, g;
          }
          if (Ie(E) || We(E))
            return K !== null ? null : (K = Ze(E._debugInfo), g = A(
              g,
              b,
              E,
              Y,
              null
            ), Mt = K, g);
          if (typeof E.then == "function")
            return K = Ze(E._debugInfo), g = S(
              g,
              b,
              En(E),
              Y
            ), Mt = K, g;
          if (E.$$typeof === xn)
            return S(
              g,
              b,
              os(g, E),
              Y
            );
          en(g, E);
        }
        return typeof E == "function" && Uo(g, E), typeof E == "symbol" && ds(g, E), null;
      }
      function H(g, b, E, Y, K) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
          return g = g.get(E) || null, h(b, g, "" + Y, K);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case cn:
              return E = g.get(
                Y.key === null ? E : Y.key
              ) || null, g = Ze(Y._debugInfo), b = y(
                b,
                E,
                Y,
                K
              ), Mt = g, b;
            case Lc:
              return g = g.get(
                Y.key === null ? E : Y.key
              ) || null, p(b, g, Y, K);
            case Gl:
              var gt = Ze(Y._debugInfo);
              return Y = Oa(Y), b = H(
                g,
                b,
                E,
                Y,
                K
              ), Mt = gt, b;
          }
          if (Ie(Y) || We(Y))
            return E = g.get(E) || null, g = Ze(Y._debugInfo), b = A(
              b,
              E,
              Y,
              K,
              null
            ), Mt = g, b;
          if (typeof Y.then == "function")
            return gt = Ze(Y._debugInfo), b = H(
              g,
              b,
              E,
              En(Y),
              K
            ), Mt = gt, b;
          if (Y.$$typeof === xn)
            return H(
              g,
              b,
              E,
              os(b, Y),
              K
            );
          en(b, Y);
        }
        return typeof Y == "function" && Uo(b, Y), typeof Y == "symbol" && ds(b, Y), null;
      }
      function J(g, b, E, Y) {
        if (typeof E != "object" || E === null) return Y;
        switch (E.$$typeof) {
          case cn:
          case Lc:
            La(g, b, E);
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
          case Gl:
            E = Oa(E), J(g, b, E, Y);
        }
        return Y;
      }
      function $(g, b, E, Y) {
        for (var K = null, gt = null, ct = null, et = b, zt = b = 0, Me = null; et !== null && zt < E.length; zt++) {
          et.index > zt ? (Me = et, et = null) : Me = et.sibling;
          var cl = S(
            g,
            et,
            E[zt],
            Y
          );
          if (cl === null) {
            et === null && (et = Me);
            break;
          }
          K = J(
            g,
            cl,
            E[zt],
            K
          ), t && et && cl.alternate === null && e(g, et), b = f(cl, b, zt), ct === null ? gt = cl : ct.sibling = cl, ct = cl, et = Me;
        }
        if (zt === E.length)
          return a(g, et), Yt && Sn(g, zt), gt;
        if (et === null) {
          for (; zt < E.length; zt++)
            et = D(g, E[zt], Y), et !== null && (K = J(
              g,
              et,
              E[zt],
              K
            ), b = f(
              et,
              b,
              zt
            ), ct === null ? gt = et : ct.sibling = et, ct = et);
          return Yt && Sn(g, zt), gt;
        }
        for (et = c(et); zt < E.length; zt++)
          Me = H(
            et,
            g,
            zt,
            E[zt],
            Y
          ), Me !== null && (K = J(
            g,
            Me,
            E[zt],
            K
          ), t && Me.alternate !== null && et.delete(
            Me.key === null ? zt : Me.key
          ), b = f(
            Me,
            b,
            zt
          ), ct === null ? gt = Me : ct.sibling = Me, ct = Me);
        return t && et.forEach(function(so) {
          return e(g, so);
        }), Yt && Sn(g, zt), gt;
      }
      function be(g, b, E, Y) {
        if (E == null)
          throw Error("An iterable object provided no iterator.");
        for (var K = null, gt = null, ct = b, et = b = 0, zt = null, Me = null, cl = E.next(); ct !== null && !cl.done; et++, cl = E.next()) {
          ct.index > et ? (zt = ct, ct = null) : zt = ct.sibling;
          var so = S(g, ct, cl.value, Y);
          if (so === null) {
            ct === null && (ct = zt);
            break;
          }
          Me = J(
            g,
            so,
            cl.value,
            Me
          ), t && ct && so.alternate === null && e(g, ct), b = f(so, b, et), gt === null ? K = so : gt.sibling = so, gt = so, ct = zt;
        }
        if (cl.done)
          return a(g, ct), Yt && Sn(g, et), K;
        if (ct === null) {
          for (; !cl.done; et++, cl = E.next())
            ct = D(g, cl.value, Y), ct !== null && (Me = J(
              g,
              ct,
              cl.value,
              Me
            ), b = f(
              ct,
              b,
              et
            ), gt === null ? K = ct : gt.sibling = ct, gt = ct);
          return Yt && Sn(g, et), K;
        }
        for (ct = c(ct); !cl.done; et++, cl = E.next())
          zt = H(
            ct,
            g,
            et,
            cl.value,
            Y
          ), zt !== null && (Me = J(
            g,
            zt,
            cl.value,
            Me
          ), t && zt.alternate !== null && ct.delete(
            zt.key === null ? et : zt.key
          ), b = f(
            zt,
            b,
            et
          ), gt === null ? K = zt : gt.sibling = zt, gt = zt);
        return t && ct.forEach(function(oE) {
          return e(g, oE);
        }), Yt && Sn(g, et), K;
      }
      function Qt(g, b, E, Y) {
        if (typeof E == "object" && E !== null && E.type === sf && E.key === null && (Wl(E, null, g), E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case cn:
              var K = Ze(E._debugInfo);
              t: {
                for (var gt = E.key; b !== null; ) {
                  if (b.key === gt) {
                    if (gt = E.type, gt === sf) {
                      if (b.tag === 7) {
                        a(
                          g,
                          b.sibling
                        ), Y = o(
                          b,
                          E.props.children
                        ), Y.return = g, Y._debugOwner = E._owner, Y._debugInfo = Mt, Wl(E, Y, g), g = Y;
                        break t;
                      }
                    } else if (b.elementType === gt || Um(
                      b,
                      E
                    ) || typeof gt == "object" && gt !== null && gt.$$typeof === Gl && Oa(gt) === b.type) {
                      a(
                        g,
                        b.sibling
                      ), Y = o(b, E.props), sa(Y, E), Y.return = g, Y._debugOwner = E._owner, Y._debugInfo = Mt, g = Y;
                      break t;
                    }
                    a(g, b);
                    break;
                  } else e(g, b);
                  b = b.sibling;
                }
                E.type === sf ? (Y = mi(
                  E.props.children,
                  g.mode,
                  Y,
                  E.key
                ), Y.return = g, Y._debugOwner = g, Y._debugTask = g._debugTask, Y._debugInfo = Mt, Wl(E, Y, g), g = Y) : (Y = gc(
                  E,
                  g.mode,
                  Y
                ), sa(Y, E), Y.return = g, Y._debugInfo = Mt, g = Y);
              }
              return g = d(g), Mt = K, g;
            case Lc:
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
                Y = nd(
                  K,
                  g.mode,
                  Y
                ), Y.return = g, g = Y;
              }
              return d(g);
            case Gl:
              return K = Ze(E._debugInfo), E = Oa(E), g = Qt(
                g,
                b,
                E,
                Y
              ), Mt = K, g;
          }
          if (Ie(E))
            return K = Ze(E._debugInfo), g = $(
              g,
              b,
              E,
              Y
            ), Mt = K, g;
          if (We(E)) {
            if (K = Ze(E._debugInfo), gt = We(E), typeof gt != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ct = gt.call(E);
            return ct === E ? (g.tag !== 0 || Object.prototype.toString.call(g.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ct) !== "[object Generator]") && (cb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), cb = !0) : E.entries !== gt || R1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), R1 = !0), g = be(
              g,
              b,
              ct,
              Y
            ), Mt = K, g;
          }
          if (typeof E.then == "function")
            return K = Ze(E._debugInfo), g = Qt(
              g,
              b,
              En(E),
              Y
            ), Mt = K, g;
          if (E.$$typeof === xn)
            return Qt(
              g,
              b,
              os(g, E),
              Y
            );
          en(g, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (K = "" + E, b !== null && b.tag === 6 ? (a(
          g,
          b.sibling
        ), Y = o(b, K), Y.return = g, g = Y) : (a(g, b), Y = zo(
          K,
          g.mode,
          Y
        ), Y.return = g, Y._debugOwner = g, Y._debugTask = g._debugTask, Y._debugInfo = Mt, g = Y), d(g)) : (typeof E == "function" && Uo(g, E), typeof E == "symbol" && ds(g, E), a(g, b));
      }
      return function(g, b, E, Y) {
        var K = Mt;
        Mt = null;
        try {
          q0 = 0;
          var gt = Qt(
            g,
            b,
            E,
            Y
          );
          return Vh = null, gt;
        } catch (Me) {
          if (Me === Qh || Me === tg) throw Me;
          var ct = Gt(29, Me, null, g.mode);
          ct.lanes = Y, ct.return = g;
          var et = ct._debugInfo = Mt;
          if (ct._debugOwner = g._debugOwner, ct._debugTask = g._debugTask, et != null) {
            for (var zt = et.length - 1; 0 <= zt; zt--)
              if (typeof et[zt].stack == "string") {
                ct._debugOwner = et[zt], ct._debugTask = et[zt].debugTask;
                break;
              }
          }
          return ct;
        } finally {
          Mt = K;
        }
      };
    }
    function de(t, e) {
      var a = Ie(t);
      return t = !a && typeof We(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        e,
        a
      ), !1) : !0;
    }
    function Nt(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Pn(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function tl(t) {
      return {
        lane: t,
        tag: rb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function tu(t, e, a) {
      var c = t.updateQueue;
      if (c === null) return null;
      if (c = c.shared, _1 === c && !mb) {
        var o = at(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), mb = !0;
      }
      return (Lt & Hl) !== Zl ? (o = c.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), c.pending = e, e = us(t), Rm(t, null, a), e) : (Ao(t, c, e, a), us(t));
    }
    function ln(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, fp(t, a);
      }
    }
    function hs(t, e) {
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
    function _o() {
      if (C1) {
        var t = Xh;
        if (t !== null) throw t;
      }
    }
    function eu(t, e, a, c) {
      C1 = !1;
      var o = t.updateQueue;
      Cf = !1, _1 = o.shared;
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
            S !== 0 && S === vr && (C1 = !0), A !== null && (A = A.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              S = t;
              var J = h, $ = e, be = a;
              switch (J.tag) {
                case db:
                  if (J = J.payload, typeof J == "function") {
                    jh = !0;
                    var Qt = J.call(
                      be,
                      D,
                      $
                    );
                    if (S.mode & va) {
                      re(!0);
                      try {
                        J.call(be, D, $);
                      } finally {
                        re(!1);
                      }
                    }
                    jh = !1, D = Qt;
                    break t;
                  }
                  D = J;
                  break t;
                case U1:
                  S.flags = S.flags & -65537 | 128;
                case rb:
                  if (Qt = J.payload, typeof Qt == "function") {
                    if (jh = !0, J = Qt.call(
                      be,
                      D,
                      $
                    ), S.mode & va) {
                      re(!0);
                      try {
                        Qt.call(be, D, $);
                      } finally {
                        re(!1);
                      }
                    }
                    jh = !1;
                  } else J = Qt;
                  if (J == null) break t;
                  D = Dt({}, D, J);
                  break t;
                case hb:
                  Cf = !0;
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
        A === null && (y = D), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = A, f === null && (o.shared.lanes = 0), Nf |= d, t.lanes = d, t.memoizedState = D;
      }
      _1 = null;
    }
    function Ac(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function Qm(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          Ac(a[t], e);
    }
    function Co(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          Ac(a[t], e);
    }
    function hd(t, e) {
      var a = Ic;
      Ut(lg, a, t), Ut(Zh, e, t), Ic = a | e.baseLanes;
    }
    function Zu(t) {
      Ut(lg, Ic, t), Ut(
        Zh,
        Zh.current,
        t
      );
    }
    function zn(t) {
      Ic = lg.current, Bt(Zh, t), Bt(lg, t);
    }
    function Fl(t) {
      var e = t.alternate;
      Ut(
        ul,
        ul.current & Lh,
        t
      ), Ut(Gn, t, t), Uu === null && (e === null || Zh.current !== null || e.memoizedState !== null) && (Uu = t);
    }
    function Dn(t) {
      Ut(ul, ul.current, t), Ut(Gn, t, t), Uu === null && (Uu = t);
    }
    function md(t) {
      t.tag === 22 ? (Ut(ul, ul.current, t), Ut(Gn, t, t), Uu === null && (Uu = t)) : lu(t);
    }
    function lu(t) {
      Ut(ul, ul.current, t), Ut(
        Gn,
        Gn.current,
        t
      );
    }
    function hl(t) {
      Bt(Gn, t), Uu === t && (Uu = null), Bt(ul, t);
    }
    function Ti(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || Ws(a) || jy(a)))
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
    function pt() {
      var t = B;
      Cu === null ? Cu = [t] : Cu.push(t);
    }
    function V() {
      var t = B;
      if (Cu !== null && (uo++, Cu[uo] !== t)) {
        var e = at(vt);
        if (!yb.has(e) && (yb.add(e), Cu !== null)) {
          for (var a = "", c = 0; c <= uo; c++) {
            var o = Cu[c], f = c === uo ? t : o;
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
    function Lu(t) {
      t == null || Ie(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        B,
        typeof t
      );
    }
    function ms() {
      var t = at(vt);
      vb.has(t) || (vb.add(t), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        t
      ));
    }
    function qe() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Vm(t, e) {
      if (G0) return !1;
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
        if (!Ga(t[a], e[a])) return !1;
      return !0;
    }
    function Zm(t, e, a, c, o, f) {
      ao = f, vt = e, Cu = t !== null ? t._debugHookTypes : null, uo = -1, G0 = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = at(vt), H1.has(f) || (H1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = t !== null && t.memoizedState !== null ? N1 : Cu !== null ? gb : B1, Er = f = (e.mode & va) !== mt;
      var d = D1(a, c, o);
      if (Er = !1, Jh && (d = ys(
        e,
        a,
        c,
        o
      )), f) {
        re(!0);
        try {
          d = ys(
            e,
            a,
            c,
            o
          );
        } finally {
          re(!1);
        }
      }
      return Le(t, e), d;
    }
    function Le(t, e) {
      e._debugHookTypes = Cu, e.dependencies === null ? no !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: no
      }) : e.dependencies._debugThenableState = no, N.H = X0;
      var a = ye !== null && ye.next !== null;
      if (ao = 0, Cu = B = bl = ye = vt = null, uo = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), ng = !1, j0 = 0, no = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || Tl || (t = t.dependencies, t !== null && Oo(t) && (Tl = !0)), x0 ? (x0 = !1, t = !0) : t = !1, t && (e = at(e) || "Unknown", pb.has(e) || H1.has(e) || (pb.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function ys(t, e, a, c) {
      vt = t;
      var o = 0;
      do {
        if (Jh && (no = null), j0 = 0, Jh = !1, o >= XT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, G0 = !1, bl = ye = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        uo = -1, N.H = Sb, f = D1(e, a, c);
      } while (Jh);
      return f;
    }
    function ps() {
      var t = N.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? Ss(e) : e, t = t.useState()[0], (ye !== null ? ye.memoizedState : null) !== t && (vt.flags |= 1024), e;
    }
    function Ei() {
      var t = ug !== 0;
      return ug = 0, t;
    }
    function vs(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & uc) !== mt ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function zc(t) {
      if (ng) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        ng = !1;
      }
      ao = 0, Cu = bl = ye = vt = null, uo = -1, B = null, Jh = !1, j0 = ug = 0, no = null;
    }
    function Fe() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return bl === null ? vt.memoizedState = bl = t : bl = bl.next = t, bl;
    }
    function kt() {
      if (ye === null) {
        var t = vt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = ye.next;
      var e = bl === null ? vt.memoizedState : bl.next;
      if (e !== null)
        bl = e, ye = t;
      else {
        if (t === null)
          throw vt.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        ye = t, t = {
          memoizedState: ye.memoizedState,
          baseState: ye.baseState,
          baseQueue: ye.baseQueue,
          queue: ye.queue,
          next: null
        }, bl === null ? vt.memoizedState = bl = t : bl = bl.next = t;
      }
      return bl;
    }
    function gs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ss(t) {
      var e = j0;
      return j0 += 1, no === null && (no = rd()), t = Da(no, t, e), e = vt, (bl === null ? e.memoizedState : bl.next) === null && (e = e.alternate, N.H = e !== null && e.memoizedState !== null ? N1 : B1), t;
    }
    function wu(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return Ss(t);
        if (t.$$typeof === xn) return Kt(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function Ma(t) {
      var e = null, a = vt.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var c = vt.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (e = {
          data: c.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = gs(), vt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || G0)
        for (a = e.data[e.index] = Array(t), c = 0; c < t; c++)
          a[c] = Ig;
      else
        a.length !== t && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          t
        );
      return e.index++, a;
    }
    function Ra(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Ho(t, e, a) {
      var c = Fe();
      if (a !== void 0) {
        var o = a(e);
        if (Er) {
          re(!0);
          try {
            a(e);
          } finally {
            re(!1);
          }
        }
      } else o = e;
      return c.memoizedState = c.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, c.queue = t, t = t.dispatch = Kg.bind(
        null,
        vt,
        t
      ), [c.memoizedState, t];
    }
    function Ai(t) {
      var e = kt();
      return Dc(e, ye, t);
    }
    function Dc(t, e, a) {
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
          if (D !== p.lane ? (Rt & D) === D : (ao & D) === D) {
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
              }), D === vr && (A = !0);
            else if ((ao & S) === S) {
              p = p.next, S === vr && (A = !0);
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
              }, y === null ? (h = y = D, d = f) : y = y.next = D, vt.lanes |= S, Nf |= S;
            D = p.action, Er && a(f, D), f = p.hasEagerState ? p.eagerState : a(f, D);
          } else
            S = {
              lane: D,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = S, d = f) : y = y.next = S, vt.lanes |= D, Nf |= D;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !Ga(f, t.memoizedState) && (Tl = !0, A && (a = Xh, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, c.lastRenderedState = f;
      }
      return o === null && (c.lanes = 0), [t.memoizedState, c.dispatch];
    }
    function zi(t) {
      var e = kt(), a = e.queue;
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
        Ga(f, e.memoizedState) || (Tl = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, c];
    }
    function Bo(t, e, a) {
      var c = vt, o = Fe();
      if (Yt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        wh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), wh = !0);
      } else {
        if (f = e(), wh || (a = e(), Ga(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), wh = !0)), pe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Rt & 127) !== 0 || Lm(c, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Mi(
        Oc.bind(null, c, a, t),
        [t]
      ), c.flags |= 2048, au(
        _u | Va,
        { destroy: void 0 },
        wm.bind(
          null,
          c,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Di(t, e, a) {
      var c = vt, o = kt(), f = Yt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !wh) {
        var d = e();
        Ga(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), wh = !0);
      }
      (d = !Ga(
        (ye || o).memoizedState,
        a
      )) && (o.memoizedState = a, Tl = !0), o = o.queue;
      var h = Oc.bind(null, c, o, t);
      if (el(2048, Va, h, [t]), o.getSnapshot !== e || d || bl !== null && bl.memoizedState.tag & _u) {
        if (c.flags |= 2048, au(
          _u | Va,
          { destroy: void 0 },
          wm.bind(
            null,
            c,
            o,
            a,
            e
          ),
          null
        ), pe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (ao & 127) !== 0 || Lm(c, e, a);
      }
      return a;
    }
    function Lm(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = vt.updateQueue, e === null ? (e = gs(), vt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function wm(t, e, a, c) {
      e.value = a, e.getSnapshot = c, Mc(e) && Jm(t);
    }
    function Oc(t, e, a) {
      return a(function() {
        Mc(e) && (kn(2, "updateSyncExternalStore()", t), Jm(t));
      });
    }
    function Mc(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !Ga(t, a);
      } catch {
        return !0;
      }
    }
    function Jm(t) {
      var e = ql(t, 2);
      e !== null && yt(e, t, 2);
    }
    function yd(t) {
      var e = Fe();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), Er) {
          re(!0);
          try {
            a();
          } finally {
            re(!1);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ra,
        lastRenderedState: t
      }, e;
    }
    function Rc(t) {
      t = yd(t);
      var e = t.queue, a = Td.bind(null, vt, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function Oi(t) {
      var e = Fe();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Os.bind(
        null,
        vt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function bs(t, e) {
      var a = kt();
      return No(a, ye, t, e);
    }
    function No(t, e, a, c) {
      return t.baseState = a, Dc(
        t,
        ye,
        typeof c == "function" ? c : Ra
      );
    }
    function Ts(t, e) {
      var a = kt();
      return ye !== null ? No(a, ye, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
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
        N.T !== null ? a(!0) : f.isTransition = !1, c(f), a = e.pending, a === null ? (f.next = e.pending = f, Uc(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function Uc(t, e) {
      var a = e.action, c = e.payload, o = t.state;
      if (e.isTransition) {
        var f = N.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), N.T = d;
        try {
          var h = a(o, c), y = N.S;
          y !== null && y(d, h), Km(t, e, h);
        } catch (p) {
          Es(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), N.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, c), Km(t, e, d);
        } catch (p) {
          Es(t, e, p);
        }
    }
    function Km(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (N.asyncTransitions++, a.then(Ri, Ri), a.then(
        function(c) {
          Ju(t, e, c);
        },
        function(c) {
          return Es(t, e, c);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Ju(t, e, a);
    }
    function Ju(t, e, a) {
      e.status = "fulfilled", e.value = a, pd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Uc(t, a)));
    }
    function Es(t, e, a) {
      var c = t.pending;
      if (t.pending = null, c !== null) {
        c = c.next;
        do
          e.status = "rejected", e.reason = a, pd(e), e = e.next;
        while (e !== c);
      }
      t.action = null;
    }
    function pd(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Ku(t, e) {
      return e;
    }
    function Ua(t, e) {
      if (Yt) {
        var a = pe.formState;
        if (a !== null) {
          t: {
            var c = vt;
            if (Yt) {
              if (Oe) {
                e: {
                  for (var o = Oe, f = Mu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = xa(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === aS || f === n2 ? o : null;
                }
                if (o) {
                  Oe = xa(
                    o.nextSibling
                  ), c = o.data === aS;
                  break t;
                }
              }
              ka(c);
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
        lastRenderedReducer: Ku,
        lastRenderedState: e
      }, a.queue = c, a = Td.bind(
        null,
        vt,
        c
      ), c.dispatch = a, c = yd(!1), f = Os.bind(
        null,
        vt,
        !1,
        c.queue
      ), c = Fe(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, c.queue = o, a = Bp.bind(
        null,
        vt,
        o,
        f,
        a
      ), o.dispatch = a, c.memoizedState = t, [e, a, !1];
    }
    function _c(t) {
      var e = kt();
      return vd(e, ye, t);
    }
    function vd(t, e, a) {
      if (e = Dc(
        t,
        e,
        Ku
      )[0], t = Ai(Ra)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var c = Ss(e);
        } catch (d) {
          throw d === Qh ? tg : d;
        }
      else c = e;
      e = kt();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (vt.flags |= 2048, au(
        _u | Va,
        { destroy: void 0 },
        $m.bind(null, o, a),
        null
      )), [c, f, t];
    }
    function $m(t, e) {
      t.action = e;
    }
    function Cc(t) {
      var e = kt(), a = ye;
      if (a !== null)
        return vd(e, a, t);
      kt(), e = e.memoizedState, a = kt();
      var c = a.queue.dispatch;
      return a.memoizedState = t, [e, c, !1];
    }
    function au(t, e, a, c) {
      return t = { tag: t, create: a, deps: c, inst: e, next: null }, e = vt.updateQueue, e === null && (e = gs(), vt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (c = a.next, a.next = t, t.next = c, e.lastEffect = t), t;
    }
    function gd(t) {
      var e = Fe();
      return t = { current: t }, e.memoizedState = t;
    }
    function Hc(t, e, a, c) {
      var o = Fe();
      vt.flags |= t, o.memoizedState = au(
        _u | e,
        { destroy: void 0 },
        a,
        c === void 0 ? null : c
      );
    }
    function el(t, e, a, c) {
      var o = kt();
      c = c === void 0 ? null : c;
      var f = o.memoizedState.inst;
      ye !== null && c !== null && Vm(c, ye.memoizedState.deps) ? o.memoizedState = au(e, f, a, c) : (vt.flags |= t, o.memoizedState = au(
        _u | e,
        f,
        a,
        c
      ));
    }
    function Mi(t, e) {
      (vt.mode & uc) !== mt ? Hc(276826112, Va, t, e) : Hc(8390656, Va, t, e);
    }
    function Np(t) {
      vt.flags |= 4;
      var e = vt.updateQueue;
      if (e === null)
        e = gs(), vt.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function As(t) {
      var e = Fe(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Lt & Hl) !== Zl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function xo(t) {
      var e = kt().memoizedState;
      return Np({ ref: e, nextImpl: t }), function() {
        if ((Lt & Hl) !== Zl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function kl(t, e) {
      var a = 4194308;
      return (vt.mode & uc) !== mt && (a |= 134217728), Hc(a, Xn, t, e);
    }
    function _a(t, e) {
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
    function nu(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null;
      var c = 4194308;
      (vt.mode & uc) !== mt && (c |= 134217728), Hc(
        c,
        Xn,
        _a.bind(null, e, t),
        a
      );
    }
    function qo(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null, el(
        4,
        Xn,
        _a.bind(null, e, t),
        a
      );
    }
    function Sd(t, e) {
      return Fe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function On(t, e) {
      var a = kt();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      return e !== null && Vm(e, c[1]) ? c[0] : (a.memoizedState = [t, e], t);
    }
    function Il(t, e) {
      var a = Fe();
      e = e === void 0 ? null : e;
      var c = t();
      if (Er) {
        re(!0);
        try {
          t();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function Ee(t, e) {
      var a = kt();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      if (e !== null && Vm(e, c[1]))
        return c[0];
      if (c = t(), Er) {
        re(!0);
        try {
          t();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function Yo(t, e) {
      var a = Fe();
      return It(a, t, e);
    }
    function uu(t, e) {
      var a = kt();
      return we(
        a,
        ye.memoizedState,
        t,
        e
      );
    }
    function bt(t, e) {
      var a = kt();
      return ye === null ? It(a, t, e) : we(
        a,
        ye.memoizedState,
        t,
        e
      );
    }
    function It(t, e, a) {
      return a === void 0 || (ao & 1073741824) !== 0 && (Rt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = wo(), vt.lanes |= t, Nf |= t, a);
    }
    function we(t, e, a, c) {
      return Ga(a, e) ? a : Zh.current !== null ? (t = It(t, a, c), Ga(t, e) || (Tl = !0), t) : (ao & 42) === 0 || (ao & 1073741824) !== 0 && (Rt & 261930) === 0 ? (Tl = !0, t.memoizedState = a) : (t = wo(), vt.lanes |= t, Nf |= t, e);
    }
    function Ri() {
      N.asyncTransitions--;
    }
    function Ui(t, e, a, c, o) {
      var f = Wt.p;
      Wt.p = f !== 0 && f < _l ? f : _l;
      var d = N.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), N.T = h, Os(t, !1, e, a);
      try {
        var y = o(), p = N.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          N.asyncTransitions++, y.then(Ri, Ri);
          var A = sd(
            y,
            c
          );
          _i(
            t,
            e,
            A,
            jl(t)
          );
        } else
          _i(
            t,
            e,
            c,
            jl(t)
          );
      } catch (D) {
        _i(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: D },
          jl(t)
        );
      } finally {
        Wt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), N.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function $u(t, e, a, c) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = zs(t).queue;
      Cp(t), Ui(
        t,
        o,
        e,
        Br,
        a === null ? il : function() {
          return jo(t), a(c);
        }
      );
    }
    function zs(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Br,
        baseState: Br,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ra,
          lastRenderedState: Br
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
          lastRenderedReducer: Ra,
          lastRenderedState: a
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function jo(t) {
      N.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = zs(t);
      e.next === null && (e = t.alternate.memoizedState), _i(
        t,
        e.next.queue,
        {},
        jl(t)
      );
    }
    function Bc() {
      var t = yd(!1);
      return t = Ui.bind(
        null,
        vt,
        t.queue,
        !0,
        !1
      ), Fe().memoizedState = t, [!1, t];
    }
    function xp() {
      var t = Ai(Ra)[0], e = kt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ss(t),
        e
      ];
    }
    function _e() {
      var t = zi(Ra)[0], e = kt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ss(t),
        e
      ];
    }
    function Wu() {
      return Kt(ep);
    }
    function Ds() {
      var t = Fe(), e = pe.identifierPrefix;
      if (Yt) {
        var a = Ii, c = ki;
        a = (c & ~(1 << 32 - Ul(c) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = ug++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = GT++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function bd() {
      return Fe().memoizedState = qp.bind(
        null,
        vt
      );
    }
    function qp(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var c = jl(a), o = tl(c), f = tu(a, o, c);
            f !== null && (kn(c, "refresh()", t), yt(f, a, c), ln(f, a, c)), t = od(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function Kg(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = jl(t);
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ml(t) ? Ye(e, o) : (o = ri(t, e, o, c), o !== null && (kn(c, "dispatch()", t), yt(o, t, c), Ms(o, e, c)));
    }
    function Td(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = jl(t), _i(t, e, a, c) && kn(c, "setState()", t);
    }
    function _i(t, e, a, c) {
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ml(t)) Ye(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = N.H;
          N.H = ic;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Ga(y, h))
              return Ao(t, e, o, 0), pe === null && ld(), !1;
          } catch {
          } finally {
            N.H = d;
          }
        }
        if (a = ri(t, e, o, c), a !== null)
          return yt(a, t, c), Ms(a, e, c), !0;
      }
      return !1;
    }
    function Os(t, e, a, c) {
      if (N.T === null && vr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), c = {
        lane: 2,
        revertLane: xy(),
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
        e = ri(
          t,
          a,
          c,
          2
        ), e !== null && (kn(2, "setOptimistic()", t), yt(e, t, 2));
    }
    function ml(t) {
      var e = t.alternate;
      return t === vt || e !== null && e === vt;
    }
    function Ye(t, e) {
      Jh = ng = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Ms(t, e, a) {
      if ((a & 4194048) !== 0) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, fp(t, a);
      }
    }
    function Ci(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        _b.has(e) || (_b.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function Go(t, e, a, c) {
      var o = t.memoizedState, f = a(c, o);
      if (t.mode & va) {
        re(!0);
        try {
          f = a(c, o);
        } finally {
          re(!1);
        }
      }
      f === void 0 && (e = qt(e) || "Component", Ob.has(e) || (Ob.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : Dt({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function Ed(t, e, a, c, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          c,
          f,
          d
        ), t.mode & va) {
          re(!0);
          try {
            a = h.shouldComponentUpdate(
              c,
              f,
              d
            );
          } finally {
            re(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          qt(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !Eo(a, c) || !Eo(o, f) : !0;
    }
    function cu(t, e, a, c) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, c), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, c), e.state !== o && (t = at(t) || "Component", Tb.has(t) || (Tb.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), x1.enqueueReplaceState(
        e,
        e.state,
        null
      ));
    }
    function iu(t, e) {
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
    function Ad(t) {
      d1(t), console.warn(
        `%s

%s
`,
        Kh ? "An error occurred in the <" + Kh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function zd(t) {
      var e = Kh ? "The above error occurred in the <" + Kh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((q1 || "Anonymous") + ".");
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
          d2 + " " + t[0],
          h2,
          _g + c + _g,
          m2
        ) : t.splice(
          0,
          0,
          d2,
          h2,
          _g + c + _g,
          m2
        ), t.unshift(console), c = cE.apply(console.error, t), c();
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
    function Wm(t) {
      d1(t);
    }
    function Rs(t, e) {
      try {
        Kh = e.source ? at(e.source) : null, q1 = null;
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
        Kh = a.source ? at(a.source) : null, q1 = at(e);
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
    function Dd(t, e, a) {
      return a = tl(a), a.tag = U1, a.payload = { element: null }, a.callback = function() {
        F(e.source, Rs, t, e);
      }, a;
    }
    function Od(t) {
      return t = tl(t), t.tag = U1, t;
    }
    function Md(t, e, a, c) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = c.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          di(a), F(
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
        di(a), F(
          c.source,
          Fm,
          e,
          a,
          c
        ), typeof o != "function" && (qf === null ? qf = /* @__PURE__ */ new Set([this]) : qf.add(this)), xT(this, c), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          at(a) || "Unknown"
        );
      });
    }
    function km(t, e, a, c, o) {
      if (a.flags |= 32768, bu && Fo(t, o), c !== null && typeof c == "object" && typeof c.then == "function") {
        if (e = a.alternate, e !== null && Tn(
          e,
          a,
          o,
          !0
        ), Yt && (Wc = !0), a = Gn.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Uu === null ? Ko() : a.alternate === null && Ge === io && (Ge = og), a.flags &= -257, a.flags |= 65536, a.lanes = o, c === eg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([c]) : e.add(c), Kd(t, c, o)), !1;
            case 22:
              return a.flags |= 65536, c === eg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([c])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([c]) : a.add(c)), Kd(t, c, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Kd(t, c, o), Ko(), !1;
      }
      if (Yt)
        return Wc = !0, e = Gn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, c !== g1 && is(
          Jl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: c }
            ),
            a
          )
        )) : (c !== g1 && is(
          Jl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: c }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, c = Jl(c, a), o = Dd(
          t.stateNode,
          c,
          o
        ), hs(t, o), Ge !== Hf && (Ge = Ar)), !1;
      var f = Jl(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: c }
        ),
        a
      );
      if (J0 === null ? J0 = [f] : J0.push(f), Ge !== Hf && (Ge = Ar), e === null) return !0;
      c = Jl(c, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = Dd(
              a.stateNode,
              c,
              t
            ), hs(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (qf === null || !qf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Od(o), Md(
                o,
                t,
                a,
                c
              ), hs(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function yl(t, e, a, c) {
      e.child = t === null ? sb(e, null, a, c) : Tr(
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
      return Ec(e), c = Zm(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = Ei(), t !== null && !Tl ? (vs(t, e, o), Mn(t, e, o)) : (Yt && h && ud(e), e.flags |= 1, yl(t, e, c, o), e.child);
    }
    function Im(t, e, a, c, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !_m(f) && f.defaultProps === void 0 && a.compare === null ? (a = vc(f), e.tag = 15, e.type = a, Xo(e, f), Pm(
          t,
          e,
          a,
          c,
          o
        )) : (t = hi(
          a.type,
          null,
          c,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !Hd(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Eo, a(d, c) && t.ref === e.ref)
          return Mn(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = Fn(f, c), t.ref = e.ref, t.return = e, e.child = t;
    }
    function Pm(t, e, a, c, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (Eo(f, c) && t.ref === e.ref && e.type === t.type)
          if (Tl = !1, e.pendingProps = c = f, Hd(t, o))
            (t.flags & 131072) !== 0 && (Tl = !0);
          else
            return e.lanes = t.lanes, Mn(t, e, o);
      }
      return ay(
        t,
        e,
        a,
        c,
        o
      );
    }
    function ty(t, e, a, c) {
      var o = c.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: T0,
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
          return ey(
            t,
            e,
            f,
            a,
            c
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ro(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? hd(e, f) : Zu(e), md(e);
        else
          return c = e.lanes = 536870912, ey(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            c
          );
      } else
        f !== null ? (Ro(e, f.cachePool), hd(e, f), lu(e), e.memoizedState = null) : (t !== null && Ro(e, null), Zu(e), lu(e));
      return yl(t, e, o, a), e.child;
    }
    function Hi(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: T0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function ey(t, e, a, c, o) {
      var f = Vu();
      return f = f === null ? null : {
        parent: gl._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && Ro(e, null), Zu(e), md(e), t !== null && Tn(t, e, c, !0), e.childLanes = o, null;
    }
    function Us(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = Cs(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function ly(t, e, a) {
      return Tr(e, t.child, null, a), t = Us(
        e,
        e.pendingProps
      ), t.flags |= 2, hl(e), e.memoizedState = null, t;
    }
    function jp(t, e, a) {
      var c = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (Yt) {
          if (c.mode === "hidden")
            return t = Us(e, c), e.lanes = 536870912, Hi(null, t);
          if (Dn(e), (t = Oe) ? (a = te(
            t,
            Mu
          ), a = a !== null && a.data === Ur ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Rp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Hm(a), c.return = e, e.child = c, ia = e, Oe = null)) : a = null, a === null)
            throw Yl(e, t), ka(e);
          return e.lanes = 536870912, null;
        }
        return Us(e, c);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Dn(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = ly(
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
        else if (_p(), (a & 536870912) !== 0 && Jo(e), Tl || Tn(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, Tl || o) {
          if (c = pe, c !== null && (d = sp(
            c,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, ql(t, d), yt(c, t, d), Y1;
          Ko(), e = ly(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, Oe = xa(
            d.nextSibling
          ), ia = e, Yt = !0, Of = null, Wc = !1, jn = null, Mu = !1, t !== null && Up(e, t), e = Us(e, c), e.flags |= 4096;
        return e;
      }
      return f = t.child, c = { mode: c.mode, children: c.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && Jo(e), t = Fn(f, c), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function _s(t, e) {
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
    function ay(t, e, a, c, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = qt(a) || "Unknown";
        Cb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Cb[f] = !0);
      }
      return e.mode & va && cc.recordLegacyContextWarning(
        e,
        null
      ), t === null && (Xo(e, e.type), a.contextTypes && (f = qt(a) || "Unknown", Bb[f] || (Bb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Ec(e), a = Zm(
        t,
        e,
        a,
        c,
        void 0,
        o
      ), c = Ei(), t !== null && !Tl ? (vs(t, e, o), Mn(t, e, o)) : (Yt && c && ud(e), e.flags |= 1, yl(t, e, a, o), e.child);
    }
    function ny(t, e, a, c, o, f) {
      return Ec(e), uo = -1, G0 = t !== null && t.type !== e.type, e.updateQueue = null, a = ys(
        e,
        c,
        a,
        o
      ), Le(t, e), c = Ei(), t !== null && !Tl ? (vs(t, e, f), Mn(t, e, f)) : (Yt && c && ud(e), e.flags |= 1, yl(t, e, a, f), e.child);
    }
    function Bi(t, e, a, c, o) {
      switch (le(e)) {
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
          if (e.lanes |= h, d = pe, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Od(h), Md(
            h,
            d,
            e,
            Jl(f, e)
          ), hs(e, h);
      }
      if (Ec(e), e.stateNode === null) {
        if (d = Df, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== xn) && !Ub.has(a) && (Ub.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === yh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          qt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Kt(f)), f = new a(c, d), e.mode & va) {
          re(!0);
          try {
            f = new a(c, d);
          } finally {
            re(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = x1, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = bb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = qt(a) || "Component", Eb.has(d) || (Eb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = qt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            zb.has(f) || (zb.add(f), console.error(
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
        f = e.stateNode, d = qt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
        ), a.childContextTypes && !Rb.has(a) && (Rb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Mb.has(a) && (Mb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          qt(a) || "A pure component"
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
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Ab.has(a) || (Ab.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          qt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Ie(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = c, f.state = e.memoizedState, f.refs = {}, Nt(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? Kt(d) : Df, f.state === c && (d = qt(a) || "Component", Db.has(d) || (Db.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & va && cc.recordLegacyContextWarning(
          e,
          f
        ), cc.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Go(
          e,
          a,
          d,
          c
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          at(e) || "Component"
        ), x1.enqueueReplaceState(
          f,
          f.state,
          null
        )), eu(e, c, f, o), _o(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & uc) !== mt && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var A = e.memoizedProps;
        h = iu(a, A), f.props = h;
        var D = f.context;
        y = a.contextType, d = Df, typeof y == "object" && y !== null && (d = Kt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", A = e.pendingProps !== A, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (A || D !== d) && cu(
          e,
          f,
          c,
          d
        ), Cf = !1;
        var S = e.memoizedState;
        f.state = S, eu(e, c, f, o), _o(), D = e.memoizedState, A || S !== D || Cf ? (typeof p == "function" && (Go(
          e,
          a,
          p,
          c
        ), D = e.memoizedState), (h = Cf || Ed(
          e,
          a,
          h,
          c,
          S,
          D,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & uc) !== mt && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & uc) !== mt && (e.flags |= 134217728), e.memoizedProps = c, e.memoizedState = D), f.props = c, f.state = D, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & uc) !== mt && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, Pn(t, e), d = e.memoizedProps, y = iu(a, d), f.props = y, p = e.pendingProps, S = f.context, D = a.contextType, h = Df, typeof D == "object" && D !== null && (h = Kt(D)), A = a.getDerivedStateFromProps, (D = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || S !== h) && cu(
          e,
          f,
          c,
          h
        ), Cf = !1, S = e.memoizedState, f.state = S, eu(e, c, f, o), _o();
        var H = e.memoizedState;
        d !== p || S !== H || Cf || t !== null && t.dependencies !== null && Oo(t.dependencies) ? (typeof A == "function" && (Go(
          e,
          a,
          A,
          c
        ), H = e.memoizedState), (y = Cf || Ed(
          e,
          a,
          y,
          c,
          S,
          H,
          h
        ) || t !== null && t.dependencies !== null && Oo(t.dependencies)) ? (D || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(c, H, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          c,
          H,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = c, e.memoizedState = H), f.props = c, f.state = H, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, _s(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, Jf(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, Xa = -1;
        else if (a = FS(h), e.mode & va) {
          re(!0);
          try {
            FS(h);
          } finally {
            re(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = Tr(
          e,
          t.child,
          null,
          o
        ), e.child = Tr(
          e,
          null,
          a,
          o
        )) : yl(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = Mn(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== c && ($h || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        at(e) || "a component"
      ), $h = !0), t;
    }
    function uy(t, e, a, c) {
      return bc(), e.flags |= 256, yl(t, e, a, c), e.child;
    }
    function Xo(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = qt(e) || "Unknown", Nb[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), Nb[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = qt(e) || "Unknown", Hb[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), Hb[e] = !0));
    }
    function Qo(t) {
      return { baseLanes: t, cachePool: jm() };
    }
    function Rd(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= rn), t;
    }
    function Ud(t, e, a) {
      var c, o = e.pendingProps;
      jt(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((c = d) || (c = t !== null && t.memoizedState === null ? !1 : (ul.current & Y0) !== 0), c && (f = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Yt) {
          if (f ? Fl(e) : lu(e), (t = Oe) ? (a = te(
            t,
            Mu
          ), a = a !== null && a.data !== Ur ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Rp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Hm(a), c.return = e, e.child = c, ia = e, Oe = null)) : a = null, a === null)
            throw Yl(e, t), ka(e);
          return jy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          lu(e);
          var y = e.mode;
          return h = Cs(
            { mode: "hidden", children: h },
            y
          ), o = mi(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = Qo(a), o.childLanes = Rd(
            t,
            c,
            a
          ), e.memoizedState = j1, Hi(
            null,
            o
          );
        }
        return Fl(e), cy(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var A = p.dehydrated;
        if (A !== null) {
          if (d)
            e.flags & 256 ? (Fl(e), e.flags &= -257, e = _d(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (lu(e), e.child = t.child, e.flags |= 128, e = null) : (lu(e), h = o.fallback, y = e.mode, o = Cs(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = mi(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, Tr(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = Qo(a), o.childLanes = Rd(
              t,
              c,
              a
            ), e.memoizedState = j1, e = Hi(
              null,
              o
            ));
          else if (Fl(e), _p(), (a & 536870912) !== 0 && Jo(e), jy(
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
            }, typeof c == "string" && v1.set(
              h,
              o
            ), is(o), e = _d(
              t,
              e,
              a
            );
          } else if (Tl || Tn(
            t,
            e,
            a,
            !1
          ), c = (a & t.childLanes) !== 0, Tl || c) {
            if (c = pe, c !== null && (o = sp(
              c,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, ql(
                t,
                o
              ), yt(
                c,
                t,
                o
              ), Y1;
            Ws(
              A
            ) || Ko(), e = _d(
              t,
              e,
              a
            );
          } else
            Ws(
              A
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, Oe = xa(
              A.nextSibling
            ), ia = e, Yt = !0, Of = null, Wc = !1, jn = null, Mu = !1, t !== null && Up(e, t), e = cy(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (lu(e), h = o.fallback, y = e.mode, S = t.child, A = S.sibling, o = Fn(
        S,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = S.subtreeFlags & 65011712, A !== null ? h = Fn(
        A,
        h
      ) : (h = mi(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, Hi(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = Qo(a) : (y = h.cachePool, y !== null ? (S = gl._currentValue, y = y.parent !== S ? { parent: S, pool: S } : y) : y = jm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Rd(
        t,
        c,
        a
      ), e.memoizedState = j1, Hi(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && Jo(e), Fl(e), a = t.child, t = a.sibling, a = Fn(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function cy(t, e) {
      return e = Cs(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function Cs(t, e) {
      return t = Gt(22, t, null, e), t.lanes = 0, t;
    }
    function _d(t, e, a) {
      return Tr(e, t.child, null, a), t = cy(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function iy(t, e, a) {
      t.lanes |= e;
      var c = t.alternate;
      c !== null && (c.lanes |= e), id(
        t.return,
        e,
        a
      );
    }
    function Cd(t, e, a, c, o, f) {
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
    function oy(t, e, a) {
      var c = e.pendingProps, o = c.revealOrder, f = c.tail, d = c.children, h = ul.current;
      if ((c = (h & Y0) !== 0) ? (h = h & Lh | Y0, e.flags |= 128) : h &= Lh, Ut(ul, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !xb[h])
        if (xb[h] = !0, o == null)
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
        if (Ie(d)) {
          for (h = 0; h < d.length; h++)
            if (!de(
              d[h],
              h
            ))
              break t;
        } else if (h = We(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!de(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (yl(t, e, d, a), Yt ? (Sc(), d = E0) : d = 0, !c && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && iy(t, a, e);
          else if (t.tag === 19)
            iy(t, a, e);
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
            t = a.alternate, t !== null && Ti(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Cd(
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
            if (t = o.alternate, t !== null && Ti(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          Cd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Cd(
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
    function Mn(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), Xa = -1, Nf |= e.lanes, (a & e.childLanes) === 0)
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
    function Hd(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Oo(t)));
    }
    function Gp(t, e, a) {
      switch (e.tag) {
        case 3:
          fl(
            e,
            e.stateNode.containerInfo
          ), Ia(
            e,
            gl,
            t.memoizedState.cache
          ), bc();
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
          Ia(
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
            return e.flags |= 128, Dn(e), null;
          break;
        case 13:
          if (c = e.memoizedState, c !== null)
            return c.dehydrated !== null ? (Fl(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Ud(
              t,
              e,
              a
            ) : (Fl(e), t = Mn(
              t,
              e,
              a
            ), t !== null ? t.sibling : null);
          Fl(e);
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
              return oy(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ut(
            ul,
            ul.current,
            e
          ), c) break;
          return null;
        case 22:
          return e.lanes = 0, ty(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          Ia(
            e,
            gl,
            t.memoizedState.cache
          );
      }
      return Mn(t, e, a);
    }
    function Hs(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = hi(
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
          if (!Hd(t, a) && (e.flags & 128) === 0)
            return Tl = !1, Gp(
              t,
              e,
              a
            );
          Tl = (t.flags & 131072) !== 0;
        }
      else
        Tl = !1, (c = Yt) && (Sc(), c = (e.flags & 1048576) !== 0), c && (c = e.index, Sc(), Bm(e, E0, c));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (c = e.pendingProps, t = Oa(e.elementType), e.type = t, typeof t == "function")
            _m(t) ? (c = iu(
              t,
              c
            ), e.tag = 1, e.type = t = vc(t), e = Bi(
              null,
              e,
              t,
              c,
              a
            )) : (e.tag = 0, Xo(e, t), e.type = t = vc(t), e = ay(
              null,
              e,
              t,
              c,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === rf) {
                e.tag = 11, e.type = t = ad(t), e = Yp(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              } else if (o === ur) {
                e.tag = 14, e = Im(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === Gl && (e = " Did you wrap a component in React.lazy() more than once?"), a = qt(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return ay(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 1:
          return c = e.type, o = iu(
            c,
            e.pendingProps
          ), Bi(
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
            o = f.element, Pn(t, e), eu(e, c, null, a);
            var d = e.memoizedState;
            if (c = d.cache, Ia(e, gl, c), c !== f.cache && Gu(
              e,
              [gl],
              a,
              !0
            ), _o(), c = d.element, f.isDehydrated)
              if (f = {
                element: c,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = uy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else if (c !== o) {
                o = Jl(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  e
                ), is(o), e = uy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else
                for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Oe = xa(t.firstChild), ia = e, Yt = !0, Of = null, Wc = !1, jn = null, Mu = !0, a = sb(
                  e,
                  null,
                  c,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (bc(), c === o) {
                e = Mn(
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
          return _s(t, e), t === null ? (a = Vy(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : Yt || (a = e.type, t = e.pendingProps, c = xl(
            qa.current
          ), c = Ks(
            c
          ).createElement(a), c[ze] = e, c[ca] = t, Ae(c, a, t), Ve(c), e.stateNode = c) : e.memoizedState = Vy(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return w(e), t === null && Yt && (c = xl(qa.current), o = Q(), c = e.stateNode = ec(
            e.type,
            e.pendingProps,
            c,
            o,
            !1
          ), Wc || (o = ma(
            c,
            e.type,
            e.pendingProps,
            o
          ), o !== null && (yi(e, 0).serverProps = o)), ia = e, Mu = !0, o = Oe, Vc(e.type) ? (iS = o, Oe = xa(
            c.firstChild
          )) : Oe = o), yl(
            t,
            e,
            e.pendingProps.children,
            a
          ), _s(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && Yt && (f = Q(), c = kf(
            e.type,
            f.ancestorInfo
          ), o = Oe, (d = !o) || (d = yv(
            o,
            e.type,
            e.pendingProps,
            Mu
          ), d !== null ? (e.stateNode = d, Wc || (f = ma(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (yi(e, 0).serverProps = f)), ia = e, Oe = xa(
            d.firstChild
          ), Mu = !1, f = !0) : f = !1, d = !f), d && (c && Yl(e, o), ka(e))), w(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, c = f.children, ef(o, f) ? c = null : d !== null && ef(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = Zm(
            t,
            e,
            ps,
            null,
            null,
            a
          ), ep._currentValue = o), _s(t, e), yl(
            t,
            e,
            c,
            a
          ), e.child;
        case 6:
          return t === null && Yt && (a = e.pendingProps, t = Q(), c = t.ancestorInfo.current, a = c != null ? If(
            a,
            c.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = Oe, (c = !t) || (c = pv(
            t,
            e.pendingProps,
            Mu
          ), c !== null ? (e.stateNode = c, ia = e, Oe = null, c = !0) : c = !1, c = !c), c && (a && Yl(e, t), ka(e))), null;
        case 13:
          return Ud(t, e, a);
        case 4:
          return fl(
            e,
            e.stateNode.containerInfo
          ), c = e.pendingProps, t === null ? e.child = Tr(
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
          return c = e.type, o = e.pendingProps, f = o.value, "value" in o || qb || (qb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Ia(e, c, f), yl(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, c = e.pendingProps.children, typeof c != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Ec(e), o = Kt(o), c = D1(
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
          return Im(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return Pm(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return oy(
            t,
            e,
            a
          );
        case 31:
          return jp(t, e, a);
        case 22:
          return ty(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return Ec(e), c = Kt(gl), t === null ? (o = Vu(), o === null && (o = pe, f = od(), o.pooledCache = f, vi(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: c,
            cache: o
          }, Nt(e), Ia(e, gl, o)) : ((t.lanes & a) !== 0 && (Pn(t, e), eu(e, null, null, a), _o()), o = t.memoizedState, f = e.memoizedState, o.parent !== c ? (o = {
            parent: c,
            cache: c
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Ia(e, gl, c)) : (c = f.cache, Ia(e, gl, c), c !== o.cache && Gu(
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
    function ou(t) {
      t.flags |= 4;
    }
    function Bd(t, e, a, c, o) {
      if ((e = (t.mode & _T) !== mt) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (Oy()) t.flags |= 8192;
          else
            throw br = eg, M1;
      } else t.flags &= -16777217;
    }
    function Xp(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & Hu) !== Hr)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !Ht(e))
        if (Oy()) t.flags |= 8192;
        else
          throw br = eg, M1;
    }
    function Vo(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? qr() : 536870912, t.lanes |= e, Or |= e);
    }
    function Zo(t, e) {
      if (!Yt)
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
    function ue(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, c = 0;
      if (e)
        if ((t.mode & Ot) !== mt) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, c |= o.subtreeFlags & 65011712, c |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & Ot) !== mt) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, c |= o.subtreeFlags, c |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= c, t.childLanes = a, e;
    }
    function fy(t, e, a) {
      var c = e.pendingProps;
      switch (cd(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ue(e), null;
        case 1:
          return ue(e), null;
        case 3:
          return a = e.stateNode, c = null, t !== null && (c = t.memoizedState.cache), e.memoizedState.cache !== c && (e.flags |= 2048), bn(gl, e), O(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (pi(e) ? (Tc(), ou(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, cs())), ue(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (ou(e), f !== null ? (ue(e), Xp(
            e,
            f
          )) : (ue(e), Bd(
            e,
            o,
            null,
            c,
            a
          ))) : f ? f !== t.memoizedState ? (ou(e), ue(e), Xp(
            e,
            f
          )) : (ue(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== c && ou(e), ue(e), Bd(
            e,
            o,
            t,
            c,
            a
          )), null;
        case 27:
          if (ot(e), a = xl(qa.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && ou(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ue(e), null;
            }
            t = Q(), pi(e) ? Nm(e) : (t = ec(
              o,
              c,
              a,
              t,
              !0
            ), e.stateNode = t, ou(e));
          }
          return ue(e), null;
        case 5:
          if (ot(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && ou(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ue(e), null;
            }
            var d = Q();
            if (pi(e))
              Nm(e);
            else {
              switch (f = xl(qa.current), kf(o, d.ancestorInfo), d = d.context, f = Ks(f), d) {
                case lm:
                  f = f.createElementNS(
                    At,
                    o
                  );
                  break;
                case Mg:
                  f = f.createElementNS(
                    St,
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
                        St,
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
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Ya.call(c2, o) || (c2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[ze] = e, f[ca] = c;
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
              t: switch (Ae(f, o, c), o) {
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
              c && ou(e);
            }
          }
          return ue(e), Bd(
            e,
            e.type,
            t === null ? null : t.memoizedProps,
            e.pendingProps,
            a
          ), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== c && ou(e);
          else {
            if (typeof c != "string" && e.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (t = xl(qa.current), a = Q(), pi(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !Wc, c = null, f = ia, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Sv(
                      t,
                      a,
                      c
                    ), o !== null && (yi(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    c = f.memoizedProps, o && (o = Sv(
                      t,
                      a,
                      c
                    ), o !== null && (yi(
                      e,
                      0
                    ).serverProps = o));
                }
              t[ze] = e, t = !!(t.nodeValue === a || c !== null && c.suppressHydrationWarning === !0 || qy(t.nodeValue, a)), t || ka(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && If(
                c,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = Ks(t).createTextNode(
                c
              ), t[ze] = e, e.stateNode = t;
          }
          return ue(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (c = pi(e), a !== null) {
              if (t === null) {
                if (!c)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[ze] = e, ue(e), (e.mode & Ot) !== mt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                Tc(), bc(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, ue(e), (e.mode & Ot) !== mt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = cs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (hl(e), e) : (hl(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return ue(e), null;
        case 13:
          if (c = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = c, f = pi(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[ze] = e, ue(e), (e.mode & Ot) !== mt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                Tc(), bc(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, ue(e), (e.mode & Ot) !== mt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = cs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (hl(e), e) : (hl(e), null);
          }
          return hl(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & Ot) !== mt && Si(e), e) : (a = c !== null, t = t !== null && t.memoizedState !== null, a && (c = e.child, o = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (o = c.alternate.memoizedState.cachePool.pool), f = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (f = c.memoizedState.cachePool.pool), f !== o && (c.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Vo(e, e.updateQueue), ue(e), (e.mode & Ot) !== mt && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return O(e), t === null && Xc(
            e.stateNode.containerInfo
          ), ue(e), null;
        case 10:
          return bn(e.type, e), ue(e), null;
        case 19:
          if (Bt(ul, e), c = e.memoizedState, c === null) return ue(e), null;
          if (o = (e.flags & 128) !== 0, f = c.rendering, f === null)
            if (o) Zo(c, !1);
            else {
              if (Ge !== io || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = Ti(t), f !== null) {
                    for (e.flags |= 128, Zo(c, !1), t = f.updateQueue, e.updateQueue = t, Vo(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      Cm(a, t), a = a.sibling;
                    return Ut(
                      ul,
                      ul.current & Lh | Y0,
                      e
                    ), Yt && Sn(e, c.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              c.tail !== null && vl() > mg && (e.flags |= 128, o = !0, Zo(c, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = Ti(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Vo(e, t), Zo(c, !0), c.tail === null && c.tailMode === "hidden" && !f.alternate && !Yt)
                  return ue(e), null;
              } else
                2 * vl() - c.renderingStartTime > mg && a !== 536870912 && (e.flags |= 128, o = !0, Zo(c, !1), e.lanes = 4194304);
            c.isBackwards ? (f.sibling = e.child, e.child = f) : (t = c.last, t !== null ? t.sibling = f : e.child = f, c.last = f);
          }
          return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = vl(), t.sibling = null, a = ul.current, a = o ? a & Lh | Y0 : a & Lh, Ut(ul, a, e), Yt && Sn(e, c.treeForkCount), t) : (ue(e), null);
        case 22:
        case 23:
          return hl(e), zn(e), c = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== c && (e.flags |= 8192) : c && (e.flags |= 8192), c ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (ue(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ue(e), a = e.updateQueue, a !== null && Vo(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), c = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (c = e.memoizedState.cachePool.pool), c !== a && (e.flags |= 2048), t !== null && Bt(gr, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), bn(gl, e), ue(e), null;
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
      switch (cd(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ot) !== mt && Si(e), e) : null;
        case 3:
          return bn(gl, e), O(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return ot(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (hl(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            bc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ot) !== mt && Si(e), e) : null;
        case 13:
          if (hl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            bc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ot) !== mt && Si(e), e) : null;
        case 19:
          return Bt(ul, e), null;
        case 4:
          return O(e), null;
        case 10:
          return bn(e.type, e), null;
        case 22:
        case 23:
          return hl(e), zn(e), t !== null && Bt(gr, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ot) !== mt && Si(e), e) : null;
        case 24:
          return bn(gl, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function sy(t, e) {
      switch (cd(e), e.tag) {
        case 3:
          bn(gl, e), O(e);
          break;
        case 26:
        case 27:
        case 5:
          ot(e);
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
          Bt(ul, e);
          break;
        case 10:
          bn(e.type, e);
          break;
        case 22:
        case 23:
          hl(e), zn(e), t !== null && Bt(gr, e);
          break;
        case 24:
          bn(gl, e);
      }
    }
    function fu(t) {
      return (t.mode & Ot) !== mt;
    }
    function Vp(t, e) {
      fu(t) ? (xe(), Fu(e, t), $l()) : Fu(e, t);
    }
    function Nd(t, e, a) {
      fu(t) ? (xe(), Nc(
        a,
        t,
        e
      ), $l()) : Nc(
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
            if ((a.tag & t) === t && (c = void 0, (t & Qa) !== ag && (Ph = !0), c = F(
              e,
              qT,
              a
            ), (t & Qa) !== ag && (Ph = !1), c !== void 0 && typeof c != "function")) {
              var f = void 0;
              f = (a.tag & Xn) !== 0 ? "useLayoutEffect" : (a.tag & Qa) !== 0 ? "useInsertionEffect" : "useEffect";
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
    function Nc(t, e, a) {
      try {
        var c = e.updateQueue, o = c !== null ? c.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          c = f;
          do {
            if ((c.tag & t) === t) {
              var d = c.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (t & Qa) !== ag && (Ph = !0), o = e, F(
                o,
                YT,
                o,
                a,
                h
              ), (t & Qa) !== ag && (Ph = !1));
            }
            c = c.next;
          } while (c !== f);
        }
      } catch (y) {
        Et(e, e.return, y);
      }
    }
    function Bs(t, e) {
      fu(t) ? (xe(), Fu(e, t), $l()) : Fu(e, t);
    }
    function xd(t, e, a) {
      fu(t) ? (xe(), Nc(
        a,
        t,
        e
      ), $l()) : Nc(
        a,
        t,
        e
      );
    }
    function ry(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || $h || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          at(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          at(t) || "instance"
        ));
        try {
          F(
            t,
            Co,
            e,
            a
          );
        } catch (c) {
          Et(t, t.return, c);
        }
      }
    }
    function Ns(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function Zp(t, e) {
      var a = e.memoizedProps, c = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || $h || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        at(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        at(t) || "instance"
      ));
      try {
        var o = iu(
          t.type,
          a
        ), f = F(
          t,
          Ns,
          e,
          o,
          c
        );
        a = Yb, f !== void 0 || a.has(t.type) || (a.add(t.type), F(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            at(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Et(t, t.return, d);
      }
    }
    function qd(t, e, a) {
      a.props = iu(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, fu(t) ? (xe(), F(
        t,
        lb,
        t,
        e,
        a
      ), $l()) : F(
        t,
        lb,
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
          if (fu(t))
            try {
              xe(), t.refCleanup = e(a);
            } finally {
              $l();
            }
          else t.refCleanup = e(a);
        else
          typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            at(t)
          ), e.current = a;
      }
    }
    function Ni(t, e) {
      try {
        F(t, Lp, t);
      } catch (a) {
        Et(t, e, a);
      }
    }
    function an(t, e) {
      var a = t.ref, c = t.refCleanup;
      if (a !== null)
        if (typeof c == "function")
          try {
            if (fu(t))
              try {
                xe(), F(t, c);
              } finally {
                $l(t);
              }
            else F(t, c);
          } catch (o) {
            Et(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (fu(t))
              try {
                xe(), F(t, a, null);
              } finally {
                $l(t);
              }
            else F(t, a, null);
          } catch (o) {
            Et(t, e, o);
          }
        else a.current = null;
    }
    function dy(t, e, a, c) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", kv && (e = "nested-update"), typeof o == "function" && o(
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
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", kv && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        c,
        a
      );
    }
    function xc(t) {
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
    function Yd(t, e, a) {
      try {
        F(
          t,
          ah,
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
    function hy(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Vc(t.type) || t.tag === 4;
    }
    function jd(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || hy(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Vc(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Lo(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? (cv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (cv(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = Wa));
      else if (c !== 4 && (c === 27 && Vc(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (Lo(t, e, a), t = t.sibling; t !== null; )
          Lo(t, e, a), t = t.sibling;
    }
    function xs(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (c !== 4 && (c === 27 && Vc(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (xs(t, e, a), t = t.sibling; t !== null; )
          xs(t, e, a), t = t.sibling;
    }
    function my(t) {
      for (var e, a = t.return; a !== null; ) {
        if (hy(a)) {
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
          e = e.stateNode, a = jd(t), xs(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (nh(a), e.flags &= -33), e = jd(t), xs(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = jd(t), Lo(
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
    function yy(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        F(
          t,
          vu,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        Et(t, t.return, c);
      }
    }
    function py(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function $g(t, e) {
      if (t = t.containerInfo, nS = Cg, t = Pr(t), Am(t)) {
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
      for (uS = {
        focusedElem: t,
        selectionRange: a
      }, Cg = !1, Vl = e; Vl !== null; )
        if (e = Vl, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, Vl = t;
        else
          for (; Vl !== null; ) {
            switch (t = e = Vl, a = t.alternate, o = t.flags, t.tag) {
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
                    af(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        af(t);
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
              t.return = e.return, Vl = t;
              break;
            }
            Vl = e.return;
          }
    }
    function Gd(t, e, a) {
      var c = Te(), o = Pa(), f = za(), d = tn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ca(t, a), h & 4 && Vp(a, Xn | _u);
          break;
        case 1:
          if (Ca(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || $h || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                at(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                at(a) || "instance"
              )), fu(a) ? (xe(), F(
                a,
                O1,
                a,
                t
              ), $l()) : F(
                a,
                O1,
                a,
                t
              );
            else {
              var y = iu(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || $h || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                at(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                at(a) || "instance"
              )), fu(a) ? (xe(), F(
                a,
                PS,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), $l()) : F(
                a,
                PS,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && ry(a), h & 512 && Ni(a, a.return);
          break;
        case 3:
          if (e = In(), Ca(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
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
                Co,
                h,
                y
              );
            } catch (A) {
              Et(a, a.return, A);
            }
          }
          t.effectDuration += Mo(e);
          break;
        case 27:
          e === null && h & 4 && yy(a);
        case 26:
        case 5:
          if (Ca(t, a), e === null) {
            if (h & 4) xc(a);
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
          h & 512 && Ni(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = In(), Ca(t, a), t = a.stateNode, t.effectDuration += Kl(h);
            try {
              F(
                a,
                dy,
                a,
                e,
                Mf,
                t.effectDuration
              );
            } catch (A) {
              Et(a, a.return, A);
            }
          } else Ca(t, a);
          break;
        case 31:
          Ca(t, a), h & 4 && gy(t, a);
          break;
        case 13:
          Ca(t, a), h & 4 && Sy(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = Iu.bind(
            null,
            a
          ), vv(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || co, !h) {
            e = e !== null && e.memoizedState !== null || El, y = co;
            var p = El;
            co = h, (El = e) && !p ? (Rn(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Ot) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && td(
              a,
              it,
              rt
            )) : Ca(t, a), co = y, El = p;
          }
          break;
        case 30:
          break;
        default:
          Ca(t, a);
      }
      (a.mode & Ot) !== mt && 0 <= it && 0 <= rt && (($e || 0.05 < je) && gn(
        a,
        it,
        rt,
        je,
        Be
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < rt - it && (py(
        a.return.alternate,
        a.return
      ) || Fa(
        a,
        it,
        rt,
        "Mount"
      ))), rl(c), Aa(o), Be = f, $e = d;
    }
    function Je(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Je(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && om(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function Se(t, e, a) {
      for (a = a.child; a !== null; )
        vy(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function vy(t, e, a) {
      if (al && typeof al.onCommitFiberUnmount == "function")
        try {
          al.onCommitFiberUnmount(Ki, a);
        } catch (p) {
          Su || (Su = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var c = Te(), o = Pa(), f = za(), d = tn();
      switch (a.tag) {
        case 26:
          El || an(a, e), Se(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          El || an(a, e);
          var h = Al, y = fn;
          Vc(a.type) && (Al = a.stateNode, fn = !1), Se(
            t,
            e,
            a
          ), F(
            a,
            lc,
            a.stateNode
          ), Al = h, fn = y;
          break;
        case 5:
          El || an(a, e);
        case 6:
          if (h = Al, y = fn, Al = null, Se(
            t,
            e,
            a
          ), Al = h, fn = y, Al !== null)
            if (fn)
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
          Al !== null && (fn ? (t = Al, Gi(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), Zi(t)) : Gi(Al, a.stateNode));
          break;
        case 4:
          h = Al, y = fn, Al = a.stateNode.containerInfo, fn = !0, Se(
            t,
            e,
            a
          ), Al = h, fn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Nc(
            Qa,
            a,
            e
          ), El || Nd(
            a,
            e,
            Xn
          ), Se(
            t,
            e,
            a
          );
          break;
        case 1:
          El || (an(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && qd(
            a,
            e,
            h
          )), Se(
            t,
            e,
            a
          );
          break;
        case 21:
          Se(
            t,
            e,
            a
          );
          break;
        case 22:
          El = (h = El) || a.memoizedState !== null, Se(
            t,
            e,
            a
          ), El = h;
          break;
        default:
          Se(
            t,
            e,
            a
          );
      }
      (a.mode & Ot) !== mt && 0 <= it && 0 <= rt && ($e || 0.05 < je) && gn(
        a,
        it,
        rt,
        je,
        Be
      ), rl(c), Aa(o), Be = f, $e = d;
    }
    function gy(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          F(
            e,
            uh,
            t
          );
        } catch (a) {
          Et(e, e.return, a);
        }
      }
    }
    function Sy(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          F(
            e,
            Xy,
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
          return e === null && (e = t.stateNode = new jb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new jb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function qc(t, e) {
      var a = Jp(t);
      e.forEach(function(c) {
        if (!a.has(c)) {
          if (a.add(c), bu)
            if (Wh !== null && Fh !== null)
              Fo(Fh, Wh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Yi.bind(null, t, c);
          c.then(o, o);
        }
      });
    }
    function Pl(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var c = 0; c < a.length; c++) {
          var o = t, f = e, d = a[c], h = Te(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (Vc(y.type)) {
                  Al = y.stateNode, fn = !1;
                  break t;
                }
                break;
              case 5:
                Al = y.stateNode, fn = !1;
                break t;
              case 3:
              case 4:
                Al = y.stateNode.containerInfo, fn = !0;
                break t;
            }
            y = y.return;
          }
          if (Al === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          vy(o, f, d), Al = null, fn = !1, (d.mode & Ot) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
            d,
            it,
            rt,
            "Unmount"
          ), rl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          qs(e, t), e = e.sibling;
    }
    function qs(t, e) {
      var a = Te(), c = Pa(), o = za(), f = tn(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pl(e, t), ta(t), h & 4 && (Nc(
            Qa | _u,
            t,
            t.return
          ), Fu(Qa | _u, t), Nd(
            t,
            t.return,
            Xn | _u
          ));
          break;
        case 1:
          if (Pl(e, t), ta(t), h & 512 && (El || d === null || an(d, d.return)), h & 64 && co && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = oc, Pl(e, t), ta(t), h & 512 && (El || d === null || an(d, d.return)), h & 4) {
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
                        )[0], (!p || p[Sf] || p[ze] || p.namespaceURI === At || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), Ae(p, h, d), p[ze] = t, Ve(p), h = p;
                        break t;
                      case "link":
                        var A = cf(
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
                        p = y.createElement(h), Ae(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (A = cf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (D = 0; D < A.length; D++)
                            if (p = A[D], ae(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Ae(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[ze] = t, Ve(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  Tv(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = oh(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Tv(
                y,
                t.type,
                t.stateNode
              ) : oh(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && Yd(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Pl(e, t), ta(t), h & 512 && (El || d === null || an(d, d.return)), d !== null && h & 4 && Yd(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Pl(e, t), ta(t), h & 512 && (El || d === null || an(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              F(
                t,
                nh,
                y
              );
            } catch ($) {
              Et(t, t.return, $);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, Yd(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (G1 = !0, t.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Pl(e, t), ta(t), h & 4) {
            if (t.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = t.memoizedProps, d = d !== null ? d.memoizedProps : h, y = t.stateNode;
            try {
              F(
                t,
                Wg,
                y,
                d,
                h
              );
            } catch ($) {
              Et(t, t.return, $);
            }
          }
          break;
        case 3:
          if (y = In(), Rg = null, p = oc, oc = ch(e.containerInfo), Pl(e, t), oc = p, ta(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              F(
                t,
                Gy,
                e.containerInfo
              );
            } catch ($) {
              Et(t, t.return, $);
            }
          G1 && (G1 = !1, Kp(t)), e.effectDuration += Mo(
            y
          );
          break;
        case 4:
          h = oc, oc = ch(
            t.stateNode.containerInfo
          ), Pl(e, t), ta(t), oc = h;
          break;
        case 12:
          h = In(), Pl(e, t), ta(t), t.stateNode.effectDuration += Kl(h);
          break;
        case 31:
          Pl(e, t), ta(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 13:
          Pl(e, t), ta(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (hg = vl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var S = d !== null && d.memoizedState !== null, H = co, J = El;
          if (co = H || y, El = J || S, Pl(e, t), El = J, co = H, S && !y && !H && !J && (t.mode & Ot) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && td(
            t,
            it,
            rt
          ), ta(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~T0 : e._visibility | T0, !y || d === null || S || co || El || (Yc(t), (t.mode & Ot) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
              t,
              it,
              rt,
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
                  } catch ($) {
                    Et(S, S.return, $);
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
                  } catch ($) {
                    Et(S, S.return, $);
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
                  } catch ($) {
                    Et(S, S.return, $);
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
          Pl(e, t), ta(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, qc(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Pl(e, t), ta(t);
      }
      (t.mode & Ot) !== mt && 0 <= it && 0 <= rt && (($e || 0.05 < je) && gn(
        t,
        it,
        rt,
        je,
        Be
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < rt - it && (py(
        t.return.alternate,
        t.return
      ) || Fa(
        t,
        it,
        rt,
        "Mount"
      ))), rl(a), Aa(c), Be = o, $e = f;
    }
    function ta(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          F(t, my, t);
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
    function Ca(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          Gd(t, e.alternate, e), e = e.sibling;
    }
    function Xd(t) {
      var e = Te(), a = Pa(), c = za(), o = tn();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nd(
            t,
            t.return,
            Xn
          ), Yc(t);
          break;
        case 1:
          an(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && qd(
            t,
            t.return,
            f
          ), Yc(t);
          break;
        case 27:
          F(
            t,
            lc,
            t.stateNode
          );
        case 26:
        case 5:
          an(t, t.return), Yc(t);
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
      (t.mode & Ot) !== mt && 0 <= it && 0 <= rt && ($e || 0.05 < je) && gn(
        t,
        it,
        rt,
        je,
        Be
      ), rl(e), Aa(a), Be = c, $e = o;
    }
    function Yc(t) {
      for (t = t.child; t !== null; )
        Xd(t), t = t.sibling;
    }
    function by(t, e, a, c) {
      var o = Te(), f = Pa(), d = za(), h = tn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Rn(
            t,
            a,
            c
          ), Vp(a, Xn);
          break;
        case 1:
          if (Rn(
            t,
            a,
            c
          ), e = a.stateNode, typeof e.componentDidMount == "function" && F(
            a,
            O1,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              F(
                a,
                Qm,
                e,
                t
              );
            } catch (p) {
              Et(a, a.return, p);
            }
          }
          c && y & 64 && ry(a), Ni(a, a.return);
          break;
        case 27:
          yy(a);
        case 26:
        case 5:
          Rn(
            t,
            a,
            c
          ), c && e === null && y & 4 && xc(a), Ni(a, a.return);
          break;
        case 12:
          if (c && y & 4) {
            y = In(), Rn(
              t,
              a,
              c
            ), c = a.stateNode, c.effectDuration += Kl(y);
            try {
              F(
                a,
                dy,
                a,
                e,
                Mf,
                c.effectDuration
              );
            } catch (p) {
              Et(a, a.return, p);
            }
          } else
            Rn(
              t,
              a,
              c
            );
          break;
        case 31:
          Rn(
            t,
            a,
            c
          ), c && y & 4 && gy(t, a);
          break;
        case 13:
          Rn(
            t,
            a,
            c
          ), c && y & 4 && Sy(t, a);
          break;
        case 22:
          a.memoizedState === null && Rn(
            t,
            a,
            c
          ), Ni(a, a.return);
          break;
        case 30:
          break;
        default:
          Rn(
            t,
            a,
            c
          );
      }
      (a.mode & Ot) !== mt && 0 <= it && 0 <= rt && ($e || 0.05 < je) && gn(
        a,
        it,
        rt,
        je,
        Be
      ), rl(o), Aa(f), Be = d, $e = h;
    }
    function Rn(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        by(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function Ys(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && vi(t), a != null && fs(a));
    }
    function js(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (vi(e), t != null && fs(t));
    }
    function Ha(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          Ty(
            t,
            e,
            a,
            c,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function Ty(t, e, a, c, o) {
      var f = Te(), d = Pa(), h = za(), y = tn(), p = Af, A = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & Ot) !== mt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ed(
            e,
            e.actualStartTime,
            o,
            Cl,
            a
          ), Ha(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && Bs(e, Va | _u);
          break;
        case 1:
          (e.mode & Ot) !== mt && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? Dm(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && ed(
            e,
            e.actualStartTime,
            o,
            Cl,
            a
          )), Ha(
            t,
            e,
            a,
            c,
            o
          );
          break;
        case 3:
          var D = In(), S = Cl;
          Cl = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, Ha(
            t,
            e,
            a,
            c,
            o
          ), Cl = S, A & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), c = e.memoizedState.cache, c !== a && (vi(c), a != null && fs(a))), t.passiveEffectDuration += Mo(
            D
          );
          break;
        case 12:
          if (A & 2048) {
            A = In(), Ha(
              t,
              e,
              a,
              c,
              o
            ), t = e.stateNode, t.passiveEffectDuration += Kl(A);
            try {
              F(
                e,
                wp,
                e,
                e.alternate,
                Mf,
                t.passiveEffectDuration
              );
            } catch (H) {
              Et(e, e.return, H);
            }
          } else
            Ha(
              t,
              e,
              a,
              c,
              o
            );
          break;
        case 31:
          A = Cl, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D !== null && S === null ? (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (Cl = !1, D = D.hydrationErrors, D !== null && Dm(
            e,
            e.actualStartTime,
            o,
            D
          )) : Cl = !0) : Cl = !1, Ha(
            t,
            e,
            a,
            c,
            o
          ), Cl = A;
          break;
        case 13:
          A = Cl, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D === null || D.dehydrated === null || S !== null && S.dehydrated !== null ? Cl = !1 : (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (Cl = !1, D = D.hydrationErrors, D !== null && Dm(
            e,
            e.actualStartTime,
            o,
            D
          )) : Cl = !0), Ha(
            t,
            e,
            a,
            c,
            o
          ), Cl = A;
          break;
        case 23:
          break;
        case 22:
          S = e.stateNode, D = e.alternate, e.memoizedState !== null ? S._visibility & Fi ? Ha(
            t,
            e,
            a,
            c,
            o
          ) : xi(
            t,
            e,
            a,
            c,
            o
          ) : S._visibility & Fi ? Ha(
            t,
            e,
            a,
            c,
            o
          ) : (S._visibility |= Fi, jc(
            t,
            e,
            a,
            c,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & Ot) === mt || Cl || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && td(e, t, o), 0 <= it && 0 <= rt && 0.05 < rt - it && td(
            e,
            it,
            rt
          ))), A & 2048 && Ys(
            D,
            e
          );
          break;
        case 24:
          Ha(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && js(e.alternate, e);
          break;
        default:
          Ha(
            t,
            e,
            a,
            c,
            o
          );
      }
      (e.mode & Ot) !== mt && ((t = !Cl && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && Fa(
        e,
        a,
        o,
        "Mount"
      )), 0 <= it && 0 <= rt && (($e || 0.05 < je) && gn(
        e,
        it,
        rt,
        je,
        Be
      ), t && 0.05 < rt - it && Fa(
        e,
        it,
        rt,
        "Mount"
      ))), rl(f), Aa(d), Be = h, $e = y, Af = p;
    }
    function jc(t, e, a, c, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        Gs(
          t,
          e,
          a,
          c,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function Gs(t, e, a, c, o, f) {
      var d = Te(), h = Pa(), y = za(), p = tn(), A = Af;
      o && (e.mode & Ot) !== mt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ed(
        e,
        e.actualStartTime,
        f,
        Cl,
        a
      );
      var D = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          jc(
            t,
            e,
            a,
            c,
            o,
            f
          ), Bs(e, Va);
          break;
        case 23:
          break;
        case 22:
          var S = e.stateNode;
          e.memoizedState !== null ? S._visibility & Fi ? jc(
            t,
            e,
            a,
            c,
            o,
            f
          ) : xi(
            t,
            e,
            a,
            c,
            f
          ) : (S._visibility |= Fi, jc(
            t,
            e,
            a,
            c,
            o,
            f
          )), o && D & 2048 && Ys(
            e.alternate,
            e
          );
          break;
        case 24:
          jc(
            t,
            e,
            a,
            c,
            o,
            f
          ), o && D & 2048 && js(e.alternate, e);
          break;
        default:
          jc(
            t,
            e,
            a,
            c,
            o,
            f
          );
      }
      (e.mode & Ot) !== mt && 0 <= it && 0 <= rt && ($e || 0.05 < je) && gn(
        e,
        it,
        rt,
        je,
        Be
      ), rl(d), Aa(h), Be = y, $e = p, Af = A;
    }
    function xi(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = c, p = e !== null ? e.actualStartTime : o, A = Af;
          (f.mode & Ot) !== mt && 0 < f.actualStartTime && (f.flags & 1) !== 0 && ed(
            f,
            f.actualStartTime,
            p,
            Cl,
            h
          );
          var D = f.flags;
          switch (f.tag) {
            case 22:
              xi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && Ys(f.alternate, f);
              break;
            case 24:
              xi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && js(f.alternate, f);
              break;
            default:
              xi(
                d,
                f,
                h,
                y,
                p
              );
          }
          Af = A, f = e;
        }
    }
    function qi(t, e, a) {
      if (t.subtreeFlags & Q0)
        for (t = t.child; t !== null; )
          Qd(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function Qd(t, e, a) {
      switch (t.tag) {
        case 26:
          qi(
            t,
            e,
            a
          ), t.flags & Q0 && t.memoizedState !== null && wy(
            a,
            oc,
            t.memoizedState,
            t.memoizedProps
          );
          break;
        case 5:
          qi(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          var c = oc;
          oc = ch(
            t.stateNode.containerInfo
          ), qi(
            t,
            e,
            a
          ), oc = c;
          break;
        case 22:
          t.memoizedState === null && (c = t.alternate, c !== null && c.memoizedState !== null ? (c = Q0, Q0 = 16777216, qi(
            t,
            e,
            a
          ), Q0 = c) : qi(
            t,
            e,
            a
          ));
          break;
        default:
          qi(
            t,
            e,
            a
          );
      }
    }
    function Ey(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Ba(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = Te();
            Vl = c, su(
              c,
              t
            ), (c.mode & Ot) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
              c,
              it,
              rt,
              "Unmount"
            ), rl(o);
          }
        Ey(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Vd(t), t = t.sibling;
    }
    function Vd(t) {
      var e = Te(), a = Pa(), c = za(), o = tn();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ba(t), t.flags & 2048 && xd(
            t,
            t.return,
            Va | _u
          );
          break;
        case 3:
          var f = In();
          Ba(t), t.stateNode.passiveEffectDuration += Mo(f);
          break;
        case 12:
          f = In(), Ba(t), t.stateNode.passiveEffectDuration += Kl(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & Fi && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~Fi, Zd(t), (t.mode & Ot) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
            t,
            it,
            rt,
            "Disconnect"
          )) : Ba(t);
          break;
        default:
          Ba(t);
      }
      (t.mode & Ot) !== mt && 0 <= it && 0 <= rt && ($e || 0.05 < je) && gn(
        t,
        it,
        rt,
        je,
        Be
      ), rl(e), Aa(a), $e = o, Be = c;
    }
    function Zd(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = Te();
            Vl = c, su(
              c,
              t
            ), (c.mode & Ot) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
              c,
              it,
              rt,
              "Unmount"
            ), rl(o);
          }
        Ey(t);
      }
      for (t = t.child; t !== null; )
        Ay(t), t = t.sibling;
    }
    function Ay(t) {
      var e = Te(), a = Pa(), c = za(), o = tn();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          xd(
            t,
            t.return,
            Va
          ), Zd(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & Fi && (f._visibility &= ~Fi, Zd(t));
          break;
        default:
          Zd(t);
      }
      (t.mode & Ot) !== mt && 0 <= it && 0 <= rt && ($e || 0.05 < je) && gn(
        t,
        it,
        rt,
        je,
        Be
      ), rl(e), Aa(a), $e = o, Be = c;
    }
    function su(t, e) {
      for (; Vl !== null; ) {
        var a = Vl, c = a, o = e, f = Te(), d = Pa(), h = za(), y = tn();
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            xd(
              c,
              o,
              Va
            );
            break;
          case 23:
          case 22:
            c.memoizedState !== null && c.memoizedState.cachePool !== null && (o = c.memoizedState.cachePool.pool, o != null && vi(o));
            break;
          case 24:
            fs(c.memoizedState.cache);
        }
        if ((c.mode & Ot) !== mt && 0 <= it && 0 <= rt && ($e || 0.05 < je) && gn(
          c,
          it,
          rt,
          je,
          Be
        ), rl(f), Aa(d), $e = y, Be = h, c = a.child, c !== null) c.return = a, Vl = c;
        else
          t: for (a = t; Vl !== null; ) {
            if (c = Vl, f = c.sibling, d = c.return, Je(c), c === a) {
              Vl = null;
              break t;
            }
            if (f !== null) {
              f.return = d, Vl = f;
              break t;
            }
            Vl = d;
          }
      }
    }
    function zy() {
      VT.forEach(function(t) {
        return t();
      });
    }
    function Dy() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || N.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function jl(t) {
      if ((Lt & Hl) !== Zl && Rt !== 0)
        return Rt & -Rt;
      var e = N.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), xy()) : rp();
    }
    function wo() {
      if (rn === 0)
        if ((Rt & 536870912) === 0 || Yt) {
          var t = or;
          or <<= 1, (or & 3932160) === 0 && (or = 262144), rn = t;
        } else rn = 536870912;
      return t = Gn.current, t !== null && (t.flags |= 32), rn;
    }
    function yt(t, e, a) {
      if (Ph && console.error("useInsertionEffect must not schedule updates."), F1 && (vg = !0), (t === pe && (fe === zr || fe === Dr) || t.cancelPendingCommit !== null) && (ru(t, 0), nn(
        t,
        Rt,
        rn,
        !1
      )), rc(t, a), (Lt & Hl) !== Zl && t === pe) {
        if (gu)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = Ct && at(Ct) || "Unknown", Pb.has(t) || (Pb.add(t), e = at(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              Ib || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Ib = !0);
          }
      } else
        bu && oa(t, e, a), Zs(e), t === pe && ((Lt & Hl) === Zl && (xf |= a), Ge === Hf && nn(
          t,
          Rt,
          rn,
          !1
        )), da(t);
    }
    function $p(t, e, a) {
      if ((Lt & (Hl | Qn)) !== Zl)
        throw Error("Should not already be working.");
      if (Rt !== 0 && Ct !== null) {
        var c = Ct, o = vl();
        switch (wS) {
          case L0:
          case zr:
            var f = M0;
            De && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Eu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Eu,
              void 0,
              "primary-light"
            ));
            break;
          case Dr:
            f = M0, De && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Eu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Eu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            De && (c = o - M0, 3 > c || console.timeStamp(
              "Blocked",
              M0,
              o,
              Eu,
              void 0,
              5 > c ? "primary-light" : 10 > c ? "primary" : 100 > c ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ol(t, e)) ? ku(t, e) : $o(t, e, !0);
      var d = a;
      do {
        if (f === io) {
          kh && !a && nn(t, e, 0, !1), e = fe, M0 = Sl(), wS = e;
          break;
        } else {
          if (c = vl(), o = t.current.alternate, d && !Fp(o)) {
            vn(e), o = Ql, f = c, !De || f <= o || (Pe ? Pe.run(
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
            )), Gc(e, c), f = $o(t, e, !1), d = !1;
            continue;
          }
          if (f === Ar) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              vn(e), Om(
                Ql,
                c,
                e,
                Pe
              ), Gc(e, c), e = h;
              t: {
                c = t, f = d, d = J0;
                var y = c.current.memoizedState.isDehydrated;
                if (y && (ru(c, h).flags |= 256), h = $o(
                  c,
                  h,
                  !1
                ), h !== Ar) {
                  if (V1 && !y) {
                    c.errorRecoveryDisabledLanes |= f, xf |= f, f = Hf;
                    break t;
                  }
                  c = Za, Za = d, c !== null && (Za === null ? Za = c : Za.push.apply(
                    Za,
                    c
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Ar) continue;
              c = vl();
            }
          }
          if (f === Z0) {
            vn(e), Om(
              Ql,
              c,
              e,
              Pe
            ), Gc(e, c), ru(t, 0), nn(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case io:
              case Z0:
                throw Error("Root did not complete. This is a bug in React.");
              case Hf:
                if ((e & 4194048) !== e) break;
              case fg:
                vn(e), zp(
                  Ql,
                  c,
                  e,
                  Pe
                ), Gc(e, c), o = e, (o & 127) !== 0 ? $v = c : (o & 4194048) !== 0 && (Wv = c), nn(
                  a,
                  e,
                  rn,
                  !Bf
                );
                break t;
              case Ar:
                Za = null;
                break;
              case og:
              case Gb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (N.actQueue !== null)
              he(
                a,
                o,
                e,
                Za,
                K0,
                dg,
                rn,
                xf,
                Or,
                f,
                null,
                null,
                Ql,
                c
              );
            else {
              if ((e & 62914560) === e && (d = hg + Vb - vl(), 10 < d)) {
                if (nn(
                  a,
                  e,
                  rn,
                  !Bf
                ), xr(a, 0, !0) !== 0) break t;
                fc = e, a.timeoutHandle = i2(
                  Wp.bind(
                    null,
                    a,
                    o,
                    Za,
                    K0,
                    dg,
                    e,
                    rn,
                    xf,
                    Or,
                    Bf,
                    f,
                    "Throttled",
                    Ql,
                    c
                  ),
                  d
                );
                break t;
              }
              Wp(
                a,
                o,
                Za,
                K0,
                dg,
                e,
                rn,
                xf,
                Or,
                Bf,
                f,
                null,
                Ql,
                c
              );
            }
          }
        }
        break;
      } while (!0);
      da(t);
    }
    function Wp(t, e, a, c, o, f, d, h, y, p, A, D, S, H) {
      t.timeoutHandle = Cr;
      var J = e.subtreeFlags, $ = null;
      if ((J & 8192 || (J & 16785408) === 16785408) && ($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Wa
      }, Qd(e, f, $), J = (f & 62914560) === f ? hg - vl() : (f & 4194048) === f ? Qb - vl() : 0, J = fh($, J), J !== null)) {
        fc = f, t.cancelPendingCommit = J(
          he.bind(
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
            $,
            $.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < $.count ? 0 < $.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : $.imgCount === 1 ? "Suspended on an Image" : 0 < $.imgCount ? "Suspended on Images" : null,
            S,
            H
          )
        ), nn(
          t,
          f,
          d,
          !p
        );
        return;
      }
      he(
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
        $,
        D,
        S,
        H
      );
    }
    function Fp(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var c = 0; c < a.length; c++) {
            var o = a[c], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Ga(f(), o)) return !1;
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
    function nn(t, e, a, c) {
      e &= ~Z1, e &= ~xf, t.suspendedLanes |= e, t.pingedLanes &= ~e, c && (t.warmLanes |= e), c = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - Ul(o), d = 1 << f;
        c[f] = -1, o &= ~d;
      }
      a !== 0 && im(t, a, e);
    }
    function Na() {
      return (Lt & (Hl | Qn)) === Zl ? (hu(0), !1) : !0;
    }
    function Ld() {
      if (Ct !== null) {
        if (fe === sn)
          var t = Ct.return;
        else
          t = Ct, Do(), zc(t), Vh = null, q0 = 0, t = Ct;
        for (; t !== null; )
          sy(t.alternate, t), t = t.return;
        Ct = null;
      }
    }
    function Gc(t, e) {
      (t & 127) !== 0 && (mr = e), (t & 4194048) !== 0 && (eo = e), (t & 62914560) !== 0 && (ZS = e), (t & 2080374784) !== 0 && (LS = e);
    }
    function ru(t, e) {
      De && (console.timeStamp(
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
      var a = Ql;
      if (Ql = Sl(), Rt !== 0 && 0 < a) {
        if (vn(Rt), Ge === og || Ge === Hf)
          zp(
            a,
            Ql,
            e,
            Pe
          );
        else {
          var c = Ql, o = Pe;
          if (De && !(c <= a)) {
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
        Gc(Rt, Ql);
      }
      if (a = Pe, Pe = null, (e & 127) !== 0) {
        Pe = z0, o = 0 <= Fc && Fc < mr ? mr : Fc, c = 0 <= yr && yr < mr ? mr : yr, f = 0 <= c ? c : 0 <= o ? o : Ql, 0 <= $v ? (vn(2), Dp(
          $v,
          f,
          e,
          a
        )) : Fv & 127, a = o;
        var h = c, y = D0, p = 0 < Gh, A = Rf === A0, D = Rf === Kv;
        if (o = Ql, c = z0, f = T1, d = E1, De) {
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
        Fc = -1.1, Rf = 0, E1 = T1 = null, $v = -1.1, Gh = yr, yr = -1.1, mr = Sl();
      }
      if ((e & 4194048) !== 0 && (Pe = O0, o = 0 <= lo && lo < eo ? eo : lo, a = 0 <= Ru && Ru < eo ? eo : Ru, c = 0 <= Uf && Uf < eo ? eo : Uf, f = 0 <= c ? c : 0 <= a ? a : Ql, 0 <= Wv ? (vn(256), Dp(
        Wv,
        f,
        e,
        Pe
      )) : Fv & 4194048, D = c, h = pr, y = 0 < _f, p = A1 === Kv, f = Ql, c = O0, d = QS, A = VS, De && (Vt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < D ? D > o && (D = o) : D = o, o > D && h !== null && (S = y ? "secondary-light" : "warning", c ? c.run(
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
      ) : performance.measure(o, a))), Ru = lo = -1.1, A1 = 0, Wv = -1.1, _f = Uf, Uf = -1.1, eo = Sl()), (e & 62914560) !== 0 && (Fv & 62914560) !== 0 && (vn(4194304), Mm(ZS, Ql)), (e & 2080374784) !== 0 && (Fv & 2080374784) !== 0 && (vn(268435456), Mm(LS, Ql)), a = t.timeoutHandle, a !== Cr && (t.timeoutHandle = Cr, eE(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), fc = 0, Ld(), pe = t, Ct = a = Fn(
        t.current,
        null
      ), Rt = e, fe = sn, Vn = null, Bf = !1, kh = Ol(t, e), V1 = !1, Ge = io, Or = rn = Z1 = xf = Nf = 0, Za = J0 = null, dg = !1, (e & 8) !== 0 && (e |= e & 32), c = t.entangledLanes, c !== 0)
        for (t = t.entanglements, c &= e; 0 < c; )
          o = 31 - Ul(c), f = 1 << o, e |= t[o], c &= ~f;
      return Ic = e, ld(), t = xS(), 1e3 < t - NS && (N.recentlyCreatedOwnerStacks = 0, NS = t), cc.discardPendingWarnings(), a;
    }
    function Un(t, e) {
      vt = null, N.H = X0, N.getCurrentStack = null, gu = !1, pa = null, e === Qh || e === tg ? (e = bi(), fe = L0) : e === M1 ? (e = bi(), fe = Xb) : fe = e === Y1 ? Q1 : e !== null && typeof e == "object" && typeof e.then == "function" ? w0 : sg, Vn = e;
      var a = Ct;
      a === null ? (Ge = Z0, Rs(
        t,
        Jl(e, t.current)
      )) : a.mode & Ot && fd(a);
    }
    function Oy() {
      var t = Gn.current;
      return t === null ? !0 : (Rt & 4194048) === Rt ? Uu === null : (Rt & 62914560) === Rt || (Rt & 536870912) !== 0 ? t === Uu : !1;
    }
    function wd() {
      var t = N.H;
      return N.H = X0, t === null ? X0 : t;
    }
    function My() {
      var t = N.A;
      return N.A = QT, t;
    }
    function Jo(t) {
      Pe === null && (Pe = t._debugTask == null ? null : t._debugTask);
    }
    function Ko() {
      Ge = Hf, Bf || (Rt & 4194048) !== Rt && Gn.current !== null || (kh = !0), (Nf & 134217727) === 0 && (xf & 134217727) === 0 || pe === null || nn(
        pe,
        Rt,
        rn,
        !1
      );
    }
    function $o(t, e, a) {
      var c = Lt;
      Lt |= Hl;
      var o = wd(), f = My();
      if (pe !== t || Rt !== e) {
        if (bu) {
          var d = t.memoizedUpdaters;
          0 < d.size && (Fo(t, Rt), d.clear()), Nu(t, e);
        }
        K0 = null, ru(t, e);
      }
      e = !1, d = Ge;
      t: do
        try {
          if (fe !== sn && Ct !== null) {
            var h = Ct, y = Vn;
            switch (fe) {
              case Q1:
                Ld(), d = fg;
                break t;
              case L0:
              case zr:
              case Dr:
              case w0:
                Gn.current === null && (e = !0);
                var p = fe;
                if (fe = sn, Vn = null, Wo(t, h, y, p), a && kh) {
                  d = io;
                  break t;
                }
                break;
              default:
                p = fe, fe = sn, Vn = null, Wo(t, h, y, p);
            }
          }
          Ry(), d = Ge;
          break;
        } catch (A) {
          Un(t, A);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Do(), Lt = c, N.H = o, N.A = f, Ct === null && (pe = null, Rt = 0, ld()), d;
    }
    function Ry() {
      for (; Ct !== null; ) Jd(Ct);
    }
    function ku(t, e) {
      var a = Lt;
      Lt |= Hl;
      var c = wd(), o = My();
      if (pe !== t || Rt !== e) {
        if (bu) {
          var f = t.memoizedUpdaters;
          0 < f.size && (Fo(t, Rt), f.clear()), Nu(t, e);
        }
        K0 = null, mg = vl() + Zb, ru(t, e);
      } else
        kh = Ol(
          t,
          e
        );
      t: do
        try {
          if (fe !== sn && Ct !== null)
            e: switch (e = Ct, f = Vn, fe) {
              case sg:
                fe = sn, Vn = null, Wo(
                  t,
                  e,
                  f,
                  sg
                );
                break;
              case zr:
              case Dr:
                if (Gm(f)) {
                  fe = sn, Vn = null, Uy(e);
                  break;
                }
                e = function() {
                  fe !== zr && fe !== Dr || pe !== t || (fe = rg), da(t);
                }, f.then(e, e);
                break t;
              case L0:
                fe = rg;
                break t;
              case Xb:
                fe = X1;
                break t;
              case rg:
                Gm(f) ? (fe = sn, Vn = null, Uy(e)) : (fe = sn, Vn = null, Wo(
                  t,
                  e,
                  f,
                  rg
                ));
                break;
              case X1:
                var d = null;
                switch (Ct.tag) {
                  case 26:
                    d = Ct.memoizedState;
                  case 5:
                  case 27:
                    var h = Ct;
                    if (d ? Ht(d) : h.stateNode.complete) {
                      fe = sn, Vn = null;
                      var y = h.sibling;
                      if (y !== null) Ct = y;
                      else {
                        var p = h.return;
                        p !== null ? (Ct = p, Xs(p)) : Ct = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                fe = sn, Vn = null, Wo(
                  t,
                  e,
                  f,
                  X1
                );
                break;
              case w0:
                fe = sn, Vn = null, Wo(
                  t,
                  e,
                  f,
                  w0
                );
                break;
              case Q1:
                Ld(), Ge = fg;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          N.actQueue !== null ? Ry() : ke();
          break;
        } catch (A) {
          Un(t, A);
        }
      while (!0);
      return Do(), N.H = c, N.A = o, Lt = a, Ct !== null ? io : (pe = null, Rt = 0, ld(), Ge);
    }
    function ke() {
      for (; Ct !== null && !bh(); )
        Jd(Ct);
    }
    function Jd(t) {
      var e = t.alternate;
      (t.mode & Ot) !== mt ? (Xu(t), e = F(
        t,
        Hs,
        e,
        t,
        Ic
      ), fd(t)) : e = F(
        t,
        Hs,
        e,
        t,
        Ic
      ), t.memoizedProps = t.pendingProps, e === null ? Xs(t) : Ct = e;
    }
    function Uy(t) {
      var e = F(t, pl, t);
      t.memoizedProps = t.pendingProps, e === null ? Xs(t) : Ct = e;
    }
    function pl(t) {
      var e = t.alternate, a = (t.mode & Ot) !== mt;
      switch (a && Xu(t), t.tag) {
        case 15:
        case 0:
          e = ny(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            Rt
          );
          break;
        case 11:
          e = ny(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            Rt
          );
          break;
        case 5:
          zc(t);
        default:
          sy(e, t), t = Ct = Cm(t, Ic), e = Hs(e, t, Ic);
      }
      return a && fd(t), e;
    }
    function Wo(t, e, a, c) {
      Do(), zc(e), Vh = null, q0 = 0;
      var o = e.return;
      try {
        if (km(
          t,
          o,
          e,
          a,
          Rt
        )) {
          Ge = Z0, Rs(
            t,
            Jl(a, t.current)
          ), Ct = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Ct = o, f;
        Ge = Z0, Rs(
          t,
          Jl(a, t.current)
        ), Ct = null;
        return;
      }
      e.flags & 32768 ? (Yt || c === sg ? t = !0 : kh || (Rt & 536870912) !== 0 ? t = !1 : (Bf = t = !0, (c === zr || c === Dr || c === L0 || c === w0) && (c = Gn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), _y(e, t)) : Xs(e);
    }
    function Xs(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          _y(
            e,
            Bf
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, Xu(e), a = F(
          e,
          fy,
          a,
          e,
          Ic
        ), (e.mode & Ot) !== mt && ss(e), a !== null) {
          Ct = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          Ct = e;
          return;
        }
        Ct = e = t;
      } while (e !== null);
      Ge === io && (Ge = Gb);
    }
    function _y(t, e) {
      do {
        var a = Qp(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, Ct = a;
          return;
        }
        if ((t.mode & Ot) !== mt) {
          ss(t), a = t.actualDuration;
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
      Ge = fg, Ct = null;
    }
    function he(t, e, a, c, o, f, d, h, y, p, A, D, S, H) {
      t.cancelPendingCommit = null;
      do
        Qs();
      while (zl !== Yf);
      if (cc.flushLegacyContextWarning(), cc.flushPendingUnsafeLifecycleWarnings(), (Lt & (Hl | Qn)) !== Zl)
        throw Error("Should not already be working.");
      if (vn(a), p === Ar ? Om(
        S,
        H,
        a,
        Pe
      ) : c !== null ? Lg(
        S,
        H,
        a,
        c,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        Pe
      ) : Zg(
        S,
        H,
        a,
        Pe
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= p1, Gg(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === pe && (Ct = pe = null, Rt = 0), Ih = e, jf = t, fc = a, J1 = f, $1 = o, Wb = c, K1 = H, Fb = D, sc = yg, kb = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, ko(Ji, function() {
          return P0 = window.event, sc === yg && (sc = w1), Vs(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), to = null, Mf = Sl(), D !== null && wg(
          H,
          Mf,
          D,
          Pe
        ), c = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || c) {
          c = N.T, N.T = null, o = Wt.p, Wt.p = nl, d = Lt, Lt |= Qn;
          try {
            $g(t, e, a);
          } finally {
            Lt = d, Wt.p = o, N.T = c;
          }
        }
        zl = wb, ea(), du(), Cy();
      }
    }
    function ea() {
      if (zl === wb) {
        zl = Yf;
        var t = jf, e = Ih, a = fc, c = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || c) {
          c = N.T, N.T = null;
          var o = Wt.p;
          Wt.p = nl;
          var f = Lt;
          Lt |= Qn;
          try {
            Wh = a, Fh = t, gi(), qs(e, t), Fh = Wh = null, a = uS;
            var d = Pr(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && bp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Am(h)) {
                var p = y.start, A = y.end;
                if (A === void 0 && (A = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    A,
                    h.value.length
                  );
                else {
                  var D = h.ownerDocument || document, S = D && D.defaultView || window;
                  if (S.getSelection) {
                    var H = S.getSelection(), J = h.textContent.length, $ = Math.min(
                      y.start,
                      J
                    ), be = y.end === void 0 ? $ : Math.min(y.end, J);
                    !H.extend && $ > be && (d = be, be = $, $ = d);
                    var Qt = Sp(
                      h,
                      $
                    ), g = Sp(
                      h,
                      be
                    );
                    if (Qt && g && (H.rangeCount !== 1 || H.anchorNode !== Qt.node || H.anchorOffset !== Qt.offset || H.focusNode !== g.node || H.focusOffset !== g.offset)) {
                      var b = D.createRange();
                      b.setStart(Qt.node, Qt.offset), H.removeAllRanges(), $ > be ? (H.addRange(b), H.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), H.addRange(b));
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
            Cg = !!nS, uS = nS = null;
          } finally {
            Lt = f, Wt.p = o, N.T = c;
          }
        }
        t.current = e, zl = Jb;
      }
    }
    function du() {
      if (zl === Jb) {
        zl = Yf;
        var t = kb;
        if (t !== null) {
          Mf = Sl();
          var e = Pi, a = Mf;
          !De || a <= e || console.timeStamp(
            t,
            e,
            a,
            Vt,
            Xt,
            "secondary-light"
          );
        }
        t = jf, e = Ih, a = fc;
        var c = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || c) {
          c = N.T, N.T = null;
          var o = Wt.p;
          Wt.p = nl;
          var f = Lt;
          Lt |= Qn;
          try {
            Wh = a, Fh = t, gi(), Gd(
              t,
              e.alternate,
              e
            ), Fh = Wh = null;
          } finally {
            Lt = f, Wt.p = o, N.T = c;
          }
        }
        t = K1, e = Fb, Pi = Sl(), t = e === null ? t : Mf, e = Pi, a = sc === L1, c = Pe, to !== null ? Op(
          t,
          e,
          to,
          !1,
          c
        ) : !De || e <= t || (c ? c.run(
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
        )), zl = Kb;
      }
    }
    function Cy() {
      if (zl === $b || zl === Kb) {
        if (zl === $b) {
          var t = Pi;
          Pi = Sl();
          var e = Pi, a = sc === L1;
          !De || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            Vt,
            Xt,
            a ? " error" : "secondary-light"
          ), sc !== L1 && (sc = Lb);
        }
        zl = Yf, Th(), t = jf;
        var c = Ih;
        e = fc, a = Wb;
        var o = c.actualDuration !== 0 || (c.subtreeFlags & 10256) !== 0 || (c.flags & 10256) !== 0;
        o ? zl = pg : (zl = Yf, Ih = jf = null, Hy(
          t,
          t.pendingLanes
        ), Mr = 0, W0 = null);
        var f = t.pendingLanes;
        if (f === 0 && (qf = null), o || Wd(t), f = Ll(e), c = c.stateNode, al && typeof al.onCommitFiberRoot == "function")
          try {
            var d = (c.current.flags & 128) === 128;
            switch (f) {
              case nl:
                var h = o0;
                break;
              case _l:
                h = Eh;
                break;
              case Xl:
                h = Ji;
                break;
              case Kc:
                h = Ah;
                break;
              default:
                h = Ji;
            }
            al.onCommitFiberRoot(
              Ki,
              c,
              h,
              d
            );
          } catch (D) {
            Su || (Su = !0, console.error(
              "React instrumentation encountered an error: %o",
              D
            ));
          }
        if (bu && t.memoizedUpdaters.clear(), zy(), a !== null) {
          d = N.T, h = Wt.p, Wt.p = nl, N.T = null;
          try {
            var y = t.onRecoverableError;
            for (c = 0; c < a.length; c++) {
              var p = a[c], A = kp(p.stack);
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
        (fc & 3) !== 0 && Qs(), da(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (Iv = !0, t === W1 ? $0++ : ($0 = 0, W1 = t)) : $0 = 0, o || Gc(e, Pi), hu(0);
      }
    }
    function kp(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function Hy(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, fs(e)));
    }
    function Qs() {
      return ea(), du(), Cy(), Vs();
    }
    function Vs() {
      if (zl !== pg) return !1;
      var t = jf, e = J1;
      J1 = 0;
      var a = Ll(fc), c = Xl > a ? Xl : a;
      a = N.T;
      var o = Wt.p;
      try {
        Wt.p = c, N.T = null;
        var f = $1;
        $1 = null, c = jf;
        var d = fc;
        if (zl = Yf, Ih = jf = null, fc = 0, (Lt & (Hl | Qn)) !== Zl)
          throw Error("Cannot flush passive effects while already rendering.");
        vn(d), F1 = !0, vg = !1;
        var h = 0;
        if (to = null, h = vl(), sc === Lb)
          Mm(
            Pi,
            h,
            NT
          );
        else {
          var y = Pi, p = h, A = sc === w1;
          !De || p <= y || (Pe ? Pe.run(
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
        y = Lt, Lt |= Qn;
        var D = c.current;
        gi(), Vd(D);
        var S = c.current;
        D = K1, gi(), Ty(
          c,
          S,
          d,
          f,
          D
        ), Wd(c), Lt = y;
        var H = vl();
        if (S = h, D = Pe, to !== null ? Op(
          S,
          H,
          to,
          !0,
          D
        ) : !De || H <= S || (D ? D.run(
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
        )), Gc(d, H), hu(0, !1), vg ? c === W0 ? Mr++ : (Mr = 0, W0 = c) : Mr = 0, vg = F1 = !1, al && typeof al.onPostCommitFiberRoot == "function")
          try {
            al.onPostCommitFiberRoot(Ki, c);
          } catch ($) {
            Su || (Su = !0, console.error(
              "React instrumentation encountered an error: %o",
              $
            ));
          }
        var J = c.current.stateNode;
        return J.effectDuration = 0, J.passiveEffectDuration = 0, !0;
      } finally {
        Wt.p = o, N.T = a, Hy(t, e);
      }
    }
    function la(t, e, a) {
      e = Jl(a, e), Hp(e), e = Dd(t.stateNode, e, 2), t = tu(t, e, 2), t !== null && (rc(t, 2), da(t));
    }
    function Et(t, e, a) {
      if (Ph = !1, t.tag === 3)
        la(t, t, a);
      else {
        for (; e !== null; ) {
          if (e.tag === 3) {
            la(
              e,
              t,
              a
            );
            return;
          }
          if (e.tag === 1) {
            var c = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (qf === null || !qf.has(c))) {
              t = Jl(a, t), Hp(t), a = Od(2), c = tu(e, a, 2), c !== null && (Md(
                a,
                c,
                e,
                t
              ), rc(c, 2), da(c));
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
    function Kd(t, e, a) {
      var c = t.pingCache;
      if (c === null) {
        c = t.pingCache = new ZT();
        var o = /* @__PURE__ */ new Set();
        c.set(e, o);
      } else
        o = c.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), c.set(e, o));
      o.has(a) || (V1 = !0, o.add(a), c = ra.bind(null, t, e, a), bu && Fo(t, a), e.then(c, c));
    }
    function ra(t, e, a) {
      var c = t.pingCache;
      c !== null && c.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Fc && (mr = Fc = Sl(), z0 = Jv("Promise Resolved"), Rf = Kv) : (a & 4194048) !== 0 && 0 > Ru && (eo = Ru = Sl(), O0 = Jv("Promise Resolved"), A1 = Kv), Dy() && N.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), pe === t && (Rt & a) === a && (Ge === Hf || Ge === og && (Rt & 62914560) === Rt && vl() - hg < Vb ? (Lt & Hl) === Zl && ru(t, 0) : Z1 |= a, Or === Rt && (Or = 0)), da(t);
    }
    function By(t, e) {
      e === 0 && (e = qr()), t = ql(t, e), t !== null && (rc(t, e), da(t));
    }
    function Iu(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), By(t, a);
    }
    function Yi(t, e) {
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
      c !== null && c.delete(e), By(t, a);
    }
    function _n(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var c = t, o = e, f = o.type === ua;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && F(
            o,
            $d,
            c,
            o
          ) : _n(
            c,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? F(
            o,
            $d,
            c,
            o
          ) : o.subtreeFlags & 67108864 && F(
            o,
            _n,
            c,
            o,
            f
          )), e = e.sibling;
        }
    }
    function $d(t, e) {
      re(!0);
      try {
        Xd(e), Ay(e), by(t, e.alternate, e, !1), Gs(t, e, 0, null, !1, 0);
      } finally {
        re(!1);
      }
    }
    function Wd(t) {
      var e = !0;
      t.current.mode & (va | uc) || (e = !1), _n(
        t,
        t.current,
        e
      );
    }
    function un(t) {
      if ((Lt & Hl) === Zl) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = at(t) || "ReactComponent", gg !== null) {
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
      bu && t.memoizedUpdaters.forEach(function(a) {
        oa(t, a, e);
      });
    }
    function ko(t, e) {
      var a = N.actQueue;
      return a !== null ? (a.push(e), JT) : i0(t, e);
    }
    function Zs(t) {
      Dy() && N.actQueue === null && F(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          at(t)
        );
      });
    }
    function da(t) {
      t !== tm && t.next === null && (tm === null ? Sg = tm = t : tm = tm.next = t), bg = !0, N.actQueue !== null ? I1 || (I1 = !0, Pp()) : k1 || (k1 = !0, Pp());
    }
    function hu(t, e) {
      if (!P1 && bg) {
        P1 = !0;
        do
          for (var a = !1, c = Sg; c !== null; ) {
            if (t !== 0) {
              var o = c.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = c.suspendedLanes, h = c.pingedLanes;
                f = (1 << 31 - Ul(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, Ls(c, f));
            } else
              f = Rt, f = xr(
                c,
                c === pe ? f : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== Cr
              ), (f & 3) === 0 || Ol(c, f) || (a = !0, Ls(c, f));
            c = c.next;
          }
        while (a);
        P1 = !1;
      }
    }
    function Ip() {
      P0 = window.event, Fd();
    }
    function Fd() {
      bg = I1 = k1 = !1;
      var t = 0;
      Gf !== 0 && Yy() && (t = Gf);
      for (var e = vl(), a = null, c = Sg; c !== null; ) {
        var o = c.next, f = Io(c, e);
        f === 0 ? (c.next = null, a === null ? Sg = o : a.next = o, o === null && (tm = a)) : (a = c, (t !== 0 || (f & 3) !== 0) && (bg = !0)), c = o;
      }
      zl !== Yf && zl !== pg || hu(t), Gf !== 0 && (Gf = 0);
    }
    function Io(t, e) {
      for (var a = t.suspendedLanes, c = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ul(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & c) !== 0) && (o[d] = jg(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = pe, a = Rt, a = xr(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Cr
      ), c = t.callbackNode, a === 0 || t === e && (fe === zr || fe === Dr) || t.cancelPendingCommit !== null)
        return c !== null && kd(c), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || Ol(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || N.actQueue !== null && c !== tS)
          kd(c);
        else return e;
        switch (Ll(a)) {
          case nl:
          case _l:
            a = Eh;
            break;
          case Xl:
            a = Ji;
            break;
          case Kc:
            a = Ah;
            break;
          default:
            a = Ji;
        }
        return c = Ny.bind(null, t), N.actQueue !== null ? (N.actQueue.push(c), a = tS) : a = i0(a, c), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return c !== null && kd(c), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Ny(t, e) {
      if (Iv = kv = !1, P0 = window.event, zl !== Yf && zl !== pg)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (sc === yg && (sc = w1), Qs() && t.callbackNode !== a)
        return null;
      var c = Rt;
      return c = xr(
        t,
        t === pe ? c : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Cr
      ), c === 0 ? null : ($p(
        t,
        c,
        e
      ), Io(t, vl()), t.callbackNode != null && t.callbackNode === a ? Ny.bind(null, t) : null);
    }
    function Ls(t, e) {
      if (Qs()) return null;
      kv = Iv, Iv = !1, $p(t, e, !0);
    }
    function kd(t) {
      t !== tS && t !== null && Sh(t);
    }
    function Pp() {
      N.actQueue !== null && N.actQueue.push(function() {
        return Fd(), null;
      }), lE(function() {
        (Lt & (Hl | Qn)) !== Zl ? i0(
          o0,
          Ip
        ) : Fd();
      });
    }
    function xy() {
      if (Gf === 0) {
        var t = vr;
        t === 0 && (t = vf, vf <<= 1, (vf & 261888) === 0 && (vf = 256)), Gf = t;
      }
      return Gf;
    }
    function wt(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (ae(t, "action"), Pf("" + t));
    }
    function ce(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function xt(t, e, a, c, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = wt(
          (o[ca] || null).action
        ), d = c.submitter;
        d && (e = (e = d[ca] || null) ? wt(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
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
                  if (Gf !== 0) {
                    var y = d ? ce(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), $u(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? ce(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), $u(
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
        d1(c);
      }
      t.currentTarget = null;
    }
    function Pt(t, e) {
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
    function dt(t, e) {
      eS.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[$i];
      a === void 0 && (a = e[$i] = /* @__PURE__ */ new Set());
      var c = t + "__bubble";
      a.has(c) || (Id(e, t, 2, !1), a.add(c));
    }
    function mu(t, e, a) {
      eS.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var c = 0;
      e && (c |= 4), Id(
        a,
        t,
        c,
        e
      );
    }
    function Xc(t) {
      if (!t[Tg]) {
        t[Tg] = !0, Nv.forEach(function(a) {
          a !== "selectionchange" && (eS.has(a) || mu(a, !1, t), mu(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Tg] || (e[Tg] = !0, mu("selectionchange", !1, e));
      }
    }
    function Id(t, e, a, c) {
      switch (dh(e)) {
        case nl:
          var o = Fy;
          break;
        case _l:
          o = Rl;
          break;
        default:
          o = ky;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !l1 || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), c ? o !== void 0 ? t.addEventListener(e, a, {
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
    function Cn(t, e, a, c, o) {
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
              if (d = xu(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                c = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          c = c.return;
        }
      Wr(function() {
        var p = f, A = yn(a), D = [];
        t: {
          var S = BS.get(t);
          if (S !== void 0) {
            var H = Gv, J = t;
            switch (t) {
              case "keypress":
                if (ts(a) === 0) break t;
              case "keydown":
              case "keyup":
                H = iT;
                break;
              case "focusin":
                J = "focus", H = c1;
                break;
              case "focusout":
                J = "blur", H = c1;
                break;
              case "beforeblur":
              case "afterblur":
                H = c1;
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
                H = SS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                H = W2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                H = sT;
                break;
              case US:
              case _S:
              case CS:
                H = I2;
                break;
              case HS:
                H = dT;
                break;
              case "scroll":
              case "scrollend":
                H = K2;
                break;
              case "wheel":
                H = mT;
                break;
              case "copy":
              case "cut":
              case "paste":
                H = tT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                H = TS;
                break;
              case "toggle":
              case "beforetoggle":
                H = pT;
            }
            var $ = (e & 4) !== 0, be = !$ && (t === "scroll" || t === "scrollend"), Qt = $ ? S !== null ? S + "Capture" : null : S;
            $ = [];
            for (var g = p, b; g !== null; ) {
              var E = g;
              if (b = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || b === null || Qt === null || (E = $n(g, Qt), E != null && $.push(
                me(
                  g,
                  E,
                  b
                )
              )), be) break;
              g = g.return;
            }
            0 < $.length && (S = new H(
              S,
              J,
              null,
              a,
              A
            ), D.push({
              event: S,
              listeners: $
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (S = t === "mouseover" || t === "pointerover", H = t === "mouseout" || t === "pointerout", S && a !== h0 && (J = a.relatedTarget || a.fromElement) && (xu(J) || J[nc]))
              break t;
            if ((H || S) && (S = A.window === A ? A : (S = A.ownerDocument) ? S.defaultView || S.parentWindow : window, H ? (J = a.relatedTarget || a.toElement, H = p, J = J ? xu(J) : null, J !== null && (be = ee(J), $ = J.tag, J !== be || $ !== 5 && $ !== 27 && $ !== 6) && (J = null)) : (H = null, J = p), H !== J)) {
              if ($ = SS, E = "onMouseLeave", Qt = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && ($ = TS, E = "onPointerLeave", Qt = "onPointerEnter", g = "pointer"), be = H == null ? S : dc(H), b = J == null ? S : dc(J), S = new $(
                E,
                g + "leave",
                H,
                a,
                A
              ), S.target = be, S.relatedTarget = b, E = null, xu(A) === p && ($ = new $(
                Qt,
                g + "enter",
                J,
                a,
                A
              ), $.target = b, $.relatedTarget = be, E = $), be = E, H && J)
                e: {
                  for ($ = ji, Qt = H, g = J, b = 0, E = Qt; E; E = $(E))
                    b++;
                  E = 0;
                  for (var Y = g; Y; Y = $(Y))
                    E++;
                  for (; 0 < b - E; )
                    Qt = $(Qt), b--;
                  for (; 0 < E - b; )
                    g = $(g), E--;
                  for (; b--; ) {
                    if (Qt === g || g !== null && Qt === g.alternate) {
                      $ = Qt;
                      break e;
                    }
                    Qt = $(Qt), g = $(g);
                  }
                  $ = null;
                }
              else $ = null;
              H !== null && Pd(
                D,
                S,
                H,
                $,
                !1
              ), J !== null && be !== null && Pd(
                D,
                be,
                J,
                $,
                !0
              );
            }
          }
          t: {
            if (S = p ? dc(p) : window, H = S.nodeName && S.nodeName.toLowerCase(), H === "select" || H === "input" && S.type === "file")
              var K = pc;
            else if (bm(S))
              if (MS)
                K = ns;
              else {
                K = Tm;
                var gt = Vg;
              }
            else
              H = S.nodeName, !H || H.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? p && Kn(p.elementType) && (K = pc) : K = Em;
            if (K && (K = K(t, p))) {
              ls(
                D,
                K,
                a,
                A
              );
              break t;
            }
            gt && gt(t, S, p), t === "focusout" && p && S.type === "number" && p.memoizedProps.value != null && rm(S, "number", S.value);
          }
          switch (gt = p ? dc(p) : window, t) {
            case "focusin":
              (bm(gt) || gt.contentEditable === "true") && (Ch = gt, o1 = p, b0 = null);
              break;
            case "focusout":
              b0 = o1 = Ch = null;
              break;
            case "mousedown":
              f1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              f1 = !1, Tp(
                D,
                a,
                A
              );
              break;
            case "selectionchange":
              if (bT) break;
            case "keydown":
            case "keyup":
              Tp(
                D,
                a,
                A
              );
          }
          var ct;
          if (i1)
            t: {
              switch (t) {
                case "compositionstart":
                  var et = "onCompositionStart";
                  break t;
                case "compositionend":
                  et = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  et = "onCompositionUpdate";
                  break t;
              }
              et = void 0;
            }
          else
            _h ? bo(t, a) && (et = "onCompositionEnd") : t === "keydown" && a.keyCode === ES && (et = "onCompositionStart");
          et && (AS && a.locale !== "ko" && (_h || et !== "onCompositionStart" ? et === "onCompositionEnd" && _h && (ct = oi()) : (Ef = A, a1 = "value" in Ef ? Ef.value : Ef.textContent, _h = !0)), gt = Hn(
            p,
            et
          ), 0 < gt.length && (et = new bS(
            et,
            t,
            null,
            a,
            A
          ), D.push({
            event: et,
            listeners: gt
          }), ct ? et.data = ct : (ct = ju(a), ct !== null && (et.data = ct)))), (ct = gT ? Sm(t, a) : Fr(t, a)) && (et = Hn(
            p,
            "onBeforeInput"
          ), 0 < et.length && (gt = new lT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            A
          ), D.push({
            event: gt,
            listeners: et
          }), gt.data = ct)), xt(
            D,
            t,
            p,
            a,
            A
          );
        }
        Pt(D, e);
      });
    }
    function me(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function Hn(t, e) {
      for (var a = e + "Capture", c = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = $n(t, a), o != null && c.unshift(
          me(t, o, f)
        ), o = $n(t, e), o != null && c.push(
          me(t, o, f)
        )), t.tag === 3) return c;
        t = t.return;
      }
      return [];
    }
    function ji(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Pd(t, e, a, c, o) {
      for (var f = e._reactName, d = []; a !== null && a !== c; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === c) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = $n(a, f), p != null && d.unshift(
          me(a, p, y)
        )) : o || (p = $n(a, f), p != null && d.push(
          me(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function aa(t, e) {
      pp(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || vS || (vS = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: Tu,
        possibleRegistrationNames: bf
      };
      Kn(t) || typeof e.is == "string" || Qg(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ce(t, e, a, c) {
      e !== a && (a = Bn(a), Bn(e) !== a && (c[t] = e));
    }
    function ws(t, e, a) {
      e.forEach(function(c) {
        a[Pu(c)] = c === "style" ? Qc(t) : t.getAttribute(c);
      });
    }
    function He(t, e) {
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
    function th(t, e) {
      return t = t.namespaceURI === St || t.namespaceURI === At ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function Bn(t) {
      return Zn(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Kf(t)
      ), Pc(t)), (typeof t == "string" ? t : "" + t).replace(KT, `
`).replace($T, "");
    }
    function qy(t, e) {
      return e = Bn(e), Bn(t) === e;
    }
    function $t(t, e, a, c, o, f) {
      switch (a) {
        case "children":
          typeof c == "string" ? (If(c, e, !1), e === "body" || e === "textarea" && c === "" || ii(t, c)) : (typeof c == "number" || typeof c == "bigint") && (If("" + c, e, !1), e !== "body" && ii(t, "" + c));
          break;
        case "className":
          Wf(t, "class", c);
          break;
        case "tabIndex":
          Wf(t, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Wf(t, a, c);
          break;
        case "style":
          pm(t, c, f);
          break;
        case "data":
          if (e !== "object") {
            Wf(t, "data", c);
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
          ae(c, a), c = Pf("" + c), t.setAttribute(a, c);
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
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Eg ? e !== "button" || o.type == null || o.type === "submit" || Eg ? typeof c == "function" && (o.name == null || l2 || (l2 = !0, console.error(
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
          ae(c, a), c = Pf("" + c), t.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (typeof c != "function" && He(a, c), t.onclick = Wa);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && He(a, c), dt("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && He(a, c), dt("scrollend", t));
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
          ae(c, a), a = Pf("" + c), t.setAttributeNS(Rr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? (ae(c, a), t.setAttribute(a, "" + c)) : t.removeAttribute(a);
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
          c === !0 ? t.setAttribute(a, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? (ae(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? (ae(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? t.removeAttribute(a) : (ae(c, a), t.setAttribute(a, c));
          break;
        case "popover":
          dt("beforetoggle", t), dt("toggle", t), jr(t, "popover", c);
          break;
        case "xlinkActuate":
          Ln(
            t,
            Rr,
            "xlink:actuate",
            c
          );
          break;
        case "xlinkArcrole":
          Ln(
            t,
            Rr,
            "xlink:arcrole",
            c
          );
          break;
        case "xlinkRole":
          Ln(
            t,
            Rr,
            "xlink:role",
            c
          );
          break;
        case "xlinkShow":
          Ln(
            t,
            Rr,
            "xlink:show",
            c
          );
          break;
        case "xlinkTitle":
          Ln(
            t,
            Rr,
            "xlink:title",
            c
          );
          break;
        case "xlinkType":
          Ln(
            t,
            Rr,
            "xlink:type",
            c
          );
          break;
        case "xmlBase":
          Ln(
            t,
            lS,
            "xml:base",
            c
          );
          break;
        case "xmlLang":
          Ln(
            t,
            lS,
            "xml:lang",
            c
          );
          break;
        case "xmlSpace":
          Ln(
            t,
            lS,
            "xml:space",
            c
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), jr(t, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          a2 || c == null || typeof c != "object" || (a2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            c
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = mp(a), jr(t, a, c)) : Tu.hasOwnProperty(a) && c != null && typeof c != "function" && He(a, c);
      }
    }
    function Po(t, e, a, c, o, f) {
      switch (a) {
        case "style":
          pm(t, c, f);
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
          typeof c == "string" ? ii(t, c) : (typeof c == "number" || typeof c == "bigint") && ii(t, "" + c);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && He(a, c), dt("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && He(a, c), dt("scrollend", t));
          break;
        case "onClick":
          c != null && (typeof c != "function" && He(a, c), t.onclick = Wa);
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
            c != null && typeof c != "function" && He(a, c);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[ca] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof c == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, c, o);
                break t;
              }
              a in t ? t[a] = c : c === !0 ? t.setAttribute(a, "") : jr(t, a, c);
            }
      }
    }
    function Ae(t, e, a) {
      switch (aa(e, a), e) {
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
          dt("error", t), dt("load", t);
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
          li("input", a), dt("invalid", t);
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
          wl(t, a), Qr(
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
          li("select", a), dt("invalid", t), c = d = f = null;
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
          Vr(t, a), e = f, a = d, t.multiple = !!c, e != null ? wn(t, !!c, e, !1) : a != null && wn(t, !!c, a, !0);
          return;
        case "textarea":
          li("textarea", a), dt("invalid", t), f = o = c = null;
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
          ai(t, a), mo(t, c, o, f);
          return;
        case "option":
          hp(t, a);
          for (y in a)
            a.hasOwnProperty(y) && (c = a[y], c != null) && (y === "selected" ? t.selected = c && typeof c != "function" && typeof c != "symbol" : $t(t, e, y, c, a, null));
          return;
        case "dialog":
          dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
          break;
        case "iframe":
        case "object":
          dt("load", t);
          break;
        case "video":
        case "audio":
          for (c = 0; c < F0.length; c++)
            dt(F0[c], t);
          break;
        case "image":
          dt("error", t), dt("load", t);
          break;
        case "details":
          dt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          dt("error", t), dt("load", t);
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
          if (Kn(e)) {
            for (A in a)
              a.hasOwnProperty(A) && (c = a[A], c !== void 0 && Po(
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
    function ll(t, e, a, c) {
      switch (aa(e, c), e) {
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
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, c = c.type === "checkbox" || c.type === "radio" ? c.checked != null : c.value != null, e || !c || e2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), e2 = !0), !e || c || t2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), t2 = !0), hc(
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
          c = h, e = d, a = H, S != null ? wn(t, !!e, S, !1) : !!a != !!e && (c != null ? wn(t, !!e, c, !0) : wn(t, !!e, e ? [] : "", !1));
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
          ni(t, S, H);
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
          for (var $ in a)
            S = a[$], a.hasOwnProperty($) && S != null && !c.hasOwnProperty($) && $t(
              t,
              e,
              $,
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
          if (Kn(e)) {
            for (var be in a)
              S = a[be], a.hasOwnProperty(be) && S !== void 0 && !c.hasOwnProperty(be) && Po(
                t,
                e,
                be,
                void 0,
                c,
                S
              );
            for (A in c)
              S = c[A], H = a[A], !c.hasOwnProperty(A) || S === H || S === void 0 && H === void 0 || Po(
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
    function Pu(t) {
      switch (t) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return t;
      }
    }
    function Qc(t) {
      var e = {};
      t = t.style;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        e[c] = t.getPropertyValue(c);
      }
      return e;
    }
    function yu(t, e, a) {
      if (e != null && typeof e != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var c, o = c = "", f;
        for (f in e)
          if (e.hasOwnProperty(f)) {
            var d = e[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (nm(d, f), c += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || tt.has(f) ? (nm(d, f), c += o + f.replace(x, "-$1").toLowerCase().replace(P, "-ms-") + ":" + ("" + d).trim()) : c += o + f.replace(x, "-$1").toLowerCase().replace(P, "-ms-") + ":" + d + "px", o = ";");
          }
        c = c || null, e = t.getAttribute("style"), e !== c && (c = Bn(c), Bn(e) !== c && (a.style = Qc(t)));
      }
    }
    function ha(t, e, a, c, o, f) {
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
            if (ae(c, e), t === "" + c)
              return;
        }
      Ce(e, t, c, f);
    }
    function eh(t, e, a, c, o, f) {
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
      Ce(e, t, c, f);
    }
    function lh(t, e, a, c, o, f) {
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
            if (ae(c, a), t === "" + c)
              return;
        }
      Ce(e, t, c, f);
    }
    function tf(t, e, a, c, o, f) {
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
            if (!isNaN(c) && (ae(c, e), t === "" + c))
              return;
        }
      Ce(e, t, c, f);
    }
    function Js(t, e, a, c, o, f) {
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
            if (ae(c, e), a = Pf("" + c), t === a)
              return;
        }
      Ce(e, t, c, f);
    }
    function ma(t, e, a, c) {
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
      if (Kn(e)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Tu.hasOwnProperty(y))
                typeof p != "function" && He(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || Ce(
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
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = th(t, p), Ce(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), yu(t, p, o);
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
                    f.delete("class"), d = ho(
                      t,
                      "class",
                      p
                    ), Ce(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    c.context === oo && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = ho(
                      t,
                      y,
                      p
                    ), Ce(
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
              typeof y != "function" && He(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || Ce(
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
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = th(t, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  ha(
                    t,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  ha(
                    t,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), yu(t, y, o);
                  continue;
                case "multiple":
                  f.delete(p), Ce(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), Ce(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ce(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), Ce(
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
                  Js(
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
                  } else if (d === WT) {
                    f.delete(p.toLowerCase()), Ce(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Js(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Js(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  lh(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  lh(
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
                  lh(
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
                  eh(
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
                          if (ae(y, d), h === "" + y)
                            break t;
                      }
                    Ce(
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
                          if (!(isNaN(y) || 1 > y) && (ae(y, d), h === "" + y))
                            break t;
                      }
                    Ce(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "rowSpan":
                  tf(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  tf(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  ha(
                    t,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  ha(
                    t,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  ha(
                    t,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  ha(
                    t,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  ha(
                    t,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  ha(
                    t,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  ha(
                    t,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  ha(
                    t,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  ha(
                    t,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  ha(
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
                  )), eh(
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
                    h = mp(p), d = !1, c.context === oo && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (A = p.toLowerCase(), A = Yn.hasOwnProperty(
                      A
                    ) && Yn[A] || null, A !== null && A !== p && (d = !0, f.delete(A)), f.delete(h));
                    t: if (A = t, D = h, h = y, $f(D))
                      if (A.hasAttribute(D))
                        A = A.getAttribute(
                          D
                        ), ae(
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
                    d || Ce(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ws(t, f, o), Object.keys(o).length === 0 ? null : o;
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
    function na(t) {
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
          if (f && h && na(d)) {
            for (d = 0, h = o.responseEnd, c += 1; c < a.length; c++) {
              var y = a[c], p = y.startTime;
              if (p > h) break;
              var A = y.transferSize, D = y.initiatorType;
              A && na(D) && (y = y.responseEnd, d += A * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--c, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function Ks(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function lv(t) {
      switch (t) {
        case At:
          return lm;
        case St:
          return Mg;
        default:
          return oo;
      }
    }
    function tc(t, e) {
      if (t === oo)
        switch (e) {
          case "svg":
            return lm;
          case "math":
            return Mg;
          default:
            return oo;
        }
      return t === lm && e === "foreignObject" ? oo : t;
    }
    function ef(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function Yy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === cS ? !1 : (cS = t, !0) : (cS = null, !1);
    }
    function pu() {
      var t = window.event;
      return t && t !== P0 ? t.type : null;
    }
    function lf() {
      var t = window.event;
      return t && t !== P0 ? t.timeStamp : -1.1;
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
    function ah(t, e, a, c) {
      ll(t, e, a, c), t[ca] = c;
    }
    function nh(t) {
      ii(t, "");
    }
    function Wg(t, e, a) {
      t.nodeValue = a;
    }
    function cv(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[ca] || null;
        if (e !== null) {
          var a = dn(t);
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
    function Vc(t) {
      return t === "head";
    }
    function iv(t, e) {
      t.removeChild(e);
    }
    function ov(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function Gi(t, e) {
      var a = e, c = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === I0 || a === Og) {
            if (c === 0) {
              t.removeChild(o), Zi(e);
              return;
            }
            c--;
          } else if (a === k0 || a === Xf || a === _r || a === em || a === Ur)
            c++;
          else if (a === kT)
            lc(
              t.ownerDocument.documentElement
            );
          else if (a === PT) {
            a = t.ownerDocument.head, lc(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Sf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === IT && lc(t.ownerDocument.body);
        a = o;
      } while (a);
      Zi(e);
    }
    function $s(t, e) {
      var a = t;
      t = 0;
      do {
        var c = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), c && c.nodeType === 8)
          if (a = c.data, a === I0) {
            if (t === 0) break;
            t--;
          } else
            a !== k0 && a !== Xf && a !== _r && a !== em || t++;
        a = c;
      } while (a);
    }
    function fv(t) {
      $s(t, !0);
    }
    function sv(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function rv(t) {
      t.nodeValue = "";
    }
    function dv(t) {
      $s(t, !1);
    }
    function hv(t, e) {
      e = e[tE], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function mv(t, e) {
      t.nodeValue = e;
    }
    function af(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            af(a), om(a);
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
          if (!t[Sf])
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
          ae(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = xa(t.nextSibling), t === null) break;
      }
      return null;
    }
    function pv(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = xa(t.nextSibling), t === null)) return null;
      return t;
    }
    function te(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = xa(t.nextSibling), t === null)) return null;
      return t;
    }
    function Ws(t) {
      return t.data === Xf || t.data === _r;
    }
    function jy(t) {
      return t.data === em || t.data === Xf && t.ownerDocument.readyState !== u2;
    }
    function vv(t, e) {
      var a = t.ownerDocument;
      if (t.data === _r)
        t._reactRetry = e;
      else if (t.data !== Xf || a.readyState !== u2)
        e();
      else {
        var c = function() {
          e(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), t._reactRetry = c;
      }
    }
    function xa(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === k0 || e === em || e === Xf || e === _r || e === Ur || e === aS || e === n2)
            break;
          if (e === I0 || e === Og)
            return null;
        }
      }
      return t;
    }
    function gv(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, c = t.attributes, o = 0; o < c.length; o++) {
          var f = c[o];
          a[Pu(f.name)] = f.name.toLowerCase() === "style" ? Qc(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === Ur ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function Sv(t, e, a) {
      return a === null || a[FT] !== !0 ? (t.nodeValue === e ? t = null : (e = Bn(e), t = Bn(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function nf(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === I0 || a === Og) {
            if (e === 0)
              return xa(t.nextSibling);
            e--;
          } else
            a !== k0 && a !== em && a !== Xf && a !== _r && a !== Ur || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Xi(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === k0 || a === em || a === Xf || a === _r || a === Ur) {
            if (e === 0) return t;
            e--;
          } else
            a !== I0 && a !== Og || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Gy(t) {
      Zi(t);
    }
    function uh(t) {
      Zi(t);
    }
    function Xy(t) {
      Zi(t);
    }
    function ec(t, e, a, c, o) {
      switch (o && kf(t, c.ancestorInfo), e = Ks(a), t) {
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
    function vu(t, e, a, c) {
      if (!a[nc] && dn(a)) {
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
      Ae(a, t, e), a[ze] = c, a[ca] = e;
    }
    function lc(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      om(t);
    }
    function ch(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Qy(t, e, a) {
      var c = am;
      if (c && typeof e == "string" && e) {
        var o = ne(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), r2.has(o) || (r2.add(o), t = { rel: t, crossOrigin: a, href: e }, c.querySelector(o) === null && (e = c.createElement("link"), Ae(e, "link", t), Ve(e), c.head.appendChild(e)));
      }
    }
    function Vy(t, e, a, c) {
      var o = (o = qa.current) ? ch(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Qi(a.href), e = $a(o).hoistableStyles, c = e.get(a), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = Qi(a.href);
            var f = $a(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Hr, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              ks(t)
            )) && !f._p && (d.instance = f, d.state.loading = tp | Hu), !Bu.has(t))) {
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
              Bu.set(t, h), f || bv(
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
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Vi(a), e = $a(o).hoistableScripts, c = e.get(a), c || (c = {
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
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : Ya.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : Ya.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : Ya.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function Qi(t) {
      return 'href="' + ne(t) + '"';
    }
    function ks(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function ih(t) {
      return Dt({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function bv(t, e, a, c) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? c.loading = tp : (e = t.createElement("link"), c.preload = e, e.addEventListener("load", function() {
        return c.loading |= tp;
      }), e.addEventListener("error", function() {
        return c.loading |= f2;
      }), Ae(e, "link", a), Ve(e), t.head.appendChild(e));
    }
    function Vi(t) {
      return '[src="' + ne(t) + '"]';
    }
    function Is(t) {
      return "script[async]" + t;
    }
    function oh(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var c = t.querySelector(
              'style[data-href~="' + ne(a.href) + '"]'
            );
            if (c)
              return e.instance = c, Ve(c), c;
            var o = Dt({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return c = (t.ownerDocument || t).createElement("style"), Ve(c), Ae(c, "style", o), uf(c, a.precedence, t), e.instance = c;
          case "stylesheet":
            o = Qi(a.href);
            var f = t.querySelector(
              ks(o)
            );
            if (f)
              return e.state.loading |= Hu, e.instance = f, Ve(f), f;
            c = ih(a), (o = Bu.get(o)) && Zy(c, o), f = (t.ownerDocument || t).createElement("link"), Ve(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), Ae(f, "link", c), e.state.loading |= Hu, uf(f, a.precedence, t), e.instance = f;
          case "script":
            return f = Vi(a.src), (o = t.querySelector(
              Is(f)
            )) ? (e.instance = o, Ve(o), o) : (c = a, (o = Bu.get(f)) && (c = Dt({}, a), Ly(c, o)), t = t.ownerDocument || t, o = t.createElement("script"), Ve(o), Ae(o, "link", c), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & Hu) === Hr && (c = e.instance, e.state.loading |= Hu, uf(c, a.precedence, t));
      return e.instance;
    }
    function uf(t, e, a) {
      for (var c = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = c.length ? c[c.length - 1] : null, f = o, d = 0; d < c.length; d++) {
        var h = c[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function Zy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function Ly(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function cf(t, e, a) {
      if (Rg === null) {
        var c = /* @__PURE__ */ new Map(), o = Rg = /* @__PURE__ */ new Map();
        o.set(a, c);
      } else
        o = Rg, c = o.get(a), c || (c = /* @__PURE__ */ new Map(), o.set(a, c));
      if (c.has(t)) return c;
      for (c.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Sf] || f[ze] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== At) {
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
      if (a.context === lm || e.itemProp != null)
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
      return !(t.type === "stylesheet" && (t.state.loading & s2) === Hr);
    }
    function wy(t, e, a, c) {
      if (a.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (a.state.loading & Hu) === Hr) {
        if (a.instance === null) {
          var o = Qi(c.href), f = e.querySelector(
            ks(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = of.bind(t), e.then(t, t)), a.state.loading |= Hu, a.instance = f, Ve(f);
            return;
          }
          f = e.ownerDocument || e, c = ih(c), (o = Bu.get(o)) && Zy(c, o), f = f.createElement("link"), Ve(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), Ae(f, "link", c), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & s2) === Hr && (t.count++, a = of.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function fh(t, e) {
      return t.stylesheets && t.count === 0 && Ps(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var c = setTimeout(function() {
          if (t.stylesheets && Ps(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, aE + e);
        0 < t.imgBytes && oS === 0 && (oS = 125 * ev() * uE);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ps(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > oS ? 50 : nE) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(c), clearTimeout(o);
        };
      } : null;
    }
    function of() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Ps(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function Ps(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Ug = /* @__PURE__ */ new Map(), e.forEach(Jy, t), Ug = null, of.call(t));
    }
    function Jy(t, e) {
      if (!(e.state.loading & Hu)) {
        var a = Ug.get(t);
        if (a) var c = a.get(fS);
        else {
          a = /* @__PURE__ */ new Map(), Ug.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), c = d);
          }
          c && a.set(fS, c);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || c, f === c && a.set(fS, o), a.set(d, o), this.count++, c = of.bind(this), o.addEventListener("load", c), o.addEventListener("error", c), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= Hu;
      }
    }
    function tr(t, e, a, c, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Cr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = c, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function er(t, e, a, c, o, f, d, h, y, p, A, D) {
      return t = new tr(
        t,
        e,
        a,
        d,
        y,
        p,
        A,
        D,
        h
      ), e = UT, f === !0 && (e |= va | uc), e |= Ot, f = Gt(3, null, null, e), t.current = f, f.stateNode = t, e = od(), vi(e), t.pooledCache = e, vi(e), f.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: e
      }, Nt(f), t;
    }
    function Av(t) {
      return t ? (t = Df, t) : Df;
    }
    function sh(t, e, a, c, o, f) {
      if (al && typeof al.onScheduleFiberRoot == "function")
        try {
          al.onScheduleFiberRoot(Ki, c, a);
        } catch (d) {
          Su || (Su = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Av(o), c.context === null ? c.context = o : c.pendingContext = o, gu && pa !== null && !y2 && (y2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        at(pa) || "Unknown"
      )), c = tl(e), c.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), c.callback = f), a = tu(t, c, e), a !== null && (kn(e, "root.render()", null), yt(a, t, e), ln(a, t, e));
    }
    function zv(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function Ky(t, e) {
      zv(t, e), (t = t.alternate) && zv(t, e);
    }
    function $y(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ql(t, 67108864);
        e !== null && yt(e, t, 67108864), Ky(t, 67108864);
      }
    }
    function Wy(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = jl(t);
        e = ei(e);
        var a = ql(t, e);
        a !== null && yt(a, t, e), Ky(t, e);
      }
    }
    function ie() {
      return pa;
    }
    function Fy(t, e, a, c) {
      var o = N.T;
      N.T = null;
      var f = Wt.p;
      try {
        Wt.p = nl, ky(t, e, a, c);
      } finally {
        Wt.p = f, N.T = o;
      }
    }
    function Rl(t, e, a, c) {
      var o = N.T;
      N.T = null;
      var f = Wt.p;
      try {
        Wt.p = _l, ky(t, e, a, c);
      } finally {
        Wt.p = f, N.T = o;
      }
    }
    function ky(t, e, a, c) {
      if (Cg) {
        var o = rh(c);
        if (o === null)
          Cn(
            t,
            e,
            c,
            Hg,
            a
          ), hh(t, c);
        else if (Dv(
          o,
          t,
          e,
          a,
          c
        ))
          c.stopPropagation();
        else if (hh(t, c), e & 4 && -1 < iE.indexOf(t)) {
          for (; o !== null; ) {
            var f = dn(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ti(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Ul(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      da(f), (Lt & (Hl | Qn)) === Zl && (mg = vl() + Zb, hu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = ql(f, 2), h !== null && yt(h, f, 2), Na(), Ky(f, 2);
              }
            if (f = rh(c), f === null && Cn(
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
          Cn(
            t,
            e,
            c,
            null,
            a
          );
      }
    }
    function rh(t) {
      return t = yn(t), Iy(t);
    }
    function Iy(t) {
      if (Hg = null, t = xu(t), t !== null) {
        var e = ee(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = wa(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = Xe(e), t !== null) return t;
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
    function dh(t) {
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
          return nl;
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
          return _l;
        case "message":
          switch (ir()) {
            case o0:
              return nl;
            case Eh:
              return _l;
            case Ji:
            case Cv:
              return Xl;
            case Ah:
              return Kc;
            default:
              return Xl;
          }
        default:
          return Xl;
      }
    }
    function hh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Qf = null;
          break;
        case "dragenter":
        case "dragleave":
          Vf = null;
          break;
        case "mouseover":
        case "mouseout":
          Zf = null;
          break;
        case "pointerover":
        case "pointerout":
          lp.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ap.delete(e.pointerId);
      }
    }
    function Zc(t, e, a, c, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = dn(e), e !== null && $y(e)), t) : (t.eventSystemFlags |= c, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function Dv(t, e, a, c, o) {
      switch (e) {
        case "focusin":
          return Qf = Zc(
            Qf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "dragenter":
          return Vf = Zc(
            Vf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "mouseover":
          return Zf = Zc(
            Zf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return lp.set(
            f,
            Zc(
              lp.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, ap.set(
            f,
            Zc(
              ap.get(f) || null,
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
    function Py(t) {
      var e = xu(t.target);
      if (e !== null) {
        var a = ee(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = wa(a), e !== null) {
              t.blockedOn = e, dp(t.priority, function() {
                Wy(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = Xe(a), e !== null) {
              t.blockedOn = e, dp(t.priority, function() {
                Wy(a);
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
    function ff(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = rh(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var c = new a.constructor(
            a.type,
            a
          ), o = c;
          h0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), h0 = o, a.target.dispatchEvent(c), h0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), h0 = null;
        } else
          return e = dn(a), e !== null && $y(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function mh(t, e, a) {
      ff(t) && a.delete(e);
    }
    function Fg() {
      sS = !1, Qf !== null && ff(Qf) && (Qf = null), Vf !== null && ff(Vf) && (Vf = null), Zf !== null && ff(Zf) && (Zf = null), lp.forEach(mh), ap.forEach(mh);
    }
    function lr(t, e) {
      t.blockedOn === e && (t.blockedOn = null, sS || (sS = !0, Ke.unstable_scheduleCallback(
        Ke.unstable_NormalPriority,
        Fg
      )));
    }
    function Ov(t) {
      Bg !== t && (Bg = t, Ke.unstable_scheduleCallback(
        Ke.unstable_NormalPriority,
        function() {
          Bg === t && (Bg = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], c = t[e + 1], o = t[e + 2];
            if (typeof c != "function") {
              if (Iy(c || a) === null)
                continue;
              break;
            }
            var f = dn(a);
            f !== null && (t.splice(e, 3), e -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: c
            }, Object.freeze(a), $u(
              f,
              a,
              c,
              o
            ));
          }
        }
      ));
    }
    function Zi(t) {
      function e(y) {
        return lr(y, t);
      }
      Qf !== null && lr(Qf, t), Vf !== null && lr(Vf, t), Zf !== null && lr(Zf, t), lp.forEach(e), ap.forEach(e);
      for (var a = 0; a < Lf.length; a++) {
        var c = Lf[a];
        c.blockedOn === t && (c.blockedOn = null);
      }
      for (; 0 < Lf.length && (a = Lf[0], a.blockedOn === null); )
        Py(a), a.blockedOn === null && Lf.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (c = 0; c < a.length; c += 3) {
          var o = a[c], f = a[c + 1], d = o[ca] || null;
          if (typeof f == "function")
            d || Ov(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ca] || null)
                h = d.formAction;
              else if (Iy(o) !== null) continue;
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
    function t0(t) {
      this._internalRoot = t;
    }
    function Nn(t) {
      this._internalRoot = t;
    }
    function e0(t) {
      t[nc] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Ke = Y2(), ar = yS, kg = q2, Dt = Object.assign, Rv = /* @__PURE__ */ Symbol.for("react.element"), cn = /* @__PURE__ */ Symbol.for("react.transitional.element"), Lc = /* @__PURE__ */ Symbol.for("react.portal"), sf = /* @__PURE__ */ Symbol.for("react.fragment"), ua = /* @__PURE__ */ Symbol.for("react.strict_mode"), nr = /* @__PURE__ */ Symbol.for("react.profiler"), yh = /* @__PURE__ */ Symbol.for("react.consumer"), xn = /* @__PURE__ */ Symbol.for("react.context"), rf = /* @__PURE__ */ Symbol.for("react.forward_ref"), Li = /* @__PURE__ */ Symbol.for("react.suspense"), ya = /* @__PURE__ */ Symbol.for("react.suspense_list"), ur = /* @__PURE__ */ Symbol.for("react.memo"), Gl = /* @__PURE__ */ Symbol.for("react.lazy"), qn = /* @__PURE__ */ Symbol.for("react.activity"), Ig = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Uv = Symbol.iterator, df = /* @__PURE__ */ Symbol.for("react.client.reference"), Ie = Array.isArray, N = ar.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Wt = kg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), l0 = [], a0 = [], ac = -1, wc = Qe(null), hf = Qe(null), qa = Qe(null), Jc = Qe(null), mf = 0, _v, wi, yf, n0, cr, ph, vh;
    ht.__reactDisabledLog = !0;
    var pf, u0, gh = !1, c0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), pa = null, gu = !1, Ya = Object.prototype.hasOwnProperty, i0 = Ke.unstable_scheduleCallback, Sh = Ke.unstable_cancelCallback, bh = Ke.unstable_shouldYield, Th = Ke.unstable_requestPaint, vl = Ke.unstable_now, ir = Ke.unstable_getCurrentPriorityLevel, o0 = Ke.unstable_ImmediatePriority, Eh = Ke.unstable_UserBlockingPriority, Ji = Ke.unstable_NormalPriority, Cv = Ke.unstable_LowPriority, Ah = Ke.unstable_IdlePriority, f0 = Ke.log, Hv = Ke.unstable_setDisableYieldValue, Ki = null, al = null, Su = !1, bu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ul = Math.clz32 ? Math.clz32 : cm, s0 = Math.log, zh = Math.LN2, vf = 256, or = 262144, gf = 4194304, nl = 2, _l = 8, Xl = 32, Kc = 268435456, on = Math.random().toString(36).slice(2), ze = "__reactFiber$" + on, ca = "__reactProps$" + on, nc = "__reactContainer$" + on, $i = "__reactEvents$" + on, t1 = "__reactListeners$" + on, Bv = "__reactHandles$" + on, fr = "__reactResources$" + on, Sf = "__reactMarker$" + on, Nv = /* @__PURE__ */ new Set(), Tu = {}, bf = {}, xv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Tf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), r0 = {}, Dh = {}, Oh = /[\n"\\]/g, d0 = !1, qv = !1, sr = !1, l = !1, n = !1, u = !1, i = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
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
    }, X = {}, C = {
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
    }, x = /([A-Z])/g, P = /^ms-/, st = /^(?:webkit|moz|o)[A-Z]/, oe = /^-ms-/, M = /-(.)/g, z = /;\s*$/, U = {}, G = {}, ut = !1, Zt = !1, tt = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), St = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", Jt = /* @__PURE__ */ new Map([
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
    }, Mh = {}, Q2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), V2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), vS = !1, ja = {}, gS = /^on./, Z2 = /^on[^A-Z]/, L2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), w2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), J2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, h0 = null, Rh = null, Uh = null, e1 = !1, $c = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), l1 = !1;
    if ($c)
      try {
        var m0 = {};
        Object.defineProperty(m0, "passive", {
          get: function() {
            l1 = !0;
          }
        }), window.addEventListener("test", m0, m0), window.removeEventListener("test", m0, m0);
      } catch {
        l1 = !1;
      }
    var Ef = null, a1 = null, jv = null, rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Gv = sl(rr), y0 = Dt({}, rr, { view: 0, detail: 0 }), K2 = sl(y0), n1, u1, p0, Xv = Dt({}, y0, {
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
      getModifierState: es,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== p0 && (p0 && t.type === "mousemove" ? (n1 = t.screenX - p0.screenX, u1 = t.screenY - p0.screenY) : u1 = n1 = 0, p0 = t), n1);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : u1;
      }
    }), SS = sl(Xv), $2 = Dt({}, Xv, { dataTransfer: 0 }), W2 = sl($2), F2 = Dt({}, y0, { relatedTarget: 0 }), c1 = sl(F2), k2 = Dt({}, rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), I2 = sl(k2), P2 = Dt({}, rr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), tT = sl(P2), eT = Dt({}, rr, { data: 0 }), bS = sl(
      eT
    ), lT = bS, aT = {
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
    }, nT = {
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
    }, uT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, cT = Dt({}, y0, {
      key: function(t) {
        if (t.key) {
          var e = aT[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = ts(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? nT[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: es,
      charCode: function(t) {
        return t.type === "keypress" ? ts(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? ts(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), iT = sl(cT), oT = Dt({}, Xv, {
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
    }), TS = sl(oT), fT = Dt({}, y0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: es
    }), sT = sl(fT), rT = Dt({}, rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dT = sl(rT), hT = Dt({}, Xv, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), mT = sl(hT), yT = Dt({}, rr, {
      newState: 0,
      oldState: 0
    }), pT = sl(yT), vT = [9, 13, 27, 32], ES = 229, i1 = $c && "CompositionEvent" in window, v0 = null;
    $c && "documentMode" in document && (v0 = document.documentMode);
    var gT = $c && "TextEvent" in window && !v0, AS = $c && (!i1 || v0 && 8 < v0 && 11 >= v0), zS = 32, DS = String.fromCharCode(zS), OS = !1, _h = !1, ST = {
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
    }, g0 = null, S0 = null, MS = !1;
    $c && (MS = kr("input") && (!document.documentMode || 9 < document.documentMode));
    var Ga = typeof Object.is == "function" ? Object.is : Ir, bT = $c && "documentMode" in document && 11 >= document.documentMode, Ch = null, o1 = null, b0 = null, f1 = !1, Hh = {
      animationend: fi("Animation", "AnimationEnd"),
      animationiteration: fi("Animation", "AnimationIteration"),
      animationstart: fi("Animation", "AnimationStart"),
      transitionrun: fi("Transition", "TransitionRun"),
      transitionstart: fi("Transition", "TransitionStart"),
      transitioncancel: fi("Transition", "TransitionCancel"),
      transitionend: fi("Transition", "TransitionEnd")
    }, s1 = {}, RS = {};
    $c && (RS = document.createElement("div").style, "AnimationEvent" in window || (delete Hh.animationend.animation, delete Hh.animationiteration.animation, delete Hh.animationstart.animation), "TransitionEvent" in window || delete Hh.transitionend.transition);
    var US = si("animationend"), _S = si("animationiteration"), CS = si("animationstart"), TT = si("transitionrun"), ET = si("transitionstart"), AT = si("transitioncancel"), HS = si("transitionend"), BS = /* @__PURE__ */ new Map(), r1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    r1.push("scrollEnd");
    var NS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var zT = performance, xS = function() {
        return zT.now();
      };
    else {
      var DT = Date;
      xS = function() {
        return DT.now();
      };
    }
    var d1 = typeof reportError == "function" ? reportError : function(t) {
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
    }, OT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Qv = 0, h1 = 1, m1 = 2, y1 = 3, Vv = "– ", Zv = "+ ", qS = "  ", De = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Eu = "Components ⚛", Xt = "Scheduler ⚛", Vt = "Blocking", Af = !1, Wi = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Eu
    }, zf = {
      start: -0,
      end: -0,
      detail: { devtools: Wi }
    }, MT = ["Changed Props", ""], YS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", RT = ["Changed Props", YS], T0 = 1, Fi = 2, Au = [], Bh = 0, p1 = 0, Df = {};
    Object.freeze(Df);
    var zu = null, Nh = null, mt = 0, UT = 1, Ot = 2, va = 8, uc = 16, _T = 32, jS = !1;
    try {
      var GS = Object.preventExtensions({});
    } catch {
      jS = !0;
    }
    var v1 = /* @__PURE__ */ new WeakMap(), xh = [], qh = 0, Lv = null, E0 = 0, Du = [], Ou = 0, dr = null, ki = 1, Ii = "", ia = null, Oe = null, Yt = !1, Wc = !1, jn = null, Of = null, Mu = !1, g1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), S1 = Qe(null), b1 = Qe(null), XS = {}, wv = null, Yh = null, jh = !1, CT = typeof AbortController < "u" ? AbortController : function() {
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
    }, HT = Ke.unstable_scheduleCallback, BT = Ke.unstable_NormalPriority, gl = {
      $$typeof: xn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Sl = Ke.unstable_now, Jv = console.createTask ? console.createTask : function() {
      return null;
    }, A0 = 1, Kv = 2, Ql = -0, Mf = -0, Pi = -0, to = null, Xa = -1.1, hr = -0, je = -0, it = -1.1, rt = -1.1, Be = null, $e = !1, mr = -0, Fc = -1.1, z0 = null, Rf = 0, T1 = null, E1 = null, yr = -1.1, D0 = null, Gh = -1.1, $v = -1.1, eo = -0, lo = -1.1, Ru = -1.1, A1 = 0, O0 = null, QS = null, VS = null, Uf = -1.1, pr = null, _f = -1.1, Wv = -1.1, ZS = -0, LS = -0, Fv = 0, NT = null, wS = 0, M0 = -1.1, kv = !1, Iv = !1, R0 = null, z1 = 0, vr = 0, Xh = null, JS = N.S;
    N.S = function(t, e) {
      if (Qb = vl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > lo && 0 > Ru) {
          lo = Sl();
          var a = lf(), c = pu();
          (a !== _f || c !== pr) && (_f = -1.1), Uf = a, pr = c;
        }
        Qu(t, e);
      }
      JS !== null && JS(t, e);
    };
    var gr = Qe(null), cc = {
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
    }, U0 = [], _0 = [], C0 = [], H0 = [], B0 = [], N0 = [], Sr = /* @__PURE__ */ new Set();
    cc.recordUnsafeLifecycleWarnings = function(t, e) {
      Sr.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && U0.push(t), t.mode & va && typeof e.UNSAFE_componentWillMount == "function" && _0.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && C0.push(t), t.mode & va && typeof e.UNSAFE_componentWillReceiveProps == "function" && H0.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && B0.push(t), t.mode & va && typeof e.UNSAFE_componentWillUpdate == "function" && N0.push(t));
    }, cc.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < U0.length && (U0.forEach(function(h) {
        t.add(
          at(h) || "Component"
        ), Sr.add(h.type);
      }), U0 = []);
      var e = /* @__PURE__ */ new Set();
      0 < _0.length && (_0.forEach(function(h) {
        e.add(
          at(h) || "Component"
        ), Sr.add(h.type);
      }), _0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < C0.length && (C0.forEach(function(h) {
        a.add(
          at(h) || "Component"
        ), Sr.add(h.type);
      }), C0 = []);
      var c = /* @__PURE__ */ new Set();
      0 < H0.length && (H0.forEach(
        function(h) {
          c.add(
            at(h) || "Component"
          ), Sr.add(h.type);
        }
      ), H0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < B0.length && (B0.forEach(function(h) {
        o.add(
          at(h) || "Component"
        ), Sr.add(h.type);
      }), B0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < N0.length && (N0.forEach(function(h) {
        f.add(
          at(h) || "Component"
        ), Sr.add(h.type);
      }), N0 = []), 0 < e.size) {
        var d = ft(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < c.size && (d = ft(
        c
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = ft(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = ft(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = ft(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = ft(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Pv = /* @__PURE__ */ new Map(), KS = /* @__PURE__ */ new Set();
    cc.recordLegacyContextWarning = function(t, e) {
      for (var a = null, c = t; c !== null; )
        c.mode & va && (a = c), c = c.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !KS.has(t.type) && (c = Pv.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (c === void 0 && (c = [], Pv.set(a, c)), c.push(t));
    }, cc.flushLegacyContextWarning = function() {
      Pv.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(at(o) || "Component"), KS.add(o.type);
          });
          var c = ft(a);
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
    }, cc.discardPendingWarnings = function() {
      U0 = [], _0 = [], C0 = [], H0 = [], B0 = [], N0 = [], Pv = /* @__PURE__ */ new Map();
    };
    var $S = {
      react_stack_bottom_frame: function(t, e, a) {
        var c = gu;
        gu = !0;
        try {
          return t(e, a);
        } finally {
          gu = c;
        }
      }
    }, D1 = $S.react_stack_bottom_frame.bind($S), WS = {
      react_stack_bottom_frame: function(t) {
        var e = gu;
        gu = !0;
        try {
          return t.render();
        } finally {
          gu = e;
        }
      }
    }, FS = WS.react_stack_bottom_frame.bind(WS), kS = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          Et(t, t.return, a);
        }
      }
    }, O1 = kS.react_stack_bottom_frame.bind(
      kS
    ), IS = {
      react_stack_bottom_frame: function(t, e, a, c, o) {
        try {
          e.componentDidUpdate(a, c, o);
        } catch (f) {
          Et(t, t.return, f);
        }
      }
    }, PS = IS.react_stack_bottom_frame.bind(
      IS
    ), tb = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, xT = tb.react_stack_bottom_frame.bind(
      tb
    ), eb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (c) {
          Et(t, e, c);
        }
      }
    }, lb = eb.react_stack_bottom_frame.bind(
      eb
    ), ab = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, qT = ab.react_stack_bottom_frame.bind(ab), nb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (c) {
          Et(t, e, c);
        }
      }
    }, YT = nb.react_stack_bottom_frame.bind(nb), ub = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, jT = ub.react_stack_bottom_frame.bind(ub), Qh = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), M1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), tg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), eg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, br = null, x0 = !1, Vh = null, q0 = 0, Mt = null, R1, cb = R1 = !1, ib = {}, ob = {}, fb = {};
    La = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var c = at(t), o = c || "null";
        if (!ib[o]) {
          ib[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = at(t)) && (f = `

Check the render method of \`` + o + "`."), f || c && (f = `

Check the top-level render call using <` + c + ">.");
          var d = "";
          a != null && t !== a && (c = null, typeof a.tag == "number" ? c = at(a) : typeof a.name == "string" && (c = a.name), c && (d = " It was passed a child from " + c + ".")), F(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Tr = dl(!0), sb = dl(!1), rb = 0, db = 1, hb = 2, U1 = 3, Cf = !1, mb = !1, _1 = null, C1 = !1, Zh = Qe(null), lg = Qe(0), Gn = Qe(null), Uu = null, Lh = 1, Y0 = 2, ul = Qe(0), ag = 0, _u = 1, Qa = 2, Xn = 4, Va = 8, wh, yb = /* @__PURE__ */ new Set(), pb = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), vb = /* @__PURE__ */ new Set(), ao = 0, vt = null, ye = null, bl = null, ng = !1, Jh = !1, Er = !1, ug = 0, j0 = 0, no = null, GT = 0, XT = 25, B = null, Cu = null, uo = -1, G0 = !1, X0 = {
      readContext: Kt,
      use: wu,
      useCallback: qe,
      useContext: qe,
      useEffect: qe,
      useImperativeHandle: qe,
      useLayoutEffect: qe,
      useInsertionEffect: qe,
      useMemo: qe,
      useReducer: qe,
      useRef: qe,
      useState: qe,
      useDebugValue: qe,
      useDeferredValue: qe,
      useTransition: qe,
      useSyncExternalStore: qe,
      useId: qe,
      useHostTransitionStatus: qe,
      useFormState: qe,
      useActionState: qe,
      useOptimistic: qe,
      useMemoCache: qe,
      useCacheRefresh: qe
    };
    X0.useEffectEvent = qe;
    var B1 = null, gb = null, N1 = null, Sb = null, kc = null, ic = null, cg = null;
    B1 = {
      readContext: function(t) {
        return Kt(t);
      },
      use: wu,
      useCallback: function(t, e) {
        return B = "useCallback", pt(), Lu(e), Sd(t, e);
      },
      useContext: function(t) {
        return B = "useContext", pt(), Kt(t);
      },
      useEffect: function(t, e) {
        return B = "useEffect", pt(), Lu(e), Mi(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", pt(), Lu(a), nu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        B = "useInsertionEffect", pt(), Lu(e), Hc(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", pt(), Lu(e), kl(t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", pt(), Lu(e);
        var a = N.H;
        N.H = kc;
        try {
          return Il(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", pt();
        var c = N.H;
        N.H = kc;
        try {
          return Ho(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return B = "useRef", pt(), gd(t);
      },
      useState: function(t) {
        B = "useState", pt();
        var e = N.H;
        N.H = kc;
        try {
          return Rc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", pt();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", pt(), Yo(t, e);
      },
      useTransition: function() {
        return B = "useTransition", pt(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", pt(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", pt(), Ds();
      },
      useFormState: function(t, e) {
        return B = "useFormState", pt(), ms(), Ua(t, e);
      },
      useActionState: function(t, e) {
        return B = "useActionState", pt(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return B = "useOptimistic", pt(), Oi(t);
      },
      useHostTransitionStatus: Wu,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", pt(), bd();
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", pt(), As(t);
      }
    }, gb = {
      readContext: function(t) {
        return Kt(t);
      },
      use: wu,
      useCallback: function(t, e) {
        return B = "useCallback", V(), Sd(t, e);
      },
      useContext: function(t) {
        return B = "useContext", V(), Kt(t);
      },
      useEffect: function(t, e) {
        return B = "useEffect", V(), Mi(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", V(), nu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        B = "useInsertionEffect", V(), Hc(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", V(), kl(t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", V();
        var a = N.H;
        N.H = kc;
        try {
          return Il(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", V();
        var c = N.H;
        N.H = kc;
        try {
          return Ho(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return B = "useRef", V(), gd(t);
      },
      useState: function(t) {
        B = "useState", V();
        var e = N.H;
        N.H = kc;
        try {
          return Rc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", V(), Yo(t, e);
      },
      useTransition: function() {
        return B = "useTransition", V(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", V(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", V(), Ds();
      },
      useActionState: function(t, e) {
        return B = "useActionState", V(), Ua(t, e);
      },
      useFormState: function(t, e) {
        return B = "useFormState", V(), ms(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return B = "useOptimistic", V(), Oi(t);
      },
      useHostTransitionStatus: Wu,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", V(), bd();
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", V(), As(t);
      }
    }, N1 = {
      readContext: function(t) {
        return Kt(t);
      },
      use: wu,
      useCallback: function(t, e) {
        return B = "useCallback", V(), On(t, e);
      },
      useContext: function(t) {
        return B = "useContext", V(), Kt(t);
      },
      useEffect: function(t, e) {
        B = "useEffect", V(), el(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", V(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return B = "useInsertionEffect", V(), el(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", V(), el(4, Xn, t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", V();
        var a = N.H;
        N.H = ic;
        try {
          return Ee(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", V();
        var c = N.H;
        N.H = ic;
        try {
          return Ai(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return B = "useRef", V(), kt().memoizedState;
      },
      useState: function() {
        B = "useState", V();
        var t = N.H;
        N.H = ic;
        try {
          return Ai(Ra);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", V(), uu(t, e);
      },
      useTransition: function() {
        return B = "useTransition", V(), xp();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", V(), Di(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", V(), kt().memoizedState;
      },
      useFormState: function(t) {
        return B = "useFormState", V(), ms(), _c(t);
      },
      useActionState: function(t) {
        return B = "useActionState", V(), _c(t);
      },
      useOptimistic: function(t, e) {
        return B = "useOptimistic", V(), bs(t, e);
      },
      useHostTransitionStatus: Wu,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", V(), kt().memoizedState;
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", V(), xo(t);
      }
    }, Sb = {
      readContext: function(t) {
        return Kt(t);
      },
      use: wu,
      useCallback: function(t, e) {
        return B = "useCallback", V(), On(t, e);
      },
      useContext: function(t) {
        return B = "useContext", V(), Kt(t);
      },
      useEffect: function(t, e) {
        B = "useEffect", V(), el(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", V(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return B = "useInsertionEffect", V(), el(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", V(), el(4, Xn, t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", V();
        var a = N.H;
        N.H = cg;
        try {
          return Ee(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", V();
        var c = N.H;
        N.H = cg;
        try {
          return zi(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return B = "useRef", V(), kt().memoizedState;
      },
      useState: function() {
        B = "useState", V();
        var t = N.H;
        N.H = cg;
        try {
          return zi(Ra);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", V(), bt(t, e);
      },
      useTransition: function() {
        return B = "useTransition", V(), _e();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", V(), Di(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", V(), kt().memoizedState;
      },
      useFormState: function(t) {
        return B = "useFormState", V(), ms(), Cc(t);
      },
      useActionState: function(t) {
        return B = "useActionState", V(), Cc(t);
      },
      useOptimistic: function(t, e) {
        return B = "useOptimistic", V(), Ts(t, e);
      },
      useHostTransitionStatus: Wu,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", V(), kt().memoizedState;
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", V(), xo(t);
      }
    }, kc = {
      readContext: function(t) {
        return se(), Kt(t);
      },
      use: function(t) {
        return L(), wu(t);
      },
      useCallback: function(t, e) {
        return B = "useCallback", L(), pt(), Sd(t, e);
      },
      useContext: function(t) {
        return B = "useContext", L(), pt(), Kt(t);
      },
      useEffect: function(t, e) {
        return B = "useEffect", L(), pt(), Mi(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", L(), pt(), nu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        B = "useInsertionEffect", L(), pt(), Hc(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", L(), pt(), kl(t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", L(), pt();
        var a = N.H;
        N.H = kc;
        try {
          return Il(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", L(), pt();
        var c = N.H;
        N.H = kc;
        try {
          return Ho(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return B = "useRef", L(), pt(), gd(t);
      },
      useState: function(t) {
        B = "useState", L(), pt();
        var e = N.H;
        N.H = kc;
        try {
          return Rc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), pt();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", L(), pt(), Yo(t, e);
      },
      useTransition: function() {
        return B = "useTransition", L(), pt(), Bc();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", L(), pt(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), pt(), Ds();
      },
      useFormState: function(t, e) {
        return B = "useFormState", L(), pt(), Ua(t, e);
      },
      useActionState: function(t, e) {
        return B = "useActionState", L(), pt(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return B = "useOptimistic", L(), pt(), Oi(t);
      },
      useMemoCache: function(t) {
        return L(), Ma(t);
      },
      useHostTransitionStatus: Wu,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", pt(), bd();
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", L(), pt(), As(t);
      }
    }, ic = {
      readContext: function(t) {
        return se(), Kt(t);
      },
      use: function(t) {
        return L(), wu(t);
      },
      useCallback: function(t, e) {
        return B = "useCallback", L(), V(), On(t, e);
      },
      useContext: function(t) {
        return B = "useContext", L(), V(), Kt(t);
      },
      useEffect: function(t, e) {
        B = "useEffect", L(), V(), el(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", L(), V(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return B = "useInsertionEffect", L(), V(), el(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", L(), V(), el(4, Xn, t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", L(), V();
        var a = N.H;
        N.H = ic;
        try {
          return Ee(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", L(), V();
        var c = N.H;
        N.H = ic;
        try {
          return Ai(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return B = "useRef", L(), V(), kt().memoizedState;
      },
      useState: function() {
        B = "useState", L(), V();
        var t = N.H;
        N.H = ic;
        try {
          return Ai(Ra);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), V();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", L(), V(), uu(t, e);
      },
      useTransition: function() {
        return B = "useTransition", L(), V(), xp();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", L(), V(), Di(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), V(), kt().memoizedState;
      },
      useFormState: function(t) {
        return B = "useFormState", L(), V(), _c(t);
      },
      useActionState: function(t) {
        return B = "useActionState", L(), V(), _c(t);
      },
      useOptimistic: function(t, e) {
        return B = "useOptimistic", L(), V(), bs(t, e);
      },
      useMemoCache: function(t) {
        return L(), Ma(t);
      },
      useHostTransitionStatus: Wu,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", V(), kt().memoizedState;
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", L(), V(), xo(t);
      }
    }, cg = {
      readContext: function(t) {
        return se(), Kt(t);
      },
      use: function(t) {
        return L(), wu(t);
      },
      useCallback: function(t, e) {
        return B = "useCallback", L(), V(), On(t, e);
      },
      useContext: function(t) {
        return B = "useContext", L(), V(), Kt(t);
      },
      useEffect: function(t, e) {
        B = "useEffect", L(), V(), el(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return B = "useImperativeHandle", L(), V(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return B = "useInsertionEffect", L(), V(), el(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return B = "useLayoutEffect", L(), V(), el(4, Xn, t, e);
      },
      useMemo: function(t, e) {
        B = "useMemo", L(), V();
        var a = N.H;
        N.H = ic;
        try {
          return Ee(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        B = "useReducer", L(), V();
        var c = N.H;
        N.H = ic;
        try {
          return zi(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return B = "useRef", L(), V(), kt().memoizedState;
      },
      useState: function() {
        B = "useState", L(), V();
        var t = N.H;
        N.H = ic;
        try {
          return zi(Ra);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", L(), V();
      },
      useDeferredValue: function(t, e) {
        return B = "useDeferredValue", L(), V(), bt(t, e);
      },
      useTransition: function() {
        return B = "useTransition", L(), V(), _e();
      },
      useSyncExternalStore: function(t, e, a) {
        return B = "useSyncExternalStore", L(), V(), Di(
          t,
          e,
          a
        );
      },
      useId: function() {
        return B = "useId", L(), V(), kt().memoizedState;
      },
      useFormState: function(t) {
        return B = "useFormState", L(), V(), Cc(t);
      },
      useActionState: function(t) {
        return B = "useActionState", L(), V(), Cc(t);
      },
      useOptimistic: function(t, e) {
        return B = "useOptimistic", L(), V(), Ts(t, e);
      },
      useMemoCache: function(t) {
        return L(), Ma(t);
      },
      useHostTransitionStatus: Wu,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", V(), kt().memoizedState;
      },
      useEffectEvent: function(t) {
        return B = "useEffectEvent", L(), V(), xo(t);
      }
    };
    var bb = {}, Tb = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Ob = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set();
    Object.freeze(bb);
    var x1 = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var c = jl(t), o = tl(c);
        o.payload = e, a != null && (Ci(a), o.callback = a), e = tu(t, o, c), e !== null && (kn(c, "this.setState()", t), yt(e, t, c), ln(e, t, c));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var c = jl(t), o = tl(c);
        o.tag = db, o.payload = e, a != null && (Ci(a), o.callback = a), e = tu(t, o, c), e !== null && (kn(c, "this.replaceState()", t), yt(e, t, c), ln(e, t, c));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = jl(t), c = tl(a);
        c.tag = hb, e != null && (Ci(e), c.callback = e), e = tu(t, c, a), e !== null && (kn(a, "this.forceUpdate()", t), yt(e, t, a), ln(e, t, a));
      }
    }, Kh = null, q1 = null, Y1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Tl = !1, Cb = {}, Hb = {}, Bb = {}, Nb = {}, $h = !1, xb = {}, ig = {}, j1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, qb = !1, Yb = null;
    Yb = /* @__PURE__ */ new Set();
    var co = !1, El = !1, G1 = !1, jb = typeof WeakSet == "function" ? WeakSet : Set, Vl = null, Wh = null, Fh = null, Al = null, fn = !1, oc = null, Cl = !1, Q0 = 8192, QT = {
      getCacheForType: function(t) {
        var e = Kt(gl), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return Kt(gl).controller.signal;
      },
      getOwner: function() {
        return pa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var V0 = Symbol.for;
      V0("selector.component"), V0("selector.has_pseudo_class"), V0("selector.role"), V0("selector.test_id"), V0("selector.text");
    }
    var VT = [], ZT = typeof WeakMap == "function" ? WeakMap : Map, Zl = 0, Hl = 2, Qn = 4, io = 0, Z0 = 1, Ar = 2, og = 3, Hf = 4, fg = 6, Gb = 5, Lt = Zl, pe = null, Ct = null, Rt = 0, sn = 0, sg = 1, zr = 2, L0 = 3, Xb = 4, X1 = 5, w0 = 6, rg = 7, Q1 = 8, Dr = 9, fe = sn, Vn = null, Bf = !1, kh = !1, V1 = !1, Ic = 0, Ge = io, Nf = 0, xf = 0, Z1 = 0, rn = 0, Or = 0, J0 = null, Za = null, dg = !1, hg = 0, Qb = 0, Vb = 300, mg = 1 / 0, Zb = 500, K0 = null, Pe = null, qf = null, yg = 0, L1 = 1, w1 = 2, Lb = 3, Yf = 0, wb = 1, Jb = 2, Kb = 3, $b = 4, pg = 5, zl = 0, jf = null, Ih = null, fc = 0, J1 = 0, K1 = -0, $1 = null, Wb = null, Fb = null, sc = yg, kb = null, LT = 50, $0 = 0, W1 = null, F1 = !1, vg = !1, wT = 50, Mr = 0, W0 = null, Ph = !1, gg = null, Ib = !1, Pb = /* @__PURE__ */ new Set(), JT = {}, Sg = null, tm = null, k1 = !1, I1 = !1, bg = !1, P1 = !1, Gf = 0, tS = {};
    (function() {
      for (var t = 0; t < r1.length; t++) {
        var e = r1[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), pn(a, "on" + e);
      }
      pn(US, "onAnimationEnd"), pn(_S, "onAnimationIteration"), pn(CS, "onAnimationStart"), pn("dblclick", "onDoubleClick"), pn("focusin", "onFocus"), pn("focusout", "onBlur"), pn(TT, "onTransitionRun"), pn(ET, "onTransitionStart"), pn(AT, "onTransitionCancel"), pn(HS, "onTransitionEnd");
    })(), ro("onMouseEnter", ["mouseout", "mouseover"]), ro("onMouseLeave", ["mouseout", "mouseover"]), ro("onPointerEnter", ["pointerout", "pointerover"]), ro("onPointerLeave", ["pointerout", "pointerover"]), hn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), hn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), hn("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), hn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), hn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), hn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var F0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), eS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(F0)
    ), Tg = "_reactListening" + Math.random().toString(36).slice(2), t2 = !1, e2 = !1, Eg = !1, l2 = !1, Ag = !1, zg = !1, a2 = !1, Dg = {}, KT = /\r\n?/g, $T = /\u0000|\uFFFD/g, Rr = "http://www.w3.org/1999/xlink", lS = "http://www.w3.org/XML/1998/namespace", WT = "javascript:throw new Error('React form unexpectedly submitted.')", FT = "suppressHydrationWarning", Ur = "&", Og = "/&", k0 = "$", I0 = "/$", Xf = "$?", _r = "$~", em = "$!", kT = "html", IT = "body", PT = "head", aS = "F!", n2 = "F", u2 = "loading", tE = "style", oo = 0, lm = 1, Mg = 2, nS = null, uS = null, c2 = { dialog: !0, webview: !0 }, cS = null, P0 = void 0, i2 = typeof setTimeout == "function" ? setTimeout : void 0, eE = typeof clearTimeout == "function" ? clearTimeout : void 0, Cr = -1, o2 = typeof Promise == "function" ? Promise : void 0, lE = typeof queueMicrotask == "function" ? queueMicrotask : typeof o2 < "u" ? function(t) {
      return o2.resolve(null).then(t).catch(av);
    } : i2, iS = null, Hr = 0, tp = 1, f2 = 2, s2 = 3, Hu = 4, Bu = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Set(), fo = Wt.d;
    Wt.d = {
      f: function() {
        var t = fo.f(), e = Na();
        return t || e;
      },
      r: function(t) {
        var e = dn(t);
        e !== null && e.tag === 5 && e.type === "form" ? jo(e) : fo.r(t);
      },
      D: function(t) {
        fo.D(t), Qy("dns-prefetch", t, null);
      },
      C: function(t, e) {
        fo.C(t, e), Qy("preconnect", t, e);
      },
      L: function(t, e, a) {
        fo.L(t, e, a);
        var c = am;
        if (c && t && e) {
          var o = 'link[rel="preload"][as="' + ne(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + ne(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + ne(
            a.imageSizes
          ) + '"]')) : o += '[href="' + ne(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = Qi(t);
              break;
            case "script":
              f = Vi(t);
          }
          Bu.has(f) || (t = Dt(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Bu.set(f, t), c.querySelector(o) !== null || e === "style" && c.querySelector(
            ks(f)
          ) || e === "script" && c.querySelector(Is(f)) || (e = c.createElement("link"), Ae(e, "link", t), Ve(e), c.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        fo.m(t, e);
        var a = am;
        if (a && t) {
          var c = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + ne(c) + '"][href="' + ne(t) + '"]', f = o;
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Vi(t);
          }
          if (!Bu.has(f) && (t = Dt({ rel: "modulepreload", href: t }, e), Bu.set(f, t), a.querySelector(o) === null)) {
            switch (c) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Is(f)))
                  return;
            }
            c = a.createElement("link"), Ae(c, "link", t), Ve(c), a.head.appendChild(c);
          }
        }
      },
      X: function(t, e) {
        fo.X(t, e);
        var a = am;
        if (a && t) {
          var c = $a(a).hoistableScripts, o = Vi(t), f = c.get(o);
          f || (f = a.querySelector(
            Is(o)
          ), f || (t = Dt({ src: t, async: !0 }, e), (e = Bu.get(o)) && Ly(t, e), f = a.createElement("script"), Ve(f), Ae(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      },
      S: function(t, e, a) {
        fo.S(t, e, a);
        var c = am;
        if (c && t) {
          var o = $a(c).hoistableStyles, f = Qi(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Hr, preload: null };
            if (d = c.querySelector(
              ks(f)
            ))
              h.loading = tp | Hu;
            else {
              t = Dt(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Bu.get(f)) && Zy(t, a);
              var y = d = c.createElement("link");
              Ve(y), Ae(y, "link", t), y._p = new Promise(function(p, A) {
                y.onload = p, y.onerror = A;
              }), y.addEventListener("load", function() {
                h.loading |= tp;
              }), y.addEventListener("error", function() {
                h.loading |= f2;
              }), h.loading |= Hu, uf(d, e, c);
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
        fo.M(t, e);
        var a = am;
        if (a && t) {
          var c = $a(a).hoistableScripts, o = Vi(t), f = c.get(o);
          f || (f = a.querySelector(
            Is(o)
          ), f || (t = Dt({ src: t, async: !0, type: "module" }, e), (e = Bu.get(o)) && Ly(t, e), f = a.createElement("script"), Ve(f), Ae(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      }
    };
    var am = typeof document > "u" ? null : document, Rg = null, aE = 6e4, nE = 800, uE = 500, oS = 0, fS = null, Ug = null, Br = Pg, ep = {
      $$typeof: xn,
      Provider: null,
      Consumer: null,
      _currentValue: Br,
      _currentValue2: Br,
      _threadCount: 0
    }, d2 = "%c%s%c", h2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", m2 = "", _g = " ", cE = Function.prototype.bind, y2 = !1, p2 = null, v2 = null, g2 = null, S2 = null, b2 = null, T2 = null, E2 = null, A2 = null, z2 = null, D2 = null;
    p2 = function(t, e, a, c) {
      e = Z(t, e), e !== null && (a = I(e.memoizedState, a, 0, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Dt({}, t.memoizedProps), a = ql(t, 2), a !== null && yt(a, t, 2));
    }, v2 = function(t, e, a) {
      e = Z(t, e), e !== null && (a = Tt(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = Dt({}, t.memoizedProps), a = ql(t, 2), a !== null && yt(a, t, 2));
    }, g2 = function(t, e, a, c) {
      e = Z(t, e), e !== null && (a = W(e.memoizedState, a, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Dt({}, t.memoizedProps), a = ql(t, 2), a !== null && yt(a, t, 2));
    }, S2 = function(t, e, a) {
      t.pendingProps = I(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ql(t, 2), e !== null && yt(e, t, 2);
    }, b2 = function(t, e) {
      t.pendingProps = Tt(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ql(t, 2), e !== null && yt(e, t, 2);
    }, T2 = function(t, e, a) {
      t.pendingProps = W(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ql(t, 2), e !== null && yt(e, t, 2);
    }, E2 = function(t) {
      var e = ql(t, 2);
      e !== null && yt(e, t, 2);
    }, A2 = function(t) {
      var e = qr(), a = ql(t, e);
      a !== null && yt(a, t, e);
    }, z2 = function(t) {
      le = t;
    }, D2 = function(t) {
      jt = t;
    };
    var Cg = !0, Hg = null, sS = !1, Qf = null, Vf = null, Zf = null, lp = /* @__PURE__ */ new Map(), ap = /* @__PURE__ */ new Map(), Lf = [], iE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Bg = null;
    if (Nn.prototype.render = t0.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ve(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var c = e.current, o = jl(c);
      sh(c, o, a, e, null, null);
    }, Nn.prototype.unmount = t0.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (Lt & (Hl | Qn)) !== Zl && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), sh(t.current, 2, null, t, null, null), Na(), e[nc] = null;
      }
    }, Nn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = rp();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < Lf.length && e !== 0 && e < Lf[a].priority; a++) ;
        Lf.splice(a, 0, t), a === 0 && Py(t);
      }
    }, (function() {
      var t = ar.version;
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
      return t = ga(e), t = t !== null ? Nl(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: N,
        reconcilerVersion: "19.2.4"
      };
      return t.overrideHookState = p2, t.overrideHookStateDeletePath = v2, t.overrideHookStateRenamePath = g2, t.overrideProps = S2, t.overridePropsDeletePath = b2, t.overridePropsRenamePath = T2, t.scheduleUpdate = E2, t.scheduleRetry = A2, t.setErrorHandler = z2, t.setSuspenseHandler = D2, t.scheduleRefresh = Ue, t.scheduleRoot = Re, t.setRefreshHandler = Bl, t.getCurrentFiber = ie, um(t);
    })() && $c && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var O2 = window.location.protocol;
      /^(https?|file):$/.test(O2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (O2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    ip.createRoot = function(t, e) {
      if (!ve(t))
        throw Error("Target container is not a DOM element.");
      e0(t);
      var a = !1, c = "", o = Ad, f = zd, d = Wm;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === cn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (c = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = er(
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
      ), t[nc] = e.current, Xc(t), new t0(e);
    }, ip.hydrateRoot = function(t, e, a) {
      if (!ve(t))
        throw Error("Target container is not a DOM element.");
      e0(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var c = !1, o = "", f = Ad, d = zd, h = Wm, y = null;
      return a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = er(
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
      ), e.context = Av(null), a = e.current, c = jl(a), c = ei(c), o = tl(c), o.callback = null, tu(a, o, c), kn(c, "hydrateRoot()", null), a = c, e.current.lanes = a, rc(e, a), da(e), t[nc] = e.current, Xc(t), new Nn(e);
    }, ip.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ip;
}
var x2;
function bE() {
  if (x2) return xg.exports;
  x2 = 1;
  function Z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z);
      } catch (I) {
        console.error(I);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (Z(), xg.exports = gE()) : xg.exports = SE(), xg.exports;
}
var TE = bE();
const hS = 768;
let mS = null;
function EE(Z, I = "root") {
  const W = document.getElementById(I);
  if (!W) throw new Error(`Element ID "${I}" not found`);
  mS || (mS = TE.createRoot(W)), mS.render(Z);
}
function j2(Z = !0) {
  const [I, W] = pS(Z);
  return [I, () => {
    W(!I);
  }];
}
function G2(Z = 0, I = 1, W = 1 / 0, R = !0) {
  const [Tt, jt] = pS(Z);
  return [Tt, () => {
    let L = Tt + I;
    L > W && (L = R ? Z : W), jt(L);
  }];
}
function X2(Z, I = !0) {
  const W = Object.keys(Z).length, [R, Tt] = G2(0, 1, W - 1, I);
  return [R, Tt];
}
function AE() {
  const [Z, I] = pS(void 0);
  return fE(() => {
    const W = window.matchMedia(`(max-width: ${hS - 1}px)`), R = () => {
      I(window.innerWidth < hS);
    };
    return W.addEventListener("change", R), I(window.innerWidth < hS), () => W.removeEventListener("change", R);
  }, []), !!Z;
}
const zE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  renderReact: EE,
  useCount: G2,
  useIndex: X2,
  useIsMobile: AE,
  useOpen: j2
}, Symbol.toStringTag, { value: "Module" }));
function DE({
  childrens: Z,
  handleCycle: I,
  onClick: W,
  ...R
}) {
  const [Tt, jt] = X2(Z), le = async (L) => {
    W && W(L), await I(Tt), jt();
  };
  return /* @__PURE__ */ op.jsx("button", { onClick: le, ...R, children: Z[Tt] });
}
function OE({
  handleFormData: Z,
  link: I,
  onSubmit: W,
  ...R
}) {
  const Tt = sE();
  let jt = async (le) => {
    if (le.preventDefault(), W && W(le), Z) {
      const L = new FormData(le.currentTarget);
      await Z(L);
    }
    I && Tt(I);
  };
  return /* @__PURE__ */ op.jsx("form", { onSubmit: jt, ...R });
}
function Yg(...Z) {
  return dE(rE(Z));
}
const ME = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cn: Yg
}, Symbol.toStringTag, { value: "Module" }));
function RE({
  openIcon: Z,
  closeIcon: I,
  handleOpen: W,
  defaultOpen: R = !0,
  rotate: Tt = !0,
  className: jt,
  onClick: le,
  ...L
}) {
  const [se, il] = j2(R), La = async (ft) => {
    le && le(ft), await W(se), il();
  };
  return /* @__PURE__ */ op.jsxs(
    "button",
    {
      onClick: La,
      "data-open": se,
      className: Yg("group relative", jt),
      ...L,
      children: [
        /* @__PURE__ */ op.jsx(
          "div",
          {
            className: Yg(
              "grid place-content-center size-full transition group-data-[open=false]:opacity-0 absolute",
              Tt ? "group-data-[open=false]:-rotate-90" : void 0
            ),
            children: Z
          }
        ),
        /* @__PURE__ */ op.jsx(
          "div",
          {
            className: Yg(
              "grid place-content-center size-full transition group-data-[open=true]:opacity-0 absolute",
              Tt ? "group-data-[open=true]:rotate-90" : void 0
            ),
            children: I
          }
        )
      ]
    }
  );
}
const UE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CycleButton: DE,
  Form: OE,
  IconToggle: RE
}, Symbol.toStringTag, { value: "Module" })), _E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
async function CE(Z, {
  params: I,
  body: W,
  headers: R,
  method: Tt
}) {
  if (I && (I = Object.fromEntries(
    Object.entries(I).map(
      ([L, se]) => [L, String(se)]
    )
  ), Z = Z + "?" + new URLSearchParams(I).toString()), R = R ?? {}, R = Object.fromEntries(
    Object.entries(R).map(
      ([L, se]) => [L, String(se)]
    )
  ), W instanceof File) {
    const L = new FormData();
    L.append("file", W), W = L;
  } else W instanceof Blob ? R["Content-Type"] = R["Content-Type"] ?? W.type ?? "application/octet-stream" : W instanceof Object && !(W instanceof URLSearchParams) && !(W instanceof FormData) ? (W = JSON.stringify(W), R["Content-Type"] = R["Content-Type"] ?? "application/json") : typeof W == "string" && (R["Content-Type"] = R["Content-Type"] ?? "application/json");
  const jt = {
    method: Tt ? Tt.toUpperCase() : W ? "POST" : "GET",
    headers: R
  };
  return W && (jt.body = W), await fetch(
    Z,
    jt
  );
}
const HE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  request: CE
}, Symbol.toStringTag, { value: "Module" })), BE = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, NE = /^https?:\/\/[^\s/$.?#].[^\s]*$/, xE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, qE = /^1[3-9]\d{9}$/, YE = /^[\u4e00-\u9fa5]+$/, jE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PATTERN_CN: YE,
  PATTERN_EMAIL: xE,
  PATTERN_IP: BE,
  PATTERN_PHONE: qE,
  PATTERN_URL: NE
}, Symbol.toStringTag, { value: "Module" }));
class GE {
  /**
   * Build instance.
   * 
   * @param name - Local storage key.
   */
  constructor(I) {
    this.name = I, localStorage.getItem(I) || localStorage.setItem(I, "{}");
  }
  /**
   * Get all data.
   * 
   * @returns All data.
   */
  get data() {
    const I = localStorage.getItem(this.name);
    return JSON.parse(I);
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
  update(I) {
    const W = Object.assign(this.data, I), R = JSON.stringify(W);
    localStorage.setItem(this.name, R);
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
  get(I) {
    return this.data[I];
  }
  /**
   * Set a item.
   * 
   * @param key - Item key.
   * @param value - Item value.
   */
  set(I, W) {
    const R = { [I]: W };
    this.update(R);
  }
  /**
   * Delete a item.
   * 
   * @param key - Item key.
   */
  del(I) {
    const W = this.data;
    delete W[I];
    const R = JSON.stringify(W);
    localStorage.setItem(this.name, R);
  }
  /**
   * Toggle boolean value.
   * 
   * @param key - Item key.
   */
  toggle(I) {
    const W = this.data;
    if (!(I in W)) throw new Error(`Key "${I}" not found`);
    const R = W[I];
    if (typeof R != "boolean") throw new Error(`The value type of key "${I}" is not boolean`);
    this.set(I, !R);
  }
}
const XE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Storager: GE
}, Symbol.toStringTag, { value: "Module" })), JE = {
  component: UE,
  base: _E,
  net: HE,
  re: jE,
  react: zE,
  tailwindcss: ME,
  window: XE
};
export {
  JE as default
};
