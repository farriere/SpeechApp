import * as React from 'react';
import {View, Text} from 'react-native';
import * as PropTypes from 'prop-types';

export interface SavedPhrasesState {}

export interface SavedPhrasesProps {}

class SavedPhrases extends React.Component<
  SavedPhrasesState,
  SavedPhrasesProps
> {
  static propTypes = {};

  constructor(props: SavedPhrasesProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>TEST THIS SHITS</Text>
      </View>
    );
  }
}

export default SavedPhrases;
