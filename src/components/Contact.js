import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import $ from 'jquery'; 
import "../styles/contact.css"

// made using emailjs v 3.6.2

const Contact = ()=>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_33d63ox', 'template_3d74iub', form.current, '2tH0N6qi7MUym95Uv')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            
              // clear input field on submit.  
            $(':input').val('');
            $('textarea').val('');
        }, (error) => {
            console.log(error.text);
        });
    };


  

 

    return (
        <div className='form-container'>

        <h1 className="contact-me">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className='reset'  />
      </form>
      </div>
    )
}

export default Contact