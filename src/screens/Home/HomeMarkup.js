import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from 'react-native-vector-icons/Feather';
import MobileIcon from 'react-native-vector-icons/FontAwesome5';
import SaleIcon from 'react-native-vector-icons/Foundation';
import TvIcon from 'react-native-vector-icons/FontAwesome';
import RentIcon from 'react-native-vector-icons/AntDesign';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import FurnitureIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TShirtIcon from 'react-native-vector-icons/Ionicons';

const HomeMarkup = () => {
  const dummyData = [
    {
      featured: 'FEATURED',
      rs: '25,500',
      description: 'Computer/Study table',
      location: 'Bahadurabad, Karachi',
      date: `${27}Jul`,
      image: require('../../Components/Utility/Images/table.jpg'),
    },

    {
      featured: 'FEATURED',
      rs: '10,000',
      description: 'Work from home computer/la...',
      location: 'Gulshan-E-Iqbal block 11,K...',
      date: `${5}Aug`,
      image: require('../../Components/Utility/Images/image.jpeg'),
    },

    {
      featured: 'FEATURED',
      rs: '10,000',
      description: 'Work from home computer/la...',
      location: 'Gulshan-E-Iqbal block 11,K...',
      date: `${5}Aug`,
      image: require('../../Components/Utility/Images/image.jpeg'),
    },

    {
      featured: 'FEATURED',
      rs: '10,000',
      description: 'Work from home computer/la...',
      location: 'Gulshan-E-Iqbal block 11,K...',
      date: `${5}Aug`,
      image: require('../../Components/Utility/Images/image.jpeg'),
    },

    {
      featured: 'FEATURED',
      rs: '10,000',
      description: 'Work from home computer/la...',
      location: 'Gulshan-E-Iqbal block 11,K...',
      date: `${5}Aug`,
      image: require('../../Components/Utility/Images/image.jpeg'),
    },
  ];

  const dummyDataTwo = [
    {
      featured: 'FEATURED',
      rs: '36,000',
      description: 'Furnture Sofa Set-6 seater So...',
      location: 'North Karachi, Karachi',
      date: `${11}Aug`,
      image: require('../../Components/Utility/Images/sofa.jpg'),
    },

    {
      featured: 'FEATURED',
      rs: '45,000',
      description: 'ACP UPS 10KVA/6KVA/5KVA...',
      location: 'Cantt, Karachi',
      date: `${3}Aug`,
      image: require('../../Components/Utility/Images/tableTwo.jpg'),
    },

    {
      featured: 'FEATURED',
      rs: '45,000',
      description: 'ACP UPS 10KVA/6KVA/5KVA...',
      location: 'Cantt, Karachi',
      date: `${3}Aug`,
      image: require('../../Components/Utility/Images/tableTwo.jpg'),
    },

    {
      featured: 'FEATURED',
      rs: '45,000',
      description: 'ACP UPS 10KVA/6KVA/5KVA...',
      location: 'Cantt, Karachi',
      date: `${3}Aug`,
      image: require('../../Components/Utility/Images/tableTwo.jpg'),
    },

    {
      featured: 'FEATURED',
      rs: '45,000',
      description: 'ACP UPS 10KVA/6KVA/5KVA...',
      location: 'Cantt, Karachi',
      date: `${3}Aug`,
      image: require('../../Components/Utility/Images/tableTwo.jpg'),
    },
  ];

  const renderItems = ({item}) => {
    return (
      <View style={{width: 140, marginHorizontal: 20, alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 0.2,
            borderRadius: 1,
            width: 165,
            height: 190,
          }}>
          <ImageBackground
            source={item.image}
            style={{width: '100%', height: 100}}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 7,
                marginVertical: 7,
              }}>
              <View
                style={{
                  backgroundColor: 'orange',
                  width: 50,
                  height: 20,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 8,
                    textAlign: 'center',
                  }}>
                  {item.featured}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'black',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MyAdsIcon name="heart-outlined" size={16} color="white" />
                </View>
              </View>
            </View>
          </ImageBackground>

          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                paddingTop: 6,
                marginHorizontal: 5,
              }}>
              Rs {item.rs}
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Text style={{fontSize: 12, marginHorizontal: 5, maxWidth: 200}}>
              {item.description}
            </Text>
            <View style={{flexDirection: 'row', marginHorizontal: 5}}>
              <Text style={{fontSize: 11}}>{item.location}</Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <Text style={{fontSize: 11}}>{item.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderItemsTwo = ({item}) => {
    return (
      <View style={{width: 140, marginHorizontal: 20, alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 0.2,
            borderRadius: 1,
            width: 165,
            height: 190,
          }}>
          <ImageBackground
            source={item.image}
            style={{width: '100%', height: 100}}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 7,
                marginVertical: 7,
              }}>
              <View
                style={{
                  backgroundColor: 'orange',
                  width: 50,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 8,
                  }}>
                  {item.featured}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'black',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MyAdsIcon name="heart-outlined" size={16} color="white" />
                </View>
              </View>
            </View>
          </ImageBackground>

          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                paddingTop: 6,
                marginHorizontal: 5,
              }}>
              Rs {item.rs}
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Text style={{fontSize: 12, marginHorizontal: 5, maxWidth: 200}}>
              {item.description}
            </Text>
            <View style={{flexDirection: 'row', marginHorizontal: 5}}>
              <Text style={{fontSize: 11}}>{item.location}</Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <Text style={{fontSize: 11}}>{item.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View
        style={{marginHorizontal: 20, marginVertical: 7, flexDirection: 'row'}}>
        <LocationIcon name="location-outline" size={20} />
        <Text style={{marginHorizontal: 10, marginVertical: 3}}>
          Karachi, Sindh
        </Text>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <DropIcon name="keyboard-arrow-down" size={20} />
        </View>
      </View>

      <View
        style={{marginHorizontal: 20, marginVertical: 7, flexDirection: 'row'}}>
        <SearchIcon name="search" size={20} />
        <Text style={{marginHorizontal: 10, marginVertical: 3}}>
          Karachi, Sindh
        </Text>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <SearchIcon name="bell" size={20} />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
          flexDirection: 'row',
        }}>
        <Text>Browse Categories</Text>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Text style={{borderBottomWidth: 1}}>Sell all</Text>
        </View>
      </View>

      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <MobileIcon
              name="mobile-alt"
              size={20}
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'lightblue',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>Mobiles</Text>
            </View>
          </View>
          <View>
            <LocationIcon
              name="car-outline"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#ae5858',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>Vehicales</Text>
            </View>
          </View>
          <View>
            <SaleIcon
              name="burst-sale"
              size={25}
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'lightblue',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 5}}>
              <Text style={{maxWidth: 50, fontSize: 12, textAlign: 'center'}}>
                Property for Sale
              </Text>
            </View>
          </View>
          <View>
            <RentIcon
              name="trademark"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'yellow',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 5}}>
              <Text style={{maxWidth: 50, fontSize: 12, textAlign: 'center'}}>
                Property for Rent
              </Text>
            </View>
          </View>
          <View>
            <TvIcon
              name="tv"
              size={22}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#3333919c',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 5}}>
              <Text style={{maxWidth: 60, fontSize: 12, textAlign: 'center'}}>
                Electronics & Home A...
              </Text>
            </View>
          </View>
          <View>
            <DropIcon
              name="pedal-bike"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#b3b3b3',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>Bikes</Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="table-furniture"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'brown',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, maxWidth: 60, textAlign: 'center'}}>Furniture & Home D...</Text>
            </View>
          </View>

          <View>
            <TShirtIcon
              name="shirt-outline"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'grey',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, maxWidth: 60, textAlign: 'center'}}>Fashion & Beauty</Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="piano"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#b3b3b3',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, maxWidth: 60, textAlign: 'center'}}>Books, Sports &...</Text>
            </View>
          </View>


          <View>
            <FurnitureIcon
              name="pencil"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#b3b3b3',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>Kids</Text>
            </View>
          </View>

          <View>
            <TvIcon
              name="industry"
              size={22}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#b3b3b3',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, maxWidth: 60, textAlign: 'center'}}>Business, industrial...</Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="room-service-outline"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#b3b3b3',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>Services</Text>
            </View>
          </View>

          <View>
            <MobileIcon
              name="journal-whills"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#b3b3b3',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>Jobs</Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="dog"
              size={24}
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#b3b3b3',
                borderRadius: 25,
                marginHorizontal: 10,
                paddingVertical: 10,
                textAlign: 'center',
              }}
            />
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>Animals</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View>
        <Text
          style={{paddingHorizontal: 10, fontWeight: 'bold', paddingBottom: 5}}>
          Based on your search
        </Text>

        <FlatList
          data={dummyData}
          renderItem={item => renderItems(item)}
          horizontal={true}
        />

        <Text
          style={{
            paddingHorizontal: 10,
            fontWeight: 'bold',
            paddingBottom: 5,
            paddingTop: 10,
          }}>
          Fresh recommendations
        </Text>

        <FlatList
          data={dummyDataTwo}
          renderItem={item => renderItemsTwo(item)}
          horizontal={true}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{paddingTop: 15, paddingBottom: 5}}>
          <Image
            source={require('../../Components/Utility/Images/home.png')}
            style={{width: 30, height: 30}}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 200,
            height: 50,
            backgroundColor: 'green',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>START</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeMarkup;
