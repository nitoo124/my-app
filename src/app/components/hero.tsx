import Image from 'next/image'
import home from '../../../public/images/home.jpg'
import Button from './button'
import styles from '../css/Hero.module.css'




function Hero() {
  return (
   <main className = {styles.hero}>
    {/* content section */}
    <section className= {styles.leftbar}>
        <h1 className='text-3xl font-bold'>HI, I am <span className=' text-purple-700'>Nitoo kumari</span>, <br/> Frontend Developer.</h1>
        <p className='mt-3'>Welcome to my portfolio! I'm a frontend developer dedicated to crafting engaging and user-friendly web experiences.</p>
        <div className='mt-3'>
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