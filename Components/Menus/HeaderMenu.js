import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/authContext'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native'

const HeaderMenu = () => {
    const [state, setState] = useContext(AuthContext)
    const navigation = useNavigation()

    //Logout
    const handleLogout = async () => {
        setState({ token: '', user: null })
        await AsyncStorage.removeItem('@auth')
        alert("logout Successfully")
    }
    const Notify = () => {

    }
    return (
        <View style={styles.headercontainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                <FontAwesome5 name="bell" style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
                <FontAwesome5 name="sign-out-alt" style={styles.iconStyle} />
                {/* <Text style={{ fontSize: 12 }}>Logout</Text> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headercontainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 40,
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: "center",
        fontSize: 20,
        color: 'gray',
        fontFamily: 'Calibri'
    },

})
export default HeaderMenu