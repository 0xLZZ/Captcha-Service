// Based on Daniel J. Bernstein's 'times 33' hash algorithm
export default function shortHash(text: string): string {
    let index = text.length;
    let hash = 5381;

    while (index) {
        hash = (hash * 33) ^ text.charCodeAt(--index);
    }

    return (hash >>> 0).toString(16);
}
