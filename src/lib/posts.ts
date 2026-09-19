export interface Post {
	slug: string;
	title: string;
	date: string;
	tags: string[];
	excerpt: string;
	published: boolean;
}

export interface PostWithContent extends Post {
	content: string;
}

// Load all markdown posts using Vite's import.meta.glob
const postModules = import.meta.glob('/src/posts/*.md', { eager: true });

export function getAllPosts(): Post[] {
	const posts: Post[] = [];

	for (const path in postModules) {
		const mod = postModules[path] as {
			metadata: Omit<Post, 'slug'>;
		};

		const slug = path.replace('/src/posts/', '').replace('.md', '');
		const { metadata } = mod;

		if (metadata?.published !== false) {
			posts.push({
				slug,
				title: metadata.title ?? 'Untitled',
				date: metadata.date ?? '',
				tags: metadata.tags ?? [],
				excerpt: metadata.excerpt ?? '',
				published: metadata.published ?? true
			});
		}
	}

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestPosts(n = 3): Post[] {
	return getAllPosts().slice(0, n);
}
