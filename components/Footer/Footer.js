import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Created by Samuel Yeebiyo 🌟</p>
        <div className={styles.socials}>
            <p>GITHUB</p>
            <p>EMAIL</p>
            <p>LINKEDIN</p>
        </div>
    </footer>
  )
}

export default Footer