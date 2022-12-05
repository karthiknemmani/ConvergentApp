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
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { ScreenStackHeaderLeftView } from "react-native-screens";
import MapView from "react-native-maps";
import { MultiSelect } from "react-native-element-dropdown";
import { Marker } from "react-native-maps";
import { setSyntheticLeadingComments } from "typescript";

function FriendProfile(props) {
  const id = props.name;
  return (
    <View>
      {/* <Image
        style={styles.friendPic}
      //source={require(props.name)}
      /> */}
      <Text>{JSON.stringify(id)}</Text>
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
  );
}
function EntryScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/charboard.png")}
        style={{ flex: 1, width: "100%", height: "100%", opacity: 0.6 }}
      >
        <Image
          style={{
            flex: 1.1,
            width: "85%",
            height: "85%",
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={require("./assets/AppLogo.png")}
        />

        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={styles.firstButtons}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.firstButtonText}> Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.firstButtons}
            onPress={() => navigation.navigate("SignIn")}
          >
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
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Text
        style={{
          color: "#000000",
          flex: 0.4,
          fontSize: 40,
          alignSelf: "flex-start",
          padding: 15,
          marginTop: 50,
        }}
      >
        Login
      </Text>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            marginTop: 3,
          }}
        >
          <Text style={[styles.centerText, styles.signUpTitles]}>Username</Text>
          <TextInput style={styles.inputText} />
        </View>

        <View
          style={{
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={[styles.centerText, styles.signUpTitles]}>Password</Text>
          <TextInput style={styles.inputText} />
          <Text style={styles.centerText}>At least 8 characters*</Text>
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Restaurant")}
        >
          <Text style={styles.signUpButtonText}> Continue</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.1,
        }}
      >
        <Text style={[styles.centerText, styles.signUpTitles]}>
          or continue with
        </Text>
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
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Text
        style={{
          color: "#000000",
          flex: 0.4,
          fontSize: 40,
          alignSelf: "flex-start",
          padding: 15,
          marginTop: 50,
        }}
      >
        Sign Up
      </Text>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            marginTop: 3,
          }}
        >
          <Text style={[styles.centerText, styles.signUpTitles]}>Username</Text>
          <TextInput style={styles.inputText} />
        </View>

        <View
          style={{
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={[styles.centerText, styles.signUpTitles]}>Password</Text>
          <TextInput style={styles.inputText} />
          <Text style={styles.centerText}>At least 8 characters*</Text>
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Allergies")}
        >
          <Text style={styles.signUpButtonText}> Continue</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.1,
        }}
      >
        <Text style={[styles.centerText, styles.signUpTitles]}>
          or continue with
        </Text>
        <View style={styles.horzContainer}>
          <TouchableOpacity>
            <Image
              style={styles.loginIcon}
              source={require("./assets/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.loginIcon}
              source={require("./assets/Facebook-logo-blue-circle-large-transparent-png.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function AccountCreated() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Image
        style={{
          flex: 3,
          width: "80%",
          height: "80%",
          resizeMode: "contain",
          alignSelf: "center",
        }}
        source={require("./assets/AppLogo.png")}
      />

      <Text style={styles.congrats}>
        Congratulations! Welcome to Your MealSync Account!
      </Text>

      <View
        style={{
          flex: 0.3,
        }}
      ></View>

      <TouchableOpacity
        style={[styles.accCreButton, styles.flexOne]}
        onPress={() => navigation.navigate("Restaurant")}
      >
        <View
          style={{
            flex: 0.5,
          }}
        ></View>
        <Text style={[styles.signUpButtonText, styles.flexOne, styles.font40]}>
          {" "}
          Continue
        </Text>
        <View
          style={{
            flex: 0.5,
          }}
        ></View>
      </TouchableOpacity>
      <View
        style={{
          flex: 0.8,
        }}
      ></View>
    </View>
  );
}

function Options() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  return (
    <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        style={{
          marginTop: 50,
        }}
      />
    </SafeAreaView>
  );
}

function Restaurant() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <View style={{ flex: 0.4 }}></View>
      <View
        style={{
          flex: 2,
          width: "90%",
          height: "80%",
          borderColor: "#E3967E",
          borderWidth: 5,
          alignSelf: "center",
          borderRadius: 15,
        }}
      >
        <Text style={styles.congrats}>The Pizza Press</Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Image
              style={styles.healthIcon}
              source={require("./assets/icons8-no-gluten-100.png")}
            />
            <Image
              style={styles.healthIcon}
              source={require("./assets/icons8-vegetarian-mark-96.png")}
            />
          </View>
          <View style={{ flex: 1 }}></View>
          <Text style={{ color: "#000000", fontSize: 20, flex: 1.3 }}>
            9 minute Walk
          </Text>
        </View>

        <View
          style={{
            flex: 4.4,
            width: "90%",
            height: "100%",
            alignSelf: "center",
            borderRadius: 15,
            backgroundColor: "#E3967E",
          }}
        >
          <View style={{ flex: 0.1 }}></View>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              flex: 1,
              textAlign: "center",
              fontSize: 30,
              color: "#fff",
            }}
          >
            Popular Menu Items:{" "}
          </Text>
          <Text
            style={{
              marginLeft: 30,
              marginRight: 10,
              flex: 1,
              fontSize: 25,
              color: "#fff",
            }}
          >
            “The Chronicle” with gluten free pizza crust{" "}
          </Text>
          <View style={{ flex: 0.3 }}></View>
          <Text
            style={{
              marginLeft: 30,
              marginRight: 10,
              flex: 1,
              fontSize: 25,
              color: "#fff",
            }}
          >
            “Build Your Own” Pizza with gluten free crust{" "}
          </Text>
          <View style={{ flex: 0.3 }}></View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <View style={{ flex: 0.1 }}></View>
            <Image
              style={styles.friendIcon}
              source={require("./assets/icons8-meeting-room-100.png")}
            />
            <Text
              style={{
                flex: 2,
                textAlign: "center",
                fontSize: 15,
                color: "#fff",
                alignSelf: "center",
                textDecorationLine: "underline",
              }}
            >
              Liked by Heather and 3 others
            </Text>
          </View>
          <View style={{ flex: 0.2 }}></View>
        </View>
        <View style={{ flex: 0.4 }}></View>
      </View>

      <View style={{ flex: 0.6 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.chooseIcons}
            onPress={() => navigation.navigate("Restaurant2")}
          >
            <Image
              style={styles.chooseIcons}
              source={require("./assets/icons8-cancel-480.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.undoIcon}
            onPress={() => navigation.navigate("Restaurant2")}
          >
            <Image
              style={styles.undoIcon}
              source={require("./assets/icons8-undo-96.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chooseIcons}
            onPress={() => navigation.navigate("Restaurant2")}
          >
            <Image
              style={styles.chooseIcons}
              source={require("./assets/icons8-checkmark-480.png")}
              onPress={() => navigation.navigate("Restaurant2")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 0.5,
          justifyContent: "flex-end",
          backgroundColor: "#E3967E",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Restaurant")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-country-house-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Map")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-google-maps-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeBarTouch}>
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-friends-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-gear-100.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Restaurant2() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <View style={{ flex: 0.4 }}></View>
      <View
        style={{
          flex: 2,
          width: "90%",
          height: "80%",
          borderColor: "#E3967E",
          borderWidth: 5,
          alignSelf: "center",
          borderRadius: 15,
        }}
      >
        <Text style={styles.congrats}>Gyrodelicious</Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Image
              style={styles.healthIcon}
              source={require("./assets/icons8-no-gluten-100.png")}
            />
            <Image
              style={styles.healthIcon}
              source={require("./assets/icons8-vegetarian-mark-96.png")}
            />
          </View>
          <View style={{ flex: 1 }}></View>
          <Text style={{ color: "#000000", fontSize: 20, flex: 1.3 }}>
            12 minute Walk
          </Text>
        </View>

        <View
          style={{
            flex: 4.4,
            width: "90%",
            height: "100%",
            alignSelf: "center",
            borderRadius: 15,
            backgroundColor: "#E3967E",
          }}
        >
          <View style={{ flex: 0.1 }}></View>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              flex: 1,
              textAlign: "center",
              fontSize: 30,
              color: "#fff",
            }}
          >
            Popular Menu Items:{" "}
          </Text>
          <Text
            style={{
              marginLeft: 30,
              marginRight: 10,
              flex: 1,
              fontSize: 25,
              color: "#fff",
            }}
          >
            Falafel Wrap with Fresh Vegetables{" "}
          </Text>
          <View style={{ flex: 0.3 }}></View>
          <Text
            style={{
              marginLeft: 30,
              marginRight: 10,
              flex: 1,
              fontSize: 25,
              color: "#fff",
            }}
          >
            Falafel Bowl with Fresh Vegetables{" "}
          </Text>
          <View style={{ flex: 0.3 }}></View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <View style={{ flex: 0.1 }}></View>
            <Image
              style={styles.friendIcon}
              source={require("./assets/icons8-meeting-room-100.png")}
            />
            <Text
              style={{
                flex: 2,
                textAlign: "center",
                fontSize: 15,
                color: "#fff",
                alignSelf: "center",
                textDecorationLine: "underline",
              }}
            >
              Liked by Roger and 8 others
            </Text>
          </View>
          <View style={{ flex: 0.2 }}></View>
        </View>
        <View style={{ flex: 0.4 }}></View>
      </View>

      <View style={{ flex: 0.6 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.chooseIcons}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              style={styles.chooseIcons}
              source={require("./assets/icons8-cancel-480.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.undoIcon}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              style={styles.undoIcon}
              source={require("./assets/icons8-undo-96.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.chooseIcons}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              style={styles.chooseIcons}
              source={require("./assets/icons8-checkmark-480.png")}
              onPress={() => navigation.navigate("Restaurant2")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 0.5,
          justifyContent: "flex-end",
          backgroundColor: "#E3967E",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Restaurant")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-country-house-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Map")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-google-maps-100.png")}
            onPress={() => navigation.navigate("Map")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeBarTouch}>
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-friends-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeBarTouch}>
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-gear-100.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Map() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Text
        style={{
          color: "#000000",
          flex: 0.4,
          fontSize: 40,
          alignSelf: "flex-start",
          marginTop: 50,
          padding: 15,
        }}
      >
        Places Near Me
      </Text>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
        }}
      >
        <Image
          style={styles.healthIcon}
          source={require("./assets/icons8-no-gluten-100.png")}
        />
        <Image
          style={styles.healthIcon}
          source={require("./assets/icons8-vegetarian-mark-96.png")}
        />
        <View style={{ flex: 4 }}></View>
      </View>
      {/* map portion */}
      <View style={{ flex: 3, width: "100%", height: "100%" }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 30.284659422379924,
            longitude: -97.73375188577016,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{ latitude: 30.2907, longitude: -97.74201 }}
            image={require("./assets/icons8-location-48.png")}
            title="The Pizza Press"
          />
          <Marker
            coordinate={{ latitude: 30.28341, longitude: -97.74072 }}
            image={require("./assets/icons8-location-48.png")}
            title="Gyrodelicious"
          />
        </MapView>
      </View>
      <View style={{ flex: 0.75 }}></View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Image
          style={styles.transportIcon}
          source={require("./assets/icons8-walking-100.png")}
        />
        <Image
          style={styles.transportIcon}
          source={require("./assets/icons8-car-90.png")}
        />
        <Image
          style={styles.transportIcon}
          source={require("./assets/icons8-bus-100.png")}
        />
        <Image
          style={styles.transportIcon}
          source={require("./assets/icons8-cycling-100.png")}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "#E3967E",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Restaurant")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-country-house-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Map")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-google-maps-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeBarTouch}>
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-friends-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeBarTouch}>
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-gear-100.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Allergies() {
  const navigation = useNavigation();
  const dietary = [
    { label: "Nuts", value: "1" },
    { label: "Eggs", value: "2" },
    { label: "Dairy", value: "3" },
    { label: "Soy", value: "4" },
    { label: "Fish", value: "5" },
  ];
  const [selected, setSelected] = React.useState([]);

  const renderDataItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
      <Text
        style={{
          color: "#000000",
          flex: 0.4,
          fontSize: 40,
          alignSelf: "flex-start",
          marginTop: 50,
          padding: 15,
        }}
      >
        Allergies
      </Text>
      <View style={styles.dropdownView}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={dietary}
          labelField="label"
          valueField="value"
          placeholder="Select allergies"
          value={selected}
          activeColor="#E3967E"
          onChange={(item) => {
            setSelected(item);
          }}
          renderItem={renderDataItem}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
              <View style={styles.selectedStyle}>
                <Text style={styles.textSelectedStyle}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={[styles.accCreButton, styles.flexOne]}
        onPress={() => navigation.navigate("Restrictions")}
      >
        <View
          style={{
            flex: 0.5,
          }}
        ></View>
        <Text style={[styles.signUpButtonText, styles.flexOne, styles.font40]}>
          {" "}
          Continue
        </Text>
        <View
          style={{
            flex: 0.4,
          }}
        ></View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Restrictions() {
  const navigation = useNavigation();
  const rest = [
    { label: "Vegan", value: "1" },
    { label: "Vegetarian", value: "2" },
    { label: "Gluten-Free", value: "3" },
    { label: "Lactose Intolerant", value: "4" },
    { label: "Halal", value: "5" },
    { label: "Other", value: "6" },
  ];
  const [selected, setSelected] = React.useState([]);

  const renderDataItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
      <Text
        style={{
          color: "#000000",
          flex: 0.4,
          fontSize: 40,
          alignSelf: "flex-start",
          marginTop: 50,
          padding: 15,
        }}
      >
        Restrictions
      </Text>
      <View style={styles.dropdownView}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={rest}
          labelField="label"
          valueField="value"
          placeholder="Select restrictions"
          activeColor="#E3967E"
          value={selected}
          search
          searchPlaceholder="Find restrictions or select other"
          onChange={(item) => {
            setSelected(item);
          }}
          renderItem={renderDataItem}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
              <View style={styles.selectedStyle}>
                <Text style={styles.textSelectedStyle}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={[styles.accCreButton, styles.flexOne]}
        onPress={() => navigation.navigate("Creation")}
      >
        <View
          style={{
            flex: 0.5,
          }}
        ></View>
        <Text style={[styles.signUpButtonText, styles.flexOne, styles.font40]}>
          {" "}
          Continue
        </Text>
        <View
          style={{
            flex: 0.5,
          }}
        ></View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Settings() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Text
        style={{
          color: "#000000",
          flex: 0.85,
          fontSize: 40,
          alignSelf: "flex-start",
          marginTop: 50,
          padding: 15,
        }}
      >
        Settings
      </Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate("Entry")}
      >
        <Text style={styles.signUpButtonText}> Sign Out</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 0.2,
          justifyContent: "flex-end",
          backgroundColor: "#E3967E",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Restaurant")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-country-house-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Map")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-google-maps-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeBarTouch}>
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-friends-100.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeBarTouch}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.homeBarIcons}
            source={require("./assets/icons8-gear-100.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Entry"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={{ name: "John" }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Creation" component={AccountCreated} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Restaurant2" component={Restaurant2} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Allergies" component={Allergies} />
        <Stack.Screen name="Restrictions" component={Restrictions} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
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
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    backgroundColor: "#E3967E",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 15,
    marginBottom: 15,
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
    resizeMode: "contain",
    alignSelf: "center",
  },
  signUpButton: {
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    backgroundColor: "#95BE93",
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
    flexDirection: "column",
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
    textAlign: "center",
  },
  signUpTitles: {
    fontSize: 20,
  },
  flexOne: {
    flex: 1,
  },
  congrats: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    textAlign: "center",
    fontSize: 35,
  },
  homeBarIcons: {
    height: 10,
    flex: 1,
    resizeMode: "contain",
  },
  homeBarTouch: {
    flex: 1,
    margin: 10,
    height: 70,
    alignItems: "center",
    width: 10,
  },
  healthIcon: {
    height: 35,
    flex: 1,
    resizeMode: "contain",
    width: 35,
  },
  friendIcon: {
    height: 55,
    flex: 0.5,
    resizeMode: "contain",
  },
  chooseIcons: {
    flex: 1,
    height: "70%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  undoIcon: {
    flex: 1,
    height: "45%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  transportIcon: {
    height: 50,
    flex: 1,
    resizeMode: "contain",
  },
  dropdown: {
    height: 90,
    backgroundColor: "#E3967E",
    borderRadius: 30,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 30,
  },
  dropdownElements: {
    fontSize: 20,
  },

  selectedTextStyle: {
    color: "#000000",
    fontSize: 30,
    padding: 15,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#95BE93",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  dropdownView: {
    flex: 3,
    width: "75%",
    height: "75%",
    resizeMode: "contain",
    alignSelf: "center",
  },
});
