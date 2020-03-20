import {combineReducers} from 'react-redux';
import {AppState} from './types';

export default store.create(
  combineReducers<AppState>(
    savedPhraseList,
  )
)