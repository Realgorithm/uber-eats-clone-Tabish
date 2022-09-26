import "../../ignoreWarning";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItems from "./OrderItems";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const addOrderToFirebase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderCompleted");
        }, 2500);
      });
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      borderWidth: 1,
      height: 470,
    },
    restaurantName: {
      backgroundColor: "lightblue",
      paddingVertical: 8,
      textAlign: "center",
      fontWeight: "700",
      fontSize: 25,
      marginBottom: 15,
      borderRadius: 10,
    },
    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#469",
      borderTopWidth: 1,
      borderTopColor: "#479",
    },
    subtotalText: {
      fontSize: 20,
      fontWeight: "600",
      textAlign: "left",
      marginHorizontal: 15,
    },
    finalButton: {
      backgroundColor: "black",
      padding: 13,
      borderRadius: 30,
      marginVertical: 17,
      alignItems: "center",
      width: "50%",
      position: "relative",
    },
    finalText: {
      color: "white",
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
    },
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              {items.map((item, index) => (
                <OrderItems key={index} item={item} />
              ))}
            </ScrollView>

            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal:</Text>
              <Text style={styles.subtotalText}>₹{totalRupee}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <TouchableOpacity
                style={styles.finalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.finalText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.finalButton}
                onPress={() => {
                  addOrderToFirebase();
                  setModalVisible(false);
                }}
              >
                <Text style={styles.finalText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 85,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                marginTop: 18,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 23,
                  fontWeight: "700",
                  marginRight: 50,
                }}
              >
                View Cart
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "500",
                  marginRight: 10,
                }}
              >
                ₹{totalRupee}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View style={
          {
            flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.5)",

          }
        }>
        <View
          style={{
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            height: 900,
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
