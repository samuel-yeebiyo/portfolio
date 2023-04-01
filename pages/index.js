import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//conponents
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Background from '../components/Background/Background'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Skills from '../components/Skills/Skills'


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{scrollBehavior:'smooth'}} id={"main"}>
        <Navbar/>
        <div className={styles.content}>
          <Hero/>
          <Background/>
          <Projects/>
          <Skills/>
          <Contact/>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
