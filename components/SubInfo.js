import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, assets } from "../constants";

export const NFTTitle = ({ titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        Titre
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        Sous-titre
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {/* afficher la chef de projet */}
      <ImageCmp imgUrl={assets.avatar1} index={0} />
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
    </View>
  );
};
