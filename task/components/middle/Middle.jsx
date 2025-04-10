import React from 'react'
import styles from './Middle.module.css';

const Middle = () => {
  return (
    <main>
      <div className={styles.container} >
        <div className={styles.mainTitle}>
          <h2>Best way to eat healthy food</h2>
          <p>Making a reservation at Délicious restaurant is easy and takes just a
            couple of minutes.</p>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.card}>
            <div className={styles.cardImage}><img src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services1.svg" alt="" /></div>
            <div className={styles.cardText}>
              <h5>Healthy Meal</h5>
              <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage}><img src="	https://preview.colorlib.com/theme/restauco/assets/img/icon/services2.svg" alt="" /></div>
            <div className={styles.cardText}>
              <h5>Fast Food</h5>
              <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage}><img src="	https://preview.colorlib.com/theme/restauco/assets/img/icon/services3.svg" alt="" /></div>
            <div className={styles.cardText}>
              <h5>Delicious Coffee</h5>
              <p>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Middle
