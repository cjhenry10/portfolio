import { getPostsMeta } from "@/lib/posts"
import ArticleList from "./ArticleList"

export default async function Posts() {
    const posts = await getPostsMeta()

    if (!posts) {
        return <p className="mt-10 text-center">Sorry, no articles available.</p>
    }

    return (
        <section className="mt-6 mx-auto">
            <ul className="w-full list-none p-0 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(post => (
                    <ArticleList key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}