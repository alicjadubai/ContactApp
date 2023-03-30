import React from "react";

const Card = ({ units }) => {
  return (
    <>
      {units.map((el) => (
        <div className={el.class}>
          <div className="cards__card__masthead">
            <a href={el.webl}>
              <div className="cards__card__web"></div>
            </a>
          </div>
          <div className="cards__card__body">
            <h3 className="cards__card__title">{el.unit}</h3>
            <p className="cards__card__description">
              {el.com}
              <br />
              {el.phone}
              <br />
              {el.email}

              <br />
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
