import Image from 'next/image'
import home from '../../../public/images/home.jpg'
import Button from './button'
import styles from '../css/Hero.module.css'




function Hero() {
  return (
   <main className = {styles.hero}>
    {/* content section */}
    <section className= {styles.leftbar}>
        <h1 >HI, I am <span >Nitoo kumari</span>, <br/> Frontend Developer.</h1>
        <p >Welcome to my portfolio! I'm a frontend developer dedicated to crafting engaging and user-friendly web experiences.</p>
        <div>
        <Button  text = 'Learn More'/>
        </div>

    </section>
     
          {/* image section */}
     <section className = {styles.rightbar}>

      <Image className={styles.homeimg} src={ home} alt='beatutifull girls with laptop' width={400} height={400} loading='lazy'/>

     </section>
   </main>

  )
}

export default Hero