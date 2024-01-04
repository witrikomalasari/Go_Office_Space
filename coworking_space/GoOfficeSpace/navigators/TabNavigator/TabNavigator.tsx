import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '@screens/Chat/Chat';
import Setting from '@screens/Setting/Setting';
import Wallet from '@screens/Wallet/Wallet';
import {Home} from '@screens/index';
import {Colors} from '@theme/colors';
import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import {
  renderTabIconCard,
  renderTabIconChat,
  renderTabIconHome,
  renderTabIconProfile,
} from './IconTabNav';

const {width} = Dimensions.get('window');

export type NavigatorBottomParamList = {
  Discover: undefined;
  Chat: undefined;
  Wallet: undefined;
  Profile: undefined;
};

const TabNav = createBottomTabNavigator<NavigatorBottomParamList>();

// type NavigationBottomParams = NativeStackNavigationProp<
//   NavigatorBottomParamList,
//   'Home'
// >;

interface IMainTabNav {}

const MainTabNavigator: FC<IMainTabNav> = () => {
  return (
    <TabNav.Navigator
      backBehavior="initialRoute"
      initialRouteName="Discover"
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
          width: width,
          paddingHorizontal: width / 10,
        },
        tabBarInactiveTintColor: Colors.black,
        tabBarActiveTintColor: Colors.primary,
      }}>
      <TabNav.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => renderTabIconHome({color, focused}),
        }}
        name="Discover"
        component={Home}
      />
      <TabNav.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => renderTabIconChat({color, focused}),
        }}
        name="Chat"
        component={Chat}
      />
      <TabNav.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => renderTabIconCard({color, focused}),
        }}
      />
      <TabNav.Screen
        name="Profile"
        component={Setting}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) =>
            renderTabIconProfile({color, focused}),
        }}
      />
    </TabNav.Navigator>
  );
};

export default MainTabNavigator;
