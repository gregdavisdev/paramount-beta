import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserLink } from "../../../chunks/UserLink.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1yq7ltg_START -->${$$result.title = `<title>@${escape(data.username)} Links</title>`, ""}<meta name="description"${add_attribute("content", data.bio, 0)}><!-- HEAD_svelte-1yq7ltg_END -->`, ""} <main class="prose text-center mx-auto mt-8"><h1 class="text-7xl text-purple-500">@${escape(data.username)}</h1> <img${add_attribute("src", data.photoURL ?? "/user.png", 0)} alt="photoURL" width="256" height="256" class="mx-auto"> <p class="text-xl my-8">${escape(data.bio ?? "no bio yet...")}</p> <ul class="list-none my-6 flex flex-col justify-between">${each(data.links, (item) => {
    return `<li>${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} </li>`;
  })}</ul></main>`;
});
export {
  Page as default
};
