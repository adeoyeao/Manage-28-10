import styles from "../styles/components/avatar.module.scss"

const Avatar = (props) => {
      return (
            <img src={`./images/avatar-${props.name}.png`} className={styles.avatar}/>
      )
}

export default Avatar