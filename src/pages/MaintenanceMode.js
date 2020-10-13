import React from "react";
import styled from "styled-components";
import "../components/projects/project.styles.css";
import IconContainer from "../components/icons/IconContainer";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const StyledSubtitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 50px;
  color: #d40101;
  padding: 1em;
`;

export default function MaintenanceMode() {
  return (
    <StyledContainer>
      <StyledSubtitle>Under maintenance..</StyledSubtitle>
      <IconContainer />
    </StyledContainer>
  );
}
