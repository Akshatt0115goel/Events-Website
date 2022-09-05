import EventItem from "../../components/eventitem"
import Layout from "../../components/layout"
import {API_URL} from '../../config/index'
import qs from 'qs'
import {useRouter} from 'next/router'
import Link from "next/link"


const SearchPage = ({events}) => {
    const router = useRouter();
    return (
        <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white">
            <Layout title='Search Results'>
                
                <div className="p-10 h-screen">
                    
                    <h2 className="mb-6 text-center text-2xl text-primary font-semibold ">{`Search Results for ${router.query.term}`}</h2>
                    <Link href='/events'><a className="m-5 block text-center w-full">Go Back</a></Link>
                    {events.length === 0 && <h3>No events</h3>}
                
                    {events.map((evt) => (
                        <div className="grid place-items-center mt-5">
                          <EventItem key={evt.id} evt={evt}/>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
        
       
    )
}

export default SearchPage

export async function getServerSideProps({query:{term}}) {

    const query = qs.stringify({
        _where: {
            _or:[
                {name_contains:term},
                {performers_contains:term},
                {description_contains:term},
                {venue_contains:term}

            ]
        }
    })


    const res = await fetch(`${API_URL}/events?${query}`);
    const events = await res.json();
    return {
      props: {
        events,
      } // will be passed to the page component as props
    }
  }