/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import HeartWhite from 'react-native-vector-icons/Ionicons';

const dummyDataTwo = [
  {
    username: 'Car Concept Karachi',
    joinDate: 'May 2016',
    description: 'Oppo ads selling no minor issue',
    rs: '20,000',
    image: require('../../Components/Utility/Images/sofa.jpg'),
    location: 'Karachi',
    date: '02/05/2010',
    dateOfM: `${27}Jul`,
    condition: 'New',
    featured: 'FEATURED',
    fullDescription:
      'fkewguhpqghpq3ghp3q9g3[0qhgpq3g9hkjcnvlaivjnievnaeivunpoevuhgpqgh0[qghq0ghkjnvvjnov',
  },
  {
    username: 'Suleman Khan',
    joinDate: 'June 2018',
    description: 'Car for selling no working',
    rs: '30,000',
    dateOfM: `${27}Jul`,
    image: require('../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, Sindh',
    date: '07/02/2018',
    condition: 'Used',
    featured: 'FEATURED',
    fullDescription:
      'iidoqdduqduqwdhqdhqwdhdqdqwdqwdqwpkpmvfmvvkdjnvovjvovowjvowjv.lkn;vjwovjwvommmmsdsdsd',
  },
  {
    username: 'Ayesha Sheikh',
    joinDate: 'May 2020',
    description: 'bads 4 urgent sell contact me please',
    rs: '15,000',
    dateOfM: `${27}Jul`,
    image: require('../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, Punjab',
    date: '05/03/2014',
    condition: 'New',
    featured: 'FEATURED',
    fullDescription:
      'ppqoqqoeqeqeiohurgiuerhgiernjgnrlnwnl;mlm;mpkmo;ank;ononfaofjnjfno;afna;ofjna;ofjn;on',
  },
  {
    username: 'Kamran Warsi',
    joinDate: 'May 2013',
    description: 'crolla for sell new condition contact me fast',
    rs: '100,000',
    dateOfM: `${27}Jul`,
    image: require('../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, Sarhad Karachi',
    date: '01/05/2013',
    condition: 'Used',
    featured: 'FEATURED',
    fullDescription:
      'oiifiefieifieiiefieifieifefieifeifiefieififiefieifeifefifieiiefiefefeifeifiefieiiefiefiiei',
  },
  {
    username: 'Ahmed Khan',
    joinDate: 'May 2018',
    description: 'mazda new condition for sell 2021 model',
    rs: '200,000',
    image: require('../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, blochistan sakkhar',
    date: '08/01/2019',
    dateOfM: `${27}Jul`,
    condition: 'New',
    featured: 'FEATURED',
    fullDescription:
      'yewuyuryeuryeyryeryyeryryeryyeyryeyryyeyryerreyreyyyuewryweurweyryweurwerywruruyweurywerweuryu',
  },
  {
    username: 'Kadir Shah',
    joinDate: 'May 2021',
    description: 'car selling need cash serious buyer contact me',
    rs: '250,000',
    dateOfM: `${27}Jul`,
    image: require('../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, New, Karachi',
    date: '07/05/2020',
    condition: 'Used',
    featured: 'FEATURED',
    fullDescription:
      'd;ohougheuhmxlmkoqvoqqovnvvnkjnckjnknkjnkanasasdasdasdasdasdasdasdasddadasdasdalkvndovvvvwvnoivwvnowievn',
  },
];

export const renderItemsTwo = ({item}, props, isChange, setIsChange) => {
  return (
    <TouchableOpacity
      style={Styles.renderItemContainer}
      activeOpacity={1}
      onPress={() =>
        props.navigation.navigate('ViewMyFullFavourtiesAd', {data: item})
      }>
      <View style={Styles.renderItemContent}>
        <ImageBackground source={item.image} style={Styles.imgBackground}>
          <View style={Styles.insideContainer}>
            <View style={Styles.iconContainer}>
              {isChange ? (
                <HeartWhite
                  name="heart-circle"
                  size={25}
                  onPress={() => setIsChange(!isChange)}
                />
              ) : (
                <TouchableOpacity
                  style={Styles.iconMain}
                  onPress={() => setIsChange(true)}>
                  <MyAdsIcon name="heart-outlined" size={25} color="white" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ImageBackground>

        <Text style={Styles.rsStyle}>Rs {item.rs}</Text>
        <View style={Styles.flexContainer}>
          <Text style={Styles.description} numberOfLines={1}>
            {item.description}
          </Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.locationStyle} numberOfLines={1}>
              {item.location}
            </Text>
            <View style={Styles.dateContainer}>
              <Text style={Styles.locationStyle}>{item.dateOfM}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SearchItems = props => {
  const sortName =
    (props.route.params && props.route.params.itemData) ||
    props.route.params.data.itemData;
  const selection = props.route.params.data && props.route.params.selection;
  const [closeLocation, setCloseLocation] = useState(false);
  const [closeItem, setCloseItem] = useState(false);
  const [isChange, setIsChange] = useState(false);

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
            onPress={() =>
              props.navigation.navigate('SortItemsOptions', {
                itemData: sortName,
                selection: selection || 0,
              })
            }>
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

          {closeItem ? null : (
            <View style={Styles.selectionButtonContainer}>
              <Text>{sortName?.name || sortName}</Text>
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
          <Text style={Styles.sortName}> {sortName?.name || sortName}</Text>
        </Text>
        <View style={Styles.adNumbersContainer}>
          <View style={Styles.adNumbersMain}>
            <Text style={Styles.adNumbers}>10,000+ ads</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={dummyDataTwo}
        renderItem={item => renderItemsTwo(item, props, isChange, setIsChange)}
        numColumns={2}
      />
    </View>
  );
};

export default SearchItems;
