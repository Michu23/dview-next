import React from "react";

import Icon1 from "../../public/assets/Icons/icon123 1.png";
import Icon2 from "../../public/assets/Icons/platform icon 1.png";
import Icon3 from "../../public/assets/Icons/secure - platform 1.png";
import Icon4 from "../../public/assets/Icons/platform icon pt 2 1.png";

const Desc = () => {
  return (
    <div className="desc pt-4">
      <div className="row mb-4">
        <div className="col-2 d-flex justify-content-center">
          <img src={Icon1} alt="" className="" />
        </div>
        <div className="col-9">
          <p className="ch">
            Effortlessly transfer your data from a vast array of 50+ sources
            (request for more)
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex justify-content-center">
          <img src={Icon2} alt="" className="" />
        </div>
        <div className="col-9">
          <p className="ch">
            Streamline the conversion of data into tables primed for analytics.
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex justify-content-center">
          <img src={Icon3} alt="" className="" />
        </div>
        <div className="col-9">
          <p className="ch">
            Rest assured that your data remains secure from its origin to its
            final destination.
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-2 d-flex justify-content-center">
          <img src={Icon4} alt="" className="" />
        </div>
        <div className="col-9">
          <p className="ch">
            Your trial initiates with your initial synchronization – simply dive
            in and begin achieving results.
          </p>
        </div>
      </div>
    </div>
  );
};

const Onboard = () => {

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    designation: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="container-fluid onboard">
      <div className="container mt10">
        <div className="row">
          <div className="col-md-6">
            <h2 className="ch">
              Experience high-capacity data migration - By just signing up
            </h2>

            <p className="ch p2 pt-4 p-0">
              <i className="p-0">Utilise Dview Platform for 15 days</i>
            </p>

            <div className="d-md-block d-none">
              <Desc />
            </div>
          </div>
          <div className="col-md-6 pb-5">
            <div className="border w-100 p-md-5 p-3 rounded-3">
              {/* <div className="options row d-flex justify-content-center">
               
                <div className="col-3 px-2">
                  <div className="card p-3">
                  <img src="data:image/jpeg;base64,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" alt="" />
                  </div>
                </div>
                <div className="col-3 px-2">
                  <div className="card p-3">
                    <img src="data:image/png;base64,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" alt="" />
                  </div>
                </div>
                <div className="col-3 px-2">
                  <div className="card p-3">
                    <img src="data:image/png;base64,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" alt="" />
                  </div>
                </div>
       
              </div>
              <hr
                style={{
                  color: "#fff",
                  backgroundColor: "#fff",
                  height: 1.5,
                  width: "100%",
                }}
              /> */}

              <h3 className="ch pt-3">
                Onboard to Platform
              </h3>

              <div className="row ">
                <div className="col-md-6 col-12 pt-3">
                  <label htmlFor="Name" className="ch">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name"
                  value={formData.name}
                  onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-12 pt-3">
                  <label htmlFor="Phone" className="ch">
                    Phone
                  </label>
                  <input type="text" className="form-control" id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 pt-3">
                  <label htmlFor="Email" className="ch">
                    Email
                  </label>
                  <input type="text" className="form-control" id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-12 pt-3">
                  <label htmlFor="Purpose" className="ch">
                    Visit Purpose
                  </label>
                  <input type="text" className="form-control" id="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-12 pt-3">
                  <label htmlFor="Designation" className="ch">
                    Designation
                  </label>
                  <input type="text" className="form-control" id="designation"
                    value={formData.designation}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-12 pt-3">
                  <label htmlFor="Password" className="ch">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-12 pt-3">
                  <label htmlFor="Re-Password" className="ch">
                    Re-password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="re-password"
                    value={formData.repassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 pt-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label ch"
                      htmlFor="flexCheckDefault"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>
                <div className="col-12 pt-4">
                  <button className="btn btn-light w-100 mb-3">
                    <p className="m-0">
                      Submit
                    </p>
                  </button>
                  </div>
              </div>
            </div>

            <div className="d-md-none d-bloc pt-4 ps-3">
              <Desc />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
