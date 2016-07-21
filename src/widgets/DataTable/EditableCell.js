/* @flow weak */

/**
 * mSupply Mobile
 * Sustainable Solutions (NZ) Ltd. 2016
 */

import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

export class EditableCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'N/A',
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    this.setState({
      value: String(this.props.value),
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: String(nextProps.value),
    });
  }

  onEndEditing() {
    this.props.onEndEditing(this.props.target, this.state.value);
  }

  render() {
    const { style, width, textStyle, refCallback, ...textInputProps } = this.props;
    return (
      <View style={[defaultStyles.cell, style, { flex: width }]}>
        <TextInput
          {...textInputProps}
          ref={refCallback}
          style={textStyle}
          onChangeText={(text) => this.setState({ value: text })}
          onEndEditing={() => this.onEndEditing()}
          value={this.state.value}
        />
      </View>
    );
  }
}

EditableCell.propTypes = {
  style: View.propTypes.style,
  refCallback: React.PropTypes.func,
  textStyle: TextInput.propTypes.style,
  width: React.PropTypes.number,
  onEndEditing: React.PropTypes.func,
  target: React.PropTypes.object,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

EditableCell.defaultProps = {
  width: 1,
  value: 'N/A',
};

const defaultStyles = StyleSheet.create({
  cell: {
    flex: 1,
    justifyContent: 'center',
  },
});
