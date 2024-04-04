import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/authContext'
import FooterMenu from '../Components/Menus/FooterMenu'

const Home = () => {
    //global state
    const [state] = useContext(AuthContext)
    return (
        <View style={styles.container}>
            {/* <Text>Home</Text> */}
            <ScrollView>
                <View style={styles.homeContainer1}>
                    <View style={styles.homeContainer1Sub1}>
                        <View style={styles.homeContainer1Sub1_box}>
                            <View style={styles.staffphoto}></View>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800 }}>Dr.V.A.Athavale</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12 }}>WIT Principal</Text>
                        </View>
                        <View style={styles.homeContainer1Sub1_box}>
                            <View style={styles.staffphoto}></View>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800 }}>TPO Name</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12 }}>WIT Training & Placement Officer</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.homeContainer2}>
                    <Text style={{ fontSize: 20, fontWeight: 800 }}>Branch TPO's</Text>
                    <View style={styles.homeContainer1Sub1}>
                        <View style={styles.homeContainer1Sub1_box}>
                            <View style={styles.staffphoto}></View>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800, }}>Tpo Name</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12 }}>CSE TPO</Text>
                        </View>
                        <View style={styles.homeContainer1Sub1_box}>
                            <View style={styles.staffphoto}></View>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800 }}>Tpo Name</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12 }}>IT TPO</Text>
                        </View>
                    </View>
                    <View style={styles.homeContainer1Sub1}>
                        <View style={styles.homeContainer1Sub1_box}>
                            <View style={styles.staffphoto}></View>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800 }}>Tpo Name</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12 }}>CIVIL TPO</Text>
                        </View>
                        <View style={styles.homeContainer1Sub1_box}>
                            <View style={styles.staffphoto}></View>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800 }}>Tpo Name</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12 }}>ENTC TPO</Text>
                        </View>
                    </View>
                    <View style={styles.homeContainer1Sub1}>
                        <View style={styles.homeContainer1Sub1_box}>
                            <View style={styles.staffphoto}></View>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800 }}>Tpo Name</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12 }}>ECE TPO</Text>
                        </View>
                        <View style={styles.homeContainer1Sub1_box}>
                            <View style={styles.staffphoto}></View>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800 }}>TPO Name</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12 }}>MECHANICAL TPO</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
            {/* <Text>{JSON.stringify(state, null, 4)}</Text> */}
            <FooterMenu />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    userProfile: {
        height: 10,
        width: 10,
        backgroundColor: 'purple'
    },
    homeContainer1: {
        flex: 1,
        width: 360,
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth:0.5
    },
    homeContainer1Sub1: {
        height: 170,
        width: 340,
        marginTop: 20,
        // borderWidth: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    homeContainer1Sub1_box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        height: 160,
        width: 160,
        // borderWidth: 0.5
    },
    staffphoto: {
        height: 80,
        width: 80,
        borderWidth: 0.5,
        borderRadius: 50
    },
    homeContainer2: {
        flex: 2,
        width: 360,
        alignItems: 'center',
        // borderWidth:0.5, 
        paddingTop: 20
    }

})
export default Home