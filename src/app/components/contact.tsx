import React from 'react'
import Button from './button'
import styles from '../css/Contact.module.css'


function Contact() {
  return (
   <main className={styles.contact}>
<h1 >Contact me</h1>
   <form action="">
    <div className=''>
        <label  >Username: </label>
        <input className={styles.input} type="text" placeholder='Enter your name' />
    </div>
    <div>
        <label >Email: </label>
        <input className={styles.input} type="email" placeholder='Enter your email' />
    </div>

    <div>
        <label >Message: </label>
        <textarea className={styles.input} name="text" id="" placeholder='Enter your message'></textarea>
    </div>

    <div className={styles.btnContainer}>
     <button type='submit' className={styles.btn}>submit</button> 
     </div>
    
    </form>
   </main>
  )
}

export default Contact