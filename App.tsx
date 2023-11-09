import { StatusBar} from 'react-native';

import { Home } from "./src/screens/Home";

import {Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';

import {Loading} from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <>
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
      />
      
      {fontsLoaded ? <Home/> : <Loading/>}
    </>
  );
}

