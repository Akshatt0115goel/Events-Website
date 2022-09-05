import { useState } from "react"
import {API_URL} from '../config/index'



function ImageUpload({evtId,imageUploaded,token}) {
    const [image, setImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('files',image)
        formData.append('ref','events')
        formData.append('refId',evtId)
        formData.append('field','image')

        const res = await fetch(`${API_URL}/upload`,{
            method: 'POST',
            headers:{
                Authorization: `Bearer ${token}`,
            },
            body: formData
        })

        if(res.ok){
            imageUploaded()
        }




    }
    const handleFileChange = (e) => {
        setImage(e.target.files[0])

    }
    return (
        <div>
            <h1 className="text-normal text-black mb-3">Upload Event Image</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid place-items-center">
                    <input type="file" onChange={handleFileChange}/>
                    <input type="submit" value="Upload"
                    className="w-1/2 mt-5 border border-transparent p-2 rounded-lg bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border" />
                </div>
            </form>
            
        </div>
    )
}

export default ImageUpload
