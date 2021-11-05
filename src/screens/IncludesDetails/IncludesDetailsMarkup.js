/* eslint-disable react-native/no-inline-styles */
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
  Image,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import PlusIcon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';

import {
  tabletsData,
  accessoriesData,
  carsData,
  installmentData,
  spearPartsData,
} from './Data';
import {Styles} from '../SelectedCategories/Styles';
import AddImagesModal from '../../Components/Modals/AddImagesModal/AddImagesModal';
import RemoveImgModal from '../../Components/Modals/RemoveImgModal/RemoveImgModal';
import AllMobilePhonesModal from '../../Components/Modals/AllMobilePhonesModal/AllMobilePhonesModal';
import LeaveModal from '../../Components/Modals/LeaveModal/LeaveModal';
import AllCarsModal from '../../Components/Modals/AllCarsModal/AllCarsModal';
import {
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
    showLeaveModal,
    setShowLeaveModal,
    upload,
    setShowCamera,
    click,
    showRemoveImgModal,
    setShowRemoveImgModal,
    emptyImg,
    fullImgErr,
  } = props;
  let routeName = props.route.params.routeData.name;

  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{width: 170}}
        onPress={() => setItemType(item.id)}>
        <View
          style={itemType === item.id ? Styles.colorBlue : Styles.colorBlack}>
          <Text
            style={
              itemType === item.id
                ? Styles.itemBlueColor
                : Styles.itemBlackColor
            }>
            {item.typeName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const typeText = () => {
    if (
      routeName === 'Tablets' ||
      routeName === 'Accessories' ||
      routeName === 'Spear Parts'
    ) {
      return (
        <View style={Styles.typeContainer}>
          <Text style={Styles.typeTxt}>Type *</Text>
        </View>
      );
    }
  };

  const dropDown = () => {
    if (routeName === 'Mobile Phones') {
      return (
        <View
          style={[
            Styles.mobilePhonesDropDownContainer,
            {
              height:
                routeName === 'Cars'
                  ? responsiveScreenHeight(20)
                  : responsiveScreenHeight(22),
            },
          ]}>
          <View style={Styles.mobilePhonesDropDownTouchAbleParent}>
            <TouchableOpacity
              onPress={() =>
                setShowPhonesModal({shown: true, routeData: routeName})
              }
              style={{flexDirection: 'row'}}>
              <View style={Styles.mobilePhonesDropDownTextContainer}>
                <Text style={Styles.make}>Make</Text>
                <Text style={Styles.mobilePhonesDropDownSelectedValue}>
                  {(showPhonesModal && showPhonesModal?.data?.name) || 'Any'}
                </Text>
              </View>
              <View style={Styles.mobilePhonesDropDownIconContainer}>
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
          style={[
            Styles.mobilePhonesDropDownContainer,
            {
              height:
                routeName === 'Cars'
                  ? responsiveScreenHeight(20)
                  : responsiveScreenHeight(25),
            },
          ]}>
          <View style={Styles.mobilePhonesDropDownTouchAbleParent}>
            <TouchableOpacity
              onPress={() =>
                setShowCarsModal({shown: true, routeData: routeName})
              }
              style={{flexDirection: 'row'}}>
              <View style={Styles.mobilePhonesDropDownTextContainer}>
                <Text style={Styles.make}>Make</Text>
                <Text style={Styles.mobilePhonesDropDownSelectedValue}>
                  {(showCarsModal && showCarsModal?.data?.name) || 'Any'}
                </Text>
              </View>
              <View style={Styles.mobilePhonesDropDownIconContainer}>
                <ArrowRightIcon name="keyboard-arrow-right" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const installmentsPlanDropDown = () => {
    if (routeName === 'Cars on Installments') {
      return (
        <View style={Styles.installmentDropDownContainer}>
          <View style={Styles.mobilePhonesDropDownTouchAbleParent}>
            <TouchableOpacity
              onPress={() =>
                setShowPhonesModal({shown: true, routeData: routeName})
              }
              style={{flexDirection: 'row'}}>
              <View style={Styles.mobilePhonesDropDownTextContainer}>
                <Text style={Styles.make}>Register in</Text>
                <Text style={Styles.mobilePhonesDropDownSelectedValue}>
                  {(showPhonesModal && showPhonesModal?.data?.name) || 'Any'}
                </Text>
              </View>
              <View style={Styles.mobilePhonesDropDownIconContainer}>
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
          style={[
            Styles.mobilePhonesDropDownContainer,
            {
              height:
                routeName === 'Cars'
                  ? responsiveScreenHeight(20)
                  : responsiveScreenHeight(25),
            },
          ]}>
          <View style={Styles.mobilePhonesDropDownTouchAbleParent}>
            <TouchableOpacity
              onPress={() =>
                setShowPhonesModal({shown: true, routeData: routeName})
              }
              style={{flexDirection: 'row'}}>
              <View style={Styles.mobilePhonesDropDownTextContainer}>
                <Text style={Styles.make}>Register in</Text>
                <Text style={Styles.mobilePhonesDropDownSelectedValue}>
                  {(showPhonesModal && showPhonesModal?.data?.name) || 'Any'}
                </Text>
              </View>
              <View style={Styles.mobilePhonesDropDownIconContainer}>
                <ArrowRightIcon name="keyboard-arrow-right" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const installmentDropDown = () => {
    if (routeName === 'Cars on Installments') {
      return (
        <View
          style={[
            Styles.mobilePhonesDropDownContainer,
            {
              height: responsiveScreenHeight(20),
            },
          ]}>
          <View style={Styles.mobilePhonesDropDownTouchAbleParent}>
            <TouchableOpacity
              onPress={() =>
                setShowCarsModal({shown: true, routeData: routeName})
              }
              style={{flexDirection: 'row'}}>
              <View style={Styles.mobilePhonesDropDownTextContainer}>
                <Text style={Styles.make}>Make</Text>
                <Text style={Styles.mobilePhonesDropDownSelectedValue}>
                  {(showCarsModal && showCarsModal?.data?.name) || 'Any'}
                </Text>
              </View>
              <View style={Styles.mobilePhonesDropDownIconContainer}>
                <ArrowRightIcon name="keyboard-arrow-right" size={22} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const installmentConditionSelecter = () => {
    if (routeName === 'Cars on Installments') {
      return (
        <>
          <View>
            <Text style={Styles.registerTxt}>Registered *</Text>

            <View style={Styles.installmentTxtSelectorContainer}>
              <TouchableOpacity
                style={[
                  Styles.conditions,
                  {
                    borderWidth: 1,
                    borderColor: itemCondition === 'YES' ? '#279e94' : 'black',
                  },
                ]}
                onPress={() => setItemCondition('YES')}>
                <Text
                  style={{
                    color: itemCondition === 'YES' ? '#279e94' : '#183338',
                    fontWeight: 'bold',
                  }}>
                  YES
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  Styles.conditions,
                  {
                    borderWidth: 1,
                    borderColor: itemCondition === 'NO' ? '#279e94' : 'black',
                  },
                ]}
                onPress={() => setItemCondition('NO')}>
                <Text
                  style={{
                    color: itemCondition === 'NO' ? '#279e94' : '#183338',
                    fontWeight: 'bold',
                  }}>
                  NO
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    }
  };

  const twoTextInput = () => {
    if (routeName === 'Cars') {
      return (
        <>
          <Text style={Styles.yearTxt}>Year *</Text>
          <View style={Styles.inputContainer}>
            <TextInput style={Styles.input} />
          </View>
          <Text style={Styles.drivenTxt}>KM's driven *</Text>
          <View style={Styles.inputContainer}>
            <TextInput style={Styles.input} />
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
          style={Styles.mainFlatList}
        />
      );
    }
  };

  const installmentFlatList = () => {
    if (routeName === 'Cars on Installments') {
      return (
        <>
          <FlatList
            extraData={itemType}
            data={installmentData}
            renderItem={item => renderItem(item)}
            horizontal={true}
            style={Styles.mainFlatList}
          />
        </>
      );
    }
  };

  const spearPartsFlatList = () => {
    if (routeName === 'Spear Parts') {
      return (
        <>
          <FlatList
            extraData={itemType}
            data={spearPartsData}
            renderItem={item => renderItem(item)}
            horizontal={true}
            style={Styles.mainFlatList}
          />
        </>
      );
    }
  };

  const installmentsRouteTextInput = () => {
    if (routeName === 'Cars on Installments') {
      return (
        <>
          <View style={Styles.downTxtContainer}>
            <Text style={Styles.downTxt}>Down payment *</Text>
          </View>
          <View style={Styles.inputContainer}>
            <TextInput style={Styles.input} />
          </View>

          <View style={Styles.downTxtContainer}>
            <Text style={Styles.monthTxt}>Monthly installment *</Text>
          </View>
          <View style={Styles.inputContainer}>
            <TextInput style={Styles.input} />
          </View>
        </>
      );
    }
  };

  const selectedImagesShow = () => {
    if (props.imgArr.length > 0) {
      return (
        <View
          style={{
            borderWidth: 0.3,
            borderColor: '#b3b3b3',
            width: 325,
            height: 190,
            backgroundColor: '#fafafa',
          }}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => setShowModal(true)}>
            <View
              style={{
                flexDirection: 'row',
                width: 315,
                height: 50,
                alignItems: 'center',
              }}>
              <Text style={{color: '#052d32', fontWeight: 'bold'}}>
                UPLOAD UP TO 20 PHOTOS
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

          <ScrollView horizontal={true} style={{flex: 1, marginHorizontal: 6}}>
            <View style={{flexDirection: 'row'}}>
              {props.imgArr.map((camImg, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{marginHorizontal: 2}}
                    onPress={() =>
                      setShowRemoveImgModal({shown: true, indexNum: index})
                    }>
                    <Image
                      source={{uri: camImg.camera}}
                      style={{width: 80, height: 85, borderRadius: 8}}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View
            style={{
              height: 50,
              width: 310,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{fontSize: 13, color: '#0e3133'}}>
              Tab on images to edit them, or press, hold and move for
              reordering.
            </Text>
          </View>
        </View>
      );
    }
  };

  const addImgesOption = () => {
    if (props.imgArr.length === 0) {
      return (
        <ImageBackground
          source={require('../../Components/Utility/Images/backgroundForRent.jpg')}
          style={Styles.imgBack}>
          <View style={Styles.addImgesContainer}>
            <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
              <View style={Styles.main}>
                <View style={Styles.iconContainer}>
                  <PlusIcon name="plus" size={25} color="white" />
                  <Text style={Styles.addImg}>Add images</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      );
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View
        style={[Styles.routeNameContainer, {width: responsiveScreenWidth(66)}]}>
        <TouchableOpacity onPress={() => setShowLeaveModal(true)}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.routeName}>Include some details</Text>
      </View>

      <ScrollView style={Styles.scrollView}>
        <View
          style={[
            Styles.imgBackContainer,
            {
              height:
                props.imgArr.length > 0
                  ? responsiveScreenHeight(26)
                  : responsiveScreenHeight(20),
            },
          ]}>
          {addImgesOption()}
          {selectedImagesShow()}
        </View>

        {twoTextInput()}

        <Text
          style={[
            Styles.price,
            {
              height:
                routeName === 'Cars'
                  ? responsiveScreenHeight(6)
                  : responsiveScreenHeight(5),
            },
          ]}>
          Price *
        </Text>
        <View style={Styles.inputContainer}>
          <TextInput style={Styles.input} />
        </View>

        {typeText()}
        {spearPartsFlatList()}

        <FlatList
          extraData={itemType}
          data={
            (routeName === 'Tablets' && tabletsData) ||
            (routeName === 'Accessories' && accessoriesData) ||
            []
          }
          renderItem={item => renderItem(item)}
          horizontal={true}
          style={Styles.tabletsFlatList}
        />

        <RemoveImgModal
          showRemoveImgModal={showRemoveImgModal}
          setShowRemoveImgModal={setShowRemoveImgModal}
          emptyImg={emptyImg}
        />
        <AddImagesModal
          showModal={showModal}
          setShowModal={setShowModal}
          upload={upload}
          setShowCamera={setShowCamera}
          click={click}
          fullImgErr={fullImgErr}
          {...props}
        />
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
        <LeaveModal
          showLeaveModal={showLeaveModal}
          setShowLeaveModal={setShowLeaveModal}
          navigation={navigation}
        />

        {dropDown()}

        {carsDropDown()}

        {routeName === 'Cars' && <Text style={Styles.feulTxt}>Feul *</Text>}
        {feulData()}

        {registerDropDown()}

        <View
          style={[
            Styles.conditionTxtContainer,
            {
              height:
                routeName === 'Mobile Phones' || routeName === 'Cars'
                  ? responsiveScreenHeight(2)
                  : responsiveScreenHeight(5),
            },
          ]}>
          <Text style={Styles.conditionTxt}>Condition *</Text>
        </View>

        <View style={Styles.conditionSelector}>
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

        {routeName === 'Cars on Installments' && (
          <View style={Styles.transTxt}>
            <Text style={Styles.transmission}>Transmission *</Text>
          </View>
        )}

        {installmentFlatList()}
        {installmentDropDown()}
        {installmentConditionSelecter()}
        {installmentsRouteTextInput()}
        {installmentsPlanDropDown()}

        <View style={Styles.adTitileContainer}>
          <Text style={Styles.adTitile}>Ad title *</Text>
        </View>
        <View style={Styles.inputContainer}>
          <TextInput style={Styles.input} />
        </View>

        <View style={Styles.describeTxtContainer}>
          <Text style={Styles.describeTxt}>
            Describe what you are selling *
          </Text>
        </View>
        <View style={Styles.inputContainer}>
          <TextInput style={Styles.input} />
        </View>

        <View style={Styles.pickerContainer}>
          <View style={Styles.pickerContainerChild}>
            <Text style={Styles.locationTxt}>Location</Text>
            <Picker
              style={Styles.pickerMain}
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

        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.buttonTouchAble}
            onPress={() => props.navigation.navigate('ReviewYourDetails')}>
            <Text style={Styles.buttonTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default IncludesMarkup;
