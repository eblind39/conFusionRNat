import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { Dish } from "../types/dish";
import { Leader } from "../types/leader";
import { Promotion } from "../types/promotion";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { ScrollView } from "react-native-gesture-handler";

interface RenderItemProps {
  item: Leader | Dish | Promotion;
}

const RenderItem = ({ item }: RenderItemProps) => {
  return item != null ? (
    <Card containerStyle={{ marginTop: 15 }}>
      <Card.FeaturedTitle style={{ color: "#2020bf" }}>
        {item.name}
      </Card.FeaturedTitle>
      {item.hasOwnProperty("designation") ? (
        <Card.FeaturedSubtitle style={{ color: "#2a2a9f" }}>
          {item.designation}
        </Card.FeaturedSubtitle>
      ) : null}
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: `${item.image}`,
        }}
      />
      <Text style={{ margin: 10 }}>{item.description}</Text>
    </Card>
  ) : (
    <View></View>
  );
};

const Home = () => {
  return (
    <ScrollView>
      <RenderItem item={DISHES.filter((dish) => dish.featured)[0]} />
      <RenderItem item={PROMOTIONS.filter((promo) => promo.featured)[0]} />
      <RenderItem item={LEADERS.filter((leader) => leader.featured)[0]} />
    </ScrollView>
  );
};

Home.title = "Home";

export default Home;
