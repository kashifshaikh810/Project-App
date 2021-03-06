import React from 'react';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import MobileIcon from 'react-native-vector-icons/FontAwesome5';
import SaleIcon from 'react-native-vector-icons/Foundation';
import TvIcon from 'react-native-vector-icons/FontAwesome';
import RentIcon from 'react-native-vector-icons/AntDesign';
import FurnitureIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TShirtIcon from 'react-native-vector-icons/Ionicons';

import {HomeStyles} from './HomeStyles';

    // username: 'Car Concept Karachi',
    // joinDate: 'May 2016',
    // description: 'Oppo ads selling no minor issue',
    // rs: '20,000',
    // image: require('../../../Components/Utility/Images/sofa.jpg'),
    // location: 'Karachi',
    // date: '02/05/2010',
    // condition: 'New',
    // featured: 'FEATURED',
    // fullDescription: 'fkewguhpqghpq3ghp3q9g3[0qhgpq3g9hkjcnvlaivjnievnaeivunpoevuhgpqgh0[qghq0ghkjnvvjnov',

export const dummyData = [
  {
    username: 'Danish Sheikh',
    joinDate: 'May 2016',
    featured: 'FEATURED',
    rs: '25,500',
    description: 'Computer/Study table',
    location: 'Bahadurabad, Karachi',
    date: `${27}Jul`,
    image: require('../../Components/Utility/Images/table.jpg'),
    fullDate: '02/05/2010',
    condition: 'New',
    fullDescription: 'dojdoqjfoefuhuwefeifewofweofweofhewofhweofnwefnonfowefwefonewno',
  },

  {
    username: 'Daniyal Khan',
    joinDate: 'Dec 2015',
    featured: 'FEATURED',
    rs: '10,000',
    description: 'Selling my new table contact us',
    location: 'Gulshan-E-Iqbal block 11,K...',
    date: `${5}Aug`,
    image: require('../../Components/Utility/Images/image.jpeg'),
    fullDate: '07/01/2019',
    condition: 'Used',
    fullDescription: 'ppiiewowejowejfojwefojiwefojwfowejjowefwefjweoifjweofjwoeijfowejfowejifjoiweweoi',
  },

  {
    username: 'Umair Shah',
    joinDate: 'Jan 2018',
    featured: 'FEATURED',
    rs: '10,000',
    description: 'Work from home computer/la...',
    location: 'Gulshan-E-Iqbal block 11,K...',
    date: `${5}Aug`,
    image: require('../../Components/Utility/Images/image.jpeg'),
    fullDate: '01/05/2016',
    condition: 'New',
    fullDescription: 'fjdfndjnfjajfalfnalfnaljfnaljfalnflanflaslc a anlfnalnflajfasfaslfnlasjnfjlasn',
  },

  {
    username: 'Azhar Siddiqui',
    joinDate: 'July 2017',
    featured: 'FEATURED',
    rs: '10,000',
    description: 'Work from home computer/la...',
    location: 'Gulshan-E-Iqbal block 11,K...',
    date: `${5}Aug`,
    image: require('../../Components/Utility/Images/image.jpeg'),
    fullDate: '07/05/2013',
    condition: 'Used',
    fullDescription: 'ppqdoqjdwneofnwefowenfnwefonwefnweofnweofnweofwenwegwej',
  },

  {
    username: 'Mehmood Khan',
    joinDate: 'Feb 2014',
    featured: 'FEATURED',
    rs: '10,000',
    description: 'Work from home computer/la...',
    location: 'Gulshan-E-Iqbal block 11,K...',
    date: `${5}Aug`,
    image: require('../../Components/Utility/Images/image.jpeg'),
    fullDate: '03/01/2018',
    condition: 'New',
    fullDescription: 'uquhquhqudhqudhqufldlndsvsdnvjsdvjnsdvnsdjvkksdasjdasdasjdlasj',
  },
];

