"use client";
import React from "react";

import Request from "../../public/assets/Connectors/Request.png";
import Next from "../../public/assets/Connectors/Next.svg";
import Okay from "../../public/assets/Connectors/Okay.svg";

import Close from "../../public/assets/Icons/Close.svg";
import { Link } from "react-router-dom";

import ReactGA from "react-ga4";

const connectors__list = [
  {
    name: "MySQL",
    image: './assets/Connectors/MySQL.svg',
    badge: "Popular",
    tag: "Database",
  },
  {
    name: "MongoDB",
    image: './assets/Connectors/MongoDB.svg',
    badge: "Popular",
    tag: "Database",
  },

  {
    name: "Oracle",
    image: './assets/Connectors/Oracle.svg',
    badge: "Popular",
    tag: "Database",
  },
  {
    name: "PostgreSQL",
    image: './assets/Connectors/PostgreSQL.svg',
    badge: "Popular",
    tag: "Database",
  },
  {
    name: "AWS RDB (PostgreSQL)",
    image: './assets/Connectors/AWS.svg',
    badge: "Popular",
    tag: "Database",
  },
  {
    name: "Google Cloud Storage",
    image: './assets/Connectors/GoogleCloudStorage.svg',
    badge: "",
    tag: "Database",
  },
  {
    name: "AWS RDB (MySQL)",
    image: './assets/Connectors/AWS.svg',
    badge: "Popular",
    tag: "Database",
  },
  {
    name: "Google Sheets",
    image: './assets/Connectors/GoogleSheets.svg',
    badge: "",
    tag: "Database",
  },
  {
    name: "BigQuery",
    image: './assets/Connectors/BigQuery.svg',
    badge: "",
    tag: "Database",
  },
  {
    name: "CleverTap",
    image: './assets/Connectors/CleverTap.svg',
    badge: "",
    tag: "CRM",
  },
  {
    name: "FreshDesk",
    image: './assets/Connectors/FreshDesk.svg',
    badge: "",
    tag: "Customer Support",
  },
  {
    name: "HTTP",
    image: './assets/Connectors/HTTP.svg',
    badge: "",
    tag: "Developer Tools",
  },
  {
    name: "MariaDB",
    image: './assets/Connectors/MariaDB.svg',
    badge: "",
    tag: "Database",
  },

  {
    name: "ScyllaDB",
    image: './assets/Connectors/ScyllaDB.svg',
    badge: "",
    tag: "Database",
  },
  {
    name: "MSSQL",
    image: './assets/Connectors/MSSQL.svg',
    badge: "",
    tag: "Database",
  },
];

const options = [
  {
    name: "Advertising",
    value: "Advertising",
  },
  {
    name: "Analytics",
    value: "Analytics",
  },
  {
    name: "CRM",
    value: "CRM",
  },
  {
    name: "Customer Support",

    value: "Customer Support",
  },
  {
    name: "Database",
    value: "Database",
  },
  {
    name: "Developer Tools",
    value: "Developer Tools",
  },
  {
    name: "E-Commerce",
    value: "E-Commerce",
  },
  {
    name: "Email Marketing",
    value: "Email Marketing",
  },
  {
    name: "Events",
    value: "Events",
  },
  {
    name: "Finance",
    value: "Finance",
  },
  {
    name: "Forms",
    value: "Forms",
  },
];

const Connectors = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [find, setFind] = React.useState("data");
  // const [names, setNames] = useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("");

  React.useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/connectors",
      title: "Connectors Page",
    });
  }, []);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    if (formData.name && formData.email) {
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/miras/google_sheets/AqfLFrAAHMGfuGwp?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([[formData.name, formData.email]]),
          }
        );

        await response.json();
        setFormData({
          ...formData,
          name: "",
          email: "",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredConnectors = connectors__list
    .filter((connector) => {
      if (selectedCategory) {
        return connector.tag === selectedCategory;
      }
      return true;
    })
    .filter((connector) => {
      return Object.values(connector).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  return (
    <div className="container-fluid connectors pt-5">
      <div className="container pt-5 mt-5">
        <h1 className="ch h11 text-start text-md-center">
          Seamless Integrations For
          <br />
          Uninterrupted Data Engineering
        </h1>
        <p className="ch p2 text-start text-md-center pt-3 pt-md-0">
          Dview: Your gateway to seamless data integration.
          <br />
          Offering 50+ unique connectors, real-time data synchronization, and
          specialized productivity platforms.
        </p>
        <div className="w-100 d-flex justify-content-center">
          <div className="connect m240 px-4 w-md-0 d-flex justify-content-center px-3 py-2">
            <Link to="/contact">
              <p className="m-0 ch">
                <b>Start your Journey</b>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row w-100 gap-4 p-0 m-0">
          <div className="col-12 col-md-3 p-0 m-0">
            <div className="d-flex justify-content-between w-100">
              <h3 className="ch">Catogeries</h3>
              <img
                src={Close}
                className="cp"
                onClick={() => {
                  setSelectedCategory("");
                  setSearchTerm("");
                }}
                alt=""
              />
            </div>
            {options.map((option) => (
              <p
                className={`cp ch ${
                  selectedCategory === option.value ? "selected-category" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(option.value);
                }}
              >
                {option.name}
              </p>
            ))}
          </div>
          <div className="col-12 col-md-8 p-0 m-0">
            <div className="search__component ch">
              <input
                type="text"
                className="w-100 "
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search your connector here..."
              />
            </div>
            <div className="row mb-5 mt-5 w-100 p-0 m-0">
              {filteredConnectors.map((connector) => (
                <div className="col-lg-3 col-xs-6  col-sm-6 col-md-4 pb-4 position-relative">
                  <div className="connector pt-2">
                    {connector.badge && (
                      <div className="badge d-flex justify-content-center align-items-center">
                        <center>
                          <p className="m-0">{connector.badge}</p>
                        </center>
                      </div>
                    )}
                    <center className="ch cmain">
                      <div className="icon__space">
                        <img src={connector.image} alt="" />
                      </div>
                      <p className="ch pt-3">
                        <b>{connector.name}</b>
                      </p>
                    </center>
                  </div>
                </div>
              ))}{" "}
            </div>

            <div className="connectors__cta p-4 d-flex justify-content-between">
              <div className="cta__left my-auto">
                <h3 className="ch">Can’t find your Data Source?</h3>
                <p className="ch">
                  We have 50+ integrations on the way...
                  <br />
                  Enter your Data source here, Our team will contact you!
                </p>
                {find === "data" && (
                  <div className="search__component pe-3 br50">
                    <input
                      type="text"
                      className="ch"
                      name="name"
                      onChange={handleChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setFind("mail");
                        }
                      }}
                      placeholder="Enter your connector here..."
                    />
                    <img
                      src={Next}
                      onClick={() => {
                        setFind("mail");
                      }}
                      alt=""
                    />
                  </div>
                )}

                {find === "mail" && (
                  <div className="search__component br50">
                    <input
                      type="text"
                      className="ch"
                      name="email"
                      autoFocus
                      onChange={handleChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSubmit();
                          setFind("submitted");
                        }
                      }}
                      placeholder="Enter your work mail..."
                    />
                    <img
                      src={Okay}
                      onClick={() => {
                        handleSubmit();
                        setFind("submitted");
                      }}
                      alt=""
                    />
                  </div>
                )}

                {find === "submitted" && (
                  <p className="pss ch">
                    Form submitted. <br />
                    Our team will get back to you soon!
                  </p>
                )}
              </div>
              <div className="cta__img display__desktop">
                <img src={Request} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connectors;
