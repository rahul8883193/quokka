import React from 'react';
import SnackBarManager from '../utils/SnackBarManager';
import {colors} from '../constants/colors';
import DropdownAlert from 'react-native-dropdownalert';

export const SnackBar = () => {
  return (
    <DropdownAlert
      ref={(ref: any) => SnackBarManager.setSnackBar(ref)}
      useNativeDriver={true}
      titleStyle={{
        color: colors.whiteText,
      }}
      messageStyle={{
        color: colors.whiteText,
      }}
      successColor={colors.primaryColor}
      inactiveStatusBarStyle={'dark-content'}
      inactiveStatusBarBackgroundColor={colors.borderColor}
    />
  );
};
