import styles from './hero.module.css'
import Image from 'next/image'
import Peep from '../../assets/peep-46.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.image}>
          <Image 
            src={Peep}
            // height={100}
            layout="responsive"/>
        </div>
        <h1 className={styles.heading}>Hi, I'm <span className={styles.name}>Samuel Yeebiyo</span></h1>
        <h2 className={styles.title}>A Software/Web Developer</h2>
        <p className={styles.description}>What my formal CS education hasn't taught me, I learn by myself. I am avid learner and always eager to try out the latest and greatest frameworks and web technologies to figure out how to make my web projects look better, feel smoother, and perform faster.</p>
        <p>Get in touch {'👉'} <span className={styles.email}>samuel.yeebiyo@gmail.com</span></p>
    </div>
  )
}

export default Hero