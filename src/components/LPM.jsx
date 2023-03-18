import React from "react";
import "../styles/lpm.css";

const LPM = () => {
  const images = [
    {
      title: "learn",
      image:
        "https://cdn.unstop.com/uploads/images/home/learn-bg-new.png?d=747x534",
      link: "https://unstop.com/courses",
    },
    {
      title: "practice",
      image:
        "https://cdn.unstop.com/uploads/images/home/practice-bg-new.png?d=747x533",
      link: "https://unstop.com/practice",
    },
    {
      title: "mentorships",
      image:
        "https://cdn.unstop.com/uploads/images/home/mentorships-bg-new.png?d=747x534",
      link: "https://unstop.com/mentor",
    },
  ];

  return (
    <section className="lpm">
      <div className="lpm-container container">
        <div className="lpm-images">
          {images.map((ele) => {
            return (
              <div
                className="lpm-image"
                key={ele.image}
              >
                <span>{ele.title}</span>
                <a href={ele.link}>
                  <img
                    src={ele.image}
                    alt={ele.title}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LPM;
