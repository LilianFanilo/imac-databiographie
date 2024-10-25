import React from "react";

const Section = (props) => {
  return (
    <section>
      <h2 className="mb-1 text-xl font-semibold 2xl:text-4xl font-poppins">
        {props.title}
      </h2>
      <p className="text-xs text-justify 2xl:text-xl font-poppins">
        {props.children}
      </p>
    </section>
  );
};

export default Section;
