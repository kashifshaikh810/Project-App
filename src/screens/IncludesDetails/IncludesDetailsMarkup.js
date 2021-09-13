import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import PlusIcon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';

import {Styles} from '../SelectedCategories/Styles';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

const IncludesMarkup = props => {
  const {selectedLocation, setSelectedLocation} = props;
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{width: 150}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#183338',
            width: 140,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
          }}>
          <Text style={{color: '#183338', fontSize: 16}}>{item.typeName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View
        style={[Styles.routeNameContainer, {width: responsiveScreenWidth(66)}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.routeName}>Include some details</Text>
      </View>

      <ScrollView style={{height: 620}}>
        <View
          style={{height: 180, justifyContent: 'center', alignItems: 'center'}}>
          <ImageBackground
            source={require('../../Components/Utility/Images/backgroundForRent.jpg')}
            style={{
              width: 320,
              height: 150,
              overflow: 'hidden',
              borderRadius: 9,
            }}>
            <View
              style={{
                backgroundColor: '#3ae5da',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#218386',
                  height: 150,
                  width: 300,
                  borderRadius: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    width: 140,
                    justifyContent: 'space-evenly',
                  }}>
                  <PlusIcon name="plus" size={25} color="white" />
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                    Add images
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <Text
          style={{
            width: 70,
            textAlign: 'center',
            height: 22,
            color: '#889897',
            fontWeight: 'bold',
          }}>
          Price *
        </Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={{
              width: 330,
              height: 55,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#183338',
              textAlignVertical: 'center',
            }}
          />
        </View>

        <View style={{height: 60, justifyContent: 'flex-end'}}>
          <Text
            style={{
              width: 70,
              textAlign: 'center',
              height: 23,
              color: '#183338',
              fontWeight: 'bold',
            }}>
            Type *
          </Text>
        </View>

        <FlatList
          data={[
            {typeName: 'TABLET-APPLE'},
            {typeName: 'DANNY-TABS'},
            {typeName: 'SAMSUNG-TABS'},
            {typeName: 'Q-MOBILE-TABS'},
          ]}
          renderItem={item => renderItem(item)}
          horizontal={true}
          style={{width: 340, marginHorizontal: 15}}
        />

        <View style={{height: 50, justifyContent: 'flex-end'}}>
          <Text
            style={{
              width: 100,
              textAlign: 'center',
              height: 18,
              color: '#183338',
              fontWeight: 'bold',
            }}>
            Condition *
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: responsiveScreenWidth(55),
            height: responsiveScreenHeight(7),
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              Styles.conditions,
              {
                backgroundColor: '#f1f1f1',
                borderWidth: 1,
              },
            ]}
            onPress={() => {}}>
            <Text style={{color: '#183338', fontWeight: 'bold'}}>NEW</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              Styles.conditions,
              {
                backgroundColor: '#f1f1f1',
                borderWidth: 1,
              },
            ]}
            onPress={() => {}}>
            <Text style={{color: '#183338', fontWeight: 'bold'}}>USED</Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 60, justifyContent: 'flex-end'}}>
          <Text
            style={{
              width: 83,
              textAlign: 'center',
              height: 23,
              color: '#889897',
            }}>
            Ad title *
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={{
              width: 330,
              height: 55,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#183338',
              textAlignVertical: 'center',
            }}
          />
        </View>

        <View style={{height: 60, justifyContent: 'flex-end'}}>
          <Text
            style={{
              width: 210,
              textAlign: 'center',
              height: 23,
              color: '#889897',
            }}>
            Describe what you are selling *
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={{
              width: 330,
              height: 55,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#183338',
              textAlignVertical: 'center',
            }}
          />
        </View>

        <View
          style={{justifyContent: 'center', alignItems: 'center', height: 150}}>
          <View
            style={{
              width: 325,
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text
              style={{
                height: 20,
                textAlignVertical: 'center',
                textAlign: 'center',
                width: 70,
              }}>
              Location
            </Text>
            <Picker
              selectedValue={selectedLocation}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLocation(itemValue)
              }>
              <Picker.Item label="Choose" value={0} />
              <Picker.Item
                label="Karachi, Pakistan"
                value="Karachi, Pakistan"
              />
              <Picker.Item label="Sindh" value="Sindh" />
            </Picker>
          </View>
        </View>

        <View
          style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: responsiveScreenWidth(90),
              height: responsiveScreenHeight(6),
              backgroundColor: '#023034',
              borderRadius: responsiveHeight(0.8),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            disabled={true}
            onPress={() => {}}>
            <Text
              style={[
                {fontSize: responsiveFontSize(2.3), fontWeight: 'bold'},
                {color: 'white'},
              ]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default IncludesMarkup;
