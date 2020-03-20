import {
  SavedPhraseListState,
  SavedPhraseListAction,
  AddSavedPhraseAction,
  UpdateSavedPhraseAction,
  RemoveSavedPhraseAction,
} from '../types';
import {SAVED_PHRASE_LIST_ACTION_TYPES} from './actions';

export const initialState: SavedPhraseListState = [];

const savedPhraseList = (
  state: SavedPhraseListState = initialState,
  action: SavedPhraseListAction,
) => {
  const newState: SavedPhraseListState = {...state};
  switch (action.type) {
    case SAVED_PHRASE_LIST_ACTION_TYPES.ADD_SAVED_PHRASE:
      const {statement, createdAt, updatedAt} = <AddSavedPhraseAction>action;
      return [...newState, {statement, createdAt, updatedAt}];
    case SAVED_PHRASE_LIST_ACTION_TYPES.UPDATE_SAVED_PHRASE:
      const {index, statement, createdAt, updatedAt} = <UpdateSavedPhraseAction>action;
      newState[index] = {statement, createdAt, updatedAt};
      return [...newState];
    case SAVED_PHRASE_LIST_ACTION_TYPES.REMOVE_SAVED_PHRASE:
      const {index} = <RemoveSavedPhraseAction>action;
      newState.splice(index, 1);
      return [...newState];
    default:
      return newState;
  }
};
