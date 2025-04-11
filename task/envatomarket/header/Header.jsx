import React from 'react'
import styles from './Header.module.css'
import { TfiMenuAlt } from "react-icons/tfi";
import { BsChevronDown } from "react-icons/bs";
import { FaFire ,FaBagShopping } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
  return (
    <>


<nav>
    <div className={styles.container}>
        <div className={styles.leftDiv}>
            <div className={styles.productCategory}>
                <span className={styles.hamburger}><TfiMenuAlt /></span>
                <span className={styles.productText}>Products Category <BsChevronDown /></span>
                </div>
            <div className={styles.pages}>
                <a href="#">Home<BsChevronDown /></a>
                <a href="#">Shop<BsChevronDown /></a>
                <a href="#">Blog<BsChevronDown /></a>
                <a href="#">Pages<BsChevronDown /></a>
                <a href="#">Contact<BsChevronDown /></a>
                </div>
        </div>
        <div className={styles.rightDiv}>
            <a className={styles.deal} href=""><FaFire />Deal</a>
            <MdStar />
            <a className={styles.FaRegHeart} href=""><FaRegHeart /></a>
            <MdStar />
            <a className={styles.FaRegHeart} href=""><FaBagShopping /></a>
        </div>
    </div>
</nav>

    </>
  )
}

export default Header

