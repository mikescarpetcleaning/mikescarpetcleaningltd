import type { NextPage } from "next";
import Head from "next/head";
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
        "We use a 4 step method to treat and remove all the dirt and stains from your carpet. Prespray, dwell, agitation, and extraction. This tried and true cleaning system is the number one recommended carpet cleaning method by top carpet manufacturers.",
      pricing: `
        <div class="pricing-box">
        <p class="bold">Any 5 Rooms/Areas only $269</p>
        <p>Additional Rooms/Areas: $40 (Each)</p>
        <p>Minimum Charge: $149 (Up to 2 Rooms/Areas)</p>
        <p>An area is defined as a room, staircase or hallway. Living room and dining room combos and large bonus rooms are equal to two areas. Some L-shaped hallways can be considered 2 areas. Max 15x15 ft or 225 sq ft per room/area.</p>
        <p class="disclaimer">*Travel charge may be added for out of service area jobs</p>
        <p class="disclaimer">*Minimum charge of $149 applies to all apointments</p>
        </div>`,
      imgSrc: "/carpets-service.webp",
      alt: "Freshly cleaned carpets",
      cta: `<a style="width:100%;height:100%" href="commercial" class="subitem-cta">See Our Commercial Rates</a>`,
    },
    {
      subHeading: "Pet Urine, Stain & Odor Treatment",
      process: `​Over time, pet urine on your carpeting gets absorbed and sink to the 
      bottom where the liquid will evaporate until all that is left is the pungent 
      odor. This odor will be hard to remove with just simple at home cleaning. 
      We have commercial grade cleaning products that can eleminate pet orders and stains`,
      pricing: `
        <div class="pricing-box">
        <p class="bold">$25.00 Per Area*</p>
        <p class="disclaimer">*2 area minimum</p>
        <p class="disclaimer">*Must include purchase of carpet cleaning</p>
        </div>`,
      imgSrc: "/pet.webp",
      alt: "Dog licking a cat",
    },
    {
      subHeading: "ScotchGard Carpet Protectant",
      process: `Scotchgard will be applied
        after cleaning, on all traffic
        areas that have been cleaned.
        
        Over 1 billion pounds of carpet
        are thrown away every year.
        Protect your investment and
        keep your carpets looking
        fresh longer by having them
        cleaned regularly and treated
        with Scotchgard protectant.`,
      pricing: `
        <div class="pricing-box">
        <p class="bold">$15.00 Per Area*</p>
        <p class="disclaimer">*2 area minimum</p>
        <p class="disclaimer">*Must include purchase of carpet cleaning</p>
        </div>`,
      imgSrc: "/scotch.webp",
      alt: "Man spilling his coffee",
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
      process:
        "We can give your couch the same amazing truckmounted steam cleaning as well. We also offer low moisture cleaning options for more sensitive materials.",
      pricing: `
        <div class="pricing-box">
        <p><span class="bold">Sofa/Couch:</span> $20.00 per linear foot</p>
       
        <p><span class="bold">Loveseat:</span> $20.00 per linear foot</p>
       
        <p><span class="bold">Chair:</span> $69.00</p>
       
        <p><span class="bold">Sectional:</span> $20.00 per linear foot</p>
        <p class="disclaimer">*Minimum charge of $149 applies to all apointments</p>
        </div>`,
      imgSrc: "/upholstery.webp",
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
      process:
        "We start by spraying down the area with a high-powered, non-toxic cleaning agent. After some dwell time we use a spinning 1000 PSI jet to remove the dirt and water. Dries in minutes and leaves tile and grout looking brand new.",
      pricing: `
        <div class="pricing-box">
        <p><span class="bold">Cleaning:</span> $0.75 per sq. ft.*</p>
       
        <p><span class="bold">Sealant:</span> $0.50 per sq. ft.*</p>
       
        <p class="disclaimer">*100 sq ft. minimum</p>
        <p class="disclaimer">*Sealant must include purchase of tile cleaning</p>
        <p class="disclaimer">*Minimum charge of $149 applies to all apointments</p>
        </div>`,
      imgSrc: "/brtiles.webp",
      alt: "Modern tiled bathroom",
    },
    {
      subHeading: "Hardwood Cleaning",
      process:
        "We use an all-in-one cleaning unit combined with a delicate balance of wood cleaning products. Our process will never harm or swell your wood floors and is the most effective wood cleaning system on the market.",
      pricing: `
        <div class="pricing-box">
        <p><span class="bold">Hardwood Floor Cleaning:</span> $0.75 per sq. ft.*</p>
       
        <p><span class="bold">Preservation Finish:</span> $0.50 per sq. ft.*</p>
       
        <p class="disclaimer">*100 sq ft. minimum</p>
        <p class="disclaimer">*Preservation finish must include purchase of hardwood cleaning</p>
        <p class="disclaimer">*Minimum charge of $149 applies to all apointments</p>
        </div>`,
      imgSrc: "/wood.webp",
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
        <title>Pricing For Carpet, Tile, and Upholstery Cleaning | Excel</title>
        <link rel="shortcut icon" type="image/x-icon" href="/logo.webp" />
        <link
          rel="canonical"
          href="https://www.excelcarpetcleaningwa.com/services"
        />
        <meta
          property="og:site_name"
          content="Excel Carpet Cleaning Services"
        />
        <meta
          property="og:title"
          content="Pricing For Carpet, Tile, and Upholstery Cleaning | Excel"
        />
        <meta
          property="og:url"
          content="https://www.excelcarpetcleaningwa.com/services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="195" />
        <meta
          itemProp="name"
          content="Pricing For Carpet, Tile, and Upholstery Cleaning | Excel"
        />
        <meta
          itemProp="url"
          content="https://www.excelcarpetcleaningwa.com/services"
        />
        <meta
          name="twitter:title"
          content="Pricing For Carpet, Tile, and Upholstery Cleaning | Excel"
        />
        <meta
          name="twitter:image"
          content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"
        />
        <meta
          name="twitter:url"
          content="https://www.excelcarpetcleaningwa.com/services"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="description"
          content="Carpet, tile, and upholstery cleaning service company serving the Washington plateau area from Maple Valley to Sammamish and beyond!"
        />
      </Head>
      <ServiceHero />
      <ServiceNav />
      <ServiceItem itemDetails={carpetList} />
      <ServiceItem itemDetails={upholsteryList} />
      <ServiceItem itemDetails={hardSurfaceList} />
      <Connect />
    </>
  );
};

export default Services;
