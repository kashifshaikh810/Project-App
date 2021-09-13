import React, {useState} from 'react';
import {View, Text} from 'react-native';
import IncludesDetailsMarkup from './IncludesDetailsMarkup';

const IncludesDetails = props => {
  const [selectedLocation, setSelectedLocation] = useState();
  return (
    <View>
      <IncludesDetailsMarkup
        {...props}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </View>
  );
};

export default IncludesDetails;
