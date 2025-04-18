import React  from 'react'
import Navbar from '../navbar/Navbar'

import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
          <Navbar/>
            {children}
        </div>
    )
}

export default Layout