/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';
import EyeIcon from 'react-native-vector-icons/SimpleLineIcons';
import HeartIcon from 'react-native-vector-icons/Entypo';
import ThreeDotsIcon from 'react-native-vector-icons/Feather';
import MyAdsDeleteModal from '../../../Components/Modals/MyAdsDeleteModal/MyAdsDeleteModal';

export const renderItems = ({item, index}, props, showModal, setShowModal) => {
  console.log(item.adImages[0].adImages, 'dd');
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        style={Styles.renderItemContainer}
        onPress={() =>
          props.navigation.navigate('ViewFullAd', {data: item, props: props})
        }>
        <View style={Styles.dateContainer}>
          <Text style={Styles.fromText}>FROM: </Text>
          <Text style={[Styles.fromText, {fontWeight: 'bold'}]}>
            {item.date}
          </Text>

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
          {...props}
          showModal={showModal}
          setShowModal={setShowModal}
        />

        <View style={Styles.midSectionContainer}>
          <View>
            <Image source={{uri: item.adImages[index].adImages}} style={Styles.adImgStyle} />
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
                  Views: {item.views}
                </Text>
              </View>

              <View style={Styles.heartIconContainer}>
                <HeartIcon
                  name="heart-outlined"
                  size={18}
                  style={Styles.icon}
                />
                <Text style={{color: '#062d30', fontSize: 16}}>
                  Likes: {item.likes}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={Styles.descriptionTypeParentContainer}>
          <View style={Styles.typeContainer}>
            <Text style={Styles.type}>{item.type}</Text>
          </View>
          <Text style={Styles.descriptionType}>{item.descriptionType}</Text>
        </View>

        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.buttonTouchAble}
            onPress={() =>
              item.buttonType !== 'Delete' &&
              props.navigation.navigate('MarkAsSold', {data: item})
            }>
            <Text style={Styles.button}>{item.buttonType}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
