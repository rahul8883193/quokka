import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {fontSize} from '../../../constants/fontSizes';
import {nf, wp, hp, wpx, hpx} from '../../../helper/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    flexGrow: 1,
  },

  activeLabelStyle: {
    fontSize: nf(17),
    paddingHorizontal: wp(3),
    color: colors.primaryColor,
  },
  inActiveLabelStyle: {
    fontSize: nf(15),
    paddingHorizontal: wp(2),
    // marginTop:hp(1),
    color: colors.textColor,
  },
  tabContainer: {
    alignItems: 'center',
  },
  activeTabContainer: {
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 3,
    height: hp(4),
    alignItems: 'center',
  },
  inactiveTabContainer: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    height: hp(4),
    alignItems: 'center',
  },
  separatorContainer: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    height: hp(4),
    alignItems: 'center',
    // width:wp(60),
    flex: 1,
  },
  loginLabelStyle: {
    fontSize: nf(22),
    marginTop: hpx(25),
  },
  setUpLableStyle: {
    fontSize: nf(14),
    marginTop: hpx(5),
    color: colors?.lightBlack,
  },
  termsContainerStyle: {
    alignItems: 'center',
  },
  emptyCheckBoxStyles: {
    height: hpx(16),
    width: hpx(16),
    borderRadius: hp(0.5),
    backgroundColor: colors.emptyCheckBoxColor,
  },
  iAgreewith: {
    marginLeft: wp(2),
    fontSize: nf(14),
    flex: 1,
  },
  termsConditionStyle: {
    alignItems: 'center',
    marginTop: hpx(21),
  },
  termsNPrivacy: {
    color: colors.primaryColor,
    fontSize: nf(14),
    marginLeft: wp(1),
  },
  alreadyAccountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hpx(50),
    marginBottom: hp(2),
  },
  alreadyAccountLabelStyle: {
    fontSize: nf(14),
  },
  signupLabelStyle: {
    fontSize: nf(14),
    color: colors.primaryColor,
    marginLeft: wp(1),
  },

  sendOtpMesage: {
    fontSize: nf(13),
    color: colors.sendOtpMessage,
    textAlign: 'center',
    marginTop: wp(1),
  },
  orLabelStyle: {
    color: colors.signInwith,
    fontSize: nf(14),
    marginHorizontal: wp(2),
  },
  separatorStyle: {
    height: hp(0.2),
    flex: 1,
    backgroundColor: colors.inputBorderColor,
  },
  orContainerStyle: {
    alignItems: 'center',
    marginTop: hpx(14),
    marginBottom: hpx(5),
  },
  areYouTouristLabelStyle: {
    fontSize: nf(14),
  },
  radioItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  yesLabelStyle: {
    color: colors.placeHolderTextColor,
    fontSize: nf(14),
    marginLeft: wp(0.5),
  },
  radioContainerStyle: {
    marginTop: hpx(7),
    alignItems: 'center',
    width: wpx(125),
    justifyContent: 'space-between',
  },
  checkedRadioButton: {
    height: hp(2),
    width: hp(2),
  },
  socialLoginButtonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  inputStyle: {
    // marginTop: hpx(15),
  },
  radioButtonContainer: {marginTop: hpx(19)},
  button: {marginTop: hpx(20)},
  iconContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wpx(75.25),
    height: hpx(42),
    borderWidth: nf(1),
    borderRadius: nf(4),
    borderColor: colors.borderColor,
  },
  iconStyle: {
    width: wp(6),
    height: wp(6),
  },
  socialContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hpx(30),
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
    // height: hpx(45),
    paddingVertical: hpx(4),
    width: wpx(165),
    borderRadius: wpx(10),
    paddingHorizontal: wpx(5),
  },
  uploadContainerStyle: {
    marginTop: hpx(5),
  },
});
