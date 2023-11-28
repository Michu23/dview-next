import React from "react";

import StateContext from "../../context/StateContext";
import Marquee from "./Marquee";
import Dot from "../../../public/assets/Ellipse.svg";

const Demoo = ({ id }) => {
  const { goToTop, footerData, setFooterData } = React.useContext(StateContext);

  React.useEffect(() => {
    setFooterData(true);
    console.log("Footer data set to true");
    console.log(footerData);
    goToTop();

    return () => {
      setFooterData(false);
      console.log("Footer data set to false");
      console.log(footerData);
    };
  }, [footerData, goToTop, setFooterData]);

  const { Components } = React.useContext(StateContext);
  console.log(id);

  return (
    <div>
      <>
        <div className="container-fluid cards p-0 py-4  p-md-5 my-4">
          <div className="container py-2 pe-0 pb-5 pb-md-0">
            <div className="row pt-5 d-flex justify-content-center w-100 card-container">
              {/* <div className="col-12">
                <Marquee tags={Components[id].tags} />
              </div> */}
              <div className="col-12 col-md-8 ps-3 my-auto pt-5">
                <div className="text">
                  <div className="w-100 d-flex justify-content-center">
                  <div className="subs p-1 mb-3">
                    {Components[id].tags.map((tag, index) => (
                      <>
                        <div className="subbox">
                          <p className="ch">{tag}</p>
                        </div>
                        {index < Components[id].tags.length - 1 && (
                          <img src={Dot} alt="" />
                        )}
                      </>
                    ))}
                  </div></div>
                  <div className="headings text-center ch pt-2">
                    <h1>{Components[id].heading}</h1>
                    <div className="text">
                      <div className="content__para text-center paras ch mb-4 pt-2">
                        {Components[id].content}
                      </div>
                    </div>
                    <button className="connect ms-5 px-5 p-2  mb-4 me-5">
                            <p className="ch m-0">Book a Call</p>
                          </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 mt-5 my-auto d-flex justify-content-center img-container pb-5 pb-md-0 mb-3 mb-md-0">
                <img
                  src={Components[id].bigImg}
                  className="img-fluid mb-5"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-8 ps-3 my-auto"></div>
            </div>
          </div>
        </div>
      </>
      <div id="scroll"></div>
    </div>
  );
};

export default Demoo;
