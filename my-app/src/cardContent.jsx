import React from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Tweet } from "react-twitter-widgets";
import { ImageThird } from "./imageThird.jsx";
import { Card } from "./card.jsx";
import { CSSTransition } from "react-transition-group";

export function CardContent(Props) {
  if (Props.display == "cc") {
    return (
      <div class="container">
        <hr />
        <p class="title">CardCollab</p>

        <p>
          I have been working with 3 others on a startup app called CardCollab
          which is a revision app. We are creating using nextJS to allow us to
          make it serverless and hence very scalable and easy to access. We are
          currently working on intergrating AWS services into the apps backend.
        </p>
        <hr />
      </div>
    );
  } else if (Props.display == "ncs") {
    return (
      <div class="container">
        <hr />
        <p class="title">National Citzen Service</p>
        <p>
          I have worked with multiple providers to develop young people and
          facilate them in creating their social action project. I work on NCS
          as it is such a rewarding job as in no other place would you have the
          opportunity to help young people develop themselve soo much in a short
          span of time.
        </p>
        <Tweet tweetId="1194382028470403072" />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <p>
          When working on NCS I ensure the program is not clasroom based instead
          more activity driven whether that from build sculptures to break the
          ice between new teams or teaching sex education in less awkward way
          breaking to get rid of bad stigma around areas of the topic
        </p>
        <br />
        <p>
          the whole point of the program is to do what the education system
          doesn't actually enage the young people and get them to develop skill
          in a fun way while completely a community project
        </p>
        <hr />
      </div>
    );
  } else if (Props.display == "sr") {
    return (
      <div class="container">
        <hr />
        <p class="title">School Representative</p>

        <p>
          I partake in meetings and boards represent at first my year of 304 but
          now my whole school to try improve the university experience for the
          students. Through this I have pushed for changes in a wide range of
          areas to improve students experience within the School of Computing
        </p>
        <hr />
      </div>
    );
  } else if (Props.display == "af") {
    return (
      <div class="container">
        <hr />
        <p class="title">Alltitude Foundation</p>

        <p>
          I volunteer my spare time to mentor 4 young people from disadvantaged
          background on STEM through a project of their choosing. This is to
          encourage them to consider coming to higher education as it allow them
          to build upon there passion in the field in there spare time through
          the charities support and funding.
        </p>
        <ImageThird file="BBC_Microbit.jpg" />
        <p>
          Through this I advise them or a collabrative project using a BBC
          Microbit to make a range of project including robots and projects
          aimed at LGBT rights.
        </p>
        <hr />
      </div>
    );
  } else if (Props.display == "pw") {
    return (
      <div class="container">
        <p>wip</p>
      </div>
    );
  } else if (Props.display == "mm") {
    return <div class="container"></div>;
  } else if (Props.display == "uw") {
    return (
      <div class=" cardGrid">
        <Card
          contents="I'm working with a small team to develop a serverless revision app using nextjs and react as well as a range of AWS services."
          title="Team Project"
          imgSrc="NA"
          imgAlt="this is a img"
          date="Complete"
          tagType="is-success"
        />
        <Card
          contents="I work for NCS where I help organise and run a youth-led program to enable young people to develop themselves"
          title="Algorithms"
          imgSrc="NA"
          imgAlt="this is a img"
          date="Complete"
          tagType="is-success"
        />
        <Card
          contents="I represent my school at meetings pushing for improvements to our experiences and helping create adaption for COVID"
          title="Dissertation"
          imgSrc="NA"
          imgAlt="this is a img"
          date="in Progress"
          tagType="is-warning"
        />
      </div>
    );
  } else if (Props.display == "rag") {
    return (
      <div class="container">
        <hr />
        <p class="title">Raising and Giving week</p>

        <p>
          I spent a week doing charity work every day from helping out at
          Fareshare to on the streets bucket collecting. I took part in Raising
          and Giving week as I'm a big believer in giving back to society and
          this is a small part of me doing that
        </p>
        <ImageThird file="fairShare.png" />
        <hr />
      </div>
    );
  } else if (Props.display == "ff") {
    return <div class="container"></div>;
  } else if (Props.display == null) {
    {
      return <div class="container"></div>;
    }
  } else {
    return <div class="container"></div>;
  }
}
// <Card
//   contents="text"
//   title="CardCollab"
//   imgSrc="cclogo.png"
//   imgAlt="this is a img"
// />
// <Card
//   contents="text"
//   title="Team Project"
//   imgSrc="cclogo.png"
//   imgAlt="this is a img"
// />
// <Card
//   contents="text"
//   title="Alltitude Foundation"
//   imgSrc="cclogo.png"
//   imgAlt="this is a img"
// />
// <Card
//   contents="text"
//   title="Website Comparision"
//   imgSrc="cclogo.png"
//   imgAlt="this is a img"
// />
// <Card
//   contents="text"
//   title="Magic Mirror"
//   imgSrc="cclogo.png"
//   imgAlt="this is a img"
// />
// <Card
//   contents="text"
//   title="University Work"
//   imgSrc="cclogo.png"
//   imgAlt="this is a img"
// />
// <Card
//   contents="text"
//   title="App Development"
//   imgSrc="cclogo.png"
//   imgAlt="this is a img"
// />
export default CardContent;
