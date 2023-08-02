import React from "react";
import styled from "styled-components";
import ImageItem from "./ImageItem";

interface ArtProps {
  onClick: (src: string, title: string, num: string) => void;
}

const ArtContainer = styled.div`
  box-sizing: border-box;
  padding: 4vh;
  column-count: 4;
  grid-gap: 10px;
  width: 100%;
  height: fit-content;

  @media (max-width: 480px) {
    column-count: 3;
  }
`;

const IMAGE_ITEMS = [
  {
    label: "test",
    variant: "right",
    src: "1.PNG",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    num: "a24",
  },
  {
    label: "test",
    variant: "left",
    src: "2.PNG",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    num: "a24",
  },
  {
    label: "test",
    variant: "bottom",
    src: "3.PNG",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    num: "a24",
  },
  {
    label: "test",
    variant: "right",
    src: "4.PNG",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    num: "a24",
  },
  {
    label: "test",
    variant: "top",
    src: "5.PNG",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    num: "a24",
  },
  {
    label: "test",
    variant: "right",
    src: "6.PNG",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    num: "a24",
  },
];

const Art = React.forwardRef<HTMLDivElement, ArtProps>((props, ref) => {
  const { onClick } = props;

  return (
    <ArtContainer ref={ref}>
      {IMAGE_ITEMS.map((item, index) => (
        <ImageItem
          key={index}
          onClick={onClick}
          label={item.label}
          num={item.num}
          variant={item.variant}
          text={item.text}
          src={item.src}
        />
      ))}
    </ArtContainer>
  );
});

export default Art;
