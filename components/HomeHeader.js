import { View, Text, Image,TextInput } from "react-native";
import React from "react";
import { HandRaisedIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { COLORS, SIZES, assets } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = ({onSearch}) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          source={require("../assets/images/prof_pic.jpg")}
          style={{
            marginTop: 10,
            width: 70,
            height: 70,
            borderRadius: 40,
          }}
        />
        </TouchableOpacity>
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
      <View style={{marginTop: SIZES.font}}>
        <View style={{
          marginHorizontal: 10, 
          width: '95%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          {/* <Image 
            source={assets.search}
            resizeMode="contain"
            style={{
              color: COLORS.primary,
              width: SIZES.font,
              height: SIZES.font,
              marginRight: SIZES.base
            }}
          /> */}
          <MagnifyingGlassIcon size={20} color={COLORS.primary} style={{
            marginRight: 10
          }}/>
        <TextInput 
          placeholder="Search NFTs..."
          style={{flex : 1}}
          onChangeText={onSearch}
        />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
