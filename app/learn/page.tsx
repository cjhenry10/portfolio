import Posts from "@/components/Articles/Posts"
import Codeblock from "@/components/Codeblock/CodeblockAlt"

export const revalidate = 10

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="my-6 text-5xl text-center dark:text-white use-serif">
        Learn
      </h1>
      <div className="lg:-mx-12 md:mx-auto">
      {/* @ts-expect-error Server component */}
      <Posts />
      </div>
    </div>
  )
}
