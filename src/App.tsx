import { createContext, useMemo, useState } from "react";
import styled from "styled-components";
import AppHeader from "./components/layouts/AppHeader";
import Social from "./pages/ShareStatus";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

const AppWrapper = styled.div`
  width: 668.61px;
  height: 969px;
  position: relative;
  display: flex;
  margin: 0 auto;
  overflow: hidden;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

interface AppContextAttrs {
  isSubPage?: boolean;
  setIsSubPage?: any;
}

export const AppContext = createContext<AppContextAttrs>({});

function App() {
  const [isSubPage, setIsSubPage] = useState<boolean>(false);

  const value = useMemo(() => ({ isSubPage, setIsSubPage }), [isSubPage]);

  return (
    <AppContext.Provider value={value}>
      <PageWrapper>
        <AppWrapper>
          <MainContainer>
            <AppHeader />
            <Social />
          </MainContainer>
        </AppWrapper>
      </PageWrapper>
    </AppContext.Provider>
  );
}

export default App;
