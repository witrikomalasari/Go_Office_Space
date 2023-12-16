import {size, typeFont, weight} from '@utils/fonts';
import {TextStyle} from 'react-native';

export type GoOfficeTextType = 'normalText' | 'heading' | 'subTitle';

const normalText: TextStyle = {
  fontWeight: weight.normal,
  fontFamily: typeFont.poppins,
  fontSize: size.font14,
  lineHeight: 21,
};

const heading: TextStyle = {
  fontWeight: weight.bold,
  fontFamily: typeFont.poppinsBold,
  fontSize: size.font22,
  lineHeight: 33,
};

const subTitle: TextStyle = {
  fontWeight: weight.medium,
  fontFamily: typeFont.poppinsMedium,
  fontSize: size.font14,
  lineHeight: 21,
};

export const Preset: {[id: string]: TextStyle} = {
  normalText,
  heading,
  subTitle,
};

export const weightPreset: {[id: string]: TextStyle} = {
  normal: {fontWeight: weight.normal},
  medium: {fontWeight: weight.medium},
  semiBold: {fontWeight: weight.semiBold},
  bold: {fontWeight: weight.bold},
};
