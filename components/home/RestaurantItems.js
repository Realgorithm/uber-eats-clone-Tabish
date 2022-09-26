import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export const localRestaurant = [
  {
    name: "Baba Da Dhaba",
    image_url:
      "https://imgs.search.brave.com/hclv7dF-441v_b_E1Ce5bfysV4fO46W-eP8RTwELZUM/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/SEtQYVM3NDZMQVJW/WnhvX1pIOFBRSGFG/aiZwaWQ9QXBp",
    categories: [{ title: "Fast food" }, { title: "Indian food" }],
    price: "₹",
    review_count: "1244",
    rating: "4.5",
  },
  {
    name: "La Pandilla",
    image_url:
      "https://imgs.search.brave.com/H1OgTTrASQ9-1Qj-PCUG9t3BS7o53pMWYpUFK-b7Llk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/WFl0LUg4TURoOTYw/OXJ6U0V3VU5BSGFI/YSZwaWQ9QXBp",
    categories: [{title:"Italian"}, {title:"Pizza"}],
    price: "₹",
    review_count: "976",
    rating: "3.9",
  },
  {
    name: "Thai Tatic",
    image_url:
      "https://imgs.search.brave.com/lJqqqUN0x2kCRCDysHsGhsxFhW6r2WsDTL3M2U4-aYQ/rs:fit:419:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/NW9NZkEwUjdBbzhr/clZGVElJX19BSGFJ/WCZwaWQ9QXBp",
    categories: [{title:"Chinese"}, {title:"Noodles"}],
    price: "₹",
    review_count: "1239",
    rating: "4.0",
  },
];
export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{
            marginBottom: 20,
          }}
          onPress={() => (
            navigation.navigate("RestaurantDetails",
            {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              review_count: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            }
            )
          )}
        >
          <View
            style={{
              marginTop: 6,
              padding: 10,
              backgroundColor: "#fff",
            }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 10 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="black" />
    </TouchableOpacity>
  </>
);
const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    }}
  >
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {props.name}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "grey",
        }}
      >
        35-40 min
      </Text>
    </View>
    <View
      style={{
        backgroundColor: "#f5f5f5",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
