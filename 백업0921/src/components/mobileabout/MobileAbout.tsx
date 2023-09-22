import React, { useState } from 'react'
import styles from './mobileabout.module.css'

export default function MobileAbout() {

  return (
    <div id={styles.about_wrap}>
      <section id={styles.about}>
        <h2 className='title_name'>About</h2>
        <div id={styles.about_img}></div>
        <div id={styles.about_text}>
          <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
          <p className={styles.about_contact}><img src="/images/about_address.png" alt="주소이미지" />서울시 00구 00동</p>
          <p className={styles.about_contact}><img src="/images/about_tell.png" alt="전화이미지" />010 - 1234 - 5678</p>
          <p className={styles.about_contact}><img src="/images/about_mail.png" alt="메일이미지" />abcd1234@gmail.com</p>
        </div>

        
      </section>
    </div>
  )
}
