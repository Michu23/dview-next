import React from "react";
import GCP from "../../public/assets/Companies/GCP.svg";
import Azure from "../../public/assets/Companies/Azure.svg";
import AWS from "../../public/assets/Companies/AWS.svg";
import Success from "../../components/Home/Success";

const Book = () => {
  return (
    <div>
      <div className="first">
        <div className="display__desktop">
          <div
            className="lets__talk"
            style={{
              marginTop: "8rem",
            }}
          >
            <div className="lefttt">
              <div className="tlc">
                <h2>
                  Book a call, Discover data management software <br />
                  can help unlock the full potential of your data
                </h2>
                <p className="ch w-100">
                  Get a demo that's customized to your unique data integration
                  challenges.
                </p>
              </div>
              <div className="tli"></div>
            </div>
            <div className="form">
              <input type="text" rows="3" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Contact Number" />
              {/* <textarea rows="4" placeholder="Message" /> */}
              <div className="submit">
                <a href="hi">Submit</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="display__desktop">
          <div className="first">
            <div
              className="logos"
              style={{
                marginTop: "-20rem",
                marginBottom: "0",
                paddingBottom: "0",
              }}
            >
              <div className="logos-slide">
                <img src={AWS} />
                <img
                  src={Azure}
                  style={{
                    width: "160px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                  alt=""
                />
                <img src={GCP} alt="" />
                <img src={AWS} alt="" />
                <img
                  src={Azure}
                  style={{
                    width: "160px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                  alt=""
                />
                <img src={GCP} alt="" />
              </div>

              <div className="logos-slide">
                <img src={AWS} />
                <img
                  style={{
                    width: "160px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                  src={Azure}
                  alt=""
                />
                <img src={GCP} alt="" />
                <img src={AWS} alt="" />
                <img src={Azure} alt="" />
                <img src={GCP} alt="" />
              </div>
              <div className="logos-slide">
                <img src={AWS} />
                <img
                  src={Azure}
                  style={{
                    width: "160px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                  alt=""
                />
                <img src={GCP} alt="" />
                <img src={AWS} alt="" />
                <img
                  src={Azure}
                  style={{
                    width: "160px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                  alt=""
                />
                <img src={GCP} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="display__mobile">
          <div className="logos">
            <div className="logos-slide">
              <img src={AWS} />
              <img
                style={{ width: "160px", height: "auto", marginBottom: "10px" }}
                src={Azure}
                alt=""
              />

              <img src={GCP} alt="" />
              <img src={AWS} alt="" />
              <img
                style={{ width: "160px", height: "auto", marginBottom: "10px" }}
                src={Azure}
                alt=""
              />

              <img src={GCP} alt="" />
            </div>

            <div className="logos-slide">
              <img src={AWS} />
              <img
                style={{ width: "160px", height: "auto", marginBottom: "10px" }}
                src={Azure}
                alt=""
              />

              <img src={GCP} alt="" />

              <img src={AWS} alt="" />
              <img
                style={{ width: "160px", height: "auto", marginBottom: "10px" }}
                src={Azure}
                alt=""
              />

              <img src={GCP} alt="" />
            </div>
            <div className="logos-slide">
              <img src={AWS} />
              <img
                style={{ width: "160px", height: "auto", marginBottom: "10px" }}
                src={Azure}
                alt=""
              />

              <img src={GCP} alt="" />

              <img src={AWS} alt="" />
              <img
                style={{ width: "160px", height: "auto", marginBottom: "10px" }}
                src={Azure}
                alt=""
              />

              <img src={GCP} alt="" />
            </div>
          </div>
        </div>
        <Success />
        <div className="gap"></div>
      </div>
    </div>
  );
};

export default Book;
