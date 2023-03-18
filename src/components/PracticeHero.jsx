import React, { useRef } from "react";
import "../styles/practicehero.css";

const PracticeHero = () => {
  const windowSize = useRef(window.innerWidth);

  return (
    <section className="practicehero">
      <div className="practicehero-container container">
        <div className="practicehero-left">
          <div className="practicehero-left-top">
            <h1>Practice</h1>
            <p>
              Solve easy to complex problems & get hands-on experience to get
              hired by your dream company!
            </p>
          </div>
          <div className="practicehero-cards">
            <a href="https://unstop.com/festival/unstop-5dayinterviewprep-unstop-96132">
              <span>
                5-Day <br />
                Interview Prep
              </span>
            </a>
            <a href="https://unstop.com/courses/mocks">
              <span>
                MCQ-based <br />
                Mock Tests
              </span>
            </a>
            <a href="https://unstop.com/coding/100-day-of-coding-sprint-339">
              <span>
                100-Day <br />
                Coding Sprint
              </span>
            </a>
            <a href="https://unstop.com/practice/mock-interview">
              <span>Mock Interviews</span>
            </a>
          </div>
        </div>
        <div className="practicehero-img">
          <img
            src={
              windowSize.current <= 1100
                ? "	https://d8it4huxumps7.cloudfront.net/uploads/images/63ca2437e147a_practice_hero_mobile.png"
                : "https://d8it4huxumps7.cloudfront.net/uploads/images/63ca281cba532_practice_hero.png"
            }
            alt="practice hero"
          />
        </div>
      </div>
    </section>
  );
};

export default PracticeHero;
