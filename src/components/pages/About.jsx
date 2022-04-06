import Container from '../layout/Container'

import styles from './About.module.css'

function About() {
  return (
    <Container>
      <div className={styles.about}>
        <h1>About</h1>
      </div>
    </Container>
  )
}

export default About;