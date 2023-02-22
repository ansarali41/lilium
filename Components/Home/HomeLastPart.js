import React from 'react';
import Banner from '../../assest/images/image 21.png';
import Image from 'next/image';
const HomeLastPart = () => {
  return (
    <div className="row">
      <Image
        className="img-fluid"
        src={Banner}
        alt="banner"
        width={1512}
        height={412}
      />
    </div>
  );
};

export default HomeLastPart;
