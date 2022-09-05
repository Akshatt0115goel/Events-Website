
import Layout from '../../components/layout'
import {API_URL} from '../../config/index'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowSmRightIcon, PencilIcon, XCircleIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router'


const EventPage = ({evt}) => {
    const router = useRouter();
    return (
        <div>
            <Layout title={evt.name} >
            <div className="grid place-items-center">
                <div className="p-10 space-y-5 lg:w-[75vw] grid">
                    {/* <div className="place-self-end flex space-x-5">
                        <button onClick={handleEdit} className="flex items-center space-x-1 text-primaryLight focus:outline-none">
                            <span className="uppercase">Edit</span>
                            <PencilIcon className="h-5 inline-block p-[0.6px]" />
                        </button>
                        <button onClick={handleDelete} className="flex items-center space-x-1 text-red-600 focus:outline-none">
                            <span className="uppercase">Delete</span>
                            <XCircleIcon className="h-5 inline-block" />
                        </button>
                        <ToastContainer />
                         
                    </div> */}
                    <div>{`${new Date(evt.date).toLocaleDateString('en-US')} at ${evt.time}`}</div>
                    <h1 className="text-xl font-bold">{evt.name}</h1>
                    <div><Image src={evt.image ? evt.image.formats.medium.url : '/images/event-default.png'} alt='Event Image' width={900} height={600} /></div>
                    <h1 className="text-xl font-bold">Performers:</h1>
                    <div>{evt.performers}</div>
                    <h1 className="text-xl font-bold">Description:</h1>
                    <div>{evt.description}</div>
                    <h1 className="text-xl font-bold">{`Venue: ${evt.venue}`}</h1>
                    <div>{evt.address}</div>
                    <div className='border-b border-transparent hover:border-primary w-20'>
                        <Link href='/'>
                            <a>
                                Go back
                            </a> 
                        </Link>
                        <ArrowSmRightIcon className="h-5 inline-block" />
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    )
}

export default EventPage

export async function getServerSideProps({query:{slug}}){
    const res = await fetch(`${API_URL}/events?slug=${slug}`)
    const event = await res.json();
    return{
        props:{
            evt:event[0]
        }
    }
}
