<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/components/ui/elements/NavBar.svelte';
  import Footer from '$lib/components/ui/sections/Footer.svelte';

</script>

<NavBar />

<div class="min-h-screen flex flex-col">
  <slot class="prose" />
</div>

<Footer />
