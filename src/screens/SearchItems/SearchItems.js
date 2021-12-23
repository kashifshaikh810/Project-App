/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Styles} from './Styles';
import IconLeft from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/Feather';
import BoxIcon from 'react-native-vector-icons/AntDesign';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import CompareVerticalIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import {firebase, Database} from '../../../Setup';

export const renderItemsTwo = ({item}, props, isChange, setIsChange) => {
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
  let date = new Date(item.postedDate);
  let postDate = date.getDate();
  let monthName = monthNamesArr[date.getMonth()];
  let uid = firebase?.auth()?.currentUser?.uid;

  return (
    <TouchableOpacity
      style={Styles.renderItemContainer}
      activeOpacity={1}
      onPress={() =>
        props.navigation.navigate('ViewMyFullFavourtiesAd', {data: item})
      }>
      <View style={Styles.renderItemContent}>
        <ImageBackground
          source={{uri: item.adImages[0].adImages}}
          style={Styles.imgBackground}>
          {uid === item.userId ? null : (
            <View style={Styles.insideContainer}>
              <View style={Styles.iconContainer}>
                <TouchableOpacity
                  style={Styles.iconMain}
                  onPress={() =>
                    uid
                      ? console.log('work')
                      : props.navigation.navigate('SignUpAndSignInMenu')
                  }>
                  <MyAdsIcon name="heart-outlined" size={25} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ImageBackground>

        <Text style={Styles.rsStyle}>Rs {item.price}</Text>
        <View style={Styles.flexContainer}>
          <Text style={Styles.description} numberOfLines={1}>
            {item.titile}
          </Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.locationStyle} numberOfLines={1}>
              {item.location}
            </Text>
            <View style={Styles.dateContainer}>
              <Text style={Styles.locationStyle}>
                {postDate} {monthName}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SearchItems = props => {
  const sortName = props.route.params.itemData
    ? (props.route.params && props.route.params.itemData) ||
      props.route.params.data.itemData
    : '';
  const name = props.route.params.sortName;
  const selection = props.route.params.data && props.route.params.selection;
  const [closeLocation, setCloseLocation] = useState(false);
  const [closeItem, setCloseItem] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [allAdsData, setAllAdsData] = useState();

  useEffect(() => {
    setCloseItem(false);
  }, [name]);

  useEffect(() => {
    if(closeItem){
      props.navigation.setParams({sortName: null});
    }
  }, [closeItem]);

  useEffect(() => {
    let adsArr = [];
    Database()
      .ref('/userAds/')
      .on('value', snapVal => {
        let data = snapVal.val() ? Object.values(snapVal.val()) : [];
        data.forEach(items => {
          let allAds = Object.values(items);
          adsArr.push(allAds);
          let res = adsArr.flat(Infinity);
          let fnfRes = res.filter(itemType => {
            return name
              ? itemType.type === name
              : itemType.type === sortName.name;
          });
          setAllAdsData(fnfRes.length !== 0 ? fnfRes : res);
        });
      });
  }, [name]);

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity
          style={Styles.iconLeftContainer}
          onPress={() => props.navigation.goBack()}>
          <IconLeft name="chevron-left" size={25} color="#083336" />
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.searchSectionContainer}
          onPress={() => props.navigation.navigate('QuickFilter')}>
          <View>
            <SearchIcon name="search" size={25} color="#022e31" />
          </View>
          <View>
            <Text style={Styles.searchText} numberOfLines={1}>
              Find Cars, Mobile Phones and more
            </Text>
          </View>
        </TouchableOpacity>

        <View style={Styles.boxAndCompareIconContainer}>
          <View>
            <BoxIcon name="CodeSandbox" size={30} color="#000e17" />
          </View>
          <TouchableOpacity
          // onPress={() =>
          //   props.navigation.navigate('SortItemsOptions', {
          //     itemData: sortName,
          //     selection: selection || 0,
          //   })
          // }
          >
            <CompareVerticalIcon
              name="compare-vertical"
              size={28}
              color="#000e17"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.scrollViewContainer}>
        <ScrollView horizontal={true}>
          <View style={Styles.filterContainer}>
            <Text>Filters</Text>
            <MenuIcon name="menufold" size={15} color="#022e31" />
          </View>

          {closeLocation ? null : (
            <View style={Styles.selectionButtonContainer}>
              <Text>100 Quarters, Karachi</Text>
              <TouchableOpacity onPress={() => setCloseLocation(true)}>
                <CloseIcon
                  name="close"
                  size={15}
                  color="#000e17"
                  style={{paddingLeft: 10}}
                />
              </TouchableOpacity>
            </View>
          )}

          {!name ? <View /> : (
            <View style={Styles.selectionButtonContainer}>
              <Text>{sortName?.name || sortName || name}</Text>
              <TouchableOpacity onPress={() => setCloseItem(true)}>
                <CloseIcon
                  name="close"
                  size={15}
                  color="#000e17"
                  style={{paddingLeft: 10}}
                />
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>

      <View style={Styles.searchResultContainer}>
        <Text style={Styles.resultText}>
          Showing result for
          <Text style={Styles.sortName}>
            {' '}
            {sortName?.name || sortName || name || "All"}
          </Text>
        </Text>
        <View style={Styles.adNumbersContainer}>
          <View style={Styles.adNumbersMain}>
            <Text style={Styles.adNumbers}>
              {allAdsData?.length} {allAdsData?.length === 1 ? 'ad' : 'ads'}
            </Text>
          </View>
        </View>
      </View>

      {allAdsData?.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No results available </Text>
        </View>
      ) : (
        <FlatList
          data={allAdsData}
          renderItem={item =>
            renderItemsTwo(item, props, isChange, setIsChange)
          }
          numColumns={2}
        />
      )}
    </View>
  );
};

export default SearchItems;
