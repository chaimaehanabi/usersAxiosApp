import React from 'react';  

import { createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator(); 

const AppNavigator = () => {
    return(
        <NavigationContainer>

            <Stack.Navigator>
                
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Edit" component={EditScreen} />
            
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigator; 