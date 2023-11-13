import { View, Text, Image,TextInput } from "react-native";
import React from "react";
import { HandRaisedIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { COLORS, SIZES, assets } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    const navigation = useNavigation();
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
          source={require("../assets/nft-logo.png")}
          style={{
            
            width: 70,
            height: 80,
            backgroundColor: COLORS.primary,

          }}
        />
      </View>
      <View style={{
                position : "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex : -1
                }}>
                    <View style={{height: 300, backgroundColor: COLORS.primary}}>
                    </View>
                    <View style={{flex: 1, backgroundColor: COLORS.gray}}/>
            </View>
    </View>
  );
}

export default Profile

