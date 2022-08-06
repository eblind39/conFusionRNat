import React from "react";
import { StyleSheet, FlatList, ListRenderItem, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem, Avatar } from "react-native-elements";
import { Dish } from "../types/dish";
import { DISHES } from "../shared/dishes";
import { navigate } from "../services/NavigationService";

const Menu = () => {
  const renderMenuItem: ListRenderItem<Dish> = (dish) => {
    return (
      <ListItem
        key={dish.item.id}
        onPress={() => navigate("DishDetail", { dishId: dish.item.id })}
      >
        <ListItem.Content>
          <Avatar
            size={64}
            rounded
            source={{
              uri: "https://i.inews.co.uk/content/uploads/2021/02/PRI_181328540-760x760.jpg",
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

Menu.title = "Menu";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Menu;
