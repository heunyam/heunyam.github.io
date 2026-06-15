<script lang="ts">
	import { resolve } from '$app/paths';
	import { allPosts } from '$lib/utils/markdownLoader';
	import type { PageProps } from './$types';

	const blogMainURI = resolve('/blog');

	let { params }: PageProps = $props();
	let slug = $derived(params.slug);

	let post = $derived(
		allPosts.findLast((v) => {
			return v.id == slug;
		})
	);

	let postTitle = $derived(post?.metadata.title);
	let postTags = $derived(post?.metadata.tags);
	let postTime = $derived(post?.metadata.date);
	let PostContent = $derived(post?.component);
</script>

<div class="flex justify-center-safe">
	<div class="flex w-200 flex-col pt-22">
		<div class="flex pb-2 pl-4">
			<div class="w-25"></div>
			<div class="flex shrink-0 items-center justify-center">
				<a href={blogMainURI} class="text-xs text-ink-muted">돌아가기</a>
			</div>
		</div>

		<div id="post-body" class="flex border-y-[0.5px] border-line-bold">
			<aside class="w-25 shrink-0">
				<div class="border-r-[0.5px] border-line-light text-xs font-normal text-ink-muted">
					<div class="text-primary border-y-[0.5px] border-line-light py-1.5 pl-4">
						<time>{postTime}</time>
					</div>
				</div>
			</aside>
			<div class="max-w-175 grow">
				<div class="iterms-center flex gap-1.5 border-b-[0.5px] border-b-line-light py-1.5 pl-4">
					<h1 class="text-xs text-ink-primary">{postTitle}</h1>
					<ul class="flex items-center gap-1.5 text-xs font-light">
						{#each postTags as tag (tag)}
							<li class="">#{tag}</li>
						{/each}
					</ul>
				</div>
				<div class="prose max-w-none px-5 py-6 font-[Ridibatang] text-[75%]">
					<PostContent />
				</div>
			</div>
		</div>
	</div>
</div>
