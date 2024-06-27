<script lang="ts">
    import UserLink from '$lib/components/ui/UserLink.svelte';
    import SortableList from '$lib/components/ui/animations/SortableList.svelte';
    import { page } from '$app/stores';
    import { db, user, userData } from '$lib/firebase';
    import { writable } from 'svelte/store';
    import {
        doc,
        setDoc,
        updateDoc,
        arrayUnion,
        arrayRemove,
    } from 'firebase/firestore';

    const icons = [
        'Twitter',
        'YouTube',
        'TikTok',
        'LinkedIn',
        'GitHub',
        'Custom',
    ];

    const formDefaults = {
        icon: 'custom',
        title: '',
        url: 'https://',
    };

    const formData = writable(formDefaults);

    $: urlIsValid = $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
    $: titleIsValid = $formData.title.length < 20 && $formData.title.length > 0;
    $: formIsValid = urlIsValid && titleIsValid;

    let showForm = false;

    async function addLink(e: SubmitEvent) {
        const userRef = doc(db, 'users', $user!.uid);

        await updateDoc(userRef, {
            links: arrayUnion({
                ...$formData,
                id: Date.now().toString(),
            }),
        });

        formData.set({
            icon: '',
            title: '',
            url: '',
        });

        showForm = false;
    }

    async function deleteLink(item: any) {
        const userRef = doc(db, 'users', $user!.uid);
        await updateDoc(userRef, {
            links: arrayRemove(item),
        });
    }

    function sortList(e: CustomEvent) {
        const newList = e.detail;
        const userRef = doc(db, 'users', $user!.uid);
        setDoc(userRef, { links: newList }, { merge: true });
    }

    function cancelLink() {
        formData.set(formDefaults);
        showForm = false;
    }
</script>

<main class="max-w-xl mx-auto">
    {#if $userData?.username == $page.params.username}
        <h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center">
            Edit your profile
        </h1>

        <SortableList list={$userData?.links} on:sort={sortList} let:item>
            <div class="group relative">
                <UserLink {...item} />
                <button
                    on:click={() => deleteLink(item)}
                    class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10"
                    >Delete</button
                >
            </div>
        </SortableList>

        {#if showForm}
            <form
                on:submit|preventDefault={addLink}
                class="bg-base-200 p-6 w-full mx-auto rounded-xl"
            >
                <select
                    name="icon"
                    class="select select-sm"
                    bind:value={$formData.icon}
                >
                    {#each icons as icon}
                        <option value={icon.toLowerCase()}>{icon}</option>
                    {/each}
                </select>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    class="input input-sm"
                    bind:value={$formData.title}
                />
                <input
                    name="url"
                    type="text"
                    placeholder="URL"
                    class="input input-sm"
                    bind:value={$formData.url}
                />
                <div class="my-4">
                    {#if !titleIsValid}
                        <p class="text-error text-xs">Must have valid title</p>
                    {/if}
                    {#if !urlIsValid}
                        <p class="text-error text-xs">Must have valid URL</p>
                    {/if}
                    {#if formIsValid}
                        <p class="text-success text-xs">Looks good</p>
                    {/if}
                </div>

                <button
                    disabled={!formIsValid}
                    type="submit"
                    class="btn btn-sm btn-primary">Add a link</button
                >

                <button
                    type="button"
                    class="btn btn-xs my-4"
                    on:click={cancelLink}>Cancel</button
                >
            </form>
        {:else}
            <button
                on:click={() => (showForm = true)}
                class="btn btn-outline btn-info block mx-auto my-4"
                >Add a link</button
            >
        {/if}
    {/if}
</main>
