import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Alessia from './page/Koala';
import App from './App';

const Stack  = createNativeStackNavigator();

const Navigation = ({navigation, route}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Alessia} name="Alessia"/>
                <Stack.Screen component={App} name="App" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
