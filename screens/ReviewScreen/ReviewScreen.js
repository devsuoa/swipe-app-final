import React from "react";
import { View, Text, Linking } from "react-native";
import { AppContext } from "../../AppProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Button } from "react-native-elements";
import { MapView } from "expo";

export class ReviewScreen extends React.Component {
  renderLikedJobs = likedJobs => {
    return likedJobs.map(job => {
      const { company, created_at, url, title, id } = job;

      return (
        <Card title={title} titleStyle={{ fontSize: 15 }} key={id}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={true}
              scrollEnabled={false}
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
              marginTop: 10,
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Text style={{ fontStyle: "italic" }}>{company}</Text>
            <Text style={{ fontStyle: "italic" }}>{created_at}</Text>
          </View>
          <Button
            title="Apply Now!"
            onPress={() => Linking.openURL(url)}
            buttonStyle={{ backgroundColor: "#E43F3F" }}
          />
        </Card>
      );
    });
  };
  render() {
    return (
      <ScrollView>
        <AppContext.Consumer>
          {({ likedJobs }) => {
            return this.renderLikedJobs(likedJobs);
          }}
        </AppContext.Consumer>
      </ScrollView>
    );
  }
}
