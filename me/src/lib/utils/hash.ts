export function isGodfatherHash(hash: string): boolean {
	return hash === '#godfather' || hash === '#Art.Godfather';
}

export function getPageNumberFromHash(hash: string): number | null {
	if (isGodfatherHash(hash)) return 1;
	return null;
}