import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          {/* Name and avatar */}
          <View className="flex flex-row items-center gap-x-2">
            <Image
              source={{ uri: user?.avatar }}
              className="size-12 rounded-full"
            />
            <View source="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                {user?.name}
              </Text>
            </View>
          </View>

          {/* Bell icon */}
          <Image source={icons.bell} className="size-5" />
        </View>

        {/* Search functionality */}
        <Search />

        {/* Featured section */}
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity className="flex-row items-center justify-center">
              <Text className="text-base font-rubik-bold text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          {/* Featured cards */}
          <View className="flex flex-row items-center justify-between gap-5 mt-5">
            <FeaturedCard />
            <FeaturedCard />
          </View>
        </View>

        {/* All cards heading */}
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">
              Our Recommendations
            </Text>
            <TouchableOpacity className="flex-row items-center justify-center">
              <Text className="text-base font-rubik-bold text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          {/* All cards filters */}
          <Filters />

          {/* All cards section*/}
          <View className="flex flex-row items-center justify-between gap-5 mt-5">
            <Card />
            <Card />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
