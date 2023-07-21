import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../constants/colors';
import AppButton from '../../../components/appButton';
import {hp, nf, wp} from '../../../helper/metrics';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {selectUser, setUser} from '../../../redux/slices/authSlice';
import auth from '@react-native-firebase/auth';
import AppLoader from '../../../components/loader';
import {imageAddress} from '../../../utils/constant';

const Drawer = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Logout', onPress: () => logOutFuction(), style: 'destructive'},
    ]);
  };

  const logOutFuction = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        dispatch(setUser(null));
        console.log('User signed out!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <View style={styles.upperView}>
        <View style={styles.imgView}>
          <Image source={{uri: imageAddress.dummyUser}} style={styles.img} />
        </View>
        <Text style={styles.text}>{user?.email}</Text>
        <Text style={styles.text}>{user?.uid}</Text>
      </View>
      <View style={styles.container}>
        <AppButton
          onPress={() => handleLogout()}
          style={{paddingHorizontal: wp(5)}}
          title="Logout"
        />
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
      <AppLoader visible={loading} />
    </>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteText,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  version: {
    color: colors.black,
    marginBottom: 20,
  },
  text: {fontSize: nf(15), fontWeight: 'bold', marginTop: hp(1)},
  upperView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
    paddingHorizontal: wp(5),
  },
  imgView: {
    height: hp(15),
    width: hp(15),
    overflow: 'hidden',
    borderRadius: hp(8),
  },
  img: {height: null, width: null, flex: 1},
});
