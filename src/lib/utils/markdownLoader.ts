import type { Component } from 'svelte';

export type MarkdownModule = {
	default: Component;
	metadata: MarkdownMetadata;
};

export type MarkdownDTO = {
	id: string;
	path: string;
	metadata: MarkdownMetadata;
	component: Component;
};

function loadMarkdownFiles(modules: Record<string, MarkdownModule>): MarkdownDTO[] {
	const markdownModules: MarkdownDTO[] = [];

	for (const [path, module] of Object.entries(modules)) {
		const filename = path.split('/').at(-1);

		if (!filename) {
			throw new Error(`Failed to extract markdown filename from path: ${path}`);
		}

		const id = filename.replace('.md', '');
		markdownModules.push(<MarkdownDTO>{
			id: id,
			path: path,
			metadata: module.metadata,
			component: module.default
		});
	}

	return markdownModules;
}

function loadAllPosts(): MarkdownDTO[] {
	const modules = import.meta.glob<{ default: Component; metadata: MarkdownMetadata }>(
		'$lib/posts/*.md',
		{ eager: true }
	);

	return loadMarkdownFiles(modules);
}

function loadAllNotes(): MarkdownDTO[] {
	const modules = import.meta.glob<{ default: Component; metadata: MarkdownMetadata }>(
		'$lib/release-notes/*.md',
		{ eager: true }
	);

	return loadMarkdownFiles(modules);
}

export const allPosts = loadAllPosts();
export const allNotes = loadAllNotes();
