import {StyleSheet} from 'react-native';
import THEMES from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    borderRadius:5,
    marginBottom:10,
    width:'100%',
    
  },
  containerText:{
    backgroundColor:THEMES.colors.gray700,
    alignItems:'center',
    flex:1,
    justifyContent: 'center',
    height:56,
    marginHorizontal:5
  },
  nameParticipant:{
    fontSize:THEMES.fontSize.sm,
    color: THEMES.colors.gray300,
    fontFamily: THEMES.fonts.bold
  }

});