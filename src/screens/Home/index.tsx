import {useEffect, useState} from 'react';
import {View, Text, TextInput, Alert, FlatList} from 'react-native';

import { Participant } from '../../components/Participant';
import { Button } from '../../components/Button';

import {lisParticipants} from '../../../data';

import {styles} from './styles';

import THEMES from '../../global/styles/themes';

export function Home(){
 const [nameParticipant,setNameParticipant] = useState('');
 const [names,setNames] = useState([] as string []);
 
  function addParticipant(){
    if(names.includes(nameParticipant) || nameParticipant === ''){
      Alert.alert('Error','Participate ja existe ou não foi digitado');
    } else{
      setNames([...names,nameParticipant]);
    }
    setNameParticipant('');
  }
  
  function removeParticipant(name:string){
    Alert.alert('Remove', `Deseja realmente remover ${name}`,[
      {
        text:'sim',
        onPress:()=>{
          setNames(names.filter(participant => participant !==name))
        }
      },{
        text:'não'
      } 
    ])
  }

  useEffect(()=>{
    setNames(lisParticipants);
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>

      <Text style={styles.date}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.containerRegisterParticipant}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={THEMES.colors.gray300}
          onChangeText={text =>setNameParticipant(text)}
          value={nameParticipant}
        />
        <Button 
          iconName="add-circle-outline"
          onPress={addParticipant}
        />
      </View>

      <Text  style={styles.subTitleListParticipant}>Participantes</Text>
    
      <View style={styles.containerListParticipant}>
        <FlatList
          data={names}
          keyExtractor={name =>name}
          renderItem={({item})=>(<Participant name={item} remove={()=>removeParticipant(item)}/>)}
          ListEmptyComponent={()=>(
            <Text style={styles.listEmpty}>Ninguém chegou no evento ainda? 
            Adicione participantes a sua lista de presença.
            </Text>
          )}
        />
      </View>
    </View>
  )
}