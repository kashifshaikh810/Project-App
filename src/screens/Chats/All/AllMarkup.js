/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import ThreeDotsIcon from 'react-native-vector-icons/Feather';
import PhoneIcon from 'react-native-vector-icons/SimpleLineIcons';
import CheckSingleIcon from 'react-native-vector-icons/Ionicons';
import SmsIcon from 'react-native-vector-icons/AntDesign';

import {Styles} from '../Styles';

const dummyData = [
  {
    contentImg: require('../../../Components/Utility/Images/table.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'Ad sold',
  },
  {
    contentImg: require('../../../Components/Utility/Images/tableTwo.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'Ad sold',
  },
  {
    contentImg: require('../../../Components/Utility/Images/sofa.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'Ad Inactive',
  },
  {
    contentImg: require('../../../Components/Utility/Images/image.jpeg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'Ad Inactive',
  },
  {
    contentImg: require('../../../Components/Utility/Images/table.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'Ad Inactive',
  },

  {
    contentImg: require('../../../Components/Utility/Images/table.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'Number viewed',
  },

  {
    contentImg: require('../../../Components/Utility/Images/table.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'Number viewed',
  },

  {
    contentImg: require('../../../Components/Utility/Images/table.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'SMS',
  },

  {
    contentImg: require('../../../Components/Utility/Images/table.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'Number viewed',
  },

  {
    contentImg: require('../../../Components/Utility/Images/table.jpg'),
    profileImg: require('../../../Components/Utility/Images/profile.png'),
    userName: 'Muhammad Viceroy',
    message: 'Toyota passo 2007 model 12reg o',
    date: '26 Aug',
    addTime: 'SMS',
  },
];

const AllMarkup = props => {
  const renderItems = ({item}) => {
    return (
      <View style={Styles.renderContainer}>
        <View style={Styles.renderContentContainer}>
          <Text>{item.date}</Text>
        </View>
        <View style={Styles.dataContainer}>
          <View style={Styles.imgBackContainer}>
            <ImageBackground
              source={item.contentImg}
              style={Styles.backImg}
              imageStyle={{borderRadius: 6}}>
              <View style={Styles.profileImgContainer}>
                <Image source={item.profileImg} style={Styles.profileImg} />
              </View>
            </ImageBackground>
          </View>

          <View style={Styles.container}>
            <Text style={Styles.userName} numberOfLines={1}>
              {item.userName}
            </Text>
            <Text style={Styles.message} numberOfLines={1}>
              {item.message}
            </Text>

            {item.addTime === 'Number viewed' ? (
              <View style={Styles.iconsContainer}>
                <CheckSingleIcon
                  name="checkmark-done"
                  size={12}
                  color="lightgreen"
                />
                <PhoneIcon name="phone" size={15} color="grey" />
                <Text>{item.addTime}</Text>
              </View>
            ) : (
              <View style={Styles.iconsContainer}>
                <CheckSingleIcon
                  name="checkmark-outline"
                  size={12}
                  color="#b3b3b3"
                />
                <SmsIcon name="message1" size={15} color="#b3b3b3" />
                <Text>SMS</Text>
              </View>
            )}
          </View>
          <View style={Styles.threeDotsContainer}>
            <ThreeDotsIcon name="more-vertical" size={20} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={Styles.allContainer}>
        <TouchableOpacity
          style={[
            Styles.allStyle,
            {
              backgroundColor:
                props.showColor === 'all' ? 'lightblue' : '#f1f1f1',
              borderWidth: props.showColor !== 'all' ? 1 : 0,
            },
          ]}
          onPress={() => props.ChangePageOnClick('all')}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.unreadChatStyle,
            {
              backgroundColor:
                props.showColor === 'unreadchat' ? 'lightblue' : '#f1f1f1',
              borderWidth: props.showColor !== 'unreadchat' ? 1 : 0,
            },
          ]}
          onPress={() => props.ChangePageOnClick('unreadchat')}>
          <Text>Unread Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.importantStyle,
            {
              backgroundColor:
                props.showColor === 'important' ? 'lightblue' : '#f1f1f1',
              borderWidth: props.showColor !== 'important' ? 1 : 0,
            },
          ]}
          onPress={() => props.ChangePageOnClick('important')}>
          <Text>Important</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.line} />

      {props.showColor === 'all' && (
        <FlatList data={dummyData} renderItem={item => renderItems(item)} />
      )}
    </View>
  );
};

export default AllMarkup;
