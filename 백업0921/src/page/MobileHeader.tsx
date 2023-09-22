import React from 'react'
import styles from './mobileheader.module.css'

export default function MobileHeader() {
  return (
    <div id={styles.header_wrap}>
      <header>
        <div id={styles.test_box}></div>
      </header>
    </div>
  )
}
