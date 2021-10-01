import React from 'react';
import {View, Text, Image} from 'react-native';
import {Styles} from './Styles';

const Scheduled = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.mainContainer}>
        <View style={Styles.imgContainer}>
          <Image
            source={require('../../../../Components/Utility/Images/pars.png')}
            style={Styles.img}
          />
        </View>
        <View style={Styles.nothingTxtContainer}>
          <Text style={Styles.nothingTxt}>Nothing here...</Text>
        </View>
        <Text style={Styles.youDontText}>
          You don't have any active package.
        </Text>
      </View>
    </View>
  );
};

export default Scheduled;
