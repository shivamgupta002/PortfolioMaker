import React from "react";

const Template2 = () => {
  return (
    <>
      <div className="body">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center mb-4">
              <h1 class="mb-2">My Portfolio</h1>
              <p>Welcome to my animated portfolio!</p>
            </div>
          </div>

          {/* <!-- About Me Section --> */}
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">About Me</h2>
                  <p class="card-text">
                    I am a passionate developer with expertise in web
                    technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Skills Section --> */}
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">Skills</h2>
                  <p class="card-text">
                    HTML, CSS, JavaScript, Bootstrap, Python, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Contact Section --> */}
          <div class="row mt-4">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body text-center">
                  <h2 class="card-title">Contact</h2>
                  <ul class="list-unstyled">
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
    </>
  );
};

export default Template2;
