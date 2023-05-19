import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
// import validator from 'validator';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
   
      return;
    }

    setName('');
    setMessage('');
    setEmail('');
  };
  // const [formData, setFormData] = useState({name: "",email: "",message: ""});

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
  //   // );
  
  // }

  // const [emailError, setEmailError] = useState('')
  // const validateEmail = (e) => {
  //   var email = e.target.value
  
  //   if (validator.isEmail(email)) {
  //     setEmailError('Valid Email :)')
  //   } else {
  //     setEmailError('Enter valid Email!')
  //   }
  // };
  return (
    <div className='container'>
      <br></br>
      <h1>Contact Page</h1>
      <form>
        <div className='mb-3'>
        <label for="InputName" class="form-label"> Name</label>
        <input
          value={userName}
          name="Name"
          onChange={handleInputChange}
          type="text"
          className="form-control" 
          placeholder="name"
        />
        </div>
        <div className='mb-3'>
        <label for="InputEmail" className="form-label">Email address</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          className="form-control" 
          placeholder="name@example.com"
        />
        </div>
        <div className='mb-3'>
        <label for="InputMessage" className="form-label">Example textarea</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          className="form-control" 
          placeholder="message"
          rows={"3"}
        />
        </div>
        <button className="btn btn-primary" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>




    // <div>
    //   <h1>Contact Page</h1>
    //   <form onSubmit = {handleSubmit}>
    //   <label htmlFor="name">Name:</label>
    //   <input type="text" id="name" name="name" />

    //   <label htmlFor="email">Email:</label>
    //   <input type="email" id="email" name="email" onChange={(e) => {validateEmail(e); }}  />
    //   <br></br>
    //   <span style={{
    //       fontWeight: 'bold',
    //       color: 'red',
    //     }}>{emailError}</span>

    //   <label htmlFor="message">Message:</label>
    //   <textarea id="message" name="message" />

    //   <button type="submit">Submit</button>
    // </form>
    // </div>
  );
};
