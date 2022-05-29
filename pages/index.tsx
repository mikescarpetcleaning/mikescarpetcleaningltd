import type { NextPage } from "next";
import Head from "next/head";
import Family from "../components/Family";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Why from "../components/Why";
import Frequent from "../components/Frequent";
import { useEffect } from "react";
import { Modal } from "../components/Modal";
import Easy from "../components/Easy";
import PreHero from "../components/PreHero";
import Vollara from "../components/Vollara";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Mike&apos;s Carpet Cleaning LTD</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://mikescarpetcleaningltd.com" />
        <meta
          property="og:site_name"
          content="Mike&apos;s Carpet Cleaning LTD"
        />
        <meta property="og:title" content="Mike&apos;s Carpet Cleaning LTD" />
        <meta
          property="og:url"
          content="https://mikescarpetcleaningltd.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="195" />
        <meta itemProp="name" content="Mike&apos;s Carpet Cleaning LTD" />
        <meta itemProp="url" content="https://mikescarpetcleaningltd.com" />
        <meta name="twitter:title" content="Mike&apos;s Carpet Cleaning LTD" />
        <meta
          name="twitter:image"
          content="/logo.webp"
        />
        <meta
          name="twitter:url"
          content="https://mikescarpetcleaningltd.com"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="description"
          content="Carpet, tile, and upholstery cleaning service company serving the Northwest from Snohomish to Shoreline and beyond!"
        />
      </Head>
      <PreHero />
      <Hero />
      <Easy />
      <Vollara />
      <Why />
      <Family
        image="/skyscrape.webp"
        mobileImage="/skyscrape.webp"
        alt="Large skyscrapers photographed from below"
        heading1="Commercial Carpet"
        heading2="Cleaning Specialists"
        body="We offer professional building cleaning of commercial carpet, upholstery, 
        tile and hardwood cleaning for small to large size office space and buildings. 
        We understand impressing your clients and a clean healthy working environment 
        for your employees is key to the success of your business."
      />
      <Reviews />
      <Family
        image="/thumbup.webp"
        mobileImage="/thumbsup.webp"
        alt="baby and dog playing on carpet"
        heading1="Powerful Clean,"
        heading2="No Harmful Chemicals"
        body='Over 95% of our cleaning detergents and rinses are "Green" labeled, designed 
        to leave your carpets residue free, family safe and Eco friendly. The remaining 
        5% of products are rarely used in small quantities for specific tough to treat 
        problems such as synthetic stains, rust, ink and fingernail polish and are extracted 
        from your carpets.'
      />
      <style>{`.announce{ display: none }`}</style>
      <style>{`
      @media screen and (min-width: 1200px) {
        .docked {
          background: var(--yellow) !important;
          height: 54px !important;
          padding: 0 !important;
          box-shadow: 0 0 0 rgba(0,0,0,0) !important;
        }
        .docked > :nth-child(2) {
          width: 0;
          height: 0;
        }
        .docked > :nth-child(4) {
          margin-left: 210px;
          justify-content: center;
        }
        .docked > :nth-child(5) {
          width: 0;
          height: 0;
          opacity: 0;
        }
      }
      `}</style>
    </>
  );
};

export default Home;
