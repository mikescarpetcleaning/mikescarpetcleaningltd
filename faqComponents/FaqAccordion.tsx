import { FC, useEffect, useRef } from 'react';

import styles from "../faqStyles/Accordion.module.css";

const FaqAccordion: FC<any> = ({ faqs }: any) => {
    const accordion = useRef<any>(null);

    const open = ({ target }: any) => {
        const items = Array.from(accordion.current.children);
        items.forEach((i: any) => {
            if (target !== i.children[0]) {
                i.children[1].style.maxHeight = "0px"
                i.classList.remove("open");
            }
        });
        if (target.nextElementSibling) {
            if (target.nextElementSibling.style.maxHeight === "0px" || target.nextElementSibling.style.maxHeight === "" ) {
                target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + 'px';
                target.parentNode.classList.add("open");
            } else {
                target.nextElementSibling.style.maxHeight = '0px';
                target.parentNode.classList.remove("open");
            }
        }
    }
    useEffect(() => {

    }, [])
    return (
        <section className={styles.faqAccordion}>
            <div className={styles.left}>
                <div className={styles.flag}>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <ul ref={accordion} className={styles.accordion}>
                    {faqs && faqs.map((faq: any, index: number) => {
                        return (
                            <li key={index} onClick={open} className={styles.item}>
                                <h2 className="question">
                                    {faq.question}
                                </h2>
                                <div className="answer">
                                    <p dangerouslySetInnerHTML={{__html: faq.answer}}></p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default FaqAccordion;