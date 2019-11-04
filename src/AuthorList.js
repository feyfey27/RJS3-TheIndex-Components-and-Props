import React from "react";
import authors from "./data";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{props.authors}</div>
      </div>
    </div>
  );
}

export default AuthorList;
