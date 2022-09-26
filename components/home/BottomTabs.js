import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        margin: 10,
      }}
    >
      <Icons icon="home" text="Home" />
      <Icons icon="search" text="Browse" />
      <Icons icon="shopping-bag" text="Grocery" />
      <Icons icon="receipt" text="Orders" />
      <Icons icon="user" text="Account" />
    </View>
  );
}
// create a FontAwesome5 icon component
const Icons = (props) => (
  <TouchableOpacity>
  <View style={{}}>
    <FontAwesome5
      name={props.icon}
      size={25}
      style={{
        marginBottom: 3,
        alignSelf: "center",
      }}
    />
    <Text>{props.text}</Text>
  </View>
  </TouchableOpacity>
);
