import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { Dish } from "../types/dish";
import { DISHES } from "../shared/dishes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/stack";
import { useRoute } from "@react-navigation/native";

interface Props {
  dish: Dish;
}

type DishDetailProps = NativeStackScreenProps<RootStackParamList, "DishDetail">;
type DishDetailScreenRouteProp = DishDetailProps["route"];

const DishDetail = (props: DishDetailProps) => {
  const [dishId, setDishId] = useState<number>(-1);
  const route = useRoute<DishDetailScreenRouteProp>();

  useEffect(() => {
    setDishId(route.params.dishId);
  }, []);

  const RenderDish = ({ dish }: Props) => {
    return dish != null ? (
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: `${dish.image}`,
          }}
        />
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    ) : (
      <View></View>
    );
  };

  return <RenderDish dish={DISHES.filter((dish) => dish.id === dishId)[0]} />;
};

DishDetail.title = "Dish Details";

export default DishDetail;
