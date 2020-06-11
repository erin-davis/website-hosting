import React from "react";

export default function ContactForm(){

  /*on submit should pop and alert saying it's been submitted or just change the
  contact form to just a message that says "I'll get back to you soon!"
  Also make sure all the inputs except the checkbox are required
  */
  return (
    <div className="contact">
      <h1>Contact Me!</h1>
      <form>
        <label for="name">Name:</label>
        <input
        type="text"
        id="name"
        name="name"
        />
        <label for="email">Email Address:</label>
        <input
        type="email"
        id="email"
        name="email"
        />
        <label for="message">Message:</label>
        <input
        type="text"
        id="message"
        name="message"
        />
        <lable for="newsletter">I want to sign up for your monthly newsletter</lable>
        <input
        type="checkbox"
        id="newsletter"
        name="newsletter"
        />
        <input type="submit" value="Submit!"/>
      </form>
    </div>
  );
}
