<script lang="ts">
    import type { PageData } from './$types';
    import UserLink from '$lib/components/UserLink.svelte';
    import { page } from '$app/stores';
    import { db, user, userData } from '$lib/firebase';
    import { writable } from 'svelte/store';
    import { doc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

    
    export let data: PageData;

    const icons = [
      "Twitter",
      "YouTube",
      "TikTok",
      "LinkedIn",
      "GitHub",
      "Custom",
    ];

    const formDefaults = {
        icon: "custom",
        title: "",
        url: "https://",
    };

    const formData = writable(formDefaults);

    $: urlIsValid = $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
    $: titleIsValid = $formData.title.length < 20 && $formData.title.length > 0;
    $: formIsValid = urlIsValid && titleIsValid;

    let showForm = false;

    async function addLink(e: SubmitEvent) {
        const userRef = doc(db, "users", $user!.uid);

        await updateDoc(userRef, {
            links: arrayUnion({
                ...$formData,
                id: Date.now().toString(),
            }),
        });

        formData.set({
            icon: "",
            title: "",
            url: "",
        });
        
        showForm = false;
    }
</script>

<form>
    <select
        name="icon"
        class=""
        bind:value={$formData.icon}
    >
        {#each icons as icon}
            <option value={icon.toLowerCase()}>{icon}</option>
        {/each}        
    </select>
    <select></select>
    <select></select>
</form>