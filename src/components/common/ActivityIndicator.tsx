import React from "react";
import styled, { keyframes } from "styled-components";
import { vhToPx } from "../../utils/helpers";

let h = 0;
let backgroundColor = "#000000";

interface ActivityIndicatorProps {
  height?: number;
  color?: string;
}

const ActivityIndicator = (props: ActivityIndicatorProps) => {
  h = props.height as number;
  backgroundColor = props.color as string;

  return (
    <Container>
      <Bar
        key={1}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={0}
        delay={0}
      ></Bar>
      <Bar
        key={2}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={30}
        delay={-0.9167}
      ></Bar>
      <Bar
        key={3}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={60}
        delay={-0.833}
      ></Bar>
      <Bar
        key={4}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={90}
        delay={-0.7497}
      ></Bar>
      <Bar
        key={5}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={120}
        delay={-0.667}
      ></Bar>
      <Bar
        key={6}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={150}
        delay={-0.5837}
      ></Bar>
      <Bar
        key={7}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={180}
        delay={-0.5}
      ></Bar>
      <Bar
        key={8}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={210}
        delay={-0.4167}
      ></Bar>
      <Bar
        key={9}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={240}
        delay={-0.333}
      ></Bar>
      <Bar
        key={10}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={270}
        delay={-0.2497}
      ></Bar>
      <Bar
        key={11}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={300}
        delay={-0.167}
      ></Bar>
      <Bar
        key={12}
        backgroundColor={backgroundColor}
        height={props.height}
        rotate={330}
        delay={-0.0833}
      ></Bar>
    </Container>
  );
};

export default ActivityIndicator;

const Container = styled.div`
  width: ${(props) => vhToPx(h)};
  height: ${(props) => vhToPx(h)};
  position: relative;
  display: inline-block;
`;

const Bar = styled.div<any>`
  width: ${(props) => vhToPx(h * 0.05)};
  height: ${(props) => vhToPx(h * 0.16)};
  left: 49%;
  top: 43%;
  opacity: 0;
  background-color: ${(props) => props.backgroundColor || "#000000"};
  position: absolute;
  -webkit-border-radius: ${(props) => vhToPx(0.4)};
  -webkit-box-shadow: 0 0 ${(props) => vhToPx(0.2)} rgba(0, 0, 0, 0.2);
  -webkit-animation: ${(props) => fade} 1s linear infinite;

  -webkit-transform: rotate(${(props) => props.rotate}deg) translate(0, -130%);
  -webkit-animation-delay: ${(props) => props.delay}s;
`;

const fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0.25;
`;
