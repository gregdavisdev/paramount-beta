<script lang="ts">
  import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<div class="hero min-h-screen bg-white">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="card max-w-sm bg-indigo-50 text-black">
      <div class="card-body">
        <p>
          Explore our array of services designed to meet your unique health
          needs, and embark on a journey towards a healthier, happier life.
        </p>
        <h3 class="font-bold pt-4">20 years of Happy Patients</h3>
      </div>
    </div>

    <div>
      <button class="btn bg-indigo-50 text-gray-400 mb-8">
        &#x274A; Learn More
      </button>
      <h1 class="text-6xl font-semibold font-sans mb-20">
        Fostering Health, Providing Attention to You
      </h1>
      <button class="btn btn-wide btn-primary text-lg bg-blue-700">Set a Meeting &#124; &rarr;</button>
    </div>
  </div>
</div>

<div class="card flex-row space-x-4 justify-center p-10">
  <div class="w-90 bg-base-100">
    <figure>
      <img class="w-32" src="vascular_health.svg" alt="Vascular Health" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Vascular Health</h2>
      <p class="text-gray-500">Our visual emphasis on heart wellness extends beyond the surface.</p>
    </div>
  </div>

  <div class="w-90 bg-base-100">
    <figure>
      <img class="w-32" src="pulmonary.svg" alt="Pulmonary" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Pulmonology Care</h2>
      <p class="text-gray-500">We stabilize patients with pulmonary conditions impacting breathing.</p>
    </div>
  </div>

  <div class="w-90 bg-base-100">
    <figure>
      <img class="w-32" src="capsules.svg" alt="Wellness" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Wellness Support</h2>
      <p class="text-gray-500">Experience care that goes beyond the superficial, with clear and concise text.</p>
    </div>
  </div>

  <div class="w-90 bg-base-100">
    <figure>
      <img class="w-32" src="heart-health-muscle.svg" alt="Health" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">DNA Testing</h2>
      <p class="text-gray-500">We offer empowering guidance for the longevity of your DNA random.</p>
    </div>
  </div>
</div>

<div class="text-center pb-12">
  <h2 class="text-4xl p-6">We Care About Your Journey</h2>
  <p class="text-gray-500 text-xl">Each team member contributes a unique set of skills and passion,</p>
  <p class="text-gray-500 text-xl">united by a shared commitment to delivering exceptional healthcare</p>
  <p class="text-gray-500 text-xl">experiences.</p>
</div> 

<div class="flex justify-center pb-24">
  <div class="shadow-xl max-w-2xl">
    <figure><img class="rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg" src="smiling-young-male-professional.jpg" alt="Young Male Professional"/></figure>
  </div>
</div>

<div class="card lg:card-side pb-20 bg-blue-50 card-bordered border-blue-300 m-14">
  <figure class="max-w-3xl pt-16 pl-4 m-10"><img class="rounded-lg" src="brain-image.jpg" alt="Album"/></figure>
  <div class="card-body pt-24">
    <h2 class="card-title text-4xl">Streamline, Priorizite, and Elavate Your Health</h2>
    <p class="text-2xl text-gray-500 pt-4">Efficient solutions tailored for your well-being at Paramount Neuro, where the art of optimization meets your health.</p>
    <div class="flex flex-col max-w-4xl">
      <div class="grid h-20 card bg-white rounded-box place-items-center text-xl">Virtual Health Hub</div> 
      <div class="divide-transparent p-4"></div> 
      <div class="grid h-20 card bg-white rounded-box place-items-center text-xl">Wellness Checkpoint Program</div>
      <div class="divide-transparent p-4"></div> 
      <div class="grid h-20 card bg-white rounded-box place-items-center text-xl">Telehealth Concierge</div>
    </div>
  </div>
</div>




<footer class="footer p-10 bg-blue-700 text-base-300 text-lg rounded-md">
  <aside>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>Paramount Neuro<br>Providing reliable techs since 1992</p>
    <button class="btn bg-white">
      Schedule a Call
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    </button>
  </aside> 
  <nav>
    <h6 class="footer-title">Services</h6> 
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 class="footer-title">Company</h6> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 class="footer-title">Legal</h6> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </nav>
</footer>