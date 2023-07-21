/**
 * Button Component
 * @flow
 * @format
 */

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize} from '../constants/fontSizes';
import {hpx, wp, wpx} from '../helper/metrics';
import {ImageUrlConstants} from '../constants/imageUrl';

interface Props extends TouchableOpacityProps {
  title: string;
  titleStyle?: TextStyle;
  buttonImage?: boolean;
  imageWithText?: ImageSourcePropType;
}

const AppButton = ({
  title,
  titleStyle,
  buttonImage,
  imageWithText,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={props?.activeOpacity || 0.7}
      style={[
        styles.container,
        {
          backgroundColor: props?.disabled
            ? colors?.signInwith
            : colors?.primaryColor,
        },
        props?.style,
      ]}>
      <Text style={[styles.textStyle, titleStyle]}>{title}</Text>

      {buttonImage ? (
        <Image style={styles.signInIc} source={ImageUrlConstants?.signInIcon} />
      ) : null}
    </TouchableOpacity>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    borderRadius: wpx(10),
    alignItems: 'center',
    height: hpx(45),
    justifyContent: 'center',
    marginBottom: hpx(10),
  },
  textStyle: {
    fontSize: fontSize.FONT_SIZE_14,
    color: colors.whiteText,
    marginLeft: wp(1),
  },
  signInIc: {
    position: 'absolute',
    right: wpx(5),
    height: hpx(35),
    width: hpx(35),
  },
});
