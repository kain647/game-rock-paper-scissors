import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 768px) {
  }
`;
export const LanguageContainer = styled.div`
  display: flex;
  margin-left: auto;
  padding: 10px;
  img {
    width: 25px;
    height: auto;
    &.us {
      margin-right: 10px;
    }
  }
  @media (max-width: 768px) {
  }
`;
export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 40%;
  align-items: center;
  justify-content: center;
  padding: 15px;
  outline: 3px solid #606e85ff;
  border-radius: 15px;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    width: 80%;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  img {
    @media only screen and (max-width: 600px) {
      height: 70px;
    }
  }
`;
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  //padding: 0px 30px;
  width: 150px;
  @media (max-width: 768px) {
    padding: 15px 20px;
    border-radius: 5px;
  }
`;
export const ScoreTitle = styled.h2`
  display: flex;
  color: #2a46c0;
  margin: 0.8rem 0 0 0;
  font-weight: 400;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    font-weight: 900;
  }
`;
export const Score = styled.div`
  display: flex;
  color: #3b4363;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -5px;
  transform: scale(0.8, 1);
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
  }
`;
export const ButtonBox = styled.div`
  display: grid;
  grid-template-areas:
    "paper scissors"
    "rock rock";
  grid-auto-columns: 250px 250px;
  grid-auto-rows: 205px;
  .blue {
    grid-area: paper;
    border: 15px solid #5671f5;
    margin: auto;
  }
  .yellow {
    grid-area: scissors;
    border: 15px solid #eca922;
    margin: auto;
  }
  .red {
    grid-area: rock;
    border: 15px solid #dd405d;
    margin: auto;
  }
  @media (max-width: 768px) {
    grid-auto-columns: 205px;
    grid-auto-rows: 250px;
  }
`;
export const Button = styled.button`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  border: none;
  box-shadow: rgb(100 100 111 / 30%) 0px 7px 29px 0px;
  transition: all 0.1s ease;
  cursor: pointer;
  &.blue {
    border: 15px solid #5671f5;
  }
  &.yellow {
    border: 15px solid #eca922;
  }
  &.red {
    border: 15px solid #dd405d;
  }
  img {
    width: 50%;
  }
  :hover {
    background-color: #dee2e6;
  }
  :active {
    background-color: #ced4da;
    transform: scale(0.99);
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Picked = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 0;
    color: aliceblue;
    margin-bottom: 50px;
    text-transform: uppercase;
  }
`;
export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
`;
export const Result = styled.h1`
  display: flex;
  color: aliceblue;
`;
export const ResultButton = styled.div`
  display: flex;
  width: 150px;
  height: 40px;
  color: black;
  font-family: cursive;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  cursor: pointer;
  margin: 0px 40px;
`;
