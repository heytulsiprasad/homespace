import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

/**
 * Component to show exact property listing.
 */
const Property = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Property</Text>
    </View>
  );
};

export default Property;
