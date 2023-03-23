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
import MuiSlider from './RoyalitySlider';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Social from './Social';
import Royality from './Royality';

export const generateKey = (pre) => {
  return `${pre}${new Date().getTime()}`;
};

const CreateCollection = () => {
  const [formValue, setFormValue] = useState({
    socialData: [
      { socialName: '', socialAddress: '', _id: generateKey('social__') },
    ],
    royality: [{ address: '', amount: 0, _id: generateKey('slider__') }],
  });
  const [isNeverEx, setIsNeverEx] = useState(false);
  const [isButton, setIsButton] = useState(formValue.neverExpButton);
  const [socialValue, setSocialValue] = useState([
    { socialName: '', socialAddress: '' },
  ]);

  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [minTime, setMinTime] = useState('07:00');
  const [maxTime, setMaxTime] = useState('06:00');
  const [socialInput, setSocialInput] = useState([]);

  // Load the form data from local storage on component mount
  useEffect(() => {
    const storedFormData = localStorage.getItem('myData');
    if (storedFormData) {
      const localData = JSON.parse(storedFormData);
      console.log('local', localData);
      setFormValue(localData);
    }
  }, []);

  useEffect(() => {
    setIsButton(formValue.neverExpButton);
    setIsNeverEx(formValue.isNeverEx);
    if (formValue.minDate) {
      setMinDate(new Date(formValue.minDate));
    }
    if (formValue.maxDate) {
      setMaxDate(new Date(formValue.maxDate));
    }

    // const [minTime, setMinTime] = useState('07:00');
    // const [maxTime, setMaxTime] = useState('06:00');
    if (formValue.minTime) {
      setMaxTime(formValue.minTime);
    }
    if (formValue.maxTime) {
      setMinTime(formValue.maxTime);
    }
  }, [formValue]);

  console.log('setFormValue:c411', formValue);
  const clearForm = useRef(null);

  const [muiSlider, setMuiSlider] = useState([]);
  const [muiSliderCount, setMuiSliderCount] = useState(2);

  function handleMinTimeChange(event) {
    setMinTime(event.target.value);
  }

  function handleMaxTimeChange(event) {
    setMaxTime(event.target.value);
  }

  // const filteredSocialValue = formValue?.socialData?.filter((item) => item.socialName !== '' || item.socialAddress !== '');

  const handleAddress = () => {
    setMuiSliderCount(muiSliderCount + 1);
    setMuiSlider([...muiSlider, muiSliderCount]);
  };

  const handleSocialField = () => {
    setCount(count + 1);
    setSocialInput([...socialInput, count]);
    if (socialValue) {
      setSocialValue([...socialValue, { socialName: '', socialAddress: '' }]);
    } else {
      setSocialValue([...socialValue, { socialName: '', socialAddress: '' }]);
    }
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
  };

  // form submission handler
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleForm = (e) => {
    localStorage.setItem(
      'myData',
      JSON.stringify({
        ...formValue,
        minDate,
        maxDate,
        minTime,
        maxTime,
        neverExpButton: isButton,
        isNeverEx,
      }),
    );
    e.preventDefault();
  };

  return (
    <section className="row px-3">
      <SideBar />
      <form
        ref={clearForm}
        id="myForm"
        className={`col-12 col-md-7`}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={submitStyles.createCollectionContainer}>
          <h1 className={submitStyles.title}>CREATE YOUR COLLECTIONS</h1>
          <h2 className={submitStyles.subTitle}>
            <b>COLLECTIONS DETAILS</b>
          </h2>
          <p className={submitStyles.text}>
            The ‘Collection name’ and ‘Description’ are written to the
            blockchain and can’t be changed after minting. They are always shown
            when the collection is displayed, for example when it’s listed on
            the marketplace.
          </p>

          <div style={{ fontFamily: `'Inter', sans-serif` }}>
            <div className="relative rounded border border-solid border-white mt-8">
              <input
                type="text"
                id="Collection_Category"
                onChange={(e) => handleFormData(e)}
                name="collectionCategory"
                defaultValue={formValue?.collectionCategory || ''}
                className="block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="Collection_Category"
                className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Collection Category
              </label>
            </div>

            <div className="relative rounded border border-solid border-white mt-8">
              <input
                type="text"
                id="collection_LogoUrl"
                onChange={(e) => handleFormData(e)}
                defaultValue={formValue?.collectionLogoUrl || ''}
                name="collectionLogoUrl"
                className="block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="collection_LogoUrl"
                className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Collection Logo Url
              </label>
            </div>

            <div className="relative rounded border border-solid border-white mt-8">
              <input
                type="text"
                id="collection_Featured_ImageUrl"
                onChange={(e) => handleFormData(e)}
                defaultValue={formValue?.collectionFeaturedImageUrl || ''}
                name="collectionFeaturedImageUrl"
                className="block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="collection_Featured_ImageUrl"
                className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Collection featured image url
              </label>
            </div>

            <div className="relative rounded border border-solid border-white mt-8">
              <input
                type="text"
                id="collection_Banner_ImageUrl"
                onChange={(e) => handleFormData(e)}
                name="collectionBannerImageUrl"
                defaultValue={formValue?.collectionBannerImageUrl || ''}
                className="block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="collection_Banner_ImageUrl"
                className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Collection banner image url
              </label>
            </div>
          </div>

          {/* SOCIAL PART START */}
          <Social formValue={formValue} setFormValue={setFormValue} />

          {/* ROYALITIES PART START */}

          <Royality formValue={formValue} setFormValue={setFormValue} />
          <hr className="my-5" />
          {/* MINT PRICE PART START */}

          <h2 className={submitStyles.subTitle}>set mint price</h2>
          <div
            className="relative rounded border border-solid border-white mt-10 "
            style={{ fontFamily: `'Inter', sans-serif` }}
          >
            <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
              <Image src={currencyLogo} alt="a" width={24} height={24} />
            </div>
            <input
              type="number"
              id="mint_price"
              name="mintPrice"
              className="block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={formValue?.mintPrice}
              onChange={(e) => handleFormData(e)}
            />

            <label
              htmlFor="mint_price"
              className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Price
            </label>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mt-8"
            style={{ fontFamily: `'Inter', sans-serif` }}
          >
            <h2 className={submitStyles.mintTitle}>MINT START</h2>
            <div className="d-flex">
              <DatePicker
                name="minStarDate"
                className={submitStyles.mintText}
                selected={minDate ? minDate : null}
                onChange={(date) => setMinDate(date)}
                dateFormat="MMMM d, yyyy"
              />
              <input
                name="mint_start_time"
                className={submitStyles.timePicker}
                type="time"
                value={minTime}
                onChange={handleMinTimeChange}
                step="600"
              />
            </div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center mt-8"
            style={{ fontFamily: `'Inter', sans-serif` }}
          >
            <h2 className={submitStyles.mintTitle}>MINT EXPIRY</h2>
            <div className="d-flex">
              <DatePicker
                name="max_start_date"
                className={submitStyles.mintText}
                selected={maxDate}
                onChange={(date) => setMaxDate(date)}
                dateFormat="MMMM d, yyyy"
              />
              <input
                name="max_start_time"
                className={submitStyles.timePicker}
                type="time"
                value={maxTime}
                onChange={handleMaxTimeChange}
                step="600"
              />
            </div>
          </div>

          <div>
            {isNeverEx ? (
              <div
                className="d-flex"
                onClick={() => {
                  setIsNeverEx(!isNeverEx);
                  setIsButton(null);
                }}
              >
                <FaRegDotCircle
                  className="fs-3 me-3"
                  style={{ color: '#E041E7' }}
                />
                <p
                  className="d-flex align-items-center pt-1 fw-bold"
                  style={{ fontFamily: `'Inter', sans-serif` }}
                >
                  Never Expire
                </p>
              </div>
            ) : (
              <div className="d-flex" onClick={() => setIsNeverEx(!isNeverEx)}>
                <FaRegDotCircle className="fs-3 text-white me-3" />
                <p
                  className="d-flex align-items-center pt-1 fw-bold"
                  style={{ fontFamily: `'Inter', sans-serif` }}
                >
                  Never Expire
                </p>
              </div>
            )}
          </div>

          {/*ON SALE END buttons section */}
          <div className="d-flex justify-content-between align-items-center">
            <p className={submitStyles.subTitle}>ON SALE END</p>

            {isNeverEx ? (
              <div
                className="d-flex"
                style={{ fontFamily: `'Inter', sans-serif` }}
              >
                <button
                  disabled
                  type="button"
                  className="cursor-not-allowed text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Collection token Burn
                </button>
                <button
                  disabled
                  type="button"
                  className=" cursor-not-allowed text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  Collection token Return
                </button>
              </div>
            ) : (
              <div className="d-flex">
                {isButton === 1 ? (
                  <button
                    onClick={() => {
                      setIsButton(1);
                    }}
                    type="button"
                    style={{ fontFamily: `'Inter', sans-serif` }}
                    className="text-warning hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Collection token Burn
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsButton(1);
                    }}
                    type="button"
                    style={{ fontFamily: `'Inter', sans-serif` }}
                    className="text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-3 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Collection token Burn
                  </button>
                )}

                {isButton === 2 ? (
                  <button
                    onClick={() => {
                      setIsButton(2);
                    }}
                    type="button"
                    style={{ fontFamily: `'Inter', sans-serif` }}
                    className="text-warning hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Collection token Return
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsButton(2);
                    }}
                    type="button"
                    style={{ fontFamily: `'Inter', sans-serif` }}
                    className=" text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Collection token Return
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={`d-flex justify-content-center`}>
          <div
            className={` d-flex justify-content-center me-2`}
            onClick={handleForm}
          >
            <Link href="/uploads" className={navStyle.navLinks}>
              <button type="submit" className={submitStyles.nextButton}>
                NEXT
              </button>
            </Link>
          </div>
          <div
            className={` d-flex justify-content-center me-2`}
            onClick={handleAllClear}
          >
            <Link href="#" className={navStyle.navLinks}>
              <button type="submit" className={submitStyles.nextButton}>
                Clear All
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateCollection;
