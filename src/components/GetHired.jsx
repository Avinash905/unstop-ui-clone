import React from "react";
import CommonCards from "./CommonCards";

const GetHired = () => {
  const images = [
    {
      title: "Jobs",
      subtitle: "",
      image: "https://cdn.unstop.com/uploads/images/home/job.png?d=570x340",
      link: "https://unstop.com/jobs?job-timing=full_time",
      small: "Full-Time",
    },
    {
      title: "Internships",
      subtitle: "",
      image:
        "https://cdn.unstop.com/uploads/images/home/internship.png?d=570x340",
      link: "https://unstop.com/internships?job-timing=part_time",
      small: "Part-Time",
    },
    {
      title: "Challenges",
      subtitle: "",
      image:
        "https://cdn.unstop.com/uploads/images/home/hiring-challenges.png?d=570x340",
      link: "https://unstop.com/hiring-challenges",
      small: "Hiring",
    },
    {
      title: "Internships",
      subtitle: "",
      image:
        "https://cdn.unstop.com/uploads/images/home/paid-internship.png?d=570x340",
      link: "https://unstop.com/internships?paid-unpaid=paid",
      small: "Paid",
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Get Hired"}
      content={
        "Work with your dream companies by applying to hiring challenges and full-time & part-time jobs/internships."
      }
      type="hired"
    />
  );
};

export default GetHired;
