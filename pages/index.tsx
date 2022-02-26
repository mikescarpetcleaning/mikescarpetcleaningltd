import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Announcement from './components/Announcement'
import Family from './components/Family'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Reviews from './components/Reviews'
import Why from './components/Why'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Why />
      <Family 
        image="/mom-and-dad.jpg" 
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
      <Family 
        image="/baby.jpg"
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
