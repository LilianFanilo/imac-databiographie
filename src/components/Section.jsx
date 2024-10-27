import React from "react";

const Section = (props) => {
  return (
    <section>
      <h2 className="mb-1 text-xl font-semibold font-poppins">{props.title}</h2>
      <p className="text-sm text-justify font-poppins">{props.children}</p>
    </section>
  );
};

export default Section;
