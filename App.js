/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class Gato extends Component {
  render() {
    return <Text style={styles.gato}>Hola soy {this.props.nombre}!</Text>;
  }
}

export default class App extends Component {
  state = {
    saludo: "Hola mundo!",
    nombre: "Gato con botas"
  };

  render() {
    return (
      <View style={styles.container}>
        <Gato nombre={this.state.nombre} />
        <Image
          style={{ width: 300, height: 300 }}
          source={require("./assets/gato-asustado.png")}
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.holaMundo}>{this.state.saludo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddeeff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "red"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  holaMundo: {
    color: "red",
    fontSize: 40
  },
  gato: {
    marginBottom: 40,
    fontSize: 40
  }
});
