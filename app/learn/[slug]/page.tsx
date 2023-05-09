import {getPostBySlug} from '@/utils/mdx';

async function getPageContent(slug: string) {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
}

export async function generateMetadata({params}: {params: any}) {
  const {meta} = await getPageContent(params.slug);
  // @ts-expect-error
  return { title: meta.title }
}

export default async function Page({params}: {params: any}) {
  const { content } = await getPageContent(params.slug);
  return (
    <div>
      {content}
    </div>
  )
}
