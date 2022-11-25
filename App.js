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
  ScrollView,
  ImageBackground,
  navigation,
  Pressable
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';


function FriendProfile(props) {
  const id = props.name
  return (
    <View>
      {/* <Image
        style={styles.friendPic}
      //source={require(props.name)}
      /> */}
      <Text>
        {JSON.stringify(id)}
      </Text>
    </View>
  );

}

function Friends() {
  return (
    <ScrollView>
      <FriendProfile name="John" />
      <FriendProfile name="Sarah" />
      <FriendProfile name="Ellie" />
      <FriendProfile name="Peter" />
      <FriendProfile name="Jess" />

    </ScrollView>
  )
}
function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/charboard.png")} style={{ flex: 1, width: '100%', height: '100%', opacity: 0.6 }}>
        <Image
          style={{
            flex: 1.1,
            width: "85%",
            height: "85%",
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
          source={require("./assets/AppLogo.png")}
        />

        <View
          style={{
            flex: 1
          }}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}> Login</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}> Sign Up</Text>
          </Pressable>
        </View>

      </ImageBackground>
    </View>
  );
}

function SignIn() {
  return (
    <SafeAreaView>
      <Text>Sign Up</Text>
      <Text>Username</Text>
      <TextInput style={styles.inputText} />
      <Text>Password</Text>
      <TextInput style={styles.inputText} />
      <Text>(At least 8 characters)</Text>
      <Image style={{ width: "40%", height: "10%" }} source={require("./assets/116d0e8f-2ca6-4088-ab0a-345e4c91aa4e.jpg")} />
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
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Friends" component={Friends} options={{ name: "John" }} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
  },
  iconView: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    height: "50%",
  },
  friendPic: {
    width: 400,
    height: 400,
    borderRadius: 400 / 2
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: "#E3967E",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 15,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    font: "Helvetica"
  }
})
