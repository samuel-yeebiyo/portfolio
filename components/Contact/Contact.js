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
                    layout="responsive"/>
            </div>
            <div className={styles.form}>
                <input type={"email"} placeholder={"Leave your email"}/>
                <textarea placeholder='Leave a message'/>
                <button>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact