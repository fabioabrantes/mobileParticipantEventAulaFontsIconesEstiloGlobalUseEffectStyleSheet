import {StyleSheet} from 'react-native';
import THEMES from '../../global/styles/themes';
export const styles = StyleSheet.create({
  button:{
    borderRadius:4,
    width:56,
    height:56,
    alignItems:'center',
    justifyContent: 'center',
  },
  textButton:{
    fontSize:THEMES.fontSize.lg,
    fontFamily:THEMES.fonts.bold,
    color: THEMES.colors.white
  },
})