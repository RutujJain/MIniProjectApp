import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const InputBox = ({
    inputTitle,
    autoComplete,
    keyboardType,
    secureTextEntry = false,
    value,
    setValue,
}) => {
    return (
        <View>
            <Text>{inputTitle}</Text>
            <TextInput
                style={styles.inputBox}
                autoCorrect={false}
                keyboardType={keyboardType}
                autoComplete={autoComplete}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => setValue(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        height: 40,
        width: 300,
        marginBottom: 10,
        marginTop: 5,
        paddingLeft: 10,
        color: "black",
        borderWidth: 0.5,
        borderRadius: 10
    },
});

export default InputBox;