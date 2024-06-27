<script lang="ts">
    import UserLink from '$lib/components/ui/UserLink.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    // How does this component access the username, photoURL, bio, and links properties and assign it to data: PageData?
    // The +page.ts file uses the [username] slug parameter and queries the database for the matching username.
    // It then assigns the data variable to correspond to the data returned from the database query.
    // The data variable is then accessed dynamically in this +page.svelte file.
    // Sveltekit +page files are scoped to the directory they belong to.
    // In this case, it is the +page.ts and +page.svelte files in the root of the [username] directory.
</script>

<svelte:head>
    <title>@{data.username} Links</title>
    <meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center mx-auto mt-8">
    <h1 class="text-7xl text-purple-500">
        @{data.username}
    </h1>
    <img
        src={data.photoURL ?? '/user.png'}
        alt="photoURL"
        width="256"
        height="256"
        class="mx-auto"
    />
    <p class="text-xl my-8">{data.bio ?? 'no bio yet...'}</p>
    <ul class="list-none my-6 flex flex-col justify-between">
        {#each data.links as item}
            <li>
                <UserLink {...item} />
            </li>
        {/each}
    </ul>
</main>
