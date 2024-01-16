import React, { ReactNode } from 'react';
import Fade from 'react-reveal/Fade';

type props = {
    children: ReactNode;
  }

const RevealEffect = ({children}:props) => {
  return (
    <div>
      <Fade bottom>
        {children}
      </Fade>
    </div>
  );
};

export default RevealEffect;
