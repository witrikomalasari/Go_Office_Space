import {BaseNavigatorProp} from '@navigators/NavigatorParams';
import {useNavigation} from '@react-navigation/native';

export const useBaseNavigation = () => useNavigation<BaseNavigatorProp>();
