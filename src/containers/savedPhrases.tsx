import * as React from 'react';
import {View, Text, Button} from 'react-native';
import * as PropTypes from 'prop-types';
import {connect, Dispatch} from 'react-redux';
import {
  RootState,
  SavedPhraseListState,
  AddSavedPhraseAction,
  RemoveSavedPhraseAction,
  UpdateSavedPhraseAction,
} from '../store/types';
import {
  addSavedPhrase,
  removeSavedPhrase,
  updateSavedPhrase,
} from '../store/saved-phrase-list/actions';
import { AnyAction } from 'redux';

export interface SavedPhrasesState {}

export interface SavedPhrasesProps {
  navigation: object;
  savedPhrases: SavedPhraseListState;
  addSavedPhrase: Function;
  removeSavedPhrase: Function;
  updateSavedPhrase: Function;
}
class SavedPhrases extends React.Component<
  SavedPhrasesProps,
  SavedPhrasesState
> {
  static propTypes = {
    navigation: PropTypes.object,
    savedPhrases: PropTypes.array,
  };

  constructor(props: SavedPhrasesProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>TEST THIS SHITS</Text>
        <Button
          title="testTitle"
          onPress={() =>
            this.props.addSavedPhrase('Test', '12-20-2020', '12-20-2020')
          }
        />
        <Text>{JSON.stringify(this.props.savedPhrases)}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  savedPhrases: state.savedPhraseList,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    addSavedPhrase: (statement: string, createdAt: string, updatedAt: string) =>
      dispatch(addSavedPhrase(statement, createdAt, updatedAt)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedPhrases);
