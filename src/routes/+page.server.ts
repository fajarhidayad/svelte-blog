import { getLatestPosts } from '$lib/posts.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const latestPosts = getLatestPosts(3);
	return { latestPosts };
};
