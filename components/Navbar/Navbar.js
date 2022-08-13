import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="./assets/logo-light.png"/>
      </div>
      <ul className={styles.navs}>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
      </ul>
    </nav>
  )
}

export default Navbar