import type { NextPage } from 'next';
import FaqAccordion from '../faqComponents/FaqAccordion';
import Spills from '../faqComponents/Spills';
const faqs = [
    {
        question: "What areas do you service?",
        answer: `We are proud to service the following areas<br/><br/>

        · Auburn<br/>
        · Bellevue<br/>
        · Black Diamond<br/>
        · Bonney Lake<br/>
        · Buckley<br/>
        · Covington<br/>
        · Enumclaw<br/>
        · Issaquah<br/>
        · Kent<br/>
        · Lake Tapps<br/>
        · Maple Valley<br/>
        · Newcastle<br/>
        · North Bend<br/>
        · Renton<br/>
        · Sammamish<br/>
        · Snoqualmie<br/>
        · South Prairie<br/>
        · Sumner`
    },
    {
        question: "How long does it take to dry?",
        answer: "The carpets are slightly damp after cleaning, and can be walked on with clean non-marking shoes (not with bare feet) in about 30 minutes. Normal soiled carpets usually dry between 3-4 hours after cleaning."
    },
    {
        question: "How much furniture do you move?",
        answer: "We move most light furniture. Couches etc. can be moved by request."
    },
    {
        question: "How often should I get my carpets cleaned?",
        answer: `The carpet manufacturing industry recommends bi-annually cleaning with truck-mounted
        steam cleaning equipment to obtain maximum lifespan of your carpet. Professional cleaning
        does not  damage the carpet. (IICRC)`
    },
    {
        question: "Should I vacuum before cleaning?",
        answer: "Yes, it always helps to pre-vacuum. 85% of dirt in your carpets is solids."
    },
    {
        question: "What is the black around the carpet edges?",
        answer: `This is called filtration edges. It is caused by an air gap between the wall and the sub-floor.
        Sometimes the filtration edges can be removed depending on how long they have been
        there.`
    },
    {
        question: "What is the proper way to spot clean?",
        answer: `Spot cleaning can be done by spraying a mild diluted detergent on the spot, and then blot
        the spot with a clean white damp towel ( DO NOT RUB! YOU WILL DAMAGE THE CARPET
        FIBERS) Rinse out the towel and repeat as necessary.`
    },
    {
        question: "What does ScotchGard Carpet Protectant do?",
        answer: `Scotchgard puts a water resistant shield on your carpet, that helps prevent it  from
        absorbing spills that can turn into permanent stains. Scotchgard can be applied after
        cleaning for an additional charge.`
    }
]
const Faq: NextPage = () => {
    return (
        <>
            <FaqAccordion faqs={faqs} />
            <Spills />
        </>
    )
}

export default Faq;