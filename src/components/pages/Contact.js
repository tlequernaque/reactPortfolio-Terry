import React, {useState} from 'react';
import validator from 'validator';

export default function Contact() {
  // const [formData, setFormData] = useState({name: "",email: "",message: ""});

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    // );
  
  }

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  };
  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit = {handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={(e) => {validateEmail(e); }}  />
      <br></br>
      <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
