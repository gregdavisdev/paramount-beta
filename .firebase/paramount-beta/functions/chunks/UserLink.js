import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const UserLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "default" } = $$props;
  let { url = "default url" } = $$props;
  let { title = "default title" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  return `<a${add_attribute("href", url, 0)} class="stack w-full max-w-md text-center bg-primary flex justify-center items-center p-4 rounded-lg not-prose no-underline"><img${add_attribute("src", `${icon}.png`, 0)}${add_attribute("alt", icon, 0)} width="32" height="32" class="w-8"> <span class="text-lg text-white font-bold">${escape(title)}</span></a>`;
});
export {
  UserLink as U
};
