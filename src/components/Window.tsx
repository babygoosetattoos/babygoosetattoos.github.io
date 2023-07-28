import { createGlobalStyle, styled } from "styled-components";
import Chicago from "../assets/Chicago.ttf";
import accentImg from "../assets/accent.png";

interface WindowProps {
  src: string;
  title: string;
  text: string;
  num: string;
  onClick: () => void;
}

const GlobalStyle = createGlobalStyle`
  *{
        box-sizing: border-box;
  }

  /* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #000000 #FFFFFF;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 25px;
  width: 25px;
}
*::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: #FFFFFF;
  border: 1px solid #000000;
}

*::-webkit-scrollbar-track:hover {
  background-color: #FFFFFF;
}

*::-webkit-scrollbar-track:active {
  background-color: #FFFFFF;
}

*::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: #000000;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #000000;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #000000;
}


  @font-face {
    font-family: 'Garamond';
    src: url('${Chicago}') format('ttf'),
  }`;

const WindowDiv = styled.div`
  position: relative;
  z-index: 3;
  width: 60%;
  height: 60%;
  background-color: white;
  border: 2px solid black;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
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
  right: 1.5vw;
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
  align-self: center;
  margin-right: 5%;

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
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8vw;
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
  justify-content: center;
  align-items: center;
  padding: 2vh 2vw;
`;

const ScrollWindow = styled.div`
  height: 80%;
  overflow-y: auto;
  padding: 0 1vw;
`;

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  height: 85%;
  border: 2px solid black;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);
`;

const Image = styled.img`
  max-width: auto;
  max-height: 100%;
`;

const Text = styled.h2`
  margin: 0 0 0 2vw;
  font-size: 1.6vw;
`;

const Window = ({ src, title, text, num, onClick }: WindowProps) => {
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
          <Title>No.{num}</Title>
          <Title>Ф</Title>
        </AccentDivA>
        <AccentDivB />
        <WindowContent>
          <ImageHolder>
            <Image src={src} />
          </ImageHolder>

          <ScrollWindow>
            <Text>{text}</Text>
          </ScrollWindow>
        </WindowContent>
      </WindowDiv>
    </>
  );
};

export default Window;
