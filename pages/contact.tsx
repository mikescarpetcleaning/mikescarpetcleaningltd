import type { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../contactComponents/ContactForm';

const Contact: NextPage = () => {

    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <title>Contact Excel Carpet Cleaning</title>
                <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5f28d64858759f2fc1e07652/e776c5a2-1be6-459f-8947-7534111b93d0/favicon.ico?format=100w"/>
                <link rel="canonical" href="https://www.excelcarpetcleaningwa.com/contact"/>
                <meta property="og:site_name" content="Excel Carpet Cleaning Services"/>
                <meta property="og:title" content="Contact Excel Carpet Cleaning"/>
                <meta property="og:url" content="https://www.excelcarpetcleaningwa.com/contact"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image:width" content="1500"/>
                <meta property="og:image:height" content="195"/>
                <meta itemProp="name" content="Excel Carpet Cleaning Services"/>
                <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com/contact"/>
                <meta name="twitter:title" content="Contact Excel Carpet Cleaning"/>
                <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
                <meta name="twitter:url" content="https://www.excelcarpetcleaningwa.com/contact"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="description" content="Carpet, Tile, and Upholstery cleaning service company serving the washington plateau area from maple valley to sammamish and beyond!"/>
            </Head>
            <style>{`.contactFlag{display:none;}`}</style>
            <ContactForm />
        </>
    )
}
export default Contact;