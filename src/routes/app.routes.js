import React from 'react'
import { createDrawerNavigation }  from '@react-navigation/drawer'
import Home from '../pages/Home'

const AppDrawer = createDrawerNavigation()

function AppRoutes(){
    return(
        <AppDrawer.Navigator>
            <AppDrawer.Screen
                name="Home"
                component={Home}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes