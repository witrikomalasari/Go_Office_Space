import {ViewStyle} from 'react-native';

// Define a type for corner styles
type CornerStyles = {
  borderTopLeftRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
};

// Function to generate corner styles based on size
const getCornerStyles = (size: number): CornerStyles => ({
  borderTopLeftRadius: size,
  borderBottomLeftRadius: size,
  borderBottomRightRadius: size,
});

export const cornerCustom = (size: number) => {
  return getCornerStyles(size) as ViewStyle;
};
