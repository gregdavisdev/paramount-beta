<script lang="ts">
  import { auth, user, userData } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user)
  }
</script>

{#if $userData?.username}
  <h2 class="card-title">Welcome, @{$userData.username}</h2>
  <p class="text-center text-success">You are logged in.</p>
  <button class="btn btn-warning" on:click={() => signOut(auth)}>Sign out</button>
  {:else}
  <h2>Login</h2>
  <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}