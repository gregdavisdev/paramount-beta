<script lang="ts">
  import { onMount } from "svelte";

  onMount( async () => {
    await import("@splinetool/viewer")
  });
 
</script>

<div class="block">
  <spline-viewer url="https://prod.spline.design/NUSudTOkQ10zdSQw/scene.splinecode" />
</div>

