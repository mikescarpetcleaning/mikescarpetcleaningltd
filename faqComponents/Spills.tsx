import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';


import styles from "../faqStyles/Spills.module.css";

const Spills: FC = () => {
    const spotMenu = useRef<any>(null);
    const spotItems = useRef<any>(null);
    const spotImages = useRef<any>(null);

    const open = (index: number) => {
        const menuItems = Array.from(spotMenu.current.children);
        menuItems.forEach((i: any, loopIndex: number) => {
            i.classList.remove("active-spot");
            spotItems.current.children[loopIndex].classList.remove("active-spot");
            spotImages.current.children[loopIndex].style.opacity = "0";
        })
        spotMenu.current.children[index]?.classList.add("active-spot");
        spotItems.current.children[index].classList.add("active-spot");
        spotImages.current.children[index].style.opacity = "1";
    }

    useEffect(() => {
        open(0)
    }, [])
    return ( 
        <section className={styles.spills}>
            <div className={styles.flag}>
                <h1>COMMON SPOT CLEANING TIPS</h1>
            </div>
            <div className={styles.left}>
                <div ref={spotImages} className={styles.imageContainer}>
                    <Image src="/wine.webp" layout="fill" objectFit="cover" />
                    <Image src="/candle-wax.webp" layout="fill" objectFit="cover" />
                    <Image src="/wine.webp" layout="fill" objectFit="cover" />
                    <Image src="/candle-wax.webp" layout="fill" objectFit="cover" />
                </div>
                <ul ref={spotMenu}>
                    <li className="menu-item active-spot" onClick={() => open(0)}>Red Wine</li>
                    <li className="menu-item" onClick={() => open(1)}>Candle Wax</li>
                    <li className="menu-item" onClick={() => open(2)}>Red Wine</li>
                    <li className="menu-item" onClick={() => open(3)}>Candle Wax</li>
                </ul>
            </div>
            <div ref={spotItems} className={styles.right}>
                <p className="active-spot">
                    Blot the spill with paper towels or a clean cloth. 
                    Combine 1 teaspoon carpet shampoo (or dish soap, like Dawn) 
                    and 1 cup hydrogen peroxide in a small bowl. Soak a clean 
                    sponge in the mixture, squeeze it halfway dry, then gently 
                    blot the stain. Continue until the stain lifts. Sponge 
                    the stained area with warm water. Blot dry with a clean 
                    cloth or paper towels.
                </p>
                <p>
                    sdf the spill asdf paper towels or a asdf cloth. 
                    Combine 1 teaspoon asdfa asdf (or dish soap, like asdf) 
                    and 1 asdf asdf peroxide in a small adsf. Soak a clean 
                    asdf in the mixture, asdf it fds dry, asd asdfdsa 
                    blot the stain. asdf until the stain lifts. Sponge 
                    the asdf asdf with warm water. Blot dry asdf a clean 
                    cloth or paper towels.
                </p>
                <p>
                    Blot the spill with paper towels or a clean cloth. 
                    Combine 1 teaspoon carpet shampoo (or dish soap, like Dawn) 
                    and 1 cup hydrogen peroxide in a small bowl. Soak a clean 
                    sponge in the mixture, squeeze it halfway dry, then gently 
                    blot the stain. Continue until the stain lifts. Sponge 
                    the stained area with warm water. Blot dry with a clean 
                    cloth or paper towels.
                </p>
                <p>
                    sdf the spill asdf paper towels or a asdf cloth. 
                    Combine 1 teaspoon asdfa asdf (or dish soap, like asdf) 
                    and 1 asdf asdf peroxide in a small adsf. Soak a clean 
                    asdf in the mixture, asdf it fds dry, asd asdfdsa 
                    blot the stain. asdf until the stain lifts. Sponge 
                    the asdf asdf with warm water. Blot dry asdf a clean 
                    cloth or paper towels.
                </p>
            </div>
        </section>
    )
}

export default Spills;