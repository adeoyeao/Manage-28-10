import styles from "../styles/components/image.module.scss"

const Image = (props) => {
      return (
            <img
            className={styles.image} 
            src={`./images/${props.url}.svg`} />
      )
}

export default Image