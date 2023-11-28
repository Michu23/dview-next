import React from 'react'


import StateContext from "../../../context/StateContext";
import Marquee from './Marquee';


const Image = ({ img }) => {
    return (
      <div className="col-12 col-md-7 mt-5 my-auto img-container pb-5 pb-md-0 mb-3 mb-md-0">
        <img src={img} className="img-fluid" alt="" />
      </div>
    );
  };
  
  const Text = ({ heading, tags, content, link }) => {
    return (
      <div className="col-12 col-md-5 ps-3 my-auto">
        <div className="text">
          {/* <div className="subs p-1 mb-3">
            {tags.map((tag) => (
              <>
                <div className="subbox">
                  <p className="ch">{tag}</p>
                </div>
                <img src={Dot} alt="" />
              </>
            ))}
          </div> */}
          <Marquee tags={tags} />
          <div className="headings ch">
            <h2 >{heading}</h2>
           
          </div>
          <div className="content__para paras ch">
            {content}
          </div>
        <a href="#scroll">
          <button 
          className="connect px-5 p-2 mt-3 ms-2 ms-md-0">
            <p className="ch m-0">Read more</p>
          </button>
       </a>
        </div>
      </div>
    );
  };
  
  const Card = ({id}) => {

    const { goToTop,footerData, setFooterData } = React.useContext(StateContext);

  React.useEffect(() => {
    setFooterData(true)
    console.log("Footer data set to true")
    console.log(footerData)
    goToTop();

    return () => {
      setFooterData(false)
      console.log("Footer data set to false")
      console.log(footerData)
    }
  }

  ,[footerData]);
  
    const { Components } = React.useContext(StateContext);
    console.log(id)

  
    return (
      <div>
          <>
         
     
          <div className="container-fluid cards p-0 py-4  pt-md-5 p-md-5 my-4">
            <div className="container py-2 pe-0 pb-5 pb-md-0">
              <div className="row d-flex justify-content-start w-100 card-container">
              
              <Image img={Components[id].bigImg} />
                    <Text
                      id={Components[id].id}
                      heading={Components[id].heading}
                      tags={Components[id].tags}
                      content={Components[id].content}
                      link={Components[id].link}
                    />
              </div>
            </div>
          </div>
       </>
       <div id='scroll'></div>
      </div>
    );
  };


export default Card