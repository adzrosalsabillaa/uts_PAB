import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Validasi alamat email dan kata sandi di sini
    if (email && password) {
      // Panggil fungsi pendaftaran ke database atau penyimpanan sesuai dengan preferensi Anda.
      // Contoh dengan Firebase:
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Pendaftaran berhasil, Anda dapat mengarahkan pengguna ke halaman lain, misalnya, "Home".
          navigation.navigate("Home");
        })
        .catch((error) => {
          // Pendaftaran gagal, tampilkan pesan kesalahan kepada pengguna.
          alert(error.message);
        });
    } else {
      alert("Silakan isi alamat email dan kata sandi.");
    }
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
      <Button title="Sign Up" onPress={handleSignUp} />
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

export default SignUp;
