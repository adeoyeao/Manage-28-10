import styles from "../styles/components/logo.module.scss"

const Logo = (props) => {
      return (
            <img 
            className={styles.logo}
            src={`./images/logo-${props.type}.svg`} />
      )
}

export default Logo