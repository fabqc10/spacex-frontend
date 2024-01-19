import React, { ReactNode } from 'react';
import Fade from 'react-reveal/Fade';

type props = {
    children: ReactNode;
    direcction?: string;
  }

const RevealEffect = ({children,direcction = 'bottom'}:props) => {
  return (
    <div>
      <Fade {...{ [direcction]: true }}>
        {children}
      </Fade>
    </div>
  );
};

export default RevealEffect;
