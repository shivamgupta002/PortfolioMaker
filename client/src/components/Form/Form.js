import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
const Form = () => {
  // const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [githubProfile, setGithubProfile] = useState("");
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [skill, setSkill] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  // Error state
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [githubProfileError, setGithubProfileError] = useState("");
  const [linkedinProfileError, setLinkedinProfileError] = useState("");
  const [skillError, setSkillError] = useState("");
  const [aboutMeError, setAboutMeError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormSubmitted(true);
    setFirstNameError("");
    setLastNameError("");
    setUsernameError("");
    setEmailError("");
    setGithubProfileError("");
    setLinkedinProfileError("");
    setSkillError("");
    setAboutMeError("");

    // Validation logic
    if (firstName.trim() === "") {
      setFirstNameError("Valid first name is required.");
    }
    if (lastName.trim() === "") {
      setLastNameError("Valid last name is required.");
    }
    if (username.trim() === "") {
      setUsernameError("Your username is required.");
    }
    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
    }
    if (githubProfile.trim() === "") {
      setGithubProfileError("Please enter your Github Profile.");
    }
    if (linkedinProfile.trim() === "") {
      setLinkedinProfileError("Please enter your Linkedin Profile.");
    }
    if (skillError.trim() === "") {
      setSkillError("Please enter your Skills");
    }
    if (aboutMeError.trim() === "") {
      setAboutMeError("Please write about yourself");
    }
    try {
      await axios.post("http://localhost:5000/data", {
        firstName,
        lastName,
        username,
        email,
        githubProfile,
        linkedinProfile,
        skill,
        aboutMe,
      });
      // .then((res) => {
      //   history("/templates");
      // });
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <form className="row g-3 mt-3 col-sm-8" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className={`form-control ${
                  formSubmitted && !firstName && "is-invalid"
                }`}
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {formSubmitted && !firstName && (
                <div className="invalid-feedback">{firstNameError}</div>
              )}
            </div>

            {/* Last Name */}
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className={`form-control ${
                  formSubmitted && !lastName && "is-invalid"
                }`}
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {formSubmitted && !lastName && (
                <div className="invalid-feedback">{lastNameError}</div>
              )}
            </div>

            {/* User Name */}
            <div className="col-sm-6">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className={`form-control ${
                  formSubmitted && !username && "is-invalid"
                }`}
                id="username"
                placeholder="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {formSubmitted && !username && (
                <div className="invalid-feedback">{usernameError}</div>
              )}
            </div>

            {/* Email*/}
            <div className="col-sm-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className={`form-control ${
                  formSubmitted &&
                  (!email || !email.includes("@")) &&
                  "is-invalid"
                }`}
                id="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formSubmitted && (!email || !email.includes("@")) && (
                <div className="invalid-feedback">{emailError}</div>
              )}
            </div>

            {/* Github Profile*/}
            <div className="col-sm-6">
              <label htmlFor="githubProfile" className="form-label">
                Github Profile
              </label>
              <input
                type="text"
                className={`form-control ${
                  formSubmitted && !githubProfile && "is-invalid"
                }`}
                id="githubProfile"
                placeholder="Your Github Profile"
                value={githubProfile}
                onChange={(e) => setGithubProfile(e.target.value)}
              />
              {formSubmitted && !githubProfile && (
                <div className="invalid-feedback">{githubProfileError}</div>
              )}
            </div>

            {/* Linkedin Profile*/}
            <div className="col-sm-6">
              <label htmlFor="linkedinProfile" className="form-label">
                Linkedin Profile
              </label>
              <input
                type="text"
                className={`form-control ${
                  formSubmitted && !linkedinProfile && "is-invalid"
                }`}
                id="linkedinProfile"
                placeholder="Your Linkedin Profile"
                value={linkedinProfile}
                onChange={(e) => setLinkedinProfile(e.target.value)}
              />
              {formSubmitted && !linkedinProfile && (
                <div className="invalid-feedback">{linkedinProfileError}</div>
              )}
            </div>

            {/* Skills Profile*/}
            <div className="col-md-12">
              <label htmlFor="skill" className="form-label">
                Skills
              </label>
              <input
                type="text"
                className={`form-control ${
                  formSubmitted && !skill && "is-invalid"
                }`}
                id="skill"
                placeholder="Your Skills"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
              {formSubmitted && !skill && (
                <div className="invalid-feedback">{skillError}</div>
              )}
            </div>

            {/* About Yourself Profile*/}
            <div className="col-md-12">
              <label htmlFor="skill" className="form-label">
                About Yourself
              </label>
              <textarea
                type="text"
                className={`form-control ${
                  formSubmitted && !aboutMe && "is-invalid"
                }`}
                id="skill"
                placeholder="About Yourself"
                value={skill}
                onChange={(e) => setAboutMe(e.target.value)}
              />
              {formSubmitted && !aboutMe && (
                <div className="invalid-feedback">{aboutMeError}</div>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-md-12 text-center d-flex justify-content-center">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
