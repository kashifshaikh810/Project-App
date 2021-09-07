/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {Styles} from '../Styles';
import {
  allDummyData,
  unreadChatDummyData,
  importantDummyData,
} from './DummyData';
import {
  renderItems,
  unReadChatrenderItems,
  importantRenderItems,
} from './AllRenderListData';

const AllMarkup = props => {
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

      {/* All route data */}
      {props.showColor === 'all' && (
        <FlatList data={allDummyData} renderItem={item => renderItems(item)} />
      )}

      {/* unread route data */}
      {props.showColor === 'unreadchat' && (
        <FlatList
          data={unreadChatDummyData}
          renderItem={item => unReadChatrenderItems(item)}
        />
      )}

    </View>
  );
};

export default AllMarkup;
