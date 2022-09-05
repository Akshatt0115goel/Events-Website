import Head from 'next/head'
import Footer from './footer'
import Header from './header'

const Layout = ({title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
           </Head>
            <Header />
                <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white">
                    {children}
                </div>
            <Footer /> 
        </div>
    )
}

export default Layout

Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, edm, events',
}