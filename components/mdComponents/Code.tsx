import findLineNumbers from "@/utils/findLineNumbers";
export default function Code({ children, metaData, ...props}: {props: any, children: any, metaData: any}) {
  let lineNumbersStart, style;
  // @ts-expect-error
  const existingStyle = props.style;
  if (metaData) {
    lineNumbersStart = findLineNumbers(metaData);
  }
  if (lineNumbersStart) {
    style = {counterSet: `line ${Number(lineNumbersStart) - 1}`}
  }
  return (
    <code style={{...style, ...existingStyle}} {...props}>{children}</code>
  )
}
