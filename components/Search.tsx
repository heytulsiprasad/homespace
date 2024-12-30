import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  console.log(path);

  const params = useLocalSearchParams<{ query?: string }>();

  const [search, setSearch] = useState(params.query || "");

  const debouncedSearch = useDebouncedCallback(async (text: string) => {
    console.log(text);
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text); // debounce the search
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />
        <TextInput
          className="text-base font-rubik text-black-300 ml-2 flex-1"
          placeholder="Search for anything"
          onChangeText={handleSearch}
          value={search}
        />
      </View>

      <TouchableOpacity className="flex-row items-center justify-center">
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
