import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/authContext'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FooterMenu from '../Components/Menus/FooterMenu'
import { useNavigation } from '@react-navigation/native'
import UserImg from '../assets/userImage.png'

const Post = () => {
    const [state] = useContext(AuthContext);
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView style={styles.containersub1}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.userPhoto}>
                        <Image style={styles.image} source={UserImg} />
                    </View>
                    <Text style={styles.userName}>{state?.user.name}</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 20, bottom: 0, height: 50, width: 50 }} onPress={() => navigation.navigate('Edit Profile')}>
                        <FontAwesome5 name="pen" style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={styles.PersonalInfo}>
                    <Text styles={styles.textdesign}>Personal Info</Text>
                    <View style={styles.PersonalInfoSub}>
                        <View style={{ height: 50, width: 330, backgroundColor: '#F0F8FF', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 6, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <FontAwesome5 name="user-alt" style={styles.iconStyle} />   Gender
                            </Text>
                            <Text style={{ margin: 10, color: 'gray' }}>{state?.user.gender}</Text>
                        </View>
                        <View style={{ height: 50, width: 330, backgroundColor: '#F0F8FF', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 6 }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <Ionicons name="mail" style={styles.iconStyle} />   Email
                            </Text>
                            <Text style={{ margin: 10, color: 'gray' }}>{state?.user.email}</Text>
                        </View>
                        <View style={{ height: 50, width: 330, backgroundColor: '#F0F8FF', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 6 }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <FontAwesome5 name="phone" style={styles.iconStyle} />   Phone No
                            </Text>
                            <Text style={{ margin: 10, color: 'gray' }}>{state?.user.phone}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.Academics}>

                    <Text styles={styles.textdesign}>Academics</Text>
                    <View style={styles.AcademicsInfoSub}>
                        <View style={{ height: 50, width: 330, backgroundColor: '#F0F8FF', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 6, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <FontAwesome5 name="book-reader" style={styles.iconStyle} />   SSC
                            </Text>
                            <Text style={{ margin: 10, color: 'gray' }}>{state?.user.ssc}</Text>
                        </View>
                        <View style={{ height: 50, width: 330, backgroundColor: '#F0F8FF', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 6 }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <FontAwesome5 name="book" style={styles.iconStyle} />   HSC
                            </Text>
                            <Text style={{ margin: 10, color: 'gray' }}>{state?.user.hsc}</Text>
                        </View>
                        <View style={{ height: 50, width: 330, backgroundColor: '#F0F8FF', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 6 }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <FontAwesome5 name="book-open" style={styles.iconStyle} />   Diploma
                            </Text>
                            <Text style={{ margin: 10, color: 'gray' }}>{state?.user.diploma}</Text>
                        </View>
                        <View style={{ height: 50, width: 330, backgroundColor: '#F0F8FF', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingLeft: 6, paddingRight: 6 }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <MaterialIcons name="engineering" style={styles.iconStyle} />   Engineering Aggregate
                            </Text>
                            <Text style={{ margin: 10, color: 'gray' }}>85%</Text>
                        </View>
                        <View style={{ height: 50, width: 330, backgroundColor: '#F0F8FF', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 6, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <FontAwesome5 name="building" style={styles.iconStyle} />  Department
                            </Text>
                            <Text style={{ margin: 10, fontSize: 12, color: 'gray' }}>Computer Science and Engineering</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.PersonalInfo}>
                    <Text styles={styles.textdesign}>Upload Resume</Text>
                    <View style={styles.PersonalInfoSub}>
                        <View style={{ height: 100, width: 330, backgroundColor: '#F0F8FF', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 6, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, }}>
                            <Text style={{ margin: 10, color: 'gray' }}>
                                <Ionicons name="document-attach" style={styles.iconStyle} />
                                Select Document
                            </Text>
                            <Text style={{ margin: 10, fontSize: 12, color: 'gray' }}></Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <FooterMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: 'white'
    },
    containersub1: {
        flex: 1,
        height: 400,
        width: 360,

    },
    userPhoto: {
        marginTop: 20,
        height: 80,
        width: 80,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    userName: {
        marginTop: 10
    },
    PersonalInfo: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 20,
        height: 200,
        width: 360,
        padding: 15,
    },
    PersonalInfoSub: {
        height: 160,
        width: 320,
        marginTop: 10,
        gap: 3
    },
    Academics: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 360,
        width: 360,
        padding: 15,
        marginBottom: 30
    },
    AcademicsInfoSub: {
        gap: 3,
        marginTop: 10,
    },
    textdesign: {
        width: 300,
        position: 'absolute',
        left: 10,
    },
    userdata: {
        height: 40,
        width: 300,
        marginBottom: 5,
        borderWidth: 0.5,
    },
    iconStyle: {
        marginBottom: 3,
        position: 'absolute',
        right: 30,
        bottom: 0,
        fontSize: 17,
        color: '#318CE7',
        fontFamily: 'Calibri'
    },

})

export default Post