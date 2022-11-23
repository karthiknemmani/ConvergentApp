import * as React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Touchable,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "30%", height: "30%" }}
        source={require("./assets/AppLogo.png")}
      />
      <TextInput style={styles.inputText} placeholder="Username" />
      <TextInput style={styles.inputText} placeholder="Password" />
      <Button title="Sign in" color="#E3967E" />
      <TouchableOpacity>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
      <Button title="New? Sign up" color="#E3967E" />
      <Text>or continue with</Text>
      <View style={styles.iconView}>
        <Image
          style={{ width: "25%", height: "25%" }}
          source={require("./assets/google.png")}
        />
        <Image
          style={{ width: "25%", height: "25%" }}
          source={require("./assets/facebook.png")}
        />
      </View>
    </SafeAreaView>
  );
}

function signIn() {
  return <Text>Sign Up</Text>;
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 200,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  iconView: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    height: "50%",
  },
});
