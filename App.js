/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, AlertIOS } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmitText = this.handleSubmitText.bind(this);
  }

  state = {
    texto: "Cual es tu nombre"
  };

  handleTextChange(texto) {
    this.setState({
      texto
    });
  }

  handleSubmitText() {
    AlertIOS.alert('Tu nombre es ', `${this.state.texto}!!` );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="¿Como te llamas...?"
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.handleSubmitText}
        />
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    fontSize: 20
  }
});
