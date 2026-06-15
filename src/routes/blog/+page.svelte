<script lang="ts">
	import { allPosts } from '$lib/utils/markdownLoader';
	import { resolve } from '$app/paths';

	const sortedPosts = allPosts.toSorted((a, b) => {
		return b.metadata.date.localeCompare(a.metadata.date);
	});
	const currentCount = allPosts.length;
	const blankCount = 20 - currentCount;
</script>

<div class="flex justify-center-safe">
	<div class="flex w-200 flex-col pt-22">
		<div id="post-header-box" class="flex flex-col">
			<div class="flex pb-2 pl-4">
				<div class="w-25"></div>
				<p class="text-xs text-ink-muted">LATEST</p>
			</div>
		</div>

		<div id="post-content-box" class="flex border-y-[0.5px] border-line-bold">
			<aside class="w-25 shrink-0">
				<ul class="border-r-[0.5px] border-line-light text-xs font-normal text-ink-muted">
					{#each sortedPosts as post (post.id)}
						<li class="text-primary border-y-[0.5px] border-line-light py-1.5 pl-4">
							<time>{post.metadata.date}</time>
						</li>
					{/each}
					{#each Array(blankCount)}
						<li class="text-primary border-y-[0.5px] border-line-light py-1.5 pl-4">
							<span class="opacity-0">Blank Text</span>
						</li>
					 {/each}
				</ul>
			</aside>
			<div class="grow">
				<ul class="text-xs font-normal text-ink-primary">
					{#each sortedPosts as post (post.id)}
						<li class="text-primary border-y-[0.5px] border-line-light py-1.5 pl-4">
							<a href={resolve('/blog/[slug]', { slug: post.id })}>{post.metadata.title}</a>
						</li>
					{/each}
					{#each Array(blankCount)}
						<li class="text-primary border-y-[0.5px] border-line-light py-1.5 pl-4">
							<span class="opacity-0">Blank Text</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

