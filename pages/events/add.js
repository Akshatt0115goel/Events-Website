import Layout from "../../components/layout"
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {API_URL} from '../../config/index'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {parseCookies} from '../../helpers/index'



const AddEventPage = ({token}) => {
    const [values, setValues] = useState({
        name:'',
        performers:'',
        venue:'',
        address:'',
        date:'',
        time:'',
        description:'',
    })
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
            const res = await fetch(`${API_URL}/events`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(values),
              })
          
              if (!res.ok) {
                if (res.status === 403 || res.status === 401) {
                  toast.error('No token included')
                  return
                }
                toast.error('Something Went Wrong')
              } else {
                const evt = await res.json()
                router.push(`/events/${evt.slug}`)
              }
            
        }

    }
    const handleInputChange = (e) => {
        const {name,value} = e.target
        setValues({...values,[name]:value})
    }
    return (
        <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white h-screen">
            <Layout title="Add Event">
                <div className="md:grid md:place-items-center min-h-[75vh]">
                    <form onSubmit={handleSubmit} className='form  text-white p-6 my-10 relative md:w-[75vw]'>
                        <h3 className="text-2xl  font-semibold">Add Event</h3>
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
                                <input type="date" name="date" id="date" value={values.date} onChange={handleInputChange} placeholder="Date" className="border p-2  w-full text-bgDark  rounded" />
                            </div>
                            <div className="w-1/2">
                                <label className="block " for="time">Time</label>
                                <input type="text" name="time" id="time" value={values.time} onChange={handleInputChange} placeholder="Time" className="border p-2 w-full text-bgDark rounded" />
                            </div>  
                        </div>
                        <label className="block mt-3" for="description">Description</label>
                        <textArea type="text" name="description" id="description" cols="10" rows="3" value={values.description} onChange={handleInputChange} placeholder="Tell us about your event" className="border p-2  text-bgDark w-full rounded">{values.description}</textArea>
                        <input type="submit" value="Add Event" className="w-full mt-6 bg-primary hover:bg-primaryLight text-white font-semibold p-3"></input>
                    </form>
                </div>
                
            </Layout>
            
        </div>
    )
}

export default AddEventPage

export async function getServerSideProps({req}){
    const {token} = parseCookies(req)

    return{
        props:{
            token,
        },
    }
}
