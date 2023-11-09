import {ActivityIndicator} from 'react-native';

import THEMES from '../../global/styles/themes';


export function Loading(){

  return (
    <ActivityIndicator
      color={THEMES.colors.blue500}
      size={THEMES.fontSize.xl}
    />
  )
}