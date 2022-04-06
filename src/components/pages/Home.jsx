import Container from "../layout/Container";

import styles from "./Home.module.css";

function Home() {
  return (
    <Container>
      <div className={styles.home}>
        <h1>Home</h1>
      </div>
    </Container>
  );
}

export default Home;
