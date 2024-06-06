import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({request, cookies}) => {
    const { tokenId } = await request.json();
    const expiresIn = 60 * 60 * 24 * 7 * 1000; //5 days
}