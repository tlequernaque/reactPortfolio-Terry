import React from 'react';
let Astrnomy = "./assets/images/astrnmy.png"
let cloudCalorie = "./assets/images/cloudcalorie.png"

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="d-flex flex-row m-3">
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
      </div>
    </div>
  );
}
