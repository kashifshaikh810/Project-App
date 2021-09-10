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
} from '../../Components/NavigationTitileNames/Name';
import SignIn from '../Authentication/SignIn/SignIn';
import SignUp from '../Authentication/SignUp/SignUp';
import BottomTabNav from '../BottomTabNavigater/BottomTabNav';
import Categories from '../Categories/Categories';
import AllCategories from '../AllCategories/AllCategories';
import SelectedCategories from '../SelectedCategories/SelectedCategories';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Bottom_Tab} component={BottomTabNav} />
        <Stack.Screen name={Categories_Page} component={Categories} />
        <Stack.Screen name={All_Categories_Page} component={AllCategories} />
        <Stack.Screen
          name={Selected_Categories_Page}
          component={SelectedCategories}
        />
        {/* <Stack.Screen name={SignIn_Page} component={SignIn} />
        <Stack.Screen name={SignUp_Page} component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
