import React from 'react';
import { FaGithub } from "react-icons/fa";
let Astrnomy = "/assets/images/astrnmy2.png";
let cloudCalorie = "/assets/images/cloudcalorie2.png";
let myWeatherApi = "/assets/images/My-Weather-API.png";
// let ultimateNoteTaker = "/assets/images/ultimate-noteTaker.png";
let workdayScheduler = "/assets/images/Third-party-api-work-day-scheduler_.png";
let textEditor = "/assets/images/ultimate-texteditor-pwa.herokuapp.com_.png";
let codecollab = "/assets/images/codecollab.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className=" d-flex flex-wrap m-3">
        <div className="card m-4" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL+Astrnomy}  alt="astranomy project" className="card-img-top" height={200}></img>
          <div className="card-body">
            <h5 className=" mx-auto card-title"> Astrnomy</h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-center">
              <a className='' href='https://github.com/blairrrrwho/astrnmy.git'>
              <FaGithub className="me-3" size={42}/>
              </a>
              <a href='https://blairrrrwho.github.io/astrnmy/#rm' className="btn btn-primary">URL</a>
            </div>
            
          </div>
        </div>

        <div className="card m-4" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL+cloudCalorie}  alt="clouCalorie project" className="card-img-top" height={200}></img>
          <div className="card-body">
            <h5 className="card-title">CloudCalorie </h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-center">
              <a href='https://github.com/AaronDreyer/CloudCalorie.git'>
              <FaGithub className="me-3" size={42}/>
              </a>
              <a href='https://cloudcalorie.herokuapp.com/login' className="btn btn-primary">URL</a>
            </div>
            
          </div>
        </div>

        <div className="card m-4" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL+myWeatherApi}  alt="myWeather Api project" className="card-img-top" height={200}></img>
          <div className="card-body">
            <h5 className="card-title">Weather App </h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-center">
              <a href='https://github.com/tlequernaque/My-Weather-API.git'>
              <FaGithub className="me-3" size={42}/>
              </a>
              <a href='https://tlequernaque.github.io/My-Weather-API/' className="btn btn-primary">URL</a>
            </div>
          </div>
        </div>

        <div className="card m-4" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL+codecollab}  alt="noteTaker app" className="card-img-top" height={200}></img>
          <div className="card-body">
            <h5 className="card-title">CodeCollab </h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-center">
              <a href='https://github.com/blairrrrwho/codecollab'>
              <FaGithub className="me-3" size={42}/>
              </a>
              <a href='https://codecollab-for-developers.herokuapp.com/' className="btn btn-primary">URL</a>
            </div>
            
          </div>
        </div>

        <div className="card m-4" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL+workdayScheduler}  alt="workday scheduler app" className="card-img-top" height={200}></img>
          <div className="card-body">
            <h5 className="card-title">Workday Scheduler App </h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-center">
              <a href='https://github.com/tlequernaque/Third-party-api-work-day-scheduler.git'>
              <FaGithub className="me-3" size={42}/>
              </a>
              <a href='https://tlequernaque.github.io/Third-party-api-work-day-scheduler/' className="btn btn-primary">URL</a>
            </div>
            
          </div>
        </div>

        <div className="card m-4" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL+textEditor}  alt="textEditor app" className="card-img-top" height={200}></img>
          <div className="card-body">
            <h5 className="card-title">Text Editor App </h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-center">
              <a href='https://github.com/tlequernaque/Ultimate-textEditor-PWA.git'>
              <FaGithub className="me-3" size={42}/>
              </a>
              <a href='https://ultimate-texteditor-pwa.herokuapp.com/' className="btn btn-primary">URL</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
