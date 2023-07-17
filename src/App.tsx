import { createGlobalStyle, styled } from "styled-components";
import EBGaramond from "./assets/EBGaramond.ttf";
import { useCallback, useRef, useState } from "react";
import Art from "./components/Art";
import About from "./components/About";
import Booking from "./components/Booking";
import Tattoos from "./components/Tattoos";
import Paintings from "./components/Paintings";
import Video from "./components/Video";
import Window from "./components/Window";

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

const BackgroundContainer = styled.div<{ windowOpen: boolean }>`
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
  transition: filter 0.2s ease-in-out;
  filter: ${(props) => (props.windowOpen ? "blur(8px)" : "none")};
  pointer-events: ${(props) => (props.windowOpen ? "none" : "auto")};
`;

const WindowContainer = styled.div<{ windowOpen: boolean }>`
  position: absolute;
  z-index: 2;
  top: 7vw;
  left: 5vw;
  width: 95vw;
  height: calc(100vh - 7vw);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => (props.windowOpen ? "auto" : "none")};
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
  const [currentComponent, setCurrentComponent] = useState("Art");
  const [windowOpen, setWindowOpen] = useState(false);
  const [activeState, setActiveState] = useState({
    src: "",
    title: "",
    text: "",
    num: "",
  });

  const openComponent = useCallback(
    (src: string, title: string, text: string, num: string) => {
      setActiveState({ src, title, text, num });
      setWindowOpen(true);
    },
    []
  );

  const closeWindow = useCallback(() => {
    setWindowOpen(!windowOpen);
  }, [windowOpen]);

  const refs = sections.reduce((acc, curr) => {
    acc[curr] = useRef<HTMLDivElement | null>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  const handleScroll = useCallback(
    (section: string) => {
      setCurrentComponent(section);
      refs[section].current &&
        refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    },
    [refs]
  );

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
        <WindowContainer windowOpen={windowOpen}>
          {windowOpen && <Window {...activeState} onClick={closeWindow} />}
        </WindowContainer>
        <BackgroundContainer windowOpen={windowOpen}>
          {sections.map((section) => {
            const Component = COMPONENTS_MAP[section ?? "Art"];
            return currentComponent === section ? (
              <Component
                key={section}
                ref={refs[section]}
                onClick={openComponent}
              />
            ) : null;
          })}
        </BackgroundContainer>
      </PageContainer>
    </>
  );
};

export default App;
