import React, { Component, useState } from "react";
import Menu from "./Menu";
import { Dish } from "../types/dish";
import { DISHES } from "../shared/dishes";

const Main = () => {
  const [dishes, setDishes] = useState<Dish[]>(DISHES);

  return <Menu dishes={dishes} />;
};

export default Main;
