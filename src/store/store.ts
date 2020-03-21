import {combineReducers, createStore} from 'redux';
import {RootState} from './types';
import {savedPhraseList} from './saved-phrase-list/reducer';

const reducers = combineReducers<RootState>({
  savedPhraseList: savedPhraseList,
});

const store = createStore(reducers);

export default store;
