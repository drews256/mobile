/* @flow weak */

/**
 * OfflineMobile Android Index
 * Sustainable Solutions (NZ) Ltd. 2016
 */

import React, {
  Text,
  View,
} from 'react-native';

export default function CustomerInvoicesPage(props) {
  return (
    <View style={props.style}>
      <Text>Customer Invoices go here.</Text>
    </View>
  );
}

CustomerInvoicesPage.propTypes = {
  style: View.propTypes.style,
};
