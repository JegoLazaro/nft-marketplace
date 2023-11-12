import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import { HeartIcon as HeartOut } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  const [isFave, toggleFave] = useState(false);
  const HeartOutline = () => {
    return <HeartOut size={24} color={COLORS.primary} fill={COLORS.white} />;
  };
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.lights,
        ...props,
      }}
      onPress={() => toggleFave(!isFave)}
    >
      {/* <Image source={imgUrl} resizeMode="contain" style={{width: 24, height: 24}}/> */}
      {isFave ? <HeartIcon size={24} color={"red"} /> : HeartOutline()}
    </TouchableOpacity>
  );
};

export const RecButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: "center",
      }}>
        Place a Bid
      </Text>
    </TouchableOpacity>
  );
};
