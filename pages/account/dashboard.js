import Layout from "../../components/layout"
import {parseCookies} from "../../helpers/index"
import {API_URL} from "../../config/index"
import DEventItem from "../../components/deventitem"

import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router'

const DashBoardPage = ({events,token}) => {
    return (
        <div>
            <Layout title="Dashboard">
                <div className="p-10 min-h-[75vh]">
                        <h2 className="mb-6 text-center text-4xl text-primary font-semibold ">Dashboard</h2>
                        <div className="grid place-items-center w-full">
                        <h2 className="mb-6 text-2xl text-primary font-semibold ">My Events</h2>
                        </div>
                        
                        {events.length === 0 && <h3>No events</h3>}
                    
                        {events.map((evt) => (
                            <div className="grid place-items-center">
                            <DEventItem key={evt.id} evt={evt} token={token}/>
                            </div>
                        ))}
                        
                        
                </div>
            </Layout>
            
        </div>
    )
}

export default DashBoardPage

export async function getServerSideProps({req})
{
    const {token} = parseCookies(req)

    const res = await fetch(`${API_URL}/events/me`,
    {
        method: 'GET',
        headers: {
            Authorization:`Bearer ${token}`
        }
    })
    const events = await res.json()

    return{
        props:{
            events,
            token,
        },
    }
}
