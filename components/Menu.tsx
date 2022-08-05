import React from "react";
import { StyleSheet, FlatList, ListRenderItem, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem, Avatar } from "react-native-elements";
import { Dish } from "../types/dish";

interface Props {
  dishes: Dish[];
  onPress(dishId: number): void;
}

const Menu = ({ dishes, onPress }: Props) => {
  const renderMenuItem: ListRenderItem<Dish> = (dish) => {
    return (
      <ListItem key={dish.item.id} onPress={() => onPress(dish.item.id)}>
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
        data={dishes}
        renderItem={renderMenuItem}
        keyExtractor={(dish) => dish.id.toString()}
      ></FlatList>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Menu;
