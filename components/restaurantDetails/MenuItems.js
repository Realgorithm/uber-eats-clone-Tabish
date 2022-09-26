import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";



const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 9,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "italic",
  },
  descriptionStyle: {
    fontSize: 15,
    fontFamily: "sans-serif-condensed",
  },
});

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    // Loops start here
    <ScrollView>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "grey", borderRadius: 2 }}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage image={food} marginLeft ={marginLeft ? marginLeft:0}/>
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 10 }}
          />
        </View>
      ))}
    </ScrollView>

    // loop ends here
  );
}
const FoodInfo = (props) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
    }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={styles.descriptionStyle}>{props.food.description}</Text>
    <Text style={{ fontSize: 18, fontWeight: "700", color: "green" }}>
      {props.food.price}
    </Text>
  </View>
);
const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image
      source={{ uri: props.image.image }}
      style={{ width: 100, height: 100, borderRadius: 10, marginLeft: marginLeft }}
    />
  </View>
);
