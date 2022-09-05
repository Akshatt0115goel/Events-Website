// import { HomeIcon, LoginIcon, LogoutIcon } from '@heroicons/react/outline'
// import Link from 'next/link'
// import Search from './search'
// import AuthContext from '../context/AuthContext'
// import {useContext} from 'react'


// const Header = () => {

//     const {user,logout} = useContext(AuthContext)
//     return (
//         <header className="w-full bg-bgDark text-white font-light uppercase px-10 py-4">
//             <ul className="flex flex-col md:flex-row space-y-2 justify-between items-center">
//                 <li>
//                     <Link href="/">
//                         <HomeIcon className="cursor-pointer h-6 hover:text-primaryLight" /> 
//                     </Link>
//                 </li>
//                 <li>
//                     <Search />
//                 </li>
//                 <li className="space-x-4">
//                     <Link href="/events">
//                         <a className="hover:text-primaryLight">
//                             Events
//                         </a>
//                     </Link>
                   
                    
//                 </li>
//                 {user ? <>
                    
                    
//                     <li>
//                         <Link href="/events/add">
//                             <a className="hover:text-primaryLight">
//                                 Add Event
//                             </a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/account/dashboard">
//                             <a className="hover:text-primaryLight">
//                                 Dashboard
//                             </a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/account/login">
//                             <a onClick={() => logout()} className="hover:text-primaryLight">
//                               <LogoutIcon className="h-5 cursor-pointer" />
//                             </a>
//                         </Link>
//                     </li>

//                 </> 
//                 :
//                 <>
//                     <li>
//                         <Link href="/account/login">
//                             <a className="hover:text-primaryLight">
//                               <LoginIcon className="h-5 cursor-pointer" />
//                             </a>
//                         </Link>
//                     </li>
//                 </>
//                 }
                
                
//             </ul>
//         </header>
//     )
// }

// export default Header

import { HomeIcon, LoginIcon, LogoutIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Search from './search'
import AuthContext from '../context/AuthContext'
import {useContext} from 'react'


const Header = () => {

    const {user,logout} = useContext(AuthContext)
    return (
        <header className="w-full bg-bgDark text-white font-light uppercase px-10 py-4">
            <ul className="flex flex-col md:flex-row space-y-2 justify-between items-center">
                <li>
                    <Link href="/">
                        <HomeIcon className="cursor-pointer h-6 hover:text-primaryLight" /> 
                    </Link>
                </li>
                <li>
                    <Search />
                </li>
                <li className="space-x-4">
                    <Link href="/events">
                        <a className="hover:text-primaryLight">
                            Events
                        </a>
                    </Link>
                   
                    
                </li>
                {user ? <>
                    
                    
                    <li>
                        <Link href="/events/add">
                            <a className="hover:text-primaryLight">
                                Add Event
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account/dashboard">
                            <a className="hover:text-primaryLight">
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account/login">
                            <a onClick={() => logout()} className="hover:text-primaryLight flex space-x-2">
                              <LogoutIcon className="h-5 cursor-pointer" />
                              <span className="transform -translate-y-1">Log Out</span>
                            </a>
                        </Link>
                    </li>

                </> 
                :
                <>
                    <li>
                        <Link href="/account/login">
                            <a className="hover:text-primaryLight flex space-x-2">
                              <LoginIcon className="h-5 cursor-pointer" />
                              <span className="transform -translate-y-1">Log In</span>
                            </a>
                        </Link>
                    </li>
                </>
                }
                
                
            </ul>
        </header>
    )
}

export default Header

