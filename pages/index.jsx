import Bullet from "../components/Bullet"
import Button from "../components/Button"
import Copy from "../components/Copy"
import Copyright from "../components/Copyright"
import Form from "../components/Form"
import Heading from "../components/Heading"
import Image from "../components/Image"
import Logo from "../components/Logo"
import Social from "../components/Social"
import Testimonial from "../components/Testimonial"
import Modal from "../components/Modal"

import styles from "../styles/layouts/index.module.scss"
import { useState } from "react"

const Index = () => {
      const [ visible, setVisible ] = useState(false)
      const showModal = () => {
            setVisible(!visible)
      }

      return (
            <main>
                  <header className={styles.header}>
                        <Logo type="primary"/>
                        <Button text="Get Started"
                        showModal={showModal}/>
                  </header>
                  <section className={styles.hero}>
                        <div className={styles.heroContent}> 
                              <Copy 
                              type="primary"
                              head="Bring everyone together to build better products."
                              text="Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."/>
                              <Button 
                              text="Get Started"
                              showModal={showModal}/>
                        </div>
                        <Image url="illustration-intro"/>
                  </section>
                  <section className={styles.about}>
                        <div>
                        <Copy 
                        type="secondary"
                        head="What's different about Manage?"
                        text="Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams."/>
                        </div>
                        <div>
                              <article>
                                    <Bullet 
                                    number="01"/>
                                    <Copy 
                                    type="tertiary"
                                    head="Track company-wide progress"
                                    text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again."/>
                              </article>
                              <article>
                                    <Bullet 
                                    number="02"/>
                                    <Copy 
                                    type="tertiary"
                                    head="Advanced built-in reports"
                                    text="Set internal delivery estimates and track progress towards company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."/>
                              </article>
                              <article>
                                    <Bullet 
                                    number="03"/>
                                    <Copy 
                                    type="tertiary"
                                    head="Everything you need in one place"
                                    text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manager offers an all-in-one team productivity solution."/>
                              </article>
                        </div>
                  </section>
                  <section className={styles.testimonials}>
                        <Heading head="What they've said"/>
                        <div className={styles.carousel}>
                        <Testimonial 
                        name="anisha"
                        type="tertiary"
                        head="Anisha Li"
                        text="Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated." />
                        <Testimonial 
                        name="ali"
                        type="tertiary"
                        head="Ali Bravo"
                        text="WE have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused." />
                        <Testimonial 
                        name="richard"
                        type="tertiary"
                        head="Richard Watts"
                        text="Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to." />
                        <Testimonial 
                        name="shanai"
                        type="tertiary"
                        head="Shanai Gough"
                        text="Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive." />
                        </div>
                        <Button text="Get Started" 
                        showModal={showModal}/>
                  </section>
                  <section className={styles.simplify}>
                        <Heading type="secondary" head="Simplify how your team works today." />
                        <Button type ="secondary" text="Get Started" 
                        showModal={showModal}/>
                  </section>
                  <footer className={styles.footer}>
                        <Logo type="secondary" />
                        <div>
                              <Social social="facebook" />
                              <Social social="youtube" />
                              <Social social="twitter" />
                              <Social social="pinterest" />
                              <Social social="instagram" />
                        </div>
                        <Form />
                        <Copyright />
                  </footer>
                  { visible && <Modal showModal={showModal}/>}
            </main>
      )
}

export default Index