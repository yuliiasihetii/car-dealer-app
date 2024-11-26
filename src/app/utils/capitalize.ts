/**
 * Capitalize the first character of a string
 */
export function capitalize(str?: string): string {
  return str ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : "";
}
