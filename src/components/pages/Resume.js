import React from 'react';
import {FaFileDownload} from 'react-icons/fa'
let resume = "/assets/images/resume.pdf"

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <br></br>
      <div>
        <h6>Download Resume</h6>
        <a href={process.env.PUBLIC_URL+resume} target="_blank" rel="noopener noreferrer">
          <FaFileDownload className="m-3" size={42}/>
          <p></p>
        </a>
        <h4>Front-end Proficiencies</h4>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <br></br>
        <h4>Back-end Proficiencies</h4>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </div>
    </div>
  );
}
