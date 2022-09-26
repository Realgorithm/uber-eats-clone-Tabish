import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurant,
} from "../components/home/RestaurantItems";
import BottomTabs from "../components/home/BottomTabs";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurant);
  const [city, setCity] = useState("New York");
  const [activeTab, setActiveTab] = useState("Delivery");
  const YELP_API_KEY =
    "qXsdwAnL1z4iy_sRO1Sxp3mkxdCmgiRMTPvvojsm1KdhtKHC-uMEQWNSogptjTT4z2YfKYsc6gYeOJOskaIHzHzvQaZFBn_gP9xyjiBmHc5J-RuHGKLJehuZpLS5YnYx";
  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2", flex: 1 }}>
      <View style={{ backgroundColor: "#ffffff", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
