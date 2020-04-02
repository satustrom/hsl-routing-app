import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import uniqid from 'uniqid';

import useStopData from './useStopData';

const formattedTime = (time) => moment.unix(time).utc().format('HH:mm');

export default function TimeTable() {
  const { data, error } = useStopData('HSL:4610204');

  if (error) {
    return <Heading>Fetching didn't succeed. :(</Heading>;
  }

  if (!data) {
    return <Heading>Just a sec, fetching the data. :)</Heading>;
  }

  return (
    <>
      <FlexDiv>
        <Heading>Destination</Heading>
        <Heading>Realtime (Scheduled) arrival</Heading>
      </FlexDiv>

      {data.stoptimesWithoutPatterns.map((time) => (
        <FlexDiv key={uniqid()}>
          <Paragraph>{time.headsign}</Paragraph>
          <Paragraph>
            {formattedTime(time.realtimeArrival)} ({formattedTime(time.scheduledArrival)})
          </Paragraph>
        </FlexDiv>
      ))}
    </>
  );
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
`;

const Heading = styled.h6`
  margin: 6px 0;
  font-size: 16px;

  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  margin: 4px 0;
  font-size: 14px;

  @media only screen and (min-width: 600px) {
    font-size: 18px;
  }
`;
