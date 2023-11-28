import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const Coming = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        ReactGA.send({ hitType: "pageview", page: "/*", title: "Coming soon!" });
      }, [])
  
  return (
    <div className="container-fluid coming">
      <div className="container mt10 pt-3 text-center">
        <h2 className="ch">
           #UnderConstruction
        </h2>
          <h1 className="h111 cs">
            Coming Soon
          </h1>
          <p className="ch pt-5 p2">
                We're building a powerful Data Engineering Platform to unleash
                the true potential of your data. 
                <br />
                Stay tuned for the big reveal!
              </p>
              <span>
                <span className="ch">For more Updates: </span>
                <b>
                <a href="mailto:connect@dview.io" className="ch ps-1">Connect@dview.io</a>
                </b>
              </span>
              <div className="w-100 d-flex justify-content-center mb-5">
                 <div className="connect px-5 py-3 mt-5" style={{
                maxWidth: '600px',
              }} >
                <a href="/" className="ch">
                  Go to Homepage
                </a>
              </div>
              </div>
      </div>
    </div>
  );
};

export default Coming;
