import React from 'react'
import {AiFillInstagram} from "react-icons/ai";
import styles from '../styles/Header.module.css'

const Header = () => {
  //https://forbae-practice.herokuapp.com/
  return (
    <div className={styles.header}>
      <AiFillInstagram className={styles.icon}/>
    </div>
  )
}

export default Header
