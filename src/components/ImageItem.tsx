import { useCallback } from "react";
import styled from "styled-components";

interface ImageItemProps {
  label: string;
  src: string;
  text: string;
  num: string;
  variant: string;
  onClick: (src: string, title: string, text: string, num: string) => void;
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

const isTopOrLeft = (variant: string) =>
  variant === "top" || variant === "left";

const ImageItem = ({
  label,
  src,
  text,
  num,
  variant,
  onClick,
}: ImageItemProps) => {
  const handleClick = useCallback(() => {
    onClick(src, label, text, num);
  }, [src, label, text, onClick]);

  const renderContent = () => {
    const LabelComponent = <Label variant={variant}>{label}</Label>;
    const ImageComponent = <Image src={src} />;
    return isTopOrLeft(variant)
      ? [LabelComponent, ImageComponent]
      : [ImageComponent, LabelComponent];
  };

  return (
    <ImageContainer variant={variant} onClick={handleClick}>
      {renderContent()}
    </ImageContainer>
  );
};

export default ImageItem;
