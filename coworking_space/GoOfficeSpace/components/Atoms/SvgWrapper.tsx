import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';

interface ISVGWrapper {
  width?: number;
  height?: number;
  aspectRatio?: number;
  children: ReactNode;
}

const SvgWrapper: FC<ISVGWrapper> = ({
  width,
  height,
  aspectRatio,
  children,
}) => {
  return (
    <View style={{width, height}}>
      <View style={{aspectRatio}}>{children}</View>
    </View>
  );
};

export default SvgWrapper;
