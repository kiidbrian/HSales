import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { sales } from './../routes/data';

export default class Sales extends Component {
  getSaleDetail(sale) {
    this.props.navigation.navigate('SaleDetail', sale);
  }

  render() {
    return (
      <ScrollView>
        <List>
          {sales.map((sale) => (
            <ListItem
              key={sale.login.username}
              roundAvatar
              avatar={{ uri: sale.picture.thumbnail }}
              title={`${sale.name.first.toUpperCase()} ${sale.name.last.toUpperCase()}`}
              subtitle={sale.email}
              onPress={() => this.getSaleDetail(sale)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
