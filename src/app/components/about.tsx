import React from 'react'
import Button from './button'
import about from '../../../public/images/about.jpg'
import Image from 'next/image'
import styles from '../css/About.module.css'


function About() {
    return (
        <main className={styles.about}>

            {/* image section */}
            <section className={styles.imgSection}>
              
              <Image className={styles.img} src={about} alt='beautifull girl image' width={300} height={300} loading='lazy'/>

            </section>

            {/*Content section  */}
            <section className={styles.contentSection}>
                <h1 >About Me</h1>
                <p >Hi! I’m Nitoo kumari, a Frontend Developer specializing in Next.js, Framer Motion, Tailwind CSS, React, CSS, HTML, JavaScript, and TypeScript. I’m passionate about creating user-friendly and visually appealing web applications.

                    With experience in various exciting projects, I strive to deliver innovative solutions that enhance user experience. I love learning new technologies and staying updated with industry trends.

                    If you’re interested in collaborating on a project, feel free to reach out!

                    Let’s create something amazing together!</p>
                <div>
                    <Button text='Hire Me' />
                </div>
            </section>
        </main>
    )
}

export default About