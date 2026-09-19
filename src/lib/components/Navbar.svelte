<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { page } from '$app/stores';

	let mobileOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' }
	];

	function isActive(href: string) {
		if (href === '/') return $page.url.pathname === '/';
		return $page.url.pathname.startsWith(href);
	}
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md"
>
	<div class="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a
			href="/"
			class="text-lg font-semibold tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent)]"
		>
			fajarhidayad<span class="text-[var(--accent)]">.</span>
		</a>

		<!-- Desktop Nav -->
		<nav class="hidden items-center gap-6 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors duration-200 {isActive(link.href)
						? 'text-[var(--accent)]'
						: 'text-[var(--text-muted)] hover:text-[var(--text)]'}"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<ThemeToggle />
			<!-- Mobile menu button -->
			<button
				class="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] md:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg
					>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line
							x1="4"
							y1="18"
							x2="20"
							y2="18"
						/></svg
					>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Nav -->
	{#if mobileOpen}
		<div class="border-t border-[var(--border)] px-6 py-4 md:hidden">
			<nav class="flex flex-col gap-3">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={() => (mobileOpen = false)}
						class="text-sm font-medium transition-colors {isActive(link.href)
							? 'text-[var(--accent)]'
							: 'text-[var(--text-muted)] hover:text-[var(--text)]'}"
					>
						{link.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
