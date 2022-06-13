import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(images/background-default.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const ViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

interface PageMainContainerProps {
  children?: React.ReactNode;
}

const PageMainContainer = ({ children }: PageMainContainerProps) => {
  return (
    <MainContainer>
      <ViewWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </ViewWrapper>
    </MainContainer>
  );
};
export default PageMainContainer;
