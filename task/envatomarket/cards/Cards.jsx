import React from 'react'
import styles from './Cards.module.css'
const Cards = ({item}) => {
  return (
    <div className={styles.card}>

        <div className={styles.image}><img src={item.image} alt="" /></div>
        <div className={styles.body}>
 
      <span>{item.title}</span>
      <span>{item.price}</span>
        </div>
      
    </div>
  )
}

export default Cards
