"use client"
import React from "react";

import B1 from "../../public/assets/Hero/abc";
import B2 from "../../public/assets/Hero/B2";
import B3 from "../../public/assets/Hero/B3.svg";

import BB1 from "../../public/assets/Hero/BB1.svg";
import BB2 from "../../public/assets/Hero/BB2.svg";
import BB3 from "../../public/assets/Hero/BB3.svg";

import Group1 from "../../public/assets/Group1.svg";
import Group2 from "../../public/assets/Group2.svg";
import Group3 from "../../public/assets/Group3.svg";
import Group4 from "../../public/assets/Group4.svg";
import Group5 from "../../public/assets/Group5.svg";

const Banner = () => {
  const [card, setCard] = React.useState("");

  return (
    <>
      <div className="container">
        <div className="display__desktop ">
          <div className="banner__web">
            <div className="b1">
              <B1/>
            </div>
            <div className="b2 position-relative">
              {/* <img src={B2} alt="" /> */}
              <B2/>
              <div className="main__container">
                <div className="menu__container">
                  <div
                    className="menu c4 "
                    onMouseEnter={() => {
                      setTimeout(() => {
                        setCard("Ingestion");
                      }, 100);
                    }}
                    onMouseLeave={() => {
                      setCard("");
                    }}
                  >
                    <div>
                      <h5>Ingestion</h5>
                      {card === "Ingestion" && (
                        <p>
                          Automate the process of collecting data from over 100
                          sources in a no-code manner.
                        </p>
                      )}
                    </div>
                    <img src="./assets/Group4.svg" className="img" alt="" />
                  </div>
                </div>
                <div
                  className="menu__container"
                  onMouseEnter={() => {
                    setTimeout(() => {
                      setCard("Data");
                    }, 100);
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c5 ">
                    <div>
                      <h5>
                        Data
                        <br />
                        Modelling
                      </h5>
                      {card === "Data" && (
                        <p>
                          Effortlessly collaborate with your team to construct
                          data models seamlessly.
                        </p>
                      )}
                    </div>
                    <img src="./assets/Group5.svg" className="img" alt="" />
                  </div>
                </div>
                <div
                  className="menu__container"
                  onMouseEnter={() => {
                    setTimeout(() => {
                      setCard("Caching");
                    }, 100);
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c1">
                    <div>
                      <h5>Caching</h5>
                      {card === "Caching" && (
                        <p>
                          Enhance data access speed while optimizing expenses
                          for scheduled queries.
                        </p>
                      )}
                    </div>
                    <img src="./assets/Group1.svg" className="img" alt="" />
                  </div>
                </div>
                <div
                  className="menu__container"
                  onMouseEnter={() => {
                    setTimeout(() => {
                      setCard("Access");
                    }, 100);
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c2">
                    <div>
                      <h5>
                        Access
                        <br />
                        Control
                      </h5>
                      {card === "Access" && (
                        <p>
                          Empower users to access data as needed, promoting a
                          democratized data environment.
                        </p>
                      )}
                    </div>
                    <img src="./assets/Group2.svg" className="img" alt="" />
                  </div>
                </div>
                <div
                  className="menu__container"
                  onMouseEnter={() => {
                    setTimeout(() => {
                      setCard("API");
                    }, 100);
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c3 ">
                    <div>
                      <h5>API's</h5>
                      {card === "API" && (
                        <p>
                          Effortlessly deploy data products for streamlined data
                          retrieval from a unified source of truth.
                        </p>
                      )}
                    </div>
                    <img src="./assets/Group2.svg" className="img" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="b3">
              <img src="./assets/Hero/B3.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="display__mobile">
          <div className="banner__mobile">
            <div className="bb1">
              <img src={BB1} alt="" />
            </div>
            <div className="bb2">
              <img src={BB2} className="bb2img" alt="" />
              <div className="main__container__mm px-3">
                <div
                  className="menu__container__mm"
                  onMouseEnter={() => {
                    setCard("Ingestion");
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c4 ">
                    <h6 className="pt-2">Ingestion</h6>
                    {card === "Ingestion" && (
                      <p>
                        Automate the process of collecting data from over 100
                        sources in a no-code manner.
                      </p>
                    )}
                    <img src="./" className="imgg" alt="" />
                  </div>
                </div>
                <div
                  className="menu__container__mm"
                  onMouseEnter={() => {
                    setTimeout(() => {
                      setCard("Data");
                    }, 100);
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c5 ">
                    <h6 className="pt-2">
                      Data
                      <br />
                      Modelling
                    </h6>
                    {card === "Data" && (
                      <p>
                        Effortlessly collaborate with your team to construct
                        data models seamlessly.
                      </p>
                    )}

                    <img src={Group5} className="imgg" alt="" />
                  </div>
                </div>
                <div
                  className="menu__container__mm"
                  onMouseEnter={() => {
                    setTimeout(() => {
                      setCard("Caching");
                    }, 100);
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c1">
                    <h6 className="pt-2">Caching</h6>
                    {card === "Caching" && (
                      <p>
                        Enhance data access speed while optimizing expenses for
                        scheduled queries.
                      </p>
                    )}

                    <img src={Group1} className="imgg" alt="" />
                  </div>
                </div>
                <div
                  className="menu__container__mm"
                  onMouseEnter={() => {
                    setTimeout(() => {
                      setCard("Access");
                    }, 100);
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c2">
                    <h6 className="pt-2">
                      Access
                      <br />
                      Control
                    </h6>
                    {card === "Access" && (
                      <p>
                        Empower users to access data as needed, promoting a
                        democratized data environment.
                      </p>
                    )}

                    <img src={Group2} className="imgg" alt="" />
                  </div>
                </div>
                <div
                  className="menu__container__mm"
                  onMouseEnter={() => {
                    setTimeout(() => {
                      setCard("API");
                    }, 100);
                  }}
                  onMouseLeave={() => {
                    setCard("");
                  }}
                >
                  <div className="menu c3 ">
                    <h6 className="pt-2">API's</h6>
                    {card === "API" && (
                      <p>
                        Effortlessly deploy data products for streamlined data
                        retrieval from a unified source of truth.
                      </p>
                    )}
                    <img src={Group3} className="imgg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bb3">
              <img src={BB3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
