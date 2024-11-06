import React from 'react'
import styles from '../css/Button.module.css'


function Button(props:{text:string}) {
  return (
   <button className={styles.button}>{props.text}</button>


  )
}

export default Button