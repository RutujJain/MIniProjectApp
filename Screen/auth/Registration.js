import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../../Components/Forms/InputBox';
import SubmitButton from '../../Components/Forms/SubmitButton';
import axios from 'axios';

const Registration = ({ navigation }) => { 

  // States
  const [name, setName] = useState('');
  const [prn, setPrn] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Function
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !prn || !password) {
        Alert.alert('Please Fill All Fields');
        setLoading(false);
        return;
      }
      const { data } = await axios.post('/auth/register', { name, prn, password });
      alert(data && data.message);
      navigation.navigate('Login');
      console.log('Register Data ==>', { name, prn, password });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Pagetitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle={'Name'} value={name} setValue={setName} />
        <InputBox inputTitle={'Enrollment No'} value={prn} setValue={setPrn} />
        <InputBox inputTitle={'Password'} secureTextEntry={true} autoComplete="password" value={password} setValue={setPassword} />
      </View>
      <SubmitButton
        btnTitle="Register"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>Already Registered? Please <Text style={styles.link} onPress={() => navigation.navigate("Login")}>LOGIN</Text></Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1d5c9',
  },
  Pagetitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    fontSize: 15,
    color: '#1e2225',
  },
  link: {
    color: 'blue',
  },
});
export default Registration;
