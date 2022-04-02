import type { NextPage } from 'next'
import Head from 'next/head'
import Family from '../components/Family'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Why from '../components/Why'
import Frequent from '../components/Frequent'
import { useEffect } from 'react'
import { Modal } from '../components/Modal'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>Excel Carpet Cleaning Services</title>
        <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5f28d64858759f2fc1e07652/e776c5a2-1be6-459f-8947-7534111b93d0/favicon.ico?format=100w"/>
        <link rel="canonical" href="https://www.excelcarpetcleaningwa.com"/>
        <meta property="og:site_name" content="Excel Carpet Cleaning Services"/>
        <meta property="og:title" content="Excel Carpet Cleaning Services"/>
        <meta property="og:url" content="https://www.excelcarpetcleaningwa.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image:width" content="1500"/>
        <meta property="og:image:height" content="195"/>
        <meta itemProp="name" content="Excel Carpet Cleaning Services"/>
        <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com"/>
        <meta name="twitter:title" content="Excel Carpet Cleaning Services"/>
        <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
        <meta name="twitter:url" content="https://www.excelcarpetcleaningwa.com"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="description" content="Carpet, Tile, and Upholstery cleaning service company serving the washington plateau area from maple valley to sammamish and beyond!"/>
      </Head>
      <Hero />
      <Why />
      <Family 
        image="/mom-and-dad.webp" 
        mobileImage="/parentals-mobile.webp"
        heading1="Family Owned"
        heading2="And Operated"
        body="Mike and Mary founded Excel Carpet Cleaning back in 1991.
        A passion for perfection and a dedication to their craft has given way 
        to a lifetime of quality service and satisfied customers. 30 years ago we
        set our minds on one simple goal. Provide the best clean that the industry 
        has to offer. Fast forward to now and we have cleaned millions of square 
        feet of carpet for thousands of customers. We look forward to serving you soon!" 
      />
      <Reviews />
      <Frequent />
      <Family 
        image="/baby.webp"
        mobileImage="/baby-mobile.webp"
        heading1="Powerful Clean,"
        heading2="No Harmful Chemicals"
        body="All of our cleaning products are not only extremely effective, but also 
        safe for you, your family, and your pets! Years of research and testing have 
        lead to the ultimate arsenal of cleaning agents. We are spot cleaning masters 
        and we have a treatment for every spot and stain that you may come across. Our cleaning 
        products are safe for you and the environment and our extraction method leaves behind 
        no residue. You can rest easy knowing that your home is both clean and safe!"  />
    </>

  )
}

export default Home
