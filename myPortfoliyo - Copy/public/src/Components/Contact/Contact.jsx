import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
      <section className='collabrate-section'>
        <div className='collabrate'>
          <span>🚀</span>
          Let's <span className='collbrate-color'> collaborate</span>
        </div>

        <div className="container">
          <p className='sub'>
            Got a question, proposal or project or want to work
            <br />
            together on something? Feel free to reach out.
          </p>

          <form action="POSt">
            <div className="input-row">
              <div className="side">
                <label for="name">Your Name</label>
                <input placeholder='Enter You Name' name='name' type='text' required />
              </div>
              <div className="side1">
                <label for="name">Your E-mail</label>
                <input placeholder='Enter You Email Address' name='email' type='text' required />
              </div>
            </div>
            <div className="textarea">
              <label for="message">Your Message</label>
              <textarea name="message" id="message" placeholder="Hi, I think we need you to work on this particular product. Reach out as soon as you can" required=""></textarea>
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>

      </section>
    </>
  )
}

export default Contact
