import React from 'react'
import styles from './Home.module.css'
import home from '../../assets/home.gif'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import PromiseCard from '../PromiseCard';
import { MdElectricBolt } from "react-icons/md";
import { OUR_PROMISE } from '../utils';

const Home = () => {

  return (
    <div className={styles.main}>
      <img src={home} alt="" />
      <div className={styles.head}>
        <u style={{ cursor: 'pointer' }}> <MdElectricBolt /> UNLOCK THE PRE-RACE PASTE</u> Find the sprint to be finish! 1 FREE with a 7 pack
      </div>
      <nav className={styles.nav}>
        <img src={logo} alt="" />
        <div className={styles.options}>
          <span><a href="#shopAll">Shop All</a></span>
          <span><a href="#shopByBenefit">Shop by Benefits</a></span>
          <span><a href="#about">About</a></span>
          <span><a href="#bundles">Bundles</a></span>
          <span><a href="#contact">Contact</a></span>
        </div>
        <div>
          <span><CiSearch /></span>
          <span><HiOutlineRectangleStack /></span>
          <span><FaRegUser /></span>
        </div>
      </nav>
      <div className={styles.slogan}>
        <span>MICROSECONDS MATTER</span>
        <h1>
          Win your horserace <br />
          with TTL supplements
        </h1>
        <span className={styles} >Scientifically formulated racehorse supplements <br /> from the home of champions </span><br />
        <button>Discover</button>
      </div>
      <div className={styles.promises}>
        {OUR_PROMISE.map(({ id, figure, letter }) => (
          <PromiseCard key={id} figure={figure} letter={letter} />
        ))}
      </div>
    </div>
  )
}

export default Home