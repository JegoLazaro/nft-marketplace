import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import {
  HandRaisedIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from "react-native-heroicons/solid";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NFTCard } from "../components";
import Details from "./Details";
import NftTab from "./NftTab";
import BidsTab from "./BidsTab";
import FavoritesTab from "./FavoritesTab";

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  const navigation = useNavigation();
  const userName = "Jego Lazaro";
  const userNumber = "#19252";

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingHorizontal: 20,
          marginVertical: 50,
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
        <EllipsisHorizontalIcon size={40} color={COLORS.gray} />
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/prof_pic.jpg")}
          style={{
            width: 170,
            height: 170,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: COLORS.gray,
          }}
        />
        <View
          style={
            {
              // justifyContent: "center"
            }
          }
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.extraLarge,
              fontWeight: 600,
            }}
          >
            {userName}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.large,
              fontWeight: 400,
            }}
          >
            {userNumber}
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
        <View style={{ flex: 1, backgroundColor: COLORS.gray }} />
      </View>
      <Tab.Navigator screenOptions={{
    tabBarLabelStyle: { fontSize: SIZES.large },
    // tabBarItemStyle: { width: 100 },
    tabBarStyle: { 
        marginTop: 20,
        backgroundColor: COLORS.gray,
        borderTopColor: COLORS.primary,
        borderTopWidth: 1,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
    },
  }}>
        <Tab.Screen name="NFT" component={NftTab} />
        <Tab.Screen name="Bids" component={BidsTab} />
        <Tab.Screen name="Favorites" component={FavoritesTab} />
      </Tab.Navigator>
    </View>
  );
};

export default Profile;
