import {StyleSheet} from 'react-native';
import THEMES from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:24,
    paddingTop:75,
    backgroundColor:THEMES.colors.gray900
  },
  title:{
    color:THEMES.colors.gray300,
    fontSize:THEMES.fontSize.xl,
    fontFamily:THEMES.fonts.bold
  },
  date:{
    color:THEMES.colors.gray500,
    fontSize:THEMES.fontSize.xm,
    fontFamily:THEMES.fonts.regular,
    lineHeight:16,
  },
  containerRegisterParticipant:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:44,
    marginBottom:34
  },
  subTitleListParticipant:{
    color:THEMES.colors.gray300,
    fontSize:THEMES.fontSize.xl,
    fontFamily:THEMES.fonts.bold
  },
  containerListParticipant:{
    marginTop:24
  },
  input:{
    flex:1,
    height:56,
    backgroundColor:THEMES.colors.gray800,
    fontSize:THEMES.fontSize.xm,
    color:THEMES.colors.gray300,
    fontFamily:THEMES.fonts.regular,
    padding:12,
    borderRadius:4
  },
  listEmpty:{
    color:THEMES.colors.gray300,
    fontSize:THEMES.fontSize.sm,
    fontFamily:THEMES.fonts.regular,
    textAlign:'center'
  }
  
})