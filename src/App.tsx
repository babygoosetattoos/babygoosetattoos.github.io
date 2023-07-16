import { createGlobalStyle, styled } from "styled-components";
import EBGaramond from "./assets/EBGaramond.ttf";
import { useRef, useState } from "react";
import Art from "./components/Art";
import About from "./components/About";
import Booking from "./components/Booking";
import Tattoos from "./components/Tattoos";
import Paintings from "./components/Paintings";
import Video from "./components/Video";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Garamond';
    src: url('${EBGaramond}') format('ttf'),
  }

  body {
    font-family: 'Garamond', serif;
  }
`;

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #2f2f2f;
  z-index: 0;
`;

const BackgroundContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 7vw;
  left: 5vw;
  width: 95vw;
  height: calc(100vh - 7vw);
  background-color: white;
  z-index: 1;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 5vw;
  width: 95vw;
  display: flex;
  flex-direction: row;
  padding: 1vw 0 1vw 0;
`;

const Home = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 5vw;
  text-decoration: none;
  color: #bba280;
  user-select: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const LinkContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2.5%;
  padding-left: 5%;
  align-items: end;
`;

const Link = styled.h2`
  white-space: nowrap;
  margin: 0;
  font-weight: 400;
  font-size: 3vw;
  text-decoration: none;
  color: white;
  user-select: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

interface IComponentsMap {
  [key: string]: React.ComponentType<any>;
}

const COMPONENTS_MAP: IComponentsMap = {
  Art,
  About,
  Booking,
  Tattoos,
  Paintings,
  Video,
};

const App = () => {
  const sections = ["Art", "About", "Booking", "Tattoos", "Paintings", "Video"];

  const refs = sections.reduce((acc, curr) => {
    acc[curr] = useRef<HTMLDivElement | null>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  const [currentComponent, setCurrentComponent] = useState("Art");

  const handleScroll = (section: string) => {
    setCurrentComponent(section);
    refs[section].current &&
      refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <NavBar>
          <Home onClick={() => handleScroll("Art")}>babygoosetattoos</Home>
          <LinkContainer>
            {sections.map((section) => (
              <Link key={section} onClick={() => handleScroll(section)}>
                {section}
              </Link>
            ))}
          </LinkContainer>
        </NavBar>
        <BackgroundContainer>
          {sections.map((section) => {
            const Component = COMPONENTS_MAP[section];
            return currentComponent === section ? (
              <Component key={section} ref={refs[section]} />
            ) : null;
          })}
        </BackgroundContainer>
      </PageContainer>
    </>
  );
};

export default App;
