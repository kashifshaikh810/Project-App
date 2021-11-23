import React, {useState} from 'react';
import {View} from 'react-native';
import BuyingMarkup from './BuyingMarkup';

const Buying = () => {
  const [showColor, setShowColor] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const ChangePageOnClick = para => {
    setShowColor(para);
  };

  return (
    <View>
      <BuyingMarkup
        showColor={showColor}
        ChangePageOnClick={ChangePageOnClick}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default Buying;
