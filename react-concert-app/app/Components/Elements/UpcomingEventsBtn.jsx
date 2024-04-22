import { useRouter } from "next/navigation"

export default function UpcomingEventsBtn() {
    const router = useRouter();

    function handleClick(){
        router.push('../Page-Layout/futureEvents.js')
    }
    return (
        <button onClick={handleClick} className="p-3 hover:bg-gray-500">Upcoming Events</button>
    )
}