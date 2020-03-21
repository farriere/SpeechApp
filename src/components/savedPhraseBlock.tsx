import * as React from 'react';
import PropTypes from 'prop-types';
import {SavedPhrase} from '../store/types';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {ColorEnum} from '../styles/AppColors';
import Tts from 'react-native-tts';

interface savedPhraseBlockState {}

interface savedPhraseBlockProps {
  savedPhrase: SavedPhrase;
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
  };

  render() {
    return (
      <TouchableOpacity>
        <View>
          <Text
            style={styles.blockedText}
            onPress={Tts.speak.bind(this, this.props.savedPhrase.statement)}>
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
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
  },
});

export default SavedPhraseBlock;
