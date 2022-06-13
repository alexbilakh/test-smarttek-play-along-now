import React from "react";
import styled from "styled-components";
import ActivityIndicator from "../../components/common/ActivityIndicator";
import {
  IsMobile,
  IsTablet,
  vwToPx,
  maxWidth,
  maxHeight,
  responsiveDimension,
} from "../../utils/helpers";

const ActivityLoader = (props: any) => {
  return (
    <Container backgroundColor={props.backgroundColor || "transparent"}>
      <ActivityIndicator height={7} color={props.color || "#ffffff"} />
      <Message color={props.color || "#ffffff"}>{props.message}</Message>
    </Container>
  );
};

export default ActivityLoader;

const Container = styled.div<any>`
  width: ${(props) => (IsMobile || IsTablet ? vwToPx(100) : maxWidth)};
  height: ${(props) => maxHeight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  position: absolute;
  z-index: 300;
`;

const Message = styled.span`
  font-family: pamainregular;
  font-size: ${(props) => responsiveDimension(2.8)};
  color: ${(props) => props.color};
  line-height: 1;
  text-transform: uppercase;
`;
