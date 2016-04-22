/* @flow weak */

/**
 * OfflineMobile Android Index
 * Sustainable Solutions (NZ) Ltd. 2016
 */

import React, {
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Button } from '../widgets';

export default function StocktakesPage(props) {
  return (
    <View style={props.style}>
      <Text>Stocktakes go here.</Text>
      <Button
        text="Edit"
        onPress={Actions.pop}
      />
      <Button
        text="New"
        onPress={Actions.stocktakeManager}
      />
    </View>
  );
}

StocktakesPage.propTypes = {
  style: View.propTypes.style,
};
