'use client'
import React from 'react'
import StateContext from "../../app/context/StateContext";

const Success = () => {
    const containerRef = React.useRef(null);
    const containerRef2 = React.useRef(null);

    const { successStories } = React.useContext(StateContext);
  
    const [isHovered, setIsHovered] = React.useState(false);
  const intervalRef = React.useRef(null);
  
  React.useEffect(() => {
    const scrollInterval = 10;  
    const scrollAmount = 1;    

    const doScroll = (container) => {
        if (!container) return;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };

    const handleAutoScroll = () => {
        if (!isHovered) {
            doScroll(containerRef.current);     // Auto-scroll for desktop view
            doScroll(containerRef2.current);    // Auto-scroll for mobile view
        }
    };
    
    intervalRef.current = setInterval(handleAutoScroll, scrollInterval);
    
    return () => {
        clearInterval(intervalRef.current);
    };
}, [isHovered]);
  
  
  
  return (
    <div>
          <div className="display__desktop">
        <div className="container-fluid py-5">
          <div className="container success">
            <div className="scontent w-100">
              <div className="stop w-100 d-flex justify-content-center">
                <h2 className="ch">Success Stories</h2>
              </div>
            </div>
            <div
              className="stories"
              ref={containerRef}
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            >
              {successStories.map((story, index) => {
                return (
                  <div className="story  w-75">
                    <div className="storytext">
                      <h3 className="storyheading ch">{story.heading}</h3>
                      <div className="textbox">
                        <p className="storytexts">{story.para}</p>
                      </div>
                      <hr className="shr " />
                     
                      <div className="rating">
                        <div className="rating__people ">
                          <img src={story.img} alt="" />
                          <div className="ratinginfo">
                            <h6 className="ratingname m-0">{story.name}</h6>
                            <p className="ratingrole m-0">{story.position}</p>
                          </div>
                        </div>
                        <div className="star__rating  w-75">
                          <h3 className="spercentage m-0">{story.percentage}</h3>
                          <p className="ch m-0">
                            {story.ratetext}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="display__mobile">
        <div className="success__mob">
          <h2>Success Stories</h2>

          <div
             ref={containerRef2}
             className="mob__success__box__container"
             onMouseEnter={() => setIsHovered(true)}   // Pause auto-scroll on hover
             onMouseLeave={() => setIsHovered(false)}  // Resume auto-scroll on mouse leave         
          >
            {successStories.map((story, index) => {
              return (
                <div className="success__mob__boxes">
                  <div className="mob__box__content">
                    <h4 className='success__mob__h4'>
                      {story.heading}
                    </h4>
                    <p className='success__mox__para'>{story.para}</p>
                    <hr />

                    <div className="mob__rating">
                      <div className="mob__perc">
                        <h4>
                          {story.percentage}
                        </h4>
                      </div>
                      <div className="rating__content">
                        <p>
                          {story.ratetext}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="mob__success__profile">
                      <img src={story.img} alt="" />
                      <div className="ratinginfo">
                        <h6 className="ratingname">{story.name}</h6>
                        <p className="ratingrole">{story.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success