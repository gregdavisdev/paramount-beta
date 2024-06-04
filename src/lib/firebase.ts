// import SDKs from firebase and export them as variables down below.
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { derived, writable, type Readable } from "svelte/store";




const firebaseConfig = {
  apiKey: "AIzaSyB7Uxf85kIYzh-AHAEGqsz2FC-1qTNt3-8",
  authDomain: "paramount-beta.firebaseapp.com",
  projectId: "paramount-beta",
  storageBucket: "paramount-beta.appspot.com",
  messagingSenderId: "79483818876",
  appId: "1:79483818876:web:7d317d54ef346cecfd8af9",
  measurementId: "G-66H5VYMKVG"
};

// export SDKs as variables to simplify import process
// in other files by using the $lib alias
// eg. => import { auth } from '$lib/fireabse'
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();



/**
 * @returns a store with the current firebase user
 */

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

    return { 
      subscribe,
    };
}


export const user = userStore();


/**
 * @param {string} path document path or reference
 * @returns a store with realtime updates on document data
 */

export function docStore<T>(
  path: string,
) {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });
    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}

interface UserData {
  username: string,
  bio: string,
  photoURL: string,
  links: any[];
}

export const userData: Readable<UserData | null> = derived(user, ($user, set) => {
  if ($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null);
  }
});

