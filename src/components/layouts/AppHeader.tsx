import styled from "styled-components";
import { responsiveDimension } from "../../utils/helpers";
import Breadcrumbs from "./Breadcrumbs";

const AppHeader = () => {
  return (
    <TopNav>
      <TopNavContentSideBySide>
        <TopNavContentLeft>
          <Breadcrumbs />
        </TopNavContentLeft>
        <TopNavContentRight>
          <IconMenuWrapper>
            <IconMenu src="images/icon-menu.svg" />
          </IconMenuWrapper>
        </TopNavContentRight>
      </TopNavContentSideBySide>

      <TopNavContentMiddle>
        <LovoInvertImg src="images/logo_invert.svg" alt="Play Along Now" />
      </TopNavContentMiddle>
    </TopNav>
  );
};
export default AppHeader;

const TopNav = styled.div`
  width: 100%;
  height: 6.8%;
  min-height: 6.8%;
  position: relative;
  display: flex;
  background-color: #000000;
  z-index: 201;
  div {
    flex-basis: 100%;
  }
`;
const TopNavContentLeft = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const TopNavContentSideBySide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  width: 100%;
  height: 100%;
`;
const TopNavContentMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopNavContentRight = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconMenuWrapper = styled.div`
  cursor: pointer;
  right: 0;
  width: ${() => responsiveDimension(5.5)};
  height: ${() => responsiveDimension(5.5)};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2%;
`;

const IconMenu = styled.img`
  width: ${() => responsiveDimension(2.7)};
`;

const LovoInvertImg = styled.img`
  z-index: 1;
  height: 43.605px;
`;
