import React, {useState} from "react";
import "../styles/ContactForm.css";

export default function ContactForm(){

  /*on submit should pop and alert saying it's been submitted or just change the
  contact form to just a message that says "I'll get back to you soon!"
  Also make sure all the inputs except the checkbox are required
  */


  const [value, setValue] = useState({
    name: "",
    email: "",
    message: ""
  })
  const handleChanges = e =>{
    setValue({...value, [e.target.name]: e.target.value });
    console.log('this is from the contact form', e.target.value);
  }

  const submitHandler = e =>{
    e.preventDefault();
    alert("Your message has been");
  }

  return (
    <div className="contact comp">
      <h1>Contact Me!</h1>
      <form>
        <label for="name">Name:</label>
        <input
        type="text"
        id="name"
        placeholder="Name"
        name="name"
        value={value.name}
        onChange={handleChanges}
        />
        <label for="email">Email Address:</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={value.email}
        onChange={handleChanges}
        />
        <label for="message">Message:</label>
        <textarea
        id="message"
        name="message"
        placeholder="Your message here!"
        value={value.message}
        onChange={handleChanges}
        />
        <button type="submit" href="mailto:davisaerin@gmail.com" onSubmit={submitHandler}>Submit</button>
      </form>
    </div>
  );
}
