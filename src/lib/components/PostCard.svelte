<script lang="ts">
	interface Props {
		title?: string;
		excerpt?: string;
		date?: string;
		tags?: string[];
		slug: string;
	}

	let { title = '', excerpt = '', date = '', tags = [], slug }: Props = $props();

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<a
	href="/blog/{slug}"
	class="group block rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5"
>
	<div class="flex flex-col gap-3">
		<!-- Tags -->
		{#if tags.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each tags.slice(0, 3) as tag}
					<span
						class="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		<!-- Title -->
		<h3
			class="text-lg font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]"
		>
			{title}
		</h3>

		<!-- Excerpt -->
		{#if excerpt}
			<p class="line-clamp-2 text-sm leading-relaxed text-[var(--text-muted)]">{excerpt}</p>
		{/if}

		<!-- Date -->
		{#if date}
			<time class="text-xs text-[var(--text-muted)]" datetime={date}>{formatDate(date)}</time>
		{/if}
	</div>
</a>
