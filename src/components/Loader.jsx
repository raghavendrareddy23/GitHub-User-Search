import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loader = ({ loading }) => (
  <div className="flex items-center justify-center w-full h-full">
    <BeatLoader color="#36D7B7" loading={loading} size={25} />
  </div>
);
export default Loader