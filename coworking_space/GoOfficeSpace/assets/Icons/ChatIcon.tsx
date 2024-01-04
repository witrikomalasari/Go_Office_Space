import SvgWrapper from '@components/Atoms/SvgWrapper';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './iconProps';

const ChatIcon: FC<IconProps> = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={25 / 24}
      children={
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <Path
            d="M18.97 16.83L19.36 19.99C19.46 20.82 18.57 21.4 17.86 20.97L13.67 18.48C13.21 18.48 12.76 18.45 12.32 18.39C13.078 17.5113 13.4966 16.3904 13.5 15.23C13.5 12.39 11.04 10.09 8.00003 10.09C6.84003 10.09 5.77003 10.42 4.88003 11C4.85003 10.75 4.84003 10.5 4.84003 10.24C4.84003 5.69 8.79003 2 13.67 2C18.55 2 22.5 5.69 22.5 10.24C22.5 12.94 21.11 15.33 18.97 16.83Z"
            stroke={color} // "#0E0E0E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M13.5 15.23C13.5 16.42 13.06 17.52 12.32 18.39C11.33 19.59 9.76 20.36 8 20.36L5.39 21.91C4.95 22.18 4.39 21.81 4.45 21.3L4.7 19.33C3.36 18.4 2.5 16.91 2.5 15.23C2.5 13.47 3.44 11.92 4.88 11C5.77 10.42 6.84 10.09 8 10.09C11.04 10.09 13.5 12.39 13.5 15.23Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          {/* <circle cx="20.5" cy="5" r="4" fill="#E65605" /> */}
        </Svg>
      }
    />
  );
};

export default ChatIcon;
