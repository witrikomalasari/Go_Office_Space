import SvgWrapper from '@components/Atoms/SvgWrapper';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './iconProps';

export const ArrowLeft = ({width, height, color}: IconProps) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={24 / 24}
      children={
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M9.57 18.07L3.5 12L9.57 5.93001M20.5 12L3.67 12"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default ArrowLeft;
