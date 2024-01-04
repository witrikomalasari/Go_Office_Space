import CardIcon from '@assets/Icons/CardIcon';
import ChatIcon from '@assets/Icons/ChatIcon';
import DiscoverIcon from '@assets/Icons/DiscoverIcon';
import SettingIcon from '@assets/Icons/SettingIcon';
import Spacer from '@components/Atoms/Spacer';
import {Colors} from '@theme/colors';
import React, {FC, ReactNode} from 'react';
import {Dimensions, Text, View, ViewStyle} from 'react-native';
import {cornerCustom} from '@theme/radiusLine';

interface IRenderTab {
  focused?: boolean;
  color?: string;
  size?: number;
}

interface IRenderTabIcon extends IRenderTab {
  icon?: ReactNode;
  text?: string;
}

const {width} = Dimensions.get('window');

export const renderTabIconHome: FC<IRenderTabIcon> = ({color, focused}) => {
  return renderTabIcon({
    color,
    focused,
    icon: <DiscoverIcon width={24} color={color} />,
    text: 'Discover',
  });
};

export const renderTabIconChat: FC<IRenderTabIcon> = ({color, focused}) => {
  return renderTabIcon({
    color,
    focused,
    icon: <ChatIcon width={24} color={color} />,
    text: 'Chat',
  });
};

export const renderTabIconCard: FC<IRenderTabIcon> = ({color, focused}) => {
  return renderTabIcon({
    color,
    focused,
    icon: <CardIcon width={24} color={color} />,
    text: 'Card',
  });
};

export const renderTabIconProfile: FC<IRenderTabIcon> = ({color, focused}) => {
  return renderTabIcon({
    color,
    focused,
    icon: <SettingIcon width={24} color={color} />,
    text: 'Profile',
  });
};

// refactor redudant
const renderTabIcon: FC<IRenderTabIcon> = ({focused, icon, text}) => {
  return (
    <View
      style={{
        ...baseTabIconStyle,
        backgroundColor: focused ? Colors.secondary : 'transparent',
      }}>
      {icon}
      {focused && <Spacer width={5} />}
      {focused && (
        <Text
          style={{
            color: Colors.primary,
            fontWeight: 'bold',
            fontSize: 14,
          }}>
          {text}
        </Text>
      )}
    </View>
  );
};

const baseTabIconStyle: ViewStyle = {
  width: width / 3.5,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: Colors.black,
  ...cornerCustom(24),
  paddingHorizontal: 14,
  paddingVertical: 8,
};
