import React from 'react';
import './Contact.css';

export default function Contact() {
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
        <form>
          <input type="text" name='user_name' className='user' placeholder='Name' />
          <input type="text" name='user_email' className='user' placeholder='Email' />
          <textarea name="message" className='user' placeholder='Message'></textarea>
          <input type="submit" value="Send" className='btn contact-btn' />
          <div className="blur contact-blur1" style={{background: 'var(--purple)'}}></div>
        </form>
      </div>
    </div>
  )
}
