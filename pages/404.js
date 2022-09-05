
import Link from 'next/link'
import Image from 'next/image'

const ErrorPage = () => {
    return (
        
    <section className='bg-bgDark flex flex-col justify-center items-center p-2 h-screen'>
                   <Image src="/404.svg" height={600} width={800} className="my-2 mx-auto "/>
                    <p className="text-sm md:text-base text-primary p-2 mb-4">The stuff you were looking for doesn't exist</p>
                    <Link href='/'>
                        <a
                        className="bg-transparent hover:bg-primaryLight text-primary hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent">
                        Retry</a>
                    </Link>
                
    </section>
    )
}

export default ErrorPage
