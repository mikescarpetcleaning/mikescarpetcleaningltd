const BASE_URL = `https://drive.google.com/uc?export=view&id=`;

import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Slider } from '../components/Slider';

const Gallery: NextPage<any> = () => {
    useEffect(() => {
        const slider = new Slider(".slider-wrapper", ".prev", ".next", undefined, 500).init();
    }, [])
    return (
        <>
            <div style={{width: '100%', overflow: 'hidden', height: '100vh', position: 'relative'}}className="slider">
                <div className="prev" style={{ width: '50px', height: '50px', position: 'absolute', top: 'calc(50% - 25px)', left: 0, zIndex: 5}}>
                    <svg height="50px" width="50px">
                        <path d="M35 5 l-20 20 l20 20" 
                            fill="none" 
                            stroke="black" 
                            strokeWidth="5px" 
                            strokeLinecap="round" 
                            shapeRendering="crispEdges">
                        </path>
                    </svg>
                </div>
                <div className="next" style={{ width: '50px', height: '50px', position: 'absolute', top: 'calc(50% - 25px)', right: 0, zIndex: 5 }}>
                    <svg height="50px" width="50px">
                        <path d="M15 5 l20 20 l-20 20" 
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
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={BASE_URL + '1c40nTDI7co7wWRpSjc-yNRG0StR6nU-p'} />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={BASE_URL + '1ilsD23oRsvlI0Eqb3_XkTp37NSkO2M2B'} />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={BASE_URL + '140shUyy3cySHBAk2jYu3fbMK6vWDPSSn'} />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={BASE_URL + '1khmZhYQEGEul4_zNEkpdhFCJgs_oFMrq'} />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={BASE_URL + '1XPuMB2VNjoGrkqR55_1lBa-Y0gSL2gE7'} />
                    </div>
                    <div style={{ minWidth: '100%', height: '100%'}}className="slider-slide">
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={BASE_URL + '1LE23DYR14T4U2xV9dPnZsaraAC_QIpAh'} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery;