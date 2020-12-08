import * as React from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");
import { moderateScale, verticalScale } from "react-native-size-matters";
import Animated from "react-native-reanimated";

import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  button: {
    flex: 2,
    width: 1000,
    height: 500,
    padding: 1000,
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={{ flex: 1, backgroundColor: "#E0E4CC", justifyContent: "flex-start" }}>
        <View style={{ height: height * 0.5,  justifyContent: "center",  alignItems: "center" }}>
          <View style={{
			  height: verticalScale(450),
			  width: moderateScale(450),
			  backgroundColor: "#E0E4CC",
			  alignItems: "center",
			  justifyContent: "center",
			  padding: 10,
		  }}
          >
            <Image
              source={require("@../../../assets/images/boygirl.png")}
              style={{ flex: 1, width: 500, height: 500 }}
              resizeMode="contain"
            />
          </View>
        </View>
        <Animated.View
          style={{
            backgroundColor: "#2133A0",
            height: height * 0.35,
            width: width,
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text style={{
			  variant: "title",
			  fontSize: 36,
			  color: "#fff",
			  bottom: 10,
			   textAlign: "center"
			   }}>
            Quiz App
          </Text>

          <Text
		  style={{
			variant: "body",
            color: "#ffffff",
            textAlign: "center",
            bottom: 10,
		  }}

          >
            Improve your app building skills and upgrade your personal growth
          </Text>
          <Button
            title="Go to Questions"
            onPress={() => {
              /* 1. Navigate to the Questions route with params */
              navigation.navigate("Questions", {
                currentQuestion: 1,
                score: 0
			  });
			}}
			textTransform="uppercase"
          />
        </Animated.View>
      </View>
      <StatusBar style={{ backgroundColor: "#2133A0" }} style="light"/>
    </SafeAreaView>
  );
}
