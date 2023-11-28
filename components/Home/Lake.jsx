'use client'
import React from 'react'



const Lake = () => {

  const [expand, setExpand] = React.useState("fiber");
  const lakeboxRef = React.useRef(null);
  const [scrollingDown, setScrollingDown] = React.useState(true);

  React.useEffect(() => {
    const dynamicRootMargin = `-${window.innerHeight * 0.1}px`;
    const options = {
      root: null,
      rootMargin: dynamicRootMargin,
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setScrollingDown(true);
        } else {
          setScrollingDown(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (lakeboxRef.current) {
      observer.observe(lakeboxRef.current);
    }

    return () => {
      if (lakeboxRef.current) {
        observer.unobserve(lakeboxRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const targetMiddle =
        lakeboxRef.current.offsetTop + lakeboxRef.current.offsetHeight / 2;
      const viewportMiddle = window.innerHeight / 8;
      if (scrollingDown && targetMiddle > viewportMiddle) {
        setExpand("aqua");
      } else {
        setExpand("fiber");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDown, lakeboxRef]);

  return (
    <div className='container-fluid datalake py-4  '>
        <div className="container p-1">
        <h2 className='ch'>
                Effortlessly Build 
                Your Data Lake
              </h2>
              <div className="row pt-4">
                <div className="col-12 col-md-5">
                <div className="ldf">
                  <div className="ldf__content mb-5">
                    <div
                      className={`cp lakeboxes mb-3 p-3 ${
                        expand === "fiber" ? "fiber expanded " : "aqua"
                      }`}
                      onClick={() => {
                        setExpand("fiber");
                      }}
                    >
                      <h4 className='ch'>Fiber</h4>
                      <p className='ch mt-3 mt-md-0'>
                        Data Pipeline that effortlessly ingests structured,
                        semi-structured and unstructured data from Web Logs,
                        Databases, Social Media, Cloud Applications into a
                        unified Data Lake in minutes.
                      </p>
                    </div>
                    <div
                      className={` cp lakeboxes p-3 ${
                        expand === "aqua" ? "fiber expanded" : "aqua"
                      }`}
                      onClick={() => {
                        setExpand("aqua");
                      }}
                      ref={lakeboxRef}
                    >
                      <h4 className='ch'>Aqua</h4>

                      <p className='ch mt-3 mt-md-0'>
                        Query Engine that auto scales with your analytics
                        workload and shrinks back when load minimises. Reduces
                        compute power. Blazingly fast access and purely access
                        controlled.
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-12 col-md-7">
                <div className="udf">
                  <img src='./assets/dview.gif' className='w-100 img-fluid' alt="" />
                </div>
                </div>
              </div>
        </div>
        
    </div>
  )
}

export default Lake