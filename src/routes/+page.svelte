<script lang="ts">
  import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="card w-96 bg-indigo-50 text-black">
      <div class="card-body">
        <p>
          Explore our array of services designed to meet your unique health
          needs, and embark on a journey towards a healthier, happier life.
        </p>
        <h3 class="font-bold">20 years of Happy Patients</h3>
      </div>
    </div>

    <div>
      <button class="btn bg-indigo-50 text-gray-400">
        &#x274A; Learn More
      </button>
      <h1 class="text-6xl font-semibold font-sans">
        Fostering Health, Providing Attention to You
      </h1>
      <button class="btn btn-wide btn-primary text-lg bg-blue-700">Set a Meeting &#124; &rarr;</button>
    </div>
  </div>
</div>

<div class="card flex-row space-x-4 justify-center p-10">
  <div class="w-90 bg-base-100">
    <figure>
      <img class="w-40" src="vascular_health.svg" alt="Vascular Health" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Vascular Health</h2>
      <p>Our visual emphasis on heart wellness extends beyond the surface.</p>
    </div>
  </div>

  <div class="w-90 bg-base-100">
    <figure>
      <img class="w-40" src="pulmonary.svg" alt="Pulmonary" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Pulmonology Care</h2>
      <p>We stabilize patients with pulmonary conditions impacting breathing.</p>
    </div>
  </div>

  <div class="w-90 bg-base-100">
    <figure>
      <img class="w-40" src="capsules.svg" alt="Wellness" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Wellness Support</h2>
      <p>Experience care that goes beyond the superficial, with clear and concise text.</p>
    </div>
  </div>

  <div class="w-90 bg-base-100">
    <figure>
      <img class="w-40" src="heart-health-muscle.svg" alt="Health" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">DNA Testing</h2>
      <p>We offer empowering guidance for the longevity of your DNA random.</p>
    </div>
  </div>
</div>
