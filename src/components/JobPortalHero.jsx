import React from "react";
import "../styles/jobportal.css";

const JobPortalHero = () => {
  return (
    <section className="jobportal">
      <div className="jobportal-container container">
        <div className="jobportal-left">
          <div className="jobportal-left-top">
            <h1>
              Jobs, Internships
              <br /> & Hiring Challenges
            </h1>
            <p>
              Apply to a plethora of hiring opportunities & work with your dream
              companies!
            </p>
          </div>
          <div className="jobportal-btns">
            <button className="btn">Explore Now</button>
            <button className="postjob-btn">Post Jobs/Internships</button>
          </div>
          <div className="jobportal-cards">
            <a href="https://unstop.com/jobs">
              <strong>Jobs</strong>
            </a>
            <a href="https://unstop.com/internships">
              <strong>Interships</strong>
            </a>
            <a href="https://unstop.com/hiring-challenges">
              <strong>Hiring Challenges</strong>
            </a>
          </div>
        </div>
        <div className="jobportal-img">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/job/Job-opportunities.png?d=900x700"
            alt="job postal hero"
          />
          <div className="speaker">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d74c0f70dbe_internships_icon.png?d=80x80"
              alt="Internships"
            />
            <div>
              6500+ <span> Internships</span>
            </div>
          </div>
          <div className="building">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d74bc4b38e2_companies_icon.png?d=80x80"
              alt="Companies"
            />
            <div>
              4000+ <span> Companies </span>
            </div>
          </div>
          <div className="bag">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d74becd0c8f_job_icon.png?d=80x80"
              alt="bag"
            />
            <div>
              19000+ <span> Jobs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPortalHero;
