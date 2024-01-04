import CardIcon from '@assets/Icons/CardIcon';
import ChatIcon from '@assets/Icons/ChatIcon';
import DiscoverIcon from '@assets/Icons/DiscoverIcon';
import SettingIcon from '@assets/Icons/SettingIcon';
import Spacer from '@components/Atoms/Spacer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '@screens/Chat/Chat';
import Setting from '@screens/Setting/Setting';
import Wallet from '@screens/Wallet/Wallet';
import {Home} from '@screens/index';
import {Colors} from '@theme/colors';
import {cornerCustom} from '@theme/radiusLine';
import React, {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';

const {width} = Dimensions.get('window');

export type NavigatorBottomParamList = {
  Discover: undefined;
  Chat: undefined;
  Wallet: undefined;
  Setting: undefined;
};

const TabNav = createBottomTabNavigator<NavigatorBottomParamList>();

// type NavigationBottomParams = NativeStackNavigationProp<
//   NavigatorBottomParamList,
//   'Home'
// >;

interface IRenderTab {
  focused?: boolean;
  color: string;
  size?: number;
}

// const iconFocused: FC = ({nameIconBottomBar}) => {
//   // if (nameIconBottomBar)
//   return (
//     <>
//       <Spacer width={8} />
//       <Text style={{color: Colors.primary, fontWeight: 'normal', fontSize: 14}}>
//         {nameIconBottomBar}
//       </Text>
//     </>
//   );
// };

const renderTabIconHome: FC<IRenderTab> = ({color, focused}) => {
  return (
    <>
      {focused ? (
        <View
          style={{
            width: width / 3.2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: Colors.black,
            ...cornerCustom(24),
            backgroundColor: Colors.secondary,
            paddingHorizontal: 14,
            paddingVertical: 8,
          }}>
          <DiscoverIcon width={24} color={color} />
          <Spacer width={5} />
          <Text
            style={{
              color: Colors.primary,
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            Discover
          </Text>
        </View>
      ) : (
        <DiscoverIcon width={24} color={color} />
      )}
    </>
  );
};

const renderTabIconChat: FC<IRenderTab> = ({color, focused}) => {
  return (
    <>
      {focused ? (
        <View
          style={{
            width: width / 3.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: Colors.black,
            ...cornerCustom(24),
            backgroundColor: Colors.secondary,
            paddingHorizontal: 14,
            paddingVertical: 8,
          }}>
          <ChatIcon width={24} color={color} />
          <Spacer width={5} />
          <Text
            style={{
              color: Colors.primary,
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            Chat
          </Text>
        </View>
      ) : (
        <ChatIcon width={24} color={color} />
      )}
    </>
  );
};

const renderTabIconCard: FC<IRenderTab> = ({color, focused}) => {
  return (
    <>
      {focused ? (
        <View
          style={{
            width: width / 3.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: Colors.black,
            ...cornerCustom(24),
            backgroundColor: Colors.secondary,
            paddingHorizontal: 14,
            paddingVertical: 8,
          }}>
          <CardIcon width={24} color={color} />
          <Spacer width={5} />
          <Text
            style={{
              color: Colors.primary,
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            Card
          </Text>
        </View>
      ) : (
        <CardIcon width={24} color={color} />
      )}
    </>
  );
};

const renderTabIconSetting: FC<IRenderTab> = ({color, focused}) => {
  return (
    <>
      {focused ? (
        <View
          style={{
            width: width / 3.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: Colors.black,
            ...cornerCustom(24),
            backgroundColor: Colors.secondary,
            paddingHorizontal: 14,
            paddingVertical: 8,
          }}>
          <SettingIcon width={24} color={color} />
          <Spacer width={5} />
          <Text
            style={{
              color: Colors.primary,
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            Setting
          </Text>
        </View>
      ) : (
        <SettingIcon width={24} color={color} />
      )}
    </>
  );
};

interface IMainTabNav {}

const MainTabNavigator: FC<IMainTabNav> = () => {
  return (
    <TabNav.Navigator
      backBehavior="initialRoute"
      initialRouteName="Discover"
      screenOptions={{
        lazy: true,
        headerShown: true,
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
        name="Setting"
        component={Setting}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) =>
            renderTabIconSetting({color, focused}),
        }}
      />
    </TabNav.Navigator>
  );
};

export default MainTabNavigator;

// const styles = StyleSheet.create({
//   regular: {},
//   focused: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: Colors.black,
//     ...cornerCustom(24),
//     backgroundColor: Colors.secondary,
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//   },
// });

// const IconBottomTab = {
//   regular: styles.regular,
//   focused: styles.focused,
// };
