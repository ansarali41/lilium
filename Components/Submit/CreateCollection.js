import React, { useState } from 'react';
import SideBar from '../Common/SideBar';
import uploadStyles from '../../styles/Upload.module.css';
import submitStyles from '../../styles/Submit.module.css';
import { FaRegDotCircle } from 'react-icons/fa';
import ProgressBar from './ProgressBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateCollection = () => {
  const inputStyle = submitStyles.input;
  const [socialDivs, setSocialDivs] = useState([]);
  const [address, setAddress] = useState([]);
  const [progress, setProgress] = useState(0);
  const [minDate, setMinDate] = useState(new Date('2023-02-14'));
  const [maxDate, setMaxDate] = useState(new Date('2023-02-14'));
  const [minTime, setMinTime] = useState('06:00');
  const [maxTime, setMaxTime] = useState('06:00');
  const [socialInput, setSocialInput] = useState([]);
  const [count, setCount] = useState(3);

  console.log('socialInput', socialInput);

  function handleMinTimeChange(event) {
    setMinTime(event.target.value);
  }

  function handleMaxTimeChange(event) {
    setMaxTime(event.target.value);
  }


  // add more button code for social div

  const socialDiv = (
    <div className='row'>
      <div className='col-12 col-md-4'>
        <div className='relative rounded border border-solid border-white mt-8'>
          <input type='text' id='socialName_1'
                 name='socialName1'
                 className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                 placeholder=' ' />
          <label htmlFor='socialName_1'
                 className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
            Enter social name ex: Twitter</label>
        </div>
      </div>
      <div className='col-12 col-md-8'>
        <div className='relative rounded border border-solid border-white mt-8'>
          <input type='text' id='socialLink_1'
                 name='socialLink1'
                 className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                 placeholder=' ' />
          <label htmlFor='socialLink_1'
                 className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
            Enter Corresponding Link</label>
        </div>
      </div>
    </div>
  );

  const handleSocialField = () => {
    setCount(count + 1);
    setSocialInput([...socialInput, count]);
  };

  // add more button for address

  const targetAddress = (
    <input
      name=''
      className={`${inputStyle} w-100`}
      type='text'
      placeholder='Enter Address'
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
    const min_Star_Date = form.minStarDate.value;
    const min_Start_Time = form.minStartime.value;
    const max_Expiry_Date = form.maxStarDate.value;
    const max_Expiry_Time = form.maxStarTime.value;

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
      min_Star_Date,
      min_Start_Time,
      max_Expiry_Date,
      max_Expiry_Time,
    };
    // const jsondata = JSON.stringify(collectionDetailsData)
    console.log(collectionDetailsData);
    // document.getElementById('myForm').reset();
  };

  return (
    <section className='row px-3'>
      <SideBar />
      <form onSubmit={handleForm} id='myForm' className={`col-12 col-md-7`}>
        <div className={submitStyles.createCollectionContainer}>
          <h1 className={submitStyles.title}>CREATE YOUR COLLECTIONS</h1>
          <h2 className={submitStyles.subTitle}>
            <b>COLLECTIONS DETAILS</b>
          </h2>
          <p className={submitStyles.text}>
            The ‘Collection name’ and ‘Description’ are written to the
            blockchain and can’t be changed after minting. They are
            always shown when the collection is displayed, for example
            when it’s listed on the marketplace.
          </p>

          <div className='relative rounded border border-solid border-white mt-8'>
            <input type='text' id='Collection_Category'
                   name='collectionCategory'
                   className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                   placeholder=' ' />
            <label htmlFor='Collection_Category'
                   className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
              Collection Category</label>
          </div>

          <div className='relative rounded border border-solid border-white mt-8'>
            <input type='text' id='collection_LogoUrl'
                   name='collectionLogoUrl'
                   className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                   placeholder=' ' />
            <label htmlFor='collection_LogoUrl'
                   className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
              Collection Logo Url</label>
          </div>

          <div className='relative rounded border border-solid border-white mt-8'>
            <input type='text' id='collection_Featured_ImageUrl'
                   name='collectionFeaturedImageUrl'
                   className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                   placeholder=' ' />
            <label htmlFor='collection_Featured_ImageUrl'
                   className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
              Collection featured image url</label>
          </div>

          <div className='relative rounded border border-solid border-white mt-8'>
            <input type='text' id='collection_Banner_ImageUrl'
                   name='collectionBannerImageUrl'
                   className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                   placeholder=' ' />
            <label htmlFor='collection_Banner_ImageUrl'
                   className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
              Collection banner image url</label>
          </div>

          {/* SOCIAL PART START */}

          <h2 className={submitStyles.subTitle}>Socials</h2>
          <div className='row'>
            {/*1st*/}
            <div className='col-12 col-md-4'>
              <div className='relative rounded border border-solid border-white'>
                <input type='text' id='socialName_1'
                       name='socialName1'
                       className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                       placeholder=' ' />
                <label htmlFor='socialName_1'
                       className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                  Enter social name ex: Twitter</label>
              </div>
            </div>
            <div className='col-12 col-md-8'>
              <div className='relative rounded border border-solid border-white'>
                <input type='text' id='socialLink_1'
                       name='socialLink1'
                       className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                       placeholder=' ' />
                <label htmlFor='socialLink_1'
                       className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                  Enter Corresponding Link</label>
              </div>
            </div>
            {/*2nd*/}
            <div className='col-12 col-md-4'>
              <div className='relative rounded border border-solid border-white mt-8'>
                <input type='text' id='socialName_2'
                       name='socialName2'
                       className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                       placeholder=' ' />
                <label htmlFor='socialName_2'
                       className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                  Enter social name ex: Twitter</label>
              </div>
            </div>
            <div className='col-12 col-md-8'>
              <div className='relative rounded border border-solid border-white mt-8'>
                <input type='text' id='socialLink_2'
                       name='socialLink2'
                       className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                       placeholder=' ' />
                <label htmlFor='socialLink_2'
                       className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                  Enter Corresponding Link</label>
              </div>
            </div>
          </div>
          {socialInput.map((item) => (
            <div className='row'>
              <div className='col-12 col-md-4'>
                <div className='relative rounded border border-solid border-white mt-8'>
                  <input type='text' id={`socialName_${item}`}
                         name={`socialName${item}`}
                         className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                         placeholder=' ' />
                  <label htmlFor={`socialName_${item}`}
                         className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                    Enter social name ex: Twitter</label>
                </div>
              </div>
              <div className='col-12 col-md-8'>
                <div className='relative rounded border border-solid border-white mt-8'>
                  <input type='text' id={`socialLink_${item}`}
                         name={`socialLink${item}`}
                         className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                         placeholder=' ' />
                  <label htmlFor={`socialLink_${item}`}
                         className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                    Enter Corresponding Link</label>
                </div>
              </div>
            </div>
          ))}
          <button onClick={handleSocialField} className={submitStyles.button}>
            Add more
          </button>
          <hr className='my-5' />

          {/* ROYALITIES PART START */}

          <h2 className={submitStyles.subTitle}>ROYALTIES</h2>

          <p className={submitStyles.text}>
            Every time an NFT gets sold, the original owner receives a
            percentage of the sale <br /> price. You can set the amount here,
            and the payments will execute automatically.
          </p>
          <div className='d-flex justify-content-between fs-3 mt-5'>
            <p className=''>Amount</p>
            {/*<p className=''>{progress} %</p>*/}
          </div>
          {/*<ProgressBar progress={progress} setProgress={setProgress} />*/}
          
          <div className='relative rounded border border-solid border-white mt-8'>
            <input type='text' id='EnterAddress1'
                   name='enterAddress1'
                   className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                   placeholder=' ' />
            <label htmlFor='EnterAddress1'
                   className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
              Enter Address</label>
          </div>
          {address}
          <button onClick={handleAddress} className={submitStyles.button}>
            Add more
          </button>
          <hr className='my-5' />

          {/* MINT PRICE PART START */}

          <h2 className={submitStyles.subTitle}>set mint price</h2>

          <div className='d-flex justify-content-between align-items-center'>
            <h2 className={submitStyles.subTitle}>MINT START</h2>
            <div className='d-flex'>
              <DatePicker name='minStarDate' className={submitStyles.mintText}
                          selected={minDate}
                          onChange={(date) => setMinDate(date)}
                          dateFormat='MMMM d, yyyy'
              />
              <input
                name='mint_start_time'
                className={submitStyles.timePicker}
                type='time'
                value={minTime}
                onChange={handleMinTimeChange}
                step='600' // this sets the step to 10 minutes (600 seconds)
              />

            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className={submitStyles.subTitle}>MINT EXPIRY</h2>
            <div className='d-flex'>

              <DatePicker name='max_start_date' className={submitStyles.mintText}
                          selected={maxDate}
                          onChange={(date) => setMaxDate(date)}
                          dateFormat='MMMM d, yyyy'
              />
              <input
                name='max_start_time'
                className={submitStyles.timePicker}
                type='time'
                value={maxTime}
                onChange={handleMaxTimeChange}
                step='600' // this sets the step to 10 minutes (600 seconds)
              />
            </div>
          </div>

          <div className='d-flex '>
            <FaRegDotCircle className='fs-3 text-primary me-3' />
            <p className='d-flex align-items-center pt-1 fw-bold'>
              Never Expire
            </p>
          </div>

          <div className='d-flex justify-content-between align-items-center'>
            <h2 className={submitStyles.subTitle}>ON SALE END</h2>
            <div className='d-flex'>
              <p className={submitStyles.mintText}>Collection token Burn</p>
              <p className={submitStyles.mintText}>Collection token Return</p>
            </div>
          </div>
        </div>
        <div className={` ${uploadStyles.button} d-flex justify-content-center`}>
          <button type='submit' className={submitStyles.nextButton}>NEXT</button>
        </div>
      </form>
    </section>
  );
};

export default CreateCollection;
