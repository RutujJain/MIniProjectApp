import { View, Text, ScrollView, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import SubmitButton from '../Components/Forms/SubmitButton'
import InputBox from '../Components/Forms/InputBox'
import axios from 'axios';
import { AuthContext } from '../Context/authContext';
// import Checkbox from 'expo-checkbox';

const EditProfile = () => {
    // const [isChecked1, setChecked1] = useState(false);
    // const [isChecked2, setChecked2] = useState(false);
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [ssc, setSSC] = useState();
    const [hsc, setHSC] = useState();
    const [diploma, setDiploma] = useState();
    // const [engAgree, setEngAgree] = useState();
    const [state] = useContext(AuthContext);

    const submitData = async () => {
        try {
            if (!email || !phone || !ssc || !hsc || !diploma) {
                Alert.alert('Please fill all the Required fields');
                return;
            }
            const { data } = await axios.post('/auth/edituser', { email, phone, ssc, hsc, diploma });
            alert(data && data.message);
            console.log("User data+>", { email, phone, ssc, hsc, diploma })

        }
        catch (error) {
            console.log("Error is occured in storing the user data", error);
        }
    }
    return (
        <ScrollView >
            <View style={styles.container}>
                {/* <Text style={{ position: 'absolute', left: 10, top: 10 }}>* Indicates required</Text> */}
                <View >
                    {/* <Text>Gender</Text>
                    <View>
                        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
                        <Text>Male</Text>
                        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
                        <Text>Female</Text>
                    </View> */}
                    <InputBox inputTitle={'Email ID'} value={email} setValue={setEmail} placeholder="state?.user.email" />
                    <InputBox inputTitle={'Phone No'} value={phone} setValue={setPhone} placeholder={state?.user.phone} />
                    <InputBox inputTitle={`SSC % ( Don't Add % Symbol)`} value={ssc} setValue={setSSC} placeholder={state?.user.ssc} />
                    <InputBox inputTitle={`HSC % ( Don't Add % Symbol)`} value={hsc} setValue={setHSC} placeholder={state?.user.hsc} />
                    <InputBox inputTitle={`Diploma % ( Don't Add % Symbol)`} value={diploma} setValue={setDiploma} />
                    {/* <InputBox inputTitle={`Engineering Aggregate %  ( Don't Add % Symbol)`} value={engAgree} setValue={setEngAgree} /> */}
                    <Text>Upload Latest Copy of Resume</Text>
                    {/* <TextInput /> */}
                    {/* <Text></Text> */}
                    {/* <InputBox inputTitle={'Department'} /> */}
                    <View style={styles.btn}>
                        <SubmitButton btnTitle="Save Changes" handleSubmit={submitData} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 800,
        width: 360,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        // paddingLeft:25
        borderBlockColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingTop: 40
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default EditProfile
