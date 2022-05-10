import type { NextPage } from 'next';
import Head from 'next/head';
import FaqAccordion from '../faqComponents/FaqAccordion';
import Spills from '../faqComponents/Spills';
const faqs = [
    {
        question: "What areas do you service?",
        answer: `We are proud to service the following areas<br/><br/>

        · Snohomish<br/>
        · Monroe<br/>
        · Lake Stevens<br/>
        · Everett<br/>
        · Marysville<br/>
        · Bothell<br/>
        · Lynnwood<br/>
        · Woodinville<br/>
        · Mukilteo<br/>
        · Startup<br/>
        · Granite Falls<br/>
        · Mill Creek<br/>
        · Edmonds<br/>
        · Arlington<br/>
        · Kenmore<br/>
        · Mountlake Terrace<br/>
        · Duvall<br/>
        · Kirkland<br/>
        · Clinton<br/>
        · Redmond<br/>
        · Langley<br/>
        · Seattle`
    },
    {
        question: "How long to carpets take to dry?",
        answer: "The carpets are slightly damp after cleaning, and can be walked on with clean non-marking shoes (not with bare feet) in about 30 minutes. Normal soiled carpets usually dry between 3-4 hours after cleaning. Keeping room temperature at or above 65 degree's, cracking windows slightly open to allow moisture to escape outside and running fans to move the moisture in the air will shorten the time needed to dry."
    },
    {
        question: "Should I vacuum before cleaning?",
        answer: "Yes, it always helps to pre-vacuum. 85% of dirt in your carpets is solids."
    },
    {
        question: "How much furniture do you move?",
        answer: "We move most light furniture. We do ask that you be responsible in moving collectables and personal items from small furniture. Couches etc. can be moved by request. We do not move large furniture such as beds, dressers, hutches, sideboards, exercise equipment etc."
    },
    {
        question: "How often should I get my carpets cleaned?",
        answer: "The carpet manufacturing industry recommends bi-annually cleaning with truck-mounted steam cleaning equipment to obtain maximum lifespan of your carpet. Professional cleaning does not  damage the carpet. (IICRC)"
    },
    {
        question: "What is the black around the carpet edges?",
        answer: "This is called filtration edges. It is caused by an air gap between the wall and the sub-floor. Sometimes the filtration edge stains can be removed depending on how long they have been there though this is a time-consuming tedious process that is generally double to cost of cleaning per room. Painted Base boards made of MDF can also be damaged in this process therefore we do not offer this service."
    },
    {
        question: "What is the proper way to spot clean?",
        answer: "Spot cleaning can be done by spraying a mild diluted detergent on the spot, and then blot the spot with a clean white damp towel ( DO NOT RUB! YOU WILL DAMAGE THE CARPET FIBERS) Rinse out the towel and repeat as necessary ."
    },
    {
        question: "What does ScotchGard Carpet Protector do?",
        answer: "ScotchGard puts a water resistant shield on your carpet, that helps prevent it from absorbing spills that can turn into permanent stains. ScotchGard should be applied and groomed after cleaning."
    }
]
const Faq: NextPage = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <title>Frequently Asked Carpet Cleaning Questions</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="canonical" href="https://www.excelcarpetcleaningwa.com/faq"/>
                <meta property="og:site_name" content="Mike&apos;s Carpet Cleaning LTD"/>
                <meta property="og:title" content="Frequently Asked Carpet Cleaning Questions"/>
                <meta property="og:url" content="https://www.excelcarpetcleaningwa.com/faq"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image:width" content="1500"/>
                <meta property="og:image:height" content="195"/>
                <meta itemProp="name" content="Frequently Asked Carpet Cleaning Questions"/>
                <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com/faq"/>
                <meta name="twitter:title" content="Frequently Asked Carpet Cleaning Questions"/>
                <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
                <meta name="twitter:url" content="https://www.excelcarpetcleaningwa.com/faq"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="description" content="Carpet, tile, and upholstery cleaning service company serving the Washington plateau area from Maple Valley to Sammamish and beyond!"/>
            </Head>
            <FaqAccordion faqs={faqs} />
            <Spills />
        </>
    )
}

export default Faq;