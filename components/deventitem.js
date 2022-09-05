import Image from "next/image"
import Link from "next/link"
import { PencilIcon, XCircleIcon } from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import {API_URL} from '../config/index'
import 'react-toastify/dist/ReactToastify.css';
import {parseCookies} from '../helpers/index'


const DEventItem = ({evt,token}) => {
    const router = useRouter();
    const handleEdit = () => {
        
        router.push(`/events/edit/${evt.id}`)
    }
    const deleteEvent = async () => {
        if (confirm('Are you sure?')) {
          const res = await fetch(`${API_URL}/events/${evt.id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    
          const data = await res.json()
    
          if (!res.ok) {
            toast.error(data.message)
          } else {
            router.reload()
          }
        }
      }
    return (
        <div className="flex flex-col space-y-4 sm:space-y-0 text-start justify-between items-center sm:flex-row py-4 px-4 mb-6 w-full md:space-x-2 lg:space-x-0 lg:min-w-[75vw] border-[1px] border-white rounded-2xl ">
            <div className="flex flex-col sm:flex-row sm:space-x-5">
                <Image src={evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png'} alt='Event Image' width={170} height={100} />
                <div className="space-y-3">
                    <div>{`${new Date(evt.date).toLocaleDateString('en-US')} at ${evt.time}`}</div>
                    <div className="text-lg lg:text-2xl font-semibold">{evt.name}</div>
                </div>
            </div>
            <div className="flex space-x-5">
                <Link href={`/events/${evt.slug}`}>
                    <button className="transform border border-transparent  px-3 py-1 rounded hover:bg-primary bg-primaryLight text-bgDark hover:text-white uppercase">Details</button>
                </Link>
                <button onClick={handleEdit} className="flex items-center space-x-1 text-primaryLight focus:outline-none">
                    <span className="uppercase">Edit</span>
                    <PencilIcon className="h-5 inline-block p-[0.6px]" />
                </button>
                <button onClick={deleteEvent} className="flex items-center space-x-1 text-red-600 focus:outline-none">
                    <span className="uppercase">Delete</span>
                    <XCircleIcon className="h-5 inline-block" />
                </button>
                <ToastContainer />

            </div>
            
            
            
        </div>
    )
}

export default DEventItem

// export async function getServerSideProps({req})
// {
//     const { token } = parseCookies(req)
//     return { 
//         props:{
//             token,
//         },
//     }
// }
