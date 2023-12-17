import CardIcon from '@assets/Icons/CardIcon';
import ChatIcon from '@assets/Icons/ChatIcon';
import DiscoverIcon from '@assets/Icons/DiscoverIcon';
import SettingIcon from '@assets/Icons/SettingIcon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '@screens/Chat/Chat';
import Setting from '@screens/Setting/Setting';
import Wallet from '@screens/Wallet/Wallet';
import {Home} from '@screens/index';
import {Colors} from '@utils/colors';
import React, {FC, ReactNode} from 'react';
import {Text, View} from 'react-native';

export type NavigatorBottomParamList = {
  Home: undefined;
  Chat: undefined;
  Wallet: undefined;
  Setting: undefined;
};

const TabNav = createBottomTabNavigator<NavigatorBottomParamList>();

interface IRenderTab {
  focused: boolean;
  color: string;
  size?: number;
}

const renderTabIconHome: FC<IRenderTab> = ({color, focused}) => {
  return (
    <View>
      <DiscoverIcon width={24} color={color} />
      <Text style={{color: focused ? color : Colors.grey}}>Discover</Text>
    </View>
  );
};

const renderTabIconChat: FC<IRenderTab> = ({color, focused}) => {
  return (
    <View>
      <ChatIcon width={24} color={color} />
      <Text style={{color: focused ? color : Colors.grey}}>Chat</Text>
    </View>
  );
};

const renderTabIconCard: FC<IRenderTab> = ({color, focused}) => {
  return (
    <View>
      <CardIcon width={24} color={color} />
      <Text style={{color: focused ? color : Colors.grey}}>Card</Text>
    </View>
  );
};

const renderTabIconSetting: FC<IRenderTab> = ({color, focused}) => {
  return (
    <View>
      <SettingIcon width={24} color={color} />
      <Text style={{color: focused ? color : Colors.grey}}>Setting</Text>
    </View>
  );
};

const MainTabNavigator = () => {
  return (
    <TabNav.Navigator
      backBehavior="initialRoute"
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.black,
      }}>
      <TabNav.Screen
        options={{
          tabBarIcon: ({focused, color}): ReactNode =>
            renderTabIconHome({color, focused}),
        }}
        name="Home"
        component={Home}
      />
      <TabNav.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused, color}): ReactNode =>
            renderTabIconChat({color, focused}),
        }}
      />
      <TabNav.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({focused, color}): ReactNode =>
            renderTabIconCard({color, focused}),
        }}
      />
      <TabNav.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused, color}): ReactNode =>
            renderTabIconSetting({color, focused}),
        }}
      />
    </TabNav.Navigator>
  );
};

export default MainTabNavigator;
