import styled, { createGlobalStyle } from "styled-components";

type Layout = {
  children: React.ReactNode;
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Main = styled.main`
  height: 100vh;
  height: 100svh;
  display: grid;
  grid-template-columns: 1fr 300px;
`;

const Layout = ({ children }: Layout) => (
  <>
    <GlobalStyles />
    <Main>{children}</Main>
  </>
);

export default Layout;
