// React
import React from "react"

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Types
import { RootStackList } from "../../types"

// Stack
const Stack = createNativeStackNavigator<RootStackList>()

// Screens
import { HomeScreen, ProfileScreen, ExploreScreen } from '../../screens'

// Routes
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ header: () => null }} />
                <Stack.Screen name="Explore" component={ExploreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes