import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>My App</title>
                {/* <link rel="stylesheet" href="/static/css/style.css" /> */}
            </Head>
                <Header />
                    {children}
                <Footer />
        </div>
    )
};

// need to import stylsheet for link, what exactly is a head??