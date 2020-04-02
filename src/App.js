import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import TimeTable from './containers/TimeTable';

function App() {
  return (
    <>
      <Global />
      <Header>List of arriving buses to Vehkapolku</Header>
      <TimeTableWrapper>
        <TimeTable />
      </TimeTableWrapper>
    </>
  );
}

const Header = styled.h1`
  margin-bottom: 24px;
  text-align: center;
  font-size: 22px;

  @media only screen and (min-width: 600px) {
    margin-bottom: 42px;
    font-size: 40px;
  }

  @media only screen and (min-width: 1024px) {
    margin-bottom: 60px;
    font-size: 50px;
  }
`;

const TimeTableWrapper = styled.div`
  padding: 8px;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;

  @media only screen and (min-width: 600px) {
    padding: 12px 24px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0 100px;
    padding: 24px 48px;
  }
`;

const Global = createGlobalStyle`
  html, body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;
    background-color: #0089e3;
    color: white;
    font-family: 'Varela Round', sans-serif;

    @media only screen and (min-width: 600px) {
      padding: 25px 40px;
    }

    @media only screen and (min-width: 1024px) {
     padding: 30px 60px;
    }
  }
`;

export default App;
