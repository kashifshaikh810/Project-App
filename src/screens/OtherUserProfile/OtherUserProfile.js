/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import IconLeft from 'react-native-vector-icons/Feather';
import OtherUserProfileModal from '../../Components/Modals/OtherUserProfileModal/OtherUserProfileModal';
import {Styles} from './Styles';

const OtherUserProfile = props => {
  const [showModal, setShowModal] = useState(false);
  const [addToFav, setAddToFav] = useState({bool: false, id: ''});
  const data = props.route.params.userData;

  const dummyDataTwo = [
    {
      featured: 'FEATURED',
      id: 1,
      rs: '36,000',
      description: 'Furnture Sofa Set-6 seater So...',
      location: 'North Karachi, Karachi',
      date: `${11}Aug`,
      image: require('../../Components/Utility/Images/sofa.jpg'),
    },

    {
      featured: 'FEATURED',
      id: 2,
      rs: '45,000',
      description: 'ACP UPS 10KVA/6KVA/5KVA...',
      location: 'Cantt, Karachi',
      date: `${3}Aug`,
      image: require('../../Components/Utility/Images/tableTwo.jpg'),
    },

    {
      featured: 'FEATURED',
      id: 3,
      rs: '45,000',
      description: 'ACP UPS 10KVA/6KVA/5KVA...',
      location: 'Cantt, Karachi',
      date: `${3}Aug`,
      image: require('../../Components/Utility/Images/tableTwo.jpg'),
    },

    {
      featured: 'FEATURED',
      id: 4,
      rs: '45,000',
      description: 'ACP UPS 10KVA/6KVA/5KVA...',
      location: 'Cantt, Karachi',
      date: `${3}Aug`,
      image: require('../../Components/Utility/Images/tableTwo.jpg'),
    },

    {
      featured: 'FEATURED',
      id: 5,
      rs: '45,000',
      description: 'ACP UPS 10KVA/6KVA/5KVA...',
      location: 'Cantt, Karachi',
      date: `${3}Aug`,
      image: require('../../Components/Utility/Images/tableTwo.jpg'),
    },
  ];

  const renderItemsTwo = ({item, index}) => {
    return (
      <View style={Styles.renderItemContainer}>
        <View style={Styles.renderItemContent}>
          <ImageBackground source={item.image} style={Styles.imgBackground}>
            <View style={Styles.insideContainer}>
              <View style={Styles.iconContainer}>
                <TouchableOpacity
                  style={Styles.iconMain}
                  onPress={() =>
                    setAddToFav({bool: !addToFav.bool, id: item.id})
                  }>
                  <MyAdsIcon
                    name={
                      addToFav.bool && addToFav.id === item.id
                        ? 'heart'
                        : 'heart-outlined'
                    }
                    size={16}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <View>
            <Text style={Styles.rsStyle}>Rs {item.rs}</Text>
          </View>
          <View style={Styles.flexContainer}>
            <Text style={Styles.description} numberOfLines={1}>
              {item.description}
            </Text>
            <View style={Styles.rowContainer}>
              <Text style={Styles.locationStyle} numberOfLines={1}>
                {item.location}
              </Text>
              <View style={Styles.dateContainer}>
                <Text style={Styles.locationStyle}>{item.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.headerBottomLine}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <IconLeft name="chevron-left" size={25} color="#012f34" />
          </TouchableOpacity>

          <View style={Styles.shareIconContainer}>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <IconLeft name="more-vertical" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={Styles.profileSectionBottomLine}>
        <View style={Styles.profileSectionContainer}>
          <Image
            source={require('../../Components/Utility/Images/profile.png')}
            style={Styles.profileImg}
          />
          <View style={Styles.usernameAndDateContainer}>
            <Text style={Styles.username}>{data.username}</Text>
            <Text style={Styles.joinDate}>Member since {data.joinDate}</Text>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={Styles.publishedContainer}>
          <Text style={Styles.published}>Published ads</Text>
        </View>
      </View>

      <FlatList
        data={dummyDataTwo}
        numColumns={2}
        extraData={addToFav}
        renderItem={item => renderItemsTwo(item)}
      />

      <OtherUserProfileModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default OtherUserProfile;
