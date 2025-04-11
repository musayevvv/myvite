import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'
import Cards from '../cards/Cards'
import axios from 'axios'
const Product = () => {


  const [db, setDb] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setDb(res.data)
    })
  })

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.leftDiv}>
            <span>Feature Products</span>
            <h2>Our Features Collection</h2>
          </div>
          <div className={styles.rightDiv}>
            <button className={styles.best}>Best Sellers</button>
            <button>New Product</button>
            <button>Sele Products</button>
          </div>
        </div>

        <div className={styles.productCards}>{db.map(item => <Cards item={item} />)}</div>

      </div>
    </main>
  )
}

export default Product
