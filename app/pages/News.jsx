import React from "react";
import Illustration from "../../public/assets/News/News.svg";
import ET from "../../public/assets/News/ET.svg";
import Second from "../../public/assets/News/2nd.webp";
import Third from "../../public/assets/News/cloud-smb.jpg";
import CXO from "../../public/assets/News/CXO2.png";

import Kauts from "../../public/assets/News/100435427.png";
import { Link } from "react-router-dom";

import ReactGA from "react-ga4";

const News = () => {


  React.useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/news",
      title: "News Page",
    });
  }, []);


  return (
    <div className="container-fluid news p-0 m-0">
      <div className="container mt10">
        <div className="row">
          <div className="col-12 col-md-7 position-relative">
            <div className="pt-0 pt-md-5 px-3 px-md-0">
                 <h1 className="ch h11 text-left">
        Spotlight Stories:
              <br />
              Dview making milestones.
        </h1>
        <p className='ch'>
              Explore the latest chapters in Dview's journey as a frontrunner in
              data engineering. Our 'News' page captures the highlights: from
              expert reviews to industry features. As innovation surges, witness
              how Dview is making headlines and shaping the data-driven future.
              Stay informed and uncover the stories that define us.
            </p>
            </div>

          </div>
          <div className="col-12 col-md-5 ">
          <img src={Illustration} alt="" />
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center pt-5">
       
        <div className="row d-flex justify-content-center w-75">
          <div className="col-12 m-0 p-0">

           <hr />
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <img src={Kauts} className="img-fluid w-100" alt="" />
          </div>
          <div className="col-12 col-md-9 ">
          <Link to="https://cio.economictimes.indiatimes.com/news/strategy-and-management/5-key-characteristics-of-building-a-successful-data-platform/100435386">
            <h3 className="ch pt-3 pt-md-0">
              5 key characteristics of building a successful data platform - ET
              CIO
            </h3></Link>
            <p className="ch">
              Modern analytics cannot be developed by just bringing in data
              analysts, data scientists, and machine learning engineers, it
              requires empowering them with the right set of technology.
              Creating an actual impact ...
              <a href="https://cio.economictimes.indiatimes.com/news/strategy-and-management/5-key-characteristics-of-building-a-successful-data-platform/100435386">
                Read more
              </a>
            </p>
           <div className="d-flex gap-3">
            <img src={ET} className="img-fluid ps-2" style={{
              scale: "1.4"
            }} alt="" />
            <div>
            <h5 className="ch m-0">ET CIO</h5>
            <p className="ch p3 m-0">May 23, 2023 · 8 min read</p>
            </div>
           </div>


            </div>
          <div className="col-12 m-0 p-0">

           <hr />
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <img src={Second} className="img-fluid w-100" alt="" />
          </div>
          <div className="col-12 col-md-9 ">
          <Link to="https://cio.economictimes.indiatimes.com/news/big-data/heres-how-data-moat-helps-cios-unlock-the-value-of-their-data-assets-drive-growth/98890843">
            <h3 className="ch pt-3 pt-md-0">
              Here’s how Data Moat helps CIOs unlock the value of their data
              assets, drive growth
            </h3>
            </Link>
            <p className="ch">
            By investing in these essential elements, companies can gain a
              competitive advantage and establish themselves as leaders in their
              industry. The key is to make data a central part of the company's
              strategy and culture and continuously innovate and evolve to stay
              ahead of the curve. ...{" "}
              <a href="https://cio.economictimes.indiatimes.com/news/big-data/heres-how-data-moat-helps-cios-unlock-the-value-of-their-data-assets-drive-growth/98890843">
                Read more
              </a>
            </p>
           <div className="d-flex gap-3">
            <img src={ET} className="img-fluid ps-2" style={{
              scale: "1.4"
            }} alt="" />
            <div>
            <h5 className="ch m-0">ET CIO</h5>
            <p className="ch p3 m-0">Mar 22, 2023 · 10 min read</p>
            </div>
           </div>


            </div>
          <div className="col-12 m-0 p-0">

           <hr />
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <img src={Third} className="img-fluid w-100" alt="" />
          </div>
          <div className="col-12 col-md-9 ">
          <Link to="https://www.cxotoday.com/cxo-bytes/navigating-the-rising-data-cloud-costs-maze/">
           
            <h3 className="ch pt-3 pt-md-0">Navigating the rising data cloud costs maze</h3>
          </Link> 
          <p className="ch">
              The rise of cloud computing and various Software-as-a-Service
              (SaaS) applications have increased cloud data costs. As more
              businesses move their operations to the cloud, the amount of data
              being stored and processed in the cloud has grown exponentially.
              This has led to ...{" "}
              <a href="https://www.cxotoday.com/cxo-bytes/navigating-the-rising-data-cloud-costs-maze/">Read more</a>
            </p>
           <div className="d-flex gap-3">
            <img src={CXO} className="img-fluid" style={{
              scale: "1"
            }} alt="" />
            <div>
            <h5 className="ch m-0">CXOToday</h5>
            <p className="ch p3 m-0">10 April, 2023 · 3 min read</p>
            </div>
           </div>


            </div>
            <div className="col-12 m-0 p-0">

<hr />
</div>
        </div>
      </div>
    </div>
  );
};

export default News;
