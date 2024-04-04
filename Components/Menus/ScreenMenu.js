import { View, Text } from 'react-native'
import React, { Profiler, useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthContext } from '../../Context/authContext'
import HeaderMenu from './HeaderMenu'
import SubHeader from './SubHeader'
import Home from '../../Screen/Home'
import Resume from '../../Screen/Resume'
import Profile from '../../Screen/Profile'
import Campus from '../../Screen/Campus'
import Notification from '../../Screen/Notification'
import EditProfile from '../../Screen/EditProfile'
import Registration from '../../Screen/auth/Registration'
import Login from '../../Screen/auth/Login'
import ForgotPass from '../../Screen/auth/ForgotPass'
// import OnboardingScreen from '../../Screen/OnboardingScreen'
const ScreenMenu = () => {

    //global state
    const [state] = useContext(AuthContext)
    // auth condition true false
    const auththenticatedUser = state?.user && state?.token
    const Stack = createNativeStackNavigator()
    return (

        <Stack.Navigator initialRouteName='Login'>
            {auththenticatedUser ?
                (<>
                    <Stack.Screen name="Home" component={Home} options={{
                        headerRight: () => <HeaderMenu />,
                    }} />
                    <Stack.Screen name="Profile" component={Profile} options={{
                        headerBackTitle: 'Back',
                        headerRight: () => <HeaderMenu />
                    }} />
                    <Stack.Screen name="Resume" component={Resume} options={{
                        headerRight: () => <HeaderMenu />,
                    }} />
                    <Stack.Screen name="Campus" component={Campus} options={{
                        headerRight: () => <HeaderMenu />,
                    }} />
                    <Stack.Screen name="Notification" component={Notification} options={{
                        headerRight: () => <HeaderMenu />,
                    }} />
                    <Stack.Screen name="Edit Profile" component={EditProfile} options={{
                        headerRight: () => <SubHeader />,
                    }} />


                </>) : (
                    <>
                        <Stack.Screen name="Register" component={Registration} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
                        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} /> */}

                    </>
                )
            }

        </Stack.Navigator >
    )
}

export default ScreenMenu