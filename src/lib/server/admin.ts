import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from "$env/static/private";
import pkg from "firebase-admin";

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      privateKey: FB_PRIVATE_KEY,
      clientEmail: FB_CLIENT_EMAIL
    }),
  })
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error('Firebase Admin Error: ', err.stack)
  }
}

export const adminAuth = getAuth();
export const adminDB = getFirestore();