import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-tabs">
        <div className="learn-tab">
          <NavLink to={"/courses"}>
            <span className="tab-icon"></span>
            <span className="tab-name">learn</span>
          </NavLink>
        </div>
        <div className="practice-tab">
          <NavLink to={"/practice"}>
            <span className="tab-icon"></span>
            <span className="tab-name">practice</span>
          </NavLink>
        </div>
        <div className="compete-tab">
          <NavLink to={"/compete"}>
            <span className="tab-icon"></span>
            <span className="tab-name">compete</span>
          </NavLink>
        </div>
        <div className="mentorship-tab">
          <NavLink to={"/mentor"}>
            <span className="tab-icon"></span>
            <span className="tab-name">mentorship</span>
          </NavLink>
        </div>
        <div className="jobs-tab">
          <NavLink to={"/job-portal"}>
            <span className="tab-icon"></span>
            <span className="tab-name">jobs</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
