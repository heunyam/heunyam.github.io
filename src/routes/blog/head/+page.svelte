<script lang="ts">
	import { resolve } from '$app/paths';
	import SampleMarkdown from '$lib/posts/20260601_글.md';

	const baseURL = resolve('/');

	let postTitle = $state('글쓰기를 마주하면서'); // It should be replaced from the title inside the Markdown.
	let postTags = ['작은글', '긴글', '적당한글'];
	let postTime = '2026.06.01';
	let PostContent = $state(SampleMarkdown);
</script>

<div class="mr-25 flex justify-center-safe">
	<div class="flex w-200 flex-col pt-20">
		<div id="post-header" class="mb-2 flex">
			<div class="flex w-25 shrink-0 items-center justify-center">
				<a href={baseURL} class="text-xs font-light text-ink-muted">돌아가기</a>
			</div>
			<div class="flex items-end pl-4">
				<h1 class="text-base">{postTitle}</h1>
			</div>
		</div>

		<div id="post-body" class="flex border-y-[0.5px] border-line-bold">
			<div class="w-25 border-r border-r-line-light">
				<div class="flex items-center justify-center border-b-[0.5px] border-b-line-light py-1.5">
					<time class="text-xs text-ink-muted">{postTime}</time>
				</div>
			</div>
			<div class="max-w-175 grow">
				<ul
					class="flex items-center gap-1.5 border-b-[0.5px] border-b-line-light py-1.5 pl-5 text-xs font-light text-ink-primary"
				>
					{#each postTags as tag (tag)}
						<li class="">#{tag}</li>
					{/each}
				</ul>
				<div class="prose max-w-none py-6 px-5 text-[75%] font-[Ridibatang]">
					<PostContent />
				</div>
			</div>
		</div>
	</div>
</div>
