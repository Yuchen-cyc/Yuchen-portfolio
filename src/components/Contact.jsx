import React, { useState } from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xlmpzga', 'template_oxd0fkq', form.current, {
        publicKey: 'oyKcne94HQKduT6hM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-form'>
      <div className="contact-left">
        <div className="service-left">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur service-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
      </div>

      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' className='user' placeholder='Name' />
          <input type="text" name='user_email' className='user' placeholder='Email' />
          <textarea name="message" className='user' placeholder='Message'></textarea>
          <input type="submit" value="Send" className='btn contact-btn' />
          <span className='form-confirmation'>{done && "Thanks for contacting me!"}</span>
          <div className="blur contact-blur1" style={{background: 'var(--purple)'}}></div>
        </form>
      </div>
    </div>
  )
}