export const dummyDataTwo = [
  {
    username: 'Ashraf Khan',
    joinDate: 'May 2014',
    featured: 'FEATURED',
    rs: '36,000',
    description: 'Furnture Sofa Set-6 seater So...',
    location: 'North Karachi, Karachi',
    date: `${11}Aug`,
    image: require('../../Components/Utility/Images/sofa.jpg'),
    fullDate: '05/04/2012',
    condition: 'Used',
    fullDescription: 'kopfjpfjqpfepifjepjifpeifpiefjepifewifpeiwfpwefjiewpifjwepjifjepiwfjiwefjewpfnvndjnv',
  },

  {
    username: 'Yasir Shah',
    joinDate: 'June 2011',
    featured: 'FEATURED',
    rs: '45,000',
    description: 'ACP UPS 10KVA/6KVA/5KVA...',
    location: 'Cantt, Karachi',
    date: `${3}Aug`,
    image: require('../../Components/Utility/Images/tableTwo.jpg'),
    fullDate: '02/07/2013',
    condition: 'New',
    fullDescription: 'kopfjpfjqpfepifjepjifpeifpiefjepifewifpeiwfpwefjiewpifjwepjifjepiwfjiwefjewpfnvndjnv',
  },

  {
    username: 'Khurram Khan',
    joinDate: 'Jan 2018',
    featured: 'FEATURED',
    rs: '45,000',
    description: 'ACP UPS 10KVA/6KVA/5KVA...',
    location: 'Cantt, Karachi',
    date: `${3}Aug`,
    image: require('../../Components/Utility/Images/tableTwo.jpg'),
    fullDate: '07/01/2019',
    condition: 'Used',
    fullDescription: 'peqpqkeqeoqwfwifwefnnckdscndkcjndkjcKDDKLSLFKJAFKLALKFJALFJASFJEOFWEFUWEIFUHWEFUWOEFUWEOFWE',
  },

  {
    username: 'Suresh mohdi',
    joinDate: 'April 2013',
    featured: 'FEATURED',
    rs: '45,000',
    description: 'ACP UPS 10KVA/6KVA/5KVA...',
    location: 'Cantt, Karachi',
    date: `${3}Aug`,
    image: require('../../Components/Utility/Images/tableTwo.jpg'),
    fullDate: '03/06/2017',
    condition: 'New',
    fullDescription: 'iqiqoeiqijoifojododnsdnonlslamxlamxasma;nd;fojnw;ofnwo;fnwfninegrgrgrooghroohowoojdjn',
  },

  {
    username: 'Hammad Khan',
    joinDate: 'July 2016',
    featured: 'FEATURED',
    rs: '45,000',
    description: 'ACP UPS 10KVA/6KVA/5KVA...',
    location: 'Cantt, Karachi',
    date: `${3}Aug`,
    image: require('../../Components/Utility/Images/tableTwo.jpg'),
    fullDate: '06/01/2013',
    condition: 'Used',
    fullDescription: 'piwjofweiuvwovwvonnc,d.amldmkpgmpewpgrnojnjnnnvnvvvnvnpwpqwiqwpwqpwiqprpinnvnnnnsacac',
  },
];

export const iconsData = [
  {
    icon: (
      <MobileIcon
        name="mobile-alt"
        size={20}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#8df2ee'}]}
      />
    ),
    iconName: 'Mobiles',
  },

  {
    icon: (
      <LocationIcon
        name="car-outline"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#d2b981'}]}
      />
    ),
    iconName: 'Vehicles',
  },

  {
    icon: (
      <SaleIcon
        name="burst-sale"
        size={25}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#3ce6d8'}]}
      />
    ),
    iconName: 'Property for Sale',
  },

  {
    icon: (
      <RentIcon
        name="trademark"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#f9dd3c'}]}
      />
    ),
    iconName: 'Property for Rent',
  },

  {
    icon: (
      <TvIcon
        name="tv"
        size={22}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#9cb8fc'}]}
      />
    ),
    iconName: 'Electronics & Home Appliances',
  },

  {
    icon: (
      <DropIcon
        name="pedal-bike"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#fb645c'}]}
      />
    ),
    iconName: 'Bikes',
  },

  {
    icon: (
      <FurnitureIcon
        name="table-furniture"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#d0b482'}]}
      />
    ),
    iconName: 'Furniture & Home Decor',
  },

  {
    icon: (
      <TShirtIcon
        name="shirt-outline"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#39e4da'}]}
      />
    ),
    iconName: 'Fashion & Beauty',
  },

  {
    icon: (
      <FurnitureIcon
        name="piano"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#f9dd3c'}]}
      />
    ),
    iconName: 'Books, Sports & Hobbies',
  },

  {
    icon: (
      <FurnitureIcon
        name="pencil"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#99b8fc'}]}
      />
    ),
    iconName: 'Kids',
  },

  {
    icon: (
      <TvIcon
        name="industry"
        size={22}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#fee893'}]}
      />
    ),
    iconName: 'Business, Industrial & Agriculture',
  },

  {
    icon: (
      <FurnitureIcon
        name="room-service-outline"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#fb645c'}]}
      />
    ),
    iconName: 'Services',
  },

  {
    icon: (
      <MobileIcon
        name="journal-whills"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#cadefc'}]}
      />
    ),
    iconName: 'Jobs',
  },

  {
    icon: (
      <FurnitureIcon
        name="dog"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#8df2ee'}]}
      />
    ),
    iconName: 'Animals',
  },
];
