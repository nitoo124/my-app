import React from 'react'
import Link from 'next/link';
import styles from '../css/Footer.module.css'
import { FaGithub, FaLinkedin, FaFacebook, FaPhoneAlt   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function Footer() {
    return (
        <footer className={styles.footer}>
           
           <main >
            {/* section1 for content */}
            <section className={styles.Section1}>

            <h2 >Nitoo.</h2>
            <div>
                <FaGithub/>
                <FaLinkedin/>
                <FaFacebook/>
            </div>



            </section>

            {/* section2 for links */}
            <section className={styles.Section2}>

                <h3 >Links</h3>

                <ul>
                    <Link className = {styles.link} href='/'><li>Home</li></Link>
                    <Link className = {styles.link} href='/about'><li>About</li></Link>
                    <Link className = {styles.link} href='/contact'><li >Contact</li></Link>
                </ul>

            </section>

            {/* section3 for contact info */}
            <section className={styles.Section3}>
                <h3 >Have a Question?</h3>
                 
                 {/* email */}
                <div>
                    <MdEmail size={25} className={styles.icons}/>
                    <p>example@gmail.com</p>
                </div>
                
                {/* phone */}
                <div>
                    <FaPhoneAlt size={23} className={styles.icons}/>
                    <p>0133456789</p>

                </div>
                

            </section>
            </main>

            <hr/>
            <p>copyright © Designed by Nitoo Kumari</p>

            


        </footer>

    )
}

export default Footer