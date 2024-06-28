<script lang="ts">
  import AnimatedHero from '$lib/components/ui/animations/AnimatedHero.svelte';
  import SplineViewer from '$lib/components/ui/animations/SplineViewer.svelte';
  import CardWithImage from '$lib/components/ui/sections/CardWithImage.svelte';
  import ContactForm from '$lib/components/ui/sections/ContactForm.svelte';
  import Footer from '$lib/components/ui/sections/Footer.svelte';
  import ImageTiles from '$lib/components/ui/sections/ImageTiles.svelte';
  import SubHero from '$lib/components/ui/sections/SubHero.svelte';
  import SideImageSticky from '$lib/components/ui/sections/SideImageSticky.svelte';
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';

  let scale = spring(1, { stiffness: 1, damping: 0.6 });
</script>

<div class="hero min-h-screen">
  <SplineViewer />
  <AnimatedHero>
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card max-w-md bg-indigo-50 text-black mt-12">
        <div class="card-body">
          <p class="text-xl text-zinc-600">
            Explore our array of services designed to meet your unique health
            needs, and embark on a journey towards a healthier, happier life.
          </p>
          <h3 class="font-bold text-xl pt-12">20 years of Happy Patients</h3>
        </div>
      </div>
      <div>
        <button class="btn bg-indigo-50 text-gray-400 mb-8">
          &#x274A; Learn More
        </button>
        <h1 class="text-6xl font-semibold font-sans mb-20">
          Fostering Health, Providing Attention to You
        </h1>
        <button
          class="btn btn-wide btn-primary text-lg bg-blue-700 transition transform origin-left ease-linear"
          on:mouseenter={() => scale.set(1.1)}
          on:mouseleave={() => scale.set(1)}
          style="transform: scaleX({$scale});"
        >
          Set a Meeting &#124; &rarr;</button
        >
      </div>
    </div>
  </AnimatedHero>
</div>

<ImageTiles />

<SubHero />

<SideImageSticky />

<CardWithImage />

<ContactForm />

