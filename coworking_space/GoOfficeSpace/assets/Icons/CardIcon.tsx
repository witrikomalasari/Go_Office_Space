import SvgWrapper from '@components/Atoms/SvgWrapper';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './iconProps';

const CardIcon: FC<IconProps> = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={25 / 24}
      children={
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <Path
            d="M2.5 8.505H22.5M6.5 16.505H8.5M11 16.505H15"
            stroke={color} // "#0E0E0E"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M6.94 3.505H18.05C21.61 3.505 22.5 4.385 22.5 7.895V16.105C22.5 19.615 21.61 20.495 18.06 20.495H6.94C3.39 20.505 2.5 19.625 2.5 16.115V7.895C2.5 4.385 3.39 3.505 6.94 3.505Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default CardIcon;
