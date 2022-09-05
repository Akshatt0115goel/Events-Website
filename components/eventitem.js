import Image from "next/image"
import Link from "next/link"



const EventItem = ({evt}) => {
    return (
        <div className="flex flex-col space-y-4 sm:space-y-0 text-start justify-between items-center sm:flex-row py-4 px-4 mb-6 w-full lg:w-[75vw] border-[1px] border-white rounded-2xl ">
            <div className="flex flex-col sm:flex-row sm:space-x-5">
            <Image src={evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png'} alt='Event Image' width={170} height={100} />
                <div className="space-y-3">
                    <div>{`${new Date(evt.date).toLocaleDateString('en-US')} at ${evt.time}`}</div>
                    <div className="text-lg font-semibold">{evt.name}</div>
                </div>
            </div>
            <Link href={`/events/${evt.slug}`}>
                <button className="transform border border-transparent  px-3 py-1 rounded hover:bg-primary bg-primaryLight text-bgDark hover:text-white uppercase">Details</button>
            </Link>
            
        </div>
    )
}

export default EventItem
