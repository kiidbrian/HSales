import React from 'react';
import { ScrollView } from 'react-native';
import {
  Tile,
  List,
  ListItem,
} from 'react-native-elements';

const SaleDetail = ({ props }) => {
  const { picture, name, email } = props.navigation.state.params;

  return (
      <ScrollView>
        <Tile
          imageSrc={{uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />

          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
        </List>
      </ScrollView>
    );
}

export default { SaleDetail };
