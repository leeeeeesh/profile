import React from 'react'
import styles from './mobileproject.module.css';

export default function MobileProject() {
  return (
    <div id={styles.project_wrap} className='skill_wrap'>
      <section id={styles.project}>
        <h2 className='title_name'>Project</h2>

        <div id={styles.project_cont_wrap}>
          <div>
            <button>PC</button>
            <button>MO</button>
          </div>

          <div></div>

          <div></div>
        </div>
      </section>
    </div>
  )
}
