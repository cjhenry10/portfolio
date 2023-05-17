const regex = /title="([^"]*)"/
export default function findTitle(str: string) {
  if (str !== undefined) {
    const match = str.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return undefined;
    }
  }
}