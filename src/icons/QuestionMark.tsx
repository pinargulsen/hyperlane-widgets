import React, { memo } from 'react';

import { Color } from '../color';

interface Props {
  width?: string | number;
  height?: string | number;
  color?: string;
  classes?: string;
}

function _QuestionMarkIcon({ width, height, color, classes }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={classes}>
      <path
        d="M21.55 31.5q.05-3.6.825-5.25.775-1.65 2.925-3.6 2.1-1.9 3.225-3.525t1.125-3.475q0-2.25-1.5-3.75t-4.2-1.5q-2.6 0-4 1.475T17.9 14.95l-4.2-1.85q1.1-2.95 3.725-5.025T23.95 6q5 0 7.7 2.775t2.7 6.675q0 2.4-1.025 4.35-1.025 1.95-3.275 4.1-2.45 2.35-2.95 3.6t-.55 4Zm2.4 12.5q-1.45 0-2.475-1.025Q20.45 41.95 20.45 40.5q0-1.45 1.025-2.475Q22.5 37 23.95 37q1.45 0 2.475 1.025Q27.45 39.05 27.45 40.5q0 1.45-1.025 2.475Q25.4 44 23.95 44Z"
        fill={color || Color.Black}
      />
    </svg>
  );
}

export const QuestionMarkIcon = memo(_QuestionMarkIcon);
