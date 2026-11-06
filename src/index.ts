export function removeCharacters(text: string, characters: string): string {
  if (typeof text !== 'string' || typeof characters !== 'string')
    throw new TypeError('Expected strings');
  const remove = new Set(Array.from(characters));
  return Array.from(text)
    .filter((char) => !remove.has(char))
    .join('');
}
