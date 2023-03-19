import React, { useRef, useState, useEffect } from 'react';
import SideBar from '../Common/SideBar';
import submitStyles from '../../styles/Submit.module.css';
import { FaRegDotCircle } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import currencyLogo from '../../assest/images/Ergo_input_logo.svg';
import Link from 'next/link';
import navStyle from '../../styles/navbar.module.css';
import MuiSlider from './MuiSlider';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CreateCollection = () => {
  // retrieve from local storage
  const [storedData, setStoredData] = useState({});
  const [isButton, setIsButton] = useState(null);
  useEffect(() => {
    setStoredData(JSON.parse(localStorage.getItem('myData')));
    // setIsButton(storedData?.isButton);
  }, []);
  console.log('storedData sss 24', storedData);

  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [minTime, setMinTime] = useState('12:00');
  const [maxTime, setMaxTime] = useState('06:00');
  const [isNeverEx, setIsNeverEx] = useState(false);


  const [formValue, setFormValue] = useState({});
  console.log('setFormValue:c411', formValue);
  const clearForm = useRef(null);

  const [socialInput, setSocialInput] = useState([]);
  const [count, setCount] = useState(2);

  const [muiSlider, setMuiSlider] = useState([]);
  const [muiSliderCount, setMuiSliderCount] = useState(2);

  const [socialValue, setSocialValue] = useState([{ socialName: '', socialAddress: '' }]);

  function handleMinTimeChange(event) {
    setMinTime(event.target.value);
  }

  function handleMaxTimeChange(event) {
    setMaxTime(event.target.value);
  }

  const handleSocialField = () => {
    setCount(count + 1);
    setSocialInput([...socialInput, count]);
    setSocialValue([...socialValue, { socialName: '', socialAddress: '' }]);
  };
  const handleAddress = () => {
    setMuiSliderCount(muiSliderCount + 1);
    setMuiSlider([...muiSlider, muiSliderCount]);
  };
  const handleDeleteSocialInput = (item) => {
    const index = socialInput.indexOf(item);
    if (index > -1) {
      socialInput.splice(index, 1);
    }
    setSocialInput([...socialInput]);
  };

  const handleAllClear = () => {
    localStorage.removeItem('myData');
    setMuiSlider([]);
    setSocialInput([]);
    setIsButton(null);
    setFormValue({});
    setMinDate(new Date());
    setMaxDate(new Date());
    setMinTime('06:00');
    setMaxTime('06:00');
    clearForm.current.reset();
    setStoredData({});
  };


  // form submission handler
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  const handleSocialsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSocials = socialValue.map((social, i) => {
      if (index === i + 1) {
        return { ...social, [name]: value };
      }
      return social;
    });
    setSocialValue(updatedSocials);
  };


  const handleForm = (e) => {
    console.log('submit form click');
    setFormValue({ ...formValue, socialData: socialValue, minDate, maxDate, minTime, maxTime, isButton });
    localStorage.setItem('myData', JSON.stringify(formValue));
    e.preventDefault();
  };


  return (
    <section className='row px-3'>
      <SideBar />
      <form ref={clearForm} id='myForm' className={`col-12 col-md-7`} onSubmit={(e) => e.preventDefault()}>
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

          <div style={{ fontFamily: `'Inter', sans-serif` }}>
            <div className='relative rounded border border-solid border-white mt-8'>
              <input type='text' id='Collection_Category'
                     onChange={(e) => handleFormData(e)}
                     name='collectionCategory'
                     defaultValue={storedData?.collectionCategory || ''}
                     className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' ' />
              <label htmlFor='Collection_Category'
                     className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                Collection Category</label>
            </div>

            <div className='relative rounded border border-solid border-white mt-8'>
              <input type='text' id='collection_LogoUrl'
                     onChange={(e) => handleFormData(e)}
                     defaultValue={storedData?.collectionLogoUrl || ''}
                     name='collectionLogoUrl'
                     className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' ' />
              <label htmlFor='collection_LogoUrl'
                     className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                Collection Logo Url</label>
            </div>

            <div className='relative rounded border border-solid border-white mt-8'>
              <input type='text' id='collection_Featured_ImageUrl'
                     onChange={(e) => handleFormData(e)}
                     defaultValue={storedData?.collectionFeaturedImageUrl || ''}
                     name='collectionFeaturedImageUrl'
                     className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' ' />
              <label htmlFor='collection_Featured_ImageUrl'
                     className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                Collection featured image url</label>
            </div>

            <div className='relative rounded border border-solid border-white mt-8'>
              <input type='text' id='collection_Banner_ImageUrl'
                     onChange={(e) => handleFormData(e)}
                     name='collectionBannerImageUrl'
                     defaultValue={storedData?.collectionBannerImageUrl || ''}
                     className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' ' />
              <label htmlFor='collection_Banner_ImageUrl'
                     className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                Collection banner image url</label>
            </div>
          </div>

          {/* SOCIAL PART START */}

          <h2 className={submitStyles.subTitle}>Socials</h2>
          <div className='row' style={{ fontFamily: `'Inter', sans-serif` }}>
            {/*1st*/}
            <div className='col-12 col-md-4'>
              <div className='relative rounded border border-solid border-white'>
                <input type='text' id='socialName_1'
                       name='socialName'
                       onChange={(e) => handleSocialsChange(e, 1)}
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
                       name='socialAddress'
                       onChange={(e) => handleSocialsChange(e, 1)}
                       className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                       placeholder=' ' />
                <label htmlFor='socialLink_1'
                       className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
                  Enter Corresponding Link</label>
              </div>
            </div>

          </div>
          {socialInput.map((item) => (
            <div className='row' key={item} style={{ position: 'relative', fontFamily: `'Inter', sans-serif` }}>
              <div className='d-flex justify-content-end' style={{
                top: '20px',
                left: '10px',
                position: 'absolute',
                zIndex: 100,
              }}>
                <span style={{
                  background: '#1A1B22',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}><HighlightOffIcon onClick={() => handleDeleteSocialInput(item)} /></span>
              </div>
              <div className='col-12 col-md-4'>
                <div className='relative rounded border border-solid border-white mt-8'>
                  <input type='text' id={`socialName_${item}`}
                         name='socialName'
                         onChange={(e) => handleSocialsChange(e, item)}
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
                         onChange={(e) => handleSocialsChange(e, item)}
                         name='socialAddress'
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
            Add More
          </button>
          <hr className='my-5' />

          {/* ROYALITIES PART START */}

          <h2 className={submitStyles.subTitle}>ROYALTIES</h2>

          <p className={submitStyles.text}>
            Every time an NFT gets sold, the original owner receives a
            percentage of the sale <br /> price. You can set the amount here,
            and the payments will execute automatically.
          </p>
          <MuiSlider showClose={false} handleFormData={handleFormData} id={1} />

          {muiSlider.map((item) => (
            <div key={item}>
              <MuiSlider showClose={true} muiSliderArray={muiSlider} muiSliderSet={setMuiSlider} id={item}
                         handleFormData={handleFormData} />
            </div>
          ))}

          <button onClick={handleAddress} className={submitStyles.button}>
            Add More
          </button>
          <hr className='my-5' />
          {/* MINT PRICE PART START */}

          <h2 className={submitStyles.subTitle}>set mint price</h2>
          <div className='relative rounded border border-solid border-white mt-10 '
               style={{ fontFamily: `'Inter', sans-serif` }}>
            <div className='absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none'>
              <Image
                src={currencyLogo}
                alt='a'
                width={24}
                height={24}
              />
            </div>
            <input type='number' id='mint_price'
                   name='mintPrice'
                   className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                   placeholder=' '
                   defaultValue={storedData?.mintPrice}
                   onChange={(e) => handleFormData(e)} />

            <label htmlFor='mint_price'
                   className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
              Price</label>
          </div>

          <div className='d-flex justify-content-between align-items-center mt-8'
               style={{ fontFamily: `'Inter', sans-serif` }}>
            <h2 className={submitStyles.mintTitle}>MINT START</h2>
            <div className='d-flex'>
              <DatePicker name='minStarDate' className={submitStyles.mintText}

                          selected={minDate ? minDate : null}
                          onChange={(date) => setMinDate(date)}
                          dateFormat='MMMM d, yyyy'
              />
              <input
                name='mint_start_time'
                className={submitStyles.timePicker}
                type='time'
                value={minTime}
                onChange={handleMinTimeChange}
                step='600'
              />

            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center mt-8'
               style={{ fontFamily: `'Inter', sans-serif` }}>
            <h2 className={submitStyles.mintTitle}>MINT EXPIRY</h2>
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
                step='600'
              />
            </div>
          </div>

          <div>
            {isNeverEx ?
              <div className='d-flex' onClick={() => {
                setIsNeverEx(!isNeverEx);
                setIsButton(null);
              }}>
                <FaRegDotCircle className='fs-3 me-3' style={{ color: '#E041E7' }} />
                <p className='d-flex align-items-center pt-1 fw-bold' style={{ fontFamily: `'Inter', sans-serif` }}>
                  Never Expire
                </p>
              </div> : <div className='d-flex' onClick={() => setIsNeverEx(!isNeverEx)}>
                <FaRegDotCircle className='fs-3 text-white me-3' />
                <p className='d-flex align-items-center pt-1 fw-bold' style={{ fontFamily: `'Inter', sans-serif` }}>
                  Never Expire
                </p>
              </div>}
          </div>

          {/*ON SALE END buttons section */}
          <div className='d-flex justify-content-between align-items-center'>
            <p className={submitStyles.subTitle}>ON SALE END</p>

            {isNeverEx ?
              <div className='d-flex' style={{ fontFamily: `'Inter', sans-serif` }}>
                <button disabled type='button'
                        className='cursor-not-allowed text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                  Collection token Burn
                </button>
                <button disabled type='button'
                        className=' cursor-not-allowed text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                  Collection token Return
                </button>
              </div>
              :

              <div className='d-flex'>
                {isButton === 1 ?
                  <button onClick={() => {
                    setIsButton(1);
                  }} type='button' style={{ fontFamily: `'Inter', sans-serif` }}
                          className='text-warning hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                    Collection token Burn
                  </button> :
                  <button onClick={() => {
                    setIsButton(1);
                  }} type='button' style={{ fontFamily: `'Inter', sans-serif` }}
                          className='text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                    Collection token Burn
                  </button>}

                {isButton === 2 ?
                  <button onClick={() => {
                    setIsButton(2);
                  }} type='button' style={{ fontFamily: `'Inter', sans-serif` }}
                          className='text-warning hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                    Collection token Return
                  </button> :
                  <button onClick={() => {
                    setIsButton(2);
                  }} type='button' style={{ fontFamily: `'Inter', sans-serif` }}
                          className=' text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                    Collection token Return
                  </button>}
              </div>}
          </div>
        </div>
        <div className={`d-flex justify-content-center`}>
          <div className={` d-flex justify-content-center me-2`} onClick={handleForm}>
            <Link href='/uploads' className={navStyle.navLinks}>
              <button type='submit' className={submitStyles.nextButton}>NEXT</button>
            </Link>
          </div>
          <div className={` d-flex justify-content-center me-2`} onClick={(e) => handleForm(e)}>
            <Link href='#' className={navStyle.navLinks}>
              <button type='submit' className={submitStyles.nextButton} onClick={handleAllClear}>Clear All</button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateCollection;
