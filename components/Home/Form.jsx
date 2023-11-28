import React from "react";
import Phone from "../../../public/assets/Icons/Main.svg";
import Submitted from "../../../public/assets/Icons/Done.png";

const Form = () => {
  const date = new Date();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    date: date.toLocaleString(),
  });

  const [isValid, setIsValid] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("1");
    if (
      formData.name &&
      formData.email &&
      formData.contact &&
      formData.message
    ) {
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/michuu/google_sheets/CfHzXFKWMDCYAEPi?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                formData.name,
                formData.email,
                formData.contact,
                formData.message,
                formData.date,
              ],
            ]),
          }
        );
        await response.json();
        setFormData({
          ...formData,
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      } catch (err) {
        console.log(err);
      }

      setSubmitted(true);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="row mb-md-5">
      <div className="col-12 col-md-7">
        <h4 className="ch ">Get in Touch</h4>
        <h3 className="ch ">
          Let's discuss how we can build and scale together.
        </h3>
        <img src={Phone} className="w-100 mt-4" 
        
          style={{
            maxWidth: "500px",
            maxHeight: "400px",
          }}
        alt="" />
      </div>
      <div className="col-12 col-md-5">
        <div className="form mt-3">
          {submitted === false ? (
            <form className="pt-5" onSubmit={handleSubmit}>
              <input
                type="text"
                style={{
                  color: "white",
                }}
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                style={{
                  color: "white",
                }}
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                style={{
                  color: "white",
                }}
                placeholder="Contact Number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
              <textarea
                rows="3"
                style={{
                  color: "white",
                }}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              {!isValid && (
                <p style={{ color: "red" }}>Please fill all the fields</p>
              )}
              <button className="submit mt-2 w-100" type="submit">
                Submit
              </button>
            </form>
          ) : (
            <div className="mt-5 pt-4">
              <div className="d-flex justify-content-center w-100 align-items-center text-center pt-5 mt-md-5">
                <div className="w-100 ps-md-4 ps-5 ">
                <img src={Submitted} className="img-fluid w-25 ms-4" alt="" />
                <h3 className="ch p1 pt-md-3 ">
                  Your response is
                  submitted
                </h3>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
 