import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from "../estimaterStyles/Estimater.module.css";

type Estimate = {
    rooms: number,
    petRooms: number,
    scotchRooms: number,
    linearFeet: number,
    chairs: number,
    seatCushions: number,
    tile: number,
    tileSealant: number,
    hardwoods: number,
    hardwoodSealant: number,
    groundDucts: number,
    ceilingDucts: number,
    returns: number,
    dryerVents: number
}

const Estimater: NextPage = () => {
    const defaultEstimate: Estimate = {
        rooms: 0,
        petRooms: 0,
        scotchRooms: 0,
        linearFeet: 0,
        chairs: 0,
        seatCushions: 0,
        tile: 0,
        tileSealant: 0,
        hardwoods: 0,
        hardwoodSealant: 0,
        groundDucts: 0,
        ceilingDucts: 0,
        returns: 0,
        dryerVents: 0
    }
    const rates = {
        rooms: 40,
        petRooms: 20,
        scotchRooms: 15,
        linearFeet: 19,
        chairs: 69,
        seatCushions: 5,
        tile: 0.75,
        tileSealant: 0.5,
        hardwoods: 0.75,
        hardwoodSealant: 0.5,
        groundDucts: 15,
        ceilingDucts: 25,
        returns: 75,
        dryerVents: 99
    }
    const [estimate, setEstimate] = useState(defaultEstimate)
    const [price, setPrice] = useState(0);
    const [allPet, setAllPet] = useState(false);
    const [allScotch, setAllScotch] = useState(false);

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
    useEffect(() => {
        if (estimate.rooms >= estimate.petRooms && estimate.rooms >= estimate.scotchRooms) {
            console.log("before:", estimate.rooms, estimate.petRooms)
            const rateArray = Object.entries(rates);
            const total = rateArray.reduce((acc: number, rate: [string, number]): number => {
                let minimum = 0;
                let special = 0;
                let current = estimate[rate[0] as keyof Estimate];
                if (current < 0) current = 0;
    
                if (rate[0] === 'rooms') {
                    if (current > 0 && current < 5) {
                        minimum = 149;
                        current = current - 2 > 0 ? current - 2 : 0;
                    }
                    if (current >= 5) {
                        special = 269;
                        minimum = 0
                        current -= 5
                    }
                }
    
                if (rate[0] === 'petRooms') {
                    if (current > 0 && current < 2) {
                        minimum = 40;
                        current = 0;
                    }
                }
    
                if (rate[0] === 'scotchRooms') {
                    if (current > 0 && current < 2) {
                        minimum = 30;
                        current = 0;
                    }
                }
                return acc += current * rate[1] + minimum + special;
            }, 0)
            console.log("after:", estimate.rooms, estimate.petRooms)
            setPrice(total)
        } else if (estimate.rooms < estimate.petRooms) {
            setEstimate({...estimate, 'petRooms': estimate.rooms})
        } else if (estimate.rooms < estimate.scotchRooms) {
            setEstimate({...estimate, 'scotchRooms': estimate.rooms})
        }
    }, [estimate])

    useEffect(() => {
        if (allPet && estimate.rooms !== estimate.petRooms) setEstimate({...estimate, 'petRooms': estimate.rooms})
    }, [allPet, estimate])
    useEffect(() => {
        if (allScotch && estimate.rooms !== estimate.scotchRooms) setEstimate({...estimate, 'scotchRooms': estimate.rooms})
    }, [allScotch, estimate])
    return (
        <section className={styles.estimater}>
            <form>
                <h2>Carpets</h2>
                <div className={styles.formRow}>
                    <h3>ROOMS / AREAS</h3>
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
            </form>
            <div className={styles.price}>TOTAL: ${price}</div>
        </section>
    )
}

export default Estimater;