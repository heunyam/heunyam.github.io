<script lang="ts">
	import { resolve } from '$app/paths';
	import SampleMarkdown from '$lib/posts/20260526_블로그_대문.md';

	const baseURL = resolve('/');

    let postTitle = $state("무제"); // It should be replaced from the title inside the Markdown.
    let postTags = ["작은글"];
    let postTime = "2026.05.26";
    let PostContent = $state(SampleMarkdown);
</script>

<div class="flex justify-center-safe">
    <div class="flex flex-col w-200">
        <div id="post-header" class="flex mt-10 h-15">
            <div class="flex w-25 justify-center items-center">
                <a href={baseURL} class="text-sm text-[#8C8780] font-light">돌아가기</a>
            </div>
            <div class="flex items-center pl-4">
                <h1 class="text-2xl">{postTitle}</h1>
            </div>
        </div>

        <div id="post-body" class="flex border-y-[0.5px] border-[#221F1C]">
            <div class="w-25 border-r-[0.5px] border-r-[#CCC7BD]">
                <div class="flex justify-center items-center h-9 w-full border-b-[#CCC7BD] border-b-[0.5px]">
                    <time class="text-[#8C8780] text-sm">{postTime}</time>
                </div>
            </div>
            <div class="pb-10">
                <ul class="flex items-center h-9 w-175 border-b-[#CCC7BD] border-b-[0.5px] text-[#8C8780] pl-5 text-sm">
                    {#each postTags as tag (tag)}
                        <li>#{tag}</li>
                    {/each}
                </ul>
                <div class="pl-5 pt-2 prose max-w-none w-full">
                    <PostContent/>
                </div>
            </div>
        </div>
    </div>
</div>
