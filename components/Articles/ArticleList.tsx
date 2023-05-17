import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ArticleList({ post }: Props) {
    const { id, title, date, subtitle, tags } = post
    let formattedDate = '';
    if (date) {
       formattedDate = getFormattedDate(date)
    }
    const tagList = tags.map((tag, i) => (
      <Link className="underline text-sm" key={i} href={`/learn/tags/${tag}`}>
        {tag}
      </Link>
    ));

    return (
        <li className="flex flex-col justify-end mt-2 py-4 text-2xl dark:text-white/90 article-list-item">
            <Link className="use-serif mb-auto underline hover:text-black/70 dark:hover:text-white two-line-limit" href={`/learn/${id}`}>{title}</Link>
            <p className="text-sm mt-1 mb-auto two-line-limit">{subtitle}</p>
            <p className="text-sm mt-3 mb-0">{formattedDate}</p>
            <div className='flex flex-row gap-4'>
            {tagList}
            </div>
        </li>
    )
}