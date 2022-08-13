import styles from './contact.module.css'
import Image from 'next/image'
import Peep from '../../assets/peep-sitting-5.png'

const Contact = () => {
  return (
    <div className={styles.contact} id={"contact"}>
        <h3 className={styles.title}>CONTACT</h3>
        <div className={styles.content}>
            <div className={styles.avatar}>
                <Image 
                    src={Peep}
                    // height={100}
                    layout="responsive"
                    alt='avatar image 2'/>
            </div>
            <form action='https://formspree.io/f/xrgdgknp' method='POST' className={styles.form}>
                <input type={"email"} name="Email" placeholder={"Leave your email"}/>
                <textarea name="Message" placeholder='Leave a message'/>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact