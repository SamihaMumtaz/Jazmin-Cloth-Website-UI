
import React, { useState } from 'react';
import Button from '../../../Utility/Button';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email && message) {
      setMessageSent(true);  
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className='contact-us'>
        <div className='container'>
            <div className='contact-text'>
                <h3>Contact</h3>
                <form onSubmit={handleSubmit}>
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className='form'>
                                  <input type="text" 
                                    className="form-control" 
                                    placeholder="Name" 
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                  />
                              </div>
                          </div>
                          <div className="col-12">
                              <div className='form'>
                                  <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="E-mail" 
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                  />
                              </div>
                          </div>
                          <div className="col-12">
                              <div className='form'>
                                  <textarea 
                                    className="form-control" 
                                    placeholder="Message" 
                                    rows="3" 
                                    name="message"
                                    value={message}
                                    onChange={handleInputChange}
                                  />
                              </div>
                          </div>
                          <div className='contactus-button'>
                              <Button text="Send Message" />
                          </div>
                      </div>
                  </div>
                </form>
                {messageSent && (
                  <div className="confirmation-message">
                    <p>Your message has been sent.</p>
                  </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default ContactUs;
