import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

/**
 * Component to show exact property listing.
 */
const Property = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>Properties</Text>
    </SafeAreaView>
  );
};

export default Property;
