import React, {useState} from 'react';
import {View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import IncludesDetailsMarkup from './IncludesDetailsMarkup';

const IncludesDetails = props => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [showPhonesModal, setShowPhonesModal] = useState({
    shown: false,
    routeData: '',
    data: '',
  });
  const [showCarsModal, setShowCarsModal] = useState({
    shown: false,
    routeData: '',
    data: '',
  });
  const [itemCondition, setItemCondition] = useState('');
  const [itemType, setItemType] = useState(null);

  const upload = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setShowModal(false);
      for (const res of file) {
        console.log(res.uri, res.name, res.size, res.type, 'pic data');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  return (
    <View>
      <IncludesDetailsMarkup
        {...props}
        upload={upload}
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
        setShowCarsModal={setShowCarsModal}
        showCarsModal={showCarsModal}
        showLeaveModal={showLeaveModal}
        setShowLeaveModal={setShowLeaveModal}
      />
    </View>
  );
};

export default IncludesDetails;
