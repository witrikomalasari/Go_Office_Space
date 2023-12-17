import SvgWrapper from '@components/Atoms/SvgWrapper';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './iconProps';

const SettingIcon: FC<IconProps> = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={25 / 24}
      children={
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <Path
            d="M12.5 15C13.2956 15 14.0587 14.6839 14.6213 14.1213C15.1839 13.5587 15.5 12.7956 15.5 12C15.5 11.2044 15.1839 10.4413 14.6213 9.87868C14.0587 9.31607 13.2956 9 12.5 9C11.7044 9 10.9413 9.31607 10.3787 9.87868C9.81607 10.4413 9.5 11.2044 9.5 12C9.5 12.7956 9.81607 13.5587 10.3787 14.1213C10.9413 14.6839 11.7044 15 12.5 15Z"
            stroke={color} //"#0E0E0E"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M2.5 12.88V11.12C2.5 10.08 3.35 9.22 4.4 9.22C6.21 9.22 6.95 7.94 6.04 6.37C5.52 5.47 5.83 4.3 6.74 3.78L8.47 2.79C9.26 2.32 10.28 2.6 10.75 3.39L10.86 3.58C11.76 5.15 13.24 5.15 14.15 3.58L14.26 3.39C14.73 2.6 15.75 2.32 16.54 2.79L18.27 3.78C19.18 4.3 19.49 5.47 18.97 6.37C18.06 7.94 18.8 9.22 20.61 9.22C21.65 9.22 22.51 10.07 22.51 11.12V12.88C22.51 13.92 21.66 14.78 20.61 14.78C18.8 14.78 18.06 16.06 18.97 17.63C19.49 18.54 19.18 19.7 18.27 20.22L16.54 21.21C15.75 21.68 14.73 21.4 14.26 20.61L14.15 20.42C13.25 18.85 11.77 18.85 10.86 20.42L10.75 20.61C10.28 21.4 9.26 21.68 8.47 21.21L6.74 20.22C6.3041 19.969 5.98558 19.5553 5.85435 19.0698C5.72311 18.5842 5.78988 18.0664 6.04 17.63C6.95 16.06 6.21 14.78 4.4 14.78C3.35 14.78 2.5 13.92 2.5 12.88Z"
            stroke={color} //"#0E0E0E"
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

export default SettingIcon;
