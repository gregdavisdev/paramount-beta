import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { u as userData } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_userData();
  return `${$userData?.username ? `<h2 class="card-title">Welcome, @${escape($userData.username)}</h2> <p class="text-center text-success" data-svelte-h="svelte-7i7vjz">You are logged in.</p> <button class="btn btn-warning" data-svelte-h="svelte-wq7ddu">Sign out</button>` : `<h2 data-svelte-h="svelte-bhb3ah">Login</h2> <button class="btn btn-primary" data-svelte-h="svelte-eubzr8">Sign in with Google</button>`}`;
});
export {
  Page as default
};
