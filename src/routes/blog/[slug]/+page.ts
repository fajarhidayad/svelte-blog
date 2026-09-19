import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

// Vite requires statically analyzable glob patterns — dynamic import() with full
// variable paths cannot be bundled. Use import.meta.glob with lazy loading instead.
const posts = import.meta.glob('/src/posts/*.md');

export const load: PageLoad = async ({ params }) => {
	const postPath = `/src/posts/${params.slug}.md`;
	const postImport = posts[postPath];

	if (!postImport) {
		error(404, `Post "${params.slug}" not found`);
	}

	const post = (await postImport()) as {
		default: ConstructorOfATypedSvelteComponent;
		metadata: {
			title: string;
			date: string;
			tags: string[];
			excerpt: string;
		};
	};

	return {
		content: post.default,
		meta: post.metadata
	};
};
