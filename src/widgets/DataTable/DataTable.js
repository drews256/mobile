
/* @flow weak */

/**
 * mSupply Mobile
 * Sustainable Solutions (NZ) Ltd. 2016
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { ListView } from 'realm/react-native';

export function DataTable(props) {
  const {
    style,
    listViewStyle,
    renderHeader,
    dataSource,
    refCallback,
    renderRow,
    ...listViewProps,
  } = props;
  return (
    <View style={[defaultStyles.verticalContainer, style]}>
      {typeof renderHeader === 'function' && renderHeader()}
      <ListView
        {...listViewProps}
        ref={refCallback}
        style={[defaultStyles.listview, listViewStyle]}
        dataSource={dataSource}
        renderRow={renderRow}
      />
    </View>
  );
}

DataTable.propTypes = {
  style: View.propTypes.style,
  listViewStyle: React.PropTypes.number,
  refCallback: React.PropTypes.func,
  renderHeader: React.PropTypes.func,
  dataSource: React.PropTypes.object.isRequired,
  renderRow: React.PropTypes.func.isRequired,
};
DataTable.defaultProps = {
  showsVerticalScrollIndicator: true,
  scrollRenderAheadDistance: 5000,
};

const defaultStyles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
  },
  listView: {
    flex: 1,
  },
});
