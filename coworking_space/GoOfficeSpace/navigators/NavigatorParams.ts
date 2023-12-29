import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamLIst} from './MainNavigator';

//===TUK TYPE DATA PROP DAN ROUTE.PARAM================================================================================================
// orderScreen
// export interface IOrderCart {
//   // declare type untuk data yg di route.params orderScreen
//   cartOrders: CartItem[];
//   totalAmount: number;
// }

// ====== ROUTE.PARAM SCREEN DAN USE NAVIGATION ============================================================

// ini tuk keperluan ROUTES.PARAMS digunakan di navigation.navigate(kirim data) sperti snippet dari interface IOrderCart
// ditaro di screen OrderScreen (ketik:const route = useRoute<AddNewOrderScreenRouteProps>();)
// export type AddNewOrderScreenRouteProps = RouteProp<
//   NavigatorParamList,
//   'OrdersScreen'
// >;

// tuk keperluan navigation, hubungnya ke useBaseNavigation
export type BaseNavigatorProp = NativeStackNavigationProp<NavigatorParamLIst>;
