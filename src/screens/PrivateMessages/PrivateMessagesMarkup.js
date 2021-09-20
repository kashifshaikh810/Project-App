import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import ThreeDotsIcon from 'react-native-vector-icons/Feather';
import RightIcon from 'react-native-vector-icons/Entypo';
import AttachmentIcon from 'react-native-vector-icons/Entypo';
import MicIcon from 'react-native-vector-icons/Feather';
import QuestionIcon from 'react-native-vector-icons/Octicons';
import HandIcon from 'react-native-vector-icons/FontAwesome5';
import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Styles} from './Styles';
import CheckSingleIcon from 'react-native-vector-icons/Ionicons';

import ChatDeleteModal from '../../Components/Modals/ChatDeleteModal/ChatDeleteModal';

const PrivateMessagesMarkup = props => {
  const itemData = props.route.params.itemData;

  return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' && 'padding'}
      style={Styles.keyboad}
      >
        <View
          style={Styles.profileAndNameContainer}>
          <TouchableOpacity
            style={Styles.backButton}
            onPress={() => props.navigation.goBack()}>
            <IconLeft name="chevron-left" size={24} color="#0b2a2e" />
          </TouchableOpacity>
          <View style={Styles.imgBackContainer}>
            <ImageBackground
              source={itemData.contentImg}
              style={Styles.imgBack}
              imageStyle={{borderRadius: 6}}>
              <View
                style={Styles.profileImgContainer}>
                <Image
                  source={itemData.profileImg}
                  style={Styles.profileImg}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={Styles.userNameContainer}>
            <Text style={Styles.userName}>
              {itemData.userName}
            </Text>
            <Text style={Styles.lastActive}>
              {props.inputMessage.length > 5 ? 'Typing...' : 'Last active 4 Sep'}
            </Text>
          </View>
          <TouchableOpacity
            style={Styles.dotsIconContainer}
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
            flex: 10,
            backgroundColor: '#eaeeef'
}}>
          <ScrollView style={{flex: 1,}} showsVerticalScrollIndicator={false}
          >
            {props.arr.map((message, index) => {
              return (
                <>
                {message.length === 2 && <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', height: 70}}>
                  <Text style={{color: '#c7c8ca'}}>Aug 23, 2021</Text>
                </View>}
                <View key={index} style={{flex: 1, alignItems: 'flex-end', marginHorizontal: 15, marginVertical: 2}}>
                  <View style={{backgroundColor: '#cfdbfd', flex: 1, paddingHorizontal: 2, borderRadius: 8}}>
                  <Text style={{fontSize: 16, color: '#06162c', maxWidth: 200, maxHeight: 200, paddingHorizontal: 4, paddingVertical: 3, }}>{message}</Text>
                  
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <View style={{flexDirection: 'row', width: 50, height: 20, justifyContent: 'space-evenly', alignItems: 'center',}}>
                    <Text style={{fontSize: 11, color: '#536280', maxWidth: 120, maxHeight: 200,}}>20:10</Text>

                {message ?  <CheckSingleIcon
                        name="checkmark-done"
                        size={13}
                        color="#3ca1ab"
                      />
                  :
                <CheckSingleIcon
                  name="checkmark-outline"
                  size={13}
                  color="#b3b3b3"
                />}
                  </View>
                  </View>
                  
                  </View>
                </View>
                </>
              );
            })}

{props.arr.map((message, index) => {
              return (
                <>
                {message.length === 2 && <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', height: 70}}>
                  <Text style={{color: '#c7c8ca'}}>Aug 23, 2021</Text>
                </View>}
                <View key={index} style={{flex: 1, alignItems: 'flex-start', marginHorizontal: 15, marginVertical: 2}}>
                  <View style={{backgroundColor: '#cbd5d6', flex: 1, paddingHorizontal: 5, borderRadius: 8}}>
                  <Text style={{fontSize: 16, color: '#06162c', maxWidth: 200, maxHeight: 200, paddingVertical: 3, }}>{message}</Text>
                  
                  <View style={{flex: 1, alignItems: 'flex-start'}}>
                  <View style={{width: 50, height: 20,}}>
                    <Text style={{fontSize: 11, color: '#536280', maxWidth: 200, maxHeight: 200,}}>20:10</Text>

                  </View>
                  </View>
                  
                  </View>
                </View>
                </>
              );
            })}
          </ScrollView>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
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
            justifyContent: 'flex-end'
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
              onPress={() => props.inputMessage && props.sendMessages()}
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
      </KeyboardAvoidingView>
  );
};

export default PrivateMessagesMarkup;
