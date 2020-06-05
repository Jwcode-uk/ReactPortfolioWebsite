import React from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";

export function Card(Props) {
  return (
    <center>
      <div class="cardContainer">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={require("./img/" + Props.imgSrc)} alt={Props.imgAlt} />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title">{Props.title}</p>
              </div>
            </div>
            <div class="content">{Props.contents}</div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Card;
