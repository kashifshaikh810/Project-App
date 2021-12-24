/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import ThreeDotsIcon from 'react-native-vector-icons/Feather';
import PhoneIcon from 'react-native-vector-icons/SimpleLineIcons';
import CheckSingleIcon from 'react-native-vector-icons/Ionicons';
import SmsIcon from 'react-native-vector-icons/AntDesign';

import {Styles} from '../Styles';
import UnreadChatModal from '../../../Components/Modals/UnreadChatModal/UnreadChatModal';
import AllChatModal from '../../../Components/Modals/AllChatModal/AllChatModal';
import ImportantChatModal from '../../../Components/Modals/ImportantChatModal/ImportantChatModal';
import { Database } from '../../../../Setup';

let lastMessage = false;

export const renderItems = ({item, index}, props, navigation) => {
  let data = item.chatList;
  let date = item.msgDate;

  const monthNamesArr = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let month = new Date(date);
  let monthName = monthNamesArr[month.getMonth()];
  let msgDate = new Date(date).getDate();

  let pathRes = `${props.uid}${data.userId}`.split('').sort().join('');
    Database()
      .ref(`/chatMessages/${pathRes}`)
      .on('value', (snapshot) => {
        let snap = snapshot.val();
        let data = snap ? Object?.values(snap) : [];
        let res = data.shift().msg;
        lastMessage = res;
      });

  return (
    <>
    {props?.uid !== data?.userId &&
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PrivateMessages', {
          itemData: data,
          propsData: props,
          navigation: navigation,
        })
      }>
      <View style={Styles.renderContainer}>
        <View style={Styles.renderContainerChild}>
         {data.mark === 'important' && <View style={Styles.main}>
            <View style={Styles.importanatContainer}>
              <Text style={Styles.importanat} numberOfLines={1}>
                {data.mark === 'important' ? data.mark : ''}
              </Text>
            </View>
          </View>}
          <View style={Styles.renderContentContainer}>
          <Text>{msgDate} {monthName}</Text>
          </View>
        </View>
        
        <View style={Styles.dataContainer}>
          <View style={Styles.imgBackContainer}>
            <ImageBackground
              source={{uri: data.adImages[0].adImages}}
              style={Styles.backImg}
              imageStyle={{borderRadius: 6}}>
              <View style={Styles.profileImgContainer}>
                <Image source={require('../../../Components/Utility/Images/profile.png')} style={Styles.profileImg} />
              </View>
            </ImageBackground>
          </View>

          <View style={Styles.container}>
            <Text style={Styles.userName} numberOfLines={1}>
              {data.userName}
            </Text>
            <Text style={Styles.message} numberOfLines={1}>
              {data.titile}
            </Text>

            {item.addTime === 'Number viewed' ? (
              <View style={Styles.iconsContainerTwo}>
                <CheckSingleIcon
                  name="checkmark-done"
                  size={12}
                  color="#3f978b"
                />
                <PhoneIcon name="phone" size={13} color="grey" />
                <Text>{item.addTime}</Text>
              </View>
            ) : (
              <View style={Styles.iconsContainer}>
                <Text numberOfLines={1}>{lastMessage}</Text>
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
        </View>
        <View style={Styles.threeDotsContainer}>
          <ThreeDotsIcon
            name="more-vertical"
            size={20}
            onPress={() => props.setShowModal({ show: true, index: index, mark: data.mark})}
          />
        </View>

        <AllChatModal {...item} {...props} />
      </View>
      <View style={Styles.line} />
    </TouchableOpacity>
    }
    </>
  );
};

export const unReadChatrenderItems = ({item}, props, navigation) => {
  return (
    <>
      <TouchableOpacity
        style={Styles.renderContainer}
        onPress={() =>
          navigation.navigate('PrivateMessages', {
            itemData: item,
            propsData: props,
            navigation: navigation,
          })
        }>
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
              {item.titile}
            </Text>

            <View style={Styles.messageCount}>
              <Text style={Styles.count}>2</Text>
            </View>

            <Text style={Styles.title} numberOfLines={1}>
              {item.message}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={Styles.threeDotsContainer}
          onPress={() => props.setShowModal(true)}>
          <ThreeDotsIcon name="more-vertical" size={20} />
        </TouchableOpacity>

        <UnreadChatModal {...item} {...props} />
      </TouchableOpacity>
      <View style={Styles.line} />
    </>
  );
};

export const importantChatrenderItems = ({item, index}, props, navigation) => {
  let data = item.chatList;
  let date = item.msgDate;
  const monthNamesArr = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let month = new Date(date);
  let monthName = monthNamesArr[month.getMonth()];
  let msgDate = new Date(date).getDate();
  let aa = [...props.lastMessage]
  let message = aa[index];
 
  return (    
    <>
      {data.mark === 'important' &&
       <TouchableOpacity
        style={Styles.renderContainer}
        onPress={() =>
          navigation.navigate('PrivateMessages', {
            itemData: data,
            propsData: props,
            navigation: navigation,
          })
        }>
        <View style={Styles.renderContainerChild}>
          <View style={Styles.main}>
            <View style={Styles.importanatContainer}>
              <Text style={Styles.importanat} numberOfLines={1}>
                {data.mark}
              </Text>
            </View>
          </View>
          <View style={Styles.renderContentContainer}>
            <Text>{msgDate} {monthName}</Text>
          </View>
        </View>
        <View style={Styles.dataContainer}>
          <View style={Styles.imgBackContainer}>
            <ImageBackground
              source={{uri: data.adImages[0].adImages}}
              style={Styles.backImg}
              imageStyle={{borderRadius: 6}}>
              <View style={Styles.profileImgContainer}>
                <Image source={item.profileImg} style={Styles.profileImg} />
              </View>
            </ImageBackground>
          </View>

          <View style={Styles.container}>
            <Text style={Styles.userName} numberOfLines={1}>
              {data.userName}
            </Text>

            <Text style={Styles.message} numberOfLines={1}>
              {data.titile}
            </Text>

            {item.addTime === 'Number viewed' ? (
              <View style={Styles.iconsContainerTwo}>
                <CheckSingleIcon
                  name="checkmark-done"
                  size={12}
                  color="#3f978b"
                />
                <PhoneIcon name="phone" size={13} color="grey" />
                <Text>{item.addTime}</Text>
              </View>
            ) : (
              <View style={Styles.iconsContainer}>
                <Text numberOfLines={1}>
              {message}
            </Text>
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
        </View>

        <TouchableOpacity
          style={Styles.threeDotsContainer}
          onPress={() => props.setShowModal({ show: true, index: index})}>
          <ThreeDotsIcon name="more-vertical" size={20} />
        </TouchableOpacity>

        <ImportantChatModal {...item} {...props} />
      <View style={Styles.line} /> 
      </TouchableOpacity>}
    </>
  );
};
