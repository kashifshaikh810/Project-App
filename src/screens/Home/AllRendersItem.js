import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import MyAdsIcon from 'react-native-vector-icons/Entypo';
import {HomeStyles} from './HomeStyles';

export const renderItems = ({item}) => {
  return (
    <View style={HomeStyles.renderItemContainer}>
      <View style={HomeStyles.renderItemContent}>
        <ImageBackground source={item.image} style={HomeStyles.imgBackground}>
          <View style={HomeStyles.insideContainer}>
            <View style={HomeStyles.featuredTextContainer}>
              <Text style={HomeStyles.featuredText}>{item.featured}</Text>
            </View>
            <View style={HomeStyles.iconContainer}>
              <View style={HomeStyles.iconMain}>
                <MyAdsIcon name="heart-outlined" size={16} color="white" />
              </View>
            </View>
          </View>
        </ImageBackground>

        <Text style={HomeStyles.rsStyle}>Rs {item.rs}</Text>
        <View style={HomeStyles.flexContainer}>
          <Text style={HomeStyles.description} numberOfLines={1}>
            {item.description}
          </Text>
          <View style={HomeStyles.rowContainer}>
            <Text style={HomeStyles.locationStyle} numberOfLines={1}>
              {item.location}
            </Text>
            <View style={HomeStyles.dateContainer}>
              <Text style={HomeStyles.locationStyle}>{item.date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const renderItemsTwo = ({item}) => {
  return (
    <View style={HomeStyles.renderItemContainer}>
      <View style={HomeStyles.renderItemContent}>
        <ImageBackground source={item.image} style={HomeStyles.imgBackground}>
          <View style={HomeStyles.insideContainer}>
            <View style={HomeStyles.featuredTextContainer}>
              <Text style={HomeStyles.featuredText}>{item.featured}</Text>
            </View>
            <View style={HomeStyles.iconContainer}>
              <View style={HomeStyles.iconMain}>
                <MyAdsIcon name="heart-outlined" size={16} color="white" />
              </View>
            </View>
          </View>
        </ImageBackground>

        <View>
          <Text style={HomeStyles.rsStyle}>Rs {item.rs}</Text>
        </View>
        <View style={HomeStyles.flexContainer}>
          <Text style={HomeStyles.description} numberOfLines={1}>
            {item.description}
          </Text>
          <View style={HomeStyles.rowContainer}>
            <Text style={HomeStyles.locationStyle} numberOfLines={1}>
              {item.location}
            </Text>
            <View style={HomeStyles.dateContainer}>
              <Text style={HomeStyles.locationStyle}>{item.date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const renderIcons = ({item}) => {
  return (
    <View>
      <View>{item.icon}</View>
      {item.iconName.length > 14 ? (
        <View style={HomeStyles.bigTextContainer}>
          <Text style={HomeStyles.allTextStyle}>{item.iconName}</Text>
        </View>
      ) : (
        <View style={HomeStyles.smallTextContainer}>
          <Text style={HomeStyles.allTextStyle}>{item.iconName}</Text>
        </View>
      )}
    </View>
  );
};
