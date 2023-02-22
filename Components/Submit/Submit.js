import React from 'react';
import UploadHeader from '../Common/UploadHeader';
import uploadStyles from '../../styles/Upload.module.css';
import submitStyles from '../../styles/Submit.module.css';

const Submit = () => {
  const inputStyle = submitStyles.input;
  return (
    <div className="row px-5 ">
      <UploadHeader />

      <div className={`${uploadStyles.uploadContainer} col-12 col-md-8`}>
        <h1 className={submitStyles.title}>CREATE YOUR COLLECTIONS</h1>
        <h2 className={submitStyles.subTitle}>
          <b>COLLECTIONS DETAILS</b>
        </h2>
        <p>Every time an NFT gets sold, the original owner receives a percentage of the sale price. You can set the amount here, and the payments will execute automatically</p>
        <input
          className={`${inputStyle} w-100`}
          type="text"
          placeholder="Collection category"
        />
        <input
          className={`${inputStyle} w-100`}
          type="text"
          placeholder="Collection logo url"
        />
        <input
          className={`${inputStyle} w-100`}
          type="text"
          placeholder="Collection featured image url"
        />
        <input
          className={`${inputStyle} w-100`}
          type="text"
          placeholder="Collection banner image url'"
        />

        <h2 className={submitStyles.subTitle}>Socials</h2>
        <div className="row">
          <div className="col-12 col-md-4">
            <input
              className={`${inputStyle} w-100`}
              type="text"
              placeholder="Collection banner image url'"
            />
          </div>
          <div className="col-12 col-md-8">
            <input
              className={`${inputStyle} w-100`}
              type="text"
              placeholder="Collection banner image url'"
            />
          </div>
          <div className="col-12 col-md-4">
            <input
              className={`${inputStyle} w-100`}
              type="text"
              placeholder="Collection banner image url'"
            />
          </div>
          <div className="col-12 col-md-8">
            <input
              className={`${inputStyle} w-100`}
              type="text"
              placeholder="Collection banner image url'"
            />
          </div>
        </div>
        <button className={submitStyles.button}>Add more</button>

        <hr className='my-5' />

        <h2 className={submitStyles.subTitle}>ROYALTIES</h2>

        <p className={submitStyles.text}>Every time an NFT gets sold, the original owner receives a percentage of the sale <br /> price. You can set the amount here, and the payments will execute automatically.</p>
        <div className='d-flex justify-content-between fs-3 mt-5' >
            <p className=''>Amount</p>
            <p className=''>0%</p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="py-2 px-5 btn btn-primary mt-5">NEXT</div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
