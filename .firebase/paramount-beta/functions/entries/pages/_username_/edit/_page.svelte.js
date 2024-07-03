import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, d as createEventDispatcher, b as each, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { U as UserLink } from "../../../../chunks/UserLink.js";
import { p as page } from "../../../../chunks/stores.js";
import { a as user, u as userData } from "../../../../chunks/firebase.js";
import { w as writable } from "../../../../chunks/index2.js";
import "firebase/firestore";
const css = {
  code: ".over.svelte-1fv7jio{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity))\n}",
  map: '{"version":3,"file":"SortableList.svelte","sources":["SortableList.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { flip } from \\"svelte/animate\\";\\nimport { createEventDispatcher } from \\"svelte\\";\\nexport let list;\\nlet isOver = false;\\nconst dispatch = createEventDispatcher();\\nconst reorder = ({ from, to }) => {\\n  const newList = [...list];\\n  newList[from] = [newList[to], newList[to] = newList[from]][0];\\n  dispatch(\\"sort\\", newList);\\n};\\nfunction getDraggedParent(node) {\\n  if (!node.dataset.index) {\\n    return getDraggedParent(node.parentNode);\\n  } else {\\n    return { ...node.dataset };\\n  }\\n}\\nfunction onDragStart(e) {\\n  const dragged = getDraggedParent(e.target);\\n  e.dataTransfer?.setData(\\"source\\", dragged?.index.toString());\\n}\\nfunction onDragOver(e) {\\n  const id = e.target.dataset?.id;\\n  const dragged = getDraggedParent(e.target);\\n  isOver = dragged?.id ?? false;\\n}\\nfunction onDragLeave(e) {\\n  const dragged = getDraggedParent(e.target);\\n  isOver === dragged.id && (isOver = false);\\n}\\nfunction onDrop(e) {\\n  isOver = false;\\n  const dragged = getDraggedParent(e.target);\\n  reorder({\\n    from: e.dataTransfer?.getData(\\"source\\"),\\n    to: dragged.index\\n  });\\n}\\n<\/script>\\n\\n<style lang=\\"postcss\\">\\n  .over {\\n    --tw-scale-x: 1.05;\\n    --tw-scale-y: 1.05;\\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n    --tw-border-opacity: 1;\\n    border-color: rgb(156 163 175 / var(--tw-border-opacity))\\n}\\n</style>\\n\\n{#if list?.length}\\n  <ul class=\\"list-none p-0 flex flex-col items-center\\">\\n    {#each list as item, index (item.id)}\\n      <li\\n        class=\\"border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full\\"\\n        class:over={item.id === isOver}\\n        data-index={index}\\n        data-id={item.id}\\n        draggable=\\"true\\"\\n        on:dragstart={onDragStart}\\n        on:dragover|preventDefault={onDragOver}\\n        on:dragleave={onDragLeave}\\n        on:drop|preventDefault={onDrop}\\n        animate:flip={{ duration: 300 }}\\n      >\\n        <slot {item} {index} />\\n      </li>\\n    {/each}\\n  </ul>\\n{:else}\\n  <p class=\\"text-center my-12 text-lg font-bold\\">No items to display</p>\\n{/if}\\n"],"names":[],"mappings":"AAyCE,oBAAM,CACJ,YAAY,CAAE,IAAI,CAClB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,UAAU,IAAI,gBAAgB,CAAC,CAAC,CAAC,IAAI,gBAAgB,CAAC,CAAC,CAAC,OAAO,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAC/L,mBAAmB,CAAE,CAAC,CACtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC;AAC7D"}'
};
const SortableList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let isOver = false;
  createEventDispatcher();
  if ($$props.list === void 0 && $$bindings.list && list !== void 0) $$bindings.list(list);
  $$result.css.add(css);
  return `${list?.length ? `<ul class="list-none p-0 flex flex-col items-center">${each(list, (item, index) => {
    return `<li class="${[
      "border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full svelte-1fv7jio",
      item.id === isOver ? "over" : ""
    ].join(" ").trim()}"${add_attribute("data-index", index, 0)}${add_attribute("data-id", item.id, 0)} draggable="true">${slots.default ? slots.default({ item, index }) : ``} </li>`;
  })}</ul>` : `<p class="text-center my-12 text-lg font-bold" data-svelte-h="svelte-1psc3sw">No items to display</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $formData, $$unsubscribe_formData;
  let $userData, $$unsubscribe_userData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const formDefaults = {
    icon: "custom",
    title: "",
    url: "https://"
  };
  const formData = writable(formDefaults);
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
  $formData.title.length < 20 && $formData.title.length > 0;
  $$unsubscribe_user();
  $$unsubscribe_formData();
  $$unsubscribe_userData();
  $$unsubscribe_page();
  return `<main class="max-w-xl mx-auto">${$userData?.username == $page.params.username ? `<h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center" data-svelte-h="svelte-1fjwx5r">Edit your profile</h1> ${validate_component(SortableList, "SortableList").$$render($$result, { list: $userData?.links }, {}, {
    default: ({ item }) => {
      return `<div class="group relative">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} <button class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10" data-svelte-h="svelte-1u0l8ak">Delete</button></div>`;
    }
  })} ${`<button class="btn btn-outline btn-info block mx-auto my-4" data-svelte-h="svelte-1gu2kf">Add a link</button>`}` : ``}</main>`;
});
export {
  Page as default
};
