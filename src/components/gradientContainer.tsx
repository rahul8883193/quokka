import React from 'react';
import {StatusBar, StatusBarStyle, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../constants/colors';
import {hp, wp, wpx} from '../helper/metrics';

export interface Props {
  start?: any;
  end?: any;
  colorsArray?: any;
  style?: ViewStyle;
  children: any;
  safeAreaStyle?: ViewStyle;
  barStyle?: StatusBarStyle;
  mainViewStyle?: ViewStyle;
}
export default function GradientContainer(props: Props) {
  const {
    start,
    end,
    colorsArray,
    style,
    safeAreaStyle,
    children,
    barStyle,
    mainViewStyle,
  } = props;
  return (
    <>
      <View style={[{flex: 1, backgroundColor: colors.whiteText}, style]}>
        <SafeAreaView />
        <LinearGradient
          colors={
            colorsArray || [
              colors.gredientTop,
              colors.gredientTop,
              colors.whiteText,
            ]
          }
          style={[
            {
              height: hp(40),
              width: wp(100),
              position: 'absolute',
              top: 0,
            },
          ]}
        />

        {/* <StatusBar barStyle={'dark-content' || barStyle} /> */}
        <View style={[{flex: 1, paddingHorizontal: wpx(18)}, mainViewStyle]}>
          {children}
        </View>
      </View>
    </>
  );
}
