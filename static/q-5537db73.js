import {
  f as _,
  B as d,
  G as i,
  _ as l,
  e as a,
  L as u,
  d as m,
  K as h,
  b as g,
} from "./q-babceb26.js";
import { i as v } from "./q-66eafc3b.js";
const y = () => {
    const [e, s, t] = _();
    if (v()) {
      if (e.hideOnMobile) return;
      e.mobileSrc && (s.value = e.mobileSrc);
    } else if (e.hideOnDesktop) return;
    t.value = !0;
  },
  b = () => {
    const [e] = _();
    e.value = !0;
  },
  f = `@keyframes hue-rotate{0%{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}.lazy-image{display:block;transition:1s cubic-bezier(.6,.6,0,1) opacity}.lazy-image-hidden{opacity:0}
`,
  E = f,
  L = (e) => {
    d(
      i(() => l(() => Promise.resolve().then(() => o), void 0), "s_lxrgEllERH8")
    );
    const s = e.hideUntilVisible || !0,
      t = a(!1),
      r = e.willLoad || a(!1),
      n = a(e.src);
    return (
      u(
        i(
          () => l(() => Promise.resolve().then(() => o), void 0),
          "s_qwcnM0xJW0E",
          [e, n, r]
        ),
        { strategy: e.strategy || "intersection-observer" }
      ),
      m(
        "img",
        {
          src: r.value ? n.value : "",
          class: [
            "lazy-image",
            {
              "lazy-image-loaded": t.value,
              "lazy-image-hidden": s && !t.value,
            },
            e.class,
          ],
        },
        {
          height: 1,
          width: 1,
          alt: h((c) => c.alt, [e]),
          onLoad$: i(
            () => l(() => Promise.resolve().then(() => o), void 0),
            "s_Deti9nTnz3Q",
            [t]
          ),
        },
        null,
        3,
        "BO_0"
      )
    );
  },
  o = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _hW: g,
        s_Deti9nTnz3Q: b,
        s_lxrgEllERH8: E,
        s_pd7AQCsCHrs: L,
        s_qwcnM0xJW0E: y,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  g as _hW,
  b as s_Deti9nTnz3Q,
  E as s_lxrgEllERH8,
  L as s_pd7AQCsCHrs,
  y as s_qwcnM0xJW0E,
};
