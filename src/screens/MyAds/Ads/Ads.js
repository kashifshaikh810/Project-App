import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Styles} from './Styles';
import ArrowDown from 'react-native-vector-icons/MaterialIcons';
import {dummyData} from './DummyData';
import {renderItems} from './RenderItems';
import SortingAdsModal from '../../../Components/Modals/SortingAdsModal/SortingAdsModal';
import {Auth, Database} from '../../../../Setup';

const Ads = props => {
  const [showModal, setShowModal] = useState({
    isShow: false,
    index: '',
    postType: '',
    items: '',
  });
  const [userAdData, setUserAdData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keys, setKeys] = useState('');
  const [showSortingAdsModal, setShowSortingAdsModal] = useState({
    shown: false,
    data: '',
  });

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      let uid = Auth()?.currentUser?.uid;
      setIsLoading(true);
      Database()
        .ref(`/userAds/${uid}`)
        .on('value', snapshot => {
          let data = snapshot.val() ? Object.values(snapshot.val()) : [];
          let pushKeys = snapshot.val() ? Object.keys(snapshot.val()) : [];
          setKeys(pushKeys);
          setUserAdData(data);
          setIsLoading(false);
        });
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={Styles.container}>
      <View style={Styles.borderBottom}>
        <TouchableOpacity
          style={Styles.dropDownContainer}
          onPress={() => setShowSortingAdsModal({shown: true})}>
          <Text style={Styles.dropDownText}>
            {showSortingAdsModal.data || 'none'}
            <ArrowDown name="keyboard-arrow-down" size={25} />
          </Text>
        </TouchableOpacity>
      </View>

      <SortingAdsModal
        showSortingAdsModal={showSortingAdsModal}
        setShowSortingAdsModal={setShowSortingAdsModal}
        dummyData={dummyData}
        data={userAdData}
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

      {isLoading && (
        <View style={Styles.myAdsLoader}>
          <ActivityIndicator size={50} color="#b3b3b3" />
        </View>
      )}

      {!isLoading && userAdData.length >= 1 && (
        <FlatList
          data={userAdData}
          renderItem={item =>
            renderItems(item, props, showModal, setShowModal, keys)
          }
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      {!isLoading && userAdData.length === 0 && (
        <View style={Styles.youDontHaveTextContainer}>
          <Text style={Styles.youDontHaveText}>
            You don't have any ads yet.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Ads;
