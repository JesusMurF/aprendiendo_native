/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  box1: {
    height: 120,
    width: 100,
    backgroundColor: "red"
  },
  box2: {
    height: 120,
    width: 100,
    backgroundColor: "blue"
  },
  box3: {
    height: 120,
    width: 100,
    backgroundColor: "green"
  }
});
