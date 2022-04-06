import styles from './Container.module.css'

function Container(props) {
  return <div className={`${styles.container} ${styles[props.customHeight]}`}>{props.children}</div>
}

export default Container;