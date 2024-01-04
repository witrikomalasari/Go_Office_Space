import React, {FC} from 'react';
import {View} from 'react-native';

interface ISpacerProps {
  width?: number;
  height?: number;
}

const Spacer: FC<ISpacerProps> = ({width, height}) => {
  return <View style={{width, height}} />;
};

export default Spacer;
