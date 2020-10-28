import styles from "../styles/components/bullet.module.scss"

const Bullet = (props) => {
      return (
            <span className={styles.bullet}>{props.number}</span>
      )
}

export default Bullet