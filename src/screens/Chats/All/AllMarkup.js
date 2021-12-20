/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Styles} from '../Styles';
import {
  allDummyData,
  unreadChatDummyData,
  importantChatDummyData,
} from './DummyData';
import {
  renderItems,
  unReadChatrenderItems,
  importantChatrenderItems,
} from './AllRenderListData';

const AllMarkup = props => {
  const navigation = useNavigation();
  const showNoMessages = () => {
    if (props.chatListData.length === 0) {
      return (
        <View style={Styles.sellingContainer}>
          <View style={Styles.contentContainer}>
            <Image
              source={require('../../../Components/Utility/Images/noMessages.png')}
              style={Styles.noMessageImg}
            />

            <Text style={Styles.noMessageTxt}>No messages, yet?</Text>
            <Text style={Styles.titileText}>
              We'll keep messages for my any items you're buying in here
            </Text>

            <TouchableOpacity
              style={Styles.buttonContainer}
              onPress={() => navigation.navigate('HOME')}>
              <Text style={[Styles.button, {color: 'white'}]}>
                Start chating
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const showErrNoMessages = () => {
    if (props.mark === true) {
      return (
        <View style={[Styles.sellingContainer, {height: '45%'}]}>
          <View style={[Styles.contentContainer, {height: 230}]}>
            <Image
              source={require('../../../Components/Utility/Images/noMessages.png')}
              style={Styles.noMessageImg}
            />

            <Text style={Styles.noMessageTxt}>You're all up to date</Text>
            <Text style={Styles.titileText}>You have no important chats</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View>
      {props.chatListData.length >= 1 && (
        <>
          <View style={Styles.allContainer}>
            {showNoMessages()}
            <TouchableOpacity
              style={[
                Styles.allStyle,
                {
                  backgroundColor:
                    props.showColor === 'all' ? '#609f96' : '#f1f1f1',
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
                    props.showColor === 'unreadchat' ? '#609f96' : '#f1f1f1',
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
                    props.showColor === 'important' ? '#609f96' : '#f1f1f1',
                  borderWidth: props.showColor !== 'important' ? 1 : 0,
                },
              ]}
              onPress={() => props.ChangePageOnClick('important')}>
              <Text>Important</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.line} />
        </>
      )}

      {/* All route data */}
      {props.chatListData.length > 0 ? props.isLoading ? (
        <>
          <View
            style={{
              height: '60%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <ActivityIndicator size={50} color="green" />
          </View>
        </>
      ) : (
        props.showColor === 'all' && (
          <View style={Styles.allChatStyle}>
            <FlatList
              data={props.chatListData}
              renderItem={item => renderItems(item, props, navigation)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )
      ) : showNoMessages()}

      {/* unread route data */}
      {props.showColor === 'unreadchat' && (
        <View style={Styles.allChatStyle}>
          <FlatList
            data={unreadChatDummyData}
            renderItem={item => unReadChatrenderItems(item, props, navigation)}
          />
        </View>
      )}

      {/* important route data */}
      {showErrNoMessages()}
      {props.showColor === 'important' && (
        <View style={Styles.allChatStyle}>
          <FlatList
            data={props.chatListData}
            renderItem={item =>
              importantChatrenderItems(item, props, navigation)
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default AllMarkup;
