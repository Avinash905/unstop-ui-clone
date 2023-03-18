import React from "react";
import CommonCards from "./CommonCards";

const AceHiring = () => {
  const images = [
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63b4012ca76f0_amazon.png",
      link: "https://unstop.com/coding/practice",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9671ebb4f_google.png",
      link: "https://unstop.com/coding/practice",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63ce601fa5efc_microsoft.png",
      link: "https://unstop.com/coding/practice",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63ce6042a7392_meta.png",
      link: "https://unstop.com/coding/practice",
      small: "",
    },
    {
      title: "",
      subtitle: "",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63ce6055342a4_apple.png",
      link: "https://unstop.com/coding/practice",
      small: "",
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Practice Coding & Ace Hiring Assessments"}
      content={
        "Level up your coding skills by practicing the hiring assessments of your dream companies & ace your placement game!"
      }
      type="acehiring"
      link={'"https://unstop.com/courses/mocks"'}
    />
  );
};

export default AceHiring;
