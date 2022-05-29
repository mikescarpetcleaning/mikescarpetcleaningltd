import type { NextPage } from "next";
import Head from "next/head";
import Vollara from "../components/Vollara";
import Connect from "../serviceComponents/Connect";
import ServiceHero from "../serviceComponents/ServiceHero";
import ServiceItem from "../serviceComponents/ServiceItem";
import ServiceNav from "../serviceComponents/ServiceNav";

const carpetList = {
  id: "carpets",
  heading: "Carpets",
  itemDetails: [
    {
      subHeading: "Truckmounted Steam Cleaning",
      process:
        "Our Truck Mounted Steam Cleaning includes Eco-Green detergent pre-spray, edging, spot and stain removal at no additional charge, as well as a steam neutralizing rinse and extraction.",
      pricing: `
        <div class="pricing-box">
        <p class="bold">Any 2 Rooms/Areas only $145</p>
        <p>Additional Rooms/Areas: $45 (Each)</p>
        <p>An area is defined as a room, staircase or hallway up to 200 sq ft.. Living room and dining room combos are equal to 2 areas. Some Master bedrooms, bonus & living rooms can be oversized and count as 2 or more areas based on size.</p>
        <p class="disclaimer">*Travel charge may be added for out of service area jobs</p>
        <p class="disclaimer">*Minimum charge of $145 applies to all apointments</p>
        </div>`,
      imgSrc: "/carpet-with-bean-bag.webp",
      alt: "Freshly cleaned carpets",
      cta: `<a style="width:100%;height:100%" href="commercial" class="subitem-cta">See Our Commercial Rates</a>`,
    },
    {
      subHeading: "Pet Urine, Stain & Odor Treatment",
      process: `​Over time, pet urine on your carpeting gets absorbed and sink to the 
      bottom where the liquid will evaporate until all that is left is the pungent 
      odor. This odor will be hard to remove with just simple at home cleaning. 
      We have commercial grade cleaning products that can eliminate pet orders and stains`,
      pricing: `
        <div class="pricing-box">
        <p class="bold">$25.00 Per Area*</p>
        <p class="disclaimer">*2 area minimum</p>
        <p class="disclaimer">*Must include purchase of carpet cleaning</p>
        </div>`,
      imgSrc: "/pets-in-grass.webp",
      alt: "Dog and cat cuddling next to each other",
    },
    {
      subHeading: "ScotchGard Carpet Protectant",
      process: `Protectant is applied after the carpets are cleaned, still damp and groomed with a Grandee Groomer. Carpet protectant restores the stain guard effect to your carpets, repels spills for easier cleanup, does not change the look or feel of your carpet, and is ideal for high-traffic areas. Highly recommended!`,
      pricing: `
        <div class="pricing-box">
        <p class="bold">$20.00 Per Area*</p>
        <p class="disclaimer">*2 area minimum</p>
        <p class="disclaimer">*Must include purchase of carpet cleaning</p>
        </div>`,
      imgSrc: "/paint-brush.webp",
      alt: "Paint brush running across wall",
    },
  ],
  ctaText: "Book Carpet Cleaning",
};
const upholsteryList = {
  id: "upholstery",
  heading: "Upholstery",
  itemDetails: [
    {
      subHeading: "Upholstery Cleaning",
      process: "A clean that can keep your furniture looking new for years to come! We take great care in properly cleaning upholstered furniture. Upholstered furniture without tags describing the materials used may not be cleaned due to possible damage to the fabric.",
      pricing: `
        <div class="pricing-box">
        <p><span class="bold">Sofa/Couch:</span> starting at $20.00 per linear foot</p>
       
        <p><span class="bold">Loveseat:</span> starting at $20.00 per linear foot</p>
       
        <p><span class="bold">Sectional:</span> starting at $20.00 per linear foot</p>

        <p><span class="bold">Mattress:</span> starting at $99.00</p>

        <p><span class="bold">Chair:</span> starting at $69.00</p>

        <p><span class="bold">Ottoman:</span> starting at $32.00</p>

        <p><span class="bold">Cushions:</span> starting at $7.00 each</p>
        
        <p class="disclaimer">*Different fabrics may require different processes and amounts of labor, price may be adjusted accordingly at the technicians discretion.</p>
        <p class="disclaimer">*We do not clean foam mattresses.</p>
        <p class="disclaimer">*Minimum charge of $145 applies to all apointments</p>
        </div>`,
      imgSrc: "/couch.webp",
      alt: "Nice arm chair in yellow",
    },
  ],
  ctaText: "Book Upholstery Cleaning",
};
const hardSurfaceList = {
  id: "hard-surfaces",
  heading: "Hard Surfaces",
  itemDetails: [
    {
      subHeading:
        "Tile and Grout Cleaning <span class='smaller'>(floors only)</span>",
      process: "We use a high pressure water spinner to give your tile an unmatched clean. The powerful detergent, high powered jets, and incredible vacuum can make even the oldest tile look brand new.",
      pricing: `
        <div class="pricing-box">
        <p><span class="bold">Cleaning:</span> $1/sqft. for first 500 square feet, $0.75/sqft. after 500 square feet</p>
              
        <p class="disclaimer">*145 sq ft. minimum</p>
        <p class="disclaimer">*Sealant must include purchase of tile cleaning</p>
        <p class="disclaimer">*Minimum charge of $145 applies to all apointments</p>
        </div>`,
      imgSrc: "/tile-floor.webp",
      alt: "Modern tiled bathroom",
    },
    {
      subHeading: "Hardwood Floor Cleaning",
      process:"Hardwood floor cleaning applies only to solid wood floors with Swedish finish. Cleaning includes detergent pre treatment, agitation, rinse & extraction of detergent & application of a luster enhancer.",
      pricing: `
        <div class="pricing-box">
        <p><span class="bold">Cleaning:</span> $1/sqft. for first 500 square feet, $0.75/sqft. after 500 square feet</p>
       
        <p><span class="bold">Preservation Finish:</span> $0.50/sqft.</p>
       
        <p class="disclaimer">*145 sq ft. minimum</p>
        <p class="disclaimer">*Preservation finish must include purchase of hardwood cleaning</p>
        <p class="disclaimer">*Minimum charge of $145 applies to all apointments</p>
        </div>`,
      imgSrc: "/hardwood-floor.webp",
      alt: "Very clean hardwood floors",
    },
  ],
  ctaText: "Book Hard Surface Cleaning",
};
const Services: NextPage<any> = (props: any) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pricing For Carpet, Tile, and Upholstery Cleaning | Mikes Carpet Cleaning LTD</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link
          rel="canonical"
          href="https://mikescarpetcleaningltd.com/services"
        />
        <meta
          property="og:site_name"
          content="Mikes Carpet Cleaning LTD"
        />
        <meta
          property="og:title"
          content="Pricing For Carpet, Tile, and Upholstery Cleaning | Mikes Carpet Cleaning LTD"
        />
        <meta
          property="og:url"
          content="https://mikescarpetcleaningltd.com/services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="195" />
        <meta
          itemProp="name"
          content="Pricing For Carpet, Tile, and Upholstery Cleaning | Mikes Carpet Cleaning LTD"
        />
        <meta
          itemProp="url"
          content="https://mikescarpetcleaningltd.com/services"
        />
        <meta
          name="twitter:title"
          content="Pricing For Carpet, Tile, and Upholstery Cleaning | Mikes Carpet Cleaning LTD"
        />
        <meta
          name="twitter:image"
          content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"
        />
        <meta
          name="twitter:url"
          content="https://mikescarpetcleaningltd.com/services"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="description"
          content="Carpet, tile, and upholstery cleaning service company serving the Northwest from Snohomish to Shoreline and beyond!"
        />
      </Head>
      <ServiceHero />
      <ServiceNav />
      <ServiceItem itemDetails={carpetList} />
      <ServiceItem itemDetails={upholsteryList} />
      <ServiceItem itemDetails={hardSurfaceList} />
      <Vollara />
    </>
  );
};

export default Services;
