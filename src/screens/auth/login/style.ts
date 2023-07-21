import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {fontSize} from '../../../constants/fontSizes';
import {nf, wp, hp, wpx, hpx} from '../../../helper/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    marginTop: hp(5),
    fontSize: nf(21),

    alignSelf: 'center',
    color: colors.black_dark,
  },
  subTitleStyle: {
    fontSize: fontSize.FONT_SIZE_13,
    color: colors.lightBlack,
    textAlign: 'left',
    marginTop: hpx(5),
    alignSelf: 'center',
    marginBottom: hpx(29),
  },
  tabContainer: {
    height: hpx(30),
    alignItems: 'center',
    marginBottom: hpx(18),
    borderBottomWidth: hpx(1),
    borderBottomColor: colors.borderColor,
  },
  activeTabContainer: {
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: hpx(3),
    height: hpx(30),
    alignItems: 'center',
    top: hpx(1.5),
  },
  inactiveTabContainer: {
    height: hpx(30),
    alignItems: 'center',
    top: hpx(1.5),
  },

  phoneNumber: {
    marginLeft: wpx(16),
  },

  activeLabelStyle: {
    fontSize: nf(16),

    color: colors.primaryColor,
  },
  inActiveLabelStyle: {
    fontSize: nf(14),

    color: colors.textColor,
  },
  rememberAndForgotPasswordContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hpx(15),
  },
  rememberDetailContainerStyle: {
    alignItems: 'center',
  },
  emptyCheckBoxStyles: {
    height: hpx(16),
    width: hpx(16),
    borderRadius: hp(0.5),
    backgroundColor: colors.emptyCheckBoxColor,
  },
  rememberMeTextStyle: {
    marginLeft: wpx(9),
    fontSize: nf(14),
    flex: 1,
  },
  forgetPassword: {
    color: colors.secondaryColor,
    fontSize: nf(14),
  },
  donthaveAccountContainer: {
    // marginTop: hpx(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hpx(15),
  },
  donthaveAccountLabelStyle: {
    fontSize: nf(14),
  },
  signupLabelStyle: {
    fontSize: nf(14),
    color: colors.primaryColor,
    marginLeft: wp(1),
  },
  phoneInfo: {
    marginTop: hpx(14),
    color: colors?.loginDes,
    fontSize: nf(13),
  },
  phoneCode: {
    color: colors?.textColor,
    fontSize: nf(14),
  },
  phoneCodeContainer: {
    height: hpx(32),
    width: wpx(75),
    borderRadius: nf(4),
    backgroundColor: colors.phoneCodeBackground,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: wpx(6),
  },
  logo: {
    height: wp(30),
    width: wp(30),
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: hpx(53),
    // backgroundColor:'red'
  },
  orLabelStyle: {
    color: colors.signInwith,
    fontSize: nf(13),
    marginHorizontal: wp(2),
  },
  separatorStyle: {
    height: hp(0.2),
    flex: 1,
    backgroundColor: colors.inputBorderColor,
  },
  orContainerStyle: {
    alignItems: 'center',
    marginTop: hpx(17),
    // marginBottom: hpx(20),
  },
  socialContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hpx(18),
  },
  facebookTextStyle: {
    fontSize: fontSize?.FONT_SIZE_14,
    color: colors?.whiteText,
    marginLeft: wpx(10),
  },
  socialViewStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors?.blue,
    // height: hpx(45)
    paddingVertical: hpx(4),
    width: wpx(147.31),
    borderRadius: wpx(10),
    paddingHorizontal: wpx(5),
  },
});
