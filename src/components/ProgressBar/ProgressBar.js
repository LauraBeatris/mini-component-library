/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const variants = {
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
  medium: {
    height: 12,
    radius: 4,
  },
  small: {
    height: 8,
    radius: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = variants[size];

  if (!styles) {
    throw new Error(
      `Variant not supported. Received ${size}, but needs to be one of the following: ${Object.keys(
        variants
      ).toString()}`
    );
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ "--width": value + "%", height: styles.height }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near-full */
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  width: var(--width);
  height: var(--height);
`;

export default ProgressBar;
