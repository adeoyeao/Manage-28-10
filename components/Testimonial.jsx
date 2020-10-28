import styles from "../styles/components/testimonial.module.scss"
import Avatar from "./Avatar"
import Copy from "./Copy"

const Testimonial = (props) => {
      return (
            <div className={styles.testimonial}>
                  <Avatar name={props.name}/>
                  <Copy 
                  type={props.type}
                  head={props.head}
                  text={props.text}/>
            </div>
      )
}

export default Testimonial