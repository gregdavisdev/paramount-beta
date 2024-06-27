<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let animate = false;

  onMount(() => {
    animate = true;
  });
</script>

{#if animate}
  <div in:fly={{ x: '-100%', duration: 500 }}>
    <slot />
  </div>
{/if}
