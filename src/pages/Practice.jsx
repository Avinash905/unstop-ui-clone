import React from "react";
import AceHiring from "../components/AceHiring";
import CodingSprint from "../components/CodingSprint";
import DayInterview from "../components/DayInterview";
import MockInterview from "../components/MockInterview";
import MockTests from "../components/MockTests";
import OurNumbers from "../components/OurNumbers";
import PracticeHero from "../components/PracticeHero";
import SlidingBrands from "../components/SlidingBrands";

const Practice = () => {
  return (
    <>
      <PracticeHero />
      <SlidingBrands
        small={"Practice & Join"}
        title={"Dream Companies:"}
      />
      <DayInterview />
      <MockTests />
      <CodingSprint />
      <AceHiring />
      <MockInterview />
      <OurNumbers />
    </>
  );
};

export default Practice;
