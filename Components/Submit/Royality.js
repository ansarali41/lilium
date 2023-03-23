import React from 'react';
import submitStyles from '../../styles/Submit.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import RoyalitySlider from './RoyalitySlider';
import { generateKey } from './CreateCollection';

const Royality = ({ formValue, setFormValue }) => {
  // const [royalty, setRoyalty] = React.useState(formValue.Royality)
  const handleAddRoyalitiField = () => {
    const royaliti = formValue?.royality;
    let newRoyaliti;
    if (royaliti) {
      newRoyaliti = [
        ...royaliti,
        { address: '', amount: 0, _id: generateKey('slider__') },
      ];
    }
    setFormValue({ ...formValue, royality: newRoyaliti });
  };
  return (
    <div>
      <h2 className={submitStyles.subTitle}>ROYALTIES</h2>

      <p className={submitStyles.text}>
        Every time an NFT gets sold, the original owner receives a percentage of
        the sale <br /> price. You can set the amount here, and the payments
        will execute automatically.
      </p>

      {formValue?.royality?.map((item, index) => (
        <div key={item._id}>
          <RoyalitySlider
            id={index}
            showClose={index < 1 ? false : true}
            item={item}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        </div>
      ))}

      <button onClick={handleAddRoyalitiField} className={submitStyles.button}>
        Add More
      </button>
    </div>
  );
};

export default Royality;
