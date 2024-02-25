import React from "react";
import "./template1.css";
const Template1 = ({ data }) => {
  return (
    <>
      <div className="body">
        {/* <!-- About Me Section --> */}
        <div className="section">
          <div class="col-md-12 text-center mb-4">
            <h1 class="mb-2">My Portfolio</h1>
            <p>{data.aboutMe}</p>
          </div>
          <div class="row bg_white section">
            <div className="container ">
              <h2 className="section-title">About Me</h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Who Am I?</h5>
                      <p className="card-text">{data.aboutMe}</p>
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
                    <p className="card-text">{data.skill}</p>
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
                      <li>First Name: {data.firstName}</li>
                      <li>Last Name: {data.lastName}</li>
                      <li>Email: {data.email}</li>
                      <li>
                        Github:{" "}
                        <a href={data.githubProfile}>{data.githubProfile}</a>
                      </li>
                      <li>
                        LinkedIn:{" "}
                        <a href={data.linkedinProfile}>
                          {data.linkedinProfile}
                        </a>
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
