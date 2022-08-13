import styles from './background.module.css'

const Background = () => {
  return (
    <div className={styles.background}>
        <h3>BACKGROUND</h3>
        <p>Ever since I picked up Jon Duckett's beautifully illustrated <a rel="noreferrer" className={styles.book} href={'https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189'} target="_blank">HTML and CSS</a> book as a freshman, I haven't looked back. In between my CS courses at Jiangsu University, I kept brushing up my web development skills with curated tutorials, courses, and projects.</p>
        <a href='./Resume.pdf' target="_blank" rel='noopener noreferrer' className={styles.resume}>View Resume </a> <span>👉</span>
    </div>
  )
}

export default Background