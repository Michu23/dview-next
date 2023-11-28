import React from "react";
import Banners from "../../public/assets/Images/Frame.svg";
import Grid from "../../public/assets/Images/LadderGrid.svg";
import ModernData from "../../components/Industries/ModernData";

const Iqna = () => {
  return (
    <div className="iqna">
      <div className="ch bbb">
        <h5>Benefits of access control why should you implement it?</h5>
        <p>
          Access control is the process of limiting who can read and write in
          your data warehouse. It can be as simple as only giving business users
          permission to view data rather than write it or as complex as masking
          the values in certain data columns.Access control is also closely
          related to data democratization, the practice of making data
          accessible
        </p>
      </div>
      <hr />
      <div className="ch bbb">
        <h5>Benefits of access control why should you implement it?</h5>
        <p>
          Access control is the process of limiting who can read and write in
          your data warehouse. It can be as simple as only giving business users
          permission to view data rather than write it or as complex as masking
          the values in certain data columns.Access control is also closely
          related to data democratization, the practice of making data
          accessible
        </p>
      </div>
      <hr />
      <div className="ch bbb">
        <h5>Benefits of access control why should you implement it?</h5>
        <p>
          Access control is the process of limiting who can read and write in
          your data warehouse. It can be as simple as only giving business users
          permission to view data rather than write it or as complex as masking
          the values in certain data columns.Access control is also closely
          related to data democratization, the practice of making data
          accessible
        </p>
      </div>
      <hr />
      <center>
        <div className="cta__button w-25">
          <a href="hi">Know more</a>
        </div>
      </center>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="cta__section">
      <div className="cta__content">
        <div className="ch">
          <h1 className="ch1">
            Positioning our brand by highlighting
            <br />
            success stories that back
          </h1>

          <p className="storytexts mt maxwidth">
            Our data management solutions offer full observability and
            monitoring capabilities across every data operation, providing you
            with the confidence to fully trust and rely on your data.
          </p>
        </div>
        <div className="cta__button rba">
          <a href="hi">Book your call</a>
        </div>
      </div>
    </div>
  );
};

const UseCases = () => {
  return (
    <div className="use__cases">
      <div className="tas ch">
        <h1>
          Use Cases for
          <br />
          Dview Data Lake
        </h1>
        <p>
          Our modern data platform provides you with all of the tools you need
          to manage your data pipeline
          <br />
          and focus on impactful work.
        </p>
        <div className="gap"></div>
        <div className="gap"></div>
        <div className="gap"></div>
      </div>
      <div className="use__boxes">
        <div className="use__box">

        <Svg />
        <h2>
        Segment users for  campaigns
        </h2>
        <p>
        Y42 is the fully managed Modern DataOps Cloud that fits into your organization’s needs and existing tooling landscape.
        </p>
        </div>
        <div className="use__box">

        <Svg />
        <h2>
        Segment users for  campaigns
        </h2>
        <p>
        Y42 is the fully managed Modern DataOps Cloud that fits into your organization’s needs and existing tooling landscape.
        </p>
        </div>
        <div className="use__box">

        <Svg />
        <h2>
        Segment users for  campaigns
        </h2>
        <p>
        Y42 is the fully managed Modern DataOps Cloud that fits into your organization’s needs and existing tooling landscape.
        </p>
        </div>
        <div className="use__box">

        <Svg />
        <h2>
        Segment users for  campaigns
        </h2>
        <p>
        Y42 is the fully managed Modern DataOps Cloud that fits into your organization’s needs and existing tooling landscape.
        </p>
        </div>
      </div>
    </div>
  );
};

const Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M32.6802 3.99982C39.4602 3.99982 44.0002 8.75982 44.0002 15.8398V32.1818C44.0002 39.2398 39.4602 43.9998 32.6802 43.9998H15.3402C8.56024 43.9998 4.00024 39.2398 4.00024 32.1818V15.8398C4.00024 8.75982 8.56024 3.99982 15.3402 3.99982H32.6802ZM32.3602 17.9998C31.6802 17.3198 30.5602 17.3198 29.8802 17.9998L21.6202 26.2598L18.1202 22.7598C17.4402 22.0798 16.3202 22.0798 15.6402 22.7598C14.9602 23.4398 14.9602 24.5398 15.6402 25.2398L20.4002 29.9798C20.7402 30.3198 21.1802 30.4798 21.6202 30.4798C22.0802 30.4798 22.5202 30.3198 22.8602 29.9798L32.3602 20.4798C33.0402 19.7998 33.0402 18.6998 32.3602 17.9998Z"
        fill="url(#paint0_linear_426_4529)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_426_4529"
          x1="24.0002"
          y1="3.99982"
          x2="24.0002"
          y2="43.9998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F9FF" />
          <stop offset="1" stopColor="#C2DAFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Industries = () => {
  return (
    <div className="industries">
      <div className="display__desktop">
        <div className="first">
          <div className="heading ch">
            <h1>
              Deploy a complete data
              <br />
              stack in 20 minutes
            </h1>
          </div>
          <div className="description">
            <p>
              Save time with an out-of-the-box modern data platform. Modular
              architecture allows you to connect your favorite tools and swap
              out the parts you want to customize.
            </p>
          </div>
        </div>
        <div className="first">
          <img src={Banners} alt="" />
          <div className="grid2">
            <img src={Grid} alt="" />
          </div>
          <ModernData />
          <Iqna />
          <div className="gap"></div>
          <CTA />
          <div className="gap"></div>

          <UseCases />
        </div>
      </div>
    </div>
  );
};

export default Industries;
