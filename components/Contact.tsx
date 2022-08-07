import { Text } from "react-native";
import { Card } from "react-native-elements";

const Contact = () => {
  return (
    <Card containerStyle={{ marginTop: 15 }}>
      <Card.Title>Contact Information</Card.Title>
      <Card.Divider />
      <Text style={{ margin: 10 }}>121, Clear Water Bay Road</Text>
      <Text style={{ margin: 10 }}>Clear Water Bay, Kowloon</Text>
      <Text style={{ margin: 10 }}>HONG KONG</Text>
      <Text style={{ margin: 10 }}>Tel: +852 1234 5678</Text>
      <Text style={{ margin: 10 }}>Fax: +852 8765 4321</Text>
      <Text style={{ margin: 10 }}>Email:confusion@food.net</Text>
    </Card>
  );
};

Contact.title = "Contact Us";

export default Contact;
