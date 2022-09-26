import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Chicken Tikka",
        description:
          "Amazing Indian dish with a unique twist of spices and herbs.",
        image:
          "https://imgs.search.brave.com/_GbCZEdsc-Or9eUCSg21mCRtduTh9N4AKyg056Ya2Mk/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/czVsTnl2bFM0OGZW/ZWdxLUxoTkxnSGFF/OCZwaWQ9QXBp",
        price: "₹200",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("₹", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalRupee = total.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR", // INR is the currency code
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unSubscribed = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return () => unSubscribed();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green Checkmark */}
      <View
        style={{
          margin: 20,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          source={require("../assets/animations/check-mark.json")}
          autoPlay={true}
          loop={false}
          speed={0.5}
          style={{
            height: 100,
            alignSelf: "center",
            marginBottom: 10,
          }}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Your order at
          <Text
            style={{
              fontStyle: "italic",
              fontSize: 25,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "green",
            }}
          >
            {" "}
            {restaurantName}{" "}
          </Text>
          has been placed for ₹{totalRupee} Successfully
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 10,
          }}
        >
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />

          <LottieView
            source={require("../assets/animations/cooking.json")}
            autoPlay={true}
            loop={true}
            speed={0.8}
            style={{
              // width: 200,
              height: 200,
              alignSelf: "center",
              marginBottom: 30,
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
