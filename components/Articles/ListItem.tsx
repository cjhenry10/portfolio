import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    let formattedDate = '';
    if (date) {
       formattedDate = getFormattedDate(date)
    }

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/learn/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}