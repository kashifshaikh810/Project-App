/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
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
} from './BuyingRenderListData';

const BuyingMarkup = props => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={Styles.allContainer}>
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

      {/* All route data */}
      {props.showColor === 'all' && (
        <View style={Styles.allChatStyle}>
          <FlatList
            data={allDummyData}
            renderItem={item => renderItems(item, props, navigation)}
          />
        </View>
      )}

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
      {props.showColor === 'important' && (
        <View style={Styles.allChatStyle}>
          <FlatList
            data={importantChatDummyData}
            renderItem={item => importantChatrenderItems(item, props, navigation)}
          />
        </View>
      )}
    </View>
  );
};

export default BuyingMarkup;
