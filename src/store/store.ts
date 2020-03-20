import {combineReducers, createStore} from 'redux';
import {AppState} from './types';
import {savedPhraseList} from './saved-phrase-list/reducer';

const reducers = combineReducers<AppState>({
  savedPhraseList: savedPhraseList,
});

const store: AppState = createStore(reducers);

export default store;
