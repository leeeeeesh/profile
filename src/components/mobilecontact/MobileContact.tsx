import React from 'react'
import styles from './mobilecontact.module.css'

export default function MobileContact() {
  return (
    <div id={styles.contact_wrap}>
      <section id={styles.contact}>
        <h2 className='title_name'>Contact</h2>
        <form>
          <input type="text" placeholder='NAME' />
          <input type="email" placeholder='E-MAIL' />
          <textarea placeholder='MESSAGE'></textarea>
          <button>Send</button>
        </form>
      </section>
    </div>
  )
}
