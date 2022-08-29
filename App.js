import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Stack from './src/routes';

const App = () => {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </View>
  );
};

export default App;
