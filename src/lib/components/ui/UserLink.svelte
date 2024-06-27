<script lang="ts">
  export let icon = 'default';
  export let url = 'default url';
  export let title = 'default title';
</script>

<a
  href={url}
  class="stack w-full max-w-md text-center bg-primary flex justify-center items-center p-4 rounded-lg not-prose no-underline"
>
  <img src={`${icon}.png`} alt={icon} width="32" height="32" class="w-8" />
  <span class="text-lg text-white font-bold">{title}</span>
</a>
