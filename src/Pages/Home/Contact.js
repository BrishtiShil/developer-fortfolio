import React from 'react'
import "./Contact.css";

const Contact = () => {
    return (
        <div className='from'>
            <h1>Contact</h1>
            <form>
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder='Type Your message '></textarea>
                <button className='btn'>Submit</button>
            </form>
            <div className='left'>

            </div>
        </div>
    )
}

export default Contact