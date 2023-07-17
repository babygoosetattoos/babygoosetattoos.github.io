import React from "react";
import styled from "styled-components";
import ImageItem from "./ImageItem";

interface ArtProps {
  onClick: (src: string, title: string) => void;
}

const ArtContainer = styled.div`
  box-sizing: border-box;
  padding: 4vh;
  column-count: 4;
  grid-gap: 10px;
  width: 100%;
  height: fit-content;
`;

const Art = React.forwardRef<HTMLDivElement, ArtProps>((props, ref) => {
  const { onClick } = props;
  return (
    <ArtContainer ref={ref}>
      <ImageItem
        onClick={onClick}
        label="test"
        variant="right"
        text=""
        src="/sample/1.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="left"
        text=""
        src="/sample/2.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="bottom"
        text=""
        src="/sample/3.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="right"
        text=""
        src="/sample/4.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="top"
        text=""
        src="/sample/5.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="right"
        text=""
        src="/sample/6.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="right"
        text=""
        src="/sample/7.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="top"
        text=""
        src="/sample/8.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="top"
        text=""
        src="/sample/9.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="bottom"
        text=""
        src="/sample/10.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="left"
        text=""
        src="/sample/11.PNG"
      />
      <ImageItem
        onClick={onClick}
        label="test"
        variant="left"
        text=""
        src="/sample/12.PNG"
      />
    </ArtContainer>
  );
});

export default Art;
