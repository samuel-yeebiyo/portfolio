import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Created by Samuel Yeebiyo 🌟</p>
        <div className={styles.socials}>
            <a href='https://github.com/samuel-yeebiyo' target='_blank' rel="noreferrer">GITHUB</a>
            <a href='https://www.linkedin.com/in/samuel-yeebiyo-72b370226' target='_blank' rel="noreferrer">LINKEDIN</a>
        </div>
    </footer>
  )
}

export default Footer