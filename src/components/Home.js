import React from "react";
import { View, SafeAreaView, Image, Dimensions, Button } from "react-native";

const { height, width } = Dimensions.get("window");
import { moderateScale, verticalScale } from "react-native-size-matters";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

export const welcomeAssets = require("../../assets/images/boygirl.png");

export default function Home() {
  return (
    <SafeAreaView>
      <View flex={1} backgroundColor="#ffffff" justifyContent="flex-start">
        <View height={height * 0.5} justifyContent="center" alignItems="center">
          <View
            height={verticalScale(250)}
            width={moderateScale(250)}
            backgroundColor="#ffffff"
            alignItems="center"
            justifyContent="center"
            padding="16"
          >
            <Image
              source={welcomeAssets}
              style={{
                flex: 1,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <StatusBar backgroundColor="#2133A0" style="light" />
    </SafeAreaView>
  );
}
