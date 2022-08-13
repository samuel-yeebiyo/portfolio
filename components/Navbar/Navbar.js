import styles from './navbar.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Navbar = () => {

  const {theme, toggle} = useContext(ThemeContext)

  return (
    <nav className={styles.navbar}>
      <div className={styles.main}>
        <a href="#main">
          <div className={styles.logo_container}>
            {theme == 'light' ?
              <img className={styles.logo} src="./assets/logo-dark.png" alt='logo'/>
              :
              <img className={styles.logo} src="./assets/logo-light.png" alt='logo'/>
            }
          </div>
        </a>
        <ul className={styles.navs}>
          <div className={styles.button} onClick={()=>{
            toggle()
          }}>
            {theme == 'light' ?
              <img src={'./assets/dark.svg'} alt='dark'/>
              :
              <img src={'./assets/light.svg'} alt='light'/>
            }
          </div>
          <a href="#projects">projects</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar