import styles from "../styles/components/copyright.module.scss"

const Copyright = () => {
      const d = new Date()
      return (
            <p className={styles.copyright}>Copyright {d.getFullYear()}. All Rights Reserved</p>
      )
}

export default Copyright