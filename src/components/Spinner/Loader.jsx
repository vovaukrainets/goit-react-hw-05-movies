import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox className="sweet-loading">
      <SpinnerCircular
        size={50}
        thickness={100}
        speed={100}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </LoaderBox>
  );
};
export default Loader;
