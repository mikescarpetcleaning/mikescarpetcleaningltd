import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
        areas: 40,
        pet: 20,
        scotch: 15,
        linearFeet: 19,
        chairs: 69,
        seatCushions: 5,
        tile: 0.75,
        tileSealant: 0.5,
        hardwoods: 0.75,
        hardwoodSealant: 0.5,
        ventSpecial: 299,
        dryerVent: 99
    }
    const [estimate, setEstimate] = useState(defaultEstimate)
    const [price, setPrice] = useState(0);
    const [allPet, setAllPet] = useState(false);
    const [allScotch, setAllScotch] = useState(false);

    const checkChecked = ({ target }: any) => {
        console.log(target.checked)
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
                    if (current < 0) current = 0;
        
                    if (rate[0] === 'areas') {
                        if (current > 0 && current < 5) {
                            minimum = 149;
                            current  = current as number - 2 > 0 ? current as number - 2 : 0;
                        }
                        if (current >= 5) {
                            special = 269;
                            minimum = 0
                            current = current as number - 5
                        }
                    }
        
                    if (rate[0] === 'pet') {
                        if (current > 0 && current < 2) {
                            minimum = 40;
                            current = 0;
                        }
                    }
        
                    if (rate[0] === 'scotch') {
                        if (current > 0 && current < 2) {
                            minimum = 30;
                            current = 0;
                        }
                    }
                    if (rate[0] === 'tile' || rate[0] === 'hardwoods') {
                        if (current > 0 && current < 60) {
                            current = 100;
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
            if (total < 149 && total > 0) {
                setPrice(149)
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
        <section className={styles.estimator}>
            {/* <Appointment /> */}
            <div className={styles.disclaimer}>
                <h1>ESTIMATOR</h1>
                <p>Specials and minimums are automatically calculated</p>
                <p>Minimum charge of $149 applies to all appointments</p>
                <p>For detailed pricing information please see our <Link href="/services"><a className={styles.link}>services page</a></Link></p>
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
                                    <button type="button" onClick={incrementEstimate}>+</button>
                                </div>
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="petRooms">Pet Treat</label>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate} disabled={allPet ? true : false}>-</button>
                                    <input 
                                        id="petRooms" 
                                        name="petRooms"
                                        type="text"
                                        value={estimate.petRooms}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate} disabled={allPet ? true : false}>+</button>
                                    <div className={styles.allBox}>
                                        <label htmlFor="allPet">all?</label>
                                        <input type="checkbox" id="allPet" onChange={() => setAllPet(!allPet)} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="scotchRooms">ScotchGard</label>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate} disabled={allScotch ? true : false}>-</button>
                                    <input 
                                        id="scotchRooms" 
                                        name="scotchRooms"
                                        type="text"
                                        value={estimate.scotchRooms}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate} disabled={allScotch ? true : false}>+</button>
                                    <div className={styles.allBox}>
                                        <label htmlFor="allScotch">all?</label>
                                        <input type="checkbox" id="allScotch" onChange={() => setAllScotch(!allScotch)} />
                                    </div>
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
                                    <button type="button" onClick={incrementEstimate}>+</button>
                                </div>
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="petHalls">Pet Treat</label>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate} disabled={allPet ? true : false}>-</button>
                                    <input 
                                        id="petHalls" 
                                        name="petHalls"
                                        type="text"
                                        value={estimate.petHalls}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate} disabled={allPet ? true : false}>+</button>
                                    <div className={styles.allBox}>
                                        <label htmlFor="allPet">all?</label>
                                        <input type="checkbox" id="allPet" onChange={() => setAllPet(!allPet)} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="scotchHalls">ScotchGard</label>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate} disabled={allScotch ? true : false}>-</button>
                                    <input 
                                        id="scotchHalls" 
                                        name="scotchHalls"
                                        type="text"
                                        value={estimate.scotchHalls}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate} disabled={allScotch ? true : false}>+</button>
                                    <div className={styles.allBox}>
                                        <label htmlFor="allScotch">all?</label>
                                        <input type="checkbox" id="allScotch" onChange={() => setAllScotch(!allScotch)} />
                                    </div>
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
                                    <button type="button" onClick={incrementEstimate}>+</button>
                                </div>
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="petStairs">Pet Treat</label>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate} disabled={allPet ? true : false}>-</button>
                                    <input 
                                        id="petStairs" 
                                        name="petStairs"
                                        type="text"
                                        value={estimate.petStairs}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate} disabled={allPet ? true : false}>+</button>
                                    <div className={styles.allBox}>
                                        <label htmlFor="allPet">all?</label>
                                        <input type="checkbox" id="allPet" onChange={() => setAllPet(!allPet)} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="scotchStairs">ScotchGard</label>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate} disabled={allScotch ? true : false}>-</button>
                                    <input 
                                        id="scotchStairs" 
                                        name="scotchStairs"
                                        type="text"
                                        value={estimate.scotchStairs}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate} disabled={allScotch ? true : false}>+</button>
                                    <div className={styles.allBox}>
                                        <label htmlFor="allScotch">all?</label>
                                        <input type="checkbox" id="allScotch" onChange={() => setAllScotch(!allScotch)} />
                                    </div>
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
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate}>-</button>
                                    <input 
                                        id="chairs" 
                                        name="chairs"
                                        type="text"
                                        value={estimate.chairs}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <h3 onClick={toggleDropdown}>COUCHES, LOVESEATS, &amp; SECTIONAL SOFAS</h3>
                        <div className={styles.formGroup}>
                            <div className={styles.formItem}>
                                <label htmlFor="rooms">Linear feet</label>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate}>-</button>
                                    <input 
                                        id="linearFeet" 
                                        name="linearFeet"
                                        type="text"
                                        value={estimate.linearFeet}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate}>+</button>
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
                                    {/* <button type="button" onClick={decreaseEstimate}>-</button> */}
                                    <input 
                                        id="tile" 
                                        name="tile"
                                        type="number"
                                        onClick={(e) => {
                                            if (window.innerWidth < 1024) {
                                                const target = e.target as HTMLElement;
                                                const position = window.scrollY + target.getBoundingClientRect().top - 50
                                                console.log(position)
                                                window.scrollTo(0, position)
                                            }
                                        }}
                                        value={estimate.tile.toString()}
                                        onChange={updateEstimate} 
                                    />
                                    {/* <button type="button" onClick={incrementEstimate}>+</button> */}
                                </div>
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="tileSealant">Seal<br/>(sq. ft.)</label>
                                <div className={styles.switcher}>
                                    {/* <button type="button" onClick={decreaseEstimate} disabled={allPet ? true : false}>-</button> */}
                                    <input 
                                        id="tileSealant" 
                                        name="tileSealant"
                                        type="number"
                                        onClick={(e) => {
                                            if (window.innerWidth < 1024) {
                                                const target = e.target as HTMLElement;
                                                const position = window.scrollY + target.getBoundingClientRect().top - 50
                                                console.log(position)
                                                window.scrollTo(0, position)
                                            }
                                        }}
                                        value={estimate.tileSealant.toString()}
                                        onChange={updateEstimate} 
                                    />
                                    {/* <button type="button" onClick={incrementEstimate} disabled={allPet ? true : false}>+</button> */}
                                    <div className={styles.allBox}>
                                        <label htmlFor="allPet">all?</label>
                                        <input type="checkbox" id="allPet" onChange={() => setAllPet(!allPet)} />
                                    </div>
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
                                    {/* <button type="button" onClick={decreaseEstimate}>-</button> */}
                                    <input 
                                        id="hardwoods" 
                                        name="hardwoods"
                                        type="number"
                                        onClick={(e) => {
                                            if (window.innerWidth < 1024) {
                                                const target = e.target as HTMLElement;
                                                const position = window.scrollY + target.getBoundingClientRect().top - 50
                                                console.log(position)
                                                window.scrollTo(0, position)
                                            }
                                        }}
                                        value={estimate.hardwoods.toString()}
                                        onChange={updateEstimate} 
                                    />
                                    {/* <button type="button" onClick={incrementEstimate}>+</button> */}
                                </div>
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="hardwoodSealant">Seal<br/>(sq. ft.)</label>
                                <div className={styles.switcher}>
                                    {/* <button type="button" onClick={decreaseEstimate} disabled={allPet ? true : false}>-</button> */}
                                    <input 
                                        id="hardwoodSealant" 
                                        name="hardwoodSealant"
                                        type="number"
                                        onClick={(e) => {
                                            if (window.innerWidth < 1024) {
                                                const target = e.target as HTMLElement;
                                                const position = window.scrollY + target.getBoundingClientRect().top - 50
                                                console.log(position)
                                                window.scrollTo(0, position)
                                            }
                                        }}
                                        value={estimate.hardwoodSealant.toString()}
                                        onChange={updateEstimate} 
                                    />
                                    {/* <button type="button" onClick={incrementEstimate} disabled={allPet ? true : false}>+</button> */}
                                    <div className={styles.allBox}>
                                        <label htmlFor="allPet">all?</label>
                                        <input type="checkbox" id="allPet" onChange={() => setAllPet(!allPet)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 onClick={toggleDropdown}>Air Duct Cleaning</h2>
                <div className={styles.formSection}>
                    <div className={styles.formRowAir}>
                        <h4 onClick={toggleDropdown}>AIR DUCT CLEANING SPECIAL</h4>
                        <div className={styles.formGroupAir}>
                            <div className={styles.formItem}>
                                <div className={styles.switcher}>
                                    <input 
                                        id="ventSpecial" 
                                        name="ventSpecial"
                                        type="checkbox"
                                        checked={estimate.ventSpecial}
                                        onChange={checkChecked} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.formRowAir}>
                        <h4 onClick={toggleDropdown}>CEILING DUCTS</h4>
                        <div className={styles.formGroupAir}>
                            <div className={styles.formItem}>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate}>-</button>
                                    <input 
                                        id="ceilingDucts" 
                                        name="ceilingDucts"
                                        type="text"
                                        value={estimate.ceilingDucts}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate}>+</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className={styles.formRowAir}>
                        <h4 onClick={toggleDropdown}>AIR RETURNS</h4>
                        <div className={styles.formGroupAir}>
                            <div className={styles.formItem}>
                                <div className={styles.switcher}>
                                    <button type="button" onClick={decreaseEstimate}>-</button>
                                    <input 
                                        id="returns" 
                                        name="returns"
                                        type="text"
                                        value={estimate.returns}
                                        onChange={updateEstimate} 
                                    />
                                    <button type="button" onClick={incrementEstimate}>+</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.formRowAir}>
                        <h4 onClick={toggleDropdown}>DRYER VENT</h4>
                        <div className={styles.formGroupAir}>
                            <div className={styles.formItem}>
                                <div className={styles.switcher}>
                                    <input 
                                        id="dryerVent" 
                                        name="dryerVent"
                                        type="checkbox"
                                        checked={estimate.dryerVent}
                                        onChange={checkChecked} 
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
                    <a className="btn">
                        Book Appointment
                    </a>
                </Link>
            </div>
            <style>{`
                .contactFlag{display:none;}
                nav{position:relative!important;padding-bottom:8px!important;}
                nav ul{top:66px!important}
                @media screen and (min-width: 1200px){nav{grid-template-columns:110px 1fr 110px!important}}
                nav .btn{display:none}
                footer{display:none}
                #__next section:last-of-type{display:none}
                #__next{margin-bottom:300px}`}</style>
        </section>
    )
}

export default Estimator;