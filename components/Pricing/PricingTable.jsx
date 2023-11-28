import React from "react";
import Done from "../../../public/assets/Icons/Done.png";
import Close from "../../../public/assets/Icons/Close.png";
import { Link } from "react-router-dom";
import StateContext from "../../context/StateContext";

const PricingTable = () => {
  const [activeTab, setActiveTab] = React.useState("tab1");
  const { pricingData } = React.useContext(StateContext);

  return (
    <div>
      <div className="tabs w-100 my-2 mb-5 d-flex justify-content-center">
        <div
          className={
            activeTab === "tab1"
              ? "activetag tab1 p-2 cp mx-3"
              : "tab1 p-2 cp mx-3"
          }
          onClick={() => {
            setActiveTab("tab1");
          }}
        >
          <h4 className="ch m-0 cp">In SaaS</h4>
        </div>
        <div
          className={
            activeTab === "tab2"
              ? "activetag tab1 p-2 cp mx-3"
              : "tab1 p-2 cp mx-3"
          }
          onClick={() => {
            setActiveTab("tab2");
          }}
        >
          <h4 className="ch m-0 cp">In VPC</h4>
        </div>
     
      </div>
      {activeTab === "tab1"
        ? renderPlanTable(pricingData.plans.saas)
        : activeTab === "tab2"
        ? renderPlanTable(pricingData.plans.vpc)
        : renderPlanTable(pricingData.plans.metal)}
    </div>
  );
};

const renderPlanTable = (plans, features) => {
  console.log(plans);
  return (
    <>
      <div className="d-none d-md-block">
        <table className="ch text-center pricetable mt-3">
          <tbody>
            <tr className="lbg">
              <td></td>
              {plans.map((plan, index) => (
                <td key={index}>
                  <h2 className="pt-3">{plan.name}</h2>
                  <p className="">{plan.description}</p>
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <b className="py-3">Yearly Price</b>
              </td>
              {plans.map((plan, index) => (
                <td key={index}>
                  <center>
                    <Link to={plan.link}>
                      <div className={`bc${index + 1} p1 py-2 my-3 mx-2 mx10`}>
                        {plan.yearlyPrice}
                      </div>
                    </Link>
                  </center>
                </td>
              ))}
            </tr>
            <tr className="lbg">
              <td>
                <h4 className="m-0 py-2">
                  <b>Features</b>
                </h4>
              </td>
              {plans.map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>

            {Object.keys(plans[0].features).map((feature, featureIndex) => {
              const isSameFeature = plans.every(
                (plan) => plan.features[feature] === plans[0].features[feature]
              );

              return (
                <tr key={featureIndex} className={isSameFeature ? "lbg" : ""}>
                  <td className="py-3">
                    <b>{feature}</b>
                  </td>
                  {plans.map((plan, planIndex) => (
                    <td key={planIndex}>
                      {typeof plan.features[feature] === "boolean" ? (
                        <img src={plan.features[feature] ? Done : Close}
                          alt={plan.features[feature] ? "Done" : "Close"}
                        />
                      ) : (
                        plan.features[feature]
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-block d-md-none">
        {plans.slice().reverse().map((plan) => (
          <table key={plan.name} className="ch text-center pricetable">
            <tbody>
              <tr className="lbg">
                <td colSpan={2}>
                  <h2 className="pt-3">{plan.name}</h2>
                  <p className="">{plan.description}</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <center>
                    <Link to={plan.link}>
                      <div className={`bc1 p1 py-2 my-3 mx-2 mx10`}>
                        {plan.yearlyPrice}
                      </div>
                    </Link>
                  </center>
                </td>
              </tr>
              <tr className="lbg">
                <td colSpan={2}>
                  <h4 className="m-0 py-2">
                    <b>Features</b>
                  </h4>
                </td>
              </tr>
              {Object.entries(plan.features).map(([feature, value]) => (
                <tr key={feature}>
                  <td className="py-3">
                    <b>{feature}</b>
                  </td>
                  <td>
                    {typeof value === "boolean" ? (
                      <img
                        src={value ? Done : Close}
                        alt={value ? "Done" : "Close"}
                      />
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};

export default PricingTable;
