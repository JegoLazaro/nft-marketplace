import { View, Text, Image,TextInput } from "react-native";
import React from "react";
import { HandRaisedIcon } from "react-native-heroicons/solid";
import { COLORS } from "../constants";
// import { TextInput } from "react-native-gesture-handler";

const HomeHeader = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingHorizontal: 20
        }}
      >
        {/* <Text>HomeHeader</Text> */}
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            marginTop: 10,
            width: 110,
            height: 30,
          }}
        />
        <Image
          source={require("../assets/images/prof_pic.jpg")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 40,
          }}
        />
      </View>
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: COLORS.white, paddingBottom: 2 }}>
          Hello, Jego
          <HandRaisedIcon size={14} color={COLORS.white} />
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.white,
            paddingBottom: 5,
          }}
        >
          Welcome to NFT Market
        </Text>
      </View>
      <View>
        <TextInput />
      </View>
    </View>
  );
};

export default HomeHeader;
