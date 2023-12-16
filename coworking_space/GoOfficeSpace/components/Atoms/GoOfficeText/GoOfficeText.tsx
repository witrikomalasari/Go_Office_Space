import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import {BaseProps} from './GoOfficeText.Props';
import {Preset, weightPreset} from './GoOfficePreset';

export const GoOfficeText: FC<BaseProps> = ({
  numberOfLines,
  ellipsizeMode,
  style,
  children,
  debug,
  textType,
  fontSize,
  fontWeight,
  fontColors,
  textLineHeight,
}) => {
  let fontStyle: TextStyle = {};

  // add jenis TextType dimaasukan ke function Preset
  if (textType) fontStyle = {...fontStyle, ...Preset[textType]};

  // add baru jenis fontSize
  if (fontSize) fontStyle = {...fontStyle, fontSize: Number(fontSize)};

  // add jenis font weight dimasukan ke function weightPreset
  if (fontWeight) fontStyle = {...fontStyle, ...weightPreset[fontWeight]};

  // add baru tuk color font
  if (fontColors) fontStyle = {...fontStyle, color: fontColors};

  // add baru tuk lineHeight
  if (textLineHeight) fontStyle = {...fontStyle, lineHeight: textLineHeight};

  // PRIMARY STYPE/ default most priority is style props
  fontStyle = {...fontStyle, ...style};

  if (debug) console.log(fontStyle);

  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={fontStyle}>
      {children}
    </Text>
  );
};

export default GoOfficeText;
