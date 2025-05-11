import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Link } from 'expo-router';
import ButtonRightArrow from "@/features/common_ui/ButtonRightArrow";
import LineDivider from "@/features/common_ui/LineDivider";
import { AppScreenContainer } from "@/features/common_ui/AppScreenContainer";
import HttpClient from "@/features/network/HttpClient";
import { AppUrl } from "@/features/network/Urls";
import isValidEmail from "@/features/validation/emailValidation";
import { handleLoginResponse } from '@/features/auth/loginUseCase';

export default function LoginScreen() {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);

  useEffect(() => {
    setIsEmailError(!isValidEmail(getEmail))
  }, [getEmail]);

  const doLoginRequest = () => {
    let postBody = {
      "email": getEmail,
      "password": getPassword
    };
    new HttpClient().postRequest(
      AppUrl.login,
      postBody,
      (responce) => {
        if (responce.status == 200) {
          const root = JSON.parse(responce.data);
          handleLoginResponse(root);
        }
      }
    )
  }


  return (
    <AppScreenContainer
      style={styles.container}
    >
      <Image
        source={require('@/assets/images/splash_logo_x2.png')}
        style={{ width: 105, height: 99, alignSelf: "center" }}
      />
      <Text
        style={{ alignSelf: "center", marginBottom: 8 }}
      >
        Log in to access your account
      </Text>
      <View style={{ flex: 1 }} />
      <TextInput
        autoComplete="email"
        placeholder="email"
        onChangeText={(value) => { setEmail(value) }}
        style={[
          styles.text_input,
          { marginBottom: 8 },
          isEmailError && { borderColor: 'red' }
        ]}
      />
      <TextInput
        autoComplete="password"
        placeholder="password"
        onChangeText={(value) => { setPassword(value) }}
        style={[styles.text_input, { marginBottom: 8 }]}
      />
      <Link href="/RegistrationScreen">Fogrot password?</Link>
      <ButtonRightArrow
        text="Log in"
        type="black"
        onPressCallback={() => {
          doLoginRequest()
        }}
      />
      <View style={{ flex: 1, flexDirection: "row", alignSelf: "center" }}>
        <Text style={{ flex: 1 }}>
          Sing up with one of social profiles
        </Text>
        <View style={{ flex: 1 }}>
          <Text>Buttons</Text>
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <LineDivider type='gradient' />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={{ flex: 1, marginEnd: 8 }}>
          Don`t have an account?
        </Text>
        <Link href="/RegistrationScreen">Sing up</Link>
      </View>
    </AppScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEBF6',
    padding: 10,
    height: '100%'
  },
  text_input: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FFF"
  }
});
