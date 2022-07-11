import React,{useState,useEffect} from "react";
import "../components/styles/Home.css";

export default function Home() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Django", "React Js"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className="home">
      <div className="about">
        <h2 style={{ margin: "60px" }} > {`Hi, My Name is Paolo Siroko`}<span><br/>{text}</span></h2>
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
