import * as React from 'react';
import PropTypes from 'prop-types';
import {SavedPhrase, RootState} from '../store/types';
import {TouchableOpacity, View, StyleSheet, Text, Alert} from 'react-native';
import {ColorEnum} from '../styles/AppColors';
import Tts from 'react-native-tts';
import {connect, Dispatch} from 'react-redux';
import {AnyAction} from 'redux';
import {removeSavedPhrase} from '../store/saved-phrase-list/actions';

interface savedPhraseBlockState {}

interface savedPhraseBlockProps {
  savedPhrase: SavedPhrase;
  index: number;
  removeSavedPhrase: Function;
}

class SavedPhraseBlock extends React.Component<
  savedPhraseBlockProps,
  savedPhraseBlockState
> {
  constructor(props: savedPhraseBlockProps) {
    super(props);
  }

  static propTypes = {
    savedPhrase: PropTypes.object,
    index: PropTypes.number,
  };

  longPressDeletion = () => {
    Alert.alert(
      'Deleting',
      'Are you sure you want to delete: "' +
        this.props.savedPhrase.statement +
        '"',
      [
        {
          text: 'Delete',
          onPress: () => this.props.removeSavedPhrase(this.props.index),
        },
        {text: 'Cancel', onPress: () => {}},
      ],
    );
  };

  activateTts = () => {
    Tts.setDefaultRate(0.7);
    Tts.stop();
    Tts.speak(this.props.savedPhrase.statement);
  };

  render() {
    return (
      <TouchableOpacity>
        <View>
          <Text
            style={styles.blockedText}
            onPress={this.activateTts}
            onLongPress={this.longPressDeletion}>
            {this.props.savedPhrase.statement}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  blockedText: {
    borderColor: ColorEnum.black,
    borderBottomWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
  },
});

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    removeSavedPhrase: (index: number) => dispatch(removeSavedPhrase(index)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedPhraseBlock);
