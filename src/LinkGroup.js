import React from "react";
import Link from "./Link";

const LinkGroup = ({ linksList }) => {
  return (
    <div className="container text-center ">
      <ul className="list-group w-100 w-md-100 mx-auto">
        {linksList.map((link, index) => (
          <Link key={index} {...link} />
        ))}
      </ul>
    </div>
  );
};

export default LinkGroup;
