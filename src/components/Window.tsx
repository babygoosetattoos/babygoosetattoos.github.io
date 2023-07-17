import { createGlobalStyle, styled } from "styled-components";
import Chicago from "../assets/Chicago.ttf";
import accentImg from "../assets/accent.png";

interface WindowProps {
  src: string;
  title: string;
  text: string;
  onClick: () => void;
}

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

  @font-face {
    font-family: 'Garamond';
    src: url('${Chicago}') format('ttf'),
  }`;

const WindowDiv = styled.div`
  posititon: relative;
  z-index: 3;
  width: 50%;
  height: 60%;
  background-color: white;
  border: 2px solid black;
  box-shadow: 11px 10px 0px 0px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
`;

const WindowTitle = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  min-height: 2.25vw;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${accentImg});
  background-size: 100% 90%;
  background-repeat: no-repeat;
  background-position: center;
`;

const TitlePseudo = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1vw 0 1vw;
  background-color: white;
`;

const Title = styled.h1`
  white-space: nowrap;
  margin: 0;
  font-size: 2vw;
  font-weight: bold;
`;

const ButtonPseudo = styled.div`
  position: absolute;
  right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5px;
`;

const CloseButton = styled.button`
  height: 95%;
  width: auto;
  aspect-ratio: 1/1;
  background-color: white;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    border: 3px inset;
  }
`;

const AccentDivA = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  min-height: 2.25vw;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AccentTextHolder = styled.div`
  position: absolute;
`;

const AccentDivB = styled.div`
  width: 100%;
  height: 1.5%;
  min-height: 0.15vw;
  border-bottom: 1px solid black;
`;

const WindowContent = styled.div`
  display: flex;
  height: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2vw 0 2vw;
`;

const Divider = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: auto;
  max-height: 80%;
  border: 2px solid black;
`;

const Text = styled.h2`
  margin-left: 2vw;
`;

const Window = ({ src, title, text, onClick }: WindowProps) => {
  return (
    <>
      <GlobalStyle />
      <WindowDiv>
        <WindowTitle>
          <TitlePseudo>
            <Title>{title}</Title>
          </TitlePseudo>
          <ButtonPseudo>
            <CloseButton onClick={onClick}>X</CloseButton>
          </ButtonPseudo>
        </WindowTitle>
        <AccentDivA>
          <AccentTextHolder style={{ left: "1vw" }}>
            <Title>julia</Title>
          </AccentTextHolder>
          <Title style={{ margin: "0 35% 0 35%" }}>Ф</Title>
          <AccentTextHolder style={{ right: "1vw" }}>
            <Title>ʕ •ᴥ•ʔ</Title>
          </AccentTextHolder>
        </AccentDivA>
        <AccentDivB />
        <WindowContent>
          <Divider>
            <Image src={src} />
          </Divider>
          <Divider>
            <Text>{text}</Text>
          </Divider>
        </WindowContent>
      </WindowDiv>
    </>
  );
};

export default Window;
