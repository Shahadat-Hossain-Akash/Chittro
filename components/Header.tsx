import React from 'react'
import styles from '@/styles/header.module.css'
import Image from 'next/image'
import logo from '@/public/assets/trippy.png'

const Header = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Chittro</p>
            <Image src={logo} alt='' width={70} height={70} priority/>
        </div>
    )
}

export default Header