import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

const Scheduling: NextPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Schedule Carpet Cleaning Online | Mikes Carpet Cleaning LTD</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="canonical" href="https://mikescarpetcleaningltd.com/schedule-carpet-cleaning"/>
            <meta property="og:site_name" content="Mikes Carpet Cleaning LTD"/>
            <meta property="og:title" content="Schedule Carpet Cleaning Online | Mikes Carpet Cleaning LTD"/>
            <meta property="og:url" content="https://mikescarpetcleaningltd.com/schedule-carpet-cleaning"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image:width" content="1500"/>
            <meta property="og:image:height" content="195"/>
            <meta itemProp="name" content="Schedule Carpet Cleaning Online | Mikes Carpet Cleaning LTD"/>
            <meta itemProp="url" content="https://mikescarpetcleaningltd.com/schedule-carpet-cleaning"/>
            <meta name="twitter:title" content="Schedule Carpet Cleaning Online | Mikes Carpet Cleaning LTD"/>
            <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
            <meta name="twitter:url" content="https://mikescarpetcleaningltd.com/schedule-carpet-cleaning"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="description" content="Carpet, tile, and upholstery cleaning service company serving the Northwest from Snohomish to Shoreline and beyond!"/>
            <script dangerouslySetInnerHTML={{__html: `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3007112,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}}></script>
        </Head>
            <style>{`.contactFlag{display:none;}`}</style>
            <main style={{height: "1300px", overflow: "auto"}}>
                <iframe 
                    src="https://app.acuityscheduling.com/schedule.php?owner=15583479" 
                    title="Schedule Appointment" 
                    width="100%" 
                    height="1200" 
                    frameBorder="0"></iframe>
                
                <Script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></Script>
            </main>
        </>
    )
}
export default Scheduling;