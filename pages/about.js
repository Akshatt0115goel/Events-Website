import { useState } from "react"
import Layout from "../components/layout"
import Modal from "../components/modal"
import Image from "next/image"



const AboutUsPage = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Layout  title='About DJ Events'>
            <div className="grid place-items-center py-12 md:py-5 px-5 md:px-0">
                <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className='bg-bgDark'>
                        <Image className="w-full  object-cover object-center" height={275} width={400} src="https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"  alt="avatar"/>
                    </div>

                    <div className="flex items-center px-6 pt-2 pb-3 bg-bgDark">
                        <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                            <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
                        </svg>
                        <h1 className="mx-3 text-white font-semibold text-lg">Focusing</h1>
                    </div>
                    <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Akshat Goel</h1>
                        <p className="py-2 text-lg text-gray-700">Front end Web Developer , love edm and hip hop music.</p>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/>
                            </svg>
                            <h1 className="px-2 text-sm">India</h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                            </svg>
                            <h1 className="px-2 text-sm">akshatgoyal95@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutUsPage
