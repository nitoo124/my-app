'use client'
import Link from 'next/link'
import styles from '../css/Header.module.css'
import React, { useState } from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";



function Header() {

  const[OpenMenu, setOpenMenu] = useState(false)

  const ToggleMenu =()=>{

    setOpenMenu(!OpenMenu)

  }
  return (
    <header className={styles.header}>
        <div className={styles.main}>
            {/* logo */}
              <div className={styles.logo}>
                <h2><span >N</span>itoo.</h2>
              </div>
              {/* navbar */}
              <nav className={styles.nav}>
                <ul >
                    <Link className={styles.links} href='/'><li>Home</li></Link>
                    <Link className={styles.links} href='/about'><li >About</li></Link>
                    <Link className={styles.links} href='/contact'><li >Contact</li></Link>
                </ul>
              </nav>
               
               {/* mob button */}
               <button className={styles.mobicons} onClick={ToggleMenu}> {OpenMenu ? <IoClose size={30}/>:<AiOutlineMenuUnfold size={30}/>}</button>
        
        </div>

        {/* mob navbar */}
        <nav className={`${styles.mobNav}   ${OpenMenu ? 'block' : 'hidden'}`}>
                <ul className='   flex-col py-10   bg-purple-700 gap-x-12 text-white text-lg font-bold  '>
                    <Link className={styles.links} href='/'><li className='mt-6 hover:bg-white hover:text-purple-700 '>Home</li></Link>
                    <Link className={styles.links} href='/about'><li className='mt-6 hover:bg-white hover:text-purple-700 '>About</li></Link>
                    <Link className={styles.links} href='/contact'><li className='mt-6 hover:bg-white hover:text-purple-700 '>Contact</li></Link>
                </ul>
              </nav>
    </header>
  )
}

export default Header