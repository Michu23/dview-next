
"use client"
import React from 'react'


const content = [
    {
        ph:"Real-time Personalised Experience",
            pd:"Dview enables data engineers to deploy data products that can dynamically adapt to user behaviors and preferences. Power real-time personalised experience, tailor every interaction, enhancing satisfaction and elevating engagement.",
            pa:"Realtime data"
    },
    {
        ph:"Advanced Fraud Detection System",
        pd:"In a digital age of evolving threats, Dview's sophisticated fraud detection utilizes advanced algorithms and AI insights. We identify and counteract breaches, safeguarding your data.",
        pa:"Realtime data"
    },
    {
        ph:"Rule-based Notification Engine",
        pd:"Proactive communication is key. Dview’s open architecture enables easy deployment of rule based alerts on real-time data to empower prompt decision-making.",
        pa:"Realtime data"
    },
    {
        ph:"Data Quality Assurance Engine",
        pd:"Dview transforms raw data into actionable insights. Our engine refines information, removing redundancies, ensuring your strategies are underpinned by quality data.",
        pa:"Realtime data"
    }
]

const Pipeline = () => {
  return (
    <div className="container-fluid pipeline position-relative ">
        <img src='./assets/Mask2.svg'
        className='w-100'
             style={{
                position: "absolute",
                zIndex: "-1",
                top: "0",
                objectFit: "cover",
              }}
        alt="" />
           <img
            src='./assets/Images/circle.png'
            alt=""
            className='d-flex justify-content-center'
            style={{
              position: "absolute",
              zIndex: "-2",
              right: "-25rem",
              top: "-20rem",
              maxWidth: "100%",
              opacity: "0.5",
            }}
          />
        <div className="container p-0">
            <h2 className='ch py-3 py-md-5  w-100 text-md-center'>
            Power Data Applications using 
            <br className='d-none d-md-block' />
            Dview's Unified Platform
            </h2>
            <div className="row pb-3 pb-md-5">
                {
                    content.map((item, index) => {
                        return(
                            <div className="col-12 col-md-6 mb-3">
                               <div className="pbox p-3">
      <div className="d-flex justify-content-between">
      <h3 className="ch pe-0 w-md-50 w-75 align-items-bottom pe-4 pe-md-0">{item.ph}</h3>
      <div className="px-5 d-md-block d-sm-none d-none"></div>
        <img src='./assets/pipeline__icon.svg' className='ps-0 ps-md-5' alt="" />
      </div>
      <p className="ch">{item.pd}</p>
    </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default Pipeline