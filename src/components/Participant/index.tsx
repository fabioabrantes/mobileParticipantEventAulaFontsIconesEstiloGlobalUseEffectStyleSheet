import {Text, View} from 'react-native';

import { Button } from '../Button';

import { useState } from 'react';

import {styles} from './styles';

import THEMES from '../../global/styles/themes';

interface Props{
  name:string;
  remove:(name:string)=>void;
}

export function Participant({name,remove}:Props){
  const [checkout, setCheckout] = useState(false);

  function handleCeckout(){
    setCheckout(!checkout)
  }

  return (
    <View style={styles.container}>
      <Button iconName={!checkout ?'circle-o':'check-circle'} transparent  onPress={handleCeckout}/>

      <View 
        style={[
            styles.containerText, 
            checkout && { backgroundColor:THEMES.colors.gray900}
            ]}
      >
        <Text 
          style={[
            styles.nameParticipant, 
            checkout && {textDecorationLine:'line-through',color:THEMES.colors.red500}
          ]}
        >
          {name}
        </Text>
      </View>

      <Button iconName='trash-outline' transparent onPress={()=>remove(name)}/>
    </View>
  )
}