import Link from 'next/link';
import { getAllPostsMeta } from '@/utils/mdx';

export default async function Learn() {
  const posts = await getAllPostsMeta();
  const postPreviews = posts.map((post) => (
    <div key={post.slug}>
        <Link href={`/learn/${post.slug}`}>
          {/* @ts-expect-error */}
          <h2>{post.title}</h2>
          </Link>
        </div>
        ))
  return (
    <div>{postPreviews}</div>
  )
    
}
