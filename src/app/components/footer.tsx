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
            <div className='flex gap-5 mt-5 text-2xl '>
                <FaGithub className='hover:text-gray-300 hover:animate-bounce'/>
                <FaLinkedin className='hover:text-gray-300 hover:animate-bounce'/>
                <FaFacebook className='hover:text-gray-300 hover:animate-bounce'/>
            </div>



            </section>

            {/* section2 for links */}
            <section className={styles.Section2}>

                <h3 >Links</h3>

                <ul className='text-sm mt-3'>
                    <Link href='/'><li className='mt-2 text-gray-200'>Home</li></Link>
                    <Link href='/about'><li className='mt-2 text-gray-200'>About</li></Link>
                    <Link href='/contact'><li className='mt-2 text-gray-200'>Contact</li></Link>
                </ul>

            </section>

            {/* section3 for contact info */}
            <section className={styles.Section3}>
                <h3 >Have a Question?</h3>
                 
                 {/* email */}
                <div className='mt-4 flex gap-3 text-gray-200 '>
                    <MdEmail size={25} className={styles.icons}/>
                    <p className='text-sm'>example@gmail.com</p>
                </div>
                
                {/* phone */}
                <div className='mt-4 flex gap-3 text-gray-200'>
                    <FaPhoneAlt size={23} className={styles.icons}/>
                    <p className='text-sm'>0133456789</p>

                </div>
                

            </section>
            </main>

            <hr className='mt-5 w-full' />
            <p className='text-center mt-5'>copyright © Designed by Nitoo Kumari</p>

            


        </footer>

    )
}

export default Footer