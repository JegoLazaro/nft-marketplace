import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";

const Details = () => {
  const {
    params: { data },
  } = useRoute();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        //alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={{
          color: COLORS.primary,
          paddingTop: 70,
          paddingLeft: 10,
        }}
        className="rounded-xl p-1"
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
      </TouchableOpacity>
      {/* <Text>Details</Text> */}
      <View
        style={{
          width: "95%",
          height: "60%",
          paddingTop: 120,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          borderRadius: 15,
          marginLeft: 10,
          paddingTop: 40
        }}
      >
        <Image
          style={{
            resizeMode: "cover",
            width: "90%",
            height: 500,
            borderRadius: 15,
            ...SHADOWS.dark,
          }}
          source={data.image}
        />
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
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.white }} />
      </View>
    </View>
  );
};

export default Details;
