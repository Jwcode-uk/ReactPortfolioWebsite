import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { Card } from "./card.jsx";

function App() {
  return (
    <div className="App">
      <section class="hero is-primary is-large header-image">
        <div class="hero-head"></div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1>Typer</h1>
          </div>
        </div>
      </section>

      <div class="container">
        <br />
        <center>
          <figure class="image is-128x128">
            <img class="is-rounded" src={require("./img/profile.jpg")} />
          </figure>
          <div class="columns is-tablet">
            <div class="column"></div>
            <div class="column is-three-fifths">
              <p class="title">About Me</p>

              <p>
                Hi, I'm Jonathan, I'm a software developer currently studying in
                2nd year at Newcastle University. I do freelance work in
                Software Development and Youth Work as well as Charity Work when
                I have chance. Feel Free to email me about any opportunitys you
                have.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </center>
      </div>
      <div class="columns is-desktop">
        <div class="column">
          <Card
            contents="text"
            title="CardCollab"
            imgSrc="cclogo.png"
            imgAlt="this is a img"
          />
        </div>
        <div class="column">
          <Card
            contents="text"
            title="New Portfolio Website"
            imgSrc="cclogo.png"
            imgAlt="this is a img"
          />
        </div>
        <div class="column ">
          <Card
            contents="text"
            title="School Rep"
            imgSrc="cclogo.png"
            imgAlt="this is a img"
          />
        </div>
        <div class="column">
          <Card
            contents="text"
            title="Raising and Giving Week"
            imgSrc="rag.png"
            imgAlt="this is a img"
          />
        </div>
      </div>
      <div class="columns is-desktop">
        <div class="column">
          <Card
            contents="text"
            title="NCS"
            imgSrc="ncs.png"
            imgAlt="this is a img"
          />
        </div>
        <div class="column ">
          <Card
            contents="text"
            title="Team Project"
            imgSrc="android.jpg"
            imgAlt="this is a img"
          />
        </div>
        <div class="column ">
          <Card
            contents="NUCATs Treasurer"
            title="title"
            imgSrc="rag.png"
            imgAlt="this is a img"
          />
        </div>
        <div class="column ">
          <Card
            contents="text"
            title="Altitude Foundation"
            imgSrc="altitude.jpg"
            imgAlt="this is a img"
          />
        </div>
      </div>

      <br />
      <div class="container">
        <div class="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </div>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{" "}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
