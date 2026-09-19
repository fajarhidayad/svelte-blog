<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';
	import PostCard from '$lib/components/PostCard.svelte';
	import type { Post } from '$lib/posts.js';

	interface Props {
		data: { posts: Post[] };
	}

	let { data }: Props = $props();

	let searchQuery = $state('');
	let activeTag = $state<string | null>(null);

	const allTags = $derived(
		[...new Set(data.posts.flatMap((p) => p.tags))].sort()
	);

	const filtered = $derived(
		data.posts.filter((post) => {
			const matchSearch =
				!searchQuery ||
				post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
			const matchTag = !activeTag || post.tags.includes(activeTag);
			return matchSearch && matchTag;
		})
	);

	onMount(() => {
		const header = document.querySelector('[data-blog-header]');
		if (header) {
			const kids = header.querySelectorAll('[data-animate]');
			kids.forEach((el, i) => {
				animate(el, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: i * 0.1 });
			});
		}

		const grid = document.querySelector('[data-post-grid]');
		if (grid) {
			inView(grid, () => {
				const cards = grid.querySelectorAll('[data-card]');
				cards.forEach((card, i) => {
					animate(card, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: i * 0.08 });
				});
			}, { amount: 0.05 });
		}
	});
</script>

<svelte:head>
	<title>Blog — Fajar Hidayad</title>
	<meta name="description" content="Articles on frontend, backend, and AI development." />
</svelte:head>

<main class="mx-auto max-w-4xl px-6 py-16">
	<!-- Header -->
	<div data-blog-header class="mb-12">
		<div data-animate class="opacity-0">
			<h1 class="mb-3 text-4xl font-bold tracking-tight text-[var(--text)]">Blog</h1>
			<p class="text-lg text-[var(--text-muted)]">
				{data.posts.length} articles on frontend, backend, and AI.
			</p>
		</div>

		<!-- Search -->
		<div data-animate class="mt-6 opacity-0">
			<div class="relative">
				<svg
					class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
				</svg>
				<input
					type="search"
					placeholder="Search posts..."
					bind:value={searchQuery}
					class="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] py-2.5 pl-9 pr-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/30"
				/>
			</div>
		</div>

		<!-- Tags filter -->
		{#if allTags.length > 0}
			<div data-animate class="mt-4 flex flex-wrap gap-2 opacity-0">
				<button
					onclick={() => (activeTag = null)}
					class="rounded-full px-3 py-1 text-xs font-medium transition-colors {activeTag === null
						? 'bg-[var(--accent)] text-white'
						: 'border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'}"
				>
					All
				</button>
				{#each allTags as tag}
					<button
						onclick={() => (activeTag = activeTag === tag ? null : tag)}
						class="rounded-full px-3 py-1 text-xs font-medium transition-colors {activeTag === tag
							? 'bg-[var(--accent)] text-white'
							: 'border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]'}"
					>
						{tag}
					</button>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Posts Grid -->
	{#if filtered.length > 0}
		<div data-post-grid class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as post}
				<div data-card class="opacity-0">
					<PostCard {...post} />
				</div>
			{/each}
		</div>
	{:else}
		<div class="py-16 text-center">
			<p class="text-[var(--text-muted)]">No posts found matching your search.</p>
		</div>
	{/if}
</main>
