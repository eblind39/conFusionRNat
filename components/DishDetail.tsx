import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { Dish } from "../types/dish";

interface Props {
  dish: Dish;
}

const RenderDish = ({ dish }: Props) => {
  return dish != null ? (
    <Card containerStyle={{ marginTop: 15 }}>
      <Card.Title>{dish.name}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: "https://i.inews.co.uk/content/uploads/2021/02/PRI_181328540-760x760.jpg",
        }}
      />
      <Text style={{ margin: 10 }}>{dish.description}</Text>
    </Card>
  ) : (
    <View></View>
  );
};

const DishDetail = ({ dish }: Props) => <RenderDish dish={dish} />;

export default DishDetail;
