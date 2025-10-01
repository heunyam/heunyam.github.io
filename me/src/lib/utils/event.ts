export function getHrefFromEvent(e: Event): string | null {
	const target = e.currentTarget as HTMLAnchorElement;
	return target.getAttribute('href');
}