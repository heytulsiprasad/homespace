import { View, Text, Image } from "react-native";
import React from "react";
import clsx from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

interface Icon {
  title: string;
  icon: string;
  focused: boolean;
}

const TabIcon = ({ focused, icon, title }: Icon) => (
  <View className="flex-1 mt-3 flex flex-col items-center justify-center">
    <Image
      source={icon}
      className={clsx("w-8 h-8")}
      tintColor={focused ? "#0061FF" : "#8C8E98"}
      resizeMode="contain"
    />
    <Text
      className={clsx(
        "text-xs w-full text-center",
        focused
          ? "text-primary-300 font-rubik-medium"
          : "text-black-200 font-rubik"
      )}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="You" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
