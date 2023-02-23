import React, { useState } from 'react';
import UploadHeader from '../Common/UploadHeader';
import uploadStyles from '../../styles/Upload.module.css';
import submitStyles from '../../styles/Submit.module.css';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import circle from '../../assest/images/circle.svg';
import FontAwesomeIcon from '@fortawesome/free-solid-svg-icons';
import { FaRegDotCircle } from 'react-icons/fa';
import ProgressBar from './ProgressBar';
import swal from 'sweetalert';

const Submit = () => {
  const inputStyle = submitStyles.input;
  const [socialDivs, setSocialDivs] = useState([]);
  const [address, setAddress] = useState([]);
  const [progress, setProgress] = useState(0);

  // add more button code for social div

  const socialDiv = (
    <div className="row">
      <div className="col-12 col-md-4">
        <input
          name=""
          className={`${inputStyle} w-100`}
          type="text"
          placeholder="enter social name ex: Twitter'"
        />
      </div>
      <div className="col-12 col-md-8 ">
        <input
          name=""
          className={`${inputStyle} w-100`}
          type="text"
          placeholder="Enter Correnponding Link"
        />
      </div>
    </div>
  );

  const handleSocialField = () => {
    setSocialDivs([...socialDivs, socialDiv]);
  };

  // add more button for address

  const targetAddress = (
    <input
      name=""
      className={`${inputStyle} w-100`}
      type="text"
      placeholder="Enter Address"
    />
  );

  const handleAddress = () => {
    setAddress([...address, targetAddress]);
  };

  // form submission handler

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const collectionCategory = form.collectionCategory.value;
    const collectionLogoUrl = form.collectionLogoUrl.value;
    const collectionFeaturedImageUrl = form.collectionFeaturedImageUrl.value;
    const collectionBannerImageUrl = form.collectionBannerImageUrl.value;

    const socialName1 = form.socialName1.value;
    const socialLink1 = form.socialLink1.value;
    const socialName2 = form.socialName2.value;
    const socialLink2 = form.socialLink2.value;

    const address1 = form.address1.value;
    const mintStartDate = form.mintStartDate.value;
    const mintStartTime = form.mintStartTime.value;
    const mintExpiaryDate = form.mintExpiaryDate.value;
    const mintExpiaryTime = form.mintExpiaryTime.value;

    const collectionDetailsData = {
      collectionCategory,
      collectionLogoUrl,
      collectionFeaturedImageUrl,
      collectionBannerImageUrl,
      socialName1,
      socialLink1,
      socialLink2,
      socialName2,
      address1,
      mintStartDate,
      mintStartTime,
      mintExpiaryDate,
      mintExpiaryTime
    };
    // const jsondata = JSON.stringify(collectionDetailsData)
    // console.log(jsondata);
    console.log(collectionDetailsData)
    document.getElementById('myForm').reset();
    swal('Submission Done!', '', 'success');
  };

  return (
   <section className="row px-5 ">
      <UploadHeader />
     <form onSubmit={handleForm} id="myForm" className={`col-12 col-md-8`}>

        <div className={uploadStyles.uploadContainer}>
          <h1 className={submitStyles.title}>CREATE YOUR COLLECTIONS</h1>
          <h2 className={submitStyles.subTitle}>
            <b>COLLECTIONS DETAILS</b>
          </h2>
          <p className={submitStyles.text}>
            The ‘Collection name’ and ‘Description’ are written to the
            blockchain and can’t be <br /> changed after minting. They are
            always shown when the collection is displayed, <br /> for example
            when it’s listed on the marketplace.
          </p>
          <input
            name="collectionCategory"
            className={`${inputStyle} w-100 `}
            type="text"
            placeholder="Collection category"
            required
          />
          <input
            name="collectionLogoUrl"
            className={`${inputStyle} w-100`}
            type="text"
            placeholder="Collection logo url"
            required
          />
          <input
            name="collectionFeaturedImageUrl"
            className={`${inputStyle} w-100`}
            type="text"
            placeholder="Collection featured image url"
            required
          />
          <input
            name="collectionBannerImageUrl"
            className={`${inputStyle} w-100`}
            type="text"
            placeholder="Collection banner image url'"
            required
          />

          {/* SOCIAL PART START */}

          <h2 className={submitStyles.subTitle}>Socials</h2>
          <div className="row">
            <div className="col-12 col-md-4">
              <input
                name="socialName1"
                className={`${inputStyle} w-100`}
                type="text"
                placeholder="enter social name ex: Twitter'"
                required
              />
            </div>
            <div className="col-12 col-md-8">
              <input
                name="socialLink1"
                className={`${inputStyle} w-100`}
                type="text"
                placeholder="Enter Correnponding Link"
                required
              />
            </div>
            <div className="col-12 col-md-4">
              <input
                name="socialName2"
                className={`${inputStyle} w-100`}
                type="text"
                placeholder="enter social name ex: Twitter"
              />
            </div>
            <div className="col-12 col-md-8">
              <input
                name="socialLink2"
                className={`${inputStyle} w-100`}
                type="text"
                placeholder="Enter Correnponding Link"
              />
            </div>
            {socialDivs}
          </div>
          <button onClick={handleSocialField} className={submitStyles.button}>
            Add more
          </button>
          <hr className="my-5" />

          {/* ROYALITIES PART START */}

          <h2 className={submitStyles.subTitle}>ROYALTIES</h2>

          <p className={submitStyles.text}>
            Every time an NFT gets sold, the original owner receives a
            percentage of the sale <br /> price. You can set the amount here,
            and the payments will execute automatically.
          </p>
          <div className="d-flex justify-content-between fs-3 mt-5">
            <p className="">Amount</p>
            <p className="">{progress} %</p>
          </div>
          <ProgressBar progress={progress} setProgress={setProgress} />

          <input
            name="address1"
            className={`${inputStyle} w-100`}
            type="text"
            placeholder="Enter Address"
            required
          />
          {address}
          <button onClick={handleAddress} className={submitStyles.button}>
            Add more
          </button>
          <hr className="my-5" />

          {/* MINT PRICE PART START */}

          <h2 className={submitStyles.subTitle}>set mint price</h2>

          <div className="d-flex justify-content-between align-items-center">
            <h2 className={submitStyles.subTitle}>MINT START</h2>
            <div className="d-flex">
              <select name="mintStartDate" id="" className={submitStyles.mintText}>
              <option value='February 14,2023'>February 14,2023</option>
              <option value='February 15,2023'>February 15,2023</option>
              <option value='February 16,2023'>February 16,2023</option>
              <option value='February 17,2023'>February 17,2023</option>
              <option value='February 18,2023'>February 18,2023</option>
              </select>
              <select name="mintStartTime" id="" className={submitStyles.mintText}>
              <option value='6.00 am'>6.00 am</option>
              <option value='7.00 am'>7.00 am</option>
              <option value='8.00 am'>8.00 am</option>
              <option value='9.00 am'>9.00 am</option>
              <option value='10.00 am'>10.00 am</option>
              </select>

            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={submitStyles.subTitle}>MINT EXPIARY</h2>
            <div className="d-flex">
              <select name="mintExpiaryDate" id="" className={submitStyles.mintText}>
              <option value='February 15,2023'>February 15,2023</option>
              <option value='February 16,2023'>February 16,2023</option>
              <option value='February 17,2023'>February 17,2023</option>
              <option value='February 18,2023'>February 18,2023</option>
              <option value='February 19,2023'>February 19,2023</option>
              </select>
              <select name="mintExpiaryTime" id="" className={submitStyles.mintText}>
              <option value='6.00 am'>6.00 am</option>
              <option value='7.00 am'>7.00 am</option>
              <option value='8.00 am'>8.00 am</option>
              <option value='9.00 am'>9.00 am</option>
              <option value='10.00 am'>10.00 am</option>
              </select>
            </div>
          </div>

          <div className="d-flex ">
            <FaRegDotCircle className="fs-3 text-primary me-3" />
            <p className="d-flex align-items-center pt-1 fw-bold">
              {' '}
              Never Expire
            </p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h2 className={submitStyles.subTitle}>ON SALE END</h2>
            <div className="d-flex">
              <p className={submitStyles.mintText}>Collection token Burn</p>
              <p className={submitStyles.mintText}>Collection token Return</p>
            </div>
          </div>
        </div>
        <div className={` ${uploadStyles.button} d-flex justify-content-center`}>
        <Button type="submit" className={submitStyles.nextButton}>NEXT</Button>
      </div>

      
    </form>
   </section>
  );
};

export default Submit;
