import { n as noop, s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const AnimatedHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const SplineViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="block" data-svelte-h="svelte-5lbtfw"><spline-viewer url="https://prod.spline.design/NUSudTOkQ10zdSQw/scene.splinecode"></spline-viewer></div>`;
});
const CardWithImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-svelte-h="svelte-k8an26"><div class="card lg:card-side pb-20 bg-blue-50 card-bordered border-blue-300 m-14"><figure class="max-w-3xl pt-16 pl-4 m-10"><img class="rounded-lg" src="brain-image.jpg" alt="Album"></figure> <div class="card-body pt-24"><h2 class="card-title text-4xl">Streamline, Priorizite, and Elevate Your Health</h2> <p class="text-2xl text-gray-500 pt-4">Efficient solutions tailored for your well-being at Paramount Neuro,
        where the art of optimization meets your health.</p> <div class="flex flex-col max-w-4xl"><div class="grid h-20 card bg-white rounded-box place-items-center text-xl">Virtual Health Hub</div> <div class="divide-transparent p-4"></div> <div class="grid h-20 card bg-white rounded-box place-items-center text-xl">Wellness Checkpoint Program</div> <div class="divide-transparent p-4"></div> <div class="grid h-20 card bg-white rounded-box place-items-center text-xl">Telehealth Concierge</div></div></div></div></div>`;
});
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div id="form" class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"><div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true" data-svelte-h="svelte-1cmzom2"><div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div> <div class="mx-auto max-w-2xl text-center" data-svelte-h="svelte-1vdpsrf"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Partnership Program</h2> <p class="mt-2 text-lg leading-8 text-gray-600">Contact Form</p></div> <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20"><div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"><div data-svelte-h="svelte-haarbc"><label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label> <div class="mt-2.5"><input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div> <div data-svelte-h="svelte-1yzfyjp"><label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label> <div class="mt-2.5"><input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div> <div class="sm:col-span-2" data-svelte-h="svelte-1wvvp3w"><label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label> <div class="mt-2.5"><input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div> <div class="sm:col-span-2" data-svelte-h="svelte-1fv0aak"><label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label> <div class="mt-2.5"><input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div> <div class="sm:col-span-2"><label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900" data-svelte-h="svelte-1mb28vm">Phone number</label> <div class="relative mt-2.5"><div class="absolute inset-y-0 left-0 flex items-center"><label for="country" class="sr-only" data-svelte-h="svelte-1ggp37h">Country</label> <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"><option value="US" data-svelte-h="svelte-11rw6ks">US</option><option value="CA" data-svelte-h="svelte-15nb3dw">CA</option><option value="EU" data-svelte-h="svelte-fk6j5q">EU</option></select> <svg class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></div> <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div></div> <div class="sm:col-span-2" data-svelte-h="svelte-mcy404"><label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label> <div class="mt-2.5"><textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea></div></div> <div class="flex gap-x-4 sm:col-span-2" data-svelte-h="svelte-odkcwc"><div class="flex h-6 items-center"> <button type="button" class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label"><span class="sr-only">Agree to policies</span>  <span aria-hidden="true" class="h-4 w-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span></button></div> <label for="switch-1-label" class="text-sm leading-6 text-gray-600" id="switch-1-label">By selecting this, you agree to our
            <a href="privacypolicy" class="font-semibold text-indigo-600">privacy policy</a>.</label></div></div> <div class="mt-10" data-svelte-h="svelte-12wtwt8"><button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let&#39;s talk</button></div></form></div></div>`;
});
const ImageTiles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-svelte-h="svelte-o3o2oh"><div class="relative overflow-hidden bg-white"><div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40"><div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"><div class="sm:max-w-lg"><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1> <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn&#39;t care if you live or die.</p></div> <div><div class="mt-10"> <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"><div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"><div class="flex items-center space-x-6 lg:space-x-8"><div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"><div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="h-full w-full object-cover object-center"></div> <div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="h-full w-full object-cover object-center"></div></div> <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"><div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="h-full w-full object-cover object-center"></div> <div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="h-full w-full object-cover object-center"></div> <div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="h-full w-full object-cover object-center"></div></div> <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"><div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="h-full w-full object-cover object-center"></div> <div class="h-64 w-44 overflow-hidden rounded-lg"><img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="h-full w-full object-cover object-center"></div></div></div></div></div> <a href="#form" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a></div></div></div></div></div></div>`;
});
const SubHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-svelte-h="svelte-yow2ma"><div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"> <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true"><div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div> <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true"><div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div> <div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl lg:mx-0"><h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2> <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.</p></div> <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"><div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"><a href="#">Open roles <span aria-hidden="true">→</span></a> <a href="#">Internship program <span aria-hidden="true">→</span></a> <a href="#">Our values <span aria-hidden="true">→</span></a> <a href="#">Meet our leadership <span aria-hidden="true">→</span></a></div> <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"><div class="flex flex-col-reverse"><dt class="text-base leading-7 text-gray-300">Offices worldwide</dt> <dd class="text-2xl font-bold leading-9 tracking-tight text-white">12</dd> </div><div class="flex flex-col-reverse"><dt class="text-base leading-7 text-gray-300">Full-time colleagues</dt> <dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd> </div><div class="flex flex-col-reverse"><dt class="text-base leading-7 text-gray-300">Hours per week</dt> <dd class="text-2xl font-bold leading-9 tracking-tight text-white">40</dd> </div><div class="flex flex-col-reverse"><dt class="text-base leading-7 text-gray-300">Paid time off</dt> <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd></div></dl></div></div></div></div>`;
});
const SideImageSticky = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-svelte-h="svelte-1w1tcvn"><div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"><div class="absolute inset-0 -z-10 overflow-hidden"><svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true"><defs><pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M100 200V.5M.5 .5H200" fill="none"></path></pattern></defs><svg x="50%" y="-1" class="overflow-visible fill-gray-50"><path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0"></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"></rect></svg></div> <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"><div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"><div class="lg:pr-4"><div class="lg:max-w-lg"><p class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p> <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1> <p class="mt-6 text-xl leading-8 text-gray-700">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas.</p></div></div></div> <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"><img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt=""></div> <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"><div class="lg:pr-4"><div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"><p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.</p> <ul role="list" class="mt-8 space-y-8 text-gray-600"><li class="flex gap-x-3"><svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd"></path></svg> <span><strong class="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                  impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                  ratione.</span></li> <li class="flex gap-x-3"><svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd"></path></svg> <span><strong class="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.</span></li> <li class="flex gap-x-3"><svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"></path><path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd"></path></svg> <span><strong class="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.</span></li></ul> <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.</p> <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2> <p class="mt-6">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.</p></div></div></div></div></div></div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token) fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $scale, $$unsubscribe_scale;
  let scale = spring(1, { stiffness: 1, damping: 0.6 });
  $$unsubscribe_scale = subscribe(scale, (value) => $scale = value);
  $$unsubscribe_scale();
  return `<div class="hero min-h-screen">${validate_component(SplineViewer, "SplineViewer").$$render($$result, {}, {}, {})} ${validate_component(AnimatedHero, "AnimatedHero").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="hero-content flex-col lg:flex-row-reverse"><div class="card max-w-md bg-indigo-50 text-black mt-12" data-svelte-h="svelte-1s0985p"><div class="card-body"><p class="text-xl text-zinc-600">Explore our array of services designed to meet your unique health
            needs, and embark on a journey towards a healthier, happier life.</p> <h3 class="font-bold text-xl pt-12">20 years of Happy Patients</h3></div></div> <div><button class="btn bg-indigo-50 text-gray-400 mb-8" data-svelte-h="svelte-ldhvpo">❊ Learn More</button> <h1 class="text-6xl font-semibold font-sans mb-20" data-svelte-h="svelte-3zjyrs">Fostering Health, Providing Attention to You</h1> <button class="btn btn-wide btn-primary text-lg bg-blue-700 transition transform origin-left ease-linear" style="${"transform: scaleX(" + escape($scale, true) + ");"}">Set a Meeting | →</button></div></div>`;
    }
  })}</div> ${validate_component(ImageTiles, "ImageTiles").$$render($$result, {}, {}, {})} ${validate_component(SubHero, "SubHero").$$render($$result, {}, {}, {})} ${validate_component(SideImageSticky, "SideImageSticky").$$render($$result, {}, {}, {})} ${validate_component(CardWithImage, "CardWithImage").$$render($$result, {}, {}, {})} ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
