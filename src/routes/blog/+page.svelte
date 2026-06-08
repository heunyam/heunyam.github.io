<script lang="ts">
	import { allPosts } from '$lib/utils/markdownLoader';
	import { resolve } from '$app/paths';
</script>

<div class="flex justify-center-safe md:mr-25">
	<div class="flex w-200 flex-col pt-22">
		<div id="post-header-box" class="flex flex-col">
			<div class="flex pb-2 pl-4">
				<div class="w-25"></div>
				<p class="text-xs tracking-widest text-ink-muted">LATEST</p>
			</div>
		</div>

		<div id="post-content-box" class="flex border-y-[0.5px] border-line-bold">
			<aside class="w-25 shrink-0">
				<ul class="border-r-[0.5px] border-line-light text-xs font-normal text-ink-muted">
					{#each allPosts as post (post.id)}
						<li class="text-primary border-y-[0.5px] border-line-light py-1.5 pl-4">
							<time>{post.metadata.date}</time>
						</li>
					{/each}
					<!-- 실제 글 없어도 빈 줄칸으로 꽉채우기 -->
				</ul>
			</aside>
			<div class="grow">
				<ul class="text-xs font-normal text-ink-primary">
					{#each allPosts as post (post.id)}
						<li class="text-primary border-y-[0.5px] border-line-light py-1.5 pl-4">
							<a href={resolve('/blog/[slug]', { slug: post.id ? post.id : 'head' })}
								>{post.metadata.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
