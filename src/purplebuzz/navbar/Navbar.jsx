import React from 'react'
import styles from './Navbar.module.css'
import { BiBuildings } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <BiBuildings />
                    <span>Purple</span>
                    <span className={styles.buzz}>Buzz</span>
                </div>
                <div className={styles.components}>
                    <div className={styles.pages}>
                        <Link to='/' >Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/work'>Work</Link>
                        <Link to='/pricing'>Pricing</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className={styles.navbarIcon}>
                        <FaRegBell />
                        <MdOutlineSettings />
                        <FaRegCircleUser />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar