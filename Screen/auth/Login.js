import { StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native' //rnfes
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../Context/authContext'
import InputBox from '../../Components/Forms/InputBox'
import SubmitButton from '../../Components/Forms/SubmitButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CollegeLogo from '../../assets/CollegeLogo.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'

const Login = ({ navigation }) => {
  //global States
  const [state, setState] = useContext(AuthContext)

  //states
  const [prn, setPrn] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      if (!prn || !password) {
        Alert.alert('Please Fill All Fields')
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post('/auth/login', { prn, password })
      setState(data)
      await AsyncStorage.setItem('@auth', JSON.stringify(data));
      alert(data && data.message)
      navigation.navigate('Home')
      console.log('Login Data ==>', { prn, password });

    }
    catch (error) {
      alert(error.response.data.message)
      setLoading(false)
      console.log(error)
    }
  }
  // const getLcoalStorageData = async () => {
  //   let data = await AsyncStorage.getItem("@auth");
  //   console.log("Local Storage ==> ", data);
  // };
  // getLcoalStorageData();

  return (

    <View style={styles.container}>
      <View style={styles.containersub1}>
        <View style={styles.collegeLogo}>
          <Image source={CollegeLogo} style={{ height: 160, width: 160 }} />
        </View>
        <Text style={styles.Pagetitle}>Student Portal</Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 100 }}>
        <InputBox inputTitle={'ENROLLMENT NO'} autoComplete="off" value={prn} setValue={setPrn} />
        <InputBox inputTitle={'PASSWORD'} secureTextEntry={true} autoComplete="password" value={password} setValue={setPassword} />
        <Text style={styles.link} onPress={() => navigation.navigate('ForgotPass')}>Forgot Password <FontAwesome5 name="question" style={styles.iconStyle} /></Text>
      </View>
      <SubmitButton btnTitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}

      />
      <Text>New User<Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register</Text>
      </Text>
      {/* <Text>{JSON.stringify({name,email,password},null,4)}</Text> */}

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',

  },
  containersub1: {
    height: 280,
    width: 400,
    backgroundColor: '#21338E',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  collegeLogo: {
    marginTop: 60,
    height: 100,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  Pagetitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
    color: '#ffffff'
  },
  linkText: {
    fontSize: 15,
    marginRight: 20,
  },
  link: {
    position: 'absolute',
    color: 'blue',
    marginLeft: 20,
    bottom: -18,
    right: 10,
  },
  iconStyle: {
    fontSize: 10,
    fontWeight: 200,
  }

})

export default Login