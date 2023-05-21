import React from 'react';
let myPic = "/assets/images/about-me.jpeg"

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <div className="d-flex justify-content-center">
        <img src={process.env.PUBLIC_URL+myPic} alt="my pic" height={250}></img>
      </div>
      <br></br>
      <p>
      My name is Terry Lequernaque, I'm 28 and I'm from venezuela. I've lived in Georgia most of my life. I grew up in Atlanta but I moved to Savannah 5 years ago. I recently starter attending a coding bootcamp at GATech. This is my portfolio of different work projects that I have completed.
      </p>
    </div>
  );
}
