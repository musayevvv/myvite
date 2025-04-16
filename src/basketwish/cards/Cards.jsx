import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Cards.module.css'
import { toast } from 'react-toastify'

const Cards = () => {
  const [data, setData] = useState([])
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wish')) || []
  )

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
      toast.info('Məhsul səbətdə artıq var, miqdarı artırıldı!', {
        position: 'top-right',
        theme: 'colored'
      })
    } else {
      basket = [...basket, { ...item, count: 1 }]
      toast.success('Məhsul səbətə əlavə olundu!', {
        position: 'top-right',
        theme: 'colored'
      })
    }
  
    localStorage.setItem('basket', JSON.stringify(basket))
  }
  
  const addToWishlist = (item) => {
    let wish = [...wishlist]
    let wishProduct = wish.find(index => index.id === item.id)
  
    if (wishProduct) {
      toast.warning('Məhsul artıq wishlist-də var!', {
        position: 'top-right',
        theme: 'colored'
      })
    } else {
      wish = [...wish, item]
      setWishlist(wish)
      localStorage.setItem('wish', JSON.stringify(wish))
      toast.success('Məhsul wishlist-ə əlavə olundu!', {
        position: 'top-right',
        theme: 'colored'
      })
    }
  }
  

  const isInWishlist = (id) => {
    return wishlist.some(item => item.id === id)
  }

  return (
    <div className={styles.container}>
      {data.map(item => (
        <div key={item.id} className={styles.card}>
          <div className={styles.cardImage}><img src={item.image} alt="" /></div>
          <div className={styles.body}>
            <span>{item.title}</span>
            <span>{item.price}</span>
          </div>
          <div className={styles.buttonBox}>
            <button onClick={() => addToBasket(item)}>Add to Basket</button>
            <button onClick={() => addToWishlist(item)}>
              {isInWishlist(item.id) ? 'Əlavə edilib' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
