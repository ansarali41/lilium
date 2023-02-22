import React, { useState } from 'react';
import UploadHeader from '../Common/UploadHeader';
import uploadStyles from '../../styles/Upload.module.css';
import submitStyles from '../../styles/Submit.module.css';
import Image from 'next/image';
// import ellipse from '../../assest/images/';

const Submit = () => {
  const inputStyle = submitStyles.input;
  const [socialDivs, setSocialDivs] = useState([])
  const [address, setAddress] = useState([])

  // add more button code for social div

  const socialDiv = <div className='row'>
    <div  className="col-12 col-md-4">
  <input
    className={`${inputStyle} w-100`}
    type="text"
    placeholder="enter social name ex: Twitter'"
  />
</div>
<div className="col-12 col-md-8 ">
  <input
    className={`${inputStyle} w-100`}
    type="text"
    placeholder="Enter Correnponding Link"
  />
</div>
  </div>


  const handleSocialField = () =>{
    setSocialDivs([...socialDivs, socialDiv ])
  }

  // add more button for address

  const targetAddress =  <input
  className={`${inputStyle} w-100`}
  type="text"
  placeholder="Enter Address"
/>

const handleAddress = () =>{
  setAddress([...address,targetAddress ])
}




  return (
    <div className="row px-5 ">
      <UploadHeader />

      <div className={`${uploadStyles.uploadContainer} col-12 col-md-8`}>
        <h1 className={submitStyles.title}>CREATE YOUR COLLECTIONS</h1>
        <h2 className={submitStyles.subTitle}>
          <b>COLLECTIONS DETAILS</b>
        </h2>
        <p>
          Every time an NFT gets sold, the original owner receives a percentage
          of the sale price. You can set the amount here, and the payments will
          execute automatically
        </p>
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

        {/* SOCIAL PART START */}

        <h2  className={submitStyles.subTitle}>Socials</h2>
        <div className="row">
          <div  className="col-12 col-md-4">
            <input
              className={`${inputStyle} w-100`}
              type="text"
              placeholder="enter social name ex: Twitter'"
            />
          </div>
          <div className="col-12 col-md-8">
            <input
              className={`${inputStyle} w-100`}
              type="text"
              placeholder="Enter Correnponding Link"
            />
          </div>
          <div className="col-12 col-md-4">
            <input
              className={`${inputStyle} w-100`}
              type="text"
              placeholder="enter social name ex: Twitter"
            />
          </div>
          <div className="col-12 col-md-8">
            <input
              className={`${inputStyle} w-100`}
              type="text"
              placeholder="Enter Correnponding Link"
            />
          </div>
          {socialDivs}
        </div>
        <button onClick={handleSocialField} className={submitStyles.button}>Add more</button>
        <hr className="my-5" />

        {/* ROYALITIES PART START */}

        <h2 className={submitStyles.subTitle}>ROYALTIES</h2>

        <p className={submitStyles.text}>
          Every time an NFT gets sold, the original owner receives a percentage
          of the sale <br /> price. You can set the amount here, and the
          payments will execute automatically.
        </p>
        <div className="d-flex justify-content-between fs-3 mt-5">
          <p className="">Amount</p>
          <p className="">0%</p>
        </div>

        <input
          className={`${inputStyle} w-100`}
          type="text"
          placeholder="Enter Address"
        />
        {address}
        <button onClick={handleAddress} className={submitStyles.button}>Add more</button>
        <hr className="my-5" />

        {/* MINT PRICE PART START */}

        <h2 className={submitStyles.subTitle}>set mint price</h2>

        <div className="d-flex justify-content-between align-items-center">
          <h2 className={submitStyles.subTitle}>MINT START</h2>
          <div className="d-flex">
            <p className={submitStyles.mintText}>February 14,2023</p>
            <p className={submitStyles.mintText}>6.00 am</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className={submitStyles.subTitle}>MINT EXPIARY</h2>
          <div className="d-flex">
            <p className={submitStyles.mintText}>February 14,2023</p>
            <p className={submitStyles.mintText}>6.00 am</p>
          </div>
        </div>

        <div></div>

        <div className="d-flex justify-content-between align-items-center">
          <h2 className={submitStyles.subTitle}>ON SALE END</h2>
          <div className="d-flex">
            <p className={submitStyles.mintText}>Collection token Burn</p>
            <p className={submitStyles.mintText}>Collection token Return</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="py-2 px-5 btn btn-primary mt-5">NEXT</div>
      </div>
    </div>
  );
};

export default Submit;
