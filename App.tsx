import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CounterScreen from './src/screens/counterScreen/CounterScreen';
import SuspensedScreen from './src/screens/suspensedScreen/SuspensedScreen';

export type RootStackParamList = {
  Counter: undefined;
  Suspensed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Suspensed" component={SuspensedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
