import Button from "./Button"
import styles from "../styles/components/modal.module.scss"

const Modal = (props) => {
      return (
            <section className={styles.modal}>
                  <div>
                  <h2>
                        The product is still in beta and will be launching in Q2 2021.
                        Watch this space!
                  </h2>
                  <Button text="Go Back" showModal={props.showModal}/>
                  </div>
            </section>
      )
}

export default Modal