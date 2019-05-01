/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Text, FlatList, ActivityIndicator, AlertIOS } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Right,
  Thumbnail,
  Left
} from "native-base";

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
      <ListItem onPress={() => AlertIOS.alert(data.item.name)}>
        <Left>
          <Text>{data.item.name}</Text>
        </Left>
        <Right>
          <Thumbnail
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/1103056143322996736/yFwE2PJv_400x400.png"
            }}
          />
        </Right>
      </ListItem>
    );
  }

  render() {
    const { pokemons, loading } = this.state;
    if (!loading) {
      return (
        <Container>
          <Content>
            <FlatList
              data={pokemons}
              renderItem={this.renderItem}
              keyExtractor={item => item.name}
            />
          </Content>
        </Container>
      );
    } else {
      return <ActivityIndicator size="large" color="#000000" />;
    }
  }
}
