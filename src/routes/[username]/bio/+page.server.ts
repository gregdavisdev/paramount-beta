import { adminDB } from "$lib/server/admin";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ locals, params }) => {
    
    const uid = locals.userID;

    if (!uid) {
       throw redirect(301, "/login");
    }

    const userDoc = await adminDB.collection("users").doc(uid!).get();
    const { username, bio } = userDoc.data()!;

    if (params.username !== username) {
        throw error(401, "Unauthorized Request");
    }

    return {
        bio,
    };
    
});