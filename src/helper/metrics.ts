//USAGE:     import { Colors, Icons, hp, wp, hpx, wpx, nf, Fonts } from '../../constants/constants'
import {Dimensions, PixelRatio, Platform} from 'react-native';

//DYNAMIC UI FUNCTIONS:
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
//FONT SCALING

const scale = SCREEN_HEIGHT / 812;
const normalizeFont = (size: any) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

//DYNAMIC DIMENSION CONSTANTS
//Usage: wp(5), hp(20)
const widthPercentageToDP = (widthPercent: any) => {
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: any) => {
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

//Usage: wpx(141), hpx(220)
const widthFromPixel = (widthPx: any, w = 375) => {
  const newSize = widthPx * (SCREEN_WIDTH / w);
  return newSize;
};
const heightFromPixel = (heightPx: any, h = 812) => {
  const newSize = heightPx * (SCREEN_HEIGHT / h);
  return newSize;
};

export {
  normalizeFont as nf,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthFromPixel as wpx,
  heightFromPixel as hpx,
};
