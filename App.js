import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import React from "react";
import RootNavigation from "./navigation";


export default function App() {
  return( 
    // <SafeAreaProvider>
  <RootNavigation />
  // </SafeAreaProvider>
  );
}
