import React from "react";
import { View, Text } from "react-native";
import { AppContext } from "../../AppProvider";
import Swiper from "../../components/Swiper/Swiper";
import { Card, Button } from "react-native-elements";
import { MapView } from "expo";
import HTML from "react-native-render-html";

export class SwipeScreen extends React.Component {
  formatJobDesc = desc => {
    if (desc.length > 200) {
      desc = desc.substr(0, 150) + "...";
    }
    return desc;
  };
  renderCard = job => {
    const jobDesc = this.formatJobDesc(job.description);
    return (
      <Card title={job.title} containerStyle={{ height: 600 }}>
        <View style={{ height: 300, marginBottom: 20 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={true}
            initialRegion={{
              longitude: -122,
              latitude: 37,
              longitudeDelta: 0.04,
              latitudeDelta: 0.09
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10
          }}
        >
          <Text>{job.company}</Text>
          <Text>{job.type}</Text>
        </View>
        <HTML html={jobDesc} />
      </Card>
    );
  };

  renderNoMoreCards = () => {
    return (
      <Card title="No more jobs!">
        <Button
          title="Back To Map"
          icon={{ name: "my-location", color: "white" }}
          buttonStyle={{ backgroundColor: "#E43F3F", height: 50 }}
          onPress={() => {
            this.props.navigation.navigate("map");
          }}
        />
      </Card>
    );
  }

  render() {
    return (
      <View>
        <AppContext.Consumer>
          {({ results, likeJob }) => {
            return (
              <Swiper
                data={results}
                renderCard={this.renderCard}
                renderNoMoreCards={this.renderNoMoreCards}
                keyProp="id"
                onSwipeRight={likeJob}
              />
            );
          }}
        </AppContext.Consumer>
      </View>
    );
  }
}
