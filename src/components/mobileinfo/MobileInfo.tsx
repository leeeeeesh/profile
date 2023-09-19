import React from 'react'
import styles from './mobileinfo.module.css'

export default function MobileInfo() {
  return (
    <div id={styles.info_wrap}>
      <section id={styles.info}>
        <h2><span>Front-end</span> developer<br/> Lee SangHyun</h2>
      </section>
    </div>
  )
}
