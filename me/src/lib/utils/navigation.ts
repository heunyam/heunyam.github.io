export function updateURL(hash: string): void {
	window.history.pushState({}, '', hash);
}

export function clearHash(): void {
	window.history.pushState({}, '', window.location.pathname);
}

export function getCurrentHash(): string {
	return window.location.hash;
}