/**
 * Row Component
 * @flow
 * @format
 */

import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

const Row = (props: ViewProps) => {
  return (
    <View {...props} style={[styles.rowContainer, props.style]}>
      {props.children}
    </View>
  );
};

export {Row};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
});
