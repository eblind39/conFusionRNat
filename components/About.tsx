import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  ListRenderItem,
} from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { LEADERS } from "../shared/leaders";
import { Leader } from "../types/leader";

const About = () => {
  const History = () => {
    return (
      <Card containerStyle={{ marginTop: 0 }}>
        <Card.Title>Our History</Card.Title>
        <Card.Divider />
        <Text style={{ margin: 10 }}>
          Started in 2010, Ristorante con Fusion quickly established itself as a
          culinary icon par excellence in Hong Kong. With its unique brand of
          world fusion cuisine that can be found nowhere else, it enjoys
          patronage from the A-list clientele in Hong Kong. Featuring four of
          the best three-star Michelin chefs in the world, you never know what
          will arrive on your plate the next time you visit us.
        </Text>
        <Text style={{ margin: 10 }}>
          The restaurant traces its humble beginnings to The Frying Pan, a
          successful chain started by our CEO, Mr. Peter Pan, that featured for
          the first time the world's best cuisines in a pan.
        </Text>
      </Card>
    );
  };

  const renderLeaderItem: ListRenderItem<Leader> = (leader) => {
    return (
      <ListItem key={leader.item.id} style={{ display: "flex", flex: 2 }}>
        <ListItem.Content>
          <Avatar
            size={64}
            rounded
            source={{
              uri: `${leader.item.image}`,
            }}
          />
          <ListItem.Title>{leader.item.name}</ListItem.Title>
          <Text style={{ margin: 10 }}>{leader.item.description}</Text>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <History />
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>Corporate Leadership</Card.Title>
        <Card.Divider />
        <FlatList
          data={LEADERS}
          renderItem={renderLeaderItem}
          keyExtractor={(leader) => leader.id.toString()}
        ></FlatList>
      </Card>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default About;
