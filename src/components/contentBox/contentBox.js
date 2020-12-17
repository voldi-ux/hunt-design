import React from "react";

import "./contentBox.scss";

const ContentBox = ({ detail }) => {
  return (
    <div className="contentBox col-sm-4 ">
        <div className='mx-1'>
      <h1 className="text-center">{detail.title}</h1>
      <p className='text-center'>
        You also have the option of choosing the number of syllables of the
        words or the word length of the randomized words. There are also options
        to further refine by choosing "less than" or "greater than" options for
        both syllables and word length.
      </p>
      </div>
    </div>
  );
};

export default ContentBox;
