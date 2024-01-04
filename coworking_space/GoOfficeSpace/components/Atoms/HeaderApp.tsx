import React, {FC, ReactNode} from 'react';
import {Pressable, Text, View} from 'react-native';

interface IHeaderApp {
  iconProfile?: ReactNode;
  title?: string;
  subTitle?: string;
  ArrowLeft?: ReactNode;
  WalletIcon?: ReactNode;
  Notification?: ReactNode;
  MenuIcon?: ReactNode;
}
const HeaderApp: FC<IHeaderApp> = ({
  iconProfile,
  title,
  subTitle,
  ArrowLeft,
  WalletIcon,
  Notification,
  MenuIcon,
}) => {
  return (
    <View style={{backgroundColor: 'red'}}>
      {iconProfile}
      <Pressable>{ArrowLeft}</Pressable>
      <View>
        <Text style={{color: 'black'}}>{title}</Text>
        <Text style={{color: 'black'}}>{subTitle}</Text>
      </View>
      <Pressable>
        {WalletIcon}
        {Notification}
        {MenuIcon}
      </Pressable>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// });

export default HeaderApp;
