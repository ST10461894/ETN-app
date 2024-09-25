// Import necessary libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the screens
import HomeScreen from './HomeScreen'; // Adjust path based on Snack's file system
import SewingScreen from './SewingScreen'; // Adjust path based on Snack's file system
import Childmindingscreen from'./Childminding';
import LifeSkillsscreen from './LifeSkills'
import Enquirescreen from './Enquire'
import Cookingscreen from './Cooking'
import Gardenmaintenancescreen from './Gardenmaintenance'
import FirstAidscreen from './FirstAid'
import Landscapingscreen from './Landscaping'
import Contactscreen from './Contact'
import Registerscreen from './Register'

// Define Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sewing" component={SewingScreen} />
        <Stack.Screen name="Childminding" component={Childmindingscreen}/>
        <Stack.Screen name="LifeSkills" component={LifeSkillsscreen}/>
        <Stack.Screen name="Enquire" component={Enquirescreen}/>
        <Stack.Screen name="Cooking" component={Cookingscreen}/>
        <Stack.Screen name="Gardenmaintenance" component={Gardenmaintenancescreen}/>
        <Stack.Screen name="FirstAid" component={FirstAidscreen}/>
        <Stack.Screen name="Landscaping" component={Landscapingscreen}/>
        <Stack.Screen name="Contact" component={Contactscreen}/>
        <Stack.Screen name="Register" component={Registerscreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
