"use client"
import React from "react";
import Dot from "../../public/assets/Ellipse.svg";
import { Link } from "react-router-dom";
import Circle from "../../public/assets/Images/circle.png";
import Lottie from "lottie-react";
import Dview from "../../public/assets/Lottie/Comp 1 (3).json";
import StateContext from "../../app/context/StateContext";

const Image = ({ img, classic }) => {
  return (
    <div className="col-12 col-md-4 my-auto img-container pe-0">
      <img src={img} className={`img-fluid ${classic}`} alt="" />
    </div>
  );
};

const Text = ({ heading, tags, content, link }) => {
  const lottieRef = React.useRef(null);
  return (
    <div className="col-12 col-md-7 my-auto pe-0">
      <div className="text">
        <div className="subs p-1 mb-3">
          {tags.map((tag, index) => (
            <>
              <div className="subbox">
                <p className="ch">{tag}</p>
              </div>
              {index < tags.length - 1 && <img src={Dot} alt="" />}
            </>
          ))}
        </div>
        <div className="headings ch">
          <h2>{heading}</h2>
        </div>
        <div className="content__para paras text-white">
          <p className="m-0 p-0">
            
          {content}
          </p>
          </div>

        {/* <Link to={link}>
          <button className="connect px-5 p-2 mt-3">
            <p className="ch m-0">Know more</p>
          </button>
        </Link> */}
        <Link to={link}>
          <div
            className="knwomoreanim mt-3 px-1 "
            onMouseEnter={() => {
              if (lottieRef.current) {
                lottieRef.current.play();
              }
            }}
            onMouseLeave={() => {
              if (lottieRef.current) {
                lottieRef.current.pause();
              }
            }}
          >
            <Lottie
              animationData={Dview}
              play={true}
              style={{ width: "auto", height: "38px" }}
              autoplay={true}
              lottieRef={lottieRef}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

const Cards = () => {
  const { Components } = React.useContext(StateContext);

  return (
    <div>
      <>
        <img
          src='./assets/Images/circle.png'
          alt=""
          style={{
            position: "absolute",
            opacity: "0.5",
            zIndex: "-1",
            right: "-10rem",
            marginTop: "7rem",
          }}
        />
        <img
          src='./assets/Images/circle.png'
          alt=""
          style={{
            position: "absolute",
            opacity: "0.5",
            zIndex: "-1",
            top: "20rem",
          }}
        />
        <img
          src='./assets/Images/circle.png'
          alt=""
          style={{
            position: "absolute",
            opacity: "0.5",
            zIndex: "-1",
            bottom: "20rem",
            left: "-10rem",
          }}
        />

        {Components.map((component) => (
          <div className="container-fluid cards p-1 py-4  pt-md-5 my-md-4 my-2">
            <div className="container py-2 pe-0">
              <div className="row d-flex justify-content-center w-100 gap-4 card-container">
                {component.id % 2 === 0 ? (
                  <>
                    <Image img={component.img} classic={component.classic} />
                    <Text
                      id={component.id}
                      heading={component.heading}
                      tags={component.tags}
                      content={component.content}
                      link={component.link}
                      classic={component.classic}
                    />
                  </>
                ) : (
                  <>
                    <Text
                      id={component.id}
                      heading={component.heading}
                      tags={component.tags}
                      content={component.content}
                      link={component.link}
                      classic={component.classic}
                    />
                    <Image classic={component.classic} img={component.img} />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Cards;
