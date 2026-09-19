---
title: 'Getting Started with SvelteKit 5 and Runes'
date: '2024-11-15'
tags: ['SvelteKit', 'Svelte', 'Frontend']
excerpt: 'Svelte 5 introduces runes — a completely new reactivity system. In this post, we explore how runes change the way we write Svelte components and why they are a game-changer.'
published: true
---

Svelte 5 is here, and with it comes **runes** — a fundamental shift in how reactivity works in Svelte. If you've been using Svelte 4, you're used to `$:` reactive declarations and the `writable` store. Runes replace all of that with a cleaner, more explicit API.

## What are Runes?

Runes are special syntax in Svelte 5 that tell the compiler how to handle reactivity. Unlike Svelte 4's magic, runes are explicit:

```svelte
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);

  function increment() {
    count++;
  }
</script>

<button onclick={increment}>
  Count: {count}, Doubled: {doubled}
</button>
```

## Key Runes

- `$state` — reactive state, replaces `let`
- `$derived` — computed values, replaces `$:` declarations
- `$effect` — side effects, replaces `$: { ... }` blocks
- `$props` — component props, replaces `export let`

## Why Runes?

Svelte 4's implicit reactivity was magical, but it created issues:
- Confusion between reactive and non-reactive variables
- Hard to reuse logic (no composable stores equivalent)
- TypeScript struggled with the magic

Runes solve all of this. Your IDE understands them, TypeScript works correctly, and you can extract logic into plain `.svelte.ts` files.

## Conclusion

Svelte 5 with runes is a huge improvement for large-scale applications. The learning curve is minimal if you already know Svelte, and the benefits are immediate.
