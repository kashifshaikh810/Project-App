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
          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#023034',
                width: 70,
                height: 40,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => cancel()}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View
        style={{
          backgroundColor: '#eaeeef',
          height: 50,
          justifyContent: 'center',
        }}>
        <View style={{width: 170, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: '#0b3135', fontSize: 16}}>
            RECENT SEARCHES
          </Text>
        </View>
      </View>

      <View style={data.length >= 5 ? {height: 275, overflow: 'hidden'} : {}}>
        {data.map((arr, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                height: 35,
                marginVertical: 10,
                alignItems: 'center',
              }}>
              <View style={{width: 65, alignItems: 'center'}}>
                <ClockIcon name="clockcircleo" size={20} color="#052e31" />
              </View>
              <Text style={{color: '#093034', fontSize: 15}}>{arr}</Text>
            </View>
          );
        })}
      </View>

      {data.length === 0 && (
        <View
          style={{
            flexDirection: 'row',
            height: 35,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>No Recent Search</Text>
        </View>
      )}

      <View
        style={{
          backgroundColor: '#eaeeef',
          height: 50,
          justifyContent: 'center',
        }}>
        <View style={{width: 190, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: '#0b3135', fontSize: 16}}>
            POPULAR CATEGORIES
          </Text>
        </View>
      </View>

      {categoriesData.map((data, index) => {
        return (
          <View style={{alignItems: 'center'}} key={index}>
            <TouchableOpacity
              style={{width: '92%', height: 45, justifyContent: 'space-evenly'}}
              onPress={() =>
                props.navigation.navigate('SelectedCategories', {
                  routeData: data.name,
                  routeName: 'filter',
                  id: data.id,
                })
              }>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#062e30', fontSize: 15}}>
                  {data.name}
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
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
