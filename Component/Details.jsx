import React from 'react'
import styles from '../styles/Details.module.css'
import Image from 'next/image'
import {useSelector} from 'react-redux'
const Details = () => {
  const details=useSelector((state)=>state.details.value)
  const {Account_name,image,about,name,followers,following,descp,location,Date,posts}=details
  return (
    <div className={styles.container}>
      <Image src={image} objectFit="contain" width='150px' height='150px' className={styles.img}/>
        <div className={styles.items}>
          <h3 className={styles.accountname}>{Account_name}</h3>
            <div className={styles.vertical}>
                <h6><span className={styles.number}>{posts}</span>&nbsp;posts</h6>&nbsp;&nbsp;&nbsp;
                <h6><span className={styles.number}>{followers}</span>&nbsp;followers</h6>&nbsp;&nbsp;&nbsp;
                <h6><span className={styles.number}>{following}</span>&nbsp;following</h6>&nbsp;&nbsp;&nbsp;
            </div>
              <b className={styles.name}>{name}</b>
              <h6 className={styles.location}>{about}</h6>
              
        </div>
    </div>
  )
}

export default Details
