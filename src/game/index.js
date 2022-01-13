import React, { useState } from "react";
import "animate.css";
import { Router, useLocation, Link } from "@reach/router";
import {
  Container,
  Header,
  TitleContainer,
  ScoreContainer,
  ScoreTitle,
  Score,
  Content,
  ButtonBox,
  Button,
  LanguageContainer,
  Total,
  ResultButton,
  CenterBox,
  Result,
  Picked,
} from "./styled";
import { labels } from "../local";

const classes = {
  rock: "red",
  paper: "blue",
  scissors: "yellow",
};

const Game = () => {
  const { search } = useLocation();
  console.log({ search });
  const params = search
    .slice(1)
    .split("&")
    .reduce((acc, item) => {
      const [key, value] = item.split("=");
      acc[key] = value;
      return acc;
    }, {});
  const { lang = "en" } = params;
  // const [lang, setLang] = useState("ru")
  const [players, setPlayers] = useState([]);
  const [score, setScore] = useState(0);

  const play = (choice) => {
    const t = Math.random();
    let computer;
    switch (true) {
      case t > 0.6:
        computer = "paper";
        break;
      case t > 0.3:
        computer = "rock";
        break;
      default:
        computer = "scissors";
    }
    //console.log(choice, computer);

    switch (choice) {
      case "paper":
        if (computer == "scissors") {
          setScore(0);
          setPlayers([choice, computer, "lose"]);
        } else if (computer == "rock") {
          setScore(score + 1);
          setPlayers([choice, computer, "win"]);
        } else {
          setPlayers([choice, computer, "draw"]);
        }
        break;
      case "rock":
        if (computer == "paper") {
          setScore(0);
          setPlayers([choice, computer, "lose"]);
        } else if (computer == "scissors") {
          setScore(score + 1);
          setPlayers([choice, computer, "win"]);
        } else {
          setPlayers([choice, computer, "draw"]);
        }
        break;
      case "scissors":
        if (computer == "rock") {
          setScore(0);
          setPlayers([choice, computer, "lose"]);
        } else if (computer == "paper") {
          setScore(score + 1);
          setPlayers([choice, computer, "win"]);
        } else {
          setPlayers([choice, computer, "draw"]);
        }
        break;
    }
  };

  const result = players.length > 0 ? labels[lang][players[2]] : "";
  const animeLose =
    players[2] == "lose" ? "animate__animated animate__hinge" : "";
  const animeWin = players[2] == "win" ? "animate__animated animate__tada" : "";

  return (
    <Container>
      <LanguageContainer>
        <Link to={"/?lang=en"}>
          <img src={"images/us.svg"} className={"us"} />
        </Link>
        <Link to={"/?lang=ru"}>
          <img src={"images/ru.svg"} className={"ru"} />
        </Link>
      </LanguageContainer>
      <Header>
        <TitleContainer>
          <img src={"images/logo.svg"} />
        </TitleContainer>
        <ScoreContainer>
          <ScoreTitle>{labels[lang].score}</ScoreTitle>
          <Score>{score}</Score>
        </ScoreContainer>
      </Header>
      <Content>
        {players.length == 0 ? (
          <ButtonBox>
            <Button className={"blue"} onClick={() => play("paper")}>
              <img src={"images/icon-paper.svg"} />
            </Button>
            <Button className={"yellow"} onClick={() => play("scissors")}>
              <img src={"images/icon-scissors.svg"} />
            </Button>
            <Button className={"red"} onClick={() => play("rock")}>
              <img src={"images/icon-rock.svg"} />
            </Button>
          </ButtonBox>
        ) : (
          <Total>
            <Picked>
              <p>{labels[lang].picked}</p>
              <Button className={classes[players[0]]}>
                <img src={`images/icon-${players[0]}.svg`} />
              </Button>
            </Picked>
            <CenterBox>
              <Result className={`${animeLose} ${animeWin}`}>{result}</Result>
              <ResultButton onClick={() => setPlayers([])}>
                {labels[lang].playAgain}
              </ResultButton>
            </CenterBox>
            <Picked>
              <p>{labels[lang].robotPicked}</p>
              <Button className={classes[players[1]]}>
                <img src={`images/icon-${players[1]}.svg`} />
              </Button>
            </Picked>
          </Total>
        )}
      </Content>
    </Container>
  );
};
export default Game;
