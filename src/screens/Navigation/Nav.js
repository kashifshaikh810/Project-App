import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SignIn_Page,
  SignUp_Page,
  Categories_Page,
  All_Categories_Page,
  Bottom_Tab,
  Selected_Categories_Page,
  Includes_Details_Page,
  Private_Message_Page,
  Buying_Chat_PrivateMessages_Page,
} from '../../Components/NavigationTitileNames/Name';
import SignIn from '../Authentication/SignIn/SignIn';
import SignUp from '../Authentication/SignUp/SignUp';
import BottomTabNav from '../BottomTabNavigater/BottomTabNav';
import Categories from '../Categories/Categories';
import AllCategories from '../AllCategories/AllCategories';
import SelectedCategories from '../SelectedCategories/SelectedCategories';
import IncludesDetails from '../IncludesDetails/IncludesDetails';
import PrivateMessages from '../PrivateMessages/PrivateMessages';
import BuyingChatPrivateMessages from '../Chats/BuyingChatPrivateMessages/BuyingChatPrivateMessages';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Bottom_Tab} component={BottomTabNav} />
        <Stack.Screen name={Categories_Page} component={Categories} />
        <Stack.Screen name={All_Categories_Page} component={AllCategories} />
        <Stack.Screen
          name={Includes_Details_Page}
          component={IncludesDetails}
        />
        <Stack.Screen
          name={Selected_Categories_Page}
          component={SelectedCategories}
        />
        <Stack.Screen name={Private_Message_Page} component={PrivateMessages} />
        <Stack.Screen
          name={Buying_Chat_PrivateMessages_Page}
          component={BuyingChatPrivateMessages}
        />
        {/* <Stack.Screen name={SignIn_Page} component={SignIn} />
        <Stack.Screen name={SignUp_Page} component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
