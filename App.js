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
function EntryScreen() {
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
          <TouchableOpacity style={styles.firstButtons} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.firstButtonText}> Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstButtons} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.firstButtonText}> Sign Up</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
}

function Login() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <Text style={{
        color: "#000000",
        flex: 0.4,
        fontSize: 40,
        alignSelf: "flex-start",
        padding: 15,
        marginTop: 50,

      }}
      >Login</Text>
      <View
        style={{
          flex: 1
        }}>
        <View style={{
          marginTop: 3,
        }}>
          <Text style={[styles.centerText, styles.signUpTitles]}>Username</Text>
          <TextInput style={styles.inputText} />
        </View>

        <View style={{
          marginTop: 10,
          marginBottom: 3,
        }}>
          <Text style={[styles.centerText, styles.signUpTitles]}>Password</Text>
          <TextInput style={styles.inputText} />
          <Text
            style={styles.centerText} >At least 8 characters*</Text>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signUpButtonText}> Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1.1
      }}>
        <Text
          style={[styles.centerText, styles.signUpTitles]}>or continue with</Text>
        <View style={styles.horzContainer}>
          <Image
            style={styles.loginIcon}
            source={require("./assets/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png")}
          />
          <Image
            style={styles.loginIcon}
            source={require("./assets/Facebook-logo-blue-circle-large-transparent-png.png")}
          />
        </View>
      </View>
    </View>
  );
}

function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <Text style={{
        color: "#000000",
        flex: 0.4,
        fontSize: 40,
        alignSelf: "flex-start",
        padding: 15,
        marginTop: 50,

      }}
      >Sign Up</Text>
      <View
        style={{
          flex: 1
        }}>
        <View style={{
          marginTop: 3,
        }}>
          <Text style={[styles.centerText, styles.signUpTitles]}>Username</Text>
          <TextInput style={styles.inputText} />
        </View>

        <View style={{
          marginTop: 10,
          marginBottom: 3,
        }}>
          <Text style={[styles.centerText, styles.signUpTitles]}>Password</Text>
          <TextInput style={styles.inputText} />
          <Text
            style={styles.centerText} >At least 8 characters*</Text>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Creation')}>
          <Text style={styles.signUpButtonText}> Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1.1
      }}>
        <Text
          style={[styles.centerText, styles.signUpTitles]}>or continue with</Text>
        <View style={styles.horzContainer}>
          <Image
            style={styles.loginIcon}
            source={require("./assets/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png")}
          />
          <Image
            style={styles.loginIcon}
            source={require("./assets/Facebook-logo-blue-circle-large-transparent-png.png")}
          />
        </View>
      </View>
    </View>
  );
}

function AccountCreated() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <Image
        style={{
          flex: 3,
          width: "80%",
          height: "80%",
          resizeMode: 'contain',
          alignSelf: 'center',

        }}
        source={require("./assets/AppLogo.png")}
      />

      <Text
        style={styles.congrats}>Congratulations!
        Welcome to Your MealSync Account!</Text>

      <View style={{
        flex: 0.3
      }}></View>

      <TouchableOpacity style={[styles.accCreButton, styles.flexOne]} onPress={() => navigation.navigate('SignIn')}>
        <View style={{
          flex: 0.5
        }}></View>
        <Text style={[styles.signUpButtonText, styles.flexOne, styles.font40]}> Continue</Text>
        <View style={{
          flex: 0.5
        }}></View>
      </TouchableOpacity>
      <View style={{
        flex: 0.8
      }}></View>
    </View >
  )
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Creation" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Friends" component={Friends} options={{ name: "John" }} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Creation" component={AccountCreated} />
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
  horzContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 2,
    padding: 10,
    color: "black",
    borderRadius: 10,
    fontSize: 18,
    color: "#000000",
    height: 50,
    marginBottom: 10,
  },
  firstButtons: {
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
  firstButtonText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
  loginIcon: {
    flex: 1,
    width: "50%",
    height: "50%",
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  signUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: "#95BE93",
    borderRadius: 10,
    marginLeft: 125,
    marginRight: 125,
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 2,
    paddingBottom: 2,
  },
  accCreButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: "#95BE93",
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
    flexDirection: 'column',
  },

  signUpButtonText: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },

  font40: {
    fontSize: 40,
  },
  centerText: {
    textAlign: 'center',
  },
  signUpTitles: {
    fontSize: 20,
  },
  flexOne: {
    flex: 1
  },
  congrats: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    textAlign: 'center',
    fontSize: 35
  }
})
