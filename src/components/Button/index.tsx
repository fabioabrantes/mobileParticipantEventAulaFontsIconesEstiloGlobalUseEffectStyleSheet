import { TouchableOpacity,TouchableOpacityProps} from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

import THEMES  from '../../global/styles/themes';

import {styles} from './styles';

interface Props extends TouchableOpacityProps{
  iconName:'add-circle-outline' | 'trash-outline' |'check-circle' | 'circle-o';
  transparent?:boolean;
}
export function Button({iconName,transparent=false, ...rest}:Props){
  let backgroundColorButton = THEMES.colors.purple500;

  if(transparent){
    backgroundColorButton=THEMES.colors.gray700;
  }
  
  return (
      <TouchableOpacity 
        style={[styles.button, !transparent && {backgroundColor:backgroundColorButton}]} 
        {...rest}
      >
          {
            (iconName !== 'circle-o' && iconName !== 'check-circle') ? 
              <Ionicons 
                name={iconName} 
                size={32} 
                color={iconName==='add-circle-outline' ?THEMES.colors.white:THEMES.colors.blue500} 
              />
            :
              <FontAwesome 
                name={iconName} 
                size={32} 
                color={THEMES.colors.blue500}
              />
          }
      </TouchableOpacity>
  )
}