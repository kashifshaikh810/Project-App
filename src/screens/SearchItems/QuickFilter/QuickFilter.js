/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import ClockIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import {responsiveScreenWidth} from '../../../Components/Utility/ResponsiveDimensions/Responsive';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';

const QuickFilter = props => {
  const [onFocus, setOnFocus] = useState(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const categoriesData = [
    {name: 'Mobiles'},
    {name: 'Vehicles'},
    {name: 'Property for Sale'},
    {name: 'Propert for Rent'},
  ];

  const fFocus = () => {
    setOnFocus(true);
  };

  const cancel = () => {
    setOnFocus(false);
    setSearch('');
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    data.push(search);
    setData(data);
    setSearch('');
    setOnFocus(false);
    Keyboard.dismiss();
    props.navigation.navigate('SearchItems', {sortName: search});
  };

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <CloseIcon name="close" size={25} />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Quick Filters</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View
          style={[
            Styles.inputContainer,
            {
              marginHorizontal: onFocus
                ? responsiveScreenWidth(4)
                : responsiveScreenWidth(5),
            },
          ]}>
          <View
            style={[
              Styles.headerContent,
              {
                borderColor: onFocus ? '#74e3dc' : '#183338',
                width: onFocus ? 250 : '97%',
              },
            ]}>
            <SearchIcon name="search" size={22} />
            <TextInput
              placeholder="Find Cars, Mobile Phones and more"
              style={[Styles.textInput, {width: onFocus ? 210 : '100%'}]}
              onFocus={() => fFocus()}
              returnKeyType="search"
              value={search}
              onChangeText={text => setSearch(text)}
              onSubmitEditing={() => onSubmit()}
              maxLength={60}
            />
          </View>
        </View>

        {onFocus && (
          <View style={Styles.cencelButtonParent}>
            <TouchableOpacity
              style={Styles.cancelButtonContainer}
              onPress={() => cancel()}>
              <Text style={Styles.cencelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={Styles.headingParent}>
        <View style={Styles.headingContainer}>
          <Text style={Styles.headingText}>RECENT SEARCHES</Text>
        </View>
      </View>

      <View style={data.length >= 5 ? Styles.mapContainer : {}}>
        {data.map((arr, index) => {
          return (
            <View key={index} style={Styles.searchParent}>
              <View style={Styles.iconContainer}>
                <ClockIcon name="clockcircleo" size={20} color="#052e31" />
              </View>
              <Text style={Styles.search}>{arr}</Text>
            </View>
          );
        })}
      </View>

      {data.length === 0 && (
        <View style={Styles.noSearch}>
          <Text>No Recent Search</Text>
        </View>
      )}

      <View style={Styles.headingParent}>
        <View
          style={[Styles.headingContainer, {width: responsiveScreenWidth(53)}]}>
          <Text style={Styles.headingText}>POPULAR CATEGORIES</Text>
        </View>
      </View>

      {categoriesData.map((data, index) => {
        return (
          <View style={Styles.categoriesContainer} key={index}>
            <TouchableOpacity
              style={Styles.touchAble}
              onPress={() =>
                props.navigation.navigate('SelectedCategories', {
                  routeData: data.name,
                  routeName: 'filter',
                  id: data.id,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <Text style={Styles.dataText}>{data.name}</Text>
                <View style={Styles.rightIconContainer}>
                  <ArrowRightIcon name="keyboard-arrow-right" size={22} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default QuickFilter;
