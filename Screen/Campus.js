import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/authContext'
import FooterMenu from '../Components/Menus/FooterMenu'

const Account = () => {
    //global state
    const [state] = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center' }}>

                </View>
                <View>
                    {/* <Text>Account</Text>
                    <Text>Name:{state?.user.name}</Text>
                    <Text>PRN:{state?.user.prn}</Text>
                    <Text>Role:{state?.user.role}</Text> */}
                </View>
                <FooterMenu />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'white'
    }
})
export default Account