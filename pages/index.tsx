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
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum." 
      />
      <Reviews />
      <Frequent />
      <Family 
        image="/baby.webp"
        mobileImage="/baby-mobile.webp"
        heading1="Powerful Clean,"
        heading2="No Harmful Chemicals"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum."  />
    </>

  )
}

export default Home
