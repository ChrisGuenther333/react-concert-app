import Link from "next/link"

export default function PastEventsBtn() {
    return (
        <Link href='/'><button className="mx-20 p-3 hover:bg-gray-500">Past Events</button></Link>
    )
}