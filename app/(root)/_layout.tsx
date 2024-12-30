import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppLayout = () => {
  const { loading, isLoggedIn } = useGlobalContext();

  // When loading show loader
  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  // When not logged in, go to sign-in
  if (!isLoggedIn) return <Redirect href="/sign-in" />;

  return <Slot />;
};

export default AppLayout;
