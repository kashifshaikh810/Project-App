import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import MyAdsIcon from 'react-native-vector-icons/Entypo';
import {HomeStyles} from './HomeStyles';

export const renderItems = ({item, index}, props) => {
  const monthNamesArr = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let month = new Date(item.postedDate);
  let monthName = monthNamesArr[month.getMonth()];
  let date = new Date(item.postedDate).getDate();

  let monthCopy = new Date(item.joinDate);
  let monthNameCopy = monthNamesArr[monthCopy.getMonth()];
  let dateCopy = new Date(item.joinDate).getDate();
  let images = item.adImages
  let res =  props?.data ? props?.data[index]?.id || props?.data[0]?.id :  '';
  let heartRes = props?.data ? props?.data[index]?.heart || props?.data[0]?.heart : '';
  let titleRes = props?.data ? props?.data[index]?.title || props?.data[0]?.title : '';

  return (
    <>
  {item.postType !== "Sold" || item.postType !== "Disabled" ? <View style={HomeStyles.renderItemContainer}>
      <TouchableOpacity
        style={HomeStyles.renderItemContent}
        onPress={() =>
          props.navigation.navigate('ViewFullBasedAdd', {data: item, heart: heartRes})
        }>
        <ImageBackground
          source={!!images ? {uri: images[0].adImages} : []}
          style={HomeStyles.imgBackground}>
          <View style={HomeStyles.insideContainer}>
            <View style={HomeStyles.featuredTextContainer}>
              <Text style={HomeStyles.featuredText}>FEATURED</Text>
            </View>
           {props.uid !== item.userId && <View style={HomeStyles.iconContainer}>
              <TouchableOpacity 
              style={HomeStyles.iconMain} 
              onPress={() => props.uid ? heartRes && res === item.userId ? props.removeToFav(index) : props.addToFav(item, index) : props.navigation.navigate("SignUpAndSignInMenu")}>
                <MyAdsIcon name={heartRes && res === item.userId && titleRes === item.titile ?  "heart" : "heart-outlined"} size={16} color="white" />
              </TouchableOpacity>
            </View>}
          </View>
        </ImageBackground>

        <Text style={HomeStyles.rsStyle}>Rs {item.price}</Text>
        <View style={HomeStyles.flexContainer}>
          <Text style={HomeStyles.description} numberOfLines={1}>
            {item.titile}
          </Text>
          <View style={HomeStyles.rowContainer}>
            <Text style={HomeStyles.locationStyle} numberOfLines={1}>
              {item.location}
            </Text>
            <View style={HomeStyles.dateContainer}>
              <Text style={HomeStyles.locationStyle}>
                {date || dateCopy} {monthName || monthNameCopy}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View> : []}
    </>
  );
};

export const renderItemsTwo = ({item}, props) => {
  return (
    <View style={HomeStyles.renderItemContainer}>
      <TouchableOpacity
        style={HomeStyles.renderItemContent}
        onPress={() =>
          props.navigation.navigate('ViewFullFreshRecommendations', {
            data: item,
          })
        }>
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
      </TouchableOpacity>
    </View>
  );
};

export const renderIcons = ({item}, props) => {
  let name = item.iconName;
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('SelectedCategories', {
          routeData: name,
          routeName: 'Home',
        })
      }>
      <View>{item.icon}</View>
      {item.iconName.length > 14 ? (
        <View style={HomeStyles.bigTextContainer}>
          <Text style={HomeStyles.allTextStyle} numberOfLines={2}>
            {item.iconName}
          </Text>
        </View>
      ) : (
        <View style={HomeStyles.smallTextContainer}>
          <Text style={HomeStyles.allTextStyle} numberOfLines={2}>
            {item.iconName}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
