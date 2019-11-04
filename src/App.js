import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorCard from "./AuthorCard";

function App() {
  const authorCardList = authors.map(Authorobj => (
    <AuthorCard author={Authorobj} key={Authorobj.first_name} />
  ));
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <Sidebar />
        <AuthorList authors={authorCardList} />
      </div>
    </div>
  );
}

export default App;
