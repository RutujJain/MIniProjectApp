import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/authContext'
import FooterMenu from '../Components/Menus/FooterMenu'

const Resume = () => {
    //global state
    const [state] = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>Resume</Text>
            <FooterMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: 'white'
    }
})
export default Resume
