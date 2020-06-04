import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { Card } from "./card.jsx";

function App() {
  return (
    <div className="App">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          {" "}
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>

            <a class="navbar-item">Documentation</a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <p class="title">Fullheight hero with navbar</p>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </div>
      <div class="container">
        <div class="columns is-desktop">
          <div class="column">
            <Card
              contents="text"
              title="title"
              imgSrc="https://bulma.io/images/placeholders/1280x960.png"
              imgAlt="this is a img"
            />
          </div>
          <div class="column">
            <Card
              contents="text"
              title="title"
              imgSrc="https://bulma.io/images/placeholders/1280x960.png"
              imgAlt="this is a img"
            />
          </div>
          <div class="column ">
            <Card
              contents="text"
              title="title"
              imgSrc="https://bulma.io/images/placeholders/1280x960.png"
              imgAlt="this is a img"
            />
          </div>
          <div class="column ">
            <Card
              contents="text"
              title="title"
              imgSrc="https://bulma.io/images/placeholders/1280x960.png"
              imgAlt="this is a img"
            />
          </div>
        </div>
        <div class="columns is-desktop">
          <div class="column">
            <Card
              contents="text"
              title="title"
              imgSrc="https://bulma.io/images/placeholders/1280x960.png"
              imgAlt="this is a img"
            />
          </div>
          <div class="column">
            <Card
              contents="text"
              title="title"
              imgSrc="https://bulma.io/images/placeholders/1280x960.png"
              imgAlt="this is a img"
            />
          </div>
          <div class="column ">
            <Card
              contents="text"
              title="title"
              imgSrc="https://bulma.io/images/placeholders/1280x960.png"
              imgAlt="this is a img"
            />
          </div>
          <div class="column ">
            <Card
              contents="text"
              title="title"
              imgSrc="https://bulma.io/images/placeholders/1280x960.png"
              imgAlt="this is a img"
            />
          </div>
        </div>
      </div>
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
