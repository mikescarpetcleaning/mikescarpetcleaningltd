import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Appointment from '../estimatorComponents/Appointment';
import styles from "../estimatorStyles/Estimator.module.css";

type Estimate = {
    areas: number,
    pet: number,
    scotch: number,
    rooms: number,
    petRooms: number,
    scotchRooms: number,
    halls: number,
    petHalls: number,
    scotchHalls: number,
    stairs: number,
    petStairs: number,
    scotchStairs: number,
    linearFeet: number,
    chairs: number,
    seatCushions: number,
    tile: number,
    tileSealant: number,
    hardwoods: number,
    hardwoodSealant: number,
    ventSpecial: boolean,
    dryerVent: boolean
}

const Estimator: NextPage = () => {
    const [carpetsAdded, setCarpetsAdded] = useState(false);
    const [petAdded, setPetAdded] = useState(false);
    const [scotchAdded, setScotchAdded] = useState(false);
    const [upholsteryAdded, setUpholsteryAdded] = useState(false);
    const [tileAdded, setTileAdded] = useState(false);
    const [hardwoodAdded, setHardwoodAdded] = useState(false);
    const [airDuctsAdded, setAirDuctsAdded] = useState(false);

    const triggerEvent = (event: string, price?: number) => {
        if (price) {
            fetch('/api/trackEstimator', {
                method: "POST",
                body: JSON.stringify({
                    "eventType": event,
                    price
                })
            })
        } else {
            fetch('/api/trackEstimator', {
                method: "POST",
                body: JSON.stringify({
                    "eventType": event
                })
            })
        }

    }

    useEffect(() => {
        triggerEvent("load")
    }, [])
    const defaultEstimate: Estimate = {
        areas: 0,
        pet: 0,
        scotch: 0,
        rooms: 0,
        petRooms: 0,
        scotchRooms: 0,
        halls: 0,
        petHalls: 0,
        scotchHalls: 0,
        stairs: 0,
        petStairs: 0,
        scotchStairs: 0,
        linearFeet: 0,
        chairs: 0,
        seatCushions: 0,
        tile: 0,
        tileSealant: 0,
        hardwoods: 0,
        hardwoodSealant: 0,
        ventSpecial: false,
        dryerVent: false
    }
    const rates = {
        areas: 45,
        pet: 25,
        scotch: 20,
        linearFeet: 20,
        chairs: 69,
        seatCushions: 5,
        tile: 1,
        tileSealant: 0.5,
        hardwoods: 1,
        hardwoodSealant: 0.5,
        ventSpecial: 299,
        dryerVent: 99
    }
    const [estimate, setEstimate] = useState(defaultEstimate)
    const [price, setPrice] = useState(0);
    const [allPet, setAllPet] = useState(false);
    const [allScotch, setAllScotch] = useState(false);

    const checkChecked = ({ target }: any) => {
        setEstimate({
            ...estimate,
            [target.name]: target.checked
        })
    }
    const updateEstimate = ({ target }: any) => {
        setEstimate({
            ...estimate,
            [target.name]: parseInt(target.value) > 0 ? parseInt(target.value) : 0
        })
    }
    const incrementEstimate = ({ target }: any) => {
        const currentItem = target.previousElementSibling;
        setEstimate({
            ...estimate,
            [currentItem.name]: parseInt(currentItem.value) + 1
        })
    }
    const decreaseEstimate = ({ target }: any) => {
        const currentItem = target.nextElementSibling;
        if (currentItem.value > 0) {
            setEstimate({
                ...estimate,
                [currentItem.name]: parseInt(currentItem.value) - 1
            })
        }
    }
    const toggleDropdown = ({ target }: any) => {
        const group = target.nextElementSibling;
        if (target.tagName === "H2") {
            if (group.style.maxHeight) {
                group.style.maxHeight = '';
                target.classList.remove('open')
            } else {
                group.style.maxHeight = 'none';
                target.classList.add('open')
            }
        } else {
            if (group.style.maxHeight) {
                group.style.maxHeight = '';
                target.classList.remove('open')
            } else {
                group.style.maxHeight = group.scrollHeight + 'px';
                target.classList.add('open')
            }
        }
    }
    useEffect(() => {
        if ((estimate.rooms + estimate.halls + estimate.stairs) !== estimate.areas) {
            setEstimate({
                ...estimate,
                areas: estimate.rooms + estimate.halls + estimate.stairs
            })
        }
        if ((estimate.petRooms + estimate.petHalls + estimate.petStairs) !== estimate.pet) {
            setEstimate({
                ...estimate,
                pet: estimate.petRooms + estimate.petHalls + estimate.petStairs
            })
        }
        if ((estimate.scotchRooms + estimate.scotchHalls + estimate.scotchStairs) !== estimate.scotch) {
            setEstimate({
                ...estimate,
                scotch: estimate.scotchRooms + estimate.scotchHalls + estimate.scotchStairs
            })
        }
        if (
            (estimate.rooms >= estimate.petRooms && estimate.rooms >= estimate.scotchRooms) &&
            (estimate.halls >= estimate.petHalls && estimate.halls >= estimate.scotchHalls) &&
            (estimate.stairs >= estimate.petStairs && estimate.stairs >= estimate.scotchStairs) &&
            (estimate.tile >= estimate.tileSealant) &&
            (estimate.hardwoods >= estimate.hardwoodSealant)
            ) {
            const rateArray = Object.entries(rates);
            let ducts = 0;
            let total = rateArray.reduce((acc: number, rate: [string, number]): number => {
                if (rate[0] !== 'ventSpecial' && rate[0] !== 'dryerVent') {
                    let minimum = 0;
                    let special = 0;
                    let current = estimate[rate[0] as keyof Estimate];
                    console.log(current)
                    if (current < 0) current = 0;
        
                    if (rate[0] === 'areas') {
                        if (current > 0) minimum = 145;
                        if (current > 0 && current < 3) {
                            current = 0
                        } else if (current >= 3) {
                            current = current as number - 2

                        }
                    }
        
                    if (rate[0] === 'scotch') {
                        if (current > 0 && current < 2) {
                            minimum = 40;
                            current = 0;
                        }
                    }
                    if (rate[0] === 'tile' || rate[0] === 'hardwoods') {
                        if (current > 0 && current < 145) {
                            current = 145;
                        }
                    }
                    return acc += current as number * rate[1] + minimum + special;
                } else {
                    return acc
                }
            }, 0)
            ducts = estimate.ventSpecial ? rates.ventSpecial : 0;
            ducts += estimate.dryerVent ? rates.dryerVent : 0;
            total += ducts
            if (total < 145 && total > 0) {
                setPrice(145)
            } else {
                setPrice(total)
            }
        } else if (estimate.rooms < estimate.petRooms) {
            setEstimate({...estimate, 'petRooms': estimate.rooms})
        } else if (estimate.rooms < estimate.scotchRooms) {
            setEstimate({...estimate, 'scotchRooms': estimate.rooms})
        } else if (estimate.halls < estimate.petHalls) {
            setEstimate({...estimate, 'petHalls': estimate.halls})
        } else if (estimate.halls < estimate.scotchHalls) {
            setEstimate({...estimate, 'scotchHalls': estimate.halls})
        } else if (estimate.stairs < estimate.petStairs) {
            setEstimate({...estimate, 'petStairs': estimate.stairs})
        } else if (estimate.stairs < estimate.scotchStairs) {
            setEstimate({...estimate, 'scotchStairs': estimate.stairs})
        } else if (estimate.tile < estimate.tileSealant) {
            setEstimate({...estimate, 'tileSealant': estimate.tile})
        } else if (estimate.hardwoods < estimate.hardwoodSealant) {
            setEstimate({...estimate, 'hardwoodSealant': estimate.hardwoods})
        } 
    }, [estimate])

    useEffect(() => {
        if (allPet && estimate.rooms !== estimate.petRooms) setEstimate({...estimate, 'petRooms': estimate.rooms})
    }, [allPet, estimate])
    useEffect(() => {
        if (allScotch && estimate.rooms !== estimate.scotchRooms) setEstimate({...estimate, 'scotchRooms': estimate.rooms})
    }, [allScotch, estimate])
    return (
        <>
            <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Excel Carpet Cleaning Estimator Tool</title>
            <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5f28d64858759f2fc1e07652/e776c5a2-1be6-459f-8947-7534111b93d0/favicon.ico?format=100w"/>
            <link rel="canonical" href="https://www.excelcarpetcleaningwa.com/estimator"/>
            <meta property="og:site_name" content="Excel Carpet Cleaning Services"/>
            <meta property="og:title" content="Excel Carpet Cleaning Estimator Tool"/>
            <meta property="og:url" content="https://www.excelcarpetcleaningwa.com/estimator"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image:width" content="1500"/>
            <meta property="og:image:height" content="195"/>
            <meta itemProp="name" content="Excel Carpet Cleaning Services"/>
            <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com/estimator"/>
            <meta name="twitter:title" content="Excel Carpet Cleaning Estimator Tool"/>
            <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
            <meta name="twitter:url" content="https://www.excelcarpetcleaningwa.com/estimator"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="description" content="Build your own carpet and upholstery cleaning quote in just seconds!"/>
            <script dangerouslySetInnerHTML={{__html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3003356,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}}></script>
            </Head>
            <section className={styles.estimator}>
                <div className={styles.disclaimer}>
                    <h1>ESTIMATOR</h1>
                    <p>Specials and minimums are automatically calculated</p>
                    <p>Minimum charge of $145 applies to all appointments</p>
                    <p>For detailed pricing information please see our <Link href="/services"><a className={styles.link}>services/pricing</a></Link> page</p>
                </div>
                <form>
                    <h2 onClick={toggleDropdown}>Carpet Cleaning</h2>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <h3 onClick={toggleDropdown}>ROOMS</h3>
                            <div className={styles.formGroup}>
                                <div className={styles.formItem}>
                                    <label htmlFor="rooms">Clean</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate}>-</button>
                                        <input 
                                            id="rooms" 
                                            name="rooms"
                                            type="text"
                                            value={estimate.rooms}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!carpetsAdded) {
                                                triggerEvent("carpet")
                                                setCarpetsAdded(true)
                                            }
                                        }}>+</button>
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="petRooms">Pet Treat</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate} >-</button>
                                        <input 
                                            id="petRooms" 
                                            name="petRooms"
                                            type="text"
                                            value={estimate.petRooms}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!petAdded) {
                                                triggerEvent("pet")
                                                setPetAdded(true)
                                            }
                                        }} >+</button>
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="scotchRooms">ScotchGard</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate} >-</button>
                                        <input 
                                            id="scotchRooms" 
                                            name="scotchRooms"
                                            type="text"
                                            value={estimate.scotchRooms}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!scotchAdded) {
                                                triggerEvent("scotch")
                                                setScotchAdded(true)
                                            }
                                        }} >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <h3 onClick={toggleDropdown}>STAIRCASES</h3>
                            <div className={styles.formGroup}>
                                <div className={styles.formItem}>
                                    <label htmlFor="halls">Clean</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate}>-</button>
                                        <input 
                                            id="halls" 
                                            name="halls"
                                            type="text"
                                            value={estimate.halls}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!carpetsAdded) {
                                                triggerEvent("pet")
                                                setCarpetsAdded(true)
                                            }
                                        }}>+</button>
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="petHalls">Pet Treat</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate} >-</button>
                                        <input 
                                            id="petHalls" 
                                            name="petHalls"
                                            type="text"
                                            value={estimate.petHalls}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!petAdded) {
                                                triggerEvent("pet")
                                                setPetAdded(true)
                                            }
                                        }} >+</button>
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="scotchHalls">ScotchGard</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate} >-</button>
                                        <input 
                                            id="scotchHalls" 
                                            name="scotchHalls"
                                            type="text"
                                            value={estimate.scotchHalls}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!scotchAdded) {
                                                triggerEvent("scotch")
                                                setScotchAdded(true)
                                            }
                                        }} >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <h3 onClick={toggleDropdown}>HALLWAYS</h3>
                            <div className={styles.formGroup}>
                                <div className={styles.formItem}>
                                    <label htmlFor="stairs">Clean</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate}>-</button>
                                        <input 
                                            id="stairs" 
                                            name="stairs"
                                            type="text"
                                            value={estimate.stairs}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!carpetsAdded) {
                                                triggerEvent("carpet")
                                                setCarpetsAdded(true)
                                            }
                                        }}>+</button>
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="petStairs">Pet Treat</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate}>-</button>
                                        <input 
                                            id="petStairs" 
                                            name="petStairs"
                                            type="text"
                                            value={estimate.petStairs}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!petAdded) {
                                                triggerEvent("pet")
                                                setPetAdded(true)
                                            }
                                        }} >+</button>
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="scotchStairs">ScotchGard</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate} >-</button>
                                        <input 
                                            id="scotchStairs" 
                                            name="scotchStairs"
                                            type="text"
                                            value={estimate.scotchStairs}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!scotchAdded) {
                                                triggerEvent("scotch")
                                                setScotchAdded(true)
                                            }
                                        }} >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 onClick={toggleDropdown}>Upholstery Cleaning</h2>
                    <div className={styles.formSection}>
                        <div className={styles.formRowAir}>
                            <h4 onClick={toggleDropdown}>RECLINER CHAIRS</h4>
                            <div className={styles.formGroupAir}>
                                <div className={styles.formItem}>
                                    <label htmlFor="chairs">Chairs</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate}>-</button>
                                        <input 
                                            id="chairs" 
                                            name="chairs"
                                            type="text"
                                            value={estimate.chairs}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!upholsteryAdded) {
                                                triggerEvent("upholstery")
                                                setUpholsteryAdded(true)
                                            }
                                        }}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <h3 onClick={toggleDropdown}>COUCHES, LOVESEATS, &amp; SECTIONAL SOFAS</h3>
                            <div className={styles.formGroup}>
                                <div className={styles.formItem}>
                                    <label htmlFor="linearFeet">Linear feet</label>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate}>-</button>
                                        <input 
                                            id="linearFeet" 
                                            name="linearFeet"
                                            type="text"
                                            value={estimate.linearFeet}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={(e: any) => {
                                            incrementEstimate(e)
                                            if (!upholsteryAdded) {
                                                triggerEvent("upholstery")
                                                setUpholsteryAdded(true)
                                            }
                                        }}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.formRow}>
                            <h3 onClick={toggleDropdown}>SEAT CUSHIONS</h3>
                            <div className={styles.formGroup}>
                                <div className={styles.formItem}>
                                    <div className={styles.switcher}>
                                        <button type="button" onClick={decreaseEstimate}>-</button>
                                        <input 
                                            id="seatCushions" 
                                            name="seatCushions"
                                            type="text"
                                            value={estimate.seatCushions}
                                            onChange={updateEstimate} 
                                        />
                                        <button type="button" onClick={incrementEstimate}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <h2 onClick={toggleDropdown}>Hard Surface Cleaning</h2>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <h3 onClick={toggleDropdown}>TILE &amp; GROUT</h3>
                            <div className={styles.formGroup}>
                                <div className={styles.formItem}>
                                    <label htmlFor="tile">Clean<br/>(sq. ft.)</label>
                                    <div className={styles.switcher}>
                                        <input 
                                            id="tile" 
                                            name="tile"
                                            type="number"
                                            onClick={(e) => {
                                                if (window.innerWidth < 1024) {
                                                    const target = e.target as HTMLElement;
                                                    const position = window.scrollY + target.getBoundingClientRect().top - 50
                                                    window.scrollTo(0, position)
                                                }
                                            }}
                                            value={estimate.tile.toString()}
                                            onChange={(e: any) => {
                                                updateEstimate(e)
                                                if (!tileAdded) {
                                                    triggerEvent("tile")
                                                    setTileAdded(true)
                                                }
                                            }} 
                                        />
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="tileSealant">Seal<br/>(sq. ft.)</label>
                                    <div className={styles.switcher}>
                                        <input 
                                            id="tileSealant" 
                                            name="tileSealant"
                                            type="number"
                                            onClick={(e) => {
                                                if (window.innerWidth < 1024) {
                                                    const target = e.target as HTMLElement;
                                                    const position = window.scrollY + target.getBoundingClientRect().top - 50
                                                    window.scrollTo(0, position)
                                                }
                                            }}
                                            value={estimate.tileSealant.toString()}
                                            onChange={updateEstimate} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <h3 onClick={toggleDropdown}>HARDWOOD FLOORS</h3>
                            <div className={styles.formGroup}>
                                <div className={styles.formItem}>
                                    <label htmlFor="hardwoods">Clean<br/>(sq. ft.)</label>
                                    <div className={styles.switcher}>
                                        <input 
                                            id="hardwoods" 
                                            name="hardwoods"
                                            type="number"
                                            onClick={(e) => {
                                                if (window.innerWidth < 1024) {
                                                    const target = e.target as HTMLElement;
                                                    const position = window.scrollY + target.getBoundingClientRect().top - 50
                                                    window.scrollTo(0, position)
                                                }
                                            }}
                                            value={estimate.hardwoods.toString()}
                                            onChange={(e: any) => {
                                                updateEstimate(e)
                                                if (!hardwoodAdded) {
                                                    triggerEvent("hardwood")
                                                    setHardwoodAdded(true)
                                                }
                                            }} 
                                        />
                                    </div>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="hardwoodSealant">Seal<br/>(sq. ft.)</label>
                                    <div className={styles.switcher}>
                                        <input 
                                            id="hardwoodSealant" 
                                            name="hardwoodSealant"
                                            type="number"
                                            onClick={(e) => {
                                                if (window.innerWidth < 1024) {
                                                    const target = e.target as HTMLElement;
                                                    const position = window.scrollY + target.getBoundingClientRect().top - 50
                                                    window.scrollTo(0, position)
                                                }
                                            }}
                                            value={estimate.hardwoodSealant.toString()}
                                            onChange={updateEstimate} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.price}>
                    <div className={styles.quote}>
                        <p>TOTAL: ${price}</p>
                        <button onClick={() => setEstimate(defaultEstimate)}>CLEAR</button>
                    </div>
                    <Link href="/scheduling">
                        <a className="btn" onClick={() => triggerEvent("checkout", price)}>
                            Book Appointment
                        </a>
                    </Link>
                </div>
                <style>{`
                    .contactFlag{display:none;}
                    nav{position:relative!important;padding-bottom:8px!important}
                    nav ul{top:66px!important}
                    @media screen and (min-width: 1200px){nav{grid-template-columns:110px 1fr 110px!important;padding-bottom:0!important}}
                    nav .btn{display:none}
                    footer{display:none}
                    #__next section:last-of-type{display:none}
                    #__next{margin-bottom:300px}`}</style>
            </section>
        </>
    )
}

export default Estimator;
