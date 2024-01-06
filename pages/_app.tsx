import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove("hidden")
        }
      })
    }, {threshold: 0})
    const sections = document.querySelectorAll("#__next > *");
    sections.forEach(section => section.classList.add('hidden'))
    sections.forEach(section => observer.observe(section))
  })
  return (
    <Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11464544016" />
      <Script src="/googleDataLayer.js" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
