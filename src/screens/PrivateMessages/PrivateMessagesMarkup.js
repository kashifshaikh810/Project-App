import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import ThreeDotsIcon from 'react-native-vector-icons/Feather';
import RightIcon from 'react-native-vector-icons/Entypo';
import AttachmentIcon from 'react-native-vector-icons/Entypo';
import MicIcon from 'react-native-vector-icons/Feather';
import QuestionIcon from 'react-native-vector-icons/Octicons';
import HandIcon from 'react-native-vector-icons/FontAwesome5';
import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {responsiveScreenHeight} from '../../Components/Utility/ResponsiveDimensions/Responsive';

import ChatDeleteModal from '../../Components/Modals/ChatDeleteModal/ChatDeleteModal';

const PrivateMessagesMarkup = props => {
  const itemData = props.route.params.itemData;

  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <KeyboardAwareScrollView>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            height: 68,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 0.3,
            borderColor: '#b3b3b3',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', width: 35}}
            onPress={() => props.navigation.goBack()}>
            <IconLeft name="chevron-left" size={24} color="#0b2a2e" />
          </TouchableOpacity>
          <View style={{flexDirection: 'column'}}>
            <ImageBackground
              source={itemData.contentImg}
              style={{width: 50, height: 50}}
              imageStyle={{borderRadius: 6}}>
              <View
                style={{
                  alignItems: 'flex-end',
                  height: 50,
                  justifyContent: 'flex-end',
                }}>
                <Image
                  source={itemData.profileImg}
                  style={{width: 25, height: 25}}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={{flexDirection: 'column', marginHorizontal: 8}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4a6164'}}>
              {itemData.userName}
            </Text>
            <Text style={{fontSize: 14, color: '#b3b3b3'}}>
              Last active 4 Sep
            </Text>
          </View>
          <TouchableOpacity
            style={{width: 100, alignItems: 'flex-end'}}
            onPress={() => props.setShowModal(true)}>
            <ThreeDotsIcon name="more-vertical" size={20} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 40,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: 220,
            }}>
            <Text style={{fontWeight: 'bold', color: '#4a6164', fontSize: 16}}>
              Rs 60,000
            </Text>
            <Text style={{fontWeight: 'bold', color: '#4a6164', fontSize: 16}}>
              10/8 condition
            </Text>
          </View>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'flex-end', marginHorizontal: 15}}>
            <RightIcon name="chevron-small-right" color="#4a6164" size={25} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginHorizontal: 20,
            marginVertical: 10,
            height: responsiveScreenHeight(60.5),
          }}>
          <ScrollView style={{flex: 1}}>
            {props.arr.map((message, index) => {
              return (
                <View key={index}>
                  <Text>{message}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View
          style={{
            backgroundColor: 'red',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: 170,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <QuestionIcon
                name="request-changes"
                size={18}
                color="#4a6164"
                style={{width: 35}}
              />
              <Text
                style={{fontWeight: 'bold', color: '#4a6164', fontSize: 15}}>
                Question
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <HandIcon
                name="hand-holding-medical"
                size={18}
                color="#4a6164"
                style={{width: 35}}
              />
              <Text
                style={{fontWeight: 'bold', color: '#4a6164', fontSize: 15}}>
                Make an offer
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ChatDeleteModal {...props} />

        {/* message text input   */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 355,
              height: 45,
              backgroundColor: 'white',
              borderTopWidth: 0.3,
              borderColor: '#b3b3b3',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <AttachmentIcon
                name="attachment"
                size={20}
                color="#4a6164"
                style={{width: 40, textAlign: 'center'}}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Type a message"
              value={props.inputMessage}
              onChangeText={text => props.setInputMessage(text)}
              style={props.inputMessage ? {width: 270} : {width: 280}}
            />
            <TouchableOpacity
              onPress={() => props.sendMessages()}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              {props.inputMessage ? (
                <SendIcon name="send-circle" size={35} color="#4a6164" />
              ) : (
                <MicIcon name="mic" size={20} color="#4a6164" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default PrivateMessagesMarkup;
