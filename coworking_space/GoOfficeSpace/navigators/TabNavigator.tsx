import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '@screens/Chat/Chat';
import Setting from '@screens/Setting/Setting';
import Wallet from '@screens/Wallet/Wallet';
import {Home} from '@screens/index';
import React from 'react';

export type NavigatorBottomParamList = {
  Home: undefined;
  Chat: undefined;
  Wallet: undefined;
  Setting: undefined;
};

const TabNav = createBottomTabNavigator<NavigatorBottomParamList>();

const MainTabNavigator = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="Chat" component={Chat} />
      <TabNav.Screen name="Wallet" component={Wallet} />
      <TabNav.Screen name="Setting" component={Setting} />
    </TabNav.Navigator>
  );
};

export default MainTabNavigator;
