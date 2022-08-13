import styles from './skills.module.css'
import Image from 'next/image'
import { useEffect, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

//logos
import Docker from '../../assets/logos/docker.png'
import ReactJS from '../../assets/logos/react.png'
import Redis from '../../assets/logos/redis.png'
import JS from '../../assets/logos/javascript.png'
import cpp from '../../assets/logos/cpp.png'
import Node from '../../assets/logos/node.png'
import NextDark from '../../assets/logos/next.png'
import NextLight from '../../assets/logos/next2.png'
import Python from '../../assets/logos/python.png'
import Java from '../../assets/logos/java.png'

const Skills = () => {

  const {theme, toggle} = useContext(ThemeContext)

  useEffect(()=>{
    console.log(theme)
  }, [theme])

  return (
    <div className={styles.skills} id={"skills"}>
        <h3>SKILLS</h3>
        <div className={styles.showcase}>
            <Image src={ReactJS} layout="responsive" alt='react'/>
            <Image src={Docker} layout="responsive" alt='docker'/>
            <Image src={JS} layout="responsive" alt='javascript'/>
            {theme == 'dark' ?
              <Image src={NextDark} layout="responsive" alt='nextjs-dark'/>
              :
              <Image src={NextLight} layout="responsive" alt='nextjs-light'/>
            }
            <Image src={cpp} layout="responsive" alt='c++'/>
            <Image src={Node} layout="responsive" alt='node'/>
            <Image src={Redis} layout="responsive" alt='redis'/>
            <Image src={Java} layout="responsive" alt='java'/>
            <Image src={Python} layout="responsive" alt='python'/>
        </div>
    </div>
  )
}

export default Skills