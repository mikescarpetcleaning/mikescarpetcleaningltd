import type { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../contactComponents/ContactForm';

const Contact: NextPage = () => {

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <title>Contact Mike&apos;s Carpet Cleaning LTD</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="canonical" href="https://www.excelcarpetcleaningwa.com/contact"/>
                <meta property="og:site_name" content="Mike&apos;s Carpet Cleaning LTD"/>
                <meta property="og:title" content="Contact Mike&apos;s Carpet Cleaning LTD"/>
                <meta property="og:url" content="https://www.excelcarpetcleaningwa.com/contact"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image:width" content="1500"/>
                <meta property="og:image:height" content="195"/>
                <meta itemProp="name" content="Mike&apos;s Carpet Cleaning LTD"/>
                <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com/contact"/>
                <meta name="twitter:title" content="Contact Mike&apos;s Carpet Cleaning LTD"/>
                <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
                <meta name="twitter:url" content="https://www.excelcarpetcleaningwa.com/contact"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="description" content="Carpet, tile, and upholstery cleaning service company serving the Washington plateau area from Maple Valley to Sammamish and beyond!"/>
            </Head>
            <style>{`.contactFlag{display:none;}`}</style>
            <ContactForm />
        </>
    )
}
export default Contact;