import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

const MuiSlider = () => {
  const [range, setRange] = useState(0);
  return (
    <div>
      {/*range text*/}
      <div className='d-flex justify-content-between align-items-center mt-5' style={{
        fontWeight: 600,
        fontSize: 18,
      }}>
        <p>Amount</p>
        <p>
          {range}%
        </p>
      </div>
      {/*range slider*/}
      <div className='d-flex align-items-center'>
        <span className='mr-3 text-warning'>0%</span>
        <Slider defaultValue={0}
                aria-label='Default'
                valueLabelDisplay='auto' min={0} max={30}
                style={{ color: 'white' }}
                onChange={(e) => setRange(e.target.value)}

        />
        <span className='ml-3 text-warning'>30%</span>
      </div>

      <div className='relative rounded border border-solid border-white mt-10 '>
        <input type='text' id='EnterAddress1'
               name='enterAddress1'
               className='block rounded  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
               placeholder=' ' />
        <label htmlFor='EnterAddress1'
               className='absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'>
          Enter Address</label>
      </div>
    </div>
  );
};

export default MuiSlider;
