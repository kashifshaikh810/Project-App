import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Styles} from './Styles';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import HeartWhite from 'react-native-vector-icons/Ionicons';

const dummyDataTwo = [
  {
    username: 'Car Concept Karachi',
    joinDate: 'May 2016',
    description: 'Oppo ads selling no minor issue',
    rs: '20,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
    location: 'Karachi',
    date: '02/05/2010',
    condition: 'New',
    featured: 'FEATURED',
    fullDescription: 'fkewguhpqghpq3ghp3q9g3[0qhgpq3g9hkjcnvlaivjnievnaeivunpoevuhgpqgh0[qghq0ghkjnvvjnov',
  },
  {
    username: 'Suleman Khan',
    joinDate: 'June 2018',
    description: 'Car for selling no working',
    rs: '30,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, Sindh',
    date: '07/02/2018',
    condition: 'Used',
    featured: 'FEATURED',
    fullDescription: 'iidoqdduqduqwdhqdhqwdhdqdqwdqwdqwpkpmvfmvvkdjnvovjvovowjvowjv.lkn;vjwovjwvommmmsdsdsd',
  },
  {
    username: 'Ayesha Sheikh',
    joinDate: 'May 2020',
    description: 'bads 4 urgent sell contact me please',
    rs: '15,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, Punjab',
    date: '05/03/2014',
    condition: 'New',
    featured: 'FEATURED',
    fullDescription: 'ppqoqqoeqeqeiohurgiuerhgiernjgnrlnwnl;mlm;mpkmo;ank;ononfaofjnjfno;afna;ofjna;ofjn;on',
  },
  {
    username: 'Kamran Warsi',
    joinDate: 'May 2013',
    description: 'crolla for sell new condition contact me fast',
    rs: '100,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, Sarhad Karachi',
    date: '01/05/2013',
    condition: 'Used',
    featured: 'FEATURED',
    fullDescription: 'oiifiefieifieiiefieifieifefieifeifiefieififiefieifeifefifieiiefiefefeifeifiefieiiefiefiiei',
  },
  {
    username: 'Ahmed Khan',
    joinDate: 'May 2018',
    description: 'mazda new condition for sell 2021 model',
    rs: '200,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, blochistan sakkhar',
    date: '08/01/2019',
    condition: 'New',
    featured: 'FEATURED',
    fullDescription: 'yewuyuryeuryeyryeryyeryryeryyeyryeyryyeyryerreyreyyyuewryweurweyryweurwerywruruyweurywerweuryu',
  },
  {
    username: 'Kadir Shah',
    joinDate: 'May 2021',
    description: 'car selling need cash serious buyer contact me',
    rs: '250,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
    location: 'Pakistan, New, Karachi',
    date: '07/05/2020',
    condition: 'Used',
    featured: 'FEATURED',
    fullDescription: 'd;ohougheuhmxlmkoqvoqqovnvvnkjnckjnknkjnkanasasdasdasdasdasdasdasdasddadasdasdalkvndovvvvwvnoivwvnowievn',
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

        <View>
          <Text style={Styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
        <View style={Styles.flexContainer}>
          <Text style={Styles.rsStyle}>Rs {item.rs}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Favourites = props => {
  const [isChange, setIsChange] = useState(false);
  return (
    <View style={Styles.container}>
      <View style={Styles.midContainer}>
        <View style={Styles.midContainerChild}>
          <Text style={Styles.heavyDiscountText}>
            Heavy discount on packages
          </Text>
          <View style={Styles.viewPackageBoxContainer}>
            <TouchableOpacity style={Styles.viewPackageBox} activeOpacity={0.6}>
              <Text style={Styles.viewPackageText}>View packages</Text>
            </TouchableOpacity>
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

export default Favourites;
