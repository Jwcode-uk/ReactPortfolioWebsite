import React, { useState } from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { Card } from "./card.jsx";
import { Modal } from "react-bulma-components";
import CardContent from "./cardContent";
import { useTransition, animated, useSpring } from "react-spring";

function App() {
  const [context, setContext] = useState(null);
  const [toggle, set] = useState(false);

  const loadContent = (val) => {
    set(false);
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      setContext(val);
      set(true);
    }, 200);
  };
  const props = useSpring({
    opacity: toggle ? 1 : 0,
  });

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
              <p class="title">About me</p>
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
      <br />
      <p class="title">My Work</p>

      <div class="container cardGrid">
        <a onClick={() => loadContent("cc")}>
          <Card
            contents="I'm working with a small team to develop a serverless revision app using nextjs and react as well as a range of AWS services."
            title="CardCollab"
            imgSrc="cclogo.png"
            imgAlt="this is a img"
            date="Active"
            tagType="is-success"
          />
        </a>
        <a onClick={() => loadContent("ncs")}>
          <Card
            contents="I work for NCS where I help organise and run a youth-led program to enable young people to develop themselves"
            title="NCS"
            imgSrc="ncs.png"
            imgAlt="this is a img"
            date="Seasonal"
            tagType="is-success"
          />
        </a>
        <a onClick={() => loadContent("sr")}>
          <Card
            contents="I represent my school at meetings pushing for improvements to our experiences and helping create adaption for COVID"
            title="School Rep"
            imgSrc="cclogo.png"
            imgAlt="this is a img"
            date="Active"
            tagType="is-success"
          />
        </a>
        <a onClick={() => loadContent("af")}>
          <Card
            contents="I work voluntary for a allitude foundation supporting and mentoring young people into getting into stem"
            title="Alltitude Foundation"
            imgSrc="altitude.jpg"
            imgAlt="this is a img"
            date="Active"
            tagType="is-success"
          />
        </a>
        <a onClick={() => loadContent("pw")}>
          <Card
            contents="I'm currently upgrading my old portfolio website from html to react with hopes in increasing it's performance"
            title="Portfolio Website"
            imgSrc="react.png"
            imgAlt="this is a img"
            date="On going"
            tagType="is-warning"
          />
        </a>
        <a onClick={() => loadContent("uw")}>
          <Card
            contents="This hold a archive of my work I have done or am currently working on while at university"
            title="University Work"
            imgSrc="usb.jpg"
            imgAlt="this is a img"
            date="Archive"
            tagType="is-primary"
          />
        </a>
        <a onClick={() => loadContent("rag")}>
          <Card
            contents="I did a week of charity work supporting a wide range of charities across the north east through a range of activities."
            title="Raising and Giving"
            imgSrc="rag.png"
            imgAlt="this is a img"
            date="02/2020"
          />
        </a>
        <a onClick={() => loadContent("ff")}>
          <Card
            contents="I volunteered with First to show newcastle university to Young people and encourage them they can come to further education"
            title="First Face to Face"
            imgSrc="first.png"
            imgAlt="this is a img"
            date="07/2019"
          />
        </a>
      </div>

      <center>
        <div class="container">
          <div class="columns is-tablet">
            <div class="column"></div>
            <div class="column is-three-fifths">
              <br />
              <animated.div style={props} id="content">
                <div class="container" border-radius="25px">
                  <div
                    id="rcorners"
                    class=" has-background-light"
                    border-radius="25px"
                  >
                    <CardContent display={context} />
                  </div>
                </div>
              </animated.div>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </center>
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
