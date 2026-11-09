type MarkdownMetadata = {
	title?: string;
	date: string;
	author?: string;
	tags?: string[];
};

declare module '*.md' {
	import type { Component } from 'svelte';

	const component: Component;
	export default component;

	export const metadata: MarkdownMetadata;
}
