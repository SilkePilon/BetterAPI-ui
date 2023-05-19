import {
  V as L,
  G as _,
  _ as y,
  f as q,
  d as e,
  B as Y,
  e as J,
  O as X,
  p as Q,
  i as R,
  b as t1,
} from "./q-babceb26.js";
import { i as M } from "./q-66eafc3b.js";
import {
  i as n1,
  m as e1,
  e as o1,
  r as i1,
  f as l1,
  A as s1,
  w as a1,
  c as r1,
  h as u1,
  k as c1,
  j as d1,
  l as I,
  o as h1,
  p as p1,
  q as f1,
  s as g1,
  u as w1,
  d as u,
} from "./q-190e124d.js";
var m1 = function () {};
function k1(t, n) {
  var i = {};
  for (var o in t)
    Object.prototype.hasOwnProperty.call(t, o) &&
      n.indexOf(o) < 0 &&
      (i[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, o = Object.getOwnPropertySymbols(t); l < o.length; l++)
      n.indexOf(o[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, o[l]) &&
        (i[o[l]] = t[o[l]]);
  return i;
}
function U(t, n, i, o) {
  var l;
  return n1(n)
    ? n
    : n.startsWith("-") || n.startsWith("+")
    ? Math.max(0, t + parseFloat(n))
    : n === "<"
    ? i
    : (l = o.get(n)) !== null && l !== void 0
    ? l
    : t;
}
function C1(t, n, i) {
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    l.at > n && l.at < i && (i1(t, l), o--);
  }
}
function v1(t, n, i, o, l, d) {
  C1(t, l, d);
  for (let h = 0; h < n.length; h++)
    t.push({ value: n[h], at: e1(l, d, o[h]), easing: o1(i, h) });
}
function _1(t, n) {
  return t.at === n.at ? (t.value === null ? 1 : -1) : t.at - n.at;
}
function S(t, n = {}) {
  var i;
  const o = y1(t, n),
    l = o.map((d) => l1(...d, s1)).filter(Boolean);
  return a1(l, n, (i = o[0]) === null || i === void 0 ? void 0 : i[3].duration);
}
function y1(t, n = {}) {
  var { defaultOptions: i = {} } = n,
    o = k1(n, ["defaultOptions"]);
  const l = [],
    d = new Map(),
    h = {},
    A = new Map();
  let b = 0,
    p = 0,
    O = 0;
  for (let f = 0; f < t.length; f++) {
    const c = t[f];
    if (r1(c)) {
      A.set(c, p);
      continue;
    } else if (!Array.isArray(c)) {
      A.set(c.name, U(p, c.at, b, A));
      continue;
    }
    const [V, g, a = {}] = c;
    a.at !== void 0 && (p = U(p, a.at, b, A));
    let s = 0;
    const w = u1(V, h),
      m = w.length;
    for (let k = 0; k < m; k++) {
      const j = w[k],
        F = M1(j, d);
      for (const C in g) {
        const K = A1(C, F);
        let r = c1(g[C]);
        const P = d1(a, C);
        let {
          duration: x = i.duration || I.duration,
          easing: H = i.easing || I.easing,
        } = P;
        if (h1(H)) {
          m1(C === "opacity" || r.length > 1);
          const E = H.createAnimation(r, C !== "opacity", () => 0, C);
          (H = E.easing), (r = E.keyframes || r), (x = E.duration || x);
        }
        const D = p1(a.delay, k, m) || 0,
          T = p + D,
          B = T + x;
        let { offset: v = f1(r.length) } = P;
        v.length === 1 && v[0] === 0 && (v[1] = 1);
        const Z = v.length - r.length;
        Z > 0 && g1(v, Z),
          r.length === 1 && r.unshift(null),
          v1(K, r, H, v, T, B),
          (s = Math.max(D + x, s)),
          (O = Math.max(B, O));
      }
    }
    (b = p), (p += s);
  }
  return (
    d.forEach((f, c) => {
      for (const V in f) {
        const g = f[V];
        g.sort(_1);
        const a = [],
          s = [],
          w = [];
        for (let m = 0; m < g.length; m++) {
          const { at: k, value: j, easing: F } = g[m];
          a.push(j), s.push(w1(0, O, k)), w.push(F || I.easing);
        }
        s[0] !== 0 && (s.unshift(0), a.unshift(a[0]), w.unshift("linear")),
          s[s.length - 1] !== 1 && (s.push(1), a.push(null)),
          l.push([
            c,
            V,
            a,
            Object.assign(
              Object.assign(Object.assign({}, i), {
                duration: O,
                easing: w,
                offset: s,
              }),
              o
            ),
          ]);
      }
    }),
    l
  );
}
function M1(t, n) {
  return !n.has(t) && n.set(t, {}), n.get(t);
}
function A1(t, n) {
  return n[t] || (n[t] = []), n[t];
}
const O1 = `@keyframes hue-rotate{0%{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}.ai-showcase-animation{pointer-events:none}
`,
  V1 = O1,
  z =
    "👋 Hello! My name is YouChat. I’m an AI that can answer general questions, explain things, suggest ideas, summarize text, and write code for you.",
  W = (t = !1) =>
    M() ? { y: t ? [24, 0] : [0, 24] } : { x: t ? [0, -64] : [384, 0] },
  x1 = (t) =>
    S([
      [
        t,
        { opacity: [0, 1], scale: [0.8, 1], ...W() },
        { easing: [0.6, 0.6, 0, 1], duration: 1 },
      ],
    ]),
  H1 = (t) => {
    u(t, { ...W(!0), scale: [1, 0.8] }, { easing: [0.6, 0.6, 0, 1] }),
      u(t, { opacity: 0 }, { easing: [0.6, 0.6, 0, 1], delay: 0.08 });
  },
  L1 = (t) =>
    S([
      [t, { scale: [1, 0.9] }, { delay: 0.5, duration: 0.15 }],
      [t, { scale: [0.9, 1] }, { duration: 0.15 }],
    ]),
  S1 = (t) =>
    new Promise((n) => {
      const i = setInterval(() => {
        (t.value += 1), t.value >= z.length && (clearInterval(i), n(""));
      }, 35);
    }),
  Y1 = (t, n, i) =>
    new Promise((o) => {
      x1(t).finished.then(() => {
        S1(i).then(() => {
          L1(n).finished.then(() => {
            o(""), H1(t);
          });
        });
      });
    }),
  b1 = L(
    _(
      () =>
        y(
          () => import("./q-70c82176.js"),
          [
            "build/q-70c82176.js",
            "build/q-babceb26.js",
            "build/q-66eafc3b.js",
            "build/q-190e124d.js",
          ]
        ),
      "s_SMaKZe8cBqU"
    )
  ),
  j1 = ({ track: t }) => {
    var o;
    const [n, i] = q();
    t(n),
      (o = n.value) == null ||
        o.then(() => {
          (i.animationStep.value += 1),
            i.animationStep.value === 4 &&
              ((i.animationStep.value = -2),
              (i.aiShowcaseValue.value = z),
              u(
                i.wrapperRef.value,
                { height: M() ? "200px" : "168px" },
                { easing: [0.6, 0.6, 0, 1] }
              ));
        });
  },
  G = (t = !1) =>
    M() ? { y: t ? [24, 0] : [0, 24] } : { x: t ? [0, -64] : [64, 0] },
  J1 = (t, n) => {
    const i = S([
      [
        t,
        { opacity: [0, 1], scale: [0.8, 1], ...G() },
        { easing: [0.6, 0.6, 0, 1], duration: 1 },
      ],
      [
        n,
        { backgroundColor: "rgba(255, 255, 255, 0.08)" },
        { delay: 1, duration: 0.15 },
      ],
    ]);
    return new Promise((o) => {
      i.finished.then(() => {
        setTimeout(o, 100),
          u(n, { backgroundColor: "rgba(255, 255, 255, 0)" }),
          u(t, { ...G(!0), scale: [1, 0.8] }, { easing: [0.6, 0.6, 0, 1] }),
          u(t, { opacity: 0 }, { easing: [0.6, 0.6, 0, 1], delay: 0.08 });
      });
    });
  },
  F1 = L(
    _(
      () =>
        y(
          () => import("./q-d80fab83.js"),
          [
            "build/q-d80fab83.js",
            "build/q-babceb26.js",
            "build/q-66eafc3b.js",
            "build/q-190e124d.js",
          ]
        ),
      "s_jEr0q00W0pY"
    )
  ),
  E1 = { value: !1 },
  I1 = () => (M() ? "278px" : "388px"),
  X1 = (t) => (
    (E1.value = !0),
    (t.style.display = "block"),
    u(t, { width: I1() }, { easing: [0.6, 0.6, 0, 1], duration: 1 })
  ),
  P1 = L(
    _(
      () =>
        y(
          () => import("./q-eec00785.js"),
          [
            "build/q-eec00785.js",
            "build/q-babceb26.js",
            "build/q-66eafc3b.js",
            "build/q-190e124d.js",
          ]
        ),
      "s_MDZJ7YNsFG4"
    )
  ),
  D1 = () =>
    e(
      "svg",
      null,
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        e(
          "path",
          null,
          {
            d: "M9.75 13C14 13 14 7.75 14 7.75C14 7.75 14 13 18.25 13C14 13 14 18.25 14 18.25C14 18.25 14 13 9.75 13Z",
            fill: "url(#paint0_linear_111_26671)",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M5.75 8C8 8 8 5.75 8 5.75C8 5.75 8 8 10.25 8C8 8 8 10.25 8 10.25C8 10.25 8 8 5.75 8Z",
            fill: "url(#paint1_linear_111_26671)",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M7.75 16.25H7.76M18.25 5.75H18.26M18.25 18.25H18.26M14 7.75C14 7.75 14 13 9.75 13C14 13 14 18.25 14 18.25C14 18.25 14 13 18.25 13C14 13 14 7.75 14 7.75ZM8 5.75C8 5.75 8 8 5.75 8C8 8 8 10.25 8 10.25C8 10.25 8 8 10.25 8C8 8 8 5.75 8 5.75Z",
            stroke: "url(#paint2_linear_111_26671)",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "defs",
          null,
          null,
          [
            e(
              "linearGradient",
              null,
              {
                id: "paint0_linear_111_26671",
                x1: "12.005",
                y1: "5.75",
                x2: "12.005",
                y2: "18.25",
                gradientUnits: "userSpaceOnUse",
              },
              [
                e("stop", null, { "stop-color": "#9382FF" }, null, 3, null),
                e(
                  "stop",
                  null,
                  { offset: "1", "stop-color": "#D782FF" },
                  null,
                  3,
                  null
                ),
              ],
              3,
              null
            ),
            e(
              "linearGradient",
              null,
              {
                id: "paint1_linear_111_26671",
                x1: "12.005",
                y1: "5.75",
                x2: "12.005",
                y2: "18.25",
                gradientUnits: "userSpaceOnUse",
              },
              [
                e("stop", null, { "stop-color": "#9382FF" }, null, 3, null),
                e(
                  "stop",
                  null,
                  { offset: "1", "stop-color": "#D782FF" },
                  null,
                  3,
                  null
                ),
              ],
              3,
              null
            ),
            e(
              "linearGradient",
              null,
              {
                id: "paint2_linear_111_26671",
                x1: "12.005",
                y1: "5.75",
                x2: "12.005",
                y2: "18.25",
                gradientUnits: "userSpaceOnUse",
              },
              [
                e("stop", null, { "stop-color": "#9382FF" }, null, 3, null),
                e(
                  "stop",
                  null,
                  { offset: "1", "stop-color": "#D782FF" },
                  null,
                  3,
                  null
                ),
              ],
              3,
              null
            ),
          ],
          3,
          null
        ),
      ],
      3,
      "0O_0"
    ),
  T1 = () =>
    e(
      "svg",
      null,
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e(
        "path",
        null,
        {
          d: "M10 18C8.89543 18 8 17.1046 8 16V8C8 6.89543 8.89543 6 10 6H12.4114C13.2219 6 13.898 6.13086 14.4396 6.39258C14.9811 6.6543 15.3882 7.01758 15.6608 7.48242C15.9333 7.94336 16.0696 8.47461 16.0696 9.07617C16.0696 9.54492 15.9835 9.95703 15.8114 10.3125C15.6392 10.6641 15.4025 10.9531 15.1013 11.1797C14.8036 11.4023 14.4629 11.5605 14.0791 11.6543V11.7715C14.4987 11.791 14.8915 11.9199 15.2573 12.1582C15.6267 12.3965 15.9262 12.7305 16.1557 13.1602C16.3852 13.5859 16.5 14.0938 16.5 14.6836C16.5 15.3203 16.3547 15.8887 16.0642 16.3887C15.7773 16.8848 15.3523 17.2773 14.7892 17.5664C14.2262 17.8555 13.3916 18 12.5667 18H10ZM10 15.9258H12.3832C13.0324 15.9258 13.5058 15.791 13.8035 15.5215C14.1012 15.248 14.25 14.8848 14.25 14.4316C14.25 14.0996 14.1765 13.8066 14.0294 13.5527C13.8824 13.2988 13.6726 13.0996 13.4 12.9551C13.131 12.8105 12.81 12.7383 12.437 12.7383H10V15.9258ZM10 11.0215H12.2111C12.5303 11.0215 12.8136 10.9609 13.0611 10.8398C13.3121 10.7148 13.5094 10.5391 13.6528 10.3125C13.7999 10.0859 13.8734 9.81445 13.8734 9.49805C13.8734 9.06445 13.7318 8.71484 13.4484 8.44922C13.1687 8.18359 12.7706 8.05078 12.2541 8.05078H10V11.0215Z",
          fill: "white",
          "fill-opacity": "0.12",
        },
        null,
        3,
        null
      ),
      3,
      "ni_0"
    ),
  B1 = () =>
    e(
      "svg",
      null,
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        e(
          "path",
          null,
          {
            d: "M5.75 16.25V15.75C5.75 15.1977 6.19772 14.75 6.75 14.75H7.25C7.80228 14.75 8.25 15.1977 8.25 15.75V16.25C8.25 16.8023 7.80228 17.25 7.25 17.25H6.75C6.19772 17.25 5.75 16.8023 5.75 16.25Z",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M5.75 8.25V7.75C5.75 7.19772 6.19772 6.75 6.75 6.75H7.25C7.80228 6.75 8.25 7.19772 8.25 7.75V8.25C8.25 8.80228 7.80228 9.25 7.25 9.25H6.75C6.19772 9.25 5.75 8.80228 5.75 8.25Z",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M12.75 7.75H18.25",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M13 16.25H18.5",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
      ],
      3,
      "Vj_0"
    ),
  Z1 = () =>
    e(
      "svg",
      null,
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        e(
          "path",
          null,
          {
            d: "M5.75 7.75V12.25M5.75 16.25V12.25M11.25 7.75V12.25M11.25 16.25V12.25M5.75 12.25H11.25",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M14.75 11.25L16.25 9.75V16.25M16.25 16.25H14.75M16.25 16.25H18.25",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
      ],
      3,
      "rU_0"
    ),
  R1 = () =>
    e(
      "svg",
      null,
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        e(
          "path",
          null,
          {
            d: "M5.75 7.75V12.25M5.75 16.25V12.25M11.25 7.75V12.25M11.25 16.25V12.25M5.75 12.25H11.25",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M18.25 16.25H14.75V16.1221C14.75 15.566 14.9816 15.035 15.3891 14.6566L17.3155 12.8677C17.9114 12.3144 18.25 11.538 18.25 10.7248V10.7248C18.25 10.1864 17.8136 9.75 17.2752 9.75H15.75C15.1977 9.75 14.75 10.1977 14.75 10.75V11.25",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
      ],
      3,
      "Ff_0"
    ),
  U1 = () =>
    e(
      "svg",
      null,
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e(
        "path",
        null,
        {
          d: "M13.25 6.75L10.75 17.25M13.25 6.75H10.75M13.25 6.75H15.25M10.75 17.25H8.75M10.75 17.25H13.25",
          stroke: "white",
          "stroke-opacity": "0.12",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        },
        null,
        3,
        null
      ),
      3,
      "cU_0"
    ),
  G1 = () =>
    e(
      "svg",
      null,
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e(
        "path",
        null,
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M11.7093 6.25089C13.3771 4.58304 16.0812 4.58303 17.7491 6.25089C19.417 7.91875 19.417 10.6229 17.7491 12.2907L16.2595 13.7803C15.9666 14.0732 15.4917 14.0732 15.1989 13.7803C14.906 13.4874 14.906 13.0126 15.1989 12.7197L16.6884 11.2301C17.7705 10.148 17.7705 8.39362 16.6884 7.31155C15.6064 6.22948 13.852 6.22948 12.7699 7.31155L11.2803 8.80115C10.9874 9.09404 10.5126 9.09404 10.2197 8.80115C9.92678 8.50825 9.92678 8.03338 10.2197 7.74049L11.7093 6.25089ZM14.7803 9.21967C15.0732 9.51256 15.0732 9.98744 14.7803 10.2803L10.2803 14.7803C9.98744 15.0732 9.51256 15.0732 9.21967 14.7803C8.92678 14.4874 8.92678 14.0126 9.21967 13.7197L13.7197 9.21967C14.0126 8.92678 14.4874 8.92678 14.7803 9.21967ZM8.80115 10.2197C9.09404 10.5126 9.09404 10.9874 8.80115 11.2803L7.31155 12.7699C6.22948 13.852 6.22948 15.6064 7.31155 16.6884C8.39362 17.7705 10.148 17.7705 11.2301 16.6884L12.7197 15.1989C13.0126 14.906 13.4874 14.906 13.7803 15.1989C14.0732 15.4917 14.0732 15.9666 13.7803 16.2595L12.2907 17.7491C10.6229 19.417 7.91875 19.417 6.25089 17.7491C4.58303 16.0812 4.58304 13.3771 6.25089 11.7093L7.74049 10.2197C8.03338 9.92678 8.50825 9.92678 8.80115 10.2197Z",
          fill: "white",
          "fill-opacity": "0.12",
        },
        null,
        3,
        null
      ),
      3,
      "IC_0"
    ),
  N1 = () =>
    e(
      "svg",
      null,
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        e(
          "path",
          null,
          {
            d: "M5.75 7.65909L7.18182 9.25C7.81818 6.54545 9.25 5.75 9.25 5.75",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M5.75 16.6591L7.18182 18.25C7.81818 15.5455 9.25 14.75 9.25 14.75",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M12.75 7.75H18.25",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
        e(
          "path",
          null,
          {
            d: "M12.75 16.25H18.25",
            stroke: "white",
            "stroke-opacity": "0.12",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          null,
          3,
          null
        ),
      ],
      3,
      "M0_0"
    ),
  Q1 = [T1, U1, N1, Z1, R1, B1, G1, D1];
let $ = !1;
const tt = (t, n) =>
    M()
      ? { finished: Promise.resolve() }
      : (($ = !0),
        S([
          [
            t,
            { opacity: [0, 1], y: [25, 0], scale: [0.4, 1] },
            { easing: [0.6, 0.6, 0, 1], duration: 1 },
          ],
          [
            n,
            { backgroundColor: "rgba(255, 255, 255, 0.06)" },
            { delay: 0.4, duration: 0.15 },
          ],
          [n, { backgroundColor: "rgba(255, 255, 255, 0)" }],
        ])),
  nt = (t) => {
    ($ = !1),
      u(t, { y: [0, 20], scale: [1, 0.8] }, { easing: [0.6, 0.6, 0, 1] }),
      u(t, { opacity: [1, 0] }, { easing: [0.6, 0.6, 0, 1], delay: 0.08 });
  },
  z1 = L(
    _(
      () =>
        y(
          () => import("./q-c1c6558d.js"),
          [
            "build/q-c1c6558d.js",
            "build/q-babceb26.js",
            "build/q-66eafc3b.js",
            "build/q-190e124d.js",
          ]
        ),
      "s_MeHzzcrGOeY"
    )
  ),
  W1 = (t) => {
    Y(
      _(() => y(() => Promise.resolve().then(() => N), void 0), "s_5NgRoowRkLk")
    );
    const n = J();
    return (
      X(
        _(
          () => y(() => Promise.resolve().then(() => N), void 0),
          "s_wMprrqeorr4",
          [n, t]
        )
      ),
      e(
        "div",
        null,
        { class: "ai-showcase-animation" },
        [P1, z1, F1, b1].map((i, o) =>
          Q(
            i,
            {
              active:
                o === 0
                  ? t.animationStep.value >= 0
                  : t.animationStep.value === o,
              animationFinished: n,
              [R]: { animationFinished: R },
            },
            3,
            o
          )
        ),
        1,
        "Ie_0"
      )
    );
  },
  N = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _hW: t1,
        s_5NgRoowRkLk: V1,
        s_dm6fXEyN0vU: W1,
        s_wMprrqeorr4: j1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  z as a,
  J1 as b,
  X1 as c,
  tt as d,
  $ as e,
  Q1 as f,
  N as g,
  E1 as i,
  nt as r,
  Y1 as s,
};
