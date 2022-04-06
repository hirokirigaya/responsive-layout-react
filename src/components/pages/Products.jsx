import Container from "../layout/Container";

import styles from './Products.module.css'

function Products() {
  return (
    <Container>
      <div className={styles.products}>
        <h1>Products</h1>
      </div>
    </Container>
  )
}

export default Products;