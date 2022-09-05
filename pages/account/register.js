import { UserIcon } from "@heroicons/react/outline"
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {useState,useEffect,useContext} from 'react'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from "next/image";
import AuthContext from '../../context/AuthContext'


const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const {register,error} = useContext(AuthContext)
    
    useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()

        if(password !== passwordConfirm){
            toast.error('Passwords do not match')
            return
        }

        register({username,email,password})
    }
    return (
        <div>
        <Layout title="User Register">
          
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div  className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div  className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]" >
                    <div  className="md:flex w-full">
                        <div  className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                        <div className="md:mt-11 lg:mt-0">
                                <Image src='/register.svg' width={600} height={600} />
                            </div>
                        </div>
                        <div  className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div  className="text-center mb-10">
                                <h1  className="font-bold text-3xl text-gray-900">REGISTER</h1>
                                <p>Enter your information to register</p>
                            </div>
                            <div>
                                <div  className="flex -mx-3">
                                    <div  className="w-full px-3 mb-5">
                                        <label for="username"  className="text-xs font-semibold px-1">User Name</label>
                                        <div  className="flex">
                                            <div  className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i  className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="flex -mx-3">
                                    <div  className="w-full px-3 mb-5">
                                        <label htmlFor="email"  className="text-xs font-semibold px-1">Email</label>
                                        <div  className="flex">
                                            <div  className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i  className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="flex -mx-3">
                                    <div  className="w-full px-3 mb-5">
                                        <label for=""  className="text-xs font-semibold px-1">Password</label>
                                        <div  className="flex">
                                            <div  className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i  className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="flex -mx-3">
                                    <div  className="w-full px-3 mb-12">
                                        <label for="passwordConfirm"  className="text-xs font-semibold px-1">Confirm Password</label>
                                        <div  className="flex">
                                            <div  className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i  className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" name="passwordConfirm" id="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="flex -mx-3">
                                    <div  className="w-full px-3 mb-5">
                                        <input type="submit" value="REGISTER NOW"  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"></input>
                                    </div>
                                </div>
                                <div  className="flex -mx-3 text-sm">
                                    <div  className="w-full px-3 mb-5 space-x-2">
                                        <span >Already have an account?</span>
                                        <Link href='/account/login'>
                                            <a className="text-blue-500 border-b border-blue-500">Login Now</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </form>
       



        </Layout>
        
            
        </div>
    )
}

export default RegisterPage
