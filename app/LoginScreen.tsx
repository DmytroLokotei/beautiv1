import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Link } from 'expo-router';
import ButtonRightArrow from "@/features/common_ui/ButtonRightArrow";
import LineDivider from "@/features/common_ui/LineDivider";
import { AppScreenContainer } from "@/features/common_ui/AppScreenContainer";
import HttpClient from "@/features/network/HttpClient";
import { AppUrl } from "@/features/network/Urls";

export default function LoginScreen() {

  let email = "";
  let password = "";

  const doLoginRequest = () => {
    let postBody = {
      "email": "ghjvfx@gmail.com",
      "password": "789789"
    };
    new HttpClient().postRequest(
      AppUrl.login,
      postBody,
      (data) => { console.log(data); }
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
        onChangeText={(value) => { email = value }}
        style={[styles.text_input, { marginBottom: 8 }]}
      />
      <TextInput
        autoComplete="password"
        placeholder="password"
        onChangeText={(value) => { password = value }}
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
      <LineDivider />
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
    borderRadius: 14
  }
});
