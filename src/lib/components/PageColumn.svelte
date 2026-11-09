<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = ''
	}: {
		children: Snippet;
		class?: string;
	} = $props();
</script>

<div class="flex justify-center-safe">
	<div class={['flex w-160 flex-col pt-22', className]}>
		{@render children()}
	</div>
</div>
