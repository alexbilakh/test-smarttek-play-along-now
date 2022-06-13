import { useContext } from "react";
import { AppContext } from "../../App";
import styled from "styled-components";
import { IsMobile, responsiveDimension } from "../../utils/helpers";

const Breadcrumbs = () => {
  const { isSubPage, setIsSubPage } = useContext(AppContext);

  if (!isSubPage) return null;
  return (
    <Container>
      <BreadcrumbItemsWrapper>
        <BreadcrumbItem backgroundColor="#0a69b8" />
        <BreadcrumbItem backgroundColor={"#19d1be"} active />
      </BreadcrumbItemsWrapper>

      <BackButtonActiveWrapper backgroundColor="#0a69b8">
        <ArrowBackImageWrapper
          id={"navigation-bar"}
          onClick={() => setIsSubPage(false)}
        >
          <ArrowBackImage src="images/header-icon-arrow-white.svg" />
        </ArrowBackImageWrapper>
      </BackButtonActiveWrapper>
    </Container>
  );
};

export default Breadcrumbs;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BackButtonActiveWrapper = styled.div<any>`
  position: absolute;
  width: ${(props) => (IsMobile ? 20 : 15)}%;
  height: 99%;
  border-top-right-radius: ${(props) => responsiveDimension(6.8)};
  border-bottom-right-radius: ${(props) => responsiveDimension(6.8)};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
`;

const ArrowBackImageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ArrowBackImage = styled.img<any>`
  width: 100%;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  //margin-right: ${(props) => props.marginRightInPct || 0}%;
  padding-right: 20%;
`;

const BreadcrumbItemsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${(props) => (IsMobile ? 20 : 15)}%;
`;

const BreadcrumbItem = styled.div<any>`
  width: ${(props) => responsiveDimension(2)};
  max-width: ${(props) => responsiveDimension(2)};
  height: ${(props) => responsiveDimension(2)};
  max-height: ${(props) => responsiveDimension(2)};
  border-radius: 50%;
  margin-left: 3%;
  ${(props) =>
    props.active
      ? `border: ${responsiveDimension(0.4)} solid ${props.backgroundColor};`
      : `background-color: ${props.backgroundColor};`};
`;
