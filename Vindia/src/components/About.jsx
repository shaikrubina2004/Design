import "./About.css";
import { useEffect, useState } from "react";
import gsap from "gsap";

function About() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [current, setCurrent] = useState(0);
  const [employees, setEmployees] = useState(0);

  const lines = [
    "VIndia Infrasec started its operations with a small villa project in the year 2010. VIndia Infrasec has defied all odds to be recognized as a spearheading force of engineering construction in South India.", "VIndia Infrasec is built on the principles of excellence and integrity. We work at the highest ethical standards and ensure the quality of our projects. It started its operations in the form of a partnership firm in the year 2010 and got incorporated as a Private Ltd Company in 2020.", "VIndia Infrasec is headquartered in Bangalore.Today the company has a strategic presence in locations across South India.We are differentiated by the quality of our people.We align our capabilities to the objectives of our customers to convert their dreams into reality."
  ];

  useEffect(() => {
    // Number counters
    const animateValue = (setter, finalValue, speed) => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setter(start);
        if (start >= finalValue) clearInterval(interval);
      }, speed);
    };

    animateValue(setYears, 15, 50);
    animateValue(setProjects, 684, 2);
    animateValue(setCurrent, 24, 40);
    animateValue(setEmployees, 234, 10);

    // GSAP Line-by-line animation (Fade + Slide Up)
    gsap.utils.toArray(".about-line").forEach((line, i) => {
      gsap.to(line, {
        opacity: 1,
        y: 0,
        delay: i * 0.25,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section className="about-section">
      <h1>
        VIndia <span>Infrasec</span>
      </h1>

      <div className="about-text">
        {lines.map((text, i) => (
          <p key={i} className="about-line">
            {text}
          </p>
        ))}
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h2>{years}+</h2>
          <p>Years of Experience</p>
        </div>

        <div className="stat-box">
          <h2>{projects}+</h2>
          <p>Completed Projects</p>
        </div>

        <div className="stat-box">
          <h2>{current}+</h2>
          <p>Current Projects</p>
        </div>

        <div className="stat-box">
          <h2>{employees}+</h2>
          <p>Employees</p>
        </div>
      </div>
    </section>
  );
}

export default About;
