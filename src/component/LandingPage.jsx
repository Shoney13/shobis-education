import React from 'react'
import styles from './LandingPage.module.css'
import  Logo from '../assets/Logo.svg'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading} >Get The Best Reading Materials</h1>
      <Link to='courses'>
      <Button variant="outlined">View Courses</Button>
      </Link>
      <img src={Logo} alt="" srcset="" className={styles.Logo} />
    </div>
  )
}

export default LandingPage