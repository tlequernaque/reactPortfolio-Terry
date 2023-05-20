import React from 'react';
import { FaGithub } from "react-icons/fa";
let Astrnomy = "./assets/images/astrnmy.png"
let cloudCalorie = "./assets/images/cloudcalorie.png"

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="d-flex flex-row m-3">
        <div className="card" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL+Astrnomy}  alt="astranomy project" className="card-img-top" height={600}></img>
          <div className="card-body">
            <h5 className="card-title">Astrnomy</h5>
            <p className="card-text"></p>
            <a href='https://github.com/blairrrrwho/astrnmy.git'>
              <FaGithub className="m-3" size={42}/>
            </a>
            <a href='https://blairrrrwho.github.io/astrnmy/#rm' className="btn btn-primary">URL</a>
          </div>
        </div>

        <div className="card" style={{width: '18rem'}}>
          <img src={process.env.PUBLIC_URL+cloudCalorie}  alt="clouCalorie project" className="card-img-top" height={600}></img>
          <div className="card-body">
            <h5 className="card-title">CloudCalorie </h5>
            <p className="card-text"></p>
            <a href='https://github.com/AaronDreyer/CloudCalorie.git'>
              <FaGithub className="m-3" size={42}/>
            </a>
            <a href='https://cloudcalorie.herokuapp.com/login' className="btn btn-primary">URL</a>
          </div>
        </div>



      </div>
      



      {/* <div className="d-flex flex-row m-3">
        <section className="m-3">
          <div className="border border-dark">
            <div >
              <a href='https://blairrrrwho.github.io/astrnmy/#rm'>
                <div>
                  <img src={process.env.PUBLIC_URL+Astrnomy} alt="astranomy project" height={800}></img>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="m-3">
          <div className="border border-dark">
            <div>
              <a href="https://cloudcalorie.herokuapp.com/login">
                <div>
                  <img src={process.env.PUBLIC_URL+cloudCalorie} alt="clouCalorie project" height={800}></img>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
}
