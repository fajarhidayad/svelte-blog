<script lang="ts">
	import { onMount } from 'svelte';
	import { animate } from 'motion';

	interface Props {
		data: {
			content: ConstructorOfATypedSvelteComponent;
			meta: {
				title: string;
				date: string;
				tags: string[];
				excerpt: string;
			};
		};
	}

	let { data }: Props = $props();

	const Content = $derived(data.content);

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// Estimate reading time (avg 200 words/min)
	function getReadingTime(text: string) {
		const words = text.split(/\s+/).length;
		return Math.ceil(words / 200);
	}

	onMount(() => {
		const header = document.querySelector('[data-post-header]');
		if (header) {
			animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
		}
		const content = document.querySelector('[data-post-content]');
		if (content) {
			animate(content, { opacity: [0, 1] }, { duration: 0.8, delay: 0.3 });
		}
	});
</script>

<svelte:head>
	<title>{data.meta.title} — Fajar Hidayad</title>
	<meta name="description" content={data.meta.excerpt} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.excerpt} />
</svelte:head>

<main class="mx-auto max-w-3xl px-6 py-16">
	<!-- Back -->
	<a
		href="/blog"
		class="mb-10 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
		>
		Back to Blog
	</a>

	<!-- Header -->
	<header data-post-header class="mb-12 opacity-0">
		<!-- Tags -->
		<div class="mb-4 flex flex-wrap gap-2">
			{#each data.meta.tags as tag}
				<span
					class="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]"
				>
					{tag}
				</span>
			{/each}
		</div>

		<h1
			class="mb-4 text-3xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-4xl"
		>
			{data.meta.title}
		</h1>

		<p class="mb-6 text-lg leading-relaxed text-[var(--text-muted)]">{data.meta.excerpt}</p>

		<div class="flex items-center gap-4 text-sm text-[var(--text-muted)]">
			<div class="flex items-center gap-2">
				<img
					src="https://avatars.githubusercontent.com/u/26499004?v=4"
					alt="Fajar Hidayad"
					class="h-7 w-7 rounded-full"
				/>
				<span class="font-medium text-[var(--text)]">Fajar Hidayad</span>
			</div>
			<span>·</span>
			<time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
			<span>·</span>
			<span>{getReadingTime(data.meta.excerpt + data.meta.title)} min read</span>
		</div>

		<div class="mt-8 border-t border-[var(--border)]"></div>
	</header>

	<!-- Content -->
	<article
		data-post-content
		class="prose prose-zinc max-w-none opacity-0
			dark:prose-invert
			prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[var(--text)]
			prose-p:text-[var(--text-muted)] prose-p:leading-relaxed
			prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline
			prose-code:rounded prose-code:bg-[var(--bg-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[var(--accent)] prose-code:before:content-none prose-code:after:content-none
			prose-pre:border prose-pre:border-[var(--border)] prose-pre:bg-[var(--bg-surface)]
			prose-blockquote:border-l-[var(--accent)] prose-blockquote:text-[var(--text-muted)]
			prose-strong:text-[var(--text)]
			prose-hr:border-[var(--border)]"
	>
		<Content />
	</article>

	<!-- Footer nav -->
	<div class="mt-16 border-t border-[var(--border)] pt-8">
		<a
			href="/blog"
			class="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
			>
			All posts
		</a>
	</div>
</main>
