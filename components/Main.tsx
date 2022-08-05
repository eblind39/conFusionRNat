import React, { useState } from "react";
import { View } from "react-native";
import Menu from "./Menu";
import { Dish } from "../types/dish";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";

const Main = () => {
  const [dishes, setDishes] = useState<Dish[]>(DISHES);
  const [selectedDish, setSelectedDish] = useState<number | null>(null);

  const onDishSelect = (dishId: number) => {
    setSelectedDish(dishId);
  };

  return (
    <View>
      <Menu dishes={dishes} onPress={(dishId) => onDishSelect(dishId)} />
      <DishDetail
        dish={dishes.filter((dish) => dish.id === selectedDish)[0]}
      ></DishDetail>
    </View>
  );
};

export default Main;
