import React from "react";
import "./App.scss";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Tweet } from "react-twitter-widgets";
import { ImageThird } from "./imageThird.jsx";
import { Card } from "./card.jsx";
import { FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa";

export function CardContent(Props) {
  if (Props.display === "cc") {
    return (
      <div>
        <p class="title">CardCollab</p>

        <p>
          I have been working with 2 others on a startup app called CardCollab
          which is a revision app. We are creating using nextJS to allow us to
          make it serverless and hence very scalable and easy to access. We are
          currently working on intergrating AWS services into the apps backend
          such as dynamoDB.
        </p>
        <br />
        <p>
          Our goal with this project is to make a minimualist Revision app
          eventually implementing some form of machine learning to optimize the
          user's revision.
        </p>
        <br />
        <p>
          <a href="https://github.com/Jwcode-uk" class="button">
            Github
          </a>
          &emsp;
          <a href="https://cardcollab.com/" class="button">
            Dev website
          </a>
        </p>
        <hr />
      </div>
    );
  } else if (Props.display === "ncs") {
    return (
      <div>
        <p class="title">National Citzen Service</p>
        <p>
          I have worked with multiple providers to develop young people and
          facilate them in creating their social action project. I work on NCS
          as it is such a rewarding job as in no other place would you have the
          opportunity to help young people develop themselve soo much in a short
          span of time.
        </p>
        <Tweet tweetId="1194382028470403072" options={{ align: "center" }} />

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
        <br />
        <p>
          This summer I have been promoted from my Team Assistent to Team
          Leader. in this new role I have increase responsiblity for the young
          people and ensuring the have safe but exceptional experience on the
          NCS program.
        </p>
      </div>
    );
  } else if (Props.display === "sr") {
    return (
      <div>
        <p class="title">School Representative</p>

        <p>
          I partake in meetings and boards represent at first my year of 304 but
          now my whole school to try improve the university experience for the
          students. Through this I have pushed for changes in a wide range of
          areas to improve students experience within the School of Computing
        </p>
        <br />
        <p>
          During Covid I have been attend extra meetings to dicuss and vote on
          change to programs at the school of computing ensuring they are fair
          to students in these exceptional circumstances
        </p>
        <br />
        <p>
          This academic year (2020-2021) I went from being a Course Rep to
          School Rep where I represent my school cohort on boards at the
          students union as well as all my previous boards.
        </p>
        <hr />
      </div>
    );
  } else if (Props.display === "af") {
    return (
      <div>
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
          aimed at LGBTQ+ rights. I really enjoy doing this work as you have a
          great impact on the young people persuing their passion
        </p>
        <hr />
      </div>
    );
  } else if (Props.display === "pw") {
    return (
      <div>
        <p class="title">New Portfolio Websitre</p>
        <p>
          My old portfolio website was made using bootstrap 4 and was slow to
          load due to how heavy bootstrap is and the javascript libraries I was
          using. My aim is to lighten my new portfolio website up by using react
          soi the client only gets what they need rather then the whole site.
        </p>
      </div>
    );
  } else if (Props.display === "mm") {
    return <div class="container"></div>;
  } else if (Props.display === "uw") {
    return (
      <div class="container cardGrid">
        <a>
          <Card
            contents="I represent my school at meetings pushing for improvements to our experiences and helping create adaption for COVID"
            title="Dissertation"
            imgSrc="NA"
            imgAlt="this is a img"
            date="in Progress"
            tagType="is-warning"
          />
        </a>
        <a>
          <Card
            contents="I represent my school at meetings pushing for improvements to our experiences and helping create adaption for COVID"
            title="Team Project"
            imgSrc="NA"
            imgAlt="this is a img"
            date="in Progress"
            tagType="is-warning"
          />
        </a>
        <a>
          <Card
            contents="I represent my school at meetings pushing for improvements to our experiences and helping create adaption for COVID"
            title="Algorithms"
            imgSrc="NA"
            imgAlt="this is a img"
            date="in Progress"
            tagType="is-warning"
          />
        </a>
      </div>
    );
  } else if (Props.display === "rag") {
    return (
      <div>
        <p class="title">Raising and Giving week</p>

        <p>
          I spent a week doing charity work every day from helping out at
          Fareshare to on the streets bucket collecting. I took part in Raising
          and Giving week as I'm a big believer in giving back to society and
          this is a small part of me doing that
        </p>
        <ImageThird file="fairShare.png" />
      </div>
    );
  } else if (Props.display === "ff") {
    return (
      <div>
        <p class="title">Raising and Giving week</p>

        <p>
          I worked with first group to lead a group of young people from
          Carlisle around Newcastle and Northumbria universitys enaging with
          them and showing them that they can could to higher education.
        </p>
        <ImageThird file="firstPic.jpg" />
        <p>
          After this we spent time reflecting on way we could improve the
          program to better facilate the young people to tour the university and
          learn about uni life.
        </p>
      </div>
    );
  } else if (Props.display === null) {
    {
      return <div class="container"></div>;
    }
  } else if (Props.display === "cm") {
    return (
      <div class="columns is-tablet">
        <div class="column"></div>
        <div class="column is-three-fifths">
          <p class="title">Contact</p>
          <p>
            <FaPhone />
            &emsp;07561042929
          </p>
          <p>
            <FaEnvelope />
            &emsp; jwcode@pm.com
          </p>
          <p>
            <FaMapPin />
            &emsp;Newcastle-upon-Tyne, England
          </p>
        </div>
        <div class="column"></div>
      </div>
    );
  } else {
    return <div class="container"></div>;
  }
}
export default CardContent;
