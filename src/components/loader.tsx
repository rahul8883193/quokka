import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';

import {
  SkypeIndicator,
  // @ts-ignore
} from 'react-native-indicators';
import {colors} from '../constants/colors';

export interface Props {
  visible: boolean;
}

export default function AppLoader(props: Props) {
  const {visible} = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={visible}
      style={{zIndex: 1100}}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <SkypeIndicator color={colors.primaryColor} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
});
