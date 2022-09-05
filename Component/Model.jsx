import Image from 'next/image'
import React from 'react'
import styles from '../styles/Model.module.css'
import {useSelector} from 'react-redux'
const Model = ({id,img,setopen}) => {
  const details=useSelector((state)=>state.details.value)
  const {Account_name,image,about,name,followers,following,descp,location,Date,posts}=details
  return (
    <div className={styles.Model}>
      <span onClick={()=>{setopen(false)}} className={styles.close}>x</span>
    <div className={styles.image}>
    <Image src={img} width='230px' height='200px' className={styles.img}/>
    <div className={styles.icon}>
    <Image src={image} width='100%' height='100%' className={styles.imgs}/>
    <h6 className={styles.accountname}>{Account_name}</h6>
    <h6 className={styles.location}>{location}</h6>
    <h6 className={styles.descp}>{descp}</h6>
    </div>
    </div>
    </div>
  )
}

export default Model
