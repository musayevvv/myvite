import React from 'react'
import styles from './Footer.module.css'
import { BiBuildings } from "react-icons/bi";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            <BiBuildings />
                            <span>Purple</span>
                            <span className={styles.buzz}>Buzz</span>
                        </div>
                        <ul>
                            <li><a href="#">Şirkət</a></li>
                            <li><a href="#">Komanda</a></li>
                            <li><a href="#">Karyera</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Our Company</h4>
                        <ul>
                            <li><a href="#">Veb Dizayn</a></li>
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Marketinq</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Our Works</h4>
                        <ul>
                            <li><a href="#">+994 50 123 45 67</a></li>
                            <li><a href="#">info@example.com</a></li>
                            <li><a href="#">Bakı, Azərbaycan</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>For Client</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles.last}>
                <div className={styles.container}>
                    <p>© Copyright 2021 Purple Buzz Company. All Rights Reserved.</p>
                    <p>Designed by TemplateMo</p>
                    <p>Distributed by Themewagon</p>
                </div>
            </div>
        </>
    )
}

export default Footer
