import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Styles} from './Styles';
import ArrowDown from 'react-native-vector-icons/MaterialIcons';
import {dummyData} from './DummyData';
import {renderItems} from './RenderItems';
import SortingAdsModal from '../../../Components/Modals/SortingAdsModal/SortingAdsModal';

const Ads = props => {
  const [showModal, setShowModal] = useState(false);
  const [showSortingAdsModal, setShowSortingAdsModal] = useState({
    shown: false,
    data: '',
  });
  return (
    <View style={Styles.container}>
      <View style={Styles.borderBottom}>
        <TouchableOpacity style={Styles.dropDownContainer} onPress={() => setShowSortingAdsModal({shown: true})}>
          <Text style={Styles.dropDownText}>{showSortingAdsModal.data || 'Active Ads (0)' }</Text>
          <ArrowDown name="keyboard-arrow-down" size={25} />
        </TouchableOpacity>
      </View>

      <SortingAdsModal
        showSortingAdsModal={showSortingAdsModal}
        setShowSortingAdsModal={setShowSortingAdsModal}
      />

      <View style={Styles.midContainer}>
        <View style={Styles.midContainerChild}>
          <Text style={Styles.heavyDiscountText}>
            Heavy discount on packages
          </Text>
          <View style={Styles.viewPackageBoxContainer}>
            <TouchableOpacity style={Styles.viewPackageBox} activeOpacity={0.6}>
              <Text style={Styles.viewPackageText}>View packages</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View style={Styles.youDontHaveTextContainer}>
        <Text style={Styles.youDontHaveText}>You don't have any ads yet.</Text>
      </View> */}

      <FlatList
        data={dummyData}
        renderItem={item => renderItems(item, props, showModal, setShowModal)}
      />
    </View>
  );
};

export default Ads;