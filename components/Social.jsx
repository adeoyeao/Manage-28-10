import styles from "../styles/components/social.module.scss"

const Social = (props) => {
      const socialStyle = {
            backgroundImage: `url("./images/icon-${props.social}.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
      }

      return (
            <a href={`https://www.${props.social}.com`} target="_blank" className={styles.social} style={socialStyle}></a>
      )
}

export default Social