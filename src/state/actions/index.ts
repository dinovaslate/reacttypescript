import { ActionType } from '../action-types/index';

interface SEARCH_REPOSITORIES {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SEARCH_REPOSITORIES_ERROR {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
interface SEARCH_REPOSITORIES_SUCCESS {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
export type Action =
  | SEARCH_REPOSITORIES
  | SEARCH_REPOSITORIES_ERROR
  | SEARCH_REPOSITORIES_SUCCESS;
