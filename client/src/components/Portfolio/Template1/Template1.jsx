import React from "react";
import "./template1.css";
const Template1 = () => {
  return (
    <>
      <div className="body">
        {/* <!-- About Me Section --> */}
        <div className="section">
          <div class="col-md-12 text-center mb-4">
            <h1 class="mb-2">My Portfolio</h1>
            <p>Welcome to my animated portfolio!</p>
          </div>
          <div class="row bg_white section">
            <div className="container ">
              <h2 className="section-title">About Me</h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Who Am I?</h5>
                      <p className="card-text">
                        I am a passionate developer with expertise in web
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Skills Section --> */}
        <div className="section bg-light">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">My Skills</h5>
                    <p className="card-text">
                      HTML, CSS, JavaScript, Bootstrap, Python, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Contact Section --> */}
        <div className="bg_white section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Let's Connect</h5>
                    <ul className="list-unstyled">
                      <li>First Name: John</li>
                      <li>Last Name: Doe</li>
                      <li>Email: john.doe@example.com</li>
                      <li>
                        Github: <a href="#">github.com/johndoe</a>
                      </li>
                      <li>
                        LinkedIn: <a href="#">linkedin.com/in/johndoe</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1;
