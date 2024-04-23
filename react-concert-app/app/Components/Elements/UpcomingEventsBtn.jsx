// import { useRouter } from "next/navigation"
import Link from "next/link"

export default function UpcomingEventsBtn() {
    // const router = useRouter();

    function handleClick(){
        // router.push('../Page-Layout/futureEvents.js')
    }
    return (
        <Link href='/upcoming'><button onClick={handleClick} className="p-3 hover:bg-gray-500">Upcoming Events</button></Link>
    )
}