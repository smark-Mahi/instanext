import React, { useEffect, useState } from 'react'
import styles from '../styles/Gallery.module.css'
import Image from 'next/image'
import {useSelector} from 'react-redux'
import Model from './Model'
const Gallery = () => {
  const [open,setopen]=useState(false)
  const [id,setid]=useState('')
  const [img,setimg]=useState('')
  const likes=useSelector((state)=>state.Likes.value)
  const comments=useSelector((state)=>state.Comments.value)
  let likenum=likes.num
  let commentsnum=comments.num
  console.log(likenum,commentsnum)
  const [isSSR,setisSSR]=useState(true);
  useEffect(()=>{
    setisSSR(false)
  },[])
  const handleclick=(id,image)=>{
    setopen(true)
    setid(id)
    setimg(image)
  }
  console.log(open)
  console.log(id)
  console.log(img)
  const images=[
    {
    id:1,
    image:'/img1.jpg'
  },
  {
    id:2,
    image:'/img2.jpg'
  },
  {
    id:3,
    image:'/img3.jpg'
  },
  {
    id:4,
    image:'/img4.jpg'
  },
  {
    id:5,
    image:'/img5.jpg'
  },
  {
    id:6,
    image:'/img6.jpg'
  },
]
  return (
    <div className={styles.container}>
      {
        images.map((items)=>
          <div key={items.id} className={styles.flex}>
          <Image src={items.image} width='250px'height='250px' objectFit='cover' onClick={()=>handleclick(items.id,items.image)} className={styles.img}/>
          {!isSSR &&<h6 className={styles.likesncomments}>{likenum}likes&nbsp;{commentsnum}comments</h6>}
          </div>
        )
      }
      {open && <Model id={id} img={img} setopen={setopen}/>}
    </div>
  )
}

export default Gallery
