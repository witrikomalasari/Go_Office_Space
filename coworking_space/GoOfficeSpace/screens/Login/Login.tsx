import {Notification, WalletIcon} from '@assets/Icons';
import {images} from '@assets/Images';
import HeaderApp from '@components/Atoms/HeaderApp';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

const Login = () => {
  const navigation = useBaseNavigation();

  return (
    <>
      <View>
        <HeaderApp
          iconProfile={<Image source={images.profileWoman} />}
          title="BIODATA"
          subTitle="DFADFADFAFDAFAFFADASF"
          WalletIcon={<WalletIcon color={'yellow'} width={24} height={24} />}
          Notification={
            <Notification color={'yellow'} width={24} height={24} />
          }
        />
        <Text style={{color: 'purple'}}>card search</Text>
        <Text style={{color: 'purple'}}>card popular</Text>
        <Text style={{color: 'purple'}}>card newsworthy</Text>
      </View>
      <View>
        <Pressable
          style={{
            paddingVertical: 15,
            paddingHorizontal: 16,
            alignItems: 'center',
            backgroundColor: 'red',
          }}
          onPress={() => navigation.navigate('MainTabNavigator')}>
          <Text style={{color: 'blue'}}>TOMBOL</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Login;
