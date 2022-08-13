import styles from './skills.module.css'
import Image from 'next/image'

//logos
import Docker from '../../assets/logos/docker.png'
import ReactJS from '../../assets/logos/react.png'
import Redis from '../../assets/logos/redis.png'
import JS from '../../assets/logos/javascript.png'
import cpp from '../../assets/logos/cpp.png'
import Node from '../../assets/logos/node.png'
import Next from '../../assets/logos/next.png'
import Python from '../../assets/logos/python.png'
import Java from '../../assets/logos/java.png'

const Skills = () => {
  return (
    <div className={styles.skills} id={"skills"}>
        <h3>SKILLS</h3>
        <div className={styles.showcase}>
            <Image src={ReactJS} layout="responsive"/>
            <Image src={Docker} layout="responsive"/>
            <Image src={JS} layout="responsive"/>
            <Image src={Next} layout="responsive"/>
            <Image src={cpp} layout="responsive"/>
            <Image src={Node} layout="responsive"/>
            <Image src={Redis} layout="responsive"/>
            <Image src={Java} layout="responsive"/>
            <Image src={Python} layout="responsive"/>
        </div>
    </div>
  )
}

export default Skills