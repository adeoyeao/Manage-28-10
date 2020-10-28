import styles from "../styles/components/form.module.scss"
import { useState } from "react"

const Form = (props) => {
      const [ input, setInput ] = useState("")
      const [ valid, setValid ] = useState(false)

      const formStyle = valid ? {border: "1px solid green"} : {border: "1px solid red"}
      
      const handleChange = (e) => {
            const value = e.target.value
            const regex = /\w{2,}\@\w{2,}\./ig

            setInput(value)
            regex.test(value) ? setValid(true) : setValid(false)
      }

      const handleSubmit = (e) => {
            !valid && e.preventDefault()
      }

      return (
            <form className={styles.form} method="POST" action="/subscriber">
                  <input 
                  type="text"
                  placeholder="Updates in your inbox..."
                  value={input}
                  onChange={handleChange}
                  style={formStyle}
                  name="email"
                  autoComplete="off"/>
                  <button
                  type="submit"
                  onClick={handleSubmit}> Go </button>
            </form>
      )
}

export default Form