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
  Basic_Information_Page,
  Settings_Page,
  Help_And_Support_Page,
  Invoicess_And_Billing_Page,
  Buy_Packages_Page,
  My_Orders_Page,
  Billing_Information_Page,
  Privacy_Page,
  Notifications_Page,
  Create_Password_Page,
  Mark_As_Sold_Page,
  View_Full_Ad_Page,
  View_MyFull_FavourtiesAd_Page,
  Other_User_Profile_Page,
  View_Full_Based_Add_Page,
  Notifications_Main_Page,
  View_Full_Fresh_Recommendations_Page,
  Review_Your_Details_Page,
  Ad_Successfully_Post_Msg_Page,
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
import BasicInformation from '../BasicInformation/BasicInformation';
import Settings from '../Settings/Settings';
import HelpAndSupport from '../HelpAndSupport/HelpAndSupport';
import InvoicessAndBilling from '../InvoicessAndBilling/InvoicessAndBilling';
import BuyPackages from '../InvoicessAndBilling/BuyPackages/BuyPackages';
import MyOrders from '../InvoicessAndBilling/MyOrders/MyOrders';
import BillingInformation from '../InvoicessAndBilling/BillingInformation/BillingInformation';
import Privacy from '../Privacy/Privacy';
import Notifications from '../Notifications/Notifications';
import CreatePassword from '../CreatePassword/CreatePassword';
import MarkAsSold from '../MarkAsSold/MarkAsSold';
import ViewFullAd from '../MyAds/ViewFullAd/ViewFullAd';
import ViewMyFullFavourtiesAd from '../MyAds/Favourites/ViewMyFullFavourtiesAd/ViewMyFullFavourtiesAd';
import OtherUserProfile from '../OtherUserProfile/OtherUserProfile';
import ViewFullBasedAdd from '../Home/ViewFullBasedAdd/ViewFullBasedAdd';
import NotificationMain from '../NotificationMain/NotificationMain';
import ViewFullFreshRecommendations from '../Home/ViewFullFreshRecommendations/ViewFullFreshRecommendations';
import ReviewYourDetails from '../IncludesDetails/ReviewYourDetails/ReviewYourDetails';
import AdSuccessfullyPostMsg from '../IncludesDetails/AdSuccessfullyPostMsg/AdSuccessfullyPostMsg';

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
        <Stack.Screen
          name={Basic_Information_Page}
          component={BasicInformation}
        />
        <Stack.Screen name={Settings_Page} component={Settings} />
        <Stack.Screen name={Help_And_Support_Page} component={HelpAndSupport} />
        <Stack.Screen
          name={Invoicess_And_Billing_Page}
          component={InvoicessAndBilling}
        />
        <Stack.Screen name={Buy_Packages_Page} component={BuyPackages} />
        <Stack.Screen name={My_Orders_Page} component={MyOrders} />
        <Stack.Screen
          name={Billing_Information_Page}
          component={BillingInformation}
        />
        <Stack.Screen name={Privacy_Page} component={Privacy} />
        <Stack.Screen name={Notifications_Page} component={Notifications} />
        <Stack.Screen name={Create_Password_Page} component={CreatePassword} />
        <Stack.Screen name={Mark_As_Sold_Page} component={MarkAsSold} />
        <Stack.Screen name={View_Full_Ad_Page} component={ViewFullAd} />
        <Stack.Screen
          name={View_MyFull_FavourtiesAd_Page}
          component={ViewMyFullFavourtiesAd}
        />
        <Stack.Screen
          name={Other_User_Profile_Page}
          component={OtherUserProfile}
        />
        <Stack.Screen
          name={View_Full_Based_Add_Page}
          component={ViewFullBasedAdd}
        />
        <Stack.Screen
          name={Notifications_Main_Page}
          component={NotificationMain}
        />
        <Stack.Screen
          name={View_Full_Fresh_Recommendations_Page}
          component={ViewFullFreshRecommendations}
        />
        <Stack.Screen
          name={Review_Your_Details_Page}
          component={ReviewYourDetails}
        />
        <Stack.Screen
          name={Ad_Successfully_Post_Msg_Page}
          component={AdSuccessfullyPostMsg}
        />
        {/* <Stack.Screen name={SignIn_Page} component={SignIn} />
        <Stack.Screen name={SignUp_Page} component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
