import type { NextPage } from 'next';
import ServiceHero from "../serviceComponents/ServiceHero";
import ServiceItem from '../serviceComponents/ServiceItem';
import ServiceNav from "../serviceComponents/ServiceNav";

const carpetList = {
    id: "carpets",
    heading: "Carpets",
    itemDetails: [{
        subHeading: "Truckmounted Steam Cleaning",
        process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">Any 5 Rooms/Areas only $259</p>
        <p>Additional Rooms/Areas / Area Rugs: $45 (Each)</p>
        <p>Minimum Charge: $169 (Up to 3 Rooms/Areas)</p>
        <p>An area is defined as a room, staircase or hallway. Living room and dining room combos  and large bonus rooms equal two areas. Max 14x14 ft per room/area.</p>
        </div>`,
        imgSrc: "/carpet-home.jpg",
        cta: `<a href="commercial-rates" class="subitem-cta">See Our Commercial Rates</a>`
    },
    {
        subHeading: "Pet Treatment",
        process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">Any 5 Rooms/Areas only $259</p>
        <p>Additional Rooms/Areas / Area Rugs: $45 (Each)</p>
        <p>Minimum Charge: $169 (Up to 3 Rooms/Areas)</p>
        <p>An area is defined as a room, staircase or hallway. Living room and dining room combos  and large bonus rooms equal two areas. Max 14x14 ft per room/area.</p>
        </div>`,
        imgSrc: "/carpet-home.jpg"
    },
    {
        subHeading: "ScotchGard Carpet Protectant",
        process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">Any 5 Rooms/Areas only $259</p>
        <p>Additional Rooms/Areas / Area Rugs: $45 (Each)</p>
        <p>Minimum Charge: $169 (Up to 3 Rooms/Areas)</p>
        <p>An area is defined as a room, staircase or hallway. Living room and dining room combos  and large bonus rooms equal two areas. Max 14x14 ft per room/area.</p>
        </div>`,
        imgSrc: "/carpet-home.jpg"
    }],
    ctaText: "Book Carpet Cleaning"
}
const upholsteryList = {
    id: "upholstery",
    heading: "Upholstery",
    itemDetails: [{
        subHeading: "Couch",
        process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">Any 5 Rooms/Areas only $259</p>
        <p>Additional Rooms/Areas / Area Rugs: $45 (Each)</p>
        <p>Minimum Charge: $169 (Up to 3 Rooms/Areas)</p>
        <p>An area is defined as a room, staircase or hallway. Living room and dining room combos  and large bonus rooms equal two areas. Max 14x14 ft per room/area.</p>
        </div>`,
        imgSrc: "/carpet-home.jpg",
        cta: `<a href="commercial-rates" class="subitem-cta">See Our Commercial Rates</a>`
    },
    {
        subHeading: "Loveseat",
        process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">Any 5 Rooms/Areas only $259</p>
        <p>Additional Rooms/Areas / Area Rugs: $45 (Each)</p>
        <p>Minimum Charge: $169 (Up to 3 Rooms/Areas)</p>
        <p>An area is defined as a room, staircase or hallway. Living room and dining room combos  and large bonus rooms equal two areas. Max 14x14 ft per room/area.</p>
        </div>`,
        imgSrc: "/carpet-home.jpg"
    },
    {
        subHeading: "etc.",
        process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">Any 5 Rooms/Areas only $259</p>
        <p>Additional Rooms/Areas / Area Rugs: $45 (Each)</p>
        <p>Minimum Charge: $169 (Up to 3 Rooms/Areas)</p>
        <p>An area is defined as a room, staircase or hallway. Living room and dining room combos  and large bonus rooms equal two areas. Max 14x14 ft per room/area.</p>
        </div>`,
        imgSrc: "/carpet-home.jpg"
    }],
    ctaText: "Book Upholstery Cleaning"
}

const Services: NextPage<any> = (props: any) => {
    return (
        <>
            <ServiceHero />
            <ServiceNav />
            <ServiceItem itemDetails={carpetList} />
            <ServiceItem itemDetails={upholsteryList} />
        </>
    )
}

export default Services;