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
                <h2>COMMON SPOT CLEANING TIPS</h2>
            </div>
            <div className={styles.left}>
                <div ref={spotImages} className={styles.imageContainer}>
                    <Image src="/candle-wax.webp" layout="fill" objectFit="cover" />
                    <Image src="/coffee-1.webp" layout="fill" objectFit="cover" />
                    <Image src="/coffee-2.webp" layout="fill" objectFit="cover" />
                    <Image src="/wine.webp" layout="fill" objectFit="cover" />
                </div>
                <ul ref={spotMenu}>
                    <li className="menu-item active-spot" onClick={() => open(0)}>Candle Wax</li>
                    <li className="menu-item" onClick={() => open(1)}>Coffee (Carpets)</li>
                    <li className="menu-item" onClick={() => open(2)}>Coffee (Upholstery)</li>
                    <li className="menu-item" onClick={() => open(3)}>Red Wine</li>
                </ul>
            </div>
            <div ref={spotItems} className={styles.right}>
                <p className="active-spot">
                    Let the wax harden, then scrap off the excess with a dull knife, fork or spoon.
                    Place part of a paper bag, a sheet of newspaper, paper towels, or a clean cloth over the
                    wax. Using a warm iron, press gently on the paper bag. Be careful not to leave the iron in one
                    place too long or you may burn the carpet fibers. The paper bag will soak up the melted wax.
                    Use a new paper bag as often as necessary until you get all of the wax. This can take some
                    time. Put an ice cube or two on the wax to freeze it, leaving them there for a minute. This
                    should harden the wax enough to break it up and get more of it out.
                    To remove stains left from colored wax, try gently dabbing the stain with a rag dampened
                    with rubbing alcohol. Be sure to use the clear alcohol, not the colored ones. If the alcohol
                    doesn't do the trick, you can try using dry cleaning solvent.
                    When done removing the candle wax out of the carpet, rinse the area with clean water. Blot
                    up the excess water, and dry the area quickly. A fan can help with this. Quick drying
                    prevents any of the dye stains deeper down from wicking up of the surface.
                </p>
                <p>
                    Blot up as much of the spilled coffee as possible. Use plain water or mix one tablespoon of
                    liquid  dishwashing detergent and one tablespoon of white vinegar with two cups of warm
                    water. Using a clean white cloth, sponge the stain with plain water or the detergent/
                    vinegar solution. Apply a little bit at a time, blotting frequently with a dry cloth until the stain
                    disappears. If using a detergent/vinegar solution, sponge with cold water and blot dry to
                    remove the solution.<br/><br/>
                    If there’s cream (or milk) in the coffee that caused the stain, be sure to use an enzyme
                    laundry detergent when washing the stained item.
                </p>
                <p>
                    Mix one tablespoon of liquid dishwashing detergent with two cups of cool water. 
                    Using a clean white cloth, sponge the stain with the detergent solution.
                    Blot until the liquid is absorbed. Repeat Steps 2 and 3 until the stain disappears.
                    Sponge with cold water and blot dry. 
                    Or, using a clean white cloth,  sponge the stain with a dry-cleaning solvent.
                    Blot until the solvent is absorbed. Repeat Steps 1 and 2 until the stain disappears.
                </p>
                <p>
                    Blot the spill with paper towels or a clean cloth. Combine 1 teaspoon carpet shampoo (or
                    dish soap, like Dawn) and 1 cup hydrogen peroxide in a small bowl. Soak a clean sponge in
                    the mixture, squeeze it halfway dry, then gently blot the stain. Continue until the stain lifts.
                    Sponge the stained area with warm water. Blot dry with a clean cloth or paper towels.
                </p>
            </div>
        </section>
    )
}

export default Spills;