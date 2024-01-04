import React, {ComponentProps, Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from './TabNavigator';
import Login from '@screens/Login/Login';
import {Booking, Checkout, Detail, Success} from '@screens/index';
import {NavigationContainer} from '@react-navigation/native';

// type navigator param list efeknya ke properties stack screen yaitu name
export type NavigatorParamLIst = {
  Login: undefined;
  MainTabNavigator: undefined;
  Detail: undefined;
  Booking: undefined;
  Checkout: undefined;
  Success: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamLIst>();

//================== NAVIGATION CONTAINER ==============================================================

export const AppStack = () => {
  const Route = (
    <Fragment>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Success" component={Success} />
    </Fragment>
  );

  const getCurrentRoutes = () => {
    return Route;
  };

  return <Stack.Navigator>{getCurrentRoutes()}</Stack.Navigator>;
};

interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {} // typeof itu tuk snipet yang akan dikeluarkanoleh navigationCOntainer

export const MainNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

MainNavigator.displayName = 'MainNavigator'; // ini penamaan untuk navigator param list
