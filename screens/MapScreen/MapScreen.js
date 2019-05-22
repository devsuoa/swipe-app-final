import React from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";
import { Button } from "react-native-elements";
import styles from "./MapScreen.styles";
import axios from "axios";
import { AppContext } from "../../AppProvider";

const initialRegion = {
  longitude: -122,
  latitude: 37,
  longitudeDelta: 0.04,
  latitudeDelta: 0.09
};

export class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: initialRegion
    };
  }

  onRegionChangeComplete = region => {
    this.setState({
      region
    });
  };

  fetchJobs = async () => {
    const latitude = this.state.region.latitude;
    const longitude = this.state.region.longitude;

    try {
      const response = await axios.get(
        `https://jobs.github.com/positions.json?lat=${latitude}&long=${longitude}`
      );
      const jobs = response.data.slice(0, 10);
      return jobs;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <AppContext.Consumer>
            {({ addResults }) => {
              return (
                <Button
                  title="Find Jobs"
                  buttonStyle={styles.buttonStyles}
                  onPress={async () => {
                      const jobs = await this.fetchJobs();
                      addResults(jobs);
                      this.props.navigation.navigate("swipe");
                  }}
                />
              );
            }}
          </AppContext.Consumer>
        </View>
      </View>
    );
  }
}
