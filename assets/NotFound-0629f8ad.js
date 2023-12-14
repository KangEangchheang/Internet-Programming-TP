import {
  _ as t,
  R as n,
  r as s,
  o as a,
  c,
  a as r,
  w as _,
  b as e,
  d,
} from "./index-52a1275a.js";
const i = { components: { RouterLink: n } },
  p = e("h1", { style: { width: "100%", margin: "0" } }, "Page Not Found", -1),
  u = e("span", null, "Go back to ", -1);
function l(m, f, h, k, x, N) {
  const o = s("RouterLink");
  return (
    a(),
    c("div", null, [
      p,
      u,
      r(o, { to: "/" }, { default: _(() => [d("Home")]), _: 1 }),
    ])
  );
}
const $ = t(i, [["render", l]]);
export { $ as default };
