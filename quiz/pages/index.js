import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/Components/Widget'
import Footer from '../src/Components/Footer'
import GitHubCorner from '../src/Components/GitHubCorner'
import QuizBackground from '../src/Components/QuizBackground'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
  
  <QuizBackground backgroundImage={db.bg2}>
    <QuizContainer>
      <Widget>
          <Widget.Header>
            <h1>Space cat</h1>
          </Widget.Header>
          <Widget.Content>
            <p>oi</p>
          </Widget.Content>
      </Widget>
      <Widget>

      </Widget>
      <Footer/>
    </QuizContainer>
    <GitHubCorner projectUrl="https://github.com/Erika-Skarda"/>
  </QuizBackground>
)}
