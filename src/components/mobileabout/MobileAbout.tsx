import React, { useState } from 'react'
import styles from './mobileabout.module.css'

export default function MobileAbout() {

  return (
    <div id={styles.about_wrap}>
      <section id={styles.about}>
        <h2 className='title_name'>About</h2>
        <div id={styles.about_img}></div>
        <div id={styles.about_text}>
          <p>제가 생각했던 것을 직접 화면에 구현하는 것이 재미있습니다.
            <br/>저의 이름처럼 새로운 것을 두려워하지 않고 항상 빛날 수 있는 프론트엔드 개발자가 되겠습니다.</p>
          <p className={styles.about_contact}><img src="/images/about_address.png" alt="주소이미지" />서울시 노원구 공릉동</p>
          <p className={styles.about_contact}><img src="/images/about_tell.png" alt="전화이미지" />010-4024-2694</p>
          <p className={styles.about_contact}><img src="/images/about_mail.png" alt="메일이미지" />sh941217@gmail.com</p>
        </div>

        
      </section>
    </div>
  )
}
