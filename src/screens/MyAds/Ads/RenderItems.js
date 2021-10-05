/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Styles} from './Styles';
import EyeIcon from 'react-native-vector-icons/SimpleLineIcons';
import HeartIcon from 'react-native-vector-icons/Entypo';

export const renderItems = ({item}, props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={Styles.renderItemContainer}>
        <View style={Styles.dateContainer}>
          <Text style={Styles.fromText}>FROM: </Text>
          <Text style={[Styles.fromText, {fontWeight: 'bold'}]}>
            {item.date}
          </Text>
        </View>

        <View style={Styles.midSectionContainer}>
          <View>
            <Image source={item.adImg} style={Styles.adImgStyle} />
          </View>
          <View style={Styles.adDescriptionContainerStyle}>
            <Text numberOfLines={1} style={Styles.adDescriptionStyle}>
              {item.adDescription}
            </Text>
            {item.type !== 'Sold' && <Text>Rs {item.rs}</Text>}

            <View style={Styles.iconsRowContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <EyeIcon name="eye" size={18} style={Styles.icon} />
                <Text style={{color: '#062d30', fontSize: 16}}>
                  Views: {item.views}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HeartIcon
                  name="heart-outlined"
                  size={18}
                  style={Styles.icon}
                />
                <Text style={{color: '#062d30', fontSize: 16}}>
                  Likes: {item.likes}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 0.4, justifyContent: 'center',}}>
          <View style={{backgroundColor: '#023034', width: 80, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginHorizontal: 10}}>
              <Text style={{color: '#e3f0f1', fontWeight: 'bold', fontSize: 16}}>{item.type}</Text>
          </View>
              <Text style={{fontSize: 13, marginHorizontal: 10, marginVertical: 8}}>{item.descriptionType}</Text>
        </View>


        <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'flex-end'}}>
          <View>
              <Text>{item.buttonType}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
