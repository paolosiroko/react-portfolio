import React from "react";
import "../components/styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Paolo Siroko</h2>
        <div className="prompt" style={{ margin: "40px" }}>
          <p>
            A software developer with 2 years experience and a passion for
            learning and creating.This is my portfolio.
          </p>

          <li style={{ margin: "20px" }}>
            <a href="https://www.linkedin.com/in/paolo-siroko-452b98216/">
              LinkedIn
            </a>
          </li>

          <li style={{ margin: "20px" }}>
            <a href="https://github.com/paolosiroko">Github</a>
          </li>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS,Python , Django, React Native, Rest
              API's , BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Python, Django, MySQL, MongoDB, Postgress, Firebase, AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Html, CSS,react js library, JavaScript, Python,Django </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
