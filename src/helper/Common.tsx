import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize} from '../constants/fontSizes';

export const ErrorText = (props: TextProps) => {
  return (
    <Text {...props} style={[Style.ErrorText, props.style]}>
      {props.children}
    </Text>
  );
};

const Style = StyleSheet.create({
  ErrorText: {
    fontSize: fontSize.FONT_SIZE_14,
    color: colors.errorColor,
  },
});
