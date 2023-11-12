import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Di sini Anda dapat menambahkan logika autentikasi
    if (email === "estock.com" && password === "estock123") {
      // Autentikasi berhasil, alihkan ke halaman lain (misalnya, halaman beranda)
      navigation.navigate("Home");
    } else {
      // Autentikasi gagal, tampilkan pesan kesalahan
      alert("Login gagal. Periksa email dan password Anda.");
    }
  };

  const handleSignUp = () => {
    // Alihkan pengguna ke halaman "Sign Up" saat tombol "Sign Up" ditekan
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        style={styles.input}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      {/* <Button title="Sign Up" onPress={handleSignUp} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
});

export default Login;
