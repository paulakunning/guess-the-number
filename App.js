import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded] = useFonts({
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  });

  useEffect(()=> {
    if(fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  if (!fontsLoaded) {
      return null;
    }

  return (
    <View style={styles.container} >
      <Header title="Adivina el número" />
      {!userNumber 
      ? <StartGameScreen onStartGame={startGameHandler} />
      : <GameScreen userOption={userNumber} />
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
