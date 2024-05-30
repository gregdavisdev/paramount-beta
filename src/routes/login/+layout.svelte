<script lang="ts">
    import { page } from "$app/stores";
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";

</script>

<nav class="flex justify-center my-6">
    <ul class="steps">
        <a  href="/login" class="step step-primary">Login</a>
        <a 
            href="/login/username"
            class="step"
            class:step-primary={$page.route.id?.match(/username|photo/g)}>
            Username
        </a>
        <a 
            href="/login/photo"
            class="step"
            class:step-primary={$page.route.id?.match(/photo/g)}>
            Photo
        </a>
    </ul>
</nav>

<AnimatedRoute>
    <main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
        <div class="card-body items-center text-center">
            <slot></slot>
        </div>
    </main>
</AnimatedRoute>