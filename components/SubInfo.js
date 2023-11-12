import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, SHADOWS, COLORS, assets } from "../constants";

export const NftTitle = ({ title, subTitle, subTitleSize, titleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
        //   fontFamily: FONTS.bold,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({price}) => {
  return (
    <View style={{
        flexDirection: 'row',
        alignItems: "center",
    }}>
      <Image 
        source={assets.eth}
        resizeMode="contain"
        style={{
            width: 20,
            height: 20,
            marginRight: 2
        }}
      />
      <Text style={{fontSize: SIZES.font, color: COLORS.primary}}>
        {price}
      </Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 58,
        height: 58,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = ({ imgUrl, index }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          //   fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.black,
          //   textAlign: "center",
        }}
      >
        Ending in:
      </Text>
      <Text
        style={{
          fontWeight: 800,
          fontSize: SIZES.medium,
          color: COLORS.primary,
          //   textAlign: "center",
        }}
      >
        12h 30m 36s
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
