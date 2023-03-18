import React, { useRef } from "react";
import "../styles/mockinterview.css";

const MockInterview = () => {
  const windowSize = useRef(window.innerWidth);

  return (
    <section className="mockinterview">
      <div className="mockinterview-container container">
        <a
          href="https://unstop.com/practice/mock-interview"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            src={
              windowSize.current <= 800
                ? "https://d8it4huxumps7.cloudfront.net/uploads/images/63de4190e1c12_mock_interview_banner_mobile.png?d=541x912"
                : "https://d8it4huxumps7.cloudfront.net/uploads/images/63de4167521d8_mock_interview_banner.png?d=2360x912"
            }
            alt="mock interview"
          />
        </a>
      </div>
    </section>
  );
};

export default MockInterview;
