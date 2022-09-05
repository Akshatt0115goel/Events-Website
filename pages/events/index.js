import EventItem from "../../components/eventitem"
import Layout from "../../components/layout"
import {API_URL} from '../../config/index'
import Link from 'next/link'
const PER_PAGE = 3


const EventsPage = ({events,total,page}) => {
  const lastPage = Math.ceil(total / PER_PAGE)
    return (
        <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white">
            <Layout title='About DJ Events'>
                <div className="p-10 min-h-[75vh]">
                    <h2 className="mb-6 text-center text-4xl text-primary font-semibold ">Events</h2>
                    {events.length === 0 && <h3>No events</h3>}
                
                    {events.map((evt) => (
                        <div className="grid place-items-center">
                          <EventItem key={evt.id} evt={evt}/>
                        </div>
                    ))}
                    <div className="grid place-items-center">
                      <div className="flex space-x-7">
                        {page>1 && (
                            <Link href={`/events?page=${page-1}`}><a className="border border-white text-sm p-2 rounded hover:bg-white hover:text-black">Previous</a></Link>
                          )}
                          {page<lastPage && (
                            <Link href={`/events?page=${page+1}`}><a className="border border-white text-sm px-5 py-2 rounded hover:bg-white hover:text-black">Next</a></Link>
                          )}
                      </div>
                      
                    </div>
                    
                </div>
            </Layout>
        </div>
        
       
    )
}

export default EventsPage

export async function getServerSideProps({query:{page=1}}) {
    
    
    const start = +page === 1 ? 0 : (+page -1)*PER_PAGE
    const totalRes = await fetch(`${API_URL}/events/count`);
    const total = await totalRes.json();
    const eventRes = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`);
    const events = await eventRes.json();
    return {
      props: {
        events,
        page: +page,
        total
      }
      // will be passed to the page component as props
    }
  }