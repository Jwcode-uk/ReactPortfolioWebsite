import React, { useState } from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { Card } from "./card.jsx";
import { Modal } from "react-bulma-components";
import CardContent from "./cardContent";

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
              </p>{" "}
              <CardContent />
            </div>
            <div class="column"></div>
          </div>
        </center>
      </div>

      <div class=" container cardGrid">
        <Card
          contents="text"
          title="CardCollab"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="NCS"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="Raising and Giving Week"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="Team Project"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="School Rep"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="Alltitude Foundation"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="Website Comparision"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="Magic Mirror"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="University Work"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
        <Card
          contents="text"
          title="App Development"
          imgSrc="cclogo.png"
          imgAlt="this is a img"
        />
      </div>

      <br />
      <div class="container">
        <p class="title">My Services</p>

        <div class="columns is-tablet">
          <div class="column">
            <i class="fas fa-magic"></i>
            <p class="subtitle">Development</p>
            <p>
              I have experience developing in a range of lanuages such as C, C#,
              Java, Python and many more. I'm alway looking for new projects to
              improve myself.
            </p>
          </div>
          <div class="column">
            <p class="subtitle">Charity and Youth work</p>
            <p>
              In my spare time I like volunteering for charitys to help improve
              peoples life. I also enjoy mentoring young people on programs such
              as NCS as of the huge impact you have on them.
            </p>
          </div>{" "}
          <div class="column">
            <p class="subtitle">Social media management</p>
            <p>
              I have run social media campaign for projects to raise money for
              charities as well as being given training by a media charity and a
              online course on best pratice
            </p>
          </div>
        </div>
      </div>
      <br />

      <footer class="footer">
        <div class="content has-text-centered">
          <p>Contact me and I&#39;ll get back to you within a day.</p>
          <p>
            <i class="fa fa-map"></i> Newcastle, England
          </p>
          <p>
            <i class="fa fa-envelope"></i> jwcode@pm.me
          </p>
          <button
            type="button"
            onclick="location.href='https://github.com/Jwcode-uk/'"
            class="btn btn-outline-dark"
          >
            GitHub
          </button>
          <button
            type="button"
            onclick="location.href='https://www.linkedin.com/in/jonathan-white-536353172/'"
            class="btn btn-outline-dark"
          >
            LinkedIn
          </button>
          <p>
            <i>
              &copy; Jonathan White 2020 | Banner Image &copy; Oliver Butler
              2020
            </i>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
