import React from "react";
import "../styles/ournumbers.css";

const OurNumbers = () => {
  return (
    <section className="ournumbers">
      <div className="ournumbers-container container">
        <h2>
          Our
          <strong>Numbers</strong>
          <img
            src="https://cdn.unstop.com/uploads/images/home/graph-icon.svg?d=38x27"
            alt="increasing"
            loading="lazy"
          />
        </h2>
        <div className="numbers-container">
          <div className="active-users-box">
            <h3>~5Mn+</h3>
            <span>Active Users</span>
          </div>
          <div className="opportunity-box">
            <h3>110K+</h3>
            <span>Opportunities</span>
          </div>
          <div className="organization-box">
            <h3>42K+</h3>
            <span>Organizations</span>
          </div>
          <div className="binary-box">
            <img
              src="https://cdn.unstop.com/uploads/images/home/digit-right.png?d=462x376"
              alt="binary"
              loading="lazy"
            />
          </div>
          <div className="binary-box">
            <img
              src="https://cdn.unstop.com/uploads/images/home/digit-right.png?d=462x376"
              alt="binary"
              loading="lazy"
            />
          </div>
          <div className="assessments-box">
            <h3>19.1Mn+</h3>
            <span>Assessments</span>
          </div>
          <div className="brands-box">
            <h3>500+</h3>
            <span>Brands trust us</span>
          </div>
          <div className="countries-box">
            <h3>78+</h3>
            <span>Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
