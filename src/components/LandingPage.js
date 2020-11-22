import React from "react";
import "../styles/LandingPage.css"


export default function LandingPage() {

  return (
    <div>
      <section className="landing-page comp">
        <h2>Hello, I'm Erin!</h2>
        <p>Hi, I'm Erin Davis! I'm a Front-End Web Developer from the Oklahoma area currently available for remote work.</p>
        <p>I've been studying front-end web development since early 2018. In this time, I've mostly been working on personal projects and within my own repositories to expand my knowledge. Though it hasn't been the easiest path, it's been the most satisfying in terms of problem solving and being able to clearly document my progress. Every week is full of learning new skills and mastering old ones.</p>
        <p>In my front-end development, I have a focus on ReactJS, HTML, CSS (including some CSS pre-processors), and JavaScript. I'm familiar with RESTful APIs and unit/snapshot testing using both Jest and React Testing Library. Though I'm mostly focused on expanding and mastering my React knowledge these days, I still make time to learn and practice Angular.</p>
        <p>You can view my resume with the link below or contact me using this site. Thank you for vising and have a great day!</p>
        <a className="view-resume" href="https://drive.google.com/file/d/1AfOjm6lUc8gUw9clcuIN41-GiaKM2ek2/view?usp=sharing" target="_blank">Resume</a>
      </section>
    </div>
  );
}
