import { View, Text, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native";
import React from "react";

//import Restaurant Details components here
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const foods = [
  {
    title: "Chicken Tikka",
    description: "Amazing Indian dish with a unique twist of spices and herbs.",
    image:
      "https://imgs.search.brave.com/_GbCZEdsc-Or9eUCSg21mCRtduTh9N4AKyg056Ya2Mk/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/czVsTnl2bFM0OGZW/ZWdxLUxoTkxnSGFF/OCZwaWQ9QXBp",
    price: "₹200",
  },
  {
    title: "Biryani",
    description:
      "A world-renowned Indian dish, biryani takes time and practice to make but is worth every bit of the effort.",
    image:
      "https://imgs.search.brave.com/OFp3zwbetoK5MXs5Yg0uGf7Z0fcX50wI2XeQF1ii6SQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/VUl6eW8wS1VXOHlW/OUx6NHdXQVNRSGFI/YSZwaWQ9QXBp",
    price: "₹120",
  },
  {
    title: "Litti Chokha",
    description:
      "Litti, along with chokha, is a complete meal that originated from the Indian state of Bihar",
    image:
      "https://imgs.search.brave.com/tpM82owmqUTsHLXgbuZbLlOCNtsYMUjP_9GkhRp-Dvw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/OGFRQ3IzNkdobl9s/cFQ2ZF9vVFh3SGFI/YSZwaWQ9QXBp",
    price: "₹100",
  },
  {
    title: "Jalebi",
    description: "This is a Bihari dish of round shape and a sweet taste.",
    image:
      "https://imgs.search.brave.com/MqS-ZgRkRpxVeD6uR1wGnVcQroiI1LTDCM1ACTs8uFQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/bHpRTGVOVzR0bjdR/cXZoc2RmRUFRSGFG/aiZwaWQ9QXBp",
    price: "₹10",
  },
  {
    title: "Pizza",
    description:
      "This is a dish that is a must try for any Italian restaurant.",
    image:
      "https://imgs.search.brave.com/7JC_dnOaSm8e0gqAPfGweZ2pmx2N0qN7NC7oIuSxU4I/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/MUQxNC03aWN6b1E3/SDF4OGVxdTFBSGFF/OCZwaWQ9QXBp",
    price: "₹400",
  },
  {
    title: "Butter Naan",
    description:
      " This is a dish that is a must try for any Indian restaurant.",
    image:
      "https://imgs.search.brave.com/1JOfdXjuK6jRJia-474DAK64pDzxb6X4s3M9xF0RsKg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/d0hMTWRoQnZTN3pl/QzdZeTU1cFhBSGFF/OCZwaWQ9QXBp",
    price: "₹200",
  },
];

export default function RestaurantDetails({ route, navigation }) {
  return (
    <>
      <View>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        </View>

        <ScrollView>
        <MenuItems restaurantName={route.params.name} foods={foods}/>
        </ScrollView>

        <View>
        <ViewCart navigation={navigation} />
      </View>
  </>
  );
}
