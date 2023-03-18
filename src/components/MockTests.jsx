import React from "react";
import CommonCards from "./CommonCards";

const MockTests = () => {
  const images = [
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d4bd1505780_online_coding_assessment_mock.png",
      link: "https://unstop.com/p/online-coding-assessment-mock-test-unstop-256853",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d4bd1e29758_verbal_ability_mock_test.png",
      link: "https://unstop.com/p/verbal-ability-mock-test-unstop-257148",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d4bd07d0a51_general_aptitude_mock.png",
      link: "https://unstop.com/p/general-aptitude-mock-test-unstop-257239",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d4bcfb2826a_computer_fundamental_mock.png",
      link: "https://unstop.com/p/computer-fundamentals-mock-test-unstop-256848",
      small: "",
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Mock Tests"}
      content={
        "Practice these questions & prepare yourself for the real-life interview problems!"
      }
      type="mocktest"
      link={'"https://unstop.com/courses/mocks"'}
    />
  );
};

export default MockTests;
