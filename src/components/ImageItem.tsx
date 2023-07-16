import React from "react";
import styled from "styled-components";

interface ImageItemProps {
  label: string;
  src: string;
  variant: "top" | "left" | "bottom" | "right";
}

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`;

const ImageItem = ({ label, src, variant }: ImageItemProps) => {
  const ImageContainer = styled.div`
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${variant === "top" || variant === "bottom"
      ? `column`
      : `row`};
    justify-content: left;
    border: 2px solid white;
    &:hover {
      box-sizing: border-box;
      cursor: pointer;
      border: 2px solid black;
    }
  `;

  const Label = styled.h2`
    white-space: nowrap;
    margin: 0;
    font-weight: 400;
    font-size: 1.5vw;
    text-decoration: underline;
    color: black;
    user-select: none;
    ${(variant === "left" || variant === "right") &&
    `writing-mode: vertical-rl;`}
    ${(variant === "left" || variant === "bottom") &&
    `transform: rotate(180deg)`}
  `;

  return (
    <ImageContainer>
      {variant === "top" || variant === "left" ? (
        <>
          <Label>{label}</Label>
          <Image src={src} />
        </>
      ) : (
        <>
          <Image src={src} />
          <Label>{label}</Label>
        </>
      )}
    </ImageContainer>
  );
};

export default ImageItem;
