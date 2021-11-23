import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Styles} from './Styles';
import IconLeft from 'react-native-vector-icons/Feather';
import MarkAsSoldModal from '../../Components/Modals/MarkAsSoldModal/MarkAsSoldModal';

const MarkAsSold = props => {
  const [showMarkAsSoldModal, setShowMarkAsSoldModal] = useState(false);
  const routeData = props.route.params.data;
  const ind = props.route.params.index;
  const keys = props.route.params.keys;

  return (
    <View style={Styles.container}>
      <MarkAsSoldModal
        index={ind}
        keys={keys}
        {...props}
        showMarkAsSoldModal={showMarkAsSoldModal}
        setShowMarkAsSoldModal={setShowMarkAsSoldModal}
        heading="Mark ad as sold"
        titile="You will mark your item as sold to Someone ouside OLX"
        cancel="CANCEL"
        markAsSold="MARK AS SOLD"
      />
      <View style={Styles.headerMainContainer}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ADS')}>
            <IconLeft name="chevron-left" size={25} color="#0b2a2e" />
          </TouchableOpacity>
          <Text style={Styles.headerText}>Mark As Sold</Text>
        </View>

        <View style={Styles.midParentContainer}>
          <View style={Styles.midContainer}>
            <Text style={Styles.adDescription}>{routeData.titile}</Text>
            <Text style={Styles.rs}>Rs {routeData.price}</Text>
          </View>

          <View style={Styles.imgContainer}>
            <Image
              source={{uri: routeData.adImages[ind].adImages}}
              style={Styles.img}
            />
          </View>
        </View>
      </View>

      <View style={Styles.boughtTextContainer}>
        <Text style={Styles.boughtText}>Who bought you ad?</Text>
      </View>

      <View style={Styles.lastSectionParentContainer}>
        <TouchableOpacity
          style={Styles.lastSectionContainer}
          onPress={() => setShowMarkAsSoldModal(true)}>
          <View>
            <Image
              source={require('../../Components/Utility/Images/profile.png')}
              style={Styles.defaultImg}
            />
          </View>
          <View>
            <Text style={Styles.someOne}>Someone outside OLX</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MarkAsSold;
