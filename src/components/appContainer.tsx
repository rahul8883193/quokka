import React, {Children} from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  ViewStyle,
  StatusBarStyle,
} from 'react-native';
import {colors} from '../constants/colors';

import {wpx} from '../helper/metrics';

interface Props {
  children?: any;
  barStyle?: StatusBarStyle;
  safeAreaStyle?: ViewStyle;
  mainViewStyle?: ViewStyle;
}

const AppContainer: React.FC<Props> = ({
  children,
  barStyle,
  safeAreaStyle,
  mainViewStyle,
}: any) => {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.whiteText,
        },
        safeAreaStyle,
      ]}>
      <StatusBar barStyle={'dark-content' || barStyle} />
      <View style={[{flex: 1, paddingHorizontal: wpx(34)}, mainViewStyle]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default AppContainer;
