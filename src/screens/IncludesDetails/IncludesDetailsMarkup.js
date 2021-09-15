import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import PlusIcon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';

import {tabletsData, accessoriesData, carsData} from './Data';
import {Styles} from '../SelectedCategories/Styles';
import AddImagesModal from '../../Components/Modals/AddImagesModal/AddImagesModal';
import AllMobilePhonesModal from '../../Components/Modals/AllMobilePhonesModal/AllMobilePhonesModal';
import AllCarsModal from '../../Components/Modals/AllCarsModal/AllCarsModal';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../../Components/Utility/ResponsiveDimensions/Responsive';

const IncludesMarkup = props => {
  const {
    selectedLocation,
    setSelectedLocation,
    setItemCondition,
    itemCondition,
    itemType,
    setItemType,
    showModal,
    setShowModal,
    showPhonesModal,
    setShowPhonesModal,
    showCarsModal,
    setShowCarsModal,
  } = props;
  let routeName = props.route.params.routeData.name;

  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{width: 170}}
        onPress={() => setItemType(item.id)}>
        <View
          style={
            itemType === item.id
              ? {
                  borderWidth: 1,
                  borderColor: '#279e94',
                  width: 160,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }
              : {
                  borderWidth: 1,
                  borderColor: '#183338',
                  width: 160,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }
          }>
          <Text
            style={
              itemType === item.id
                ? {color: '#279e94', fontSize: 16}
                : {color: '#183338', fontSize: 16}
            }>
            {item.typeName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const typeText = () => {
    if (routeName === 'Tablets' || routeName === 'Accessories') {
      return (
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
      );
    }
  };

  const dropDown = () => {
    if (routeName === 'Mobile Phones') {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: routeName === 'Cars' ? 140 : 155,
          }}>
          <View
            style={{borderWidth: 1, width: 330, height: 80, borderRadius: 5}}>
            <TouchableOpacity
              onPress={() =>
                setShowPhonesModal({shown: true, routeData: routeName})
              }
              style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'column',
                  height: 78,
                  justifyContent: 'center',
                  marginHorizontal: 20,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Make</Text>
                <Text style={{fontSize: 16, marginVertical: 3, width: 250}}>
                  {(showPhonesModal && showPhonesModal?.data?.name) || 'Any'}
                </Text>
              </View>
              <View
                style={{
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <ArrowRightIcon name="keyboard-arrow-right" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const carsDropDown = () => {
    if (routeName === 'Cars') {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: routeName === 'Cars' ? 140 : 155,
          }}>
          <View
            style={{borderWidth: 1, width: 330, height: 80, borderRadius: 5}}>
            <TouchableOpacity
              onPress={() =>
                setShowCarsModal({shown: true, routeData: routeName})
              }
              style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'column',
                  height: 78,
                  justifyContent: 'center',
                  marginHorizontal: 20,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Make</Text>
                <Text style={{fontSize: 16, marginVertical: 3, width: 250}}>
                  {(showCarsModal && showCarsModal?.data?.name) || 'Any'}
                </Text>
              </View>
              <View
                style={{
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <ArrowRightIcon name="keyboard-arrow-right" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const registerDropDown = () => {
    if (routeName === 'Cars') {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: routeName === 'Cars' ? 140 : 155,
          }}>
          <View
            style={{borderWidth: 1, width: 330, height: 80, borderRadius: 5}}>
            <TouchableOpacity
              onPress={() =>
                setShowPhonesModal({shown: true, routeData: routeName})
              }
              style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'column',
                  height: 78,
                  justifyContent: 'center',
                  marginHorizontal: 20,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Register in
                </Text>
                <Text style={{fontSize: 16, marginVertical: 3, width: 250}}>
                  {(showPhonesModal && showPhonesModal?.data?.name) || 'Any'}
                </Text>
              </View>
              <View
                style={{
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <ArrowRightIcon name="keyboard-arrow-right" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const twoTextInput = () => {
    if (routeName === 'Cars') {
      return (
        <>
          <Text
            style={{
              width: 70,
              textAlign: 'center',
              height: 30,
              textAlignVertical: 'bottom',
              color: '#889897',
              fontWeight: 'bold',
            }}>
            Year *
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
          <Text
            style={{
              width: 110,
              textAlign: 'center',
              textAlignVertical: 'bottom',
              height: 50,
              color: '#889897',
              fontWeight: 'bold',
            }}>
            KM's driven *
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
        </>
      );
    }
  };

  const feulData = () => {
    if (routeName === 'Cars') {
      return (
        <FlatList
          extraData={itemType}
          data={carsData || []}
          renderItem={item => renderItem(item)}
          horizontal={true}
          style={{width: 340, marginHorizontal: 15}}
        />
      );
    }
  };

  return (
    <KeyboardAwareScrollView>
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
              <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
                <View
                  style={{
                    backgroundColor: '#218386',
                    height: 150,
                    width: 300,
                    borderRadius: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 50,
                      alignItems: 'center',
                      width: 140,
                      justifyContent: 'space-evenly',
                    }}>
                    <PlusIcon name="plus" size={25} color="white" />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Add images
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>
        </View>

        {twoTextInput()}

        {routeName === 'Cars' ? <></> : null}

        <Text
          style={{
            width: 70,
            textAlign: 'center',
            textAlignVertical: 'bottom',
            height: routeName === 'Cars' ? 50 : 22,
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

        {typeText()}

        <FlatList
          extraData={itemType}
          data={
            (routeName === 'Tablets' && tabletsData) ||
            (routeName === 'Accessories' && accessoriesData) ||
            []
          }
          renderItem={item => renderItem(item)}
          horizontal={true}
          style={{width: 340, marginHorizontal: 15}}
        />

        <AddImagesModal showModal={showModal} setShowModal={setShowModal} />
        <AllMobilePhonesModal
          showPhonesModal={showPhonesModal}
          setShowPhonesModal={setShowPhonesModal}
          {...props}
        />
        <AllCarsModal
          showCarsModal={showCarsModal}
          setShowCarsModal={setShowCarsModal}
          {...props}
        />

        {dropDown()}

        {carsDropDown()}

        {routeName === 'Cars' && (
          <Text
            style={{
              width: 70,
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Feul *
          </Text>
        )}
        {feulData()}

        {registerDropDown()}

        <View
          style={{
            height:
              routeName === 'Mobile Phones' || routeName === 'Mobile Phones'
                ? 15
                : 50,
            justifyContent: 'flex-end',
          }}>
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
                borderWidth: 1,
                borderColor: itemCondition === 'NEW' ? '#279e94' : 'black',
              },
            ]}
            onPress={() => setItemCondition('NEW')}>
            <Text
              style={{
                color: itemCondition === 'NEW' ? '#279e94' : '#183338',
                fontWeight: 'bold',
              }}>
              NEW
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              Styles.conditions,
              {
                borderWidth: 1,
                borderColor: itemCondition === 'USED' ? '#279e94' : 'black',
              },
            ]}
            onPress={() => setItemCondition('USED')}>
            <Text
              style={{
                color: itemCondition === 'USED' ? '#279e94' : '#183338',
                fontWeight: 'bold',
              }}>
              USED
            </Text>
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
              height: 75,
              width: 325,
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text
              style={{
                // height: 20,
                fontSize: 17,
                textAlignVertical: 'center',
                textAlign: 'center',
                width: 77,
                fontWeight: 'bold',
              }}>
              Location
            </Text>
            <Picker
              style={{height: 30}}
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
              backgroundColor: '#e4e7ee',
              borderRadius: responsiveHeight(0.8),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            // disabled={true}
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
    </KeyboardAwareScrollView>
  );
};

export default IncludesMarkup;
