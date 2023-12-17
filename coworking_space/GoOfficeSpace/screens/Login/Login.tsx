import {Notification, WalletIcon} from '@assets/Icons';
import {images} from '@assets/Images';
import HeaderApp from '@components/Atoms/HeaderApp';
import React from 'react';
import {Image, Text, View} from 'react-native';

const Login = () => {
  return (
    <View>
      <HeaderApp
        iconProfile={<Image source={images.profileWoman} />}
        title="BIODATA"
        subTitle="DFADFADFAFDAFAFFADASF"
        WalletIcon={<WalletIcon color={'yellow'} width={24} height={24} />}
        Notification={<Notification color={'yellow'} width={24} height={24} />}
      />
      <Text>card search</Text>
      <Text>card popular</Text>
      <Text>card newsworthy</Text>
    </View>
  );
};

export default Login;
