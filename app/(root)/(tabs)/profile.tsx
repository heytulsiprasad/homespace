import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { logout } from "@/lib/appwrite";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import clsx from "clsx";
import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/global-provider";

interface SettingsItemProps {
  icon: string;
  title: string;
  onPress: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    className="w-full flex flex-row items-center justify-between"
    onPress={onPress}
  >
    <View className="flex flex-row items-center gap-x-2 w-full">
      <Image source={icon} className="size-8" />
      <Text
        className={clsx("text-lg font-rubik-medium text-black-300", textStyle)}
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      Alert.alert("Success", "You have been logged out");
      refetch(); // refetching user and navigating back to signin
    } else {
      Alert.alert("Error", "Failed to logout");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="w-full flex flex-col items-center justify-between mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={{ uri: user?.avatar }}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-5" />
            </TouchableOpacity>
            <Text className="text-lg font-rubik-bold text-black-300 mt-2">
              {user?.name}
            </Text>
          </View>
        </View>

        {/* List of settings */}
        <View className="w-full flex flex-col gap-y-4 mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>

        <View
          className={clsx(
            "w-full flex flex-col gap-y-4 mt-4",
            "border-t pt-5 border-primary-200"
          )}
        >
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        <View
          className={clsx(
            "w-full flex flex-col gap-y-4 mt-4",
            "border-t pt-5 border-primary-200"
          )}
        >
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-red-500"
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
