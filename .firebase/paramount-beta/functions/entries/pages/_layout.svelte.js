import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { s as subscribe } from "../../chunks/utils.js";
import { u as userData, a as user } from "../../chunks/firebase.js";
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  let $$unsubscribe_user;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_userData();
  $$unsubscribe_user();
  return `<div class="navbar bg-base-100"><div class="flex-1" data-svelte-h="svelte-7luyw3"><a href="/" class="btn btn-ghost text-xl">Paramount Neuro</a></div> <div class="flex-none"><div class="dropdown dropdown-end" data-svelte-h="svelte-1n12vu8"><div tabindex="0" role="button" class="btn btn-ghost btn-circle"><div class="indicator"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg> <span class="badge badge-xs badge-primary indicator-item"></span></div></div> <div class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"><div class="card-body"><span class="font-bold text-lg">2 Items</span> <div class="card-actions"><button class="btn btn-primary btn-block">View all</button></div></div></div></div> <div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img${add_attribute("src", $userData?.photoURL ?? `default-avatar.png`, 0)} alt="user avatar"></div></div> <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a${add_attribute("href", `/${$userData?.username}`, 0)} class="justify-between">Profile</a></li> <li data-svelte-h="svelte-1g6ofd6"><a href="/settings">Settings</a></li> <li data-svelte-h="svelte-1ccat4x"><a href="/login">Logout</a></li></ul></div></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-svelte-h="svelte-bg2eqa"><footer class="footer p-10 bg-blue-700 text-base-300 text-lg rounded-md"><aside><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> <p>Paramount Neuro<br>Providing reliable techs since 1992</p> <button class="btn bg-white">Schedule a Call
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button></aside> <nav><h6 class="footer-title">Services</h6> <div class="link link-hover">Branding</div> <div class="link link-hover">Design</div> <div class="link link-hover">Marketing</div> <div class="link link-hover">Advertisement</div></nav> <nav><h6 class="footer-title">Company</h6> <div class="link link-hover">About us</div> <div class="link link-hover">Contact</div> <div class="link link-hover">Jobs</div> <div class="link link-hover">Press kit</div></nav> <nav><h6 class="footer-title">Legal</h6> <div class="link link-hover">Terms of use</div> <div class="link link-hover">Privacy policy</div> <div class="link link-hover">Cookie policy</div></nav></footer></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <div class="min-h-screen flex flex-col">${slots.default ? slots.default({ class: "prose" }) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};