<script lang="ts">
	import { allBookReviews } from '$lib/utils/markdownLoader';
	import PageColumn from '$lib/components/PageColumn.svelte';

	const sortedReviews = allBookReviews.toSorted((a, b) => {
		return b.metadata.date.localeCompare(a.metadata.date);
	});
</script>

<PageColumn class="gap-10">
	{#each sortedReviews as review (review.id)}
		{@const ReviewContent = review.component}
		{@const title = review.metadata.title ?? review.id}
		<article class="flex gap-4 pl-4">
			<div
				class="flex h-40 w-7 shrink-0 items-center justify-center rounded-sm border border-line-bold"
			>
				<p
					class="text-xs font-normal text-ink-primary"
					style="writing-mode: vertical-rl; text-orientation: mixed;"
				>
					{title}
				</p>
			</div>
			<div class="min-w-0 grow">
				<div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
					<h2 class="text-sm font-medium text-ink-primary">{title}</h2>
					{#if review.metadata.author}
						<span class="text-xs font-light text-ink-muted">{review.metadata.author}</span>
					{/if}
					<time class="text-xs font-light text-ink-muted">{review.metadata.date}</time>
				</div>
				<div class="prose mt-2 max-w-none text-xs text-ink-primary">
					<ReviewContent />
				</div>
			</div>
		</article>
	{/each}
</PageColumn>
