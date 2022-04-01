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
