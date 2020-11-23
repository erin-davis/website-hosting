import React, {useState} from "react";
import "../styles/ContactForm.css";
import emailjs from "emailjs-com"

export default function ContactForm(){
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_asrrdik', 'template_31u6koi', e.target, 'user_wAhuZV6QrAHl0yvShygvC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className="contact comp">
      <h1>Contact Me!</h1>
      <form onSubmit={sendEmail}>
        <label for="name">Name:</label>
        <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        />
        <label for="email">Email Address:</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email Address"
        />
        <label for="message">Message:</label>
        <input
        type="text"
        id="message"
        name="message"
        placeholder="Your message here!"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
