import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import CheckIcon from 'react-native-vector-icons/MaterialIcons';
import ToggleIcon from 'react-native-vector-icons/FontAwesome';
import {Styles} from './Styles';
import {Auth, Database} from '../../../../Setup';

const ReviewYourDetails = props => {
  const [toggleOnOff, setToggleOnOff] = useState(false);
  const [userName, setUserName] = useState(false);
  const [userData, setUserData] = useState('');
  let uid = Auth().currentUser.uid;

  useEffect(() => {
    Database()
      .ref(`/userSignUp/${uid}`)
      .on('value', snapshot => {
        setUserData(snapshot.val());
        setUserName(snapshot.val().userName);
      });

    return () => {
      console.log('clean up');
    };
  }, []);

  const postHandler = () => {
    if (userData.userName === userName) {
      props.navigation.navigate('AdSuccessfullyPostMsg');
    } else {
      Database().ref('/userSignUp/').child(uid).update({userName: userName});
      props.navigation.navigate('AdSuccessfullyPostMsg');
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <View style={Styles.headerMain}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <IconLeft name="chevron-left" size={22} color="#0b2a2e" />
          </TouchableOpacity>

          <Text style={Styles.heading}>Review Your Details</Text>
        </View>
      </View>

      <View style={Styles.imageAndInputContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={require('../../../Components/Utility/Images/profile.png')}
            style={Styles.image}
          />
        </View>

        <View style={Styles.yourNameAndInputContainer}>
          <Text style={Styles.yourNameTxt}>Your name</Text>
          <TextInput
            placeholder="Your name"
            style={Styles.txtInput}
            value={userName}
            onChangeText={text => setUserName(text)}
          />
        </View>
      </View>

      <View style={Styles.labelAndPhonenumContainer}>
        <View style={Styles.labelAndPhonenumContainerChild}>
          <Text style={Styles.phoneNumLabel}>Verified phone number</Text>
          <CheckIcon
            name="check-circle"
            size={30}
            color="#218386"
            style={Styles.checkIcon}
          />
          <Text style={Styles.phoneNum}>{userData.phone}</Text>
        </View>
      </View>

      <View style={Styles.showPhonNumAndIconContainer}>
        <View>
          <Text style={Styles.showPhonNum}>Show my phone number in ads</Text>
        </View>
        <View style={Styles.toggleIconContainer}>
          <TouchableOpacity
            activeOpacity={2}
            onPress={() => setToggleOnOff(!toggleOnOff)}>
            <ToggleIcon
              name={toggleOnOff ? 'toggle-off' : 'toggle-on'}
              size={45}
              color="#023034"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.buttonContainer}>
        <TouchableOpacity
          style={Styles.buttonTouchAble}
          onPress={() => postHandler()}>
          <Text style={Styles.buttonTxt}>Post Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewYourDetails;
