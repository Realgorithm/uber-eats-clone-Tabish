import { View, Text, Image } from "react-native";
import React from "react";
const yelpRestaurantInfo = {
  name: "Al-Faisal Restaurant",
  image:
    "https://imgs.search.brave.com/2zFwnRxXxjK3keHzfxj11rSyu099QcfuHAr8Z3H_31k/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/Q3Y1ZlBiVmVCOXNw/REh6ZktqSXZRSGFG/aiZwaWQ9QXBp",
  price: "$$",
  review_count: "1500",
  rating: 4.5,
  categories: [{ title: "Terrorist group" }, { title: "Indian food" }],
};

export default function About(props) {
  const { name, image, price, review_count, rating, categories } =
    props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" 🔂 ");
  const description = `${formattedCategories} ${
    price ? "." + price : ""
  }. 🎫 . ${rating} . ⭐️ . (${review_count}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 200 }} />
);
const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 25,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15,
      marginTop: 10,
      fontWeight: "400",
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
