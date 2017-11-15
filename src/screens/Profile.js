import React from 'react';
import { ScrollView } from 'react-native';
import {
  List,
  ListItem,
} from 'react-native-elements';
import { me } from './../routes/data';

const Profile = () => (
  <ScrollView>
      <List>
          <ListItem
            title="Email"
            rightTitle="w3231"
            hideChevron
          />

          <ListItem
            title="Email"
            rightTitle="brian@happysale.co"
            hideChevron
          />
        </List>
    </ScrollView>
);

export default { Profile };
