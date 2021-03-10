import { ActionType } from './../action-types';


interface SearchRepositoryAction {
    type: ActionType.SEARCH_REPOSITORIES
}
interface SearchRepositorySuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}
interface SearchRepositoryErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR
    payload: string
}

export type Action = SearchRepositoryAction | SearchRepositorySuccessAction | SearchRepositoryErrorAction

