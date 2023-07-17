import { createGlobalStyle, styled } from "styled-components";
import Chicago from "../assets/Chicago.ttf";
import accentImg from "../assets/accent.png";

interface WindowProps {
  src: string;
  title: string;
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
  align-items: center;
  padding: 0 1vw 0 1vw;
  background-color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2vw;
  height: 100%;
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

  &:hover {
    cursor: pointer;
  }

  &:active {
    border: 3px inset;
  }
`;

const WindowContent = styled.div``;

const Window = ({ src, title, onClick }: WindowProps) => {
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
        <WindowContent></WindowContent>
      </WindowDiv>
    </>
  );
};

export default Window;
