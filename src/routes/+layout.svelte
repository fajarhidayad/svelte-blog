<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { themeStore } from '$lib/stores/theme.svelte.js';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		themeStore.init();
	});
</script>

<svelte:head>
	<link rel="icon" href="https://avatars.githubusercontent.com/u/26499004?v=4" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]">
	<Navbar />
	<div class="flex-1">
		{@render children()}
	</div>
	<Footer />
</div>
