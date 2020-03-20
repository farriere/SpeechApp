export type SavedPhrase = {
  statement: string;
  createdAt: string;
  updatedAt: string;
};

export type SavedPhraseListState = SavedPhrase[];

export type AddSavedPhraseAction = {
  type: string;
  savedPhraseData: SavedPhrase;
};

export type UpdateSavedPhraseAction = {
  type: string;
  index: number;
  savedPhraseData: SavedPhrase;
};

export type RemoveSavedPhraseAction = {
  type: string;
  index: number;
};

export type SavedPhraseListAction =
  | AddSavedPhraseAction
  | UpdateSavedPhraseAction
  | RemoveSavedPhraseAction;

export type AppState = {
  savedPhraseList: SavedPhraseListState;
};
