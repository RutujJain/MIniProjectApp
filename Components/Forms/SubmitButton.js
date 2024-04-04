import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
    return (
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>
                {loading ? "Please Wait..." : btnTitle}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: "#21338E",
        height: 45,
        width: 200,
        marginHorizontal: 25,
        borderRadius: 80,
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 30,
    },
    btnText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
    },
});

export default SubmitButton;