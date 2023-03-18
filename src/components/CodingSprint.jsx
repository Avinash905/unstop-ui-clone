import React from "react";
import "../styles/codingsprint.css";

const CodingSprint = () => {
  return (
    <section className="codingsprint">
      <div className="codingsprint-container container">
        <div className="codingsprint-left">
          <div className="codingsprint-content">
            <h2>100-Day Coding Sprint</h2>
            <p className="big">
              Solve a new challenge every day for the next 100 days & be
              unstoppable!
            </p>
            <h3>Earn Your Badge</h3>
            <p className="small">
              Be the proud owner of a unique badge at the end of the 100th day.
            </p>
            <a
              href="https://unstop.com/coding/100-day-of-coding-sprint-339"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Start your <strong> Day 1 now!</strong>
            </a>
          </div>
          <div className="codingsprint-coins">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/63ca53e616e15_sprint_badge.png"
              alt="code coins"
            />
          </div>
        </div>
        <div className="codingsprint-image">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/63ca414f787d3_coding_sprint_banner.png"
            alt="code sprint"
          />
        </div>
      </div>
    </section>
  );
};

export default CodingSprint;
