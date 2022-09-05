import Layout from "../../../components/layout"
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {API_URL} from '../../../config/index'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'
import Image from 'next/image'
import { UploadIcon } from "@heroicons/react/outline"
import Modal from "../../../components/modal"
import ImageUpload from "../../../components/imageupload"
import { parseCookies } from "../../../helpers"



const EditEventPage = ({evt,token}) => {
    const [values, setValues] = useState({
        name:evt.name,
        performers:evt.performers,
        venue:evt.venue,
        address:evt.address,
        date:evt.date,
        time:evt.time,
        description:evt.description,
    })
    const [imagePreview, setImagePreview] = useState
    (evt.image?evt.image.formats.thumbnail.url : null)
    const [showModal, setShowModal] = useState(false)
    const router = useRouter();
    const  handleSubmit = async (e) => {
        e.preventDefault();
        //Validation
        const hasEmptyFields = Object.values(values).some(
            (element) => element === ''
        )
        if(hasEmptyFields){
            toast.error('Please fill in all fields')

        }else{
            const res = await fetch(`${API_URL}/events/${evt.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(values),
              })
            if(!res.ok)
            {
                if (res.status === 403 || res.status === 401) {
                    toast.error('Unauthorized')
                    return
                  }
                toast.error('Something went wrong')
            }else{
                const evt = await res.json()
                router.push(`/events/${evt.slug}`)

            }
            
        }

    }
    const handleInputChange = (e) => {
        const {name,value} = e.target
        setValues({...values,[name]:value})
    }
    const imageUploaded = async (e) => {
        const res = await fetch(`${API_URL}/events/${evt.id}`)
        const data = await res.json()
        setImagePreview(data.image.formats.thumbnail.url)
        setShowModal(false)
    }
    return (
        <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white h-screen">
            <Layout title="Edit Event">
                <div className="md:grid md:place-items-center min-h-[75vh]">
                    <form onSubmit={handleSubmit} className='form  text-white p-6  relative md:w-[75vw]'>
                        <h3 className="text-2xl  font-semibold">Edit Event</h3>
                        <ToastContainer />
                        <Link href='/events'>Go Back</Link>
                        <div className="flex space-x-5 mt-3">
                            <div className="w-1/2">
                                <label className="block " for="name">Event Name</label>
                                <input type="text" name="name" id="name" value={values.name} onChange={handleInputChange} placeholder="Event Name" className="border p-2  w-full text-bgDark rounded" />
                            </div>
                            <div className="w-1/2">
                                <label className="block " for="performers">Performers</label>
                                <input type="text" name="performers" id="performers" value={values.performers} onChange={handleInputChange} placeholder="Performers" className="border p-2 w-full text-bgDark rounded" />
                            </div> 
                        </div>
                        <div className="flex space-x-5 mt-3">
                            <div className="w-1/2">
                                <label className="block " for="venue">Venue</label>
                                <input type="text" name="venue" id="venue" value={values.venue} onChange={handleInputChange} placeholder="Venue" className="border p-2  w-full text-bgDark rounded" />
                            </div>
                            <div className="w-1/2">
                                <label className="block " for="address">Address</label>
                                <input type="text" name="address" id="address" value={values.address} onChange={handleInputChange} placeholder="Address" className="border p-2 w-full text-bgDark rounded" />
                            </div>
                        </div>
                        <div className="flex space-x-5 mt-3">
                            <div className="w-1/2">
                                <label className="block " for="date">Date</label>
                                <input type="date" name="date" id="date" value={moment(values.date).format('yyyy-MM-DD')} onChange={handleInputChange} placeholder="Date" className="border p-2  w-full text-bgDark  rounded" />
                            </div>
                            <div className="w-1/2">
                                <label className="block " for="time">Time</label>
                                <input type="text" name="time" id="time" value={values.time} onChange={handleInputChange} placeholder="Time" className="border p-2 w-full text-bgDark rounded" />
                            </div>
                            
                            
                        </div>
                        <label className="block mt-3" for="description">Description</label>
                        <textArea type="text" name="description" id="description" cols="10" rows="3" value={values.description} onChange={handleInputChange} placeholder="Tell us about your event" className="border p-2  text-bgDark w-full rounded">{values.description}</textArea>
                        <p className="mb-2">Event Image</p>
                        {imagePreview?(
                            <Image src={imagePreview} width={170} height={100} />
                        ):
                        <div>
                        <p>No Image Uploaded</p>
                        </div>}
                        <span onClick={() => setShowModal(true)} className="flex items-center w-32 cursor-pointer border rounded p-2 hover:bg-white hover:text-black mt-3 space-x-1">
                            <UploadIcon className="h-5" />
                            <span>Edit Image</span>
                        </span>
                        
                        
                        <input type="submit" value="Update Event" className="w-full mt-6 bg-primary hover:bg-primaryLight text-white font-semibold p-3"></input>
                        
                    </form>
                    
                    
                </div>
                <Modal title="Upload Image" show={showModal} onClose={() => setShowModal(false)}>
                <ImageUpload evtId={evt.id} imageUploaded={imageUploaded} token={token}/>
                </Modal>
                
            </Layout>
            
                    
            
        </div>
    )
}

export default EditEventPage

export async function getServerSideProps({params:{id},req})
{
    const {token} = parseCookies(req)
    const res = await fetch(`${API_URL}/events/${id}`)
    const evt = await res.json()
    return {
        props:{
            evt,
            token,
        }
    }
}
