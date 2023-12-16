import {ColorValue, TextProps, TextStyle} from 'react-native';
import {GoOfficeTextType} from './GoOfficePreset';

export interface BaseProps extends TextProps {
  /**
   * Size of font size.
   * @default "12"
   * @type number | string
   * @memberof BaseProps
   * @example
   * <GoOfficeText size={16}>Some text</GoOfficeText>
   * <GoOfficeText size="16">Some text</GoOfficeText>
   **/
  fontSize?: number | string;

  /**
   * Font Weight of the Text.
   * @default "normal"
   * @type "normal" | "medium" | "semiBold" | "bold" | "extraBold"
   * @memberof BaseProps
   * @example
   * <GoOfficeText fontWeight="normal">Some text</GoOfficeText>
   * **/

  fontWeight?: 'normal' | 'medium' | 'semiBold' | 'bold';

  /**
   *  The purpose of text component.
   *  To Select Fixed Style of text.
   * @memberof BaseProps
   * @example
   * <GoOfficeText textType="body">Some text</GoOfficeText>
   * **/
  textType?: GoOfficeTextType;

  /**
   * Set Color of the text manually.
   * @memberof ColorValue React Native
   * @example
   * <GoOfficeText color="#343A40">Some text</GoOfficeText>
   * **/
  fontColors?: ColorValue;

  /**
   * set text line height manually
   * @example
   * <GoOfficeText lineHeight={20}>Some text</GoOfficeText>
   * **/
  textLineHeight?: number;

  /**
   * To set text style based on React Native Text Props
   * @memberof TextStyle
   * <GoOfficeText style={{numberOfLines: 1}}>Some text</GoOfficeText>
   */
  style?: TextStyle;

  /**
   * To Debug Style output in console
   */
  debug?: boolean;
}
