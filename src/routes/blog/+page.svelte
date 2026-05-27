<script lang="ts">
	import { resolve } from '$app/paths';
	import SampleMarkdown from '$lib/posts/20260526_블로그_대문.md';

	const baseURL = resolve('/');

	let postTitle = $state('무제'); // It should be replaced from the title inside the Markdown.
	let postTags = ['작은글'];
	let postTime = '2026.05.26';
	let PostContent = $state(SampleMarkdown);
</script>

<div class="flex justify-center-safe">
	<div class="flex w-200 flex-col">
		<div id="post-header" class="mt-10 flex h-15">
			<div class="flex w-25 items-center justify-center">
				<a href={baseURL} class="text-sm font-light text-[#8C8780]">돌아가기</a>
			</div>
			<div class="flex items-center pl-4">
				<h1 class="text-2xl">{postTitle}</h1>
			</div>
		</div>

		<div id="post-body" class="flex border-y-[0.5px] border-[#221F1C]">
			<div class="w-25 border-r-[0.5px] border-r-[#CCC7BD]">
				<div
					class="flex h-9 w-full items-center justify-center border-b-[0.5px] border-b-[#CCC7BD]"
				>
					<time class="text-sm text-[#8C8780]">{postTime}</time>
				</div>
			</div>
			<div class="pb-10">
				<ul
					class="flex h-9 w-175 items-center border-b-[0.5px] border-b-[#CCC7BD] pl-5 text-sm text-[#8C8780]"
				>
					{#each postTags as tag (tag)}
						<li>#{tag}</li>
					{/each}
				</ul>
				<div class="prose w-full max-w-none pt-2 pl-5">
					<PostContent />
				</div>
			</div>
		</div>
	</div>
</div>
