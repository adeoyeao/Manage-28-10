import styles from "../styles/components/button.module.scss"

const Button = (props) => {
      return (
            <button className={styles.button} onClick={() => props.showModal()}>
                  {props.text}
            </button>
      )
}

export default Button