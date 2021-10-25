import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import {responsiveScreenWidth} from '../../../Components/Utility/ResponsiveDimensions/Responsive';

const QuickFilter = props => {
  const [onFocus, setOnFocus] = useState(false);
  const [search, setSearch] = useState('');

  const fFocus = () => {
    setOnFocus(true);
  };

  const cancel = () => {
    setOnFocus(false);
    Keyboard.dismiss();
  };

  return (
    <View style={Styles.container}>
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
                width: onFocus ? 250 : 320,
              },
            ]}>
            <SearchIcon name="search" size={22} />
            <TextInput
              placeholder="Find Cars, Mobile Phones and more"
              style={[Styles.textInput, {width: onFocus ? 210 : 340}]}
              onFocus={() => fFocus()}
              returnKeyType="search"
              value={search}
              onChangeText={text => setSearch(text)}
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


    </View>
  );
};

export default QuickFilter;
