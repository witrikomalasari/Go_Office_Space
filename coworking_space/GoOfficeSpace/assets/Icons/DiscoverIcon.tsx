import SvgWrapper from '@components/Atoms/SvgWrapper';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import IconProps from './iconProps';

const DiscoverIcon: FC<IconProps> = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={25 / 24}
      children={
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <Path
            d="M13 22H4.57997C3.41997 22 2.46997 21.07 2.46997 19.93V5.08998C2.46997 2.46998 4.41997 1.27998 6.80997 2.44998L11.25 4.62998C12.21 5.09998 13 6.34998 13 7.40998V22ZM13 22H19.31C21.47 22 22.47 21 22.47 18.84V15.06C22.47 14.99 22.47 14.93 22.46 14.87C22.4 12.95 21.32 12.27 20 11.98L17.97 11.53L13.47 10.52L13 10.42V22ZM5.99997 8.99998H9.46997M5.99997 13H9.46997"
            stroke={color} //"#E65605"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M17.97 11.53V14.75M17.97 11.53L13.47 10.52V14.75C13.47 15.99 14.48 17 15.72 17C16.96 17 17.97 15.99 17.97 14.75M17.97 11.53L20 11.98C21.32 12.27 22.4 12.95 22.46 14.87C22.4296 15.4441 22.1805 15.9847 21.7639 16.3808C21.3473 16.777 20.7948 16.9985 20.22 17C18.98 17 17.97 15.99 17.97 14.75"
            stroke={color} //"#E65605"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      }
    />
  );
};

export default DiscoverIcon;
