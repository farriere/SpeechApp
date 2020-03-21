import {
  SavedPhraseListState,
  SavedPhraseListAction,
  AddSavedPhraseAction,
  UpdateSavedPhraseAction,
  RemoveSavedPhraseAction,
} from '../types';
import {SAVED_PHRASE_LIST_ACTION_TYPES} from './actions';

export const initialState: SavedPhraseListState = [];

export const savedPhraseList = (
  state: SavedPhraseListState = initialState,
  action: SavedPhraseListAction,
) => {
  const newState: SavedPhraseListState = state;
  switch (action.type) {
    case SAVED_PHRASE_LIST_ACTION_TYPES.ADD_SAVED_PHRASE:
      action = <AddSavedPhraseAction>action;
      return [...newState, action.savedPhraseData];
    case SAVED_PHRASE_LIST_ACTION_TYPES.UPDATE_SAVED_PHRASE:
      action = <UpdateSavedPhraseAction>action;
      newState[action.index] = action.savedPhraseData;
      return [...newState];
    case SAVED_PHRASE_LIST_ACTION_TYPES.REMOVE_SAVED_PHRASE:
      action = <RemoveSavedPhraseAction>action;
      newState.splice(action.index, 1);
      return [...newState];
    default:
      return newState;
  }
};
