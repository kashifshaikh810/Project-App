/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';
import EyeIcon from 'react-native-vector-icons/SimpleLineIcons';
import HeartIcon from 'react-native-vector-icons/Entypo';
import ThreeDotsIcon from 'react-native-vector-icons/Feather';
import MyAdsDeleteModal from '../../../Components/Modals/MyAdsDeleteModal/MyAdsDeleteModal';
import {Auth, Database} from '../../../../Setup';

export const renderItems = (
  {item, index},
  props,
  showModal,
  setShowModal,
  keys,
) => {
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
  let date = new Date(item.joinDate).getDate();
  let year = new Date(item.joinDate).getFullYear() % 100;
  let month = new Date(item.joinDate);
  let monthName = monthNamesArr[month.getMonth()];

  let futureDate = new Date(item.joinDate);
  futureDate.setDate(futureDate.getDate() + 30);
  let res = futureDate;
  let nextThirteenDate = new Date(res).getDate();
  let nextYear = new Date(res).getFullYear() % 100;
  let nextMonth = new Date(res);
  let nextMonthName = monthNamesArr[nextMonth.getMonth()];

  const handleDeleteOnPress = () => {
    console.log('handleDeleteOnPress');
  };

  const handleDeactivateOnPress = d => {
    let uid = Auth()?.currentUser?.uid;
      // Database()
      //   .ref('userAds')
      //   .child(keys[i])
      //   .update({postType: 'Disabled'});
  };

  const handleMarkAsSoldOnPress = () => {
    console.log('handleMarkAsSoldOnPress');
  };

  const handleEditOnPress = () => {
    console.log('handleEditOnPress');
  };

  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        style={[
          Styles.renderItemContainer,
          item.postType === 'Active' && {
            borderLeftColor: '#3ce5d8',
          },
          item.postType === 'Sold' ||
            (item.postType === 'Disabled' && {
              borderLeftColor: '#023034',
            }),
          item.postType === 'Rejected' && {
            borderLeftColor: 'red',
          },
        ]}
        onPress={() =>
          // props.navigation.navigate('ViewFullAd', {data: item, props: props})
          console.log(index)
        }>
        <View style={Styles.dateContainer}>
          <Text style={Styles.fromText}>FROM: </Text>
          <Text style={[Styles.fromText, {fontWeight: 'bold'}]}>
            {date} {monthName} {year}
          </Text>

          {item.postType === 'Active' && (
            <>
              <Text style={Styles.fromText}> - TO: </Text>
              <Text style={[Styles.fromText, {fontWeight: 'bold'}]}>
                {nextThirteenDate} {nextMonthName} {nextYear}
              </Text>
            </>
          )}

          {item.type !== 'Sold' && (
            <View style={Styles.threeDotsIconContainer}>
              <ThreeDotsIcon
                name="more-vertical"
                size={20}
                onPress={() => setShowModal(true)}
              />
            </View>
          )}
        </View>

        <MyAdsDeleteModal
          item={item}
          index={index}
          {...props}
          showModal={showModal}
          setShowModal={setShowModal}
          handleDeleteOnPress={handleDeleteOnPress}
          handleEditOnPress={handleEditOnPress}
          handleDeactivateOnPress={handleDeactivateOnPress}
          handleMarkAsSoldOnPress={handleMarkAsSoldOnPress}
        />

        <View style={Styles.midSectionContainer}>
          <View>
            <Image
              source={{uri: item.adImages[index].adImages}}
              style={Styles.adImgStyle}
            />
          </View>
          <View style={Styles.adDescriptionContainerStyle}>
            <Text numberOfLines={1} style={Styles.adDescriptionStyle}>
              {item.titile}
            </Text>
            {item.type !== 'Sold' && <Text>Rs {item.price}</Text>}

            <View style={Styles.iconsRowContainer}>
              <View style={Styles.heartIconContainer}>
                <EyeIcon name="eye" size={18} style={Styles.icon} />
                <Text style={{color: '#062d30', fontSize: 16}}>
                  Views: {item.views || 0}
                </Text>
              </View>

              <View style={Styles.heartIconContainer}>
                <HeartIcon
                  name="heart-outlined"
                  size={18}
                  style={Styles.icon}
                />
                <Text style={{color: '#062d30', fontSize: 16}}>
                  Likes: {item.likes || 0}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={Styles.descriptionTypeParentContainer}>
          <View
            style={[
              Styles.typeContainer,
              item.postType === 'Active' && {
                backgroundColor: '#3ce5d8',
              },
              item.postType === 'Sold' && {
                backgroundColor: '#023034',
              },
              item.postType === 'Rejected' && {
                backgroundColor: 'red',
              },
            ]}>
            <Text style={Styles.type}>{item.postType}</Text>
          </View>
          {item.postType === 'Active' && (
            <Text style={Styles.descriptionType}>
              This ad is currently live.
            </Text>
          )}
          {item.postType === 'Sold' && (
            <Text style={Styles.descriptionType}>This ad was Sold</Text>
          )}
          {item.postType === 'Rejected' && (
            <Text style={Styles.descriptionType}>
              Your ad is prohibited on OLX.
            </Text>
          )}
        </View>

        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.buttonTouchAble}
            onPress={() =>
              item.postType !== 'Delete' &&
              props.navigation.navigate('MarkAsSold', {
                data: item,
                index: index,
              })
            }>
            <Text style={Styles.button}>
              {(item.postType === 'Active' && 'Sell faster now') ||
                (item.postType === 'Sold' && 'Delete') ||
                (item.postType === 'Rejected' && 'learn more') ||
                (item.postType === 'Disabled' && 'Republish')}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
