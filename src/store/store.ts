import {combineReducers, createStore, applyMiddleware} from 'redux';
import {RootState} from './types';
import {savedPhraseList} from './saved-phrase-list/reducer';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'savedPhraseList',
  ]
}

const reducers = combineReducers<RootState>({
  savedPhraseList: savedPhraseList,
});

const persistedReducer = persistReducer(persistConfig, reducers);


const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
  )
);

let persistor = persistStore(store);

export {
  store,
  persistor
};
