import { XCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function Modal({show,onClose,children,title}) {

    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => setIsBrowser(true))

    const handleClose = (e) => {
        e.preventDefault()
        onClose()
      }

    const modalContent = show? (
        <div className="min-h-screen bg-black flex justify-center items-center fixed inset-0 z-20 bg-opacity-70"> 
            <div className="bg-white rounded-lg">
                <div className="w-96 border-t-8 border-black rounded-lg flex flex-col items-center">
                    <div className="w-1/3 pt-6 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 bg-black text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path xmlns="http://www.w3.org/2000/svg" d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentcolor"></path>
                        </svg>
                    </div>
                <div className=" pt-9 grid place-items-center">
                    {title && <h3 className="font-bold text-2xl text-bgDark">{title}</h3>}
                    <p className="py-4 text-sm text-gray-400">{children}</p>
                </div>
                </div>
                <div className="p-4 grid place-items-center space-x-4">
                <a href="#" onClick={handleClose} className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</a>
                </div>
            </div>
        </div>

    ) : null

    if(isBrowser){
        return ReactDOM.createPortal(modalContent,document.
            getElementById('modal-root'))
    }else{
        return null
    }
}
