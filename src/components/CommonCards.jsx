import React from "react";
import "../styles/commoncards.css";
import { AiOutlineRight } from "react-icons/ai";

const CommonCards = ({ images, heading, content, type, link }) => {
  return (
    <section className={`${type}-cards card-cont`}>
      <div className="common-cards-container container">
        <h2>{heading}</h2>
        <div className="common-cards-content">
          <p>{content}</p>
          {type === "mocktest" || type === "acehiring" ? (
            <a href={link}>
              Explore All <AiOutlineRight />
            </a>
          ) : (
            <></>
          )}
        </div>
        <div className="common-cards-images">
          {images.map((ele) => {
            return (
              <div
                className={`common-cards-image ${type}`}
                key={ele.image}
              >
                <span>
                  {ele.small}
                  <br />
                  <strong>
                    {ele.title}
                    <br />
                    {ele.subtitle}
                  </strong>
                </span>
                <a
                  href={ele.link}
                  className={type === "acehiring" ? "borderimg" : ""}
                >
                  <img
                    src={ele.image}
                    alt={ele.title}
                  />
                </a>
              </div>
            );
          })}
          {type === "hiringchallenges" ? (
            <div className={`common-cards-image ${type}-explore`}>
              <a href="https://unstop.com/hiring-challenges">
                <span>Explore All</span>
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommonCards;
