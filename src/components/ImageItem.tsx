import styled from "styled-components";

interface ImageItemProps {
  label: string;
  src: string;
  text: string;
  variant: "top" | "left" | "bottom" | "right";
  onClick: (src: string, title: string, text: string) => void;
}

interface StyledProps {
  variant: "top" | "left" | "bottom" | "right";
}

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`;

const ImageContainer = styled.div<StyledProps>`
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) =>
    props.variant === "top" || props.variant === "bottom" ? `column` : `row`};
  text-align: ${(props) =>
    props.variant === "top" || props.variant === "right" ? `left` : `right`};
  border: 2px solid white;
  &:hover {
    box-sizing: border-box;
    cursor: pointer;
    border: 2px solid black;
  }
  &:active {
    border: 5px inset;
  }
`;

const Label = styled.h2<StyledProps>`
  white-space: nowrap;
  margin: 0;
  font-weight: 400;
  font-size: 1.5vw;
  text-decoration: underline;
  color: black;
  user-select: none;
  ${(props) =>
    (props.variant === "left" || props.variant === "right") &&
    `writing-mode: vertical-rl;`}
  ${(props) =>
    (props.variant === "left" || props.variant === "bottom") &&
    `transform: rotate(180deg)`}
`;

const ImageItem = ({ label, src, text, variant, onClick }: ImageItemProps) => {
  return (
    <ImageContainer variant={variant} onClick={() => onClick(src, label, text)}>
      {variant === "top" || variant === "left" ? (
        <>
          <Label variant={variant}>{label}</Label>
          <Image src={src} />
        </>
      ) : (
        <>
          <Image src={src} />
          <Label variant={variant}>{label}</Label>
        </>
      )}
    </ImageContainer>
  );
};

export default ImageItem;
