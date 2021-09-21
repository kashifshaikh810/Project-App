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


  const sendMessagesInput = () => {
    if(props.sendShortMessage === 'cancel'){
      return (
        <View
        style={Styles.inputMain}>
        <View
          style={Styles.inputContainer}>
          <TouchableOpacity>
            <AttachmentIcon
              name="attachment"
              size={20}
              color="#4a6164"
              style={Styles.attachmentIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Type a message"
            value={props.inputMessage}
            onChangeText={text => props.setInputMessage(text)}
            style={props.inputMessage ? Styles.shortWidth : Styles.longWidth}
          />
          <TouchableOpacity
            onPress={() => props.inputMessage && props.sendMessages()}
            style={Styles.pressIcon}>
            {props.inputMessage ? (
              <SendIcon name="send-circle" size={35} color="#4a6164" />
            ) : (
              <MicIcon name="mic" size={20} color="#4a6164" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      )
    }
  }

  const questionData = () => {
    if(props.sendShortMessage === 'question'){
      return (
        <View style={{height: 190, backgroundColor: 'white'}}>
          {/* <Text>Question</Text> */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 330, height: 150, justifyContent: 'center' }}>
          <View style={{backgroundColor: '#cfdbfd', paddingHorizontal: 10, paddingVertical: 6}}>
          <Text>
            Chat to know more!
          </Text>

          <View style={{flexDirection: 'row', height: 65, alignItems: 'center'}}>
          <Text style={{width: 220}}>
            Close the deal faster by asking more about the product or person.
          </Text>

          <View style={{alignItems: 'flex-end', width: 95}}>
          <Image source={require('../../Components/Utility/Images/noMessages.png')} style={{width: 60, height: 60, borderRadius: 30}} />
          </View>
          </View>
          </View>
        </View>
        </View>


          <TouchableOpacity onPress={() => props.setSendShortMessage('cancel')}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const makeAnOfferData = () => {
     if(props.sendShortMessage === 'makeAnOffer'){
      return (
        <View style={{height: 190}}>
          <Text>Make an offer</Text>
          <TouchableOpacity onPress={() => props.setSendShortMessage('cancel')}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

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
          style={Styles.headerChildContainer}>
          <View
            style={Styles.headerChildTextContainer}>
            <Text style={Styles.headerChildText}>
              Rs 60,000
            </Text>
            <Text style={Styles.headerChildText}>
              10/8 condition
            </Text>
          </View>
          <TouchableOpacity
            style={Styles.headerChildIconLeftContainer}>
            <RightIcon name="chevron-small-right" color="#4a6164" size={25} />
          </TouchableOpacity>
        </View>

        <View
          style={Styles.scrollViewContainer}>
          <ScrollView style={{flex: 1,}} showsVerticalScrollIndicator={false}
          >
            {props.arr.map((message, index) => {
              return (
                <>
                {message.length === 2 && <View style={Styles.dateContainer}>
                  <Text style={Styles.date}>Aug 23, 2021</Text>
                </View>}
                <View key={index} style={Styles.messageContainer}>
                  <View style={Styles.messageBackground}>
                  <Text style={Styles.message}>{message}</Text>
                  
                  <View style={Styles.timeContainer}>
                  <View style={Styles.timeMain}>
                    <Text style={Styles.time}>20:10</Text>

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
                {message.length === 2 && <View style={Styles.dateContainer}>
                  <Text style={Styles.date}>Aug 23, 2021</Text>
                </View>}
                <View key={index} style={[Styles.messageContainer, {alignItems: 'flex-start'}]}>
                  <View style={[Styles.messageBackground, {backgroundColor: '#cbd5d6'}]}>
                  <Text style={Styles.message}>{message}</Text>
                  
                  <View style={Styles.timeContainer}>
                  <View style={[Styles.timeMain, {justifyContent: 'flex-end'}]}>
                    <Text style={Styles.time}>20:10</Text>

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
          style={Styles.footerContainer}>
          <View
            style={Styles.footerContainerTwo}>
            <TouchableOpacity
              style={[Styles.questionContainer, {borderBottomWidth: props.sendShortMessage === 'question' ? 4 : 0 , borderBottomColor: props.sendShortMessage === 'question' ? 'black' : 'white', paddingVertical: 10, }]}
              onPress={() => props.setSendShortMessage('question')}
              >
              <QuestionIcon
                name="request-changes"
                size={18}
                color="#4a6164"
                style={Styles.icon}
              />
              <Text
                style={Styles.question}>
                Question
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[Styles.offerContainer, {borderBottomWidth: props.sendShortMessage === 'makeAnOffer' ? 4 : 0 , borderBottomColor: props.sendShortMessage === 'makeAnOffer' ? 'black' : 'white', paddingVertical: 10, }]}
              onPress={() => props.setSendShortMessage('makeAnOffer')}
              >
              <HandIcon
                name="hand-holding-medical"
                size={18}
                color="#4a6164"
                style={Styles.icon}
              />
              <Text
                style={Styles.offer}>
                Make an offer
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ChatDeleteModal {...props} />

        {/* message text input   */}
       {sendMessagesInput()}

       {/* question & makeAndOffer renderingg */}
       {questionData()}

       {/* question & makeAndOffer renderingg */}
       {makeAnOfferData()}
        
      </KeyboardAvoidingView>
  );
};

export default PrivateMessagesMarkup;
