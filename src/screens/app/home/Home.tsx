import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {Row} from '../../../components/row';
import {ImageUrlConstants} from '../../../constants/imageUrl';
import {hp, nf, wp} from '../../../helper/metrics';
import {useNavigation} from '@react-navigation/native';
import {imageAddress} from '../../../utils/constant';
import {colors} from '../../../constants/colors';

const Home = () => {
  const navigation = useNavigation<any>();
  const renderItem = () => {
    return (
      <View style={styles.mainView}>
        <Row style={styles.row}>
          <View style={styles.imgView1}>
            <Image source={{uri: imageAddress.dummyUser}} style={styles.img1} />
          </View>
          <View style={{marginHorizontal: wp(4)}}>
            <Text style={styles.headingText}>Quokka labs</Text>
            <Text style={{fontSize: nf(14), flex: 1, color: colors.black_1}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text>
            <Text style={{marginVertical: hp(1)}}>5 hours ago</Text>
          </View>
        </Row>
        <View style={styles.mainImgView}>
          <Image source={{uri: imageAddress.image}} style={styles.img} />
        </View>
      </View>
    );
  };
  return (
    <View>
      <Row style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.imgView}>
          <Image style={styles.img} source={ImageUrlConstants.hamburger} />
        </TouchableOpacity>
        <Text style={styles.homeText}>Home</Text>
        <View style={styles.exView}></View>
      </Row>
      <View>
        <FlatList
          data={Array(10).fill('')}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: hp(15)}}
        />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  headerRow: {
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginVertical: hp(1),
    justifyContent: 'space-between',
  },
  imgView: {height: hp(4), width: hp(4), overflow: 'hidden'},
  img: {height: null, width: null, flex: 1},
  homeText: {fontSize: nf(20), fontWeight: 'bold', color: '#000000'},
  exView: {height: hp(4), width: hp(4)},
  imgView1: {
    height: hp(6),
    width: hp(6),
    overflow: 'hidden',
    borderRadius: hp(5),
  },
  img1: {height: null, width: null, flex: 1},
  mainImgView: {height: hp(30), width: wp(100), overflow: 'hidden'},
  mainView: {marginBottom: 10},
  row: {marginHorizontal: wp(3)},
  headingText: {fontSize: nf(18), fontWeight: 'bold', color: '#000000'},
});
