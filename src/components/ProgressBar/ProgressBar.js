/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const variants = {
  large: {
    "--barBorderRadius": "8px",
    "--progressBorderRadius": "4px",
    "--padding": "4px",
    "--height": "20px",
  },
  medium: {
    "--barBorderRadius": "4px",
    "--progressBorderRadius": "4px",
    "--height": "12px",
  },
  small: {
    "--barBorderRadius": "4px",
    "--progressBorderRadius": "4px",
    "--height": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = variants[size];

  if (!style) {
    throw new Error(
      `Variant not supported. Received ${size}, but needs to be one of the following: ${Object.keys(
        variants
      ).toString()}`
    );
  }

  return <Progress style={variants[size]} max="100" value={value} />;
};

const Progress = styled.progress`
  /* Reset the default appearance */
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--barBorderRadius);
    padding: var(--padding);
    height: var(--height);
  }

  &::-webkit-progress-value {
    --delegatedRadius: ${({ value }) =>
      // Only round the right side when very close to 100%
      value > 98 ? `${(value - 98) * 50}%` : "0%"};

    border-radius: var(--progressBorderRadius) var(--delegatedRadius)
      var(--delegatedRadius) var(--progressBorderRadius);
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
