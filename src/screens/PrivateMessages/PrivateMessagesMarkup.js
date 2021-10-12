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
import HandOkayIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import ChatDeleteModal from '../../Components/Modals/ChatDeleteModal/ChatDeleteModal';
import { responsiveScreenWidth } from '../../Components/Utility/ResponsiveDimensions/Responsive';

const PrivateMessagesMarkup = props => {
  const itemData = props.route.params.itemData;
  console.log(itemData);


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
        <View style={Styles.questionMain}>
          <View style={Styles.questionContent}>
        <View style={Styles.questionContentChild}>
          <View style={Styles.questionContentMain}>
          <Text style={Styles.chatToKnowTxt}>
            Chat to know more!
          </Text>

          <View style={Styles.questionContentMainTwo}>
          <Text style={Styles.closeTheDealTxt}>
            Close the deal faster by asking more about the product or person.
          </Text>

          <View style={Styles.questionImgContainer}>
          <Image source={require('../../Components/Utility/Images/noMessages.png')} style={Styles.questionImg} />
          </View>
          </View>
          </View>
        </View>
        </View>


        <ScrollView style={{flex: 1,}} horizontal={true}>
          <View style={Styles.questionLastContent}>
          <TouchableOpacity style={Styles.boxContainer}
          onPress={() => props.setDefaultMessage('Hello')}
          >
            <Text>Hello</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.boxContainer, {width: responsiveScreenWidth(28)}]}
          onPress={() => props.setDefaultMessage('Is it avalaible?')}
          >
            <Text>Is it avalaible?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.boxContainer}
          onPress={() => props.setDefaultMessage('Okay')}
          >
            <Text>Okay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.boxContainer}
          onPress={() => props.setDefaultMessage('No problem')}
          >
            <Text>No problem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.boxContainer}
          onPress={() => props.setDefaultMessage('Please reply')}
          >
            <Text>Please reply</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.boxContainer, {width: responsiveScreenWidth(28)}]}
          onPress={() => props.setDefaultMessage('Not interested')}
          >
            <Text>Not interested</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
        </View>
      );
    }
  }

  const makeAnOfferData = () => {
     if(props.sendShortMessage === 'makeAnOffer'){
      return (
        <View style={Styles.questionMain}>
          <View style={Styles.makeAnOfferContent}>
            <View style={{backgroundColor: '#c2f4e9', width: 50, height: 35, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#0c3a31'}}>1,449</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#99a5a6', width: 50, height: 35, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#99a5a6'}}>1,377</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#99a5a6', width: 50, height: 35, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#99a5a6'}}>1,304</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#99a5a6', width: 50, height: 35, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#99a5a6'}}>1,232</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#99a5a6', width: 50, height: 35, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#99a5a6'}}>1,159</Text>
            </View>
          </View>

        <View style={Styles.makeAnOfferRsContainer}>
          <View style={Styles.makeAnOfferRsMain}>
            <Text style={Styles.makeAnOfferRs}>Rs</Text>
          </View>
          <View style={Styles.makeAnOfferTxt}>
            <Text style={Styles.makeAnOfferTxtMain}>1,449</Text>
          </View>
        </View>

        <View style={Styles.makeAnOfferLastContainer}>
          <View style={Styles.makeAnOfferLastContainerChild}>
            <HandOkayIcon name="hand-okay" size={20} style={Styles.handOkayIcon} />
          <View style={Styles.makeAnGoodOfferContainer}>
            <Text style={Styles.makeAnGoodOfferTxt}>Very good offer!</Text>

          <View style={Styles.makeAnHighChanceContainer}>
            <Text style={Styles.makeAnHighChanceTxt}>High chances of seller's reply.</Text>
          </View>
          </View>
          </View>

        <View style={Styles.sendOfferButtonParent}>
          <TouchableOpacity style={Styles.sendOfferButtonContainer}>
            <Text style={Styles.sendOfferButton}>Send offer</Text>
          </TouchableOpacity>
        </View>
        </View>
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
              source={itemData.contentImg || itemData.image}
              style={Styles.imgBack}
              imageStyle={{borderRadius: 10}}>
              <View
                style={Styles.profileImgContainer}>
                <Image
                  source={require('../../Components/Utility/Images/profile.png')}
                  style={Styles.profileImg}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={Styles.userNameContainer}>
            <Text style={Styles.userName}>
              {itemData.userName || itemData.username}
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

        <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => itemData.description && props.navigation.goBack()}
        style={Styles.headerChildContainer}>
          <View
            style={Styles.headerChildTextContainer}>
            <Text style={Styles.headerChildText}>
             Rs {itemData.rs || '100.00'}
            </Text>
            <Text numberOfLines={1} style={Styles.headerChildText}>
              {itemData.description || 'this is dummy line abcde 1234 iwi jfwjffw'}
            </Text>
          </View>
          <View
            style={Styles.headerChildIconLeftContainer}>
            <RightIcon name="chevron-small-right" color="#4a6164" size={25} />
          </View>
        </TouchableOpacity>

        <View
          style={Styles.scrollViewContainer}>
          <ScrollView style={{flex: 1,}} showsVerticalScrollIndicator={false}
          >
            {props?.arr?.map((message, index) => {
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

{props?.arr?.map((message, index) => {
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
           {props.sendShortMessage === 'question' || props.sendShortMessage === 'makeAnOffer' ? <View style={Styles.topBar}>
            <TouchableOpacity style={Styles.topBarMain} onPress={() => props.setSendShortMessage('cancel')} />
            </View> : <></>}
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
                Questions
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
