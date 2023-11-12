import { View, Text, Image } from "react-native";
import React from "react";

const HomeHeader = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20
        }}
      >
        <Text>HomeHeader</Text>
        <Text>Pic</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
