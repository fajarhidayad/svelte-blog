<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte.js';

	const icons = {
		sun: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
		moon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
	};
</script>

<button
	onclick={() => themeStore.toggle()}
	aria-label="Toggle dark mode"
	class="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
>
	{#if themeStore.isDark}
		<span class="block">{@html icons.sun}</span>
	{:else}
		<span class="block">{@html icons.moon}</span>
	{/if}
</button>
