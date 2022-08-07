import React from "react";
import { StyleSheet, FlatList, ListRenderItem, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem, Avatar } from "react-native-elements";
import { Dish } from "../types/dish";
import { DISHES } from "../shared/dishes";
// import { navigate } from "../services/NavigationService";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/stack";
import { useNavigation } from "@react-navigation/native";

type MenuProps = NativeStackNavigationProp<RootStackParamList, "Menu">;

const MenuScreen = (props: MenuProps) => {
  const navigation = useNavigation<MenuProps>();

  const renderMenuItem: ListRenderItem<Dish> = (dish) => {
    return (
      <ListItem
        key={dish.item.id}
        onPress={() =>
          navigation.navigate<"DishDetail">("DishDetail", {
            dishId: dish.item.id,
          })
        }
      >
        <ListItem.Content>
          <Avatar
            size={64}
            rounded
            source={{
              uri: `${dish.item.image}`,
            }}
          />
          <ListItem.Title>{dish.item.name}</ListItem.Title>
          <ListItem.Subtitle>{dish.item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <FlatList
        data={DISHES}
        renderItem={renderMenuItem}
        keyExtractor={(dish) => dish.id.toString()}
      ></FlatList>
    </SafeAreaProvider>
  );
};

MenuScreen.title = "Menu";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default MenuScreen;
