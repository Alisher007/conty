import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './HomeScreen.js';
import AddScreen from './AddScreen';

const Stack = createStackNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} 
        options={{ title: 'Home' }} />
      <Stack.Screen name="Add" component={AddScreen} 
        options={{ title: 'Add' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
