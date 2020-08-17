import React from "react";
import styled from "styled-components";
import "./components/project.styles.css";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
    font-family: "Oxygen", sans-serif;
    font-size: 30vw;
    text-transform: uppercase;
    letter-spacing: 2px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #d40101;

    @media (min-width: 448px) {
      -webkit-text-stroke-width: 4px;
    }
  
`;
const StyledSubtitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 1em;
  color: #313131;
  -webkit-text-stroke-color: #d40101;
  padding: 1em 0 1em 0;

  @media (min-width: 448px) {
    padding: 1em 0 1.5em 0;
  }

`;

export default function Error() {
  return (
    <StyledContainer>
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>PAGE NOT FOUND</StyledSubtitle>
      <div className="link">
        <a target={"blank"} href="/" className="project-site">
          Back to home
        </a>
      </div>
    </StyledContainer>
  );
}
