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

const BackgroundContainer = styled.div<{ windowOpen: boolean }>`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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

const MenuButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-out;
  z-index: 3;
  user-select: none;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const DropdownMenu = styled.div<{ menuOpen: boolean }>`
  position: fixed;
  z-index: 3;
  border: 2px solid black;
  bottom: 90px;
  right: 30px;
  background-color: white;
  transition: all 0.3s ease-out;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  opacity: ${(props) => (props.menuOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.menuOpen ? "auto" : "none")};
`;

const MenuItem = styled.h2`
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  font-size: 3vw;
  user-select: none;
  white-space: nowrap;
  margin: 0;
  font-weight: 400;
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
  const [currentComponent, setCurrentComponent] = useState("Art");
  const [windowOpen, setWindowOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false);
    },
    []
  );

  const closeWindow = useCallback(() => {
    setWindowOpen(!windowOpen);
  }, [windowOpen]);

  const toggleMenu = () => {
    setWindowOpen(false);
    setMenuOpen(!menuOpen);
  };

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
        <MenuButton onClick={toggleMenu}>
          <img src="star.png" alt="Menu" />
        </MenuButton>
        <DropdownMenu menuOpen={menuOpen}>
          {sections.map((section) => (
            <MenuItem key={section} onClick={() => handleScroll(section)}>
              {section}
            </MenuItem>
          ))}
        </DropdownMenu>
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
