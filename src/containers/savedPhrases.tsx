import * as React from 'react';
import {View, Text} from 'react-native';
import * as PropTypes from 'prop-types';

export interface SavedPhrasesState {}

export interface SavedPhrasesProps {
  navigation: object;
}

class SavedPhrases extends React.Component<
  SavedPhrasesState,
  SavedPhrasesProps
> {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props: SavedPhrasesProps) {
    super(props);
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
