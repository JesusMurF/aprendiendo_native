/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  AlertIOS
} from "react-native";

export default class App extends Component {
  state = {
    pokemons: [],
    loading: true
  };

  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const responseJSON = await response.json();
    this.setState({ pokemons: responseJSON.results, loading: false });
  }

  renderItem(data) {
    return (
      <TouchableOpacity onPress={() => AlertIOS.alert(data.item.name)}>
        <View style={styles.list}>
          <Text style={styles.item}>{data.item.name}</Text>
          <Image
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/1103056143322996736/yFwE2PJv_400x400.png"
            }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const { pokemons, loading } = this.state;
    if (!loading) {
      return (
        <ScrollView>
          <FlatList
            data={pokemons}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
          />
        </ScrollView>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  item: {
    color: "#000",
    fontSize: 20
  },
  image: {
    height: 50,
    width: 50
  }
});
