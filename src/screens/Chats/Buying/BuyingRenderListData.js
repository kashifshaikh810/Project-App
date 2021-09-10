/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
import UnreadChatBuyingModal from '../../../Components/Modals/UnreadChatBuyingModal/UnreadChatBuyingModal';
import AllChatBuyingModal from '../../../Components/Modals/AllChatBuyingModal/AllChatBuyingModal';
import ImportantChatBuyingModal from '../../../Components/Modals/ImportantChatBuyingModal/ImportantChatBuyingModal';

export const renderItems = ({item}, props) => {
  return (
    <>
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
            onPress={() => props.setShowModal(true)}
          />
        </View>

        <AllChatBuyingModal {...item} {...props} />
      </View>
      <View style={Styles.line} />
    </>
  );
};

export const unReadChatrenderItems = ({item}, props) => {
  return (
    <>
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

        <UnreadChatBuyingModal {...item} {...props} />
      </View>
      <View style={Styles.line} />
    </>
  );
};

export const importantChatrenderItems = ({item}, props) => {
  return (
    <>
      <View style={Styles.renderContainer}>
        <View style={Styles.renderContainerChild}>
          <View style={Styles.main}>
            <View style={Styles.importanatContainer}>
              <Text style={Styles.importanat} numberOfLines={1}>
                {item.important}
              </Text>
            </View>
          </View>
          <View style={Styles.renderContentContainer}>
            <Text>{item.date}</Text>
          </View>
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
          onPress={() => props.setShowModal(true)}>
          <ThreeDotsIcon name="more-vertical" size={20} />
        </TouchableOpacity>

        <ImportantChatBuyingModal {...item} {...props} />
      </View>
      <View style={Styles.line} />
    </>
  );
};
