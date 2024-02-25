import React from "react";

const Template2 = ({ data }) => {
  return (
    <>
      <div className="body">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center mb-4">
              <h1 class="mb-2">My Portfolio</h1>
              <p>{data.aboutMe}</p>
            </div>
          </div>

          {/* <!-- About Me Section --> */}
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">About Me</h2>
                  <p class="card-text">{data.aboutMe}</p>
                </div>
              </div>
            </div>

            {/* <!-- Skills Section --> */}
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">Skills</h2>
                  <p class="card-text">{data.skill}</p>
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
                    <li>First Name: {data.firstName}</li>
                    <li>Last Name: {data.lastName}</li>
                    <li>Email: {data.email}</li>
                    <li>
                      Github:{" "}
                      <a href={data.githubProfile}>{data.githubProfile}</a>
                    </li>
                    <li>
                      LinkedIn:{" "}
                      <a href={data.linkedinProfile}>{data.linkedinProfile}</a>
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
