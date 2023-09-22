import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import styles from './mobilecontact.module.css'
import { useForm } from 'react-hook-form';

export default function MobileContact() {
  // const form = React.useRef(null);
  const form = React.useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
      "service_yqx8i29",
      "template_t9xaesf",
      e.currentTarget,
      "Zqd84aNu2q2UlSjrw"
    )
      .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  // const { register } = useForm();

  return (
    <div id={styles.contact_wrap}>
      <section id={styles.contact}>
        <h2 className='title_name'>Contact</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input name='user_name' type="text" placeholder='NAME' required/>
          <input name='user_email' type="email" placeholder='E-MAIL' required />
          <textarea name='message' placeholder='MESSAGE' required></textarea>

          <button type='submit'>Send</button>
        </form>
      </section>
    </div>
  )
}
