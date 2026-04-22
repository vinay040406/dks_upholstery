import React from "react";

const Paragraph = ({ text, className }) => {
  return <p className={`leading-160 text-body-text ${className}`}>{text}</p>;
};

export default Paragraph;
