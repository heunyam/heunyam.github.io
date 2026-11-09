<script lang="ts">
	import { resolve } from '$app/paths';

	const blogURL = resolve('/blog');
	const bookReviewURL = resolve('/book-review');
</script>

<main class="p-10">
	<h1 class="text-3xl font-light">justko.dev</h1>
	<ul class="pt-2 text-base font-extralight">
		<li class="">
			<a href={blogURL} class="hover:border-b hover:border-solid">/blog</a>
		</li>
		<li class="">
			<a href={bookReviewURL} class="hover:border-b hover:border-solid">/book-review</a>
		</li>
	</ul>
</main>
