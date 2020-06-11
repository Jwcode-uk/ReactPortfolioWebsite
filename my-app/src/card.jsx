import React from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";

export function Card(Props) {
  return (
    <div class="cardContainer ">
      <div class="card">
        {Props.imgSrc == "NA" ? (
          <p></p>
        ) : (
          <div class="card-image">
            <figure class=" rounded-corners image is-4by3">
              <img
                class="rounded-corners-top"
                src={require("./img/" + Props.imgSrc)}
                alt={Props.imgAlt}
              />
            </figure>
          </div>
        )}

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="subtitle">
                {Props.title}
                <span class={"tag is-pulled-right " + Props.tagType}>
                  {Props.date}
                </span>
              </p>
            </div>
          </div>
          <div class="content">{Props.contents}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
