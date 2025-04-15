import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Cards.module.css'

const Cards = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setData(res.data)
    })
  }, [])

  const addToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    let basketProduct = basket.find(index => index.id === item.id)

    if (basketProduct) {
      basketProduct.count += 1
    } else {
      basket = [...basket, { ...item, count: 1 }]
    }

    localStorage.setItem('basket', JSON.stringify(basket))
  }

  const addToWishlist = (item) => {
    let wish = JSON.parse(localStorage.getItem('wish')) || []
    let wishProduct = wish.find(index => index.id === item.id)

    if (wishProduct) {
      alert('Mehsul artıq wishdə var!')
    } else {
      wish = [...wish, item]
      localStorage.setItem('wish', JSON.stringify(wish))
    }
  }

  const local =JSON.parse(localStorage.getItem('wish'))

  return (
    <div className={styles.container}>
      {data && data.map(item => {
        let inWish = local?.some(index => index.id === item.id)

        return (
          <div key={item.id} className={styles.card}>
            <div className={styles.cardImage}><img src={item.image} alt="" /></div>
            <div className={styles.body}>
              <span>{item.title}</span>
              <span>{item.price}</span>
            </div>
            <div className={styles.buttonBox}>
              <button onClick={() => addToBasket(item)}>Add to Basket</button>
              <button onClick={() => addToWishlist(item)}>
                {inWish ? 'Əlavə edilib' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
