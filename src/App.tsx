import Home from './containers/Home';

import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default App;
