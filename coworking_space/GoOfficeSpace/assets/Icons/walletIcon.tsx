import React from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './iconProps';
import SvgWrapper from '@components/Atoms/SvgWrapper';

export function WalletIcon({color, width = 20, height}: IconProps) {
  return (
    <SvgWrapper
      aspectRatio={20 / 18}
      width={width}
      height={height}
      children={
        <Svg width="100%" height="100%" viewBox="0 0 20 18" fill="none">
          <Path
            d="M18.5 4.28V2C18.5 0.9 17.6 0 16.5 0H2.5C1.39 0 0.5 0.9 0.5 2V16C0.5 17.1 1.39 18 2.5 18H16.5C17.6 18 18.5 17.1 18.5 16V13.72C19.09 13.37 19.5 12.74 19.5 12V6C19.5 5.26 19.09 4.63 18.5 4.28ZM17.5 6V12H10.5V6H17.5ZM2.5 16V2H16.5V4H10.5C9.4 4 8.5 4.9 8.5 6V12C8.5 13.1 9.4 14 10.5 14H16.5V16H2.5Z"
            fill={color}
          />
        </Svg>
      }
    />
  );
}

export default WalletIcon;
