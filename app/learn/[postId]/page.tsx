import getFormattedDate from '@/lib/getFormattedDate';
import { getPostsMeta, getPostByName } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import 'highlight.js/styles/nord.css';
import BackToTop from '@/components/Articles/BackToTop';

export const revalidate = 10;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!
    if (!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;
  

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/learn/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h1 className='text-4xl mt-4 mb-0 use-serif'>{meta.title}</h1>
      {meta.subtitle && <p className='mt-0 mb-1 italic text-sm'>{meta.subtitle}</p>}
      <p className='mt-0 text-sm mb-1'>{pubDate}</p>
      <hr className='my-5'/>
      <article>
        <div className='article-left'></div>
        {content}
        </article>
      <section>
        <h3>Related:</h3>
        <div className='flex flex-row gap-4'>
            {tags}
        </div>
      </section>
      <p className='mb-10'>
        <Link href='/learn'>Back to home</Link>
      </p>
        <BackToTop />
    </>
  );
}