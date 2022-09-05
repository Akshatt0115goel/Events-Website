import Link from 'next/link'
import {GlobeIcon,CalendarIcon, BadgeCheckIcon} from '@heroicons/react/outline'

const Footer = () => {
    return (
        <footer className="bg-bgDark text-white w-full flex justify-around p-4 flex-col items-center space-y-5">
            <p className="text-base mb-1 mt-1">Copyright &copy; DJ Events 2021</p>
            <p className="text-sm space-x-7">
                <Link href='/about'><a className="hover:text-primaryLight">About Us</a></Link>
                <Link href='/events'><a className="hover:text-primaryLight">More events</a></Link>
                <Link href='/about'><a className="hover:text-primaryLight">Follow Us</a></Link>
            </p>
            <p className="text-sm space-x-5 flex">
                <GlobeIcon className="h-5  hover:text-primaryLight "/>
                <CalendarIcon className="h-5  hover:text-primaryLight"/>
                <BadgeCheckIcon className="h-5  hover:text-primaryLight"/> 
            </p>

        </footer>
    )
}

export default Footer
