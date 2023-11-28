import React, { useState } from 'react'
import Companies from '../../components/Companies';
import Form from '../../components/Home/Form';
import Helmet from '../../Helmet/SEO';

const Contact = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }
    , [])

  return (
    <>

      <Helmet
        title="Contact Us - Dview"
        description="Contact us for more information"
        name="Contact Us - Dview"
        type="website"
        image="https://www.dview.live/static/media/dview.1a3f2f3f.gif"
      />

    <div className="container-fluid p-0 m-0">
      <div className="container mt10">
        <Form/>
      </div>
      <div className="container-fluid pb-4">
        <Companies/>
      </div>
    </div> </>
  )
}

export default Contact