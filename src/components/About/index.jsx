import React from "react";
import "./styleAbout.css";

export const About = () => {
  const imgProfile = "https://avatars.githubusercontent.com/u/82902973?v=4";
  const urlGithub = "https://github.com/pjmorante";
  const urlLinkedin =
    "https://linkedin.com/in/pedro-josé-morante-vásquez-74171524";
  const urlTwitter = "https://twitter.com/pedro_chejo";

  return (
    <div className="container">
      <div className="card">
        <div className="img_profile">
          <img src={imgProfile} alt="" />
        </div>
        <div className="name">
          <h2 className="name_title">Pedro José Morante Vásquez</h2>
        </div>
        <div className="email">
          <box-icon name="mail-send"></box-icon>
          <span>pedro.morante@outlook.com</span>
        </div>
        <div className="social_net">
          <div className="github">
            <a href={urlGithub} target="_blank">
              <box-icon type="logo" name="github" size="md"></box-icon>
            </a>
          </div>
          <div className="linkedin">
            <a href={urlLinkedin} target="_blank">
              <box-icon type="logo" name="linkedin-square" size="md"></box-icon>
            </a>
          </div>
          <div className="twitter">
            <a href={urlTwitter} target="_blank">
              <box-icon type="logo" name="twitter" size="md"></box-icon>
            </a>
          </div>
        </div>
        <div>
          <h2 className="description_title">Description</h2>
          <p className="description">
            My name is Pedro Jose Morante Vasquez and I'm 39 years old. I am
            Industrial engineer graduated in 2012. I love reading books and
            watching movies. I would like to become a Full-stack web developer
            soon.
          </p>
        </div>
        <div className="list">
          <h2 className="description_title">
            3 things that I have learned so far
          </h2>
          <ol className="description">
            <li>HTML</li>
            <li>CSS basic and Flexbox</li>
            <li>With JS and React everything is possible</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
