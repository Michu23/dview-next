import React, { useState } from "react";
import Union from "../../public/assets/Union.svg";
import ReactGA from "react-ga4";
import Helmet from "../../Helmet/SEO";

const FAQs = () => {

  React.useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/faqs",
      title: "FAQs Page",
    });
  }, []);
  

  const faqsData = [
    {
      sl: "01",
      question: "How does Dview fit within my data stack?",
      answer:
        "Dview is a data intelligence platform that powers both ingestion and query computes.",
    },
    {
      sl: "02",
      question: "Is it necessary to relocate or substitute my data?",
      answer:
        "Our platform auto detects the existing data and profile it. Then it understands the data attributes and behaviour and smartly ingests them from diverse sources, enabling you to query them according to your preferences.",
    },
    {
      sl: "03",
      question: "Are modifications to my existing data pipelines required?",
      answer:
        "Unless you wish to consolidate your data pipelines into a unified destination for the purpose of enhancing your data consumer use cases, there is no requirement to modify the existing pipelines.",
    },
    {
      sl: "04",
      question:
        "Is it necessary for me to change the BI/Reporting Tools/SQL IDEs that my teams currently utilize?",
      answer:
        "Dview offers seamless integration with a wide range of BI platforms such as Tableau, Power BI, Superset, Metabase, and more. Our query platform empowers these BI tools and automatically scales according to demand.",
    },
    {
      sl: "05",
      question:
        "Is there a need for me to modify or redevelop my queries, reports, views or dashboards?",
      answer:
        "There is no need for any effort or migration when it comes to copying and pasting existing queries. It can be done effortlessly.",
    },
    {
      sl: "06",
      question:
        "What is the approach of Dview in managing data governance rules?",
      answer:
        "Dview provides access control mechanisms and employs data encryption techniques to restrict the accessibility of personally identifiable information (PII) within an organization.",
    },
    {
      sl: "07",
      question:
        "What is the deployment process for Dview like? Is it complex,\nand do I require DevOps expertise to deploy it?",
      answer:
        "To deploy our components, we require minimum details about your private cloud. Your team can effortlessly deploy the necessary data infrastructure using a no/low code approach.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      console.log(index);
    }
  };
  return (
    <>
    
    <Helmet 
    title="FAQs - Dview"
    description="Frequently Asked Questions"
    name="FAQs - Dview"
    type="website"
    />
    <div className="container-fluid pb-5  me-0 p-0 faqs">
      <div className="container pt-5 faqs p-0 p-md-5">
        <h2 className="ch w-100 px-4 px-md-0 py-5 text-center">Frequently Asked Questions</h2>
        <div className="faqcontent ps-2 w-100">
          {faqsData.map((faq, index) => (
            <div className="faq p-3 row m-0 w-100" key={index}>
              <div className="col-1 d-none d-md-block text-end pe-3">
                <h3 className="ch">{faq.sl}</h3>
              </div>
              <div className="col-10" onClick={() => handleToggle(index)}>
                <h4 className="ch" onClick={() => handleToggle(index)}>{faq.question}</h4>{" "}
                  {expandedIndex === index && <p className="ch p2 m-0">{faq.answer}</p>}
              </div>
              <div className="col-2 col-md-1 p-0  d-flex justify-content-end">
                <div
                onClick={() => handleToggle(index)}
                  className={` ${
                    expandedIndex === index ? "closebtn" : "closebtn__closed"
                  }`}
                >
                  <img src={Union} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default FAQs;
