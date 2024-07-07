
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Swal from 'sweetalert2'



export default function ContactMe() {




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMP, form.current, {
        publicKey:process.env.REACT_APP_PUB,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Thank You",
            text: "Your message has sent.",
            icon: "success"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Your Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_name"
              id="first-name"
              required
            />
          </label>
          {/* <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              
            />
          </label> */}
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Your Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_name"
              id="email"
              required
            />
          </label>
          {/* <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="tel"
              
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              placeholder='xxx-xxx-xxxx'
              required
            />
          </label> */}
        </div>
        {/* <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit" value="Send">Submit</button>
        </div>
      </form>
    </section>
  );
}
