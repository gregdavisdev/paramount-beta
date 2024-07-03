import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const AnimatedRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<nav class="flex justify-center my-6"><ul class="steps"><a href="/login" class="step step-primary" data-svelte-h="svelte-1xr3921">Login</a> <a href="/login/username" class="${[
    "step",
    $page.route.id?.match(/username|photo/g) ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1a3nhpb">Username</a> <a href="/login/photo" class="${["step", $page.route.id?.match(/photo/g) ? "step-primary" : ""].join(" ").trim()}" data-svelte-h="svelte-1dc9d65">Photo</a></ul></nav> ${validate_component(AnimatedRoute, "AnimatedRoute").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="card w-4/6 bg-neutral text-neutral-content mx-auto"><div class="card-body items-center text-center">${slots.default ? slots.default({}) : ``}</div></main>`;
    }
  })}`;
});
export {
  Layout as default
};
