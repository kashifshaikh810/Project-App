import React, {useState} from 'react';
import {View} from 'react-native';
import IncludesDetailsMarkup from './IncludesDetailsMarkup';

const IncludesDetails = props => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showPhonesModal, setShowPhonesModal] = useState(false);
  const [itemCondition, setItemCondition] = useState('');
  const [itemType, setItemType] = useState(null);
  console.log(props);
  return (
    <View>
      <IncludesDetailsMarkup
        {...props}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        itemCondition={itemCondition}
        setItemCondition={setItemCondition}
        itemType={itemType}
        setItemType={setItemType}
        showModal={showModal}
        setShowModal={setShowModal}
        showPhonesModal={showPhonesModal}
        setShowPhonesModal={setShowPhonesModal}
      />
    </View>
  );
};

export default IncludesDetails;
