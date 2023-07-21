import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  View,
  TextInputProps,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
  TouchableOpacity,
  Text,
} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize} from '../constants/fontSizes';
import {ImageUrlConstants} from '../constants/imageUrl';
import {nf, wp, hp, wpx, hpx} from '../helper/metrics';
import {Row} from './row';
import {ErrorText} from '../helper/Common';

interface Props extends TextInputProps {
  error?: string;
  title?: string;
  icon?: ImageSourcePropType;
  passEyeIcon?: boolean;
  inputContainerStyle?: ViewStyle;
  placeholderTextColor?: any;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  logoStyle?: any;
  addNav?: any;
}

const AppInput = ({
  inputContainerStyle,
  inputStyle,
  error,
  icon,
  title,
  placeholderTextColor,
  passEyeIcon,
  ...props
}: Props) => {
  const [eye, setEye] = useState<boolean>(true);
  return (
    <View>
      {title ? <Text style={styles.titleText}>{title}</Text> : null}
      <View style={[styles?.inputContainerStyle, inputContainerStyle]}>
        {icon && <Image style={styles.iconStyle} source={icon} />}
        <Row style={{flex: 1, alignItems: 'center'}}>
          <TextInput
            secureTextEntry={passEyeIcon && eye ? true : false}
            style={[styles?.inputStyle, inputStyle]}
            placeholderTextColor={placeholderTextColor || colors.signInwith}
            {...props}
          />
          {passEyeIcon && (
            <TouchableOpacity onPress={() => setEye(!eye)}>
              <Image
                source={
                  eye ? ImageUrlConstants?.eyeClose : ImageUrlConstants?.eyeOpen
                }
                style={{
                  marginRight: 10,
                  tintColor: eye
                    ? colors?.inputBorderColor
                    : colors?.primaryColor,
                }}
              />
            </TouchableOpacity>
          )}
        </Row>
      </View>
      {!!error && (
        <ErrorText
          style={{
            marginTop: hp(0.2),
            fontSize: fontSize.FONT_SIZE_12,
          }}>
          {error}
        </ErrorText>
      )}
    </View>
  );
};

export {AppInput};
const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hpx(45),
    backgroundColor: colors.backgroundColor,
    borderColor: colors.inputBorderColor,
    borderWidth: hpx(1.5),
    borderRadius: hpx(10),
    marginTop: hp(0.5),
  },

  inputStyle: {
    flex: 1,
    // height: hpx(42),
    paddingHorizontal: wpx(10),
    borderRadius: nf(4),
    fontSize: fontSize.FONT_SIZE_12,
  },
  iconStyle: {
    marginLeft: wpx(10),
    width: hp(2),
    height: hp(2),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  titleText: {
    color: colors.black_dark,
    fontSize: fontSize.FONT_SIZE_12,
    marginTop: hp(1.5),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hpx(8),
  },
  rowStyle: {
    alignItems: 'center',
    // justifyContent: 'space-between',
    flex: 1,
    // borderWidth: 1,
  },
  backIconContainer: {
    backgroundColor: colors.whiteText,
    height: hpx(40),
    width: hpx(40),
    borderRadius: hpx(20),

    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconStyle: {
    resizeMode: 'contain',
  },
});
