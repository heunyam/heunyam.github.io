<script lang="ts">
	import { allNotes } from '$lib/utils/markdownLoader';

	const noteReversed = allNotes.toReversed();
</script>

<main class="p-12">
	<h1 class="pb-4 text-2xl font-medium">Release Notes</h1>
	<div class="flex flex-col gap-4 text-sm">
		{#each noteReversed as note (note.id)}
			{@const Note = note.component}
			<div class="flex max-w-170 gap-4 border-b-[0.5px]">
				<time class="text-xs">{note.metadata.date}</time>
				<article class="prose max-w-none text-[90%]">
					<Note />
				</article>
			</div>
		{/each}
	</div>
</main>
