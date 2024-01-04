import React, {FC} from 'react';
import SvgWrapper from '@components/Atoms/SvgWrapper';
import {Path, Svg} from 'react-native-svg';
import IconProps from './iconProps';

export const Notification: FC<IconProps> = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={24 / 24}
      children={
        //viewBox === aspectRatio
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M12.02 2.91C8.71003 2.91 6.02003 5.6 6.02003 8.91V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <Path
            d="M13.87 3.2C12.6607 2.85559 11.3793 2.85559 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.33818 20.6173 9.02181 19.8552 9.02002 19.06"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
          />
        </Svg>
      }
    />
  );
};

export default Notification;
