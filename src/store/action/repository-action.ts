import { RepositoryActionType } from "../action-type";

export interface SearchRepositoryStartAction {
  type: RepositoryActionType.SEARCH_REPOSITORY
}

export interface SearchRepositorySuccessAction {
  type: RepositoryActionType.SEARCH_REPOSITORY_SUCCESS,
  payload: string[]
}

export interface SearchRepositoryErrorAction {
  type: RepositoryActionType.SEARCH_REPOSITORY_ERROR,
  payload: string;
}

export type SearchRepositoryAction = SearchRepositoryStartAction | SearchRepositorySuccessAction | SearchRepositoryErrorAction;





