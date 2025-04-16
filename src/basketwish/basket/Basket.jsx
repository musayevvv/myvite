import React, { useState, useEffect } from 'react';
import styles from './Basket.module.css';
import Layout from '../layout/Layout';

const Basket = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
  }, []);

  const handleDelete = (id) => {
    const updatedBasket = basket.filter(item => item.id !== id);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Basket</h2>
        {basket.length === 0 ? (
          <p className={styles.empty}>Səbət boşdur</p>
        ) : (
          <ul className={styles.list}>
            {basket.map(item => (
              <li key={item.id} className={styles.listItem}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <div>{item.title} - {item.count} ədəd - ${item.price}</div>
                <button className={styles.deleteBtn} onClick={() => handleDelete(item.id)}>Sil</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Basket;
