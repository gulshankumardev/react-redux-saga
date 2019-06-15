import React from "react";
import Todos from "./Todos";
import RandomUser from "./RandomUser";

const Main = () => {
  return (
    <div className="container">
      <h1>Hello Folks</h1>
      <RandomUser />
      <Todos />
    </div>
  );
};

export default Main;
