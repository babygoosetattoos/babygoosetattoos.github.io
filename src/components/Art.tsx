import React from "react";
import styled from "styled-components";
import ImageItem from "./ImageItem";

interface ArtProps {}

const ArtContainer = styled.div`
  box-sizing: border-box;
  padding: 4vh;
  column-count: 4;
  grid-gap: 10px;
  width: 100%;
  height: fit-content;
`;

const Art = React.forwardRef<HTMLDivElement, ArtProps>((props, ref) => {
  return (
    <ArtContainer ref={ref}>
      <ImageItem label="test" variant="right" src="/sample/1.PNG" />
      <ImageItem label="test" variant="left" src="/sample/2.PNG" />
      <ImageItem label="test" variant="bottom" src="/sample/3.PNG" />
      <ImageItem label="test" variant="right" src="/sample/4.PNG" />
      <ImageItem label="test" variant="top" src="/sample/5.PNG" />
      <ImageItem label="test" variant="right" src="/sample/6.PNG" />
      <ImageItem label="test" variant="right" src="/sample/7.PNG" />
      <ImageItem label="test" variant="top" src="/sample/8.PNG" />
      <ImageItem label="test" variant="top" src="/sample/9.PNG" />
      <ImageItem label="test" variant="bottom" src="/sample/10.PNG" />
      <ImageItem label="test" variant="left" src="/sample/11.PNG" />
      <ImageItem label="test" variant="left" src="/sample/12.PNG" />
    </ArtContainer>
  );
});

export default Art;
