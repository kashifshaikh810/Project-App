import React, {useState} from 'react';
import {View} from 'react-native';
import AllMarkup from './AllMarkup';

const All = () => {
  const [showColor, setShowColor] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const ChangePageOnClick = para => {
    setShowColor(para);
  };

  return (
    <View>
      <AllMarkup
        showColor={showColor}
        ChangePageOnClick={ChangePageOnClick}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default All;
