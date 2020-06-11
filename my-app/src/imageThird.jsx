import React from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";

export function ImageThird(Props) {
  return (
    <div class="columns is-tablet">
      <div class="column"></div>
      <div class="column is-three-fifths">
        <img class="rounded-corners" src={require("./img/" + Props.file)}></img>
      </div>
      <div class="column"></div>
    </div>
  );
}

export default ImageThird;
