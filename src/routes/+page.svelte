<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';
	import PostCard from '$lib/components/PostCard.svelte';
	import type { Post } from '$lib/posts.js';

	interface Props {
		data: {
			latestPosts: Post[];
		};
	}

	let { data }: Props = $props();

	const skills = [
		{ name: 'TypeScript', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
		{ name: 'React', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400' },
		{ name: 'Next.js', color: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300' },
		{ name: 'SvelteKit', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
		{ name: 'Node.js', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
		{ name: 'NestJS', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
		{ name: 'C#', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
		{ name: '.NET', color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400' },
		{ name: 'PostgreSQL', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' },
		{ name: 'Laravel', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' },
		{ name: 'Go', color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400' },
		{ name: 'OpenAI API', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
		{ name: 'Docker', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
		{ name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400' },
	];

	const projects = [
		{
			title: 'Remix Blog',
			description: 'A personal blog built with Remix, featuring dark mode, markdown posts, and a clean minimalist design.',
			tags: ['Remix', 'TypeScript', 'Tailwind'],
			href: 'https://github.com/fajarhidayad/remix-blog',
			live: 'https://www.suryadev.my.id'
		},
		{
			title: 'Full-Stack SaaS Starter',
			description: 'Production-ready SaaS boilerplate with auth, billing, and a dashboard built on Next.js and NestJS.',
			tags: ['Next.js', 'NestJS', 'PostgreSQL'],
			href: 'https://github.com/fajarhidayad',
			live: null
		},
		{
			title: 'AI Chat App',
			description: 'Real-time AI chat application with streaming responses using OpenAI GPT-4 and SvelteKit.',
			tags: ['SvelteKit', 'OpenAI', 'Node.js'],
			href: 'https://github.com/fajarhidayad',
			live: null
		}
	];

	onMount(() => {
		// Hero section animation
		const heroElements = document.querySelectorAll('[data-hero]');
		heroElements.forEach((el, i) => {
			animate(
				el,
				{ opacity: [0, 1], y: [30, 0] },
				{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
			);
		});

		// Scroll-triggered animations for sections
		const sections = document.querySelectorAll('[data-section]');
		sections.forEach((section) => {
			inView(section, () => {
				const items = section.querySelectorAll('[data-animate]');
				items.forEach((item, i) => {
					animate(
						item,
						{ opacity: [0, 1], y: [24, 0] },
						{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
					);
				});
			}, { amount: 0.1 });
		});
	});
</script>

<svelte:head>
	<title>Fajar Hidayad — Software Engineer</title>
	<meta
		name="description"
		content="Software Engineer with 2+ years of experience in frontend, backend, and AI development."
	/>
</svelte:head>

<main class="mx-auto max-w-4xl px-6 py-16">
	<!-- ─── Hero ──────────────────────────────── -->
	<section class="pb-24 pt-8">
		<div class="flex flex-col-reverse items-start justify-between gap-8 md:flex-row md:items-center">
			<div class="flex-1">
				<p data-hero class="mb-3 font-mono text-sm text-[var(--accent)] opacity-0">
					Hello, world! 👋
				</p>
				<h1
					data-hero
					class="mb-4 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] opacity-0 sm:text-5xl"
				>
					I'm <span class="text-[var(--accent)]">Fajar Hidayad</span>
				</h1>
				<p
					data-hero
					class="mb-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)] opacity-0"
				>
					A passionate <span class="font-medium text-[var(--text)]">Software Engineer</span> with 2+
					years building modern web apps — from pixel-perfect frontends to robust backends and AI-powered
					features.
				</p>
				<div data-hero class="flex flex-wrap gap-3 opacity-0">
					<a
						href="/blog"
						class="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:brightness-110"
					>
						Read my Blog
					</a>
					<a
						href="https://github.com/fajarhidayad"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-all duration-200 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
					>
						View GitHub
					</a>
				</div>
			</div>

			<!-- Avatar -->
			<div data-hero class="shrink-0 opacity-0">
				<div
					class="relative h-32 w-32 overflow-hidden rounded-2xl border-2 border-[var(--border)] md:h-40 md:w-40"
				>
					<img
						src="https://avatars.githubusercontent.com/u/26499004?v=4"
						alt="Fajar Hidayad"
						class="h-full w-full object-cover"
						loading="eager"
						fetchpriority="high"
					/>
					<!-- Online indicator -->
					<span
						class="absolute bottom-2.5 right-2.5 block h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)]"
					></span>
				</div>
			</div>
		</div>

		<!-- Social links -->
		<div data-hero class="mt-8 flex items-center gap-4 opacity-0">
			<span class="text-xs text-[var(--text-muted)]">Find me on</span>
			<div class="flex items-center gap-3">
				{#each [
					{ href: 'https://github.com/fajarhidayad', label: 'GitHub', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>` },
					{ href: 'https://x.com/suryahidayad', label: 'X (Twitter)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` },
					{ href: 'https://linkedin.com/in/fajarhidayad', label: 'LinkedIn', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` }
				] as social}
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.label}
						class="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
					>
						{@html social.icon}
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- ─── About ─────────────────────────────── -->
	<section data-section class="mb-24">
		<div data-animate class="mb-8 opacity-0">
			<h2 class="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
				About
			</h2>
			<h3 class="text-2xl font-bold text-[var(--text)]">Who am I?</h3>
		</div>
		<div
			data-animate
			class="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 opacity-0 md:p-8"
		>
			<div class="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
				<div class="flex-1 space-y-4 text-[var(--text-muted)]">
					<p class="leading-relaxed">
						I'm a <span class="font-medium text-[var(--text)]">Fullstack Software Engineer</span> from
						Indonesia with 2+ years of professional experience. I love crafting digital experiences that
						are both functional and beautiful.
					</p>
					<p class="leading-relaxed">
						My journey started with frontend development — React, Vue, and the whole ecosystem. Over
						time, I expanded into backend engineering (Node.js, NestJS, Laravel, Go) and more recently
						into the world of <span class="font-medium text-[var(--text)]">AI integration</span>, building
						features powered by LLMs.
					</p>
					<p class="leading-relaxed">
						When I'm not coding, I write about tech on this blog and explore new tools and ideas in the
						ever-evolving software landscape.
					</p>
				</div>
				<div class="flex shrink-0 flex-col gap-4 md:w-48">
					<div>
						<p class="text-xs text-[var(--text-muted)]">Location</p>
						<p class="font-medium text-[var(--text)]">Indonesia 🇮🇩</p>
					</div>
					<div>
						<p class="text-xs text-[var(--text-muted)]">Focus</p>
						<p class="font-medium text-[var(--text)]">Fullstack + AI</p>
					</div>
					<div>
						<p class="text-xs text-[var(--text-muted)]">Experience</p>
						<p class="font-medium text-[var(--text)]">2+ Years</p>
					</div>
					<div>
						<p class="text-xs text-[var(--text-muted)]">Status</p>
						<p class="flex items-center gap-1.5 font-medium text-[var(--accent)]">
							<span class="inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]"
							></span>
							Open to work
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ─── Skills ────────────────────────────── -->
	<section data-section class="mb-24">
		<div data-animate class="mb-8 opacity-0">
			<h2 class="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
				Skills
			</h2>
			<h3 class="text-2xl font-bold text-[var(--text)]">Tech I work with</h3>
		</div>
		<div class="flex flex-wrap gap-2.5">
			{#each skills as skill, i}
				<span
					data-animate
					class="rounded-full px-3.5 py-1.5 text-sm font-medium opacity-0 {skill.color}"
					style="animation-delay: {i * 50}ms"
				>
					{skill.name}
				</span>
			{/each}
		</div>
	</section>

	<!-- ─── Projects ──────────────────────────── -->
	<section data-section class="mb-24">
		<div data-animate class="mb-8 opacity-0">
			<h2 class="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
				Projects
			</h2>
			<h3 class="text-2xl font-bold text-[var(--text)]">Things I've built</h3>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div
					data-animate
					class="group relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 opacity-0 transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5"
				>
					<h4
						class="mb-2 font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]"
					>
						{project.title}
					</h4>
					<p class="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
						{project.description}
					</p>
					<div class="mb-4 flex flex-wrap gap-1.5">
						{#each project.tags as tag}
							<span
								class="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]"
							>
								{tag}
							</span>
						{/each}
					</div>
					<div class="flex items-center gap-3 text-sm">
						<a
							href={project.href}
							target="_blank"
							rel="noopener noreferrer"
							class="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
						>
							GitHub →
						</a>
						{#if project.live}
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								class="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
							>
								Live →
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- ─── Blog ──────────────────────────────── -->
	<section data-section class="mb-12">
		<div data-animate class="mb-8 flex items-end justify-between opacity-0">
			<div>
				<h2 class="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
					Blog
				</h2>
				<h3 class="text-2xl font-bold text-[var(--text)]">Recent posts</h3>
			</div>
			<a
				href="/blog"
				class="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
			>
				View all →
			</a>
		</div>
		{#if data.latestPosts.length > 0}
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each data.latestPosts as post}
					<div data-animate class="opacity-0">
						<PostCard {...post} />
					</div>
				{/each}
			</div>
		{:else}
			<p class="text-[var(--text-muted)]">No posts yet. Coming soon!</p>
		{/if}
	</section>
</main>
