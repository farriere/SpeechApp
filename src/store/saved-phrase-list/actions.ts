import {
  AddSavedPhraseAction,
  UpdateSavedPhraseAction,
  RemoveSavedPhraseAction,
} from '../types';

export enum SAVED_PHRASE_LIST_ACTION_TYPES {
  ADD_SAVED_PHRASE = 'SAVED_PHRASE_LIST/ADD_SAVED_PHRASE',
  REMOVE_SAVED_PHRASE = 'SAVED_PHRASE_LIST/REMOVE_SAVED_PHRASE',
  UPDATE_SAVED_PHRASE = 'SAVED_PHRASE_LIST/UPDATE_SAVED_PHRASE',
}

export const addSavedPhrase = (
  statement: string,
  createdAt: string,
  updatedAt: string,
): AddSavedPhraseAction => ({
  type: SAVED_PHRASE_LIST_ACTION_TYPES.ADD_SAVED_PHRASE,
  savedPhraseData: {
    statement,
    createdAt,
    updatedAt,
  },
});

export const updateSavedPhrase = (
  index: number,
  statement: string,
  createdAt: string,
  updatedAt: string,
): UpdateSavedPhraseAction => ({
  type: SAVED_PHRASE_LIST_ACTION_TYPES.UPDATE_SAVED_PHRASE,
  index: index,
  savedPhraseData: {
    statement,
    createdAt,
    updatedAt,
  },
});

export const removeSavedPhrase = (index: number): RemoveSavedPhraseAction => ({
  type: SAVED_PHRASE_LIST_ACTION_TYPES.REMOVE_SAVED_PHRASE,
  index: index,
});
