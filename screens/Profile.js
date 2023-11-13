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
import { Colors } from "react-native/Libraries/NewAppScreen";

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/nft-logo.png")}
          style={{
            width: 70,
            height: 80,
            backgroundColor: COLORS.primary,
          }}
        />
        </TouchableOpacity>
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
            borderColor: "#30b1cf",
          }}
        />
        <View>
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
    tabBarLabelStyle: { fontSize: SIZES.large, color: COLORS.primary },
    //  tabBarItemStyle: { borderBlockColor: '#fff' },
    tabBarStyle: { 
        marginTop: 20,
        backgroundColor: COLORS.gray,
        borderTopWidth: 1,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
    },
  }}>
        <Tab.Screen name="NFTs" component={NftTab} />
        <Tab.Screen name="Bids" component={BidsTab} />
        <Tab.Screen name="Favorites" component={FavoritesTab} />
      </Tab.Navigator>
    </View>
  );
};

export default Profile;
