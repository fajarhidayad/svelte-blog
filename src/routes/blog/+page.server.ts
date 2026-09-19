import { getAllPosts } from '$lib/posts.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const posts = getAllPosts();
	return { posts };
};
