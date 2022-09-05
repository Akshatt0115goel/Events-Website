import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect } from 'react';
import Image from 'next/image'
import Header from '../components/header';
import Footer from '../components/footer'
import {API_URL} from '../config/index'
import EventItem from '../components/eventitem';
import Link from 'next/link';

export default function Home({events}) {
  return (
      <>
      <Head>
          <title>DJ Events | Find the hottest parties</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name='description' content='Find the latest DJ and other musical events' />
          <meta name='keywords' content='music, dj, edm, events' />
      </Head>
      <Header />
        <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white">
          <div className={`relative ${styles.dj}`}>
            <div className="text-purple-100 font-bold absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="text-2xl sm:text-4xl md:text-6xl lg:text-6xl text-center w-full mb-5 whitespace-nowrap">Welcome to the Party</div>
              <div className="text-lg sm:text-2xl md:text-4xl lg:text-4xl text-center w-full">Find the hottest DJ event</div>
            </div>
          </div>
          <div className="p-10">
            <h2 className="mb-6 text-2xl sm:text-4xl text-primary font-semibold ">Upcoming Events</h2>
            
            {events.length === 0 && <h3>No events</h3>}
          
            {events.map((evt) => (
              <EventItem key={evt.id} evt={evt}/>
            ))}
            {events.length > 0 ? 
              <Link href='/events'>
                <a className="ml-5 transform border border-transparent  px-3 py-1 rounded hover:bg-primary bg-primaryLight text-bgDark hover:text-white uppercase">See more</a>
              </Link>:
              <div></div>}
          </div>
        </div>
      <Footer />
    </>
    
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  return {
    props: {
      events,
    },
    revalidate: 1, // will be passed to the page component as props
  }
}


