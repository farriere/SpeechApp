import * as React from 'react';
import {View, Text, Button, TextInput, FlatList} from 'react-native';
import * as PropTypes from 'prop-types';
import {connect, Dispatch} from 'react-redux';
import {RootState, SavedPhraseListState} from '../store/types';
import {
  addSavedPhrase,
  removeSavedPhrase,
} from '../store/saved-phrase-list/actions';
import {AnyAction} from 'redux';
import SavedPhraseBlock from '../components/savedPhraseBlock';

export interface SavedPhrasesState {
  newPhraseText: string;
}

export interface SavedPhrasesProps {
  navigation: object;
  savedPhrases: SavedPhraseListState;
  addSavedPhrase: Function;
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
    this.state = {
      newPhraseText: '',
    };
  }

  onAddButton = () => {
    if (this.state.newPhraseText !== '') {
      this.props.addSavedPhrase(
        this.state.newPhraseText,
        new Date(),
        new Date(),
      );
      this.setState({newPhraseText: ''});
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          placeholder="Type here to add!"
          onChangeText={newPhraseText => this.setState({newPhraseText})}
          value={this.state.newPhraseText}
        />
        <Button title="Add Phrase" onPress={() => this.onAddButton()} />
        <FlatList
          data={this.props.savedPhrases}
          renderItem={listEntry => {
            return (
              <SavedPhraseBlock
                savedPhrase={listEntry.item}
                index={listEntry.index}
              />
            );
          }}
          keyExtractor={(item, index): string => {
            return index.toString();
          }}
        />
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
