import React from 'react'
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_f4al0ry', 'template_102czfw', e.target, 'tXIrIAOuR8YJ0qJ3X')
            .then(res => {
                console.log(res.text);
            })
            .catch(err => console.log(err.text));
    }
    return (
        <div className='from'>
            <h1>Contact</h1>
            <form onSubmit={sendEmail}>
                <label>name</label>
                <input type="text" name='name'></input>
                <label>Email</label>
                <input type="email" name='user_email'></input>
                <label>Message</label>
                <textarea name='message' rows="6" placeholder='Type Your message '></textarea>
                <button className='btn'>Submit</button>
            </form>

        </div>
    )
}

export default Contact