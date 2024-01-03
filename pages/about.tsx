import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Family from "../components/Family";

import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Mike&apos;s Carpet Cleaning LTD</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link
          rel="canonical"
          href="https://www.mikescarpetcleaningltd.com/about"
        />
        <meta property="og:site_name" content="Mike's Carpet Cleaning LTD" />
        <meta property="og:title" content="About Mike's Carpet Cleaning LTD" />
        <meta
          property="og:url"
          content="https://mikescarpetcleaningltd.com/about"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="195" />
        <meta itemProp="name" content="Mike's Carpet Cleaning LTD" />
        <meta
          itemProp="url"
          content="https://mikescarpetcleaningltd.com/about"
        />
        <meta name="twitter:title" content="About Mike's Carpet Cleaning LTD" />
        <meta
          name="twitter:image"
          content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"
        />
        <meta
          name="twitter:url"
          content="https://mikescarpetcleaningltd.com/about"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="description"
          content="Carpet, tile, and upholstery cleaning service company serving the Northwest from Snohomish to Shoreline and beyond!"
        />
       <script dangerouslySetInnerHTML={{__html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3007112,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}}></script>
      </Head>
      <main className={styles.about}>
        <div className={styles.flag}>
          <h1>ABOUT US</h1>
        </div>
        <div className={styles.blackFlag}>
          <h2>A passion for perfection and customer service.</h2>
        </div>
        <div className={styles.hero}>
          <Image
            src="/seattle-sky.webp"
            layout="fill"
            objectFit="cover"
            alt="vans lined up"
             
          />
        </div>
        <section className={styles.business}>
          <div className={styles.deets}>
            <div className={styles.card}>
              <h2>ABOUT OUR BUSINESS</h2>
              <p>
                Truck Mounted Steam Cleaning is the warranty approved method of
                top carpet manufacturers. The combination of proper detergents,
                rinses, heat and vacuum are key factors to properly cleaning and
                maintaining your beautiful flooring. Depending on the amount of
                traffic, use, children &amp; pets in your home, top carpet
                manufactures recommend you have your carpets Truck Mounted Steam
                Cleaned every six to eighteen months. Over 95% of our cleaning
                detergents and rinses are &quot;Green&quot; labeled, designed to leave
                your carpets residue free, family safe and Eco friendly. The
                remaining 5% of products are rarely used in small quantities for
                specific tough to treat problems such as synthetic stains, rust,
                ink and fingernail polish and are extracted from your carpets.<br/><br/>
                Our Truck Mounted Hydra Master CDS Hot Water Extractor is state of the art, clutch driven by the van
                motor, recognized as &quot;Green Cleaning&quot; as it uses less fuel &amp;
                burns cleaner than other conventional truck mounted systems.
                Heating water to 230+ degrees, the powerful van motor / clutch
                driven vacuum blower is capable of extracting 100 gallons of
                water through 2.5 inch hose up to 600 feet from the machine.
                Removing dirt, grime, grease, dander &amp; allergens more
                efficiently than other conventional systems. No other system is
                as efficient as Truck Mounted Steam Cleaning for carpets,
                upholstery, tile &amp; grout.
              </p>
            </div>
            <div className={styles.card}>
              <h2>ABOUT OUR PRODUCTS</h2>
              <p>
                Over 95% of the cleaning detergents and neutralizing rinses we use on a daily basis are Eco Green / Eco Friendly products.
              </p>
            </div>
          </div>
        </section>
        <Family
          image="/rainier.webp"
          mobileImage="/rainier.webp"
          alt="Mount rainier"
          heading1="About"
          heading2="Our Staff"
          body="Hi! We're Mike and Brenda, Local Owner Operators of Mike's Carpet Cleaning Ltd.
                As IICRC Certified Technicians, we have a passion to offer the very best in cleaning and 
                restoration of your fine flooring and fabrics. We operate the most advanced cleaning 
                systems on the market, employing state of the art equipment and education.
                We specialize in Truck Mounted Steam Cleaning - The Warranty Approved Cleaning Method of Top Carpet 
                Manufacturers. We'll treat you and and your home or facility with the utmost of respect and care.
                Plus! We're just good, fun, down to earth people!"
        />
        <div
          style={{
            height: "1px",
            width: "100%",
            background: "var(--dark)",
            boxShadow: "10px 0 20px 10px var(--dark",
          }}
        >
          &nbsp;
        </div>
      </main>
    </>
  );
};

export default About;
