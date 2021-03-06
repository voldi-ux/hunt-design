import React from "react";

import "./contentBox.scss";

const ContentBox = ({ detail }) => {
  return (
    <div className="contentBox col-sm-6 col-md-4  wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
        <div className=''>
      <h1 className="text-center">{detail.title}</h1>
      <p className='text-center'>
       {
         detail.content
       }
      </p>
      </div>
    </div>
  );
};

export default ContentBox;
