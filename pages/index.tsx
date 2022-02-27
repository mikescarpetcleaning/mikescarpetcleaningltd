import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Announcement from '../components/Announcement'
import Family from '../components/Family'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Reviews from '../components/Reviews'
import Why from '../components/Why'
import Frequent from '../components/Frequent'
import Newsletter from '../components/Newsletter'
import { useEffect } from 'react'

const Home: NextPage = () => {
  class Modal {
    content: string;
    mount: HTMLElement | null;
    //close: HTMLElement;
    body: HTMLElement | null;
    contentContainer: HTMLElement;

    constructor(content: string, container: string) {
      this.content = content;
      this.mount = document.querySelector(container);
      this.contentContainer = document.createElement("div");
      this.contentContainer.classList.add("content-container")
      this.body = document.querySelector("body");
      this.mount?.appendChild(this.contentContainer);
      this.mount?.addEventListener("click", (e) => {
        if (!this.contentContainer.contains(e.target as Node)) {
          this.closeModal();
        }
      })
      
    }
    openModal() {
      if (this.mount) {
        this.contentContainer.innerHTML = this.content;

        const closeBtn = document.createElement("div");
        closeBtn.innerHTML = `&#10005;`;
        closeBtn.classList.add("close-btn");
        this.contentContainer?.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
          this.closeModal();
        })
        this.mount.classList.add("modal-open");
        this.body!.style.overflow = "hidden";
      }
    }
    closeModal() {
      if (this.mount) {
        this.mount.classList.remove("modal-open");
        this.body!.style.overflow = "unset";
      }
    }
  }
  useEffect(() => {
    const contactForm = `
      <div class="contact-form">
        <h2>HAVE A QUESTION?</h2>
        <p style="font-size:20px;line-height:1;margin:12px auto">We have answers.</p>
        <form>
          <label for="email">Email Address</label>
          <input name="email" />
          <label for="name">Name</label>
          <input name="name" />
          <label for="message">Message</label>
          <textarea name="message"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
        <a class="skip-to-contact" href="/contact">VIEW CONTACT PAGE</p>
      </div>
      `;
    const contactModal = new Modal(contactForm, ".contact-modal");
    const contact = document.querySelector(".contactFlag")
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 120) {
        contact?.classList.add("fixed-contact");
        contact?.classList.remove("goingDown");
      } else {
        contact?.classList.remove("fixed-contact");
        contact?.classList.add("goingDown");
      }
    })
    contact?.addEventListener("click", () => {
      if (window.scrollY > 120) {
        contactModal.openModal();
      }
    })
  }, [])
  return (
    <>
      <div className="contact-modal"></div>
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
      <Frequent />
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
        <Newsletter />
    </>

  )
}

export default Home
