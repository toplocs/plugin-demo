import { defineComponent as l, openBlock as c, createElementBlock as p, createElementVNode as t, toDisplayString as _, createTextVNode as s } from "vue";
const d = { class: "greetings" }, i = { class: "green" }, u = /* @__PURE__ */ l({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(o) {
    return (r, e) => (c(), p("div", d, [
      t("h1", i, _(r.msg), 1),
      e[0] || (e[0] = t("h3", null, [
        s(" You’ve successfully created a project with "),
        t("a", {
          href: "https://vite.dev/",
          target: "_blank",
          rel: "noopener"
        }, "Vite"),
        s(" + "),
        t("a", {
          href: "https://vuejs.org/",
          target: "_blank",
          rel: "noopener"
        }, "Vue 3"),
        s(". What's next? ")
      ], -1))
    ]));
  }
}), g = (o, r) => {
  const e = o.__vccOpts || o;
  for (const [n, a] of r)
    e[n] = a;
  return e;
}, h = /* @__PURE__ */ g(u, [["__scopeId", "data-v-a6cc8622"]]);
export {
  h as default
};
