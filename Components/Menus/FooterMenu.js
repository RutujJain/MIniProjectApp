import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation, useRoute } from '@react-navigation/native'

const FooterMenu = () => {
    //hooks
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesome5 name="home" style={styles.iconStyle} color={route.name === 'Home' && '#318CE7'} />
                <Text style={styles.textdesign}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <FontAwesome5 name="user-circle" style={styles.iconStyle} color={route.name === 'Profile' && '#318CE7'} />
                <Text style={styles.textdesign} >Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Resume')}>
                <FontAwesome5 name="file-alt" style={styles.iconStyle} color={route.name === 'Resume' && '#318CE7'} />
                <Text style={styles.textdesign}>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Campus')} >
                <FontAwesome5 name="building" style={styles.iconStyle} color={route.name === 'Campus' && '#318CE7'} />
                <Text style={styles.textdesign} >Campus</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#d1d1d1',
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        backgroundColor: 'white'
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: "center",
        fontSize: 20,
    },
    textdesign: {
        fontSize: 12,
    }
})
export default FooterMenu