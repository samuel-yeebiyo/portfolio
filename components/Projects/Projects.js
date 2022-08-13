import styles from './projects.module.css'
import Card from '../Card/Card'
import { useState } from 'react'

const Projects = () => {

    const [projects, setProject] = useState([
        {
            title: 'Movie Catalog',
            description:'A movie catalog website that uses the TMDB api to fetch all the movie metadata. Includes categorization and search functionality.',
            live:true,
            link:'https://moviedb-sam.netlify.app/',
            github:'https://github.com/samuel-yeebiyo/tmdb-app',
            stack:['React', 'API'],
            image: './assets/tmdb.png'
        },
        {
            title: 'Weather Application',
            description:'This is a typical weather application but done right. Beautifully designed, responsive, and you can search through major cities.',
            live:true,
            link:'https://weather-sam.netlify.app/',
            github:'https://github.com/samuel-yeebiyo/weather-app',
            stack:['React', 'API', 'Node'],
            image: './assets/weather.jpg'
        },{
            title:"E-Commerce Website",
            description:"A full-stack e-commerce web application where sellers can list their products and buyers can purchase using a custom crypto token.",
            live :false,
            link:'',
            github:'https://github.com/samuel-yeebiyo/ecommerce-project',
            stack:['React', 'NextJS', 'Docker', 'Redis', 'Node', 'MongoDB', 'Solana'],
            image:'./assets/shop.png'
        },{
            title:"Blog Website",
            description:"A blog site I created (in the process of creating) to document my learning journey. In the process of migrating to NextJS.",
            live :false,
            link:'',
            github:'https://github.com/samuel-yeebiyo/blog',
            stack:['NextJS', 'React', 'MongoDB', 'Node'],
            image:'./assets/blog.png'
        },{
            title:"Monopoly Deal",
            description:"A digital version of the card game I created to play with my friend :).",
            live :false,
            link:'',
            github:'https://github.com/samuel-yeebiyo/monodeal',
            stack:['Node', 'React'],
            image:'./assets/mono.png'
        },
        // {
        //     title:"",
        //     description:"",
        //     live :false,
        //     link:'',
        //     github:'',
        //     stack:[],
        //     image:''
        // }
    ])

  return (
    <div className={styles.projects} id={"projects"}>
        <h3>PROJECTS</h3>
        <div className={styles.showcase}>
            {projects.map((item, idx)=>(
                <Card key={idx} image={item.image} title={item.title} description={item.description} live={item.live} link={item.link} github={item.github} stack={item.stack}/>
            ))
            }
        </div>
    </div>
  )
}

export default Projects