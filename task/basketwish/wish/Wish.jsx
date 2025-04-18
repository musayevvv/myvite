import React, { useEffect, useState } from 'react'
import styles from './Wish.module.css'
import Layout from '../layout/Layout'

const Wishlist = () => {
    const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem('wish')) || []
    )

    useEffect(() => {
        localStorage.setItem('wish', JSON.stringify(wishlist))
    }, [wishlist])

    const removeFromWishlist = (id) => {
        const updated = wishlist.filter(item => item.id !== id)
        setWishlist(updated)
    }

    return (
        <Layout>    <div className={styles.container}>
            {wishlist.length > 0 ? wishlist.map(item => (
                <div key={item.id} className={styles.card}>
                    <div className={styles.cardImage}><img src={item.image} alt="" /></div>
                    <div className={styles.body}>
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                    </div>
                    <div className={styles.buttonBox}>
                        <button onClick={() => removeFromWishlist(item.id)}>Remove from Wishlist</button>
                    </div>
                </div>
            )) : <p>Wishlist boşdur</p>}
        </div></Layout>
    )
}

export default Wishlist
