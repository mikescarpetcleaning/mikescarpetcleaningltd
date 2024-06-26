const BASE_URL = `https://drive.google.com/uc?export=view&id=`;

import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { Slider } from '../components/Slider';

const Gallery: NextPage<any> = () => {
    useEffect(() => {
        const slider = new Slider(".slider-wrapper", ".gallery-prev", ".gallery-next", undefined, 500).init();
    }, [])
    return (
        <>
            <Head>
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
            <h1>Coming Soon</h1>
            {/* <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <title>Carpet Cleaning Pictures | Before and After plus More!</title>
                <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5f28d64858759f2fc1e07652/e776c5a2-1be6-459f-8947-7534111b93d0/favicon.ico?format=100w"/>
                <link rel="canonical" href="https://mikescarpetcleaningltd.com/gallery"/>
                <meta property="og:site_name" content="Mikes carpet cleaning LTD"/>
                <meta property="og:title" content="Carpet Cleaning Pictures | Before and After plus More!"/>
                <meta property="og:url" content="https://mikescarpetcleaningltd.com/gallery"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image:width" content="1500"/>
                <meta property="og:image:height" content="195"/>
                <meta itemProp="name" content="Carpet Cleaning Pictures | Before and After plus More!"/>
                <meta itemProp="url" content="https://mikescarpetcleaningltd.com/gallery"/>
                <meta name="twitter:title" content="Carpet Cleaning Pictures | Before and After plus More!"/>
                <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
                <meta name="twitter:url" content="https://mikescarpetcleaningltd.com/gallery"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="description" content="Carpet, tile, and upholstery cleaning service company serving the Northwest from Snohomish to Shoreline and beyond!"/>
            </Head>
            <div style={{width: '100%', overflow: 'hidden', height: '100vh', position: 'relative'}}className="slider">
                <div className="gallery-prev">
                    <svg height="50px" width="50px">
                        <path d="M33 5 l-20 20 l20 20" 
                            fill="none" 
                            stroke="black" 
                            strokeWidth="5px" 
                            strokeLinecap="round" 
                            shapeRendering="crispEdges">
                        </path>
                    </svg>
                </div>
                <div className="gallery-next">
                    <svg height="50px" width="50px">
                        <path d="M17 5 l20 20 l-20 20" 
                            fill="none" 
                            stroke="black" 
                            strokeWidth="5px" 
                            strokeLinecap="round" 
                            shapeRendering="crispEdges">
                        </path>
                    </svg>
                </div>
                <div style={{ display: 'flex', height: '100%' }}className="slider-wrapper">
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 1" src="/1.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 2" src="/2.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 3" src="/3.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 4" src="/4.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 5" src="/5.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 6" src="/6.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 7" src="/7.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 8" src="/8.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 9" src="/9.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 10" src="/10.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 11" src="/11.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 12" src="/12.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 13" src="/13.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 14" src="/14.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 15" src="/15.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 16" src="/16.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 17" src="/17.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 18" src="/18.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 19" src="/19.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 20" src="/20.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 21" src="/21.webp" />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="gallery image 22" src="/22.webp" />
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Gallery;