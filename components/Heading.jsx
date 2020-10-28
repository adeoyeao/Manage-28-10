import styles from "../styles/components/heading.module.scss"

const Heading = (props) => {
      return (
            <h2 className={styles[props.type]}>{props.head}</h2>
      )
}

export default Heading