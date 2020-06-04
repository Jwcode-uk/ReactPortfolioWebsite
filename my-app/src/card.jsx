import React from "react";
import "./App.css";
import "react-bulma-components/dist/react-bulma-components.min.css";

export function Card(Props) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={Props.imgSrc} alt={Props.imgAlt} />
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
  );
}

export default Card;
