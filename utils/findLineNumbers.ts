const regex = /showLineNumbers\{(\d+)\}/g;
const numRegex = /(?<={)(\d+)(?=})/g;
export default function findLineNumbers(str: string) {
  if (str !== undefined) {
    const match = str.match(regex);
    if (match) {
      const numMatch = match![0].match(numRegex);
      if (numMatch) {
        return numMatch[0];
      } else {
        return undefined;
      }
    }
  }
  return undefined;
}
