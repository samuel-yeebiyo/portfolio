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
            {theme == 'dark' ?
              <img className={styles.logo} src="./assets/logo-light.png"/>
              :
              <img className={styles.logo} src="./assets/logo-dark.png"/>
            }
          </div>
        </a>
        <ul className={styles.navs}>
          <div className={styles.button} onClick={()=>{
            toggle()
          }}>
            {theme == 'dark' ?
              <img src={'./assets/light.svg'}/>
              :
              <img src={'./assets/dark.svg'}/>
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