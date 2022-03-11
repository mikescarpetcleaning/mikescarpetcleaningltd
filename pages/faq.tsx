import type { NextPage } from 'next';
import FaqAccordion from '../faqComponents/FaqAccordion';
import Spills from '../faqComponents/Spills';
const faqs = [
    {
        question: "How many carpets you clean before?",
        answer: "At least 5 carpets."
    },
    {
        question: "How many carpets you clean after?",
        answer: "At least like 2 and a half carpets."
    },
    {
        question: "How many carpets you clean today?",
        answer: "At least 3 carpets."
    },
    {
        question: "Carpets?",
        answer: "At least a lot carpets."
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